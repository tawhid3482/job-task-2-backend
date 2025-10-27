import { z } from "zod";
export const perfectionSchema = z.object({
  Title: z.string(),
  Type: z.string(),
  Image: z.string(),
  Orientation: z.string(),
  Address: z.string(),
  FrontRoad: z.string(),
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
    .regex(/^\d+$/, "Number of floors must be a valid number")
});
