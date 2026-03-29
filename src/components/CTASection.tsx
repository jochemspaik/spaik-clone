"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { RollingTextButton } from "@/components/RollingTextButton";
import { BOOK_CALL_URL } from "@/lib/constants";
import { SectionWrapper } from "@/components/SectionWrapper";
import { LinkedInIcon } from "@/components/icons";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <SectionWrapper className="bg-white">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Left column — video with dot-grid overlay */}
          <div className="lg:w-1/2">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: "1 / 1" }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/cta-poster.jpg"
                className="h-full w-full object-cover"
                src="/videos/secondary-animation.mp4"
              />
              {/* Dot-grid overlay — SPAIK signature texture */}
              <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.15 }}>
                <Image
                  src="/images/product-dot-pattern.png"
                  alt=""
                  aria-hidden="true"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>

          {/* Right column — text content */}
          <div className="flex flex-col lg:w-1/2">
            <h2
              className="font-heading text-spaik-black"
              style={{ fontSize: "36px", fontWeight: 100, lineHeight: "1.2" }}
            >
              {t("title")}
            </h2>
            <p
              className="mt-5 font-sans text-spaik-black/70"
              style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "480px" }}
            >
              {t("description")}
            </p>

            {/* CTA button */}
            <div className="mt-10">
              <RollingTextButton
                text={t("button")}
                href={BOOK_CALL_URL}
              />
            </div>

            {/* Author info */}
            <div className="mt-8 flex items-center gap-3">
              <div
                className="relative shrink-0 overflow-hidden rounded-full"
                style={{ width: "56px", height: "56px" }}
              >
                <Image
                  src="/images/team-jochem.png"
                  alt={t("name")}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="text-left">
                <p
                  className="font-sans text-spaik-black"
                  style={{ fontSize: "14px", fontWeight: 600 }}
                >
                  {t("name")}
                </p>
                <p
                  className="font-sans text-spaik-black/60"
                  style={{ fontSize: "14px" }}
                >
                  {t("role")}
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/jochemvanlaren/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-spaik-black/40 transition-colors hover:text-spaik-orange"
                aria-label="Jochem van Laren on LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
    </SectionWrapper>
  );
}
