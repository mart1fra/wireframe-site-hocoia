// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Médecins · Infirmiers · Sages-femmes · Spécialistes",
  h1Parts: {
    before: "Exercez ",
    italic: "autrement.",
    after: " Votre expertise, là où elle manque.",
  },
  subtitle:
    "Rejoignez le réseau Hocoia et intervenez à bord de nos bus médicaux équipés, partout en France. Liberté, impact.",
  checks: [
    "Prestataire (rémunération à l'acte) ou CDD (salaire) · selon le poste et vos disponibilités",
    "Matériel et logistique 100% fournis par Hocoia pour les missions terrain",
    "Des interventions adaptées à votre secteur géographique et à vos disponibilités",
    "Téléconsultation disponible · consultez à distance, sans quitter votre cabinet",
  ],
  ctaPrimary: "Je candidate maintenant",
  ctaOutline: "Voir les missions disponibles",
  form: {
    title: "Déposer ma candidature",
    subtitle: "Un responsable recrutement étudiera votre candidature.",
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
    note: "Confidentiel · Sans engagement",
  },
};

// ─── Rôle & missions ──────────────────────────────────────────────────────

export const roleMission = {
  eyebrow: "",
  h2: "Soigner là où les soins manquent.",
  subtitle:
    "En rejoignant Hocoia, vous mettez votre expertise au service des territoires les plus fragiles. Voici concrètement ce que vous faites à nos côtés.",
  items: [
    {
      id: "r1",
      num: "01",
      title: "Vous menez des journées de dépistage",
      description:
        "Organisées par Hocoia dans des communes rurales, des entreprises ou des quartiers prioritaires. Bus équipé, patients programmés, protocoles préparés : vous intervenez, nous nous occupons du reste.",
    },
    {
      id: "r2",
      num: "02",
      title: "Vous assurez des consultations spécialisées",
      description:
        "Des patients qui n'ont pas accès à votre spécialité sur leur territoire bénéficient de votre expertise, au plus près de chez eux.",
    },
    {
      id: "r3",
      num: "03",
      title: "Vous participez au suivi de patients fragiles",
      description:
        "Sur certaines missions récurrentes, vous contribuez au suivi de patients chroniques ou en ALD, en lien direct avec leur médecin traitant via HocoApp.",
    },
    {
      id: "r4",
      num: "04",
      title: "Vous pouvez consulter en téléconsultation",
      description:
        "Certaines missions se font entièrement à distance, depuis votre cabinet ou votre domicile. Vous consultez via notre plateforme sécurisée · sans déplacement, sans contrainte logistique.",
    },
  ],
  note: "Chaque mission est définie en amont avec votre coordinateur Hocoia. Vous savez exactement à quoi vous attendre · qu'il s'agisse d'une intervention terrain ou d'une session en téléconsultation.",
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
      titre: "Médecin généraliste · Strasbourg",
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
      titre: "Cardiologue · Lyon",
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
      titre: "Dermatologue · Bordeaux",
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
      titre: "Sage-femme · Metz",
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
      titre: "Manipulateur radio · Lille",
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
      titre: "Gynécologue · Marseille",
      details: "3 jours · 12–14 mai 2026 · Bus GynéBus",
      lieu: "Marseille, Bouches-du-Rhône",
      remuneration: "520€ / jour",
    },
  ],
  ctaMore: "Voir toutes les missions →",
};

// ─── Profils recherchés ───────────────────────────────────────────────────

export const profils = {
  eyebrow: "",
  h2: "Quels professionnels cherchons-nous ?",
  subtitle: "Nous recrutons en CDD selon les postes, partout en France.",
  ctaLabel: "Postuler",
  roleLinkLabel: "Découvrir le poste →",
  items: [
    { id: "p1", label: "Médecins généralistes", roleHref: "/recrutement/medecin-generaliste" },
    { id: "p2", label: "Cardiologues",           roleHref: "/recrutement/cardiologue" },
    { id: "p3", label: "Dermatologues",          roleHref: "/recrutement/dermatologue" },
    { id: "p4", label: "Sages-femmes",           roleHref: "/recrutement/sage-femme" },
    { id: "p5", label: "Infirmiers(ères)",       roleHref: "/recrutement/infirmier" },
    { id: "p6", label: "Manipulateurs radio",    roleHref: "/recrutement/manipulateur-radio" },
  ],
};

// ─── Avantages ────────────────────────────────────────────────────────────

export const avantages = {
  eyebrow: "",
  h2: "Une pratique libérée, un impact réel",
  subtitle: "Hocoia s'occupe de tout le reste · vous vous concentrez sur le soin.",
  items: [
    {
      id: "a1",
      title: "Liberté de choisir vos jours",
      description:
        "Choisissez vos jours et vos zones d'intervention. Une fois la journée validée, un nombre de dossiers prédéfini vous est confié.",
    },
    {
      id: "a2",
      title: "Matériel fourni et installé",
      description:
        "Bus équipé, patients programmés, protocoles préparés : vous intervenez, nous nous occupons du reste.",
    },
    {
      id: "a3",
      title: "Rémunération attractive",
      description:
        "Paiement à l'acte ou sous 30 jours en fonction de la typologie de contrat.",
    },
    {
      id: "a4",
      title: "Plateforme de gestion",
      description:
        "Missions, planning, documents · tout est centralisé dans votre espace en ligne.",
    },
    {
      id: "a5",
      title: "Un impact concret",
      description:
        "Intervenez là où la prévention fait défaut. Chaque mission compte.",
    },
    {
      id: "a6",
      title: "Téléconsultation · sans se déplacer",
      description:
        "Certaines missions sont 100% distancielles. Consultez depuis votre cabinet ou votre domicile, sans logistique de déplacement.",
    },
  ],
};

// ─── Processus ────────────────────────────────────────────────────────────

export const processus = {
  eyebrow: "",
  h2: "De la candidature à votre première mission · notre processus en 4 étapes",
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
      title: "Formation",
      description: "Formation théorique par visio avec le pôle médical + accompagnement pratique le jour J par un agent d'accueil Hocoia.",
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
        "Le concept est top et l'équipe réactive. J'aimerais juste plus de missions dans ma zone · cela viendra avec la croissance.",
      initials: "AL",
      author: "Alexandre L.",
      role: "Médecin généraliste · Paris",
    },
  ],
};

// ─── FAQ ──────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "",
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
        "Deux options selon le poste : en prestation, vous intervenez avec votre Carte de Professionnel de Santé (CPS) et signez une lettre de mission, quel que soit votre mode d'exercice libéral. Ou en CDD, avec contrat de travail. Précisez vos préférences dans le formulaire, on en discute pendant l'entretien.",
    },
    {
      id: "q3",
      question: "Comment est fixée la rémunération ?",
      answer:
        "En prestation, rémunération définie à l'avance pour chaque mission, paiement garanti sous 30 jours. En CDD, salaire selon la grille interne et la spécialité.",
    },
    {
      id: "q4",
      question: "Quelle est la durée d'une mission ?",
      answer:
        "Les missions durent 1 à plusieurs jours selon les besoins du client. Vous pouvez vous positionner sur une seule journée ou enchaîner plusieurs. Les missions multi-jours permettent une meilleure continuité et une organisation plus fluide pour tout le monde.",
    },
    {
      id: "q5",
      question: "Les frais de déplacement et de repas sont-ils pris en charge ?",
      answer:
        "Les frais de déplacement sont remboursés sous certaines conditions, définies en amont et précisées dans votre lettre de mission. Un forfait repas de 20 € par journée effectuée est pris en charge, ajouté à votre rémunération journalière.",
    },
    {
      id: "q6",
      question: "Dois-je apporter du matériel médical ?",
      answer:
        "Non. Hocoia met à disposition tout le matériel nécessaire à bord du bus. Exception : les sages-femmes peuvent apporter leur propre matériel si leur pratique le requiert. Vous devez en revanche vous munir de votre carte CPS et de votre lecteur de carte Vitale pour enregistrer les patients et pouvoir facturer.",
    },
    {
      id: "q7",
      question: "Faut-il des compétences techniques particulières ?",
      answer:
        "Aucune compétence technique spécifique n'est requise. Une bonne aisance relationnelle et de l'autonomie sont essentielles. Pour l'informatique, une aisance générale suffit. Nos outils sont simples et une prise en main est assurée avant votre première mission.",
    },
    {
      id: "q8",
      question: "Y a-t-il une formation avant la première mission ?",
      answer:
        "Oui. Une formation théorique est dispensée par visioconférence par notre pôle médical. Le jour de l'intervention, par une infirmière de télémédecine Hocoia ou un collaborateur Hocoia.",
    },
    {
      id: "q9",
      question: "Que se passe-t-il en cas d'annulation de mission ?",
      answer:
        "De votre côté : une prévenance de 7 jours minimum est demandée. En cas d'urgence, nous gérons le remplacement sans pénalité financière. Du côté Hocoia, les modalités d'annulation sont précisées dans votre lettre de mission ou contrat. N'hésitez pas à en discuter lors de l'entretien.",
    },
    {
      id: "q10",
      question: "Dois-je systématiquement me déplacer dans un bus ?",
      answer:
        "Non. Hocoia propose deux modes d'intervention : les missions terrain (dans nos bus médicaux équipés) et les missions en téléconsultation, entièrement à distance depuis votre cabinet ou votre domicile. Vous choisissez les missions qui correspondent à vos contraintes et votre planning.",
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
