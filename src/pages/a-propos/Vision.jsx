import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../../components/ui/FadeIn";

// ─── Animation variants ───────────────────────────────────────────────────

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const itemV = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// ─── Data ─────────────────────────────────────────────────────────────────

const stats = [
  { value: "20M",   label: "Français en désert médical aujourd'hui", source: "DREES, 2023" },
  { value: "80+",   label: "Communes déjà desservies par Hocoia",     source: "Données internes Hocoia, 2026" },
  { value: "120+",  label: "Professionnels de santé dans le réseau",  source: "Données internes Hocoia, 2026" },
  { value: "4.8/5", label: "Satisfaction moyenne des patients",        source: "Enquête de satisfaction Hocoia, 2025" },
];

const constatItems = [
  {
    value: "18 mois d'attente",
    desc: "Délai moyen pour voir un dermatologue en zone rurale.",
    source: "CNOM, 2023",
  },
  {
    value: "5 dermatologues ou moins",
    desc: "Dans des départements entiers comme l'Orne ou l'Eure.",
    source: "DREES, répertoire ADELI, 2023",
  },
  {
    value: "50 % des femmes non dépistées",
    desc: "Parmi les plus de 50 ans, pourtant à risque élevé.",
    source: "INCa, 2024",
  },
];

const reponseItems = [
  {
    titre: "La prévention vient à vous",
    desc: "Pas besoin de se déplacer. Hocoia déploie ses unités là où les patients sont.",
  },
  {
    titre: "Des soignants qualifiés sur place",
    desc: "Médecins, infirmières, sages-femmes, MERM : tous fournis par Hocoia.",
  },
  {
    titre: "La technologie au service du diagnostic",
    desc: "Télé-expertise, IA, dispositifs connectés : qualité cabinet, partout.",
  },
  {
    titre: "Détection précoce, vies préservées",
    desc: "95 % de survie si un cancer est détecté au stade 1. (INCa, 2024)",
  },
];

const visionPilliers = [
  {
    titre: "Accessibilité à la prévention",
    citation: "Faire de la prévention un réflexe, partout, pas un privilège de grande ville.",
    desc: "Notre ambition est que la prévention en santé (dépistage, suivi, détection précoce) devienne accessible à chacun, par les moyens les plus pertinents pour chaque territoire.",
  },
  {
    titre: "Excellence médicale partout",
    citation: "La même qualité de soin en zone rurale qu'en centre hospitalier universitaire.",
    desc: "Grâce aux partenariats CHU, à la télé-expertise et aux dispositifs connectés, un patient en zone rurale bénéficie du même niveau de diagnostic qu'un patient en grande ville.",
  },
  {
    titre: "Impact mesurable",
    citation: "Des données qui prouvent l'impact et alimentent la recherche médicale.",
    desc: "Chaque déploiement génère des données anonymisées précieuses pour les territoires, les chercheurs et les politiques de santé publique. Hocoia construit la santé préventive de demain.",
  },
];

const valeurs = [
  {
    titre: "Équité d'accès",
    texte: "La qualité de la prévention ne doit pas dépendre du code postal. C'est le principe fondateur d'Hocoia.",
  },
  {
    titre: "Humain d'abord",
    texte: "La technologie est un outil, pas une fin. Chaque déploiement intègre des soignants réels, qualifiés, engagés. Le patient est toujours accompagné, jamais seul face à une machine.",
  },
  {
    titre: "Rigueur médicale",
    texte: "Nos protocoles sont élaborés avec des CHU et des onco-spécialistes. La prévention que nous apportons est médicalement validée, pas du marketing santé.",
  },
  {
    titre: "Impact durable",
    texte: "On ne fait pas des journées ponctuelles. On construit des programmes annuels, des partenariats long terme, un suivi patient dans le temps.",
  },
];

const fondateurs = [
  {
    nom: "Benoît Bourre",
    role: "Co-fondateur · Médecin généraliste",
    texte: "Avant la pandémie, constate l'aggravation des déserts médicaux et le manque de réponse à cette problématique. Crée le projet Ubidoc en 2020.",
  },
  {
    nom: "Gustavo Acosta",
    role: "Co-fondateur · Ingénieur santé",
    texte: "Rejoint le projet en 2021 pour structurer la solution technologique et le modèle de rapprochement des soins.",
  },
  {
    nom: "Clément Pallière",
    role: "Co-fondateur · Ingénieur santé",
    texte: "Rejoint le projet en 2021, aux côtés de Gustavo, pour donner corps à l'innovation technologique d'Hocoia.",
  },
];

const timeline = [
  {
    annee: "2020",
    titre: "Ubidoc, soigner la pénurie",
    texte: "Avant la pandémie de Covid, Benoît Bourre, médecin généraliste, constate l'aggravation des déserts médicaux et le peu de réponses apportées à cette problématique. Il crée le projet Ubidoc pour faciliter l'accès à la santé de manière innovante.",
  },
  {
    annee: "2021",
    titre: "Ubidoc, rapprocher les soins",
    texte: "Benoît Bourre s'associe à Gustavo Acosta et Clément Pallière, deux ingénieurs spécialisés en santé. Ensemble, ils structurent le projet en mettant l'accent sur l'accès aux soins et la prévention, en développant des solutions pour rapprocher les soins des patients, notamment sur le dernier kilomètre.",
  },
  {
    annee: "2022",
    titre: "Hocoia, innovation en mouvement",
    texte: "Le projet Ubidoc devient Hocoia. Débute la conception et la création du premier Hocobus, un « bus santé » connecté pour apporter la santé en tout lieu, en associant mobilité, humain et technologie. Les premiers collaborateurs sont embauchés.",
  },
  {
    annee: "2023",
    titre: "Hocoia, premiers succès nationaux",
    texte: "Durant l'été, lancement des Hocobus avec les premières commandes. À la fin de l'année, le déploiement des logiciels HocoApp et HocoVisio commence.",
  },
  {
    annee: "2024",
    titre: "Innovation, mammographie mobile",
    texte: "De nombreuses actions de dépistage sont déployées. Plusieurs déploiements d'Hocobus sont réalisés en Nouvelle-Aquitaine, Grand Est et Île-de-France.",
  },
  {
    annee: "2025",
    titre: "Hocoia se déploie",
    badge: "Aujourd'hui",
    texte: "Hocoia a pour ambition de déployer un nouveau modèle de santé de proximité partout en France.",
  },
];

// ─── Section 1 — Hero ─────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-gray-900 py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-8">
            La santé préventive doit être accessible à chaque individu, en tout lieu.
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            En France, 20 millions de personnes vivent dans un désert médical. Hocoia est né d'une conviction simple : ce n'est pas une fatalité. La mobilité et la technologie peuvent rendre la prévention accessible à tous.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 2 — Stats ────────────────────────────────────────────────────

function StatsSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={itemV}
              className="bg-gray-50 rounded-2xl p-7 flex flex-col"
            >
              <p className="font-display font-bold text-4xl text-gray-900 mb-2">{s.value}</p>
              <p className="text-gray-700 text-sm font-medium leading-snug mb-3 flex-1">{s.label}</p>
              <p className="text-gray-400 text-[11px] leading-snug">{s.source}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 3 — Constat / Réponse ───────────────────────────────────────

function ConstantReponseSection() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Gauche — Constat */}
        <FadeIn>
          <div className="bg-white rounded-2xl p-8 h-full flex flex-col">
            <h2 className="font-display font-bold text-2xl text-gray-900 leading-tight mb-4">
              L'accès à la prévention n'est pas égal sur le territoire.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              La France compte parmi les systèmes de santé les plus avancés au monde. Pourtant, selon où l'on habite, la réalité est radicalement différente.
            </p>
            <div className="flex flex-col gap-5 flex-1">
              {constatItems.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-5">
                  <p className="font-display font-bold text-xl text-gray-900 mb-1">{item.value}</p>
                  <p className="text-gray-600 text-sm leading-snug mb-2">{item.desc}</p>
                  <p className="text-gray-400 text-[11px]">Source : {item.source}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Droite — Réponse */}
        <FadeIn delay={0.1}>
          <div className="bg-gray-900 rounded-2xl p-8 h-full flex flex-col">
            <h2 className="font-display font-bold text-2xl text-white leading-tight mb-4">
              Hocoia apporte la prévention là où elle manque.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Plutôt que d'attendre que les déserts médicaux se résorbent, Hocoia a conçu une réponse mobile, technologique et humaine qui court-circuite le problème.
            </p>
            <div className="flex flex-col gap-5 flex-1">
              {reponseItems.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm mb-0.5">{item.titre}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── Section 4 — Mission ─────────────────────────────────────────────────

function MissionSection() {
  return (
    <section className="bg-gray-900 py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="font-display font-bold text-3xl sm:text-4xl text-white leading-snug mb-8">
            « Rendre la santé préventive accessible à tous, en tout lieu, grâce à la mobilité et à la technologie. »
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            Hocoia ne remplace pas le système de santé, il le complète là où il manque. Chaque déploiement est un désert médical qui rétrécit. Chaque dépistage réalisé est une vie potentiellement préservée.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Section 5 — Vision ──────────────────────────────────────────────────

function VisionSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-14 max-w-2xl">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 leading-tight mb-4">
            Ce que nous voulons construire.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Hocoia n'est pas une flotte de bus, c'est une nouvelle façon de rendre la prévention accessible, où qu'on habite. Les unités mobiles sont un moyen, pas une fin : demain, l'accessibilité à la prévention pourra prendre d'autres formes selon les besoins des territoires.
          </p>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {visionPilliers.map((p, i) => (
            <motion.div
              key={i}
              variants={itemV}
              className="bg-gray-50 rounded-2xl p-7 flex flex-col"
            >
              <p className="font-display font-bold text-lg text-gray-900 mb-4">{p.titre}</p>
              <p className="text-gray-500 text-sm italic leading-relaxed mb-4 flex-1">
                « {p.citation} »
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 6 — Valeurs ─────────────────────────────────────────────────

function ValeursSection() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {valeurs.map((v, i) => (
            <motion.div
              key={i}
              variants={itemV}
              className="bg-white rounded-2xl p-7"
            >
              <p className="font-display font-bold text-base text-gray-900 mb-3">{v.titre}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{v.texte}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 7 — Fondateurs + Timeline ───────────────────────────────────

function FoundersSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* Gauche — Fondateurs */}
        <FadeIn>
          <h2 className="font-display font-bold text-3xl text-gray-900 leading-tight mb-4">
            Fondée par un médecin et deux ingénieurs.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-10">
            Hocoia est née d'un constat de terrain (l'aggravation des déserts médicaux) et de la rencontre entre une conviction médicale et une expertise technologique pour y répondre concrètement.
          </p>
          <div className="flex flex-col gap-5">
            {fondateurs.map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <p className="font-display font-bold text-gray-900 text-base mb-0.5">{f.nom}</p>
                <p className="text-gray-400 text-xs font-medium mb-3">{f.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{f.texte}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Droite — Timeline */}
        <FadeIn delay={0.1}>
          <h2 className="font-display font-bold text-3xl text-gray-900 leading-tight mb-10">
            D'Ubidoc à Hocoia.
          </h2>
          <div className="flex flex-col gap-0">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-5 items-start">
                {/* Ligne verticale */}
                <div className="flex flex-col items-center shrink-0 pt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300 shrink-0" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 mt-1 mb-1 min-h-[32px]" />
                  )}
                </div>
                {/* Contenu */}
                <div className="pb-8">
                  <div className="flex items-center gap-2.5 mb-1">
                    <p className="font-display font-bold text-sm text-gray-900">{t.annee}</p>
                    {t.badge && (
                      <span className="text-[10px] font-semibold uppercase tracking-widest bg-gray-100 text-gray-500 px-2.5 py-0.5 rounded-full">
                        {t.badge}
                      </span>
                    )}
                  </div>
                  <p className="font-semibold text-gray-800 text-sm mb-1.5">{t.titre}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── Section 8 — CTA Final ────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 leading-tight mb-4">
            Rejoignez la mission.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-10">
            Patient, soignant, élu ou partenaire, chacun a un rôle à jouer dans l'accès à la prévention pour tous.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/patient"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-semibold px-7 py-4 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              Prendre rendez-vous
            </Link>
            <Link
              to="/a-propos/recrutement"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-7 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              Rejoindre l'équipe
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function Vision() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ConstantReponseSection />
      <MissionSection />
      <VisionSection />
      <ValeursSection />
      <FoundersSection />
      <CtaSection />
    </>
  );
}
