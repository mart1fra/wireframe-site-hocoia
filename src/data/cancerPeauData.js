// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Expertise · Dépistage cutané · Prévention du mélanome",
  h1Parts: {
    italicA: "Cancer de la peau",
    mid: " : dépister tôt, c'est ",
    italicB: "sauver des vies.",
  },
  subtitle:
    "Le mélanome est le cancer dont le pronostic varie le plus selon le stade de détection. 95% de taux de survie au stade I · contre moins de 20% au stade IV. Un examen de 30 minutes peut tout changer.",
  checks: [
    "95% de taux de survie si détecté au stade I",
    "100 000 nouveaux cas de cancer cutané par an en France",
    "18 mois de délai moyen chez un dermatologue en zone rurale",
    "Cartographie corps entier + télé-expertise onco-dermatologue CHU",
    "Examen complet en 30 minutes, gratuit pour le patient",
  ],
  ctaPatient: "Trouver un dépistage près de chez moi",
  ctaPatientHref: "/patient",
  ctaOrga: "Organiser une campagne de dépistage",
  ctaOrgaHref: "/dermatobus",
  imagePlaceholder: "Examen cutané à bord du DermatoBus · infirmière et patiente en consultation",
};

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = [
  { value: "100 000", label: "nouveaux cas de cancer cutané par an en France", source: "INCa 2024" },
  { value: "+25%",    label: "d'augmentation des mélanomes en 10 ans",          source: "INCa 2024" },
  { value: "18 mois", label: "délai moyen de rendez-vous chez un dermatologue en zone rurale", source: "CNOM 2023" },
  { value: "95%",     label: "taux de survie si détecté au stade I",            source: "INCa 2024" },
];

// ─── Pourquoi se faire dépister ───────────────────────────────────────────────

export const pourquoi = {
  eyebrow: "Pourquoi se faire dépister",
  h2: "Ce qu'il faut savoir sur le cancer de la peau",
  paragraphs: [
    "Le cancer de la peau est le cancer le plus fréquent en France. Il en existe trois formes principales : le mélanome (le plus grave), le carcinome basocellulaire et le carcinome épidermoïde. Ensemble, ils représentent plus de 100 000 nouveaux cas par an.",
    "Le mélanome peut métastaser rapidement · mais détecté tôt, il se traite très bien. C'est pourquoi le dépistage régulier est essentiel, surtout pour les personnes à risque.",
  ],
  encadres: [
    {
      id: "e1",
      titre: "Qui est concerné ?",
      texte:
        "Toute personne de plus de 18 ans · en particulier les peaux claires, les personnes ayant eu des coups de soleil importants dans l'enfance, les porteurs de nombreux grains de beauté (> 50), et ceux avec des antécédents familiaux de mélanome.",
    },
    {
      id: "e2",
      titre: "À quelle fréquence ?",
      texte:
        "Un examen annuel est recommandé pour les personnes à risque. Pour le grand public, un contrôle tous les 2 ans à partir de 30-40 ans est conseillé. L'examen est indolore et dure 15 à 30 minutes.",
    },
    {
      id: "e3",
      titre: "Les signes à surveiller",
      texte:
        "Appliquez la règle ABCDE : Asymétrie, Bords irréguliers, Couleur non uniforme, Diamètre supérieur à 6 mm, Évolution récente. Tout grain de beauté qui change doit être montré à un médecin rapidement.",
    },
  ],
};

// ─── Dépistage mobile Hocoia ──────────────────────────────────────────────────

export const depistageHocoia = {
  eyebrow: "La solution Hocoia",
  h2: "Le DermatoBus : le spécialiste qui vient à vous",
  paragraphs: [
    "Face à 18 mois d'attente pour un dermatologue en zone rurale, Hocoia a développé le DermatoBus · une unité mobile de dépistage cutané qui se déploie directement dans votre commune ou votre organisation.",
    "Le protocole est rigoureux : cartographie complète du corps, pré-analyse par IA, triage par médecin généraliste formé, télé-expertise par un onco-dermatologue du CHU de Caen. La qualité d'un cabinet universitaire, partout sur le territoire.",
  ],
  differenciateurs: [
    { id: "d1", titre: "Cartographie corps entier", description: "Toutes les lésions documentées et photographiées · pas seulement celles signalées par le patient." },
    { id: "d2", titre: "IA de pré-analyse", description: "Évaluation automatique du risque mélanome sur les images, en amont du médecin. Améliore la priorisation." },
    { id: "d3", titre: "Télé-expertise CHU Caen", description: "Revue finale par un onco-dermatologue du CHU de Caen. Diagnostic de niveau universitaire, depuis n'importe quel territoire." },
    { id: "d4", titre: "Suivi comparatif", description: "Chaque lésion suivie d'une année sur l'autre. Unique en France en mode mobile." },
  ],
  bus: {
    badge: "Produit Hocoia · Pilote Normandie 2026",
    titre: "DermatoBus",
    description:
      "Unité mobile dédiée au dépistage complet du cancer de la peau · cartographie corps entier, dermoscopie IA, télé-expertise onco-dermatologue CHU de Caen.",
    href: "/dermatobus",
    cta: "Découvrir le DermatoBus →",
  },
};

// ─── Protocole ────────────────────────────────────────────────────────────────

export const protocole = {
  eyebrow: "Comment cela se passe",
  h2: "Le dépistage en 4 étapes, simple et rigoureux",
  subtitle: "De votre arrivée à bord à la réception de vos résultats · tout est pris en charge.",
  steps: [
    {
      id: "p1", num: "1",
      titre: "Accueil à bord",
      description: "Un infirmier vous accueille, recueille vos antécédents médicaux et prépare la session de cartographie.",
    },
    {
      id: "p2", num: "2",
      titre: "Cartographie complète",
      description: "Examen de l'intégralité du corps avec dermoscopie numérique. Toutes les lésions photographiées et documentées. Aucune zone oubliée.",
    },
    {
      id: "p3", num: "3",
      titre: "Analyse & triage",
      description: "Pré-analyse IA, puis triage par un médecin généraliste formé. Seuls les cas nécessitant un avis spécialisé sont orientés vers le dermatologue.",
    },
    {
      id: "p4", num: "4",
      titre: "Résultats & suivi",
      description: "Résultats envoyés par email sécurisé sous 2 à 4 semaines. En cas d'anomalie, prise en charge immédiate et orientation vers le spécialiste.",
    },
  ],
};

// ─── Bénéfices ────────────────────────────────────────────────────────────────

export const benefices = {
  eyebrow: "Pourquoi Hocoia",
  h2: "Les atouts du dépistage cutané mobile",
  cards: [
    { id: "b1", titre: "Gratuit pour le patient", description: "Le coût est pris en charge par la collectivité, la mutuelle ou l'entreprise qui organise la campagne. Aucune avance de frais." },
    { id: "b2", titre: "Sans déplacement", description: "Le bus vient dans votre commune, sur votre lieu de travail, ou dans votre établissement." },
    { id: "b3", titre: "Qualité médicale rigoureuse", description: "Protocole validé par le CHU de Caen. Résultats transmis à votre médecin traitant. Télé-expertise par des onco-dermatologues." },
    { id: "b4", titre: "Suivi dans le temps", description: "Vos lésions sont documentées et comparées d'une session à l'autre. La détection des évolutions est automatisée." },
  ],
};

// ─── Pour qui ─────────────────────────────────────────────────────────────────

export const pourQui = {
  eyebrow: "À qui s'adresse ce dépistage",
  h2: "Pour les patients comme pour les organisations",
  subtitle:
    "Patients, entreprises, collectivités, établissements de santé · le dépistage cutané mobile s'adapte à tous les contextes.",
  cards: [
    {
      id: "pq1",
      titre: "Patients & grand public",
      description:
        "Vous vivez en zone rurale, vous avez du mal à obtenir un rendez-vous chez un dermatologue, ou vous souhaitez faire le point sur votre peau.",
      casType: "Dépistage accessible, sans rendez-vous préalable, sans déplacement lointain.",
      href: "/patient",
      cta: "Trouver un passage →",
    },
    {
      id: "pq2",
      titre: "Entreprises & mutuelles",
      description:
        "Proposez un bilan cutané à vos collaborateurs sur site, ou à vos adhérents dans le cadre d'un programme de prévention santé.",
      casType: "Cas type : 150 salariés dépistés en 3 jours sur un site industriel.",
      href: "/entreprises-et-mutuelles",
      cta: "Solutions entreprise →",
    },
    {
      id: "pq3",
      titre: "Collectivités & territoires",
      description:
        "Organisez une campagne de dépistage pour vos administrés. Hocoia gère communication, logistique, médical et bilan.",
      casType: "Cas type : 72 patients dépistés en 3 jours au CCAS de Pertuis.",
      href: "/collectivites-et-institutions",
      cta: "Solutions collectivités →",
    },
    {
      id: "pq4",
      titre: "Établissements de santé",
      description:
        "Externalisez le dépistage hors les murs. Augmentez votre couverture populationnelle sans saturer votre plateau technique.",
      casType: "Cas type : partenariat CHU pour couvrir les zones périphériques.",
      href: "/etablissements-de-sante-et-essms",
      cta: "Partenariats hospitaliers →",
    },
  ],
};

// ─── Témoignages ──────────────────────────────────────────────────────────────

export const temoignages = {
  eyebrow: "",
  h2: "Ce que disent nos patients et partenaires",
  cards: [
    {
      id: "t1",
      contexte: "Patiente · Val de Fensch",
      quote: "Une expérience à poursuivre et à pérenniser. On a beaucoup de mal à avoir des rendez-vous dermato · merci à vous !",
      author: "Mme Nuvolara",
      role: "Patiente, Val de Fensch",
    },
    {
      id: "t2",
      contexte: "Collectivité · Val de Fensch",
      quote: "Il n'y avait plus de dermatologue dans notre zone. Hocoia a organisé 3 jours de dépistage. Nous sommes très satisfaits.",
      author: "Jean-Pierre Cerbai",
      role: "Chargé de la santé, Val de Fensch",
    },
    {
      id: "t3",
      contexte: "Patient · Sélestat",
      quote: "J'avais un grain de beauté suspect depuis des mois. Le dermatologue du bus m'a orienté tout de suite. Aujourd'hui tout va bien · sans ce dépistage j'aurais attendu encore longtemps.",
      author: "Julien, 34 ans",
      role: "Sélestat",
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
    { id: "e3", label: "Cancer du sein",              href: "/solutions/cancer-sein" },
    { id: "e4", label: "Santé de la femme",           href: "/solutions/sante-femme" },
  ],
  busLies: [
    { id: "b1", label: "DermatoBus · dépistage cutané mobile",  href: "/dermatobus" },
    { id: "b2", label: "MédicoBus · cabinet médical mobile",    href: "/produits/medicobus" },
  ],
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "",
  h2: "Tout savoir sur le dépistage du cancer de la peau",
  items: [
    {
      id: "f1",
      question: "À partir de quel âge faut-il se faire dépister ?",
      answer:
        "Le dépistage est recommandé dès 18 ans pour les personnes à risque (peaux claires, antécédents familiaux, nombreux grains de beauté). Pour le grand public, un examen tous les 2 ans à partir de 30-40 ans est conseillé.",
    },
    {
      id: "f2",
      question: "Est-ce douloureux ?",
      answer:
        "Non. L'examen est totalement indolore. Il consiste en une inspection visuelle et photographique de la peau avec un dermoscope numérique. Aucun acte invasif n'est réalisé lors du dépistage.",
    },
    {
      id: "f3",
      question: "Combien de temps dure la consultation ?",
      answer:
        "Environ 15 à 30 minutes selon la surface corporelle à examiner. La cartographie corps entier prend un peu plus de temps qu'un simple examen ciblé.",
    },
    {
      id: "f4",
      question: "Que se passe-t-il si une lésion suspecte est détectée ?",
      answer:
        "En cas d'anomalie, l'équipe médicale vous oriente immédiatement vers le bon spécialiste avec un compte-rendu complet. Votre médecin traitant est également informé.",
    },
    {
      id: "f5",
      question: "Le dépistage est-il remboursé ?",
      answer:
        "Le coût est pris en charge par la collectivité, la mutuelle ou l'entreprise qui organise la campagne. La consultation est gratuite pour le patient, sans avance de frais.",
    },
    {
      id: "f6",
      question: "Comment savoir si le DermatoBus passe près de chez moi ?",
      answer:
        "Consultez le calendrier des passages sur notre page Patient. Vous pouvez aussi activer une alerte pour être prévenu par SMS ou email dès qu'une session est organisée dans votre secteur.",
    },
    {
      id: "f7",
      question: "Comment fonctionne le dépistage du cancer de la peau ?",
      answer:
        "Une infirmière recueille les informations du patient puis photographie les grains de beauté concernés avec un dispositif dédié, jusqu'à 7 grains de beauté. Les dossiers sont ensuite analysés par un dermatologue en télé-expertise.",
    },
    {
      id: "f8",
      question: "Combien de lésions peuvent être examinées ?",
      answer:
        "Jusqu'à sept lésions peuvent être documentées pendant le parcours. Les examens sont analysés par un dermatologue.",
    },
  ],
};

// ─── CTA Final ────────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Prêt à prendre soin de votre peau ?",
  subtitle:
    "Que vous soyez patient ou organisation, Hocoia vous accompagne dans votre démarche de prévention cutanée.",
  ctaPatient: "Je suis patient · Trouver une date",
  ctaPatientHref: "/patient",
  ctaOrga: "Je suis une organisation · Demander une présentation",
  ctaOrgaHref: "/dermatobus",
};
