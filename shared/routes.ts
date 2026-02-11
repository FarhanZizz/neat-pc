import { z } from "zod";
import { insertBookingSchema, bookings } from "./schema";

export const api = {
  bookings: {
    create: {
      method: "POST" as const,
      path: "/api/bookings" as const,
      input: insertBookingSchema,
      responses: {
        201: z.custom<typeof bookings.$inferSelect>(),
        400: z.object({ message: z.string() }),
      },
    },
    list: {
      method: "GET" as const,
      path: "/api/bookings" as const,
      responses: {
        200: z.array(z.custom<typeof bookings.$inferSelect>()),
      },
    }
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
