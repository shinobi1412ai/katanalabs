"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`nav-wrap${scrolled ? " scrolled" : ""}`} id="nav">
      <nav className="nav">
        <Link href="/" className="logo">
          <span className="logo-mark">武</span>
          KATANA<span style={{color:"var(--red)"}}>·</span>LABS
        </Link>

        <div className="nav-links">
          <Link href="/">Startseite</Link>
          <Link href="#services">Leistungen</Link>
          <Link href="#pricing">Preise</Link>
          <Link href="#testimonials">Über Uns</Link>
          <Link href="#contact">Kontakt</Link>
        </div>

        <div className="nav-right">
          <button className="nav-icon-btn" aria-label="link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </button>
          <Link href="#contact" className="nav-cta">KONTAKT</Link>
          <button className="nav-icon-btn" aria-label="menu">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 6h18M3 12h18M3 18h18"/>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}
