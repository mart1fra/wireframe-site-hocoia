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

// ─── Carte espace (structure unifiée pour les 3) ──────────────────────────

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

      {/* Paragraphe — flex-1 pour pousser les boutons en bas */}
      <p className="text-xs text-gray-500 leading-relaxed flex-1 mb-5">
        {espace.paragraph}
      </p>

      {/* Boutons */}
      <div className="flex flex-col gap-2">
        {espace.buttons.map((btn) => (
          <button
            key={btn.label}
            type="button"
            className={`w-full py-2 text-sm font-medium rounded-full transition-colors duration-150 cursor-pointer ${
              btn.primary
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "border border-gray-300 text-gray-900 hover:bg-gray-50"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Lien bas */}
      <p className="text-xs text-gray-500 mt-4 text-center cursor-pointer hover:text-gray-700 transition-colors">
        {espace.lienBas}
      </p>
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
          className="grid grid-cols-3 gap-5"
        >
          {espaces.map((espace) => (
            <EspaceCard key={espace.id} espace={espace} />
          ))}
        </motion.div>

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
