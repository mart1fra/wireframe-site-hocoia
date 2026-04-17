import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../../components/ui/FadeIn";
import AccordionItem from "../../components/ui/AccordionItem";
import {
  hero,
  logos,
  stats,
  definition,
  thematiques,
  parcours,
  temoignages,
  solutions,
  seo,
  faq,
  ctaFinal,
} from "../../data/medicobusData";

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

function Eyebrow({ children, light = false }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${light ? "text-gray-400" : "text-gray-400"}`}>
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

function IconBox({ size = "w-10 h-10" }) {
  return <div className={`${size} bg-gray-100 border border-gray-200 rounded-lg shrink-0`} />;
}

// ─── Section 1 — Hero + Formulaire ────────────────────────────────────────

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
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            {hero.subtitle}
          </p>

          <ul className="space-y-3 mb-10">
            {hero.checks.map((check) => (
              <li key={check} className="flex items-start gap-3 text-gray-300 text-sm">
                <span className="text-gray-500 shrink-0 mt-0.5">✓</span>
                {check}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <button type="button" className="bg-white text-gray-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer">
              {hero.ctaPrimary}
            </button>
            <button type="button" className="border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors cursor-pointer">
              {hero.ctaOutline}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Droite — fond gray-50 */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        className="bg-gray-50 px-7 py-12 flex flex-col gap-5 justify-center"
      >
        {/* Formulaire B2B */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-display font-bold text-base text-gray-900 mb-1">
            {hero.form.title}
          </h2>
          <p className="text-gray-500 text-xs mb-5">{hero.form.subtitle}</p>

          <div className="space-y-3">
            <select disabled className="w-full bg-gray-50 border border-gray-200 text-gray-400 rounded-lg px-3 py-2.5 text-sm cursor-not-allowed appearance-none">
              {hero.form.vousEtesOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
            <div className="grid grid-cols-2 gap-3">
              <input disabled placeholder={hero.form.prenomPlaceholder} className="bg-gray-50 border border-gray-200 text-gray-400 placeholder-gray-400 rounded-lg px-3 py-2.5 text-sm cursor-not-allowed" />
              <input disabled placeholder={hero.form.nomPlaceholder} className="bg-gray-50 border border-gray-200 text-gray-400 placeholder-gray-400 rounded-lg px-3 py-2.5 text-sm cursor-not-allowed" />
            </div>
            <input disabled placeholder={hero.form.emailPlaceholder} className="w-full bg-gray-50 border border-gray-200 text-gray-400 placeholder-gray-400 rounded-lg px-3 py-2.5 text-sm cursor-not-allowed" />
            <input disabled placeholder={hero.form.communePlaceholder} className="w-full bg-gray-50 border border-gray-200 text-gray-400 placeholder-gray-400 rounded-lg px-3 py-2.5 text-sm cursor-not-allowed" />
            <select disabled className="w-full bg-gray-50 border border-gray-200 text-gray-400 rounded-lg px-3 py-2.5 text-sm cursor-not-allowed appearance-none">
              {hero.form.specialiteOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
            <button disabled type="button" className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold text-sm cursor-not-allowed">
              {hero.form.cta}
            </button>
            <p className="text-gray-400 text-xs text-center">{hero.form.note}</p>
          </div>
        </div>

        {/* Carte patient */}
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-5">
          <p className="font-semibold text-gray-900 text-sm mb-2">{hero.patientCard.titre}</p>
          <p className="text-gray-600 text-xs leading-relaxed mb-4">{hero.patientCard.texte}</p>
          <button type="button" className="w-full border border-gray-300 text-gray-700 text-sm font-semibold py-2.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
            {hero.patientCard.cta}
          </button>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Section 2 — Logos ────────────────────────────────────────────────────

function LogosSection() {
  return (
    <section className="bg-white py-12 px-6 border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs text-gray-500 mb-6">{logos.label}</p>
        <div className="flex flex-wrap justify-center gap-3">
          {logos.items.map((item) => (
            <span key={item} className="bg-gray-100 border border-gray-200 text-gray-500 text-xs font-medium px-4 py-2 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 3 — Stats ────────────────────────────────────────────────────

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
            <motion.div key={s.label} variants={itemV} className="flex flex-col items-center text-center px-4 py-4">
              <span className="font-display font-bold text-3xl text-gray-900 mb-1">{s.value}</span>
              <span className="text-xs text-gray-600 leading-snug mb-1">{s.label}</span>
              <span className="text-[10px] italic text-gray-400">{s.source}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 4 — Définition ───────────────────────────────────────────────

function DefinitionSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Gauche */}
        <FadeIn>
          <Eyebrow>{definition.eyebrow}</Eyebrow>
          <SectionH2>{definition.h2}</SectionH2>
          {definition.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 text-base leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </FadeIn>

        {/* Droite */}
        <FadeIn delay={0.15}>
          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            {definition.photos.map((photo, i) => (
              <div key={i} className={`${photo.height} bg-gray-100 border border-dashed border-gray-200 rounded-xl flex items-center justify-center`}>
                <p className="text-gray-400 text-xs text-center px-4">{photo.placeholder}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Section 5 — Équipements & Protocoles ─────────────────────────────────

function ThematiquesSection() {
  const [activeTab, setActiveTab] = useState(thematiques.tabs[0].id);
  const content = thematiques.content[activeTab];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-10">
          <Eyebrow>{thematiques.eyebrow}</Eyebrow>
          <SectionH2>{thematiques.h2}</SectionH2>
          <p className="text-gray-500 text-base">{thematiques.subtitle}</p>
        </FadeIn>

        {/* Onglets */}
        <FadeIn delay={0.05} className="flex flex-wrap gap-2 mb-8">
          {thematiques.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-gray-900 text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          >
            {/* Colonne gauche */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                {content.equipLabel}
              </p>
              <div className="space-y-4 mb-6">
                {content.equip.map((e) => (
                  <div key={e.id} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gray-100 border border-gray-200 rounded-md shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{e.titre}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne droite */}
            <div className="p-8 bg-gray-50">
              <div className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
                  {content.protocoleLabel}
                </p>
                <div className="space-y-3 mb-5">
                  {content.protocole.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-gray-900 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white" style={{ fontSize: "9px" }}>{i + 1}</span>
                      </div>
                      <p className="text-xs text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
                <span className="inline-block bg-gray-200 text-gray-700 text-xs rounded-full px-3 py-1">
                  {content.badge}
                </span>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2">
                  {content.affectionsLabel}
                </p>
                <p className="text-sm text-gray-600">{content.affections}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── Section 6 — Parcours ─────────────────────────────────────────────────

function ParcoursSection() {
  return (
    <section className="bg-white py-24 px-6">
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
          {parcours.steps.map((step, i) => (
            <Fragment key={step.id}>
              <motion.div variants={itemV} className="flex-1 px-2">
                <p className="text-xs text-gray-500 mb-1">{step.number}</p>
                <p className="font-semibold text-gray-900 text-sm mb-1">{step.titre}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
              {i < parcours.steps.length - 1 && (
                <div className="hidden lg:flex items-start justify-center px-2 pt-4 text-gray-300 text-xl">→</div>
              )}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 7 — Témoignages ──────────────────────────────────────────────

function TemoignagesSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{temoignages.eyebrow}</Eyebrow>
          <SectionH2>{temoignages.h2}</SectionH2>
        </FadeIn>

        {/* Top — 3 colonnes */}
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

        {/* Bottom — 2 colonnes */}
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

// ─── Section 9 — Nos 3 solutions ──────────────────────────────────────────

function SolutionsSection() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{solutions.eyebrow}</Eyebrow>
          <SectionH2>{solutions.h2}</SectionH2>
          <p className="text-gray-500 text-base">{solutions.subtitle}</p>
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
              className={`rounded-xl border border-gray-200 p-6 flex flex-col gap-4 ${card.highlight ? "bg-gray-100" : "bg-white"}`}
            >
              <span className="self-start bg-gray-100 border border-gray-200 text-gray-600 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                {card.badge}
              </span>
              <IconBox size="w-10 h-10" />
              <p className="font-display font-bold text-xl text-gray-900">{card.titre}</p>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{card.description}</p>
              <ul className="space-y-1">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="text-gray-400 shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
              {card.ctaDisabled ? (
                <button type="button" disabled className="mt-2 border border-gray-300 text-gray-400 py-2.5 rounded-full text-sm font-semibold cursor-not-allowed">
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
      </div>
    </section>
  );
}

// ─── Section 10 — Contenu SEO ─────────────────────────────────────────────

function SeoSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{seo.eyebrow}</Eyebrow>
          <SectionH2>{seo.h2}</SectionH2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne gauche */}
          <FadeIn delay={0.05}>
            <div className="space-y-8">
              {seo.left.blocks.map((block) => (
                <div key={block.id}>
                  <h3 className="font-display font-bold text-base text-gray-900 mb-3">
                    {block.h3}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {block.paragraphe.before}
                    <span className="font-semibold text-gray-900">{block.paragraphe.bold}</span>
                    {block.paragraphe.after}
                  </p>
                </div>
              ))}
              <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
                {seo.left.liens.map((lien) => (
                  <span key={lien} className="text-xs text-gray-700 underline underline-offset-2 cursor-pointer hover:text-gray-900 transition-colors">
                    {lien}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Colonne droite */}
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
                <span key={lien} className="text-xs text-gray-700 underline underline-offset-2 cursor-pointer hover:text-gray-900 transition-colors">
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

// ─── Section 11 — FAQ ─────────────────────────────────────────────────────

function FaqSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-4">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <SectionH2>{faq.h2}</SectionH2>
          <p className="text-gray-500 text-base">{faq.subtitle}</p>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 space-y-3"
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

// ─── Section 12 — CTA Final ───────────────────────────────────────────────

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
          <button type="button" className="bg-white text-gray-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer">
            {ctaFinal.ctaPrimary}
          </button>
          <button type="button" className="border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors cursor-pointer">
            {ctaFinal.ctaOutline}
          </button>
          <button type="button" className="border border-gray-600 text-gray-400 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors cursor-pointer">
            {ctaFinal.ctaGhost}
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function MedicoBus() {
  return (
    <>
      <HeroSection />
      <LogosSection />
      <StatsSection />
      <DefinitionSection />
      <ThematiquesSection />
      <ParcoursSection />
      <TemoignagesSection />
      <SolutionsSection />
      <SeoSection />
      <FaqSection />
      <CtaFinalSection />
    </>
  );
}
