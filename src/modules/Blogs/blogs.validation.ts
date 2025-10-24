import { z } from "zod";

// --- Status enum (same as your Prisma model enum) ---
export const StatusEnum = z.enum(["PENDING", "CONFIRMED", "REJECTED"]);

export const blogSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters long")
    .max(150, "Title cannot exceed 150 characters"),
  content: z
    .string()
    .min(10, "Content must be at least 10 characters long")
    .max(5000, "Content cannot exceed 5000 characters"),
  Image: z.string().url("Image must be a valid URL"),
  status: StatusEnum.default("CONFIRMED"),
  createdAt: z.date().optional(),
});
