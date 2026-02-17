import { type WaitlistEntry, type InsertWaitlistEntry, waitlistEntries, type FeedbackEntry, type InsertFeedbackEntry, feedbackEntries, type PremierPassEntry, type InsertPremierPassEntry, premierPassEntries } from "@shared/schema";
import { db } from "./db";
import { eq, count, desc } from "drizzle-orm";

export interface IStorage {
  createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
  getWaitlistCount(): Promise<number>;
  createFeedbackEntry(entry: InsertFeedbackEntry): Promise<FeedbackEntry>;
  getFeaturedFeedback(): Promise<FeedbackEntry[]>;
  getAllFeedback(): Promise<FeedbackEntry[]>;
  createPremierPassEntry(entry: InsertPremierPassEntry): Promise<PremierPassEntry>;
  getPremierPassEntryByEmail(email: string): Promise<PremierPassEntry | undefined>;
  getPremierPassCount(): Promise<number>;
}

export class DatabaseStorage implements IStorage {
  async createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry> {
    const [result] = await db.insert(waitlistEntries).values(entry).returning();
    return result;
  }

  async getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
    const [result] = await db.select().from(waitlistEntries).where(eq(waitlistEntries.email, email));
    return result;
  }

  async getWaitlistCount(): Promise<number> {
    const [result] = await db.select({ value: count() }).from(waitlistEntries);
    return result?.value ?? 0;
  }

  async createFeedbackEntry(entry: InsertFeedbackEntry): Promise<FeedbackEntry> {
    const [result] = await db.insert(feedbackEntries).values(entry).returning();
    return result;
  }

  async getFeaturedFeedback(): Promise<FeedbackEntry[]> {
    return db.select().from(feedbackEntries).where(eq(feedbackEntries.featured, true)).orderBy(desc(feedbackEntries.createdAt));
  }

  async getAllFeedback(): Promise<FeedbackEntry[]> {
    return db.select().from(feedbackEntries).orderBy(desc(feedbackEntries.createdAt));
  }

  async createPremierPassEntry(entry: InsertPremierPassEntry): Promise<PremierPassEntry> {
    const [result] = await db.insert(premierPassEntries).values(entry).returning();
    return result;
  }

  async getPremierPassEntryByEmail(email: string): Promise<PremierPassEntry | undefined> {
    const [result] = await db.select().from(premierPassEntries).where(eq(premierPassEntries.email, email));
    return result;
  }

  async getPremierPassCount(): Promise<number> {
    const [result] = await db.select({ value: count() }).from(premierPassEntries);
    return result?.value ?? 0;
  }
}

export const storage = new DatabaseStorage();
