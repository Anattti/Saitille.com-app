import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saitille.com | Premium Freelance Services",
  description: "Design. Code. Optimize. Insanely great digital products.",
};

import SmoothScroll from "./components/SmoothScroll";
import NoiseOverlay from "./components/NoiseOverlay";
import CustomCursor from "./components/CustomCursor";

export default function RootLayout({
  // Main layout with global providers
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${inter.variable} ${oswald.variable} antialiased selection:bg-accent/30 selection:text-accent-foreground`}
      >
        <SmoothScroll>
          <NoiseOverlay />
          <CustomCursor />
          {children}
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
