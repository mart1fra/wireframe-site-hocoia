import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../components/ui/FadeIn";
import {
  passages,
  regions,
  specialites as specialitesList,
  bus as busList,
} from "../data/passagesData";

// ─── Constantes ───────────────────────────────────────────────────────────

const PAGE_SIZE = 10;
const PERIODE_MONTH = { juin: 5, juillet: 6, aout: 7 };
const JOURS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const MOIS  = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

const BUS_LABEL = { medicobus: "MédicoBus", mammobus: "MammoBus", dermatobus: "DermatoBus" };
const SPE_LABEL = { checkup: "Check-up", cardio: "Cardiologie", dermato: "Dermatologie", sein: "Cancer sein", femme: "Santé femme" };

const listV = { hidden: {}, visible: { transition: { staggerChildren: 0.04, delayChildren: 0.02 } } };
const itemV = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } } };

// ─── Helpers ──────────────────────────────────────────────────────────────

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  const j = JOURS[d.getDay()];
  return `${j[0].toUpperCase()}${j.slice(1)} ${d.getDate()} ${MOIS[d.getMonth()]} ${d.getFullYear()}`;
}

function getMonthKey(iso) {
  const d = new Date(iso + "T00:00:00");
  const m = MOIS[d.getMonth()];
  return `${m[0].toUpperCase()}${m.slice(1)} ${d.getFullYear()}`;
}

// ─── Sidebar filtres ──────────────────────────────────────────────────────

function FilterLabel({ children, title }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2.5">{title}</p>
      {children}
    </div>
  );
}

function CheckItem({ label, checked, onChange, type = "checkbox" }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group py-0.5">
      <input
        type={type}
        name={type === "radio" ? "periode" : undefined}
        checked={checked}
        onChange={onChange}
        className="w-3.5 h-3.5 accent-gray-900 cursor-pointer shrink-0"
      />
      <span className={`text-sm leading-snug transition-colors ${checked ? "text-gray-900 font-medium" : "text-gray-500 group-hover:text-gray-800"}`}>
        {label}
      </span>
    </label>
  );
}

function FilterSidebar({
  selectedRegion, setSelectedRegion,
  selectedSpe, toggleSpe,
  selectedPeriode, setSelectedPeriode,
  selectedBus, toggleBus,
  hasFilters, onReset,
}) {
  return (
    <aside className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6 space-y-7">
      {/* Titre + reset */}
      <div className="flex items-center justify-between">
        <p className="font-display font-semibold text-gray-900 text-sm">Filtres</p>
        {hasFilters && (
          <button
            type="button"
            onClick={onReset}
            className="text-xs text-gray-400 hover:text-gray-900 transition-colors cursor-pointer underline underline-offset-2"
          >
            Tout effacer
          </button>
        )}
      </div>

      {/* Région */}
      <FilterLabel title="Région">
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-300"
        >
          <option value="">Toutes les régions</option>
          {regions.map((r) => (
            <option key={r.id} value={r.id}>{r.label}</option>
          ))}
        </select>
      </FilterLabel>

      {/* Spécialités */}
      <FilterLabel title="Spécialité">
        <div className="space-y-1.5">
          {specialitesList.map((s) => (
            <CheckItem
              key={s.id}
              label={s.label}
              checked={selectedSpe.includes(s.id)}
              onChange={() => toggleSpe(s.id)}
            />
          ))}
        </div>
      </FilterLabel>

      {/* Période */}
      <FilterLabel title="Période">
        <div className="space-y-1.5">
          {[["all", "Tout afficher"], ["juin", "Juin 2026"], ["juillet", "Juillet 2026"], ["aout", "Août 2026"]].map(([id, label]) => (
            <CheckItem
              key={id}
              type="radio"
              label={label}
              checked={selectedPeriode === id}
              onChange={() => setSelectedPeriode(id)}
            />
          ))}
        </div>
      </FilterLabel>

      {/* Bus */}
      <FilterLabel title="Bus">
        <div className="space-y-1.5">
          {busList.map((b) => (
            <CheckItem
              key={b.id}
              label={b.label}
              checked={selectedBus.includes(b.id)}
              onChange={() => toggleBus(b.id)}
            />
          ))}
        </div>
      </FilterLabel>
    </aside>
  );
}

// ─── Carte passage ────────────────────────────────────────────────────────

function PassageCard({ p }) {
  const low = p.placesRestantes <= 3;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
      {/* Date + heure */}
      <div className="sm:w-44 shrink-0">
        <p className="font-semibold text-gray-900 text-sm">{formatDate(p.date)}</p>
        <p className="text-gray-400 text-xs mt-0.5">{p.heureDebut} – {p.heureFin}</p>
      </div>

      {/* Lieu + badges */}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-900 text-sm mb-0.5 truncate">{p.lieu}</p>
        <p className="text-gray-400 text-xs mb-2">{p.ville} ({p.codePostal})</p>
        <div className="flex flex-wrap gap-1.5">
          <span className="bg-gray-900 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {BUS_LABEL[p.bus]}
          </span>
          {p.specialites.map((s) => (
            <span key={s} className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {SPE_LABEL[s]}
            </span>
          ))}
        </div>
      </div>

      {/* Places + rendez-vous */}
      <div className="flex flex-col items-end gap-2 shrink-0">
        <p className={`text-xs font-semibold ${low ? "text-gray-900" : "text-gray-400"}`}>
          {low && "⚠ "}
          {p.placesRestantes} place{p.placesRestantes > 1 ? "s" : ""} / {p.placesTotal}
        </p>
        <a
          href={`https://app.hocoia.com/rdv?creneau=${p.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-gray-700 transition-colors whitespace-nowrap"
        >
          Prendre rendez-vous ↗
        </a>
      </div>
    </div>
  );
}

// ─── Pagination ───────────────────────────────────────────────────────────

function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center gap-2 justify-center mt-10 flex-wrap">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="px-3.5 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        ←
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onPageChange(p)}
          className={`w-9 h-9 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            p === page
              ? "bg-gray-900 text-white"
              : "border border-gray-200 text-gray-600 hover:bg-gray-100"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="px-3.5 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        →
      </button>
    </div>
  );
}

// ─── État vide ────────────────────────────────────────────────────────────

function EmptyState({ onReset }) {
  return (
    <div className="text-center py-16">
      <div className="w-14 h-14 bg-gray-100 rounded-2xl mx-auto mb-5 flex items-center justify-center">
        <span className="text-xl">🗓</span>
      </div>
      <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
        Aucun passage trouvé
      </h3>
      <p className="text-gray-500 text-sm max-w-xs mx-auto mb-7 leading-relaxed">
        Aucun passage ne correspond à vos critères. Essayez d'élargir votre recherche.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          type="button"
          onClick={onReset}
          className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors cursor-pointer"
        >
          Voir tous les passages
        </button>
        <Link
          to="/patient"
          className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors"
        >
          Revenir au guide patient
        </Link>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function Calendrier() {
  const [query, setQuery]                   = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedSpe, setSelectedSpe]       = useState([]);
  const [selectedPeriode, setSelectedPeriode] = useState("all");
  const [selectedBus, setSelectedBus]       = useState([]);
  const [page, setPage]                     = useState(1);

  function toggleSpe(id) {
    setSelectedSpe((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  }
  function toggleBus(id) {
    setSelectedBus((prev) => prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]);
  }

  const hasFilters = !!(query || selectedRegion || selectedSpe.length > 0 || selectedPeriode !== "all" || selectedBus.length > 0);

  function resetFilters() {
    setQuery(""); setSelectedRegion(""); setSelectedSpe([]);
    setSelectedPeriode("all"); setSelectedBus([]); setPage(1);
  }

  // Retour page 1 à chaque changement de filtre
  useEffect(() => { setPage(1); }, [query, selectedRegion, selectedSpe.join(), selectedPeriode, selectedBus.join()]);

  const filtered = useMemo(() => {
    return passages.filter((p) => {
      if (query) {
        const q = query.toLowerCase();
        if (!p.ville.toLowerCase().includes(q) && !p.lieu.toLowerCase().includes(q) && !p.departement.toLowerCase().includes(q)) return false;
      }
      if (selectedRegion && p.region !== selectedRegion) return false;
      if (selectedSpe.length > 0 && !selectedSpe.some((s) => p.specialites.includes(s))) return false;
      if (selectedPeriode !== "all") {
        if (new Date(p.date + "T00:00:00").getMonth() !== PERIODE_MONTH[selectedPeriode]) return false;
      }
      if (selectedBus.length > 0 && !selectedBus.includes(p.bus)) return false;
      return true;
    });
  }, [query, selectedRegion, selectedSpe, selectedPeriode, selectedBus]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE) || 1;
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const grouped = useMemo(() => {
    const groups = new Map();
    paginated.forEach((p) => {
      const key = getMonthKey(p.date);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(p);
    });
    return [...groups.entries()].map(([label, items]) => ({ label, items }));
  }, [paginated]);

  function goToPage(p) {
    setPage(p);
  }

  return (
    <>
      {/* ─── Hero compact ─────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Bus Hocoia · Calendrier
            </p>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 leading-tight mb-3">
              Les prochains passages près de chez vous
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">
              Trouvez un passage de bus Hocoia dans votre ville et prenez rendez-vous directement en ligne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Corps principal : sidebar + résultats ─────────────────────── */}
      <section className="bg-gray-50 py-10 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">

            {/* ── Sidebar gauche ────────────────────────────────────────── */}
            <FilterSidebar
              selectedRegion={selectedRegion}   setSelectedRegion={setSelectedRegion}
              selectedSpe={selectedSpe}         toggleSpe={toggleSpe}
              selectedPeriode={selectedPeriode} setSelectedPeriode={setSelectedPeriode}
              selectedBus={selectedBus}         toggleBus={toggleBus}
              hasFilters={hasFilters}           onReset={resetFilters}
            />

            {/* ── Zone résultats ────────────────────────────────────────── */}
            <div>
              {/* Barre de recherche · AU-DESSUS des résultats */}
              <div className="bg-white border border-gray-200 rounded-xl p-3 mb-5 shadow-sm">
                <div className="flex gap-3 items-center">
                  <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
                    <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                    </svg>
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Rechercher par ville, département..."
                      className="text-sm text-gray-700 bg-transparent outline-none flex-1 placeholder:text-gray-400"
                    />
                    {query && (
                      <button
                        type="button"
                        onClick={() => setQuery("")}
                        className="text-gray-300 hover:text-gray-500 transition-colors cursor-pointer text-lg leading-none"
                      >
                        ×
                      </button>
                    )}
                  </div>
                  <button
                    type="button"
                    className="bg-gray-900 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-700 transition-colors cursor-pointer shrink-0"
                  >
                    Rechercher
                  </button>
                </div>
              </div>

              {/* Compteur + pagination info */}
              <div className="flex items-center justify-between mb-5">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-900">{filtered.length}</span>{" "}
                  passage{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}
                  {hasFilters && <span className="text-gray-400"> · filtres actifs</span>}
                </p>
                {totalPages > 1 && (
                  <p className="text-sm text-gray-400">
                    Page{" "}
                    <span className="font-semibold text-gray-700">{page}</span>
                    {" "}/ {totalPages}
                  </p>
                )}
              </div>

              {/* Liste des passages ou état vide */}
              {filtered.length === 0 ? (
                <EmptyState onReset={resetFilters} />
              ) : (
                <>
                  <div className="space-y-8">
                    {grouped.map(({ label, items }) => (
                      <div key={`${label}-${page}`}>
                        <h2 className="font-display font-bold text-base text-gray-900 mb-3 pb-2.5">
                          {label}
                        </h2>
                        <motion.div
                          variants={listV}
                          initial="hidden"
                          animate="visible"
                          className="space-y-3"
                        >
                          {items.map((p) => (
                            <motion.div key={p.id} variants={itemV}>
                              <PassageCard p={p} />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    ))}
                  </div>

                  <Pagination page={page} totalPages={totalPages} onPageChange={goToPage} />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA organisations ────────────────────────────────────────────── */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Vous êtes une organisation ?
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight mb-4">
              Déployez Hocoia dans votre territoire
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Entreprises, mutuelles, collectivités · organisez des sessions de dépistage pour vos collaborateurs ou administrés.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/entreprises-et-mutuelles"
                className="bg-white text-gray-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors"
              >
                Découvrir nos offres B2B
              </Link>
              <Link
                to="/collectivites-et-institutions"
                className="border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Collectivités & Acteurs locaux
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
