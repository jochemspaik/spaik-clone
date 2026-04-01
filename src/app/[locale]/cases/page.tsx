import { useTranslations } from "next-intl";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "@/i18n/navigation";
import { CASES } from "@/data/cases";
import type { CaseSlug } from "@/data/cases";
import { CTASection } from "@/components/CTASection";
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
/*  Featured case card (full-width, horizontal)                        */
/* ------------------------------------------------------------------ */

type CaseCardProps = {
  slug: CaseSlug;
  companyName: string;
  logoSrc: string;
  personSrc: string;
  bgColor: string;
  accentColor: string;
  t: ReturnType<typeof useTranslations<"cases">>;
};

function FeaturedCaseCard({ slug, companyName, logoSrc, personSrc, bgColor, accentColor, t }: CaseCardProps) {
  return (
    <Link
      href={`/cases/${slug}` as "/cases/movir"}
      className="group block rounded-2xl overflow-hidden transition-shadow hover:shadow-xl"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Left: person photo */}
        <div className="relative w-full md:w-1/2" style={{ aspectRatio: "4/3" }}>
          <Image
            src={personSrc}
            alt={companyName}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right: content */}
        <div className="flex-1 p-8 md:p-10 flex flex-col justify-center gap-5">
          <div className="flex items-center gap-3">
            <Image src={logoSrc} alt={`${companyName} logo`} width={100} height={30} className="object-contain" style={{ maxHeight: 28 }} />
            <span className="text-xs font-medium" style={{ color: "rgba(0,0,0,0.45)" }}>{t(`${slug}.type`)}</span>
          </div>

          <p className="text-base leading-relaxed" style={{ color: "rgba(0,0,0,0.7)", fontStyle: "italic" }}>
            {t(`${slug}.quote`)}
          </p>

          <p className="text-sm font-medium" style={{ color: "#0b0b0b" }}>{t(`${slug}.author`)}</p>

          <div className="grid grid-cols-3 gap-4 pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
            {([1, 2, 3] as const).map((n) => (
              <div key={n} className="flex flex-col gap-0.5">
                <span className="font-heading text-[28px] leading-none" style={{ fontWeight: 300, color: accentColor }}>{t(`${slug}.stat${n}value`)}</span>
                <span className="text-xs leading-tight" style={{ color: "rgba(0,0,0,0.5)" }}>{t(`${slug}.stat${n}label`)}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-block rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: accentColor + "22", color: accentColor }}>
              {t("roi")} {t(`${slug}.roiText`)}
            </span>
            <span className="ml-auto text-sm font-medium group-hover:gap-1.5 transition-all" style={{ color: accentColor }}>
              {t("readMore")} &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Case card (compact, for grid)                                      */
/* ------------------------------------------------------------------ */

function CaseCard({ slug, companyName, logoSrc, personSrc, bgColor, accentColor, t }: CaseCardProps) {
  return (
    <Link
      href={`/cases/${slug}` as "/cases/movir"}
      className="group block rounded-2xl overflow-hidden transition-shadow hover:shadow-xl"
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <Image src={personSrc} alt={companyName} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Image src={logoSrc} alt={`${companyName} logo`} width={80} height={24} className="object-contain" style={{ maxHeight: 24 }} />
          <span className="text-xs font-medium" style={{ color: "rgba(0,0,0,0.45)" }}>{t(`${slug}.type`)}</span>
        </div>

        <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "rgba(0,0,0,0.7)", fontStyle: "italic" }}>
          {t(`${slug}.quote`)}
        </p>

        <p className="text-sm font-medium" style={{ color: "#0b0b0b" }}>{t(`${slug}.author`)}</p>

        <div className="grid grid-cols-3 gap-2 pt-3" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          {([1, 2, 3] as const).map((n) => (
            <div key={n} className="flex flex-col gap-0.5">
              <span className="font-heading text-[22px] leading-none" style={{ fontWeight: 300, color: accentColor }}>{t(`${slug}.stat${n}value`)}</span>
              <span className="text-[11px] leading-tight" style={{ color: "rgba(0,0,0,0.5)" }}>{t(`${slug}.stat${n}label`)}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-block rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: accentColor + "22", color: accentColor }}>
            {t("roi")} {t(`${slug}.roiText`)}
          </span>
          <span className="ml-auto text-xs font-medium group-hover:gap-1.5 transition-all" style={{ color: accentColor }}>
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
        className="px-6 md:px-10 pt-28 pb-10"
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

      {/* -------- Featured case (full-width) -------- */}
      <section
        className="px-6 md:px-10 pb-6"
        style={{ maxWidth: 1080, margin: "0 auto" }}
      >
        <ScrollReveal>
          <FeaturedCaseCard
            slug={CASES[0].slug}
            companyName={CASES[0].companyName}
            logoSrc={CASES[0].logoSrc}
            personSrc={CASES[0].personSrc}
            bgColor={CASES[0].bgColor}
            accentColor={CASES[0].accentColor}
            t={t}
          />
        </ScrollReveal>
      </section>

      {/* -------- Remaining cases (2-column) -------- */}
      <section
        className="px-6 md:px-10 pb-16"
        style={{ maxWidth: 1080, margin: "0 auto" }}
      >
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASES.slice(1).map((c) => (
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

      <CTASection />
    </main>
  );
}
