import { Fragment } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import AccordionItem from "../ui/AccordionItem";

// ─── Variants ─────────────────────────────────────────────────────────────────

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemV = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

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

function IconBox({ size = "w-10 h-10" }) {
  return <div className={`${size} bg-gray-100 border border-gray-200 rounded-lg shrink-0`} />;
}

// ─── Section 1 — Hero ─────────────────────────────────────────────────────────

function HeroSection({ hero }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] min-h-[70vh]">
      {/* Gauche */}
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
            {hero.h1Parts.italicB && (
              <em className="not-italic italic">{hero.h1Parts.italicB}</em>
            )}
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-8">{hero.subtitle}</p>

          <ul className="space-y-3 mb-10">
            {hero.checks.map((c) => (
              <li key={c} className="flex items-start gap-3 text-gray-300 text-sm">
                <span className="text-gray-500 shrink-0 mt-0.5">✓</span>
                {c}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to={hero.ctaOrgaHref}
              className="bg-white text-gray-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors text-center"
            >
              {hero.ctaOrga}
            </Link>
            <Link
              to={hero.ctaPatientHref}
              className="border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors text-center"
            >
              {hero.ctaPatient}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Droite — placeholder */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        className="bg-[#0d0d0d] flex items-center justify-center min-h-[320px] lg:min-h-full"
      >
        <p className="text-gray-600 text-xs text-center px-8 leading-relaxed">
          [{hero.imagePlaceholder}]
        </p>
      </motion.div>
    </section>
  );
}

// ─── Section 2 — Stats ────────────────────────────────────────────────────────

function StatsSection({ stats }) {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-200"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={itemV}
              className="flex flex-col items-center text-center px-4 py-4"
            >
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

// ─── Section 3 — Pourquoi le dépistage ───────────────────────────────────────

function PourquoiSection({ pourquoi }) {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12 max-w-2xl">
          <Eyebrow>{pourquoi.eyebrow}</Eyebrow>
          <SectionH2>{pourquoi.h2}</SectionH2>
          <div className="space-y-4">
            {pourquoi.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 text-base leading-relaxed">{p}</p>
            ))}
          </div>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {pourquoi.encadres.map((enc) => (
            <motion.div
              key={enc.id}
              variants={itemV}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6"
            >
              <p className="font-semibold text-gray-900 text-sm mb-3">{enc.titre}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{enc.texte}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 4 — Dépistage mobile Hocoia ─────────────────────────────────────

function DepistageHocoiaSection({ depistageHocoia }) {
  const { bus } = depistageHocoia;
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Gauche */}
        <FadeIn>
          <Eyebrow>{depistageHocoia.eyebrow}</Eyebrow>
          <SectionH2>{depistageHocoia.h2}</SectionH2>
          <div className="space-y-4 mb-10">
            {depistageHocoia.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 text-base leading-relaxed">{p}</p>
            ))}
          </div>

          <motion.div
            variants={listV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-5"
          >
            {depistageHocoia.differenciateurs.map((d) => (
              <motion.div key={d.id} variants={itemV} className="flex items-start gap-4">
                <IconBox size="w-8 h-8" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm leading-tight">{d.titre}</p>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{d.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </FadeIn>

        {/* Droite — carte bus */}
        <FadeIn delay={0.1}>
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-5 sticky top-8">
            <span className="self-start bg-gray-100 border border-gray-200 text-gray-600 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
              {bus.badge}
            </span>
            <IconBox size="w-12 h-12" />
            <div>
              <p className="font-display font-bold text-xl text-gray-900 mb-2">{bus.titre}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{bus.description}</p>
            </div>
            <Link
              to={bus.href}
              className="block text-center bg-gray-900 text-white py-3 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
            >
              {bus.cta}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Section 5 — Protocole ────────────────────────────────────────────────────

function ProtocoleSection({ protocole }) {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{protocole.eyebrow}</Eyebrow>
          <SectionH2>{protocole.h2}</SectionH2>
          {protocole.subtitle && (
            <p className="text-gray-500 text-base max-w-2xl">{protocole.subtitle}</p>
          )}
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col lg:flex-row items-stretch gap-0"
        >
          {protocole.steps.map((step, i) => (
            <Fragment key={step.id}>
              <motion.div
                variants={itemV}
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col"
              >
                <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center mb-4 shrink-0">
                  <span className="text-white text-xs font-bold">{step.num}</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm mb-2">{step.titre}</p>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{step.description}</p>
                <span className="self-start bg-white border border-gray-200 text-gray-700 text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
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
      </div>
    </section>
  );
}

// ─── Section 6 — Bénéfices ────────────────────────────────────────────────────

function BeneficesSection({ benefices }) {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{benefices.eyebrow}</Eyebrow>
          <SectionH2>{benefices.h2}</SectionH2>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {benefices.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemV}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-3"
            >
              <IconBox size="w-9 h-9" />
              <p className="font-semibold text-gray-900 text-sm leading-snug">{card.titre}</p>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 7 — Pour qui ─────────────────────────────────────────────────────

function PourQuiSection({ pourQui }) {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <Eyebrow>{pourQui.eyebrow}</Eyebrow>
          <SectionH2>{pourQui.h2}</SectionH2>
          {pourQui.subtitle && (
            <p className="text-gray-500 text-base max-w-2xl">{pourQui.subtitle}</p>
          )}
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {pourQui.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemV}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col gap-3"
            >
              <p className="font-semibold text-gray-900 text-sm leading-snug">{card.titre}</p>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{card.description}</p>
              <p className="text-gray-400 text-xs leading-snug italic">{card.casType}</p>
              <Link
                to={card.href}
                className="self-start text-xs font-semibold text-gray-700 bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                {card.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 8 — Témoignages ──────────────────────────────────────────────────

function TemoignagesSection({ temoignages }) {
  return (
    <section className="bg-gray-50 py-24 px-6">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {temoignages.cards.map((t) => (
            <motion.div
              key={t.id}
              variants={itemV}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
                {t.contexte}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed italic flex-1 mb-5">
                "{t.quote}"
              </p>
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

// ─── Section 9 — Maillage interne ────────────────────────────────────────────

function MaillageSection({ maillage }) {
  return (
    <section className="bg-white py-16 px-6 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-8">
          <Eyebrow>{maillage.eyebrow}</Eyebrow>
          <h2 className="font-display font-bold text-xl text-gray-900">{maillage.h2}</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Autres expertises */}
          <FadeIn delay={0.05}>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Nos expertises
            </p>
            <div className="flex flex-wrap gap-2">
              {maillage.expertises.map((e) => (
                <Link
                  key={e.id}
                  to={e.href}
                  className="text-sm text-gray-700 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {e.label} →
                </Link>
              ))}
            </div>
          </FadeIn>

          {/* Bus liés */}
          <FadeIn delay={0.1}>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Nos bus médicaux
            </p>
            <div className="flex flex-wrap gap-2">
              {maillage.busLies.map((b) => (
                <Link
                  key={b.id}
                  to={b.href}
                  className="text-sm text-gray-700 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {b.label} →
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Section 10 — FAQ ─────────────────────────────────────────────────────────

function FaqSection({ faq }) {
  return (
    <section className="bg-gray-50 py-24 px-6">
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

function CtaFinalSection({ ctaFinal }) {
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
          <Link
            to={ctaFinal.ctaPatientHref}
            className="bg-white text-gray-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors text-center"
          >
            {ctaFinal.ctaPatient}
          </Link>
          <Link
            to={ctaFinal.ctaOrgaHref}
            className="border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors text-center"
          >
            {ctaFinal.ctaOrga}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function ExpertisePage({ data }) {
  return (
    <>
      <HeroSection      hero={data.hero} />
      <StatsSection     stats={data.stats} />
      <PourquoiSection  pourquoi={data.pourquoi} />
      <DepistageHocoiaSection depistageHocoia={data.depistageHocoia} />
      <ProtocoleSection protocole={data.protocole} />
      <BeneficesSection benefices={data.benefices} />
      <PourQuiSection   pourQui={data.pourQui} />
      <TemoignagesSection temoignages={data.temoignages} />
      <MaillageSection  maillage={data.maillage} />
      <FaqSection       faq={data.faq} />
      <CtaFinalSection  ctaFinal={data.ctaFinal} />
    </>
  );
}
