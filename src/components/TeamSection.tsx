import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { ScrollStagger } from "@/components/ScrollStagger";
import { LinkedInIcon } from "@/components/icons";

const TEAM_MEMBERS = [
  {
    name: "Jochem van Laren",
    role: "Co-founder & CEO · Strategy",
    photo: "/images/team-jochem.png",
    linkedin: "https://www.linkedin.com/in/jochemvanlaren/",
  },
  {
    name: "Thijs Bongertman",
    role: "Co-founder · CTO · Development",
    photo: "/images/team-thijs.png",
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
    photo: "/images/team-ted.png",
    linkedin: "https://www.linkedin.com/in/ted-b-312b3263/",
  },
  {
    name: "Philip de Leeuwe",
    role: "Commercial Lead",
    photo: "/images/team-philip.png",
    linkedin: "https://www.linkedin.com/in/philip-de-leeuwe-b9601928/",
  },
  {
    name: "Gwen Roelofs",
    role: "Business Development",
    photo: "/images/team-gwen.png",
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
    photo: "/images/team-duco.jpeg",
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
  {
    name: "Joep de Caluwé",
    role: "GTM Advisor",
    photo: "/images/team-joep-advisor.png",
    linkedin: "https://nl.linkedin.com/in/joepdecaluwe",
  },
  {
    name: "Jan van Casteren",
    role: "Strategy Advisor",
    photo: "/images/team-jan-advisor.png",
    linkedin: "https://nl.linkedin.com/in/jan-van-casteren",
  },
] as const;


export async function TeamSection() {
  const t = await getTranslations("team");

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-white px-6 py-16 md:px-10 md:py-20"
    >
      {/* Decorative dot-grid texture — top-right */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{ width: "40%", zIndex: 0, opacity: 0.05 }}
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

        {/* Core team — 4-column grid matching original */}
        <ScrollStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerMs={80}>
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center rounded-xl p-6 transition-shadow duration-200 hover:shadow-sm"
            >
              <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <p
                className="font-sans text-spaik-black"
                style={{ fontSize: "16px", fontWeight: 700 }}
              >
                {member.name}
              </p>
              <p
                className="mt-1 text-center font-sans"
                style={{
                  fontSize: "14px",
                  color: member.role.includes("Advisor") ? "rgb(162, 189, 240)" : "rgba(0,0,0,0.6)",
                  fontWeight: member.role.includes("Advisor") ? 500 : 400,
                }}
              >
                {member.role}
              </p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex h-11 w-11 items-center justify-center rounded-full text-spaik-black/40 transition-colors hover:bg-spaik-gray hover:text-spaik-orange"
                aria-label={`${member.name} on LinkedIn`}
              >
                <LinkedInIcon />
              </a>
            </div>
          ))}
        </ScrollStagger>

      </div>
    </section>
  );
}
