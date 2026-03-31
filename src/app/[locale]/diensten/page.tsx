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

        {/* -------- Journey visualization -------- */}
        <ScrollReveal>
          <ServiceJourney />
        </ScrollReveal>

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
                style={{ fontWeight: 300, color: "#0b0b0b" }}
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
                              className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-medium text-white whitespace-nowrap z-10"
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
