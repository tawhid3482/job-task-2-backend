import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { scheduleSchema } from "./schedule.validation";
import { ScheduleController } from "./schedule.controller";


const router = Router();

router.post(
  "/create",
  validateRequest(scheduleSchema),
  ScheduleController.createSchedule
);

router.get("/", ScheduleController.getAllSchedules);

export const ScheduleRoutes = router;
