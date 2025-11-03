import multer from "multer";


// Multer storage in memory (we'll upload to DO)
const storage = multer.memoryStorage();
export const upload = multer({ storage });
