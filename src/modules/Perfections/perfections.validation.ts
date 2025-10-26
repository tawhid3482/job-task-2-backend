import { z } from "zod";

// Optional: If you have a Status enum in Prisma, define it here too
export const StatusEnum = z.enum(["PENDING", "CONFIRMED", "REJECTED"]);

export const perfectionSchema = z.object({
  Title: z.string().min(2, "Title must be at least 2 characters long"),
  Type: z.string().min(2, "Type is required"),
  Image: z.string().url("Image must be a valid URL"),
  Orientation: z.string().min(1, "Orientation is required"),
  Address: z.string(),
  FrontRoad: z.string().min(1, "Front road information is required"),
  LandSize: z
    .string()
    .min(1, "Land size is required")
    .regex(/^\d+(\.\d+)?$/, "Land size must be a valid number"),
  ApartmentSize: z
    .string()
    .min(1, "Apartment size is required")
    .regex(/^\d+(\.\d+)?$/, "Apartment size must be a valid number"),
  NumberOfUnits: z
    .string()
    .regex(/^\d+$/, "Number of units must be a valid number"),
  NumberOfParking: z
    .string()
    .regex(/^\d+$/, "Number of parking must be a valid number"),
  NumberOfFloors: z
    .string()
    .regex(/^\d+$/, "Number of floors must be a valid number"),
  status: StatusEnum.default("CONFIRMED"),
  createdAt: z.date().optional(),
});
