import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { site } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { allTrips, tripHref } from "@/lib/trips";
import "./globals.css";

const tripNamesByPath = Object.fromEntries(allTrips.map((trip) => [tripHref(trip), trip.name]));

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Trekking in Manali & Himalayan Expeditions | Badger Adventures",
    template: "%s | Badger Adventures",
  },
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#0b1f33",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp tripNamesByPath={tripNamesByPath} />
      </body>
    </html>
  );
}
