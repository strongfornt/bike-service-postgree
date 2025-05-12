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
exports.bikeServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const custome_error_1 = require("../../errors/custome.error");
const prisma_1 = require("../../shared/prisma");
const createBikeIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = yield prisma_1.prisma.bike.create({
        data: payload,
    });
    return bike;
});
const getAllBikeIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const bikes = yield prisma_1.prisma.bike.findMany();
    if ((bikes === null || bikes === void 0 ? void 0 : bikes.length) == 0) {
        throw new custome_error_1.CustomError(http_status_codes_1.StatusCodes.NOT_FOUND, "Requested resource was not found");
    }
    return bikes;
});
const getBikeIntoDB = (bikeId) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = yield prisma_1.prisma.bike.findUniqueOrThrow({
        where: {
            bikeId,
        },
    });
    return bike;
});
exports.bikeServices = {
    createBikeIntoDB,
    getAllBikeIntoDB,
    getBikeIntoDB,
};
