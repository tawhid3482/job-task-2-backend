import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { sliderServices } from "./slider.service";
import uploadToDigitalOcean from "../../helpers/uploadToDigitalOcean";

export const createslider = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const file = req.file;
  if (!file) {
    throw new Error("image file is missing");
  }
  const fileUrl = await uploadToDigitalOcean(file);
  req.body.Image = fileUrl;
  const result = await sliderServices.createslider(data);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "slider created successfully",
    data: result,
  });
});

const getAllSlider = catchAsync(async (req: Request, res: Response) => {
  const result = await sliderServices.getAllslider();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "slider got successfully",
    data: result,
  });
});

export const sliderController = {
  createslider,
  getAllSlider,
};
