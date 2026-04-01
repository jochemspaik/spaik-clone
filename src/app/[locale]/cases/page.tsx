import { useTranslations } from "next-intl";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "@/i18n/navigation";
import { CASES } from "@/data/cases";
import type { CaseSlug } from "@/data/cases";
import type { Metadata } from "next";

/* ------------------------------------------------------------------ */
/*  Metadata & static params                                          */
/* ------------------------------------------------------------------ */

const META: Record<string, { title: string; description: string }> = {
  nl: {
    title: "Cases — SPAIK",
    description:
      "Ontdek hoe bedrijven als Movir, Euphoria en Reditus AI succesvol inzetten met SPAIK.",
  },
  en: {
    title: "Cases — SPAIK",
    description:
      "Discover how companies like Movir, Euphoria and Reditus successfully implement AI with SPAIK.",
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
/*  Case card                                                          */
/* ------------------------------------------------------------------ */

function CaseCard({
  slug,
  companyName,
  logoSrc,
  personSrc,
  bgColor,
  accentColor,
  t,
}: {
  slug: CaseSlug;
  companyName: string;
  logoSrc: string;
  personSrc: string;
  bgColor: string;
  accentColor: string;
  t: ReturnType<typeof useTranslations<"cases">>;
}) {
  return (
    <Link
      href={`/cases/${slug}` as "/cases/movir"}
      className="group block rounded-2xl overflow-hidden transition-shadow hover:shadow-xl"
      style={{ backgroundColor: bgColor }}
    >
      {/* Person photo — 16:10 aspect ratio */}
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <Image
          src={personSrc}
          alt={companyName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col gap-4">
        {/* Logo + type row */}
        <div className="flex items-center gap-3">
          <Image
            src={logoSrc}
            alt={`${companyName} logo`}
            width={80}
            height={24}
            className="object-contain"
            style={{ maxHeight: 24 }}
          />
          <span
            className="text-xs font-medium"
            style={{ color: "rgba(0,0,0,0.45)" }}
          >
            {t(`${slug}.type`)}
          </span>
        </div>

        {/* Quote */}
        <p
          className="text-sm leading-relaxed line-clamp-2"
          style={{ color: "rgba(0,0,0,0.7)", fontStyle: "italic" }}
        >
          {t(`${slug}.quote`)}
        </p>

        {/* Author */}
        <p className="text-sm font-medium" style={{ color: "#0b0b0b" }}>
          {t(`${slug}.author`)}
        </p>

        {/* Stats row */}
        <div
          className="grid grid-cols-3 gap-2 pt-3"
          style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
        >
          {([1, 2, 3] as const).map((n) => (
            <div key={n} className="flex flex-col gap-0.5">
              <span
                className="font-heading text-[22px] leading-none"
                style={{ fontWeight: 300, color: accentColor }}
              >
                {t(`${slug}.stat${n}value`)}
              </span>
              <span
                className="text-[11px] leading-tight"
                style={{ color: "rgba(0,0,0,0.5)" }}
              >
                {t(`${slug}.stat${n}label`)}
              </span>
            </div>
          ))}
        </div>

        {/* ROI badge */}
        <div className="flex items-center gap-2">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-medium"
            style={{ backgroundColor: accentColor + "22", color: accentColor }}
          >
            {t("roi")} {t(`${slug}.roiText`)}
          </span>
          <span
            className="ml-auto text-xs font-medium group-hover:gap-1.5 transition-all"
            style={{ color: accentColor }}
          >
            {t("readMore")} &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                         */
/* ------------------------------------------------------------------ */

export default function CasesPage() {
  const t = useTranslations("cases");

  return (
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
            {t("sectionTitle")}
          </h1>
          <p
            className="mt-4 text-base max-w-[640px]"
            style={{ color: "rgba(0,0,0,0.7)" }}
          >
            {t("sectionSubtitle")}
          </p>
        </ScrollReveal>
      </section>

      {/* -------- Cases grid -------- */}
      <section
        className="px-6 md:px-10 pb-24"
        style={{ maxWidth: 1080, margin: "0 auto" }}
      >
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASES.map((c) => (
              <CaseCard
                key={c.slug}
                slug={c.slug}
                companyName={c.companyName}
                logoSrc={c.logoSrc}
                personSrc={c.personSrc}
                bgColor={c.bgColor}
                accentColor={c.accentColor}
                t={t}
              />
            ))}
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
