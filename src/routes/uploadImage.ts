import { Router, Request, Response } from "express";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
import * as ftp from "basic-ftp";
import { envVars } from "../config/env";
import { Readable } from "stream";

dotenv.config();

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.any(), async (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];

  // যদি কোনো ফাইল না থাকে
  if (!files || files.length === 0) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const client = new ftp.Client();
  client.ftp.verbose = false;

  try {
    await client.access({
      host: envVars.CPANEL_HOST,
      user: envVars.CPANEL_USER,
      password: envVars.CPANEL_PASS,
      secure: false,
    });

    const uploadedUrls: string[] = [];

    for (const file of files) {
      const remoteFileName = `${Date.now()}_${file.originalname}`;
      const remotePath = path.posix.join(process.env.CPANEL_UPLOAD_PATH!, remoteFileName);

      const stream = Readable.from(file.buffer);
      await client.uploadFrom(stream, remotePath);

      const imageUrl = `https://${process.env.CPANEL_DOMAIN}/images/${remoteFileName}`;
      uploadedUrls.push(imageUrl);
    }

    // ইউজার যদি একটা ছবি দেয় → single URL রিটার্ন করবে
    // একাধিক ছবি দিলে → array রিটার্ন করবে
    const responseData =
      uploadedUrls.length === 1
        ? { success: true, url: uploadedUrls[0] }
        : { success: true, urls: uploadedUrls };

    res.json(responseData);
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ success: false, message: "Upload failed" });
  } finally {
    client.close();
  }
});

export default router;
