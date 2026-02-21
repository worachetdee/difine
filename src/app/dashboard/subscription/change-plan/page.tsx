"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const TIERS = [
    {
        id: "silver",
        name: "Silver",
        price: "¥45,000",
        tagline: "Smart Curation",
        color: "text-gray-300",
        current: false,
        features: ["1-star course access", "AI-driven matching", "1 guest permission", "Cancel up to 1 week prior"]
    },
    {
        id: "gold",
        name: "Gold",
        price: "¥70,000",
        tagline: "Access & Exploration",
        color: "text-primary",
        current: false,
        features: ["2-star course access", "Member restaurant selection", "2 guest permissions", "Cancel up to 3 days prior", "Chef's table priority"]
    },
    {
        id: "diamond",
        name: "Diamond",
        price: "¥120,000",
        tagline: "Bespoke Hospitality",
        color: "text-white",
        current: true,
        features: ["3-star course access", "Priority selection window", "3 guest permissions", "Complimentary limousine", "24/7 Concierge"]
    }
];

export default function ChangePlanPage() {
    return (
        <div className="bg-background-dark font-display min-h-screen flex flex-col antialiased text-white selection:bg-primary selection:text-white pt-20">
            <main className="flex-1 max-w-6xl mx-auto px-6 py-20 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10 text-center"
                >
                    <Link href="/dashboard/subscription" className="text-xs text-gray-500 hover:text-white uppercase tracking-widest mb-6 inline-block transition-colors">
                        ← Cancel & Return
                    </Link>
                    <h1 className="text-3xl font-light text-white uppercase tracking-tight mb-4">Change Membership Plan</h1>
                    <p className="text-gray-400 font-light tracking-wide text-sm max-w-xl mx-auto">
                        Upgrade for more exclusive access or downgrade to a lighter plan. Changes take effect at the start of your next billing cycle.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {TIERS.map((tier) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className={`relative p-8 rounded-lg border flex flex-col ${tier.current
                                    ? "bg-white/5 border-primary shadow-[0_0_30px_rgba(141,127,104,0.1)] order-first md:order-none scale-105 z-10"
                                    : "bg-surface-dark border-white/10 opacity-80 hover:opacity-100 hover:border-white/30 transition-all"
                                }`}
                        >
                            {tier.current && (
                                <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                                    <span className="bg-primary text-background-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                        Current Plan
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className={`text-xl font-bold uppercase tracking-wide mb-1 ${tier.color}`}>{tier.name}</h3>
                                <p className="text-xs text-gray-500 font-light">{tier.tagline}</p>
                            </div>

                            <div className="mb-8">
                                <div className="text-2xl font-light text-white">{tier.price}<span className="text-sm text-gray-500 ml-1">/mo</span></div>
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-xs text-gray-300 font-light">
                                        <span className={`material-symbols-outlined text-[14px] mt-0.5 ${tier.current ? 'text-primary' : 'text-gray-500'}`}>check</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                disabled={tier.current}
                                className={`w-full py-4 rounded font-bold text-xs uppercase tracking-widest transition-all ${tier.current
                                        ? "bg-white/5 text-gray-500 cursor-default"
                                        : "bg-white text-black hover:bg-gray-200"
                                    }`}
                            >
                                {tier.current ? "Current Plan" : "Switch to " + tier.name}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
}
