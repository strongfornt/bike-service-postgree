"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerZodValidation = void 0;
const zod_1 = require("zod");
const customerZodValidationSchema = zod_1.z.object({
    name: zod_1.z.string({ required_error: "Name is required" }),
    email: zod_1.z.string({ required_error: "Email is required" }).email({ message: "Invalid email address" }),
    phone: zod_1.z.string({ required_error: "Phone number is required" })
}).strict();
const updateCustomerZodValidationSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
}).strict();
exports.customerZodValidation = {
    customerZodValidationSchema,
    updateCustomerZodValidationSchema
};
