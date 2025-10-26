import { z } from "zod";

// --- If you already have a Status enum in Prisma, include it like this ---
export const StatusEnum = z.enum(["PENDING", "CONFIRMED", "REJECTED"]);

export const testimonialSchema = z.object({
  content: z
    .string(),
  name: z.string().min(2, "Name must be at least 2 characters long"),
  Image: z.string().url("Image must be a valid URL"),
  status: StatusEnum.default("CONFIRMED"),
  createdAt: z.date().optional(),
});
