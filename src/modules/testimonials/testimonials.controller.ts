import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { testimonialsServices } from "./testimonials.service";

export const createTestimonials = catchAsync(
  async (req: Request, res: Response) => {
    const result = await testimonialsServices.createtestimonials(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "testimonials created successfully",
      data: result,
    });
  }
);

const getAllTestimonial = catchAsync(async (req: Request, res: Response) => {
  const result = await testimonialsServices.getAlltestimonials();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "testimonials got successfully",
    data: result,
  });
});

export const testimonialsController = {
  createTestimonials,
  getAllTestimonial,
};
