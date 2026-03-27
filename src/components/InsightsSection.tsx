"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

const BLOG_POSTS = [
  {
    titleKey: "post1Title" as const,
    image: "/images/blog-1.png",
    href: "/blog/ai-ready-worden-zonder-je-hele-it-landschap-te-vervangen" as const,
  },
  {
    titleKey: "post2Title" as const,
    image: "/images/blog-2.png",
    href: "/blog/van-ai-pilot-naar-productie" as const,
  },
  {
    titleKey: "post3Title" as const,
    image: "/images/blog-3.png",
    href: "/blog/waarom-95-van-ai-projecten-faalt" as const,
  },
] as const;

export function InsightsSection() {
  const t = useTranslations("insights");

  return (
    <section
      className="bg-white"
      style={{ padding: "80px 24px" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2
              className="font-heading text-spaik-black"
              style={{ fontSize: "32px", fontWeight: 100 }}
            >
              {t("title")}
            </h2>
            <p
              className="mt-2 text-spaik-black/70"
              style={{ fontSize: "16px" }}
            >
              {t("subtitle")}
            </p>
          </div>
          <Link
            href="/blog"
            className="flex shrink-0 items-center gap-1 font-sans text-spaik-orange transition-opacity hover:opacity-80"
            style={{ fontSize: "16px", fontWeight: 500 }}
          >
            {t("allBlogs")}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block"
            >
              <div className="overflow-hidden rounded-xl transition-shadow duration-200 group-hover:shadow-lg">
                <div className="relative aspect-video w-full">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <h3
                className="mt-4 font-sans text-spaik-black transition-colors group-hover:text-spaik-orange"
                style={{ fontSize: "16px", fontWeight: 700 }}
              >
                {t(post.titleKey)}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
