import Image from "next/image";

const LOGO_COUNT = 9;
const logos = Array.from({ length: LOGO_COUNT }, (_, i) => ({
  src: `/images/logo-ticker-${i + 1}.jpg`,
  alt: `Client logo ${i + 1}`,
}));

export function LogoTicker() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", padding: "16px 0" }}
    >
      <div className="flex animate-ticker" style={{ width: "max-content" }}>
        {/* First set */}
        {logos.map((logo, i) => (
          <div
            key={`a-${i}`}
            className="flex shrink-0 items-center"
            style={{ paddingLeft: 24, paddingRight: 24 }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={40}
              className="h-auto grayscale"
              style={{ width: 100 }}
            />
          </div>
        ))}
        {/* Duplicated set for seamless loop */}
        {logos.map((logo, i) => (
          <div
            key={`b-${i}`}
            className="flex shrink-0 items-center"
            style={{ paddingLeft: 24, paddingRight: 24 }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={40}
              className="h-auto grayscale"
              style={{ width: 100 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
