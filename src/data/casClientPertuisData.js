// ─── Carte pour la page CasClients.jsx ───────────────────────────────────────

export const casClientCard = {
  id: "cc-pertuis",
  tag: "Mutuelle · Vaucluse",
  titre: "Mutuelle Générale d'Avignon : 72 patients dépistés à Pertuis",
  meta: "3 jours · Avril 2025 · Dépistage cancer de la peau",
  audience: "B2B",
  href: "/ressources/cas-clients/pertuis-mutuelle-avignon",
  cta: "Lire le cas →",
};

// ─── SEO (à brancher avec react-helmet-async) ─────────────────────────────────

export const seoMeta = {
  title:
    "Cas client Pertuis : dépistage cancer de la peau avec la Mutuelle Générale d'Avignon | Hocoia",
  description:
    "72 patients dépistés en 3 jours à Pertuis grâce au MédicoBus Hocoia et la Mutuelle Générale d'Avignon. Découvrez comment déployer une campagne de prévention dans votre territoire.",
  canonical: "/ressources/cas-clients/pertuis-mutuelle-avignon",
  schema: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Mutuelle Générale d'Avignon : 72 patients dépistés du cancer de la peau en 3 jours à Pertuis",
    datePublished: "2025-04-24",
    author: { "@type": "Organization", name: "Hocoia" },
    publisher: { "@type": "Organization", name: "Hocoia" },
    description:
      "72 patients dépistés en 3 jours à Pertuis grâce au MédicoBus Hocoia et la Mutuelle Générale d'Avignon.",
  },
};

// ─── En-tête ──────────────────────────────────────────────────────────────────

export const entete = {
  badge: "Cas client",
  tags: ["Mutuelle", "Vaucluse (84)", "Avril 2025"],
  h1: "Mutuelle Générale d'Avignon : 72 patients dépistés du cancer de la peau en 3 jours à Pertuis",
  chapo:
    "Dans un territoire en tension dermatologique, la Mutuelle Générale d'Avignon s'est associée à Hocoia pour déployer le MédicoBus au CCAS de Pertuis. Trois jours, 72 adhérents dépistés, 100% de créneaux remplis, et un programme mensuel reconduit jusqu'à la fin de l'année.",
  publishedAt: "24 avril 2025",
  readTime: "4 min",
  imagePlaceholder:
    "Photo — MédicoBus Hocoia installé au CCAS de Pertuis, avril 2025",
};

// ─── Chiffres clés ────────────────────────────────────────────────────────────

export const chiffres = [
  { value: "72",   label: "patients dépistés" },
  { value: "3",    label: "jours d'opération" },
  { value: "24",   label: "patients par jour" },
  { value: "100%", label: "de créneaux remplis" },
];

// ─── Résumé express ───────────────────────────────────────────────────────────

export const resumeExpress = {
  eyebrow: "L'essentiel",
  h2: "Ce qu'il faut retenir",
  cards: [
    {
      id: "r1",
      label: "PROBLÉMATIQUE",
      contenu:
        "Délais dermatologiques de plusieurs semaines dans le Vaucluse. Accès aux soins de prévention difficile pour les adhérents.",
    },
    {
      id: "r2",
      label: "SOLUTION",
      contenu:
        "MédicoBus Hocoia déployé 3 jours au CCAS de Pertuis. Parcours de télédermatologie avec infirmière à bord et dermatologue partenaire.",
    },
    {
      id: "r3",
      label: "RÉSULTAT",
      contenu:
        "72 patients pris en charge, 100% de créneaux remplis, programme mensuel reconduit pour toute l'année 2025.",
    },
  ],
};

// ─── Citation forte ───────────────────────────────────────────────────────────

export const citationForte = {
  quote:
    "Ça apporte une sécurité aux gens de pouvoir ne pas attendre d'être malade pour consulter.",
  nom: "Christophe Antonelli",
  fonction: "Conseiller mutualiste, Mutuelle Générale d'Avignon",
};

// ─── Contexte local ───────────────────────────────────────────────────────────

export const contexteLocal = {
  eyebrow: "Le contexte",
  h2: "Un territoire en tension dermatologique",
  paragraphs: [
    "Dans le Vaucluse comme dans une grande partie de la région Provence-Alpes-Côte d'Azur, obtenir un rendez-vous en dermatologie peut prendre plusieurs semaines. Pour le dépistage dermatologique, ce délai n'est pas anodin : le dépistage précoce reste le facteur qui change le plus le parcours du patient.",
    "C'est ce constat qui a conduit la Mutuelle Générale d'Avignon à agir auprès de ses adhérents de Pertuis et des communes environnantes.",
  ],
  citation: {
    quote:
      "On s'est aperçu qu'il y avait un souci pour les personnes à avoir des rendez-vous assez spécifiques sur la dermatologie.",
    auteur: "— Christophe Antonelli",
  },
};

// ─── Déroulement ──────────────────────────────────────────────────────────────

export const deroulement = {
  eyebrow: "Le déploiement",
  h2: "Un MédicoBus au cœur de Pertuis, du 14 au 16 avril 2025",
  subtitle:
    "Installé au CCAS de Pertuis, le cabinet médical mobile a accueilli les patients sur trois jours consécutifs, créneaux remplis.",
  intro:
    "Pensé comme un cabinet médical mobile connecté, le MédicoBus permet de réaliser des consultations de médecine générale et de spécialité. À Pertuis, il a été configuré pour une campagne de dépistage du cancer de la peau avec un parcours patient structuré.",
  paragraphs: [
    "Les trois jours au CCAS de Pertuis se sont enchaînés avec une organisation fluide. Les rendez-vous, pris en amont par les adhérents via la Mutuelle Générale d'Avignon, ont permis à l'équipe médicale de consacrer un temps dédié à chaque patient.",
    "Chaque consultation s'est déroulée dans un parcours encadré : accueil par l'infirmière à bord, examen des lésions signalées, transmission sécurisée au dermatologue partenaire pour analyse. Les patients ont reçu leur avis écrit dans les semaines suivantes, avec orientation si nécessaire.",
  ],
  citation: {
    quote:
      "On explique très clairement aux gens ce qu'on fait. On leur dit bien que nous ne sommes pas des médecins, mais que nous sommes en lien avec un médecin.",
    auteur: "— Gaëlle Breton, infirmière à bord du MédicoBus",
  },
};

// ─── Résultats ────────────────────────────────────────────────────────────────

export const resultats = {
  eyebrow: "L'impact",
  h2: "Un format qui tient ses promesses",
  paragraphs: [
    "Sur les trois jours, les créneaux ont été entièrement remplis. Les rendez-vous, pris en amont par les adhérents auprès de la Mutuelle Générale d'Avignon, ont permis une organisation fluide et un temps de qualité avec chaque patient. Pour ceux concernés par un suivi ou une consultation, le relais a été pris immédiatement.",
    "L'accueil réservé au dispositif a convaincu la mutuelle d'aller plus loin : une semaine de dépistage par mois est désormais programmée jusqu'à la fin de l'année, pour continuer à répondre à une demande forte dans le Vaucluse.",
  ],
  citation: {
    quote:
      "Les adhérents étaient tous très satisfaits du concept, de l'accueil, de la qualité. Ils ne s'attendaient pas à avoir autant de qualité à l'intérieur du bus. C'est quelque chose qu'ils ont vraiment apprécié, et qu'ils espèrent qu'on renouvellera.",
    nom: "Christophe Antonelli",
    fonction: "Conseiller mutualiste, Mutuelle Générale d'Avignon",
  },
};

// ─── Satisfaction ─────────────────────────────────────────────────────────────

export const satisfaction = {
  eyebrow: "Satisfaction",
  h2: "Un taux de satisfaction exceptionnel",
  items: [
    {
      id: "s1",
      chiffre: "96%",
      label: "des patients satisfaits",
      sousLabel: "Enquête post-dépistage, avril 2025",
    },
    {
      id: "s2",
      chiffre: "98%",
      label: "recommanderaient le dispositif",
      sousLabel: "Base : 72 répondants",
    },
    {
      id: "s3",
      chiffre: "100%",
      label: "estiment l'accueil de qualité",
      sousLabel: "Questionnaire sur site",
    },
  ],
};

// ─── Enseignements ────────────────────────────────────────────────────────────

export const enseignements = {
  eyebrow: "Ce que ça nous apprend",
  h2: "Ce qu'une action comme celle-ci permet d'ouvrir",
  intro:
    "L'opération de Pertuis illustre la manière dont Hocoia travaille : un véhicule conçu pour la santé, une infrastructure technologique pensée pour le terrain, et des équipes capables de rendre l'ensemble lisible pour les patients comme pour les partenaires.",
  cards: [
    {
      id: "e1",
      titre: "Aller vers les patients",
      description:
        "Un modèle réplicable partout en France, du sud aux territoires enclavés, pour rapprocher les soins de prévention des publics.",
    },
    {
      id: "e2",
      titre: "Faire équipe avec les mutuelles",
      description:
        "Les mutuelles sont un relais privilégié pour identifier les besoins de leurs adhérents et co-construire les campagnes.",
    },
    {
      id: "e3",
      titre: "Libérer le temps médical",
      description:
        "Le triage infirmière + télédermatologie permet de toucher plus de patients sans surcharger les dermatologues du territoire.",
    },
  ],
};

// ─── Articles liés ────────────────────────────────────────────────────────────

export const articlesLies = {
  eyebrow: "À lire aussi",
  h2: "Nos autres cas clients et ressources",
  cards: [
    {
      id: "al1",
      badge: "Cas client",
      titre: "Val de Fensch : 3 jours de dépistage dermato pour 180 habitants",
      meta: "Collectivité · Moselle · 2024",
      cta: "Lire le cas →",
      href: null,
      imagePlaceholder: "Photo — MédicoBus Val de Fensch, 2024",
    },
    {
      id: "al2",
      badge: "Livre blanc",
      titre:
        "Mutuelles & prévention santé : 5 clés pour une campagne territoriale réussie",
      meta: "PDF · 16 pages",
      cta: "Télécharger →",
      href: null,
      imagePlaceholder: "Couverture — Livre blanc mutuelles & prévention santé",
    },
    {
      id: "al3",
      badge: "Article",
      titre: "Télédermatologie : comment ça marche, qu'est-ce qu'on en attend",
      meta: "Article · 6 min",
      cta: "Lire l'article →",
      href: null,
      imagePlaceholder: "Illustration — Télédermatologie Hocoia",
    },
  ],
  maillageLiens: [
    { label: "Le MédicoBus en détail", href: "/produits/medicobus" },
    { label: "Nos solutions pour les mutuelles", href: "/entreprises" },
    { label: "Nos cas clients en collectivité", href: "/ressources/cas-clients" },
    { label: "La télédermatologie Hocoia", href: "/ressources/articles" },
  ],
};

// ─── CTA Final ────────────────────────────────────────────────────────────────

export const ctaFinal = {
  eyebrow: "Votre territoire",
  h2: "Vous êtes une mutuelle, une collectivité ou une entreprise ?",
  subtitle:
    "Faites venir la prévention au plus près de vos publics. Échangeons sur votre projet.",
  ctaPrimary: "Organiser un dépistage dans votre territoire →",
  ctaOutline: "Découvrir le MédicoBus",
};
