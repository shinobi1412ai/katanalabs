"use client";
import { useState } from "react";
import DropReveal from "./DropReveal";
import FadeUp from "./FadeUp";

const INTERESTS = [
  "Website", "CRM", "KI-Stimme", "Chatbot", "SaaS", "Apps",
  "3D Character", "Animation", "Marketing-Content", "Cinematic-Trailer", "Andere",
];

export default function Contact() {
  const [selected, setSelected] = useState(new Set());
  const [form, setForm] = useState({ vorname: "", nachname: "", email: "", firma: "", msg: "" });

  const togglePill = (label) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    alert(`Danke ${form.vorname}! Wir melden uns innerhalb 24h.\n\nInteressen: ${[...selected].join(", ") || "—"}`);
  };

  return (
    <section className="contact-bg" id="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <FadeUp><div className="section-eyebrow">連 · KONTAKT</div></FadeUp>
          <DropReveal text="Erzähl uns von" as="h3" stagger={0.06} />
          <h3 style={{ marginTop: 0 }}>
            <span className="red">
              <DropReveal text="deinem Vorhaben." as="span" delay={0.25} stagger={0.06} />
            </span>
          </h3>
          <FadeUp delay={0.4}>
            <p>Egal ob du nur eine Frage hast oder direkt loslegen willst — wir antworten innerhalb eines Werktags. Garantiert.</p>
          </FadeUp>
          <FadeUp delay={0.5}>
            <div className="contact-item">
              <div className="contact-ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact-label">E-MAIL · 電郵</div>
                <div className="contact-val">info@katanalabs.de</div>
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.2} y={60}>
          <form className="form-card" onSubmit={submit}>
            <div className="form-field">
              <label>Was interessiert dich? <span style={{ opacity: 0.6, fontWeight: 400 }}>(Mehrfachauswahl möglich)</span></label>
              <div className="pill-row">
                {INTERESTS.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className={`pill${selected.has(label) ? " active" : ""}`}
                    onClick={() => togglePill(label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Vorname</label>
                <input type="text" placeholder="Max" required value={form.vorname} onChange={update("vorname")} />
              </div>
              <div className="form-field">
                <label>Nachname</label>
                <input type="text" placeholder="Mustermann" required value={form.nachname} onChange={update("nachname")} />
              </div>
            </div>
            <div className="form-field">
              <label>E-Mail</label>
              <input type="email" placeholder="max@firma.de" required value={form.email} onChange={update("email")} />
            </div>
            <div className="form-field">
              <label>Unternehmen</label>
              <input type="text" placeholder="Acme Inc." value={form.firma} onChange={update("firma")} />
            </div>
            <div className="form-field">
              <label>Erzähl uns mehr</label>
              <textarea placeholder="Worum geht's? Welches Problem soll gelöst werden?" value={form.msg} onChange={update("msg")} />
            </div>

            <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              ANFRAGE SENDEN →
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
