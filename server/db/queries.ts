"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from './drizzle';
import { Video, Videos } from './schema';
import { eq } from 'drizzle-orm';

/* Get all videos for a specific user
   Filters by userId to ensure data privacy */
export const getVideosForUser = async (): Promise<Video[]>  => {
 const { userId } = await auth();

 if (!userId) {
    throw new Error ("User not authenticated");
 }
 return db.select().from(Videos).where(eq(Videos.userId, userId))
};