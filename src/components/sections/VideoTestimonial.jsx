import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const itemV = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function VideoTestimonial({
  eyebrow,
  title,
  paragraphs = [],
  quote,
  quoteAuthor,
  videoLabel,
  videoMeta,
}) {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-14 items-start">

        {/* Gauche — 40% */}
        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p variants={itemV} className="text-[11px] uppercase tracking-widest font-medium text-gray-400 mb-3">
            {eyebrow}
          </motion.p>
          <motion.h2 variants={itemV} className="font-display font-bold text-3xl text-gray-900 leading-tight mb-5">
            {title}
          </motion.h2>

          {paragraphs.map((p, i) => (
            <motion.p key={i} variants={itemV} className="text-gray-600 text-base leading-relaxed mb-4">
              {p}
            </motion.p>
          ))}

          <motion.div variants={itemV} className="pl-4 border-l-[3px] border-gray-300 my-6">
            <p className="text-gray-700 text-sm italic leading-relaxed">"{quote}"</p>
            <p className="text-gray-500 text-xs mt-2">— {quoteAuthor}</p>
          </motion.div>

          <motion.div variants={itemV}>
            <button
              type="button"
              className="px-6 py-2.5 text-sm font-medium text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
            >
              Voir tous les témoignages →
            </button>
          </motion.div>
        </motion.div>

        {/* Droite — 60% */}
        <FadeIn delay={0.1}>
          {/* Placeholder vidéo 16:9 */}
          <div className="relative w-full aspect-video bg-gray-100 border border-dashed border-gray-200 rounded-xl overflow-hidden">
            {/* Bouton play centré */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl leading-none pl-1">▶</span>
              </div>
            </div>

            {/* Label bas gauche */}
            <div className="absolute bottom-3 left-3">
              <span className="bg-gray-900/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-md">
                {videoLabel}
              </span>
            </div>
          </div>

          {/* Ligne méta sous la vidéo */}
          <p className="text-gray-500 text-xs italic mt-3">{videoMeta}</p>
        </FadeIn>
      </div>
    </section>
  );
}
