import { Fragment } from "react";
import { motion } from "framer-motion";
import FadeIn      from "../components/ui/FadeIn";
import AccordionItem from "../components/ui/AccordionItem";
import {
  hero,
  logos,
  useCase,
  stats,
  processus,
  ressources,
  faq,
  ctaFinal,
} from "../data/entrepriseData";

// ─── Variants réutilisables ───────────────────────────────────────────────

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemV = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// ─── Helpers ──────────────────────────────────────────────────────────────

function Eyebrow({ children }) {
  return (
    <p className="text-[11px] uppercase tracking-widest font-medium text-gray-400 mb-3">
      {children}
    </p>
  );
}

function SectionH2({ children, light = false }) {
  return (
    <h2 className={`font-display font-bold text-3xl leading-tight ${light ? "text-white" : "text-gray-900"}`}>
      {children}
    </h2>
  );
}

// ─── 1. HERO ──────────────────────────────────────────────────────────────

function HeroSection() {
  const fieldCls =
    "w-full px-3.5 py-2.5 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg outline-none focus:border-gray-400 placeholder:text-gray-400 transition-colors duration-150";

  return (
    <section id="contact" className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-[3fr_2fr] gap-16 items-start">

        {/* Colonne gauche */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={listV}
          className="pt-4"
        >
          <motion.p variants={itemV} className="text-[11px] uppercase tracking-widest font-medium text-gray-400 mb-5">
            {hero.eyebrow}
          </motion.p>

          <motion.h1 variants={itemV} className="font-display font-bold text-5xl leading-tight text-white mb-6">
            {hero.h1}
          </motion.h1>

          <motion.p variants={itemV} className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
            {hero.subtitle}
          </motion.p>

          <motion.ul variants={itemV} className="space-y-3 mb-10">
            {hero.checks.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="text-gray-500 mt-0.5 shrink-0">✓</span>
                {c}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={itemV} className="flex items-center gap-3 flex-wrap">
            <button className="px-6 py-2.5 text-sm font-medium text-white border border-white/25 rounded-full hover:bg-white/10 transition-colors duration-150 cursor-pointer">
              {hero.ctaOutline}
            </button>
            <button className="px-6 py-2.5 text-sm font-medium text-gray-400 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors duration-150 cursor-pointer">
              {hero.ctaGhost}
            </button>
          </motion.div>
        </motion.div>

        {/* Colonne droite — formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          className="bg-white rounded-2xl p-8"
        >
          <h3 className="font-display font-bold text-xl text-gray-900 mb-1">{hero.form.title}</h3>
          <p className="text-sm text-gray-500 mb-6">{hero.form.subtitle}</p>

          <div className="space-y-3">
            {/* Prénom + Nom */}
            <div className="grid grid-cols-2 gap-3">
              <input className={fieldCls} type="text" placeholder="Prénom" />
              <input className={fieldCls} type="text" placeholder="Nom" />
            </div>

            {/* Email */}
            <input className={fieldCls} type="email" placeholder="Email professionnel" />

            {/* Vous êtes */}
            <select defaultValue="" className={fieldCls}>
              <option value="" disabled>Vous êtes…</option>
              {hero.form.roleOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>

            {/* Taille + Besoin */}
            <div className="grid grid-cols-2 gap-3">
              <select defaultValue="" className={fieldCls}>
                <option value="" disabled>Taille structure</option>
                {hero.form.sizeOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <select defaultValue="" className={fieldCls}>
                <option value="" disabled>Besoin</option>
                {hero.form.needOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="button"
              className="w-full py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-150 cursor-pointer mt-1"
            >
              {hero.form.cta}
            </button>
          </div>

          <p className="text-[11px] text-gray-400 text-center mt-4">{hero.form.note}</p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. BANDE LOGOS ───────────────────────────────────────────────────────

function LogosSection() {
  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <FadeIn className="text-center mb-6">
          <p className="text-xs text-gray-500 font-medium">{logos.label}</p>
        </FadeIn>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {logos.items.map((name) => (
            <motion.span
              key={name}
              variants={itemV}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded-full"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3. USE CASE ──────────────────────────────────────────────────────────

function UseCaseSection() {
  return (
    <section id="use-case" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 gap-16 items-start">

        {/* Gauche : features */}
        <div>
          <FadeIn>
            <Eyebrow>{useCase.eyebrow}</Eyebrow>
            <SectionH2>{useCase.h2}</SectionH2>
            <p className="text-gray-600 mt-4 mb-10 leading-relaxed">{useCase.intro}</p>
          </FadeIn>

          <motion.ul
            className="space-y-6 mb-10"
            variants={listV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {useCase.features.map((f) => (
              <motion.li key={f.id} variants={itemV} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 leading-tight">{f.title}</p>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{f.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <FadeIn delay={0.2} className="flex items-center gap-3 flex-wrap">
            <button className="px-6 py-2.5 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-150 cursor-pointer">
              {useCase.ctaPrimary}
            </button>
            <button className="px-6 py-2.5 text-sm font-medium text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
              {useCase.ctaOutline}
            </button>
          </FadeIn>
        </div>

        {/* Droite : cas clients */}
        <div id="cas-clients" className="contents">
        <FadeIn delay={0.1} className="bg-gray-50 rounded-2xl p-6 space-y-5">
          {useCase.casClients.map((card) => (
            <div key={card.id} className="bg-white border border-gray-200 rounded-xl p-6">
              <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 ${card.active ? "bg-gray-100 text-gray-600" : "bg-gray-50 text-gray-400"}`}>
                {card.tag}
              </span>

              <h3 className={`font-display font-semibold text-sm leading-snug mb-2 ${card.active ? "text-gray-900" : "text-gray-400"}`}>
                {card.title}
              </h3>
              <p className={`text-xs leading-relaxed mb-5 ${card.active ? "text-gray-500" : "text-gray-300"}`}>
                {card.description}
              </p>

              {/* Métriques */}
              <div className="flex gap-6 mb-5">
                {card.metrics.map((m) => (
                  <div key={m.label}>
                    <p className={`text-2xl font-bold font-display leading-none ${card.active ? "text-gray-900" : "text-gray-300"}`}>
                      {m.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA lien */}
              <span className={`text-sm font-medium ${card.active ? "text-gray-700 cursor-pointer hover:text-gray-900" : "text-gray-300 pointer-events-none"}`}>
                {card.ctaLabel}
              </span>

              {/* Citation */}
              {card.quote && (
                <div className="mt-5 pl-4 border-l-2 border-gray-200">
                  <p className="text-sm italic text-gray-600 leading-relaxed">
                    "{card.quote.text}"
                  </p>
                  <p className="text-xs text-gray-500 mt-1.5">— {card.quote.author}</p>
                </div>
              )}
            </div>
          ))}
        </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── 4. CHIFFRES CLÉS ─────────────────────────────────────────────────────

function StatsSection() {
  return (
    <section id="chiffres" className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="grid grid-cols-5 gap-8"
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={itemV} className="text-center">
              <p className="font-display font-bold text-4xl text-white mb-2 leading-none">
                {s.value}
              </p>
              <p className="text-sm text-gray-400 mb-1">{s.label}</p>
              <p className="text-[10px] text-gray-600">{s.source}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 5. PROCESSUS ─────────────────────────────────────────────────────────

function ProcessSection() {
  return (
    <section id="processus" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <FadeIn className="text-center mb-16">
          <Eyebrow>{processus.eyebrow}</Eyebrow>
          <SectionH2>{processus.h2}</SectionH2>
        </FadeIn>

        <motion.div
          className="flex items-start"
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {processus.steps.map((step, index) => (
            <Fragment key={step.id}>
              <motion.div variants={itemV} className="flex-1 min-w-0">
                {/* Numéro */}
                <p className="font-display font-bold text-7xl text-gray-100 leading-none mb-3 select-none">
                  {step.number}
                </p>
                {/* Jour */}
                <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium mb-2">
                  {step.day}
                </p>
                <p className="text-sm font-semibold text-gray-900 mb-2">{step.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed pr-4">{step.description}</p>
              </motion.div>

              {index < processus.steps.length - 1 && (
                <div className="shrink-0 px-3 pt-10 text-gray-300 text-xl font-light select-none">
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

// ─── 6. RESSOURCES ────────────────────────────────────────────────────────

function RessourcesSection() {
  return (
    <section id="ressources" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <FadeIn className="mb-12">
          <Eyebrow>{ressources.eyebrow}</Eyebrow>
          <SectionH2>{ressources.h2}</SectionH2>
        </FadeIn>

        <motion.div
          className="grid grid-cols-3 gap-5"
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {ressources.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemV}
              className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer hover:border-gray-300 transition-colors duration-150"
            >
              {/* Placeholder image */}
              <div className="w-full h-32 bg-gray-100 border border-gray-200 rounded-lg mb-5" />

              <span className="inline-block text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full mb-3">
                {card.type}
              </span>

              <h3 className="font-display font-semibold text-gray-900 text-sm leading-snug mb-3">
                {card.title}
              </h3>

              <p className="text-xs text-gray-400">{card.meta}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 7. FAQ ───────────────────────────────────────────────────────────────

function FaqSection() {
  return (
    <section id="faq" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <FadeIn className="mb-12">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <SectionH2>{faq.h2}</SectionH2>
        </FadeIn>

        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
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

// ─── 8. CTA FINAL ─────────────────────────────────────────────────────────

function CtaFinalSection() {
  return (
    <section className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 gap-16 items-center">

        <FadeIn>
          <SectionH2 light>{ctaFinal.h2}</SectionH2>
          <p className="text-gray-400 mt-4 text-lg leading-relaxed">{ctaFinal.subtitle}</p>
        </FadeIn>

        <FadeIn delay={0.15} className="flex flex-col gap-3 items-start">
          <button className="px-8 py-3.5 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-colors duration-150 cursor-pointer">
            {ctaFinal.ctaPrimary}
          </button>
          <button className="px-8 py-3.5 text-sm font-medium text-gray-500 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors duration-150 cursor-pointer">
            {ctaFinal.ctaSecondary}
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────

export default function Entreprises() {
  return (
    <>
      <HeroSection />
      <LogosSection />
      <UseCaseSection />
      <StatsSection />
      <ProcessSection />
      <RessourcesSection />
      <FaqSection />
      <CtaFinalSection />
    </>
  );
}
