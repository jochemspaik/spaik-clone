"use client";

import { useTranslations } from "next-intl";
import { RollingTextButton } from "@/components/RollingTextButton";

function CrossIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="#ff7150" strokeWidth="2" />
      <path
        d="M11 11L21 21M21 11L11 21"
        stroke="#ff7150"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12L9 18L20 6"
        stroke="#7c8dff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProblemSolutionSection() {
  const t = useTranslations();

  const solutionImages = [
    "/images/product-mockup-1.png",
    "/images/product-mockup-2.png",
    "/images/product-mockup-3.png",
  ];

  return (
    <section
      id="probleem"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "rgb(243, 237, 237)" }}
    >
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
              color: "#0a0a0a",
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

          <div
            className="grid grid-cols-1 md:grid-cols-3 w-full"
            style={{ gap: "40px", marginTop: "48px" }}
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center text-center">
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
          </div>
        </div>

        {/* Solutions block — left-aligned title + 3 cards in a row */}
        <div className="flex flex-col">
          <p
            className="font-heading"
            style={{
              fontSize: "32px",
              fontWeight: 100,
              lineHeight: "35.2px",
              color: "#0a0a0a",
            }}
          >
            {t("solution.title")}
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "24px", marginTop: "48px" }}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {/* Card banner image */}
                <div
                  className="w-full overflow-hidden"
                  style={{ height: "160px" }}
                >
                  <img
                    src={solutionImages[i - 1]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card body */}
                <div style={{ padding: "24px" }}>
                  <CheckIcon />
                  <p
                    className="font-medium"
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#0b0b0b",
                      marginTop: "12px",
                    }}
                  >
                    {t(`solution.item${i}title`)}
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "rgba(0,0,0,0.6)",
                      marginTop: "8px",
                    }}
                  >
                    {t(`solution.item${i}text`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial + CTAs */}
        <div className="flex flex-col items-center text-center">
          <h3
            className="font-heading"
            style={{
              fontSize: "32px",
              fontWeight: 100,
              lineHeight: "35.2px",
              letterSpacing: "-0.64px",
              color: "#0b0b0b",
              maxWidth: "700px",
            }}
          >
            {t("solution.testimonial")}
          </h3>
          <div className="mt-6">
            <p
              className="font-medium"
              style={{ fontSize: "15px", color: "#0b0b0b" }}
            >
              {t("solution.testimonialAuthor")}
            </p>
            <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.5)" }}>
              {t("solution.testimonialRole")}
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
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
      </div>
    </section>
  );
}
