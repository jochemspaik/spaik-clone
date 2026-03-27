"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Department = "operational" | "marketing" | "data";

interface DepartmentItem {
  icon: string;
  labelKey: string;
}

const DEPARTMENT_ITEMS: Record<Department, DepartmentItem[]> = {
  operational: [
    { icon: "/images/dept-invoicing.png", labelKey: "invoicing" },
    { icon: "/images/dept-project.png", labelKey: "projectManagement" },
    { icon: "/images/dept-communication.png", labelKey: "communication" },
  ],
  marketing: [
    { icon: "/images/dept-invoicing.png", labelKey: "invoicing" },
    { icon: "/images/dept-project.png", labelKey: "projectManagement" },
    { icon: "/images/dept-communication.png", labelKey: "communication" },
  ],
  data: [
    { icon: "/images/dept-invoicing.png", labelKey: "invoicing" },
    { icon: "/images/dept-project.png", labelKey: "projectManagement" },
    { icon: "/images/dept-communication.png", labelKey: "communication" },
  ],
};

const DEPARTMENTS: { key: Department; icon: string; labelKey: string }[] = [
  { key: "marketing", icon: "/images/icon-marketing.png", labelKey: "marketing" },
  { key: "data", icon: "/images/icon-data.png", labelKey: "data" },
  { key: "operational", icon: "/images/dept-icon-1.png", labelKey: "operational" },
];

export function DiscoverySection() {
  const t = useTranslations("discovery");
  const [activeDept, setActiveDept] = useState<Department>("operational");

  const activeItems = DEPARTMENT_ITEMS[activeDept];

  return (
    <section className="bg-white" style={{ padding: "80px 24px" }}>
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-[32px] font-thin text-spaik-black">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-spaik-black/80">
            {t("subtitle")}
          </p>
        </div>

        {/* Department selector cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept.key}
              type="button"
              onClick={() => setActiveDept(dept.key)}
              className={`flex flex-col items-center gap-3 rounded-xl border bg-white p-6 transition-all hover:shadow-md ${
                activeDept === dept.key
                  ? "border-spaik-orange shadow-sm"
                  : "border-spaik-clay-light"
              }`}
            >
              <div className="relative size-12">
                <Image
                  src={dept.icon}
                  alt={t(dept.labelKey)}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-sans text-sm font-medium text-spaik-black">
                {t(dept.labelKey)}
              </span>
            </button>
          ))}
        </div>

        {/* Content panel for selected department */}
        <div className="mt-8 overflow-hidden rounded-xl border border-spaik-clay-light bg-white p-6 transition-all sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            {activeItems.map((item) => (
              <div
                key={item.labelKey}
                className="flex items-center gap-4"
              >
                <div className="relative size-12 shrink-0">
                  <Image
                    src={item.icon}
                    alt={t(item.labelKey)}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-sans text-base text-spaik-black">
                  {t(item.labelKey)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Collapsed department names as clickable text */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {DEPARTMENTS.filter((dept) => dept.key !== activeDept).map((dept) => (
            <button
              key={dept.key}
              type="button"
              onClick={() => setActiveDept(dept.key)}
              className="font-sans text-sm text-spaik-black/60 underline-offset-2 transition-colors hover:text-spaik-orange hover:underline"
            >
              {t(dept.labelKey)}
            </button>
          ))}
        </div>

        {/* Other challenge text */}
        <p className="mt-8 text-center font-sans text-sm text-spaik-black/60">
          {t("otherChallenge")}
        </p>
      </div>
    </section>
  );
}
