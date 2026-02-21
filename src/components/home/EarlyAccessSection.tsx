"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function EarlyAccessSection() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [inviteCode, setInviteCode] = useState("");
    const [requestStatus, setRequestStatus] = useState<"idle" | "success">("idle");
    const [codeError, setCodeError] = useState(false);

    const handleRequestAccess = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock submission
        setRequestStatus("success");
    };

    const handleVerifyCode = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock verification - in real app, check against DB
        if (inviteCode.toUpperCase() === "DIFINE-VIP" || inviteCode.length > 5) {
            router.push("/sign-up");
        } else {
            setCodeError(true);
        }
    };

    return (
        <section className="py-24 px-6 bg-surface-dark border-t border-white/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="max-w-[1280px] mx-auto">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 relative z-10">

                    {/* Left: Request Access */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-display font-light uppercase tracking-tight text-white mb-4">
                                Join the Waitlist
                            </h2>
                            <p className="text-gray-400 font-light leading-relaxed">
                                DiFine membership is strictly limited to ensure the highest level of service.
                                Request an evaluation to be considered for our next intake.
                            </p>
                        </div>

                        {requestStatus === "success" ? (
                            <div className="p-6 border border-primary/30 bg-primary/5 rounded">
                                <p className="text-primary text-sm uppercase tracking-widest font-bold">Request Received</p>
                                <p className="text-gray-300 text-sm mt-2 font-light">
                                    We have added {email} to our priority evaluation list. We will contact you shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleRequestAccess} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-background-dark border border-white/10 rounded p-4 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="user@example.com"
                                    />
                                </div>
                                <button type="submit" className="px-8 py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-white/5 transition-colors w-full md:w-auto">
                                    Request Evaluation
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right: Invitation Code */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-display font-light uppercase tracking-tight text-white mb-4">
                                Have an Invitation?
                            </h2>
                            <p className="text-gray-400 font-light leading-relaxed">
                                If you have received a private invitation code from a partner or member, enter it below to bypass the waitlist.
                            </p>
                        </div>

                        <form onSubmit={handleVerifyCode} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Invitation Code</label>
                                <input
                                    type="text"
                                    required
                                    value={inviteCode}
                                    onChange={(e) => {
                                        setInviteCode(e.target.value);
                                        setCodeError(false);
                                    }}
                                    className="w-full bg-background-dark border border-white/10 rounded p-4 text-white font-mono tracking-widest focus:outline-none focus:border-primary transition-colors uppercase"
                                    placeholder="XXXX-XXXX"
                                />
                                {codeError && (
                                    <p className="text-red-400 text-xs uppercase tracking-widest mt-2 animate-pulse">
                                        Invalid or Expired Code
                                    </p>
                                )}
                            </div>
                            <button type="submit" className="px-8 py-4 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-primary-hover transition-colors w-full md:w-auto shadow-lg shadow-primary/20">
                                Verify & Access
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
