import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catch-async";
import sendResponse from "../../utils/sendResponse";
import { customerServices } from "./customer.service";

const createCustomer = catchAsync(async (req, res, next) => {
  const result = await customerServices.createCustomerIntoDB(req?.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

const getAllCustomers = catchAsync(async (req, res, next) => {
  const result = await customerServices.getAllCustomersIntoDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

const getCustomerById = catchAsync(async (req, res, next) => {
  const { customerId } = req?.params;
  const result = await customerServices.getCustomerByIdIntoDB(customerId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Customer fetched successfully",
    data: result,
  });
});

const updateCustomerById = catchAsync(async (req, res, next) => {
  const { customerId } = req?.params;
  const payload = req.body;
  const result = await customerServices.updateCustomerById(customerId, payload);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});

export const customerController = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomerById,
};
