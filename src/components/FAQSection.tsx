"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/SectionWrapper";

const FAQ_COUNT = 10;
const INITIALLY_OPEN = new Set([0, 1, 2, 3]);

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M5 7.5l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FAQSection() {
  const t = useTranslations("faq");
  const [openItems, setOpenItems] = useState<Set<number>>(
    () => new Set(INITIALLY_OPEN),
  );

  function toggle(index: number) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <SectionWrapper id="faq" className="bg-white">
        <h2
          className="mb-10 text-center font-heading text-spaik-black"
          style={{ fontSize: "32px", fontWeight: 100 }}
        >
          {t("title")}
        </h2>

        <div className="divide-y divide-spaik-clay-light">
          {Array.from({ length: FAQ_COUNT }, (_, i) => {
            const num = i + 1;
            const isOpen = openItems.has(i);
            const questionKey = `q${num}` as const;
            const answerKey = `a${num}` as const;

            return (
              <div key={num}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between text-left"
                  style={{ padding: "20px 0" }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="pr-4 font-sans text-spaik-black"
                    style={{ fontSize: "16px", fontWeight: 500 }}
                  >
                    {t(questionKey)}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-200"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p
                      className="font-sans"
                      style={{
                        fontSize: "16px",
                        color: "rgba(0,0,0,0.8)",
                        padding: "0 0 20px 0",
                      }}
                    >
                      {t(answerKey)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </SectionWrapper>
  );
}
