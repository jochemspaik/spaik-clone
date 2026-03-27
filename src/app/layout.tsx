import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SPAIK — AI Solutions That People Actually Use",
    template: "%s | SPAIK",
  },
  description:
    "SPAIK bouwt AI-oplossingen die je mensen écht gebruiken. Van automatisering tot AI-training — resultaat in 4 weken, positieve ROI in 4 maanden.",
  icons: {
    icon: [
      { url: "/seo/favicon.png" },
      { url: "/seo/favicon-alt.png", type: "image/png" },
    ],
    apple: "/seo/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "SPAIK",
    images: [{ url: "/seo/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
