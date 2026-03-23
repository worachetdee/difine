import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-surface-dark border-t border-white/5 py-12 px-6">
            <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row justify-between items-center gap-6">
                <Link href="/" className="flex items-center">
                    <Image src="/difine/images/difine-logo.svg" alt="DiFine" width={28} height={28} />
                </Link>
                <div className="flex gap-8">
                    <Link href="/privacy" className="text-xs text-gray-500 hover:text-primary uppercase tracking-widest transition-colors">Privacy</Link>
                    <Link href="/terms" className="text-xs text-gray-500 hover:text-primary uppercase tracking-widest transition-colors">Terms</Link>
                    <Link href="/investors" className="text-xs text-gray-500 hover:text-primary uppercase tracking-widest transition-colors">Investors</Link>
                    <Link href="/pitch-deck" className="text-xs text-gray-500 hover:text-primary uppercase tracking-widest transition-colors">Pitch Deck</Link>
                    <Link href="/press" className="text-xs text-gray-500 hover:text-primary uppercase tracking-widest transition-colors">Press</Link>
                    <Link href="/contact" className="text-xs text-gray-500 hover:text-primary uppercase tracking-widest transition-colors">Contact</Link>
                </div>
                <p className="text-xs text-gray-600 uppercase tracking-widest">© {new Date().getFullYear()} DiFine Inc.</p>
            </div>
        </footer>
    );
}
