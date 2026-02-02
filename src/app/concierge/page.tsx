"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

export default function ConciergePage() {
    return (
        <div className="bg-background-dark font-display min-h-screen flex flex-col antialiased text-white selection:bg-primary selection:text-white pt-20">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
                <Image
                    src="/images/restaurant-interior-wide.jpg" // Using an existing asset
                    alt="Concierge Service"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent" />

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">The Invisible Concierge</span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-tight mb-6">
                            Your Desires, <span className="font-bold">Anticipated</span>.
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
                            Beyond reservations. We orchestrate the entire dining journey, ensuring every detail is perfect before you even ask.
                        </p>
                        <Link href="/pricing" className="inline-block px-10 py-4 bg-primary text-white font-bold text-sm uppercase tracking-widest rounded hover:bg-primary-hover transition-colors shadow-lg">
                            Upgrade to Diamond
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight mb-6">
                            More Than Just a <span className="text-primary font-bold">Reservation</span>
                        </h2>
                        <div className="space-y-6 text-gray-400 font-light leading-relaxed">
                            <p>
                                Time is your most valuable asset. DiFine's concierge service is designed to give it back to you. We handle the logistics, the research, and the arrangements, allowing you to focus on the experience itself.
                            </p>
                            <p>
                                Whether it's a business dinner that needs to impress, an anniversary that requires a special touch, or simply a desire to explore the unknown, our team is at your disposal.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[400px] rounded-lg overflow-hidden border border-white/10"
                    >
                        <Image
                            src="/images/chef-cooking.jpg"
                            alt="Chef Plating"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-6 bg-surface-dark border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-2 block">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-white">Curated For You</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ServiceCard
                            icon="restaurant"
                            title="Bespoke Dining"
                            description="Private chef experiences, menu customization, and dietary accommodations handled with discretion."
                        />
                        <ServiceCard
                            icon="directions_car"
                            title="Luxury Transport"
                            description="Complimentary limousine service for Diamond members to and from your dining destination."
                        />
                        <ServiceCard
                            icon="celebration"
                            title="Special Occasions"
                            description="From flower arrangements to private room bookings, we ensure your milestones are celebrated in style."
                        />
                        <ServiceCard
                            icon="flight_takeoff"
                            title="Culinary Travel"
                            description="Planning a trip? Let us secure tables at the world's most sought-after restaurants in your destination."
                        />
                        <ServiceCard
                            icon="wine_bar"
                            title="Rare Vintages"
                            description="Access to exclusive wine lists and sommelier consultations to pair perfectly with your meal."
                        />
                        <ServiceCard
                            icon="support_agent"
                            title="24/7 Support"
                            description="A dedicated lifestyle manager is always just a message away to assist with any request."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-8">
                        Experience the <span className="text-primary font-bold">Unimaginable</span>
                    </h2>
                    <p className="text-gray-400 mb-10 font-light leading-relaxed max-w-xl mx-auto">
                        Unlock the full potential of your membership with our concierge services. Available exclusively to Gold and Diamond members.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/pricing" className="px-10 py-4 bg-primary text-white font-bold text-sm uppercase tracking-widest rounded hover:bg-primary-hover transition-colors shadow-lg">
                            View Memberships
                        </Link>
                        <Link href="#" className="px-10 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-widest rounded hover:bg-white/5 transition-colors">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function ServiceCard({ icon, title, description }: { icon: string, title: string, description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background-dark p-8 rounded border border-white/5 hover:border-primary/30 transition-colors group"
        >
            <div className="size-12 bg-surface-dark rounded flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[24px] font-icon">{icon}</span>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-3">{title}</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">{description}</p>
        </motion.div>
    );
}
