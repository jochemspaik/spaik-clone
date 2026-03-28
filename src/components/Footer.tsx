"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const DOT_GRID_SIZE = 5;

export function Footer() {
  const t = useTranslations();

  return (
    <footer
      className="relative overflow-hidden w-full bg-white"
      style={{ borderTop: "1px solid #efede5" }}
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: 1080, padding: "48px 40px" }}
      >
        {/* Main content: three columns */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Left: Logo */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/images/Logo.svg"
                alt="SPAIK"
                width={120}
                height={30}
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-col gap-3">
            <a
              href="#cases"
              className="transition-opacity hover:opacity-60"
              style={{ fontSize: 15, color: "#0b0b0b" }}
            >
              {t("footer.cases")}
            </a>
            <a
              href="#services"
              className="transition-opacity hover:opacity-60"
              style={{ fontSize: 15, color: "#0b0b0b" }}
            >
              {t("footer.services")}
            </a>
            <a
              href="#why-spaik"
              className="transition-opacity hover:opacity-60"
              style={{ fontSize: 15, color: "#0b0b0b" }}
            >
              {t("footer.whySpaik")}
            </a>
            <a
              href="#team"
              className="transition-opacity hover:opacity-60"
              style={{ fontSize: 15, color: "#0b0b0b" }}
            >
              {t("footer.team")}
            </a>
            <a
              href="mailto:info@spaik.io?subject=Vraag%20van%20Website"
              className="transition-opacity hover:opacity-60"
              style={{ fontSize: 15, color: "#0b0b0b" }}
            >
              {t("footer.questions")}
            </a>
            <a
              href="https://www.linkedin.com/company/spaik-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
              style={{ fontSize: 15, color: "#0b0b0b" }}
            >
              {t("footer.linkedin")}
            </a>
          </nav>

          {/* Right: Decorative dot grid */}
          <div
            className="hidden md:grid"
            style={{
              gridTemplateColumns: `repeat(${DOT_GRID_SIZE}, 12px)`,
              gap: 8,
            }}
          >
            {Array.from({ length: DOT_GRID_SIZE * DOT_GRID_SIZE }).map(
              (_, i) => (
                <div
                  key={i}
                  className="rounded-full"
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: "#e5e5e0",
                  }}
                />
              ),
            )}
          </div>
        </div>

        {/* Decorative dot-grid texture — bottom-right corner */}
        <div
          className="absolute bottom-0 right-0 pointer-events-none"
          style={{ width: "25%", height: "55%", zIndex: 0, opacity: 0.10 }}
          aria-hidden="true"
        >
          <Image
            src="/images/product-dot-pattern.png"
            alt=""
            fill
            className="object-cover object-bottom-right"
            sizes="25vw"
          />
        </div>

        {/* Bottom Row: Legal */}
        <div
          className="mt-12 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6"
          style={{ fontSize: 14, color: "#6f6e66" }}
        >
          <Link
            href="/legal"
            className="transition-opacity hover:opacity-60"
            style={{ color: "#6f6e66" }}
          >
            {t("footer.terms")}
          </Link>
          <span>KVK: 95243763</span>
          <span>{t("footer.privacy")}</span>
        </div>
      </div>
    </footer>
  );
}
