"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
    // Mock User
    const user = { firstName: "Kenji", fullName: "Kenji Yamamoto" };
    const today = new Date();

    return (
        <main className="max-w-[1400px] mx-auto px-6 pt-28 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10"
            >
                <h1 className="text-3xl font-light text-white uppercase tracking-tight mb-2">Welcome Back, {user.firstName}</h1>
                <p className="text-gray-400 mt-1 font-light tracking-wide text-sm">Here is your curated experience for {today.toLocaleString('default', { month: 'long' })}.</p>
            </motion.div>

            {/* Hero Card: Current Invitation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-surface-dark rounded-lg overflow-hidden border border-white/10 shadow-2xl text-white mb-16 relative"
            >
                <div className="absolute top-0 right-0 p-6 z-20">
                    <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded">Action Required</span>
                </div>

                <div className="grid md:grid-cols-2">
                    <div className="relative h-[300px] md:h-auto">
                        <Image
                            src="/images/restaurant-interior.jpg"
                            alt="L'Effervescence"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-surface-dark" />
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="mb-6">
                            <div className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Your February Invitation</div>
                            <h2 className="text-4xl font-light uppercase tracking-tight mb-3">L&apos;Effervescence</h2>
                            <div className="flex items-center gap-2 text-white/70 text-xs tracking-wider uppercase font-bold">
                                <span className="material-symbols-outlined text-primary text-[16px] font-icon">star</span>
                                <span>Michelin 2-Star</span>
                                <span className="size-1 bg-white/30 rounded-full" />
                                <span>French Contemporary</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-sm font-light text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px]">calendar_today</span>
                                <span>Saturday, February 15 · 7:00 PM</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm font-light text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                                <span>Nishi-Azabu, Tokyo</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-xs mt-4 p-3 bg-white/5 rounded border border-white/5">
                                <span className="text-primary font-bold uppercase tracking-wider">Course:</span> &quot;Winter Awakening&quot; — 8 courses
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/dashboard/invitation/123" className="px-8 py-3 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-primary-hover transition-colors">
                                View Details
                            </Link>
                            <Link href="/dashboard/invitation/123/accept" className="px-8 py-3 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-white/5 transition-colors">
                                Accept Invitation
                            </Link>
                        </div>

                        <div className="mt-6 text-gray-500 text-[10px] uppercase tracking-widest flex items-center gap-2 font-bold">
                            <span className="material-symbols-outlined text-[14px]">schedule</span> Please respond by February 8
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Secondary Cards */}
            <div className="grid md:grid-cols-3 gap-6">
                <DashboardCard
                    title="Past Experiences"
                    subtitle="Relive 12 culinary journeys"
                    image="/images/dish-1.jpg"
                    link="/dashboard/history"
                />
                <DashboardCard
                    title="Upcoming Events"
                    subtitle="Members-only chef's table"
                    image="/images/chef-cooking.jpg"
                    link="/dashboard/events"
                />
                <DashboardCard
                    title="Your Profile"
                    subtitle="Update dietary preferences"
                    image="/images/restaurant-interior.jpg"
                    link="/dashboard/profile"
                />
            </div>
        </main>
    );
}

function DashboardCard({ title, subtitle, image, link }: any) {
    return (
        <Link href={link} className="group relative h-64 rounded-lg overflow-hidden block border border-white/10 shadow-lg">
            <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-background-dark/60 group-hover:bg-background-dark/40 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-dark to-transparent">
                <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wide group-hover:text-primary transition-colors flex items-center gap-2">
                    {title} <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 text-[20px]">chevron_right</span>
                </h3>
                <p className="text-xs text-gray-300 uppercase tracking-wider">{subtitle}</p>
            </div>
        </Link>
    )
}
