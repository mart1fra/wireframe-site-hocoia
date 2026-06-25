import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import FadeIn      from "../components/ui/FadeIn";
import AccordionItem from "../components/ui/AccordionItem";
import SeoSection from "../components/sections/SeoSection";
import {
  hero,
  logos,
  useCases,
  avisClients,
  stats,
  processus,
  ressources,
  faq,
  parcoursPatient,
  ctaFinal,
  seoContent,
} from "../data/entrepriseData";
import { hocoAppByAudience } from "../data/hocoAppData";

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

// ─── 3. USE CASES (onglets) ───────────────────────────────────────────────

function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(useCases.tabs[0].id);
  const content = useCases.content[activeTab];

  return (
    <section id="use-case" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Onglets pilules */}
        <FadeIn className="flex flex-wrap gap-3 mb-12">
          {useCases.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-start px-6 py-3.5 rounded-xl transition-colors duration-150 cursor-pointer text-left ${
                activeTab === tab.id
                  ? "bg-gray-900"
                  : "bg-white border border-gray-200 hover:bg-gray-50"
              }`}
            >
              <span className={`text-sm font-semibold leading-tight ${activeTab === tab.id ? "text-white" : "text-gray-900"}`}>
                {tab.label}
              </span>
              <span className={`text-xs mt-0.5 ${activeTab === tab.id ? "text-white/60" : "text-gray-500"}`}>
                {tab.sublabel}
              </span>
            </button>
          ))}
        </FadeIn>

        {/* Contenu crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-[3fr_2fr] gap-14 items-start"
          >
            {/* Gauche */}
            <div>
              <Eyebrow>{content.eyebrow}</Eyebrow>
              <SectionH2>{content.title}</SectionH2>

              <div className="mt-4 mb-8 space-y-3">
                {content.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
                ))}
              </div>

              <motion.ul
                className="space-y-6 mb-10"
                variants={listV}
                initial="hidden"
                animate="visible"
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
                {content.ctaButtons.map((btn) => (
                  <button
                    key={btn.label}
                    className={`px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-150 cursor-pointer ${
                      btn.primary
                        ? "text-white bg-gray-900 hover:bg-gray-800"
                        : "text-gray-900 border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Droite — carte cas client */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-gray-600 bg-gray-100 px-3 py-1 rounded-full mb-4">
                {content.caseCard.tag}
              </span>

              <h3 className="font-display font-bold text-base text-gray-900 leading-snug mb-3">
                {content.caseCard.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-5">
                {content.caseCard.description}
              </p>

              <div className="flex gap-6 mb-5">
                {content.caseCard.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-display font-bold text-2xl text-gray-900 leading-none">{m.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="border border-gray-200 rounded-xl p-4 mb-5">
                <p className="text-sm italic text-gray-700 leading-relaxed mb-4">
                  "{content.caseCard.quote.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 shrink-0" />
                  <p className="text-xs text-gray-600 leading-snug font-medium">
                    {content.caseCard.quote.author}
                  </p>
                </div>
              </div>

              <span className="text-sm font-semibold text-gray-700 cursor-pointer hover:text-gray-900 transition-colors">
                {content.caseCard.ctaLabel}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── 3c. AVIS CLIENTS ENTREPRISE ──────────────────────────────────────────

function AvisClientsSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <FadeIn className="mb-12">
          <Eyebrow>{avisClients.eyebrow}</Eyebrow>
          <SectionH2>{avisClients.h2}</SectionH2>
        </FadeIn>

        <motion.div
          className="grid grid-cols-3 gap-6"
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {avisClients.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemV}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col"
            >
              <p className="text-amber-400 text-sm mb-4">{card.stars}</p>
              <p className="text-gray-700 text-sm leading-relaxed italic flex-1 mb-6">
                "{card.quote}"
              </p>
              <div>
                <p className="text-sm font-semibold text-gray-900">{card.author}</p>
                <p className="text-xs text-gray-400 mt-0.5">{card.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
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

// ─── 5. COMMENT ÇA MARCHE (bloc unifié) ───────────────────────────────────

const HOW_TABS = [
  { id: "methode",  label: "Notre méthode",    sublabel: "De la signature au 1er bilan" },
  { id: "parcours", label: "Parcours patient",  sublabel: "Ce que vivent vos collaborateurs" },
  { id: "hocoapp",  label: "Tableau de bord",    sublabel: "Votre tableau de bord" },
];

function StepsGrid({ steps }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={listV}
      initial="hidden"
      animate="visible"
    >
      {steps.map((step, index) => (
        <motion.div key={step.id} variants={itemV} className="relative">
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-5 left-10 right-0 h-px bg-gray-200 z-0" />
          )}
          <div className="relative z-10">
            <p className="font-display font-bold text-6xl text-gray-100 leading-none mb-2 select-none">
              {step.number}
            </p>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-2">
              {step.day}
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-2 leading-snug pr-4">
              {step.title}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed pr-4">
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function HocoAppGrid() {
  const data = hocoAppByAudience.entreprises;
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-start"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">{data.subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {data.features.map((f) => (
            <div key={f.id} className="flex items-start gap-3">
              <div className="w-9 h-9 bg-gray-100 border border-gray-200 rounded-lg shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">{f.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full aspect-[4/3] bg-gray-100 border border-gray-200 rounded-2xl flex items-center justify-center">
        <p className="text-gray-400 text-sm text-center px-6">{data.mockupLabel}</p>
      </div>
    </motion.div>
  );
}

function HowItWorksSection() {
  const [active, setActive] = useState("methode");

  return (
    <section id="methode" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <FadeIn className="mb-10">
          <Eyebrow>Comment cela marche</Eyebrow>
          <SectionH2>De la signature au bilan, tout est pris en charge</SectionH2>
        </FadeIn>

        {/* Pilules */}
        <FadeIn className="flex flex-wrap gap-2 mb-12">
          {HOW_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`flex flex-col items-start px-5 py-3 rounded-xl transition-colors duration-150 cursor-pointer text-left ${
                active === tab.id
                  ? "bg-gray-900"
                  : "bg-gray-50 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              <span className={`text-sm font-semibold leading-tight ${active === tab.id ? "text-white" : "text-gray-900"}`}>
                {tab.label}
              </span>
              <span className={`text-xs mt-0.5 ${active === tab.id ? "text-white/60" : "text-gray-500"}`}>
                {tab.sublabel}
              </span>
            </button>
          ))}
        </FadeIn>

        {/* Contenu — même conteneur, contenu crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {active === "methode"  && <StepsGrid steps={processus.steps}    type="methode" />}
            {active === "parcours" && <StepsGrid steps={parcoursPatient.steps} type="parcours" />}
            {active === "hocoapp"  && <HocoAppGrid />}
          </motion.div>
        </AnimatePresence>

        {/* CTAs */}
        <FadeIn className="flex flex-wrap gap-3 mt-14">
          <a
            href="#contact"
            className="bg-gray-900 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-gray-800 transition-colors"
          >
            Prendre rendez-vous
          </a>
          <Link
            to="/acquerir-un-bus"
            className="border border-gray-300 text-gray-700 text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-gray-50 transition-colors"
          >
            Acquérir un bus →
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── 6. RESSOURCES ────────────────────────────────────────────────────────

function RessourcesSection() {
  return (
    <section id="ressources" className="bg-gray-50 border-y border-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="flex items-center justify-between mb-6">
          <div>
            <Eyebrow>{ressources.eyebrow}</Eyebrow>
            <SectionH2>{ressources.h2}</SectionH2>
          </div>
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {ressources.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemV}
              className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 flex items-center gap-4 cursor-pointer hover:border-gray-300 transition-colors duration-150"
            >
              <div className="w-9 h-9 bg-gray-100 border border-gray-200 rounded-lg shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">{card.type}</span>
                <p className="text-sm font-semibold text-gray-900 leading-snug truncate">{card.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{card.meta}</p>
              </div>
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
          <a
            href="#contact"
            className="px-8 py-3.5 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-colors duration-150"
          >
            {ctaFinal.ctaPrimary}
          </a>
          <Link
            to="/acquerir-un-bus"
            className="px-8 py-3.5 text-sm font-medium text-gray-500 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors duration-150"
          >
            Acquérir un bus →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}


// ─── Export ───────────────────────────────────────────────────────────────

export default function Entreprises() {
  return (
    <>
      {/* 1. Ce que c'est + ce que ça permet */}
      <HeroSection />
      <LogosSection />
      <UseCasesSection />

      {/* 2. Comment ça marche — méthode / parcours / HocoApp */}
      <HowItWorksSection />

      {/* 5. Réassurance — avis */}
      <AvisClientsSection />
      <StatsSection />

      {/* 7. Ressources et FAQ */}
      <RessourcesSection />
      <FaqSection />
      <CtaFinalSection />
      <SeoSection data={seoContent} />
    </>
  );
}
