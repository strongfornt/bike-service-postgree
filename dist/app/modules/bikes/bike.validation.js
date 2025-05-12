"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeValidationSchema = void 0;
const zod_1 = require("zod");
const bikeValidationZodSchema = zod_1.z.object({
    brand: zod_1.z.string(),
    model: zod_1.z.string(),
    year: zod_1.z.number().int().gte(1900).lte(new Date().getFullYear()),
    customerId: zod_1.z.string().uuid(),
}).strict();
exports.bikeValidationSchema = {
    bikeValidationZodSchema,
};
