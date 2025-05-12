"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesValidation = void 0;
const zod_1 = require("zod");
const serviceZodValidationSchema = zod_1.z
    .object({
    bikeId: zod_1.z.string({ required_error: 'Bike id is required' }).uuid(),
    serviceDate: zod_1.z.string({ required_error: 'Service date is required' }),
    description: zod_1.z.string({ required_error: 'Description is required' }),
    status: zod_1.z.enum(["pending", "in-progress", "done"]),
})
    .strict();
const updateServiceRecordStatusValidationSchema = zod_1.z
    .object({
    completionDate: zod_1.z.string().datetime().optional(),
}).optional();
exports.ServicesValidation = {
    serviceZodValidationSchema,
    updateServiceRecordStatusValidationSchema
};
