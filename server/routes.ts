import type { Express } from "express";
import type { Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // No backend data storage required as per user request.
  // All booking logic is handled on the client side via WhatsApp redirect.
  return httpServer;
}
