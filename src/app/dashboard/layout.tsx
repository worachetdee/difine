"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const user = { firstName: "Kenji", fullName: "Kenji Yamamoto" };

    const navLinks = [
        { href: "/dashboard", label: "Home" },
        { href: "/dashboard/invitations", label: "My Invitations" },
        { href: "/dashboard/profile", label: "Profile" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <div className="min-h-screen bg-background-dark font-display text-white antialiased selection:bg-primary selection:text-white">
            {/* Dashboard Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/85 backdrop-blur-md border-b border-white/5">
                <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex items-center justify-center size-8 rounded bg-primary/20 text-primary">
                            <span className="material-symbols-outlined text-[20px] font-icon">restaurant_menu</span>
                        </div>
                        <span className="text-white text-lg font-bold tracking-[0.1em] uppercase">DiFine</span>
                    </Link>

                    <div className="flex items-center gap-8">
                        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`transition-colors ${
                                        isActive(link.href)
                                            ? "text-white"
                                            : "hover:text-primary"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                        <div className="flex items-center gap-4 pl-6 border-l border-white/10">
                            <div className="text-right hidden sm:block">
                                <div className="text-sm font-bold text-white uppercase tracking-wide">{user.fullName}</div>
                                <div className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">Diamond</div>
                            </div>
                            {/* Mock User Button */}
                            <div className="size-8 bg-surface-dark border border-white/10 rounded-full flex items-center justify-center text-white hover:border-primary transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-[18px] font-icon">person</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {children}
        </div>
    );
}
