import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { perfectionSchema } from "./perfections.validation";
import { perfectionsController } from "./perfections.controller";
const router = Router();

router.post(
  "/create",
  validateRequest(perfectionSchema),
  perfectionsController.createPerfections
);
router.patch(
  "/:id",
  perfectionsController.updatePerfections
);

router.get("/", perfectionsController.getAllPerfection);

export const PerfectionsRoutes = router;
