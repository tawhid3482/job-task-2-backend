import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { perfectionSchema } from "./perfections.validation";
import { perfectionsController } from "./perfections.controller";
import { upload } from "../../helpers/fileUploader";
const router = Router();

router.post(
  "/create",
  upload.single("Image"), // 1️⃣ multer file upload
  (req, res, next) => {
    try {
      // 2️⃣ যদি bodyData নামে JSON পাঠাও, তাহলে এটাকে parse করে req.body তে রাখো
      if (req.body.bodyData) {
        req.body = JSON.parse(req.body.bodyData);
      }
      console.log("Parsed Body:", req.body);
      console.log("Uploaded File:", req.file);
      next();
    } catch (err) {
      next(err);
    }
  },
  validateRequest(perfectionSchema), // 3️⃣ এখন validation হবে ঠিকঠাক
  perfectionsController.createPerfections // 4️⃣ তারপর controller এ যাবে
);

router.patch(
  "/:id",
  perfectionsController.updatePerfections
);

router.get("/", perfectionsController.getAllPerfection);

export const PerfectionsRoutes = router;
