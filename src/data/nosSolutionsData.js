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
    "Hocoia conçoit et déploie des cabinets médicaux mobiles et connectés — du dépistage du cancer du sein à la médecine générale, en passant par la dermatologie. Chaque solution est pensée pour un usage précis, dans les territoires, les entreprises ou les établissements de santé.",
  checks: [
    "Cabinets médicaux mobiles certifiés et connectés",
    "Téléconsultation assistée par professionnels de santé",
    "Données hébergées en France, certifiées HDS",
    "Déploiement clé en main partout en France",
    "MédicoBus et MammoBus référencés RESAH",
  ],
  imagePlaceholder: "Visuel — La gamme Hocoia (MédicoBus, MammoBus, DermatoBus)",
};

// ─── Introduction ──────────────────────────────────────────────────────────

export const intro = {
  eyebrow: "Notre approche",
  h2: "Une réponse concrète aux déserts médicaux et aux délais de consultations",
  paragraph:
    "En France, 6 millions de personnes vivent dans un désert médical et les délais de rendez-vous spécialistes peuvent atteindre 18 mois en zone rurale. Nos cabinets médicaux mobiles apportent la prévention et le dépistage au plus près des patients.",
};

// ─── Solutions (3 bus) ────────────────────────────────────────────────────

export const solutions = [
  {
    id: "medicobus",
    badge: "Polyvalent — Médecine générale",
    h3: "MédicoBus",
    paragraph:
      "Un cabinet médical mobile et connecté de moins de 3,5 tonnes. Pensé pour la médecine générale, le check-up santé, la santé de la femme et la prévention cardiovasculaire en tout territoire.",
    characteristics: [
      "10+ dispositifs médicaux",
      "Soignant + médecin téléconsultant",
      "Toutes spécialités configurables",
    ],
    audiences: ["Collectivités", "Entreprises", "Mutuelles", "Établissements de santé", "CPTS / MSP"],
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
      "24 patientes/jour",
      "Hébergement HDS certifié",
    ],
    audiences: ["Collectivités", "Entreprises", "Mutuelles", "Établissements de santé"],
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
      "Cabinet mobile dédié au dépistage du cancer de la peau. Cartographie corps entier, IA mélanome, télé-expertise par des onco-dermatologues partenaires.",
    characteristics: [
      "Cartographie corps entier",
      "IA + dermatologue partenaire",
      "Suivi annuel comparatif",
    ],
    audiences: ["Collectivités", "CPTS / MSP", "Mutuelles", "Établissements de santé"],
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
      values: ["Cardiologie · Dermatologie · Santé femme · Check-up", "Cancer du sein", "Cancer de la peau"],
    },
    {
      criterion: "Mode d'intervention",
      values: ["Itinérant", "Itinérant", "Itinérant"],
    },
    {
      criterion: "Dispositifs médicaux",
      values: ["10+", "Mammographe + échographe", "Dermatoscope IA"],
    },
    {
      criterion: "Capacité par jour",
      values: ["16–24 patients selon la thématique", "24 patientes", "20–30 patients"],
    },
    {
      criterion: "Délai de déploiement",
      values: ["2 mois", "2 mois", "2026 (pilote)"],
    },
    {
      criterion: "Public principal",
      values: ["Tous publics majeurs", "Femmes 40–75 ans", "Tous publics majeurs"],
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
    title: "Une commune rurale qui pallie à l'absence de médecin",
    description:
      "Une commune isolée souhaite proposer un dépistage régulier à ses habitants. Le MédicoBus se déploie sur la place du marché ou au CCAS, plusieurs fois par an.",
    solutionLabel: "MédicoBus →",
    solutionHref: "/produits/medicobus",
  },
  {
    id: "journee-sante",
    title: "Une entreprise qui déploie une journée santé",
    description:
      "Un groupe organise une journée prévention pour ses 500 collaborateurs. Bilans Cardiologie, dépistage Dermatologie, dans les locaux.",
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
    title: "Un EHPAD qui veut assurer un suivi régulier à ses résidents",
    description:
      "Un EHPAD souhaite proposer des bilans de santé réguliers à ses résidents sans transport médicalisé. Le MédicoBus se déploie directement dans l'établissement.",
    solutionLabel: "MédicoBus →",
    solutionHref: "/produits/medicobus",
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
      "Tous nos déploiements utilisent HocoApp : prise de RDV, dossier patient, comptes-rendus, reporting. Tout est centralisé.",
  },
];

// ─── Modèles d'engagement (acquisition / prestation) ──────────────────────

export const modelesEngagement = {
  eyebrow: "Acquérir ou déployer un bus médical",
  h2: "Votre bus médical sur mesure",
  subtitle:
    "Dotez-vous d'un bus médical en propre pour un service de santé mobile pérenne. Ou lancez-vous rapidement avec une prestation clé en main Hocoia.",
  acquisition: {
    tag: "Acquisition / Location longue durée",
    title: "Un bus médical conçu selon vos spécifications",
    description:
      "Hocoia conçoit et fabrique votre bus médical sur mesure — spécialités, équipements, identité visuelle. Vous en devenez propriétaire ou locataire longue durée, opérable en autonomie ou avec les équipes Hocoia.",
    points: [
      "Spécialités et équipements configurés selon votre cahier des charges",
      "Acquisition en pleine propriété ou location longue durée (LLD)",
      "Éligible aux financements publics, subventions et plans d'investissement",
      "Accompagnement déploiement, formation des équipes et maintenance",
    ],
    cta: "Demander une étude de faisabilité →",
  },
  prestation: {
    tag: "Prestation de service",
    title: "Ou déléguez avec une prestation Hocoia",
    description:
      "Hocoia déploie son bus sur votre territoire pour une campagne ponctuelle. Équipes médicales, organisation, données — tout est inclus, sans investissement initial.",
    specialites: ["Cardiologie", "Dermatologie", "Mammographie", "Médecine générale", "Gynécologie", "Ophtalmologie"],
    cta: "Organiser une campagne →",
  },
};

// ─── CTA final ─────────────────────────────────────────────────────────────

export const cta = {
  h2: "Vous avez un projet de santé mobile ?",
  subtitle:
    "Un expert Hocoia analyse vos besoins et vous oriente vers la solution adaptée. Sans engagement.",
  ctaPrimary: "Demander un échange",
  ctaSecondary: "Voir nos cas clients →",
};
