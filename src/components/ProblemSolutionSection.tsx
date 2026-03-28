"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { RollingTextButton } from "@/components/RollingTextButton";
import { BOOK_CALL_URL, INTAKE_URL } from "@/lib/constants";

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

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 13L9 18L20 6"
        stroke="#8aa1cc"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2 3"
      />
    </svg>
  );
}

const SOLUTION_GRADIENTS = [
  "linear-gradient(135deg, #c5d5f0 0%, #d8dff0 60%, #e8effb 100%)",
  "linear-gradient(135deg, #d0d8f0 0%, #dce3f2 60%, #eaf0fb 100%)",
  "linear-gradient(135deg, #d8dff0 0%, #e4eaf5 60%, #eef4fc 100%)",
];

export function ProblemSolutionSection() {
  const t = useTranslations();

  return (
    <section
      id="probleem"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "rgb(243, 237, 237)" }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/Texture 1.png')",
          backgroundSize: "800px",
          opacity: 0.08,
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
                {/* Blue/lavender gradient strip */}
                <div
                  className="w-full"
                  style={{
                    height: "48px",
                    background: SOLUTION_GRADIENTS[i - 1],
                  }}
                />

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

        {/* Testimonial card */}
        <div
          className="rounded-3xl overflow-hidden flex flex-col md:flex-row"
          style={{
            background: "linear-gradient(135deg, #c5d5f0 0%, #bbc8e8 40%, #d8dff5 100%)",
          }}
        >
          {/* Photo */}
          <div className="relative w-full md:w-[320px] h-[300px] md:h-auto flex-shrink-0">
            <Image
              src="/images/case-johanneke.jpg"
              alt="Johanneke Behrend"
              fill
              className="object-cover"
            />
          </div>
          {/* Quote content */}
          <div style={{ padding: "40px" }} className="flex flex-col justify-center">
            <Image src="/images/logo-movir.png" alt="Movir" width={100} height={30} className="mb-4" />
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
