import { z } from "zod";

// --- Common Enum (same as Prisma Status enum) ---
export const StatusEnum = z.enum(["PENDING", "CONFIRMED", "REJECTED"]);

export const enquirySchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters long")
    .max(50, "First name cannot exceed 50 characters"),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters long")
    .max(50, "Last name cannot exceed 50 characters"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number cannot exceed 15 digits")
 ,

  secondPhone: z
    .string()
    .min(10, "Secondary phone number must be at least 10 digits")
    .max(15, "Secondary phone number cannot exceed 15 digits")
   ,

  location: z
    .string()
    .min(3, "Location must be at least 3 characters long")
    .max(200, "Location cannot exceed 200 characters"),

  landSize: z
    .string()
    .min(1, "Land size is required")
    .regex(/^\d+(\.\d+)?$/, "Land size must be a valid number"),

  attractiveFeature: z
    .string()
    .min(3, "Attractive feature must be at least 3 characters long")
    .max(500, "Attractive feature cannot exceed 500 characters"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(2000, "Message cannot exceed 2000 characters"),

  email: z
    .string()
    .email("Email must be a valid email address"),

  Image: z
    .string()
    .url("Image must be a valid URL"),

  status: StatusEnum.default("CONFIRMED"),
  createdAt: z.date().optional(),
});
