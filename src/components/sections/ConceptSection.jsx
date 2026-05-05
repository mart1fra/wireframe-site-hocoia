import { Fragment } from "react";
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

export default function ConceptSection({
  eyebrow = "Le concept",
  title,
  paragraphs = [],
  features = [],
  videoLabel,
  comparison,
}) {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Gauche */}
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            {eyebrow}
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 leading-tight mb-4">
            {title}
          </h2>

          {paragraphs.map((para) => (
            <p key={para.id} className="text-gray-600 text-base leading-relaxed mb-4">
              {para.segments.map((seg, i) =>
                seg.bold ? (
                  <strong key={i} className="text-gray-900 font-semibold">
                    {seg.text}
                  </strong>
                ) : (
                  <Fragment key={i}>{seg.text}</Fragment>
                )
              )}
            </p>
          ))}

          <motion.div
            variants={listV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-8 space-y-5"
          >
            {features.map((feat) => (
              <motion.div key={feat.id} variants={itemV} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gray-100 border border-gray-200 rounded-lg shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{feat.titre}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{feat.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </FadeIn>

        {/* Droite */}
        <FadeIn delay={0.15}>
          <div className="bg-gray-50 rounded-xl p-6 space-y-5">
            {videoLabel && (
              <div className="h-56 bg-gray-100 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-3 px-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-lg leading-none pl-1">▶</span>
                </div>
                <p className="text-gray-400 text-xs text-center">{videoLabel}</p>
              </div>
            )}

            {comparison && (
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-4">
                  {comparison.titre}
                </p>

                <p className="text-xs font-semibold text-gray-700 mb-2">
                  {comparison.classique.label}
                </p>
                <div className="space-y-1.5 mb-4">
                  {comparison.classique.items.map((item) => (
                    <div
                      key={item}
                      className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2 flex items-start gap-2"
                    >
                      <span className="text-gray-400 text-xs shrink-0 mt-0.5">✗</span>
                      <span className="text-gray-600 text-xs">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs font-semibold text-gray-900 mb-2">
                  {comparison.hocoia.label}
                </p>
                <div className="space-y-1.5">
                  {comparison.hocoia.items.map((item) => (
                    <div
                      key={item}
                      className="bg-white border border-gray-200 rounded-md px-3 py-2 flex items-start gap-2"
                    >
                      <span className="text-gray-900 text-xs font-bold shrink-0 mt-0.5">✓</span>
                      <span className="text-gray-700 text-xs font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
