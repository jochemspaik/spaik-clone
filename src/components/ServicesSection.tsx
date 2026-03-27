"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Check } from "lucide-react";

const BOOK_CALL_URL = "https://calendar.app.google/mGYhtUUjgSdZhePw8";

interface ServiceCardProps {
  translationPrefix: string;
  mockupImage: string;
  readMoreUrl: string;
  highlighted?: boolean;
}

function ServiceCard({
  translationPrefix,
  mockupImage,
  readMoreUrl,
  highlighted = false,
}: ServiceCardProps) {
  const t = useTranslations("services");

  const features = [
    t(`${translationPrefix}.feature1`),
    t(`${translationPrefix}.feature2`),
    t(`${translationPrefix}.feature3`),
  ];

  return (
    <div
      className={`relative flex flex-col rounded-2xl bg-white p-8 ${
        highlighted
          ? "border-2 border-spaik-orange shadow-lg"
          : "border border-spaik-clay-light"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-6 rounded-full bg-spaik-orange px-3 py-1 text-xs font-medium text-white">
          {t("kickstart.badge")}
        </span>
      )}

      <h3 className="font-sans text-xl font-bold text-spaik-black">
        {t(`${translationPrefix}.name`)}
      </h3>

      <p className="mt-1 font-sans text-base text-muted-foreground">
        {t(`${translationPrefix}.price`)}
      </p>

      <p className="mt-4 font-sans text-base text-spaik-black/80">
        {t(`${translationPrefix}.description`)}
      </p>

      <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-xl bg-spaik-clay-50">
        <Image
          src={mockupImage}
          alt={t(`${translationPrefix}.name`)}
          fill
          className="object-contain"
        />
      </div>

      <p className="mt-6 font-sans text-sm text-spaik-black/70">
        {t(`${translationPrefix}.detail`)}
      </p>

      <ul className="mt-4 flex flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-green-600" />
            <span className="font-sans text-sm text-spaik-black">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {translationPrefix === "kickstart" && (
        <p className="mt-3 font-sans text-xs text-muted-foreground">
          {t("kickstart.paymentNote")}
        </p>
      )}

      <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
        <a
          href={BOOK_CALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-spaik-orange px-5 py-2.5 font-sans text-sm font-medium text-white transition-colors hover:bg-spaik-orange/90"
        >
          {t("bookCall")}
        </a>
        <a
          href={readMoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-spaik-clay-light bg-white px-5 py-2.5 font-sans text-sm font-medium text-spaik-black transition-colors hover:bg-spaik-clay-50"
        >
          {t("readMore")}
        </a>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section id="services" className="relative overflow-hidden bg-white" style={{ padding: "80px 40px" }}>
      {/* Decorative rotated mockup */}
      <div
        className="absolute -right-24 -bottom-4 pointer-events-none opacity-[0.08]"
        style={{
          width: "725px",
          height: "629px",
          transform: "rotate(-25deg)",
          zIndex: 0,
        }}
      >
        <img src="/images/product-mockup-2.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-1 mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-[32px] font-thin text-spaik-black">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-spaik-black/80">
            {t("subtitle")}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            translationPrefix="inspiration"
            mockupImage="/images/product-mockup-2.png"
            readMoreUrl="https://inspiratie.spaik.io/"
          />
          <ServiceCard
            translationPrefix="kickstart"
            mockupImage="/images/product-mockup-3.png"
            readMoreUrl="https://kickstart.spaik.io/"
            highlighted
          />
          <ServiceCard
            translationPrefix="fundamentals"
            mockupImage="/images/product-mockup-4.png"
            readMoreUrl="https://fundamentals.spaik.io/"
          />
        </div>

        {/* All trainings link */}
        <div className="mt-12 text-center">
          <p className="font-sans text-base text-spaik-black/70">
            {t("allTrainings")}
          </p>
          <a
            href="https://traininghub.spaik.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-lg border border-spaik-clay-light bg-white px-6 py-2.5 font-sans text-sm font-medium text-spaik-black transition-colors hover:bg-spaik-clay-50"
          >
            {t("seeAllTrainings")}
          </a>
        </div>
      </div>
    </section>
  );
}
