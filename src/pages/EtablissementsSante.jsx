import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "../components/ui/FadeIn";
import AccordionItem from "../components/ui/AccordionItem";
import VideoTestimonial from "../components/sections/VideoTestimonial";
import HocoAppSection from "../components/sections/HocoAppSection";
import SeoSection from "../components/sections/SeoSection";
import ParcoursPatientSection from "../components/sections/ParcoursPatientSection";
import ModelesEngagementSection from "../components/sections/ModelesEngagementSection";
import {
  hero,
  stats,
  useCases,
  processus,
  temoignages,
  videoTestimonial,
  faq,
  modeles,
  parcoursPatient,
  ctaFinal,
  achatSurMesure,
  seoContent,
} from "../data/etablissementsData";
import { hocoAppByAudience } from "../data/hocoAppData";

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

          {/* Pills */}
          <motion.div variants={itemV} className="flex items-center gap-2 flex-wrap mb-8">
            {hero.pills.map((pill) => (
              <button
                key={pill.id}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-colors duration-150 cursor-pointer ${
                  pill.active
                    ? "bg-white text-gray-900"
                    : "bg-white/10 text-white border border-white/20"
                }`}
              >
                {pill.label}
              </button>
            ))}
          </motion.div>

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

        {/* Colonne droite */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          className="bg-gray-50 rounded-2xl overflow-hidden"
        >
          <div className="p-6 space-y-4">

            {/* Carte formulaire */}
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

                <select defaultValue="" className={fieldCls}>
                  <option value="" disabled>Fonction</option>
                  {hero.form.fonctionOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>

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

            {/* Carte partenaires */}
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-5">
              <p className="text-[10px] uppercase tracking-widest font-medium text-gray-500 mb-3">
                {hero.partners.label}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {hero.partners.items.join(" · ")}
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. CHIFFRES ──────────────────────────────────────────────────────────

function StatsSection() {
  return (
    <section id="chiffres" className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-4 divide-x divide-gray-200"
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {stats.map((s) => (
            <motion.div key={s.id} variants={itemV} className="px-8 py-16 text-center">
              <p className="font-display font-bold text-4xl text-gray-900 mb-2 leading-none">
                {s.value}
              </p>
              <p className="text-sm text-gray-600 mb-2 leading-snug">{s.label}</p>
              {s.source && (
                <p className="text-[11px] italic text-gray-400">{s.source}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3. USE CASES ─────────────────────────────────────────────────────────

function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("hopitaux");
  const content = useCases.content[activeTab];

  return (
    <section id="use-case" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Tabs */}
        <FadeIn className="flex items-start gap-3 mb-12 flex-wrap">
          {useCases.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col text-left px-6 py-4 rounded-xl transition-colors duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-gray-900"
                  : "bg-white border border-gray-200 hover:border-gray-300"
              }`}
            >
              <span className={`text-sm font-semibold leading-tight ${activeTab === tab.id ? "text-white" : "text-gray-900"}`}>
                {tab.label}
              </span>
              <span className="text-xs mt-0.5 text-gray-400">{tab.sublabel}</span>
            </button>
          ))}
        </FadeIn>

        {/* Contenu de l'onglet actif */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid grid-cols-[3fr_2fr] gap-16 items-start"
        >
          {/* Gauche : features */}
          <div>
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <SectionH2>{content.h2}</SectionH2>

            <div className="mt-4 space-y-3 mb-8">
              {content.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
              ))}
            </div>

            <motion.ul
              className="space-y-6 mb-10"
              variants={listV}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {content.features.map((f) => (
                <motion.li key={f.id} variants={itemV} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 leading-tight">{f.title}</p>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{f.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex items-center gap-3 flex-wrap">
              <button className="px-6 py-2.5 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-150 cursor-pointer">
                {content.ctaPrimary}
              </button>
              <button className="px-6 py-2.5 text-sm font-medium text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
                {content.ctaOutline}
              </button>
            </div>
          </div>

          {/* Droite : carte cas / partenariat */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <span className="inline-block text-[10px] font-medium uppercase tracking-wide text-gray-600 bg-gray-100 px-3 py-1 rounded-full mb-4">
              {content.caseStudy.tag}
            </span>
            <h4 className="font-display font-bold text-base text-gray-900 leading-snug mb-3">
              {content.caseStudy.h4}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              {content.caseStudy.description}
            </p>

            <div className="flex gap-6 mb-5">
              {content.caseStudy.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display font-bold text-2xl text-gray-900 leading-none">{m.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm italic text-gray-700 leading-relaxed mb-4">
                "{content.caseStudy.quote.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 shrink-0" />
                <p className="text-xs text-gray-600 leading-snug font-medium">
                  {content.caseStudy.quote.author}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4. ACHAT SUR MESURE ──────────────────────────────────────────────────

function AchatSurMesureSection() {
  return (
    <section id="achat-sur-mesure" className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <FadeIn className="mb-12 max-w-2xl">
          <Eyebrow>{achatSurMesure.eyebrow}</Eyebrow>
          <h2 className="font-display font-bold text-3xl leading-tight text-white">
            {achatSurMesure.h2}
          </h2>
          <p className="text-gray-400 mt-4 text-lg leading-relaxed">
            {achatSurMesure.subtitle}
          </p>
        </FadeIn>

        <motion.div
          className="grid grid-cols-2 gap-x-10 gap-y-10 mb-12"
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {achatSurMesure.points.map((point, i) => (
            <motion.div key={i} variants={itemV} className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white leading-tight mb-1">{point.title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <FadeIn className="border-t border-white/10 pt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-widest font-medium text-gray-500 mb-3">
              {achatSurMesure.modes.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {achatSurMesure.modes.items.map((mode) => (
                <span
                  key={mode}
                  className="text-xs font-medium text-gray-200 bg-white/10 border border-white/20 rounded-full px-3 py-1.5"
                >
                  {mode}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <button className="px-6 py-3 text-sm font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-colors duration-150 cursor-pointer">
              {achatSurMesure.ctaPrimary}
            </button>
            <button className="px-6 py-3 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors duration-150 cursor-pointer">
              {achatSurMesure.ctaOutline}
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── 6. PROCESSUS ─────────────────────────────────────────────────────────

function ProcessSection() {
  return (
    <section id="processus" className="bg-gray-50">
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

// ─── 7. TÉMOIGNAGES ───────────────────────────────────────────────────────

function TemoignagesSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <FadeIn className="mb-12">
          <Eyebrow>{temoignages.eyebrow}</Eyebrow>
          <SectionH2>{temoignages.h2}</SectionH2>
        </FadeIn>

        <motion.div
          className="grid grid-cols-3 gap-6"
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {temoignages.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemV}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col"
            >
              <p className="text-[10px] uppercase tracking-widest font-medium text-gray-400 mb-3">{card.context}</p>
              <p className="text-sm italic text-gray-700 leading-relaxed flex-1 mb-5">"{card.quote}"</p>
              <div>
                <p className="text-sm font-bold text-gray-900">{card.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{card.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 7b. VIDÉO TÉMOIGNAGE ─────────────────────────────────────────────────

function VideoTestimonialSection() {
  return <VideoTestimonial {...videoTestimonial} />;
}

// ─── 8. FAQ ───────────────────────────────────────────────────────────────

function FaqSection() {
  return (
    <section id="faq" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <FadeIn className="mb-12">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <SectionH2>{faq.h2}</SectionH2>
        </FadeIn>

        <motion.div
          className="space-y-3 max-w-3xl"
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

// ─── 9. CTA FINAL ─────────────────────────────────────────────────────────

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
          <button className="px-8 py-3.5 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors duration-150 cursor-pointer">
            {ctaFinal.ctaSecondary}
          </button>
          <button className="px-8 py-3.5 text-sm font-medium text-gray-500 border border-gray-600 rounded-full hover:bg-gray-800 transition-colors duration-150 cursor-pointer">
            {ctaFinal.ctaTertiary}
          </button>
        </FadeIn>
      </div>
    </section>
  );
}


// ─── Export ───────────────────────────────────────────────────────────────

export default function EtablissementsSante() {
  return (
    <>
      {/* 1. Ce que c'est + ce que ça permet */}
      <HeroSection />
      <StatsSection />
      <UseCasesSection />
      <AchatSurMesureSection />

      {/* 2. Comment ça se passe — parcours patient */}
      <ParcoursPatientSection data={parcoursPatient} variant="white" />

      {/* 3. Grâce à quoi et comment ça marche */}
      <HocoAppSection data={hocoAppByAudience.etablissementsSante} variant="white" compact />

      {/* 4. Réassurance — avis et témoignages */}
      <TemoignagesSection />
      <VideoTestimonialSection />

      {/* 5. La solution adaptée pour votre problématique */}
      <ModelesEngagementSection data={modeles} id="modeles" />

      {/* 6. Prise de contact et mise en place */}
      <ProcessSection />

      {/* 7. Ressources et FAQ */}
      <FaqSection />
      <CtaFinalSection />
      <SeoSection data={seoContent} />
    </>
  );
}
