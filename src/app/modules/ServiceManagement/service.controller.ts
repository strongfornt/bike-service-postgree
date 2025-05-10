import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catch-async";
import sendResponse from "../../utils/sendResponse";
import { bikeServices } from "../bikes/bike.service";
import { Services } from "./service.services";

const createService = catchAsync(async (req, res, next) => {
  const payload = req?.body;

  const result = await Services.createServiceIntoDB(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

const getAllServiceRecord = catchAsync(async (req, res, next) => {
  const result = await Services.getAllServicesRecordIntoDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});

const getServicesById = catchAsync(async (req, res, next) => {
  const { serviceId } = req.params;

  const result = await Services.getServiceRecordByIdIntoDB(serviceId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});

const updateServiceRecordStatusToComplete = catchAsync(async (req, res, next) => {
 
  const { serviceId } = req.params;
  const payload = req.body;

  const result = await Services.updateServiceRecordCompleteIntoDB(
    serviceId,
    payload
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});

export const ServicesController = {
  createService,
  getAllServiceRecord,
  getServicesById,
  updateServiceRecordStatusToComplete
};
