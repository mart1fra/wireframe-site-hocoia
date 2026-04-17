import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ressourcesFiltres } from "../data/arborescence";

export default function ResourcePage({ title, type, cards }) {
  const [actif, setActif] = useState(ressourcesFiltres[0]);

  const cartesFiltrees =
    actif === ressourcesFiltres[0]
      ? cards
      : cards.filter((c) => c.audience === actif);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* En-tête */}
      <h1 className="font-display font-bold text-4xl text-gray-900 mb-10">{title}</h1>

      {/* Barre de filtres */}
      <div className="flex flex-wrap gap-2 mb-10">
        {ressourcesFiltres.map((filtre) => (
          <button
            key={filtre}
            type="button"
            onClick={() => setActif(filtre)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-150 cursor-pointer ${
              actif === filtre
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {filtre}
          </button>
        ))}
      </div>

      {/* Grille de cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {cartesFiltrees.map((card) => (
            <motion.article
              key={card.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer hover:border-gray-300 transition-colors duration-150"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                  {type}
                </span>
                <span className="text-xs text-gray-400 border border-gray-200 px-2.5 py-1 rounded-full">
                  {card.audience}
                </span>
              </div>

              {/* Placeholder image */}
              <div className="w-full h-28 bg-gray-100 border border-gray-200 rounded-lg mb-4" />

              <h3 className="font-display font-semibold text-gray-900 text-sm leading-snug">
                {card.title}
              </h3>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
