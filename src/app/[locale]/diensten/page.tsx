import { useTranslations } from "next-intl";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { RollingTextButton } from "@/components/RollingTextButton";
import { Link } from "@/i18n/navigation";
import { ServiceJourney } from "@/components/ServiceJourney";
import { BOOK_CALL_URL } from "@/lib/constants";
import type { Metadata } from "next";

/* ------------------------------------------------------------------ */
/*  Metadata & static params                                          */
/* ------------------------------------------------------------------ */

const META: Record<string, { title: string; description: string }> = {
  nl: {
    title: "Diensten — SPAIK",
    description:
      "Jullie AI-transitie, stap voor stap. Van training tot volledige zelfstandigheid.",
  },
  en: {
    title: "Services — SPAIK",
    description:
      "Your AI transition, step by step. From training to full independence.",
  },
};

export function generateStaticParams() {
  return [{ locale: "nl" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.nl;
  return {
    title: m.title,
    description: m.description,
  };
}

/* ------------------------------------------------------------------ */
/*  Shared sub-components                                             */
/* ------------------------------------------------------------------ */

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M4 10.5l4 4 8-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                         */
/* ------------------------------------------------------------------ */

export default function DienstenPage() {
  const t = useTranslations("diensten");

  return (
    <>
      <Header />
      <main className="min-h-[100dvh]">
        {/* -------- Hero -------- */}
        <section
          className="px-6 md:px-10 pt-32 pb-16"
          style={{ maxWidth: 1080, margin: "0 auto" }}
        >
          <ScrollReveal>
            <h1
              className="font-heading text-[36px] leading-[40px] md:text-[52px] md:leading-[56px]"
              style={{ fontWeight: 100, color: "#0b0b0b" }}
            >
              {t("hero.title")}
            </h1>
            <p
              className="mt-4 text-base max-w-[640px]"
              style={{ color: "rgba(0,0,0,0.7)" }}
            >
              {t("hero.subtitle")}
            </p>
          </ScrollReveal>
        </section>

        {/* -------- Self-selection helper (JTBD) -------- */}
        <section
          className="px-6 md:px-10 pb-12"
          style={{ maxWidth: 1080, margin: "0 auto" }}
        >
          <ScrollReveal>
            <div
              className="rounded-2xl px-6 py-6 md:px-8 md:py-8"
              style={{ backgroundColor: "#FAFAF8", border: "1px solid #DEDCCC" }}
            >
              <h2
                className="font-heading text-[20px] leading-[24px] mb-5"
                style={{ fontWeight: 400, color: "#0b0b0b" }}
              >
                {t("selfSelection.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl px-4 py-3 bg-white"
                  >
                    <span
                      className="shrink-0 flex items-center justify-center rounded-full text-xs font-medium text-white mt-0.5"
                      style={{ width: 24, height: 24, backgroundColor: "#0b0b0b" }}
                    >
                      {i}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm" style={{ color: "rgba(0,0,0,0.7)" }}>
                        {t(`selfSelection.option${i}`)}
                      </p>
                      <Link
                        href={`/diensten/${t(`selfSelection.option${i}slug`)}` as "/diensten/strategie"}
                        className="mt-1 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:underline"
                        style={{ color: "#FF7150" }}
                      >
                        {t(`selfSelection.option${i}result`)} &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* -------- Journey visualization -------- */}
        <ScrollReveal>
          <ServiceJourney />
        </ScrollReveal>

        {/* -------- Begin hier / Start here (on-ramp) -------- */}
        <section
          className="px-6 md:px-10 pb-20"
          style={{ maxWidth: 1080, margin: "0 auto" }}
        >
          <ScrollReveal>
            <h2
              className="font-heading text-[32px] leading-[36px]"
              style={{ fontWeight: 100, color: "#0b0b0b" }}
            >
              {t("learnSection.title")}
            </h2>
            <p
              className="mt-3 text-base max-w-[640px]"
              style={{ color: "rgba(0,0,0,0.7)" }}
            >
              {t("learnSection.subtitle")}
            </p>
          </ScrollReveal>

          {/* Two on-ramp cards */}
          <ScrollReveal>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* AI Fundamentals */}
              <Link
                href="/diensten/fundamentals"
                className="group relative block rounded-2xl overflow-hidden min-h-[220px] transition-shadow hover:shadow-xl"
                style={{
                  backgroundImage: "url('/images/Texture 2.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.55) 100%)",
                  }}
                />
                <div className="relative z-10 flex flex-col justify-between h-full p-6 min-h-[220px]">
                  <img src="/images/icon-fundamentals.svg" alt="" aria-hidden="true" className="invert opacity-80" style={{ width: 28, height: 28 }} />
                  <div>
                  <h3
                    className="font-heading text-[24px] leading-[28px] text-white"
                    style={{ fontWeight: 100 }}
                  >
                    {t("overview.fundamentals.title")}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    {t("overview.fundamentals.tagline")}
                  </p>
                  <p className="mt-2 text-sm text-white/90 font-medium">
                    {t("overview.fundamentals.price")}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white group-hover:gap-2 transition-all">
                    {t("moreAbout")} {t("overview.fundamentals.title")}{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                  </div>
                </div>
              </Link>

              {/* Strategie Sessie */}
              <Link
                href="/diensten/strategie"
                className="group relative block rounded-2xl overflow-hidden min-h-[220px] transition-shadow hover:shadow-xl"
                style={{
                  backgroundImage: "url('/images/Texture 2.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.55) 100%)",
                  }}
                />
                <div className="relative z-10 flex flex-col justify-between h-full p-6 min-h-[220px]">
                  <img src="/images/Discovery.svg" alt="" aria-hidden="true" className="invert opacity-80" style={{ width: 28, height: 28 }} />
                  <div>
                  <h3
                    className="font-heading text-[24px] leading-[28px] text-white"
                    style={{ fontWeight: 100 }}
                  >
                    {t("overview.strategie.title")}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    {t("overview.strategie.tagline")}
                  </p>
                  <p className="mt-2 text-sm text-white/90 font-medium">
                    {t("overview.strategie.price")}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white group-hover:gap-2 transition-all">
                    {t("moreAbout")} {t("overview.strategie.title")}{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                  </div>
                </div>
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* -------- Bouw met ons / Build with us -------- */}
        <section
          className="px-6 md:px-10 pb-20"
          style={{ maxWidth: 1080, margin: "0 auto" }}
        >
          <ScrollReveal>
            <h2
              className="font-heading text-[32px] leading-[36px]"
              style={{ fontWeight: 100, color: "#0b0b0b" }}
            >
              {t("buildSection.title")}
            </h2>
            <p
              className="mt-3 text-base max-w-[640px]"
              style={{ color: "rgba(0,0,0,0.7)" }}
            >
              {t("buildSection.subtitle")}
            </p>
          </ScrollReveal>

          {/* Kickstart — featured large card */}
          <ScrollReveal>
            <Link
              href="/diensten/kickstart"
              className="group block mt-8 relative rounded-2xl overflow-hidden min-h-[200px] md:min-h-[280px] transition-shadow hover:shadow-xl"
              style={{
                backgroundImage: "url('/images/Texture 1.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Subtle gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.55) 100%)",
                }}
              />

              {/* "Most chosen" badge */}
              <span
                className="absolute top-4 right-4 z-20 text-xs font-medium text-white px-3 py-1 rounded-full"
                style={{ backgroundColor: "#FF7150" }}
              >
                {t("mostChosen")}
              </span>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-8 min-h-[200px] md:min-h-[280px]">
                <img src="/images/icon-kickstart.svg" alt="" aria-hidden="true" className="invert opacity-80" style={{ width: 32, height: 32 }} />
                <div>
                <h3
                  className="font-heading text-[28px] leading-[32px] md:text-[36px] md:leading-[40px] text-white"
                  style={{ fontWeight: 100 }}
                >
                  {t("overview.kickstart.title")}
                </h3>
                <p className="mt-2 text-sm text-white/80 max-w-[520px]">
                  {t("overview.kickstart.tagline")}
                </p>
                <p className="mt-3 text-sm text-white/90 font-medium">
                  {t("overview.kickstart.price")}
                </p>

                {/* Deliverables */}
                <ul className="mt-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2 text-sm text-white/90">
                    <CheckIcon />
                    {t("overview.kickstart.deliverable1")}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/90">
                    <CheckIcon />
                    {t("overview.kickstart.deliverable2")}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/90">
                    <CheckIcon />
                    {t("overview.kickstart.deliverable3")}
                  </li>
                </ul>

                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-white group-hover:gap-2 transition-all">
                  {t("moreAbout")} {t("overview.kickstart.title")}{" "}
                  <span aria-hidden="true">&rarr;</span>
                </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Adoptie */}
          <ScrollReveal>
            <Link
              href="/diensten/adoptie"
              className="group block mt-5 relative rounded-2xl overflow-hidden min-h-[180px] md:min-h-[220px] transition-shadow hover:shadow-xl"
              style={{
                backgroundImage: "url('/images/Texture 3.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Subtle gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.55) 100%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-8 min-h-[180px] md:min-h-[220px]">
                <img src="/images/Building.svg" alt="" aria-hidden="true" className="invert opacity-80" style={{ width: 32, height: 32 }} />
                <div>
                <h3
                  className="font-heading text-[28px] leading-[32px] md:text-[36px] md:leading-[40px] text-white"
                  style={{ fontWeight: 100 }}
                >
                  {t("overview.adoptie.title")}
                </h3>
                <p className="mt-2 text-sm text-white/80 max-w-[520px]">
                  {t("overview.adoptie.tagline")}
                </p>
                <p className="mt-3 text-sm text-white/90 font-medium">
                  {t("overview.adoptie.price")}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-white group-hover:gap-2 transition-all">
                  {t("moreAbout")} {t("overview.adoptie.title")}{" "}
                  <span aria-hidden="true">&rarr;</span>
                </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Zelfstandig — endpoint, no card */}
          <ScrollReveal>
            <div
              className="mt-10 rounded-2xl px-6 py-5"
              style={{ backgroundColor: "#FAFAF8", border: "1px solid #DEDCCC" }}
            >
              <h3
                className="font-heading text-[24px] leading-[28px]"
                style={{ fontWeight: 100, color: "#0b0b0b" }}
              >
                {t("overview.zelfstandig.title")}
              </h3>
              <p
                className="mt-2 text-base"
                style={{ color: "rgba(0,0,0,0.7)" }}
              >
                {t("overview.zelfstandig.tagline")}
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* -------- Quote Strip -------- */}
        <section style={{ backgroundColor: "#F3EDED" }}>
          <ScrollReveal>
            <div
              className="px-6 md:px-10 py-20 text-center"
              style={{ maxWidth: 800, margin: "0 auto" }}
            >
              <blockquote>
                <p
                  className="font-heading text-[22px] leading-[30px] md:text-[28px] md:leading-[38px] italic"
                  style={{ fontWeight: 100, color: "#0b0b0b" }}
                >
                  &ldquo;{t("quote.text")}&rdquo;
                </p>
              </blockquote>
              <div className="mt-6 flex flex-col items-center gap-3">
                <img
                  src="/images/case-maurick.jpg"
                  alt={t("quote.author")}
                  className="rounded-full object-cover"
                  style={{ width: 48, height: 48 }}
                />
                <div>
                  <p
                    className="text-base font-medium"
                    style={{ color: "#0b0b0b" }}
                  >
                    {t("quote.author")}
                  </p>
                  <p className="text-sm" style={{ color: "rgba(0,0,0,0.5)" }}>
                    {t("quote.role")}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* -------- Comparison table (compromise-effect) -------- */}
        <section className="bg-white">
          <ScrollReveal>
            <div
              className="px-6 md:px-10 py-16 md:py-20"
              style={{ maxWidth: 1080, margin: "0 auto" }}
            >
              <h2
                className="font-heading text-[28px] leading-[32px] md:text-[32px] md:leading-[36px] mb-10"
                style={{ fontWeight: 100, color: "#0b0b0b" }}
              >
                {t("comparison.title")}
              </h2>

              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto">
                <div className="grid grid-cols-4 gap-4">
                  {(["strategie", "fundamentals", "kickstart", "adoptie"] as const).map((slug) => {
                    const isFeatured = slug === "kickstart";
                    return (
                      <Link
                        key={slug}
                        href={`/diensten/${slug}` as "/diensten/strategie"}
                        className="group"
                      >
                        <div
                          className={`relative flex flex-col rounded-2xl p-5 h-full transition-shadow group-hover:shadow-lg ${
                            isFeatured
                              ? "ring-2 ring-[#FF7150]/40 bg-white shadow-md"
                              : "ring-1 ring-[#DEDCCC] bg-[#FAFAF8]"
                          }`}
                        >
                          {isFeatured && (
                            <span
                              className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-medium text-white whitespace-nowrap"
                              style={{ backgroundColor: "#FF7150" }}
                            >
                              {t("comparison.recommended")}
                            </span>
                          )}

                          <p
                            className="font-heading text-center"
                            style={{
                              fontSize: isFeatured ? 20 : 17,
                              fontWeight: isFeatured ? 500 : 400,
                              color: "#0b0b0b",
                            }}
                          >
                            {t(`overview.${slug}.title`)}
                          </p>

                          <div className="mt-4 flex flex-col gap-3 flex-1">
                            <div>
                              <p className="text-xs uppercase tracking-wider" style={{ color: "rgba(0,0,0,0.4)" }}>
                                {t("comparison.duration")}
                              </p>
                              <p className="mt-1 text-sm font-medium" style={{ color: "#0b0b0b" }}>
                                {t(`comparison.${slug}.duration`)}
                              </p>
                            </div>

                            <div>
                              <p className="text-xs uppercase tracking-wider" style={{ color: "rgba(0,0,0,0.4)" }}>
                                {t("comparison.investment")}
                              </p>
                              <p
                                className="mt-1 text-sm font-medium"
                                style={{ color: isFeatured ? "#FF7150" : "#0b0b0b" }}
                              >
                                {t(`overview.${slug}.price`).split("·")[0].trim()}
                              </p>
                            </div>

                            <div className="flex-1">
                              <p className="text-xs uppercase tracking-wider" style={{ color: "rgba(0,0,0,0.4)" }}>
                                {t("comparison.bestFor")}
                              </p>
                              <p className="mt-1 text-sm" style={{ color: "rgba(0,0,0,0.6)", lineHeight: 1.4 }}>
                                {t(`comparison.${slug}.bestFor`)}
                              </p>
                            </div>
                          </div>

                          <span
                            className="mt-4 inline-flex items-center gap-1 text-sm font-medium transition-colors group-hover:gap-2"
                            style={{ color: isFeatured ? "#FF7150" : "rgba(0,0,0,0.5)" }}
                          >
                            {t("moreAbout")} {t(`overview.${slug}.title`)} &rarr;
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Mobile: stacked cards */}
              <div className="flex flex-col gap-3 md:hidden">
                {(["strategie", "fundamentals", "kickstart", "adoptie"] as const).map((slug) => {
                  const isFeatured = slug === "kickstart";
                  return (
                    <Link
                      key={slug}
                      href={`/diensten/${slug}` as "/diensten/strategie"}
                    >
                      <div
                        className={`relative flex items-start gap-4 rounded-xl px-4 py-4 ${
                          isFeatured
                            ? "ring-2 ring-[#FF7150]/40 bg-white shadow-sm"
                            : "ring-1 ring-[#DEDCCC] bg-[#FAFAF8]"
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="font-medium" style={{ fontSize: 15, color: "#0b0b0b" }}>
                              {t(`overview.${slug}.title`)}
                            </p>
                            {isFeatured && (
                              <span
                                className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium text-white"
                                style={{ backgroundColor: "#FF7150" }}
                              >
                                {t("comparison.recommended")}
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-xs" style={{ color: "rgba(0,0,0,0.5)" }}>
                            {t(`comparison.${slug}.bestFor`)}
                          </p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="text-sm font-medium" style={{ color: isFeatured ? "#FF7150" : "#0b0b0b" }}>
                            {t(`overview.${slug}.price`).split("·")[0].trim()}
                          </p>
                          <p className="text-xs" style={{ color: "rgba(0,0,0,0.4)" }}>
                            {t(`comparison.${slug}.duration`)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* -------- "Niet zeker?" CTA -------- */}
        <section className="bg-white">
          <ScrollReveal>
            <div
              className="px-6 md:px-10 py-20 text-center"
              style={{ maxWidth: 640, margin: "0 auto" }}
            >
              <h2
                className="font-heading text-[28px] leading-[32px] md:text-[36px] md:leading-[40px]"
                style={{ fontWeight: 100, color: "#0b0b0b" }}
              >
                {t("notSure.title")}
              </h2>
              <p
                className="mt-4 text-base"
                style={{ color: "rgba(0,0,0,0.7)" }}
              >
                {t("notSure.text")}
              </p>
              <div className="mt-8">
                <RollingTextButton text={t("notSure.cta")} href={BOOK_CALL_URL} />
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
