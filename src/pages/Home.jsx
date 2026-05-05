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
  b2bZone,
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

// ─── Helpers ──────────────────────────────────────────────────────────────

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

// ─── Section 1 — Hero ─────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
            {hero.h1}
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <button
              type="button"
              className="bg-gray-900 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-700 transition-colors duration-150 cursor-pointer"
            >
              {hero.ctaPrimary}
            </button>
            <button
              type="button"
              className="border border-gray-300 text-gray-700 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
            >
              {hero.ctaOutline}
            </button>
          </div>

          <p className="text-sm text-gray-400">
            {hero.b2bLink.prefix}{" "}
            <Link
              to={hero.b2bLink.href}
              className="text-gray-600 underline underline-offset-2 hover:text-gray-900 transition-colors"
            >
              {hero.b2bLink.linkText}
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 2 — Logos ────────────────────────────────────────────────────

function LogosSection() {
  return (
    <section className="bg-white py-14 px-6 border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
          {logos.label}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {logos.items.map((name) => (
            <span
              key={name}
              className="bg-gray-100 text-gray-500 text-sm font-medium px-5 py-2 rounded-full"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 2b — Identité ────────────────────────────────────────────────

function IdentiteSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            {identite.eyebrow}
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 leading-tight mb-6">
            {identite.h2}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto mb-14">
            {identite.description}
          </p>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto mb-14">
            {identite.description2}
          </p>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {identite.points.map((p) => (
            <motion.div key={p.id} variants={itemV} className="flex flex-col items-center text-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg border border-gray-200" />
              <p className="font-semibold text-gray-900 text-sm">{p.titre}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{p.soustitre}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 3 — Spécialités B2C ──────────────────────────────────────────

function SpecialitesSection() {
  const [activeChip, setActiveChip] = useState(specialites.chips[0].id);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="max-w-2xl mb-14">
          <Eyebrow>{specialites.eyebrow}</Eyebrow>
          <SectionH2>{specialites.h2}</SectionH2>
          <p className="text-gray-500 text-base leading-relaxed">
            {specialites.description}
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            {specialites.description2}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — chips */}
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8">
              {specialites.chips.map((chip) => (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => setActiveChip(chip.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 cursor-pointer ${
                    activeChip === chip.id
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="text-sm font-semibold text-gray-700 underline underline-offset-2 hover:text-gray-900 transition-colors cursor-pointer"
            >
              {specialites.cta}
            </button>
          </FadeIn>

          {/* Right — map placeholder + mini card */}
          <FadeIn delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 aspect-[4/3] flex items-center justify-center">
              <p className="text-gray-400 text-sm font-medium px-6 text-center">
                {specialites.mapPlaceholder}
              </p>

              {/* Mini card overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg border border-gray-100 p-4">
                <p className="text-xs font-semibold text-gray-900 mb-2">
                  {specialites.miniCard.title}
                </p>
                <div className="space-y-1 mb-3">
                  {specialites.miniCard.creneaux.map((c, i) => (
                    <p key={i} className="text-xs text-gray-500">
                      {c}
                    </p>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 bg-gray-900 text-white text-xs font-semibold py-2 rounded-full hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    {specialites.miniCard.ctaPrimary}
                  </button>
                  <button
                    type="button"
                    className="flex-1 border border-gray-200 text-gray-600 text-xs font-semibold py-2 rounded-full hover:bg-gray-50 transition-colors cursor-pointer"
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

// ─── Section 4 — Stats ────────────────────────────────────────────────────

function StatsSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            {stats.eyebrow}
          </span>
        </FadeIn>
        <FadeIn>
          <motion.div
            variants={listV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-3 divide-x divide-gray-200"
          >
            {stats.items.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemV}
                className="flex flex-col items-center text-center px-4 py-6 first:pl-0 last:pr-0"
              >
                <span className="font-display font-bold text-3xl text-gray-900 mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-500 leading-snug">
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

// ─── Section 5 — Use Cases B2B ────────────────────────────────────────────

function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(useCases.tabs[0].id);
  const activeTabData = useCases.tabs.find((t) => t.id === activeTab);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            {useCases.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {useCases.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left — content */}
            <div>
              <Eyebrow>{activeTabData.eyebrow}</Eyebrow>
              <h3 className="font-display font-bold text-2xl text-gray-900 leading-snug mb-4">
                {useCases.sharedContent.h3}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                {useCases.sharedContent.description}
              </p>

              <div className="flex gap-6 mb-8">
                {useCases.sharedContent.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="font-display font-bold text-2xl text-gray-900">
                      {m.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  {useCases.sharedContent.ctaPrimary}
                </button>
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  {useCases.sharedContent.ctaOutline}
                </button>
              </div>
            </div>

            {/* Right — illustration placeholder */}
            <div className="bg-gray-100 rounded-2xl border border-gray-200 aspect-[4/3] flex items-center justify-center">
              <p className="text-gray-400 text-sm font-medium text-center px-6">
                Illustration — {activeTabData.label}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── Section 6 — Zone B2B sombre ──────────────────────────────────────────

function B2bZoneSection() {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[11fr_9fr] gap-16 items-center">
        <FadeIn>
          <Eyebrow light>{b2bZone.eyebrow}</Eyebrow>
          <SectionH2 light>{b2bZone.h2}</SectionH2>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            {b2bZone.description}
          </p>

          <ul className="space-y-3 mb-10">
            {b2bZone.checks.map((check) => (
              <li key={check} className="flex items-start gap-3 text-gray-300 text-sm">
                <span className="mt-0.5 text-gray-500 shrink-0">✓</span>
                {check}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="bg-white text-gray-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer"
          >
            {b2bZone.cta}
          </button>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="bg-gray-800 rounded-2xl border border-gray-700 aspect-[4/3] flex items-center justify-center">
            <p className="text-gray-500 text-sm font-medium text-center px-6">
              {b2bZone.dashboardPlaceholder}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Section 7 — Témoignages ──────────────────────────────────────────────

function TemoignagesSection() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12 text-center">
          <SectionH2>{temoignages.h2}</SectionH2>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {temoignages.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemV}
              className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col"
            >
              <p className="text-amber-400 text-sm mb-4 tracking-wide">
                {card.stars}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">
                "{card.quote}"
              </p>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {card.author}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{card.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 8 — CTA Final ────────────────────────────────────────────────

function CtaFinalSection() {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-5">
            {ctaFinal.h2}
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-10">
            {ctaFinal.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              className="bg-white text-gray-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {ctaFinal.ctaPrimary}
            </button>
            <button
              type="button"
              className="border border-gray-600 text-gray-300 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {ctaFinal.ctaOutline}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogosSection />
      <IdentiteSection />
      <StatsSection />
      <SpecialitesSection />
      <UseCasesSection />
      <B2bZoneSection />
      <TemoignagesSection />
      <CtaFinalSection />
    </>
  );
}
