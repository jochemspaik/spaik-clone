"use client";

import { useTranslations } from "next-intl";
import { ServiceCheckIcon, ShieldIcon } from "@/components/icons";
import { BOOK_CALL_URL } from "@/lib/constants";

export function AdoptieBrochure() {
  const t = useTranslations("diensten");

  return (
    <>
      <style jsx global>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .page-break { break-before: page; }
          @page { margin: 18mm 15mm; size: A4; }
        }
        @media screen {
          .print-only { display: none; }
        }
      `}</style>

      {/* Print button — screen only */}
      <div className="no-print fixed top-6 right-6 z-50">
        <button
          onClick={() => window.print()}
          className="rounded-xl px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:opacity-90 hover:shadow-xl"
          style={{ backgroundColor: "#FF7150" }}
        >
          {t("brochure.printButton")}
        </button>
      </div>

      <div className="mx-auto px-8 py-12" style={{ maxWidth: 800, color: "#0b0b0b" }}>

        {/* ---- HEADER ---- */}
        <div className="flex items-center justify-between pb-6" style={{ borderBottom: "2px solid #FF7150" }}>
          <img src="/images/Logo.svg" alt="SPAIK" style={{ height: 28 }} />
          <span style={{ fontSize: 13, color: "rgba(0,0,0,0.4)" }}>{t("brochure.prepared")}</span>
        </div>

        {/* ---- TITLE BLOCK ---- */}
        <div style={{ marginTop: 48 }}>
          <h1 className="font-heading" style={{ fontSize: 40, fontWeight: 100, lineHeight: 1.15 }}>
            {t("brochure.documentTitle")}
          </h1>
          <p style={{ fontSize: 20, color: "rgba(0,0,0,0.55)", marginTop: 8 }}>
            {t("brochure.documentSubtitle")}
          </p>

          {/* Metrics */}
          <div className="flex gap-10" style={{ marginTop: 32 }}>
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <p className="font-heading" style={{ fontSize: 32, fontWeight: 100, color: "#FF7150" }}>
                  {t(`brochure.metric${i}value`)}
                </p>
                <p style={{ fontSize: 13, color: "rgba(0,0,0,0.5)", marginTop: 2 }}>
                  {t(`brochure.metric${i}label`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- PROBLEM / SOLUTION ---- */}
        <div style={{ marginTop: 48 }}>
          <h2 className="font-heading" style={{ fontSize: 24, fontWeight: 100 }}>
            {t("brochure.introTitle")}
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, marginTop: 12, color: "rgba(0,0,0,0.75)" }}>
            {t("brochure.introBody")}
          </p>

          <h2 className="font-heading" style={{ fontSize: 24, fontWeight: 100, marginTop: 32 }}>
            {t("brochure.introTitle2")}
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, marginTop: 12, color: "rgba(0,0,0,0.75)" }}>
            {t("brochure.introBody2")}
          </p>
        </div>

        {/* ---- TANDEM MODEL ---- */}
        <div style={{ marginTop: 40 }}>
          <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 100 }}>
            {t("brochure.tandemTitle")}
          </h3>
          <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 8, color: "rgba(0,0,0,0.65)" }}>
            {t("brochure.tandemBody")}
          </p>
          <img
            src="/images/tandem-model.png"
            alt="Het Tandem Model"
            style={{ maxWidth: 520, margin: "24px auto", display: "block" }}
          />
        </div>

        {/* ---- INVESTMENT TABLE ---- page break */}
        <div className="page-break" style={{ marginTop: 48 }}>
          <h2 className="font-heading" style={{ fontSize: 24, fontWeight: 100 }}>
            {t("brochure.investmentTitle")}
          </h2>

          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 24 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #0b0b0b" }}>
                <th style={{ textAlign: "left", padding: "12px 12px", fontSize: 13, fontWeight: 400 }} />
                <th style={{ textAlign: "left", padding: "12px 12px", fontSize: 14, fontWeight: 600 }}>
                  {t("brochure.tier1Name")}
                </th>
                <th style={{ textAlign: "left", padding: "12px 12px", fontSize: 14, fontWeight: 600, position: "relative" }}>
                  {t("brochure.tier2Name")}
                  <span
                    style={{
                      position: "absolute",
                      top: 4,
                      right: 8,
                      backgroundColor: "#FF7150",
                      color: "#fff",
                      fontSize: 10,
                      fontWeight: 500,
                      padding: "2px 8px",
                      borderRadius: 99,
                    }}
                  >
                    {t("brochure.tier2Badge")}
                  </span>
                </th>
                <th style={{ textAlign: "left", padding: "12px 12px", fontSize: 14, fontWeight: 600 }}>
                  {t("brochure.tier3Name")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "10px 12px", fontSize: 13, color: "rgba(0,0,0,0.45)", fontWeight: 500 }}>Scope</td>
                <td style={{ padding: "10px 12px", fontSize: 14 }}>{t("brochure.tier1Scope")}</td>
                <td style={{ padding: "10px 12px", fontSize: 14 }}>{t("brochure.tier2Scope")}</td>
                <td style={{ padding: "10px 12px", fontSize: 14 }}>{t("brochure.tier3Scope")}</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "10px 12px", fontSize: 13, color: "rgba(0,0,0,0.45)", fontWeight: 500 }}>Per maand</td>
                <td style={{ padding: "10px 12px", fontSize: 14, fontWeight: 600 }}>{t("brochure.tier1Price")}</td>
                <td style={{ padding: "10px 12px", fontSize: 14, fontWeight: 600, color: "#FF7150" }}>{t("brochure.tier2Price")}</td>
                <td style={{ padding: "10px 12px", fontSize: 14, fontWeight: 600 }}>{t("brochure.tier3Price")}</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", fontSize: 13, color: "rgba(0,0,0,0.45)", fontWeight: 500 }}>Totaal</td>
                <td style={{ padding: "10px 12px", fontSize: 14, color: "rgba(0,0,0,0.6)" }}>{t("brochure.tier1Total")}</td>
                <td style={{ padding: "10px 12px", fontSize: 14, color: "rgba(0,0,0,0.6)" }}>{t("brochure.tier2Total")}</td>
                <td style={{ padding: "10px 12px", fontSize: 14, color: "rgba(0,0,0,0.6)" }}>{t("brochure.tier3Total")}</td>
              </tr>
            </tbody>
          </table>

          <p style={{ fontSize: 13, color: "rgba(0,0,0,0.45)", fontStyle: "italic", marginTop: 12 }}>
            {t("brochure.tierNote")}
          </p>
        </div>

        {/* ---- OUTCOMES ---- */}
        <div style={{ marginTop: 40 }}>
          <h2 className="font-heading" style={{ fontSize: 24, fontWeight: 100 }}>
            {t("brochure.outcomesTitle")}
          </h2>
          <div className="flex flex-col" style={{ marginTop: 16 }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-start gap-3" style={{ padding: "8px 0" }}>
                <ServiceCheckIcon color="#FF7150" size={18} />
                <span style={{ fontSize: 15, lineHeight: 1.6 }}>{t(`brochure.outcome${i}`)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---- TIMELINE ---- */}
        <div style={{ marginTop: 40 }}>
          <h2 className="font-heading" style={{ fontSize: 24, fontWeight: 100 }}>
            {t("brochure.timelineTitle")}
          </h2>
          <div className="grid grid-cols-2 gap-4" style={{ marginTop: 20 }}>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  padding: 16,
                  backgroundColor: i <= 2 ? "rgba(255,113,80,0.04)" : "transparent",
                  borderRadius: 12,
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <p style={{ fontSize: 12, color: "#FF7150", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {t(`brochure.phase${i}`)}
                </p>
                <p className="font-heading" style={{ fontSize: 18, fontWeight: 100, marginTop: 4 }}>
                  {t(`brochure.phase${i}Title`)}
                </p>
                <p style={{ fontSize: 13, color: "rgba(0,0,0,0.6)", marginTop: 4, lineHeight: 1.4 }}>
                  {t(`brochure.phase${i}Body`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- GOVERNANCE + RISK REVERSALS ---- */}
        <div style={{ marginTop: 40 }}>
          <div style={{ borderLeft: "3px solid #22c55e", paddingLeft: 16, marginBottom: 24 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600 }}>{t("brochure.governanceTitle")}</h3>
            <p style={{ fontSize: 14, color: "rgba(0,0,0,0.65)", marginTop: 8, lineHeight: 1.5 }}>
              {t("brochure.governanceBody")}
            </p>
          </div>

          <h2 className="font-heading" style={{ fontSize: 24, fontWeight: 100, marginTop: 32 }}>
            {t("brochure.riskTitle")}
          </h2>
          <div className="flex flex-col gap-4" style={{ marginTop: 16 }}>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-3">
                <ShieldIcon />
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600 }}>{t(`brochure.risk${i}Title`)}</p>
                  <p style={{ fontSize: 14, color: "rgba(0,0,0,0.6)", marginTop: 2, lineHeight: 1.5 }}>
                    {t(`brochure.risk${i}Body`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- CREDIBILITY ---- page break */}
        <div className="page-break" style={{ marginTop: 48 }}>
          <h2 className="font-heading" style={{ fontSize: 24, fontWeight: 100 }}>
            {t("brochure.aboutTitle")}
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, marginTop: 12, color: "rgba(0,0,0,0.75)" }}>
            {t("brochure.aboutBody")}
          </p>

          {/* Testimonial */}
          <blockquote
            style={{
              marginTop: 24,
              padding: 24,
              backgroundColor: "rgba(255,113,80,0.03)",
              borderRadius: 12,
              borderLeft: "3px solid #FF7150",
            }}
          >
            <p style={{ fontSize: 16, fontStyle: "italic", lineHeight: 1.6 }}>
              &ldquo;{t("brochure.testimonialQuote")}&rdquo;
            </p>
            <p style={{ marginTop: 12, fontSize: 14, fontWeight: 600 }}>{t("brochure.testimonialAuthor")}</p>
            <p style={{ fontSize: 13, color: "rgba(0,0,0,0.5)" }}>{t("brochure.testimonialRole")}</p>
          </blockquote>
        </div>

        {/* ---- CTA ---- */}
        <div style={{ marginTop: 40 }}>
          <h2 className="font-heading" style={{ fontSize: 24, fontWeight: 100 }}>
            {t("brochure.ctaTitle")}
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, marginTop: 12, color: "rgba(0,0,0,0.75)" }}>
            {t("brochure.ctaBody")}
          </p>

          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              marginTop: 24,
              padding: 24,
              backgroundColor: "#0b0b0b",
              borderRadius: 12,
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <div className="flex items-center gap-4">
              <img
                src="/images/team-jochem.png"
                alt="Jochem van Laren"
                className="rounded-full object-cover"
                style={{ width: 56, height: 56 }}
              />
              <div className="flex-1">
                <p style={{ fontSize: 16, fontWeight: 600 }}>{t("brochure.ctaButton")}</p>
                <p style={{ fontSize: 14, opacity: 0.6, marginTop: 2 }}>Jochem van Laren, Co-founder</p>
                <p style={{ fontSize: 13, opacity: 0.4, marginTop: 2 }}>30 min · Vrijblijvend</p>
              </div>
              <img src="/images/Logo.svg" alt="SPAIK" style={{ height: 22, filter: "invert(1)" }} />
            </div>
          </a>
        </div>

        {/* ---- FOOTER ---- */}
        <div style={{ marginTop: 48, paddingTop: 16, borderTop: "1px solid rgba(0,0,0,0.08)", textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "rgba(0,0,0,0.3)" }}>{t("brochure.footer")}</p>
        </div>
      </div>
    </>
  );
}
