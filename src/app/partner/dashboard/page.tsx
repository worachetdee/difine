"use client";

export default function PartnerDashboard() {
    return (
        <div className="space-y-8">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-light text-white uppercase tracking-tight mb-2">Dashboard Overview</h1>
                    <p className="text-gray-400 font-light tracking-wide text-sm">Welcome back. Here's what's happening today at L'Effervescence.</p>
                </div>
                <div className="bg-surface-dark border border-white/10 px-4 py-2 rounded text-xs uppercase tracking-widest text-white flex items-center gap-2">
                    <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                    Restaurant Open
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    title="Today's Bookings"
                    value="24"
                    subtitle="+4 from yesterday"
                    icon="table_restaurant"
                />
                <StatCard
                    title="Pending Requests"
                    value="3"
                    subtitle="Requires attention"
                    icon="notifications_active"
                    highlight
                />
                <StatCard
                    title="Average Rating"
                    value="4.9"
                    subtitle="Based on 128 reviews"
                    icon="star"
                />
            </div>

            {/* Recent Reservations */}
            <div className="bg-surface-dark border border-white/10 rounded-lg overflow-hidden">
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                    <h2 className="text-lg font-light text-white uppercase tracking-tight">Today's Guests</h2>
                    <button className="text-primary text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">View All</button>
                </div>
                <div className="divide-y divide-white/5">
                    {[
                        { name: "Alexander Hamilton", party: 4, time: "6:30 PM", initials: "AH" },
                        { name: "Isabella Rossi", party: 2, time: "7:00 PM", initials: "IR" },
                        { name: "Wei Chen", party: 6, time: "7:15 PM", initials: "WC" },
                        { name: "Sarah Jenkins", party: 2, time: "8:00 PM", initials: "SJ" }
                    ].map((guest, i) => (
                        <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                                    <span className="font-bold text-xs">{guest.initials}</span>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">{guest.name}</div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Party of {guest.party} · {guest.time}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="px-2 py-1 bg-green-500/20 text-green-500 text-[10px] font-bold uppercase tracking-widest rounded">Confirmed</span>
                                <button className="size-8 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                                    <span className="material-symbols-outlined text-[16px]">more_vert</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, subtitle, icon, highlight = false }: any) {
    return (
        <div className={`p-6 rounded-lg border ${highlight ? 'bg-primary/10 border-primary/30' : 'bg-surface-dark border-white/10'}`}>
            <div className="flex items-start justify-between mb-4">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{title}</div>
                <span className={`material-symbols-outlined ${highlight ? 'text-primary' : 'text-gray-500'}`}>{icon}</span>
            </div>
            <div className="text-3xl font-light text-white mb-1">{value}</div>
            <div className={`text-[10px] uppercase tracking-wider ${highlight ? 'text-primary' : 'text-gray-500'}`}>{subtitle}</div>
        </div>
    );
}
