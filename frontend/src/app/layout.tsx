import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KarigarAI — Empowering Artisans Through Technology",
  description:
    "Discover authentic handcrafted products from India's finest artisans. KarigarAI connects traditional craftspeople with the world through a modern digital marketplace.",
  keywords: [
    "Indian crafts",
    "handmade",
    "artisan marketplace",
    "traditional crafts",
    "handloom",
    "pottery",
    "ethnic",
  ],
  openGraph: {
    title: "KarigarAI — India's Premier Artisan Marketplace",
    description:
      "Authentic handcrafted products directly from master artisans across India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-[calc(4rem+2px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
