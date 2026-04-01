"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/SectionWrapper";
import { XIcon } from "@/components/icons";

export function NotListSection() {
  const t = useTranslations("notList");

  const items = [1, 2, 3, 4, 5].map((i) => ({
    title: t(`item${i}Title`),
    body: t(`item${i}Body`),
  }));

  return (
    <SectionWrapper className="bg-white">
      <h2
        className="font-heading"
        style={{ fontSize: 32, fontWeight: 100, color: "#0b0b0b" }}
      >
        {t("title")}
      </h2>
      <p
        className="mt-3"
        style={{ fontSize: 16, color: "rgba(0,0,0,0.6)", lineHeight: 1.6, maxWidth: 600 }}
      >
        {t("subtitle")}
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl p-6 w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
            style={{ backgroundColor: "#FAFAF8", border: "1px solid #EFEDE5" }}
          >
            <div className="flex items-start gap-3">
              <XIcon className="shrink-0 mt-1" />
              <div>
                <p className="font-medium" style={{ fontSize: 16, color: "#0b0b0b" }}>
                  {item.title}
                </p>
                <p className="mt-2" style={{ fontSize: 15, color: "rgba(0,0,0,0.6)", lineHeight: 1.5 }}>
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
