"use client";

import { motion } from "framer-motion";

export default function ProfilePage() {
    // Mock User
    const user = {
        firstName: "Kenji",
        lastName: "Yamamoto",
        email: "kenji.y@example.com",
        phone: "+81 90-1234-5678",
        membership: "Diamond",
        joinedDate: "January 2024"
    };

    return (
        <main className="max-w-[1000px] mx-auto px-6 pt-28 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10"
            >
                <h1 className="text-3xl font-light text-white uppercase tracking-tight mb-2">My Profile</h1>
                <p className="text-gray-400 mt-1 font-light tracking-wide text-sm">Manage your account settings and dietary preferences.</p>
            </motion.div>

            <div className="grid gap-8">
                {/* Membership Card */}
                <section className="bg-surface-dark rounded-lg overflow-hidden border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className="size-16 rounded bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                            <span className="material-symbols-outlined text-[32px] font-icon">diamond</span>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold uppercase tracking-wide text-white">Diamond Member</h2>
                            <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Member since {user.joinedDate}</p>
                        </div>
                    </div>
                    <button className="px-6 py-3 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-white/5 transition-colors">
                        Manage Subscription
                    </button>
                </section>

                {/* Personal Information */}
                <section className="bg-background-dark border border-white/10 rounded-lg p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Personal Information</h2>
                        <button className="text-xs text-gray-400 hover:text-white uppercase tracking-wider transition-colors">Edit</button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">First Name</label>
                            <div className="text-white font-light border-b border-white/10 pb-2">{user.firstName}</div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Last Name</label>
                            <div className="text-white font-light border-b border-white/10 pb-2">{user.lastName}</div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Email Address</label>
                            <div className="text-white font-light border-b border-white/10 pb-2">{user.email}</div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Phone Number</label>
                            <div className="text-white font-light border-b border-white/10 pb-2">{user.phone}</div>
                        </div>
                    </div>
                </section>

                {/* Dietary Preferences */}
                <section className="bg-background-dark border border-white/10 rounded-lg p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Dietary Preferences</h2>
                        <button className="text-xs text-primary hover:text-white uppercase tracking-wider transition-colors font-bold">Update</button>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2 block">Allergies</label>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-surface-dark border border-white/10 rounded text-xs text-white">Shellfish</span>
                                <span className="px-3 py-1 bg-surface-dark border border-white/10 rounded text-xs text-white">Peanuts</span>
                                <button className="px-3 py-1 border border-dashed border-white/20 rounded text-xs text-gray-400 hover:text-white hover:border-white/50 transition-colors">+ Add</button>
                            </div>
                        </div>
                        <div>
                            <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2 block">Dislikes</label>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-surface-dark border border-white/10 rounded text-xs text-white">Cilantro</span>
                                <button className="px-3 py-1 border border-dashed border-white/20 rounded text-xs text-gray-400 hover:text-white hover:border-white/50 transition-colors">+ Add</button>
                            </div>
                        </div>
                        <div>
                            <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2 block">Special Requests</label>
                            <textarea
                                className="w-full bg-surface-dark border border-white/10 rounded p-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600 font-light"
                                rows={3}
                                placeholder="Any other details our chefs should know..."
                                defaultValue="I prefer sparkling water over still."
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
