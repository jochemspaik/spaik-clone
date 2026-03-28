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
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: {
      canonical: locale === "nl" ? "/" : `/${locale}`,
      languages: { nl: "/", en: "/en" },
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
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll>{children}</SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
