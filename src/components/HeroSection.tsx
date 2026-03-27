"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations();

  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto flex flex-col items-center px-6 pt-20 pb-16 md:flex-row md:items-start md:pt-[120px]"
        style={{ maxWidth: 1200 }}
      >
        {/* Left Column */}
        <div className="w-full pt-10 md:w-3/5">
          <h1
            className="font-heading text-4xl md:text-[60px] md:leading-[66px]"
            style={{ fontWeight: 100, color: "#000" }}
          >
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
          </h1>

          <p
            className="mt-6"
            style={{
              fontSize: 16,
              color: "rgba(0, 0, 0, 0.8)",
              lineHeight: 1.6,
            }}
          >
            {t("hero.subtitle")}{" "}
            <span style={{ fontWeight: 500 }}>
              {t("hero.subtitleHighlight")}
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="https://intake.spaik.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="rolling-text inline-flex items-center justify-center rounded-xl text-white"
              data-text={t("hero.ctaPrimary")}
              style={{
                backgroundColor: "#ff7150",
                padding: "14px 28px",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              <span>{t("hero.ctaPrimary")}</span>
            </a>
            <a
              href="https://calendar.app.google/mGYhtUUjgSdZhePw8"
              target="_blank"
              rel="noopener noreferrer"
              className="rolling-text inline-flex items-center justify-center rounded-xl text-white"
              data-text={t("hero.ctaSecondary")}
              style={{
                backgroundColor: "rgba(255, 151, 128, 0.75)",
                padding: "14px 28px",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              <span>{t("hero.ctaSecondary")}</span>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="mt-12 w-full md:mt-0 md:w-2/5">
          <div className="relative flex justify-center md:justify-end">
            <Image
              src="/images/hero-graphic.png"
              alt=""
              width={500}
              height={619}
              className="h-auto w-full max-w-[500px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
