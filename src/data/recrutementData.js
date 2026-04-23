// ─── Données page Recrutement ────────────────────────────────────────────────

export const hero = {
  eyebrow: "Rejoignez Hocoia",
  h1Before: "Soignez là où ",
  h1Italic: "on a besoin de vous.",
  subtitle:
    "Hocoia recrute des professionnels de santé passionnés pour intervenir à bord de nos bus médicaux. Liberté d'organisation, impact concret, matériel fourni.",
  ctaPrimary: "Voir les postes ouverts",
  ctaOutline: "Candidature spontanée",
  video: {
    label: "Découvrez Hocoia en 2 minutes",
    sublabel: "Mission · Équipe · Conditions de travail",
    duration: "2:14",
  },
  citation:
    '"La santé mobile, ça change vraiment des vies." — Dr Arous, médecin prestataire',
};

export const chiffres = [
  { value: "120+", label: "Professionnels dans le réseau" },
  { value: "12",   label: "Spécialités recrutées" },
  { value: "4.8/5", label: "Satisfaction prestataires" },
  { value: "30j",  label: "Paiement garanti" },
  { value: "80+",  label: "Communes d'intervention" },
];

export const temoignages = {
  eyebrow: "Ils témoignent",
  h2: "Ce que disent ceux qui ont rejoint Hocoia",
  subtitle:
    "Des médecins, infirmières et sages-femmes qui ont fait le choix d'une pratique différente, en toute liberté.",
  cards: [
    {
      id: "t1",
      context: "Sage-femme · MammoBus",
      nom: "Marine F.",
      quote:
        "Ce qui m'a convaincue, c'est l'impact. Je soigne des femmes qui n'auraient jamais consulté une sage-femme sans ce bus. En une journée, je change vraiment des choses.",
      videoDuration: "2:08",
      chips: ["2 jours/mois", "Strasbourg", "1 an"],
    },
    {
      id: "t2",
      context: "Cardiologue · Téléexpertise",
      nom: "Dr Rémi T.",
      quote:
        "J'interviens 2 jours par mois en complément de mon cabinet. La rémunération est correcte et je n'ai strictement rien à gérer côté logistique, c'est Hocoia qui s'occupe de tout.",
      videoDuration: "1:52",
      chips: ["Téléconsultation", "Lyon", "8 mois"],
    },
    {
      id: "t3",
      context: "Infirmière IDEL · MédicoBus",
      nom: "Camille A.",
      quote:
        "Je combinais avec mon cabinet, au début j'étais sceptique. Mais le matériel est vraiment là, l'équipe est présente, et les patients sont tellement reconnaissants.",
      videoDuration: "2:31",
      chips: ["Vacations", "Grand Est", "6 mois"],
    },
  ],
};

export const journeeDepistage = {
  eyebrow: "Vos journées avec Hocoia",
  h2: "À quoi ressemble une journée de dépistage ?",
  subtitle:
    "Avant de vous engager, voyez concrètement comment se déroulent nos prestations sur le terrain et quels outils vous allez utiliser.",
  pilules: [
    { id: "infirmier",   label: "Infirmier·e" },
    { id: "medecin",     label: "Médecin généraliste" },
    { id: "specialiste", label: "Spécialiste" },
  ],
  profils: {
    infirmier: {
      paragraphs: [
        "Vous êtes le premier contact du patient. Accueil, anamnèse, prise des constantes, accompagnement tout au long de la consultation — vous structurez l'expérience patient.",
        "Les outils HocoApp sont pensés pour fluidifier votre travail : dossier patient pré-rempli, protocoles intégrés, coordination automatique avec le médecin en téléexpertise.",
      ],
      timeline: [
        { id: "i1", num: "1", titre: "Accueil & installation",       description: "Vous accueillez les patients, vérifiez leur dossier et les installez à bord." },
        { id: "i2", num: "2", titre: "Constantes & anamnèse",         description: "Prise des constantes, remplissage du dossier HocoApp, recueil des antécédents." },
        { id: "i3", num: "3", titre: "Assistance à la consultation",  description: "Vous assistez le médecin (en présentiel ou téléexpertise) pendant les examens." },
        { id: "i4", num: "4", titre: "Suivi & orientation",           description: "Remise des documents au patient, orientation si besoin, transmission au médecin traitant." },
      ],
    },
    medecin: {
      paragraphs: [
        "Vous réalisez les consultations médicales avec le soutien de l'équipe terrain. Dossier patient déjà ouvert, constantes déjà prises : vous arrivez au bon moment pour l'acte médical.",
        "HocoApp centralise tout — historique, résultats des dispositifs embarqués, génération automatique du compte-rendu. Vous vous concentrez sur le diagnostic et la relation patient.",
      ],
      timeline: [
        { id: "m1", num: "1", titre: "Arrivée & briefing",         description: "Bus déjà installé, briefing de 10 minutes avec le soignant d'accueil." },
        { id: "m2", num: "2", titre: "Consultations enchaînées",    description: "Vous enchaînez les RDV toutes les 20-30 min, dossier préparé." },
        { id: "m3", num: "3", titre: "Diagnostic & prescription",   description: "Accès direct aux dispositifs connectés, prescription numérique via HocoApp." },
        { id: "m4", num: "4", titre: "Compte-rendu automatique",    description: "Génération auto du compte-rendu, transmission au médecin traitant du patient." },
      ],
    },
    specialiste: {
      paragraphs: [
        "Vous intervenez en téléexpertise depuis votre cabinet ou en présentiel sur le bus selon la spécialité. Cardio, dermato, gynéco : vos compétences élargissent l'accès aux soins dans les territoires sous-dotés.",
        "HocoVisio vous donne accès en temps réel aux dispositifs embarqués (ECG, dermatoscope, échographe) avec la qualité d'un cabinet spécialisé. Vous décidez en direct ou en asynchrone.",
      ],
      timeline: [
        { id: "s1", num: "1", titre: "Demandes qualifiées",       description: "Seuls les patients nécessitant votre expertise vous sont adressés, dossier complet." },
        { id: "s2", num: "2", titre: "Téléexpertise ou visite",   description: "Connexion HocoVisio avec le bus, ou intervention directe selon la spécialité." },
        { id: "s3", num: "3", titre: "Diagnostic assisté",        description: "Données des dispositifs en temps réel, échange direct avec le soignant à bord." },
        { id: "s4", num: "4", titre: "Recommandations & suivi",   description: "Compte-rendu spécialisé, orientation si nécessaire, intégration au parcours patient." },
      ],
    },
  },
  videoCards: [
    {
      id: "v1",
      videoLabel: "Une journée dans le MédicoBus · 3:20",
      titre: "Une journée à bord, Strasbourg",
      description:
        "De l'installation du bus au dernier patient : comment se passe une vraie journée de dépistage cardiovasculaire avec l'équipe Hocoia.",
    },
    {
      id: "v2",
      videoLabel: "HocoApp en 90 secondes · 1:30",
      titre: "Les outils, démonstration rapide",
      description:
        "Un tour de HocoApp et HocoVisio en 90 secondes : agenda, formulaires, téléconsultation, compte-rendu. Prise en main en moins d'une heure.",
    },
  ],
};

export const pourquoiRejoindre = {
  eyebrow: "Pourquoi rejoindre Hocoia",
  h2: "Une pratique libérée, un impact réel.",
  subtitle:
    "Hocoia s'occupe de tout ce qui n'est pas le soin, vous vous concentrez sur vos patients.",
  cards: [
    {
      id: "avantage1",
      titre: "Vous choisissez votre agenda",
      description:
        "Jours, zones, volume mensuel : aucun engagement minimum. Vous intervenez quand vous voulez, où vous voulez. Compatible avec un cabinet ou un poste hospitalier.",
      detail: "De 1 jour/mois à temps plein",
    },
    {
      id: "avantage2",
      titre: "Matériel et logistique fournis",
      description:
        "Bus équipé, installation, nettoyage, coordination des RDV : tout est géré par Hocoia. Vous arrivez, vous soignez, vous repartez.",
      detail: "Zéro investissement de votre côté",
    },
    {
      id: "avantage3",
      titre: "Rémunération claire et ponctuelle",
      description:
        "Tarification à l'acte, au-dessus des tarifs secteur 1 pour la plupart des spécialités. Paiement sous 30 jours, sans exception ni impayé.",
      detail: "Grille communiquée à l'entretien",
    },
  ],
};

export const equipeInterne = {
  eyebrow: "L'équipe Hocoia",
  h2: "Des profils variés, une même conviction.",
  paragraph:
    "Derrière les bus Hocoia, il y a une équipe pluridisciplinaire qui construit l'infrastructure, coordonne les déploiements, développe les outils et les partenariats. Médecins, ingénieurs, chefs de projet, marketeurs : tous engagés pour la même mission.",
  recrutementInterne: {
    titre: "On recrute aussi en interne",
    texte:
      "Tech, marketing, opérations, gestion de projet : si vous voulez construire Hocoia de l'intérieur, on a des postes pour vous aussi.",
    cta: "Voir les postes internes →",
  },
  membres: [
    {
      id: "m1",
      nom: "Lucie M.",
      role: "Coordinatrice médicale",
      citation:
        "Je fais le lien entre les soignants et les territoires. Chaque déploiement est une nouvelle aventure.",
    },
    {
      id: "m2",
      nom: "Thomas R.",
      role: "Développeur fullstack",
      citation:
        "Construire HocoApp, c'est rare : du code qui a un impact direct sur des patients.",
    },
    {
      id: "m3",
      nom: "Dr Sarah K.",
      role: "Directrice médicale",
      citation:
        "J'ai rejoint Hocoia parce que c'est la seule organisation qui traite vraiment l'accès aux soins comme un problème à résoudre.",
    },
    {
      id: "m4",
      nom: "Alexis B.",
      role: "Chef de projet déploiement",
      citation:
        "Organiser une journée de dépistage dans une commune rurale, et voir 80 patients défiler, c'est concret.",
    },
    {
      id: "m5",
      nom: "Clara V.",
      role: "Marketing & communication",
      citation:
        "Ici le marketing sert vraiment la mission, chaque contenu qu'on produit touche des gens qui en ont besoin.",
    },
    {
      id: "m6",
      nom: "Romain T.",
      role: "Support helpdesk",
      citation:
        "Les soignants sur le terrain ont besoin d'une réponse rapide. C'est mon rôle de faire que ça marche toujours.",
    },
    {
      id: "m7",
      nom: "Inès D.",
      role: "Business development",
      citation:
        "Convaincre une collectivité de déployer un bus, c'est chaque fois une vraie mission, et ça marche.",
    },
    {
      id: "m8",
      nom: "Karim L.",
      role: "Data & opérations",
      citation:
        "Analyser les données de santé agrégées pour voir l'impact territoire par territoire, c'est fascinant.",
    },
  ],
  note: "Remplacer les avatars par de vraies photos dès qu'elles sont disponibles.",
};

export const processusRecrutement = {
  eyebrow: "Comment ça se passe",
  h2: "Un processus simple. On lit tout, on répond à tous.",
  steps: [
    {
      id: "ps1",
      num: "1",
      titre: "Candidature",
      description: "Formulaire ou email simple. Pas de CV sous Word imposé.",
      badge: "Aujourd'hui",
    },
    {
      id: "ps2",
      num: "2",
      titre: "Retour garanti",
      description: "On répond à chaque candidature sous 7 jours, même pour dire non.",
      badge: "J+7",
    },
    {
      id: "ps3",
      num: "3",
      titre: "Échange 30 min",
      description: "Appel informel : on veut comprendre votre parcours et vos attentes.",
      badge: "J+10",
    },
    {
      id: "ps4",
      num: "4",
      titre: "Présentation & outils",
      description:
        "Pour les soignants : démo HocoApp + protocole. Pour les internes : rencontre équipe.",
      badge: "J+14",
    },
    {
      id: "ps5",
      num: "5",
      titre: "Décision & onboarding",
      description:
        "Contrat, accès outils, première mission : tout est cadré avant le démarrage.",
      badge: "J+21 à J+30",
    },
  ],
};

export const offres = {
  h2: "Nos offres actuelles",
  filtres: [
    { id: "all",      label: "Toutes",               count: "9+" },
    { id: "soignant", label: "Soignants prestataires" },
    { id: "tech",     label: "Tech & support" },
    { id: "mktg",     label: "Marketing & Ops" },
  ],
  soignants: {
    label: "Professionnels de santé — prestataires",
    items: [
      {
        id: "o1",
        titre: "Sage-femme, Dépistage santé de la femme, MédicoBus",
        tag: "Santé",
        lieu: "Itinérant",
        type: "Prestation",
        nouveau: true,
        date: "15/04/26",
      },
      {
        id: "o2",
        titre: "Sage-femme, MammoBus, dépistage cancer du sein",
        tag: "Santé",
        lieu: "Itinérant",
        type: "Prestation",
        nouveau: true,
        date: "15/04/26",
      },
      {
        id: "o3",
        titre: "Cardiologue, Téléexpertise, prévention cardiovasculaire",
        tag: "Santé",
        lieu: "Téléconsultation",
        type: "Prestation",
        nouveau: true,
        date: "15/04/26",
      },
      {
        id: "o4",
        titre: "MERM, Manipulatrice en Électroradiologie, MammoBus",
        tag: "Santé",
        lieu: "Itinérant",
        type: "Prestation",
        nouveau: false,
        date: "15/04/26",
      },
      {
        id: "o5",
        titre: "Radiologue, Lecture mammographique, dépistage",
        tag: "Santé",
        lieu: "Téléconsultation",
        type: "Prestation",
        nouveau: false,
        date: "15/04/26",
      },
      {
        id: "o6",
        titre: "Dermatologue, Téléexpertise en prévention cutanée",
        tag: "Santé",
        lieu: "Téléconsultation",
        type: "Prestation",
        nouveau: false,
        date: "26/03/26",
      },
      {
        id: "o7",
        titre: "Infirmier·e IDEL, Vacations prévention & dépistage",
        tag: "Santé",
        lieu: "Itinérant",
        type: "Prestation",
        nouveau: false,
        date: "24/02/26",
      },
      {
        id: "o8",
        titre: "Médecin généraliste, MédicoBus",
        tag: "Santé",
        lieu: "Itinérant",
        type: "Prestation",
        nouveau: false,
        date: "20/02/26",
      },
    ],
  },
  internes: {
    label: "Équipe interne — CDI",
    items: [
      {
        id: "i1",
        titre: "Technicien support helpdesk",
        tag: "Tech",
        lieu: "Strasbourg (hybride)",
        type: "CDI",
        statut: "nouveau",
        date: "15/04/26",
      },
      {
        id: "i2",
        titre: "Chargé·e d'acquisition marketing",
        tag: "Marketing",
        lieu: "Strasbourg (hybride)",
        type: "CDI",
        statut: "a-venir",
        date: null,
      },
      {
        id: "i3",
        titre: "Chef·fe de projet déploiement terrain",
        tag: "Opérations",
        lieu: "Strasbourg + déplacements",
        type: "CDI",
        statut: "a-venir",
        date: null,
      },
    ],
  },
};

export const candidatureSpontanee = {
  eyebrow: "Candidature spontanée",
  h3: "Votre profil n'est pas dans la liste ?",
  paragraph:
    "Hocoia grandit dans plusieurs directions. Si vous êtes convaincu que votre expertise peut contribuer à notre mission, parlez-nous de vous, on lit tout.",
  domainesLabel: "Domaines toujours ouverts",
  domaines: [
    "Médecine & soins",
    "Technologie",
    "Marketing",
    "Opérations",
    "Gestion de projet",
    "Business development",
    "Data & IA",
  ],
  form: {
    titre: "Envoyer une candidature spontanée",
    fields: {
      prenom: "Prénom",
      nom: "Nom",
      email: "Email",
      profil: "Votre profil",
      profilOptions: [
        "Votre profil",
        "Professionnel de santé",
        "Tech/Développement",
        "Marketing/Communication",
        "Opérations/Logistique",
        "Autre",
      ],
      message: "En quelques mots",
    },
    cta: "Envoyer ma candidature →",
    note: "Réponse sous 7 jours · Confidentiel",
  },
};

export const ctaFinal = {
  h2: "Prêt à soigner là où on a besoin de vous ?",
  subtitle:
    "Parcourez nos offres ou envoyez-nous une candidature spontanée, on lit tout.",
  ctaPrimary: "Voir les offres de soin",
  ctaOutline: "Candidature spontanée",
};
