"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Step Components (Placeholder for now, will implement properly below)
import { IdentityVerification } from "@/components/onboarding/IdentityVerification";
import { PlanSelection } from "@/components/onboarding/PlanSelection";
import { TasteProfile } from "@/components/onboarding/TasteProfile";
import { DataConsent } from "@/components/onboarding/DataConsent";
import { PaymentSetup } from "@/components/onboarding/PaymentSetup";
import { OnboardingSuccess } from "@/components/onboarding/OnboardingSuccess";

export default function OnboardingPage() {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        plan: "gold",
        cuisines: [],
        diningStyle: [],
        schedule: [],
        dietary: [],
        paymentMethod: "",
    });

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);
    const updateData = (key: string, value: any) => {
        setUserData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="min-h-screen bg-background-dark text-white font-display overflow-x-hidden relative">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-background-dark/80 backdrop-blur-sm border-b border-white/5">
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center size-6 rounded bg-primary/20 text-primary">
                        <span className="material-symbols-outlined text-[14px] font-icon">restaurant_menu</span>
                    </div>
                    <span className="text-sm font-bold tracking-[0.1em] uppercase">DiFine</span>
                </div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                    Step {step} of 6
                </div>
            </header>

            {/* Main Content Area */}
            <main className="relative z-10 pt-28 pb-20 px-4 min-h-screen flex flex-col items-center justify-center max-w-2xl mx-auto w-full">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <StepWrapper key="step1">
                            <IdentityVerification onNext={nextStep} />
                        </StepWrapper>
                    )}
                    {step === 2 && (
                        <StepWrapper key="step2">
                            <PlanSelection
                                selectedPlan={userData.plan}
                                onSelect={(plan: string) => updateData("plan", plan)}
                                onNext={nextStep}
                            />
                        </StepWrapper>
                    )}
                    {step === 3 && (
                        <StepWrapper key="step3">
                            <TasteProfile
                                data={userData}
                                updateData={updateData}
                                onNext={nextStep}
                            />
                        </StepWrapper>
                    )}
                    {step === 4 && (
                        <StepWrapper key="step4">
                            <DataConsent onNext={nextStep} />
                        </StepWrapper>
                    )}
                    {step === 5 && (
                        <StepWrapper key="step5">
                            <PaymentSetup
                                plan={userData.plan}
                                onNext={nextStep}
                            />
                        </StepWrapper>
                    )}
                    {step === 6 && (
                        <StepWrapper key="step6">
                            <OnboardingSuccess plan={userData.plan} />
                        </StepWrapper>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}

function StepWrapper({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}
