import { useTranslations } from "next-intl";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { RollingTextButton } from "@/components/RollingTextButton";
import { Link } from "@/i18n/navigation";
import { BOOK_CALL_URL } from "@/lib/constants";
import type { Metadata } from "next";

/* ------------------------------------------------------------------ */
/*  Metadata & static params                                          */
/* ------------------------------------------------------------------ */

const META: Record<string, { title: string; description: string }> = {
  nl: {
    title: "Diensten — SPAIK",
    description:
      "Jullie AI-transitie in drie fasen. Van eerste bewijs naar volledige zelfstandigheid.",
  },
  en: {
    title: "Services — SPAIK",
    description:
      "Your AI transition in three phases. From first proof to full independence.",
  },
};

export function generateStaticParams() {
  return [{ locale: "nl" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.nl;
  return {
    title: m.title,
    description: m.description,
  };
}

/* ------------------------------------------------------------------ */
/*  Shared sub-components                                             */
/* ------------------------------------------------------------------ */

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M4 10.5l4 4 8-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Small phase label pill */
function PhaseLabel({ label }: { label: string }) {
  return (
    <span
      className="inline-block text-xs font-medium uppercase tracking-wider"
      style={{ color: "rgba(0,0,0,0.5)" }}
    >
      {label}
    </span>
  );
}

/** Phase circle on the timeline */
function TimelineCircle({
  variant,
}: {
  variant: "outline" | "filled" | "endpoint";
}) {
  const size = 16;
  if (variant === "filled") {
    return (
      <span
        className="block rounded-full shrink-0"
        style={{
          width: size,
          height: size,
          backgroundColor: "#FF7150",
        }}
      />
    );
  }
  if (variant === "endpoint") {
    return (
      <span
        className="block rounded-full shrink-0"
        style={{
          width: size,
          height: size,
          backgroundColor: "#0b0b0b",
        }}
      />
    );
  }
  return (
    <span
      className="block rounded-full shrink-0"
      style={{
        width: size,
        height: size,
        border: "2px solid #DEDCCC",
        backgroundColor: "#fff",
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                         */
/* ------------------------------------------------------------------ */

export default function DienstenPage() {
  const t = useTranslations("diensten");

  return (
    <>
      <Header />
      <main className="min-h-[100dvh]">
        {/* -------- Hero -------- */}
        <section
          className="px-6 md:px-10 pt-32 pb-16"
          style={{ maxWidth: 1080, margin: "0 auto" }}
        >
          <ScrollReveal>
            <h1
              className="font-heading text-[36px] leading-[40px] md:text-[52px] md:leading-[56px]"
              style={{ fontWeight: 100, color: "#0b0b0b" }}
            >
              {t("hero.title")}
            </h1>
            <p
              className="mt-4 text-base max-w-[640px]"
              style={{ color: "rgba(0,0,0,0.7)" }}
            >
              {t("hero.subtitle")}
            </p>
          </ScrollReveal>
        </section>

        {/* -------- Journey Timeline -------- */}
        <section
          className="px-6 md:px-10 pb-20"
          style={{ maxWidth: 1080, margin: "0 auto" }}
        >
          {/* Timeline wrapper — line on the left (hidden mobile) */}
          <div className="relative">
            {/* Vertical connecting line — desktop only */}
            <div
              className="hidden md:block absolute top-0 bottom-0"
              style={{
                left: 7,
                width: 2,
                backgroundColor: "#DEDCCC",
              }}
            />

            {/* ===== Phase 0 ===== */}
            <ScrollReveal>
              <div className="relative md:pl-12 mb-12">
                {/* Circle */}
                <div className="hidden md:flex absolute left-0 top-1 items-center justify-center">
                  <TimelineCircle variant="outline" />
                </div>

                <PhaseLabel label={t("phase0label")} />

                {/* Two sub-cards side by side */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Strategie */}
                  <Link
                    href="/diensten/strategie"
                    className="group block rounded-2xl border border-[#DEDCCC] bg-white p-6 transition-shadow hover:shadow-lg"
                  >
                    <h3
                      className="font-heading text-[24px] leading-[28px]"
                      style={{ fontWeight: 100, color: "#0b0b0b" }}
                    >
                      {t("overview.strategie.title")}
                    </h3>
                    <p
                      className="mt-2 text-sm"
                      style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      {t("overview.strategie.tagline")}
                    </p>
                    <p
                      className="mt-3 text-sm"
                      style={{ color: "rgba(0,0,0,0.5)" }}
                    >
                      {t("overview.strategie.price")}
                    </p>
                    <span
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
                      style={{ color: "#FF7150" }}
                    >
                      {t("moreAbout")} {t("overview.strategie.title")}{" "}
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </Link>

                  {/* Fundamentals */}
                  <Link
                    href="/diensten/fundamentals"
                    className="group block rounded-2xl border border-[#DEDCCC] bg-white p-6 transition-shadow hover:shadow-lg"
                  >
                    <h3
                      className="font-heading text-[24px] leading-[28px]"
                      style={{ fontWeight: 100, color: "#0b0b0b" }}
                    >
                      {t("overview.fundamentals.title")}
                    </h3>
                    <p
                      className="mt-2 text-sm"
                      style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      {t("overview.fundamentals.tagline")}
                    </p>
                    <p
                      className="mt-3 text-sm"
                      style={{ color: "rgba(0,0,0,0.5)" }}
                    >
                      {t("overview.fundamentals.price")}
                    </p>
                    <span
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
                      style={{ color: "#FF7150" }}
                    >
                      {t("moreAbout")} {t("overview.fundamentals.title")}{" "}
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* ===== Phase 1 — Kickstart (featured) ===== */}
            <ScrollReveal delay={100}>
              <div className="relative md:pl-12 mb-12">
                {/* Circle — filled orange */}
                <div className="hidden md:flex absolute left-0 top-1 items-center justify-center">
                  <TimelineCircle variant="filled" />
                </div>

                <PhaseLabel label={t("phase1label")} />

                <Link
                  href="/diensten/kickstart"
                  className="group block mt-4 relative rounded-2xl overflow-hidden min-h-[200px] md:min-h-[280px] transition-shadow hover:shadow-xl"
                  style={{
                    backgroundImage: "url('/images/Gradient 03.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Dark gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.5) 100%)",
                    }}
                  />

                  {/* "Most chosen" badge */}
                  <span
                    className="absolute top-4 right-4 text-xs font-medium text-white px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#FF7150" }}
                  >
                    {t("mostChosen")}
                  </span>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8 min-h-[200px] md:min-h-[280px]">
                    <h3
                      className="font-heading text-[28px] leading-[32px] md:text-[36px] md:leading-[40px] text-white"
                      style={{ fontWeight: 100 }}
                    >
                      {t("overview.kickstart.title")}
                    </h3>
                    <p className="mt-2 text-sm text-white/80 max-w-[520px]">
                      {t("overview.kickstart.tagline")}
                    </p>
                    <p className="mt-3 text-sm text-white/60">
                      {t("overview.kickstart.price")}
                    </p>

                    {/* Deliverables */}
                    <ul className="mt-4 flex flex-col gap-2">
                      <li className="flex items-center gap-2 text-sm text-white/90">
                        <CheckIcon />
                        {t("overview.kickstart.deliverable1")}
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/90">
                        <CheckIcon />
                        {t("overview.kickstart.deliverable2")}
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/90">
                        <CheckIcon />
                        {t("overview.kickstart.deliverable3")}
                      </li>
                    </ul>

                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-white group-hover:gap-2 transition-all">
                      {t("moreAbout")} {t("overview.kickstart.title")}{" "}
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </div>
            </ScrollReveal>

            {/* ===== Phase 2 — Adoptie ===== */}
            <ScrollReveal delay={200}>
              <div className="relative md:pl-12 mb-12">
                {/* Circle */}
                <div className="hidden md:flex absolute left-0 top-1 items-center justify-center">
                  <TimelineCircle variant="outline" />
                </div>

                <PhaseLabel label={t("phase2label")} />

                <Link
                  href="/diensten/adoptie"
                  className="group block mt-4 relative rounded-2xl overflow-hidden min-h-[200px] md:min-h-[240px] transition-shadow hover:shadow-xl"
                  style={{
                    backgroundImage: "url('/images/Gradient 02.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Dark gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.5) 100%)",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8 min-h-[200px] md:min-h-[240px]">
                    <h3
                      className="font-heading text-[28px] leading-[32px] md:text-[36px] md:leading-[40px] text-white"
                      style={{ fontWeight: 100 }}
                    >
                      {t("overview.adoptie.title")}
                    </h3>
                    <p className="mt-2 text-sm text-white/80 max-w-[520px]">
                      {t("overview.adoptie.tagline")}
                    </p>
                    <p className="mt-3 text-sm text-white/60">
                      {t("overview.adoptie.price")}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-white group-hover:gap-2 transition-all">
                      {t("moreAbout")} {t("overview.adoptie.title")}{" "}
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </div>
            </ScrollReveal>

            {/* ===== Phase 3 — Zelfstandig (endpoint) ===== */}
            <ScrollReveal delay={300}>
              <div className="relative md:pl-12">
                {/* Circle — filled dark endpoint */}
                <div className="hidden md:flex absolute left-0 top-1 items-center justify-center">
                  <TimelineCircle variant="endpoint" />
                </div>

                <PhaseLabel label={t("phase3label")} />

                <div className="mt-4">
                  <h3
                    className="font-heading text-[24px] leading-[28px]"
                    style={{ fontWeight: 100, color: "#0b0b0b" }}
                  >
                    {t("overview.zelfstandig.title")}
                  </h3>
                  <p
                    className="mt-2 text-base"
                    style={{ color: "rgba(0,0,0,0.7)" }}
                  >
                    {t("overview.zelfstandig.tagline")}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* -------- Quote Strip -------- */}
        <section style={{ backgroundColor: "#F3EDED" }}>
          <ScrollReveal>
            <div
              className="px-6 md:px-10 py-20 text-center"
              style={{ maxWidth: 800, margin: "0 auto" }}
            >
              <blockquote>
                <p
                  className="font-heading text-[22px] leading-[30px] md:text-[28px] md:leading-[38px] italic"
                  style={{ fontWeight: 100, color: "#0b0b0b" }}
                >
                  &ldquo;{t("quote.text")}&rdquo;
                </p>
              </blockquote>
              <p
                className="mt-6 text-base font-medium"
                style={{ color: "#0b0b0b" }}
              >
                {t("quote.author")}
              </p>
              <p className="text-sm" style={{ color: "rgba(0,0,0,0.5)" }}>
                {t("quote.role")}
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* -------- "Niet zeker?" CTA -------- */}
        <section className="bg-white">
          <ScrollReveal>
            <div
              className="px-6 md:px-10 py-20 text-center"
              style={{ maxWidth: 640, margin: "0 auto" }}
            >
              <h2
                className="font-heading text-[28px] leading-[32px] md:text-[36px] md:leading-[40px]"
                style={{ fontWeight: 100, color: "#0b0b0b" }}
              >
                {t("notSure.title")}
              </h2>
              <p
                className="mt-4 text-base"
                style={{ color: "rgba(0,0,0,0.7)" }}
              >
                {t("notSure.text")}
              </p>
              <div className="mt-8">
                <RollingTextButton text={t("notSure.cta")} href={BOOK_CALL_URL} />
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
