import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { blogPosts, getBlogPost, getAllSlugs } from "@/data/blog-posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const lang = locale as "en" | "nl";
  return {
    title: post.title[lang],
    description: post.title[lang],
    openGraph: {
      title: post.title[lang],
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return <BlogPostContent slug={slug} />;
}

function BlogPostContent({ slug }: { slug: string }) {
  const t = useTranslations("blog");
  const locale = useLocale() as "en" | "nl";
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Back link + header */}
      <section className="px-6 pt-32 pb-8 max-w-[800px] mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#6f6e66] hover:text-[#ff7150] transition-colors mb-8"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Blogs
        </Link>

        <h1
          className="font-heading text-[36px] leading-[40px] md:text-[48px] md:leading-[52px] font-thin"
          style={{ fontWeight: 100 }}
        >
          {post.title[locale]}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#6f6e66]">
          <span className="flex items-center gap-1">
            <ClockIcon /> {post.readTime}{" "}
            {locale === "nl" ? "MINUTEN" : "MINUTES"}
          </span>
          <time>
            {new Date(post.date).toLocaleDateString(
              locale === "nl" ? "nl-NL" : "en-US",
              { day: "numeric", month: "short", year: "numeric" }
            )}
          </time>
          <span>
            {post.author} - {post.authorRole}
          </span>
        </div>
      </section>

      {/* Article content */}
      <article className="px-6 pb-16 max-w-[800px] mx-auto">
        <div
          className="prose prose-lg max-w-none
            [&_h2]:font-heading [&_h2]:text-[28px] [&_h2]:leading-[32px] [&_h2]:font-thin [&_h2]:mt-12 [&_h2]:mb-4
            [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-[rgba(0,0,0,0.8)]
            [&_strong]:text-[#0b0b0b] [&_strong]:font-medium
            [&_a]:text-[#ff7150] [&_a]:underline
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
            [&_li]:mb-2"
          style={{ fontWeight: 100 }}
          dangerouslySetInnerHTML={{ __html: post.content[locale] }}
        />
      </article>

      {/* Related articles */}
      <section className="px-6 pb-24 max-w-[1200px] mx-auto border-t border-[#efede5] pt-16">
        <h2 className="text-lg font-medium mb-8">{t("relatedArticles")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((rp) => (
            <Link
              key={rp.slug}
              href={`/blog/${rp.slug}`}
              className="group block"
            >
              <div className="rounded-xl overflow-hidden border border-[#efede5] transition-shadow hover:shadow-lg">
                <Image
                  src={rp.image}
                  alt={rp.title[locale]}
                  width={600}
                  height={340}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-base font-medium leading-snug group-hover:text-[#ff7150] transition-colors">
                    {rp.title[locale]}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
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
