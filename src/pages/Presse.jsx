import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import FadeIn from "../components/ui/FadeIn";
import {
  hero,
  ficheIdentite,
  chiffresContexte,
  ilsParlentDeNous,
  communiques,
  kitMedia,
  contactPresse,
} from "../data/pressData";

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

function Eyebrow({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
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

// ─── Section A — Hero ─────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-gray-900 leading-tight mb-6">
            {hero.h1}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <a
              href={hero.ctaPrimary.href}
              className="bg-gray-900 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-gray-800 transition-colors"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaOutline.href}
              className="border border-gray-300 text-gray-700 text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-gray-50 transition-colors"
            >
              {hero.ctaOutline.label}
            </a>
          </div>
          <Link
            to="/a-propos/vision"
            className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-4 transition-colors"
          >
            Notre vision & mission →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section B — Fiche d'identité ─────────────────────────────────────────

function FicheIdentiteSection() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Colonne gauche */}
        <FadeIn>
          <Eyebrow>{ficheIdentite.eyebrow}</Eyebrow>
          <SectionH2>{ficheIdentite.h2}</SectionH2>
          <p className="text-gray-600 text-base leading-relaxed max-w-lg">
            {ficheIdentite.pitch}
          </p>
        </FadeIn>

        {/* Colonne droite — fiche tech */}
        <FadeIn delay={0.1}>
          <div className="space-y-2">
            {ficheIdentite.faits.map((fait) => (
              <div
                key={fait.label}
                className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-baseline justify-between gap-4"
              >
                <span className="text-xs text-gray-500 uppercase tracking-wider shrink-0">
                  {fait.label}
                </span>
                <span className="text-gray-900 font-semibold text-sm text-right">
                  {fait.value}
                </span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs italic mt-3">{ficheIdentite.copyHint}</p>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── Section C — Chiffres & Contexte ──────────────────────────────────────

function ChiffresContexteSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <Eyebrow>{chiffresContexte.eyebrow}</Eyebrow>
          <SectionH2>{chiffresContexte.h2}</SectionH2>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {chiffresContexte.items.map((item) => (
            <motion.div
              key={item.value}
              variants={itemV}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center"
            >
              <p className="font-display font-bold text-5xl text-gray-900 leading-none mb-3">
                {item.value}
              </p>
              <p className="text-gray-600 text-base leading-snug mb-3">{item.label}</p>
              <p className="text-gray-400 text-xs italic">{item.source}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section D — Ils parlent de nous (slider) ─────────────────────────────

const ARTICLES_VISIBLE = 4;

function IlsParlentDeNousSection() {
  const [offset, setOffset] = useState(0);
  const max = ilsParlentDeNous.items.length - ARTICLES_VISIBLE;

  return (
    <section id="ils-parlent-de-nous" className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        <FadeIn className="flex items-end justify-between mb-8">
          <div>
            <Eyebrow>{ilsParlentDeNous.eyebrow}</Eyebrow>
            <SectionH2>{ilsParlentDeNous.h2}</SectionH2>
          </div>
          {max > 0 && (
            <div className="flex items-center gap-2 shrink-0">
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
            </div>
          )}
        </FadeIn>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={offset}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex flex-col gap-2"
            >
              {ilsParlentDeNous.items.slice(offset, offset + ARTICLES_VISIBLE).map((article) => (
                <div
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-xl px-5 py-3.5 flex items-center gap-4 hover:border-gray-400 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-sm shrink-0 w-36 truncate">
                    {article.media}
                  </span>
                  <span className="bg-gray-100 text-gray-500 text-xs px-2.5 py-0.5 rounded-full shrink-0">
                    {article.type}
                  </span>
                  <p className="text-gray-700 text-sm flex-1 truncate">{article.titre}</p>
                  <span className="text-gray-400 text-xs shrink-0">{article.date}</span>
                  <a
                    href={article.url}
                    className="text-xs font-semibold text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors shrink-0"
                  >
                    Lire →
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

// ─── Section E — Communiqués ───────────────────────────────────────────────

function CommuniquesSection() {
  return (
    <section id="communiques" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{communiques.eyebrow}</Eyebrow>
          <SectionH2>{communiques.h2}</SectionH2>
          <p className="text-gray-500 text-base">{communiques.subtitle}</p>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-3"
        >
          {communiques.items.map((cp) => (
            <motion.div
              key={cp.id}
              variants={itemV}
              className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between gap-4 hover:border-gray-400 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm leading-snug">{cp.titre}</p>
                <p className="text-gray-400 text-xs mt-1">{cp.date}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-gray-400 text-xs hidden sm:block">{cp.fileSize}</span>
                <a
                  href={cp.fileUrl}
                  className="border border-gray-300 text-gray-700 text-xs font-semibold px-4 py-2 rounded-full hover:border-gray-500 transition-colors whitespace-nowrap"
                >
                  Télécharger
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section F — Kit média ─────────────────────────────────────────────────

function KitMediaSection() {
  return (
    <section id="kit-media" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{kitMedia.eyebrow}</Eyebrow>
          <SectionH2>{kitMedia.h2}</SectionH2>
          <p className="text-gray-500 text-base max-w-xl">{kitMedia.subtitle}</p>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-3 mb-6"
        >
          {kitMedia.kits.map((kit) => (
            <motion.div
              key={kit.id}
              variants={itemV}
              className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between gap-4 hover:border-gray-400 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-gray-900 text-sm">{kit.event}</p>
                  {kit.date && <span className="text-gray-400 text-xs">{kit.date}</span>}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{kit.description}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-gray-400 text-xs hidden sm:block">{kit.fileSize}</span>
                <a
                  href={kit.fileUrl}
                  className="bg-gray-900 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-gray-700 transition-colors whitespace-nowrap"
                >
                  Télécharger
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <FadeIn>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="text-gray-600 text-xs italic">{kitMedia.rappel}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Section G — Contact presse ────────────────────────────────────────────

function ContactPresseSection() {
  return (
    <section id="contact-presse" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Colonne gauche */}
        <FadeIn>
          <Eyebrow>{contactPresse.eyebrow}</Eyebrow>
          <SectionH2>{contactPresse.h2}</SectionH2>
          <p className="text-gray-500 text-base leading-relaxed max-w-md">
            {contactPresse.subtitle}
          </p>
        </FadeIn>

        {/* Colonne droite — carte de contact */}
        <FadeIn delay={0.1}>
          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <p className="font-semibold text-base mb-6">{contactPresse.contact.nom}</p>

            <div className="space-y-3 mb-8">
              <p className="text-gray-300 text-sm flex items-center gap-2">
                <span>✉️</span> {contactPresse.contact.email}
              </p>
              <p className="text-gray-300 text-sm flex items-center gap-2">
                <span>📞</span> {contactPresse.contact.telephone}
              </p>
              <p className="text-gray-300 text-sm flex items-center gap-2">
                <span>📍</span> {contactPresse.contact.adresse}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={contactPresse.ctaPrimary.href}
                className="bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                {contactPresse.ctaPrimary.label}
              </a>
              <a
                href={contactPresse.ctaOutline.href}
                className="border border-gray-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                {contactPresse.ctaOutline.label}
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function Presse() {
  return (
    <>
      <HeroSection />
      <FicheIdentiteSection />
      <ChiffresContexteSection />
      <IlsParlentDeNousSection />
      <CommuniquesSection />
      <KitMediaSection />
      <ContactPresseSection />
    </>
  );
}
