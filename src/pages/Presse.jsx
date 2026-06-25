import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import FadeIn from "../components/ui/FadeIn";
import {
  hero,
  chiffresContexte,
  ilsParlentDeNous,
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
  if (!children) return null;
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {chiffresContexte.items.map((item) => (
            <motion.div
              key={item.value}
              variants={itemV}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-7 text-center"
            >
              <p className="font-display font-bold text-5xl text-gray-900 leading-none mb-3">
                {item.value}
              </p>
              <p className="text-gray-600 text-sm leading-snug">{item.label}</p>
              <p className="text-gray-600 text-sm leading-snug">{item.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section D — Ils parlent de nous (slider) ─────────────────────────────

const ARTICLES_VISIBLE = 3;

function IlsParlentDeNousSection() {
  const [offset, setOffset] = useState(0);
  const max = ilsParlentDeNous.items.length - ARTICLES_VISIBLE;

  return (
    <section id="ils-parlent-de-nous" className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

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
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            >
              {ilsParlentDeNous.items.slice(offset, offset + ARTICLES_VISIBLE).map((article) => (
                <div
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="bg-gray-100 text-gray-500 text-xs px-2.5 py-0.5 rounded-full">
                      {article.type}
                    </span>
                    <span className="text-gray-400 text-xs">{article.date}</span>
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{article.media}</p>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{article.titre}</p>
                  <a
                    href={article.url}
                    className="text-xs font-semibold text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors self-start"
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

function PresseForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nom: "", media: "", email: "", message: "" });

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  const fieldCls = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors bg-gray-50 focus:bg-white";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text"  placeholder="Nom"                  value={form.nom}     onChange={update("nom")}     className={fieldCls} />
              <input type="text"  placeholder="Entreprise"             value={form.media}   onChange={update("media")}   className={fieldCls} />
            </div>
            <input type="email" placeholder="Email professionnel"    value={form.email}   onChange={update("email")}   className={fieldCls} />
            <textarea
              placeholder="Votre demande (interview, information, partenariat…)"
              rows={4}
              value={form.message}
              onChange={update("message")}
              className={`${fieldCls} resize-none`}
            />
            <button
              type="submit"
              className="w-full bg-gray-900 text-white font-semibold text-sm py-3.5 rounded-full hover:bg-gray-700 transition-colors cursor-pointer"
            >
              Envoyer ma demande →
            </button>
            <p className="text-[11px] text-gray-400 text-center pt-1">
              Données traitées conformément au RGPD — réponse sous 24h ouvrées.
            </p>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex flex-col items-center justify-center py-10 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-display font-bold text-gray-900 text-lg mb-2">Message envoyé !</p>
            <p className="text-gray-500 text-sm max-w-xs">Notre équipe presse vous répond sous 24h ouvrées.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactPresseSection() {
  return (
    <section id="contact-presse" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Colonne gauche */}
        <FadeIn>
          <Eyebrow>{contactPresse.eyebrow}</Eyebrow>
          <SectionH2>{contactPresse.h2}</SectionH2>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            {contactPresse.subtitle}
          </p>
          <div className="space-y-3">
            <p className="text-gray-700 text-sm flex items-center gap-2">
              <span>✉️</span> {contactPresse.contact.email}
            </p>
            <p className="text-gray-700 text-sm flex items-center gap-2">
              <span>📞</span> {contactPresse.contact.telephone}
            </p>
            <p className="text-gray-700 text-sm flex items-center gap-2">
              <span>📍</span> {contactPresse.contact.adresse}
            </p>
          </div>
        </FadeIn>

        {/* Colonne droite — formulaire */}
        <FadeIn delay={0.1}>
          <PresseForm />
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
      <ChiffresContexteSection />
      <IlsParlentDeNousSection />
      <KitMediaSection />
      <ContactPresseSection />
    </>
  );
}
