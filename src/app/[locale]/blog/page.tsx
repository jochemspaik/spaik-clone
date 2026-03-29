import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";
import { Header } from "@/components/Header";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

const META: Record<string, { title: string; description: string }> = {
  nl: {
    title: "Blog — SPAIK",
    description: "Inzichten uit 35+ AI-implementaties",
  },
  en: {
    title: "Blog — SPAIK",
    description: "Insights from 35+ AI implementations",
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

export default function BlogPage() {
  const t = useTranslations("blog");
  const locale = useLocale() as "en" | "nl";
  const featured = blogPosts[0];
  const allPosts = blogPosts;

  return (
    <>
    <Header />
    <main className="min-h-[100dvh]">
      {/* Header */}
      <section className="px-6 pt-32 pb-16 max-w-[1200px] mx-auto">
        <h1
          className="font-heading text-[40px] leading-[44px] font-thin md:text-[52px] md:leading-[56px]"
          style={{ fontWeight: 100 }}
        >
          {t("title")}
        </h1>
        <p className="mt-4 text-base" style={{ color: "rgba(0,0,0,0.6)" }}>
          {t("subtitle")}
        </p>
      </section>

      {/* Featured post */}
      <section className="px-6 pb-16">
        <Link
          href={`/blog/${featured.slug}`}
          className="block max-w-[1200px] mx-auto group"
        >
          <div className="relative rounded-2xl overflow-hidden bg-[#f7f6f2] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2
                className="font-heading text-[32px] leading-[36px] font-thin"
                style={{ fontWeight: 100 }}
              >
                {featured.title[locale]}
              </h2>
              <div className="mt-6 flex items-center gap-6 text-sm text-[#6f6e66]">
                <time>
                  {new Date(featured.date).toLocaleDateString(
                    locale === "nl" ? "nl-NL" : "en-US",
                    { day: "numeric", month: "short", year: "numeric" }
                  )}
                </time>
                <span>
                  {featured.author} - {featured.authorRole}
                </span>
                <span className="flex items-center gap-1">
                  <ClockIcon />
                  {featured.readTime} {t("readTime")}
                </span>
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-[400px]">
              <Image
                src={featured.image}
                alt={featured.title[locale]}
                width={800}
                height={450}
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>
        </Link>
      </section>

      {/* All posts grid */}
      <section className="px-6 pb-24 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="rounded-xl overflow-hidden border border-[#efede5] transition-shadow hover:shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title[locale]}
                  width={600}
                  height={340}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-base font-medium leading-snug group-hover:text-[#ff7150] transition-colors">
                    {post.title[locale]}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
    <CTASection />
    <Footer />
    </>
  );
}

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
