"use server";

import { db } from "@/db";
import { bookings } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

// Define schema for booking validation
const bookingSchema = z.object({
  restaurantId: z.string().min(1, "Restaurant ID is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  partySize: z.coerce.number().min(1, "Party size must be at least 1"),
});

type ActionState = { success: boolean; message: string };

export async function createBooking(prevState: ActionState, formData: FormData) {
    // TODO: Implement actual authentication using Clerk
    // const user = await currentUser();
    const user = { id: "preview_user", email: "preview@example.com" };

    if (!user) {
        throw new Error("Must be signed in to book.");
    }

    // Validate form data
    const validatedFields = bookingSchema.safeParse({
        restaurantId: formData.get("restaurantId"),
        date: formData.get("date"),
        time: formData.get("time"),
        partySize: formData.get("partySize"),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Invalid booking details. Please check your inputs.",
        };
    }

    const { restaurantId, date: dateStr, time: timeStr, partySize } = validatedFields.data;

    // Combine date and time
    const date = new Date(`${dateStr}T${timeStr}`);

    try {
        const id = uuidv4();

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
