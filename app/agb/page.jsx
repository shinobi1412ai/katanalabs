import LegalShell from "@/components/LegalShell";
import Link from "next/link";

export const metadata = { title: "AGB — Katana Labs" };

export default function AGB() {
  return (
    <LegalShell eyebrow="約 · BEDINGUNGEN" title="Allgemeine Geschäftsbedingungen" updated="Stand: April 2026">
      <h2>§ 1 Geltungsbereich</h2>
      <p>(1) Diese AGB gelten für sämtliche Verträge zwischen dem im <Link href="/impressum">Impressum</Link> genannten Anbieter (nachfolgend „Auftragnehmer") und seinen Kunden (nachfolgend „Auftraggeber") über die Erbringung digitaler Dienstleistungen, insbesondere Webdesign, Softwareentwicklung, KI-Lösungen, Automation, Branding und Beratung.</p>
      <p>(2) Abweichende AGB des Auftraggebers werden nur dann Vertragsbestandteil, wenn ihrer Geltung ausdrücklich schriftlich zugestimmt wurde.</p>
      <p>(3) Verbraucher i. S. d. § 13 BGB sind natürliche Personen ohne gewerblichen Zweck. Unternehmer sind alle anderen Personen.</p>

      <h2>§ 2 Vertragsschluss</h2>
      <p>(1) Angebote sind freibleibend, sofern nicht ausdrücklich verbindlich.</p>
      <p>(2) Der Vertrag kommt durch schriftliche Auftragsbestätigung oder durch Aufnahme der Leistung zustande. Die Schriftform wird auch durch E-Mail gewahrt.</p>
      <p>(3) Mündliche Nebenabreden bedürfen schriftlicher Bestätigung.</p>

      <h2>§ 3 Leistungsumfang</h2>
      <p>(1) Der Leistungsumfang ergibt sich aus Angebot bzw. Auftragsbestätigung. Änderungen bedürfen schriftlicher Vereinbarung und können Vergütung und Termine anpassen.</p>
      <p>(2) Der Auftragnehmer ist berechtigt, Subunternehmer einzusetzen.</p>
      <p>(3) Geschuldet wird die ordnungsgemäße Leistungserbringung, nicht ein bestimmter wirtschaftlicher Erfolg.</p>

      <h2>§ 4 Mitwirkungspflichten</h2>
      <p>(1) Der Auftraggeber stellt alle erforderlichen Inhalte, Zugänge und Materialien rechtzeitig bereit.</p>
      <p>(2) Er sichert zu, dass diese frei von Rechten Dritter sind und stellt den Auftragnehmer von Ansprüchen Dritter frei.</p>
      <p>(3) Verzögerungen durch unterlassene Mitwirkung gehen zu Lasten des Auftraggebers.</p>

      <h2>§ 5 Liefertermine</h2>
      <p>(1) Termine sind nur verbindlich bei ausdrücklich schriftlicher Vereinbarung.</p>
      <p>(2) Höhere Gewalt verschiebt die Leistung um die Dauer der Behinderung zzgl. Anlaufzeit.</p>

      <h2>§ 6 Vergütung & Zahlung</h2>
      <p>(1) Es gelten die im Angebot vereinbarten Preise, in Euro, ggf. zzgl. Umsatzsteuer.</p>
      <p>(2) Bei Aufträgen über 1.000 € kann eine Anzahlung von 50 % verlangt werden.</p>
      <p>(3) Rechnungen sind binnen 14 Tagen ohne Abzug fällig.</p>
      <p>(4) Bei Verzug: gesetzliche Verzugszinsen + Mahnpauschale gem. § 288 Abs. 5 BGB.</p>
      <p>(5) Laufende Leistungen (Hosting, Wartung, KI-Dienste) können bei Zahlungsverzug eingestellt werden.</p>

      <h2>§ 7 Nutzungsrechte</h2>
      <p>(1) Nach vollständiger Bezahlung erhält der Auftraggeber ein einfaches, nicht übertragbares Nutzungsrecht für den vereinbarten Zweck.</p>
      <p>(2) Bis zur vollständigen Bezahlung verbleiben alle Rechte beim Auftragnehmer.</p>
      <p>(3) Der Auftragnehmer darf erbrachte Leistungen zu Referenzzwecken nennen, sofern der Auftraggeber nicht binnen 14 Tagen nach Abschluss schriftlich widerspricht.</p>

      <h2>§ 8 Gewährleistung</h2>
      <p>(1) Mängel sind unverzüglich, spätestens binnen 14 Tagen nach Übergabe, schriftlich anzuzeigen.</p>
      <p>(2) Der Auftragnehmer hat zunächst Anspruch auf Nacherfüllung. Schlägt diese zweimal fehl, kann der Auftraggeber mindern oder zurücktreten.</p>

      <h2>§ 9 Haftung</h2>
      <p>(1) Unbeschränkte Haftung bei Vorsatz, grober Fahrlässigkeit und bei Verletzung von Leben, Körper, Gesundheit.</p>
      <p>(2) Bei einfacher Fahrlässigkeit nur bei Verletzung wesentlicher Vertragspflichten und begrenzt auf den vorhersehbaren Schaden.</p>
      <p>(3) Keine Haftung für entgangenen Gewinn, mittelbare Schäden, Datenverluste oder Folgeschäden.</p>
      <p>(4) Keine Haftung für Inhalte des Auftraggebers oder Funktionsstörungen Dritter (Hosting, APIs, Plattform-Updates).</p>

      <h2>§ 10 Vertraulichkeit</h2>
      <p>Beide Parteien behandeln vertrauliche Informationen vertraulich, auch nach Beendigung der Zusammenarbeit.</p>

      <h2>§ 11 Laufzeit & Kündigung</h2>
      <p>(1) Einzelaufträge enden mit Abnahme.</p>
      <p>(2) Dauerschuldverhältnisse sind mit 30 Tagen zum Monatsende kündbar.</p>
      <p>(3) Außerordentliche Kündigung aus wichtigem Grund bleibt unberührt.</p>

      <h2>§ 12 Schlussbestimmungen</h2>
      <p>(1) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Bei Verbrauchern bleiben zwingende Verbraucherschutzvorschriften des Aufenthaltsstaats unberührt.</p>
      <p>(2) Erfüllungsort und Gerichtsstand: Geschäftssitz des Auftragnehmers, soweit gesetzlich zulässig.</p>
      <p>(3) Salvatorische Klausel: Unwirksame Bestimmungen lassen die Wirksamkeit der übrigen unberührt.</p>
    </LegalShell>
  );
}
