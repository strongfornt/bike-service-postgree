import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catch-async";
import sendResponse from "../../utils/sendResponse";
import { bikeServices } from "./bike.service";

const createBike = catchAsync(async (req, res, next) => {
  const payload = req?.body;
  const result = await bikeServices.createBikeIntoDB(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

const getAllBike = catchAsync(async (req, res, next) => {
  const result = await bikeServices.getAllBikeIntoDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});
const getBike = catchAsync(async (req, res, next) => {
  const { bikeId } = req.params;

  const result = await bikeServices.getBikeIntoDB(bikeId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

export const bikeController = {
  createBike,
  getAllBike,
  getBike,
};
