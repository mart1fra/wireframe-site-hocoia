// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Hôpitaux · Cliniques · ESSMS",
  h1: [
    "Déployez votre action hors les murs grâce à votre propre bus médical.",
  ],
  subtitle:
    "Hocoia conçoit et vous livre un bus médical sur mesure, équipé pour les spécialités de votre établissement. Achat direct ou partenariat hospitalier long terme : la prévention devient une activité durable, intégrée à votre parcours patient.",
  pills: [
    { id: "p1", label: "Hôpitaux publics / CHU", active: true },
    { id: "p2", label: "Cliniques privées", active: false },
    { id: "p3", label: "ESSMS", active: false },
  ],
  checks: [
    "Bus médical sur mesure pour vos spécialités et vos protocoles",
    "Formation de vos équipes soignantes incluse à la livraison",
    "Intégration HocoApp + interface possible avec votre SIH/DPI",
    "Maintenance et support opérationnel assurés par Hocoia",
    "Achat direct, partenariat hospitalier ou leasing selon votre profil",
  ],
  ctaPrimary: "Étudier mon projet d'acquisition",
  ctaOutline: "Voir les configurations ↓",
  form: {
    title: "Étudier mon projet d'acquisition",
    subtitle:
      "Un expert Hocoia étudie votre projet d'acquisition. Étude de faisabilité offerte.",
    typeOptions: [
      "Hôpital public / CHU",
      "Clinique privée",
      "ESSMS (EHPAD, IME, FAM, MAS…)",
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
    cta: "Lancer l'étude de faisabilité →",
    note: "Sans engagement · Réponse <24h · Confidentiel",
  },
  partners: {
    label: "EN PARTENARIAT AVEC",
    items: [
      "CH Verdun",
      "Ramsay Santé",
      "Fondation ILDYS",
      "CH de Sully-sur-Loire",
      "Centre Hospitalier Sainte-Catherine Saverne",
    ],
  },
};

// ─── Chiffres ──────────────────────────────────────────────────────────────

export const stats = [
  { id: "s1", value: "20M",     label: "passages annuels dans les services d'urgences en France",                                      source: "DREES 2023" },
  { id: "s2", value: "280 000", label: "hospitalisations évitables par an grâce à une meilleure coordination en amont",               source: "ATIH / FHF-Ipsos" },
  { id: "s3", value: "49%",     label: "des Français ont déjà consulté aux urgences pour des raisons non urgentes",                   source: "Baromètre FHF-Ipsos 2026" },
  { id: "s4", value: "2 mois",  label: "délai de déploiement du premier bus dans votre établissement",                                source: "Hocoia" },
];

// ─── Use cases par type d'établissement ───────────────────────────────────

export const useCases = {
  tabs: [
    { id: "hopitaux",  label: "Hôpitaux publics & CHU",    sublabel: "Extension hors les murs" },
    { id: "cliniques", label: "Cliniques privées",          sublabel: "Offre de prévention différenciante" },
    { id: "ehpad",     label: "Etablissements médico-sociaux", sublabel: "Prévention sans déplacement pour un public fragilisé" },
  ],
  content: {
    hopitaux: {
      eyebrow: "",
      h2: "Étendez votre activité de soin et de prévention hors les murs",
      paragraphs: [
        "Les hôpitaux publics et CHU ont une mission de prévention et de santé publique qui dépasse les murs de l'établissement. Hocoia leur permet de rayonner sur leur territoire et contribuer à désaturer leurs services de consultations internes.",
        "Pour les services spécialisés (radiologie, cardiologie, dermatologie), le MammoBus ou MédicoBus constitue un outil d'extension d'activité, sans investissement en infrastructure.",
      ],
      features: [
        {
          id: "f1",
          title: "Rayonner sur votre territoire",
          description:
            "Déployez des actions de dépistage dans les communes sous-dotées de votre bassin de vie, sans alourdir vos services internes ni mobiliser vos équipes hospitalières.",
        },
        {
          id: "f2",
          title: "Renforcer votre mission de santé publique",
          description:
            "Contribuez à réduire les inégalités d'accès aux soins sur votre territoire, en complémentarité de votre activité hospitalière et de vos spécialités de référence.",
        },
        {
          id: "f3",
          title: "Valoriser l'expertise de vos spécialistes",
          description:
            "Vos médecins spécialistes interviennent en télé-expertise depuis le Médicobus, sans consultation physique supplémentaire. Leur expertise bénéficie aux populations les plus éloignées.",
        },
        {
          id: "f4",
          title: "Des données pour piloter et publier",
          description:
            "Chaque déploiement produit des données de santé populationnelle exploitables pour vos rapports d'activité, vos études épidémiologiques et vos publications scientifiques.",
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
      eyebrow: "",
      h2: "Différenciez votre offre avec la prévention embarquée",
      paragraphs: [
        "Les cliniques privées cherchent à se différencier par la qualité de leur offre de prévention. Proposer un programme de dépistage embarqué constitue un atout concurrentiel fort, sans mobiliser vos plateaux techniques.",
        "Hocoia déploie le MammoBus ou le MédicoBus dans votre cour ou parking, pour compléter votre offre sans mobiliser vos équipes.",
      ],
      features: [
        {
          id: "f1",
          title: "Enrichir votre offre sans mobiliser vos équipes",
          description:
            "Proposez à vos patients un programme de dépistage complémentaire sans occuper vos blocs, vos équipements ni vos soignants. Hocoia gère tout.",
        },
        {
          id: "f2",
          title: "Renforcer la fidélisation de vos patients",
          description:
            "Un service de prévention intégré à votre parcours patient renforce le lien de confiance et valorise l'engagement qualité de votre établissement.",
        },
        {
          id: "f3",
          title: "Se différencier sur un marché concurrentiel",
          description:
            "La prévention embarquée est un atout concurrentiel fort pour les cliniques qui souhaitent aller au-delà du soin curatif et attirer de nouveaux profils de patients.",
        },
        {
          id: "f4",
          title: "Des données pour valoriser votre activité",
          description:
            "Résultats agrégés, taux de participation, indicateurs de suivi : des données concrètes pour vos rapports d'activité, commissions médicales et certifications qualité.",
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
          { value: "100%",   label: "Résultats transmis dans les semaines suivantes" },
          { value: "2 mois", label: "Déploiement" },
        ],
        quote: {
          text: "On a pu proposer quelque chose de concret à nos patientes sans perturber notre organisation interne. C'est exactement ce que nous cherchions.",
          author: "Directrice médicale, Clinique partenaire",
        },
      },
    },
    ehpad: {
      eyebrow: "",
      h2: "La prévention vient à vos bénéficiaires, sans les déplacer",
      paragraphs: [
        "EHPAD, IME, FAM, MAS, SSIAD, résidences autonomie : vos bénéficiaires comptent parmi les publics les plus éloignés des soins de prévention. Le transport médicalisé est coûteux, souvent complexe à organiser, parfois refusé par les personnes elles-mêmes.",
        "Hocoia déploie une unité mobile directement dans votre établissement ou à proximité immédiate, avec des équipements adaptés aux personnes fragilisées, à mobilité réduite ou en situation de handicap.",
      ],
      features: [
        {
          id: "f1",
          title: "Accessibilité totale, quel que soit le public",
          description:
            "Rampe d'accès, espace de circulation adapté, accueil bienveillant : nos unités mobiles sont conçues pour recevoir des personnes à mobilité réduite, en situation de handicap ou fragiles, sans transfert complexe.",
        },
        {
          id: "f2",
          title: "Aucun transport médicalisé à organiser",
          description:
            "La prévention se déroule sur site, dans un cadre sécurisé et familier pour vos bénéficiaires. Économies immédiates sur les frais de transport, sans compromis sur la qualité du suivi.",
        },
        {
          id: "f3",
          title: "Résultats intégrés à votre suivi",
          description:
            "Les comptes-rendus sont transmis au médecin coordonnateur, au référent soignant et au médecin traitant. Aucune rupture dans le parcours de soin de vos bénéficiaires.",
        },
        {
          id: "f4",
          title: "Un programme adapté à votre projet d'établissement",
          description:
            "Hocoia construit avec vous un calendrier de déploiements sur l'année, ajusté à la nature de votre structure (hébergement, domicile, accueil de jour) et aux besoins spécifiques de votre public.",
        },
      ],
      ctaPrimary: "Demander une présentation",
      ctaOutline: "Voir le MammoBus →",
      caseStudy: {
        tag: "ESSMS · Cas terrain",
        h4: "Dépistage organisé pour des bénéficiaires sans accès aux soins courants",
        description:
          "Dans un établissement médico-social de 80 résidents, plus de 60 % n'avaient pas bénéficié d'un dépistage spécialisé depuis plusieurs années, faute de transport adapté. Le MammoBus a déployé sur site en demi-journée.",
        metrics: [
          { value: "24",   label: "Bénéficiaires dépistés en une journée" },
          { value: "0",    label: "Transport médicalisé à organiser" },
          { value: "100%", label: "Satisfaction exprimée" },
        ],
        quote: {
          text: "La majorité de nos résidents n'avaient pas été dépistés depuis des années. Le bus est venu à eux. Simple, efficace, et nos équipes n'ont rien eu à organiser.",
          author: "Directrice, ESSMS partenaire",
        },
      },
    },
  },
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
    subtitle: "Sur mesure · Sans engagement",
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
        { bold: "Devis détaillé",                        rest: " après le cadrage initial, équipements et protocole inclus." },
        { bold: "Conception complète du bus,",      rest: " équipements médicaux et intégration HocoApp." },
        { bold: "Accompagnement du déploiement",    rest: " jusqu'à la première journée patient sur site." },
      ],
    },
    ctaPrimary: "Discuter mon projet sur mesure →",
    ctaOutline: "Voir la LP achat bus",
    note: "Confidentiel",
  },
};

// ─── Processus ─────────────────────────────────────────────────────────────

export const processus = {
  eyebrow: "Comment cela se passe",
  h2: "Du premier contact au dépistage de vos patients, en 2 mois",
  subtitle:
    "Un processus sans friction, adapté aux contraintes des établissements de santé.",
  steps: [
    {
      id: "step1",
      number: "01",
      title: "Échange de cadrage",
      description:
        "Un expert Hocoia analyse votre contexte : type d'établissement, public cible, spécialités prioritaires (Dermatologie, Cardiologie, mammographie…) et contraintes logistiques.",
      delay: "Étape 1",
    },
    {
      id: "step2",
      number: "02",
      title: "Proposition adaptée",
      description:
        "Programme sur mesure, devis, protocole médical et modalités d'intégration à vos équipes et à votre circuit patient existant.",
      delay: "Étape 2",
    },
    {
      id: "step3",
      number: "03",
      title: "Convention & communication",
      description:
        "Convention de partenariat signée. Hocoia prépare les supports de communication patient : affiche, flyer, convocation.",
      delay: "Étape 3",
    },
    {
      id: "step4",
      number: "04",
      title: "Ouverture des inscriptions",
      description:
        "Prise de RDV via le tableau de bord ou par votre équipe. Possibilité d'intégrer vos spécialistes en télé-expertise sur les cas identifiés. Hocoia gère la coordination.",
      delay: "Étape 4",
    },
    {
      id: "step5",
      number: "05",
      title: "Déploiement & bilan",
      description:
        "Le Médicobus et l'équipe médicale s'installent sur site. Les comptes-rendus sont transmis à vos équipes et intégrés au DPI si souhaité. Rapport de participation livré sous 72h.",
      delay: "Étape 5",
    },
  ],
};

// ─── Témoignages ───────────────────────────────────────────────────────────

export const temoignages = {
  eyebrow: "",
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
  videoMeta: "Tournage février 2025 · CHU de Caen",
};

// ─── FAQ ───────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "",
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
        "Les comptes-rendus sont transmis via la plateforme au médecin traitant du patient et, si vous le souhaitez, à votre équipe médicale. Hocoia peut étudier une interface avec votre DPI pour les établissements qui souhaitent une intégration complète. Toutes les données sont hébergées en France (HDS certifié, RGPD).",
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

// ─── Modèles d'engagement ─────────────────────────────────────────────────

export const modeles = {
  eyebrow: "",
  h2: "Un bus médical configuré pour vos spécialités médicales",
  subtitle:
    "Acquérez un bus Hocoia équipé pour les spécialités de votre établissement et étendez votre activité hors les murs de façon pérenne. Ou testez le dispositif avec une prestation ponctuelle.",
  acquisition: {
    tag: "Sur mesure",
    title: "Un bus médical configuré pour vos spécialités médicales",
    description:
      "Acquérez un bus médical entièrement équipé pour les spécialités de votre établissement. Formation de vos équipes soignantes, intégration à votre SIH, maintenance assurée par Hocoia.",
    points: [
      "Bus configuré selon vos spécialités et protocoles médicaux",
      "Formation de vos équipes soignantes incluse",
      "Intégration possible à votre SIH",
      "Maintenance et support opérationnel Hocoia",
    ],
    cta: "Découvrir les configurations →",
  },
  prestation: {
    tag: "Clé en main",
    title: "Ou testez le dispositif avec une prestation Hocoia",
    description:
      "Hocoia intervient avec son propre bus et ses soignants pour un dépistage ponctuel dans votre établissement ou en dehors de vos murs.",
    specialites: ["Dermatologie", "Cardiologie", "Mammographie", "Bilan sanguin", "Gynécologie", "Ophtalmologie"],
    cta: "Organiser un dépistage →",
  },
};

// ─── Parcours patient ─────────────────────────────────────────────────────

export const parcoursPatient = {
  eyebrow: "Parcours patient",
  h2: "De l'inscription au suivi de soins",
  subtitle:
    "Le bus Hocoia prolonge l'activité de votre établissement hors les murs. Les résultats s'intègrent directement dans votre circuit patient existant.",
  steps: [
    {
      id: "s1",
      number: "01",
      delay: "Étape 1",
      title: "Orientation & inscription",
      description:
        "Le patient est orienté par l'établissement ou identifié dans la patientèle. La prise de RDV se fait via le tableau de bord, intégré au circuit d'orientation de votre établissement.",
    },
    {
      id: "s2",
      number: "02",
      delay: "Étape 2",
      title: "Dépistage mobile",
      description:
        "Examen réalisé par les équipes Hocoia ou vos propres soignants dans le Médicobus équipé. Protocoles médicaux validés par les comités scientifiques, premiers résultats immédiats pour certains examens.",
    },
    {
      id: "s3",
      number: "03",
      delay: "Étape 3",
      title: "Intégration au dossier patient",
      description:
        "Les résultats sont transmis à l'équipe médicale référente et intégrés dans le DPI de l'établissement si souhaité. Le dépistage devient une étape documentée du parcours de soins.",
    },
    {
      id: "s4",
      number: "04",
      delay: "Étape 4",
      title: "Coordination spécialisée",
      description:
        "En cas de dépistage positif, le patient est orienté directement vers les spécialistes de votre établissement dans le parcours de soins existant, sans rupture de continuité.",
    },
  ],
};

// ─── Achat sur mesure ─────────────────────────────────────────────────────

export const achatSurMesure = {
  eyebrow: "",
  h2: "Dotez votre établissement d'un bus médical",
  subtitle:
    "Hocoia intervient avec son propre bus médical, ou conçoit et livre le vôtre. À vous de choisir le modèle qui correspond à votre projet.",
  prestation: {
    tag: "Prestation",
    title: "Location / prestation ponctuelle",
    description:
      "Hocoia intervient avec son propre bus médical et ses soignants pour une journée ou une campagne dans votre établissement. Aucun investissement, organisation entièrement prise en charge.",
    points: [
      "Équipe médicale mise à disposition",
      "Idéal pour tester ou pour des campagnes ponctuelles",
      "Pas d'investissement initial",
    ],
    cta: "Organiser une journée →",
  },
  acquisition: {
    tag: "Acquisition · Recommandé",
    title: "Acquérir votre propre bus médical",
    description:
      "Hocoia conçoit, équipe et vous livre votre propre bus médical, ajusté à vos spécialités et vos protocoles. Votre établissement dispose d'un dispositif pérenne, intégré à votre parcours patient, à vos couleurs.",
    points: [
      "Bus sur mesure pour vos spécialités et vos protocoles",
      "Formation de vos équipes + maintenance Hocoia",
      "Achat direct, partenariat hospitalier ou leasing",
    ],
    cta: "Étudier mon projet d'acquisition →",
    ctaHref: "/acquerir-un-bus",
  },
};

// ─── CTA final ─────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Apportez la prévention directement à vos patients.",
  subtitle:
    "Un expert Hocoia spécialisé établissements de santé étudiera votre projet.",
  ctaPrimary: "Demander une présentation",
  ctaSecondary: "Télécharger la brochure",
  ctaTertiary: "Voir nos solutions →",
};

// ─── SEO ───────────────────────────────────────────────────────────────────

export const seoContent = {
  h2: "Achat de bus santé sur mesure pour établissements de santé et médico-social",
  intro: [
    "Hocoia accompagne les établissements de santé, structures médico-sociales, centres hospitaliers, cliniques et acteurs de la prévention dans l'achat de bus santé entièrement sur mesure. Ces dispositifs mobiles permettent de développer une offre de soins, de dépistage et de prévention directement au plus près des patients et des populations.",
    "Conçus comme de véritables espaces médicaux mobiles, nos bus santé s'adaptent à chaque spécialité et à chaque besoin terrain : prévention santé, dépistage mobile, consultations avancées ou actions médico-sociales.",
  ],
  blocs: [
    {
      h3: "Un bus santé 100 % personnalisé selon votre spécialité",
      paragraphs: [
        "Chaque projet de bus santé est conçu sur mesure afin de répondre aux exigences des professionnels de santé et des établissements médico-sociaux.",
        "Hocoia propose la conception de bus adaptés à différents usages : prévention des maladies cardiovasculaires, dépistage du cancer du sein, dépistage du cancer de la peau, santé de la femme, check-up santé, actions de santé publique, accompagnement médico-social.",
        "L'aménagement intérieur, les équipements médicaux, l'ergonomie des parcours patients et la configuration du véhicule sont entièrement personnalisés selon vos objectifs.",
      ],
    },
    {
      h3: "Une solution d'acquisition complète et clé en main",
      paragraphs: [
        "Hocoia accompagne les établissements de santé de la conception jusqu'à la livraison du bus santé : définition du besoin, design et conception sur mesure, aménagement médical, intégration des équipements, conformité et optimisation des usages terrain.",
        "L'objectif est de proposer un outil opérationnel, prêt à l'emploi et totalement adapté aux réalités du terrain.",
      ],
    },
    {
      h3: "Déployer des journées de prévention avec votre bus santé",
      paragraphs: [
        "Au-delà de l'acquisition, le bus santé peut devenir un véritable outil de déploiement de journées de prévention mobile.",
        "Les établissements peuvent ainsi organiser des campagnes régulières de prévention et de dépistage directement sur les territoires : interventions en zones rurales ou urbaines, actions de santé publique ciblées, campagnes de dépistage organisées, programmes de prévention récurrents, accès aux soins facilité pour les publics éloignés.",
        "Hocoia peut également accompagner les structures dans l'exploitation opérationnelle de ces dispositifs afin de maximiser leur impact sur le terrain.",
        "Grâce à cette approche, le bus santé devient un levier stratégique pour développer une offre de prévention mobile, accessible et durable.",
      ],
    },
  ],
};
