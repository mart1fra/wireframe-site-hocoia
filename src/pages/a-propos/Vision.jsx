import { Fragment } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../../components/ui/FadeIn";
import { ilsParlentDeNous } from "../../data/pressData";

// ─── Animation variants ───────────────────────────────────────────────────

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const itemV = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// ─── Helpers ──────────────────────────────────────────────────────────────

function Eyebrow({ children, light = false }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${light ? "text-gray-400" : "text-gray-400"}`}>
      {children}
    </p>
  );
}

function SectionH2({ children, light = false }) {
  return (
    <h2 className={`font-display font-bold text-3xl sm:text-4xl leading-tight mb-4 ${light ? "text-white" : "text-gray-900"}`}>
      {children}
    </h2>
  );
}

// ─── Données ──────────────────────────────────────────────────────────────

const valeurs = [
  {
    id: "v1",
    num: "01",
    titre: "La prévention avant tout",
    texte: "Agir avant la maladie. Chaque dépistage réalisé dans un territoire sous-doté est une vie potentiellement transformée.",
  },
  {
    id: "v2",
    num: "02",
    titre: "La santé est un droit, pas un privilège",
    texte: "Que vous viviez à Paris ou dans une commune de 800 habitants, vous méritez le même accès aux soins. C'est notre conviction fondatrice.",
  },
  {
    id: "v3",
    num: "03",
    titre: "La technologie au service du terrain",
    texte: "HocoApp, les bus connectés, la télé-expertise : chaque outil est conçu pour que les soignants passent plus de temps à soigner, moins à administrer.",
  },
  {
    id: "v4",
    num: "04",
    titre: "Le partenariat plutôt que la substitution",
    texte: "Nous ne remplaçons pas les soignants locaux — nous les épaulons. Chaque déploiement est conçu en co-construction avec les acteurs du territoire.",
  },
];

const jalons = [
  { id: "j1", annee: "2021", titre: "Création à Strasbourg", texte: "Un médecin et des ingénieurs fondent Hocoia autour d'une conviction : la santé mobile peut résoudre la crise des déserts médicaux." },
  { id: "j2", annee: "2022", titre: "Premier MédicoBus déployé", texte: "Le premier bus médical Hocoia sillonne l'Alsace. Premiers dépistages, premiers retours patients." },
  { id: "j3", annee: "2023", titre: "Lancement HocoApp", texte: "La plateforme de coordination médicale est mise en production. Prise de RDV, dossier patient, télé-expertise en un seul outil." },
  { id: "j4", annee: "2024", titre: "MammoBus & expansion nationale", texte: "Lancement du MammoBus, déploiement dans 6 nouvelles régions, cap des 2 000 patients accompagnés." },
  { id: "j5", annee: "2025", titre: "3 000 patients & partenariats institutionnels", texte: "MGEN, collectivités, ARS : les partenariats structurants se multiplient. Hocoia devient un acteur de référence." },
];

// ─── Section 1 — Hero ─────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            À propos · Vision & Mission
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-6">
            Rendre la santé accessible à tous,{" "}
            <em className="italic not-italic">partout en France.</em>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Hocoia est né d'un constat simple et d'une ambition démesurée : des millions de Français n'ont pas accès aux soins dont ils ont besoin. Nous avons décidé que ce n'était pas une fatalité.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 2 — Mission ──────────────────────────────────────────────────

function MissionSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <Eyebrow>Notre mission</Eyebrow>
          <SectionH2>Aller vers les patients, pas l'inverse.</SectionH2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Dans les déserts médicaux, les patients ne consultent pas — non pas par manque de volonté, mais par manque d'accès. Hocoia inverse ce paradigme : nous déployons des unités médicales mobiles connectées directement dans les territoires sous-dotés.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            Dépistage, prévention, consultations spécialisées, suivi chronique : nos bus médicaux itinérants portent une offre de soins complète, là où elle manque.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "30 %",  label: "des Français en désert médical" },
              { value: "3 000+", label: "patients accompagnés" },
              { value: "80+",   label: "communes desservies" },
              { value: "12",    label: "spécialités médicales" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center">
                <p className="font-display font-bold text-3xl text-gray-900 mb-1">{s.value}</p>
                <p className="text-gray-500 text-xs leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Section 3 — Valeurs ──────────────────────────────────────────────────

function ValeursSection() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-14">
          <Eyebrow>Ce en quoi nous croyons</Eyebrow>
          <SectionH2>Nos valeurs fondatrices</SectionH2>
          <p className="text-gray-500 text-base max-w-xl">
            Elles guident chaque décision, chaque déploiement, chaque partenariat.
          </p>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {valeurs.map((v) => (
            <motion.div
              key={v.id}
              variants={itemV}
              className="bg-white border border-gray-200 rounded-xl p-6 flex gap-5"
            >
              <p className="font-display font-bold text-3xl text-gray-200 leading-none shrink-0 w-10">
                {v.num}
              </p>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-2">{v.titre}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{v.texte}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 4 — Notre histoire ───────────────────────────────────────────

function HistoireSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-14">
          <Eyebrow>Notre histoire</Eyebrow>
          <SectionH2>De Strasbourg à toute la France.</SectionH2>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col lg:flex-row items-start gap-0"
        >
          {jalons.map((j, i) => (
            <Fragment key={j.id}>
              <motion.div variants={itemV} className="flex-1 px-3 py-2">
                <p className="font-display font-bold text-4xl text-gray-200 leading-none mb-2">
                  {j.annee}
                </p>
                <p className="font-semibold text-gray-900 text-sm mb-1">{j.titre}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{j.texte}</p>
              </motion.div>
              {i < jalons.length - 1 && (
                <div className="hidden lg:flex items-start justify-center pt-10 text-gray-300 text-lg shrink-0">
                  →
                </div>
              )}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 5 — Ils parlent de nous (compact) ────────────────────────────

function MediaSection() {
  const items = ilsParlentDeNous.items.slice(0, 3);
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="flex items-end justify-between mb-8">
          <div>
            <Eyebrow>Dans les médias</Eyebrow>
            <SectionH2>Ils parlent de nous</SectionH2>
          </div>
          <Link
            to="/presse"
            className="text-sm font-semibold text-gray-600 hover:text-gray-900 underline underline-offset-4 transition-colors shrink-0"
          >
            Voir tous les articles →
          </Link>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-2"
        >
          {items.map((article) => (
            <motion.div
              key={article.id}
              variants={itemV}
              className="bg-white border border-gray-200 rounded-xl px-5 py-3.5 flex items-center gap-4 hover:border-gray-400 transition-colors"
            >
              <span className="font-semibold text-gray-900 text-sm shrink-0 w-36 truncate">
                {article.media}
              </span>
              <span className="bg-gray-100 text-gray-500 text-xs px-2.5 py-0.5 rounded-full shrink-0">
                {article.type}
              </span>
              <p className="text-gray-700 text-sm flex-1 truncate">{article.titre}</p>
              <span className="text-gray-400 text-xs shrink-0">{article.date}</span>
              <a
                href={article.url}
                className="text-xs font-semibold text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors shrink-0"
              >
                Lire →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function Vision() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ValeursSection />
      <HistoireSection />
      <MediaSection />
    </>
  );
}
