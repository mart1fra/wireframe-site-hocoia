import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ressourcesByType, ressourcesFiltres } from "../../data/arborescence";
import { casClientCard } from "../../data/casClientPertuisData";

const listV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const itemV = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

// Les placeholders arborescence.js, on saute cc1 (remplacé par la vraie carte Pertuis)
const PLACEHOLDERS = ressourcesByType.casClients.slice(1);

export default function CasClients() {
  const [actif, setActif] = useState(ressourcesFiltres[0]);

  const showPertuis =
    actif === ressourcesFiltres[0] || casClientCard.audience === actif;

  const placeholdersFiltres =
    actif === ressourcesFiltres[0]
      ? PLACEHOLDERS
      : PLACEHOLDERS.filter((c) => c.audience === actif);

  return (
    <div className="min-h-screen bg-white">
      {/* En-tête */}
      <header className="bg-gray-50 border-b border-gray-200 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
              Ressources
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Cas clients
            </h1>
            <p className="font-body text-gray-500 max-w-xl">
              Retours d'expérience concrets : mutuelles, collectivités, entreprises — ce que le MédicoBus change sur le terrain.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Filtres */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 py-3 px-6">
        <div className="max-w-5xl mx-auto flex items-center gap-2 flex-wrap">
          {ressourcesFiltres.map((filtre) => (
            <button
              key={filtre}
              type="button"
              onClick={() => setActif(filtre)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                actif === filtre
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filtre}
            </button>
          ))}
        </div>
      </div>

      {/* Grille */}
      <main className="max-w-5xl mx-auto py-14 px-6">
        <motion.div
          key={actif}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={listV}
          initial="hidden"
          animate="show"
        >
          {/* Carte Pertuis — vraie page liée */}
          {showPertuis && (
            <motion.div variants={itemV}>
              <Link
                to={casClientCard.href}
                className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow h-full"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <span className="text-[10px] text-gray-400 text-center px-4">
                    Photo — MédicoBus Hocoia installé au CCAS de Pertuis
                  </span>
                </div>

                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Cas client
                  </span>
                  <span className="mx-1.5 text-gray-300">·</span>
                  <span className="text-[10px] text-gray-400">{casClientCard.tag}</span>

                  <p className="font-display text-sm font-bold text-gray-900 leading-snug mt-2 mb-1 group-hover:underline">
                    {casClientCard.titre}
                  </p>
                  <p className="font-body text-xs text-gray-400 mb-4">{casClientCard.meta}</p>

                  <span className="text-xs font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                    {casClientCard.cta}
                  </span>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Placeholders */}
          {placeholdersFiltres.map((card) => (
            <motion.div key={card.id} variants={itemV}>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden h-full opacity-60">
                <div className="aspect-video bg-gray-100" />
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Cas client
                  </span>
                  <span className="mx-1.5 text-gray-300">·</span>
                  <span className="text-[10px] text-gray-400">{card.audience}</span>

                  <p className="font-display text-sm font-bold text-gray-900 leading-snug mt-2 mb-1">
                    {card.title}
                  </p>
                  <span className="text-xs text-gray-300 cursor-not-allowed">Bientôt disponible</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Message vide */}
          {!showPertuis && placeholdersFiltres.length === 0 && (
            <motion.p
              variants={itemV}
              className="col-span-full font-body text-sm text-gray-400 py-12 text-center"
            >
              Aucun cas client dans cette catégorie pour le moment.
            </motion.p>
          )}
        </motion.div>
      </main>
    </div>
  );
}
