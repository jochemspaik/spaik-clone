"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { RollingTextButton } from "@/components/RollingTextButton";
import { CASES, type CaseSlug, type CaseData } from "@/data/cases";
import { BOOK_CALL_URL } from "@/lib/constants";

interface Props {
  slug: CaseSlug;
  caseData: CaseData;
}

export function CaseDetailView({ slug, caseData }: Props) {
  const t = useTranslations("cases");

  const type = t(`${slug}.type`);
  const quote = t(`${slug}.quote`);
  const author = t(`${slug}.author`);
  const stats = [
    { value: t(`${slug}.stat1value`), label: t(`${slug}.stat1label`) },
    { value: t(`${slug}.stat2value`), label: t(`${slug}.stat2label`) },
    { value: t(`${slug}.stat3value`), label: t(`${slug}.stat3label`) },
  ];
  const roiText = t(`${slug}.roiText`);

  // Optional editorial sections — only render if content exists
  const hasSituation = t.has(`${slug}.situation`);
  const hasApproach = t.has(`${slug}.approach`);
  const hasResult = t.has(`${slug}.result`);
  const hasImpact = t.has(`${slug}.impact`);

  // Related cases — the other 2
  const related = CASES.filter((c) => c.slug !== slug);

  return (
    <main>
      {/* ── Hero: Quote + Portrait side-by-side ─────────────────── */}
      <section className="px-6 md:px-10 pt-24 md:pt-32 pb-16">
        <div className="mx-auto" style={{ maxWidth: "1080px" }}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
            {/* Quote side */}
            <div className="md:col-span-7 order-2 md:order-1">
              <ScrollReveal direction="up" delay={0}>
                {/* Company bar */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-6 w-px" style={{ backgroundColor: caseData.accentColor, opacity: 0.4 }} />
                  <Image
                    src={caseData.logoSrc}
                    alt={`${caseData.companyName} logo`}
                    width={120}
                    height={36}
                    className="h-7 w-auto object-contain"
                  />
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[11px] font-medium"
                    style={{ backgroundColor: `${caseData.accentColor}18`, color: caseData.accentColor }}
                  >
                    {type}
                  </span>
                </div>

                {/* Quote as headline */}
                <h1
                  className="font-heading italic text-2xl md:text-4xl lg:text-[42px] leading-snug mb-8"
                  style={{ fontWeight: 100, color: "#0b0b0b" }}
                >
                  {quote}
                </h1>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Image
                    src={caseData.personSrc}
                    alt={author}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                    style={{ width: 48, height: 48 }}
                  />
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#0b0b0b" }}>{author}</p>
                    <p className="text-xs" style={{ color: "rgba(0,0,0,0.5)" }}>{caseData.companyName}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Portrait photo */}
            <div className="md:col-span-5 order-1 md:order-2">
              <ScrollReveal direction="up" delay={100}>
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{ aspectRatio: "4/5" }}
                >
                  <Image
                    src={caseData.personSrc}
                    alt={author}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics strip ────────────────────────────────────────── */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: caseData.bgColor }}
      >
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: "1080px" }}>
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <span
                    className="font-heading text-5xl md:text-6xl font-bold tracking-tight"
                    style={{ color: caseData.accentColor }}
                  >
                    {stat.value}
                  </span>
                  <p
                    className="text-xs font-medium uppercase tracking-widest"
                    style={{ color: "rgba(0,0,0,0.45)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* ROI badge */}
            <div className="mt-8 md:mt-10">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                style={{ backgroundColor: `${caseData.accentColor}15`, color: caseData.accentColor }}
              >
                ROI: {roiText}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── De Situatie (optional) ───────────────────────────────── */}
      {hasSituation && (
        <section className="py-16 md:py-24 px-6 md:px-10">
          <div className="mx-auto" style={{ maxWidth: "1080px" }}>
            <ScrollReveal direction="up">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                <div className="md:col-span-3">
                  <span
                    className="text-[11px] font-bold tracking-[0.2em] uppercase"
                    style={{ color: caseData.accentColor }}
                  >
                    {t("detail.situationLabel")}
                  </span>
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(0,0,0,0.8)" }}>
                    {t(`${slug}.situation`)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Onze Aanpak (optional — timeline) ────────────────────── */}
      {hasApproach && (
        <section className="py-16 md:py-24 px-6 md:px-10">
          <div className="mx-auto" style={{ maxWidth: "1080px" }}>
            <ScrollReveal direction="up">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                <div className="md:col-span-3">
                  <span
                    className="text-[11px] font-bold tracking-[0.2em] uppercase"
                    style={{ color: caseData.accentColor }}
                  >
                    {t("detail.approachLabel")}
                  </span>
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(0,0,0,0.8)" }}>
                    {t(`${slug}.approach`)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Het Resultaat (optional) ─────────────────────────────── */}
      {hasResult && (
        <section className="py-16 md:py-24 px-6 md:px-10">
          <div className="mx-auto" style={{ maxWidth: "1080px" }}>
            <ScrollReveal direction="up">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                <div className="md:col-span-3">
                  <span
                    className="text-[11px] font-bold tracking-[0.2em] uppercase"
                    style={{ color: caseData.accentColor }}
                  >
                    {t("detail.resultLabel")}
                  </span>
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(0,0,0,0.8)" }}>
                    {t(`${slug}.result`)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Business Model Impact (optional) ─────────────────────── */}
      {hasImpact && (
        <section className="px-6 md:px-10 py-16 md:py-24">
          <div className="mx-auto" style={{ maxWidth: "1080px" }}>
            <ScrollReveal direction="up">
              <div
                className="rounded-2xl p-8 md:p-16"
                style={{ backgroundColor: `${caseData.accentColor}10`, border: `1px solid ${caseData.accentColor}20` }}
              >
                <h2
                  className="font-heading text-2xl md:text-3xl mb-6"
                  style={{ fontWeight: 100, color: "#0b0b0b" }}
                >
                  {t("detail.impactTitle")}
                </h2>
                <p className="text-base leading-relaxed max-w-3xl" style={{ color: "rgba(0,0,0,0.7)" }}>
                  {t(`${slug}.impact`)}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Related Cases ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="mx-auto" style={{ maxWidth: "1080px" }}>
          <ScrollReveal direction="up">
          <div className="flex justify-between items-end mb-10">
            <h2
              className="font-heading text-2xl md:text-3xl italic"
              style={{ fontWeight: 100, color: "#0b0b0b" }}
            >
              {t("detail.relatedTitle")}
            </h2>
            <Link
              href={"/cases" as "/"}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: caseData.accentColor }}
            >
              {t("detail.viewAllCases")}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((rc) => (
              <Link
                key={rc.slug}
                href={`/cases/${rc.slug}` as "/"}
                className="group block rounded-2xl overflow-hidden transition-shadow hover:shadow-lg"
                style={{ backgroundColor: rc.bgColor }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={rc.personSrc}
                    alt={rc.companyName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgba(0,0,0,0.4)" }}>
                    {t(`${rc.slug}.type`)}
                  </span>
                  <h3
                    className="font-heading text-xl mt-1 group-hover:opacity-70 transition-opacity"
                    style={{ fontWeight: 100, color: "#0b0b0b" }}
                  >
                    {rc.companyName}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto" style={{ maxWidth: "1080px" }}>
          <ScrollReveal direction="up">
            <div
              className="rounded-2xl p-10 md:p-20 text-center"
              style={{ backgroundColor: "#F3EDED" }}
            >
              <h2
                className="font-heading text-3xl md:text-4xl italic mb-4"
                style={{ fontWeight: 100, color: "#0b0b0b" }}
              >
                {t("detail.ctaTitle")}
              </h2>
              <p
                className="text-base max-w-xl mx-auto mb-8"
                style={{ color: "rgba(0,0,0,0.6)" }}
              >
                {t("detail.ctaText")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <RollingTextButton text={t("detail.ctaCta")} href={BOOK_CALL_URL} variant="primary" />
                <Link
                  href={"/cases" as "/"}
                  className="text-sm font-medium underline underline-offset-4 transition-colors hover:opacity-70"
                  style={{ color: "rgba(0,0,0,0.5)" }}
                >
                  {t("detail.ctaSecondary")}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
