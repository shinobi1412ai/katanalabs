"use client";

export default function MegaCTA() {
  return (
    <div className="mega-cta reveal">
      <img
        className="mega-cta-samurai"
        src="/images/hero-character.png"
        alt=""
      />
      <div className="mega-cta-inner">
        <div className="mega-label">挑 — DEINE HERAUSFORDERUNG</div>
        <h2>
          Bereit, deine<br/>
          <span className="gray">Marke</span> auf{" "}
          <span className="red">die nächste Stufe?</span>
        </h2>
        <p>
          Buche einen unverbindlichen Slot — 30 Minuten, kein Pitch, nur klare Antworten auf deine Fragen.
        </p>
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
          </svg>
          <span>BOOK A CALL</span>
        </button>
      </div>
    </div>
  );
}
