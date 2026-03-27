"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

/* ── Animated counter ── */
function AnimatedCounter({ value }: { value: string }) {
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
    <p ref={ref} className="font-sans font-bold" style={{ fontSize: "28px", lineHeight: "1.1", color: "#0a0a0a" }}>
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

  const cases: CaseData[] = [
    {
      companyName: "Movir",
      companyType: t("cases.movir.type"),
      logoSrc: "/images/logo-movir.png",
      personSrc: "/images/case-maurick.jpg",
      quote: t("cases.movir.quote"),
      author: t("cases.movir.author"),
      stats: [
        { value: "10x", label: t("cases.movir.stat1label") },
        { value: "100", label: t("cases.movir.stat2label") },
        { value: "5", label: t("cases.movir.stat3label") },
      ],
      roi: t("cases.movir.roiText"),
      bgColor: "#fef5f3",
      accentColor: "#ff7150",
    },
    {
      companyName: "Euphoria Mobility",
      companyType: t("cases.euphoria.type"),
      logoSrc: "/images/logo-euphoria.png",
      personSrc: "/images/case-vincent.jpg",
      quote: t("cases.euphoria.quote"),
      author: t("cases.euphoria.author"),
      stats: [
        { value: "10+", label: t("cases.euphoria.stat1label") },
        { value: "5X", label: t("cases.euphoria.stat2label") },
        { value: "6", label: t("cases.euphoria.stat3label") },
      ],
      roi: t("cases.euphoria.roiText"),
      bgColor: "#f7f4ff",
      accentColor: "#a78bfa",
    },
    {
      companyName: "Reditus",
      companyType: t("cases.reditus.type"),
      logoSrc: "/images/logo-reditus.jpg",
      personSrc: "/images/case-joran.png",
      quote: t("cases.reditus.quote"),
      author: t("cases.reditus.author"),
      stats: [
        { value: "5x", label: t("cases.reditus.stat1label") },
        { value: "5min", label: t("cases.reditus.stat2label") },
        { value: "5", label: t("cases.reditus.stat3label") },
      ],
      roi: t("cases.reditus.roiText"),
      bgColor: "#eef6f5",
      accentColor: "#34d399",
    },
  ];

  const current = cases[active];

  const SLIDE_MS = 6000;

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection("right");
      setActive((prev) => (prev + 1) % cases.length);
    }, SLIDE_MS);
  }

  React.useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [cases.length]);

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
        style={{ backgroundImage: "url('/images/Texture 1.png')", backgroundSize: "800px", backgroundRepeat: "repeat" }}
      />

      <div className="relative mx-auto" style={{ maxWidth: "1080px", padding: "80px 40px" }}>
        {/* Header */}
        <div className="mb-12">
          <h2
            className="font-heading"
            style={{ fontSize: "32px", fontWeight: 100, color: "#0a0a0a", lineHeight: "35.2px" }}
          >
            {t("cases.sectionTitle")}
          </h2>
          <p className="mt-3" style={{ fontSize: "16px", color: "rgba(0,0,0,0.6)", lineHeight: "24px" }}>
            {t("cases.sectionSubtitle")}
          </p>
        </div>

        {/* Carousel */}
        <div
          key={`${active}-${direction}`}
          className="rounded-3xl overflow-hidden"
          style={{ backgroundColor: current.bgColor, animation: slideAnim }}
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
                    <Image src={current.logoSrc} alt={current.companyName} fill className="object-contain object-left" />
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
                <p className="mt-3 font-medium" style={{ fontSize: "14px", color: "#0a0a0a" }}>
                  {current.author}
                </p>
              </div>

              {/* Stats + ROI */}
              <div className="mt-8">
                <div className="flex flex-wrap gap-8 mb-5">
                  {current.stats.map((stat) => (
                    <div key={stat.label}>
                      <AnimatedCounter value={stat.value} />
                      <p className="mt-1" style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)" }}>{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                  style={{ backgroundColor: "rgba(0,0,0,0.06)" }}
                >
                  <span className="font-medium" style={{ fontSize: "13px", color: "rgba(0,0,0,0.4)" }}>ROI:</span>
                  <span className="font-medium" style={{ fontSize: "13px", color: "#0a0a0a" }}>{current.roi}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case selector tabs — always visible so user knows there are multiple */}
        <div className="flex items-center gap-2 mt-8">
          {cases.map((c, i) => (
            <button
              key={c.companyName}
              type="button"
              onClick={() => goTo(i)}
              className="relative flex-1 text-left rounded-xl px-5 py-4 transition-all duration-300"
              style={{
                backgroundColor: i === active ? c.bgColor : "rgba(0,0,0,0.03)",
                border: i === active ? `2px solid ${c.accentColor}` : "2px solid transparent",
              }}
            >
              <span
                className="block text-sm font-medium"
                style={{ color: i === active ? "#0a0a0a" : "rgba(0,0,0,0.4)" }}
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
                  className="absolute bottom-0 left-0 h-0.5 rounded-full"
                  style={{
                    backgroundColor: c.accentColor,
                    animation: "progressBar 6s linear",
                    width: "100%",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
