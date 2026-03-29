import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SmoothScroll } from "@/components/SmoothScroll";
import type { Metadata } from "next";

const META: Record<string, { title: string; description: string }> = {
  nl: {
    title: "SPAIK — AI-oplossingen die je mensen écht gebruiken",
    description:
      "SPAIK bouwt AI-oplossingen die je mensen écht gebruiken. Van automatisering tot AI-training — resultaat in 4 weken, positieve ROI in 4 maanden.",
  },
  en: {
    title: "SPAIK — AI Solutions That People Actually Use",
    description:
      "SPAIK builds AI solutions your people actually use. From automation to AI training — results in 4 weeks, positive ROI in 4 months.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.nl;
  const baseUrl = "https://www.spaik.io";
  return {
    metadataBase: new URL(baseUrl),
    title: { absolute: m.title },
    description: m.description,
    alternates: {
      canonical: locale === "nl" ? baseUrl : `${baseUrl}/${locale}`,
      languages: { nl: baseUrl, en: `${baseUrl}/en` },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: locale === "nl" ? baseUrl : `${baseUrl}/${locale}`,
      siteName: "SPAIK",
      locale: locale === "nl" ? "nl_NL" : "en_US",
      type: "website",
      images: [{ url: `${baseUrl}/seo/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: [`${baseUrl}/seo/og-image.png`],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full antialiased">
      <head>
        <link rel="preload" href="/fonts/IvyPrestoHeadlineThin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/SFProTextRegular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll>{children}</SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
