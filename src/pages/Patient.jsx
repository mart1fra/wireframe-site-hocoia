import { motion } from "framer-motion";
import FadeIn from "../components/ui/FadeIn";
import AccordionItem from "../components/ui/AccordionItem";
import { hero, etapes, specialites, temoignages, faq, ctaFinal } from "../data/patientData";

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

function Eyebrow({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
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

// ─── Section 1 — Hero + Recherche ─────────────────────────────────────────

function HeroSection() {
  return (
    <section id="calendrier" className="bg-gray-50 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 leading-tight mb-5">
            {hero.h1}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {hero.subtitle}
          </p>
        </motion.div>

        {/* Bloc recherche */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-6"
        >
          <div className="flex gap-3 items-center">
            <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <span className="text-sm text-gray-400">{hero.searchPlaceholder}</span>
            </div>
            <button
              type="button"
              className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-700 transition-colors cursor-pointer shrink-0"
            >
              {hero.searchCta}
            </button>
          </div>
        </motion.div>

        {/* Résultats placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="space-y-3 mb-6"
        >
          {hero.resultats.map((r) => (
            <div
              key={r.id}
              className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4 text-left"
            >
              {/* Date */}
              <div className="sm:w-32 shrink-0">
                <p className="font-semibold text-gray-900 text-sm">{r.date}</p>
                <p className="text-gray-500 text-xs mt-0.5">{r.heure}</p>
              </div>

              {/* Lieu */}
              <div className="flex-1">
                <p className="text-gray-900 text-sm font-medium">{r.lieu}</p>
                <p className="text-gray-500 text-xs mt-0.5">{r.specialites}</p>
              </div>

              {/* Boutons */}
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  className="bg-gray-900 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  {r.ctaPrimary}
                </button>
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 text-xs font-semibold px-4 py-2 rounded-full hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {r.ctaOutline}
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="text-sm text-gray-600 underline underline-offset-2 cursor-pointer hover:text-gray-900 transition-colors"
        >
          {hero.lienCalendrier}
        </motion.p>
      </div>
    </section>
  );
}

// ─── Section 2 — Comment ça marche ────────────────────────────────────────

function EtapesSection() {
  return (
    <section id="comment-ca-marche" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <Eyebrow>{etapes.eyebrow}</Eyebrow>
          <SectionH2>{etapes.h2}</SectionH2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">{etapes.subtitle}</p>
        </FadeIn>

        {/* Ligne de connexion (desktop) */}
        <div className="hidden lg:block relative mb-0">
          <div className="absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gray-200" />
        </div>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          {etapes.steps.map((step) => (
            <motion.div key={step.id} variants={itemV} className="relative">
              {/* Numéro */}
              <p className="font-display font-bold text-7xl text-gray-200 leading-none mb-3 select-none">
                {step.number}
              </p>

              {/* Label étape */}
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                {step.label}
              </p>

              {/* Titre */}
              <h3 className="font-display font-bold text-lg text-gray-900 mb-4">
                {step.title}
              </h3>

              {/* Points */}
              <ul className="space-y-2 mb-5">
                {step.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-gray-400 mt-0.5 shrink-0">—</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Bloc info */}
              <div className="bg-gray-50 rounded-lg px-4 py-3">
                <p className="text-xs text-gray-500 leading-relaxed">{step.info}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 3 — Spécialités ──────────────────────────────────────────────

function SpecialitesSection() {
  return (
    <section id="specialites" className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-12">
          <Eyebrow>{specialites.eyebrow}</Eyebrow>
          <SectionH2>{specialites.h2}</SectionH2>
          <p className="text-gray-500 text-base">{specialites.subtitle}</p>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-10"
        >
          {specialites.items.map((sp) => (
            <motion.div
              key={sp.id}
              variants={itemV}
              className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3"
            >
              <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-lg shrink-0" />
              <p className="font-semibold text-gray-900 text-sm">{sp.titre}</p>
              <p className="text-gray-500 text-xs leading-relaxed flex-1">{sp.description}</p>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-xs text-gray-400">{sp.duree}</span>
                <span className="text-xs text-gray-600 cursor-pointer hover:text-gray-900 transition-colors">
                  En savoir plus →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <FadeIn className="text-center">
          <span className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors underline underline-offset-2">
            {specialites.lienToutes}
          </span>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Section 4 — Témoignages ──────────────────────────────────────────────

function TemoignagesSection() {
  return (
    <section id="temoignages" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-12">
          <SectionH2>{temoignages.h2}</SectionH2>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {temoignages.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemV}
              className="bg-gray-50 border border-gray-200 rounded-xl p-8 flex flex-col"
            >
              <p className="text-gray-400 text-sm mb-4">{card.stars}</p>
              <p className="text-gray-700 text-sm leading-relaxed italic flex-1 mb-6">
                "{card.quote}"
              </p>
              <div>
                <p className="text-sm font-semibold text-gray-900">{card.author}</p>
                <p className="text-xs text-gray-500 mt-0.5">{card.lieu}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <FadeIn className="text-center">
          <p className="text-sm text-gray-500">{temoignages.statsLine}</p>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Section 5 — FAQ ──────────────────────────────────────────────────────

function FaqSection() {
  return (
    <section id="faq" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            {faq.eyebrow}
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 leading-tight">
            {faq.h2}
          </h2>
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

// ─── Section 6 — CTA Final ────────────────────────────────────────────────

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

export default function Patient() {
  return (
    <>
      <HeroSection />
      <EtapesSection />
      <SpecialitesSection />
      <TemoignagesSection />
      <FaqSection />
      <CtaFinalSection />
    </>
  );
}
