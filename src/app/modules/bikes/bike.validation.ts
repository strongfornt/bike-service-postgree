import { z } from "zod";

const bikeValidationZodSchema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.number().int().gte(1900).lte(new Date().getFullYear()),
  customerId: z.string().uuid(),
}).strict();

export const bikeValidationSchema = {
  bikeValidationZodSchema,
};
