import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../../components/ui/FadeIn";
import {
  hero,
  journeeDepistage,
  pourquoiRejoindre,
  equipeInterne,
  processusRecrutement,
  offres,
  candidatureSpontanee,
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
  if (!children) return null;
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

// ─── Section 1 · Hero ────────────────────────────────────────────────────────

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

        {/* Colonne droite · vidéo */}
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

// ─── Section 4 · Journée de dépistage ────────────────────────────────────────

function JourneeDepistageSection() {
  const [activePilule, setActivePilule] = useState(journeeDepistage.pilules[0].id);
  const profil = journeeDepistage.profils[activePilule];

  return (
    <section className="bg-white py-14 px-6">
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
      </div>
    </section>
  );
}

// ─── Section 5 · Pourquoi rejoindre ──────────────────────────────────────────

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

// ─── Section 6 · Équipe interne ───────────────────────────────────────────────

const MEMBRES_VISIBLE = 4;

function EquipeInterneSection() {
  const [offset, setOffset] = useState(0);
  const max = equipeInterne.membres.length - MEMBRES_VISIBLE;

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

        {/* Carrousel membres */}
        <FadeIn className="flex items-center justify-end gap-2 mb-4">
          {max > 0 && (
            <>
              <button
                type="button"
                onClick={() => setOffset((o) => Math.max(0, o - 1))}
                disabled={offset === 0}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setOffset((o) => Math.min(max, o + 1))}
                disabled={offset === max}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                →
              </button>
            </>
          )}
        </FadeIn>

        <div className="overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={offset}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="grid grid-cols-4 gap-5"
            >
              {equipeInterne.membres.slice(offset, offset + MEMBRES_VISIBLE).map((m) => (
                <div
                  key={m.id}
                  className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3"
                >
                  <AvatarPlaceholder size={60} rounded="rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{m.nom}</p>
                    <p className="text-gray-500 text-xs">{m.role}</p>
                  </div>
                  <p className="text-gray-600 text-xs italic leading-relaxed">"{m.citation}"</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="text-gray-400 text-xs italic">{equipeInterne.note}</p>
      </div>
    </section>
  );
}

// ─── Section 7 · Processus recrutement ──────────────────────────────────────

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

// ─── Section 8 · Offres actuelles ────────────────────────────────────────────

function OffresSection() {
  const [categorie, setCategorie] = useState("all");
  const [specialite, setSpecialite] = useState("all");
  const [region, setRegion] = useState("all");

  function matchesFilters(offre) {
    if (specialite !== "all" && offre.specialiteId !== specialite) return false;
    if (region !== "all") {
      if (region === "national" || region === "remote") {
        if (!offre.regions.includes(region)) return false;
      } else {
        if (
          !offre.regions.includes(region) &&
          !offre.regions.includes("national") &&
          !offre.regions.includes("remote")
        ) return false;
      }
    }
    return true;
  }

  const showSoignants = categorie === "all" || categorie === "soignant";
  const showInternes  = categorie === "all" || categorie === "tech" || categorie === "mktg";

  const filteredSoignants = showSoignants
    ? offres.soignants.items.filter(matchesFilters)
    : [];

  const filteredInternes = showInternes
    ? offres.internes.items.filter((offre) => {
        if (!matchesFilters(offre)) return false;
        if (categorie === "tech") return offre.specialiteId === "tech";
        if (categorie === "mktg") return offre.specialiteId === "marketing" || offre.specialiteId === "operations";
        return true;
      })
    : [];

  const totalCount = filteredSoignants.length + filteredInternes.length;
  const hasActiveFilters = categorie !== "all" || specialite !== "all" || region !== "all";

  function resetFilters() {
    setCategorie("all");
    setSpecialite("all");
    setRegion("all");
  }

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <FadeIn className="mb-6">
          <h2 className="font-display font-bold text-3xl text-gray-900">{offres.h2}</h2>
        </FadeIn>

        {/* Filtres */}
        <FadeIn className="mb-10 flex flex-col gap-4">
          {/* Pilules de catégorie */}
          <div className="flex flex-wrap gap-2">
            {offres.filtres.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setCategorie(f.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer ${
                  categorie === f.id
                    ? "bg-gray-900 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-400"
                }`}
              >
                {f.label}{f.count ? ` (${f.count})` : ""}
              </button>
            ))}
          </div>

          {/* Selects spécialité + région */}
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <select
              value={specialite}
              onChange={(e) => setSpecialite(e.target.value)}
              className="flex-1 w-full bg-white border border-gray-200 rounded-full text-sm text-gray-700 px-4 py-2.5 hover:border-gray-400 focus:border-gray-500 focus:outline-none cursor-pointer"
            >
              {offres.specialites.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="flex-1 w-full bg-white border border-gray-200 rounded-full text-sm text-gray-700 px-4 py-2.5 hover:border-gray-400 focus:border-gray-500 focus:outline-none cursor-pointer"
            >
              {offres.regions.map((r) => (
                <option key={r.id} value={r.id}>{r.label}</option>
              ))}
            </select>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs text-gray-500 hover:text-gray-900 underline-offset-4 hover:underline transition-colors cursor-pointer shrink-0"
              >
                Réinitialiser
              </button>
            )}
          </div>

          {/* Compteur */}
          <p className="text-gray-500 text-sm">
            {totalCount} offre{totalCount > 1 ? "s" : ""} correspond{totalCount > 1 ? "ent" : ""} à vos filtres
          </p>
        </FadeIn>

        {/* État vide */}
        {totalCount === 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-10 text-center">
            <p className="font-semibold text-gray-900 text-base mb-3">
              Aucune offre ne correspond à vos critères pour le moment.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
              Envoyez-nous une candidature spontanée, on lit tout · vous serez prévenu·e dès qu'une offre s'ouvre dans votre zone.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="bg-gray-900 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-700 transition-colors cursor-pointer"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Sous-section soignants */}
        {showSoignants && filteredSoignants.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <span className="bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                {offres.soignants.label}
              </span>
            </div>
            <motion.div
              variants={listV}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-3"
            >
              {filteredSoignants.map((offre) => (
                <motion.div
                  key={offre.id}
                  variants={itemV}
                  className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-gray-900 text-sm">{offre.titre}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full">{offre.tag}</span>
                    <span className="text-gray-500 text-xs">{offre.lieu}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full">{offre.type}</span>
                    {offre.nouveau && (
                      <span className="bg-gray-900 text-white text-xs px-2.5 py-0.5 rounded-full font-semibold">Nouveau</span>
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
        )}

        {/* Sous-section internes */}
        {showInternes && filteredInternes.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                {offres.internes.label}
              </span>
            </div>
            <motion.div
              variants={listV}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-3"
            >
              {filteredInternes.map((offre) => (
                <motion.div
                  key={offre.id}
                  variants={itemV}
                  className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-gray-900 text-sm">{offre.titre}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full">{offre.tag}</span>
                    <span className="text-gray-500 text-xs">{offre.lieu}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full">{offre.type}</span>
                    {offre.statut === "nouveau" && (
                      <span className="bg-gray-900 text-white text-xs px-2.5 py-0.5 rounded-full font-semibold">Nouveau</span>
                    )}
                    {offre.statut === "a-venir" && (
                      <span className="bg-gray-100 text-gray-500 text-xs px-2.5 py-0.5 rounded-full">À venir</span>
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
        )}
      </div>
    </section>
  );
}

// ─── Section 9 · Candidature spontanée ───────────────────────────────────────

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
              <div className="bg-gray-700 border border-gray-600 border-dashed rounded-lg px-4 py-3 flex items-center gap-3 cursor-not-allowed">
                <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                <span className="text-sm text-gray-500">{form.fields.pieceJointe}</span>
              </div>
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Recrutement() {
  return (
    <>
      <HeroSection />
      <JourneeDepistageSection />
      <PourquoiRejoindreSection />
      <EquipeInterneSection />
      <ProcessusSection />
      <OffresSection />
      <CandidatureSpontaneeSection />
    </>
  );
}
