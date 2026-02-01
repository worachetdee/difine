"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Mock Data matching the template
const restaurants = [
    {
        id: 1,
        name: "The Gilded Fork",
        rating: 4.9,
        price: "$$$$",
        cuisine: "French",
        location: "Tribeca, NY",
        tags: ["Michelin Star"],
        description: "Experience the pinnacle of French gastronomy in an intimate, velvet-draped setting.",
        image: "/images/restaurant-interior-wide.jpg", // Using widely available asset
        available: true
    },
    {
        id: 2,
        name: "Azure Sky",
        rating: 4.7,
        price: "$$$",
        cuisine: "Mediterranean",
        location: "SoHo, NY",
        tags: [],
        description: "Elevated Mediterranean cuisine served on a panoramic rooftop terrace.",
        image: "/images/dish-1.jpg",
        available: false
    },
    {
        id: 3,
        name: "Obsidian",
        rating: 5.0,
        price: "$$$$",
        cuisine: "Japanese",
        location: "Midtown, NY",
        tags: ["Chef's Table"],
        description: "Modern Japanese omakase in a sleek, minimalist space featuring rare sake pairings.",
        image: "/images/hero.png",
        available: false,
        waitlist: true
    },
    {
        id: 4,
        name: "Velvet Room",
        rating: 4.5,
        price: "$$$",
        cuisine: "American",
        location: "West Village, NY",
        tags: [],
        description: "A hidden speakeasy and supper club offering classic cocktails and a menu inspired by the roaring twenties.",
        image: "/images/restaurant-interior.jpg",
        available: false
    },
    {
        id: 5,
        name: "Gold Leaf",
        rating: 4.8,
        price: "$$$$",
        cuisine: "Modern",
        location: "Chelsea, NY",
        tags: [],
        description: "Innovative molecular gastronomy where science meets art in every dish. A true sensory experience.",
        image: "/images/chef-cooking.jpg",
        available: true
    },
    {
        id: 6,
        name: "The Summit",
        rating: 4.6,
        price: "$$$$",
        cuisine: "New American",
        location: "FiDi, NY",
        tags: [],
        description: "Perched on the 50th floor, The Summit offers unparalleled views combined with exquisite new-American cuisine.",
        image: "/images/restaurant-interior-wide.jpg",
        available: false
    }
];

export default function RestaurantsPage() {
    return (
        <div className="bg-background-dark font-display min-h-screen flex flex-col antialiased text-white selection:bg-primary selection:text-white">
            {/* Top Navigation (App Style) */}
            <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-background-dark/90 backdrop-blur-md px-6 py-4 lg:px-12">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-3 text-white">
                        <div className="size-6 text-primary">
                            <span className="material-symbols-outlined text-3xl font-icon">restaurant_menu</span>
                        </div>
                        <h2 className="text-white font-serif text-xl font-bold tracking-wide">DiFine</h2>
                    </Link>
                    {/* Search Bar */}
                    <label className="hidden md:flex flex-col min-w-64 h-10 w-80">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full ring-1 ring-white/10 focus-within:ring-primary transition-all duration-300">
                            <div className="text-[#adaba8] flex bg-surface-dark items-center justify-center pl-3 rounded-l-lg">
                                <span className="material-symbols-outlined text-[20px] font-icon">search</span>
                            </div>
                            <input
                                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-white focus:outline-none bg-surface-dark placeholder:text-[#adaba8]/60 px-3 text-sm font-normal border-none"
                                placeholder="Search by restaurant, cuisine..."
                            />
                        </div>
                    </label>
                </div>
                <div className="flex items-center gap-3">
                    <Link href="/dashboard" className="hidden sm:flex h-10 items-center justify-center rounded-lg px-5 bg-transparent border border-white/10 text-white text-sm font-medium hover:bg-white/5 hover:border-primary transition-colors">
                        Dashboard
                    </Link>
                    <button className="flex size-10 items-center justify-center rounded-lg bg-surface-dark text-white hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px] font-icon">notifications</span>
                    </button>
                    <button className="flex size-10 items-center justify-center rounded-lg bg-surface-dark text-white hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px] font-icon">person</span>
                    </button>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar Filters */}
                <aside className="hidden lg:flex flex-col w-72 h-[calc(100vh-73px)] overflow-y-auto border-r border-white/10 bg-background-dark p-6 sticky top-[73px]">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h1 className="text-white text-lg font-serif font-medium tracking-wide mb-1">Refine Search</h1>
                            <p className="text-[#adaba8] text-xs">Filter by your preferences</p>
                        </div>
                        {/* Price Filter */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-primary text-xs font-bold uppercase tracking-wider">Price Range</h3>
                            <div className="flex gap-2">
                                <button className="flex-1 py-2 text-xs font-medium rounded border border-white/10 text-[#adaba8] hover:border-primary/50 hover:text-white transition-colors">$$</button>
                                <button className="flex-1 py-2 text-xs font-medium rounded border border-white/10 text-[#adaba8] hover:border-primary/50 hover:text-white transition-colors">$$$</button>
                                <button className="flex-1 py-2 text-xs font-medium rounded bg-primary text-white border border-primary shadow-[0_0_10px_rgba(141,127,104,0.3)]">$$$$</button>
                            </div>
                        </div>
                        {/* Cuisine Filter */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-primary text-xs font-bold uppercase tracking-wider">Cuisine</h3>
                            <div className="flex flex-col gap-2">
                                {["French Gastronomy", "Japanese Omakase", "Modern Italian", "Premium Steakhouse", "Nordic Fusion"].map((cuisine, i) => (
                                    <label key={i} className="flex items-center gap-3 group cursor-pointer">
                                        <input type="checkbox" className="size-4 rounded border-white/20 bg-surface-dark text-primary focus:ring-primary focus:ring-offset-background-dark cursor-pointer" />
                                        <span className="text-[#adaba8] text-sm group-hover:text-white transition-colors">{cuisine}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        {/* Ambiance Filter */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-primary text-xs font-bold uppercase tracking-wider">Ambiance</h3>
                            <div className="flex flex-col gap-2">
                                {[
                                    { icon: "wine_bar", label: "Romantic" },
                                    { icon: "business_center", label: "Business" },
                                    { icon: "deck", label: "Rooftop" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-surface-dark/50 hover:bg-surface-dark cursor-pointer group transition-colors">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-white/60 group-hover:text-primary text-sm font-icon">{item.icon}</span>
                                            <span className="text-[#adaba8] text-sm group-hover:text-white">{item.label}</span>
                                        </div>
                                        <span className="material-symbols-outlined text-white/20 text-sm font-icon">add</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 flex flex-col bg-background-dark overflow-y-auto h-[calc(100vh-73px)]">
                    <div className="max-w-[1400px] w-full mx-auto p-4 md:p-8 lg:p-12">
                        {/* Page Header */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b border-white/5 pb-6">
                            <div>
                                <h1 className="text-white text-3xl md:text-4xl font-serif font-bold leading-tight mb-2">Fine Dining in New York</h1>
                                <p className="text-[#adaba8] text-sm md:text-base font-light">Showing {restaurants.length} premium results found</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-dark border border-white/10 text-sm text-white cursor-pointer hover:border-primary/50 transition-colors">
                                    <span>Sort by: Recommended</span>
                                    <span className="material-symbols-outlined text-sm font-icon">expand_more</span>
                                </div>
                            </div>
                        </div>

                        {/* Restaurant Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {restaurants.map((rest) => (
                                <motion.div
                                    key={rest.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="group flex flex-col bg-surface-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 shadow-2xl shadow-black/50"
                                >
                                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                                        <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white border border-white/10">
                                            {rest.price}
                                        </div>
                                        {rest.tags.includes("Michelin Star") && (
                                            <div className="absolute top-4 left-4 z-10">
                                                <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Michelin Star</span>
                                            </div>
                                        )}
                                        {rest.tags.includes("Chef's Table") && (
                                            <div className="absolute top-4 left-4 z-10">
                                                <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Chef&apos;s Table</span>
                                            </div>
                                        )}
                                        <Image
                                            src={rest.image}
                                            alt={rest.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-white font-serif text-2xl font-semibold group-hover:text-primary transition-colors">{rest.name}</h3>
                                            <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded">
                                                <span className="material-symbols-outlined text-primary text-sm font-icon fill-current">star</span>
                                                <span className="text-white text-sm font-medium">{rest.rating}</span>
                                            </div>
                                        </div>
                                        <p className="text-[#adaba8] text-sm mb-4 line-clamp-2">{rest.description}</p>
                                        <div className="mt-auto flex flex-col gap-4">
                                            <div className="flex items-center gap-4 text-xs text-[#adaba8] border-t border-white/5 pt-4">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="material-symbols-outlined text-primary text-base font-icon">restaurant</span>
                                                    <span>{rest.cuisine}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <span className="material-symbols-outlined text-primary text-base font-icon">location_on</span>
                                                    <span>{rest.location}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 ml-auto">
                                                    {rest.available ? (
                                                        <>
                                                            <span className="material-symbols-outlined text-green-500 text-base font-icon">check_circle</span>
                                                            <span className="text-white">Available</span>
                                                        </>
                                                    ) : rest.waitlist ? (
                                                        <>
                                                            <span className="material-symbols-outlined text-red-400 text-base font-icon">schedule</span>
                                                            <span className="text-white">Waitlist</span>
                                                        </>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <Link href={`/restaurants/${rest.id}`} className="w-full py-3 flex justify-center bg-transparent border border-primary text-primary font-bold text-sm tracking-wide uppercase hover:bg-primary hover:text-white transition-all duration-300 rounded-lg">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pagination / Load More */}
                        <div className="mt-12 flex justify-center pb-8">
                            <button className="px-8 py-3 bg-surface-dark border border-white/10 text-white rounded-lg hover:bg-primary hover:border-primary transition-colors font-medium">
                                Load More Restaurants
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
