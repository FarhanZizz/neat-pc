import { z } from "zod";

export const insertBookingSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  packageType: z.string().min(1, "Package type is required"),
  notes: z.string().optional(),
});

export type InsertBooking = z.infer<typeof insertBookingSchema>;
