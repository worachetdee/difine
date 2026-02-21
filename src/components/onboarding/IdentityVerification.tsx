"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function IdentityVerification({ onNext }: { onNext: () => void }) {
    const [status, setStatus] = useState<"idle" | "uploading" | "complete">("idle");

    const handleUpload = () => {
        setStatus("uploading");
        setTimeout(() => {
            setStatus("complete");
        }, 1500);
    };

    return (
        <div className="w-full">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-light uppercase tracking-tight mb-4">Confirming Your Eligibility</h1>
                <p className="text-gray-400 font-light leading-relaxed max-w-md mx-auto text-sm">
                    To maintain our exclusive community, we verify every member. This takes less than a minute.
                </p>
            </div>

            <div className="bg-surface-dark border border-white/10 rounded-lg p-8 mb-8 text-center">
                <div className="mb-6">
                    <div className="size-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <span className="material-symbols-outlined text-[32px]">id_card</span>
                    </div>
                    <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Upload Government ID</h3>
                    <p className="text-gray-500 text-xs">Passport, Driver&apos;s License, or My Number Card</p>
                </div>

                {status === "idle" && (
                    <div className="flex flex-col gap-3">
                        <button onClick={handleUpload} className="w-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest py-4 rounded transition-colors border border-white/5">
                            Take Photo
                        </button>
                        <button onClick={handleUpload} className="w-full bg-transparent hover:bg-white/5 text-gray-400 hover:text-white font-bold text-xs uppercase tracking-widest py-4 rounded transition-colors border border-white/10 border-dashed">
                            Upload File
                        </button>
                    </div>
                )}

                {status === "uploading" && (
                    <div className="py-8">
                        <div className="size-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-primary text-xs font-bold uppercase tracking-widest animate-pulse">Verifying...</p>
                    </div>
                )}

                {status === "complete" && (
                    <div className="py-6">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="size-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <span className="material-symbols-outlined">check</span>
                        </motion.div>
                        <p className="text-white text-xs font-bold uppercase tracking-widest">Verification Successful</p>
                    </div>
                )}
            </div>

            <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-8">
                    <span className="material-symbols-outlined text-[14px]">lock</span>
                    Your ID is encrypted and never stored after verification.
                </div>

                <button
                    onClick={onNext}
                    disabled={status === "uploading"}
                    className={`w-full py-4 rounded font-bold text-xs uppercase tracking-widest transition-all ${status === "complete"
                            ? "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20"
                            : "bg-white/10 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    Continue
                </button>

                <button onClick={onNext} className="text-gray-600 text-xs hover:text-gray-400 underline underline-offset-4">
                    Verify Later
                </button>
            </div>
        </div>
    );
}
