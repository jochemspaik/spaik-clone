/**
 * Shared icon components used across multiple sections.
 * Keeps SVG definitions DRY and consistent.
 */

export function LinkedInIcon() {
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

/**
 * Check icon used in Discovery and AIDiscovery sections (20x20 viewBox).
 * Pass `color` to set the stroke, and optional `className`.
 */
export function CheckIcon({
  color = "#badad5",
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M16.667 5L7.5 14.167 3.333 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Dashed check icon used in ProblemSolutionSection (24x24 viewBox, different path).
 */
export function DashedCheckIcon({ color = "#8aa1cc" }: { color?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 13L9 18L20 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2 3"
      />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
