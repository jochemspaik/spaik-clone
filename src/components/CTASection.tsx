"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

function LinkedInIcon() {
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
        d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531-1.544 0-1.78 1.206-1.78 2.45v4.72H7.793V7.498h2.845v1.305h.039c.396-.75 1.364-1.543 2.807-1.543 3.003 0 3.556 1.976 3.556 4.546v5.237ZM4.45 6.193a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM5.93 17.043H2.966V7.498H5.93v9.545ZM18.52 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042C19.34 20 20 19.355 20 18.56V1.44C20 .645 19.34 0 18.518 0h.002Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section
      className="relative bg-white"
      style={{ padding: "80px 40px" }}
    >
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/secondary-animation.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(50% 50%, rgba(255,255,255,0) 37%, rgb(255,255,255) 100%)",
          }}
        />
      </div>

      <div className="relative z-1 mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2
          className="font-heading text-spaik-black"
          style={{ fontSize: "32px", fontWeight: 100 }}
        >
          {t("title")}
        </h2>
        <p
          className="mt-4 text-spaik-black/70"
          style={{ fontSize: "16px", maxWidth: "600px" }}
        >
          {t("description")}
        </p>

        {/* CTA button */}
        <a
          href="https://calendar.app.google/mGYhtUUjgSdZhePw8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-xl bg-spaik-orange px-8 py-4 font-sans text-white transition-opacity hover:opacity-90"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          {t("button")}
        </a>

        {/* Author info */}
        <div className="mt-8 flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src="/images/team-jochem.jpg"
              alt={t("name")}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div className="text-left">
            <p
              className="font-sans text-spaik-black"
              style={{ fontSize: "14px", fontWeight: 600 }}
            >
              {t("name")}
            </p>
            <p
              className="font-sans text-spaik-black/60"
              style={{ fontSize: "14px" }}
            >
              {t("role")}
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/jochemvanlaren/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-spaik-black/40 transition-colors hover:text-spaik-orange"
            aria-label="Jochem van Laren on LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
