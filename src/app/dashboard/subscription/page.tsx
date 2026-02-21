"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SubscriptionPage() {
    return (
        <div className="bg-background-dark font-display min-h-screen flex flex-col antialiased text-white selection:bg-primary selection:text-white pt-20">
            <main className="flex-1 max-w-4xl mx-auto px-6 py-20 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10"
                >
                    <Link href="/dashboard/profile" className="text-xs text-gray-500 hover:text-white uppercase tracking-widest mb-4 inline-block transition-colors">
                        ← Back to Profile
                    </Link>
                    <h1 className="text-3xl font-light text-white uppercase tracking-tight mb-2">Manage Subscription</h1>
                    <p className="text-gray-400 mt-1 font-light tracking-wide text-sm">View your plan details and billing history.</p>
                </motion.div>

                {/* Subscription Details */}
                <section className="bg-surface-dark border border-white/10 rounded-lg overflow-hidden mb-8">
                    <div className="p-8 border-b border-white/10">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-2">Current Plan</h2>
                                <h3 className="text-2xl font-light text-white uppercase tracking-tight">Diamond Membership</h3>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-green-900/30 border border-green-500/30 text-green-400 text-[10px] font-bold uppercase tracking-widest rounded">Active</span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block mb-1">Billing Interval</label>
                                    <div className="text-white text-sm font-medium">Monthly · ¥120,000</div>
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block mb-1">Next Billing Date</label>
                                    <div className="text-white text-sm font-medium">March 15, 2026</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block mb-1">Payment Method</label>
                                    <div className="flex items-center gap-2 text-white text-sm">
                                        <span className="material-symbols-outlined text-gray-400">credit_card</span>
                                        Visa ending in 4242
                                    </div>
                                </div>
                                <div>
                                    <button className="text-xs text-primary hover:text-white uppercase tracking-widest font-bold transition-colors">
                                        Update Payment Method
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-black/20 flex gap-4">
                        <Link href="/dashboard/subscription/change-plan" className="px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded hover:bg-gray-200 transition-colors inline-block text-center">
                            Change Plan
                        </Link>
                        <button className="px-6 py-3 border border-white/10 text-red-400 font-bold text-xs uppercase tracking-widest rounded hover:bg-white/5 transition-colors">
                            Cancel Membership
                        </button>
                    </div>
                </section>

                {/* Billing History */}
                <section className="bg-surface-dark border border-white/10 rounded-lg p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Billing History</h2>
                        <button className="text-xs text-gray-400 hover:text-white uppercase tracking-wider transition-colors">Download All</button>
                    </div>
                    <div className="space-y-1">
                        {[
                            { date: "Feb 15, 2026", amount: "¥120,000", status: "Paid", invoice: "INV-2026-003" },
                            { date: "Jan 15, 2026", amount: "¥120,000", status: "Paid", invoice: "INV-2026-002" },
                            { date: "Dec 15, 2025", amount: "¥120,000", status: "Paid", invoice: "INV-2026-001" },
                        ].map((invoice, i) => (
                            <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 transition-colors rounded">
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-gray-500">description</span>
                                    <div>
                                        <div className="text-sm text-white font-medium">{invoice.date}</div>
                                        <div className="text-xs text-gray-500">{invoice.invoice}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-white font-medium">{invoice.amount}</div>
                                    <div className="text-[10px] text-green-400 font-bold uppercase tracking-wider">{invoice.status}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
