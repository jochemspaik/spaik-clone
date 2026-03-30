"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BOOK_CALL_URL } from "@/lib/constants";

type ServiceSlug = "strategie" | "kickstart" | "adoptie" | "fundamentals";

const GRADIENT_MAP: Record<ServiceSlug, string> = {
  strategie: "/images/Gradient 01.webp",
  kickstart: "/images/Gradient 03.webp",
  adoptie: "/images/Gradient 02.webp",
  fundamentals: "/images/Gradient 04.webp",
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

function TimelineDot({ highlight = false }: { highlight?: boolean }) {
  return (
    <span
      className="block shrink-0 rounded-full"
      style={{ width: 12, height: 12, backgroundColor: highlight ? "#FF7150" : "#DEDCCC" }}
    />
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
        style={{ backgroundImage: `url('${GRADIENT_MAP[slug]}')`, backgroundSize: "cover", backgroundPosition: "center" }}
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

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-[480px]">
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
    { text: t(`detail.${slug}.no1`), link: t(`detail.${slug}.no1link`) },
    { text: t(`detail.${slug}.no2`), link: t(`detail.${slug}.no2link`) },
  ];

  return (
    <section className="bg-white px-6 md:px-10" style={{ paddingTop: 80, paddingBottom: 80 }}>
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
                      <span className="ml-1 text-sm font-medium" style={{ color: "#FF7150" }}>
                        &rarr; {item.link}
                      </span>
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

/* ---- Wat Je Krijgt (with descriptions) ---- */

function WhatYouGetSection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");
  const count = slug === "adoptie" ? 5 : 4;
  const items = Array.from({ length: count }, (_, i) => ({
    title: t(`detail.${slug}.get${i + 1}`),
    detail: t(`detail.${slug}.get${i + 1}detail`),
  }));

  return (
    <section className="px-6 md:px-10" style={{ paddingTop: 80, paddingBottom: 80, backgroundColor: "#F3EDED" }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.whatYouGet")}
          </h2>
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
      { title: t("detail.kickstart.week1"), detail: t("detail.kickstart.week1detail") },
      { title: t("detail.kickstart.week1checkpoint"), detail: "", highlight: true },
      { title: t("detail.kickstart.week2"), detail: t("detail.kickstart.week2detail") },
      { title: t("detail.kickstart.week34"), detail: t("detail.kickstart.week34detail") },
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
  }

  if (steps.length === 0) return null;

  return (
    <section className="bg-white px-6 md:px-10" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.howItWorks")}
          </h2>
          <div className="relative mt-10 ml-2">
            <div className="absolute top-0 bottom-0" style={{ left: 5, width: 2, backgroundColor: "#DEDCCC" }} />
            <div className="flex flex-col gap-8">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="relative pl-10"
                  style={step.highlight ? { borderLeft: "3px solid #FF7150", borderRadius: 4, paddingLeft: 36, marginLeft: -2 } : undefined}
                >
                  {!step.highlight && (
                    <div className="absolute left-0 top-1 flex items-center justify-center" style={{ width: 12 }}>
                      <TimelineDot highlight={step.highlight} />
                    </div>
                  )}
                  <h3
                    className="font-heading"
                    style={{ fontSize: 18, fontWeight: step.highlight ? 500 : 100, color: step.highlight ? "#FF7150" : "#0b0b0b" }}
                  >
                    {step.title}
                  </h3>
                  {step.detail && (
                    <p className="mt-1" style={{ fontSize: 15, color: "rgba(0,0,0,0.6)", lineHeight: 1.5 }}>
                      {step.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- Pricing (kickstart only) ---- */

function PricingSection() {
  const t = useTranslations("diensten");

  return (
    <section className="px-6 md:px-10" style={{ paddingTop: 80, paddingBottom: 80, backgroundColor: "#FAFAF8" }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.whatItCosts")}
          </h2>

          <div className="mt-10 text-center">
            <p className="font-heading" style={{ fontSize: 48, fontWeight: 100, color: "#0b0b0b" }}>
              {t("detail.kickstart.pricingAmount")}
            </p>
            <p style={{ fontSize: 18, color: "rgba(0,0,0,0.5)" }}>{t("detail.kickstart.pricingLabel")}</p>
          </div>

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

          <p className="mt-8 text-center italic" style={{ fontSize: 16, color: "rgba(0,0,0,0.6)" }}>
            {t("detail.kickstart.pricingRisk")}
          </p>
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
    <section className="px-6 md:px-10" style={{ paddingTop: 80, paddingBottom: 80, backgroundColor: "#F3EDED" }}>
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
            <>
              <p className="mt-6 font-medium" style={{ fontSize: 16, color: "#0b0b0b" }}>{author}</p>
              <p style={{ fontSize: 14, color: "rgba(0,0,0,0.5)" }}>{role}</p>
            </>
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

  return (
    <section className="bg-white px-6 md:px-10" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.nextStep")}
          </h2>
          <p className="mt-6" style={{ fontSize: 16, color: "rgba(0,0,0,0.7)", lineHeight: 1.6, maxWidth: 640 }}>
            {nextText}
          </p>
          {nextSlug ? (
            <Link
              href={`/diensten/${nextSlug}` as "/diensten/strategie"}
              className="mt-6 inline-flex items-center gap-2 text-base font-medium transition-colors hover:underline"
              style={{ color: "#FF7150" }}
            >
              {t("moreAbout")} {t(`overview.${nextSlug as ServiceSlug}.title`)} &rarr;
            </Link>
          ) : (
            <p className="mt-4 text-sm font-medium" style={{ color: "rgba(0,0,0,0.5)" }}>
              {t("overview.zelfstandig.title")} &mdash; {t("overview.zelfstandig.tagline")}
            </p>
          )}
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
      <WhatYouGetSection slug={slug} />
      <HowItWorksSection slug={slug} />
      {slug === "kickstart" && <PricingSection />}
      <TestimonialSection slug={slug} />
      <NextStepSection slug={slug} />
    </>
  );
}
