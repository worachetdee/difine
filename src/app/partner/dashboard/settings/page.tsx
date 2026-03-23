"use client";

import { useState } from "react";

export default function PartnerSettingsPage() {
    const [notifications, setNotifications] = useState({ email: true, sms: false, app: true });

    return (
        <div className="space-y-8 max-w-3xl">
            <div>
                <h1 className="text-2xl font-light text-white uppercase tracking-tight mb-2">Settings</h1>
                <p className="text-gray-400 font-light tracking-wide text-sm">Manage your restaurant profile and partner preferences.</p>
            </div>

            {/* Restaurant Profile */}
            <div className="bg-surface-dark border border-white/10 rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10">
                    <h2 className="text-white text-sm font-bold uppercase tracking-widest">Restaurant Profile</h2>
                </div>
                <div className="p-6 space-y-5">
                    <div>
                        <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-bold">Restaurant Name</label>
                        <input type="text" defaultValue="L'Effervescence" className="w-full bg-white/5 border border-white/10 p-3 rounded text-white text-sm focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-bold">Cuisine Type</label>
                            <input type="text" defaultValue="French-Japanese" className="w-full bg-white/5 border border-white/10 p-3 rounded text-white text-sm focus:outline-none focus:border-primary transition-colors" />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-bold">Price Range</label>
                            <input type="text" defaultValue="$$$$" className="w-full bg-white/5 border border-white/10 p-3 rounded text-white text-sm focus:outline-none focus:border-primary transition-colors" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-bold">Address</label>
                        <input type="text" defaultValue="2-26-4 Nishiazabu, Minato-ku, Tokyo" className="w-full bg-white/5 border border-white/10 p-3 rounded text-white text-sm focus:outline-none focus:border-primary transition-colors" />
                    </div>
                </div>
            </div>

            {/* Notifications */}
            <div className="bg-surface-dark border border-white/10 rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10">
                    <h2 className="text-white text-sm font-bold uppercase tracking-widest">Notifications</h2>
                </div>
                <div className="p-6 space-y-4">
                    {([
                        { key: "email" as const, label: "Email Notifications", desc: "Receive booking confirmations and updates via email" },
                        { key: "sms" as const, label: "SMS Alerts", desc: "Get instant alerts for new DiFine reservations" },
                        { key: "app" as const, label: "In-App Notifications", desc: "Show notifications in the partner dashboard" },
                    ]).map((item) => (
                        <div key={item.key} className="flex items-center justify-between py-2">
                            <div>
                                <p className="text-white text-sm font-medium">{item.label}</p>
                                <p className="text-gray-500 text-xs">{item.desc}</p>
                            </div>
                            <button
                                onClick={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                                className={`w-11 h-6 rounded-full transition-colors relative ${notifications[item.key] ? "bg-primary" : "bg-white/10"}`}
                            >
                                <div className={`size-4 bg-white rounded-full absolute top-1 transition-transform ${notifications[item.key] ? "translate-x-6" : "translate-x-1"}`} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-surface-dark border border-white/10 rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10">
                    <h2 className="text-white text-sm font-bold uppercase tracking-widest">Operating Hours</h2>
                </div>
                <div className="p-6 space-y-3">
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                        <div key={day} className="flex items-center justify-between py-1">
                            <span className="text-gray-400 text-sm w-28">{day}</span>
                            <div className="flex items-center gap-2">
                                <input type="text" defaultValue={day === "Sunday" ? "Closed" : "18:00"} className="w-20 bg-white/5 border border-white/10 px-3 py-1.5 rounded text-white text-xs text-center focus:outline-none focus:border-primary transition-colors" />
                                {day !== "Sunday" && (
                                    <>
                                        <span className="text-gray-600 text-xs">to</span>
                                        <input type="text" defaultValue="23:00" className="w-20 bg-white/5 border border-white/10 px-3 py-1.5 rounded text-white text-xs text-center focus:outline-none focus:border-primary transition-colors" />
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end">
                <button className="bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded transition-colors">
                    Save Changes
                </button>
            </div>
        </div>
    );
}
