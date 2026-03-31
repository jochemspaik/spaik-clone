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

              {(() => {
                const TEXTURES: Record<string, string> = {
                  strategie: "/images/Texture 2.webp",
                  fundamentals: "/images/Texture 2.webp",
                  kickstart: "/images/Texture 1.webp",
                  adoptie: "/images/Texture 3.webp",
                };
                const ICONS: Record<string, string> = {
                  strategie: "/images/Discovery.svg",
                  fundamentals: "/images/icon-fundamentals.svg",
                  kickstart: "/images/icon-kickstart.svg",
                  adoptie: "/images/Building.svg",
                };
                const slugs = ["strategie", "fundamentals", "kickstart", "adoptie"] as const;

                return (
                  <>
                    {/* Desktop */}
                    <div className="hidden md:grid grid-cols-4 gap-4">
                      {slugs.map((slug) => {
                        const isFeatured = slug === "kickstart";
                        return (
                          <Link
                            key={slug}
                            href={`/diensten/${slug}` as "/diensten/strategie"}
                            className="group relative block rounded-2xl overflow-hidden transition-shadow hover:shadow-xl"
                            style={{ minHeight: isFeatured ? 320 : 280 }}
                          >
                            {/* Texture background */}
                            <div
                              className="absolute inset-0"
                              style={{
                                backgroundImage: `url('${TEXTURES[slug]}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            />
                            <div
                              className="absolute inset-0"
                              style={{
                                background: "linear-gradient(180deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.6) 100%)",
                              }}
                            />

                            {/* Badge */}
                            {isFeatured && (
                              <span
                                className="absolute top-3 right-3 z-20 rounded-full px-3 py-1 text-xs font-medium text-white"
                                style={{ backgroundColor: "#FF7150" }}
                              >
                                {t("comparison.recommended")}
                              </span>
                            )}

                            {/* Content */}
                            <div className="relative z-10 flex flex-col justify-between h-full p-5" style={{ minHeight: isFeatured ? 320 : 280 }}>
                              <img
                                src={ICONS[slug]}
                                alt=""
                                aria-hidden="true"
                                className="invert opacity-70"
                                style={{ width: 24, height: 24 }}
                              />
                              <div>
                                <h3
                                  className="font-heading text-white"
                                  style={{ fontSize: isFeatured ? 22 : 18, fontWeight: isFeatured ? 400 : 100 }}
                                >
                                  {t(`overview.${slug}.title`)}
                                </h3>
                                <p className="mt-1.5 text-xs text-white/70" style={{ lineHeight: 1.4 }}>
                                  {t(`comparison.${slug}.bestFor`)}
                                </p>
                                <div className="mt-3 flex items-baseline gap-2">
                                  <span className="text-sm font-medium text-white">
                                    {t(`overview.${slug}.price`).split("·")[0].trim()}
                                  </span>
                                  <span className="text-xs text-white/50">
                                    {t(`comparison.${slug}.duration`)}
                                  </span>
                                </div>
                                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-white/80 group-hover:text-white group-hover:gap-2 transition-all">
                                  {t("moreAbout")} {t(`overview.${slug}.title`)} &rarr;
                                </span>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Mobile */}
                    <div className="flex flex-col gap-3 md:hidden">
                      {slugs.map((slug) => {
                        const isFeatured = slug === "kickstart";
                        return (
                          <Link
                            key={slug}
                            href={`/diensten/${slug}` as "/diensten/strategie"}
                            className="group relative block rounded-xl overflow-hidden"
                            style={{ minHeight: 100 }}
                          >
                            <div
                              className="absolute inset-0"
                              style={{
                                backgroundImage: `url('${TEXTURES[slug]}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            />
                            <div
                              className="absolute inset-0"
                              style={{
                                background: "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 100%)",
                              }}
                            />
                            {isFeatured && (
                              <span
                                className="absolute top-3 right-3 z-20 rounded-full px-2 py-0.5 text-[10px] font-medium text-white"
                                style={{ backgroundColor: "#FF7150" }}
                              >
                                {t("comparison.recommended")}
                              </span>
                            )}
                            <div className="relative z-10 flex items-end justify-between p-4" style={{ minHeight: 100 }}>
                              <div>
                                <p className="font-heading text-white" style={{ fontSize: 17, fontWeight: 300 }}>
                                  {t(`overview.${slug}.title`)}
                                </p>
                                <p className="mt-0.5 text-xs text-white/60">
                                  {t(`comparison.${slug}.bestFor`)}
                                </p>
                              </div>
                              <div className="text-right shrink-0 ml-4">
                                <p className="text-sm font-medium text-white">
                                  {t(`overview.${slug}.price`).split("·")[0].trim()}
                                </p>
                                <p className="text-xs text-white/50">
                                  {t(`comparison.${slug}.duration`)}
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </>
                );
              })()}
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
