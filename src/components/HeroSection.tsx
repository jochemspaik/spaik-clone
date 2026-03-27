"use client";

import { useTranslations } from "next-intl";
import { RollingTextButton } from "./RollingTextButton";

export function HeroSection() {
  const t = useTranslations();

  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto flex flex-col items-center px-6 pt-12 pb-8 md:flex-row md:items-start md:px-10 md:pt-20 md:pb-20"
        style={{ maxWidth: 1080 }}
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
            <RollingTextButton
              text={t("hero.ctaPrimary")}
              href="https://intake.spaik.io/"
              variant="primary"
            />
            <RollingTextButton
              text={t("hero.ctaSecondary")}
              href="https://calendar.app.google/mGYhtUUjgSdZhePw8"
              variant="secondary"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="mt-12 w-full md:mt-0 md:w-2/5">
          <div className="relative flex justify-center md:justify-end">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[500px] h-auto"
              style={{ borderRadius: "16px" }}
            >
              <source src="/videos/hero-animation.mp4" type="video/mp4" />
            </video>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(44% 44%, rgba(153, 238, 255, 0) 44%, rgb(255, 255, 255) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
