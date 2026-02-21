"use client";

import { motion } from "framer-motion";

export function DataConsent({ onNext }: { onNext: () => void }) {
    return (
        <div className="w-full max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-light uppercase tracking-tight mb-6">Help us know you better</h1>
            <p className="text-gray-400 font-light text-sm mb-10 max-w-md mx-auto">
                Connect your card to unlock smarter dining recommendations based on your culinary history.
            </p>

            <div className="bg-surface-dark border border-white/10 rounded-lg p-8 mb-8 text-left">
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">How It Works</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                    With your consent, DiFine securely reads your dining spending patterns through your card provider&apos;s API.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-2">We Learn:</h4>
                        <ul className="space-y-1 text-xs text-gray-400">
                            <li>• Restaurants you visit often</li>
                            <li>• Typical spending range</li>
                            <li>• Cuisine patterns</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-2">We NEVER:</h4>
                        <ul className="space-y-1 text-xs text-gray-400">
                            <li>• Store your card number</li>
                            <li>• Access non-dining purchases</li>
                            <li>• Share data with third parties</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="space-y-3 mb-8">
                <button className="w-full py-4 bg-[#006fcf] text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-[#005fb0] transition-colors flex items-center justify-center gap-2">
                    Connect Amex
                </button>
                <button className="w-full py-4 bg-[#1a1f71] text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-[#131756] transition-colors flex items-center justify-center gap-2">
                    Connect Visa
                </button>
                <button className="w-full py-4 bg-[#eb001b] text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-[#bd0016] transition-colors flex items-center justify-center gap-2">
                    Connect Mastercard
                </button>
            </div>

            <button onClick={onNext} className="text-gray-500 hover:text-white text-xs uppercase tracking-widest mb-1">
                Skip for now
            </button>
            <p className="text-[10px] text-gray-600">You can connect later in Settings.</p>
        </div>
    );
}
