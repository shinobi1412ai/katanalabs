"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const vid1Ref = useRef(null);

  return (
    <header className="hero">
      {/* Video backgrounds */}
      <video
        ref={vid1Ref}
        className="hero-video-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-video-scrim" />
      <span className="hero-kanji-bg">武</span>

      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-meta">
            2026 — <span className="red-text">VISIBITLY</span> · DIGITALE AGENTUR
          </div>

          <h1>
            <span className="line">Unsichtbar</span>
            <span className="line gray">im Netz?</span>
            <span className="line">Wir machen</span>
            <span className="line"><span className="red">dich sichtbar.</span></span>
          </h1>

          <p className="hero-lede">
            Webdesign, KI Automation, KI Stimme, CRM, WordPress, Apps &amp; SaaS —{" "}
            <span className="red-text">alles aus einer Klinge.</span>
          </p>

          <div className="hero-cta-area">
            <button
              className="brush-btn"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <svg className="brush-bg" viewBox="0 0 320 120" preserveAspectRatio="none">
                <path
                  d="M 12,40 C 28,18 60,12 100,18 C 145,24 180,8 220,14 C 260,20 295,18 312,32 C 318,52 305,72 285,88 C 245,104 200,108 150,102 C 95,96 50,108 22,98 C 4,84 2,62 12,40 Z"
                  fill="#ed1c24"
                />
                <circle cx="14" cy="60" r="3" fill="#ed1c24"/>
                <circle cx="306" cy="76" r="2.5" fill="#ed1c24"/>
                <ellipse cx="318" cy="48" rx="4" ry="2" fill="#ed1c24" transform="rotate(20 318 48)"/>
                <ellipse cx="6" cy="84" rx="5" ry="2" fill="#ed1c24" transform="rotate(-15 6 84)"/>
              </svg>
              <span>SICHTBAR WERDEN</span>
            </button>

            <a href="#work" className="btn-ghost">
              <span className="play-icon">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </span>
              SHOWREEL · 02:14
            </a>
          </div>
        </div>
      </div>

      <div className="hero-strip">
        <div className="hero-stat">
          <div style={{ display: "flex", gap: "48px", alignItems: "flex-end" }}>
            <div>
              <div className="big">200<span className="red">+</span></div>
              <div className="label">PROJEKTE</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="big">20 <span className="red">JAHRE</span></div>
              <div className="label">ERFAHRUNG</div>
            </div>
          </div>
        </div>
        <div className="hero-date">
          <div className="num">2003</div>
          <div className="jp">
            In dieser Zeit<br/>
            wurde angefangen!
          </div>
        </div>
      </div>
    </header>
  );
}
