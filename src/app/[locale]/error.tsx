"use client";

import { Header } from "@/components/Header";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Header />
      <main className="min-h-[80dvh] flex flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-spaik-orange mb-6">
          Fout
        </p>
        <h1
          className="font-heading text-[52px] leading-[56px] md:text-[72px] md:leading-[76px] mb-6"
          style={{ fontWeight: 100 }}
        >
          Er ging iets mis
        </h1>
        <p className="text-spaik-black/60 text-lg max-w-md mb-10">
          {error.message || "Er is een onverwachte fout opgetreden."}
        </p>
        <button
          onClick={reset}
          className="inline-block rounded-full px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#ff7150" }}
        >
          Probeer opnieuw
        </button>
      </main>
    </>
  );
}
