import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../components/ui/FadeIn";
import AccordionItem from "../components/ui/AccordionItem";
import {
  hero,
  stats,
  profils,
  avantages,
  processus,
  temoignages,
  faq,
  ctaFinal,
} from "../data/proSanteData";

// ─── Animation variants ───────────────────────────────────────────────────

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemV = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// ─── Helpers ──────────────────────────────────────────────────────────────

function Eyebrow({ children, light = false }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${light ? "text-gray-400" : "text-gray-400"}`}>
      {children}
    </p>
  );
}

function SectionH2({ children, light = false }) {
  return (
    <h2 className={`font-display font-bold text-3xl sm:text-4xl leading-tight mb-4 ${light ? "text-white" : "text-gray-900"}`}>
      {children}
    </h2>
  );
}

// ─── Section 1 — Hero ─────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section id="candidature" className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            {hero.eyebrow}
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-6">
            {hero.h1Parts.before}
            <em className="not-italic italic">{hero.h1Parts.italic}</em>
            {hero.h1Parts.after}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
            {hero.subtitle}
          </p>

          <ul className="space-y-3 mb-10">
            {hero.checks.map((check) => (
              <li key={check} className="flex items-start gap-3 text-gray-300 text-sm">
                <span className="text-gray-500 shrink-0 mt-0.5">✓</span>
                {check}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              className="bg-white text-gray-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {hero.ctaPrimary}
            </button>
            <button
              type="button"
              className="border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors cursor-pointer"
            >
              {hero.ctaOutline}
            </button>
          </div>
        </motion.div>

        {/* Right — Formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="bg-gray-800 rounded-xl p-7 border border-gray-700"
        >
          <h2 className="font-display font-bold text-lg text-white mb-1">
            {hero.form.title}
          </h2>
          <p className="text-gray-400 text-sm mb-6">{hero.form.subtitle}</p>

          <div className="space-y-3">
            {/* Prénom + Nom */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder={hero.form.fields.prenom}
                disabled
                className="bg-gray-700 border border-gray-600 text-gray-400 placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm w-full cursor-not-allowed"
              />
              <input
                type="text"
                placeholder={hero.form.fields.nom}
                disabled
                className="bg-gray-700 border border-gray-600 text-gray-400 placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm w-full cursor-not-allowed"
              />
            </div>
            <input
              type="email"
              placeholder={hero.form.fields.email}
              disabled
              className="bg-gray-700 border border-gray-600 text-gray-400 placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm w-full cursor-not-allowed"
            />
            <input
              type="tel"
              placeholder={hero.form.fields.telephone}
              disabled
              className="bg-gray-700 border border-gray-600 text-gray-400 placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm w-full cursor-not-allowed"
            />
            <select
              disabled
              className="bg-gray-700 border border-gray-600 text-gray-500 rounded-lg px-4 py-2.5 text-sm w-full cursor-not-allowed appearance-none"
            >
              {hero.form.specialiteOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
            <select
              disabled
              className="bg-gray-700 border border-gray-600 text-gray-500 rounded-lg px-4 py-2.5 text-sm w-full cursor-not-allowed appearance-none"
            >
              {hero.form.disponibiliteOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
            <button
              type="button"
              disabled
              className="w-full bg-gray-600 text-white py-3 rounded-full font-semibold text-sm cursor-not-allowed"
            >
              {hero.form.cta}
            </button>
            <p className="text-gray-500 text-xs text-center">{hero.form.note}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 2 — Stats ────────────────────────────────────────────────────

function StatsSection() {
  return (
    <section className="bg-gray-900 border-t border-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-gray-800"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemV}
              className="flex flex-col items-center text-center px-4 py-4"
            >
              <span className="font-display font-bold text-3xl text-white mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-gray-400 leading-snug">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 4 — Profils recherchés ──────────────────────────────────────

function ProfilsSection() {
  return (
    <section id="profils" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{profils.eyebrow}</Eyebrow>
          <SectionH2>{profils.h2}</SectionH2>
          <p className="text-gray-500 text-base">{profils.subtitle}</p>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8"
        >
          {profils.items.map((p) => (
            <motion.div
              key={p.id}
              variants={itemV}
              className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center gap-3"
            >
              <div className="w-8 h-8 bg-gray-100 border border-gray-200 rounded-lg" />
              <p className="text-sm font-semibold text-gray-900 leading-snug">
                {p.label}
              </p>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  p.badgeStyle === "dark"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {p.badge}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <FadeIn>
          <p className="text-gray-500 text-sm">{profils.autresLabel}</p>
        </FadeIn>
      </div>
    </section>
  );
}


// ─── Section 5 — Avantages ────────────────────────────────────────────────

function AvantagesSection() {
  return (
    <section id="avantages" className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{avantages.eyebrow}</Eyebrow>
          <SectionH2>{avantages.h2}</SectionH2>
          <p className="text-gray-500 text-base">{avantages.subtitle}</p>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {avantages.items.map((a) => (
            <motion.div
              key={a.id}
              variants={itemV}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-lg mb-4" />
              <p className="font-semibold text-gray-900 text-sm mb-2">{a.title}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 6 — Processus ────────────────────────────────────────────────

function ProcessusSection() {
  return (
    <section id="processus" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-14">
          <Eyebrow>{processus.eyebrow}</Eyebrow>
          <SectionH2>{processus.h2}</SectionH2>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col lg:flex-row items-start gap-0"
        >
          {processus.steps.map((step, i) => (
            <Fragment key={step.id}>
              <motion.div variants={itemV} className="flex-1 px-2">
                <p className="font-display font-bold text-6xl text-gray-200 leading-none mb-2">
                  {step.number}
                </p>
                <p className="text-xs text-gray-500 mb-1">{step.day}</p>
                <p className="font-semibold text-gray-900 text-sm mb-1">
                  {step.title}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
              {i < processus.steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center px-2 pt-10 text-gray-300 text-xl">
                  →
                </div>
              )}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 7 — Témoignages ──────────────────────────────────────────────

function TemoignagesSection() {
  return (
    <section id="temoignages" className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12 text-center">
          <SectionH2>{temoignages.h2}</SectionH2>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {temoignages.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemV}
              className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col"
            >
              <p className="text-gray-400 text-sm mb-4 tracking-wide">{card.stars}</p>
              <p className="text-gray-700 text-sm leading-relaxed italic flex-1 mb-6">
                "{card.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                  <span className="text-xs font-semibold text-gray-600">
                    {card.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{card.author}</p>
                  <p className="text-xs text-gray-400">{card.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 8 — FAQ ──────────────────────────────────────────────────────

function FaqSection() {
  return (
    <section id="faq" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <SectionH2>{faq.h2}</SectionH2>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {faq.items.map((item) => (
            <motion.div key={item.id} variants={itemV}>
              <AccordionItem question={item.question} answer={item.answer} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 9 — CTA Final ────────────────────────────────────────────────

function CtaFinalSection() {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-5">
            {ctaFinal.h2}
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-10">
            {ctaFinal.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              className="bg-white text-gray-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {ctaFinal.ctaPrimary}
            </button>
            <button
              type="button"
              className="border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors cursor-pointer"
            >
              {ctaFinal.ctaOutline}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function ProSante() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProfilsSection />
      <AvantagesSection />
      <ProcessusSection />
      <TemoignagesSection />
      <FaqSection />
      <CtaFinalSection />
    </>
  );
}
