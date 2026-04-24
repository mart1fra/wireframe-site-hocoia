/*
  SEO JSON-LD (à injecter via react-helmet-async en production) :

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mutuelle Générale d'Avignon : 72 patients dépistés du cancer de la peau en 3 jours à Pertuis",
    "datePublished": "2025-04-24",
    "author": { "@type": "Organization", "name": "Hocoia" },
    "publisher": { "@type": "Organization", "name": "Hocoia" },
    "description": "72 patients dépistés en 3 jours à Pertuis grâce au MédicoBus Hocoia et la Mutuelle Générale d'Avignon.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://hocoia.fr/ressources/cas-clients/pertuis-mutuelle-avignon" }
  }
  </script>

  <meta name="description" content="72 patients dépistés en 3 jours à Pertuis grâce au MédicoBus Hocoia et la Mutuelle Générale d'Avignon. Découvrez comment déployer une campagne de prévention dans votre territoire." />
  <link rel="canonical" href="https://hocoia.fr/ressources/cas-clients/pertuis-mutuelle-avignon" />
  <title>Cas client Pertuis : dépistage cancer de la peau avec la Mutuelle Générale d'Avignon | Hocoia</title>
*/

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  entete,
  chiffres,
  resumeExpress,
  citationForte,
  contexteLocal,
  deroulement,
  resultats,
  satisfaction,
  enseignements,
  articlesLies,
  ctaFinal,
} from "../data/casClientPertuisData";

// ─── Animation helpers ────────────────────────────────────────────────────────

const listV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const itemV = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

function FadeIn({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── 1. En-tête ───────────────────────────────────────────────────────────────

function EnteteSection() {
  return (
    <section className="bg-white pt-12 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5 flex-wrap">
            <Link to="/" className="hover:text-gray-600 transition-colors">Hocoia</Link>
            <span>›</span>
            <Link to="/ressources/cas-clients" className="hover:text-gray-600 transition-colors">Cas clients</Link>
            <span>›</span>
            <span className="text-gray-600">Mutuelle Générale d'Avignon — Pertuis</span>
          </nav>

          {/* Badge + tags */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              {entete.badge}
            </span>
            {entete.tags.map((tag) => (
              <span key={tag} className="border border-gray-200 text-gray-500 text-xs px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* H1 */}
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5">
            {entete.h1}
          </h1>

          {/* Chapô */}
          <p className="font-body text-lg text-gray-600 leading-relaxed mb-6 border-l-4 border-gray-200 pl-4">
            {entete.chapo}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-10">
            <span>{entete.publishedAt}</span>
            <span>·</span>
            <span>{entete.readTime} de lecture</span>
          </div>
        </FadeIn>

        {/* Image placeholder */}
        <FadeIn delay={0.1}>
          <div className="w-full aspect-[16/9] bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
            <span className="text-xs text-gray-400 text-center px-6">{entete.imagePlaceholder}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 2. Chiffres clés ─────────────────────────────────────────────────────────

function ChiffresSection() {
  return (
    <section className="bg-gray-50 py-12 px-6 border-y border-gray-200">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-gray-200"
          variants={listV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {chiffres.map((c) => (
            <motion.div key={c.value} variants={itemV} className="flex flex-col items-center text-center px-6 py-4">
              <span className="font-display text-4xl font-bold text-gray-900 leading-none mb-1">{c.value}</span>
              <span className="font-body text-xs text-gray-500 uppercase tracking-wide">{c.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3. Résumé express ────────────────────────────────────────────────────────

function ResumeExpressSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{resumeExpress.eyebrow}</p>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">{resumeExpress.h2}</h2>
        </FadeIn>

        <motion.div
          className="grid sm:grid-cols-3 gap-4"
          variants={listV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {resumeExpress.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemV}
              className="bg-gray-50 rounded-xl p-5 border border-gray-200"
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{card.label}</p>
              <p className="font-body text-sm text-gray-700 leading-relaxed">{card.contenu}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4. Citation forte ────────────────────────────────────────────────────────

function CitationForteSection() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          {/* Avatar placeholder */}
          <div className="w-14 h-14 rounded-full bg-gray-200 border-2 border-gray-300 mx-auto mb-6 flex items-center justify-center">
            <span className="text-[10px] text-gray-400">Photo</span>
          </div>

          <blockquote>
            <p className="font-display text-2xl sm:text-3xl font-semibold text-gray-900 leading-snug mb-6">
              "{citationForte.quote}"
            </p>
            <footer className="font-body text-sm text-gray-500">
              <span className="font-semibold text-gray-700">{citationForte.nom}</span>
              <span className="mx-2">·</span>
              <span>{citationForte.fonction}</span>
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 5. Contexte local ────────────────────────────────────────────────────────

function ContexteLocalSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{contexteLocal.eyebrow}</p>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">{contexteLocal.h2}</h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="space-y-4 mb-8">
            {contexteLocal.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-gray-700 leading-relaxed">{p}</p>
            ))}
          </div>

          <blockquote className="border-l-4 border-gray-300 pl-4">
            <p className="font-body text-sm text-gray-600 italic leading-relaxed">"{contexteLocal.citation.quote}"</p>
            <footer className="mt-2 text-xs text-gray-400">{contexteLocal.citation.auteur}</footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 6. Déroulement ───────────────────────────────────────────────────────────

function DeroulementSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{deroulement.eyebrow}</p>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">{deroulement.h2}</h2>
          <p className="font-body text-gray-500 mb-6">{deroulement.subtitle}</p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">{deroulement.intro}</p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="space-y-4 mb-8">
            {deroulement.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-gray-700 leading-relaxed">{p}</p>
            ))}
          </div>

          <blockquote className="border-l-4 border-gray-300 pl-5">
            <p className="font-body text-gray-600 italic leading-relaxed">"{deroulement.citation.quote}"</p>
            <footer className="mt-2 text-xs text-gray-400">{deroulement.citation.auteur}</footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 7. Résultats ─────────────────────────────────────────────────────────────

function ResultatsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{resultats.eyebrow}</p>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">{resultats.h2}</h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="space-y-4 mb-10">
            {resultats.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-gray-700 leading-relaxed">{p}</p>
            ))}
          </div>
        </FadeIn>

        {/* Citation card centrée */}
        <FadeIn delay={0.1}>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <blockquote>
              <p className="font-body text-gray-700 italic leading-relaxed text-sm mb-5">
                "{resultats.citation.quote}"
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-200 border border-gray-300 shrink-0 flex items-center justify-center">
                  <span className="text-[8px] text-gray-400">Photo</span>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-gray-900">{resultats.citation.nom}</p>
                  <p className="font-body text-xs text-gray-500">{resultats.citation.fonction}</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 8. Satisfaction ──────────────────────────────────────────────────────────

function SatisfactionSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
            {satisfaction.eyebrow}
          </p>
          <h2 className="font-display text-2xl font-bold text-gray-900">
            {satisfaction.h2}
          </h2>
        </FadeIn>

        <motion.div
          className="grid sm:grid-cols-3 gap-4"
          variants={listV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {satisfaction.items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemV}
              className="bg-gray-50 border border-gray-200 rounded-xl p-8 flex flex-col items-center text-center"
            >
              <span className="font-display text-5xl font-bold text-gray-900 leading-none mb-2">
                {item.chiffre}
              </span>
              <span className="font-body text-sm text-gray-600 mb-1">{item.label}</span>
              <span className="font-body text-xs text-gray-500 italic">{item.sousLabel}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 9. Enseignements ────────────────────────────────────────────────────────

function EnseignementsSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{enseignements.eyebrow}</p>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">{enseignements.h2}</h2>
          <p className="font-body text-gray-600 leading-relaxed mb-10 max-w-2xl">{enseignements.intro}</p>
        </FadeIn>

        <motion.div
          className="grid sm:grid-cols-3 gap-4"
          variants={listV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {enseignements.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemV}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              {/* Icon placeholder */}
              <div className="w-10 h-10 rounded-lg bg-gray-100 mb-4" />
              <h3 className="font-display text-base font-bold text-gray-900 mb-2">{card.titre}</h3>
              <p className="font-body text-sm text-gray-600 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 9. Articles liés ─────────────────────────────────────────────────────────

function ArticlesLiesSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{articlesLies.eyebrow}</p>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-10">{articlesLies.h2}</h2>
        </FadeIn>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-3 gap-5 mb-12"
          variants={listV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {articlesLies.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemV}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 flex flex-col"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-[10px] text-gray-400 text-center px-3">{card.imagePlaceholder}</span>
              </div>

              <div className="p-4 flex flex-col flex-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{card.badge}</span>
                <p className="font-display text-sm font-semibold text-gray-900 leading-snug mb-1 flex-1">{card.titre}</p>
                <p className="font-body text-xs text-gray-400 mb-3">{card.meta}</p>

                {card.href ? (
                  <Link to={card.href} className="text-xs font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                    {card.cta}
                  </Link>
                ) : (
                  <span className="text-xs text-gray-400 cursor-not-allowed">{card.cta}</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Maillage liens */}
        <FadeIn>
          <div className="border-t border-gray-100 pt-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">En savoir plus</p>
            <div className="flex flex-wrap gap-3">
              {articlesLies.maillageLiens.map((lien) => (
                <Link
                  key={lien.href}
                  to={lien.href}
                  className="border border-gray-200 text-gray-600 text-sm px-4 py-2 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-colors"
                >
                  {lien.label}
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 10. CTA Final ────────────────────────────────────────────────────────────

function CtaFinalSection() {
  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{ctaFinal.eyebrow}</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
              {ctaFinal.h2}
            </h2>
            <p className="font-body text-gray-400 leading-relaxed">{ctaFinal.subtitle}</p>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button
              type="button"
              className="bg-white text-gray-900 font-semibold text-sm px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              {ctaFinal.ctaPrimary}
            </button>
            <Link
              to="/produits/medicobus"
              className="border border-gray-600 text-gray-300 font-semibold text-sm px-6 py-3 rounded-full hover:border-gray-400 hover:text-white transition-colors text-center"
            >
              {ctaFinal.ctaOutline}
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Page principale ──────────────────────────────────────────────────────────

export default function CasClientPertuis() {
  return (
    <article>
      <EnteteSection />
      <ChiffresSection />
      <ResumeExpressSection />
      <CitationForteSection />
      <ContexteLocalSection />
      <DeroulementSection />
      <ResultatsSection />
      <SatisfactionSection />
      <EnseignementsSection />
      <ArticlesLiesSection />
      <CtaFinalSection />
    </article>
  );
}
