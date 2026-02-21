"use client";

import { motion } from "framer-motion";

export function PaymentSetup({ plan, onNext }: { plan: string, onNext: () => void }) {
    const prices: Record<string, string> = { silver: "¥45,000", gold: "¥70,000", diamond: "¥120,000" };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-light uppercase tracking-tight mb-2">Setup Payment</h1>
                <p className="text-gray-400 font-light text-sm">Secure your {plan} membership.</p>
            </div>

            <div className="bg-surface-dark border border-white/10 rounded-lg p-6 mb-8">
                <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-6">
                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Your Plan</div>
                        <div className="text-xl font-bold uppercase text-primary">{plan}</div>
                    </div>
                    <div className="text-right">
                        <div className="text-xl font-light text-white">{prices[plan]}</div>
                        <div className="text-[10px] uppercase text-gray-500">/ month</div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Card Number</label>
                        <div className="relative">
                            <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white/5 border border-white/10 rounded p-3 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-primary" />
                            <span className="material-symbols-outlined absolute right-3 top-3 text-gray-500">credit_card</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Expiry</label>
                            <input type="text" placeholder="MM/YY" className="w-full bg-white/5 border border-white/10 rounded p-3 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">CVC</label>
                            <input type="text" placeholder="123" className="w-full bg-white/5 border border-white/10 rounded p-3 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-primary" />
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={onNext}
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-sm uppercase tracking-widest py-4 rounded transition-colors shadow-lg mb-4"
            >
                Start Membership · {prices[plan]}
            </button>

            <div className="bg-black text-white w-full py-4 rounded font-bold text-sm flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-900 border border-white/10">
                <span className="material-symbols-outlined">phone_iphone</span> Pay with Apple Pay
            </div>

            <p className="text-center text-[10px] text-gray-500 mt-6 leading-relaxed">
                <span className="material-symbols-outlined text-[12px] align-middle mr-1">lock</span>
                Payments secured by Stripe. You will be charged today. First invitation arrives within 48 hours.
            </p>
        </div>
    );
}
