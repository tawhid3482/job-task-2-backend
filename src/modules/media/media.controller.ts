import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { mediaServices } from "./media.service";

export const createmediaPhoto = catchAsync(
  async (req: Request, res: Response) => {
    const result = await  mediaServices.createmediaPhoto(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: " media created successfully",
      data: result,
    });
  }
);

const getAllmediaPhoto = catchAsync(async (req: Request, res: Response) => {
  const result = await  mediaServices.getAllmediaPhoto();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " media got successfully",
    data: result,
  });
});
export const createmediaVideo = catchAsync(
  async (req: Request, res: Response) => {
    const result = await  mediaServices.createmediaVideo(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: " media created successfully",
      data: result,
    });
  }
);

const getAllmediaVideo = catchAsync(async (req: Request, res: Response) => {
  const result = await  mediaServices.getAllmediaVideo();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " media got successfully",
    data: result,
  });
});

export const  mediaController = {
 createmediaPhoto,
 createmediaVideo,
 getAllmediaPhoto,
 getAllmediaVideo
};
