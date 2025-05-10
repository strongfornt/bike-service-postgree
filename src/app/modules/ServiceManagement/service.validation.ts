import { z } from "zod";

const serviceZodValidationSchema = z
  .object({
    bikeId: z.string().uuid(),
    serviceDate: z.string(),
    description: z.string(),
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
