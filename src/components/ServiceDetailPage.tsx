"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { RollingTextButton } from "@/components/RollingTextButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BOOK_CALL_URL } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type ServiceSlug = "strategie" | "kickstart" | "adoptie" | "fundamentals";

const GRADIENT_MAP: Record<ServiceSlug, string> = {
  strategie: "/images/Gradient 01.webp",
  kickstart: "/images/Gradient 03.webp",
  adoptie: "/images/Gradient 02.webp",
  fundamentals: "/images/Gradient 04.webp",
};

/* ------------------------------------------------------------------ */
/*  Inline icons                                                       */
/* ------------------------------------------------------------------ */

function GreenCheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0 mt-0.5"
    >
      <path
        d="M4 10.5l4 4 8-8"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OrangeXIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0 mt-0.5"
    >
      <path
        d="M6 6l8 8M14 6l-8 8"
        stroke="#FF7150"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M10 12L6 8l4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TimelineDot() {
  return (
    <span
      className="block shrink-0 rounded-full"
      style={{
        width: 14,
        height: 14,
        backgroundColor: "#FF7150",
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */

function HeroSection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");

  const metrics = [
    { value: t(`detail.${slug}.metric1value`), label: t(`detail.${slug}.metric1label`) },
    { value: t(`detail.${slug}.metric2value`), label: t(`detail.${slug}.metric2label`) },
    { value: t(`detail.${slug}.metric3value`), label: t(`detail.${slug}.metric3label`) },
  ];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: 400 }}
    >
      {/* Gradient background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${GRADIENT_MAP[slug]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 mx-auto px-6 md:px-10"
        style={{ maxWidth: 1080 }}
      >
        <div className="pt-32 pb-16">
          <ScrollReveal>
            {/* Back link */}
            <Link
              href="/diensten"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeftIcon />
              {t("detail.backToOverview")}
            </Link>

            {/* Badges */}
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

            {/* Title */}
            <h1
              className="font-heading text-white"
              style={{ fontSize: 48, fontWeight: 100, lineHeight: 1.1 }}
            >
              {t(`detail.${slug}.title`)}
            </h1>

            {/* Price + duration */}
            <p
              className="mt-3 text-white/90"
              style={{ fontSize: 20 }}
            >
              {t(`detail.${slug}.price`)} &middot; {t(`detail.${slug}.duration`)}
            </p>

            {/* Pitch */}
            <p
              className="mt-4 text-white/80"
              style={{ fontSize: 16, lineHeight: 1.6, maxWidth: 600 }}
            >
              {t(`detail.${slug}.pitch`)}
            </p>

            {/* CTA button */}
            <div className="mt-8">
              <RollingTextButton
                text={t(`detail.${slug}.cta`)}
                href={BOOK_CALL_URL}
                className="!bg-white !text-[#0b0b0b]"
              />
            </div>

            {/* Metrics */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {metrics.map((m) => (
                <div key={m.label}>
                  <p
                    className="font-heading text-white"
                    style={{ fontSize: 32, fontWeight: 100, lineHeight: 1.2 }}
                  >
                    {m.value}
                  </p>
                  <p className="mt-1 text-sm text-white/60">{m.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  "Voor wie" Section                                                 */
/* ------------------------------------------------------------------ */

function ForWhoSection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");

  const yesItems = [
    t(`detail.${slug}.yes1`),
    t(`detail.${slug}.yes2`),
    t(`detail.${slug}.yes3`),
  ];

  const noItems = [
    { text: t(`detail.${slug}.no1`), link: t(`detail.${slug}.no1link`) },
    { text: t(`detail.${slug}.no2`), link: t(`detail.${slug}.no2link`) },
  ];

  return (
    <section className="bg-white px-6 md:px-10" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2
            className="font-heading"
            style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}
          >
            {t("detail.forWho")}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Yes column */}
            <div>
              <h3
                className="mb-6 text-sm font-medium uppercase tracking-wider"
                style={{ color: "#22c55e" }}
              >
                {t("detail.yes")}
              </h3>
              <ul className="flex flex-col gap-4">
                {yesItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <GreenCheckIcon />
                    <span style={{ fontSize: 16, color: "rgba(0,0,0,0.7)", lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* No column */}
            <div>
              <h3
                className="mb-6 text-sm font-medium uppercase tracking-wider"
                style={{ color: "#FF7150" }}
              >
                {t("detail.no")}
              </h3>
              <ul className="flex flex-col gap-4">
                {noItems.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <OrangeXIcon />
                    <div>
                      <span style={{ fontSize: 16, color: "rgba(0,0,0,0.7)", lineHeight: 1.6 }}>
                        {item.text}
                      </span>
                      <span
                        className="ml-1 text-sm font-medium transition-colors hover:underline"
                        style={{ color: "#FF7150" }}
                      >
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

/* ------------------------------------------------------------------ */
/*  "Wat je krijgt" Section                                            */
/* ------------------------------------------------------------------ */

function WhatYouGetSection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");

  const items = [
    t(`detail.${slug}.get1`),
    t(`detail.${slug}.get2`),
    t(`detail.${slug}.get3`),
    t(`detail.${slug}.get4`),
  ];

  return (
    <section
      className="px-6 md:px-10"
      style={{ paddingTop: 80, paddingBottom: 80, backgroundColor: "#F3EDED" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2
            className="font-heading"
            style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}
          >
            {t("detail.whatYouGet")}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white p-6"
              >
                <GreenCheckIcon />
                <span style={{ fontSize: 16, color: "rgba(0,0,0,0.7)", lineHeight: 1.6 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  "Hoe het werkt" Section (Kickstart only)                           */
/* ------------------------------------------------------------------ */

function HowItWorksSection() {
  const t = useTranslations("diensten");

  const weeks = [
    {
      title: t("detail.kickstart.week1"),
      detail: t("detail.kickstart.week1detail"),
      checkpoint: t("detail.kickstart.week1checkpoint"),
    },
    {
      title: t("detail.kickstart.week2"),
      detail: t("detail.kickstart.week2detail"),
      checkpoint: null,
    },
    {
      title: t("detail.kickstart.week34"),
      detail: t("detail.kickstart.week34detail"),
      checkpoint: null,
    },
  ];

  return (
    <section className="bg-white px-6 md:px-10" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2
            className="font-heading"
            style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}
          >
            {t("detail.howItWorks")}
          </h2>

          <div className="relative mt-10 ml-2 md:ml-4">
            {/* Vertical timeline line */}
            <div
              className="absolute top-0 bottom-0"
              style={{
                left: 5,
                width: 2,
                backgroundColor: "#DEDCCC",
              }}
            />

            <div className="flex flex-col gap-10">
              {weeks.map((week) => (
                <div key={week.title} className="relative pl-10">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-0.5 flex items-center justify-center"
                    style={{ width: 14 }}
                  >
                    <TimelineDot />
                  </div>

                  <h3
                    className="font-heading"
                    style={{ fontSize: 20, fontWeight: 100, color: "#0b0b0b" }}
                  >
                    {week.title}
                  </h3>
                  <p
                    className="mt-2"
                    style={{ fontSize: 16, color: "rgba(0,0,0,0.7)", lineHeight: 1.6 }}
                  >
                    {week.detail}
                  </p>
                  {week.checkpoint && (
                    <p
                      className="mt-2 text-sm font-medium"
                      style={{ color: "#FF7150" }}
                    >
                      {week.checkpoint}
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

/* ------------------------------------------------------------------ */
/*  "Volgende stap" Section                                            */
/* ------------------------------------------------------------------ */

function NextStepSection({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations("diensten");

  const nextText = t(`detail.${slug}.nextStepText`);
  const nextSlug = t(`detail.${slug}.nextStepSlug`);

  return (
    <section className="bg-white px-6 md:px-10" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <ScrollReveal>
          <h2
            className="font-heading"
            style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}
          >
            {t("detail.nextStep")}
          </h2>

          <p
            className="mt-6"
            style={{ fontSize: 16, color: "rgba(0,0,0,0.7)", lineHeight: 1.6, maxWidth: 640 }}
          >
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
            <p
              className="mt-4 text-sm font-medium"
              style={{ color: "rgba(0,0,0,0.5)" }}
            >
              {t("overview.zelfstandig.title")} &mdash; {t("overview.zelfstandig.tagline")}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export function ServiceDetailPage({ slug }: { slug: ServiceSlug }) {
  return (
    <>
      <HeroSection slug={slug} />
      <ForWhoSection slug={slug} />
      <WhatYouGetSection slug={slug} />
      {slug === "kickstart" && <HowItWorksSection />}
      <NextStepSection slug={slug} />
    </>
  );
}
