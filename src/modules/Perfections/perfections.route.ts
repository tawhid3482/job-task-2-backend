import { Router } from "express";
import { perfectionsController } from "./perfections.controller";
const router = Router();

router.post(
  "/create",
  // validateRequest(perfectionSchema), 
  perfectionsController.createPerfections 
);

router.get("/", perfectionsController.getAllPerfection);

router.patch(
  "/:id",
  perfectionsController.updatePerfections
);
router.delete(
  "/:id",
  perfectionsController.deletePerfections
);


export const PerfectionsRoutes = router;
