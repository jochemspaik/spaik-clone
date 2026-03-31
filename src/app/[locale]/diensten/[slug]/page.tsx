import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { AdoptieDetailPage } from "@/components/AdoptieDetailPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

/* ------------------------------------------------------------------ */
/*  Valid slugs                                                        */
/* ------------------------------------------------------------------ */

const VALID_SLUGS = ["strategie", "kickstart", "adoptie", "fundamentals"] as const;
type ServiceSlug = (typeof VALID_SLUGS)[number];

/* ------------------------------------------------------------------ */
/*  Static params                                                      */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

const META: Record<string, Record<ServiceSlug, { title: string; description: string }>> = {
  nl: {
    strategie: {
      title: "Strategie Sessie | SPAIK",
      description:
        "In een halve dag van vage ideeen naar een concrete AI-roadmap met geprioriteerde kansen.",
    },
    kickstart: {
      title: "Kickstart | SPAIK",
      description:
        "In 4 weken eerste automatisering live, roadmap voor de rest, team van 10 getraind.",
    },
    adoptie: {
      title: "Adoptie | SPAIK",
      description:
        "Een dedicated team dat naast jullie mensen werkt. Continue overdracht tot jullie het zelf kunnen.",
    },
    fundamentals: {
      title: "AI Fundamentals | SPAIK",
      description:
        "10 mensen die AI echt begrijpen. Training met jullie eigen processen, 6 weken begeleiding.",
    },
  },
  en: {
    strategie: {
      title: "Strategy Session | SPAIK",
      description:
        "In half a day, go from vague ideas to a concrete AI roadmap with prioritized opportunities.",
    },
    kickstart: {
      title: "Kickstart | SPAIK",
      description:
        "First automation live in 4 weeks, roadmap for the rest, team of 10 trained.",
    },
    adoptie: {
      title: "Adoption | SPAIK",
      description:
        "A dedicated team working alongside your people. Continuous transfer until you can do it yourself.",
    },
    fundamentals: {
      title: "AI Fundamentals | SPAIK",
      description:
        "10 people who truly understand AI. Training with your own processes, 6 weeks of coaching.",
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;

  if (!VALID_SLUGS.includes(slug as ServiceSlug)) return {};

  const lang = (locale === "en" ? "en" : "nl") as "nl" | "en";
  const m = META[lang][slug as ServiceSlug];
  const baseUrl = "https://www.spaik.io";
  const path = locale === "nl" ? `/diensten/${slug}` : `/${locale}/diensten/${slug}`;

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        nl: `${baseUrl}/diensten/${slug}`,
        en: `${baseUrl}/en/diensten/${slug}`,
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

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;

  if (!VALID_SLUGS.includes(slug as ServiceSlug)) notFound();

  return (
    <>
      <Header />
      <main>
        {slug === "adoptie" ? <AdoptieDetailPage /> : <ServiceDetailPage slug={slug as ServiceSlug} />}
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
