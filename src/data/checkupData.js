// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Expertise · Check-up santé · Bilan global de prévention",
  h1Parts: {
    italicA: "Check-up santé",
    mid: " : connaître son état de santé ",
    italicB: "sans attendre.",
  },
  subtitle:
    "Tension, glycémie, cholestérol, ECG, IMC · un bilan global de prévention en 30 minutes, directement dans votre commune. Sans ordonnance, sans rendez-vous médical préalable.",
  checks: [
    "20 millions de Français en désert médical",
    "Bilan complet en 30 minutes : tension, ECG, biologie, IMC",
    "Résultats analysés par un médecin en téléconsultation",
    "Sans avance de frais pour le patient",
    "Le MédicoBus se déplace dans votre commune ou votre entreprise",
  ],
  ctaPatient: "Trouver un check-up près de chez moi",
  ctaPatientHref: "/patient",
  ctaOrga: "Déployer un programme check-up",
  ctaOrgaHref: "/produits/medicobus",
  imagePlaceholder: "Check-up santé dans le MédicoBus · infirmière et patient, prise de tension",
};

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = [
  { value: "20 M",  label: "Français en désert médical",                              source: "DREES 2023" },
  { value: "11%",   label: "de la population sans accès à un spécialiste à 30 min",  source: "INSEE 2023" },
  { value: "1/2",   label: "adulte n'a pas fait de bilan de santé depuis plus de 5 ans [À VÉRIFIER]", source: "Santé publique France" },
  { value: "30 min", label: "pour un bilan complet : tension, ECG, glycémie, IMC",   source: "Protocole Hocoia" },
];

// ─── Pourquoi se faire dépister ───────────────────────────────────────────────

export const pourquoi = {
  eyebrow: "Pourquoi faire un check-up",
  h2: "L'importance du bilan de santé préventif",
  paragraphs: [
    "Beaucoup de maladies chroniques · hypertension, diabète de type 2, dyslipidémie · évoluent pendant des années sans aucun symptôme. Elles sont découvertes trop tard, souvent lors d'un événement grave (infarctus, AVC, complications rénales).",
    "Un check-up régulier permet de mesurer les principaux indicateurs de santé et d'identifier les risques avant qu'ils ne deviennent des pathologies déclarées. C'est la base de toute démarche de prévention.",
  ],
  encadres: [
    {
      id: "e1",
      titre: "Qui est concerné ?",
      texte:
        "Tous les adultes à partir de 30-35 ans, et dès 20 ans en présence de facteurs de risque (antécédents familiaux, surpoids, tabagisme, sédentarité). Le check-up s'adresse aussi aux personnes qui n'ont pas de médecin traitant ou vivent dans un désert médical.",
    },
    {
      id: "e2",
      titre: "À quelle fréquence ?",
      texte:
        "Un bilan global tous les 3 à 5 ans est recommandé pour un adulte sans facteur de risque particulier. Tous les 1 à 2 ans en présence de facteurs de risque identifiés. La visite médicale obligatoire du travail ne remplace pas ce bilan de prévention.",
    },
    {
      id: "e3",
      titre: "Ce que mesure le check-up Hocoia",
      texte:
        "Tension artérielle, fréquence cardiaque, saturation O₂, poids, IMC, périmètre abdominal, glycémie capillaire, cholestérol total, ECG de repos 12 dérivations. Entretien avec l'infirmière sur les habitudes de vie et les antécédents.",
    },
  ],
};

// ─── Dépistage mobile Hocoia ──────────────────────────────────────────────────

export const depistageHocoia = {
  eyebrow: "La solution Hocoia",
  h2: "Le MédicoBus : le check-up vient à vous",
  paragraphs: [
    "Dans un contexte de désertification médicale (20 millions de Français concernés), accéder à un médecin pour un bilan préventif est souvent impossible. Hocoia a conçu le MédicoBus pour apporter ce service directement dans les communes, les entreprises et les établissements.",
    "Le check-up Hocoia associe une infirmière qualifiée à bord pour la réalisation des mesures, et un médecin en téléconsultation pour l'analyse des résultats et les préconisations. Une prise en charge médicale complète, en 30 minutes, sans déplacement.",
  ],
  differenciateurs: [
    { id: "d1", titre: "Bilan global en une visite", description: "Tension, ECG, glycémie, cholestérol, IMC · tout en 30 minutes, sans multiplier les intervenants." },
    { id: "d2", titre: "Médecin téléconsultant disponible", description: "Un médecin en téléconsultation assistée analyse les résultats et répond aux questions du patient en temps réel." },
    { id: "d3", titre: "Logiciel de coordination intégré", description: "Dossier patient, résultats, préconisations · tout est tracé dans HocoApp et transmis au médecin traitant." },
    { id: "d4", titre: "Accessible partout", description: "Le MédicoBus de moins de 3,5T accède à tous les territoires, y compris les communes rurales sans plateau technique." },
  ],
  bus: {
    badge: "MédicoBus · Check-up santé",
    titre: "MédicoBus",
    description:
      "Cabinet médical mobile polyvalent · plus de 10 dispositifs médicaux embarqués, soignant présent, médecin téléconsultant disponible. Le check-up complet partout en France.",
    href: "/produits/medicobus",
    cta: "Découvrir le MédicoBus →",
  },
};

// ─── Protocole ────────────────────────────────────────────────────────────────

export const protocole = {
  eyebrow: "Comment cela se passe",
  h2: "Le check-up en 4 étapes, en 30 minutes",
  subtitle: "De l'accueil à la restitution immédiate des résultats · tout est inclus.",
  steps: [
    {
      id: "p1", num: "1",
      titre: "Accueil & anamnèse",
      description: "Recueil de vos antécédents médicaux et habitudes de vie par l'infirmière. Préparation au bilan, vérification des contre-indications.",
    },
    {
      id: "p2", num: "2",
      titre: "Mesures & examens",
      description: "Tension artérielle, ECG de repos, glycémie, cholestérol, IMC, périmètre abdominal, saturation. Bilan complet en quelques minutes.",
    },
    {
      id: "p3", num: "3",
      titre: "Téléconsultation médicale",
      description: "Un médecin en téléconsultation analyse vos résultats en temps réel, répond à vos questions et établit vos préconisations personnalisées.",
    },
    {
      id: "p4", num: "4",
      titre: "Restitution & suivi",
      description: "Résultats remis immédiatement à l'issue de la consultation. Compte-rendu transmis à votre médecin traitant. Orientation vers un spécialiste si nécessaire.",
    },
  ],
};

// ─── Bénéfices ────────────────────────────────────────────────────────────────

export const benefices = {
  eyebrow: "Pourquoi Hocoia",
  h2: "Les atouts du check-up mobile",
  cards: [
    { id: "b1", titre: "30 minutes, tout inclus", description: "Tensions, ECG, biologie, téléconsultation et résultats · dans une seule visite. Pas de course entre plusieurs intervenants." },
    { id: "b2", titre: "Accessible sans médecin traitant", description: "Vous n'avez pas de médecin traitant ou habitez en désert médical ? Le MédicoBus vient à vous, sans prescription préalable." },
    { id: "b3", titre: "Résultats immédiats", description: "Contrairement à un bilan sanguin classique, les résultats du check-up Hocoia sont disponibles à la fin de la consultation." },
    { id: "b4", titre: "Suivi médical garanti", description: "En cas d'anomalie détectée, vous êtes orienté vers le bon spécialiste avec un compte-rendu complet. Rien n'est laissé sans suite." },
  ],
};

// ─── Pour qui ─────────────────────────────────────────────────────────────────

export const pourQui = {
  eyebrow: "À qui s'adresse le check-up",
  h2: "Pour les patients comme pour les organisations",
  subtitle:
    "Grand public, entreprises, collectivités, établissements · le check-up santé mobile s'adapte à tous les contextes.",
  cards: [
    {
      id: "pq1",
      titre: "Patients & grand public",
      description:
        "Vous n'avez pas de médecin traitant, vous vivez en désert médical, ou vous n'avez pas fait de bilan de santé depuis longtemps. Le MédicoBus vient à vous.",
      casType: "Sans rendez-vous préalable, sans ordonnance, résultats immédiats.",
      href: "/patient",
      cta: "Trouver un passage →",
    },
    {
      id: "pq2",
      titre: "Entreprises & mutuelles",
      description:
        "Le check-up santé est le programme de prévention le plus demandé par les entreprises. Mesurez l'état de santé de vos équipes, réduisez l'absentéisme.",
      casType: "Cas type : 300 collaborateurs bilancés en 3 jours sur site.",
      href: "/entreprises-et-mutuelles",
      cta: "Solutions entreprise →",
    },
    {
      id: "pq3",
      titre: "Collectivités & territoires",
      description:
        "Proposez un bilan de santé gratuit à vos administrés. Idéal pour les zones sans médecin généraliste, les séniors, les populations précaires.",
      casType: "Cas type : journée santé sur la place du marché, 80 bilans en une journée.",
      href: "/collectivites-et-institutions",
      cta: "Solutions collectivités →",
    },
    {
      id: "pq4",
      titre: "Établissements de santé",
      description:
        "Déchargez votre service de médecine générale en externalisant le dépistage primaire. Le MédicoBus filtre les cas et oriente vers les bons services.",
      casType: "Cas type : partenariat EHPAD pour les résidents sans suivi régulier.",
      href: "/etablissements-de-sante-et-essms",
      cta: "Partenariats hospitaliers →",
    },
  ],
};

// ─── Témoignages ──────────────────────────────────────────────────────────────

export const temoignages = {
  eyebrow: "",
  h2: "Ce que disent nos patients et partenaires",
  cards: [
    {
      id: "t1",
      contexte: "Patient · Bas-Rhin",
      quote: "J'habite dans un village sans médecin depuis 3 ans. Quand le bus est venu sur la place du marché, j'ai pu faire mon bilan en 20 minutes. Simple, rapide, humain.",
      author: "Françoise, 63 ans",
      role: "Saverne, Bas-Rhin",
    },
    {
      id: "t2",
      contexte: "Institutionnel · Ministère des AE",
      quote: "L'organisation est remarquable. Tous les créneaux se sont rapidement remplis. Un examen complet en temps très court.",
      author: "Claire Doucerain",
      role: "Responsable DSE, Ministère des AE",
    },
    {
      id: "t3",
      contexte: "DRH · Collectivité",
      quote: "Nous avions des salariés qui ne voyaient pas de médecin depuis des années. Le check-up a permis de détecter des cas urgents que personne ne soupçonnait.",
      author: "Responsable RH",
      role: "Collectivité locale, Moselle",
    },
  ],
};

// ─── Maillage interne ─────────────────────────────────────────────────────────

export const maillage = {
  eyebrow: "À explorer aussi",
  h2: "Expertises et solutions associées",
  expertises: [
    { id: "e1", label: "Prévention cardiovasculaire", href: "/solutions/prevention-cardio" },
    { id: "e2", label: "Cancer de la peau",           href: "/solutions/cancer-peau" },
    { id: "e3", label: "Cancer du sein",              href: "/solutions/cancer-sein" },
    { id: "e4", label: "Santé de la femme",           href: "/solutions/sante-femme" },
  ],
  busLies: [
    { id: "b1", label: "MédicoBus · cabinet médical mobile", href: "/produits/medicobus" },
  ],
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "",
  h2: "Tout savoir sur le check-up santé mobile",
  items: [
    {
      id: "f1",
      question: "Ai-je besoin d'une ordonnance pour faire un check-up ?",
      answer:
        "Non. Le check-up Hocoia ne nécessite pas d'ordonnance ni de rendez-vous chez un médecin préalable. Venez directement au MédicoBus lors de son passage dans votre commune.",
    },
    {
      id: "f2",
      question: "Quels examens sont réalisés pendant le check-up ?",
      answer:
        "Tension artérielle, fréquence cardiaque, saturation en oxygène, poids, IMC, périmètre abdominal, glycémie capillaire, cholestérol total, ECG de repos 12 dérivations. Un entretien avec l'infirmière sur les antécédents et habitudes de vie est également inclus.",
    },
    {
      id: "f3",
      question: "Combien de temps dure la consultation ?",
      answer:
        "Environ 30 minutes pour un bilan complet incluant les mesures, la téléconsultation médicale et la restitution des résultats.",
    },
    {
      id: "f4",
      question: "Quand est-ce que je reçois mes résultats ?",
      answer:
        "Les résultats sont restitués immédiatement à l'issue de la consultation par le médecin en téléconsultation. Un compte-rendu écrit vous est envoyé par email sécurisé et transmis à votre médecin traitant si vous le souhaitez.",
    },
    {
      id: "f5",
      question: "Le check-up est-il remboursé ?",
      answer:
        "Le coût est pris en charge par la collectivité, la mutuelle ou l'entreprise qui organise la campagne. La consultation est gratuite pour le patient, sans avance de frais.",
    },
    {
      id: "f6",
      question: "Que se passe-t-il si une anomalie est détectée ?",
      answer:
        "Le médecin en téléconsultation vous explique le résultat et vous oriente vers le bon spécialiste avec un compte-rendu complet. Une prise en charge rapide est organisée pour les cas urgents.",
    },
    {
      id: "f7",
      question: "Qu'est-ce qu'un check-up santé Hocoia ?",
      answer:
        "Le check-up santé est un parcours complet de prévention permettant d'évaluer plusieurs indicateurs de santé au cours d'un même rendez-vous. Une infirmière réalise une prise de sang sur place ainsi que différents examens : ECG, tension artérielle, fréquence cardiaque, saturation en oxygène, poids, taille, spirométrie et, selon le programme, des examens complémentaires. Une téléconsultation avec un médecin permet ensuite d'analyser les résultats et d'échanger sur le suivi.",
    },
  ],
};

// ─── CTA Final ────────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Votre santé mérite plus qu'une attente.",
  subtitle:
    "30 minutes pour faire le point sur votre santé · que vous soyez patient ou organisation.",
  ctaPatient: "Je suis patient · Trouver une date",
  ctaPatientHref: "/patient",
  ctaOrga: "Je suis une organisation · Demander une présentation",
  ctaOrgaHref: "/produits/medicobus",
};
