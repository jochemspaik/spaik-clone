import { AdoptieBrochure } from "@/components/AdoptieBrochure";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adoptie Programma — SPAIK",
  description: "SPAIK AI Adoptie programmabrochure",
  robots: { index: false, follow: false },
};

export default function BrochurePage() {
  return (
    <main className="min-h-screen bg-white">
      <AdoptieBrochure />
    </main>
  );
}
