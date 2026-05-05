// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Nos solutions de santé mobile",
  h1Segments: [
    { text: "Une gamme complète de ", italic: false },
    { text: "bus médicaux mobiles", italic: true },
    { text: " pour rendre la prévention accessible ", italic: false },
    { text: "partout.", italic: true },
  ],
  subtitle:
    "Hocoia conçoit et déploie des cabinets médicaux mobiles connectés — du dépistage du cancer du sein à la médecine générale, en passant par la dermatologie. Chaque solution est pensée pour un usage précis, dans les territoires, les entreprises ou les établissements de santé.",
  checks: [
    "Cabinets médicaux mobiles certifiés et connectés",
    "Téléconsultation assistée par professionnels de santé",
    "Données hébergées en France, certifiées HDS",
    "Déploiement clé en main partout en France",
  ],
  imagePlaceholder: "Visuel — La gamme Hocoia (MédicoBus, MammoBus, DermatoBus)",
};

// ─── Introduction ──────────────────────────────────────────────────────────

export const intro = {
  eyebrow: "Notre approche",
  h2: "Une réponse concrète aux déserts médicaux et aux délais de RDV",
  paragraph:
    "En France, 6 millions de personnes vivent dans un désert médical et les délais de rendez-vous spécialistes peuvent atteindre 18 mois en zone rurale. Nos cabinets médicaux mobiles apportent la prévention et le dépistage au plus près des patients — dans leur commune, leur entreprise ou leur établissement de santé.",
};

// ─── Solutions (3 bus) ────────────────────────────────────────────────────

export const solutions = [
  {
    id: "medicobus",
    badge: "Polyvalent — Médecine générale",
    h3: "MédicoBus",
    paragraph:
      "Un cabinet médical mobile et connecté de moins de 3,5 tonnes. Pensé pour la médecine générale, le check-up santé et la prévention cardiovasculaire en tout territoire.",
    characteristics: [
      "10+ dispositifs médicaux",
      "Soignant + médecin téléconsultant",
      "Toutes spécialités configurables",
    ],
    audiences: ["Collectivités", "Entreprises", "Établissements"],
    ctaLabel: "Découvrir le MédicoBus →",
    ctaHref: "/produits/medicobus",
    imagePlaceholder: "MédicoBus — cabinet médical mobile polyvalent",
    note: null,
  },
  {
    id: "mammobus",
    badge: "Spécialisé — Cancer du sein",
    h3: "MammoBus",
    paragraph:
      "Une unité mobile de mammographie unique en France à moins de 3,5 tonnes. Dépistage organisé et individuel du cancer du sein, partout dans les territoires.",
    characteristics: [
      "Mammographie + échographie",
      "24 femmes/jour",
      "Hébergement HDS certifié",
    ],
    audiences: ["Collectivités", "Mutuelles", "Hôpitaux"],
    ctaLabel: "Découvrir le MammoBus →",
    ctaHref: "/mammobus",
    imagePlaceholder: "MammoBus — mammographie mobile",
    note: null,
  },
  {
    id: "dermatobus",
    badge: "Spécialisé — Cancer de la peau",
    h3: "DermatoBus",
    paragraph:
      "Cabinet mobile dédié au dépistage du cancer de la peau. Cartographie corps entier, IA mélanome, télé-expertise par les onco-dermatologues du CHU de Caen.",
    characteristics: [
      "Cartographie corps entier",
      "IA + dermatologue CHU",
      "Suivi annuel comparatif",
    ],
    audiences: ["Collectivités", "CPTS", "CHU", "Mutuelles"],
    ctaLabel: "Découvrir le DermatoBus →",
    ctaHref: "/dermatobus",
    imagePlaceholder: "DermatoBus — dépistage cancer de la peau",
    note: "Lancement pilote — automne 2026 en Normandie",
  },
];

export const solutionsSection = {
  eyebrow: "Nos 3 solutions",
  h2: "Quelle solution pour quel besoin ?",
  subtitle: "Chaque bus est pensé pour un usage médical précis et un public spécifique.",
  audiencesLabel: "Pour qui ?",
};

// ─── Tableau comparatif ────────────────────────────────────────────────────

export const comparison = {
  eyebrow: "Comparer les 3 solutions",
  h2: "Quelle solution choisir ?",
  subtitle: "Les principales différences entre nos solutions, pour orienter votre choix.",
  headers: ["Critère", "MédicoBus", "MammoBus", "DermatoBus"],
  rows: [
    {
      criterion: "Spécialité principale",
      values: ["Médecine générale, cardio", "Cancer du sein", "Cancer de la peau"],
    },
    {
      criterion: "Mode d'intervention",
      values: ["Itinérant", "Itinérant", "Itinérant"],
    },
    {
      criterion: "Dispositifs médicaux",
      values: ["10+", "Mammo + écho", "Dermatoscope IA"],
    },
    {
      criterion: "Capacité par jour",
      values: ["30–40 patients", "24 femmes", "20–30 patients"],
    },
    {
      criterion: "Délai de déploiement",
      values: ["2 mois", "2 mois", "2026 (pilote)"],
    },
    {
      criterion: "Public principal",
      values: ["Tous publics", "Femmes 50–74", "Tous publics"],
    },
  ],
};

// ─── Cas d'usage ──────────────────────────────────────────────────────────

export const useCasesSection = {
  eyebrow: "Quand utiliser quelle solution ?",
  h2: "Cas d'usage par profil",
  subtitle: "Des exemples concrets pour vous projeter.",
};

export const useCases = [
  {
    id: "commune-rurale",
    title: "Une commune rurale sans médecin",
    description:
      "Une commune isolée souhaite proposer un dépistage régulier à ses habitants. Le MédicoBus se déploie sur la place du marché ou au CCAS, plusieurs fois par an.",
    solutionLabel: "MédicoBus →",
    solutionHref: "/produits/medicobus",
  },
  {
    id: "journee-sante",
    title: "Une entreprise qui déploie une journée santé",
    description:
      "Un groupe organise une journée prévention pour ses 500 collaborateurs. Bilans cardio, dépistage dermato, dans les locaux.",
    solutionLabel: "MédicoBus →",
    solutionHref: "/produits/medicobus",
  },
  {
    id: "mutuelle-adherentes",
    title: "Une mutuelle qui veut dépister ses adhérentes",
    description:
      "Une mutuelle régionale organise un tour des communes pour dépister le cancer du sein chez ses adhérentes éligibles.",
    solutionLabel: "MammoBus →",
    solutionHref: "/mammobus",
  },
  {
    id: "chu-hors-les-murs",
    title: "Un CHU qui veut étendre son activité hors les murs",
    description:
      "Un CHU souhaite proposer un dépistage dermatologique aux territoires environnants sans saturer son service.",
    solutionLabel: "DermatoBus →",
    solutionHref: "/dermatobus",
  },
  {
    id: "ehpad",
    title: "Un EHPAD pour ses résidents",
    description:
      "Un EHPAD souhaite faire dépister ses résidentes du cancer du sein sans transport médicalisé.",
    solutionLabel: "MammoBus →",
    solutionHref: "/mammobus",
  },
];

// ─── Pourquoi Hocoia ──────────────────────────────────────────────────────

export const whySection = {
  eyebrow: "Pourquoi choisir Hocoia",
  h2: "Une approche unique de la santé mobile",
};

export const whyItems = [
  {
    id: "wh1",
    title: "Cabinets médicaux conçus en interne",
    description:
      "Hocoia conçoit, fabrique et opère ses propres bus. Maîtrise totale de la qualité technique et médicale.",
  },
  {
    id: "wh2",
    title: "Réseau de 120+ professionnels",
    description:
      "Médecins, infirmiers, sages-femmes, MERM. Un réseau formé au protocole Hocoia, garantissant la qualité du soin.",
  },
  {
    id: "wh3",
    title: "Plateforme HocoApp intégrée",
    description:
      "Tous nos déploiements utilisent HocoApp : prise de RDV, dossier patient, comptes-rendus, reporting. Tout intégré.",
  },
  {
    id: "wh4",
    title: "Partenariats scientifiques (CHU)",
    description:
      "Le DermatoBus est validé scientifiquement par le CHU de Caen. Nos protocoles sont supervisés par des comités médicaux.",
  },
];

// ─── CTA final ─────────────────────────────────────────────────────────────

export const cta = {
  h2: "Vous avez un projet de santé mobile ?",
  subtitle:
    "Un expert Hocoia analyse vos besoins et vous oriente vers la solution adaptée. Sous 24h, sans engagement.",
  ctaPrimary: "Demander un échange",
  ctaSecondary: "Voir nos cas clients →",
};
