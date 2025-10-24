import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { photoSchema } from "./media.validation";
import { mediaController } from "./media.controller";

const router = Router();

router.post(
  "/create/photo",
  validateRequest(photoSchema),
  mediaController.createmediaPhoto
);

router.get("/photo", mediaController.getAllmediaPhoto);

router.post(
  "/create/video",
  validateRequest(photoSchema),
  mediaController.createmediaVideo
);

router.get("/video", mediaController.getAllmediaVideo);

export const mediaRoutes = router;
