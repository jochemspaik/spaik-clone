import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ScrollReveal";
import { RollingTextButton } from "@/components/RollingTextButton";
import { Link } from "@/i18n/navigation";
import { ServiceJourney } from "@/components/ServiceJourney";
import { BOOK_CALL_URL } from "@/lib/constants";
import { SERVICES } from "@/data/services";
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
                return (
                  <>
                    {/* Desktop */}
                    <div className="hidden md:grid grid-cols-4 gap-4">
                      {SERVICES.map((service) => {
                        const isFeatured = !!service.featured;
                        return (
                          <Link
                            key={service.slug}
                            href={`/diensten/${service.slug}` as "/diensten/strategie"}
                            className="group relative block rounded-2xl overflow-hidden transition-shadow hover:shadow-xl"
                            style={{ minHeight: isFeatured ? 320 : 280 }}
                          >
                            {/* Texture background */}
                            <div
                              className="absolute inset-0"
                              style={{
                                backgroundImage: `url('${service.texture}')`,
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
                              <div
                                className="flex items-center justify-center rounded-lg"
                                style={{ width: 36, height: 36, backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                              >
                                <img
                                  src={service.icon}
                                  alt=""
                                  aria-hidden="true"
                                  className="invert"
                                  style={{ width: 20, height: 20 }}
                                />
                              </div>
                              <div>
                                <h3
                                  className="font-heading text-white"
                                  style={{ fontSize: isFeatured ? 22 : 18, fontWeight: isFeatured ? 400 : 100 }}
                                >
                                  {t(`overview.${service.slug}.title`)}
                                </h3>
                                <p className="mt-1.5 text-xs text-white/70" style={{ lineHeight: 1.4 }}>
                                  {t(`comparison.${service.slug}.bestFor`)}
                                </p>
                                <div className="mt-3 flex items-baseline gap-2">
                                  <span className="text-sm font-medium text-white">
                                    {t(`overview.${service.slug}.price`).split("·")[0].trim()}
                                  </span>
                                  <span className="text-xs text-white/50">
                                    {t(`comparison.${service.slug}.duration`)}
                                  </span>
                                </div>
                                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-white/80 group-hover:text-white group-hover:gap-2 transition-all">
                                  {t("moreAbout")} {t(`overview.${service.slug}.title`)} &rarr;
                                </span>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Mobile */}
                    <div className="flex flex-col gap-3 md:hidden">
                      {SERVICES.map((service) => {
                        const isFeatured = !!service.featured;
                        return (
                          <Link
                            key={service.slug}
                            href={`/diensten/${service.slug}` as "/diensten/strategie"}
                            className="group relative block rounded-xl overflow-hidden"
                            style={{ minHeight: 100 }}
                          >
                            <div
                              className="absolute inset-0"
                              style={{
                                backgroundImage: `url('${service.texture}')`,
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
                                  {t(`overview.${service.slug}.title`)}
                                </p>
                                <p className="mt-0.5 text-xs text-white/60">
                                  {t(`comparison.${service.slug}.bestFor`)}
                                </p>
                              </div>
                              <div className="text-right shrink-0 ml-4">
                                <p className="text-sm font-medium text-white">
                                  {t(`overview.${service.slug}.price`).split("·")[0].trim()}
                                </p>
                                <p className="text-xs text-white/50">
                                  {t(`comparison.${service.slug}.duration`)}
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

        {/* -------- Waarom SPAIK -------- */}
        <section style={{ backgroundColor: "#F3EDED" }}>
          <ScrollReveal>
            <div
              className="px-6 md:px-10 py-16 md:py-20"
              style={{ maxWidth: 1080, margin: "0 auto" }}
            >
              <h2
                className="font-heading text-[28px] leading-[32px] md:text-[32px] md:leading-[36px]"
                style={{ fontWeight: 300, color: "#0b0b0b" }}
              >
                {t("whySpaik.title")}
              </h2>
              <p
                className="mt-3 text-base max-w-[640px]"
                style={{ color: "rgba(0,0,0,0.6)" }}
              >
                {t("whySpaik.subtitle")}
              </p>

              {/* Desktop comparison table */}
              <div className="hidden md:block mt-10 overflow-x-auto">
                <div className="grid grid-cols-3 gap-6">
                  {/* Column headers */}
                  <div className="pb-3" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    <p className="text-sm font-medium" style={{ color: "rgba(0,0,0,0.4)" }}>{t("whySpaik.col1title")}</p>
                  </div>
                  <div className="pb-3" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    <p className="text-sm font-medium" style={{ color: "rgba(0,0,0,0.4)" }}>{t("whySpaik.col2title")}</p>
                  </div>
                  <div className="pb-3" style={{ borderBottom: "2px solid #FF7150" }}>
                    <p className="text-sm font-medium" style={{ color: "#FF7150" }}>{t("whySpaik.col3title")}</p>
                  </div>

                  {/* Rows */}
                  {[1, 2, 3, 4].map((i) => (
                    <div key={`row-${i}`} className="contents">
                      <div className="py-4" style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                        <p className="text-sm" style={{ color: "rgba(0,0,0,0.45)" }}>{t(`whySpaik.row${i}.zelf`)}</p>
                      </div>
                      <div className="py-4" style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                        <p className="text-sm" style={{ color: "rgba(0,0,0,0.45)" }}>{t(`whySpaik.row${i}.bureau`)}</p>
                      </div>
                      <div className="py-4" style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                        <p className="text-sm font-medium" style={{ color: "#0b0b0b" }}>{t(`whySpaik.row${i}.spaik`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile: stacked */}
              <div className="flex flex-col gap-4 mt-8 md:hidden">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="rounded-xl bg-white p-4" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
                    <p className="text-sm font-medium" style={{ color: "#FF7150" }}>
                      {t(`whySpaik.row${i}.spaik`)}
                    </p>
                    <p className="mt-2 text-xs" style={{ color: "rgba(0,0,0,0.4)" }}>
                      vs. {t(`whySpaik.row${i}.zelf`)} ({t("whySpaik.col1title")}) / {t(`whySpaik.row${i}.bureau`)} ({t("whySpaik.col2title")})
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* -------- FAQ -------- */}
        <section className="bg-white">
          <ScrollReveal>
            <div
              className="px-6 md:px-10 py-16 md:py-20"
              style={{ maxWidth: 800, margin: "0 auto" }}
            >
              <h2
                className="font-heading text-[28px] leading-[32px] md:text-[32px] md:leading-[36px] text-center"
                style={{ fontWeight: 300, color: "#0b0b0b" }}
              >
                {t("faq.title")}
              </h2>
              <div className="mt-10 flex flex-col">
                {[1, 2, 3, 4, 5].map((i) => (
                  <details
                    key={i}
                    className="group"
                    style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
                  >
                    <summary
                      className="flex items-center justify-between py-5 cursor-pointer list-none text-base font-medium"
                      style={{ color: "#0b0b0b" }}
                    >
                      {t(`faq.q${i}`)}
                      <span
                        className="shrink-0 ml-4 transition-transform group-open:rotate-45"
                        style={{ color: "rgba(0,0,0,0.3)", fontSize: 20 }}
                      >
                        +
                      </span>
                    </summary>
                    <p
                      className="pb-5 text-sm"
                      style={{ color: "rgba(0,0,0,0.6)", lineHeight: 1.6, maxWidth: 640 }}
                    >
                      {t(`faq.a${i}`)}
                    </p>
                  </details>
                ))}
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
  );
}
