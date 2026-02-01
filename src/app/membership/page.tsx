"use client";

import { motion } from "framer-motion";
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
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark font-display text-white antialiased selection:bg-primary selection:text-white pt-24 pb-12">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-4">
                            Select Your <span className="text-primary font-bold">Status</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                            Choose the level of access that suits your lifestyle.
                            All memberships include our core promise of excellence.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative p-8 rounded-lg border ${plan.recommended
                                    ? "border-primary bg-surface-lighter shadow-[0_0_30px_rgba(141,127,104,0.1)]"
                                    : "border-white/10 bg-surface-dark"
                                }`}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold uppercase tracking-wide mb-2 text-white">{plan.name}</h3>
                            <div className="flex items-baseline mb-8">
                                <span className={`text-4xl font-light ${plan.recommended ? 'text-primary' : 'text-white'}`}>{plan.price}</span>
                                <span className="text-gray-500 ml-2 text-sm uppercase tracking-wider">{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-gray-300 text-sm font-light">
                                        <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                                {plan.notIncluded.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-gray-600 text-sm font-light">
                                        <span className="material-symbols-outlined text-[18px] shrink-0">close</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded font-bold text-xs uppercase tracking-widest transition-all ${plan.recommended
                                    ? "bg-primary text-white hover:bg-primary-hover"
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
