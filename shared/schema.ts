import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, serial, boolean, integer } from "drizzle-orm/pg-core";
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

export const feedbackEntries = pgTable("feedback_entries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  rating: integer("rating").notNull(),
  featured: boolean("featured").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertFeedbackSchema = createInsertSchema(feedbackEntries).omit({
  id: true,
  featured: true,
  createdAt: true,
}).extend({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Please share at least a few words (10 characters minimum)"),
  rating: z.number().min(1).max(5),
});

export type InsertFeedbackEntry = z.infer<typeof insertFeedbackSchema>;
export type FeedbackEntry = typeof feedbackEntries.$inferSelect;

export const premierPassEntries = pgTable("premier_pass_entries", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertPremierPassSchema = createInsertSchema(premierPassEntries).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().optional(),
});

export type InsertPremierPassEntry = z.infer<typeof insertPremierPassSchema>;
export type PremierPassEntry = typeof premierPassEntries.$inferSelect;
