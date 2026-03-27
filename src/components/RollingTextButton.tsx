"use client";

/**
 * Rolling text button — each letter rolls up on hover.
 * This matches the signature SPAIK/Framer button animation.
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
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-xl text-white transition-all hover:shadow-lg ${className}`}
      style={{
        backgroundColor: bgColor,
        padding: "14px 28px",
      }}
    >
      {/* Default text — slides up on hover */}
      <span
        className="flex transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full"
        aria-hidden="true"
      >
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-300"
            style={{
              fontFamily:
                '"SF Pro Text", -apple-system, sans-serif',
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "1.2em",
              transitionDelay: `${i * 15}ms`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>

      {/* Duplicate text — slides up from below */}
      <span
        className="absolute flex translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-0"
      >
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-300"
            style={{
              fontFamily:
                '"SF Pro Text", -apple-system, sans-serif',
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "1.2em",
              transitionDelay: `${i * 15}ms`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </a>
  );
}
