"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RestaurantDetailsClient() {
    return (
        <div className="bg-background-dark min-h-screen flex flex-col font-display antialiased text-white selection:bg-primary selection:text-white">
            <Navbar />

            {/* Hero / Cinematic Background */}
            <div className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden group">
                <div className="absolute inset-0">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDYCGwuMIww970HuUykz29UdzBl2hXczy9Ds_W_Gd8bKYpa1dmGrdmKMqYc7Fr421rNE8aG6h1Yc6lJfyyZRiR4anEKzaOyqGAuIzbRvKJsu03RC1Mzfoi0rMX1OeM0lB3SqRNeZsrpOSmFMuTSsS5Iy6yePlC--Ep5z9BYNBQYPcSp1kEYjSJMb-BdkT9VpRTYaB_aZFZIsbRwhDSKiwJKs5bFMUdbITLkfMJ_SbZ7N7sFBG5codQxFGmaUcLRm0Jg5CsFrOvctd1"
                        alt="The Obsidian Room Interior"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 md:px-10 lg:px-40">
                    <div className="max-w-[960px] w-full mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-2"
                        >
                            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">New Arrival</span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">The Obsidian Room</h1>
                            <div className="flex items-center gap-4 text-gray-300">
                                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-sm font-icon">star</span> 5.0</span>
                                <span className="size-1 bg-gray-500 rounded-full"></span>
                                <span>Modern Gastronomy</span>
                                <span className="size-1 bg-gray-500 rounded-full"></span>
                                <span>$$$$</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Layout */}
            <main className="flex-1 w-full px-6 md:px-10 lg:px-40 pb-20 -mt-10 relative z-10">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Column: Story & Menu */}
                    <div className="lg:col-span-8 flex flex-col gap-16">
                        {/* Story Section */}
                        <section>
                            <div className="flex flex-col gap-6">
                                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary font-icon">auto_awesome</span>
                                    Shadow & Light
                                </h2>
                                <div className="prose prose-invert prose-lg text-gray-300 font-body leading-relaxed">
                                    <p>
                                        <span className="text-5xl float-left mr-3 mt-[-10px] text-primary font-display font-bold">E</span>xprience the pinnacle of modern gastronomy in a setting defined by shadow and light. Chef Alexander Thorne presents a tasting menu that defies convention, focusing on rare ingredients sourced from the deepest corners of the earth.
                                    </p>
                                    <p className="mt-4">
                                        Each course is a study in contrast, designed to challenge the palate and provoke thought. The Obsidian Room offers more than a meal; it offers a journey into the unknown, guided by the visionary hand of a master.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Menu Highlights */}
                        <section>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-bold text-white">Menu Highlights</h3>
                                <button className="text-sm text-primary hover:text-white transition-colors uppercase tracking-wider font-bold flex items-center gap-1">
                                    Full Menu <span className="material-symbols-outlined text-sm font-icon">arrow_forward</span>
                                </button>
                            </div>
                            <div className="grid gap-6">
                                {/* Menu Item 1 */}
                                <div className="group flex gap-4 p-4 rounded-xl hover:bg-surface-dark/50 transition-colors border border-transparent hover:border-surface-border">
                                    <div className="size-20 shrink-0 rounded-lg overflow-hidden relative">
                                        <Image src="/images/dish-1.jpg" alt="Foie Gras" fill className="object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Foie Gras Terrine</h4>
                                            <span className="text-primary font-bold">$45</span>
                                        </div>
                                        <p className="text-gray-400 text-sm">Fig jam, toasted brioche, aged balsamic reduction.</p>
                                    </div>
                                </div>
                                {/* Menu Item 2 */}
                                <div className="group flex gap-4 p-4 rounded-xl hover:bg-surface-dark/50 transition-colors border border-transparent hover:border-surface-border">
                                    <div className="size-20 shrink-0 rounded-lg overflow-hidden relative">
                                        <Image src="/images/ingredients.jpg" alt="Scallops" fill className="object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Coquilles Saint-Jacques</h4>
                                            <span className="text-primary font-bold">$52</span>
                                        </div>
                                        <p className="text-gray-400 text-sm">Diver scallops, truffle foam, parsnip purée, crispy sage.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Visual Gallery */}
                        <section>
                            <h3 className="text-2xl font-bold text-white mb-8">The Atmosphere</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
                                <div className="col-span-2 row-span-2 rounded-xl overflow-hidden relative group">
                                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWC88O9UNjvLwAsNh8rEg8bs-WRm09GtzyKKH4O6-xIWIgt5nWJhFtN2bTmtZklrRKDLosYyOWAK2uDZDXr_BTvP9wI6vH97JFYeWtxL0VDdmjuj2knm8s9WhyI-GsX0o3kLjF5ZeJt8xZ65FBGzHcZx7dF56zCRdUHCLV6Y3hfrKayhcJMH5xPPipXvpJYx-ACPAeJMkHvBuJyHZ8WoyCbizfPwDzxv1jwt1LiYoqlhgVSkYJstke7MohgLiP364Yz4pSzJ1OxL6r" alt="Dark Interior" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                </div>
                                <div className="rounded-xl overflow-hidden relative group">
                                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9l2ZGDc_lxBV96MrBXihP2YWnByttklTIdBk_zNo86lPc-vaplRmJPAanpE9aLI7ZHY45qmtdbZPqJbgmv06_bd4NrzIbL-yoNn42QRuI3AsA_0ZVsr59pSTclr0SDvcZWaJVlirDammO-Aos3nAOBIKEHO1lS0P9vOT9YZQzJ1PnOXdbrjSIAzlA9a6HI1y9JHpBNLYwi-ugc6Py9eAYBP75aT2ZdQ7CjPbgVQ4TrKsTT57tVjRUyajBwFR6Bfjk3Y5chy8aZ5o9" alt="Gourmet Dish" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <div className="rounded-xl overflow-hidden relative group">
                                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDwHHGgnbtX7EYRniOzoJCv38dOz-aWfaGAw-A9cwrPkm-vAo9dHony8Z3Mf6Krssw1sDfPyJtAhW7Tqn4hjCi0f6qt-SdpmmfPtyrdHf6iQ6fHLhqnZofs2FhjKPBt8fzC-bFAfnbD52UgbS-LgEPMpsYBS_jaGJaPKYY1I0Bu82Ke3LpBrShFK-T2Rwtb1y50YrAKr9gWJTmCI9_fyu5dd7T0BYQxfRqLGe3O-9XF0Eba6t1QuO_HxlfxKHECIj0GrQrk8mo36A2" alt="Chef Plating" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Sticky Reservation Widget */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-24">
                            <div className="bg-surface-dark border border-surface-border rounded-xl p-6 shadow-2xl shadow-black/50 overflow-hidden">
                                {/* Widget Header */}
                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-surface-border">
                                    <h3 className="text-lg font-bold text-white">Make a Reservation</h3>
                                    <span className="flex items-center text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                                        <span className="material-symbols-outlined text-[16px] mr-1 font-icon">check_circle</span>
                                        High Demand
                                    </span>
                                </div>

                                {/* Fake Date Picker */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <button className="text-gray-400 hover:text-white"><span className="material-symbols-outlined font-icon">chevron_left</span></button>
                                        <span className="font-bold text-white">October 2026</span>
                                        <button className="text-gray-400 hover:text-white"><span className="material-symbols-outlined font-icon">chevron_right</span></button>
                                    </div>
                                    <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => <span key={d} className="text-gray-500 text-xs uppercase">{d}</span>)}
                                    </div>
                                    <div className="grid grid-cols-7 gap-1 text-center">
                                        <span className="p-2"></span><span className="p-2"></span>
                                        {[1, 2, 3, 4, 5, 6, 7].map(d => <button key={d} className="p-2 text-gray-400 hover:text-white rounded hover:bg-white/10">{d}</button>)}
                                        <button className="p-2 text-white font-bold bg-primary rounded shadow-lg shadow-primary/20">8</button>
                                        {[9, 10, 11, 12].map(d => <button key={d} className="p-2 text-gray-400 hover:text-white rounded hover:bg-white/10">{d}</button>)}
                                    </div>
                                </div>

                                {/* Guests */}
                                <div className="mb-6">
                                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Guests</label>
                                    <div className="flex items-center justify-between bg-background-dark p-2 rounded-lg border border-surface-border">
                                        <button className="p-2 text-gray-400 hover:text-white"><span className="material-symbols-outlined font-icon">remove</span></button>
                                        <span className="font-bold text-white">2 Guests</span>
                                        <button className="p-2 text-gray-400 hover:text-white"><span className="material-symbols-outlined font-icon">add</span></button>
                                    </div>
                                </div>

                                {/* Time Slots */}
                                <div className="mb-8">
                                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Available Times</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        <button className="py-2 rounded border border-surface-border text-gray-500 line-through text-sm cursor-not-allowed bg-white/5">18:00</button>
                                        <button className="py-2 rounded border border-surface-border text-gray-500 line-through text-sm cursor-not-allowed bg-white/5">18:30</button>
                                        <button className="py-2 rounded border border-primary text-primary font-bold text-sm bg-primary/10 hover:bg-primary hover:text-white transition-colors">19:00</button>
                                        <button className="py-2 rounded border border-surface-border text-white hover:border-primary hover:text-primary text-sm transition-colors">19:30</button>
                                        <button className="py-2 rounded border border-surface-border text-white hover:border-primary hover:text-primary text-sm transition-colors">20:00</button>
                                        <button className="py-2 rounded border border-surface-border text-white hover:border-primary hover:text-primary text-sm transition-colors">20:30</button>
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                                    Confirm Table
                                    <span className="material-symbols-outlined text-sm font-icon">arrow_forward</span>
                                </button>
                                <p className="text-center text-xs text-gray-500 mt-4">
                                    Reservations require a credit card hold. <br />
                                    Cancellation fee applies within 24 hours.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
