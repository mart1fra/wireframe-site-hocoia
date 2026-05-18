import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemV = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function HocoAppSection({ data, variant = "gray", compact = false }) {
  const bg = variant === "white" ? "bg-white" : "bg-gray-50";
  const borderCls = compact ? "border-y border-gray-200" : "";

  if (compact) {
    return (
      <section className={`${bg} ${borderCls} py-10 px-6`}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-8">
          <FadeIn className="flex-1">
            <p className="text-[11px] uppercase tracking-widest font-medium text-gray-400 mb-2">
              {data.eyebrow}
            </p>
            <h2 className="font-display font-bold text-xl text-gray-900 leading-tight mb-2">
              {data.h2}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
              {data.subtitle}
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-wrap gap-3 shrink-0">
            <button
              type="button"
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-150 cursor-pointer"
            >
              {data.ctaPrimary}
            </button>
            <button
              type="button"
              className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
            >
              {data.ctaOutline}
            </button>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className={`${bg} py-24 px-6`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Colonne gauche — texte + features + CTAs */}
        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p variants={itemV} className="text-[11px] uppercase tracking-widest font-medium text-gray-400 mb-3">
            {data.eyebrow}
          </motion.p>

          <motion.h2 variants={itemV} className="font-display font-bold text-3xl sm:text-4xl text-gray-900 leading-tight mb-4">
            {data.h2}
          </motion.h2>

          <motion.p variants={itemV} className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg">
            {data.subtitle}
          </motion.p>

          <motion.div
            variants={listV}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10"
          >
            {data.features.map((f) => (
              <motion.div key={f.id} variants={itemV} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-lg shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-gray-900 mb-1">{f.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemV} className="flex flex-wrap gap-3">
            <button
              type="button"
              className="bg-gray-900 text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-150 cursor-pointer"
            >
              {data.ctaPrimary}
            </button>
            <button
              type="button"
              className="border border-gray-300 text-gray-700 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
            >
              {data.ctaOutline}
            </button>
          </motion.div>
        </motion.div>

        {/* Colonne droite — placeholder mockup */}
        <FadeIn className="flex justify-center lg:justify-end">
          <div className="w-full max-w-xs aspect-[3/4] bg-gray-100 border border-gray-200 rounded-3xl flex items-center justify-center p-6">
            <p className="text-gray-400 text-sm font-medium text-center leading-relaxed">
              {data.mockupLabel}
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
