import { Fragment } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../components/ui/FadeIn";
import AccordionItem from "../components/ui/AccordionItem";
import ConceptSection from "../components/sections/ConceptSection";
import CustomBusBlock from "../components/sections/CustomBusBlock";
import {
  piloteBanner,
  hero,
  logos,
  stats,
  concept,
  protocole,
  piloteNormandie,
  couverture,
  solutions,
  temoignages,
  customBus,
  seo,
  faq,
  ctaFinal,
} from "../data/dermatobusData";

// ─── Animation variants ───────────────────────────────────────────────────────

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemV = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function Eyebrow({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
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

function IconBox({ size = "w-10 h-10" }) {
  return (
    <div className={`${size} bg-gray-100 border border-gray-200 rounded-lg shrink-0`} />
  );
}

function renderSegments(segments) {
  return segments.map((seg, i) =>
    seg.bold ? (
      <span key={i} className="font-semibold text-gray-900">
        {seg.text}
      </span>
    ) : (
      <span key={i}>{seg.text}</span>
    )
  );
}

// ─── Section 0 — Bannière pilote ──────────────────────────────────────────────

function BannierePilote() {
  return (
    <div className="w-full bg-gray-100 border-b border-gray-200 px-6 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <div className="flex items-center gap-3">
        <span className="bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shrink-0">
          {piloteBanner.badge}
        </span>
        <span className="text-gray-700 text-sm">{piloteBanner.texte}</span>
      </div>
      <button
        type="button"
        className="shrink-0 border border-gray-300 text-gray-600 text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
      >
        {piloteBanner.cta}
      </button>
    </div>
  );
}

// ─── Section 1 — Hero + Formulaire ───────────────────────────────────────────

function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] min-h-[80vh]">
      {/* Gauche — fond gray-900 */}
      <div className="bg-gray-900 px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            {hero.eyebrow}
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-6">
            <em className="not-italic italic">{hero.h1Parts.italicA}</em>
            {hero.h1Parts.mid}
            <em className="not-italic italic">{hero.h1Parts.italicB}</em>
            {hero.h1Parts.end}
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-8">{hero.subtitle}</p>

          <ul className="space-y-3 mb-10">
            {hero.checks.map((check) => (
              <li key={check} className="flex items-start gap-3 text-gray-300 text-sm">
                <span className="text-gray-500 shrink-0 mt-0.5">✓</span>
                {check}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <a
              href="#demander-presentation"
              className="bg-white text-gray-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors text-center"
            >
              {hero.ctaPrimary}
            </a>
            <button
              type="button"
              className="border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors cursor-pointer"
            >
              {hero.ctaOutline}
            </button>
          </div>

          <p className="text-gray-500 text-xs">
            Vous êtes patient·e ?{" "}
            <a href="/prendre-rdv" className="text-gray-400 underline hover:text-white transition-colors">
              → Trouver un dépistage près de chez vous
            </a>
          </p>
        </motion.div>
      </div>

      {/* Droite — bloc média */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        className="relative bg-[#0d0d0d] flex items-center justify-center min-h-[360px] lg:min-h-full overflow-hidden"
      >
        <div className="relative z-10 flex flex-col items-center gap-4 px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 4l12 6-12 6V4z" fill="white" fillOpacity="0.8" />
            </svg>
          </div>
          <p className="text-gray-600 text-xs leading-relaxed max-w-[220px]">
            [ Photo ou vidéo de présentation — DermatoBus en déploiement ]
          </p>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/60 text-gray-500 text-[10px] px-2 py-1 rounded">
          2:30
        </div>
      </motion.div>
    </section>
  );
}

// ─── Section 2 — Logos ────────────────────────────────────────────────────────

function LogosSection() {
  return (
    <section className="bg-white py-12 px-6 border-b border-gray-100">
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

// ─── Section 3 — Stats ────────────────────────────────────────────────────────

function StatsSection() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-gray-200"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={itemV}
              className="flex flex-col items-center text-center px-4 py-4"
            >
              <span className="font-display font-bold text-3xl text-gray-900 mb-1">
                {s.value}
              </span>
              <span className="text-xs text-gray-600 leading-snug mb-1">{s.label}</span>
              <span className="text-[10px] italic text-gray-400">{s.source}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 5 — Protocole 4 étapes ──────────────────────────────────────────

function ProtocoleSection() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{protocole.eyebrow}</Eyebrow>
          <SectionH2>{protocole.h2}</SectionH2>
          <p className="text-gray-500 text-base max-w-2xl">{protocole.subtitle}</p>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col lg:flex-row items-stretch gap-0 mb-6"
        >
          {protocole.steps.map((step, i) => (
            <Fragment key={step.id}>
              <motion.div
                variants={itemV}
                className="flex-1 bg-white border border-gray-200 rounded-xl p-6 flex flex-col"
              >
                <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center mb-4 shrink-0">
                  <span className="text-white text-xs font-bold">{step.num}</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm mb-2">{step.titre}</p>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                  {step.description}
                </p>
                <span className="self-start bg-gray-100 text-gray-700 text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {step.badge}
                </span>
              </motion.div>
              {i < protocole.steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center px-2 text-gray-300 text-xl shrink-0">
                  ›
                </div>
              )}
            </Fragment>
          ))}
        </motion.div>

        {/* Note médico-légale */}
        <FadeIn>
          <div className="bg-gray-100 border border-gray-200 rounded-lg px-5 py-4">
            <p className="text-sm leading-relaxed text-gray-600">
              {renderSegments(protocole.note.segments)}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Section 6 — Pilote Normandie ────────────────────────────────────────────

function PiloteNormandieSection() {
  const { chuCard } = piloteNormandie;
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{piloteNormandie.eyebrow}</Eyebrow>
          <SectionH2>{piloteNormandie.h2}</SectionH2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Colonne gauche */}
          <FadeIn>
            <div className="space-y-5 mb-7">
              {piloteNormandie.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 text-base leading-relaxed">{p}</p>
              ))}
            </div>

            {/* Carte placeholder */}
            <div className="h-[180px] bg-gray-100 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center mb-6 px-4">
              <p className="text-gray-400 text-xs text-center">{piloteNormandie.mapPlaceholder}</p>
            </div>

            {/* 3 stats en ligne */}
            <div className="grid grid-cols-3 gap-3">
              {piloteNormandie.statsRow.map((s) => (
                <div
                  key={s.label}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center"
                >
                  <span className="font-display font-bold text-2xl text-gray-900 mb-1">{s.value}</span>
                  <span className="text-xs text-gray-500 leading-snug">{s.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Colonne droite — Carte CHU */}
          <FadeIn delay={0.1}>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col gap-5">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gray-100 border border-gray-200 rounded-lg shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{chuCard.titre}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{chuCard.sousTitre}</p>
                </div>
              </div>

              {/* Paragraphe */}
              <p className="text-gray-600 text-sm leading-relaxed">{chuCard.paragraphe}</p>

              {/* Items */}
              <div className="space-y-2">
                {chuCard.items.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-gray-400 text-xs shrink-0 mt-0.5">→</span>
                    <span className="text-gray-700 text-xs leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Encadré + CTA */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{chuCard.encadre.titre}</p>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">{chuCard.encadre.texte}</p>
                <button
                  type="button"
                  className="w-full bg-gray-900 text-white py-2.5 rounded-full font-semibold text-sm hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  {chuCard.cta}
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Section 7 — Couverture géographique ─────────────────────────────────────

function CouvertureSection() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-8">
          <Eyebrow>{couverture.eyebrow}</Eyebrow>
          <SectionH2>{couverture.h2}</SectionH2>
          <p className="text-gray-500 text-base max-w-2xl">{couverture.subtitle}</p>
        </FadeIn>

        <FadeIn className="mb-8">
          <div className="h-[200px] bg-gray-100 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center">
            <p className="text-gray-400 text-xs text-center px-4">{couverture.mapPlaceholder}</p>
          </div>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {couverture.regions.map((region) => {
            const isPilote = region.statut === "pilote";
            return (
              <motion.div
                key={region.id}
                variants={itemV}
                className="bg-white border border-gray-200 rounded-xl p-5"
              >
                <p className="font-semibold text-gray-900 text-sm mb-1">{region.nom}</p>
                <p className="text-gray-500 text-xs mb-3">{region.departements}</p>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      isPilote ? "bg-gray-900" : "bg-gray-400"
                    }`}
                  />
                  <span
                    className={`text-xs font-semibold ${
                      isPilote ? "text-gray-700" : "text-gray-400"
                    }`}
                  >
                    {region.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 8 — Nos 3 solutions ─────────────────────────────────────────────

function SolutionsSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{solutions.eyebrow}</Eyebrow>
          <SectionH2>{solutions.h2}</SectionH2>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {solutions.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemV}
              className={`rounded-xl border border-gray-200 p-6 flex flex-col gap-4 ${
                card.highlight ? "bg-gray-100" : "bg-white"
              }`}
            >
              <span className="self-start bg-gray-100 border border-gray-200 text-gray-600 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                {card.badge}
              </span>
              <IconBox size="w-10 h-10" />
              <p className="font-display font-bold text-xl text-gray-900">{card.titre}</p>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{card.description}</p>
              {card.ctaDisabled ? (
                <button
                  type="button"
                  disabled
                  className="mt-2 border border-gray-300 text-gray-400 py-2.5 rounded-full text-sm font-semibold cursor-not-allowed"
                >
                  {card.cta}
                </button>
              ) : (
                <Link
                  to={card.href}
                  className="mt-2 block text-center bg-gray-900 text-white py-2.5 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
                >
                  {card.cta}
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>

        <CustomBusBlock {...customBus} />
      </div>
    </section>
  );
}

// ─── Section 9 — Contenu SEO ──────────────────────────────────────────────────

function SeoSection() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{seo.eyebrow}</Eyebrow>
          <SectionH2>{seo.h2}</SectionH2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn delay={0.05}>
            <div className="space-y-8">
              {seo.left.blocks.map((block) => (
                <div key={block.id}>
                  <h3 className="font-display font-bold text-base text-gray-900 mb-3">
                    {block.h3}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {renderSegments(block.segments)}
                  </p>
                </div>
              ))}
              <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
                {seo.left.liens.map((lien) => (
                  <span
                    key={lien}
                    className="text-xs text-gray-700 underline underline-offset-2 cursor-pointer hover:text-gray-900 transition-colors"
                  >
                    {lien}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h3 className="font-display font-bold text-base text-gray-900 mb-4">
              {seo.right.h3}
            </h3>
            <div className="space-y-3 mb-6">
              {seo.right.items.map((item) => (
                <p key={item.id} className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-semibold text-gray-900">{item.bold}</span>
                  {item.suite}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {seo.right.liens.map((lien) => (
                <span
                  key={lien}
                  className="text-xs text-gray-700 underline underline-offset-2 cursor-pointer hover:text-gray-900 transition-colors"
                >
                  {lien}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Section 10 — FAQ ─────────────────────────────────────────────────────────

function FaqSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-10">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <SectionH2>{faq.h2}</SectionH2>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-3"
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

// ─── Section 11 — CTA Final ───────────────────────────────────────────────────

function CtaFinalSection() {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-5">
            {ctaFinal.h2}
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">{ctaFinal.subtitle}</p>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-col gap-3">
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
          <button
            type="button"
            className="border border-gray-600 text-gray-400 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors cursor-pointer"
          >
            {ctaFinal.ctaGhost}
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

// ─── Section — Témoignages ────────────────────────────────────────────────────

function TemoignagesSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{temoignages.eyebrow}</Eyebrow>
          <SectionH2>{temoignages.h2}</SectionH2>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5"
        >
          {temoignages.top.map((t) => (
            <motion.div key={t.id} variants={itemV} className="border border-gray-200 rounded-xl p-6 flex flex-col">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-4">{t.contexte}</p>
              <p className="text-gray-700 text-sm leading-relaxed italic flex-1 mb-5">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 border-t border-gray-200 pt-5"
        >
          {temoignages.bottom.map((t) => (
            <motion.div key={t.id} variants={itemV} className="border border-gray-200 rounded-xl p-6 flex flex-col">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-4">{t.contexte}</p>
              <p className="text-gray-700 text-sm leading-relaxed italic flex-1 mb-5">"{t.quote}"</p>
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

// ─── Section — Demander une présentation ──────────────────────────────────────

function DemandePresentationSection() {
  return (
    <section id="demander-presentation" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Demander une présentation
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 leading-tight mb-5">
            Parlons de votre projet pilote
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Un expert Hocoia vous présente le DermatoBus, répond à vos questions et vous aide à dimensionner votre projet pilote.
          </p>
          <ul className="space-y-3">
            {["Réponse sous 24h", "Sans engagement", "Confidentiel — RGPD"].map((b) => (
              <li key={b} className="flex items-center gap-3 text-gray-700 text-sm">
                <span className="text-gray-400 shrink-0">✓</span>
                {b}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="font-display font-bold text-base text-gray-900 mb-1">
              {hero.form.title}
            </h3>
            <p className="text-gray-500 text-xs mb-5">{hero.form.subtitle}</p>
            <div className="space-y-3">
              <select disabled className="w-full bg-white border border-gray-200 text-gray-400 rounded-lg px-3 py-2.5 text-sm cursor-not-allowed appearance-none">
                {hero.form.vousEtesOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
              <div className="grid grid-cols-2 gap-3">
                <input disabled placeholder={hero.form.prenomPlaceholder} className="bg-white border border-gray-200 text-gray-400 placeholder-gray-400 rounded-lg px-3 py-2.5 text-sm cursor-not-allowed" />
                <input disabled placeholder={hero.form.nomPlaceholder} className="bg-white border border-gray-200 text-gray-400 placeholder-gray-400 rounded-lg px-3 py-2.5 text-sm cursor-not-allowed" />
              </div>
              <input disabled placeholder={hero.form.emailPlaceholder} className="w-full bg-white border border-gray-200 text-gray-400 placeholder-gray-400 rounded-lg px-3 py-2.5 text-sm cursor-not-allowed" />
              <input disabled placeholder={hero.form.territoirePlaceholder} className="w-full bg-white border border-gray-200 text-gray-400 placeholder-gray-400 rounded-lg px-3 py-2.5 text-sm cursor-not-allowed" />
              <button disabled type="button" className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold text-sm cursor-not-allowed">
                {hero.form.cta}
              </button>
              <p className="text-gray-400 text-xs text-center">{hero.form.note}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function DermatoBus() {
  return (
    <>
      <BannierePilote />
      <HeroSection />
      <LogosSection />
      <StatsSection />
      <ConceptSection {...concept} />
      <ProtocoleSection />
      <PiloteNormandieSection />
      <CouvertureSection />
      <TemoignagesSection />
      <DemandePresentationSection />
      <SolutionsSection />
      <SeoSection />
      <FaqSection />
      <CtaFinalSection />
    </>
  );
}
