// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  h1: "Réinventons le futur de la santé, ensemble.",
  subtitle:
    "Hocoia rapproche la santé de chacun, où qu'il vive. Avec nos bus médicaux et nos soignants engagés, nous apportons prévention et dépistage directement dans votre territoire.",
  ctaPrimary: "Voir le bus près de moi",
  ctaOutline: "Prendre RDV",
  b2bLink: {
    prefix: "Vous êtes une entreprise ou une collectivité ? →",
    linkText: "Découvrir nos solutions",
    href: "/entreprises",
  },
};

// ─── Logos ────────────────────────────────────────────────────────────────

export const logos = {
  label: "Ils nous font confiance",
  items: ["Renault", "MGEN", "Pfizer", "Groupama", "ASNR", "CPAM", "CH Verdun"],
};

// ─── Identité ─────────────────────────────────────────────────────────────

export const identite = {
  eyebrow: "Nos solutions",
  //h2: "Rendre la santé accessible à tous et en tout lieu",
  //description:
    //"Nous croyons en un avenir où chaque individu peut accéder à des soins médicaux de qualité, peu importe où il se trouve.",
    //"L'innovation, la technologie et l’humain sont nos outils pour rendre cette vision possible. Fondée par un médecin et des ingénieurs, Hocoia opère une flotte de bus médicaux équipés d'appareils de diagnostic de pointe. Nos professionnels de santé se rendent là où les patients se trouvent : en bas de chez eux, dans leur entreprise, sur leur lieu de travail.",
  description2:  
    "Hocoia opère une flotte de bus médicaux équipés d'appareils de diagnostic de pointe. Nos professionnels de santé vont à la rencontre des patients : dans les communes, sur les lieux de travail, au pied des immeubles. Du dépistage cardiovasculaire au cancer du sein, nos solutions couvrent les besoins de prévention essentiels.",
  points: [
    {
      id: "i1",
      titre: "Mobile",
      soustitre: "Des bus équipés qui se déplacent dans vos communes et vos entreprises",
    },
    {
      id: "i2",
      titre: "Connecté",
      soustitre: "Prise de RDV en ligne, résultats digitaux, suivi à distance",
    },
    {
      id: "i3",
      titre: "Humain",
      soustitre: "Des professionnels de santé qualifiés à chaque étape",
    },
  ],
};

// ─── Spécialités B2C ──────────────────────────────────────────────────────

export const specialites = {
  eyebrow: "Le bus de santé",
  h2: "Choisissez votre spécialité",
  description:
    "Nos bus médicaux se déplacent au cœur de votre commune pour vous proposer dépistage et prévention. Choisissez votre thématique et réservez un créneau près de chez vous, sans attente, sans déplacement lointain.",
  chips: [
    { id: "checkup",       label: "Check-up" },
    { id: "cardio",        label: "Cardio" },
    { id: "dermato",       label: "Dermato" },
    { id: "cancer-sein",   label: "Cancer sein" },
    { id: "sante-femme",   label: "Santé femme" },
  ],
  cta: "Voir le calendrier des passages",
  mapPlaceholder: "Carte interactive — prochains passages bus",
  miniCard: {
    title: "Check-up — Strasbourg",
    creneaux: [
      "Mar. 15 avril — 9h, 10h30, 14h",
      "Jeu. 17 avril — 9h, 11h",
    ],
    ctaPrimary: "Prendre RDV",
    ctaOutline: "Me prévenir",
  },
};

// ─── Stats ────────────────────────────────────────────────────────────────

export const stats = {
  eyebrow: "Notre impact en France",
  items: [
    { value: "4 800", label: "Patients accompagnés" },
    { value: "80+",   label: "Communes desservies" },
    { value: "12",    label: "Spécialités disponibles" },
  ],
};

// ─── Use cases B2B ────────────────────────────────────────────────────────

export const useCases = {
  label: "Vous êtes",
  tabs: [
    { id: "entreprise",   label: "Entreprises & assureurs",          eyebrow: "Use case — Entreprises & assureurs" },
    { id: "collectivite", label: "Secteur public & institutions",    eyebrow: "Use case — Secteur public & institutions" },
    { id: "hopital",      label: "Acteurs de santé & médico-social", eyebrow: "Use case — Acteurs de santé & médico-social" },
    { id: "pro-sante",    label: "Pro de santé",        eyebrow: "Use case — Pro de santé" },
  ],
  sharedContent: {
    h3: "Réduisez l'absentéisme, valorisez votre politique RH santé",
    description:
      "Hocoia déploie un bus médical équipé directement dans vos locaux ou sur votre territoire. Vos collaborateurs bénéficient d'un bilan complet sans déplacement, sans organisation de votre côté.",
    metrics: [
      { value: "+3 000", label: "Personnes dépistées" },
      { value: "4,8/5",  label: "Satisfaction patients" },
      { value: "5–10 %", label: "Cas urgents orientés" },
    ],
    ctaPrimary: "Voir le cas client →",
    ctaOutline: "Demander une démo",
  },
};

// ─── Zone B2B sombre ──────────────────────────────────────────────────────

export const b2bZone = {
  eyebrow: "Pour les organisations",
  h2: "Un programme santé clé en main",
  description:
    "Bus déployé sur site, résultats anonymisés, reporting DRH. Hocoia gère l'intégralité de la logistique et vous livre des données actionnables.",
  checks: [
    "Zéro friction pour vos salariés",
    "Reporting anonymisé & RGPD",
    "Impact mesuré sur l'absentéisme",
  ],
  cta: "Voir une démo",
  dashboardPlaceholder: "Mockup dashboard RH — reporting",
};

// ─── Témoignages ──────────────────────────────────────────────────────────

export const temoignages = {
  h2: "Ce qu'ils disent de Hocoia",
  cards: [
    {
      id: "t1",
      stars: "★★★★★",
      quote:
        "En 30 minutes sur site, nos salariés ont pu faire un bilan cardio complet. Zéro organisation de notre côté.",
      author: "Sophie M.",
      role: "DRH Veolia Alsace",
    },
    {
      id: "t2",
      stars: "★★★★★",
      quote:
        "Grâce au bus Hocoia, j'ai pu faire ma mammographie sans attendre 4 mois. Dans ma ville, un mardi matin.",
      author: "Marie-Claire, 58 ans",
      role: "Haguenau",
    },
    {
      id: "t3",
      stars: "★★★★☆",
      quote:
        "Le reporting anonymisé nous permet enfin de piloter notre politique santé avec des données concrètes.",
      author: "Thomas B.",
      role: "DSI Mutuelle XY",
    },
  ],
};

// ─── CTA final ────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Une santé accessible à tous, en tout lieu.",
  subtitle:
    "Nous croyons en un avenir où chaque individu accède à la prévention et à la santé, où qu'il vive. L'innovation, la technologie et l'humain sont nos outils pour rendre cette vision possible.",
  ctaPrimary: "Voir le calendrier des passages",
  ctaOutline: "Parler à un expert BtoB",
};
