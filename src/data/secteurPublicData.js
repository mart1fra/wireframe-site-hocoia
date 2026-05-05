// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Collectivités · CPTS · Institutions",
  h1: [
    "Renforcez l'accès aux soins dans ",
    { italic: "votre territoire" },
    " sans charge opérationnelle.",
  ],
  subtitle:
    "Hocoia déploie des unités médicales mobiles dans les déserts médicaux, les communes rurales et les zones sous-dotées. Clé en main, financeable via les dispositifs existants, validé scientifiquement.",
  pills: [
    { id: "p1", label: "Collectivités", active: true },
    { id: "p2", label: "CPTS / MSP", active: false },
    { id: "p3", label: "Institutions", active: false },
  ],
  checks: [
    "Aucune infrastructure à construire, le bus vient à vous",
    "Zéro gestion RH, professionnels de santé fournis",
    "Compatible CLS, ARS, fonds régionaux de santé",
    "Données anonymisées pour le pilotage territorial",
    "Déploiement en 2 mois, de la signature au premier patient",
  ],
  ctaPrimary: "Parler à un expert territorial",
  ctaOutline: "Télécharger le dossier ↓",
  form: {
    title: "Parler à un expert territorial",
    subtitle: "Un expert Hocoia spécialisé secteur public vous rappelle sous 24h.",
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
    note: "Sans engagement · Réponse <24h · Confidentiel",
  },
  trust: {
    label: "ILS NOUS FONT CONFIANCE",
    items: [
      "CC Pays de Phalsbourg",
      "Val de Fensch",
      "CC Sarrebourg Moselle Sud",
      "Angerville",
      "Ministère des AE",
      "CHU de Caen",
    ],
  },
};

// ─── Chiffres ──────────────────────────────────────────────────────────────

export const stats = [
  { id: "s1", value: "20M",     label: "Français vivent en désert médical",                source: "DREES 2023" },
  { id: "s2", value: "<5",      label: "Dermatologues dans l'Orne ou l'Eure",              source: "DREES 2023" },
  { id: "s3", value: "18 mois", label: "Délai moyen RDV spécialiste en zone rurale",       source: "CNOM 2023" },
  { id: "s4", value: "2 mois",  label: "Délai de déploiement Hocoia sur votre territoire", source: "Hocoia" },
  { id: "s5", value: "0€",      label: "Coût pour le patient, 100% pris en charge",        source: "Hocoia" },
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
      label: "CPTS & professionnels de santé",
      sublabel: "CPTS · MSP · Réseaux de santé",
    },
  ],
  content: {
    collectivites: {
      eyebrow: "Pour les collectivités",
      h2: "Désenclavez votre territoire sans construire",
      paragraphs: [
        "Les déserts médicaux touchent de plein fouet les communes rurales et les communautés de communes. Hocoia apporte physiquement les soins là où les cabinets médicaux manquent, sans qu'aucune infrastructure permanente ne soit nécessaire.",
        "Un bus Hocoia dans votre commune, c'est une réponse concrète, visible, immédiate à l'une des premières préoccupations de vos habitants.",
      ],
      features: [
        {
          id: "f1",
          title: "Aucune infrastructure à financer",
          description:
            "Le bus se déplace jusqu'à votre commune. Pas de local médical, pas de travaux, pas d'investissement immobilier.",
        },
        {
          id: "f2",
          title: "Professionnels de santé fournis",
          description:
            "Hocoia mobilise les soignants. Vous n'avez pas de RH médicale à gérer, ni recrutement, ni planning, ni remplacement.",
        },
        {
          id: "f3",
          title: "Rapport anonymisé pour votre territoire",
          description:
            "Données de participation et résultats médicaux agrégés transmis à la collectivité pour le rapport annuel et les appels à projets.",
        },
        {
          id: "f4",
          title: "Compatible avec vos financements existants",
          description:
            "CLS, fonds régionaux, crédits ARS, DETR : Hocoia vous accompagne dans le montage financier.",
        },
      ],
      ctaPrimary: "Parler à un expert territorial",
      ctaOutline: "Voir nos cas clients →",
      caseStudy: {
        tag: "Élu · Angerville",
        h4: "Comment Angerville a renforcé l'accès aux soins de ses habitants",
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
      eyebrow: "Pour les CPTS & MSP",
      h2: "Renforcez votre offre sans surcharger vos équipes",
      paragraphs: [
        "Les CPTS et MSP font face à une demande croissante que leurs équipes ne peuvent pas toujours absorber. Hocoia vient en complément de votre exercice, avec des spécialités et des programmes de prévention que vous ne proposez pas encore en interne.",
        "Un partenariat avec Hocoia, c'est étendre votre couverture territoriale sans recruter, sans investir en équipement, avec des données partagées pour le suivi de population.",
      ],
      features: [
        {
          id: "f1",
          title: "Spécialités en renfort",
          description:
            "Dermato, cardio, mammographie : Hocoia apporte les spécialités que votre territoire ne peut pas couvrir en permanence.",
        },
        {
          id: "f2",
          title: "Coordination simplifiée",
          description:
            "HocoApp gère la prise de RDV et le suivi patient. Vos équipes sont informées en temps réel.",
        },
        {
          id: "f3",
          title: "Données partagées",
          description:
            "Les résultats agrégés peuvent être intégrés à votre tableau de bord de santé populationnelle.",
        },
        {
          id: "f4",
          title: "Déploiement sans contrainte logistique",
          description:
            "Le bus vient à vous. Pas de locaux supplémentaires, pas d'organisation logistique de votre côté.",
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
  eyebrow: "Notre engagement",
  h2: "Vous n'avez rien à gérer. C'est notre rôle.",
  intro:
    "La principale objection des collectivités et institutions face à la santé de proximité, c'est la complexité opérationnelle. Hocoia l'a conçu pour que vous n'ayez aucun de ces problèmes.",
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
        "Médecins, infirmières, sages-femmes, MERM : Hocoia recrute, planifie et remplace. Zéro gestion RH médicale.",
      detail: "Réseau de 120+ prestataires",
    },
    {
      id: "zc3",
      title: "La coordination",
      description:
        "Prise de RDV, invitation des patients, communication locale, gestion des annulations : tout dans HocoApp.",
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
  eyebrow: "Comment ça se passe",
  h2: "De votre premier contact au premier patient, en 2 mois",
  subtitle:
    "Un processus structuré, avec Hocoia en chef de projet. Vous validez, on exécute.",
  steps: [
    {
      id: "step1",
      number: "01",
      title: "Échange de cadrage",
      description:
        "30 min avec un expert territorial Hocoia : zone, spécialité, public cible, contraintes logistiques.",
      delay: "J+2",
    },
    {
      id: "step2",
      number: "02",
      title: "Proposition sur mesure",
      description:
        "Programme personnalisé, planning, devis ferme, options de financement. Intégration dans votre CLS si besoin.",
      delay: "J+7",
    },
    {
      id: "step3",
      number: "03",
      title: "Signature & communication",
      description:
        "Convention ou bon de commande. Hocoia prépare la communication patient (flyer, courrier, annonce locale).",
      delay: "J+14",
    },
    {
      id: "step4",
      number: "04",
      title: "Ouverture des inscriptions",
      description:
        "Prise de RDV en ligne ou par téléphone. Les créneaux sont gérés par Hocoia, vous recevez les confirmations.",
      delay: "J+30",
    },
    {
      id: "step5",
      number: "05",
      title: "Jour J + bilan",
      description:
        "Le bus arrive, les professionnels de santé aussi. Rapport anonymisé transmis sous 72h après la journée.",
      delay: "J+60",
    },
  ],
};

// ─── Financements ──────────────────────────────────────────────────────────

export const financements = {
  eyebrow: "Financez votre projet",
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
  eyebrow: "Ils témoignent",
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
  row2: [
    {
      id: "tm4",
      context: "Élu · Angerville",
      quote:
        "Hocoia permet de renforcer localement l'accès aux soins tout en désengorgeant les cabinets médicaux et les hôpitaux pour les pathologies bénignes.",
      name: "Johann Mittelhausser",
      role: "Maire d'Angerville",
    },
    {
      id: "tm5",
      context: "Institutionnel · Ministère des AE",
      quote:
        "L'organisation est remarquable : prise de RDV, déroulement, tous les créneaux remplis rapidement. Ce concept permet un examen complet.",
      name: "Claire Doucerain",
      role: "Responsable DSE, Ministère des AE",
    },
  ],
};

// ─── Ressources ────────────────────────────────────────────────────────────

export const ressources = {
  eyebrow: "Ressources",
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
  videoMeta: "Tournage mars 2025 — Pays de Phalsbourg, Moselle",
};

// ─── FAQ ───────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "Questions fréquentes",
  h2: "Ce que se demandent les élus & directeurs avant de se lancer",
  items: [
    {
      id: "q1",
      question: "Faut-il passer par un appel d'offres pour travailler avec Hocoia ?",
      answer:
        "Pour les collectivités, cela dépend du montant annuel et de votre seuil de mise en concurrence. Hocoia peut vous accompagner dans la qualification juridique du partenariat et, le cas échéant, dans la rédaction du cahier des charges pour un appel d'offres. Un simple bon de commande ou une convention suffit dans de nombreux cas.",
    },
    {
      id: "q2",
      question: "Qui paie pour le déploiement, la collectivité ou les patients ?",
      answer:
        "Les patients ne paient rien. Le financement est porté par la collectivité, la mutuelle, ou un modèle hybride (sponsoring + forfait). Hocoia vous accompagne dans l'identification des financements disponibles : CLS, ARS, DETR, fonds régionaux, sponsors institutionnels.",
    },
    {
      id: "q3",
      question: "La collectivité doit-elle recruter des professionnels de santé ?",
      answer:
        "Non. Hocoia fournit l'intégralité des professionnels de santé : médecins, infirmières, sages-femmes, MERM selon la spécialité. Aucun recrutement, aucun planning médical de votre côté. Vous validez le calendrier, on gère le reste.",
    },
    {
      id: "q4",
      question: "Comment les données de santé des patients sont-elles protégées ?",
      answer:
        "Toutes les données sont hébergées en France chez un hébergeur certifié HDS (Hébergeur de Données de Santé) et ISO 27001. Les collectivités reçoivent uniquement des données agrégées anonymisées. Aucune donnée individuelle de patient n'est transmise à la collectivité. Conformité RGPD totale.",
    },
    {
      id: "q5",
      question: "Peut-on déployer le bus plusieurs fois par an sur le même territoire ?",
      answer:
        "Oui, c'est même recommandé. Hocoia propose des programmes annuels multi-journées, avec un suivi des patients d'une année sur l'autre (notamment pour le dépistage dermatologique). Un programme annuel est plus efficace médicalement et simplifie le financement via un contrat pluriannuel.",
    },
  ],
};

// ─── CTA final ─────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Renforcez l'accès aux soins dans votre territoire.",
  subtitle:
    "Un expert Hocoia spécialisé secteur public vous rappelle sous 24h. Sans engagement, sans appel d'offres préalable.",
  ctaPrimary: "Parler à un expert territorial",
  ctaSecondary: "Télécharger le dossier",
  ctaTertiary: "Voir nos cas clients",
};
