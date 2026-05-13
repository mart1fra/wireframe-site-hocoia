// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Entreprises & assureurs",
  h1: "Offrez à vos équipes une prévention santé sans friction.",
  subtitle:
    "Hocoia déploie des bus médicaux équipés directement dans vos locaux ou près de vos sites. Programme clé en main, résultats mesurables, pilotage simple.",
  checks: [
    "Zéro organisation côté RH, on gère tout",
    "Reporting anonymisé livré sous 72h en moyenne",
    "Conforme RGPD, données hébergées en France",
  ],
  ctaOutline: "Voir un cas client →",
  ctaGhost: "Télécharger le dossier",
  form: {
    title: "Parlons de votre projet",
    subtitle: "Un expert vous répond sous 24h.",
    cta: "Demander un rendez-vous →",
    note: "Sans engagement · Réponse sous 24h · RGPD",
    roleOptions: [
      "Entreprise / DRH",
      "Assureur / Mutuelle",
      "Collectivité / Territoire",
      "Hôpital / Clinique",
    ],
    sizeOptions: ["50–200 salariés", "200–1 000 salariés", "1 000+ salariés"],
    needOptions: ["Journée santé", "Programme annuel", "Démo produit"],
  },
};

// ─── Logos ────────────────────────────────────────────────────────────────

export const logos = {
  label: "+100 entreprises comme la vôtre nous font confiance",
  items: [
    "Veolia",
    "MGEN",
    "Région Grand Est",
    "AP-HP",
    "Harmonie Mutuelle",
    "CD 67",
    "Schneider Electric",
  ],
};

// ─── Use cases (onglets Entreprises / Assureurs) ──────────────────────────

export const useCases = {
  tabs: [
    { id: "entreprises", label: "Entreprises",          sublabel: "Solutions RH santé" },
    { id: "assureurs",   label: "Assureurs & mutuelles", sublabel: "Programmes de prévention adhérents" },
  ],
  content: {
    entreprises: {
      eyebrow: "Pour les entreprises",
      title: "Réduisez l'absentéisme, valorisez votre marque employeur",
      paragraphs: [
        "Vos collaborateurs font face à des délais de 3 à 6 mois chez les spécialistes. Hocoia contourne ces délais en venant directement à eux, sur leur lieu de travail. Résultat : une participation bien plus élevée, des bilans réalisés, un impact mesurable.",
      ],
      features: [
        {
          id: "f1",
          title: "Bus déployé sur site",
          description: "Notre bus s'installe sur votre parking. Vos collaborateurs consultent sur leur temps de travail.",
        },
        {
          id: "f2",
          title: "Dashboard & reporting",
          description: "Données anonymisées, tableaux de bord RH, résultats transmis par mail ou courrier dans les semaines suivantes.",
        },
        {
          id: "f3",
          title: "Conformité totale RGPD",
          description: "Hébergement HDS, données anonymisées, aucun accès employeur aux résultats individuels.",
        },
        {
          id: "f4",
          title: "Déploiement en 3 semaines",
          description: "De la signature au premier bus sur site en moins de 21 jours.",
        },
      ],
      ctaButtons: [
        { label: "Parler à un expert",     primary: true },
        { label: "Voir le cas Boardriders →", primary: false },
      ],
      caseCard: {
        tag: "Sport & outdoor · Industrie",
        title: "Comment Boardriders a déployé un programme de prévention pour ses collaborateurs",
        description: "Boardriders a organisé des journées de dépistage directement sur site avec le MédicoBus Hocoia. Organisation clé en main, zéro charge RH, résultats anonymisés.",
        metrics: [
          { value: "+3 000", label: "personnes dépistées (parc clients)" },
          { value: "4,8/5",  label: "satisfaction patients" },
          { value: "2 mois", label: "délai de déploiement" },
        ],
        ctaLabel: "Lire le cas complet →",
        quote: {
          text: "On pensait que l'organisation serait complexe. Hocoia a géré tout de A à Z. Nos managers n'ont rien eu à faire.",
          author: "Client Hocoia, entreprise industrielle",
        },
      },
    },
    assureurs: {
      eyebrow: "Pour les assureurs & mutuelles",
      title: "Faites de la prévention un service concret pour vos adhérents",
      paragraphs: [
        "Vos adhérents vivent souvent loin des spécialistes. Hocoia vous permet d'organiser des campagnes de dépistage directement dans leurs communes : la mutuelle invite ses adhérents, Hocoia déploie le bus, le dépistage est gratuit pour le patient.",
        "C'est une démarche de prévention proactive qui renforce la relation avec vos adhérents et alimente votre stratégie de santé populationnelle, avec des données anonymisées exploitables.",
      ],
      features: [
        {
          id: "fa1",
          title: "Tour des communes ou journée fixe",
          description: "Hocoia adapte le format : campagne sur plusieurs communes d'une région, ou journée concentrée sur un site partenaire.",
        },
        {
          id: "fa2",
          title: "Vos adhérents identifiés en priorité",
          description: "La mutuelle invite ses adhérents éligibles. Les créneaux leur sont réservés en priorité, le bus reste ouvert au public si capacité.",
        },
        {
          id: "fa3",
          title: "Données anonymisées pour vos études",
          description: "Taux de participation, résultats agrégés, satisfaction. Données utilisables pour vos rapports et votre politique santé.",
        },
        {
          id: "fa4",
          title: "Modèle économique flexible",
          description: "Forfait par journée, par adhérent dépisté, ou modèle mixte. Sponsoring possible avec d'autres partenaires institutionnels.",
        },
      ],
      ctaButtons: [
        { label: "Parler à un expert mutuelle",                    primary: true },
        { label: "Voir le cas Mutuelle Générale d'Avignon →",     primary: false },
      ],
      caseCard: {
        tag: "Mutuelle · Vaucluse",
        title: "Mutuelle Générale d'Avignon : 72 patientes dépistées à Pertuis",
        description: "La Mutuelle Générale d'Avignon a organisé 3 jours de dépistage dermatologique au CCAS de Pertuis avec le MédicoBus Hocoia. Créneaux remplis, satisfaction maximale, programme étendu sur l'année.",
        metrics: [
          { value: "72",   label: "patientes dépistées" },
          { value: "100%", label: "créneaux remplis" },
          { value: "12",   label: "mois reconduits" },
        ],
        ctaLabel: "Lire le cas complet →",
        quote: {
          text: "Ça apporte une sécurité aux gens de pouvoir ne pas attendre d'être malade pour consulter.",
          author: "Christophe Antonelli, Conseiller mutualiste",
        },
      },
    },
  },
};

// ─── Vidéo témoignage ─────────────────────────────────────────────────────

export const videoTestimonial = {
  eyebrow: "Témoignage vidéo",
  title: "Comment Boardriders a déployé une journée santé pour ses collaborateurs",
  paragraphs: [
    "Boardriders a organisé une journée de dépistage directement sur son site avec le MédicoBus Hocoia. Zéro mobilisation côté RH, et un reporting anonymisé qui alimente leur politique santé interne.",
    "Découvrez comment s'est déroulé le déploiement, le format choisi et les retours des collaborateurs.",
  ],
  quote:
    "Ce type d'offre répond à un vrai besoin.",
  quoteAuthor: "Client Hocoia",
  videoLabel: "Cas Boardriders · Retour d'expérience",
  videoMeta: "Tournage sur site — Entreprise Boardriders",
};

// ─── Chiffres clés ────────────────────────────────────────────────────────

export const stats = [
  { value: "–18 %",  label: "Absentéisme moyen",     source: "Données internes 2024" },
  { value: "×3",     label: "ROI moyen constaté",     source: "Étude interne 24 mois" },
  { value: "92 %",   label: "Satisfaction salariés",  source: "Post-bilan 2024" },
  { value: "3 sem.", label: "Délai de déploiement",   source: "Médiane contrats 2024" },
  { value: "80+",    label: "Structures partenaires", source: "Portefeuille actif" },
];

// ─── Avis clients entreprise ──────────────────────────────────────────────

export const avisClients = {
  eyebrow: "Témoignages",
  h2: "Entrepreneurs, DRH, Gestionnaires de paie : voici ce qu'ils préfèrent chez Hocoia",
  cards: [
    {
      id: "ac1",
      stars: "★★★★★",
      quote: "Pour nos équipes dispersées sur 4 sites, Hocoia a organisé des journées santé en moins d'un mois. Le reporting anonymisé nous donne enfin des données actionnables.",
      author: "Claire M.",
      role: "DRH, ETI industrielle · 1 200 salariés",
    },
    {
      id: "ac2",
      stars: "★★★★★",
      quote: "On a lancé le programme dans la foulée du COMEX. L'organisation a été prise en charge de A à Z par Hocoia, zéro charge côté RH. Je recommande à tout DAF qui veut un impact mesurable.",
      author: "Julien R.",
      role: "Directeur financier, PME · 450 salariés",
    },
    {
      id: "ac3",
      stars: "★★★★☆",
      quote: "La gestion de paie santé était un casse-tête. Avec Hocoia, tout est centralisé, la paperasse est gérée en amont. Nos salariés sont ravis.",
      author: "Sophie T.",
      role: "Gestionnaire de paie, Groupe services · 800 salariés",
    },
  ],
};

// ─── Processus ────────────────────────────────────────────────────────────

export const processus = {
  eyebrow: "Notre méthode",
  h2: "De la prise de contact au premier bilan en 4 semaines",
  steps: [
    {
      id: "s1",
      number: "01",
      day: "Jour 1",
      title: "Échange de cadrage",
      description:
        "Un expert Hocoia analyse vos besoins, vos effectifs et vos contraintes logistiques.",
    },
    {
      id: "s2",
      number: "02",
      day: "J+5",
      title: "Proposition sur-mesure",
      description:
        "Programme adapté, devis détaillé, planning indicatif sur-mesure pour votre structure.",
    },
    {
      id: "s3",
      number: "03",
      day: "J+10",
      title: "Signature & logistique",
      description:
        "Contrat signé, communication interne préparée, logistique bus planifiée avec votre équipe.",
    },
    {
      id: "s4",
      number: "04",
      day: "J+28",
      title: "Premier bus sur site",
      description:
        "Lancement du programme, prise en charge totale par Hocoia, premiers bilans réalisés.",
    },
  ],
};

// ─── Ressources ───────────────────────────────────────────────────────────

export const ressources = {
  eyebrow: "Ressources",
  h2: "Préparez votre décision",
  cards: [
    {
      id: "r1",
      type: "Livre blanc",
      title: "Prévention en entreprise : quel ROI attendre en 12 mois ?",
      meta: "PDF · 24 pages",
    },
    {
      id: "r2",
      type: "Cas client",
      title: "Veolia Alsace : –18 % d'absentéisme avec Hocoia",
      meta: "Étude de cas · 8 pages",
    },
    {
      id: "r3",
      type: "Guide",
      title:
        "Comment convaincre votre COMEX d'investir dans la prévention santé",
      meta: "PDF · 12 pages",
    },
    {
      id: "r4",
      type: "Podcast",
      title: "Santé au travail : les nouvelles obligations DRH 2025",
      meta: "28 min",
    },
    {
      id: "r5",
      type: "Webinaire",
      title: "Déployer un programme santé salarié : retour à 3 voix",
      meta: "Replay · 45 min",
    },
    {
      id: "r6",
      type: "Étude",
      title: "Déserts médicaux & entreprises : nouvelles solutions 2025",
      meta: "Rapport · 18 pages",
    },
  ],
};

// ─── FAQ ──────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "Questions fréquentes",
  h2: "Ce que se demandent les DRH avant de démarrer",
  items: [
    {
      id: "q1",
      question: "Quelle charge de travail pour nos équipes RH ?",
      answer:
        "Quasi nulle. Hocoia gère l'intégralité de l'organisation : logistique, communication interne, prise de RDV, bilan.",
    },
    {
      id: "q2",
      question: "Comment sont protégées les données de santé ?",
      answer:
        "Hébergement certifié HDS, conformité RGPD totale, données anonymisées. Aucun résultat individuel transmis à l'employeur.",
    },
    {
      id: "q3",
      question: "Quel est le coût minimum ?",
      answer:
        "Programmes disponibles à partir de 50 salariés. Devis personnalisé sous 48h.",
    },
    {
      id: "q4",
      question: "Peut-on cibler certaines spécialités ?",
      answer:
        "Oui, 12 spécialités disponibles : cardio, dermato, mammographie, bilan sanguin, etc.",
    },
  ],
};

// ─── CTA final ────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Prêt à déployer Hocoia dans votre structure ?",
  subtitle: "Un expert vous rappelle sous 24h. Sans engagement.",
  ctaPrimary: "Demander un rendez-vous",
  ctaSecondary: "Télécharger le dossier complet",
};
