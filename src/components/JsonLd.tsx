/** Escape JSON for safe embedding in a <script> tag. */
function safeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SPAIK",
    url: "https://www.spaik.io",
    logo: "https://www.spaik.io/images/Logo.svg",
    description:
      "SPAIK bouwt AI-oplossingen die je mensen écht gebruiken. Van automatisering tot AI-training.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Erasmusgracht 7-3",
      addressLocality: "Amsterdam",
      postalCode: "1056BB",
      addressCountry: "NL",
    },
    sameAs: ["https://www.linkedin.com/company/spaik-ai/"],
    founders: [
      { "@type": "Person", name: "Jochem van Laren" },
      { "@type": "Person", name: "Thijs Bongertman" },
      { "@type": "Person", name: "Jan Bolle" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}

export function BlogPostJsonLd({
  title,
  description,
  date,
  author,
  image,
  url,
}: {
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: date,
    author: {
      "@type": "Person",
      name: author,
    },
    image,
    url,
    publisher: {
      "@type": "Organization",
      name: "SPAIK",
      logo: {
        "@type": "ImageObject",
        url: "https://www.spaik.io/images/Logo.svg",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}
