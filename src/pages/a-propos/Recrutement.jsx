import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../../components/ui/FadeIn";
import {
  hero,
  chiffres,
  temoignages,
  journeeDepistage,
  pourquoiRejoindre,
  equipeInterne,
  processusRecrutement,
  offres,
  candidatureSpontanee,
  ctaFinal,
} from "../../data/recrutementData";

// ─── Animation variants ───────────────────────────────────────────────────────

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const itemV = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
        light ? "text-gray-400" : "text-gray-400"
      }`}
    >
      {children}
    </p>
  );
}

function SectionH2({ children, light = false }) {
  return (
    <h2
      className={`font-display font-bold text-3xl sm:text-4xl leading-tight mb-4 ${
        light ? "text-white" : "text-gray-900"
      }`}
    >
      {children}
    </h2>
  );
}

function IconPlaceholder({ size = 40 }) {
  return (
    <div
      className="bg-gray-100 border border-gray-200 rounded-lg shrink-0"
      style={{ width: size, height: size }}
    />
  );
}

function AvatarPlaceholder({ size = 60, rounded = "rounded-full" }) {
  return (
    <div
      className={`bg-gray-100 border border-gray-200 shrink-0 ${rounded}`}
      style={{ width: size, height: size }}
    />
  );
}

function PlayButton({ dark = false }) {
  return (
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center ${
        dark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div
        className={`w-0 h-0 ml-1 ${
          dark
            ? "border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[12px] border-l-white"
            : "border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[12px] border-l-gray-900"
        }`}
      />
    </div>
  );
}

// ─── Section 1 — Hero ────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Colonne gauche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            {hero.eyebrow}
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-6">
            {hero.h1Before}
            <em className="italic">{hero.h1Italic}</em>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
            {hero.subtitle}
          </p>
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

        {/* Colonne droite — vidéo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          {/* Placeholder vidéo 16:9 */}
          <div className="relative w-full bg-gray-800 border-2 border-dashed border-gray-700 rounded-xl overflow-hidden mb-4">
            <div className="aspect-video flex flex-col items-center justify-center gap-3 px-6 text-center">
              <PlayButton />
              <p className="text-white font-semibold text-base">{hero.video.label}</p>
              <p className="text-gray-400 text-sm">{hero.video.sublabel}</p>
            </div>
            {/* Badge durée */}
            <span className="absolute bottom-3 right-3 bg-gray-900/80 text-white text-xs font-semibold px-2 py-1 rounded">
              {hero.video.duration}
            </span>
          </div>
          {/* Citation */}
          <p className="text-gray-400 text-sm italic text-center">{hero.citation}</p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 2 — Chiffres ────────────────────────────────────────────────────

function ChiffresSection() {
  return (
    <section className="bg-white py-16 px-6 border-b border-gray-200">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-gray-200"
        >
          {chiffres.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemV}
              className="flex flex-col items-center text-center px-4 py-4"
            >
              <span className="font-display font-bold text-3xl text-gray-900 mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-gray-500 leading-snug">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Composant carte témoignage vidéo ────────────────────────────────────────

function TemoignageVideoCard({ card }) {
  return (
    <motion.div
      variants={itemV}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col"
    >
      {/* Placeholder vidéo */}
      <div className="relative bg-gray-100 border-b border-gray-200 flex items-center justify-center"
           style={{ height: 180 }}
      >
        <PlayButton dark />
        <span className="absolute bottom-3 left-3 text-gray-500 text-xs">
          Voir le témoignage · {card.videoDuration}
        </span>
        <div className="absolute bottom-3 right-3 w-[60px] h-[60px] bg-gray-200 rounded-lg border border-gray-300" />
      </div>
      {/* Corps */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
          {card.context}
        </p>
        <p className="font-semibold text-gray-900 text-sm mb-2">{card.nom}</p>
        <p className="text-gray-700 text-sm italic leading-relaxed flex-1 mb-4">
          "{card.quote}"
        </p>
        <div className="flex flex-wrap gap-2">
          {card.chips.map((chip) => (
            <span
              key={chip}
              className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section 3 — Témoignages soignants ───────────────────────────────────────

function TemoignagesSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{temoignages.eyebrow}</Eyebrow>
          <SectionH2>{temoignages.h2}</SectionH2>
          <p className="text-gray-500 text-base max-w-2xl">{temoignages.subtitle}</p>
        </FadeIn>
        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {temoignages.cards.map((card) => (
            <TemoignageVideoCard key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Composant carte vidéo simple ────────────────────────────────────────────

function VideoCard({ card }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col">
      <div
        className="relative bg-gray-100 border-b border-gray-200 flex items-center justify-center"
        style={{ height: 160 }}
      >
        <PlayButton dark />
        <span className="absolute bottom-3 left-3 text-gray-500 text-xs">
          {card.videoLabel}
        </span>
      </div>
      <div className="p-5">
        <p className="font-semibold text-gray-900 text-sm mb-2">{card.titre}</p>
        <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
      </div>
    </div>
  );
}

// ─── Section 4 — Journée de dépistage ────────────────────────────────────────

function JourneeDepistageSection() {
  const [activePilule, setActivePilule] = useState(journeeDepistage.pilules[0].id);
  const profil = journeeDepistage.profils[activePilule];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-8">
          <Eyebrow>{journeeDepistage.eyebrow}</Eyebrow>
          <SectionH2>{journeeDepistage.h2}</SectionH2>
          <p className="text-gray-500 text-base max-w-2xl">{journeeDepistage.subtitle}</p>
        </FadeIn>

        {/* Barre de pilules */}
        <FadeIn className="flex justify-center gap-2 mb-10">
          {journeeDepistage.pilules.map((pilule) => (
            <button
              key={pilule.id}
              type="button"
              onClick={() => setActivePilule(pilule.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activePilule === pilule.id
                  ? "bg-gray-900 text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {pilule.label}
            </button>
          ))}
        </FadeIn>

        {/* Contenu animé au changement de profil */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePilule}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* 2 colonnes */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 mb-12">
              {/* Paragraphes */}
              <div className="flex flex-col gap-5">
                {profil.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Timeline horizontale */}
              <div className="flex flex-col sm:flex-row items-start gap-0">
                {profil.timeline.map((step, i) => (
                  <Fragment key={step.id}>
                    <div className="flex-1 px-3 py-2">
                      <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center mb-3">
                        <span className="text-white text-xs font-bold">{step.num}</span>
                      </div>
                      <p className="font-semibold text-gray-900 text-xs mb-1">{step.titre}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
                    </div>
                    {i < profil.timeline.length - 1 && (
                      <div className="hidden sm:flex items-start justify-center pt-3 text-gray-300 text-lg shrink-0">
                        ›
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Cartes vidéo */}
        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {journeeDepistage.videoCards.map((card) => (
            <motion.div key={card.id} variants={itemV}>
              <VideoCard card={card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 5 — Pourquoi rejoindre ──────────────────────────────────────────

function PourquoiRejoindreSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{pourquoiRejoindre.eyebrow}</Eyebrow>
          <SectionH2>{pourquoiRejoindre.h2}</SectionH2>
          <p className="text-gray-500 text-base max-w-2xl">{pourquoiRejoindre.subtitle}</p>
        </FadeIn>
        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pourquoiRejoindre.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemV}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <IconPlaceholder size={40} />
              <p className="font-semibold text-gray-900 text-sm mt-4 mb-2">{card.titre}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {card.description}
              </p>
              <p className="text-gray-500 text-xs italic">{card.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 6 — Équipe interne ───────────────────────────────────────────────

function EquipeInterneSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 2 blocs en-tête */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <FadeIn>
            <Eyebrow>{equipeInterne.eyebrow}</Eyebrow>
            <SectionH2>{equipeInterne.h2}</SectionH2>
            <p className="text-gray-600 text-base leading-relaxed">
              {equipeInterne.paragraph}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-7 h-full flex flex-col justify-center">
              <p className="font-semibold text-gray-900 text-base mb-3">
                {equipeInterne.recrutementInterne.titre}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {equipeInterne.recrutementInterne.texte}
              </p>
              <button
                type="button"
                className="self-start bg-gray-900 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-700 transition-colors cursor-pointer"
              >
                {equipeInterne.recrutementInterne.cta}
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Grille membres */}
        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6"
        >
          {equipeInterne.membres.map((m) => (
            <motion.div
              key={m.id}
              variants={itemV}
              className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3"
            >
              <AvatarPlaceholder size={60} rounded="rounded-full" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">{m.nom}</p>
                <p className="text-gray-500 text-xs">{m.role}</p>
              </div>
              <p className="text-gray-600 text-xs italic leading-relaxed">"{m.citation}"</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-gray-400 text-xs italic">{equipeInterne.note}</p>
      </div>
    </section>
  );
}

// ─── Section 7 — Processus recrutement ──────────────────────────────────────

function ProcessusSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{processusRecrutement.eyebrow}</Eyebrow>
          <SectionH2>{processusRecrutement.h2}</SectionH2>
        </FadeIn>
        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col lg:flex-row items-start gap-0"
        >
          {processusRecrutement.steps.map((step, i) => (
            <Fragment key={step.id}>
              <motion.div variants={itemV} className="flex-1 px-3 py-2">
                <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center mb-3">
                  <span className="text-white text-xs font-bold">{step.num}</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm mb-1">{step.titre}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  {step.description}
                </p>
                <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                  {step.badge}
                </span>
              </motion.div>
              {i < processusRecrutement.steps.length - 1 && (
                <div className="hidden lg:flex items-start justify-center pt-2 text-gray-300 text-xl shrink-0">
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

// ─── Section 8 — Offres actuelles ────────────────────────────────────────────

function OffresSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header + filtres */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <h2 className="font-display font-bold text-3xl text-gray-900">{offres.h2}</h2>
          <div className="flex flex-wrap gap-2">
            {offres.filtres.map((f, i) => (
              <button
                key={f.id}
                type="button"
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer ${
                  i === 0
                    ? "bg-gray-900 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-400"
                }`}
              >
                {f.label}
                {f.count ? ` (${f.count})` : ""}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Sous-section soignants */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-5">
            <span className="bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              {offres.soignants.label}
            </span>
            <div className="flex-1 border-t border-gray-200" />
          </div>
          <motion.div
            variants={listV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-3"
          >
            {offres.soignants.items.map((offre) => (
              <motion.div
                key={offre.id}
                variants={itemV}
                className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-gray-900 text-sm">
                    {offre.titre}
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full">
                    {offre.tag}
                  </span>
                  <span className="text-gray-500 text-xs">{offre.lieu}</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full">
                    {offre.type}
                  </span>
                  {offre.nouveau && (
                    <span className="bg-gray-900 text-white text-xs px-2.5 py-0.5 rounded-full font-semibold">
                      Nouveau
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-gray-400 text-xs">{offre.date}</span>
                  <button
                    type="button"
                    className="border border-gray-300 text-gray-700 text-xs font-semibold px-4 py-2 rounded-full hover:border-gray-500 transition-colors cursor-pointer"
                  >
                    Postuler
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Sous-section internes */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <span className="bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              {offres.internes.label}
            </span>
            <div className="flex-1 border-t border-gray-200" />
          </div>
          <motion.div
            variants={listV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-3"
          >
            {offres.internes.items.map((offre) => (
              <motion.div
                key={offre.id}
                variants={itemV}
                className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-gray-900 text-sm">
                    {offre.titre}
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full">
                    {offre.tag}
                  </span>
                  <span className="text-gray-500 text-xs">{offre.lieu}</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full">
                    {offre.type}
                  </span>
                  {offre.statut === "nouveau" && (
                    <span className="bg-gray-900 text-white text-xs px-2.5 py-0.5 rounded-full font-semibold">
                      Nouveau
                    </span>
                  )}
                  {offre.statut === "a-venir" && (
                    <span className="bg-gray-100 text-gray-500 text-xs px-2.5 py-0.5 rounded-full">
                      À venir
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  {offre.date && (
                    <span className="text-gray-400 text-xs">{offre.date}</span>
                  )}
                  {offre.statut === "nouveau" ? (
                    <button
                      type="button"
                      className="border border-gray-300 text-gray-700 text-xs font-semibold px-4 py-2 rounded-full hover:border-gray-500 transition-colors cursor-pointer"
                    >
                      Postuler
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="border border-gray-300 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full hover:border-gray-500 transition-colors cursor-pointer"
                    >
                      Me prévenir
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 9 — Candidature spontanée ───────────────────────────────────────

function CandidatureSpontaneeSection() {
  const { form } = candidatureSpontanee;
  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Colonne gauche */}
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            {candidatureSpontanee.eyebrow}
          </p>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight mb-5">
            {candidatureSpontanee.h3}
          </h3>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            {candidatureSpontanee.paragraph}
          </p>
          <p className="text-gray-400 text-sm font-semibold mb-4">
            {candidatureSpontanee.domainesLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {candidatureSpontanee.domaines.map((d) => (
              <span
                key={d}
                className="bg-white/10 border border-white/20 text-white text-xs px-3.5 py-1.5 rounded-full"
              >
                {d}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Formulaire */}
        <FadeIn delay={0.1}>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-7">
            <p className="font-display font-bold text-lg text-white mb-6">
              {form.titre}
            </p>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder={form.fields.prenom}
                  disabled
                  className="bg-gray-700 border border-gray-600 text-gray-400 placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm w-full cursor-not-allowed"
                />
                <input
                  type="text"
                  placeholder={form.fields.nom}
                  disabled
                  className="bg-gray-700 border border-gray-600 text-gray-400 placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm w-full cursor-not-allowed"
                />
              </div>
              <input
                type="email"
                placeholder={form.fields.email}
                disabled
                className="bg-gray-700 border border-gray-600 text-gray-400 placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm w-full cursor-not-allowed"
              />
              <select
                disabled
                className="bg-gray-700 border border-gray-600 text-gray-500 rounded-lg px-4 py-2.5 text-sm w-full cursor-not-allowed appearance-none"
              >
                {form.fields.profilOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
              <textarea
                placeholder={form.fields.message}
                disabled
                rows={3}
                className="bg-gray-700 border border-gray-600 text-gray-400 placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm w-full cursor-not-allowed resize-none"
              />
              <button
                type="button"
                disabled
                className="w-full bg-white text-gray-900 py-3 rounded-full font-semibold text-sm cursor-not-allowed opacity-80"
              >
                {form.cta}
              </button>
              <p className="text-gray-500 text-xs text-center">{form.note}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Section 10 — CTA Final ───────────────────────────────────────────────────

function CtaFinalSection() {
  return (
    <section className="bg-gray-900 border-t border-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <FadeIn>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-4">
            {ctaFinal.h2}
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">{ctaFinal.subtitle}</p>
        </FadeIn>
        <FadeIn delay={0.1} className="flex flex-col gap-3 lg:items-end">
          <button
            type="button"
            className="bg-white text-gray-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer w-full lg:w-auto"
          >
            {ctaFinal.ctaPrimary}
          </button>
          <button
            type="button"
            className="border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors cursor-pointer w-full lg:w-auto"
          >
            {ctaFinal.ctaOutline}
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Recrutement() {
  return (
    <>
      <HeroSection />
      <ChiffresSection />
      <TemoignagesSection />
      <JourneeDepistageSection />
      <PourquoiRejoindreSection />
      <EquipeInterneSection />
      <ProcessusSection />
      <OffresSection />
      <CandidatureSpontaneeSection />
      <CtaFinalSection />
    </>
  );
}
