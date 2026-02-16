import { type WaitlistEntry, type InsertWaitlistEntry, waitlistEntries } from "@shared/schema";
import { db } from "./db";
import { eq, count } from "drizzle-orm";

export interface IStorage {
  createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
  getWaitlistCount(): Promise<number>;
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
}

export const storage = new DatabaseStorage();
