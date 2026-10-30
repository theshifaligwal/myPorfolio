import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
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
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
