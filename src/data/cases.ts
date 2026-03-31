export type CaseSlug = "movir" | "euphoria" | "reditus";

export interface CaseData {
  slug: CaseSlug;
  companyName: string;
  logoSrc: string;
  personSrc: string;
  bgColor: string;
  accentColor: string;
}

export const CASES: readonly CaseData[] = [
  {
    slug: "movir",
    companyName: "Movir",
    logoSrc: "/images/logo-movir.png",
    personSrc: "/images/case-maurick.jpg",
    bgColor: "#fef5f3",
    accentColor: "#ff7150",
  },
  {
    slug: "euphoria",
    companyName: "Euphoria Mobility",
    logoSrc: "/images/logo-euphoria.png",
    personSrc: "/images/case-vincent.jpg",
    bgColor: "#f7f4ff",
    accentColor: "#a78bfa",
  },
  {
    slug: "reditus",
    companyName: "Reditus",
    logoSrc: "/images/logo-reditus.png",
    personSrc: "/images/case-joran.png",
    bgColor: "#eef6f5",
    accentColor: "#34d399",
  },
] as const;

export const CASE_SLUGS = CASES.map((c) => c.slug);
