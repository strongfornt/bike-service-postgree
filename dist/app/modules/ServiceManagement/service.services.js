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
exports.Services = void 0;
const http_status_codes_1 = require("http-status-codes");
const custome_error_1 = require("../../errors/custome.error");
const prisma_1 = require("../../shared/prisma");
const createServiceIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.create({
        data: payload,
    });
    return result;
});
const getAllServicesRecordIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.findMany();
    if (!result) {
        throw new custome_error_1.CustomError(http_status_codes_1.StatusCodes.NOT_FOUND, "Requested resource was not found");
    }
    return result;
});
const getServiceRecordByIdIntoDB = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId,
        },
    });
    return result;
});
const updateServiceRecordCompleteIntoDB = (serviceId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId,
        },
    });
    const result = yield prisma_1.prisma.serviceRecord.update({
        where: {
            serviceId,
        },
        data: {
            status: "done",
            completionDate: (payload === null || payload === void 0 ? void 0 : payload.completionDate)
                ? new Date(payload === null || payload === void 0 ? void 0 : payload.completionDate).toISOString()
                : new Date().toISOString(),
        },
    });
    return result;
});
const getPendingOrOVerdueServiceIntoDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield prisma_1.prisma.serviceRecord.findMany({
        where: {
            status: {
                in: ["pending", "in_progress"],
            },
            serviceDate: {
                lt: sevenDaysAgo,
            },
        },
    });
    if (!result) {
        throw new custome_error_1.CustomError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Requested resource was not found');
    }
    return result;
});
exports.Services = {
    createServiceIntoDB,
    getAllServicesRecordIntoDB,
    getServiceRecordByIdIntoDB,
    updateServiceRecordCompleteIntoDB,
    getPendingOrOVerdueServiceIntoDb
};
