"use client";

import { useTranslations } from "next-intl";
import { INTAKE_URL } from "@/lib/constants";
import Image from "next/image";

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M16.667 5L7.5 14.167 3.333 10"
        stroke="#ff7150"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AIDiscoverySection() {
  const t = useTranslations("aiDiscovery");

  return (
    <section
      className="relative bg-white"
      style={{ padding: "80px 40px" }}
    >
      {/* Subtle gradient texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: "url('/images/Gradient 01.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Optional decorative dot pattern */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/3 opacity-10 lg:block">
        <Image
          src="/images/product-dot-pattern.png"
          alt=""
          fill
          className="object-cover object-left"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16" style={{ maxWidth: 1080 }}>
        {/* Left: Product screenshot */}
        <div className="lg:w-1/2">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              aspectRatio: "4 / 3",
              background: "linear-gradient(135deg, #f0eef8 0%, #e8e4f4 30%, #f5f3fb 70%, #edeaf6 100%)",
            }}
          >
            <Image
              src="/images/ai-discovery-product.png"
              alt={t("title")}
              fill
              className="object-contain"
              style={{ padding: "16px" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right: Text content */}
        <div className="lg:w-1/2">
          <h2
            className="font-heading text-spaik-black"
            style={{ fontSize: "32px", fontWeight: 100 }}
          >
            {t("title")}
          </h2>
          <p
            className="mt-4 text-spaik-black/70"
            style={{ fontSize: "16px", maxWidth: "480px" }}
          >
            {t("subtitle")}
          </p>

          {/* Feature points */}
          <ul className="mt-8 flex flex-col gap-4">
            {(["feature1", "feature2", "feature3"] as const).map((key) => (
              <li key={key} className="flex items-start gap-3">
                <CheckIcon />
                <span
                  className="font-sans text-spaik-black"
                  style={{ fontSize: "16px" }}
                >
                  {t(key)}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <a
            href={INTAKE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-spaik-orange px-8 py-4 font-sans text-white transition-opacity hover:opacity-90"
            style={{ fontSize: "16px", fontWeight: 500 }}
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
