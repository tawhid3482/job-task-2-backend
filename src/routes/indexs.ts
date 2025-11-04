import { Router } from "express";
import uploadImageRouter from "./uploadImage";

const router = Router();

router.use("/upload-image", uploadImageRouter);

export const imageUpload =  router ;
