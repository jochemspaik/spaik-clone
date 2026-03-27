"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

interface CaseStat {
  value: string;
  label: string;
}

interface CaseCardProps {
  companyName: string;
  companyType: string;
  logoSrc: string;
  logoAlt: string;
  personSrc: string;
  quote: string;
  author: string;
  stats: CaseStat[];
  roi: string;
  bgClass: string;
  accentColor: string;
  photoPosition: "left" | "right";
}

function CaseCard({
  companyType,
  logoSrc,
  logoAlt,
  personSrc,
  quote,
  author,
  stats,
  roi,
  bgClass,
  accentColor,
  photoPosition,
}: CaseCardProps) {
  const isLeft = photoPosition === "left";

  return (
    <div
      className={`relative w-full rounded-2xl overflow-visible ${bgClass}`}
      style={{ padding: "40px 40px 32px 40px" }}
    >
      {/* Overlapping person photo - desktop */}
      <div
        className="hidden md:block absolute top-0 bottom-0"
        style={{
          [isLeft ? "left" : "right"]: "-80px",
          width: "280px",
          zIndex: 2,
        }}
      >
        <Image
          src={personSrc}
          alt={author}
          fill
          className="object-cover object-top"
          style={{ borderRadius: "20px" }}
        />
      </div>

      <div className={`${isLeft ? "md:pl-[220px]" : "md:pr-[220px]"}`}>
        {/* Top bar: company info + accent */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: accentColor }}
          />
          <div className="relative h-6 w-24 flex-shrink-0">
            <Image
              src={logoSrc}
              alt={logoAlt}
              fill
              className="object-contain object-left"
            />
          </div>
          <span
            className="font-sans text-sm"
            style={{ color: "rgba(0,0,0,0.5)" }}
          >
            {companyType}
          </span>
        </div>

        {/* Quote */}
        <p
          className="font-sans mb-3"
          style={{
            fontSize: "15px",
            lineHeight: "1.6",
            color: "rgba(0,0,0,0.8)",
          }}
        >
          &ldquo;{quote}&rdquo;
        </p>

        {/* Author */}
        <p
          className="font-sans font-medium mb-6"
          style={{ fontSize: "14px", color: "#0a0a0a" }}
        >
          {author}
        </p>

        {/* Person photo - mobile only */}
        <div className="flex md:hidden mb-6">
          <div className="relative w-20 h-24 rounded-xl overflow-hidden">
            <Image
              src={personSrc}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-6 mb-5">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-0">
              <p
                className="font-sans font-bold"
                style={{ fontSize: "32px", lineHeight: "1.1", color: "#0a0a0a" }}
              >
                {stat.value}
              </p>
              <p
                className="font-sans mt-1"
                style={{ fontSize: "14px", color: "rgba(0,0,0,0.5)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ROI badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2"
          style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
        >
          <span
            className="font-sans font-medium"
            style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)" }}
          >
            ROI:
          </span>
          <span
            className="font-sans font-medium"
            style={{ fontSize: "13px", color: "#0a0a0a" }}
          >
            {roi}
          </span>
        </div>
      </div>
    </div>
  );
}

export function CasesSection() {
  const t = useTranslations();

  const personPhotos = ["/images/case-maurick.jpg", "/images/case-vincent.jpg", "/images/case-joran.png"];
  const cases: Omit<CaseCardProps, "personSrc" | "photoPosition">[] = [
    {
      companyName: "Movir",
      companyType: "Insurer - 400+",
      logoSrc: "/images/logo-movir.png",
      logoAlt: "Movir logo",
      quote: t("cases.movir.quote"),
      author: t("cases.movir.author"),
      stats: [
        { value: "10x", label: t("cases.movir.stat1label") },
        { value: "100", label: t("cases.movir.stat2label") },
        { value: "5", label: t("cases.movir.stat3label") },
      ],
      roi: t("cases.movir.roiText"),
      bgClass: "bg-[#fef5f3]",
      accentColor: "#ff7150",
    },
    {
      companyName: "Euphoria Mobility",
      companyType: "SaaS - 60+",
      logoSrc: "/images/logo-euphoria.png",
      logoAlt: "Euphoria Mobility logo",
      quote: t("cases.euphoria.quote"),
      author: t("cases.euphoria.author"),
      stats: [
        { value: "10+", label: t("cases.euphoria.stat1label") },
        { value: "5X", label: t("cases.euphoria.stat2label") },
        { value: "6", label: t("cases.euphoria.stat3label") },
      ],
      roi: t("cases.euphoria.roiText"),
      bgClass: "bg-[#f7f4ff]",
      accentColor: "#a78bfa",
    },
    {
      companyName: "Reditus",
      companyType: "Marketing - 10+",
      logoSrc: "/images/logo-reditus.jpg",
      logoAlt: "Reditus logo",
      quote: t("cases.reditus.quote"),
      author: t("cases.reditus.author"),
      stats: [
        { value: "5x", label: t("cases.reditus.stat1label") },
        { value: "5mins", label: t("cases.reditus.stat2label") },
        { value: "5", label: t("cases.reditus.stat3label") },
      ],
      roi: t("cases.reditus.roiText"),
      bgClass: "bg-[#eef6f5]",
      accentColor: "#34d399",
    },
  ];

  return (
    <section
      id="cases"
      className="relative w-full bg-white overflow-hidden"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "url('/images/Texture 1.png')",
          backgroundSize: "800px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="relative mx-auto max-w-[1080px]" style={{ padding: "0 40px 80px" }}>
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2
            className="font-heading"
            style={{
              fontSize: "32px",
              fontWeight: 100,
              color: "#0a0a0a",
              lineHeight: "1.3",
            }}
          >
            {t("cases.sectionTitle")}
          </h2>
          <p
            className="font-sans mt-4"
            style={{ fontSize: "16px", color: "rgba(0,0,0,0.8)" }}
          >
            {t("cases.sectionSubtitle")}
          </p>
        </div>

        {/* Case cards */}
        <div className="flex flex-col gap-8">
          {cases.map((caseData, index) => (
            <CaseCard
              key={caseData.companyName}
              {...caseData}
              personSrc={personPhotos[index]}
              photoPosition={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
