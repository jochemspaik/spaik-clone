"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BOOK_CALL_URL } from "@/lib/constants";
import Image from "next/image";

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

/* ---- 1. Hero ---- */

function HeroSection() {
  const t = useTranslations("diensten");

  const metrics = [
    { value: t("detail.adoptie.metric1value"), label: t("detail.adoptie.metric1label") },
    { value: t("detail.adoptie.metric2value"), label: t("detail.adoptie.metric2label") },
    { value: t("detail.adoptie.metric3value"), label: t("detail.adoptie.metric3label") },
  ];

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 400 }}>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "url('/images/Texture 3.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
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
              src="/images/Building.svg"
              alt=""
              aria-hidden="true"
              className="invert opacity-80"
              style={{ width: 32, height: 32 }}
            />
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-medium"
              style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#0b0b0b" }}
            >
              {t("detail.adoptie.phase")}
            </span>
          </div>

          <h1 className="font-heading text-white" style={{ fontSize: 48, fontWeight: 100, lineHeight: 1.1 }}>
            {t("detail.adoptie.headline")}
          </h1>

          <p className="mt-3 text-white/90" style={{ fontSize: 20 }}>
            {t("detail.adoptie.price")} &middot; {t("detail.adoptie.duration")}
          </p>

          <p className="mt-4 text-white/80" style={{ fontSize: 16, lineHeight: 1.6, maxWidth: 600 }}>
            {t("detail.adoptie.pitch")}
          </p>

          <div className="mt-8">
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-medium transition-colors hover:bg-white/90"
              style={{ backgroundColor: "#fff", color: "#0b0b0b" }}
            >
              {t("detail.adoptie.cta")}
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

/* ---- 2. Market Insight ---- */

function MarketInsightSection() {
  const t = useTranslations("diensten");

  return (
    <section className="bg-white px-6 md:px-10 py-12 md:py-20">
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <div className="mx-auto text-center" style={{ maxWidth: 640 }}>
            <p className="font-heading" style={{ fontSize: 80, fontWeight: 100, color: "#FF7150", lineHeight: 1 }}>
              {t("detail.adoptie.marketInsightStat")}
            </p>
            <p className="mt-2" style={{ fontSize: 16, color: "rgba(0,0,0,0.5)" }}>
              {t("detail.adoptie.marketInsightStatLabel")}
            </p>
            <h2 className="font-heading mt-8" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
              {t("detail.adoptie.marketInsightTitle")}
            </h2>
            <p className="mt-4" style={{ fontSize: 16, color: "rgba(0,0,0,0.7)", lineHeight: 1.6 }}>
              {t("detail.adoptie.marketInsightBody")}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- 3. Alternatives Teardown ---- */

function AlternativesSection() {
  const t = useTranslations("diensten");

  const alternatives = [1, 2, 3, 4].map((i) => ({
    title: t(`detail.adoptie.alt${i}Title`),
    problem: t(`detail.adoptie.alt${i}Problem`),
    diff: t(`detail.adoptie.alt${i}SpaikDiff`),
  }));

  return (
    <section className="px-6 md:px-10 py-12 md:py-20" style={{ backgroundColor: "#F3EDED" }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.adoptie.altSectionTitle")}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {alternatives.map((alt) => (
              <div key={alt.title} className="rounded-2xl border border-[#DEDCCC] bg-white p-6">
                <h3 className="font-medium" style={{ fontSize: 18, color: "#0b0b0b" }}>
                  {alt.title}
                </h3>
                <div className="mt-4 flex items-start gap-3">
                  <XIcon />
                  <p style={{ fontSize: 15, color: "rgba(0,0,0,0.6)", lineHeight: 1.5 }}>
                    {alt.problem}
                  </p>
                </div>
                <div className="mt-3 flex items-start gap-3">
                  <CheckIcon />
                  <p style={{ fontSize: 15, color: "rgba(0,0,0,0.6)", lineHeight: 1.5 }}>
                    {alt.diff}
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

/* ---- 4. Tandem Model ---- */

function TandemSection() {
  const t = useTranslations("diensten");

  const phases = [1, 2, 3].map((i) => ({
    title: t(`detail.adoptie.tandemPhase${i}Title`),
    body: t(`detail.adoptie.tandemPhase${i}Body`),
  }));

  return (
    <section className="bg-white px-6 md:px-10 py-12 md:py-20">
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.adoptie.tandemTitle")}
          </h2>
          <p className="mt-3" style={{ fontSize: 16, color: "rgba(0,0,0,0.6)", lineHeight: 1.6 }}>
            {t("detail.adoptie.tandemSubtitle")}
          </p>

          <div className="mt-10 rounded-2xl overflow-hidden">
            <Image
              src="/images/tandem-model.png"
              alt={t("detail.adoptie.tandemTitle")}
              width={1080}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {phases.map((phase, i) => (
              <div key={phase.title} className="flex flex-col gap-3">
                <span
                  className="flex items-center justify-center shrink-0 rounded-full text-xs font-medium"
                  style={{ width: 28, height: 28, backgroundColor: "#FF7150", color: "#fff" }}
                >
                  {i + 1}
                </span>
                <h3 className="font-medium" style={{ fontSize: 16, color: "#0b0b0b" }}>
                  {phase.title}
                </h3>
                <p style={{ fontSize: 15, color: "rgba(0,0,0,0.6)", lineHeight: 1.5 }}>
                  {phase.body}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- 5. Champions Program ---- */

function ChampionsSection() {
  const t = useTranslations("diensten");

  const competencies = [1, 2, 3, 4].map((i) => ({
    title: t(`detail.adoptie.champ${i}Title`),
    body: t(`detail.adoptie.champ${i}Body`),
  }));

  const extras = [
    { title: t("detail.adoptie.certTitle"), body: t("detail.adoptie.certBody") },
    { title: t("detail.adoptie.kitTitle"), body: t("detail.adoptie.kitBody") },
    { title: t("detail.adoptie.communityTitle"), body: t("detail.adoptie.communityBody") },
  ];

  return (
    <section className="px-6 md:px-10 py-12 md:py-20" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.adoptie.championsTitle")}
          </h2>
          <p className="mt-3" style={{ fontSize: 16, color: "rgba(0,0,0,0.6)", lineHeight: 1.6 }}>
            {t("detail.adoptie.championsSubtitle")}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {competencies.map((comp) => (
              <div key={comp.title} className="rounded-2xl border border-[#DEDCCC] bg-white p-6">
                <h4 className="font-medium" style={{ fontSize: 16, color: "#0b0b0b" }}>
                  {comp.title}
                </h4>
                <p className="mt-2" style={{ fontSize: 15, color: "rgba(0,0,0,0.6)", lineHeight: 1.5 }}>
                  {comp.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {extras.map((item) => (
              <div key={item.title}>
                <CheckIcon color="#FF7150" />
                <h4 className="mt-2 font-medium" style={{ fontSize: 16, color: "#0b0b0b" }}>
                  {item.title}
                </h4>
                <p className="mt-1" style={{ fontSize: 15, color: "rgba(0,0,0,0.6)", lineHeight: 1.5 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- 6. Qualification (ForWho + Champion Gate) ---- */

function QualificationSection() {
  const t = useTranslations("diensten");

  const yesItems = [
    t("detail.adoptie.yes1"),
    t("detail.adoptie.yes2"),
    t("detail.adoptie.yes3"),
  ];
  const noItems = [
    { text: t("detail.adoptie.no1"), link: t("detail.adoptie.no1link"), href: t("detail.adoptie.no1slug") },
    { text: t("detail.adoptie.no2"), link: t("detail.adoptie.no2link"), href: t("detail.adoptie.no2slug") },
  ];
  const gateCriteria = [
    t("detail.adoptie.gateCriteria1"),
    t("detail.adoptie.gateCriteria2"),
    t("detail.adoptie.gateCriteria3"),
    t("detail.adoptie.gateCriteria4"),
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

          {/* Champion Gate */}
          <div
            className="mt-12 rounded-xl p-6"
            style={{ backgroundColor: "rgba(255,113,80,0.06)", border: "1px solid rgba(255,113,80,0.2)" }}
          >
            <h3 className="font-bold" style={{ fontSize: 18, color: "#0b0b0b" }}>
              {t("detail.adoptie.gateTitle")}
            </h3>
            <p className="mt-2" style={{ fontSize: 15, color: "rgba(0,0,0,0.6)", lineHeight: 1.5 }}>
              {t("detail.adoptie.gateBody")}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {gateCriteria.map((criterion) => (
                <li key={criterion} className="flex items-start gap-3">
                  <CheckIcon color="#FF7150" />
                  <span style={{ fontSize: 15, color: "rgba(0,0,0,0.7)", lineHeight: 1.5 }}>{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- 7. 3-Tier Pricing ---- */

function TiersSection() {
  const t = useTranslations("diensten");

  const tiers = [1, 2, 3].map((i) => ({
    name: t(`detail.adoptie.tier${i}Name`),
    subtitle: t(`detail.adoptie.tier${i}Subtitle`),
    monthly: t(`detail.adoptie.tier${i}Monthly`),
    total: t(`detail.adoptie.tier${i}Total`),
    scope: t(`detail.adoptie.tier${i}Scope`),
    features: [1, 2, 3, 4, 5].map((f) => t(`detail.adoptie.tier${i}Feature${f}`)),
    isPopular: i === 2,
  }));

  return (
    <section className="px-6 md:px-10 py-12 md:py-20" style={{ backgroundColor: "#F3EDED" }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.adoptie.tiersTitle")}
          </h2>
          <p className="mt-3" style={{ fontSize: 16, color: "rgba(0,0,0,0.6)", lineHeight: 1.6 }}>
            {t("detail.adoptie.tiersSubtitle")}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="relative rounded-2xl bg-white p-6"
                style={{
                  border: tier.isPopular ? "2px solid #FF7150" : "1px solid #DEDCCC",
                }}
              >
                {tier.isPopular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF7150] text-white text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {t("detail.adoptie.tier2Badge")}
                  </span>
                )}

                <h3 className="font-heading" style={{ fontSize: 24, fontWeight: 400, color: "#0b0b0b" }}>
                  {tier.name}
                </h3>
                <p className="mt-1" style={{ fontSize: 14, color: "rgba(0,0,0,0.5)" }}>
                  {tier.subtitle}
                </p>

                <p className="font-heading mt-6" style={{ fontSize: 36, fontWeight: 100, color: "#0b0b0b", lineHeight: 1.1 }}>
                  {tier.monthly}
                </p>
                <p style={{ fontSize: 14, color: "rgba(0,0,0,0.5)" }}>
                  {t("detail.adoptie.tiersPerMonth")}
                </p>
                <p className="mt-1" style={{ fontSize: 13, color: "rgba(0,0,0,0.4)" }}>
                  {tier.total}
                </p>

                <p className="mt-4 font-medium" style={{ fontSize: 14, color: "#0b0b0b" }}>
                  {tier.scope}
                </p>

                <ul className="mt-4 flex flex-col gap-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckIcon color="#FF7150" />
                      <span style={{ fontSize: 14, color: "rgba(0,0,0,0.6)", lineHeight: 1.5 }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href={BOOK_CALL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-xl px-6 py-2.5 text-sm font-medium transition-colors"
                    style={
                      tier.isPopular
                        ? { backgroundColor: "#FF7150", color: "#fff" }
                        : { backgroundColor: "transparent", color: "#0b0b0b", border: "1px solid #DEDCCC" }
                    }
                  >
                    {t("detail.adoptie.tiersCta")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- 8. Governance ---- */

function GovernanceSection() {
  const t = useTranslations("diensten");

  const items = [
    t("detail.adoptie.gov1"),
    t("detail.adoptie.gov2"),
    t("detail.adoptie.gov3"),
    t("detail.adoptie.gov4"),
  ];

  return (
    <section className="bg-white px-6 md:px-10 py-12 md:py-20">
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.adoptie.govTitle")}
          </h2>
          <p className="mt-3" style={{ fontSize: 16, color: "rgba(0,0,0,0.6)", lineHeight: 1.6 }}>
            {t("detail.adoptie.govSubtitle")}
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon />
                <span style={{ fontSize: 16, color: "rgba(0,0,0,0.7)", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- 9. Testimonial ---- */

function TestimonialSection() {
  const t = useTranslations("diensten");

  return (
    <section className="px-6 md:px-10 py-12 md:py-20" style={{ backgroundColor: "#F3EDED" }}>
      <div className="mx-auto text-center" style={{ maxWidth: 800 }}>
        <ScrollReveal>
          <blockquote>
            <p
              className="font-heading italic"
              style={{ fontSize: 22, fontWeight: 100, color: "#0b0b0b", lineHeight: 1.5 }}
            >
              &ldquo;{t("detail.adoptie.testimonialQuote")}&rdquo;
            </p>
          </blockquote>
          <div className="mt-6 flex flex-col items-center gap-3">
            <img
              src="/images/case-johanneke.jpg"
              alt={t("detail.adoptie.testimonialAuthor")}
              className="rounded-full object-cover"
              style={{ width: 48, height: 48 }}
            />
            <div>
              <p className="font-medium" style={{ fontSize: 16, color: "#0b0b0b" }}>
                {t("detail.adoptie.testimonialAuthor")}
              </p>
              <p style={{ fontSize: 14, color: "rgba(0,0,0,0.5)" }}>
                {t("detail.adoptie.testimonialRole")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- 10. Timeline ---- */

function TimelineSection() {
  const t = useTranslations("diensten");

  const steps = [
    { title: t("detail.adoptie.processMonth12"), detail: t("detail.adoptie.processMonth12detail") },
    { title: t("detail.adoptie.processMonth34"), detail: t("detail.adoptie.processMonth34detail") },
    { title: t("detail.adoptie.processMonth56"), detail: t("detail.adoptie.processMonth56detail") },
    { title: t("detail.adoptie.processMonth78"), detail: t("detail.adoptie.processMonth78detail") },
  ];

  return (
    <section className="bg-white px-6 md:px-10 py-12 md:py-20">
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.howItWorks")}
          </h2>
          <div className="mt-10 flex flex-col gap-6">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;
              return (
                <div key={step.title} className="flex gap-4">
                  {/* Left: numbered circle + connector line */}
                  <div className="flex flex-col items-center">
                    <span
                      className="flex items-center justify-center shrink-0 rounded-full text-xs font-medium"
                      style={{ width: 28, height: 28, backgroundColor: "#FF7150", color: "#fff" }}
                    >
                      {i + 1}
                    </span>
                    {!isLast && (
                      <div className="flex-1 w-0.5 mt-2" style={{ backgroundColor: "#DEDCCC" }} />
                    )}
                  </div>
                  {/* Right: content */}
                  <div className="flex-1 pb-2">
                    <h3 className="font-heading" style={{ fontSize: 18, fontWeight: 400, color: "#0b0b0b" }}>
                      {step.title}
                    </h3>
                    <p className="mt-1" style={{ fontSize: 15, color: "rgba(0,0,0,0.6)", lineHeight: 1.5 }}>
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- 11. Dual CTA ---- */

function DualCtaSection() {
  const t = useTranslations("diensten");

  return (
    <section className="px-6 md:px-10 py-12 md:py-20" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="mx-auto text-center" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}>
            {t("detail.adoptie.dualCtaTitle")}
          </h2>
          <p className="mt-4 mx-auto" style={{ fontSize: 16, color: "rgba(0,0,0,0.6)", lineHeight: 1.6, maxWidth: 600 }}>
            {t("detail.adoptie.dualCtaBody")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF7150] text-white rounded-xl px-8 py-3 text-sm font-medium hover:bg-[#e5614a] transition-colors"
            >
              {t("detail.adoptie.dualCtaPrimary")}
            </a>
            <button
              type="button"
              disabled
              className="border border-[#DEDCCC] rounded-xl px-8 py-3 text-sm font-medium text-[#0b0b0b]/60 cursor-not-allowed opacity-50"
            >
              {t("detail.adoptie.dualCtaSecondary")}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---- Main Component ---- */

export function AdoptieDetailPage() {
  return (
    <>
      <HeroSection />
      <MarketInsightSection />
      <AlternativesSection />
      <TandemSection />
      <ChampionsSection />
      <QualificationSection />
      <TiersSection />
      <GovernanceSection />
      <TestimonialSection />
      <TimelineSection />
      <DualCtaSection />
    </>
  );
}
