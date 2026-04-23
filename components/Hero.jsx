"use client";
import { motion } from "framer-motion";
import DropReveal from "./DropReveal";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <motion.div
          className="hero-eyebrow"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          侍 · DIGITAL CRAFTSMANSHIP
        </motion.div>

        <h1 className="hero-title" style={{ display: "block" }}>
          <DropReveal text="Marken die" as="span" stagger={0.08} />
          <br />
          <DropReveal
            text="auffallen."
            as="span"
            delay={0.15}
            stagger={0.08}
            className=""
          />
          <span style={{ color: "var(--red-bright)" }}>
            <DropReveal text=" zuschlagen." as="span" delay={0.4} stagger={0.08} />
          </span>
        </h1>

        <DropReveal
          text="Handgesetzte Websites, KI-Stimmen, Chatbots & CRM-Automation — gebaut wie ein Katana: präzise, scharf, ohne Schnörkel."
          as="p"
          className="hero-sub"
          delay={0.7}
          stagger={0.025}
          distance={40}
        />

        <motion.div
          className="hero-ctas"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="#contact" className="btn-primary">PROJEKT STARTEN →</a>
          <a href="#services" className="btn-ghost">LEISTUNGEN ANSEHEN</a>
        </motion.div>
      </div>
    </section>
  );
}
