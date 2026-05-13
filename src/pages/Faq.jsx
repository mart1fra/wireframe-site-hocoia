import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../components/ui/FadeIn";
import AccordionItem from "../components/ui/AccordionItem";
import { header, audiences, categories, ctaFinal } from "../data/faqGlobalData";

// ─── Variants ─────────────────────────────────────────────────────────────

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemV = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

// ─── Helpers ──────────────────────────────────────────────────────────────

function filterCategories(activeFilter) {
  if (activeFilter === "all") return categories;
  return categories.filter(
    (cat) => cat.audiences.includes("all") || cat.audiences.includes(activeFilter)
  );
}

// ─── 1. Header ────────────────────────────────────────────────────────────

function HeaderSection() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <FadeIn className="max-w-xl mx-auto text-center">
        <h1 className="font-display font-bold text-4xl text-gray-900 leading-tight mb-4">
          {header.h1}
        </h1>
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          {header.subtitle}
        </p>

        {/* Barre de recherche (décorative v1) */}
        <div className="max-w-[600px] mx-auto relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm select-none pointer-events-none">
            ⌕
          </span>
          <input
            type="text"
            placeholder={header.searchPlaceholder}
            className="w-full pl-10 pr-5 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-full outline-none focus:border-gray-300 placeholder:text-gray-400 transition-colors duration-150"
          />
        </div>
      </FadeIn>
    </section>
  );
}

// ─── 2. Filtres audiences ─────────────────────────────────────────────────

function FiltersBar({ activeFilter, onSelect }) {
  return (
    <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center flex-wrap gap-2">
        {audiences.map((aud) => (
          <button
            key={aud.id}
            type="button"
            onClick={() => onSelect(aud.id)}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-colors duration-150 cursor-pointer ${
              activeFilter === aud.id
                ? "bg-gray-900 text-white"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {aud.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── 3. Sidebar ───────────────────────────────────────────────────────────

function Sidebar({ filteredCats, activeSectionId }) {
  return (
    <aside className="w-52 shrink-0 hidden lg:block">
      <nav className="sticky top-24">
        <ul className="border-l-2 border-gray-100 space-y-0.5 pl-4">
          {filteredCats.map((cat) => {
            const isActive = activeSectionId === cat.id;
            return (
              <li key={cat.id}>
                <a
                  href={`#${cat.id}`}
                  className={`block py-2 text-xs transition-colors duration-150 leading-snug ${
                    isActive
                      ? "font-semibold text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {cat.sidebarLabel}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

// ─── 4. Contenu FAQ ───────────────────────────────────────────────────────

function FaqContent({ filteredCats, setActiveSectionId }) {
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    filteredCats.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredCats, setActiveSectionId]);

  return (
    <div className="flex-1 min-w-0">
      {filteredCats.map((cat, index) => (
        <section
          key={cat.id}
          id={cat.id}
          ref={(el) => { sectionRefs.current[cat.id] = el; }}
          className={index > 0 ? "mt-16" : ""}
        >
          <FadeIn>
            <h2 className="font-display font-bold text-xl text-gray-900 mb-1">
              {cat.label}
            </h2>
            <p className="text-sm text-gray-500 mb-6">{cat.subtitle}</p>
          </FadeIn>

          <motion.div
            className="space-y-3"
            variants={listV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {cat.items.map((item) => (
              <motion.div key={item.question} variants={itemV}>
                <AccordionItem question={item.question} answer={item.answer} link={item.link} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      ))}
    </div>
  );
}

// ─── 5. CTA final ─────────────────────────────────────────────────────────

function CtaFinalSection() {
  return (
    <section className="bg-gray-900 py-16 px-6">
      <FadeIn className="max-w-2xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl text-white mb-4 leading-tight">
          {ctaFinal.h2}
        </h2>
        <p className="text-gray-400 text-base mb-8">{ctaFinal.subtitle}</p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button className="px-7 py-3 text-sm font-medium bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-150 cursor-pointer">
            {ctaFinal.ctaPrimary}
          </button>
          <button className="px-7 py-3 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors duration-150 cursor-pointer">
            {ctaFinal.ctaSecondary}
          </button>
        </div>
      </FadeIn>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function Faq() {
  const [activeFilter, setActiveFilter]     = useState("all");
  const [activeSectionId, setActiveSectionId] = useState(categories[0]?.id ?? "");

  const filteredCats = filterCategories(activeFilter);

  // Reset active section when filter changes
  useEffect(() => {
    setActiveSectionId(filteredCats[0]?.id ?? "");
  }, [activeFilter]);

  return (
    <div className="bg-white">
      <HeaderSection />

      <FiltersBar activeFilter={activeFilter} onSelect={setActiveFilter} />

      {/* Layout 2 colonnes */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex gap-12 items-start">
        <Sidebar filteredCats={filteredCats} activeSectionId={activeSectionId} />

        {/* Crossfade sur changement de filtre */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 min-w-0"
          >
            <FaqContent
              filteredCats={filteredCats}
              setActiveSectionId={setActiveSectionId}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <CtaFinalSection />
    </div>
  );
}
