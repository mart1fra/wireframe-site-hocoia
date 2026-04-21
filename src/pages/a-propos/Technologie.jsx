import { Fragment } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../../components/ui/FadeIn";
import {
  hero,
  chiffres,
  promesse,
  parcours,
  outils,
  dispositifs,
  temoignages,
  maillage,
  ctaFinal,
} from "../../data/technologieData";

// ─── Animation variants ───────────────────────────────────────────────────

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const itemV = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

// ─── Helpers ──────────────────────────────────────────────────────────────

function Eyebrow({ children, light = false }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-widest mb-3 ${light ? "text-gray-400" : "text-gray-400"}`}>
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

function PlaceholderBox({ w = "w-10", h = "h-10", rounded = "rounded-lg", extra = "" }) {
  return (
    <div className={`${w} ${h} ${rounded} bg-gray-100 border border-gray-200 shrink-0 ${extra}`} />
  );
}

// ─── 1. HERO ──────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-14 items-center">

        {/* Gauche */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={listV}
        >
          <motion.div variants={itemV}>
            <Eyebrow light>{hero.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h1
            variants={itemV}
            className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-6"
          >
            {hero.h1.before}
            <em className="not-italic italic">{hero.h1.italic}</em>
          </motion.h1>

          <motion.p variants={itemV} className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
            {hero.subtitle}
          </motion.p>

          <motion.div variants={itemV} className="flex flex-wrap gap-3">
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
          </motion.div>
        </motion.div>

        {/* Droite — pills */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          {hero.pills.map((pill) => (
            <div
              key={pill.id}
              className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-xl px-5 py-4"
            >
              <div className="w-8 h-8 bg-gray-800 rounded-lg shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm leading-tight">{pill.titre}</p>
                <p className="text-gray-400 text-xs mt-0.5">{pill.subtext}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. CHIFFRES ──────────────────────────────────────────────────────────

function ChiffresSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200"
        >
          {chiffres.map((c) => (
            <motion.div
              key={c.value}
              variants={itemV}
              className="flex flex-col items-center text-center px-8 py-8"
            >
              <span className="font-display font-bold text-5xl text-gray-900 mb-3 leading-none">
                {c.value}
              </span>
              <span className="text-sm text-gray-500 leading-snug max-w-[160px]">
                {c.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3. PROMESSE TECHNOLOGIQUE ────────────────────────────────────────────

function PromesseSection() {
  return (
    <section className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Colonne gauche */}
        <FadeIn>
          <Eyebrow>{promesse.gauche.eyebrow}</Eyebrow>
          <SectionH2>{promesse.gauche.h2}</SectionH2>
          <p className="text-gray-600 text-base leading-relaxed mb-10">
            {promesse.gauche.paragraphe}
          </p>

          <motion.ul
            variants={listV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-6"
          >
            {promesse.gauche.piliers.map((p) => (
              <motion.li key={p.id} variants={itemV} className="flex items-start gap-4">
                <PlaceholderBox w="w-[38px]" h="h-[38px]" extra="mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm leading-tight mb-1">{p.titre}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </FadeIn>

        {/* Colonne droite */}
        <FadeIn delay={0.15}>
          <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
            <Eyebrow>{promesse.droite.eyebrow}</Eyebrow>
            {promesse.droite.cartes.map((carte) => (
              <div key={carte.id} className="bg-white border border-gray-200 rounded-xl p-6">
                <p className="font-semibold text-gray-900 text-sm mb-3">{carte.titre}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{carte.texte}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 4. PARCOURS EN 4 TEMPS ───────────────────────────────────────────────

function ParcoursSection() {
  return (
    <section className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-14">
          <Eyebrow>{parcours.eyebrow}</Eyebrow>
          <SectionH2>{parcours.h2}</SectionH2>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col lg:flex-row items-start"
        >
          {parcours.etapes.map((etape, i) => (
            <Fragment key={etape.id}>
              <motion.div variants={itemV} className="flex-1 min-w-0 px-2">
                <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center mb-4">
                  <span className="text-white text-xs font-bold">{etape.numero}</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm mb-2 leading-tight">
                  {etape.titre}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">{etape.description}</p>
              </motion.div>
              {i < parcours.etapes.length - 1 && (
                <div className="hidden lg:flex items-start justify-center px-1 pt-2 text-gray-300 text-xl font-light select-none">
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

// ─── 5. HOCOAPP & HOCOVISIO ───────────────────────────────────────────────

function OutilsSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {outils.map((outil, i) => (
          <FadeIn key={outil.id} delay={i * 0.1}>
            <div className="bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <PlaceholderBox w="w-11" h="h-11" rounded="rounded-xl" />
                <div>
                  <p className="font-display font-bold text-gray-900 text-lg leading-tight">
                    {outil.nom}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">{outil.tag}</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {outil.paragraphe}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {outil.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-1.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors cursor-pointer text-left"
              >
                {outil.cta}
              </button>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── 6. DISPOSITIFS CONNECTÉS ─────────────────────────────────────────────

function DispositifsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-10">
          <Eyebrow>{dispositifs.eyebrow}</Eyebrow>
          <SectionH2>{dispositifs.h2}</SectionH2>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
            {dispositifs.paragraphe}
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-wrap gap-2 mb-4">
          {dispositifs.chips.map((chip) => (
            <span
              key={chip}
              className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2"
            >
              <div className="w-3 h-3 bg-gray-100 rounded-sm shrink-0 border border-gray-200" />
              <span className="text-gray-700 text-sm font-medium">{chip}</span>
            </span>
          ))}
        </FadeIn>

        <FadeIn delay={0.15} className="mb-14">
          <p className="text-sm italic text-gray-500">{dispositifs.note}</p>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="bg-gray-50 border border-gray-200 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200"
        >
          {dispositifs.securite.map((s) => (
            <motion.div key={s.id} variants={itemV} className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-5 h-5 bg-gray-100 rounded-md border border-gray-200 shrink-0 mt-0.5" />
                <p className="font-semibold text-gray-900 text-sm leading-tight">{s.titre}</p>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">{s.description}</p>
              <span className="inline-block bg-gray-200 text-gray-700 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg">
                {s.badge}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 7. TÉMOIGNAGES ───────────────────────────────────────────────────────

function TemoignagesSection() {
  return (
    <section className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200"
        >
          {temoignages.map((t) => (
            <motion.div
              key={t.id}
              variants={itemV}
              className="flex flex-col px-8 py-6 first:pl-0 last:pr-0"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
                {t.contexte}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed italic flex-1 mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 8. MAILLAGE INTERNE ──────────────────────────────────────────────────

function MaillageSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-10">
          <Eyebrow>{maillage.eyebrow}</Eyebrow>
          <h3 className="font-display font-bold text-2xl text-gray-900">{maillage.h3}</h3>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {maillage.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemV}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4"
            >
              <PlaceholderBox w="w-10" h="h-10" />
              <p className="font-display font-bold text-gray-900 text-lg">{card.titre}</p>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{card.description}</p>
              <Link
                to={card.href}
                className="self-start px-5 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-150"
              >
                {card.cta}
              </Link>
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
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-5">
            {ctaFinal.h2}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {ctaFinal.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="flex flex-col gap-3 items-start">
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
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function Technologie() {
  return (
    <>
      <HeroSection />
      <ChiffresSection />
      <PromesseSection />
      <ParcoursSection />
      <OutilsSection />
      <DispositifsSection />
      <TemoignagesSection />
      <MaillageSection />
      <CtaFinalSection />
    </>
  );
}
