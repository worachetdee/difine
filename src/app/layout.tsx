import type { Metadata } from "next";
// import { ClerkProvider } from "@clerk/nextjs";
// import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display, Noto_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "600", "700"],
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "DiFine - Luxury Dining Subscription",
  description: "Curated reservations for Tokyo's finest tables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${playfair.variable} ${notoSans.variable} min-h-screen bg-background-light dark:bg-background-dark font-display antialiased text-slate-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
