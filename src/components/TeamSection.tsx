"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const TEAM_MEMBERS = [
  {
    name: "Jochem van Laren",
    role: "Co-founder & CEO · Strategy",
    photo: "/images/team-jochem.jpg",
    linkedin: "https://www.linkedin.com/in/jochemvanlaren/",
  },
  {
    name: "Thijs Bongertman",
    role: "Co-founder · CTO · Development",
    photo: "/images/team-thijs.jpeg",
    linkedin: "https://www.linkedin.com/in/thijsbongertman",
  },
  {
    name: "Jan Bolle",
    role: "Co-founder · CCO · Commercial",
    photo: "/images/team-jan.png",
    linkedin: "https://www.linkedin.com/in/janbolle",
  },
  {
    name: "Ted Blankers",
    role: "Adoption Lead",
    photo: "/images/team-ted.jpg",
    linkedin: "https://www.linkedin.com/in/ted-b-312b3263/",
  },
  {
    name: "Philip de Leeuwe",
    role: "Commercial Lead",
    photo: "/images/team-philip.jpg",
    linkedin: "https://www.linkedin.com/in/philip-de-leeuwe-b9601928/",
  },
  {
    name: "Gwen Roelofs",
    role: "Business Development",
    photo: "/images/team-gwen.jpg",
    linkedin: "https://www.linkedin.com/in/gwen-roelofs-a132295",
  },
  {
    name: "Brahma Behrend",
    role: "Automation Specialist",
    photo: "/images/team-brahma.png",
    linkedin: "https://www.linkedin.com/in/brahma-behrend-2aa46b204/",
  },
  {
    name: "Mike Krom",
    role: "Lead Development",
    photo: "/images/team-mike.png",
    linkedin: "https://www.linkedin.com/in/mike-krom-9031638b/",
  },
  {
    name: "Jasmijn de Groot",
    role: "Facilitation",
    photo: "/images/team-jasmijn.jpg",
    linkedin: "https://www.linkedin.com/in/jasmijndegroot/",
  },
  {
    name: "Duco Gaillard",
    role: "Data Scientist",
    photo: "/images/team-duco.jpg",
    linkedin: "https://www.linkedin.com/in/dhk-gaillard/",
  },
  {
    name: "Booy van Hees",
    role: "Facilitation & Change",
    photo: "/images/team-booy.png",
    linkedin: "https://www.linkedin.com/in/booyvanhees/",
  },
  {
    name: "Aron Rikels",
    role: "Marketing Analyst",
    photo: "/images/team-aron.jpg",
    linkedin: "https://www.linkedin.com/in/aronrikels/",
  },
  {
    name: "Mirjam Cassee",
    role: "Facilitation & Projects",
    photo: "/images/team-mirjam.jpg",
    linkedin: "https://www.linkedin.com/in/mirjamcass%C3%A9e/",
  },
  {
    name: "Jeroen Donders",
    role: "AI Engineer",
    photo: "/images/team-jeroen.jpg",
    linkedin: "https://www.linkedin.com/in/jeroen-donders-6a77ab4b/",
  },
] as const;

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

export function TeamSection() {
  const t = useTranslations("team");

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-white"
      style={{ padding: "80px 40px" }}
    >
      {/* Decorative dot-grid texture — top-right */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{ width: "40%", zIndex: 0, opacity: 0.12 }}
        aria-hidden="true"
      >
        <Image
          src="/images/Texture 1.webp"
          alt=""
          width={600}
          height={600}
          className="w-full h-auto object-contain"
          sizes="40vw"
        />
      </div>

      <div className="relative z-1 mx-auto" style={{ maxWidth: "1080px" }}>
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2
            className="font-heading text-spaik-black"
            style={{ fontSize: "32px", fontWeight: 100 }}
          >
            {t("title")}
          </h2>
          <p
            className="mx-auto mt-4 text-spaik-black/70"
            style={{ fontSize: "16px", maxWidth: "600px" }}
          >
            {t("subtitle")}
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center rounded-xl p-6 transition-shadow duration-200 hover:shadow-sm"
            >
              {/* Photo */}
              <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Info */}
              <p
                className="font-sans text-spaik-black"
                style={{ fontSize: "16px", fontWeight: 700 }}
              >
                {member.name}
              </p>
              <p
                className="mt-1 text-center font-sans text-spaik-black/60"
                style={{ fontSize: "14px" }}
              >
                {member.role}
              </p>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-spaik-black/40 transition-colors hover:text-spaik-orange"
                aria-label={`${member.name} on LinkedIn`}
              >
                <LinkedInIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
