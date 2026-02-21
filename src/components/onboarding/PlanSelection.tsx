"use client";

import { motion } from "framer-motion";

const TIERS = [
    {
        id: "silver",
        name: "Silver",
        price: "¥45,000",
        usd: "$290",
        tagline: "Smart Curation",
        color: "text-gray-300",
        features: ["1-star course", "AI match", "1 guest", "Cancel 1 wk"],
    },
    {
        id: "gold",
        name: "Gold",
        price: "¥70,000",
        usd: "$450",
        tagline: "Access & Exploration",
        color: "text-primary",
        popular: true,
        features: ["2-star course", "Choose restaurant", "2 guests", "Cancel 3 days", "Chef's table"],
    },
    {
        id: "diamond",
        name: "Diamond",
        price: "¥120,000",
        usd: "$770",
        tagline: "Bespoke Hospitality",
        color: "text-white",
        features: ["3-star course", "Priority selection", "3 guests", "Limousine", "Concierge"],
    }
];

export function PlanSelection({ selectedPlan, onSelect, onNext }: { selectedPlan: string, onSelect: (p: string) => void, onNext: () => void }) {
    return (
        <div className="w-full max-w-4xl">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-light uppercase tracking-tight mb-4">Choose Your Experience</h1>
                <p className="text-gray-400 font-light text-sm">Select the tier that best fits your lifestyle.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-10">
                {TIERS.map((tier) => (
                    <div
                        key={tier.id}
                        onClick={() => onSelect(tier.id)}
                        className={`relative p-6 rounded-lg border cursor-pointer transition-all duration-300 ${selectedPlan === tier.id
                                ? "bg-white/10 border-primary shadow-2xl scale-105 z-10"
                                : "bg-surface-dark border-white/10 hover:border-white/30 opacity-60 hover:opacity-100"
                            }`}
                    >
                        {tier.popular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                                Most Popular
                            </div>
                        )}
                        <h3 className={`text-xl font-bold uppercase tracking-wide mb-1 ${tier.color}`}>{tier.name}</h3>
                        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-4">{tier.tagline}</p>

                        <div className="mb-6">
                            <span className="text-2xl font-light text-white">{tier.price}</span>
                            <span className="text-[10px] text-gray-500 block">/mo approx {tier.usd}</span>
                        </div>

                        <ul className="space-y-2 mb-6">
                            {tier.features.map((feat, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                                    <span className={`material-symbols-outlined text-[14px] ${tier.id === 'silver' ? 'text-gray-500' : 'text-primary'}`}>check</span>
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <div className={`size-6 rounded-full border border-white/20 mx-auto flex items-center justify-center ${selectedPlan === tier.id ? 'bg-primary border-primary' : ''}`}>
                            {selectedPlan === tier.id && <span className="material-symbols-outlined text-[14px] text-white">check</span>}
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={onNext}
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-sm uppercase tracking-widest py-4 rounded transition-colors shadow-lg"
            >
                Confirm Selection
            </button>

            <p className="text-center text-gray-600 text-xs mt-6">
                Month-to-month. No long-term contract. Upgrade anytime.
            </p>
        </div>
    );
}
