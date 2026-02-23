import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FinFlow '26 — Building the Next Generation of Accessible Digital Finance",
  description:
    "Join FinFlow '26 — a 24-hour B.Tech CSE fintech hackathon challenging innovators to build accessible digital finance solutions. ₹5L+ in prizes. February 28, 2026.",
  keywords: [
    "fintech hackathon",
    "FinFlow 26",
    "BTech CSE hackathon",
    "digital finance",
    "financial inclusion",
    "DeFi hackathon",
    "student finance",
    "MSME",
    "cross-border payments",
  ],
  authors: [{ name: "FinFlow Team" }],
  creator: "FinFlow '26",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://finflow26.dev",
    siteName: "FinFlow '26",
    title: "FinFlow '26 — 24-Hour Fintech Hackathon",
    description:
      "Building the Next Generation of Accessible Digital Finance. 24 Hours. Infinite Possibilities.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FinFlow '26 Hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FinFlow '26 — 24-Hour Fintech Hackathon",
    description:
      "Building the Next Generation of Accessible Digital Finance. 24 Hours. Infinite Possibilities.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#1E1B4B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-[#0a0820] text-[#f0f0ff] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
