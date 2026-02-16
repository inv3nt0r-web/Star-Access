import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const waitlistEntries = pgTable("waitlist_entries", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertWaitlistSchema = createInsertSchema(waitlistEntries).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().optional(),
});

export type InsertWaitlistEntry = z.infer<typeof insertWaitlistSchema>;
export type WaitlistEntry = typeof waitlistEntries.$inferSelect;
