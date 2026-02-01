import { sql } from "drizzle-orm";
import { text, integer, real, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
    id: text("id").primaryKey(), // Clerk ID
    email: text("email").notNull(),
    name: text("name"),
    role: text("role", { enum: ["user", "admin"] }).default("user"),
    stripeCustomerId: text("stripe_customer_id"),
    createdAt: integer("created_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});

export const restaurants = sqliteTable("restaurants", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description").notNull(),
    cuisine: text("cuisine").notNull(),
    priceRange: text("price_range", { enum: ["$$", "$$$", "$$$$"] }).notNull(),
    imageUrl: text("image_url").notNull(),
    isExclusive: integer("is_exclusive", { mode: "boolean" }).default(false),
    rating: real("rating"),
    location: text("location"),
    tags: text("tags"), // JSON string
    available: integer("available", { mode: "boolean" }).default(true),
    waitlist: integer("waitlist", { mode: "boolean" }).default(false),
    createdAt: integer("created_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});

export const bookings = sqliteTable("bookings", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id),
    restaurantId: text("restaurant_id").notNull().references(() => restaurants.id),
    date: integer("date", { mode: "timestamp" }).notNull(),
    partySize: integer("party_size").notNull(),
    status: text("status", { enum: ["pending", "confirmed", "cancelled"] }).default("pending"),
    createdAt: integer("created_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});

export const subscriptions = sqliteTable("subscriptions", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id),
    tier: text("tier", { enum: ["free", "gold", "platinum"] }).default("free"),
    status: text("status", { enum: ["active", "inactive", "past_due"] }).default("inactive"),
    stripeSubscriptionId: text("stripe_subscription_id"),
    createdAt: integer("created_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});
