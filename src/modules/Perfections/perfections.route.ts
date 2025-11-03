import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { perfectionSchema } from "./perfections.validation";
import { perfectionsController } from "./perfections.controller";
import { upload } from "../../helpers/fileUploader";
const router = Router();

router.post(
  "/create",
  upload.single("Image"), // First handle file upload
  (req, res, next) => {
    console.log("Multer processed files:", req.file);
    console.log("Multer processed body:", req.body);
    next();
  },
  validateRequest(perfectionSchema), // Then validate
  perfectionsController.createPerfections
);
router.patch(
  "/:id",
  perfectionsController.updatePerfections
);

router.get("/", perfectionsController.getAllPerfection);

export const PerfectionsRoutes = router;
