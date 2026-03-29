"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RollingTextButton } from "@/components/RollingTextButton";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[80dvh] flex flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-spaik-orange mb-6">
          404
        </p>
        <h1
          className="font-heading text-[52px] leading-[56px] md:text-[72px] md:leading-[76px] mb-6"
          style={{ fontWeight: 100 }}
        >
          Pagina niet gevonden
        </h1>
        <p className="text-spaik-black/60 text-lg max-w-md mb-10">
          Deze pagina bestaat niet (meer). Ga terug naar de homepage.
        </p>
        <RollingTextButton text="Terug naar home" href="/" variant="primary" />
      </main>
      <Footer />
    </>
  );
}
