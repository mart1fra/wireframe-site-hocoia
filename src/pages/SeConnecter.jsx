import { motion } from "framer-motion";
import FadeIn from "../components/ui/FadeIn";
import { header, espaces, aide } from "../data/seConnecterData";

// ─── Variants ─────────────────────────────────────────────────────────────

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemV = {
  hidden:  { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

// ─── Carte espace ─────────────────────────────────────────────────────────

function EspaceCard({ espace }) {
  return (
    <motion.div
      variants={itemV}
      className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col hover:border-gray-300 hover:shadow-sm transition-all duration-200"
    >
      {/* Icône */}
      <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-lg mb-3 shrink-0" />

      {/* Label */}
      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
        {espace.label}
      </p>

      {/* Titre */}
      <h3 className="font-display font-bold text-base text-gray-900 leading-snug mb-2">
        {espace.h3}
      </h3>

      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed mb-5 flex-1">
        {espace.paragraph}
      </p>

      {/* CTA */}
      <button
        type="button"
        className="w-full py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-150 cursor-pointer"
      >
        Accéder à mon espace
      </button>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function SeConnecter() {
  return (
    <div className="bg-gray-50 min-h-[calc(100vh-180px)] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-6 py-8 w-full">

        {/* En-tête */}
        <FadeIn className="text-center max-w-lg mx-auto mb-8">
          <h1 className="font-display font-bold text-3xl text-gray-900 leading-tight mb-3">
            {header.h1}
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            {header.subtitle}
          </p>
        </FadeIn>

        {/* Grille 3 colonnes */}
        <motion.div
          variants={listV}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-5 mb-6"
        >
          {espaces.map((espace) => (
            <EspaceCard key={espace.id} espace={espace} />
          ))}
        </motion.div>

        {/* Bouton HocoApp — largeur de la grille */}
        <FadeIn>
          <button
            type="button"
            className="w-full py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
          >
            Accéder à HocoApp →
          </button>
        </FadeIn>

        {/* Ligne d'aide compacte */}
        <FadeIn className="text-center mt-6">
          <p className="text-xs text-gray-500">
            {aide.prefixe}{" "}
            {aide.liens.map((lien, i) => (
              <span key={lien.label}>
                {i > 0 && <span className="mx-1.5 text-gray-300 select-none">·</span>}
                <span className="text-gray-600 underline underline-offset-2 cursor-pointer hover:text-gray-900 transition-colors">
                  {lien.label}
                </span>
              </span>
            ))}
          </p>
        </FadeIn>

      </div>
    </div>
  );
}
