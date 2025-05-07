import { z } from "zod";

 const customerZodValidationSchema = z.object({
  name: z.string({required_error:"Name is required"}),
  email:z.string({ required_error: "Email is required" }).email({ message: "Invalid email address" }),
  phone:z.string({ required_error: "Phone number is required" })
}).strict();


const updateCustomerZodValidationSchema = z.object({
  name: z.string().optional(),
  phone:z.string().optional(),
}).strict();



export const customerZodValidation = {
    customerZodValidationSchema,
    updateCustomerZodValidationSchema
}