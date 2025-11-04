import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { sliderController } from "./slider.controller";
import { sliderSchema } from "./slider.validation";

const router = Router();



router.post(
  "/create",
  validateRequest(sliderSchema),
  sliderController.createSlider
);

router.get("/", sliderController.getAllSlider);

export const sliderRoutes = router;
