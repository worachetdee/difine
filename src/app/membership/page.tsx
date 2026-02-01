"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

const plans = [
    {
        name: "Member",
        price: "$2,500",
        period: "/year",
        features: [
            "Access to all DiFine partner restaurants",
            "Standard booking window (30 days)",
            "Digital membership card",
            "No booking fees",
        ],
        notIncluded: ["Concierge Service", "Priority Waitlist", "Private Events"],
        recommended: false,
    },
    {
        name: "Gold",
        price: "$5,000",
        period: "/year",
        features: [
            "Access to all DiFine partner restaurants",
            "Priority booking window (60 days)",
            "Metal membership card",
            "No booking fees",
            "24/7 Concierge Service",
            "Priority Waitlist access",
        ],
        notIncluded: ["Private Events"],
        recommended: true,
    },
    {
        name: "Platinum",
        price: "$10,000",
        period: "/year",
        features: [
            "Global access to all partner restaurants",
            "Immediate booking window (90 days)",
            "Titanium membership card",
            "Waived booking fees",
            "Dedicated Lifestyle Manager",
            "Top-priority Waitlist",
            "Exclusive invitations to Private Events",
            "Chef's Table experiences",
        ],
        notIncluded: [],
        recommended: false,
    },
];

export default function MembershipPage() {
    return (
        <div className="min-h-screen bg-obsidian text-white pt-24 pb-12">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-bold mb-4"
                    >
                        Select Your <span className="text-gold">Status</span>
                    </motion.h1>
                    <p className="text-silver/60 max-w-2xl mx-auto">
                        Choose the level of access that suits your lifestyle.
                        All memberships include our core promise of excellence.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative p-8 rounded-2xl border ${plan.recommended
                                    ? "border-gold bg-gold/5 shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                                    : "border-white/10 bg-white/5"
                                }`}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-obsidian text-xs font-bold uppercase tracking-wider rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-serif font-bold mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-8">
                                <span className="text-4xl font-bold text-gold">{plan.price}</span>
                                <span className="text-silver/50 ml-2">{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-silver/80 text-sm">
                                        <Check className="w-5 h-5 text-gold shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                                {plan.notIncluded.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-white/20 text-sm">
                                        <X className="w-5 h-5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.recommended
                                    ? "bg-gold text-obsidian hover:bg-gold-light"
                                    : "bg-white/10 hover:bg-white/20 text-white"
                                }`}>
                                Apply for {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
