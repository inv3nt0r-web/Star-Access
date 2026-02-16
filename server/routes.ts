import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = insertWaitlistSchema.parse(req.body);

      const existing = await storage.getWaitlistEntryByEmail(data.email);
      if (existing) {
        return res.status(409).json({ message: "This email is already on the waitlist." });
      }

      const entry = await storage.createWaitlistEntry(data);
      return res.status(201).json({ message: "Successfully joined the waitlist!", id: entry.id });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      console.error("Waitlist error:", error);
      return res.status(500).json({ message: "Something went wrong. Please try again." });
    }
  });

  app.get("/api/waitlist/count", async (_req, res) => {
    try {
      const count = await storage.getWaitlistCount();
      return res.json({ count });
    } catch (error) {
      console.error("Count error:", error);
      return res.status(500).json({ message: "Something went wrong." });
    }
  });

  return httpServer;
}
