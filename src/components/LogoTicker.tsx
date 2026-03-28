import Image from "next/image";

const LOGO_COUNT = 9;
const logos = Array.from({ length: LOGO_COUNT }, (_, i) => ({
  src: `/images/logo-ticker-${i + 1}.jpg`,
  alt: `Client logo ${i + 1}`,
}));

export function LogoTicker() {
  return (
    <section className="w-full bg-white">
      <div
        className="relative mx-auto overflow-hidden"
        style={{ maxWidth: 1200, height: 150 }}
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "200px",
            background:
              "linear-gradient(270deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 100%)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "200px",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 100%)",
          }}
        />

        <div
          className="flex h-full items-center animate-ticker"
          style={{ width: "max-content" }}
        >
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
                className="grayscale opacity-60"
                style={{ width: 100, height: "auto", mixBlendMode: "multiply" }}
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
                className="grayscale opacity-60"
                style={{ width: 100, height: "auto", mixBlendMode: "multiply" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
