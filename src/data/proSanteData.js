// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Médecins · Infirmiers · Sages-femmes · Spécialistes",
  h1Parts: {
    before: "Exercez ",
    italic: "autrement.",
    after: " Votre expertise, là où elle manque.",
  },
  subtitle:
    "Rejoignez le réseau Hocoia et intervenez à bord de nos bus médicaux équipés, partout en France. Liberté, impact, rémunération attractive.",
  checks: [
    "Prestataire ou CDD — selon le poste et vos disponibilités",
    "Matériel et logistique 100% fournis par Hocoia",
    "Rémunération à l'acte (prestation) ou salaire (CDD)",
    "Zones d'intervention adaptées à vos disponibilités",
  ],
  ctaPrimary: "Je candidate maintenant",
  ctaOutline: "Voir les missions disponibles",
  form: {
    title: "Déposer ma candidature",
    subtitle: "Un responsable recrutement vous contacte sous 48h.",
    fields: {
      prenom: "Prénom",
      nom: "Nom",
      email: "Email",
      telephone: "Téléphone",
    },
    specialiteOptions: [
      "Spécialité",
      "Médecin généraliste",
      "Cardiologue",
      "Dermatologue",
      "Gynécologue",
      "Infirmier(e)",
      "Sage-femme",
      "Manipulateur radio",
      "Autre spécialité",
    ],
    disponibiliteOptions: [
      "Disponibilité",
      "Quelques jours / mois",
      "1–2 jours / semaine",
      "Temps plein",
    ],
    cta: "Envoyer ma candidature →",
    note: "Réponse sous 48h · Confidentiel · Sans engagement",
  },
};

// ─── Stats ────────────────────────────────────────────────────────────────

export const stats = [
  { value: "120+",  label: "Professionnels dans le réseau" },
  { value: "12",    label: "Spécialités recrutées" },
  { value: "80+",   label: "Communes d'intervention" },
  { value: "4.8/5", label: "Satisfaction des prestataires" },
  { value: "30j",   label: "Délai de paiement garanti" },
];

// ─── Missions ─────────────────────────────────────────────────────────────

export const missionsData = {
  eyebrow: "Missions",
  h2: "Missions disponibles",
  subtitle: "Consultez les prochaines missions et postulez directement.",
  filters: [
    { id: "toutes",           label: "Toutes" },
    { id: "medecine-gen",     label: "Médecine générale" },
    { id: "cardiologie",      label: "Cardiologie" },
    { id: "dermatologie",     label: "Dermatologie" },
    { id: "gynecologie",      label: "Gynécologie" },
    { id: "mammographie",     label: "Mammographie" },
  ],
  items: [
    {
      id: "m1",
      specialite: "Médecine générale",
      specialiteId: "medecine-gen",
      badge: "Urgent",
      badgeStyle: "dark",
      titre: "Médecin généraliste — Strasbourg",
      details: "3 jours · 15–17 avril 2026 · Bus MédicoBus",
      lieu: "Strasbourg, Bas-Rhin",
      remuneration: "450€ / jour",
    },
    {
      id: "m2",
      specialite: "Cardiologie",
      specialiteId: "cardiologie",
      badge: "Nouveau",
      badgeStyle: "light",
      titre: "Cardiologue — Lyon",
      details: "2 jours · 22–23 avril 2026 · Bus CardioExpress",
      lieu: "Lyon, Rhône",
      remuneration: "550€ / jour",
    },
    {
      id: "m3",
      specialite: "Dermatologie",
      specialiteId: "dermatologie",
      badge: null,
      badgeStyle: null,
      titre: "Dermatologue — Bordeaux",
      details: "1 jour · 25 avril 2026 · Bus DermoBus",
      lieu: "Bordeaux, Gironde",
      remuneration: "500€ / jour",
    },
    {
      id: "m4",
      specialite: "Gynécologie",
      specialiteId: "gynecologie",
      badge: "Nouveau",
      badgeStyle: "light",
      titre: "Sage-femme — Metz",
      details: "4 jours · 28 avril–1 mai 2026 · Bus MaternitéBus",
      lieu: "Metz, Moselle",
      remuneration: "400€ / jour",
    },
    {
      id: "m5",
      specialite: "Mammographie",
      specialiteId: "mammographie",
      badge: null,
      badgeStyle: null,
      titre: "Manipulateur radio — Lille",
      details: "2 jours · 5–6 mai 2026 · Bus RadioBus",
      lieu: "Lille, Nord",
      remuneration: "480€ / jour",
    },
    {
      id: "m6",
      specialite: "Gynécologie",
      specialiteId: "gynecologie",
      badge: "Urgent",
      badgeStyle: "dark",
      titre: "Gynécologue — Marseille",
      details: "3 jours · 12–14 mai 2026 · Bus GynéBus",
      lieu: "Marseille, Bouches-du-Rhône",
      remuneration: "520€ / jour",
    },
  ],
  ctaMore: "Voir toutes les missions →",
};

// ─── Profils recherchés ───────────────────────────────────────────────────

export const profils = {
  eyebrow: "Recrutement",
  h2: "Quels professionnels cherchons-nous ?",
  subtitle: "Nous recrutons en prestation ou en CDD selon les postes, partout en France.",
  ctaLabel: "Postuler",
  roleLinkLabel: "Découvrir le poste →",
  items: [
    { id: "p1", label: "Médecins généralistes",      roleHref: "/recrutement/medecin-generaliste" },
    { id: "p2", label: "Cardiologues",                roleHref: "/recrutement/cardiologue" },
    { id: "p3", label: "Dermatologues",               roleHref: "/recrutement/dermatologue" },
    { id: "p4", label: "Gynécologues & Sages-femmes", roleHref: "/recrutement/gynecologue-sage-femme" },
    { id: "p5", label: "Manipulateurs radio",         roleHref: "/recrutement/manipulateur-radio" },
  ],
  autresLabel:
    "Autres spécialités : Infirmiers(ères) · Pneumologues · Ophtalmologues · Dentistes · Nutritionnistes →",
};

// ─── Avantages ────────────────────────────────────────────────────────────

export const avantages = {
  eyebrow: "Avantages prestataires",
  h2: "Une pratique libérée, un impact réel",
  subtitle: "Hocoia s'occupe de tout le reste — vous vous concentrez sur le soin.",
  items: [
    {
      id: "a1",
      title: "Liberté totale d'agenda",
      description:
        "Choisissez vos jours, vos zones, votre rythme. Aucune obligation de volume.",
    },
    {
      id: "a2",
      title: "Matériel fourni et installé",
      description:
        "Bus équipé, consommables, logiciel métier. Vous arrivez, tout est prêt.",
    },
    {
      id: "a3",
      title: "Rémunération attractive",
      description:
        "Paiement à l'acte, transparent, sous 30 jours. Pas de surprise.",
    },
    {
      id: "a4",
      title: "Plateforme de gestion",
      description:
        "Missions, planning, documents — tout est centralisé dans votre espace en ligne.",
    },
    {
      id: "a5",
      title: "Un impact concret",
      description:
        "Intervenez là où la prévention fait défaut. Chaque mission compte.",
    },
    {
      id: "a6",
      title: "Communauté de pairs",
      description:
        "Échangez avec 120+ professionnels du réseau. Événements, retours d'expérience.",
    },
  ],
};

// ─── Processus ────────────────────────────────────────────────────────────

export const processus = {
  eyebrow: "Comment ça marche",
  h2: "De la candidature au terrain — notre processus en 4 étapes",
  subtitle: "Les délais varient selon le poste recherché et les missions disponibles dans votre zone. On vous tient au courant à chaque étape.",
  steps: [
    {
      id: "s1",
      number: "01",
      day: "Étape 1",
      title: "Vous déposez votre candidature",
      description: "Formulaire en ligne, 3 minutes.",
    },
    {
      id: "s2",
      number: "02",
      day: "Étape 2",
      title: "Entretien téléphonique",
      description: "30 min avec un responsable recrutement.",
    },
    {
      id: "s3",
      number: "03",
      day: "Étape 3",
      title: "Validation & onboarding",
      description: "1h de prise en main des outils et protocoles.",
    },
    {
      id: "s4",
      number: "04",
      day: "Étape 4",
      title: "Première mission",
      description: "Selon les besoins terrain et votre disponibilité.",
    },
  ],
};

// ─── Témoignages ──────────────────────────────────────────────────────────

export const temoignages = {
  h2: "Ce que disent nos prestataires",
  cards: [
    {
      id: "t1",
      stars: "★★★★★",
      quote:
        "Après 15 ans en cabinet, j'avais besoin de retrouver du sens. Avec Hocoia, chaque mission me rappelle pourquoi j'ai choisi ce métier.",
      initials: "RT",
      author: "Dr. Rémi T.",
      role: "Cardiologue · Lyon",
    },
    {
      id: "t2",
      stars: "★★★★★",
      quote:
        "La logistique est parfaite. J'arrive, tout est installé, je me concentre sur mes patientes. Et je choisis mes jours.",
      initials: "MF",
      author: "Marine F.",
      role: "Sage-femme · Strasbourg",
    },
    {
      id: "t3",
      stars: "★★★★☆",
      quote:
        "Le concept est top et l'équipe réactive. J'aimerais juste plus de missions dans ma zone — ça viendra avec la croissance.",
      initials: "AL",
      author: "Alexandre L.",
      role: "Médecin généraliste · Paris",
    },
  ],
};

// ─── FAQ ──────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "FAQ",
  h2: "Ce que se demandent les candidats",
  items: [
    {
      id: "q1",
      question: "Puis-je cumuler avec mon activité principale ?",
      answer:
        "Oui. La majorité de nos prestataires exercent en parallèle de leur activité en cabinet ou à l'hôpital. Vous choisissez votre rythme.",
    },
    {
      id: "q2",
      question: "Quel statut puis-je avoir avec Hocoia ?",
      answer:
        "Selon le poste, vous pouvez intervenir en tant que prestataire (micro-entreprise, SASU, etc.) ou en CDD. Précisez vos préférences dans le formulaire — on en discute pendant l'entretien.",
    },
    {
      id: "q3",
      question: "Comment est fixée la rémunération ?",
      answer:
        "En prestation, rémunération à l'acte, définie à l'avance pour chaque mission, paiement garanti sous 30 jours. En CDD, salaire selon la grille interne et la spécialité.",
    },
    {
      id: "q4",
      question: "Que se passe-t-il si j'annule une mission ?",
      answer:
        "Prévenance de 7 jours minimum. En cas d'urgence, nous trouvons un remplaçant. Pas de pénalité financière.",
    },
  ],
};

// ─── CTA Final ────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Prêt(e) à exercer autrement ?",
  subtitle:
    "Rejoignez 120+ professionnels de santé qui font le choix de l'impact et de la liberté.",
  ctaPrimary: "Je candidate maintenant",
  ctaOutline: "Voir les missions disponibles",
};
