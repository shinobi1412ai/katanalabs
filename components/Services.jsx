import DropReveal from "./DropReveal";
import FadeUp from "./FadeUp";

const services = [
  { icon: "🌐", title: "Websites", desc: "Handgesetzte Websites mit Charakter — kein Template, kein 0815. Pixel-perfekt, Mobile-First, blitzschnell. SEO & Core Web Vitals inklusive." },
  { icon: "🎙️", title: "KI-Stimmen", desc: "Sprach-Agenten, die telefonieren, qualifizieren und Termine buchen — 24/7, mehrsprachig, trainiert auf deine Marke." },
  { icon: "💬", title: "Chatbots", desc: "Intelligente Assistenten für WhatsApp, Web & Instagram. Beraten, verkaufen, screenen — rund um die Uhr." },
  { icon: "⚙️", title: "CRM Automation", desc: "Leads automatisch qualifizieren, Workflows orchestrieren, Reports automatisieren. Weniger Klicks, mehr Umsatz." },
  { icon: "📱", title: "Apps & SaaS", desc: "Native Apps und SaaS-Plattformen mit klarem Fokus auf Conversion und Skalierung." },
  { icon: "🎬", title: "Cinematic Content", desc: "3D-Charaktere, Animationen, Trailer — Inhalte, die Marken größer wirken lassen, als sie sind." },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="section-inner">
        <FadeUp><div className="section-eyebrow">業 · LEISTUNGEN</div></FadeUp>
        <DropReveal
          text="Was wir scharf machen."
          as="h2"
          className="section-title"
          stagger={0.05}
        />
        <FadeUp delay={0.3}>
          <p className="section-sub">
            Sechs Klingen, eine Disziplin. Wir bauen, was du brauchst — nicht was wir verkaufen wollen.
          </p>
        </FadeUp>

        <div className="svc-grid">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.08} y={50}>
              <div className="svc-card">
                <div className="svc-icon">{s.icon}</div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
