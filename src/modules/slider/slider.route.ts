import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { sliderController } from "./slider.controller";
import { sliderSchema } from "./slider.validation";
import { fileUploader } from "../../helpers/fileUploader";
import { parseBodyData } from "../../helpers/parseBodyData";
const router = Router();

router.post(
  "/create",
  fileUploader.doc,
  parseBodyData,
  validateRequest(sliderSchema),
  sliderController.createslider
);

router.get("/", sliderController.getAllSlider);

export const sliderRoutes = router;
