import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { perfectionServices } from "./perfections.service";

export const createPerfections = catchAsync(
  async (req: Request, res: Response) => {
    const result = await perfectionServices.createPerfection(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "perfections created successfully",
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
