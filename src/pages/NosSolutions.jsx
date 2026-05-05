import { Fragment } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../components/ui/FadeIn";
import {
  hero,
  intro,
  solutions,
  solutionsSection,
  comparison,
  useCasesSection,
  useCases,
  whySection,
  whyItems,
  cta,
} from "../data/nosSolutionsData";

// ─── Variants ─────────────────────────────────────────────────────────────

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemV = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// ─── Helpers ──────────────────────────────────────────────────────────────

function Eyebrow({ children, light = false }) {
  return (
    <p className={`text-[11px] uppercase tracking-widest font-medium mb-3 ${light ? "text-gray-500" : "text-gray-400"}`}>
      {children}
    </p>
  );
}

function renderH1(segments) {
  return segments.map((seg, i) =>
    seg.italic ? <em key={i}>{seg.text}</em> : <Fragment key={i}>{seg.text}</Fragment>
  );
}

// ─── 1. HERO ──────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-[3fr_2fr] gap-16 items-center">

        {/* Gauche */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={listV}
        >
          <motion.p variants={itemV} className="text-[11px] uppercase tracking-widest font-medium text-gray-400 mb-5">
            {hero.eyebrow}
          </motion.p>

          <motion.h1 variants={itemV} className="font-display font-bold text-5xl text-white leading-tight mb-6">
            {renderH1(hero.h1Segments)}
          </motion.h1>

          <motion.p variants={itemV} className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
            {hero.subtitle}
          </motion.p>

          <motion.ul variants={itemV} className="space-y-3">
            {hero.checks.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="text-gray-500 mt-0.5 shrink-0">✓</span>
                {c}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Droite — placeholder image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          className="h-[280px] bg-gray-800 border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center px-8"
        >
          <p className="text-gray-500 text-sm italic text-center leading-relaxed">
            {hero.imagePlaceholder}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. INTRO ─────────────────────────────────────────────────────────────

function IntroSection() {
  return (
    <section className="bg-white py-12 px-6">
      <FadeIn className="max-w-2xl mx-auto text-center">
        <Eyebrow>{intro.eyebrow}</Eyebrow>
        <h2 className="font-display font-bold text-3xl text-gray-900 leading-tight mb-5">
          {intro.h2}
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">{intro.paragraph}</p>
      </FadeIn>
    </section>
  );
}

// ─── 3. GRILLE DES 3 SOLUTIONS ────────────────────────────────────────────

function SolutionCard({ sol }) {
  return (
    <motion.div
      variants={itemV}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col"
    >
      {/* Image placeholder */}
      <div className="h-40 bg-gray-100 border-b border-gray-200 flex items-center justify-center px-6 shrink-0">
        <p className="text-gray-400 text-xs italic text-center">{sol.imagePlaceholder}</p>
      </div>

      {/* Corps */}
      <div className="p-6 flex flex-col flex-1">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-gray-600 bg-gray-100 px-3 py-1 rounded-full mb-4 self-start">
          {sol.badge}
        </span>

        <h3 className="font-display font-bold text-xl text-gray-900 mb-2">{sol.h3}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{sol.paragraph}</p>

        {/* Caractéristiques */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-5">
          {sol.characteristics.map((c, i) => (
            <span key={c} className="text-xs text-gray-700 flex items-center gap-1">
              {i > 0 && <span className="text-gray-300 mr-1">•</span>}
              {c}
            </span>
          ))}
        </div>

        {/* Pour qui */}
        <div className="mb-5 flex-1">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-2">
            {solutionsSection.audiencesLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {sol.audiences.map((a) => (
              <span key={a} className="text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-md px-2.5 py-1">
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Note pilote */}
        {sol.note && (
          <p className="text-xs text-gray-400 italic mb-4">{sol.note}</p>
        )}

        {/* CTA */}
        <Link
          to={sol.ctaHref}
          className="mt-auto inline-block text-center w-full py-2.5 text-sm font-medium text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-150"
        >
          {sol.ctaLabel}
        </Link>
      </div>
    </motion.div>
  );
}

function SolutionsSection() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-10">
          <Eyebrow>{solutionsSection.eyebrow}</Eyebrow>
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-2">
            {solutionsSection.h2}
          </h2>
          <p className="text-gray-500">{solutionsSection.subtitle}</p>
        </FadeIn>

        <motion.div
          className="grid grid-cols-3 gap-6"
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {solutions.map((sol) => (
            <SolutionCard key={sol.id} sol={sol} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4. TABLEAU COMPARATIF ────────────────────────────────────────────────

function ComparisonSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-10">
          <Eyebrow>{comparison.eyebrow}</Eyebrow>
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-2">
            {comparison.h2}
          </h2>
          <p className="text-gray-500">{comparison.subtitle}</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            {/* En-tête */}
            <div className="grid grid-cols-4 bg-gray-100 border-b border-gray-200">
              {comparison.headers.map((h) => (
                <div key={h} className="px-5 py-3.5">
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">{h}</p>
                </div>
              ))}
            </div>

            {/* Lignes */}
            {comparison.rows.map((row, i) => (
              <div
                key={row.criterion}
                className={`grid grid-cols-4 border-t border-gray-200 ${i % 2 === 1 ? "bg-gray-50/60" : "bg-white"}`}
              >
                <div className="px-5 py-4">
                  <p className="text-sm font-semibold text-gray-900">{row.criterion}</p>
                </div>
                {row.values.map((val, j) => (
                  <div key={j} className="px-5 py-4">
                    <p className="text-sm text-gray-700">{val}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 5. CAS D'USAGE ───────────────────────────────────────────────────────

function UseCasesSection() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-10">
          <Eyebrow>{useCasesSection.eyebrow}</Eyebrow>
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-2">
            {useCasesSection.h2}
          </h2>
          <p className="text-gray-500">{useCasesSection.subtitle}</p>
        </FadeIn>

        <motion.div
          className="grid grid-cols-3 gap-5"
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {useCases.map((uc) => (
            <motion.div
              key={uc.id}
              variants={itemV}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col"
            >
              <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-lg mb-4 shrink-0" />
              <h3 className="font-display font-bold text-base text-gray-900 mb-2 leading-snug">
                {uc.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">
                {uc.description}
              </p>
              <Link
                to={uc.solutionHref}
                className="self-start text-xs font-semibold uppercase tracking-widest text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors duration-150"
              >
                {uc.solutionLabel}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 6. POURQUOI HOCOIA ───────────────────────────────────────────────────

function WhySection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{whySection.eyebrow}</Eyebrow>
          <h2 className="font-display font-bold text-3xl text-gray-900">
            {whySection.h2}
          </h2>
        </FadeIn>

        <motion.div
          className="grid grid-cols-4 gap-8"
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {whyItems.map((item) => (
            <motion.div key={item.id} variants={itemV}>
              <div className="w-8 h-8 bg-gray-100 border border-gray-200 rounded-lg mb-4" />
              <h3 className="font-display font-semibold text-sm text-gray-900 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 7. CTA FINAL ─────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center">
        <FadeIn>
          <h2 className="font-display font-bold text-3xl text-white leading-tight mb-4">
            {cta.h2}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">{cta.subtitle}</p>
        </FadeIn>

        <FadeIn delay={0.15} className="flex flex-col gap-3 items-start">
          <button className="px-8 py-3.5 text-sm font-medium bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-150 cursor-pointer">
            {cta.ctaPrimary}
          </button>
          <button className="px-8 py-3.5 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors duration-150 cursor-pointer">
            {cta.ctaSecondary}
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function NosSolutions() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <SolutionsSection />
      <ComparisonSection />
      <UseCasesSection />
      <WhySection />
      <CtaSection />
    </>
  );
}
