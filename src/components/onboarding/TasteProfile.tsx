"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CUISINES = [
    { emoji: "🇫🇷", label: "French" },
    { emoji: "🇯🇵", label: "Japanese" },
    { emoji: "🇮🇹", label: "Italian" },
    { emoji: "🌏", label: "Fusion" },
    { emoji: "🇪🇸", label: "Spanish" },
    { emoji: "🇨🇳", label: "Chinese" },
    { emoji: "🥩", label: "Steak / Grill" },
    { emoji: "🍣", label: "Sushi / Omakase" },
    { emoji: "🌿", label: "Vegetarian" },
];

const STYLES = [
    { icon: "candle", label: "Intimate & Quiet", desc: "Small rooms, counter seating, personal chef attention" },
    { icon: "celebration", label: "Social & Lively", desc: "Open dining rooms, bustling atmosphere, see-and-be-seen" },
    { icon: "nature", label: "Nature & Views", desc: "Garden settings, scenic windows, rooftop terraces" },
    { icon: "theater_comedy", label: "Theatrical", desc: "Open kitchens, tasting menus, multi-sensory presentations" },
];

const DIETARY = [
    { label: "Nut Allergy", icon: "🚫🥜" },
    { label: "Shellfish Allergy", icon: "🚫🦐" },
    { label: "Dairy Free", icon: "🚫🥛" },
    { label: "Gluten Free", icon: "🚫🌾" },
    { label: "Vegetarian", icon: "🌱" },
    { label: "Pescatarian", icon: "🐟" },
    { label: "Vegan", icon: "🥬" },
    { label: "Other", icon: "✏️" },
];

export function TasteProfile({ data, updateData, onNext }: { data: any, updateData: (k: string, v: any) => void, onNext: () => void }) {
    const [subStep, setSubStep] = useState(1);

    const toggleSelection = (list: string[], item: string, max?: number) => {
        if (list.includes(item)) {
            return list.filter(i => i !== item);
        } else {
            if (max && list.length >= max) return list;
            return [...list, item];
        }
    };

    const handleNext = () => {
        if (subStep < 4) setSubStep(s => s + 1);
        else onNext();
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="text-center mb-8">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest block mb-2">Taste Profile · Step {subStep}/4</span>
                <h1 className="text-2xl font-light uppercase tracking-tight mb-2">
                    {subStep === 1 && "What excites your palate?"}
                    {subStep === 2 && "How do you like to dine?"}
                    {subStep === 3 && "When do you prefer to dine?"}
                    {subStep === 4 && "Any dietary needs?"}
                </h1>
            </div>

            <div className="relative min-h-[300px]">
                <AnimatePresence mode="wait">
                    {/* Sub-step 1: CUISINE */}
                    {subStep === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {CUISINES.map((c) => (
                                    <button
                                        key={c.label}
                                        onClick={() => updateData("cuisines", toggleSelection(data.cuisines, c.label))}
                                        className={`p-4 rounded border transition-all ${data.cuisines.includes(c.label)
                                            ? "bg-white/10 border-primary shadow-[0_0_15px_rgba(141,127,104,0.3)]"
                                            : "bg-surface-dark border-white/10 hover:border-white/30 text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        <div className="text-2xl mb-2">{c.emoji}</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest">{c.label}</div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Sub-step 2: STYLE */}
                    {subStep === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4 mb-8"
                        >
                            {STYLES.map((s) => (
                                <button
                                    key={s.label}
                                    onClick={() => updateData("diningStyle", toggleSelection(data.diningStyle, s.label, 2))}
                                    className={`w-full p-6 rounded border text-left flex items-center gap-4 transition-all ${data.diningStyle.includes(s.label)
                                        ? "bg-white/10 border-primary"
                                        : "bg-surface-dark border-white/10 hover:border-white/30"
                                        }`}
                                >
                                    <span className={`material-symbols-outlined text-[24px] ${data.diningStyle.includes(s.label) ? 'text-primary' : 'text-gray-500'}`}>{s.icon}</span>
                                    <div>
                                        <div className="text-sm font-bold uppercase tracking-wide text-white mb-1">{s.label}</div>
                                        <div className="text-xs text-gray-500 font-light">{s.desc}</div>
                                    </div>
                                </button>
                            ))}
                            <p className="text-center text-[10px] text-gray-500 pt-2">Select up to 2 preferences</p>
                        </motion.div>
                    )}

                    {/* Sub-step 3: SCHEDULE */}
                    {subStep === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="mb-8"
                        >
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 block">Preferred Days</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                                    <button
                                        key={day}
                                        onClick={() => updateData("schedule", toggleSelection(data.schedule, day))}
                                        className={`size-10 rounded-full text-xs font-bold uppercase flex items-center justify-center transition-colors ${data.schedule.includes(day)
                                            ? "bg-primary text-white"
                                            : "bg-surface-dark border border-white/10 text-gray-500 hover:text-white hover:border-white/30"
                                            }`}
                                    >
                                        {day[0]}
                                    </button>
                                ))}
                            </div>

                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 block">Preferred Time</p>
                            <div className="space-y-2">
                                {["Early (17:30 – 18:30)", "Standard (18:30 – 19:30)", "Late (20:00 – 21:00)"].map((time) => (
                                    <label key={time} className="flex items-center gap-3 p-4 bg-surface-dark border border-white/10 rounded cursor-pointer hover:bg-white/5 transition-colors">
                                        <input type="radio" name="time" className="accent-primary" />
                                        <span className="text-sm text-gray-300 font-light">{time}</span>
                                    </label>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Sub-step 4: DIETARY */}
                    {subStep === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="mb-8"
                        >
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {DIETARY.map((d) => (
                                    <button
                                        key={d.label}
                                        onClick={() => updateData("dietary", toggleSelection(data.dietary, d.label))}
                                        className={`p-4 rounded border text-left transition-all ${data.dietary.includes(d.label)
                                            ? "bg-white/10 border-primary"
                                            : "bg-surface-dark border-white/10 hover:border-white/30 text-gray-400"
                                            }`}
                                    >
                                        <span className="text-lg mr-2">{d.icon}</span>
                                        <span className="text-xs font-bold uppercase tracking-wide">{d.label}</span>
                                    </button>
                                ))}
                            </div>
                            <textarea
                                placeholder="Additional notes for chefs (e.g. 'mild spice only')..."
                                className="w-full bg-surface-dark border border-white/10 rounded p-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 min-h-[100px]"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <button
                onClick={handleNext}
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-sm uppercase tracking-widest py-4 rounded transition-colors"
                disabled={subStep === 1 && data.cuisines.length === 0}
            >
                {subStep === 4 ? "Complete Profile" : "Next Step"}
            </button>

            {subStep === 1 && (
                <button onClick={() => { updateData("cuisines", ["Surprise Me"]); handleNext(); }} className="w-full mt-4 text-xs text-gray-500 hover:text-white uppercase tracking-widest">
                    Surprise me — I&apos;m open to anything
                </button>
            )}
        </div>
    );
}
