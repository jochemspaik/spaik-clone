"use client";

import { useTranslations } from "next-intl";
import { RollingTextButton } from "./RollingTextButton";

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="flex-shrink-0 mt-1"
    >
      <circle cx="10" cy="10" r="10" fill="#ff7150" />
      <path
        d="M6 10L9 13L14 7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="flex-shrink-0 mt-1"
    >
      <circle cx="10" cy="10" r="10" fill="#0b0b0b" />
      <path
        d="M7 7L13 13M13 7L7 13"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ProblemSolutionSection() {
  const t = useTranslations();

  return (
    <section
      id="probleem"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "rgb(243, 237, 237)" }}
    >
      {/* Decorative dot pattern - rotated */}
      <div
        className="absolute -left-20 top-1/3 pointer-events-none opacity-10"
        style={{
          width: "600px",
          height: "600px",
          transform: "rotate(-25deg)",
          overflow: "hidden",
        }}
      >
        <img src="/images/product-dot-pattern.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div
        className="mx-auto flex flex-col"
        style={{
          maxWidth: "1080px",
          padding: "120px 40px",
          gap: "120px",
        }}
      >
        {/* Problems block */}
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/5">
            <p
              className="font-heading"
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
              className="mt-4"
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgba(0,0,0,0.6)",
              }}
            >
              {t("problem.subtitle")}
            </p>
          </div>

          <div className="md:w-3/5 flex flex-col gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
              >
                <div className="flex gap-3">
                  <CrossIcon />
                  <div>
                    <p
                      className="font-medium"
                      style={{
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#0b0b0b",
                      }}
                    >
                      {t(`problem.problem${i}title`)}
                    </p>
                    <p
                      className="mt-1"
                      style={{
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      {t(`problem.problem${i}text`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions block */}
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/5">
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
          </div>

          <div className="md:w-3/5 flex flex-col gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
              >
                <div className="flex gap-3">
                  <CheckIcon />
                  <div>
                    <p
                      className="font-medium"
                      style={{
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#0b0b0b",
                      }}
                    >
                      {t(`solution.item${i}title`)}
                    </p>
                    <p
                      className="mt-1"
                      style={{
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      {t(`solution.item${i}text`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
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
