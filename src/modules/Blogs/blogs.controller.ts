import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { blogsServices } from "./blogs.service";

export const createblogs = catchAsync(
  async (req: Request, res: Response) => {
    const result = await  blogsServices.createblogs(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: " blogs created successfully",
      data: result,
    });
  }
);

const getAllblogss = catchAsync(async (req: Request, res: Response) => {
  const result = await  blogsServices.getAllblogs();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " blogs got successfully",
    data: result,
  });
});

export const  blogsController = {
  createblogs,
  getAllblogss,
};
