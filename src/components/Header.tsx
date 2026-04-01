"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { RollingTextButton } from "./RollingTextButton";
import { BOOK_CALL_URL } from "@/lib/constants";

interface NavItem {
  key: string;
  href: string | { pathname: string; hash: string };
  external?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { key: "home", href: "/" },
  { key: "services", href: "/diensten" },
  { key: "cases", href: "/cases" },
  { key: "insights", href: "/blog" },
  { key: "trainings", href: "https://traininghub.spaik.io/", external: true },
];

function NavLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const t = useTranslations();
  const className = "inline-flex items-center transition-colors hover:text-spaik-orange";
  const style = { fontSize: 15, fontWeight: 400, color: "#0b0b0b", minHeight: "44px" };
  const label = t(`nav.${item.key}`);

  if (item.external && typeof item.href === "string") {
    return (
      <a href={item.href} onClick={onClick} className={className} style={style} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  const href = typeof item.href === "string"
    ? (item.href as "/")
    : { pathname: item.href.pathname as "/", hash: item.href.hash };

  return (
    <Link href={href} onClick={onClick} className={className} style={style}>
      {label}
    </Link>
  );
}

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

  /* Standalone pages (e.g. brochure) render without header */
  if (pathname.includes("/brochure")) return null;

  function switchLocale(locale: "nl" | "en") {
    router.replace(pathname, { locale });
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background-color,backdrop-filter] duration-200 ${
        scrolled ? "bg-white/85 backdrop-blur-md" : "bg-white"
      }`}
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
            style={{ height: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.key} item={item} />
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-0.5" style={{ fontSize: 13 }}>
            <button
              type="button"
              onClick={() => switchLocale("nl")}
              className="inline-flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ color: "rgba(0,0,0,0.4)", minWidth: "32px", minHeight: "44px" }}
            >
              NL
            </button>
            <span style={{ color: "rgba(0,0,0,0.2)" }}>/</span>
            <button
              type="button"
              onClick={() => switchLocale("en")}
              className="inline-flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ color: "rgba(0,0,0,0.4)", minWidth: "32px", minHeight: "44px" }}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <RollingTextButton
            text={t("nav.schedule")}
            href={BOOK_CALL_URL}
            variant="primary"
          />
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center md:hidden"
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
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 bg-white px-6 py-6" style={{ overscrollBehavior: "contain" }}>
          <nav className="flex flex-col gap-5">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.key} item={item} onClick={() => setMobileMenuOpen(false)} />
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2" style={{ fontSize: 15 }}>
              <button
                type="button"
                className="inline-flex h-11 items-center px-2"
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
                className="inline-flex h-11 items-center px-2"
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
            <RollingTextButton
              text={t("nav.schedule")}
              href={BOOK_CALL_URL}
              variant="primary"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
