import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { profile, siteUrl } from "@/data/content";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
// Only used for small labels, so it shouldn't compete with the hero for bandwidth.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

const title = `${profile.name} · ${profile.roles.join(" & ")}`;
const description =
  "Portfolio of Shifali Gwal, a Bengaluru-based frontend engineer and UI/UX designer who designs in Figma and builds in React and Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    title,
    description: "Designs in Figma. Builds in React and Next.js.",
    type: "profile",
    url: "/",
    siteName: profile.name,
    locale: "en_IN",
    firstName: "Shifali",
    lastName: "Gwal",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "Designs in Figma. Builds in React and Next.js.",
    creator: profile.xHandle,
  },
};

// Browser UI colour on mobile (address bar), matching the dark site.
export const viewport: Viewport = {
  themeColor: "#181412",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
