// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  h1: "Prendre soin de votre santé devient plus simple.",
  subtitle:
    "Hocoia vous accompagne au quotidien. Grâce à nos bus médicaux et à nos équipes de soignants, réalisez vos bilans de prévention et vos dépistages facilement, juste à côté de chez vous.",
  ctaPrimary: "En savoir plus",
  ctaOutline: "Prendre rendez-vous",
  b2bLink: {
    prefix: "Vous êtes une organisation ? →",
    linkText: "Découvrez nos solutions",
    href: "/entreprises-et-mutuelles",
  },
};

// ─── Logos ────────────────────────────────────────────────────────────────

export const logos = {
  label: "En partenariat avec les acteurs de votre santé et de votre quotidien",
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
    "Hocoia vous propose un parcours de santé simple, sans vous déplacer inutilement. Nos bus médicaux, aménagés comme de véritables cabinets de consultation, viennent directement à votre rencontre. Vous y réalisez vos bilans de prévention et vos dépistages essentiels, confortablement et en toute confidentialité.",
  points: [
    {
      id: "i1",
      titre: "Mobile",
      soustitre: "Des bus de santé qui se déplacent au cœur de votre ville ou sur votre lieu de travail",
    },
    {
      id: "i2",
      titre: "Connecté",
      soustitre: "Une prise de rendez-vous rapide en ligne et des résultats partagés en toute sécurité avec votre médecin traitant.",
    },
    {
      id: "i3",
      titre: "Humain",
      soustitre: "Des professionnels de santé (médecins, infirmiers, spécialistes) à votre écoute et bienveillants à chaque étape.",
    },
  ],
  cta: "Nos solutions",
  ctaHref: "/nos-solutions",
};

// ─── Spécialités B2C ──────────────────────────────────────────────────────

export const specialites = {
  eyebrow: "Le bus de santé",
  h2: "Nos spécialités",
  description:
    "Nos bus médicaux se déplacent au cœur de votre commune pour vous proposer dépistage et prévention. Choisissez votre thématique et réservez un créneau près de chez vous, sans attente, sans déplacement lointain.",
  chips: [
    {
      id: "checkup",
      label: "Check-up",
      title: "Bilan santé",
      description: "Bilan de santé global avec téléconsultation médicale. Résultats analysés afin de définir le suivi adapté.",
      href: "/solutions/checkup",
      linkLabel: "Découvrir le bilan santé →",
    },
    {
      id: "cardio",
      label: "Cardiologie",
      title: "Bilan cœur",
      description: "Évaluation de votre santé cardiovasculaire avec ECG et mesures réalisées sur place. Un cardiologue analyse ensuite les résultats et oriente le suivi si nécessaire.",
      href: "/solutions/prevention-cardio",
      linkLabel: "Découvrir le bilan cœur →",
    },
    {
      id: "dermato",
      label: "Dermatologie",
      title: "Bilan peau",
      description: "Contrôle de grains de beauté qui vous paraissent suspectes. Photos réalisées sur place puis analyse d'un dermatologue.",
      href: "/solutions/cancer-peau",
      linkLabel: "Découvrir le bilan peau →",
    },
    {
      id: "cancer-sein",
      label: "Cancer sein",
      title: "Mammographie",
      description: "Examen de dépistage du cancer du sein réalisé sur place. Mammographie effectuée par une équipe spécialisée.",
      href: "/solutions/cancer-sein",
      linkLabel: "Découvrir la mammographie →",
    },
    {
      id: "sante-femme",
      label: "Santé femme",
      title: "Santé femme",
      description: "Consultation de prévention réalisée par une sage-femme. Examen, frottis et accompagnement personnalisé.",
      href: "/solutions/sante-femme",
      linkLabel: "Découvrir la santé femme →",
    },
  ],
  cta: "Voir le calendrier des passages",
  mapPlaceholder: "Carte interactive · prochains passages bus",
  miniCard: {
    title: "Check-up · Strasbourg",
    creneaux: [
      "Mar. 15 avril · 9h, 10h30, 14h",
      "Jeu. 17 avril · 9h, 11h",
    ],
    ctaPrimary: "Prendre rendez-vous",
    ctaOutline: "Me prévenir",
  },
};

// ─── Stats ────────────────────────────────────────────────────────────────

export const stats = {
  eyebrow: "Notre impact en France",
  items: [
    { value: "4 800", label: "Patients accompagnés en toute confiance" },
    { value: "80+",   label: "Communes déjà visitées par nos bus" },
    { value: "12",    label: "Spécialités disponibles pour couvrir vos besoins" },
  ],
};

// ─── Use cases B2B ────────────────────────────────────────────────────────

export const useCases = {
  label: "Vous êtes",
  tabs: [
    {
      id: "entreprise",
      label: "Entreprises & mutuelles",
      eyebrow: "Use case · Entreprises & mutuelles",
      h3: "Réduisez l'absentéisme, valorisez votre politique santé",
      description:
        "Hocoia déploie un bus médical équipé directement dans vos locaux ou sur votre réseau d'adhérents. Vos collaborateurs et bénéficiaires accèdent à un bilan complet · sans déplacement, sans organisation de votre côté.",
      metrics: [
        { value: "+3 000", label: "Personnes dépistées" },
        { value: "4,8/5",  label: "Satisfaction patients" },
        { value: "5–10 %", label: "Cas urgents orientés" },
      ],
      ctaPrimary: "Voir le cas client →",
      ctaOutline: "Demander une démo",
    },
    {
      id: "collectivite",
      label: "Collectivités & Institutions",
      eyebrow: "Use case · Collectivités & Institutions",
      h3: "Apportez la prévention santé au cœur de votre territoire",
      description:
        "Hocoia déploie un bus médical itinérant commune par commune. Vos habitants bénéficient d'un dépistage complet sans déplacement · idéal pour les zones sous-dotées et les publics éloignés des soins.",
      metrics: [
        { value: "80+",   label: "Communes desservies" },
        { value: "4,8/5", label: "Satisfaction patients" },
        { value: "5",     label: "Spécialités disponibles" },
      ],
      ctaPrimary: "Voir le cas client →",
      ctaOutline: "Demander une démo",
    },
    {
      id: "hopital",
      label: "Etablissement de santé & médico-social",
      eyebrow: "Use case · Etablissement de santé & médico-social",
      h3: "Étendez votre activité de soin hors les murs",
      description:
        "Déployez votre propre bus médical ou louez le nôtre pour compléter votre offre de soins. Consultations avancées, dépistage organisé, suivi des résidents en EHPAD · sans infrastructure supplémentaire.",
      metrics: [
        { value: "10+",        label: "Dispositifs embarqués" },
        { value: "HDS",        label: "Données certifiées" },
        { value: "Clé en main", label: "Déploiement" },
      ],
      ctaPrimary: "Voir les configurations →",
      ctaOutline: "Demander une démo",
    },
    {
      id: "pro-sante",
      label: "Pro de santé",
      eyebrow: "Use case · Pro de santé",
      h3: "Exercez là où les patients en ont le plus besoin",
      description:
        "Rejoignez le réseau Hocoia et réalisez des consultations avancées à bord de nos unités mobiles. CDI, vacations, téléconsultation assistée · vous choisissez votre mode d'exercice, nous gérons la logistique.",
      metrics: [
        { value: "12",   label: "Spécialités présentes" },
        { value: "CDI",  label: "Statut proposé" },
        { value: "100%", label: "Logistique Hocoia" },
      ],
      ctaPrimary: "Voir les postes ouverts →",
      ctaOutline: "En savoir plus",
    },
  ],
};

// ─── Zone B2B sombre ──────────────────────────────────────────────────────

export const b2bZone = {
  eyebrow: "",
  h2: "Un programme santé clé en main",
  description:
    "Bus déployé sur site, résultats anonymisés, reporting DRH. Hocoia gère l'intégralité de la logistique et vous livre des données actionnables.",
  checks: [
    "Pas de friction pour vos salariés",
    "Reporting anonymisé & RGPD",
    "Impact mesuré sur l'absentéisme",
  ],
  cta: "Voir une démo",
  dashboardPlaceholder: "Mockup dashboard RH · reporting",
};

// ─── Témoignages ──────────────────────────────────────────────────────────

export const temoignages = {
  h2: "Ce qu'ils disent de Hocoia",
  cards: [
    {
      id: "t1",
      stars: "★★★★★",
      quote:
        "En 30 minutes sur site, nos salariés ont pu faire un bilan cardiologique complet. Pas d'organisation de notre côté.",
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
  h2: "Une santé accessible à tous",
  subtitle:
    "Nous croyons en un avenir où chaque individu accède à la prévention et à la santé, où qu'il vive. L'innovation, la technologie et l'humain sont nos outils pour rendre cette vision possible.",
  ctaPrimary: "Découvrir la vision Hocoia",
  ctaPrimaryHref: "/a-propos/vision",
  ctaOutline: "Parler à un expert BtoB",
  ctaOutlineHref: "/contact",
};
