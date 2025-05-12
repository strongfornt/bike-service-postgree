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
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const custome_error_1 = require("../../errors/custome.error");
const prisma_1 = require("../../shared/prisma");
const createCustomerIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma_1.prisma.customer.create({
        data: payload,
    });
    return customer;
});
const getAllCustomersIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield prisma_1.prisma.customer.findMany();
    if ((customers === null || customers === void 0 ? void 0 : customers.length) == 0) {
        throw new custome_error_1.CustomError(http_status_codes_1.StatusCodes.NOT_FOUND, "Requested resource was not found");
    }
    return customers;
});
const getCustomerByIdIntoDB = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma_1.prisma.customer.findUniqueOrThrow({
        where: {
            customerId,
        },
    });
    return customer;
});
const updateCustomerById = (customerId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.customer.findUniqueOrThrow({
        where: {
            customerId,
        },
    });
    const updateCustomer = yield prisma_1.prisma.customer.update({
        where: {
            customerId,
        },
        data: payload,
    });
    return updateCustomer;
});
const deleteCustomerById = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.customer.findUniqueOrThrow({
        where: {
            customerId,
        },
    });
    const deletedUser = yield prisma_1.prisma.customer.delete({
        where: {
            customerId,
        },
    });
    return deletedUser;
});
exports.customerServices = {
    createCustomerIntoDB,
    getAllCustomersIntoDB,
    getCustomerByIdIntoDB,
    updateCustomerById,
    deleteCustomerById,
};
