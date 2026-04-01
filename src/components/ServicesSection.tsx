"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SERVICES } from "@/data/services";
import { BOOK_CALL_URL } from "@/lib/constants";

export function ServicesSection() {
  const t = useTranslations();

  const kickstart = SERVICES.find((s) => s.featured);
  const adoptie = SERVICES.find((s) => s.slug === "adoptie");
  const inspiratie = SERVICES.find((s) => s.slug === "inspiratie");

  return (
    <section id="services" className="relative overflow-hidden bg-white px-6 py-16 md:px-10 md:py-20">
      {/* Texture overlay — full bleed at low opacity */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ opacity: 0.10, zIndex: 0 }}
      >
        <img
          src="/images/Texture 1.webp"
          alt=""
          aria-hidden="true"
          width={800}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>
      {/* Dot-grid decoration — left edge */}
      <div
        className="pointer-events-none absolute left-0 top-0 hidden h-full md:block"
        style={{ width: "25%", opacity: 0.05, zIndex: 0 }}
      >
        <img
          src="/images/hero-graphic.png"
          alt=""
          aria-hidden="true"
          width={800}
          height={800}
          className="h-full w-full object-cover object-right"
          style={{ maskImage: "linear-gradient(to right, black 30%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, black 30%, transparent 100%)" }}
        />
      </div>

      <div className="relative z-1 mx-auto" style={{ maxWidth: "1080px" }}>
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-[32px] font-thin text-spaik-black">
            {t("services.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-spaik-black/80">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Kickstart hero card */}
        {kickstart && (
          <div className="relative mb-4 overflow-hidden rounded-2xl">
            {/* Background texture */}
            <div className="absolute inset-0">
              <img
                src="/images/Texture 1.webp"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(11,11,11,0.88) 0%, rgba(11,11,11,0.72) 100%)" }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6 px-8 py-10 md:flex-row md:items-center md:gap-12 md:px-12 md:py-12">
              {/* Left: text */}
              <div className="flex-1">
                {/* Icon + title */}
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-xl"
                    style={{ width: 44, height: 44, backgroundColor: "rgba(255,113,80,0.25)" }}
                  >
                    <img
                      src={kickstart.icon}
                      alt=""
                      aria-hidden="true"
                      style={{ width: 24, height: 24 }}
                    />
                  </div>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[11px] font-medium text-white"
                    style={{ backgroundColor: "#FF7150" }}
                  >
                    {t("diensten.mostChosen")}
                  </span>
                </div>

                <h3
                  className="font-heading text-white"
                  style={{ fontSize: 36, fontWeight: 100, lineHeight: 1.1 }}
                >
                  {t("diensten.overview.kickstart.title")}
                </h3>
                <p className="mt-3 font-sans text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  {t("diensten.overview.kickstart.tagline")}
                </p>
                <p className="mt-3 font-sans text-sm font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {t("diensten.overview.kickstart.price")}
                </p>
              </div>

              {/* Right: CTAs */}
              <div className="flex flex-col gap-3 md:items-end">
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-sans text-sm font-medium text-spaik-black transition-colors hover:bg-white/90"
                >
                  {t("services.kickstartCta")}
                </a>
                <Link
                  href={"/diensten/kickstart" as "/"}
                  className="inline-flex items-center justify-center font-sans text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  {t("services.kickstartLearnMore")} &rarr;
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Supporting cards: Adoptie, Inspiratie, Trainingen */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {/* Adoptie */}
          {adoptie && (
            <Link
              href={"/diensten/adoptie" as "/"}
              className="group flex flex-col rounded-xl p-5 transition-shadow hover:shadow-lg"
              style={{
                backgroundColor: adoptie.tint.bg,
                boxShadow: `inset 0 0 0 1px ${adoptie.tint.ring}`,
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl"
                style={{ width: 40, height: 40, backgroundColor: adoptie.tint.iconBg }}
              >
                <img src={adoptie.icon} alt="" aria-hidden="true" style={{ width: 22, height: 22 }} />
              </div>
              <p
                className="mt-3 font-heading"
                style={{ fontSize: 17, fontWeight: 400, color: "#0b0b0b", lineHeight: 1.2 }}
              >
                {t("diensten.overview.adoptie.title")}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "rgba(0,0,0,0.5)" }}>
                {t("diensten.overview.adoptie.tagline")}
              </p>
              <span
                className="mt-auto pt-4 inline-flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2"
                style={{ color: "rgba(0,0,0,0.4)" }}
              >
                {t("diensten.moreAbout")} &rarr;
              </span>
            </Link>
          )}

          {/* Inspiratie */}
          {inspiratie && (
            <Link
              href={"/diensten/inspiratie" as "/"}
              className="group flex flex-col rounded-xl p-5 transition-shadow hover:shadow-lg"
              style={{
                backgroundColor: inspiratie.tint.bg,
                boxShadow: `inset 0 0 0 1px ${inspiratie.tint.ring}`,
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl"
                style={{ width: 40, height: 40, backgroundColor: inspiratie.tint.iconBg }}
              >
                <img src={inspiratie.icon} alt="" aria-hidden="true" style={{ width: 22, height: 22 }} />
              </div>
              <p
                className="mt-3 font-heading"
                style={{ fontSize: 17, fontWeight: 400, color: "#0b0b0b", lineHeight: 1.2 }}
              >
                {t("diensten.overview.inspiratie.title")}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "rgba(0,0,0,0.5)" }}>
                {t("diensten.overview.inspiratie.tagline")}
              </p>
              <span
                className="mt-auto pt-4 inline-flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2"
                style={{ color: "rgba(0,0,0,0.4)" }}
              >
                {t("diensten.moreAbout")} &rarr;
              </span>
            </Link>
          )}

          {/* Trainingen — external link */}
          <a
            href="https://traininghub.spaik.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-xl p-5 transition-shadow hover:shadow-lg"
            style={{
              backgroundColor: "#F0F4FF",
              boxShadow: "inset 0 0 0 1px rgba(99,122,255,0.25)",
            }}
          >
            <div
              className="flex items-center justify-center rounded-xl"
              style={{ width: 40, height: 40, backgroundColor: "rgba(99,122,255,0.15)" }}
            >
              {/* Book/learning icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(99,122,255,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <p
              className="mt-3 font-heading"
              style={{ fontSize: 17, fontWeight: 400, color: "#0b0b0b", lineHeight: 1.2 }}
            >
              {t("services.trainingsCard")}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "rgba(0,0,0,0.5)" }}>
              {t("services.trainingsCardSub")}
            </p>
            <span
              className="mt-auto pt-4 inline-flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2"
              style={{ color: "rgba(99,122,255,0.7)" }}
            >
              {t("diensten.moreAbout")} &rarr;
            </span>
          </a>
        </div>

        {/* All services link */}
        <div className="mt-10 text-center">
          <Link
            href={"/diensten" as "/"}
            className="inline-flex items-center justify-center gap-1 font-sans text-sm font-medium text-spaik-black/60 transition-colors hover:text-spaik-black"
          >
            {t("services.seeAllServices")} &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
