import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../components/ui/FadeIn";
import {
  hero,
  logos,
  identite,
  specialites,
  stats,
  useCases,
  temoignages,
  ctaFinal,
} from "../data/homeData";

// ─── Animation variants ───────────────────────────────────────────────────

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemV = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// ─── Tokens charte ────────────────────────────────────────────────────────
// Dégradé signature Hocoia : bleu ciel → bleu roi → violet

const GRAD = "bg-linear-to-r from-bleu-ciel via-bleu-roi to-violet";
const GRAD_DIAG = "bg-linear-to-tr from-bleu-ciel via-bleu-roi to-violet";

// ─── Helpers ──────────────────────────────────────────────────────────────

function Eyebrow({ children, light = false }) {
  if (!children) return null;
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
        light ? "text-white/70" : "text-anthracite/80"
      }`}
    >
      {children}
    </p>
  );
}

function SectionH2({ children, light = false }) {
  return (
    <h2
      className={`font-semibold tracking-tight text-3xl sm:text-4xl leading-tight mb-4 ${
        light ? "text-white" : "text-black"
      }`}
    >
      {children}
    </h2>
  );
}

// ─── Section 1 · Hero patient (BtoC) — validé ─────────────────────────────
// Design validé (cf. CLAUDE.md · "Heros déjà réalisés") :
//  · fond BLANC (règle client : jamais d'ivoire seul, surtout pas les heros)
//  · titre bicolore — noir + mot-clé de fin en dégradé bleu ciel → violet
//  · CTA pilule dégradé + CTA pilule outline
//  · lien texte de redirection BtoB
//  · papillon / tracé filaire : gérés par le client, non générés ici
// Mobile : H1 ≤ 32px, CTAs pleine largeur

function HeroSection() {
  return (
    <section className="bg-white py-14 px-5 md:py-24 md:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* H1 bicolore : 32px mobile → 48px sm → 60px lg */}
          <h1 className="font-semibold text-[32px] leading-[1.1] sm:text-5xl lg:text-6xl text-black mb-5 sm:leading-[1.1] sm:mb-6 tracking-tight">
            {hero.h1Start}{" "}
            <span className={`${GRAD} bg-clip-text text-transparent`}>
              {hero.h1Accent}
            </span>
          </h1>

          <p className="text-anthracite text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto">
            {hero.subtitle}
          </p>

          {/* CTAs : pleine largeur mobile, auto desktop */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center mb-8">
            <Link
              to="/patient"
              className={`w-full sm:w-auto ${GRAD} text-white px-7 py-4 sm:py-3.5 rounded-full font-semibold text-sm text-center shadow-sm hover:shadow-md hover:brightness-105 transition-all duration-200`}
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              to="/calendrier"
              className="w-full sm:w-auto border border-anthracite/40 text-black px-7 py-4 sm:py-3.5 rounded-full font-semibold text-sm text-center hover:bg-gris-clair/40 hover:border-anthracite transition-colors duration-200"
            >
              {hero.ctaOutline}
            </Link>
          </div>

          {/* Lien de redirection BtoB */}
          <p className="text-sm text-anthracite">
            {hero.b2bLink.prefix}{" "}
            <Link
              to={hero.b2bLink.href}
              className="text-bleu-roi font-medium underline underline-offset-2 hover:text-violet transition-colors"
            >
              {hero.b2bLink.linkText}
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 2 · Logos ────────────────────────────────────────────────────
// Mobile : padding réduit, flex-wrap inchangé (déjà responsive)

function LogosSection() {
  return (
    <section className="bg-white py-10 px-5 md:py-14 md:px-6 border-y border-gris-clair/70">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-anthracite/70 mb-6 md:mb-8">
          {logos.label}
        </p>
        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
          {logos.items.map((name) => (
            <span
              key={name}
              className="bg-gris-clair/50 text-anthracite text-sm font-medium px-4 py-2 md:px-5 rounded-full"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 2b · Identité ────────────────────────────────────────────────
// Mobile : padding réduit, grid déjà responsive (cols-1 par défaut)

function IdentiteSection() {
  return (
    <section className="bg-white py-14 px-5 md:py-20 md:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <Eyebrow>{identite.eyebrow}</Eyebrow>
          <h2 className="font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl text-black leading-tight mb-5 sm:mb-6">
            {identite.h2}
          </h2>
          <p className="text-anthracite text-base leading-relaxed max-w-2xl mx-auto mb-10 md:mb-14">
            {identite.description}
          </p>
          <p className="text-anthracite text-base leading-relaxed max-w-2xl mx-auto mb-10 md:mb-14">
            {identite.description2}
          </p>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10 md:mb-14"
        >
          {identite.points.map((p) => (
            <motion.div key={p.id} variants={itemV} className="flex flex-col items-center text-center gap-3">
              <div className="w-8 h-8 bg-gris-clair/50 rounded-lg border border-gris-clair" />
              <p className="font-semibold text-black text-sm">{p.titre}</p>
              <p className="text-anthracite text-sm leading-relaxed">{p.soustitre}</p>
            </motion.div>
          ))}
        </motion.div>

        <FadeIn>
          <Link
            to={identite.ctaHref}
            className="inline-block bg-bleu-roi text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-violet transition-colors duration-200"
          >
            {identite.cta}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Section 3 · Spécialités B2C ──────────────────────────────────────────
// Mobile : padding réduit, chips en scroll horizontal, map sous le texte

function SpecialitesSection() {
  const [activeChip, setActiveChip] = useState(specialites.chips[0].id);

  return (
    <section className="bg-white py-16 px-5 md:py-24 md:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="max-w-2xl mb-10 lg:mb-14">
          <Eyebrow>{specialites.eyebrow}</Eyebrow>
          <SectionH2>{specialites.h2}</SectionH2>
          <p className="text-anthracite text-base leading-relaxed">
            {specialites.description}
          </p>
          <p className="text-anthracite text-base leading-relaxed">
            {specialites.description2}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left · chips + contenu actif */}
          <FadeIn delay={0.1}>
            {/* Chips : scroll horizontal sur mobile, wrap sur desktop
                Actif = bleu roi (bouton principal charte) */}
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 sm:flex-wrap sm:overflow-x-visible sm:pb-0 sm:mx-0 sm:px-0 mb-8">
              {specialites.chips.map((chip) => (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => setActiveChip(chip.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 cursor-pointer ${
                    activeChip === chip.id
                      ? "bg-bleu-roi text-white"
                      : "bg-gris-clair/60 text-anthracite hover:bg-gris-clair"
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {(() => {
                const activeSpe = specialites.chips.find((c) => c.id === activeChip);
                return activeSpe ? (
                  <motion.div
                    key={activeChip}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="mb-8"
                  >
                    <h3 className="font-semibold text-black text-base mb-2">
                      {activeSpe.title}
                    </h3>
                    <p className="text-anthracite text-sm leading-relaxed mb-3 max-w-md">
                      {activeSpe.description}
                    </p>
                    <Link
                      to={activeSpe.href}
                      className="text-sm font-semibold text-bleu-roi underline underline-offset-2 hover:text-violet transition-colors"
                    >
                      {activeSpe.linkLabel}
                    </Link>
                  </motion.div>
                ) : null;
              })()}
            </AnimatePresence>

            <Link
              to="/calendrier"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-black border border-anthracite/40 rounded-full px-4 py-1.5 hover:bg-gris-clair/40 hover:border-anthracite transition-colors"
            >
              {specialites.cta}
            </Link>
          </FadeIn>

          {/* Right · map placeholder + mini card */}
          <FadeIn delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden bg-gris-clair/50 border border-gris-clair aspect-[4/3] flex items-center justify-center">
              <p className="text-anthracite text-sm font-medium px-6 text-center">
                {specialites.mapPlaceholder}
              </p>

              {/* Mini card overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg border border-gris-clair/60 p-4">
                <p className="text-xs font-semibold text-black mb-2">
                  {specialites.miniCard.title}
                </p>
                <div className="space-y-1 mb-3">
                  {specialites.miniCard.creneaux.map((c, i) => (
                    <p key={i} className="text-xs text-anthracite">
                      {c}
                    </p>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 bg-bleu-roi text-white text-xs font-semibold py-2 rounded-full hover:bg-violet transition-colors cursor-pointer"
                  >
                    {specialites.miniCard.ctaPrimary}
                  </button>
                  <button
                    type="button"
                    className="flex-1 border border-gris-clair text-anthracite text-xs font-semibold py-2 rounded-full hover:bg-gris-clair/40 transition-colors cursor-pointer"
                  >
                    {specialites.miniCard.ctaOutline}
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4 · Stats ────────────────────────────────────────────────────
// Mobile : divide-y vertical (corrige le divide-x qui cassait sur 1 colonne)

function StatsSection() {
  return (
    <section className="bg-gris-clair/40 py-14 px-5 md:py-20 md:px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-8 md:mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-anthracite/80">
            {stats.eyebrow}
          </span>
        </FadeIn>
        <FadeIn>
          <motion.div
            variants={listV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-3"
          >
            {stats.items.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemV}
                className="flex flex-col items-center text-center px-4 py-6 sm:first:pl-0 sm:last:pr-0"
              >
                <span className="font-semibold text-3xl text-black mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-anthracite leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Section 5 · Use Cases B2B ────────────────────────────────────────────
// Mobile : tabs en scroll horizontal, layout déjà responsive (grid-cols-1 lg:2)

function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(useCases.tabs[0].id);
  const activeTabData = useCases.tabs.find((t) => t.id === activeTab);

  return (
    <section className="bg-white py-16 px-5 md:py-24 md:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-8 lg:mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-anthracite/80 mb-4">
            {useCases.label}
          </p>
          {/* Tabs : scroll horizontal sur mobile, wrap sur desktop */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 sm:flex-wrap sm:overflow-x-visible sm:pb-0 sm:mx-0 sm:px-0">
            {useCases.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-bleu-roi text-white"
                    : "bg-gris-clair/60 text-anthracite hover:bg-gris-clair"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center"
          >
            {/* Left · content */}
            <div>
              <Eyebrow>{activeTabData.eyebrow}</Eyebrow>
              <h3 className="font-semibold tracking-tight text-2xl text-black leading-snug mb-4">
                {activeTabData.h3}
              </h3>
              <p className="text-anthracite text-base leading-relaxed mb-8">
                {activeTabData.description}
              </p>

              <div className="flex gap-6 mb-8">
                {activeTabData.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="font-semibold text-2xl text-black">
                      {m.value}
                    </p>
                    <p className="text-xs text-anthracite mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs : pleine largeur mobile, auto desktop */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="w-full sm:w-auto bg-bleu-roi text-white px-6 py-3.5 sm:py-3 rounded-full text-sm font-semibold hover:bg-violet transition-colors cursor-pointer"
                >
                  {activeTabData.ctaPrimary}
                </button>
                <button
                  type="button"
                  className="w-full sm:w-auto border border-anthracite/40 text-black px-6 py-3.5 sm:py-3 rounded-full text-sm font-semibold hover:bg-gris-clair/40 hover:border-anthracite transition-colors cursor-pointer"
                >
                  {activeTabData.ctaOutline}
                </button>
              </div>
            </div>

            {/* Right · illustration placeholder */}
            <div className="bg-gris-clair/50 rounded-2xl border border-gris-clair aspect-[4/3] flex items-center justify-center">
              <p className="text-anthracite text-sm font-medium text-center px-6">
                Illustration · {activeTabData.label}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── Section 7 · Témoignages ──────────────────────────────────────────────
// Mobile : défilement horizontal avec snap, pleine hauteur des cartes

function TemoignagesSection() {
  return (
    <section className="bg-gris-clair/40 py-16 px-5 md:py-24 md:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-8 md:mb-12 text-center">
          <SectionH2>{temoignages.h2}</SectionH2>
        </FadeIn>

        {/* Carrousel scroll horizontal mobile → grille 3 colonnes desktop */}
        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex gap-4 overflow-x-auto pb-3 -mx-5 px-5 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:pb-0 md:mx-0 md:px-0 md:overflow-x-visible"
        >
          {temoignages.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemV}
              className="min-w-[280px] snap-start shrink-0 md:min-w-0 md:shrink bg-white rounded-2xl border border-gris-clair/60 p-6 md:p-8 flex flex-col"
            >
              <p className="text-orange-statut text-sm mb-4 tracking-wide">
                {card.stars}
              </p>
              <p className="text-black/80 text-sm leading-relaxed flex-1 mb-6">
                "{card.quote}"
              </p>
              <div>
                <p className="text-sm font-semibold text-black">
                  {card.author}
                </p>
                <p className="text-xs text-anthracite mt-0.5">{card.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 8 · CTA Final — validé ───────────────────────────────────────
// Pattern charte : fond en dégradé signature (bleu ciel → bleu roi → violet,
// diagonale), CTA blanc posé dessus

function CtaFinalSection() {
  return (
    <section className={`${GRAD_DIAG} py-16 px-5 md:py-24 md:px-6`}>
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-5">
            {ctaFinal.h2}
          </h2>
          <p className="text-white/85 text-base leading-relaxed mb-8 md:mb-10">
            {ctaFinal.subtitle}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to={ctaFinal.ctaPrimaryHref}
              className="w-full sm:w-auto bg-white text-black px-7 py-4 sm:py-3.5 rounded-full font-semibold text-sm hover:bg-ivoire transition-colors text-center"
            >
              {ctaFinal.ctaPrimary}
            </Link>
            <Link
              to={ctaFinal.ctaOutlineHref}
              className="w-full sm:w-auto border border-white/70 text-white px-7 py-4 sm:py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors text-center"
            >
              {ctaFinal.ctaOutline}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────
// Toute la home est en Google Sans Flex (charte) via le wrapper font-flex

export default function Home() {
  return (
    <div className="font-flex">
      <HeroSection />
      <LogosSection />
      <IdentiteSection />
      <StatsSection />
      <SpecialitesSection />
      <UseCasesSection />
      <TemoignagesSection />
      <CtaFinalSection />
    </div>
  );
}
