
import { db } from "../src/db";
import { restaurants } from "../src/db/schema";

const mockRestaurants = [
    {
        id: "1",
        name: "The Gilded Fork",
        rating: 4.9,
        priceRange: "$$$$" as const,
        cuisine: "French",
        location: "Tribeca, NY",
        tags: JSON.stringify(["Michelin Star"]),
        description: "Experience the pinnacle of French gastronomy in an intimate, velvet-draped setting.",
        imageUrl: "/images/restaurant-interior-wide.jpg",
        available: true,
        waitlist: false,
        isExclusive: false
    },
    {
        id: "2",
        name: "Azure Sky",
        rating: 4.7,
        priceRange: "$$$" as const,
        cuisine: "Mediterranean",
        location: "SoHo, NY",
        tags: JSON.stringify([]),
        description: "Elevated Mediterranean cuisine served on a panoramic rooftop terrace.",
        imageUrl: "/images/dish-1.jpg",
        available: false,
        waitlist: false,
        isExclusive: false
    },
    {
        id: "3",
        name: "Obsidian",
        rating: 5.0,
        priceRange: "$$$$" as const,
        cuisine: "Japanese",
        location: "Midtown, NY",
        tags: JSON.stringify(["Chef's Table"]),
        description: "Modern Japanese omakase in a sleek, minimalist space featuring rare sake pairings.",
        imageUrl: "/images/hero.png",
        available: false,
        waitlist: true,
        isExclusive: true
    },
    {
        id: "4",
        name: "Velvet Room",
        rating: 4.5,
        priceRange: "$$$" as const,
        cuisine: "American",
        location: "West Village, NY",
        tags: JSON.stringify([]),
        description: "A hidden speakeasy and supper club offering classic cocktails and a menu inspired by the roaring twenties.",
        imageUrl: "/images/restaurant-interior.jpg",
        available: false,
        waitlist: false,
        isExclusive: false
    },
    {
        id: "5",
        name: "Gold Leaf",
        rating: 4.8,
        priceRange: "$$$$" as const,
        cuisine: "Modern",
        location: "Chelsea, NY",
        tags: JSON.stringify([]),
        description: "Innovative molecular gastronomy where science meets art in every dish. A true sensory experience.",
        imageUrl: "/images/chef-cooking.jpg",
        available: true,
        waitlist: false,
        isExclusive: false
    },
    {
        id: "6",
        name: "The Summit",
        rating: 4.6,
        priceRange: "$$$$" as const,
        cuisine: "New American",
        location: "FiDi, NY",
        tags: JSON.stringify([]),
        description: "Perched on the 50th floor, The Summit offers unparalleled views combined with exquisite new-American cuisine.",
        imageUrl: "/images/restaurant-interior-wide.jpg",
        available: false,
        waitlist: false,
        isExclusive: false
    }
];

async function main() {
    console.log("Seeding database...");
    try {
        await db.delete(restaurants); // Clear existing data to avoid conflicts on re-run
        await db.insert(restaurants).values(mockRestaurants);
        console.log("Seeding complete.");
    } catch (error) {
        console.error("Error seeding database:", error);
        throw error;
    }
}

main().catch((err) => {
    console.error("Seeding failed:", err);
    process.exit(1);
});
