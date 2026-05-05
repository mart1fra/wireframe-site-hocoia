// ─── Bannière pilote ──────────────────────────────────────────────────────────

export const piloteBanner = {
  badge: "PROJET PILOTE",
  texte:
    "DermatoBus Normandie — lancement automne 2026 · En partenariat avec le CHU de Caen (Dr Lorphelin, onco-dermatologue)",
  cta: "Rejoindre le pilote →",
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Dépistage cutané mobile · Protocole 4 étapes · IA + Dermatologue",
  h1Parts: {
    italicA: "DermatoBus Hocoia",
    mid: " — dépistage complet du ",
    italicB: "cancer de la peau,",
    end: " en tout territoire.",
  },
  subtitle:
    "Un protocole médical rigoureux, une technologie de dermoscopie robotique unique, et des dermatologues du CHU — pour détecter tôt, là où les spécialistes manquent.",
  checks: [
    "Cartographie du corps entier — aucune lésion oubliée",
    "Pré-analyse IA optionnelle (mélanome)",
    "Triage par médecin généraliste formé",
    "Télé-expertise par onco-dermatologue CHU",
    "Suivi des lésions d'une année sur l'autre",
  ],
  ctaPrimary: "Demander une présentation",
  ctaOutline: "Voir le protocole ↓",
  form: {
    title: "Intéressé par le DermatoBus ?",
    subtitle: "Collectivité, mutuelle, établissement — réponse sous 24h.",
    vousEtesOptions: [
      "Vous êtes",
      "Collectivité/Département",
      "CPTS/MSP",
      "Mutuelle/Assureur",
      "Hôpital/CHU",
      "Laboratoire pharmaceutique",
      "Autre",
    ],
    prenomPlaceholder: "Prénom",
    nomPlaceholder: "Nom",
    emailPlaceholder: "Email professionnel",
    territoirePlaceholder: "Département / Territoire",
    cta: "Demander une présentation →",
    note: "Sans engagement · Réponse <24h · RGPD",
  },
  partenairesCard: {
    label: "PARTENAIRES SCIENTIFIQUES",
    items: ["CHU de Caen", "SquareMind", "Pixiance"],
  },
};

// ─── Logos ────────────────────────────────────────────────────────────────────

export const logos = {
  label: "Soutenu par",
  items: [
    "CHU de Caen",
    "SquareMind",
    "Pixiance",
    "Région Normandie",
    "INCa",
    "Ligue contre le cancer",
  ],
};

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = [
  { value: "100 000", label: "nouveaux cas de cancer cutané / an en France",   source: "INCa 2024" },
  { value: "+25%",   label: "hausse des mélanomes en 10 ans",                  source: "INCa 2024" },
  { value: "<5",     label: "dermatologues dans l'Orne et l'Eure",              source: "DREES 2023" },
  { value: "18 mois", label: "délai moyen RDV dermatologue en zone rurale",     source: "CNOM 2023" },
  { value: "95%",    label: "taux de survie si détecté au stade 1",             source: "INCa 2024" },
];

// ─── Concept (composant ConceptSection) ──────────────────────────────────────

export const concept = {
  eyebrow: "Le concept",
  title: "Qu'est-ce que le DermatoBus Hocoia ?",
  paragraphs: [
    {
      id: "c1",
      segments: [
        { text: "Le DermatoBus est une unité mobile dédiée au " },
        { text: "dépistage complet du cancer de la peau", bold: true },
        { text: ". Il se déploie dans les communes et territoires qui n'ont plus accès à un dermatologue, zones rurales, déserts médicaux, départements sous-dotés." },
      ],
    },
    {
      id: "c2",
      segments: [
        { text: "À la différence d'un simple examen, le DermatoBus réalise une " },
        { text: "cartographie du corps entier", bold: true },
        { text: " avec dermoscopie de toutes les lésions, permettant un suivi comparatif d'une année sur l'autre, au cœur de la valeur médicale du dispositif." },
      ],
    },
  ],
  features: [
    { id: "f1", titre: "Corps entier, aucune lésion oubliée", description: "Cartographie systématique, pas seulement les grains de beauté signalés par le patient." },
    { id: "f2", titre: "IA de pré-analyse optionnelle", description: "Évaluation du risque mélanome en amont du médecin, réduit la charge des dermatologues, améliore la priorisation." },
    { id: "f3", titre: "Triage par médecin généraliste", description: "Un MG formé filtre les cas, seuls ceux qui nécessitent un avis spécialisé remontent au dermatologue. Libère le temps médical rare." },
    { id: "f4", titre: "Télé-expertise CHU", description: "Revue finale par un onco-dermatologue du CHU de Caen. Qualité universitaire, depuis n'importe quel territoire." },
  ],
  videoLabel: "Vidéo — Le DermatoBus en action · 3:00",
  comparison: {
    titre: "DERMATOBUS VS PROTOCOLE CLASSIQUE",
    classique: {
      label: "Protocole classique",
      items: [
        "Seuls les grains de beauté signalés par le patient sont examinés",
        "Tous les cas envoyés directement au dermatologue, surcharge",
        "Aucun suivi comparatif d'une année sur l'autre",
      ],
    },
    hocoia: {
      label: "DermatoBus Hocoia",
      items: [
        "Cartographie corps entier, toutes les lésions documentées",
        "Triage MG + IA, dermatologue consulté uniquement si nécessaire",
        "Suivi lésion par lésion d'une année sur l'autre",
      ],
    },
  },
};

// ─── Définition ───────────────────────────────────────────────────────────────

export const definition = {
  eyebrow: "Le concept",
  h2: "Qu'est-ce que le DermatoBus Hocoia ?",
  paras: [
    {
      id: "d1",
      segments: [
        { text: "Le DermatoBus est une unité mobile dédiée au " },
        { text: "dépistage complet du cancer de la peau", bold: true },
        { text: ". Il se déploie dans les communes et territoires qui n'ont plus accès à un dermatologue, zones rurales, déserts médicaux, départements sous-dotés." },
      ],
    },
    {
      id: "d2",
      segments: [
        { text: "À la différence d'un simple examen, le DermatoBus réalise une " },
        { text: "cartographie du corps entier", bold: true },
        { text: " avec dermoscopie de toutes les lésions, permettant un suivi comparatif d'une année sur l'autre, au cœur de la valeur médicale du dispositif." },
      ],
    },
  ],
  differenciateurs: [
    {
      id: "diff1",
      titre: "Corps entier, aucune lésion oubliée",
      description:
        "Cartographie systématique, pas seulement les grains de beauté signalés par le patient. Élimine le principal risque médico-légal des protocoles actuels.",
    },
    {
      id: "diff2",
      titre: "IA de pré-analyse optionnelle",
      description:
        "Évaluation du risque mélanome en amont du médecin, réduit la charge des dermatologues, améliore la priorisation.",
    },
    {
      id: "diff3",
      titre: "Triage par médecin généraliste",
      description:
        "Un MG formé filtre les cas, seuls ceux qui nécessitent un avis spécialisé remontent au dermatologue. Libère le temps médical rare.",
    },
    {
      id: "diff4",
      titre: "Télé-expertise CHU",
      description:
        "Revue finale par un onco-dermatologue du CHU de Caen. Qualité de diagnostic universitaire, depuis n'importe quel territoire.",
    },
  ],
  imagePlaceholder: "DermatoBus 3D — vue extérieure et intérieure interactive",
  comparison: {
    titre: "DERMATOBUS VS PROTOCOLE CLASSIQUE",
    classique: {
      label: "Protocole classique",
      items: [
        "Seuls les grains de beauté signalés par le patient sont examinés",
        "Tous les cas envoyés directement au dermatologue, surcharge",
        "Aucun suivi comparatif d'une année sur l'autre",
      ],
    },
    hocoia: {
      label: "DermatoBus Hocoia",
      items: [
        "Cartographie corps entier, toutes les lésions documentées",
        "Triage MG + IA, dermatologue consulté uniquement si nécessaire",
        "Suivi lésion par lésion d'une année sur l'autre",
      ],
    },
  },
};

// ─── Protocole ────────────────────────────────────────────────────────────────

export const protocole = {
  eyebrow: "Notre protocole",
  h2: "Un protocole médical en 4 étapes, rigoureux et sécurisé",
  subtitle:
    "Conçu avec le CHU de Caen et validé par des onco-dermatologues, le protocole DermatoBus garantit une qualité de diagnostic équivalente à un cabinet spécialisé.",
  steps: [
    {
      id: "p1",
      num: "1",
      titre: "Acquisition complète",
      description:
        "Cartographie du corps entier + dermoscopie de toutes les lésions. Aucune zone oubliée, aucun biais lié au signalement patient.",
      badge: "Infirmier·e à bord",
    },
    {
      id: "p2",
      num: "2",
      titre: "Pré-analyse IA",
      description:
        "Évaluation automatique du risque mélanome sur les images. Optionnelle mais recommandée, priorise les cas à soumettre au médecin.",
      badge: "IA (mélanome uniquement)",
    },
    {
      id: "p3",
      num: "3",
      titre: "Triage médecin généraliste",
      description:
        "Un MG formé au protocole DermatoBus analyse les données. Il décide : surveillance simple ou télé-expertise dermatologique nécessaire.",
      badge: "Médecin généraliste formé",
    },
    {
      id: "p4",
      num: "4",
      titre: "Télé-expertise dermatologique",
      description:
        "L'onco-dermatologue du CHU réalise la revue finale des cas transmis. Diagnostic, préconisation, suivi, remis au patient et à son médecin traitant.",
      badge: "Onco-dermatologue CHU Caen",
    },
  ],
  note: {
    segments: [
      { text: "Sécurité médico-légale", bold: true },
      {
        text: " : la cartographie corps entier et le triage double (IA + MG) éliminent les deux principales lacunes des protocoles actuels, lésions non examinées et surcharge des dermatologues. Le protocole est supervisé par un comité scientifique présidé par le Dr Lorphelin (CHU de Caen).",
      },
    ],
  },
};

// ─── Pilote Normandie ─────────────────────────────────────────────────────────

export const piloteNormandie = {
  eyebrow: "Projet pilote 2026",
  h2: "Le premier DermatoBus en Normandie, automne 2026",
  paragraphs: [
    "La Normandie a été choisie pour le pilote en raison de sa désertification médicale particulièrement marquée en dermatologie. L'Orne et l'Eure comptent chacun moins de 5 dermatologues, pour des populations de 280 000 à 600 000 habitants.",
    "Le pilote permettra de valider le protocole (taux de détection, pertinence du triage MG, satisfaction patients), de mesurer l'impact médico-économique, et de construire le modèle de déploiement national.",
  ],
  mapPlaceholder: "Carte Normandie — Orne & Eure",
  statsRow: [
    { value: "<5", label: "Dermatologues dans l'Orne" },
    { value: "<5", label: "Dermatologues dans l'Eure" },
    { value: "18 mois", label: "Délai RDV moyen" },
  ],
  chuCard: {
    titre: "CHU de Caen, partenaire scientifique",
    sousTitre: "Comité scientifique présidé par le Dr Lorphelin",
    paragraphe:
      "Le Dr Lorphelin, onco-dermatologue au CHU de Caen, préside le comité scientifique du DermatoBus. Le CHU mène les études de validation du protocole et assure la revue dermatologique finale de toutes les télé-expertises.",
    items: [
      "Études de validation : pertinence du triage MG, taux de détection précoce, impact médico-économique",
      "Télé-expertise finale : revue des cas par les onco-dermatologues du service",
      "Publication scientifique : résultats du pilote publiés pour validation nationale",
    ],
    encadre: {
      titre: "Vous êtes une collectivité de Normandie ?",
      texte:
        "Rejoignez le pilote dès maintenant, les places sont limitées pour la première phase de déploiement.",
    },
    cta: "Rejoindre le pilote →",
  },
};

// ─── Couverture géographique ──────────────────────────────────────────────────

export const couverture = {
  eyebrow: "Notre couverture",
  h2: "Le DermatoBus, un déploiement national progressif",
  subtitle:
    "Après le pilote normand, le DermatoBus sera déployé dans les territoires les plus déficitaires en dermatologues.",
  mapPlaceholder: "Carte France — phases de déploiement DermatoBus",
  regions: [
    {
      id: "r1",
      nom: "Normandie",
      departements: "Orne, Eure",
      statut: "pilote",
      label: "Pilote · Automne 2026",
    },
    {
      id: "r2",
      nom: "Grand Est",
      departements: "Moselle, Vosges, Haute-Marne",
      statut: "phase2",
      label: "Phase 2 · 2027",
    },
    {
      id: "r3",
      nom: "Centre-Val de Loire",
      departements: "Indre, Cher",
      statut: "phase2",
      label: "Phase 2 · 2027",
    },
    {
      id: "r4",
      nom: "Nouvelle-Aquitaine",
      departements: "Creuse, Corrèze",
      statut: "phase3",
      label: "Phase 3 · 2028",
    },
  ],
};

// ─── Solutions (maillage interne) ─────────────────────────────────────────────

export const solutions = {
  eyebrow: "Nos solutions",
  h2: "Le DermatoBus fait partie de la gamme Hocoia",
  cards: [
    {
      id: "s1",
      highlight: true,
      badge: "Page actuelle",
      titre: "DermatoBus",
      description:
        "Dépistage cancer de la peau, cartographie corps entier, IA mélanome, télé-expertise CHU. Pilote Normandie automne 2026.",
      ctaDisabled: true,
      cta: "Vous êtes ici",
      href: null,
    },
    {
      id: "s2",
      highlight: false,
      badge: "Polyvalent — Médecine générale",
      titre: "MédicoBus",
      description:
        "Cabinet médical mobile polyvalent, cardiologie, médecine générale, santé des femmes. 10+ dispositifs embarqués.",
      ctaDisabled: false,
      cta: "Découvrir le MédicoBus →",
      href: "/produits/medicobus",
    },
    {
      id: "s3",
      highlight: false,
      badge: "Spécialisé — Cancer du sein",
      titre: "MammoBus",
      description:
        "Mammographie mobile, dépistage cancer du sein en tout territoire. Innovation unique en France.",
      ctaDisabled: false,
      cta: "Découvrir le MammoBus →",
      href: "/mammobus",
    },
  ],
};

// ─── SEO ──────────────────────────────────────────────────────────────────────

export const seo = {
  eyebrow: "À propos du DermatoBus",
  h2: "DermatoBus : la réponse à la pénurie de dermatologues",
  left: {
    blocks: [
      {
        id: "sl1",
        h3: "Pourquoi un DermatoBus ?",
        segments: [
          { text: "Avec seulement " },
          { text: "3 720 dermatologues", bold: true },
          { text: " en France pour une population vieillissante, les délais de rendez-vous atteignent " },
          { text: "18 mois", bold: true },
          { text: " en zone rurale. Le DermatoBus apporte le dépistage là où les spécialistes manquent, avec la qualité d'un cabinet universitaire." },
        ],
      },
      {
        id: "sl2",
        h3: "Cartographie corps entier : la valeur médicale unique",
        segments: [
          { text: "Un examen classique ne regarde que les lésions signalées par le patient. Le DermatoBus cartographie l'" },
          { text: "intégralité du corps", bold: true },
          { text: ", permettant un suivi comparatif année après année. C'est le seul protocole mobile à le faire en France." },
        ],
      },
    ],
    liens: [
      "DermatoBus Normandie →",
      "Dépistage mélanome Orne →",
      "Cancer de la peau Eure →",
    ],
  },
  right: {
    h3: "Pour quelles organisations ?",
    items: [
      { id: "sr1", bold: "Collectivités & départements :", suite: " campagnes territoriales pour lutter contre la désertification dermatologique." },
      { id: "sr2", bold: "CPTS & MSP :", suite: " extension de votre offre de prévention en dermatologie." },
      { id: "sr3", bold: "Mutuelles & assureurs :", suite: " programmes de prévention cutanée pour vos adhérents." },
      { id: "sr4", bold: "Hôpitaux & CHU :", suite: " externalisation du dépistage hors les murs." },
    ],
    liens: [
      "DermatoBus collectivités →",
      "DermatoBus CPTS →",
      "DermatoBus mutuelles →",
    ],
  },
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "Questions fréquentes",
  h2: "Tout savoir sur le DermatoBus",
  items: [
    {
      id: "faq1",
      question: "C'est quoi le DermatoBus ?",
      answer:
        "Le DermatoBus est une unité mobile dédiée au dépistage complet du cancer de la peau. Il se déploie dans les territoires sans accès à un dermatologue et réalise une cartographie du corps entier grâce à une technologie de dermoscopie robotique, suivie d'une analyse par IA et d'une revue par un onco-dermatologue du CHU.",
    },
    {
      id: "faq2",
      question: "En quoi est-ce différent d'un dépistage classique ?",
      answer:
        "Un dépistage classique n'examine que les lésions signalées par le patient, créant un risque médico-légal et une sous-détection. Le DermatoBus cartographie l'intégralité du corps, et permet un suivi comparatif de chaque lésion d'une année sur l'autre, ce qui est unique en France en mode mobile.",
    },
    {
      id: "faq3",
      question: "Comment est financé le DermatoBus, le patient paie-t-il ?",
      answer:
        "Non. Le dépistage est gratuit pour le patient. Le modèle est hybride : sponsoring institutionnel (mutuelles, laboratoires) + forfait par patient payé par la collectivité (département, CPTS). Hocoia a fait le choix de ne jamais mettre le coût à la charge du patient pour éviter toute forme de privatisation de l'accès aux soins.",
    },
    {
      id: "faq4",
      question: "Quand et où le DermatoBus sera-t-il disponible ?",
      answer:
        "Le projet pilote est prévu pour l'automne 2026 en Normandie, en partenariat avec le CHU de Caen, avec un focus sur l'Orne et l'Eure, deux départements comptant moins de 5 dermatologues. Le déploiement national suivra en fonction des résultats du pilote.",
    },
    {
      id: "faq5",
      question: "Notre collectivité peut-elle rejoindre le pilote ?",
      answer:
        "Oui. Hocoia sélectionne actuellement les territoires partenaires pour la phase pilote en Normandie. Si vous êtes une collectivité, une CPTS ou un département de la région, contactez-nous dès maintenant, les places sont limitées pour la première phase.",
    },
  ],
};

// ─── CTA Final ────────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Déployez le DermatoBus dans votre territoire.",
  subtitle:
    "Rejoignez le pilote Normandie ou préparez votre déploiement, un expert Hocoia vous répond sous 24h.",
  ctaPrimary: "Rejoindre le pilote",
  ctaOutline: "Demander une présentation",
  ctaGhost: "Télécharger la brochure",
};
