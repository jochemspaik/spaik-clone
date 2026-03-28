"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { RollingTextButton } from "@/components/RollingTextButton";
import { BOOK_CALL_URL } from "@/lib/constants";
import { SectionWrapper } from "@/components/SectionWrapper";

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531-1.544 0-1.78 1.206-1.78 2.45v4.72H7.793V7.498h2.845v1.305h.039c.396-.75 1.364-1.543 2.807-1.543 3.003 0 3.556 1.976 3.556 4.546v5.237ZM4.45 6.193a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM5.93 17.043H2.966V7.498H5.93v9.545ZM18.52 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042C19.34 20 20 19.355 20 18.56V1.44C20 .645 19.34 0 18.518 0h.002Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
                className="h-full w-full object-cover"
                src="/videos/secondary-animation.mp4"
              />
              {/* Dot-grid overlay — SPAIK signature texture */}
              <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.15 }}>
                <Image
                  src="/images/product-dot-pattern.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="50vw"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Right column — text content */}
          <div className="flex flex-col lg:w-1/2">
            <h2
              className="font-heading text-spaik-black"
              style={{ fontSize: "32px", fontWeight: 100 }}
            >
              {t("title")}
            </h2>
            <p
              className="mt-4 font-sans text-spaik-black/70"
              style={{ fontSize: "16px", lineHeight: "1.6", maxWidth: "480px" }}
            >
              {t("description")}
            </p>

            {/* CTA button */}
            <div className="mt-8">
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
                  src="/images/team-jochem.jpg"
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
