"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PartnerDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const partner = { name: "L'Effervescence", role: "Partner" };

    const navLinks = [
        { href: "/partner/dashboard", label: "Overview", icon: "dashboard" },
        { href: "/partner/dashboard/reservations", label: "Reservations", icon: "book_online" },
        { href: "/partner/dashboard/floor", label: "Floor Plan", icon: "table_restaurant" },
        { href: "/partner/dashboard/menu", label: "Menu Management", icon: "restaurant_menu" },
        { href: "/partner/dashboard/settings", label: "Settings", icon: "settings" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <div className="min-h-screen bg-background-dark font-display text-white antialiased flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 bg-surface-dark flex flex-col fixed h-full z-40">
                <div className="h-16 flex items-center px-6 border-b border-white/10">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex items-center justify-center size-8 rounded bg-primary/20 text-primary">
                            <span className="material-symbols-outlined text-[20px] font-icon">restaurant_menu</span>
                        </div>
                        <span className="text-white text-lg font-bold tracking-[0.1em] uppercase">DiFine <span className="text-[10px] text-primary align-top">Partner</span></span>
                    </Link>
                </div>

                <div className="p-6">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                            <span className="material-symbols-outlined font-icon">storefront</span>
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white uppercase tracking-wide truncate w-32">{partner.name}</div>
                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{partner.role}</div>
                        </div>
                    </div>

                    <nav className="space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-widest rounded transition-colors ${isActive(link.href)
                                    ? "bg-primary text-white"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                <span className="material-symbols-outlined text-[18px] font-icon">{link.icon}</span>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="mt-auto p-6 border-t border-white/10">
                    <Link href="/partner/login" className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[18px] font-icon">logout</span>
                        Sign Out
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8 pt-12">
                {children}
            </main>
        </div>
    );
}
