"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { RollingTextButton } from "@/components/RollingTextButton";
import { ScrollStagger } from "@/components/ScrollStagger";
import { BOOK_CALL_URL, INTAKE_URL } from "@/lib/constants";
import { DashedCheckIcon } from "@/components/icons";

function CrossIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M8 8L20 20M20 8L8 20"
        stroke="#ff7150"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}


const SOLUTION_GRADIENTS = [
  "linear-gradient(135deg, #7b96cc 0%, #8faad8 50%, #a8c0e8 100%)",
  "linear-gradient(135deg, #8198ce 0%, #95aeda 50%, #aec6ea 100%)",
  "linear-gradient(135deg, #879ed0 0%, #9bb4dc 50%, #b4ccec 100%)",
];

export function ProblemSolutionSection() {
  const t = useTranslations();

  return (
    <section
      id="probleem"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "rgb(243, 237, 237)" }}
    >
      {/* Subtle texture overlay — large tile + fade-out to avoid visible repeat seam */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/Texture 1.webp')",
          backgroundSize: "1200px",
          opacity: 0.04,
        }}
      />

      {/* Decorative dot pattern */}
      <div
        className="absolute -left-20 top-1/3 pointer-events-none opacity-10"
        style={{
          width: "600px",
          height: "600px",
          transform: "rotate(-25deg)",
          overflow: "hidden",
        }}
      >
        <img
          src="/images/product-dot-pattern.png"
          alt=""
          aria-hidden="true"
          width={600}
          height={600}
          className="w-full h-full object-contain"
        />
      </div>

      <div
        className="mx-auto flex flex-col"
        style={{
          maxWidth: "1080px",
          padding: "120px 40px",
          gap: "120px",
        }}
      >
        {/* Problems block — centered title + 3 columns */}
        <div className="flex flex-col items-center">
          <p
            className="font-heading text-center"
            style={{
              fontSize: "32px",
              fontWeight: 100,
              lineHeight: "35.2px",
              color: "#0b0b0b",
            }}
          >
            {t("problem.title")}
          </p>
          <p
            className="mt-4 text-center"
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              color: "rgba(0,0,0,0.6)",
              maxWidth: "600px",
            }}
          >
            {t("problem.subtitle")}
          </p>

          <ScrollStagger
            className="grid grid-cols-1 md:grid-cols-3 w-full"
            staggerMs={150}
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center text-center" style={{ marginTop: "48px" }}>
                <CrossIcon />
                <p
                  className="font-medium"
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#0b0b0b",
                    marginTop: "16px",
                  }}
                >
                  {t(`problem.problem${i}title`)}
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0,0,0,0.6)",
                    marginTop: "8px",
                  }}
                >
                  {t(`problem.problem${i}text`)}
                </p>
              </div>
            ))}
          </ScrollStagger>
        </div>

        {/* Solutions + Testimonial — massive organic gradient blobs */}
        <div className="relative" style={{ paddingTop: "40px" }}>
          {/* Animated gradient blob 1 — large, top-center, slowly drifting */}
          <div
            className="solution-blob pointer-events-none absolute"
            style={{
              width: "140%",
              height: "120%",
              left: "-20%",
              top: "-10%",
              background: "radial-gradient(ellipse 60% 50% at 40% 40%, rgba(165, 185, 225, 0.55) 0%, rgba(185, 170, 230, 0.35) 40%, transparent 70%)",
              filter: "blur(60px)",
              zIndex: 0,
            }}
          />
          {/* Animated gradient blob 2 — offset, warmer purple, slower drift */}
          <div
            className="solution-blob-2 pointer-events-none absolute"
            style={{
              width: "120%",
              height: "100%",
              right: "-15%",
              bottom: "-5%",
              background: "radial-gradient(ellipse 50% 60% at 65% 60%, rgba(195, 175, 235, 0.45) 0%, rgba(175, 195, 230, 0.25) 40%, transparent 70%)",
              filter: "blur(50px)",
              zIndex: 0,
            }}
          />

          {/* Solution title */}
          <p
            className="relative z-[1] font-heading"
            style={{
              fontSize: "32px",
              fontWeight: 100,
              lineHeight: "35.2px",
              color: "#0b0b0b",
            }}
          >
            {t("solution.title")}
          </p>

          {/* Solution cards — floating on the gradient */}
          <ScrollStagger
            className="relative z-[1] grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
            staggerMs={120}
            baseDelay={100}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}
              >
                {/* Dither strip */}
                <div
                  className="solution-dither-strip relative w-full overflow-hidden"
                  style={{
                    height: "88px",
                    background: SOLUTION_GRADIENTS[i - 1],
                  }}
                />
                <div style={{ padding: "24px" }}>
                  <DashedCheckIcon />
                  <p
                    className="font-medium"
                    style={{ fontSize: "16px", lineHeight: "24px", color: "#0b0b0b", marginTop: "12px" }}
                  >
                    {t(`solution.item${i}title`)}
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(0,0,0,0.6)", marginTop: "8px" }}>
                    {t(`solution.item${i}text`)}
                  </p>
                </div>
              </div>
            ))}
          </ScrollStagger>

          {/* Testimonial — floating on the gradient */}
          <div
            className="relative z-[1] grain-overlay rounded-3xl overflow-hidden flex flex-col md:flex-row mt-10"
            style={{ backgroundColor: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}
          >
            <div className="relative w-full md:w-[400px] h-[340px] md:h-auto flex-shrink-0">
              <Image
                src="/images/case-johanneke.jpg"
                alt="Johanneke Behrend"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div style={{ padding: "40px" }} className="flex flex-col justify-center">
              <Image src="/images/logo-movir.png" alt="Movir" width={100} height={30} style={{ height: "auto" }} className="mb-4" />
              <h3 className="font-heading" style={{ fontSize: "28px", fontWeight: 100, lineHeight: "34px", color: "#0b0b0b" }}>
                {t("solution.testimonial")}
              </h3>
              <p className="mt-4 font-medium" style={{ fontSize: "15px", color: "#0b0b0b" }}>
                {t("solution.testimonialAuthor")}
              </p>
              <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.5)" }}>
                {t("solution.testimonialRole")}
              </p>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <RollingTextButton
            text={t("hero.ctaPrimary")}
            href={INTAKE_URL}
            variant="primary"
          />
          <RollingTextButton
            text={t("hero.ctaSecondary")}
            href={BOOK_CALL_URL}
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}
