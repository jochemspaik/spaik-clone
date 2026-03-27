"use client";

/**
 * Rolling text button — text slides up on hover revealing duplicate underneath.
 * Matches the signature SPAIK/Framer button animation.
 */
export function RollingTextButton({
  text,
  href,
  variant = "primary",
  className = "",
}: {
  text: string;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const bgColor =
    variant === "primary" ? "#ff7150" : "rgba(255, 151, 128, 0.75)";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-xl text-white transition-shadow hover:shadow-lg ${className}`}
      style={{
        backgroundColor: bgColor,
        padding: "14px 28px",
        height: "48px",
      }}
    >
      {/* Container that clips the sliding text */}
      <span className="relative block overflow-hidden" style={{ lineHeight: "1.2em" }}>
        {/* Default text — slides up on hover */}
        <span
          className="block font-sans transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          {text}
        </span>

        {/* Duplicate — starts below, slides into view on hover */}
        <span
          className="absolute inset-x-0 top-full block font-sans transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full"
          aria-hidden="true"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          {text}
        </span>
      </span>
    </a>
  );
}
