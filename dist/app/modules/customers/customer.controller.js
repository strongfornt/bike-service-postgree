"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catch_async_1 = __importDefault(require("../../utils/catch-async"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const customer_service_1 = require("./customer.service");
const createCustomer = (0, catch_async_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.customerServices.createCustomerIntoDB(req === null || req === void 0 ? void 0 : req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        message: "Customer created successfully",
        data: result,
    });
}));
const getAllCustomers = (0, catch_async_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.customerServices.getAllCustomersIntoDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result,
    });
}));
const getCustomerById = (0, catch_async_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req === null || req === void 0 ? void 0 : req.params;
    const result = yield customer_service_1.customerServices.getCustomerByIdIntoDB(customerId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Customer fetched successfully",
        data: result,
    });
}));
const updateCustomerById = (0, catch_async_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req === null || req === void 0 ? void 0 : req.params;
    const payload = req.body;
    const result = yield customer_service_1.customerServices.updateCustomerById(customerId, payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Customer updated successfully",
        data: result,
    });
}));
const deleteCustomerById = (0, catch_async_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req === null || req === void 0 ? void 0 : req.params;
    yield customer_service_1.customerServices.deleteCustomerById(customerId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Customer deleted successfully",
    });
}));
exports.customerController = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomerById,
    deleteCustomerById,
};
