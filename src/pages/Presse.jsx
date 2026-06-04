import { motion } from "framer-motion";
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
          <div className="flex flex-wrap justify-center gap-3">
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

// ─── Section D — Ils parlent de nous ──────────────────────────────────────

function IlsParlentDeNousSection() {
  return (
    <section id="ils-parlent-de-nous" className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-12">
          <Eyebrow>{ilsParlentDeNous.eyebrow}</Eyebrow>
          <SectionH2>{ilsParlentDeNous.h2}</SectionH2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            {ilsParlentDeNous.subtitle}
          </p>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {ilsParlentDeNous.items.map((article) => (
            <motion.div
              key={article.id}
              variants={itemV}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-colors flex flex-col"
            >
              {/* Média + type */}
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-gray-900 text-sm">{article.media}</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full shrink-0 ml-2">
                  {article.type}
                </span>
              </div>

              {/* Titre */}
              <p className="font-display font-semibold text-base text-gray-900 leading-snug my-3 line-clamp-3 flex-1">
                {article.titre}
              </p>

              {/* Excerpt */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Pied de carte */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="text-gray-400 text-xs">{article.date}</span>
                <a
                  href={article.url}
                  className="text-sm font-semibold text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
                >
                  Lire l'article →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
    <section id="kit-media" className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-12">
          <Eyebrow>{kitMedia.eyebrow}</Eyebrow>
          <SectionH2>{kitMedia.h2}</SectionH2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">{kitMedia.subtitle}</p>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
        >
          {kitMedia.items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemV}
              className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4 hover:border-gray-400 transition-colors"
            >
              <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-lg shrink-0 flex items-center justify-center text-xl">
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">{item.titre}</p>
                <p className="text-gray-500 text-sm leading-relaxed mt-1 mb-3">
                  {item.description}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={item.fileUrl}
                    className="text-sm font-semibold text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
                  >
                    Télécharger →
                  </a>
                  <span className="text-gray-400 text-xs">{item.fileSize}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <FadeIn>
          <div className="bg-gray-100 border border-gray-200 rounded-xl p-4">
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
