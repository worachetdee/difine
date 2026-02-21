"use client";

import { useState } from "react";

export default function FloorManagementPage() {
    // Mock Tables
    const [tables] = useState([
        { id: 1, name: "T1", capacity: 2, status: "occupied", type: "window", x: 1, y: 1 },
        { id: 2, name: "T2", capacity: 2, status: "available", type: "window", x: 1, y: 3 },
        { id: 3, name: "T3", capacity: 4, status: "reserved", type: "booth", x: 3, y: 1 },
        { id: 4, name: "T4", capacity: 4, status: "occupied", type: "booth", x: 3, y: 3 },
        { id: 5, name: "P1", capacity: 8, status: "available", type: "private", x: 5, y: 1 },
    ]);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "available": return "bg-green-500/20 border-green-500/50 text-green-500";
            case "occupied": return "bg-red-500/20 border-red-500/50 text-red-500";
            case "reserved": return "bg-yellow-500/20 border-yellow-500/50 text-yellow-500";
            default: return "bg-gray-500/20 border-gray-500/50 text-gray-500";
        }
    };

    return (
        <div className="h-[calc(100vh-6rem)] flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-light text-white uppercase tracking-tight mb-2">Floor Plan</h1>
                    <p className="text-gray-400 font-light tracking-wide text-sm">Real-time view of restaurant occupancy.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                        <span className="size-3 bg-green-500 rounded-full"></span> Available
                        <span className="size-3 bg-red-500 rounded-full ml-2"></span> Occupied
                        <span className="size-3 bg-yellow-500 rounded-full ml-2"></span> Reserved
                    </div>
                </div>
            </div>

            <div className="flex-1 bg-surface-dark border border-white/10 rounded-lg p-8 relative overflow-hidden">
                {/* Floor Grid Background */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                        backgroundSize: "40px 40px"
                    }}
                />

                {/* Tables */}
                <div className="relative w-full h-full">
                    {tables.map((table) => (
                        <div
                            key={table.id}
                            className={`absolute flex flex-col items-center justify-center border-2 rounded-lg transition-all hover:scale-105 cursor-pointer shadow-lg backdrop-blur-sm ${getStatusColor(table.status)}`}
                            style={{
                                width: table.type === "private" ? "160px" : "100px",
                                height: table.type === "private" ? "240px" : "100px",
                                left: `${table.x * 120}px`,
                                top: `${table.y * 100}px`,
                            }}
                        >
                            <div className="text-lg font-bold">{table.name}</div>
                            <div className="text-[10px] uppercase tracking-wider font-bold opacity-80">{table.capacity} Seats</div>

                            {/* Chairs Visual */}
                            <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-2 rounded bg-white/20`} />
                            {table.capacity > 2 && <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-2 rounded bg-white/20`} />}
                            {table.capacity >= 4 && (
                                <>
                                    <div className={`absolute top-1/2 -left-3 -translate-y-1/2 w-2 h-8 rounded bg-white/20`} />
                                    <div className={`absolute top-1/2 -right-3 -translate-y-1/2 w-2 h-8 rounded bg-white/20`} />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
