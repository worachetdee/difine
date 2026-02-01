"use client";

import { motion } from "framer-motion";
// import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin, ChevronRight, Star, User } from "lucide-react";

export default function Dashboard() {
    // Mock User
    const user = { firstName: "Kenji", fullName: "Kenji Yamamoto" };
    const today = new Date();

    return (
        <div className="min-h-screen bg-offwhite text-charcoal font-sans">
            {/* Dashboard Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-8 h-8">
                            <Image src="/logo.png" alt="DiFine" fill className="object-contain" />
                        </div>
                        <span className="font-serif font-bold text-lg text-gold tracking-wide">DiFine</span>
                    </Link>

                    <div className="flex items-center gap-6">
                        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal/60">
                            <Link href="/dashboard" className="text-navy">Home</Link>
                            <Link href="/dashboard/invitations" className="hover:text-navy transition-colors">My Invitations</Link>
                            <Link href="/dashboard/profile" className="hover:text-navy transition-colors">Profile</Link>
                        </nav>
                        <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
                            <div className="text-right hidden sm:block">
                                <div className="text-sm font-bold text-navy">{user.fullName}</div>
                                <div className="text-xs text-gold font-medium uppercase tracking-wider">Diamond</div>
                            </div>
                            {/* Mock User Button */}
                            <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center text-white">
                                <User className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10"
                >
                    <h1 className="text-3xl font-serif font-bold text-navy">Welcome Back, {user.firstName}</h1>
                    <p className="text-charcoal/60 mt-1">Here is your curated experience for {today.toLocaleString('default', { month: 'long' })}.</p>
                </motion.div>

                {/* Hero Card: Current Invitation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-navy rounded-sm overflow-hidden shadow-xl text-white mb-16 relative"
                >
                    <div className="absolute top-0 right-0 p-6 z-20">
                        <span className="bg-gold text-navy text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">Action Required</span>
                    </div>

                    <div className="grid md:grid-cols-2">
                        <div className="relative h-[300px] md:h-auto">
                            <Image
                                src="/images/restaurant-interior.jpg"
                                alt="L'Effervescence"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-navy" />
                        </div>

                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="mb-6">
                                <div className="text-gold text-sm font-bold uppercase tracking-widest mb-2">Your February Invitation</div>
                                <h2 className="text-4xl font-serif font-bold mb-2">L&apos;Effervescence</h2>
                                <div className="flex items-center gap-2 text-white/70 text-sm">
                                    <Star className="w-4 h-4 text-gold fill-gold" />
                                    <span>Michelin 2-Star</span>
                                    <span className="w-1 h-1 bg-white/30 rounded-full" />
                                    <span>French Contemporary</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-lg">
                                    <Calendar className="w-5 h-5 text-gold" />
                                    <span>Saturday, February 15 · 7:00 PM</span>
                                </div>
                                <div className="flex items-center gap-3 text-whit/80">
                                    <MapPin className="w-5 h-5 text-gold" />
                                    <span>Nishi-Azabu, Tokyo</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/60 text-sm mt-4 p-3 bg-white/5 rounded-sm">
                                    <span className="text-gold font-bold">Course:</span> &quot;Winter Awakening&quot; — 8 courses
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/dashboard/invitation/123" className="px-6 py-3 bg-gold text-navy font-bold rounded-sm hover:bg-gold-light transition-colors">
                                    View Details
                                </Link>
                                <Link href="/dashboard/invitation/123/accept" className="px-6 py-3 border border-white/20 text-white font-medium rounded-sm hover:bg-white/10 transition-colors">
                                    Accept Invitation
                                </Link>
                            </div>

                            <div className="mt-6 text-white/40 text-xs flex items-center gap-2">
                                <Clock className="w-3 h-3" /> Please respond by February 8
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
                        image="/images/ingredients.jpg"
                        link="/dashboard/profile"
                    />
                </div>
            </main>
        </div>
    );
}

function DashboardCard({ title, subtitle, image, link }: any) {
    return (
        <Link href={link} className="group relative h-64 rounded-sm overflow-hidden block">
            <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy to-transparent">
                <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-gold transition-colors flex items-center gap-2">
                    {title} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                </h3>
                <p className="text-sm text-white/70">{subtitle}</p>
            </div>
        </Link>
    )
}
