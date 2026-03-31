"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { RollingTextButton } from "@/components/RollingTextButton";
import { type CaseSlug, type CaseData } from "@/data/cases";
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
  const stat1value = t(`${slug}.stat1value`);
  const stat1label = t(`${slug}.stat1label`);
  const stat2value = t(`${slug}.stat2value`);
  const stat2label = t(`${slug}.stat2label`);
  const stat3value = t(`${slug}.stat3value`);
  const stat3label = t(`${slug}.stat3label`);
  const roiText = t(`${slug}.roiText`);

  const stats = [
    { value: stat1value, label: stat1label },
    { value: stat2value, label: stat2label },
    { value: stat3value, label: stat3label },
  ];

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: caseData.bgColor, minHeight: "520px" }}
      >
        {/* Person photo */}
        <div className="absolute inset-0">
          <Image
            src={caseData.personSrc}
            alt={caseData.companyName}
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay — fade to bgColor at bottom */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.04) 40%, ${caseData.bgColor} 92%)`,
            }}
          />
        </div>

        {/* Logo + type pill — bottom-left */}
        <div
          className="relative z-10 flex flex-col justify-end px-6 pb-10 md:px-10"
          style={{ minHeight: "520px" }}
        >
          <div className="mx-auto w-full" style={{ maxWidth: "1080px" }}>
            <ScrollReveal direction="up" delay={0}>
              <div className="flex flex-col gap-3">
                <Image
                  src={caseData.logoSrc}
                  alt={`${caseData.companyName} logo`}
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                  style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.3))" }}
                />
                <span
                  className="inline-block rounded-full px-3 py-1 text-sm font-medium text-white"
                  style={{ backgroundColor: caseData.accentColor, width: "fit-content" }}
                >
                  {type}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Quote block ──────────────────────────────────────────── */}
      <section
        className="px-6 py-16 md:px-10 md:py-20"
        style={{ backgroundColor: caseData.bgColor }}
      >
        <div className="mx-auto" style={{ maxWidth: "1080px" }}>
          <ScrollReveal direction="up" delay={0}>
            <blockquote className="mb-5">
              <p className="font-heading text-2xl font-semibold leading-snug text-gray-900 md:text-3xl lg:text-4xl">
                {quote}
              </p>
            </blockquote>
            <p className="font-sans text-base text-gray-500">{author}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto" style={{ maxWidth: "1080px" }}>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} direction="up" delay={i * 80}>
                <div className="flex flex-col gap-1">
                  <span
                    className="font-heading text-5xl font-bold md:text-6xl"
                    style={{ color: caseData.accentColor }}
                  >
                    {stat.value}
                  </span>
                  <span className="font-sans text-base text-gray-600">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ROI badge */}
          <ScrollReveal direction="up" delay={240}>
            <div className="mt-10">
              <span
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: caseData.accentColor }}
              >
                <span>ROI:</span>
                <span>{roiText}</span>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-white px-6 pb-24 pt-4 md:px-10">
        <div className="mx-auto" style={{ maxWidth: "1080px" }}>
          <ScrollReveal direction="up">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <RollingTextButton text="Plan een gesprek" href={BOOK_CALL_URL} variant="primary" />
              <Link
                href="/cases"
                className="font-sans text-sm font-medium text-gray-500 underline underline-offset-4 transition-colors hover:text-gray-800"
              >
                ← Terug naar cases
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
