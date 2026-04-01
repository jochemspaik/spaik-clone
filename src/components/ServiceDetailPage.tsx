"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BOOK_CALL_URL } from "@/lib/constants";

type ServiceSlug = "inspiratie" | "kickstart" | "adoptie" | "fundamentals";

const TEXTURE_MAP: Record<ServiceSlug, string> = {
  inspiratie: "/images/Texture 2.webp",
  kickstart: "/images/Texture 1.webp",
  adoptie: "/images/Texture 3.webp",
  fundamentals: "/images/Texture 2.webp",
};

const TESTIMONIAL_AVATAR: Record<ServiceSlug, string> = {
  inspiratie: "", // no author yet
  kickstart: "/images/case-maurick.jpg",
  adoptie: "/images/case-johanneke.jpg",
  fundamentals: "/images/case-maurick.jpg",
};

const ICON_MAP: Record<ServiceSlug, string> = {
  inspiratie: "/images/Discovery.svg",
  kickstart: "/images/icon-kickstart.svg",
  adoptie: "/images/Building.svg",
  fundamentals: "/images/icon-fundamentals.svg",
};

/* ---- Inline icons ---- */

function CheckIcon({ color = "#22c55e" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M4 10.5l4 4 8-8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M6 6l8 8M14 6l-8 8" stroke="#FF7150" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TimelineStep({ step, highlight = false }: { step: number; highlight?: boolean }) {
  return (
    <span
      className="flex items-center justify-center shrink-0 rounded-full text-xs font-medium"
      style={{
        width: 28,
        height: 28,
        backgroundColor: highlight ? "#FF7150" : "#0b0b0b",
        color: "#fff",
      }}
    >
      {highlight ? "!" : step}
    </span>
  );
}

/* ---- Hero ---- */

function HeroSection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");

  const metrics = [
    { value: t(`detail.${slug}.metric1value`), label: t(`detail.${slug}.metric1label`) },
    { value: t(`detail.${slug}.metric2value`), label: t(`detail.${slug}.metric2label`) },
    { value: t(`detail.${slug}.metric3value`), label: t(`detail.${slug}.metric3label`) },
  ];

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 400 }}>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url('${TEXTURE_MAP[slug]}')`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.4) 100%)" }}
      />

      <div className="relative z-10 mx-auto px-6 md:px-10" style={{ maxWidth: 1080 }}>
        <div className="flex flex-col justify-end" style={{ minHeight: 400, paddingTop: 120, paddingBottom: 48 }}>
          <Link
            href="/diensten"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeftIcon />
            {t("detail.backToOverview")}
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <img
              src={ICON_MAP[slug]}
              alt=""
              aria-hidden="true"
              className="invert opacity-80"
              style={{ width: 32, height: 32 }}
            />
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-medium"
              style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#0b0b0b" }}
            >
              {t(`detail.${slug}.phase`)}
            </span>
            {slug === "kickstart" && (
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-medium text-white"
                style={{ backgroundColor: "#FF7150" }}
              >
                {t("mostChosen")}
              </span>
            )}
          </div>

          <h1 className="font-heading text-white" style={{ fontSize: 48, fontWeight: 100, lineHeight: 1.1 }}>
            {t(`detail.${slug}.title`)}
          </h1>

          <p className="mt-3 text-white/90" style={{ fontSize: 20 }}>
            {t(`detail.${slug}.price`)} &middot; {t(`detail.${slug}.duration`)}
          </p>

          <p className="mt-4 text-white/80" style={{ fontSize: 16, lineHeight: 1.6, maxWidth: 600 }}>
            {t(`detail.${slug}.pitch`)}
          </p>

          <div className="mt-8">
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-medium transition-colors hover:bg-white/90"
              style={{ backgroundColor: "#fff", color: "#0b0b0b" }}
            >
              {t(`detail.${slug}.cta`)}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 max-w-[480px] md:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label}>
                <p className="font-heading text-white" style={{ fontSize: 28, fontWeight: 100, lineHeight: 1.2 }}>
                  {m.value}
                </p>
                <p className="mt-1 text-xs text-white/60">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Voor Wie ---- */

function ForWhoSection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");
  const yesItems = [t(`detail.${slug}.yes1`), t(`detail.${slug}.yes2`), t(`detail.${slug}.yes3`)];
  const noItems = [
    { text: t(`detail.${slug}.no1`), link: t(`detail.${slug}.no1link`), href: t(`detail.${slug}.no1slug`) },
    { text: t(`detail.${slug}.no2`), link: t(`detail.${slug}.no2link`), href: t(`detail.${slug}.no2slug`) },
  ];

  return (
    <section className="bg-white px-6 md:px-10 py-12 md:py-20">
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.forWho")}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-sm font-medium uppercase tracking-wider" style={{ color: "#22c55e" }}>
                {t("detail.yes")}
              </h3>
              <ul className="flex flex-col gap-4">
                {yesItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span style={{ fontSize: 16, color: "rgba(0,0,0,0.7)", lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-medium uppercase tracking-wider" style={{ color: "#FF7150" }}>
                {t("detail.no")}
              </h3>
              <ul className="flex flex-col gap-4">
                {noItems.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <XIcon />
                    <div>
                      <span style={{ fontSize: 16, color: "rgba(0,0,0,0.7)", lineHeight: 1.6 }}>{item.text}</span>
                      {item.href ? (
                        <Link
                          href={`/diensten/${item.href}` as "/diensten/strategie"}
                          className="mt-1 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:underline"
                          style={{ color: "#FF7150", display: "block" }}
                        >
                          {item.link} &rarr;
                        </Link>
                      ) : (
                        <span className="mt-1 block text-sm font-medium" style={{ color: "#FF7150" }}>
                          &rarr; {item.link}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- Differentiators (kickstart only) ---- */

function DifferentiatorsSection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");
  if (slug !== "kickstart") return null;

  const items = Array.from({ length: 5 }, (_, i) => ({
    title: t(`detail.kickstart.diff${i + 1}`),
    detail: t(`detail.kickstart.diff${i + 1}detail`),
  }));

  return (
    <section className="bg-white px-6 md:px-10 py-12 md:py-20">
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.kickstart.diffTitle")}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 transition-shadow hover:shadow-md"
                style={{ border: "1px solid rgba(222,220,204,0.5)" }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="shrink-0 mt-1.5 inline-block rounded-full"
                    style={{ width: 8, height: 8, backgroundColor: "#FF7150" }}
                  />
                  <div>
                    <p className="font-medium" style={{ fontSize: 16, color: "#0b0b0b" }}>
                      {item.title}
                    </p>
                    <p className="mt-1" style={{ fontSize: 15, color: "rgba(0,0,0,0.6)", lineHeight: 1.5 }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- Wat Je Krijgt (with descriptions) ---- */

function WhatYouGetFlatList({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");
  const count = slug === "adoptie" ? 5 : 4;
  const items = Array.from({ length: count }, (_, i) => ({
    title: t(`detail.${slug}.get${i + 1}`),
    detail: t(`detail.${slug}.get${i + 1}detail`),
  }));

  return (
    <div className="mt-10 flex flex-col">
      {items.map((item, i) => (
        <div
          key={item.title}
          className="flex items-start gap-4 py-6"
          style={{ borderBottom: i < items.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none" }}
        >
          <div
            className="shrink-0 flex items-center justify-center rounded-full"
            style={{ width: 40, height: 40, backgroundColor: "rgba(255,113,80,0.1)" }}
          >
            <CheckIcon color="#FF7150" />
          </div>
          <div>
            <p className="font-medium" style={{ fontSize: 16, color: "#0b0b0b" }}>{item.title}</p>
            <p className="mt-1" style={{ fontSize: 15, color: "rgba(0,0,0,0.6)", lineHeight: 1.5 }}>
              {item.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function WhatYouGetGrouped() {
  const t = useTranslations("diensten");

  const categories = [
    { key: "catA" as const, items: 4 },
    { key: "catB" as const, items: 3 },
    { key: "catC" as const, items: 3 },
  ];

  return (
    <div className="mt-10 flex flex-col">
      {categories.map((cat, catIdx) => {
        const catItems = Array.from({ length: cat.items }, (_, i) => ({
          title: t(`detail.kickstart.${cat.key}get${i + 1}`),
          detail: t(`detail.kickstart.${cat.key}get${i + 1}detail`),
        }));

        return (
          <div
            key={cat.key}
            className={catIdx < categories.length - 1 ? "pb-8 mb-8" : ""}
            style={catIdx < categories.length - 1 ? { borderBottom: "1px solid rgba(0,0,0,0.08)" } : undefined}
          >
            <p
              className="text-xs font-medium uppercase tracking-wider mb-5"
              style={{ color: "#FF7150" }}
            >
              {t(`detail.kickstart.${cat.key}`)}
            </p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {catItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckIcon color="#FF7150" />
                  <div>
                    <p className="font-medium" style={{ fontSize: 16, color: "#0b0b0b" }}>{item.title}</p>
                    <p className="mt-1" style={{ fontSize: 14, color: "rgba(0,0,0,0.55)", lineHeight: 1.5 }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function WhatYouGetSection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");

  return (
    <section className="px-6 md:px-10 py-12 md:py-20" style={{ backgroundColor: "#F3EDED" }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.whatYouGet")}
          </h2>
          {slug === "kickstart" ? <WhatYouGetGrouped /> : <WhatYouGetFlatList slug={slug} />}
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- Sponsor Perspective (kickstart only) ---- */

function SponsorSection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");
  if (slug !== "kickstart") return null;

  const items = Array.from({ length: 5 }, (_, i) => t(`detail.kickstart.sponsor${i + 1}`));

  return (
    <section className="px-6 md:px-10 py-12 md:py-20" style={{ backgroundColor: "#F3EDED" }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.kickstart.sponsorTitle")}
          </h2>
          <p className="mt-3" style={{ fontSize: 16, color: "rgba(0,0,0,0.55)", lineHeight: 1.6 }}>
            {t("detail.kickstart.sponsorSubtitle")}
          </p>
          <ul className="mt-10 flex flex-col gap-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckIcon color="#22c55e" />
                <span style={{ fontSize: 16, color: "rgba(0,0,0,0.7)", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- Hoe Het Werkt (all services with process data) ---- */

function HowItWorksSection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");

  type Step = { title: string; detail: string; highlight?: boolean };
  let steps: Step[] = [];

  if (slug === "kickstart") {
    steps = [
      { title: t("detail.kickstart.week0"), detail: t("detail.kickstart.week0detail") },
      { title: t("detail.kickstart.week1"), detail: t("detail.kickstart.week1detail") },
      { title: t("detail.kickstart.week1checkpoint"), detail: "", highlight: true },
      { title: t("detail.kickstart.week2"), detail: t("detail.kickstart.week2detail") },
    ];
  } else if (slug === "fundamentals") {
    steps = [
      { title: t("detail.fundamentals.processWeek0"), detail: t("detail.fundamentals.processWeek0detail") },
      { title: t("detail.fundamentals.processWeek1"), detail: t("detail.fundamentals.processWeek1detail") },
      { title: t("detail.fundamentals.processWeek25"), detail: t("detail.fundamentals.processWeek25detail") },
      { title: t("detail.fundamentals.processWeek6"), detail: t("detail.fundamentals.processWeek6detail") },
    ];
  } else if (slug === "adoptie") {
    steps = [
      { title: t("detail.adoptie.processMonth12"), detail: t("detail.adoptie.processMonth12detail") },
      { title: t("detail.adoptie.processMonth34"), detail: t("detail.adoptie.processMonth34detail") },
      { title: t("detail.adoptie.processMonth56"), detail: t("detail.adoptie.processMonth56detail") },
      { title: t("detail.adoptie.processMonth78"), detail: t("detail.adoptie.processMonth78detail") },
    ];
  } else if (slug === "inspiratie") {
    steps = [
      { title: t("detail.inspiratie.processStep1"), detail: t("detail.inspiratie.processStep1detail") },
      { title: t("detail.inspiratie.processStep2"), detail: t("detail.inspiratie.processStep2detail") },
      { title: t("detail.inspiratie.processStep3"), detail: t("detail.inspiratie.processStep3detail") },
      { title: t("detail.inspiratie.processStep4"), detail: t("detail.inspiratie.processStep4detail") },
    ];
  }

  if (steps.length === 0) return null;

  const isKickstart = slug === "kickstart";

  return (
    <section className="bg-white px-6 md:px-10 py-12 md:py-20">
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.howItWorks")}
          </h2>

          {/* Kickstart: horizontal timeline on desktop */}
          {isKickstart && (
            <div className="mt-10 hidden md:flex items-start">
              {(() => {
                let stepNum = 0;
                return steps.map((step, i) => {
                  if (!step.highlight) stepNum++;
                  const isLast = i === steps.length - 1;
                  return (
                    <div key={step.title} className="flex flex-1 items-start">
                      <div className="flex flex-col items-center flex-1">
                        <TimelineStep step={stepNum} highlight={step.highlight} />
                        <h3
                          className="font-heading mt-3 text-center"
                          style={{ fontSize: 16, fontWeight: step.highlight ? 500 : 400, color: step.highlight ? "#FF7150" : "#0b0b0b" }}
                        >
                          {step.title}
                        </h3>
                        {step.detail && (
                          <p className="mt-1 text-center" style={{ fontSize: 13, color: "rgba(0,0,0,0.55)", lineHeight: 1.4, maxWidth: 200 }}>
                            {step.detail}
                          </p>
                        )}
                      </div>
                      {!isLast && (
                        <div
                          className="shrink-0 mt-3.5"
                          style={{ width: 32, height: 2, backgroundColor: step.highlight ? "#FF7150" : "#DEDCCC" }}
                        />
                      )}
                    </div>
                  );
                });
              })()}
            </div>
          )}

          {/* Vertical timeline: always for non-kickstart, mobile-only for kickstart */}
          <div className={`mt-10 flex flex-col gap-6 ${isKickstart ? "flex md:hidden" : ""}`}>
            {(() => {
              let stepNum = 0;
              return steps.map((step, i) => {
                if (!step.highlight) stepNum++;
                const isLast = i === steps.length - 1;
                return (
                  <div key={step.title} className="flex gap-4">
                    {/* Left: numbered circle + connector line */}
                    <div className="flex flex-col items-center">
                      <TimelineStep step={stepNum} highlight={step.highlight} />
                      {!isLast && (
                        <div className="flex-1 w-0.5 mt-2" style={{ backgroundColor: step.highlight ? "#FF7150" : "#DEDCCC" }} />
                      )}
                    </div>
                    {/* Right: content */}
                    <div className={`flex-1 pb-2 ${step.highlight ? "rounded-xl px-4 py-3 -ml-1" : ""}`}
                      style={step.highlight ? { backgroundColor: "rgba(255,113,80,0.06)", border: "1px solid rgba(255,113,80,0.2)" } : undefined}
                    >
                      <h3
                        className="font-heading"
                        style={{ fontSize: 18, fontWeight: step.highlight ? 500 : 400, color: step.highlight ? "#FF7150" : "#0b0b0b" }}
                      >
                        {step.title}
                      </h3>
                      {step.detail && (
                        <p className="mt-1" style={{ fontSize: 15, color: "rgba(0,0,0,0.6)", lineHeight: 1.5 }}>
                          {step.detail}
                        </p>
                      )}
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- Pricing (kickstart only) ---- */

function PricingSection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");

  return (
    <section className="px-6 md:px-10 py-12 md:py-20" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.whatItCosts")}
          </h2>

          <div className="mt-10 text-center">
            <p className="font-heading" style={{ fontSize: 48, fontWeight: 100, color: "#0b0b0b" }}>
              {t(`detail.${slug}.pricingAmount`)}
            </p>
            <p style={{ fontSize: 18, color: "rgba(0,0,0,0.5)" }}>{t(`detail.${slug}.pricingLabel`)}</p>
          </div>

          {/* Split pricing cards (kickstart) or includes list (fundamentals) */}
          {slug === "kickstart" ? (
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 max-w-[640px] mx-auto">
              <div className="rounded-2xl border border-[#DEDCCC] bg-white p-6">
                <p className="font-medium" style={{ fontSize: 20, color: "#0b0b0b" }}>
                  {t("detail.kickstart.pricingSplit1")}
                </p>
                <p className="mt-2" style={{ fontSize: 14, color: "rgba(0,0,0,0.6)" }}>
                  {t("detail.kickstart.pricingSplit1detail")}
                </p>
              </div>
              <div className="rounded-2xl border border-[#DEDCCC] bg-white p-6">
                <p className="font-medium" style={{ fontSize: 20, color: "#0b0b0b" }}>
                  {t("detail.kickstart.pricingSplit2")}
                </p>
                <p className="mt-2" style={{ fontSize: 14, color: "rgba(0,0,0,0.6)" }}>
                  {t("detail.kickstart.pricingSplit2detail")}
                </p>
              </div>
            </div>
          ) : slug === "fundamentals" ? (
            <div className="mt-10 flex flex-col gap-4 max-w-[640px] mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-4 rounded-2xl border border-[#DEDCCC] bg-white p-6">
                  <CheckIcon color="#FF7150" />
                  <div>
                    <p className="font-medium" style={{ fontSize: 16, color: "#0b0b0b" }}>
                      {t(`detail.fundamentals.pricingIncludes${i}`)}
                    </p>
                    <p className="mt-1" style={{ fontSize: 14, color: "rgba(0,0,0,0.6)" }}>
                      {t(`detail.fundamentals.pricingIncludes${i}detail`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {t.has(`detail.${slug}.pricingRisk`) && (
            <p className="mt-8 text-center italic" style={{ fontSize: 16, color: "rgba(0,0,0,0.6)" }}>
              {t(`detail.${slug}.pricingRisk`)}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- ROI (kickstart only) ---- */

function ROISection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");
  if (slug !== "kickstart") return null;

  const proofs = [1, 2, 3].map((i) => ({
    sector: t(`detail.kickstart.proof${i}Sector`),
    metric: t(`detail.kickstart.proof${i}Metric`),
    before: t(`detail.kickstart.proof${i}Before`),
    after: t(`detail.kickstart.proof${i}After`),
    roi: t(`detail.kickstart.proof${i}Roi`),
  }));

  return (
    <section className="px-6 md:px-10 py-12 md:py-20" style={{ backgroundColor: "#1a1c1b" }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading text-white" style={{ fontSize: 32, fontWeight: 100 }}>
            {t("detail.kickstart.roiTitle")}
          </h2>
          <p className="mt-3" style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
            {t("detail.kickstart.roiSubtitle")}
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {proofs.map((proof) => (
              <div
                key={proof.sector}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: "rgba(255,113,80,0.15)", color: "#FF7150" }}
                >
                  {proof.sector}
                </span>
                <p className="mt-3" style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
                  {proof.metric}
                </p>
                <p className="mt-4 line-through" style={{ fontSize: 15, color: "rgba(255,255,255,0.35)" }}>
                  {proof.before}
                </p>
                <p className="mt-1 font-medium" style={{ fontSize: 18, color: "#FF7150" }}>
                  {proof.after}
                </p>
                <p className="mt-3" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
                  {proof.roi}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- Testimonial ---- */

function TestimonialSection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");
  const quote = t(`detail.${slug}.testimonialQuote`);
  const author = t(`detail.${slug}.testimonialAuthor`);
  const role = t(`detail.${slug}.testimonialRole`);

  if (!quote) return null;

  const showBigStat = slug === "fundamentals";

  return (
    <section className="px-6 md:px-10 py-12 md:py-20" style={{ backgroundColor: "#F3EDED" }}>
      <div className="mx-auto text-center" style={{ maxWidth: 800 }}>
        <ScrollReveal>
          {showBigStat && (
            <div className="mb-10">
              <p className="font-heading" style={{ fontSize: 80, fontWeight: 100, color: "#FF7150", lineHeight: 1 }}>
                {t("detail.fundamentals.bigStat")}
              </p>
              <p className="mt-2" style={{ fontSize: 16, color: "rgba(0,0,0,0.5)" }}>
                {t("detail.fundamentals.bigStatLabel")}
              </p>
            </div>
          )}
          <blockquote>
            <p
              className="font-heading italic"
              style={{ fontSize: 22, fontWeight: 100, color: "#0b0b0b", lineHeight: 1.5 }}
            >
              &ldquo;{quote}&rdquo;
            </p>
          </blockquote>
          {author && (
            <div className="mt-6 flex flex-col items-center gap-3">
              {TESTIMONIAL_AVATAR[slug] && (
                <img
                  src={TESTIMONIAL_AVATAR[slug]}
                  alt={author}
                  className="rounded-full object-cover"
                  style={{ width: 48, height: 48 }}
                />
              )}
              <div>
                <p className="font-medium" style={{ fontSize: 16, color: "#0b0b0b" }}>{author}</p>
                <p style={{ fontSize: 14, color: "rgba(0,0,0,0.5)" }}>{role}</p>
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- Volgende Stap ---- */

function NextStepSection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");
  const nextText = t(`detail.${slug}.nextStepText`);
  const nextSlug = t(`detail.${slug}.nextStepSlug`);
  const nextSlug2 = t.has(`detail.${slug}.nextStepSlug2`) ? t(`detail.${slug}.nextStepSlug2`) : "";
  const afterStat = t.has(`detail.${slug}.afterStat`) ? t(`detail.${slug}.afterStat`) : "";

  return (
    <section className="bg-white px-6 md:px-10 py-12 md:py-20">
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.nextStep")}
          </h2>
          <p className="mt-6" style={{ fontSize: 16, color: "rgba(0,0,0,0.7)", lineHeight: 1.6, maxWidth: 640 }}>
            {nextText}
          </p>
          {nextSlug ? (
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href={`/diensten/${nextSlug}` as "/diensten/strategie"}
                className="inline-flex items-center gap-2 text-base font-medium transition-colors hover:underline"
                style={{ color: "#FF7150" }}
              >
                {t("moreAbout")} {t(`overview.${nextSlug as ServiceSlug}.title`)} &rarr;
              </Link>
              {nextSlug2 && (
                <Link
                  href={`/diensten/${nextSlug2}` as "/diensten/strategie"}
                  className="inline-flex items-center gap-2 text-base font-medium transition-colors hover:underline"
                  style={{ color: "#FF7150" }}
                >
                  {t("moreAbout")} {t(`overview.${nextSlug2 as ServiceSlug}.title`)} &rarr;
                </Link>
              )}
            </div>
          ) : (
            <p className="mt-4 text-sm font-medium" style={{ color: "rgba(0,0,0,0.5)" }}>
              {t("overview.zelfstandig.title")} &mdash; {t("overview.zelfstandig.tagline")}
            </p>
          )}
          {afterStat && (
            <p className="mt-6 text-sm italic" style={{ color: "rgba(0,0,0,0.5)" }}>
              {afterStat}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- Company Size (kickstart only) ---- */

function CompanySizeSection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");
  if (slug !== "kickstart") return null;

  const sizes = [
    { label: t("detail.kickstart.size1Label"), body: t("detail.kickstart.size1Body") },
    { label: t("detail.kickstart.size2Label"), body: t("detail.kickstart.size2Body") },
    { label: t("detail.kickstart.size3Label"), body: t("detail.kickstart.size3Body") },
  ];

  return (
    <section className="px-6 md:px-10 py-12 md:py-20" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.kickstart.sizeTitle")}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {sizes.map((size) => (
              <div key={size.label}>
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: "rgba(255,113,80,0.1)", color: "#FF7150" }}
                >
                  {size.label}
                </span>
                <p className="mt-3" style={{ fontSize: 15, color: "rgba(0,0,0,0.7)", lineHeight: 1.5 }}>
                  {size.body}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- Two Paths (kickstart only — replaces NextStepSection) ---- */

function TwoPathsSection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");
  if (slug !== "kickstart") return null;

  const path2Items = Array.from({ length: 5 }, (_, i) => t(`detail.kickstart.path2Item${i + 1}`));

  return (
    <section className="bg-white px-6 md:px-10 py-12 md:py-20">
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.kickstart.pathsTitle")}
          </h2>
          <p className="mt-2" style={{ fontSize: 16, color: "rgba(0,0,0,0.5)" }}>
            {t("detail.kickstart.pathsSubtitle")}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Path 1: Adoptie — featured */}
            <div
              className="rounded-2xl bg-white p-6"
              style={{ border: "2px solid #FF7150" }}
            >
              <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 400, color: "#0b0b0b" }}>
                {t("detail.kickstart.path1Title")}
              </h3>
              <p className="mt-3" style={{ fontSize: 15, color: "rgba(0,0,0,0.7)", lineHeight: 1.5 }}>
                {t("detail.kickstart.path1Body")}
              </p>
              <p className="mt-2" style={{ fontSize: 14, color: "rgba(0,0,0,0.5)" }}>
                {t("detail.kickstart.path1Detail")}
              </p>
              <Link
                href="/diensten/adoptie"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:underline"
                style={{ color: "#FF7150" }}
              >
                {t("detail.kickstart.path1Cta")} &rarr;
              </Link>
            </div>

            {/* Path 2: Zelfstandig — neutral */}
            <div
              className="rounded-2xl bg-white p-6"
              style={{ border: "1px solid #DEDCCC" }}
            >
              <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 400, color: "#0b0b0b" }}>
                {t("detail.kickstart.path2Title")}
              </h3>
              <p className="mt-3" style={{ fontSize: 15, color: "rgba(0,0,0,0.7)", lineHeight: 1.5 }}>
                {t("detail.kickstart.path2Body")}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {path2Items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon color="#22c55e" />
                    <span style={{ fontSize: 14, color: "rgba(0,0,0,0.6)", lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- Main Component ---- */

export function ServiceDetailPage({ slug }: { slug: ServiceSlug }) {
  return (
    <>
      <HeroSection slug={slug} />
      <ForWhoSection slug={slug} />
      <DifferentiatorsSection slug={slug} />
      <WhatYouGetSection slug={slug} />
      <SponsorSection slug={slug} />
      <HowItWorksSection slug={slug} />
      {(slug === "kickstart" || slug === "fundamentals") && <PricingSection slug={slug} />}
      <ROISection slug={slug} />
      <TestimonialSection slug={slug} />
      <CompanySizeSection slug={slug} />
      {slug === "kickstart" ? (
        <TwoPathsSection slug={slug} />
      ) : (
        <NextStepSection slug={slug} />
      )}
    </>
  );
}
