import { z } from "zod";

const serviceZodValidationSchema = z
  .object({
    bikeId: z.string({required_error:'Bike id is required'}).uuid(),
    serviceDate: z.string({required_error: 'Service date is required'}),
    description: z.string({required_error: 'Description is required'}),
    status: z.enum(["pending", "in-progress", "done"]),
  })
  .strict();
const updateServiceRecordStatusValidationSchema = z
  .object({
    completionDate: z.string().datetime().optional(),
  }).optional();

export const ServicesValidation = {
  serviceZodValidationSchema,
  updateServiceRecordStatusValidationSchema
};
