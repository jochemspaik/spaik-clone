"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Department = "operational" | "marketing" | "data";

interface DepartmentConfig {
  key: Department;
  icon: string;
  labelKey: string;
  items: string[];
}

const DEPARTMENTS: DepartmentConfig[] = [
  {
    key: "operational",
    icon: "/images/Building.svg",
    labelKey: "operational",
    items: ["operationalItem1", "operationalItem2", "operationalItem3"],
  },
  {
    key: "marketing",
    icon: "/images/Discovery.svg",
    labelKey: "marketing",
    items: ["marketingItem1", "marketingItem2", "marketingItem3"],
  },
  {
    key: "data",
    icon: "/images/Tech.svg",
    labelKey: "data",
    items: ["dataItem1", "dataItem2", "dataItem3"],
  },
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16.667 5L7.5 14.167 3.333 10"
        stroke="#badad5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 4.167v11.666M4.167 10h11.666"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4.167 10h11.666"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DiscoverySection() {
  const t = useTranslations("discovery");
  const [expanded, setExpanded] = useState<Department>("operational");

  function toggle(key: Department) {
    setExpanded((prev) => (prev === key ? prev : key));
  }

  return (
    <section className="bg-white" style={{ padding: "80px 40px" }}>
      <div className="mx-auto" style={{ maxWidth: "1080px" }}>
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left column — title, subtitle, node diagram */}
          <div className="flex flex-col lg:w-[40%]">
            <h2
              className="font-heading text-spaik-black"
              style={{ fontSize: "32px", fontWeight: 100 }}
            >
              {t("title")}
            </h2>
            <p
              className="mt-4 font-sans text-spaik-black/70"
              style={{ fontSize: "16px", lineHeight: "1.6" }}
            >
              {t("subtitle")}
            </p>

            {/* Node diagram — decorative department connections */}
            <div
              className="relative mt-10 hidden lg:block"
              style={{ height: "220px" }}
            >
              {/* Connecting lines */}
              <svg
                className="absolute inset-0"
                width="100%"
                height="100%"
                aria-hidden="true"
              >
                {/* Line from Operational to Marketing & Sales */}
                <line
                  x1="40"
                  y1="40"
                  x2="160"
                  y2="110"
                  stroke="#dedccc"
                  strokeWidth="1.5"
                />
                {/* Line from Marketing & Sales to Data */}
                <line
                  x1="160"
                  y1="110"
                  x2="80"
                  y2="180"
                  stroke="#dedccc"
                  strokeWidth="1.5"
                />
                {/* Line from Operational to Data */}
                <line
                  x1="40"
                  y1="40"
                  x2="80"
                  y2="180"
                  stroke="#dedccc"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Node: Operational */}
              <button
                type="button"
                onClick={() => toggle("operational")}
                className={`absolute flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-sm transition-colors duration-200 ${
                  expanded === "operational"
                    ? "border-spaik-orange bg-spaik-orange-50 text-spaik-black"
                    : "border-spaik-clay bg-white text-spaik-black/70 hover:border-spaik-orange"
                }`}
                style={{ left: "0px", top: "20px" }}
              >
                <Image
                  src="/images/Building.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                {t("operational")}
              </button>

              {/* Node: Marketing & Sales */}
              <button
                type="button"
                onClick={() => toggle("marketing")}
                className={`absolute flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-sm transition-colors duration-200 ${
                  expanded === "marketing"
                    ? "border-spaik-orange bg-spaik-orange-50 text-spaik-black"
                    : "border-spaik-clay bg-white text-spaik-black/70 hover:border-spaik-orange"
                }`}
                style={{ left: "120px", top: "90px" }}
              >
                <Image
                  src="/images/Discovery.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                {t("marketing")}
              </button>

              {/* Node: Data */}
              <button
                type="button"
                onClick={() => toggle("data")}
                className={`absolute flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-sm transition-colors duration-200 ${
                  expanded === "data"
                    ? "border-spaik-orange bg-spaik-orange-50 text-spaik-black"
                    : "border-spaik-clay bg-white text-spaik-black/70 hover:border-spaik-orange"
                }`}
                style={{ left: "40px", top: "160px" }}
              >
                <Image
                  src="/images/Tech.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                {t("data")}
              </button>
            </div>
          </div>

          {/* Right column — accordion */}
          <div className="lg:w-[60%]">
            <div className="divide-y divide-spaik-clay-light border-y border-spaik-clay-light">
              {DEPARTMENTS.map((dept) => {
                const isExpanded = expanded === dept.key;

                return (
                  <div key={dept.key}>
                    <button
                      type="button"
                      onClick={() => toggle(dept.key)}
                      className="flex w-full items-center justify-between py-5 text-left transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={dept.icon}
                          alt=""
                          width={24}
                          height={24}
                        />
                        <span
                          className="font-sans text-spaik-black"
                          style={{ fontSize: "18px", fontWeight: 500 }}
                        >
                          {t(dept.labelKey)}
                        </span>
                      </div>
                      <span className="text-spaik-black/40">
                        {isExpanded ? <MinusIcon /> : <PlusIcon />}
                      </span>
                    </button>

                    {/* Expanded content */}
                    <div
                      className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
                      style={{
                        maxHeight: isExpanded ? "200px" : "0px",
                        opacity: isExpanded ? 1 : 0,
                      }}
                    >
                      <div className="flex flex-col gap-3 pb-5 pl-9">
                        {dept.items.map((itemKey) => (
                          <div
                            key={itemKey}
                            className="flex items-center gap-3"
                          >
                            <CheckIcon />
                            <span
                              className="font-sans text-spaik-black/80"
                              style={{ fontSize: "15px" }}
                            >
                              {t(itemKey)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <p
          className="mt-12 font-sans text-spaik-black/60"
          style={{ fontSize: "14px" }}
        >
          {t("otherChallenge")}
        </p>
      </div>
    </section>
  );
}
