// import { Router, Request, Response } from "express";
// import multer from "multer";
// import path from "path";
// import dotenv from "dotenv";
// import * as ftp from "basic-ftp";
// import { envVars } from "../config/env";
// import { Readable } from "stream";

// dotenv.config();

// const router = Router();
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// router.post("/", upload.any(), async (req: Request, res: Response) => {
//   const files = req.files as Express.Multer.File[];

//   if (!files || files.length === 0) {
//     return res.status(400).json({ message: "No file uploaded" });
//   }

//   const client = new ftp.Client();
//   client.ftp.verbose = false;

//   try {
//     await client.access({
//       host: envVars.CPANEL_HOST,
//       user: envVars.CPANEL_USER,
//       password: envVars.CPANEL_PASS,
//       secure: false,
//     });

//     const uploadedUrls: string[] = [];

//     for (const file of files) {
//       const remoteFileName = `${Date.now()}_${file.originalname}`;
//       const remotePath = path.posix.join(process.env.CPANEL_UPLOAD_PATH!, remoteFileName);

//       const stream = Readable.from(file.buffer);
//       await client.uploadFrom(stream, remotePath);

//       const imageUrl = `https://${process.env.CPANEL_DOMAIN}/images/${remoteFileName}`;
//       uploadedUrls.push(imageUrl);
//     }

  
//     const responseData =
//       uploadedUrls.length === 1
//         ? { success: true, url: uploadedUrls[0] }
//         : { success: true, urls: uploadedUrls };

//     res.json(responseData);
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Upload failed" });
//   } finally {
//     client.close();
//   }
// });

// export default router;


import { Router, Request, Response } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = Router();

// ====================================
// 1️⃣ Define Local Upload Directory
// ====================================
const uploadDir = path.join(__dirname, "../../public/images");

// Ensure directory exists (create if missing)
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// ====================================
// 2️⃣ Configure Multer Storage
// ====================================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}_${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// ====================================
// 3️⃣ Upload Route
// ====================================
router.post("/", upload.any(), async (req: Request, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[];

    if (!files || files.length === 0) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    // Generate accessible URLs for each uploaded file
    const uploadedUrls = files.map((file) => {
      const fileName = path.basename(file.filename);
      return `${req.protocol}://${req.get("host")}/images/${fileName}`;
    });

    const responseData =
      uploadedUrls.length === 1
        ? { success: true, url: uploadedUrls[0] }
        : { success: true, urls: uploadedUrls };

    res.json(responseData);
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ success: false, message: "Upload failed" });
  }
});

export default router;
