import { useLocale } from "next-intl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "General Terms and Conditions of Spaik B.V.",
};

export default function LegalPage() {
  const locale = useLocale();
  return locale === "nl" ? <LegalNL /> : <LegalEN />;
}

function LegalEN() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-24 max-w-[800px] mx-auto">
      <h1
        className="font-heading text-[40px] leading-[44px] font-thin mb-8"
        style={{ fontWeight: 100 }}
      >
        General Terms and Conditions
      </h1>
      <p className="text-sm text-[#6f6e66] mb-12">Last updated: January 1, 2026</p>

      <div className="prose prose-lg max-w-none [&_h2]:font-heading [&_h2]:text-[24px] [&_h2]:font-thin [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-2 [&_ul]:list-disc [&_ul]:pl-6">
        <h2>Article 1. Applicability</h2>
        <ol>
          <li>The user of these Terms and Conditions (&ldquo;Terms&rdquo;) is Spaik B.V., located at Erasmusgracht 7-3 (1056BB) in Amsterdam, and registered in the trade register of the Chamber of Commerce under number: 95243763, duly represented by its jointly authorized directors, Mr. Van Laren, Bongertman, and Bolle (&ldquo;Spaik&rdquo;).</li>
          <li>These Terms were last amended on January 1, 2026, and apply to all offers, assignments, and agreements where Spaik B.V. provides services to business customers (B2B).</li>
          <li>Deviations from and additions to these Terms are only valid if agreed upon in writing.</li>
          <li>Any general or purchasing conditions of the client are explicitly rejected unless otherwise agreed upon in writing.</li>
          <li>Invalidity of a provision does not affect the validity of the remaining provisions.</li>
        </ol>

        <h2>Article 2. Services and Execution</h2>
        <ol>
          <li>Spaik provides, among other things, the following services:
            <ul>
              <li>Training for staff and leaders (from basic to advanced programs);</li>
              <li>Strategic advice and support during organizational changes (change management);</li>
              <li>Automation projects, including opportunity identification, implementation guidance, and collaboration with third parties.</li>
            </ul>
          </li>
          <li>Spaik has a best efforts obligation and will endeavor to provide the agreed services to the best of its ability.</li>
          <li>The client is responsible for providing accurate and complete information necessary for executing the services.</li>
          <li>Upon completion of the agreed work, Spaik will offer the results to the client for acceptance. If the client does not object within 14 calendar days, the results are deemed accepted.</li>
          <li>Spaik is entitled to subcontract or collaborate with third parties.</li>
          <li>If Spaik offers services through external suppliers or tools, the terms of those third parties also apply.</li>
        </ol>

        <h2>Article 3. Payment</h2>
        <ol>
          <li>Invoices must be paid within 14 days of the invoice date, unless otherwise agreed in writing.</li>
          <li>In case of late payment, the client is in default immediately and liable for statutory commercial interest.</li>
          <li>All collection costs are charged to the client.</li>
          <li>In the event of disputed invoices, the client must pay the undisputed part in time.</li>
          <li>Additional work and costs from expanded assignments can be charged separately.</li>
          <li>The client is not entitled to suspend or offset amounts without written agreement.</li>
        </ol>

        <h2>Article 4. Privacy and Data Processing</h2>
        <ol>
          <li>Spaik acts in accordance with the GDPR and will carefully process and secure personal data.</li>
          <li>The client is the data controller; Spaik is the processor.</li>
          <li>Spaik will only process personal data based on written instructions from the client.</li>
          <li>Spaik is entitled to engage subprocessors with equivalent obligations.</li>
          <li>In the event of a data breach, Spaik informs the client within 24 hours.</li>
          <li>Confidential information is used only for execution of the agreement.</li>
        </ol>

        <h2>Article 5. Confidentiality</h2>
        <ol>
          <li>Both parties commit to confidentiality for three years after termination.</li>
          <li>A separate NDA may be entered into to further define confidentiality.</li>
          <li>Obligations lapse when information becomes public or must be disclosed by law.</li>
        </ol>

        <h2>Article 6. Intellectual Property Rights</h2>
        <ol>
          <li>All intellectual property rights to delivered work are owned by Spaik.</li>
          <li>The client acquires a non-exclusive, non-transferable right to use.</li>
          <li>The right of use ends when the agreement is terminated.</li>
        </ol>

        <h2>Article 7. Penalty Clause</h2>
        <p>Violation of confidentiality or IP rights: EUR 10,000 per violation, plus EUR 1,000 per day the violation continues.</p>

        <h2>Article 8. Complaint Procedure</h2>
        <p>Complaints must be communicated within thirty days after the work has been performed and within fourteen days after receipt of invoice. Spaik will respond within fourteen days.</p>

        <h2>Article 9. Force Majeure</h2>
        <ol>
          <li>Force majeure includes: internet failures, cyber-attacks, government actions, pandemics, natural disasters, strikes.</li>
          <li>The invoking party shall notify immediately in writing.</li>
          <li>If lasting longer than two months, either party may dissolve the agreement.</li>
        </ol>

        <h2>Article 10. Liability</h2>
        <ol>
          <li>The client acknowledges limitations and risks of AI use.</li>
          <li>Shortcomings must be reported within 14 calendar days.</li>
          <li>Liability is limited to insurance payouts or 3 months of invoices (max EUR 25,000).</li>
          <li>Spaik is not liable for indirect damage.</li>
        </ol>

        <h2>Article 11. Termination and Cancellation</h2>
        <ol>
          <li>Either party may terminate with one month notice.</li>
          <li>Cancellation within 14 days: 50% due. Within 7 days: 100% due.</li>
          <li>Spaik may terminate immediately in cases of bankruptcy, fraud, or non-cooperation.</li>
        </ol>

        <h2>Article 12. Amendment of Terms</h2>
        <p>Spaik may change these Terms with 30 days notice. The client may terminate within 14 days if they disagree.</p>

        <h2>Article 13. Governing Law</h2>
        <p>All agreements are governed by Dutch law. Disputes are submitted to the competent court in Amsterdam.</p>
      </div>
    </main>
  );
}

function LegalNL() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-24 max-w-[800px] mx-auto">
      <h1
        className="font-heading text-[40px] leading-[44px] font-thin mb-8"
        style={{ fontWeight: 100 }}
      >
        Algemene Voorwaarden
      </h1>
      <p className="text-sm text-[#6f6e66] mb-12">Laatst bijgewerkt: 1 januari 2026</p>

      <div className="prose prose-lg max-w-none [&_h2]:font-heading [&_h2]:text-[24px] [&_h2]:font-thin [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-2 [&_ul]:list-disc [&_ul]:pl-6">
        <h2>Artikel 1. Toepasselijkheid</h2>
        <ol>
          <li>De gebruiker van deze Algemene Voorwaarden (&ldquo;Voorwaarden&rdquo;) is Spaik B.V., gevestigd aan de Erasmusgracht 7-3 (1056BB) te Amsterdam, ingeschreven bij de Kamer van Koophandel onder nummer: 95243763.</li>
          <li>Deze Voorwaarden zijn laatst gewijzigd op 1 januari 2026 en zijn van toepassing op alle aanbiedingen, opdrachten en overeenkomsten.</li>
          <li>Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen.</li>
          <li>Eventuele algemene of inkoopvoorwaarden van de opdrachtgever worden uitdrukkelijk van de hand gewezen.</li>
          <li>Nietigheid van een bepaling tast de geldigheid van de overige bepalingen niet aan.</li>
        </ol>

        <h2>Artikel 2. Dienstverlening en Uitvoering</h2>
        <ol>
          <li>Spaik biedt onder meer de volgende diensten aan: trainingen, strategisch advies, automatiseringsprojecten.</li>
          <li>Spaik heeft een inspanningsverbintenis.</li>
          <li>De opdrachtgever is verantwoordelijk voor juiste en volledige informatie.</li>
          <li>Na oplevering heeft de opdrachtgever 14 kalenderdagen om bezwaar te maken.</li>
        </ol>

        <h2>Artikel 3. Betaling</h2>
        <ol>
          <li>Facturen dienen binnen 14 dagen te worden voldaan.</li>
          <li>Bij niet-tijdige betaling is de opdrachtgever direct in verzuim.</li>
          <li>Alle incassokosten komen voor rekening van de opdrachtgever.</li>
        </ol>

        <h2>Artikel 4. Privacy en Gegevensverwerking</h2>
        <ol>
          <li>Spaik handelt conform de AVG.</li>
          <li>De opdrachtgever is verwerkingsverantwoordelijke; Spaik is verwerker.</li>
          <li>Bij een datalek informeert Spaik binnen 24 uur.</li>
        </ol>

        <h2>Artikel 5. Geheimhouding</h2>
        <p>Beide partijen verplichten zich tot geheimhouding voor drie jaar na beëindiging.</p>

        <h2>Artikel 6. Intellectueel Eigendom</h2>
        <p>Alle intellectuele eigendomsrechten op geleverd werk berusten bij Spaik.</p>

        <h2>Artikel 7. Boeteclausule</h2>
        <p>Bij overtreding van geheimhouding of IE-rechten: EUR 10.000 per overtreding, plus EUR 1.000 per dag.</p>

        <h2>Artikel 8. Klachtenprocedure</h2>
        <p>Klachten moeten binnen dertig dagen na uitvoering schriftelijk worden gemeld.</p>

        <h2>Artikel 9. Overmacht</h2>
        <p>Bij overmacht langer dan twee maanden kunnen beide partijen de overeenkomst ontbinden.</p>

        <h2>Artikel 10. Aansprakelijkheid</h2>
        <p>Aansprakelijkheid is beperkt tot het bedrag dat de verzekering uitkeert, of maximaal EUR 25.000.</p>

        <h2>Artikel 11. Beëindiging en Annulering</h2>
        <p>Opzegtermijn: één maand. Annulering binnen 14 dagen: 50%. Binnen 7 dagen: 100%.</p>

        <h2>Artikel 12. Wijziging Voorwaarden</h2>
        <p>Spaik mag deze Voorwaarden wijzigen met 30 dagen aankondigingstermijn.</p>

        <h2>Artikel 13. Toepasselijk Recht</h2>
        <p>Nederlands recht is van toepassing. Geschillen worden voorgelegd aan de rechtbank Amsterdam.</p>
      </div>
    </main>
  );
}
