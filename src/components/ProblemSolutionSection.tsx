"use client";

import { useTranslations } from "next-intl";

function CheckIcon() {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center rounded-full"
      style={{
        width: "24px",
        height: "24px",
        backgroundColor: "#34d399",
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 7L6 10L11 4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function ProblemSolutionSection() {
  const t = useTranslations();

  return (
    <section id="probleem" className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left half - Problems (dark) */}
        <div
          className="w-full md:w-1/2"
          style={{
            backgroundColor: "#0b0b0b",
            padding: "60px",
          }}
        >
          <h2
            className="font-heading text-white"
            style={{
              fontSize: "32px",
              fontWeight: 100,
              lineHeight: "1.3",
              marginBottom: "16px",
            }}
          >
            {t("problem.title")}
          </h2>
          <p
            className="font-sans"
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "40px",
            }}
          >
            {t("problem.subtitle")}
          </p>

          <div className="flex flex-col gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={
                  i < 3
                    ? "pb-8 border-b border-white/10"
                    : ""
                }
              >
                <h3
                  className="font-sans font-bold text-white"
                  style={{ fontSize: "16px", marginBottom: "8px" }}
                >
                  {t(`problem.problem${i}title`)}
                </h3>
                <p
                  className="font-sans"
                  style={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.6",
                  }}
                >
                  {t(`problem.problem${i}text`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right half - Solutions (beige) */}
        <div
          className="w-full md:w-1/2"
          style={{
            backgroundColor: "#efede5",
            padding: "60px",
          }}
        >
          <h2
            className="font-heading"
            style={{
              fontSize: "32px",
              fontWeight: 100,
              lineHeight: "1.3",
              color: "#0a0a0a",
              marginBottom: "40px",
            }}
          >
            {t("solution.title")}
          </h2>

          <div className="flex flex-col gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <CheckIcon />
                <div>
                  <h3
                    className="font-sans font-bold"
                    style={{
                      fontSize: "16px",
                      color: "#0a0a0a",
                      marginBottom: "6px",
                    }}
                  >
                    {t(`solution.item${i}title`)}
                  </h3>
                  <p
                    className="font-sans"
                    style={{
                      fontSize: "16px",
                      color: "rgba(0,0,0,0.7)",
                      lineHeight: "1.6",
                    }}
                  >
                    {t(`solution.item${i}text`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div
            className="mt-10 pt-8"
            style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
          >
            <blockquote
              className="font-heading"
              style={{
                fontSize: "32px",
                fontWeight: 100,
                fontStyle: "italic",
                lineHeight: "1.3",
                color: "#0a0a0a",
                marginBottom: "16px",
              }}
            >
              &ldquo;{t("solution.testimonial")}&rdquo;
            </blockquote>
            <p
              className="font-sans font-medium"
              style={{ fontSize: "14px", color: "#0a0a0a" }}
            >
              {t("solution.testimonialAuthor")}
            </p>
            <p
              className="font-sans"
              style={{
                fontSize: "14px",
                color: "rgba(0,0,0,0.5)",
              }}
            >
              {t("solution.testimonialRole")}
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <a
              href="#use-cases"
              className="inline-flex items-center justify-center font-sans font-medium rounded-full px-6 py-3 transition-opacity hover:opacity-90"
              style={{
                fontSize: "15px",
                backgroundColor: "#ff7150",
                color: "#ffffff",
              }}
            >
              {t("solution.ctaUseCases")}
            </a>
            <a
              href="#book"
              className="inline-flex items-center justify-center font-sans font-medium rounded-full px-6 py-3 transition-opacity hover:opacity-90"
              style={{
                fontSize: "15px",
                backgroundColor: "#ff9680",
                color: "#ffffff",
              }}
            >
              {t("solution.ctaBook")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
