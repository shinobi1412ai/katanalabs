import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav-wrap">
      <div className="nav">
        <Link href="/" className="brand">
          KATANA<span className="red">·</span>LABS
        </Link>
        <div className="nav-links">
          <Link href="/#services">Leistungen</Link>
          <Link href="/#work">Arbeiten</Link>
          <Link href="/#contact">Kontakt</Link>
        </div>
        <Link href="/#contact" className="nav-cta">BOOK A CALL</Link>
      </div>
    </nav>
  );
}
