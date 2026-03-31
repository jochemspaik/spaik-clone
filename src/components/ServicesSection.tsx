"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SERVICES } from "@/data/services";

export function ServicesSection() {
  const t = useTranslations();

  return (
    <section id="services" className="relative overflow-hidden bg-white px-6 py-16 md:px-10 md:py-20">
      {/* Texture overlay — full bleed at low opacity */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ opacity: 0.10, zIndex: 0 }}
      >
        <img
          src="/images/Texture 1.webp"
          alt=""
          aria-hidden="true"
          width={800}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>
      {/* Dot-grid decoration — left edge */}
      <div
        className="pointer-events-none absolute left-0 top-0 hidden h-full md:block"
        style={{ width: "25%", opacity: 0.05, zIndex: 0 }}
      >
        <img
          src="/images/hero-graphic.png"
          alt=""
          aria-hidden="true"
          width={800}
          height={800}
          className="h-full w-full object-cover object-right"
          style={{ maskImage: "linear-gradient(to right, black 30%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, black 30%, transparent 100%)" }}
        />
      </div>

      <div className="relative z-1 mx-auto" style={{ maxWidth: "1080px" }}>
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-[32px] font-thin text-spaik-black">
            {t("services.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-spaik-black/80">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Compact service teaser cards */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/diensten/${service.slug}` as "/"}
              className="group relative flex flex-col rounded-2xl p-5 transition-shadow hover:shadow-lg"
              style={{
                backgroundColor: service.tint.bg,
                boxShadow: `inset 0 0 0 1px ${service.tint.ring}`,
              }}
            >
              {/* Featured badge */}
              {service.featured && (
                <span
                  className="absolute -top-2.5 right-4 rounded-full px-2.5 py-0.5 text-[11px] font-medium text-white"
                  style={{ backgroundColor: "#FF7150" }}
                >
                  {t("diensten.mostChosen")}
                </span>
              )}

              {/* Icon */}
              <div
                className="flex items-center justify-center rounded-xl"
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: service.tint.iconBg,
                }}
              >
                <img
                  src={service.icon}
                  alt=""
                  aria-hidden="true"
                  style={{ width: 22, height: 22 }}
                />
              </div>

              {/* Name */}
              <p
                className="mt-3 font-heading"
                style={{ fontSize: 17, fontWeight: 400, color: "#0b0b0b", lineHeight: 1.2 }}
              >
                {t(`diensten.overview.${service.slug}.title`)}
              </p>

              {/* Tagline */}
              <p
                className="mt-1.5 text-xs leading-relaxed"
                style={{ color: "rgba(0,0,0,0.5)" }}
              >
                {t(`diensten.overview.${service.slug}.tagline`)}
              </p>

              {/* Arrow */}
              <span
                className="mt-auto pt-4 inline-flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2"
                style={{ color: service.featured ? "#FF7150" : "rgba(0,0,0,0.4)" }}
              >
                {t("diensten.moreAbout")} &rarr;
              </span>
            </Link>
          ))}
        </div>

        {/* All services link */}
        <div className="mt-10 text-center">
          <Link
            href={"/diensten" as "/"}
            className="inline-flex items-center justify-center rounded-lg border border-spaik-clay-light bg-white px-6 py-3 font-sans text-sm font-medium text-spaik-black transition-colors hover:bg-spaik-clay-50"
          >
            {t("services.seeAllTrainings")}
          </Link>
        </div>
      </div>
    </section>
  );
}
