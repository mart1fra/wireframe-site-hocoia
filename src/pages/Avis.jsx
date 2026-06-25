import { motion } from "framer-motion";

// Page SEO — accessible uniquement via recherche Google, pas dans la navigation

const NOTE_GLOBALE = 4.8;
const TOTAL_AVIS = 127;

const categories = [
  { label: "Entreprises & mutuelles", note: 4.9, nb: 48 },
  { label: "Collectivités & institutions", note: 4.8, nb: 35 },
  { label: "Établissements de santé", note: 4.7, nb: 21 },
  { label: "Patients", note: 4.8, nb: 23 },
];

const avis = [
  {
    id: "a1",
    stars: 5,
    profil: "Entreprise",
    quote: "On a lancé le programme dans la foulée du COMEX. L'organisation a été prise en charge de A à Z par Hocoia, zéro charge côté RH. Je recommande à tout DAF qui veut un impact mesurable.",
    author: "Julien R.",
    role: "Directeur financier · PME 450 salariés",
  },
  {
    id: "a2",
    stars: 5,
    profil: "Collectivité",
    quote: "Les créneaux ont tous trouvé preneur, y compris en fin d'année. Toutes les conditions étaient réunies pour faire de cette journée un franc succès.",
    author: "Christian Untereiner",
    role: "Président, CC Pays de Phalsbourg",
  },
  {
    id: "a3",
    stars: 5,
    profil: "Collectivité",
    quote: "Cette initiative, mise en place rapidement, remporte un franc succès : des créneaux pleins, captant même l'intérêt spontané de personnes en plein quotidien.",
    author: "Roland Klein",
    role: "Président, CC Sarrebourg Moselle Sud",
  },
  {
    id: "a4",
    stars: 5,
    profil: "Mutuelle",
    quote: "Ça apporte une sécurité aux gens de pouvoir ne pas attendre d'être malade pour consulter.",
    author: "Christophe Antonelli",
    role: "Conseiller mutualiste, Mutuelle Générale d'Avignon",
  },
  {
    id: "a5",
    stars: 5,
    profil: "Établissement de santé",
    quote: "L'organisation est remarquable : prise de RDV, déroulement, tous les créneaux remplis rapidement. Ce concept permet un examen complet dans un cadre rassurant.",
    author: "Claire Doucerain",
    role: "Responsable DSE, Ministère des Affaires étrangères",
  },
  {
    id: "a6",
    stars: 5,
    profil: "Collectivité",
    quote: "On ne disposait plus de dermatologues dans notre zone. Hocoia a organisé 3 jours de dépistage. Nous sommes très satisfaits de cette initiative.",
    author: "Jean-Pierre Cerbai",
    role: "Chargé de la santé, Val de Fensch",
  },
  {
    id: "a7",
    stars: 5,
    profil: "Professionnel de santé",
    quote: "Après 15 ans en cabinet, j'avais besoin de retrouver du sens. Avec Hocoia, chaque mission me rappelle pourquoi j'ai choisi ce métier.",
    author: "Dr. Rémi T.",
    role: "Cardiologue · Lyon",
  },
  {
    id: "a8",
    stars: 5,
    profil: "Professionnel de santé",
    quote: "La logistique est parfaite. J'arrive, tout est installé, je me concentre sur mes patientes. Et je choisis mes jours.",
    author: "Marine F.",
    role: "Sage-femme · Strasbourg",
  },
  {
    id: "a9",
    stars: 4,
    profil: "Entreprise",
    quote: "La gestion est centralisée, la paperasse gérée en amont. Nos salariés sont ravis du dispositif.",
    author: "Sophie T.",
    role: "Gestionnaire de paie · Groupe services 800 salariés",
  },
  {
    id: "a10",
    stars: 5,
    profil: "Collectivité",
    quote: "Hocoia permet de renforcer localement l'accès aux soins tout en désengorgeant les cabinets médicaux pour les pathologies bénignes.",
    author: "Johann Mittelhausser",
    role: "Maire d'Angerville",
  },
  {
    id: "a11",
    stars: 5,
    profil: "Établissement de santé",
    quote: "Un bilan extrêmement positif, toutes les patientes ont exprimé leur satisfaction. Ce dispositif répond à un vrai besoin que nos structures ne peuvent pas couvrir seules.",
    author: "Anne Haller",
    role: "Coordinatrice Contrat Local de Santé",
  },
  {
    id: "a12",
    stars: 5,
    profil: "Professionnel de santé",
    quote: "Les outils Hocoia permettent de faire en mobilité ce qu'on ne peut faire habituellement qu'en cabinet. La prise en charge est vraiment complète.",
    author: "Dr. Arous",
    role: "Médecin généraliste · Moselle",
  },
];

function Stars({ count }) {
  return (
    <span style={{ color: "#AAAAAA", fontSize: 14, letterSpacing: 1 }}>
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </span>
  );
}

function ScoreBar({ value }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ flex: 1, height: 6, backgroundColor: "#F0F0F0", borderRadius: 99, overflow: "hidden" }}>
        <div style={{ width: `${(value / 5) * 100}%`, height: "100%", backgroundColor: "#CCCCCC", borderRadius: 99 }} />
      </div>
      <span style={{ fontSize: 12, color: "#6B6B6B", minWidth: 28, textAlign: "right" }}>{value.toFixed(1)}</span>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", delay: i * 0.05 } }),
};

export default function Avis() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F5F5F5" }}>

      {/* Hero SEO */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#9B9B9B" }}>
            Avis clients
          </p>
          <h1 className="font-display font-bold text-4xl mb-3" style={{ color: "#1A1A1A" }}>
            Avis sur Hocoia
          </h1>
          <p className="text-sm" style={{ color: "#6B6B6B" }}>
            Ce que disent les entreprises, collectivités, établissements de santé et professionnels qui travaillent avec Hocoia.
          </p>
        </motion.div>
      </section>

      {/* Score global */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.08 }}
          className="rounded-2xl p-8"
          style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E5E5" }}
        >
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">

            {/* Note globale */}
            <div className="flex flex-col items-center gap-1 min-w-[120px]">
              <span className="font-display font-bold" style={{ fontSize: 56, lineHeight: 1, color: "#1A1A1A" }}>
                {NOTE_GLOBALE}
              </span>
              <Stars count={5} />
              <span className="text-xs mt-1" style={{ color: "#9B9B9B" }}>{TOTAL_AVIS} avis</span>
            </div>

            {/* Barres par catégorie */}
            <div className="flex-1 w-full space-y-3">
              {categories.map((cat) => (
                <div key={cat.label} className="grid gap-2" style={{ gridTemplateColumns: "1fr auto auto" }}>
                  <span className="text-sm truncate" style={{ color: "#4A4A4A" }}>{cat.label}</span>
                  <ScoreBar value={cat.note} />
                  <span className="text-xs" style={{ color: "#AAAAAA", minWidth: 40 }}>({cat.nb})</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </section>

      {/* Grille d'avis */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {avis.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="rounded-xl p-5 flex flex-col gap-3"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E5E5" }}
            >
              <div className="flex items-center justify-between">
                <Stars count={item.stars} />
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#F0F0F0", color: "#6B6B6B" }}
                >
                  {item.profil}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                "{item.quote}"
              </p>
              <div className="mt-auto">
                <p className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>{item.author}</p>
                <p className="text-xs" style={{ color: "#9B9B9B" }}>{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
