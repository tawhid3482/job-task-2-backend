import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { enquirySchema } from "./Enquiry.validation";
import { EnquiryController } from "./Enquiry.controller";

const router = Router();

router.post(
  "/create",
  validateRequest(enquirySchema),
  EnquiryController.createEnquiry
);

router.get("/", EnquiryController.getAllEnquirys);

export const EnquiryRoutes = router;
