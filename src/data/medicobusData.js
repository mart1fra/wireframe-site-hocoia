// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  h1Parts: {
    italicA: "MédicoBus Hocoia",
    mid: " — soins et prévention, ",
    italicB: "au cœur de vos territoires.",
  },
  subtitle:
    "Un cabinet médical mobile connecté, équipé de plus de 10 dispositifs médicaux, qui se déploie partout — zones rurales, entreprises, hôpitaux, places publiques.",
  checks: [
    "Cabinet < 3,5T — accès à tous les territoires, y compris ruraux",
    "10+ dispositifs médicaux connectés embarqués",
    "Soignant présent + médecin téléconsultant disponible",
    "Logiciel de coordination logistique intégré",
    "Adapté à vos besoins spécifiques — sur-mesure",
  ],
  ctaPrimary: "Demander une présentation",
  ctaOutline: "Voir les spécialités ↓",
  form: {
    title: "Demander une présentation",
    subtitle: "Collectivité, entreprise, hôpital — réponse sous 24h.",
    vousEtesOptions: [
      "Vous êtes",
      "Collectivité / Territoire",
      "Entreprise / DRH",
      "Établissement de santé",
      "Assureur / Mutuelle",
    ],
    specialiteOptions: [
      "Spécialité souhaitée",
      "Médecine générale",
      "Cardiologie",
      "Dermatologie",
      "Santé des femmes",
      "Plusieurs spécialités",
    ],
    prenomPlaceholder: "Prénom",
    nomPlaceholder: "Nom",
    emailPlaceholder: "Email pro",
    communePlaceholder: "Commune / Zone",
    cta: "Demander une présentation →",
    note: "Sans engagement · Réponse <24h · RGPD",
  },
  patientCard: {
    titre: "Vous êtes un patient ?",
    texte:
      "Trouvez un créneau disponible dans votre commune et prenez rendez-vous en ligne.",
    cta: "Voir les prochains passages →",
  },
};

// ─── Logos ────────────────────────────────────────────────────────────────

export const logos = {
  label: "Ils font confiance à Hocoia",
  items: [
    "Ministère AE",
    "MGEN Vendée",
    "Val de Fensch",
    "CC Pays de Phalsbourg",
    "Sarrebourg Moselle Sud",
    "Angerville",
    "AP-HP",
  ],
};

// ─── Stats ────────────────────────────────────────────────────────────────

export const stats = [
  { value: "20M",   label: "Français en désert médical",          source: "DREES 2023" },
  { value: "11%",   label: "Sans accès spécialiste à 30 min",     source: "INSEE 2023" },
  { value: "10+",   label: "Dispositifs médicaux à bord",         source: "Équipement Hocoia" },
  { value: "<3,5T", label: "Accès partout, y compris rural",      source: "Spéc. technique" },
  { value: "3",     label: "Thématiques de dépistage",            source: "Cardio · Dermato · Femme" },
];

// ─── Définition ───────────────────────────────────────────────────────────

export const definition = {
  eyebrow: "Le concept",
  h2: "Qu'est-ce qu'un MédicoBus Hocoia ?",
  paragraphs: [
    "Le MédicoBus est un cabinet médical mobile et connecté de moins de 3,5 tonnes. Conçu pour apporter des soins de prévention là où les déserts médicaux s'étendent, il combine équipements médicaux de pointe et technologies numériques.",
    "Chaque déploiement repose sur la présence physique d'un soignant qualifié à bord, renforcée par la disponibilité d'un médecin en téléconsultation assistée. Le MédicoBus n'est pas un simple bus — c'est un protocole de soin complet.",
  ],
  features: [
    {
      id: "f1",
      titre: "Cabinet mobile < 3,5T",
      description: "Parking, place de marché, site entreprise — partout accessible.",
    },
    {
      id: "f2",
      titre: "10+ dispositifs médicaux connectés",
      description: "ECG, dermatoscope, échographe, spiromètre, mini-labo biologie…",
    },
    {
      id: "f3",
      titre: "Soignant présent + médecin téléconsultant",
      description: "Accompagnement humain complet : accueil, anamnèse, constantes, suivi.",
    },
    {
      id: "f4",
      titre: "Logiciel de coordination unique",
      description: "Agenda, prise de RDV, dossier patient, reporting — tout intégré.",
    },
  ],
  photos: [
    { placeholder: "Photo MédicoBus Hocoia — extérieur", height: "h-44" },
    { placeholder: "Photo intérieur — équipements à bord", height: "h-28" },
  ],
  contraintes: {
    titre: "Contraintes logistiques à prévoir",
    items: [
      { numero: "①", label: "Emplacement", texte: "surface suffisante pour manœuvrer et stationner facilement." },
      { numero: "②", label: "Sol stable",  texte: "sol plat et stable, sans risque de basculement." },
      { numero: "③", label: "Alimentation électrique", texte: "proximité d'une prise murale (ou groupe électrogène Hocoia)." },
    ],
  },
};

// ─── Équipements & Protocoles (onglets) ───────────────────────────────────

export const thematiques = {
  eyebrow: "Nos thématiques de dépistage",
  h2: "MédicoBus : 3 thématiques, des équipements dédiés",
  subtitle: "Chaque MédicoBus est configuré selon la thématique choisie.",
  tabs: [
    { id: "cardio",  label: "Maladies cardiovasculaires" },
    { id: "dermato", label: "Cancer de la peau" },
    { id: "femme",   label: "Santé de la femme" },
  ],
  content: {
    cardio: {
      equipLabel: "Équipements embarqués — Cardiovasculaire",
      equip: [
        { id: "e1", titre: "ECG (électrocardiogramme)",   desc: "Enregistrement de l'activité électrique cardiaque." },
        { id: "e2", titre: "Tensiomètre connecté",        desc: "Mesure précise de la pression artérielle." },
        { id: "e3", titre: "Mini-labo biologie",          desc: "Glycémie, cholestérol, bilan lipidique rapide." },
        { id: "e4", titre: "Mesures anthropométriques",   desc: "IMC, périmètre abdominal, composition corporelle." },
        { id: "e5", titre: "Échographie des carotides",   desc: "Détection des plaques et sténoses." },
      ],
      publicLabel: "PUBLIC CIBLÉ",
      public: "Les personnes âgées de 45 à 70 ans. Personnes à risque cardiovasculaire.",
      protocoleLabel: "Protocole de consultation",
      protocole: [
        "Prise des constantes par l'infirmière",
        "Examen complémentaire (ECG, glycémie, cholestérol)",
        "Diagnostic en asynchrone par un cardiologue en téléexpertise",
        "Si besoin, prise de RDV complémentaire",
      ],
      badge: "→ Diagnostic asynchrone — résultats sous 7-14 jours",
      affectionsLabel: "AFFECTIONS CIBLÉES",
      affections: "Hypertension · Diabète · Dyslipidémies · Arythmies · Risque AVC · Obésité cardiovasculaire",
    },
    dermato: {
      equipLabel: "Équipements embarqués — Dermatologie",
      equip: [
        { id: "e1", titre: "Dermatoscope IA",       desc: "Analyse numérique augmentée des lésions cutanées." },
        { id: "e2", titre: "Appareil photo médical", desc: "Captures standardisées haute résolution." },
        { id: "e3", titre: "Loupe binoculaire",     desc: "Examen détaillé des zones difficiles d'accès." },
        { id: "e4", titre: "Kit prélèvement",       desc: "Prélèvements dermatologiques si nécessaire." },
        { id: "e5", titre: "Dossier photographique", desc: "Suivi longitudinal des lésions dans le temps." },
      ],
      publicLabel: "PUBLIC CIBLÉ",
      public: "Toute personne de plus de 18 ans, en particulier peaux à risque.",
      protocoleLabel: "Protocole de consultation",
      protocole: [
        "Entretien avec l'infirmière",
        "Examen cutané complet",
        "Photographies des lésions suspectes",
        "Diagnostic asynchrone par dermatologue",
      ],
      badge: "→ Diagnostic asynchrone — résultats sous 7-14 jours",
      affectionsLabel: "AFFECTIONS CIBLÉES",
      affections: "Mélanomes · Carcinomes · Kératoses · Lésions suspectes · Grains de beauté atypiques",
    },
    femme: {
      equipLabel: "Équipements embarqués — Santé de la femme",
      equip: [
        { id: "e1", titre: "Tensiomètre",          desc: "Mesure de la pression artérielle." },
        { id: "e2", titre: "Frottis cervico-vaginal", desc: "Dépistage du cancer du col de l'utérus." },
        { id: "e3", titre: "Palpation mammaire",   desc: "Dépistage clinique du cancer du sein." },
        { id: "e4", titre: "Kit prélèvement",      desc: "Prélèvements gynécologiques." },
        { id: "e5", titre: "Échographe pelvien",   desc: "Visualisation des organes gynécologiques." },
      ],
      publicLabel: "PUBLIC CIBLÉ",
      public: "Femmes 18–75 ans, suivi gynécologique régulier.",
      protocoleLabel: "Protocole de consultation",
      protocole: [
        "Entretien avec sage-femme",
        "Examen clinique",
        "Frottis et palpation",
        "Diagnostic par gynécologue en téléexpertise",
      ],
      badge: "→ Diagnostic asynchrone — résultats sous 7-14 jours",
      affectionsLabel: "AFFECTIONS CIBLÉES",
      affections: "Cancer col utérus · Cancer sein · IST · Troubles menstruels · Suivi contraception",
    },
  },
};

// ─── Parcours de consultation ─────────────────────────────────────────────

export const parcours = {
  eyebrow: "Le parcours",
  h2: "Comment se déroule une consultation dans le MédicoBus ?",
  steps: [
    { id: "s1", number: "01", titre: "Prise de RDV",       description: "Réservation en ligne ou directement sur place selon disponibilité." },
    { id: "s2", number: "02", titre: "Accueil à bord",      description: "Accueil par un soignant qualifié, recueil des informations médicales." },
    { id: "s3", number: "03", titre: "Consultation",        description: "Examens réalisés sur place avec les équipements embarqués." },
    { id: "s4", number: "04", titre: "Résultats & suivi",   description: "Compte-rendu envoyé sous 7-14 jours avec recommandations." },
  ],
};

// ─── Couverture géographique ──────────────────────────────────────────────

export const couverture = {
  eyebrow: "Notre couverture",
  h2: "Le MédicoBus Hocoia intervient partout en France",
  subtitle:
    "Des zones rurales de Moselle aux places publiques d'Île-de-France — Hocoia déploie ses cabinets mobiles dans tous les territoires déficitaires.",
  cartePlaceholder: "Carte France — zones d'intervention + prochains passages",
  regions: [
    {
      id: "r1",
      nom: "Grand Est",
      departements: "Moselle, Bas-Rhin, Meurthe-et-Moselle",
      statut: "Actif · 30+ communes",
      actif: true,
    },
    {
      id: "r2",
      nom: "Île-de-France",
      departements: "Seine-et-Marne, Essonne, Val-d'Oise",
      statut: "Actif · 15+ communes",
      actif: true,
    },
    {
      id: "r3",
      nom: "Pays de la Loire",
      departements: "Vendée, Maine-et-Loire, Sarthe",
      statut: "Actif · 12+ communes",
      actif: true,
    },
    {
      id: "r4",
      nom: "Nouvelle-Aquitaine",
      departements: "Creuse, Corrèze, Deux-Sèvres",
      statut: "Déploiement 2025",
      actif: false,
    },
  ],
};

// ─── Témoignages ──────────────────────────────────────────────────────────

export const temoignages = {
  eyebrow: "Ils témoignent",
  h2: "Ce que disent nos partenaires et patients",
  top: [
    {
      id: "t1",
      contexte: "Collectivité · Val de Fensch",
      quote:
        "Il n'y avait plus de dermatologue dans notre zone. Hocoia a organisé 3 jours de dépistage. Nous sommes très satisfaits.",
      author: "Jean-Pierre Cerbai",
      role: "Chargé de la santé, Val de Fensch",
    },
    {
      id: "t2",
      contexte: "Institutionnel · Ministère des AE",
      quote:
        "L'organisation est remarquable. Tous les créneaux se sont rapidement remplis. Un examen complet en temps très court.",
      author: "Claire Doucerain",
      role: "Responsable DSE, Ministère des AE",
    },
    {
      id: "t3",
      contexte: "Élu · Angerville",
      quote:
        "Il ne s'agit pas de remplacer les médecins, mais de proposer une offre complémentaire qui renforce l'accès aux soins localement.",
      author: "Johann Mittelhausser",
      role: "Maire d'Angerville",
    },
  ],
  bottom: [
    {
      id: "t4",
      contexte: "Mutuelle · Vendée",
      quote:
        "Ce type d'offre répond à un vrai besoin. La prévention est un élément important — Hocoia nous conforte dans cette conviction.",
      author: "Didier Brouard",
      role: "Élu MGEN Vendée",
    },
    {
      id: "t5",
      contexte: "Patiente · Val de Fensch",
      quote:
        "Une expérience à poursuivre et à pérenniser. On a beaucoup de mal à avoir des RDV dermato — merci à vous !",
      author: "Mme Nuvolara",
      role: "Patiente, Val de Fensch",
    },
  ],
};

// ─── Nos 3 solutions ──────────────────────────────────────────────────────

export const solutions = {
  eyebrow: "Nos solutions MédicoBus",
  h2: "Découvrez nos 3 solutions spécialisées",
  subtitle:
    "Le MédicoBus généraliste, le DermatoBus et le MammoBus — trois produits complémentaires.",
  cards: [
    {
      id: "s1",
      badge: "Page actuelle",
      titre: "MédicoBus",
      description:
        "Cabinet médical mobile polyvalent — médecine générale, cardiologie, santé des femmes. 10+ dispositifs embarqués.",
      items: [
        "Médecine générale & check-up",
        "Prévention cardiovasculaire",
        "Santé de la femme",
        "ECG · Biologie · Échographie",
      ],
      cta: "Vous êtes ici",
      ctaDisabled: true,
      highlight: true,
      href: null,
    },
    {
      id: "s2",
      badge: "Spécialisé — Dermatologie",
      titre: "DermatoBus",
      description:
        "Cabinet mobile dédié au dépistage du cancer de la peau. Dermatoscope IA, protocole dermatologues partenaires.",
      items: [
        "Dépistage cancer de la peau",
        "Dermatoscope numérique IA",
        "Protocole dermatologues partenaires",
        "Public : toute personne >18 ans",
      ],
      cta: "Découvrir le DermatoBus →",
      ctaDisabled: false,
      highlight: false,
      href: "/produits/dermatobus",
    },
    {
      id: "s3",
      badge: "Innovation — Cancer du sein",
      titre: "MammoBus",
      description:
        "Innovation unique en France : mammographie mobile dans une unité légère. Dépistage du cancer du sein partout.",
      items: [
        "Mammographie mobile légère",
        "Sage-femme + gynécologue",
        "Palpation mammaire · Frottis",
        "Public : femmes 18–75 ans",
      ],
      cta: "Découvrir le MammoBus →",
      ctaDisabled: false,
      highlight: false,
      href: "/produits/mammobus",
    },
  ],
};

// ─── Contenu SEO ──────────────────────────────────────────────────────────

export const seo = {
  eyebrow: "À propos du MédicoBus",
  h2: "MédicoBus : la réponse aux déserts médicaux français",
  left: {
    blocks: [
      {
        id: "l1",
        h3: "Pourquoi un cabinet médical mobile ?",
        paragraphe: {
          before: "Avec ",
          bold: "20 millions de Français en désert médical",
          after: ", les cabinets fixes ne peuvent plus répondre seuls à la demande. Le MédicoBus Hocoia apporte physiquement le cabinet là où il manque.",
        },
      },
      {
        id: "l2",
        h3: "Téléconsultation assistée vs télémédecine classique",
        paragraphe: {
          before: "Contrairement à une visioconférence simple, le MédicoBus combine ",
          bold: "présence humaine et outils numériques",
          after: ". Le patient est accompagné physiquement, ses constantes sont prises, ses examens réalisés.",
        },
      },
    ],
    liens: [
      "MédicoBus Grand Est →",
      "MédicoBus Moselle →",
      "Cabinet mobile Alsace →",
    ],
  },
  right: {
    h3: "Pour quels territoires et organisations ?",
    items: [
      {
        id: "r1",
        bold: "Collectivités",
        suite: " : communes rurales, communautés de communes sans médecin généraliste.",
      },
      {
        id: "r2",
        bold: "Entreprises",
        suite: " : bilans de prévention sur site, réduction de l'absentéisme, reporting anonymisé.",
      },
      {
        id: "r3",
        bold: "Établissements de santé",
        suite: " : extension de l'activité de dépistage hors les murs.",
      },
    ],
    liens: [
      "MédicoBus collectivités →",
      "MédicoBus entreprises →",
      "MédicoBus cardiologie →",
    ],
  },
};

// ─── FAQ ──────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "Questions fréquentes",
  h2: "Tout savoir sur le MédicoBus",
  subtitle:
    "Les questions spécifiques au MédicoBus. Pour les questions générales, consultez notre FAQ principale.",
  items: [
    {
      id: "q1",
      question: "C'est quoi un MédicoBus ?",
      answer:
        "Un cabinet médical mobile connecté de moins de 3,5 tonnes, conçu par Hocoia pour apporter des consultations de prévention dans les territoires sous-dotés. Il embarque 10+ dispositifs médicaux et combine présence humaine et téléconsultation assistée.",
    },
    {
      id: "q2",
      question: "Quels équipements médicaux sont embarqués ?",
      answer:
        "Selon la thématique : cardio (ECG, tensiomètre, mini-labo), dermatologie (dermatoscope IA), santé femme (frottis, palpation mammaire). Chaque bus est configuré sur-mesure.",
    },
    {
      id: "q3",
      question: "Quelles sont les contraintes pour accueillir un MédicoBus ?",
      answer:
        "(1) Emplacement suffisant pour manœuvrer. (2) Sol stable et plat. (3) Alimentation électrique à proximité (ou groupe électrogène Hocoia). Notre équipe valide l'emplacement lors du cadrage.",
    },
    {
      id: "q4",
      question: "Comment sont remis les résultats aux patients ?",
      answer:
        "Via HocoApp ou par courrier postal. Le compte-rendu est transmis au médecin traitant. En cas de résultat nécessitant un suivi, notre équipe médicale prend contact.",
    },
    {
      id: "q5",
      question: "Combien de temps dure une consultation ?",
      answer:
        "Entre 20 et 45 minutes selon la thématique. Un bilan cardiovasculaire dure ~30-35 min. Un dépistage cutané ~20 min. La santé de la femme 30-45 min.",
    },
    {
      id: "q6",
      question: "Comment déployer un MédicoBus dans ma commune ?",
      answer:
        "Contactez-nous via le formulaire en haut de page. Un expert vous rappelle sous 24h. Le déploiement se fait en moins de 3 semaines après validation.",
    },
  ],
};

// ─── CTA Final ────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Déployez un MédicoBus dans votre territoire.",
  subtitle:
    "Un expert vous présente la solution adaptée sous 24h. Ou prenez rendez-vous si vous êtes un patient.",
  ctaPrimary: "Demander une présentation",
  ctaOutline: "Prendre RDV patient →",
  ctaGhost: "Télécharger la brochure",
};
