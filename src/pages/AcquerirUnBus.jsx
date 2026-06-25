import { Fragment } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../components/ui/FadeIn";
import AccordionItem from "../components/ui/AccordionItem";
import SeoSection from "../components/sections/SeoSection";
import {
  hero,
  logos,
  pourquoi,
  casClientVerdun,
  processus,
  configurations,
  financement,
  faq,
  ctaFinal,
  seoContent,
} from "../data/acquerirUnBusData";

// ─── Variants ─────────────────────────────────────────────────────────────

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
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-[3fr_2fr] gap-12 items-start">

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
            {hero.h1.map((part, i) =>
              typeof part === "string"
                ? <Fragment key={i}>{part}</Fragment>
                : <em key={i} className="italic">{part.italic}</em>
            )}
          </motion.h1>

          <motion.p variants={itemV} className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
            {hero.subtitle}
          </motion.p>

          {/* Checks */}
          <motion.ul variants={itemV} className="space-y-3 mb-10">
            {hero.checks.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="text-gray-500 mt-0.5 shrink-0">✓</span>
                {c}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={itemV} className="flex items-center gap-3 flex-wrap">
            <button className="px-6 py-2.5 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-colors duration-150 cursor-pointer">
              {hero.ctaPrimary}
            </button>
            <button className="px-6 py-2.5 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors duration-150 cursor-pointer">
              {hero.ctaOutline}
            </button>
          </motion.div>
        </motion.div>

        {/* Colonne droite — formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          className="bg-gray-50 rounded-2xl overflow-hidden"
        >
          <div className="p-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-display font-bold text-xl text-gray-900 mb-1">
                {hero.form.title}
              </h3>
              <p className="text-sm text-gray-500 mb-5">{hero.form.subtitle}</p>

              <div className="space-y-3">
                <select defaultValue="" className={fieldCls}>
                  <option value="" disabled>Type d'établissement</option>
                  {hero.form.typeOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>

                <div className="grid grid-cols-2 gap-3">
                  <input className={fieldCls} type="text" placeholder="Prénom" />
                  <input className={fieldCls} type="text" placeholder="Nom" />
                </div>

                <input className={fieldCls} type="text" placeholder="Fonction" />

                <input className={fieldCls} type="email" placeholder="Email professionnel" />

                <select defaultValue="" className={fieldCls}>
                  <option value="" disabled>Spécialité souhaitée</option>
                  {hero.form.specialiteOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>

                <button
                  type="button"
                  className="w-full py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-150 cursor-pointer mt-1"
                >
                  {hero.form.cta}
                </button>
              </div>

              <p className="text-[11px] text-gray-400 text-center mt-4">{hero.form.note}</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// ─── 2. LOGOS ─────────────────────────────────────────────────────────────

function LogosSection() {
  return (
    <section className="bg-white py-10 px-6 border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs text-gray-500 mb-6">{logos.label}</p>
        <div className="flex flex-wrap justify-center gap-3">
          {logos.items.map((item) => (
            <span
              key={item}
              className="bg-gray-100 border border-gray-200 text-gray-500 text-xs font-medium px-4 py-2 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. POURQUOI ──────────────────────────────────────────────────────────

function PourquoiSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-14 items-start">

          {/* Gauche — contenu existant */}
          <div>
            <FadeIn className="mb-10">
              <Eyebrow>{pourquoi.eyebrow}</Eyebrow>
              <SectionH2>{pourquoi.h2}</SectionH2>
              <div className="mt-4 space-y-3">
                {pourquoi.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
                ))}
              </div>
            </FadeIn>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={listV}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {pourquoi.benefices.map((b) => (
                <motion.div key={b.id} variants={itemV} className="flex flex-col gap-3">
                  <span className="w-9 h-9 rounded-lg bg-gray-100 border border-gray-200 shrink-0" />
                  <p className="text-sm font-semibold text-gray-900 leading-tight">{b.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Droite — cas client Verdun */}
          <FadeIn delay={0.15}>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden sticky top-8">
              {/* Placeholder image bus */}
              <div className="w-full bg-gray-200 border-b border-gray-200 flex items-center justify-center" style={{ height: 180 }}>
                <p className="text-gray-400 text-xs text-center px-4">Photo — PneumoBus Grand Verdun</p>
              </div>

              <div className="p-6">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-gray-900 text-white mb-3">
                  {casClientVerdun.badge}
                </span>
                <p className="font-display font-bold text-lg text-gray-900 leading-snug mb-3">
                  {casClientVerdun.titre}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {casClientVerdun.description}
                </p>

                {/* Faits clés */}
                <div className="space-y-2 mb-5">
                  {casClientVerdun.faits.map((f) => (
                    <div key={f.label} className="flex items-baseline justify-between gap-2">
                      <span className="text-xs text-gray-400 shrink-0">{f.label}</span>
                      <span className="text-xs font-semibold text-gray-900 text-right">{f.value}</span>
                    </div>
                  ))}
                </div>

                {/* Citation */}
                <blockquote className="border-l-2 border-gray-300 pl-4 mb-5">
                  <p className="text-gray-600 text-xs italic leading-relaxed mb-2">"{casClientVerdun.quote}"</p>
                  <p className="text-gray-400 text-xs">{casClientVerdun.author}</p>
                </blockquote>

                <Link
                  to={casClientVerdun.ctaHref}
                  className="text-sm font-semibold text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
                >
                  {casClientVerdun.ctaLabel}
                </Link>
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}

// ─── 3. CONFIGURATIONS ────────────────────────────────────────────────────

function ConfigurationsSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <FadeIn className="mb-12">
          <Eyebrow>{configurations.eyebrow}</Eyebrow>
          <SectionH2>{configurations.h2}</SectionH2>
          <p className="text-gray-500 mt-3 max-w-xl leading-relaxed">{configurations.subtitle}</p>
        </FadeIn>

        <FadeIn className="mb-5">
          <div className="bg-gray-900 rounded-2xl p-10">

            {/* En-tête */}
            <div className="mb-8">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/10 text-white mb-4">
                {configurations.surMesure.badge}
              </span>
              <p className="font-display font-bold text-2xl text-white leading-tight mb-3 max-w-2xl">
                {configurations.surMesure.title}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                {configurations.surMesure.description}
              </p>
            </div>

            {/* 2 colonnes : points + spécialités */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8">

              {/* Points clés */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {configurations.surMesure.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white leading-tight mb-1">{pt.title}</p>
                      <p className="text-xs text-gray-400 leading-relaxed">{pt.description}</p>
                    </div>
                  </div>
                ))}
              </div>


            </div>

            {/* CTA */}
            <div className="border-t border-white/10 pt-7">
              <button
                type="button"
                className="bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
              >
                {configurations.surMesure.cta}
              </button>
            </div>

          </div>
        </FadeIn>


      </div>
    </section>
  );
}

// ─── 4. PROCESSUS ─────────────────────────────────────────────────────────

function ProcessusSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <FadeIn className="mb-16">
          <Eyebrow>{processus.eyebrow}</Eyebrow>
          <SectionH2>{processus.h2}</SectionH2>
          <p className="text-gray-500 mt-3 max-w-lg leading-relaxed">{processus.subtitle}</p>
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
              <motion.div variants={itemV} className="flex-1 min-w-0 flex flex-col">
                <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center mb-4 shrink-0">
                  <span className="text-white text-[10px] font-bold leading-none">{step.number}</span>
                </div>
                <p className="text-sm font-semibold text-gray-900 mb-2 pr-3">{step.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 pr-3 flex-1">{step.description}</p>
                <span className="inline-block self-start px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
                  {step.delay}
                </span>
              </motion.div>

              {index < processus.steps.length - 1 && (
                <div className="shrink-0 px-2 pt-3 text-gray-300 text-xl font-light select-none">
                  ›
                </div>
              )}
            </Fragment>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// ─── 5. FINANCEMENT ───────────────────────────────────────────────────────

function FinancementSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <FadeIn className="mb-12">
          <Eyebrow>{financement.eyebrow}</Eyebrow>
          <SectionH2>{financement.h2}</SectionH2>
          <p className="text-gray-500 mt-3 max-w-xl leading-relaxed">{financement.subtitle}</p>
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {financement.options.map((opt) => (
            <motion.div key={opt.id} variants={itemV} className="border-l-2 border-gray-300 pl-4">
              <p className="text-sm font-semibold text-gray-900 mb-2">{opt.title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{opt.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// ─── 6. FAQ ───────────────────────────────────────────────────────────────

function FaqSection() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-24">

        <FadeIn className="mb-12">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <SectionH2>{faq.h2}</SectionH2>
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
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

// ─── 7. CTA FINAL ─────────────────────────────────────────────────────────

function CtaFinalSection() {
  return (
    <section className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            <div className="max-w-xl">
              <h2 className="font-display font-bold text-3xl text-white leading-tight mb-4">
                {ctaFinal.h2}
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                {ctaFinal.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                type="button"
                className="bg-white text-gray-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
              >
                {ctaFinal.ctaPrimary}
              </button>
              <button
                type="button"
                className="border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors duration-150 cursor-pointer"
              >
                {ctaFinal.ctaSecondary}
              </button>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function AcquerirUnBus() {
  return (
    <>
      <HeroSection />
      <LogosSection />
      <PourquoiSection />
      <ConfigurationsSection />
      <ProcessusSection />
      <FinancementSection />
      <FaqSection />
      <CtaFinalSection />
      <SeoSection data={seoContent} />
    </>
  );
}
