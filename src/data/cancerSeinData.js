// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Expertise · Dépistage cancer du sein · Mammographie mobile",
  h1Parts: {
    italicA: "Cancer du sein",
    mid: " : le dépistage précoce qui ",
    italicB: "change tout.",
  },
  subtitle:
    "1 femme sur 8 développera un cancer du sein dans sa vie. Pourtant, quand il est détecté tôt, le taux de guérison atteint 99%. Le MammoBus Hocoia apporte la mammographie directement dans votre commune.",
  checks: [
    "99% de taux de guérison en cas de détection très précoce",
    "61 000 nouveaux cas par an en France",
    "50% seulement des femmes éligibles se font dépister",
    "Mammographie + échographie à bord · 24 femmes dépistées par jour",
    "Dépistage organisé pris en charge à 100% par l'Assurance Maladie",
  ],
  ctaPatient: "Trouver une date de dépistage près de chez moi",
  ctaPatientHref: "/patient",
  ctaOrga: "Organiser une campagne MammoBus",
  ctaOrgaHref: "/mammobus",
  imagePlaceholder: "MammoBus en déploiement · femmes attendant le dépistage devant le bus",
};

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = [
  { value: "1/8",    label: "femmes développera un cancer du sein dans sa vie",         source: "INCa" },
  { value: "61 000", label: "nouveaux cas par an en France · 2× plus qu'il y a 40 ans", source: "INCa 2024" },
  { value: "90%",    label: "taux de guérison si détecté suffisamment tôt",             source: "INCa" },
  { value: "50%",    label: "seulement des femmes éligibles se font dépister",          source: "INCa" },
];

// ─── Pourquoi se faire dépister ───────────────────────────────────────────────

export const pourquoi = {
  eyebrow: "Pourquoi se faire dépister",
  h2: "Ce qu'il faut savoir sur le cancer du sein",
  paragraphs: [
    "Le cancer du sein est le cancer le plus fréquent chez la femme en France et dans le monde. Chaque année, plus de 61 000 femmes en sont diagnostiquées. Il touche toutes les tranches d'âge, mais le risque augmente significativement après 50 ans.",
    "La bonne nouvelle : quand il est détecté tôt, le cancer du sein se traite très bien. Le taux de guérison dépasse 90% en cas de détection précoce · et 99% pour les formes détectées à un stade très précoce. C'est pourquoi le dépistage régulier est essentiel.",
  ],
  encadres: [
    {
      id: "e1",
      titre: "Qui est concerné ?",
      texte:
        "Toutes les femmes de 50 à 74 ans sont invitées tous les 2 ans au dépistage organisé national, remboursé à 100%. Les femmes à risque élevé (antécédents familiaux, prédisposition génétique BRCA) bénéficient d'un suivi renforcé dès 30-40 ans.",
    },
    {
      id: "e2",
      titre: "À quelle fréquence ?",
      texte:
        "Dans le programme de dépistage organisé : une mammographie tous les 2 ans de 50 à 74 ans. Pour les femmes à risque élevé : une mammographie annuelle à partir de 30-40 ans selon les recommandations HAS.",
    },
    {
      id: "e3",
      titre: "Les signes à surveiller",
      texte:
        "Toute modification du sein doit être consultée rapidement : bosse ou nodule, modification de la forme ou de la taille, écoulement du mamelon, rétraction de la peau. L'autopalpation régulière reste recommandée entre les consultations.",
    },
  ],
};

// ─── Dépistage mobile Hocoia ──────────────────────────────────────────────────

export const depistageHocoia = {
  eyebrow: "La solution Hocoia",
  h2: "Le MammoBus : la mammographie mobile qui vient à vous",
  paragraphs: [
    "Seules 50% des femmes éligibles se font dépister · le principal frein est l'accès : distance, délais, organisation. Hocoia a développé le MammoBus, une unité compacte de moins de 3,5 tonnes qui apporte la mammographie directement dans les communes, les entreprises et les territoires ruraux.",
    "Le dispositif est habilité pour le dépistage organisé national (prise en charge à 100% par l'Assurance Maladie) et propose également le dépistage individuel. 24 femmes peuvent être dépistées par jour, avec un écosystème numérique complet pour le diagnostic et le suivi.",
  ],
  differenciateurs: [
    { id: "d1", titre: "Mammographie + échographie à bord", description: "Palpation mammaire, mammographie numérique et échographie selon indication · tout en un." },
    { id: "d2", titre: "Dépistage organisé habilité", description: "Programme national pris en charge à 100% par l'Assurance Maladie pour les femmes de 50 à 74 ans." },
    { id: "d3", titre: "Clé en main", description: "Hocoia gère tout : communication, prise de rendez-vous, logistique, équipe médicale, bilan de résultats." },
    { id: "d4", titre: "PACS centralisé · HDS certifié", description: "Données médicales hébergées en sécurité, lisibles par tous les praticiens et centres de radiologie." },
  ],
  bus: {
    badge: "Produit Hocoia · Actif en France",
    titre: "MammoBus",
    description:
      "Unité mobile compacte de mammographie · unique en France à moins de 3,5 tonnes. Dépistage organisé (100% pris en charge) et individuel. 24 femmes par jour, partout en France.",
    href: "/mammobus",
    cta: "Découvrir le MammoBus →",
  },
};

// ─── Protocole ────────────────────────────────────────────────────────────────

export const protocole = {
  eyebrow: "Comment cela se passe",
  h2: "Un service clé en main, de A à Z",
  subtitle: "Hocoia gère l'intégralité de la campagne · de l'organisation à la restitution des résultats.",
  steps: [
    {
      id: "p1", num: "1",
      titre: "Organisation de la campagne",
      description: "Coordination avec la collectivité ou l'entreprise : définition du lieu, de la date, communication aux bénéficiaires. Prise de rendez-vous via le tableau de bord ou par téléphone.",
      badge: "Équipe Hocoia",
    },
    {
      id: "p2", num: "2",
      titre: "Accueil des patientes",
      description: "Accueil personnalisé sur le lieu de dépistage. Vérification de l'éligibilité, recueil du questionnaire médical, préparation à l'examen.",
      badge: "Sage-femme + MERM",
    },
    {
      id: "p3", num: "3",
      titre: "Prise en charge médicale",
      description: "Palpation mammaire, mammographie numérique, échographie si indiquée. Diagnostic sur place ou en télé-expertise par un radiologue.",
      badge: "MERM + Sage-femme + Radiologue",
    },
    {
      id: "p4", num: "4",
      titre: "Résultats & suivi",
      description: "Résultats transmis sous 1 à 2 semaines. En cas d'anomalie, l'équipe médicale organise un rendez-vous complémentaire et assure le suivi de la patiente.",
      badge: "Radiologue partenaire",
    },
  ],
};

// ─── Bénéfices ────────────────────────────────────────────────────────────────

export const benefices = {
  eyebrow: "Pourquoi Hocoia",
  h2: "Les atouts du dépistage mammaire mobile",
  cards: [
    { id: "b1", titre: "Sans déplacement", description: "Le MammoBus vient dans votre commune, votre entreprise ou votre établissement. Fini les 40 km pour un centre de radiologie." },
    { id: "b2", titre: "Pris en charge à 100%", description: "Pour les femmes de 50 à 74 ans dans le cadre du dépistage organisé national · aucun frais pour la patiente." },
    { id: "b3", titre: "24 femmes par jour", description: "Des créneaux disponibles en 2 à 7 jours, contre 4 à 8 semaines dans un centre fixe." },
    { id: "b4", titre: "Suivi assuré", description: "En cas d'anomalie, l'équipe Hocoia assure le suivi complet jusqu'à la prise en charge spécialisée." },
  ],
};

// ─── Pour qui ─────────────────────────────────────────────────────────────────

export const pourQui = {
  eyebrow: "À qui s'adresse ce dépistage",
  h2: "Pour les patientes comme pour les organisations",
  subtitle:
    "Femmes, entreprises, collectivités, établissements de santé · le MammoBus s'adapte à tous les contextes.",
  cards: [
    {
      id: "pq1",
      titre: "Femmes & grand public",
      description:
        "Vous avez entre 50 et 74 ans et n'avez pas fait votre mammographie de dépistage ? Ou vous êtes jeune femme à risque ? Le MammoBus vient à vous.",
      casType: "Prise en charge à 100% pour le dépistage organisé. Sans déplacement.",
      href: "/patient",
      cta: "Trouver une date →",
    },
    {
      id: "pq2",
      titre: "Entreprises & mutuelles",
      description:
        "Proposez un bilan mammaire à vos collaboratrices sur site, ou à vos adhérentes dans le cadre d'un programme de prévention.",
      casType: "Cas type : journée santé femmes dans un site industriel de 1 200 salariés.",
      href: "/entreprises-et-mutuelles",
      cta: "Solutions entreprise →",
    },
    {
      id: "pq3",
      titre: "Collectivités & territoires",
      description:
        "Rapprochez le dépistage des femmes éloignées des centres de radiologie. Hocoia gère la campagne de A à Z.",
      casType: "Cas type : 200 femmes dépistées en 5 jours dans une CC rurale de Moselle.",
      href: "/collectivites-et-institutions",
      cta: "Solutions collectivités →",
    },
    {
      id: "pq4",
      titre: "Hôpitaux & établissements",
      description:
        "Externalisez le dépistage hors les murs et augmentez le volume de patientes sans saturer vos plateaux techniques.",
      casType: "Cas type : partenariat CH régional pour couvrir les communes périphériques.",
      href: "/etablissements-de-sante-et-essms",
      cta: "Partenariats hospitaliers →",
    },
  ],
};

// ─── Témoignages ──────────────────────────────────────────────────────────────

export const temoignages = {
  eyebrow: "",
  h2: "Ce que disent nos partenaires",
  cards: [
    {
      id: "t1",
      contexte: "Coordonnatrice CLS",
      quote: "Un bilan extrêmement positif : lors de la première journée, toutes les patientes ont exprimé leur satisfaction à l'égard de ce dispositif · une première dans la région.",
      author: "Anne Haller",
      role: "Coordonnatrice du Contrat Local de Santé",
    },
    {
      id: "t2",
      contexte: "Mutuelle · Vendée",
      quote: "Ce type d'offre répond à un vrai besoin. La prévention est un élément important · et ce partenariat avec Hocoia nous conforte dans cette conviction.",
      author: "Didier Brouard",
      role: "Élu à la section MGEN Vendée",
    },
    {
      id: "t3",
      contexte: "Patiente · Haguenau",
      quote: "Ma mammographie était prévue dans 4 mois au centre le plus proche. Avec Hocoia, je l'ai faite la semaine dernière dans ma commune.",
      author: "Marie-Claire, 58 ans",
      role: "Haguenau",
    },
  ],
};

// ─── Maillage interne ─────────────────────────────────────────────────────────

export const maillage = {
  eyebrow: "À explorer aussi",
  h2: "Expertises et solutions associées",
  expertises: [
    { id: "e1", label: "Check-up santé",             href: "/solutions/checkup" },
    { id: "e2", label: "Prévention cardiovasculaire", href: "/solutions/prevention-cardio" },
    { id: "e3", label: "Cancer de la peau",           href: "/solutions/cancer-peau" },
    { id: "e4", label: "Santé de la femme",           href: "/solutions/sante-femme" },
  ],
  busLies: [
    { id: "b1", label: "MammoBus · mammographie mobile",     href: "/mammobus" },
    { id: "b2", label: "MédicoBus · cabinet médical mobile", href: "/produits/medicobus" },
  ],
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "",
  h2: "Tout savoir sur le dépistage du cancer du sein",
  items: [
    {
      id: "f1",
      question: "À partir de quel âge faut-il faire une mammographie ?",
      answer:
        "Dans le cadre du dépistage organisé national, les femmes de 50 à 74 ans sont invitées tous les 2 ans. Les femmes à risque élevé (antécédents familiaux, mutation BRCA) bénéficient d'un suivi renforcé dès 30-40 ans selon les recommandations de la HAS.",
    },
    {
      id: "f2",
      question: "La mammographie est-elle remboursée ?",
      answer:
        "Oui. Dans le cadre du programme de dépistage organisé (50-74 ans), la mammographie est prise en charge à 100% par l'Assurance Maladie, sans avance de frais. Pour le dépistage individuel, le remboursement dépend de votre situation.",
    },
    {
      id: "f3",
      question: "Est-ce douloureux ?",
      answer:
        "La compression du sein lors de la mammographie peut être légèrement inconfortable pour certaines femmes, mais elle est brève et nécessaire pour obtenir des images de qualité. La grande majorité des patientes la tolèrent bien.",
    },
    {
      id: "f4",
      question: "Que se passe-t-il si une anomalie est détectée ?",
      answer:
        "En cas de résultat suspect, l'équipe médicale Hocoia organise un rendez-vous complémentaire avec un radiologue ou gynécologue référent. Le suivi est tracé et transmis à votre médecin traitant.",
    },
    {
      id: "f5",
      question: "Combien de femmes le MammoBus peut-il dépister par jour ?",
      answer:
        "24 femmes par jour en moyenne, sur des créneaux de 20 à 25 minutes incluant accueil, mammographie, échographie si nécessaire et restitution rapide.",
    },
    {
      id: "f6",
      question: "Comment s'inscrire pour une session MammoBus ?",
      answer:
        "Via la page Patient sur ce site (calendrier des passages), ou directement sur l'application. Vous pouvez aussi activer une alerte pour être prévenue dès qu'une session est organisée dans votre commune.",
    },
    {
      id: "f7",
      question: "Comment se déroule la mammographie ?",
      answer:
        "L'examen est réalisé directement dans le bus afin de rapprocher le dépistage des patientes. Les examens sont réalisés par des sages-femmes ou des manipulatrices et manipulateurs en électroradiologie médicale.",
    },
  ],
};

// ─── CTA Final ────────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Le dépistage du cancer du sein, enfin accessible à toutes.",
  subtitle:
    "Patiente ou organisation · Hocoia vous accompagne pour que le dépistage ne soit plus une contrainte.",
  ctaPatient: "Je suis patiente · Trouver une date",
  ctaPatientHref: "/patient",
  ctaOrga: "Je suis une organisation · Organiser une campagne",
  ctaOrgaHref: "/mammobus",
};
