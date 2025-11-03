import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { perfectionServices } from "./perfections.service";
import uploadToDigitalOcean from "../../helpers/uploadToDigitalOcean";

export const createPerfections = catchAsync(
  async (req: Request, res: Response) => {
    const file = req.file;
    console.log("Uploaded file:", file); // Multer file object
    console.log("Req body:", req.body);

    if (!file) {
      throw new Error("Image file is missing");
    }

    // Upload to DigitalOcean
    const uploadedFileUrl = await uploadToDigitalOcean(file);

    // Add uploaded URL to body
    req.body.doc = uploadedFileUrl;

    // Save to database
    const result = await perfectionServices.createPerfection(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Perfection created successfully",
      data: result,
    });
  }
);

export const updatePerfections = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const data = req.body;
    const result = await perfectionServices.updatePerfection(id, data);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "perfections created successfully",
      data: result,
    });
  }
);

const getAllPerfection = catchAsync(async (req: Request, res: Response) => {
  const result = await perfectionServices.getAllPerfection();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "perfections got successfully",
    data: result,
  });
});

export const perfectionsController = {
  createPerfections,
  getAllPerfection,
  updatePerfections,
};
