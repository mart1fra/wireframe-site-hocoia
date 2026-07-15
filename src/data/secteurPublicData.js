// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "",
  h1: [
    "Renforcez la prévention santé dans ",
    { italic: "votre territoire" },
    " sans charge opérationnelle.",
  ],
  subtitle:
    "Hocoia déploie des unités médicales mobiles dans les déserts médicaux, les communes rurales et les zones sous-dotées. Clé en main, certifié et finançable.",
  pills: [
    { id: "p1", label: "Collectivités", active: true },
    { id: "p2", label: "CPTS / MSP", active: false },
    { id: "p3", label: "Acteurs locaux", active: false },
  ],
  checks: [
    "Aucune infrastructure à construire, le bus vient à vous",
    "Pas de gestion RH, professionnels de santé fournis",
    "Compatible CLS, ARS, fonds régionaux de santé",
    "Données anonymisées pour le pilotage territorial",
  ],
  ctaPrimary: "Parler à un expert territorial",
  ctaOutline: "Télécharger le dossier ↓",
  form: {
    title: "Parler à un expert territorial",
    subtitle: "Un expert Hocoia spécialisé secteur public étudiera votre projet.",
    roleOptions: [
      "Collectivité / Commune / CC",
      "Département / Région",
      "CPTS / MSP",
      "Hôpital / CHU / EHPAD",
      "ARS / Agence publique",
      "Autre institution",
    ],
    needOptions: [
      "Dépistage cancer du sein",
      "Bilan cardiovasculaire",
      "Dépistage cancer peau",
      "Médecine générale / check-up",
      "Plusieurs spécialités",
      "Je ne sais pas encore",
    ],
    cta: "Demander un échange →",
    note: "Sans engagement · Confidentiel",
  },
  trust: {
    label: "ILS NOUS FONT CONFIANCE",
    items: [
      "CPTS du Grand Agenais",
      "Mairie de Montvalezan",
      "Sarreguemines Confluences",
      "Mairie de Saint-Hilaire-Peyroux",
      "Mairie d'Oberhergheim",
      "Mairie de Decize",
      "Pays de Valençay en Berry",
    ],
  },
};

// ─── Chiffres ──────────────────────────────────────────────────────────────

export const stats = [
  { id: "s1", value: "20M",     label: "Français vivent en désert médical",                source: "DREES 2023" },
  { id: "s2", value: "<5",      label: "Dermatologues dans l'Orne ou l'Eure",              source: "DREES 2023" },
  { id: "s3", value: "18 mois", label: "Délai moyen de rendez-vous spécialiste en zone rurale",       source: "CNOM 2023" },
  { id: "s4", value: "2 mois",  label: "Délai MOYEN de déploiement Hocoia sur votre territoire", source: "Hocoia" },
];

// ─── Use cases par type d'organisation ────────────────────────────────────

export const useCases = {
  tabs: [
    {
      id: "collectivites",
      label: "Collectivités & territoires",
      sublabel: "Communes · CC · Départements",
    },
    {
      id: "cpts",
      label: "CPTS",
      sublabel: "CPTS · MSP · Réseaux de santé",
    },
  ],
  content: {
    collectivites: {
      eyebrow: "",
      h2: "Désenclavez votre territoire sans construire",
      paragraphs: [
        "Les déserts médicaux touchent de plein fouet les communes rurales et les communautés de communes. Hocoia apporte physiquement les soins là où les cabinets médicaux manquent, sans qu'aucune infrastructure permanente ne soit nécessaire.",
        "Un bus Hocoia dans votre commune, c'est une réponse concrète, visible, immédiate à l'une des premières préoccupations de vos habitants.",
      ],
      features: [
        {
          id: "f1",
          title: "Renforcer l'accès aux soins de vos habitants",
          description:
            "Un service de santé concret et visible, directement dans votre commune. Une réponse immédiate à l'une des premières préoccupations de vos habitants.",
        },
        {
          id: "f2",
          title: "Réduire les inégalités de santé sur votre territoire",
          description:
            "Hocoia cible en priorité les zones sous-dotées. Chaque déploiement contribue à rééquilibrer l'offre de soins localement.",
        },
        {
          id: "f3",
          title: "Valoriser votre engagement en santé publique",
          description:
            "Un programme de prévention co-porté avec Hocoia renforce votre image d'élu engagé sur les enjeux de santé de vos habitants.",
        },
        {
          id: "f4",
          title: "Un impact mesurable pour vos rapports",
          description:
            "Données de participation et résultats agrégés livrés après chaque déploiement, prêts pour vos appels à projets et rapports ARS.",
        },
      ],
      ctaPrimary: "Parler à un expert territorial",
      ctaOutline: "Voir nos cas clients →",
      caseStudy: {
        tag: "Élu · Angerville",
        h4: "Comment Angerville a renforcé la prévention santé de ses habitants",
        description:
          "La commune d'Angerville souffrait d'un sous-équipement médical chronique. Un partenariat avec Hocoia a permis de déployer des journées de prévention régulières, désengorgeant les cabinets alentour pour les pathologies bénignes.",
        metrics: [
          { value: "100%",   label: "Créneaux remplis" },
          { value: "0€",     label: "Coût patient" },
          { value: "2 mois", label: "Déploiement" },
        ],
        quote: {
          text: "Il ne s'agit pas de remplacer les médecins, mais de proposer une offre complémentaire qui renforce l'accès aux soins localement tout en désengorgeant les cabinets.",
          author: "Johann Mittelhausser, Maire d'Angerville",
        },
      },
    },
    cpts: {
      eyebrow: "",
      h2: "Renforcez votre offre sans surcharger vos équipes",
      paragraphs: [
        "Les CPTS et MSP font face à une demande croissante que leurs équipes ne peuvent pas toujours absorber. Hocoia vient en complément de votre exercice, avec des spécialités et des programmes de prévention que vous ne proposez pas encore en interne.",
        "Un partenariat avec Hocoia, c'est étendre votre couverture territoriale sans recruter, sans investir en équipement, avec des données partagées pour le suivi de population.",
      ],
      features: [
        {
          id: "f1",
          title: "Étendre votre offre de soins sans recruter",
          description:
            "Dermatologie, Cardiologie, mammographie : Hocoia apporte les spécialités que votre territoire ne couvre pas encore, sans aucune charge RH pour vos équipes.",
        },
        {
          id: "f2",
          title: "Répondre à la demande sans surcharger vos praticiens",
          description:
            "Hocoia absorbe le volume de dépistage spécialisé sans ajouter de charge à vos médecins et soignants libéraux.",
        },
        {
          id: "f3",
          title: "Améliorer le suivi de santé populationnelle",
          description:
            "Les résultats agrégés s'intègrent à votre tableau de bord et alimentent votre stratégie de santé de territoire.",
        },
        {
          id: "f4",
          title: "Renforcer l'attractivité de votre territoire",
          description:
            "Un partenariat Hocoia signale un territoire organisé, structuré et capable d'innover dans l'accès aux soins.",
        },
      ],
      ctaPrimary: "Parler à un expert territorial",
      ctaOutline: "Voir nos cas clients →",
      caseStudy: {
        tag: "CPTS · Partenariat type",
        h4: "Comment une CPTS a étendu son offre de prévention sans effort supplémentaire",
        description:
          "En s'appuyant sur Hocoia pour les journées de dépistage spécialisé, la CPTS a pu proposer des programmes de prévention à ses patients sans surcharger ses équipes ni recruter de nouveaux soignants.",
        metrics: [
          { value: "3",      label: "Spécialités nouvelles" },
          { value: "0 ETP",  label: "Recrutement" },
          { value: "2 mois", label: "Déploiement" },
        ],
        quote: {
          text: "Hocoia nous permet d'aller au-delà de ce que nos équipes peuvent proposer seules, sans aucune charge organisationnelle supplémentaire.",
          author: "Coordonnateur, CPTS partenaire",
        },
      },
    },
  },
};

// ─── Zéro charge ───────────────────────────────────────────────────────────

export const zeroCharge = {
  eyebrow: "",
  h2: "Vous n'avez rien à gérer. C'est notre rôle.",
  intro:
    "La principale objection des collectivités et acteurs locaux face à la santé de proximité, c'est la complexité opérationnelle. Hocoia l'a conçu pour que vous n'ayez aucun de ces problèmes.",
  cards: [
    {
      id: "zc1",
      title: "Le bus",
      description:
        "Hocoia fournit, entretient et déplace le bus. Vous définissez le lieu et la date, on s'occupe du reste.",
      detail: "Aucun investissement matériel",
    },
    {
      id: "zc2",
      title: "Les soignants",
      description:
        "Médecins, infirmières, sages-femmes, MERM : Hocoia recrute, planifie et remplace. Pas de gestion RH médicale.",
      detail: "Réseau de 120+ prestataires",
    },
    {
      id: "zc3",
      title: "La coordination",
      description:
        "Prise de rendez-vous, invitation des patients, communication locale, gestion des annulations : tout dans HocoApp.",
      detail: "Flyer, courrier, SMS, on gère",
    },
    {
      id: "zc4",
      title: "Le reporting",
      description:
        "Rapport anonymisé livré après chaque déploiement : participation, résultats agrégés, satisfaction patients.",
      detail: "Prêt pour vos appels à projets",
    },
  ],
};

// ─── Processus ─────────────────────────────────────────────────────────────

export const processus = {
  eyebrow: "Comment cela se passe",
  h2: "De votre premier contact au premier patient, en 2 mois",
  subtitle:
    "Un processus structuré, avec Hocoia en chef de projet. Vous validez, on exécute.",
  steps: [
    {
      id: "step1",
      number: "01",
      title: "Échange de cadrage",
      description:
        "Un expert territorial Hocoia analyse votre contexte : zone géographique, spécialités prioritaires, public cible et contraintes logistiques.",
      delay: "Étape 1",
    },
    {
      id: "step2",
      number: "02",
      title: "Proposition sur mesure",
      description:
        "Programme personnalisé, planning prévisionnel, devis ferme et options de financement. Intégration dans votre CLS si nécessaire.",
      delay: "Étape 2",
    },
    {
      id: "step3",
      number: "03",
      title: "Signature & communication",
      description:
        "Convention ou bon de commande. Hocoia prépare la communication patient.",
      delay: "Étape 3",
    },
    {
      id: "step4",
      number: "04",
      title: "Ouverture des inscriptions",
      description:
        "Ouverture des créneaux en ligne ou par téléphone. La gestion des inscriptions est assurée intégralement par Hocoia, avec confirmation transmise à votre équipe.",
      delay: "Étape 4",
    },
    {
      id: "step5",
      number: "05",
      title: "Déploiement & bilan",
      description:
        "Le Médicobus et l'équipe médicale Hocoia s'installent sur site. Un rapport anonymisé est transmis sous 72h à l'issue de la journée.",
      delay: "Étape 5",
    },
  ],
};

// ─── Financements ──────────────────────────────────────────────────────────

export const financements = {
  eyebrow: "",
  h2: "Des dispositifs de financement adaptés au secteur public",
  subtitle:
    "Hocoia vous accompagne dans l'identification et le montage des financements existants : CLS, ARS, fonds régionaux, DETR.",
  cards: [
    {
      id: "fi1",
      title: "Contrat Local de Santé (CLS)",
      description:
        "Le déploiement Hocoia est compatible avec les objectifs des CLS : accès aux soins, prévention, réduction des inégalités territoriales de santé. Hocoia fournit les éléments pour votre dossier.",
      badge: "CLS compatible",
    },
    {
      id: "fi2",
      title: "Fonds ARS & PRAPS",
      description:
        "Les Agences Régionales de Santé financent les actions de prévention et de dépistage en zones déficitaires. Hocoia peut vous appuyer dans la rédaction du dossier de demande.",
      badge: "Éligible PRAPS",
    },
    {
      id: "fi3",
      title: "Sponsoring institutionnel",
      description:
        "Pour les programmes de plus grande ampleur, Hocoia peut mobiliser des sponsors institutionnels (mutuelles, laboratoires) qui réduisent le reste à charge pour la collectivité.",
      badge: "Jusqu'à 200k€/an",
    },
  ],
};

// ─── Témoignages ───────────────────────────────────────────────────────────

export const temoignages = {
  eyebrow: "",
  h2: "Ce que disent les élus et directeurs qui ont choisi Hocoia",
  row1: [
    {
      id: "tm1",
      context: "Élu · CC Pays de Phalsbourg",
      quote:
        "Les créneaux ont tous trouvé preneur, y compris en fin d'année. Toutes les conditions étaient réunies pour faire de cette journée un franc succès.",
      name: "Christian Untereiner",
      role: "Président, CC Pays de Phalsbourg",
    },
    {
      id: "tm2",
      context: "Élu · CC Sarrebourg Moselle Sud",
      quote:
        "Cette initiative, mise en place rapidement, remporte un franc succès : des créneaux pleins, captant même l'intérêt spontané de personnes en plein quotidien.",
      name: "Roland Klein",
      role: "Président, CC Sarrebourg Moselle Sud",
    },
    {
      id: "tm3",
      context: "Collectivité · Val de Fensch",
      quote:
        "On ne disposait plus de dermatologues dans notre zone. Hocoia a organisé 3 jours de dépistage. Nous sommes très satisfaits de cette initiative.",
      name: "Jean-Pierre Cerbai",
      role: "Chargé de la santé, Val de Fensch",
    },
  ],
};

// ─── Ressources ────────────────────────────────────────────────────────────

export const ressources = {
  eyebrow: "",
  h2: "Préparez votre dossier & convainquez en interne",
  subtitle:
    "Contenus pensés pour les décideurs publics : DGS, conseils municipaux, commissions santé.",
  cards: [
    {
      id: "r1",
      type: "Livre blanc",
      title: "Déserts médicaux & collectivités : quelles solutions pour 2025–2030 ?",
      meta: "PDF · 28 pages",
    },
    {
      id: "r2",
      type: "Cas client",
      title: "Comment la CC Pays de Phalsbourg a déployé un dépistage cardio en 6 semaines",
      meta: "Étude de cas · 6 pages",
    },
    {
      id: "r3",
      type: "Guide financement",
      title: "Financer un programme de santé mobile via CLS et fonds ARS : guide pratique",
      meta: "PDF · 14 pages",
    },
    {
      id: "r4",
      type: "Cas client",
      title: "Val de Fensch : 3 jours de dépistage dermatologique dans une zone sans dermatologue",
      meta: "Étude de cas · 5 pages",
    },
    {
      id: "r5",
      type: "Modèle de convention",
      title: "Modèle de convention de partenariat collectivité × Hocoia, à adapter selon votre territoire",
      meta: "Modèle Word · personnalisable",
    },
    {
      id: "r6",
      type: "Webinaire",
      title: "Santé mobile en territoire rural : retours d'élus et de directeurs de CPTS",
      meta: "Replay · 45 min",
    },
  ],
};

// ─── Vidéo témoignage ─────────────────────────────────────────────────────

export const videoTestimonial = {
  eyebrow: "Témoignage vidéo",
  title: "Comment la CC Pays de Phalsbourg a déployé un dépistage en 6 semaines",
  paragraphs: [
    "La Communauté de communes du Pays de Phalsbourg a déployé un programme de dépistage cardiovasculaire en moins de 6 semaines. Christian Untereiner, président, revient sur la décision, le montage du financement via le CLS et les retours du terrain.",
    "Un retour d'expérience concret pour toute collectivité qui hésite encore à se lancer dans la santé mobile sur son territoire.",
  ],
  quote:
    "Les créneaux ont tous trouvé preneur, y compris en fin d'année. Toutes les conditions étaient réunies pour faire de cette journée un franc succès.",
  quoteAuthor: "Christian Untereiner, Président CC Pays de Phalsbourg",
  videoLabel: "Cas CC Pays de Phalsbourg · 4:10",
  videoMeta: "Tournage mars 2025 · Pays de Phalsbourg, Moselle",
};

// ─── FAQ ───────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "",
  h2: "Ce que se demandent les élus & directeurs avant de se lancer",
  items: [
    {
      id: "q1",
      question: "Quels publics peuvent être concernés par les campagnes de prévention ?",
      answer:
        "Les journées de prévention peuvent être organisées pour différents publics : habitants, agents territoriaux, étudiants, publics prioritaires, seniors, populations éloignées des structures médicales.",
    },
    {
      id: "q2",
      question: "Les campagnes de prévention peuvent-elles être organisées dans des zones rurales ou éloignées ?",
      answer:
        "Les dispositifs mobiles Hocoia sont conçus pour intervenir aussi bien en centre-ville que dans les territoires ruraux, les quartiers prioritaires ou les zones ayant un accès limité aux infrastructures de santé. Les collectivités et acteurs locaux peuvent choisir les secteurs, communes ou quartiers concernés afin d'adapter les actions de prévention aux besoins du territoire.",
    },
    {
      id: "q3",
      question: "Comment sont gérées les inscriptions aux journées de prévention ?",
      answer:
        "Les collectivités gardent une maîtrise complète des inscriptions et des publics ciblés. Hocoia vous accompagne sur la gestion opérationnelle avec la création de lien de prise de rendez-vous et support téléphonique pour inscription, et la communication autour des événements.",
    },
    {
      id: "q4",
      question: "Les dispositifs mobiles peuvent-ils être utilisés lors d'événements publics ?",
      answer:
        "Oui. Les solutions Hocoia peuvent être intégrées à des forums santé, villages prévention, événements institutionnels, campagnes de santé publique ou actions locales de sensibilisation.",
    },
    {
      id: "q5",
      question: "Est-il possible de mettre en place un programme de prévention récurrent ?",
      answer:
        "Oui. Hocoia accompagne les collectivités dans la mise en place de programmes de prévention réguliers afin d'inscrire les actions de santé publique dans la durée.",
    },
    {
      id: "q6",
      question: "Peut-on créer un bus de prévention entièrement personnalisé ?",
      answer:
        "Oui. Hocoia propose la conception de bus de prévention santé sur mesure avec des aménagements adaptés aux objectifs de santé publique, aux équipements médicaux souhaités et aux contraintes du territoire.",
    },
    {
      id: "q7",
      question: "Qui finance les campagnes ?",
      answer:
        "Le financement dépend du modèle retenu : collectivité, partenaire institutionnel, mutuelle ou montage hybride. Hocoia vous accompagne dans l'identification des financements disponibles (CLS, ARS, DETR).",
    },
    {
      id: "q8",
      question: "Faut-il recruter des professionnels de santé ?",
      answer:
        "Non. Hocoia fournit l'intégralité des professionnels de santé nécessaires à la campagne. Aucun recrutement de votre côté.",
    },
    {
      id: "q9",
      question: "Comment informer les habitants ?",
      answer:
        "Des outils de communication et d'inscription peuvent être mis en place selon vos canaux habituels. Hocoia vous fournit les éléments de langage, visuels et supports adaptés.",
    },
  ],
};

// ─── Modèles d'engagement ─────────────────────────────────────────────────

export const modeles = {
  eyebrow: "",
  h2: "Un bus médical configuré pour votre territoire",
  subtitle:
    "Dotez votre territoire d'un bus médical en propre pour un service de santé mobile pérenne. Ou lancez-vous avec une prestation ponctuelle clé en main.",
  acquisition: {
    tag: "Sur mesure",
    title: "Un bus médical configuré pour votre territoire",
    description:
      "Acquérez un bus médical équipé pour les spécialités dont vos habitants ont besoin, aux couleurs de votre collectivité. Déployable commune par commune, éligible aux financements publics.",
    points: [
      "Spécialités configurées selon les besoins de santé du territoire",
      "Propriété de la collectivité ou de l'intercommunalité",
      "Éligible aux financements publics et subventions d'investissement",
      "Opérable avec vos propres soignants ou via Hocoia",
    ],
    cta: "Découvrir les configurations →",
  },
  prestation: {
    tag: "Clé en main",
    title: "Ou commencez par une prestation Hocoia",
    description:
      "Hocoia déploie un bus sur votre territoire pour une campagne ponctuelle. Organisation complète, compatible financements ARS et CPAM.",
    specialites: ["Dermatologie", "Cardiologie", "Mammographie", "Bilan sanguin", "Gynécologie", "Ophtalmologie"],
    cta: "Organiser une campagne →",
  },
};

// ─── Parcours patient ─────────────────────────────────────────────────────

export const parcoursPatient = {
  eyebrow: "Parcours patient",
  h2: "De l'inscription au suivi de soins",
  subtitle:
    "Pour vos habitants, un accès aux soins sans contrainte. Pour votre territoire, des données de santé publique pour piloter votre politique de prévention.",
  steps: [
    {
      id: "s1",
      number: "01",
      delay: "Étape 1",
      title: "Découverte & inscription",
      description:
        "L'habitant voit l'annonce (flyer, affiche mairie, réseaux locaux) et prend rendez-vous via l'application ou QR code sans création de compte complexe.",
    },
    {
      id: "s2",
      number: "02",
      delay: "Étape 2",
      title: "Dépistage au plus près des habitants",
      description:
        "Le Médicobus se déplace dans la commune, sur la place du marché ou devant la mairie. Examen complet en 20 à 30 minutes.",
    },
    {
      id: "s3",
      number: "03",
      delay: "Étape 3",
      title: "Résultats & compte rendu",
      description:
        "L'habitant reçoit ses résultats sur son tableau de bord sous 48–72h. Un compte rendu est transmis à son médecin traitant pour assurer la continuité du suivi.",
    },
    {
      id: "s4",
      number: "04",
      delay: "Étape 4",
      title: "Suivi & parcours de soins",
      description:
        "En cas de dépistage positif, Hocoia coordonne l'orientation vers les acteurs de soins locaux. Le dépistage s'intègre au parcours de soins du patient.",
    },
  ],
};

// ─── SEO ───────────────────────────────────────────────────────────────────

export const seoContent = {
  h2: "Prévention santé mobile pour les collectivités et acteurs locaux",
  intro: [
    "Hocoia accompagne les collectivités, acteurs locaux et acteurs publics dans la mise en place de solutions mobiles de prévention santé et de dépistage partout en France.",
    "Grâce à nos dispositifs clé en main, nous organisons des journées de prévention directement au plus près des citoyens, des agents et des publics ciblés afin de faciliter l'accès au dépistage et renforcer les actions de santé publique.",
  ],
  blocs: [
    {
      h3: "Des journées de prévention santé 100 % clé en main",
      paragraphs: [
        "Hocoia prend en charge l'ensemble de l'organisation des campagnes de prévention santé mobile : gestion logistique, installation du dispositif, coordination des professionnels de santé, gestion des inscriptions, accompagnement des participants, communication et sensibilisation.",
        "Les collectivités et acteurs locaux gardent une maîtrise complète des inscriptions et du ciblage des publics selon les secteurs souhaités.",
        "Nos dispositifs mobiles permettent d'organiser des journées de prévention régulières autour de plusieurs thématiques : prévention des maladies cardiovasculaires, dépistage du cancer de la peau, santé de la femme, dépistage du cancer du sein, check-up santé.",
      ],
    },
    {
      h3: "Des bus santé sur mesure",
      paragraphs: [
        "Hocoia propose également la conception et l'aménagement de bus de prévention santé entièrement personnalisés afin de répondre aux besoins spécifiques des collectivités et acteurs locaux.",
        "Chaque bus peut être conçu sur mesure selon les objectifs de santé publique, les parcours de dépistage, les équipements médicaux et les usages terrain souhaités.",
        "Cette solution permet de disposer d'un dispositif mobile de prévention totalement adapté aux besoins des territoires et des populations accompagnées.",
      ],
    },
  ],
};

// ─── Achat sur mesure ─────────────────────────────────────────────────────

export const achatSurMesure = {
  eyebrow: "",
  h2: "Dotez votre territoire d'un bus médical",
  subtitle:
    "Hocoia intervient avec son propre bus médical, ou conçoit et livre le vôtre. À vous de choisir le modèle qui correspond à votre projet territorial.",
  prestation: {
    tag: "Prestation",
    title: "Location / prestation ponctuelle",
    description:
      "Hocoia intervient avec son propre bus médical et ses soignants pour une journée ou une campagne dans votre commune. Aucun investissement, organisation entièrement prise en charge.",
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
      "Hocoia conçoit, équipe et vous livre votre propre bus médical, configuré pour les besoins de santé de votre territoire. Votre collectivité dispose d'un dispositif pérenne, déployable commune par commune, à vos couleurs.",
    points: [
      "Bus sur mesure pour vos spécialités et votre territoire",
      "Formation + maintenance Hocoia incluses",
      "Éligible aux financements publics (DETR, ARS, fonds régionaux)",
    ],
    cta: "Étudier mon projet d'acquisition →",
    ctaHref: "/acquerir-un-bus",
  },
};

// ─── CTA final ─────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Renforcez la prévention santé dans votre territoire.",
  subtitle:
    "Un expert Hocoia spécialisé secteur public étudiera votre projet. Sans engagement, sans appel d'offres préalable.",
  ctaPrimary: "Parler à un expert territorial",
  ctaSecondary: "Télécharger le dossier",
  ctaTertiary: "Voir nos cas clients",
};
