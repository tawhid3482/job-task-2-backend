import { Router, Request, Response } from "express";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
import * as ftp from "basic-ftp";
import fs from "fs";
import { envVars } from "../config/env";

dotenv.config();

const router = Router();
const upload = multer({ dest: "tmp/" });

router.post("/", upload.single("image"), async (req: Request, res: Response) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });

  const client = new ftp.Client();
  client.ftp.verbose = false;

  try {
    await client.access({
      host: envVars.CPANEL_HOST,
      user: envVars.CPANEL_USER,
      password: envVars.CPANEL_PASS,
      secure: false,
    });

    const localFile = req.file.path;
    const remoteFileName = `${Date.now()}_${req.file.originalname}`;
    const remotePath = path.posix.join(
      process.env.CPANEL_UPLOAD_PATH!,
      remoteFileName
    );

    await client.uploadFrom(localFile, remotePath);

    const imageUrl = `https://${process.env.CPANEL_DOMAIN}/images/${remoteFileName}`;

    // ✅ লোকাল tmp ফাইল delete করা
    try {
      await fs.promises.unlink(localFile);
    } catch (err) {
      console.warn("Failed to delete temp file:", err);
    }

    res.json({ success: true, url: imageUrl });
  } catch (err) {
    res.status(500).json({ success: false, message: "Upload failed" });
  } finally {
    client.close();
  }
});

export default router;
