"use client";

import { useState } from "react";

export default function PartnerReservationsPage() {
    const [filter, setFilter] = useState("upcoming");

    // Mock Data
    const reservations = [
        { id: 1, name: "Kenji Yamamoto", date: "Feb 14, 2026", time: "7:00 PM", guests: 2, status: "confirmed", tier: "Diamond", tags: ["Anniversary", "Peanut Allergy"], transportation: "Lexus LS (Arranged)" },
        { id: 2, name: "Sarah Smith", date: "Feb 14, 2026", time: "7:30 PM", guests: 4, status: "confirmed", tier: "Platinum", tags: ["Vegetarian x1"], transportation: "Uber Black" },
        { id: 3, name: "Michael Chen", date: "Feb 14, 2026", time: "8:00 PM", guests: 2, status: "pending", tier: "Gold", tags: [], transportation: "Own Car (Valet)" },
        { id: 4, name: "Jessica Davis", date: "Feb 15, 2026", time: "6:30 PM", guests: 2, status: "confirmed", tier: "Diamond", tags: ["Window Seat", "Birthday"], transportation: "Hotel Limo" },
        { id: 5, name: "David Wilson", date: "Feb 10, 2026", time: "7:00 PM", guests: 6, status: "completed", tier: "Platinum", tags: ["Private Room"], transportation: "Taxi" },
        { id: 6, name: "Emma Brown", date: "Feb 08, 2026", time: "8:00 PM", guests: 2, status: "cancelled", tier: "Gold", tags: [], transportation: "-" },
    ];

    const filteredReservations = reservations.filter(r => {
        if (filter === "upcoming") return ["confirmed", "pending"].includes(r.status);
        if (filter === "past") return ["completed", "cancelled"].includes(r.status);
        if (filter === "pending") return r.status === "pending";
        return true;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-light text-white uppercase tracking-tight mb-2">Reservations</h1>
                    <p className="text-gray-400 font-light tracking-wide text-sm">Manage your upcoming bookings and guest requests.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-widest px-4 py-2 rounded transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px]">add</span>
                        New Booking
                    </button>
                    <button className="bg-surface-dark border border-white/10 hover:border-white text-white font-bold text-xs uppercase tracking-widest px-4 py-2 rounded transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px]">download</span>
                        Export
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-1 border-b border-white/10 overflow-x-auto">
                {["upcoming", "pending", "past", "all"].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-6 py-3 text-xs font-bold uppercase tracking-widest border-b-2 transition-colors whitespace-nowrap ${filter === f
                            ? "border-primary text-white"
                            : "border-transparent text-gray-500 hover:text-white"
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="bg-surface-dark border border-white/10 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-gray-400 font-bold uppercase tracking-wider text-xs">
                            <tr>
                                <th className="px-6 py-4">Guest</th>
                                <th className="px-6 py-4">Date & Time</th>
                                <th className="px-6 py-4">Party</th>
                                <th className="px-6 py-4">Special Requests</th>
                                <th className="px-6 py-4">Transportation</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filteredReservations.map((reservation) => (
                                <tr key={reservation.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xs">
                                                {reservation.name.split(" ").map(n => n[0]).join("")}
                                            </div>
                                            <div>
                                                <div className="font-bold text-white">{reservation.name}</div>
                                                <div className="text-[10px] text-primary uppercase tracking-widest">{reservation.tier} Member</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-300">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[16px] text-gray-500">calendar_today</span>
                                            {reservation.date}
                                        </div>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="material-symbols-outlined text-[16px] text-gray-500">schedule</span>
                                            {reservation.time}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-300">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[16px] text-gray-500">person</span>
                                            {reservation.guests} Guests
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-wrap gap-2">
                                            {reservation.tags.length > 0 ? (
                                                reservation.tags.map((tag, i) => (
                                                    <span key={i} className="px-2 py-1 bg-white/10 rounded text-[10px] font-bold text-gray-300 uppercase tracking-wide">
                                                        {tag}
                                                    </span>
                                                ))
                                            ) : (
                                                <span className="text-gray-600 text-[10px] uppercase tracking-wide">-</span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-300 text-xs">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[16px] text-gray-500">directions_car</span>
                                            {reservation.transportation}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <StatusBadge status={reservation.status} />
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">more_horiz</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {filteredReservations.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                        No reservations found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const styles: Record<string, string> = {
        confirmed: "bg-green-500/20 text-green-500",
        pending: "bg-yellow-500/20 text-yellow-500",
        cancelled: "bg-red-500/20 text-red-500",
        completed: "bg-gray-500/20 text-gray-400",
    };

    return (
        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${styles[status]}`}>
            {status}
        </span>
    );
}
