import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { testimonialSchema } from "./testimonials.validation";
import { testimonialsController } from "./testimonials.controller";
const router = Router();

router.post(
  "/create",
  validateRequest(testimonialSchema),
  testimonialsController.createTestimonials
);

router.get("/", testimonialsController.getAllTestimonial);

router.delete(
  "/delete/:id",
  testimonialsController.deleteTestimonial
);
export const testimonialsRoutes = router;
