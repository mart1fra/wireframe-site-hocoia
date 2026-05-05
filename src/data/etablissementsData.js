// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Hôpitaux · Cliniques · EHPAD",
  h1: [
    "Apportez la prévention et le dépistage ",
    { italic: "directement à vos patients." },
  ],
  subtitle:
    "Hocoia déploie des unités médicales mobiles au sein de vos établissements, pour que vos résidents, patients et personnels bénéficient d'un dépistage de qualité sans avoir à se déplacer.",
  pills: [
    { id: "p1", label: "Hôpitaux publics / CHU", active: true },
    { id: "p2", label: "Cliniques privées", active: false },
    { id: "p3", label: "EHPAD", active: false },
  ],
  checks: [
    "Le bus vient dans votre établissement, zéro déplacement patient",
    "Soignants Hocoia à bord, aucune mobilisation de vos équipes",
    "Résultats transmis à votre équipe médicale via HocoApp",
    "Compatible parcours de soins existant, pas de rupture",
    "Déploiement en 2 mois, sans infrastructure supplémentaire",
  ],
  ctaPrimary: "Demander une présentation",
  ctaOutline: "Voir les solutions ↓",
  form: {
    title: "Demander une présentation",
    subtitle:
      "Un expert Hocoia spécialisé établissements de santé vous rappelle sous 24h.",
    typeOptions: [
      "Hôpital public / CHU",
      "Clinique privée",
      "EHPAD / Résidence senior",
      "Clinique SSR / Réadaptation",
      "Autre établissement de santé",
    ],
    fonctionOptions: [
      "Directeur / Directrice",
      "Directeur médical / CME",
      "Cadre de santé",
      "DRH",
      "Responsable prévention",
      "Autre",
    ],
    specialiteOptions: [
      "Dépistage cancer du sein",
      "Bilan cardiovasculaire",
      "Dépistage cancer peau",
      "Plusieurs spécialités",
      "À définir ensemble",
    ],
    cta: "Demander une présentation →",
    note: "Sans engagement · Réponse <24h · Confidentiel",
  },
  partners: {
    label: "EN PARTENARIAT AVEC",
    items: [
      "CHU de Caen",
      "Ministère des Affaires Étrangères",
      "Mutuelles MGEN",
      "Réseaux de soins régionaux",
    ],
  },
};

// ─── Chiffres ──────────────────────────────────────────────────────────────

export const stats = [
  { id: "s1", value: "1/8",    label: "femmes développera un cancer du sein, dont beaucoup de résidentes EHPAD non dépistées", source: "INCa" },
  { id: "s2", value: "70%",    label: "des résidents EHPAD n'ont pas accès aux spécialistes sans transport médicalisé",          source: "DREES" },
  { id: "s3", value: "95%",    label: "taux de survie cancer détecté au stade 1, la détection précoce sauve des vies",           source: "INCa" },
  { id: "s4", value: "0€",     label: "Coût pour le patient, pris en charge par l'établissement ou la mutuelle",                 source: "" },
  { id: "s5", value: "2 mois", label: "Délai de déploiement du premier bus dans votre établissement",                            source: "Hocoia" },
];

// ─── Use cases par type d'établissement ───────────────────────────────────

export const useCases = {
  tabs: [
    { id: "hopitaux",  label: "Hôpitaux publics & CHU",    sublabel: "Extension hors les murs · Partenariat CHU" },
    { id: "cliniques", label: "Cliniques privées",          sublabel: "Offre de prévention différenciante" },
    { id: "ehpad",     label: "EHPAD & résidences seniors", sublabel: "Dépistage pour résidents sans déplacement" },
  ],
  content: {
    hopitaux: {
      eyebrow: "Pour les hôpitaux & CHU",
      h2: "Étendez votre activité de prévention hors les murs",
      paragraphs: [
        "Les hôpitaux publics et CHU ont une mission de prévention et de santé publique qui dépasse les murs de l'établissement. Hocoia leur permet de rayonner sur leur territoire sans saturer leurs services de consultations externes.",
        "Pour les services spécialisés (radiologie, cardiologie, dermatologie), le MammoBus ou MédicoBus constitue un outil d'extension d'activité, sans investissement en infrastructure.",
      ],
      features: [
        {
          id: "f1",
          title: "Télé-expertise adossée à vos spécialistes",
          description:
            "Le protocole Hocoia peut intégrer vos médecins spécialistes en télé-expertise, renforçant votre partenariat CHU et valorisant votre expertise médicale.",
        },
        {
          id: "f2",
          title: "Résultats intégrés à votre système",
          description:
            "Les comptes-rendus sont transmis via HocoApp à vos équipes et au médecin traitant du patient. Aucune rupture dans le parcours de soins.",
        },
        {
          id: "f3",
          title: "Données pour vos études et publications",
          description:
            "Le partenariat CHU de Caen sur le DermatoBus inclut des études de validation scientifique. Hocoia est ouvert à des partenariats de recherche similaires.",
        },
        {
          id: "f4",
          title: "Mission santé publique renforcée",
          description:
            "Dépistage organisé du cancer du sein, cancer de la peau, prévention cardiovasculaire, dans les communes de votre territoire sans spécialiste.",
        },
      ],
      ctaPrimary: "Demander une présentation",
      ctaOutline: "Voir le DermatoBus →",
      caseStudy: {
        tag: "Partenariat CHU · Caen",
        h4: "CHU de Caen, partenaire scientifique du DermatoBus",
        description:
          "Le Dr Lorphelin, onco-dermatologue au CHU de Caen, préside le comité scientifique du DermatoBus Hocoia. Le CHU assure la télé-expertise finale et mène les études de validation du protocole sur le pilote Normandie.",
        metrics: [
          { value: "100%",       label: "Cas revus par onco-dermatologue CHU" },
          { value: "Automne 26", label: "Lancement pilote Normandie" },
          { value: "+2 depts",   label: "Orne & Eure desservis" },
        ],
        quote: {
          text: "Ce partenariat avec Hocoia nous permet d'étendre notre capacité d'expertise dermatologique à des territoires qui n'y ont jamais eu accès, sans mobiliser nos équipes sur le terrain.",
          author: "Dr Lorphelin, Onco-dermatologue, CHU de Caen",
        },
      },
    },
    cliniques: {
      eyebrow: "Pour les cliniques privées",
      h2: "Différenciez votre offre avec la prévention embarquée",
      paragraphs: [
        "Les cliniques privées cherchent à se différencier par la qualité de leur offre de soins. Proposer un programme de dépistage embarqué constitue un atout concurrentiel fort, sans mobiliser vos plateaux techniques.",
        "Hocoia déploie le MammoBus ou le MédicoBus dans votre cour ou parking, pour compléter votre offre sans mobiliser vos équipes.",
      ],
      features: [
        {
          id: "f1",
          title: "Valeur ajoutée sans charge opérationnelle",
          description:
            "Vous proposez à vos patients un dépistage de qualité supplémentaire, sans occuper vos blocs, vos équipements ni vos soignants.",
        },
        {
          id: "f2",
          title: "Intégration dans votre offre de soins",
          description:
            "Hocoia s'adapte à votre parcours patient existant : prescription interne, résultats transmis à votre équipe, communication aux patients de votre établissement.",
        },
        {
          id: "f3",
          title: "Opportunité de partenariat mutuelles",
          description:
            "Vos patients sont souvent couverts par des mutuelles partenaires. Hocoia peut faciliter le financement via ces mutuelles pour réduire votre reste à charge.",
        },
        {
          id: "f4",
          title: "Rapport de déploiement pour votre direction",
          description:
            "Données de participation et résultats agrégés pour vos rapports d'activité, commissions médicales et certifications qualité.",
        },
      ],
      ctaPrimary: "Demander une présentation",
      ctaOutline: "Voir le MammoBus →",
      caseStudy: {
        tag: "Clinique privée · Exemple",
        h4: "Comment une clinique a renforcé son offre sans investissement",
        description:
          "En intégrant le MammoBus Hocoia dans son calendrier annuel, une clinique spécialisée a pu proposer un programme de dépistage à ses patientes sans mobiliser ses équipes de radiologie.",
        metrics: [
          { value: "0 ETP",  label: "Équipes mobilisées" },
          { value: "100%",   label: "Résultats transmis en 72h" },
          { value: "2 mois", label: "Déploiement" },
        ],
        quote: {
          text: "On a pu proposer quelque chose de concret à nos patientes sans perturber notre organisation interne. C'est exactement ce que nous cherchions.",
          author: "Directrice médicale, Clinique partenaire",
        },
      },
    },
    ehpad: {
      eyebrow: "Pour les EHPAD & résidences seniors",
      h2: "Le dépistage vient aux résidents, sans les déplacer",
      paragraphs: [
        "Le transport médicalisé vers les spécialistes est un frein majeur pour les résidents EHPAD. Hocoia supprime ce frein en venant directement dans votre établissement, avec des équipements adaptés aux personnes à mobilité réduite.",
        "Le MammoBus et le MédicoBus sont équipés de rampes d'accès, d'espaces adaptés et de soignants formés à l'accueil de personnes fragilisées.",
      ],
      features: [
        {
          id: "f1",
          title: "Accessibilité totale, PMR inclus",
          description:
            "Rampe d'accès, espace de circulation adapté, assistance à bord : nos bus sont conçus pour accueillir des personnes à mobilité réduite sans transfert compliqué.",
        },
        {
          id: "f2",
          title: "Aucun transport médicalisé à organiser",
          description:
            "Économies immédiates sur les frais de transport médicalisé, sans pénaliser l'accès aux soins de vos résidents.",
        },
        {
          id: "f3",
          title: "Résultats transmis à votre équipe soignante",
          description:
            "Les comptes-rendus sont envoyés directement à votre médecin coordonnateur et au médecin traitant de chaque résident.",
        },
        {
          id: "f4",
          title: "Programme annuel de suivi",
          description:
            "Hocoia propose des programmes multi-journées sur l'année, idéal pour le suivi longitudinal des résidents, notamment pour le dépistage dermatologique.",
        },
      ],
      ctaPrimary: "Demander une présentation",
      ctaOutline: "Voir le MammoBus →",
      caseStudy: {
        tag: "EHPAD · Cas terrain",
        h4: "Dépistage cancer du sein pour des résidentes sans accès radiologue",
        description:
          "Dans un EHPAD de 80 résidentes, le dernier dépistage remontait à plus de 5 ans pour 60% d'entre elles, faute de transport adapté. Le MammoBus a déployé en demi-journée : 24 résidentes dépistées.",
        metrics: [
          { value: "24",   label: "Résidentes dépistées en 1 journée" },
          { value: "0",    label: "Transport médicalisé organisé" },
          { value: "100%", label: "Satisfaction exprimée" },
        ],
        quote: {
          text: "La majorité de nos résidentes n'avaient pas été dépistées depuis des années. Le bus est venu à elles. Simple, efficace, et nos équipes n'ont rien eu à gérer.",
          author: "Directrice, EHPAD partenaire",
        },
      },
    },
  },
};

// ─── Prévention sans déplacer ──────────────────────────────────────────────

export const prevention = {
  eyebrow: "Notre proposition de valeur",
  h2: "Vos patients restent chez eux. La prévention vient à eux.",
  intro:
    "Le premier frein au dépistage en établissement médicosocial, c'est le déplacement : coûteux, compliqué, parfois impossible pour des personnes fragiles. Hocoia supprime ce frein.",
  cards: [
    {
      id: "pv1",
      title: "Le bus vient à vous",
      description:
        "Le MammoBus, MédicoBus ou DermatoBus se déploie dans votre parking, votre cour ou votre entrée. Aucun transport patient à organiser.",
      detail: "Stationnement 9,96m · sol stable",
    },
    {
      id: "pv2",
      title: "Soignants inclus",
      description:
        "MERM, sage-femme, infirmière, médecin : Hocoia mobilise tous les professionnels nécessaires. Vos équipes ne sont pas sollicitées.",
      detail: "Réseau 120+ prestataires",
    },
    {
      id: "pv3",
      title: "Résultats à votre équipe",
      description:
        "Comptes-rendus transmis via HocoApp directement à votre équipe médicale et au médecin traitant. Intégration fluide dans le dossier patient.",
      detail: "HDS certifié · RGPD",
    },
    {
      id: "pv4",
      title: "Rapport pour votre direction",
      description:
        "Bilan de participation, taux de détection, satisfaction : un rapport anonymisé livré après chaque déploiement, utilisable dans votre rapport d'activité.",
      detail: "Données agrégées uniquement",
    },
  ],
};

// ─── Solutions ─────────────────────────────────────────────────────────────

export const solutions = {
  eyebrow: "Nos solutions",
  h2: "Quel bus pour votre établissement ?",
  subtitle:
    "Selon votre public et vos priorités de prévention, Hocoia déploie l'unité la plus adaptée, ou plusieurs en rotation sur l'année.",
  buses: [
    {
      id: "mammobus",
      badge: "MammoBus",
      title: "Dépistage cancer du sein",
      description:
        "Mammographie + échographie embarquées. 24 femmes par journée. Idéal pour les EHPAD avec une population féminine âgée, les services de gynécologie, les cliniques.",
      targets: ["EHPAD", "Cliniques", "CHU gynéco"],
      cta: "Voir le MammoBus →",
    },
    {
      id: "medicobus",
      badge: "MédicoBus",
      title: "Bilan cardiovasculaire & prévention",
      description:
        "ECG, tensiomètre, bilan sanguin rapide, consultation à distance. 10+ dispositifs. Pour les établissements qui veulent un check-up global ou une thématique cardiologique.",
      targets: ["Hôpitaux", "Cliniques SSR", "EHPAD"],
      cta: "Voir le MédicoBus →",
    },
    {
      id: "dermatobus",
      badge: "DermatoBus",
      title: "Dépistage cancer de la peau",
      description:
        "Cartographie corps entier + IA mélanome + télé-expertise CHU. En partenariat avec votre service dermatologie ou le CHU référent. Pilote Normandie automne 2026.",
      targets: ["CHU dermatologie", "Cliniques", "EHPAD 2026"],
      cta: "Voir le DermatoBus →",
    },
  ],
  surMesure: {
    title: "Un bus médical conçu pour votre établissement",
    subtitle: "Sur mesure · Devis sous 48h · Sans engagement",
    badge: "Sur mesure",
    description:
      "Votre établissement a des besoins spécifiques que nos modèles standards ne couvrent pas ? Hocoia conçoit l'unité mobile adaptée : équipements, aménagement intérieur, protocole et intégration HocoApp inclus.",
    specialties: [
      { id: "sp1", title: "Ophtalmologie",    description: "Réfractomètre, fond d'œil" },
      { id: "sp2", title: "Pneumologie",      description: "BPCO, apnée du sommeil" },
      { id: "sp3", title: "Bucco-dentaire",   description: "Zones sans dentiste, EHPAD" },
      { id: "sp4", title: "Santé mentale",    description: "Dépistage, orientation" },
      { id: "sp5", title: "Diabétologie",     description: "Bilans, suivi chronique" },
      { id: "sp6", title: "Autre spécialité", description: "Neurologie, nutrition…" },
    ],
    engagement: {
      title: "Notre engagement",
      promises: [
        { bold: "Étude de faisabilité offerte",    rest: " avec un expert Hocoia, sans engagement de votre part." },
        { bold: "Devis ferme sous 48h",             rest: " après le cadrage initial, équipements et protocole inclus." },
        { bold: "Conception complète du bus,",      rest: " équipements médicaux et intégration HocoApp." },
        { bold: "Accompagnement du déploiement",    rest: " jusqu'à la première journée patient sur site." },
      ],
    },
    ctaPrimary: "Discuter mon projet sur mesure →",
    ctaOutline: "Voir la LP achat bus",
    note: "Réponse sous 48h · Confidentiel",
  },
};

// ─── Processus ─────────────────────────────────────────────────────────────

export const processus = {
  eyebrow: "Comment ça se passe",
  h2: "Du premier contact au dépistage de vos patients, en 2 mois",
  subtitle:
    "Un processus sans friction, adapté aux contraintes des établissements de santé.",
  steps: [
    {
      id: "step1",
      number: "01",
      title: "Échange de cadrage",
      description:
        "30 min avec un expert Hocoia : type d'établissement, public cible, spécialité, contraintes logistiques.",
      delay: "J+2",
    },
    {
      id: "step2",
      number: "02",
      title: "Proposition adaptée",
      description:
        "Programme sur mesure selon votre contexte, devis, protocole médical, modalités d'intégration à vos équipes.",
      delay: "J+7",
    },
    {
      id: "step3",
      number: "03",
      title: "Convention & communication",
      description:
        "Convention de partenariat. Hocoia prépare les supports de communication patient (affiche, flyer, convocation).",
      delay: "J+14",
    },
    {
      id: "step4",
      number: "04",
      title: "Ouverture des inscriptions",
      description:
        "Prise de RDV via HocoApp ou par votre équipe. Liste transmise à Hocoia, on gère le reste.",
      delay: "J+30",
    },
    {
      id: "step5",
      number: "05",
      title: "Jour J + rapport",
      description:
        "Le bus arrive. Les soignants prennent en charge. Rapport + comptes-rendus transmis sous 72h.",
      delay: "J+60",
    },
  ],
};

// ─── Témoignages ───────────────────────────────────────────────────────────

export const temoignages = {
  eyebrow: "Ils en parlent",
  h2: "Ce que disent les professionnels qui nous font confiance",
  cards: [
    {
      id: "tm1",
      context: "Médecin · Moselle",
      quote:
        "Les outils Hocoia permettent de faire en mobilité ce qu'on ne peut faire habituellement qu'en cabinet. La prise en charge est vraiment complète.",
      name: "Dr Arous",
      role: "Médecin généraliste, Moselle",
    },
    {
      id: "tm2",
      context: "Coordinatrice CLS",
      quote:
        "Un bilan extrêmement positif, toutes les patientes ont exprimé leur satisfaction. Ce dispositif répond à un vrai besoin que nos structures ne peuvent pas couvrir seules.",
      name: "Anne Haller",
      role: "Coordinatrice Contrat Local de Santé",
    },
    {
      id: "tm3",
      context: "Institutionnel · Santé",
      quote:
        "L'organisation est remarquable, de la prise de RDV au déroulement. Ce concept permet un examen complet dans un cadre rassurant et professionnel.",
      name: "Claire Doucerain",
      role: "Responsable DSE, Ministère des AE",
    },
  ],
};

// ─── Vidéo témoignage ─────────────────────────────────────────────────────

export const videoTestimonial = {
  eyebrow: "Témoignage vidéo",
  title: "Le partenariat scientifique entre Hocoia et le CHU de Caen",
  paragraphs: [
    "Le Dr Lorphelin, onco-dermatologue au CHU de Caen, préside le comité scientifique du DermatoBus Hocoia. Il revient sur l'intérêt médical du protocole, la valeur de la cartographie corps entier et le rôle du CHU dans la télé-expertise.",
    "Une présentation médicale de référence pour tout établissement qui veut comprendre la rigueur scientifique du dispositif Hocoia.",
  ],
  quote:
    "Ce partenariat avec Hocoia nous permet d'étendre notre capacité d'expertise dermatologique à des territoires qui n'y ont jamais eu accès, sans mobiliser nos équipes sur le terrain.",
  quoteAuthor: "Dr Lorphelin, Onco-dermatologue CHU de Caen",
  videoLabel: "Présentation Dr Lorphelin · 5:20",
  videoMeta: "Tournage février 2025 — CHU de Caen",
};

// ─── FAQ ───────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "Questions fréquentes",
  h2: "Ce que se demandent les directeurs & médecins avant de se lancer",
  items: [
    {
      id: "q1",
      question: "Nos résidents sont âgés et fragiles, peuvent-ils passer dans le bus ?",
      answer:
        "Oui. Le MammoBus et le MédicoBus sont conçus pour accueillir des personnes à mobilité réduite : rampe d'accès, espace adapté, accompagnement par les soignants Hocoia. L'examen vient au patient, pas l'inverse : pour les résidents qui ne peuvent pas se déplacer, Hocoia adapte le protocole avec votre équipe soignante.",
    },
    {
      id: "q2",
      question: "Nos équipes médicales doivent-elles être mobilisées le jour J ?",
      answer:
        "Non. Hocoia fournit tous les professionnels de santé nécessaires : MERM, sage-femme, infirmière selon la spécialité. Votre équipe n'est mobilisée que si vous souhaitez un protocole d'articulation spécifique (ex. intégration des résultats dans le DPI de l'établissement).",
    },
    {
      id: "q3",
      question: "Comment les résultats sont-ils intégrés au dossier patient ?",
      answer:
        "Les comptes-rendus sont transmis via HocoApp au médecin traitant du patient et, si vous le souhaitez, à votre équipe médicale. Hocoia peut étudier une interface avec votre DPI pour les établissements qui souhaitent une intégration complète. Toutes les données sont hébergées en France (HDS certifié, RGPD).",
    },
    {
      id: "q4",
      question: "Qui finance le déploiement pour un EHPAD ou une clinique ?",
      answer:
        "Plusieurs modèles coexistent : l'établissement finance dans le cadre de son budget prévention ; la mutuelle des résidents peut couvrir tout ou partie ; ou un modèle sponsorisé mobilisant des partenaires institutionnels. Hocoia vous aide à identifier la meilleure option selon votre contexte.",
    },
    {
      id: "q5",
      question: "Peut-on organiser plusieurs journées par an dans notre établissement ?",
      answer:
        "Oui, c'est même recommandé, notamment pour le dépistage dermatologique où le suivi annuel est au cœur de la valeur médicale. Hocoia propose des programmes annuels multi-journées avec un prix dégressif. Idéal pour les EHPAD qui veulent un suivi régulier de leurs résidents.",
    },
  ],
};

// ─── CTA final ─────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Apportez la prévention directement à vos patients.",
  subtitle:
    "Un expert Hocoia spécialisé établissements de santé vous rappelle sous 24h.",
  ctaPrimary: "Demander une présentation",
  ctaSecondary: "Télécharger la brochure",
  ctaTertiary: "Voir nos solutions →",
};
