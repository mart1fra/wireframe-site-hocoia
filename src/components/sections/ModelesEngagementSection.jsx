import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemV = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ModelesEngagementSection({ data, id }) {
  const { acquisition, prestation } = data;

  return (
    <section id={id} className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* En-tête */}
        <FadeIn className="mb-10">
          <p className="text-[11px] uppercase tracking-widest font-medium text-gray-400 mb-3">
            {data.eyebrow}
          </p>
          <h2 className="font-display font-bold text-3xl leading-tight text-gray-900 mb-3">
            {data.h2}
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            {data.subtitle}
          </p>
        </FadeIn>

        {/* Bloc acquisition · grand, sombre */}
        <FadeIn className="mb-5">
          <div className="bg-gray-900 rounded-2xl p-8 lg:p-10">
            <span className="inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/10 text-white mb-7">
              {acquisition.tag}
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

              {/* Gauche : titre + description + CTA */}
              <div>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-white leading-tight mb-5">
                  {acquisition.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  {acquisition.description}
                </p>
                <button
                  type="button"
                  className="bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
                >
                  {acquisition.cta}
                </button>
              </div>

              {/* Droite : points */}
              <motion.ul
                variants={listV}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="space-y-4 lg:pt-1"
              >
                {acquisition.points.map((point, i) => (
                  <motion.li
                    key={i}
                    variants={itemV}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <span className="text-gray-500 mt-0.5 shrink-0">→</span>
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </FadeIn>

        {/* Bande prestation · secondaire, compacte */}
        <FadeIn>
          <div className="bg-white border border-gray-200 rounded-xl px-7 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">

              {/* Texte + chips */}
              <div className="flex-1">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-gray-100 text-gray-600 mb-3">
                  {prestation.tag}
                </span>
                <p className="font-semibold text-gray-900 text-sm mb-1">
                  {prestation.title}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {prestation.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {prestation.specialites.map((sp) => (
                    <span
                      key={sp}
                      className="text-[11px] text-gray-600 bg-gray-50 border border-gray-200 rounded-md px-2.5 py-1"
                    >
                      {sp}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="shrink-0">
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors duration-150 cursor-pointer whitespace-nowrap"
                >
                  {prestation.cta}
                </button>
              </div>

            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
