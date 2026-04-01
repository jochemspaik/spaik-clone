export type ServiceSlug = "inspiratie" | "fundamentals" | "kickstart" | "adoptie";

export interface ServiceData {
  slug: ServiceSlug;
  icon: string;
  texture: string;
  testimonialAvatar: string;
  featured?: boolean;
  /** Brand color used for accents, tints, badges */
  color: string;
  /** Card tint colors used in ServiceJourney */
  tint: { bg: string; ring: string; iconBg: string };
}

export const SERVICES: readonly ServiceData[] = [
  {
    slug: "inspiratie",
    icon: "/images/Discovery.svg",
    texture: "/images/Texture 2.webp",
    testimonialAvatar: "",
    color: "#2563eb",
    tint: { bg: "#E8EFFB", ring: "rgba(162,189,240,0.4)", iconBg: "rgba(162,189,240,0.3)" },
  },
  {
    slug: "fundamentals",
    icon: "/images/icon-fundamentals.svg",
    texture: "/images/Texture 2.webp",
    testimonialAvatar: "/images/case-maurick.jpg",
    color: "#22c55e",
    tint: { bg: "#EEF6F5", ring: "rgba(186,218,213,0.4)", iconBg: "rgba(186,218,213,0.3)" },
  },
  {
    slug: "kickstart",
    icon: "/images/icon-kickstart.svg",
    texture: "/images/Texture 1.webp",
    testimonialAvatar: "/images/case-vincent.jpg",
    color: "#FF7150",
    featured: true,
    tint: { bg: "#fff", ring: "rgba(255,113,80,0.3)", iconBg: "rgba(255,113,80,0.1)" },
  },
  {
    slug: "adoptie",
    icon: "/images/Building.svg",
    texture: "/images/Texture 3.webp",
    testimonialAvatar: "/images/case-johanneke.jpg",
    color: "#a78bfa",
    tint: { bg: "#F7F4FF", ring: "rgba(225,210,255,0.5)", iconBg: "rgba(225,210,255,0.4)" },
  },
] as const;

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

/** Look up a service by slug. Throws if not found. */
export function getService(slug: ServiceSlug): ServiceData {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service slug: ${slug}`);
  return service;
}
