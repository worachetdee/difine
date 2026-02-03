import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-surface-dark border-t border-white/5 py-12 px-6">
            <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 text-white">
                    <div className="size-6 bg-primary/20 rounded flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[14px] font-icon">restaurant_menu</span>
                    </div>
                    <span className="font-bold tracking-[0.1em] uppercase text-sm">DiFine</span>
                </div>
                <div className="flex gap-8">
                    <Link href="/privacy" className="text-xs text-gray-500 hover:text-primary uppercase tracking-widest transition-colors">Privacy</Link>
                    <Link href="/terms" className="text-xs text-gray-500 hover:text-primary uppercase tracking-widest transition-colors">Terms</Link>
                    <Link href="/contact" className="text-xs text-gray-500 hover:text-primary uppercase tracking-widest transition-colors">Contact</Link>
                </div>
                <p className="text-xs text-gray-600 uppercase tracking-widest">© {new Date().getFullYear()} DiFine Inc.</p>
            </div>
        </footer>
    );
}
