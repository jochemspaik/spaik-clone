"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

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
                style={{ height: "auto" }}
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-col gap-1">
            <Link
              href={"/cases" as "/"}
              className="inline-flex items-center transition-opacity hover:opacity-60"
              style={{ fontSize: 15, color: "#0b0b0b", minHeight: 44 }}
            >
              {t("footer.cases")}
            </Link>
            <Link
              href={"/diensten" as "/"}
              className="inline-flex items-center transition-opacity hover:opacity-60"
              style={{ fontSize: 15, color: "#0b0b0b", minHeight: 44 }}
            >
              {t("footer.services")}
            </Link>
            <Link
              href={"/#why-spaik" as "/"}
              className="inline-flex items-center transition-opacity hover:opacity-60"
              style={{ fontSize: 15, color: "#0b0b0b", minHeight: 44 }}
            >
              {t("footer.whySpaik")}
            </Link>
            <Link
              href={"/#team" as "/"}
              className="inline-flex items-center transition-opacity hover:opacity-60"
              style={{ fontSize: 15, color: "#0b0b0b", minHeight: 44 }}
            >
              {t("footer.team")}
            </Link>
            <a
              href="mailto:info@spaik.io?subject=Vraag%20van%20Website"
              className="inline-flex items-center transition-opacity hover:opacity-60"
              style={{ fontSize: 15, color: "#0b0b0b", minHeight: 44 }}
            >
              {t("footer.questions")}
            </a>
            <a
              href="https://www.linkedin.com/company/spaik-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-opacity hover:opacity-60"
              style={{ fontSize: 15, color: "#0b0b0b", minHeight: 44 }}
            >
              {t("footer.linkedin")}
            </a>
          </nav>

          {/* Right: SPAIK logomark */}
          <div className="hidden md:block" style={{ width: 200, height: 200, opacity: 0.08 }}>
            <Image
              src="/images/Logomark.svg"
              alt=""
              width={200}
              height={200}
              style={{ height: "auto" }}
              className="object-contain"
            />
          </div>
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
