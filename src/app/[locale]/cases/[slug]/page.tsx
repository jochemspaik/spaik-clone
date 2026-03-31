import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CASES, CASE_SLUGS, type CaseSlug } from "@/data/cases";
import { CaseDetailView } from "@/components/CaseDetailView";

/* ------------------------------------------------------------------ */
/*  Static params                                                      */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return CASE_SLUGS.map((slug) => ({ slug }));
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

const META: Record<string, Record<CaseSlug, { title: string; description: string }>> = {
  nl: {
    movir: {
      title: "Movir Case Study | SPAIK",
      description: "Hoe Movir met SPAIK 100 mensen trainde en 10x sneller content creëert.",
    },
    euphoria: {
      title: "Euphoria Mobility Case Study | SPAIK",
      description: "Hoe Euphoria Mobility met SPAIK 10+ AI-toepassingen bouwde.",
    },
    reditus: {
      title: "Reditus Case Study | SPAIK",
      description: "Hoe Reditus met SPAIK 5x efficiënter werd.",
    },
  },
  en: {
    movir: {
      title: "Movir Case Study | SPAIK",
      description: "How Movir trained 100 people and creates content 10x faster with SPAIK.",
    },
    euphoria: {
      title: "Euphoria Mobility Case Study | SPAIK",
      description: "How Euphoria Mobility built 10+ AI applications with SPAIK.",
    },
    reditus: {
      title: "Reditus Case Study | SPAIK",
      description: "How Reditus became 5x more efficient with SPAIK.",
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;

  if (!CASE_SLUGS.includes(slug as CaseSlug)) return {};

  const lang = (locale === "en" ? "en" : "nl") as "nl" | "en";
  const m = META[lang][slug as CaseSlug];
  const baseUrl = "https://www.spaik.io";
  const path = locale === "nl" ? `/cases/${slug}` : `/${locale}/cases/${slug}`;

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        nl: `${baseUrl}/cases/${slug}`,
        en: `${baseUrl}/en/cases/${slug}`,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${baseUrl}${path}`,
      siteName: "SPAIK",
      locale: locale === "nl" ? "nl_NL" : "en_US",
      type: "website",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;

  if (!CASE_SLUGS.includes(slug as CaseSlug)) notFound();

  const caseData = CASES.find((c) => c.slug === slug)!;

  return <CaseDetailView slug={slug as CaseSlug} caseData={caseData} />;
}
