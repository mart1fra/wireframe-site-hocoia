// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Mammographie mobile · <3,5T · Dépistage organisé & individuel",
  h1Parts: {
    italicA: "MammoBus Hocoia",
    mid: " — mammographie mobile, partout ",
    italicB: "pour les femmes.",
  },
  subtitle:
    "Une unité compacte de moins de 3,5 tonnes alliant mobilité et technologie radiologique de pointe — pour apporter le dépistage du cancer du sein directement dans les communes, les entreprises et les territoires.",
  checks: [
    "Mammographie + échographie mammaire à bord",
    "PACS centralisé + hébergement HDS certifié",
    "Dépistage organisé et individuel — 24 femmes/jour",
    "Diagnostic sur place ou en télé-expertise radiologue",
    "Déploiement clé en main — délai 2 mois",
  ],
  ctaPrimary: "Demander une présentation",
  ctaOutline: "Voir le protocole ↓",
  form: {
    title: "Organiser un dépistage MammoBus",
    subtitle: "Collectivité, mutuelle, entreprise, hôpital — réponse <24h.",
    vousEtesOptions: [
      "Vous êtes",
      "Collectivité/Département",
      "Mutuelle/Assureur",
      "Entreprise/DRH",
      "Hôpital/Clinique",
      "CPTS/MSP",
    ],
    prenomPlaceholder: "Prénom",
    nomPlaceholder: "Nom",
    emailPlaceholder: "Email professionnel",
    communePlaceholder: "Commune / Territoire",
    nombreOptions: [
      "Nombre de femmes estimé",
      "Moins de 100",
      "100–300",
      "300–1000",
      "Plus de 1000",
    ],
    cta: "Demander une présentation →",
    note: "Sans engagement · Réponse <24h · RGPD",
  },
  patientCard: {
    titre: "Vous êtes une patiente ?",
    texte:
      "Trouvez les prochaines journées de dépistage MammoBus organisées près de chez vous.",
    cta: "Voir les prochaines dates →",
  },
};

// ─── Logos ────────────────────────────────────────────────────────────────────

export const logos = {
  label: "Ils font confiance au MammoBus Hocoia",
  items: [
    "MGEN Vendée",
    "Val de Fensch",
    "CC Sarrebourg Moselle Sud",
    "Région Grand Est",
    "MGEN",
    "CPAM",
    "Ligue contre le cancer",
  ],
};

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = [
  { value: "1/8",  label: "femmes développera un cancer du sein dans sa vie",                    source: "INCa" },
  { value: "61 000", label: "nouveaux cas par an en France — 2× plus qu'il y a 40 ans",         source: "INCa 2024" },
  { value: "90%",  label: "taux de guérison si détecté suffisamment tôt",                        source: "INCa" },
  { value: "99%",  label: "taux de guérison en cas de détection très précoce",                   source: "INCa" },
  { value: "50%",  label: "seulement des femmes +50 ans se font dépister",                       source: "INCa" },
];

// ─── Concept (composant ConceptSection) ──────────────────────────────────────

export const concept = {
  eyebrow: "Le concept",
  title: "Qu'est-ce que le MammoBus Hocoia ?",
  paragraphs: [
    {
      id: "c1",
      segments: [
        { text: "Le MammoBus est une " },
        { text: "unité mobile compacte de mammographie", bold: true },
        { text: " — unique en France à moins de 3,5 tonnes. Il permet de réaliser des dépistages du cancer du sein directement dans les communes, sans plateau technique lourd ni déplacement pour les patientes." },
      ],
    },
    {
      id: "c2",
      segments: [
        { text: "Il fonctionne en " },
        { text: "dépistage organisé", bold: true },
        { text: " (programme national) et en " },
        { text: "dépistage individuel", bold: true },
        { text: ", avec un écosystème numérique complet pour le diagnostic et le suivi." },
      ],
    },
  ],
  features: [
    { id: "f1", titre: "Mammographie + échographie mammaire", description: "Palpation mammaire et mammographie à bord. Échographie en complément selon indication." },
    { id: "f2", titre: "PACS centralisé + hébergement HDS", description: "Hébergement certifié HDS et ISO 27001, box de transfert, PACS centralisé — lecture sur tous les écrans." },
    { id: "f3", titre: "Connectivité haut débit agréée", description: "SAT + LTE avec IP statique. Connexion avec tout cabinet de radiologie ou centre hospitalier." },
    { id: "f4", titre: "HocoApp — coordination complète", description: "Prise de RDV, pré-questionnaire médical, coordination des professionnels de santé, bilan anonymisé." },
  ],
  videoLabel: "Vidéo — Le MammoBus en action · 2:45",
  comparison: {
    titre: "MAMMOBUS VS DÉPISTAGE EN CENTRE FIXE",
    classique: {
      label: "Centre de radiologie fixe",
      items: [
        "La patiente doit se déplacer, parfois à 40+ km",
        "Délai de rendez-vous : 4 à 8 semaines",
        "Aucune présence dans les communes rurales",
      ],
    },
    hocoia: {
      label: "MammoBus Hocoia",
      items: [
        "Le MammoBus se déplace dans votre commune",
        "Créneaux disponibles en 2–7 jours",
        "24 femmes dépistées par jour, partout en France",
      ],
    },
  },
};

// ─── Définition ───────────────────────────────────────────────────────────────

export const definition = {
  eyebrow: "Le concept",
  h2: "Qu'est-ce que le MammoBus Hocoia ?",
  paras: [
    {
      id: "d1",
      segments: [
        { text: "Le MammoBus est une " },
        { text: "unité mobile compacte de mammographie", bold: true },
        { text: " — unique en France à moins de 3,5 tonnes. Il permet de réaliser des dépistages du cancer du sein directement dans les communes, sans plateau technique lourd ni déplacement pour les patientes." },
      ],
    },
    {
      id: "d2",
      segments: [
        { text: "Il fonctionne en " },
        { text: "dépistage organisé", bold: true },
        { text: " (programme national) et en " },
        { text: "dépistage individuel", bold: true },
        { text: ", avec un écosystème numérique complet pour le diagnostic et le suivi." },
      ],
    },
  ],
  features: [
    {
      id: "f1",
      titre: "Mammographie + échographie mammaire",
      description:
        "Palpation mammaire et mammographie à bord. Échographie en complément selon indication.",
    },
    {
      id: "f2",
      titre: "PACS centralisé + hébergement HDS",
      description:
        "Système dématérialisé adapté : hébergement certifié HDS et ISO 27001, box de transfert, PACS centralisé — lecture sur tous les écrans.",
    },
    {
      id: "f3",
      titre: "Connectivité haut débit agréée",
      description:
        "SAT + LTE avec IP statique. Connexion avec tout cabinet de radiologie ou centre hospitalier.",
    },
    {
      id: "f4",
      titre: "HocoApp — coordination complète",
      description:
        "Prise de RDV, pré-questionnaire médical, coordination des professionnels de santé, bilan anonymisé.",
    },
  ],
  imagePlaceholder: "MammoBus 3D — vue extérieure et intérieure interactive",
  specs: {
    titre: "SPÉCIFICATIONS TECHNIQUES",
    items: [
      { label: "Longueur (avec rampe)", value: "9,96 m" },
      { label: "Largeur",              value: "2,21 m" },
      { label: "Hauteur",              value: "3,02 m" },
      { label: "Poids total",          value: "3,5 T" },
      { label: "Capacité / journée",   value: "24 personnes" },
      { label: "Délai de déploiement", value: "2 mois" },
    ],
  },
};

// ─── Protocole ────────────────────────────────────────────────────────────────

export const protocole = {
  eyebrow: "Organisation des dépistages",
  h2: "Un service clé en main en 4 étapes",
  subtitle:
    "De l'organisation de la campagne au bilan des résultats — Hocoia gère l'intégralité du dispositif.",
  steps: [
    {
      id: "p1",
      num: "1",
      titre: "Organisation de la campagne",
      description:
        "Coordination avec la collectivité : définition du projet, sélection du lieu et de la date. Prise de RDV via HocoApp ou par téléphone. Invitation par flyer numérique ou courrier.",
      badge: "Équipe Hocoia",
    },
    {
      id: "p2",
      num: "2",
      titre: "Accueil & communication",
      description:
        "Éléments de communication préparés par Hocoia. Accueil des patientes sur le lieu de dépistage par un représentant Hocoia.",
      badge: "Représentant Hocoia",
    },
    {
      id: "p3",
      num: "3",
      titre: "Prise en charge médicale",
      description:
        "Accompagnement à bord par MERM + sage-femme. Palpation mammaire, mammographie, échographie si indiquée. Diagnostic sur place ou en télé-expertise radiologue.",
      badge: "MERM + Sage-femme + Radiologue",
    },
    {
      id: "p4",
      num: "4",
      titre: "Pilotage & bilan",
      description:
        "Données de participation, satisfaction et résultats médicaux anonymisés intégrés dans une synthèse. Suivi des anomalies détectées — RDV complémentaire organisé par l'équipe médicale.",
      badge: "Équipe médicale Hocoia",
    },
  ],
};

// ─── Pour qui ─────────────────────────────────────────────────────────────────

export const pourQui = {
  eyebrow: "À qui s'adresse le MammoBus",
  h2: "Le MammoBus pour vos territoires et vos publics",
  subtitle:
    "Quatre profils d'organisations utilisent déjà le MammoBus pour rendre le dépistage accessible.",
  cards: [
    {
      id: "pq1",
      titre: "Collectivités & territoires",
      description:
        "Communes rurales, communautés de communes, départements. Organisation de campagnes locales pour rapprocher le dépistage des femmes éloignées des centres de radiologie.",
      casType:
        "Cas type : 200 femmes dépistées en 5 jours dans une CC rurale de Moselle",
    },
    {
      id: "pq2",
      titre: "Mutuelles & assureurs",
      description:
        "Programmes de prévention pour vos adhérentes. Le MammoBus s'inscrit dans une démarche de santé proactive et mesurable.",
      casType: "Cas type : campagne MGEN sur 3 départements en 2024",
    },
    {
      id: "pq3",
      titre: "Entreprises & assureurs",
      description:
        "Bilans de prévention pour les collaboratrices sur site. Programme RH santé concret, mesurable, conforme RGPD.",
      casType:
        "Cas type : journée santé femmes dans un site industriel de 1 200 salariés",
    },
    {
      id: "pq4",
      titre: "Hôpitaux & établissements",
      description:
        "Externalisation du dépistage hors les murs. Augmentation du volume de patientes dépistées sans saturer les plateaux techniques.",
      casType:
        "Cas type : partenariat CH régional pour aller dans les communes périphériques",
    },
  ],
};

// ─── Témoignages ──────────────────────────────────────────────────────────────

export const temoignages = {
  eyebrow: "Ils témoignent",
  h2: "Ce que disent nos partenaires",
  cards: [
    {
      id: "t1",
      contexte: "CLS · Coordonnatrice santé",
      quote:
        "Un bilan extrêmement positif : lors de la première journée, toutes les patientes ont exprimé leur satisfaction à l'égard de ce dispositif — une première dans la région.",
      author: "Anne Haller",
      role: "Coordonnatrice du contrat local de santé",
    },
    {
      id: "t2",
      contexte: "Mutuelle · Vendée",
      quote:
        "Ce type d'offre répond à un vrai besoin. La prévention est un élément important — et ce partenariat avec Hocoia nous conforte dans cette conviction.",
      author: "Didier Brouard",
      role: "Élu à la section MGEN Vendée",
    },
    {
      id: "t3",
      contexte: "Collectivité · Sarrebourg",
      quote:
        "Des créneaux pleins, que ce soit par inscriptions téléphoniques ou en captant l'intérêt spontané de personnes lors de leurs courses. Un franc succès.",
      author: "Roland Klein",
      role: "Président CC Sarrebourg Moselle Sud",
    },
  ],
};

// ─── Couverture géographique ──────────────────────────────────────────────────

export const couverture = {
  eyebrow: "Notre couverture",
  h2: "Le MammoBus Hocoia intervient partout en France",
  subtitle:
    "Du Grand Est aux Pays de la Loire — Hocoia déploie ses unités mobiles de mammographie dans tous les territoires déficitaires.",
  mapPlaceholder:
    "Carte France — zones d'intervention + prochaines journées de dépistage",
  regions: [
    {
      id: "r1",
      nom: "Grand Est",
      departements: "Moselle, Bas-Rhin, Meurthe-et-Moselle",
      statut: "actif",
      label: "Actif · 25+ communes",
    },
    {
      id: "r2",
      nom: "Pays de la Loire",
      departements: "Vendée, Maine-et-Loire",
      statut: "actif",
      label: "Actif · 18+ communes",
    },
    {
      id: "r3",
      nom: "Île-de-France",
      departements: "Seine-et-Marne, Essonne, Val-d'Oise",
      statut: "actif",
      label: "Actif · 10+ communes",
    },
    {
      id: "r4",
      nom: "Nouvelle-Aquitaine",
      departements: "Creuse, Corrèze, Deux-Sèvres",
      statut: "deploiement",
      label: "Déploiement 2026",
    },
  ],
};

// ─── Solutions (maillage interne) ─────────────────────────────────────────────

export const solutions = {
  eyebrow: "Nos solutions",
  h2: "Découvrir nos autres bus médicaux",
  cards: [
    {
      id: "s1",
      highlight: true,
      badge: "Page actuelle",
      titre: "MammoBus",
      description:
        "Mammographie mobile <3,5T — dépistage organisé et individuel. 24 femmes/jour.",
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
        "Cabinet médical mobile polyvalent — cardio, dermato, santé des femmes. 10+ dispositifs embarqués.",
      ctaDisabled: false,
      cta: "Découvrir le MédicoBus →",
      href: "/produits/medicobus",
    },
    {
      id: "s3",
      highlight: false,
      badge: "Spécialisé — Dermatologie",
      titre: "DermatoBus",
      description:
        "Dépistage cancer de la peau — cartographie corps entier, IA mélanome, partenariat CHU Caen. Automne 2026.",
      ctaDisabled: false,
      cta: "Découvrir le DermatoBus →",
      href: "/produits/dermatobus",
    },
  ],
};

// ─── SEO ──────────────────────────────────────────────────────────────────────

export const seo = {
  eyebrow: "À propos du MammoBus",
  h2: "MammoBus : la mammographie mobile pour toutes",
  left: {
    blocks: [
      {
        id: "sl1",
        h3: "Pourquoi un MammoBus mobile ?",
        segments: [
          { text: "" },
          { text: "1 femme sur 8", bold: true },
          { text: " développera un cancer du sein, mais seulement " },
          { text: "50% des femmes éligibles", bold: true },
          { text: " se font dépister. Le frein principal est l'accès : distance, délais, organisation. Le MammoBus lève ces barrières en venant directement dans les communes." },
        ],
      },
      {
        id: "sl2",
        h3: "Dépistage organisé vs dépistage individuel",
        segments: [
          { text: "Le MammoBus participe au programme national de " },
          { text: "dépistage organisé", bold: true },
          { text: " (femmes 50–74 ans, prise en charge à 100%) ET propose du " },
          { text: "dépistage individuel", bold: true },
          { text: " pour les autres situations (jeunes femmes à risque, suivi post-traitement, demande personnelle)." },
        ],
      },
    ],
    liens: [
      "MammoBus Grand Est →",
      "Dépistage cancer du sein Vendée →",
      "Mammographie mobile Sarrebourg →",
    ],
  },
  right: {
    h3: "Pour quelles organisations ?",
    items: [
      { id: "sr1", bold: "Collectivités :", suite: " campagnes territoriales pour les femmes éloignées des plateaux techniques." },
      { id: "sr2", bold: "Mutuelles & assureurs :", suite: " programmes de prévention pour vos adhérentes." },
      { id: "sr3", bold: "Entreprises :", suite: " journées santé pour vos collaboratrices, sur site, sans déplacement." },
      { id: "sr4", bold: "Établissements de santé :", suite: " extension hors les murs de votre activité de dépistage." },
    ],
    liens: [
      "MammoBus collectivités →",
      "MammoBus entreprises →",
      "MammoBus mutuelles →",
    ],
  },
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "Questions fréquentes",
  h2: "Tout savoir sur le MammoBus",
  subtitle:
    "Les questions spécifiques au MammoBus. Pour les questions générales, consultez notre FAQ principale.",
  items: [
    {
      id: "faq1",
      question: "Combien de femmes peut-on dépister par jour ?",
      answer:
        "24 femmes par jour en moyenne, sur des créneaux de 20 à 25 minutes incluant accueil, mammographie, échographie si nécessaire et restitution rapide.",
    },
    {
      id: "faq2",
      question: "Le MammoBus participe-t-il au dépistage organisé national ?",
      answer:
        "Oui. Le MammoBus est habilité pour le dépistage organisé du cancer du sein (femmes 50–74 ans), pris en charge à 100% par l'Assurance Maladie. Il propose également du dépistage individuel.",
    },
    {
      id: "faq3",
      question: "Qui réalise les examens à bord ?",
      answer:
        "Une équipe MERM (manipulatrice en électroradiologie médicale) + sage-femme. La lecture des clichés est faite par un radiologue, sur place ou en télé-expertise.",
    },
    {
      id: "faq4",
      question: "Comment sont organisées les inscriptions ?",
      answer:
        "Hocoia gère l'intégralité de la campagne : invitation par flyer numérique ou courrier, prise de RDV via HocoApp ou téléphone, accueil le jour J. La collectivité n'a rien à organiser.",
    },
    {
      id: "faq5",
      question: "Quelles sont les contraintes pour accueillir un MammoBus ?",
      answer:
        "(1) Emplacement plat et stable d'environ 12m de long. (2) Accès à une alimentation électrique 32A (ou groupe électrogène Hocoia). (3) Espace d'accueil pour les patientes en attente. Notre équipe valide l'emplacement lors du cadrage.",
    },
    {
      id: "faq6",
      question: "Que se passe-t-il en cas d'anomalie détectée ?",
      answer:
        "L'équipe médicale Hocoia organise un rendez-vous complémentaire avec un radiologue ou un gynécologue référent. Le suivi est tracé dans HocoApp et transmis au médecin traitant de la patiente.",
    },
  ],
};

// ─── CTA Final ────────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Organisez un dépistage ou acquérez votre MammoBus.",
  subtitle: "Un expert Hocoia vous répond sous 24h — sans engagement.",
  ctaPrimary: "Organiser un dépistage",
  ctaOutline: "Acquérir un bus →",
  ctaGhost: "Télécharger la brochure",
};
