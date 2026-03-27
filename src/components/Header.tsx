"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";

interface NavItem {
  key: string;
  href: string;
  external?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { key: "cases", href: "/#cases" },
  { key: "services", href: "/#services" },
  { key: "trainings", href: "https://traininghub.spaik.io/", external: true },
  { key: "team", href: "/#team" },
  { key: "faq", href: "/#faq" },
];

export function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function switchLocale(locale: "nl" | "en") {
    router.replace(pathname, { locale });
  }

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-200"
      style={{
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.85)"
          : "rgba(255, 255, 255, 1)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1080, height: 87, padding: "20px 40px" }}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/Logo.svg"
            alt="SPAIK"
            width={120}
            height={30}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) =>
            item.external ? (
              <a
                key={item.key}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
                style={{
                  fontSize: 15,
                  fontWeight: 400,
                  color: "#0b0b0b",
                }}
              >
                {t(`nav.${item.key}`)}
              </a>
            ) : (
              <a
                key={item.key}
                href={item.href}
                className="transition-opacity hover:opacity-60"
                style={{
                  fontSize: 15,
                  fontWeight: 400,
                  color: "#0b0b0b",
                }}
              >
                {t(`nav.${item.key}`)}
              </a>
            ),
          )}

          {/* Language Switcher — subtle */}
          <div className="flex items-center gap-1" style={{ fontSize: 13 }}>
            <button
              type="button"
              onClick={() => switchLocale("nl")}
              className="transition-opacity hover:opacity-80"
              style={{ color: "rgba(0,0,0,0.4)" }}
            >
              NL
            </button>
            <span style={{ color: "rgba(0,0,0,0.2)" }}>/</span>
            <button
              type="button"
              onClick={() => switchLocale("en")}
              className="transition-opacity hover:opacity-80"
              style={{ color: "rgba(0,0,0,0.4)" }}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://calendar.app.google/mGYhtUUjgSdZhePw8"
          target="_blank"
          rel="noopener noreferrer"
          className="rolling-text hidden rounded-xl text-white md:inline-flex"
          data-text={t("nav.schedule")}
          style={{
            backgroundColor: "#ff7150",
            padding: "12px 24px",
            fontSize: 15,
            fontWeight: 500,
          }}
        >
          <span>{t("nav.schedule")}</span>
        </a>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} color="#0b0b0b" />
          ) : (
            <Menu size={24} color="#0b0b0b" />
          )}
        </button>
      </div>

      {/* Mobile Slide-out Panel */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {NAV_ITEMS.map((item) =>
              item.external ? (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#0b0b0b",
                  }}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#0b0b0b",
                  }}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ),
            )}

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2" style={{ fontSize: 15 }}>
              <button
                type="button"
                onClick={() => {
                  switchLocale("nl");
                  setMobileMenuOpen(false);
                }}
                style={{ color: "#0b0b0b" }}
              >
                NL
              </button>
              <span style={{ color: "#0b0b0b" }}>|</span>
              <button
                type="button"
                onClick={() => {
                  switchLocale("en");
                  setMobileMenuOpen(false);
                }}
                style={{ color: "#0b0b0b" }}
              >
                EN
              </button>
            </div>

            {/* Mobile CTA */}
            <a
              href="https://calendar.app.google/mGYhtUUjgSdZhePw8"
              target="_blank"
              rel="noopener noreferrer"
              className="rolling-text inline-flex rounded-xl text-center text-white"
              data-text={t("nav.schedule")}
              style={{
                backgroundColor: "#ff7150",
                padding: "12px 24px",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              <span>{t("nav.schedule")}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
