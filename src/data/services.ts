export type ServiceSlug = "strategie" | "fundamentals" | "kickstart" | "adoptie";

export interface ServiceData {
  slug: ServiceSlug;
  icon: string;
  texture: string;
  featured?: boolean;
  /** Brand color used for accents, tints, badges */
  color: string;
  /** Card tint colors used in ServiceJourney */
  tint: { bg: string; ring: string; iconBg: string };
}

export const SERVICES: readonly ServiceData[] = [
  {
    slug: "strategie",
    icon: "/images/Discovery.svg",
    texture: "/images/Texture 2.webp",
    color: "#2563eb",
    tint: { bg: "#E8EFFB", ring: "rgba(162,189,240,0.4)", iconBg: "rgba(162,189,240,0.3)" },
  },
  {
    slug: "fundamentals",
    icon: "/images/icon-fundamentals.svg",
    texture: "/images/Texture 2.webp",
    color: "#22c55e",
    tint: { bg: "#EEF6F5", ring: "rgba(186,218,213,0.4)", iconBg: "rgba(186,218,213,0.3)" },
  },
  {
    slug: "kickstart",
    icon: "/images/icon-kickstart.svg",
    texture: "/images/Texture 1.webp",
    color: "#FF7150",
    featured: true,
    tint: { bg: "#fff", ring: "rgba(255,113,80,0.3)", iconBg: "rgba(255,113,80,0.1)" },
  },
  {
    slug: "adoptie",
    icon: "/images/Building.svg",
    texture: "/images/Texture 3.webp",
    color: "#a78bfa",
    tint: { bg: "#F7F4FF", ring: "rgba(225,210,255,0.5)", iconBg: "rgba(225,210,255,0.4)" },
  },
] as const;

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
