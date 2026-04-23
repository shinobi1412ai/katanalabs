import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand footer-col">
          <Link href="/" className="brand">KATANA<span className="red">·</span>LABS</Link>
          <p>Wir bauen digitale Erlebnisse, die Marken voranbringen — von der Idee bis zum Live-Launch und darüber hinaus.</p>
          <div className="jp-quote">「品質 · 速度 · 名誉」</div>
        </div>
        <div className="footer-col">
          <h4>LEISTUNGEN</h4>
          <Link href="/#services">KI-Stimmen</Link>
          <Link href="/#services">Chatbots</Link>
          <Link href="/#services">Webdesign</Link>
          <Link href="/#services">CRM</Link>
        </div>
        <div className="footer-col">
          <h4>STUDIO</h4>
          <Link href="/#contact">Über uns</Link>
          <Link href="/#contact">Kontakt</Link>
        </div>
        <div className="footer-col">
          <h4>RESSOURCEN</h4>
          <Link href="/#services">Fallstudien</Link>
          <Link href="/#contact">FAQ</Link>
        </div>
        <div className="footer-col">
          <h4>LEGAL</h4>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/agb">AGB</Link>
          <Link href="/widerruf">Widerrufsrecht</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Katana Labs · Powered by ChainVision Games FZCO</span>
        <span>Made with 刀 in Berlin & Dubai</span>
      </div>
    </footer>
  );
}
