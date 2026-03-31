"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Step = {
  slug: "strategie" | "fundamentals" | "kickstart" | "adoptie" | "zelfstandig";
  icon: string;
  hasLink: boolean;
  featured?: boolean;
};

const STEPS: Step[] = [
  { slug: "strategie", icon: "/images/Discovery.svg", hasLink: true },
  { slug: "fundamentals", icon: "/images/icon-fundamentals.svg", hasLink: true },
  { slug: "kickstart", icon: "/images/icon-kickstart.svg", hasLink: true, featured: true },
  { slug: "adoptie", icon: "/images/Building.svg", hasLink: true },
  { slug: "zelfstandig", icon: "/images/icon-inspiration.svg", hasLink: false },
];

type Slug = Step["slug"];

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-[#DEDCCC]"
    >
      <path
        d="M7 4l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StepCard({
  slug,
  icon,
  featured,
}: {
  slug: Slug;
  icon: string;
  featured?: boolean;
}) {
  const t = useTranslations("diensten");
  const label = t.has(`journey.${slug}.label`)
    ? t(`journey.${slug}.label`)
    : null;
  const name = t(`journey.${slug}.name`);
  const tagline = t(`journey.${slug}.tagline`);
  const price = t.has(`journey.${slug}.price`)
    ? t(`journey.${slug}.price`)
    : null;

  return (
    <div
      className={`relative flex flex-col items-center text-center ${
        featured ? "z-10" : ""
      }`}
    >
      {/* "Meest gekozen" badge */}
      {featured && (
        <span
          className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium text-white"
          style={{ backgroundColor: "#FF7150" }}
        >
          {t("mostChosen")}
        </span>
      )}

      {/* Card */}
      <div
        className={`flex flex-col items-center gap-3 rounded-2xl px-5 py-5 transition-shadow ${
          featured
            ? "shadow-md ring-1 ring-[#FF7150]/30 bg-white"
            : slug === "zelfstandig"
              ? "bg-transparent"
              : "bg-[#FAFAF8] ring-1 ring-[#DEDCCC]/60"
        }`}
        style={featured ? { minWidth: 160 } : { minWidth: 130 }}
      >
        {/* Phase label */}
        {label && (
          <span
            className="text-[11px] font-medium uppercase tracking-wider"
            style={{ color: featured ? "#FF7150" : "rgba(0,0,0,0.4)" }}
          >
            {label}
          </span>
        )}

        {/* Icon */}
        <div
          className={`flex items-center justify-center rounded-xl ${
            featured ? "bg-[#FF7150]/10" : "bg-[#F3EDED]"
          }`}
          style={{ width: featured ? 56 : 44, height: featured ? 56 : 44 }}
        >
          <img
            src={icon}
            alt=""
            aria-hidden="true"
            style={{ width: featured ? 28 : 22, height: featured ? 28 : 22 }}
          />
        </div>

        {/* Name */}
        <p
          className="font-heading"
          style={{
            fontSize: featured ? 18 : 15,
            fontWeight: featured ? 500 : 400,
            color: "#0b0b0b",
            lineHeight: 1.2,
          }}
        >
          {name}
        </p>

        {/* Tagline */}
        <p
          className="text-xs"
          style={{ color: "rgba(0,0,0,0.5)", lineHeight: 1.3 }}
        >
          {tagline}
        </p>

        {/* Price */}
        {price && (
          <p
            className="text-sm font-medium"
            style={{ color: featured ? "#FF7150" : "#0b0b0b" }}
          >
            {price}
          </p>
        )}
      </div>
    </div>
  );
}

export function ServiceJourney() {
  const t = useTranslations("diensten");

  return (
    <section className="px-6 md:px-10 pb-16" style={{ maxWidth: 1080, margin: "0 auto" }}>
      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-center justify-center gap-2">
        {STEPS.map((step, i) => (
          <div key={step.slug} className="flex items-center gap-2">
            {step.hasLink ? (
              <Link
                href={`/diensten/${step.slug}` as "/diensten/strategie"}
                className="group transition-transform hover:scale-[1.03]"
              >
                <StepCard
                  slug={step.slug}
                  icon={step.icon}
                  featured={step.featured}
                />
              </Link>
            ) : (
              <StepCard
                slug={step.slug}
                icon={step.icon}
                featured={step.featured}
              />
            )}
            {i < STEPS.length - 1 && <ArrowIcon />}
          </div>
        ))}
      </div>

      {/* Mobile: vertical compact list */}
      <div className="flex flex-col gap-3 md:hidden">
        {STEPS.map((step, i) => {
          const label = t.has(`journey.${step.slug}.label`)
            ? t(`journey.${step.slug}.label`)
            : null;
          const name = t(`journey.${step.slug}.name`);
          const tagline = t(`journey.${step.slug}.tagline`);
          const price = t.has(`journey.${step.slug}.price`)
            ? t(`journey.${step.slug}.price`)
            : null;

          const inner = (
            <div
              className={`flex items-center gap-4 rounded-xl px-4 py-3 ${
                step.featured
                  ? "ring-1 ring-[#FF7150]/30 bg-white shadow-sm"
                  : "bg-[#FAFAF8] ring-1 ring-[#DEDCCC]/60"
              }`}
            >
              {/* Step number */}
              <span
                className="shrink-0 flex items-center justify-center rounded-full text-xs font-medium text-white"
                style={{
                  width: 28,
                  height: 28,
                  backgroundColor: step.featured ? "#FF7150" : "#0b0b0b",
                }}
              >
                {i + 1}
              </span>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p
                    className="font-medium truncate"
                    style={{
                      fontSize: 15,
                      color: "#0b0b0b",
                    }}
                  >
                    {name}
                  </p>
                  {step.featured && (
                    <span
                      className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium text-white"
                      style={{ backgroundColor: "#FF7150" }}
                    >
                      {t("mostChosen")}
                    </span>
                  )}
                </div>
                <p className="text-xs" style={{ color: "rgba(0,0,0,0.5)" }}>
                  {tagline}
                </p>
              </div>

              {/* Price */}
              {price && (
                <p
                  className="shrink-0 text-sm font-medium"
                  style={{ color: step.featured ? "#FF7150" : "rgba(0,0,0,0.5)" }}
                >
                  {price}
                </p>
              )}
            </div>
          );

          return step.hasLink ? (
            <Link
              key={step.slug}
              href={`/diensten/${step.slug}` as "/diensten/strategie"}
            >
              {inner}
            </Link>
          ) : (
            <div key={step.slug}>{inner}</div>
          );
        })}
      </div>
    </section>
  );
}
