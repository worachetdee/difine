"use server";

import { db } from "@/db";
import { bookings, users } from "@/db/schema";
// import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

type ActionState = { success: boolean; message: string };

export async function createBooking(prevState: ActionState, formData: FormData) {
    // Mock user for preview
    const user = { id: "preview_user", email: "preview@example.com" };
    // const user = await currentUser();
    if (!user) {
        throw new Error("Must be signed in to book.");
    }

    // Ensure user exists in our DB (sync if needed, but for MVP we assume sync or create on fly)
    // Ideally Clerk webhooks handle this, but here's a lazy check:
    // await db.insert(users).values({ id: user.id, email: user.emailAddresses[0].emailAddress }).onConflictDoNothing();

    const restaurantId = formData.get("restaurantId") as string;
    const dateStr = formData.get("date") as string;
    const timeStr = formData.get("time") as string;
    const partySize = parseInt(formData.get("partySize") as string);

    // Combine date and time
    const date = new Date(`${dateStr}T${timeStr}`);

    try {
        // Generate a random ID for now since we don't have crypto/uuid or auto-increment text setup in this snippet
        // In production use uuidv4 or similar.
        const id = Math.random().toString(36).substring(7);

        await db.insert(bookings).values({
            id,
            userId: user.id,
            restaurantId,
            date,
            partySize,
            status: "pending",
        });

        revalidatePath("/bookings");
        return { success: true, message: "Booking request sent successfully." };
    } catch (error) {
        console.error("Booking error:", error);
        return { success: false, message: "Failed to create booking." };
    }
}
