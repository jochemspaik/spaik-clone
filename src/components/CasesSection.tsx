"use client";

import React, { useCallback } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { CASES } from "@/data/cases";

/* ── Animated counter ── */
function AnimatedCounter({ value, color }: { value: string; color?: string }) {
  const ref = React.useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = React.useState("0");
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const numMatch = value.match(/(\d+)/);
          if (!numMatch) { setDisplay(value); return; }
          const target = parseInt(numMatch[1], 10);
          const prefix = value.slice(0, value.indexOf(numMatch[1]));
          const postfix = value.slice(value.indexOf(numMatch[1]) + numMatch[1].length);
          let current = 0;
          const steps = 40;
          const increment = target / steps;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { current = target; clearInterval(timer); }
            setDisplay(`${prefix}${Math.round(current)}${postfix}`);
          }, 1500 / steps);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <p ref={ref} className="font-sans font-bold" style={{ fontSize: "28px", lineHeight: "1.1", color: color || "#0b0b0b", fontVariantNumeric: "tabular-nums" }}>
      {display}
    </p>
  );
}

/* ── Types ── */
interface CaseData {
  companyName: string;
  companyType: string;
  logoSrc: string;
  personSrc: string;
  quote: string;
  author: string;
  stats: { value: string; label: string }[];
  roi: string;
  bgColor: string;
  accentColor: string;
}

/* ── Main component ── */
export function CasesSection() {
  const t = useTranslations();
  const [active, setActive] = React.useState(0);
  const [direction, setDirection] = React.useState<"left" | "right">("right");
  const timerRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const cases: CaseData[] = CASES.map((c) => ({
    companyName: c.companyName,
    companyType: t(`cases.${c.slug}.type`),
    logoSrc: c.logoSrc,
    personSrc: c.personSrc,
    quote: t(`cases.${c.slug}.quote`),
    author: t(`cases.${c.slug}.author`),
    stats: [
      { value: t(`cases.${c.slug}.stat1value`), label: t(`cases.${c.slug}.stat1label`) },
      { value: t(`cases.${c.slug}.stat2value`), label: t(`cases.${c.slug}.stat2label`) },
      { value: t(`cases.${c.slug}.stat3value`), label: t(`cases.${c.slug}.stat3label`) },
    ],
    roi: t(`cases.${c.slug}.roiText`),
    bgColor: c.bgColor,
    accentColor: c.accentColor,
  }));

  const current = cases[active];

  const SLIDE_MS = 6000;
  const caseCount = cases.length;

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection("right");
      setActive((prev) => (prev + 1) % caseCount);
    }, SLIDE_MS);
  }, [caseCount]);

  React.useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  function goTo(index: number) {
    if (index === active) return;
    setDirection(index > active ? "right" : "left");
    setActive(index);
    startTimer();
  }

  const slideAnim = direction === "right"
    ? "slideInRight 0.5s ease-out"
    : "slideInLeft 0.5s ease-out";

  return (
    <section id="cases" className="relative w-full overflow-hidden">
      {/* Decorative texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "url('/images/Texture 1.webp')", backgroundSize: "800px", backgroundRepeat: "repeat" }}
      />
      {/* Dot-grid decoration — right edge */}
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-full md:block"
        style={{ width: "30%", opacity: 0.06, zIndex: 0 }}
      >
        <img
          src="/images/hero-graphic.png"
          alt=""
          aria-hidden="true"
          width={800}
          height={800}
          className="h-full w-full object-cover object-left"
          style={{ maskImage: "linear-gradient(to left, black 30%, transparent 100%)", WebkitMaskImage: "linear-gradient(to left, black 30%, transparent 100%)" }}
        />
      </div>

      <div className="relative mx-auto" style={{ maxWidth: "1080px", padding: "80px 40px" }}>
        {/* Header */}
        <div className="mb-12">
          <h2
            className="font-heading"
            style={{ fontSize: "32px", fontWeight: 100, color: "#0b0b0b", lineHeight: "35.2px" }}
          >
            {t("cases.sectionTitle")}
          </h2>
          <p className="mt-3" style={{ fontSize: "16px", color: "rgba(0,0,0,0.6)", lineHeight: "24px" }}>
            {t("cases.sectionSubtitle")}
          </p>
        </div>

        {/* Carousel */}
        <Link
          href={`/cases/${CASES[active].slug}` as "/"}
          className="grain-overlay block rounded-3xl overflow-hidden transition-colors duration-500 group/card"
          style={{ backgroundColor: current.bgColor }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Person photo */}
            <div className="relative w-full md:w-[340px] h-[280px] md:h-auto flex-shrink-0">
              <Image
                src={current.personSrc}
                alt={current.author}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 340px"
              />
              {/* Gradient overlay on bottom (mobile) / right (desktop) */}
              <div
                className="absolute inset-0 md:hidden"
                style={{ background: `linear-gradient(to top, ${current.bgColor}, transparent 40%)` }}
              />
              <div
                className="absolute inset-0 hidden md:block"
                style={{ background: `linear-gradient(to left, ${current.bgColor}, transparent 30%)` }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
              {/* Company bar */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative h-7 w-28 flex-shrink-0">
                    <Image src={current.logoSrc} alt={current.companyName} fill className="object-contain object-left" sizes="112px" />
                  </div>
                  <span className="text-sm" style={{ color: "rgba(0,0,0,0.4)" }}>{current.companyType}</span>
                </div>

                {/* Quote */}
                <blockquote
                  className="font-heading"
                  style={{ fontSize: "24px", fontWeight: 100, lineHeight: "30px", letterSpacing: "-0.3px", color: "#0b0b0b" }}
                >
                  {current.quote}
                </blockquote>
                <p className="mt-3 font-medium" style={{ fontSize: "14px", color: "#0b0b0b" }}>
                  {current.author}
                </p>
              </div>

              {/* Stats + ROI */}
              <div className="mt-8">
                <div className="flex flex-wrap gap-8 mb-5">
                  {current.stats.map((stat) => (
                    <div key={stat.label}>
                      <AnimatedCounter value={stat.value} color={current.accentColor} />
                      <p className="mt-1" style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)" }}>{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                  style={{ backgroundColor: "rgba(0,0,0,0.06)" }}
                >
                  <span className="font-medium" style={{ fontSize: "13px", color: "rgba(0,0,0,0.4)" }}>ROI:</span>
                  <span className="font-medium" style={{ fontSize: "13px", color: "#0b0b0b" }}>{current.roi}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Case selector tabs — always visible so user knows there are multiple */}
        <div className="flex items-center gap-2 mt-8">
          {cases.map((c, i) => (
            <button
              key={c.companyName}
              type="button"
              onClick={() => goTo(i)}
              className="relative flex-1 text-left rounded-xl px-5 py-4 overflow-hidden transition-[background-color,border-color] duration-300"
              style={{
                backgroundColor: i === active ? c.bgColor : "rgba(0,0,0,0.03)",
                border: i === active ? `2px solid ${c.accentColor}` : "2px solid transparent",
              }}
            >
              <span
                className="block text-sm font-medium"
                style={{ color: i === active ? "#0b0b0b" : "rgba(0,0,0,0.4)" }}
              >
                {c.companyName}
              </span>
              <span
                className="block text-xs mt-0.5"
                style={{ color: "rgba(0,0,0,0.3)" }}
              >
                {c.companyType}
              </span>
              {/* Progress bar for active tab */}
              {i === active && (
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-full rounded-full origin-left"
                  style={{
                    backgroundColor: c.accentColor,
                    animation: "progressBar 6s linear",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* All cases link */}
        <div className="mt-8 text-center">
          <Link
            href={"/cases" as "/"}
            className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-spaik-orange"
            style={{ color: "rgba(0,0,0,0.5)" }}
          >
            {t("cases.viewAll")} &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
