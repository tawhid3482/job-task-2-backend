// import { Router } from "express";
// import uploadImageRouter from "./uploadImage";

// const router = Router();

// router.use("/upload-image", uploadImageRouter);

// export const imageUpload =  router ;

import { Router } from "express";
import uploadImageRouter from "./uploadImage";

const router = Router();

// All image upload endpoints: /api/v1/upload-image
router.use("/upload-image", uploadImageRouter);

export const imageUpload = router;
