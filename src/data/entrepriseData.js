// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "",
  h1: "Rapprochez la prévention santé de vos équipes et adhérents.",
  subtitle:
    "Hocoia déploie des bus médicaux directement sur le lieu de travail ou de vie, en alliant humain et technologie de pointe.",
  checks: [
    "Programme clé en main",
    "Résultats mesurables et anonymisés",
    "Impact direct sur la QVT et l'expérience adhérent",
  ],
  ctaOutline: "Voir un cas client →",
  ctaGhost: "Télécharger le dossier",
  form: {
    title: "Parlons de votre projet",
    subtitle: "Un expert étudiera votre projet.",
    cta: "Demander un rendez-vous →",
    note: "Sans engagement · RGPD",
    roleOptions: [
      "Entreprise / DRH",
      "Mutuelle / Organisme de santé",
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
    "Boardriders",
    "Renault",
    "MGEN",
    "Groupama",
    "IPSEN",
    "IFF",
    "HEC",
    "MACIF",
    "OPCO des entreprises",
    "SEMECO",
    "ETC",
    "Mutuelle Générale d'Avignon",
    "Alfi",
  ],
};

// ─── Use cases (onglets Entreprises / Mutuelles) ─────────────────────────

export const useCases = {
  tabs: [
    { id: "entreprises", label: "Entreprises", sublabel: "Solutions RH santé" },
    { id: "assureurs",   label: "Mutuelles",   sublabel: "Programmes de prévention adhérents" },
  ],
  content: {
    entreprises: {
      eyebrow: "",
      title: "Réduisez l'absentéisme, valorisez votre marque employeur",
      paragraphs: [
        "Vos collaborateurs font face à des délais de 3 à 6 mois pour consulter un spécialiste. Hocoia contourne ces délais en venant directement à eux, sur leur lieu de travail. Résultat : une participation bien plus élevée, des bilans complets réalisés, un impact mesurable.",
      ],
      features: [
        {
          id: "f1",
          title: "Améliorer la qualité de vie au travail",
          description: "En apportant la santé directement sur le lieu de travail, Hocoia simplifie l'accès aux soins pour vos collaborateurs, sans déplacement ni attente.",
        },
        {
          id: "f2",
          title: "Diminuer l'absentéisme",
          description: "Des campagnes de dépistage régulières permettent de détecter les pathologies tôt et de réduire les arrêts de travail prolongés.",
        },
        {
          id: "f3",
          title: "Un gain d'efficacité dans vos équipes",
          description: "Des collaborateurs bien suivis sont plus disponibles, plus sereins et moins exposés aux risques de santé non détectés.",
        },
        {
          id: "f4",
          title: "Des collaborateurs satisfaits et en meilleure santé",
          description: "Un service de santé accessible et concret renforce la confiance de vos équipes et valorise votre marque employeur.",
        },
      ],
      ctaButtons: [
        { label: "Parler à un expert",     primary: true },
        { label: "Cas clients", primary: false },
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
      eyebrow: "",
      title: "Faites de la prévention un service concret pour vos adhérents",
      paragraphs: [
        "Vos adhérents rencontrent souvent des difficultés à consulter un spécialiste. Hocoia vous permet d'organiser des campagnes de dépistage directement dans leurs communes : la mutuelle invite ses adhérents, Hocoia déploie le bus, le dépistage est gratuit pour le patient.",
        "C'est une démarche de prévention proactive qui renforce la relation avec vos adhérents et alimente votre stratégie de santé populationnelle, avec des données anonymisées exploitables.",
      ],
      features: [
        {
          id: "fa1",
          title: "Renforcer le lien avec vos adhérents",
          description: "Un service de prévention concret, visible et gratuit : vos adhérents voient la valeur de leur mutuelle au quotidien.",
        },
        {
          id: "fa2",
          title: "Réduire les coûts de santé sur le long terme",
          description: "Dépister tôt, c'est traiter moins cher. La prévention réduit les prises en charge lourdes et les remboursements futurs.",
        },
        {
          id: "fa3",
          title: "Des adhérents mieux suivis et en meilleure santé",
          description: "Chaque bilan génère des orientations vers des soins adaptés. Vos adhérents sont accompagnés, pas seulement remboursés.",
        },
        {
          id: "fa4",
          title: "Valoriser concrètement votre offre de prévention",
          description: "Transformez votre engagement santé en actions terrain mesurables, communicables et reconnaissables par vos adhérents.",
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
    "Boardriders a organisé une journée de dépistage directement sur son site avec le MédicoBus Hocoia. Pas de mobilisation côté RH, et un reporting anonymisé qui alimente leur politique santé interne.",
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
  eyebrow: "",
  h2: "Pourquoi entreprises et mutuelles font confiance à Hocoia",
  cards: [
    {
      id: "ac1",
      stars: "★★★★★",
      quote: "[Citation à venir]",
      author: "Hélène Lauzeral",
      role: "[Fonction], Boardriders",
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
      day: "Étape 1",
      title: "Cadrage",
      description:
        "Un expert Hocoia analyse vos besoins, vos effectifs et vos contraintes logistiques pour définir le format le plus adapté à votre structure.",
    },
    {
      id: "s2",
      number: "02",
      day: "Étape 2",
      title: "Proposition sur-mesure",
      description:
        "Programme personnalisé, devis détaillé et planning indicatif vous sont remis. Chaque proposition est ajustée à la taille et aux enjeux de votre organisation.",
    },
    {
      id: "s3",
      number: "03",
      day: "Étape 3",
      title: "Validation & organisation",
      description:
        "Contrat signé, communication interne préparée, logistique bus planifiée avec votre équipe. Hébergement HDS et données anonymisées — aucun accès employeur aux résultats individuels.",
    },
    {
      id: "s4",
      number: "04",
      day: "Étape 4",
      title: "Déploiement du programme",
      description:
        "Notre bus s'installe sur votre parking, vos collaborateurs consultent sur leur temps de travail. Les résultats sont transmis via tableau de bord RH anonymisé dans les semaines suivantes.",
    },
  ],
};

// ─── Ressources ───────────────────────────────────────────────────────────

export const ressources = {
  eyebrow: "",
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
  eyebrow: "",
  h2: "Les questions que se posent les entreprises et mutuelles avant de démarrer",
  items: [
    {
      id: "q1",
      question: "Hocoia gère-t-il l'organisation des journées de prévention ?",
      answer:
        "Oui, les solutions Hocoia sont 100 % clé en main. Nous prenons en charge la logistique, la coordination, l'installation du dispositif mobile, la gestion des inscriptions et l'accompagnement des participants.",
    },
    {
      id: "q2",
      question: "Peut-on organiser plusieurs journées de prévention dans l'année ?",
      answer:
        "Oui. Les entreprises, mutuelles et collectivités peuvent mettre en place des campagnes de prévention régulières afin d'inscrire la santé et le dépistage dans une démarche durable.",
    },
    {
      id: "q3",
      question: "Proposez-vous des webinaires santé ?",
      answer:
        "Oui. Hocoia peut organiser des webinaires animés par des professionnels de santé afin de sensibiliser les participants avant les journées de prévention et renforcer l'engagement autour des actions de dépistage.",
    },
    {
      id: "q4",
      question: "Peut-on acheter un bus de prévention sur mesure ?",
      answer:
        "Oui. Hocoia propose également la conception et l'aménagement de bus de prévention santé personnalisés afin de répondre aux besoins spécifiques des entreprises, mutuelles, collectivités et institutions, et hôpitaux.",
    },
    {
      id: "q5",
      question: "Dans quelles régions intervenez-vous ?",
      answer:
        "Hocoia déploie ses solutions mobiles de prévention santé partout en France selon les besoins des entreprises, mutuelles et acteurs publics.",
    },
  ],
};

// ─── CTA final ────────────────────────────────────────────────────────────

// ─── Modèles d'engagement ─────────────────────────────────────────────────

export const modeles = {
  eyebrow: "",
  h2: "Un bus médical aux couleurs de votre structure",
  subtitle:
    "Configurez un bus médical selon les spécialités de votre secteur et déployez vos programmes de prévention quand vous le souhaitez. Ou commencez par une prestation clé en main.",
  acquisition: {
    tag: "Sur mesure",
    title: "Un bus médical aux couleurs de votre structure",
    description:
      "Acquérez un bus médical entièrement configuré selon les spécialités de votre secteur d'activité. Vos couleurs, votre logo, votre programme de prévention — déployé quand vous le décidez, là où vous en avez besoin.",
    points: [
      "Spécialités choisies selon vos besoins RH et secteur",
      "Branding complet — couleurs et logo de votre structure",
      "Formation et accompagnement des équipes embarquées",
      "Maintenance et support opérationnel Hocoia inclus",
    ],
    cta: "Découvrir les configurations →",
  },
  prestation: {
    tag: "Clé en main",
    title: "Ou commencez par une prestation Hocoia",
    description:
      "Hocoia déploie l'un de ses bus médicaux sur vos sites pour une journée ou une campagne. Aucun investissement, organisation entièrement prise en charge.",
    specialites: ["Dermatologie", "Cardiologie", "Mammographie", "Bilan sanguin", "Gynécologie", "Ophtalmologie"],
    cta: "Organiser un dépistage →",
  },
};

// ─── Parcours patient ─────────────────────────────────────────────────────

export const parcoursPatient = {
  eyebrow: "Parcours patient",
  h2: "De l'inscription au suivi de soins",
  subtitle:
    "Pour vos collaborateurs, l'expérience est fluide et confidentielle de bout en bout. Pour vous, une vision globale sans jamais accéder aux données individuelles.",
  steps: [
    {
      id: "s1",
      number: "01",
      day: "Étape 1",
      title: "Inscription & prise de RDV",
      description:
        "Le collaborateur reçoit un code d'invitation unique et prend son RDV sur son espace personnel en quelques clics selon les créneaux disponibles sur site.",
    },
    {
      id: "s2",
      number: "02",
      day: "Étape 2",
      title: "Dépistage dans le bus",
      description:
        "Examen complet en 20 à 30 minutes par un professionnel de santé Hocoia directement sur site. Matériel médical certifié, premiers résultats immédiats pour certains examens.",
    },
    {
      id: "s3",
      number: "03",
      day: "Étape 3",
      title: "Résultats confidentiels",
      description:
        "Le collaborateur reçoit ses résultats sur son tableau de bord sous une semaine en moyenne. Ils sont également transmis à son médecin traitant. L'employeur ne reçoit que des données agrégées anonymisées.",
    },
    {
      id: "s4",
      number: "04",
      day: "Étape 4",
      title: "Orientation & suivi de soins",
      description:
        "En cas d'anomalie, Hocoia coordonne l'orientation vers le médecin traitant ou un spécialiste. Le dépistage s'intègre ainsi au parcours de soins du collaborateur, sans intervention de l'employeur.",
    },
  ],
};

export const seoContent = {
  h2: "Prévention santé mobile pour les entreprises et les mutuelles",
  intro:
    "Hocoia accompagne les entreprises et les mutuelles dans le déploiement de solutions de prévention santé innovantes grâce à des dispositifs mobiles de dépistage et de sensibilisation. Nos campagnes de prévention permettent de faciliter l'accès au dépistage, d'améliorer la santé des collaborateurs et des adhérents, et de renforcer les démarches de qualité de vie au travail (QVT) et de santé publique.",
  blocs: [
    {
      h3: "Entreprises : améliorez la santé et le bien-être de vos collaborateurs",
      paragraphs: [
        "Hocoia propose aux entreprises des solutions de prévention santé clé en main directement sur site grâce au MédicoBus. Nos campagnes de dépistage en entreprise couvrent plusieurs thématiques : prévention des maladies cardiovasculaires, dépistage du cancer de la peau, santé de la femme, dépistage du cancer du sein, check-up santé.",
        "Ces actions de prévention permettent de renforcer la QVT, sensibiliser les salariés aux enjeux de santé, améliorer le bien-être au travail et valoriser la marque employeur.",
        "Chaque intervention peut être accompagnée d'un webinaire santé animé par un professionnel de santé afin de renforcer la sensibilisation et l'engagement des collaborateurs.",
      ],
    },
    {
      h3: "Mutuelles : développez vos actions de prévention santé",
      paragraphs: [
        "Hocoia accompagne les mutuelles et organismes complémentaires santé dans la mise en place de campagnes de prévention innovantes et accessibles.",
        "Grâce au MédicoBus et au MammoBus, les mutuelles peuvent proposer des actions de dépistage mobile directement auprès de leurs adhérents, entreprises partenaires ou collectivités.",
        "Nos solutions de prévention santé permettent : d'améliorer l'accès au dépistage, de promouvoir la prévention santé, de renforcer la relation adhérent, et de valoriser l'engagement des mutuelles en santé publique.",
        "Hocoia développe des dispositifs mobiles de prévention partout en France pour rendre la prévention plus accessible, humaine et efficace.",
      ],
    },
  ],
};

export const ctaFinal = {
  h2: "Prêt à déployer Hocoia dans votre structure ?",
  subtitle: "Un expert étudiera votre projet. Sans engagement.",
  ctaPrimary: "Demander un rendez-vous",
  ctaSecondary: "Télécharger le dossier complet",
};
