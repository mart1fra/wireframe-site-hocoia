// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Expertise · Santé de la femme · Gynécologie & suivi mobile",
  h1Parts: {
    italicA: "Santé de la femme",
    mid: " : un suivi gynécologique ",
    italicB: "accessible à toutes.",
  },
  subtitle:
    "1 femme sur 3 ne bénéficie pas d'un suivi gynécologique régulier faute d'accès. Le MédicoBus Hocoia apporte la consultation sage-femme directement dans votre commune — frottis, suivi contraceptif, dépistage.",
  checks: [
    "3 000 cas de cancer du col de l'utérus évitables par an en France",
    "18 mois de délai moyen chez un gynécologue en zone rurale [À VÉRIFIER]",
    "Frottis, palpation mammaire, consultation sage-femme à bord",
    "Résultats synchrones — résultats immédiats ou sous 48h",
    "Gratuit pour la patiente, organisé par votre collectivité ou employeur",
  ],
  ctaPatient: "Trouver une consultation femme près de chez moi",
  ctaPatientHref: "/patient",
  ctaOrga: "Déployer un programme santé femme",
  ctaOrgaHref: "/produits/medicobus",
  imagePlaceholder: "Consultation gynécologique dans le MédicoBus — sage-femme et patiente",
};

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = [
  { value: "3 000",  label: "cas de cancer du col de l'utérus évitables par an",         source: "INCa 2024" },
  { value: "1/3",    label: "femmes sans suivi gynécologique régulier faute d'accès [À VÉRIFIER]", source: "Santé publique France" },
  { value: "80%",    label: "des cancers du col de l'utérus évitables par le dépistage", source: "INCa 2024" },
  { value: "30 min", label: "pour une consultation sage-femme complète dans le MédicoBus", source: "Protocole Hocoia" },
];

// ─── Pourquoi se faire dépister ───────────────────────────────────────────────

export const pourquoi = {
  eyebrow: "Pourquoi un suivi gynécologique régulier",
  h2: "La santé de la femme : ce qu'il faut savoir",
  paragraphs: [
    "Le suivi gynécologique régulier est essentiel à tous les âges de la vie — de l'adolescence à la ménopause. Il permet de prévenir et dépister des pathologies graves (cancer du col, cancer du sein, IST), d'assurer le suivi contraceptif et de répondre aux questions de santé intime souvent difficiles à aborder.",
    "Or, en France, l'accès à la gynécologie se détériore. Désertification médicale, délais d'attente, frein financier — des milliers de femmes renoncent à des soins pourtant indispensables.",
  ],
  encadres: [
    {
      id: "e1",
      titre: "Qui est concerné ?",
      texte:
        "Toutes les femmes de 18 à 75 ans. Le frottis cervico-vaginal (dépistage cancer du col) est recommandé de 25 à 65 ans, tous les 3 à 5 ans selon l'âge. Le suivi contraceptif, la palpation mammaire et les consultations sage-femme s'adressent à tous les âges.",
    },
    {
      id: "e2",
      titre: "À quelle fréquence ?",
      texte:
        "Une consultation gynécologique annuelle est recommandée pour le suivi global. Le frottis tous les 3 ans entre 25 et 65 ans (après 2 frottis normaux à 1 an d'intervalle). La palpation mammaire tous les ans à partir de 25 ans.",
    },
    {
      id: "e3",
      titre: "Ce que couvre la consultation Hocoia",
      texte:
        "Frottis cervico-vaginal, palpation mammaire, suivi contraceptif (pilule, stérilet, implant), bilan IST, suivi grossesse précoce, consultation ménopause, ordonnance si nécessaire. La sage-femme peut prescrire et orienter vers le gynécologue.",
    },
  ],
};

// ─── Dépistage mobile Hocoia ──────────────────────────────────────────────────

export const depistageHocoia = {
  eyebrow: "La solution Hocoia",
  h2: "Le MédicoBus santé femme : la sage-femme qui vient à vous",
  paragraphs: [
    "Hocoia a configuré son MédicoBus pour la thématique santé de la femme : tensiomètre, frottis cervico-vaginal, palpation mammaire, kit prélèvement, échographe pelvien. La sage-femme à bord réalise la consultation complète et peut prescrire directement.",
    "Résultats synchrones : contrairement à d'autres spécialités, la consultation sage-femme permet une restitution immédiate des résultats cliniques. Le frottis est envoyé au laboratoire partenaire, résultats sous 48 à 72h par email sécurisé.",
  ],
  differenciateurs: [
    { id: "d1", titre: "Sage-femme à bord", description: "Professionnelle de santé habilitée à réaliser frottis, palpations, suivi contraceptif et prescriptions gynécologiques." },
    { id: "d2", titre: "Frottis + labo partenaire", description: "Prélèvement réalisé à bord, envoi au laboratoire partenaire, résultats sous 48-72h par email sécurisé." },
    { id: "d3", titre: "Palpation mammaire incluse", description: "Examen clinique des seins réalisé lors de chaque consultation. Orientation vers le MammoBus si nécessaire." },
    { id: "d4", titre: "Ordonnance possible", description: "La sage-femme peut renouveler une contraception, prescrire un bilan IST ou orienter vers un spécialiste avec compte-rendu." },
  ],
  bus: {
    badge: "MédicoBus · Thématique santé de la femme",
    titre: "MédicoBus — Santé Femme",
    description:
      "Cabinet médical mobile configuré pour la santé gynécologique. Sage-femme à bord, frottis, palpation mammaire, suivi contraceptif, échographe pelvien.",
    href: "/produits/medicobus",
    cta: "Découvrir le MédicoBus →",
  },
};

// ─── Protocole ────────────────────────────────────────────────────────────────

export const protocole = {
  eyebrow: "Comment ça se passe",
  h2: "La consultation en 4 étapes",
  subtitle: "Un suivi gynécologique complet en 30 minutes, dans un espace médical privé à bord.",
  steps: [
    {
      id: "p1", num: "1",
      titre: "Accueil & entretien",
      description: "La sage-femme vous accueille, recueille vos antécédents et votre situation gynécologique. Espace de consultation entièrement privé.",
      badge: "Sage-femme à bord",
    },
    {
      id: "p2", num: "2",
      titre: "Examen clinique",
      description: "Palpation mammaire, examen gynécologique, frottis cervico-vaginal si indiqué, prise de tension. Prélèvements IST selon demande.",
      badge: "15–20 min",
    },
    {
      id: "p3", num: "3",
      titre: "Bilan & prescriptions",
      description: "La sage-femme analyse les résultats cliniques immédiats. Elle peut renouveler une contraception, rédiger une ordonnance ou orienter vers un gynécologue.",
      badge: "Diagnostic synchrone",
    },
    {
      id: "p4", num: "4",
      titre: "Résultats & suivi",
      description: "Résultats cliniques immédiats. Résultats de frottis et bilans IST sous 48 à 72h par email sécurisé. Transmis à votre médecin traitant si vous le souhaitez.",
      badge: "Résultats < 72h",
    },
  ],
};

// ─── Bénéfices ────────────────────────────────────────────────────────────────

export const benefices = {
  eyebrow: "Pourquoi Hocoia",
  h2: "Les atouts de la consultation gynécologique mobile",
  cards: [
    { id: "b1", titre: "Sans déplacement, sans attente", description: "Fini les 18 mois d'attente pour un gynécologue. La sage-femme Hocoia vient dans votre commune, dans votre entreprise." },
    { id: "b2", titre: "Sage-femme qualifiée", description: "Professionnelle de santé habilitée à réaliser l'ensemble des actes gynécologiques de prévention et à prescrire." },
    { id: "b3", titre: "Espace médical privé", description: "La consultation se déroule dans l'espace de soins entièrement clos et privatif du MédicoBus. Confidentialité totale." },
    { id: "b4", titre: "Gratuit pour la patiente", description: "Pris en charge par la collectivité, la mutuelle ou l'entreprise. Sans avance de frais, sans démarche administrative." },
  ],
};

// ─── Pour qui ─────────────────────────────────────────────────────────────────

export const pourQui = {
  eyebrow: "À qui s'adresse ce programme",
  h2: "Pour les femmes comme pour les organisations",
  subtitle:
    "Patientes, entreprises, collectivités, établissements — le suivi gynécologique mobile s'adapte à tous les contextes.",
  cards: [
    {
      id: "pq1",
      titre: "Femmes & grand public",
      description:
        "Vous n'avez pas de gynécologue, vous habitez en zone rurale, ou vous n'avez pas fait de frottis depuis plus de 3 ans. La sage-femme Hocoia vient à vous.",
      casType: "Consultation complète en 30 minutes, sans RDV gynécologue, sans déplacement.",
      href: "/patient",
      cta: "Trouver une date →",
    },
    {
      id: "pq2",
      titre: "Entreprises & mutuelles",
      description:
        "La santé gynécologique est un angle mort de la prévention en entreprise. Proposez une journée santé femme à vos collaboratrices sur site.",
      casType: "Cas type : journée santé femmes dans un site industriel — 60 consultations en 2 jours.",
      href: "/entreprises",
      cta: "Solutions entreprise →",
    },
    {
      id: "pq3",
      titre: "Collectivités & territoires",
      description:
        "Organisez une campagne de suivi gynécologique pour vos administrées. Priorité aux communes sans gynécologue, aux publics précaires.",
      casType: "Cas type : campagne santé femme dans une CC de Moselle, 80 consultations en 3 jours.",
      href: "/acteurs-publics",
      cta: "Solutions collectivités →",
    },
    {
      id: "pq4",
      titre: "Établissements de santé",
      description:
        "Externalisez les consultations gynécologiques de prévention hors les murs. Libérez vos gynécologues pour les cas complexes.",
      casType: "Cas type : partenariat maternité pour le suivi de grossesse précoce en territoires ruraux.",
      href: "/etablissements-sante",
      cta: "Partenariats hospitaliers →",
    },
  ],
};

// ─── Témoignages ──────────────────────────────────────────────────────────────

export const temoignages = {
  eyebrow: "Ils témoignent",
  h2: "Ce que disent nos patientes et partenaires",
  cards: [
    {
      id: "t1",
      contexte: "Coordonnatrice CLS",
      quote: "Un bilan extrêmement positif. Toutes les patientes ont exprimé leur satisfaction — ce dispositif répond à un vrai besoin que nos structures ne peuvent pas couvrir seules.",
      author: "Anne Haller",
      role: "Coordonnatrice du Contrat Local de Santé",
    },
    {
      id: "t2",
      contexte: "Patiente · Haguenau",
      quote: "Cela fait 4 ans que je n'avais pas vu de sage-femme. Le bus est passé dans ma commune et j'ai pu faire mon frottis directement. C'était simple, bienveillant et très professionnel.",
      author: "Sylvie, 42 ans",
      role: "Haguenau, Bas-Rhin",
    },
    {
      id: "t3",
      contexte: "DRH · Entreprise industrielle",
      quote: "Nous avons organisé une journée santé femme sur notre site. Les retours ont été excellents — les collaboratrices ont apprécié la qualité de l'accueil et la confidentialité.",
      author: "Responsable RH",
      role: "Site industriel, Grand Est",
    },
  ],
};

// ─── Maillage interne ─────────────────────────────────────────────────────────

export const maillage = {
  eyebrow: "À explorer aussi",
  h2: "Expertises et solutions associées",
  expertises: [
    { id: "e1", label: "Cancer du sein",              href: "/solutions/cancer-sein" },
    { id: "e2", label: "Check-up santé",              href: "/solutions/checkup" },
    { id: "e3", label: "Prévention cardiovasculaire", href: "/solutions/prevention-cardio" },
    { id: "e4", label: "Cancer de la peau",           href: "/solutions/cancer-peau" },
  ],
  busLies: [
    { id: "b1", label: "MédicoBus — santé de la femme",      href: "/produits/medicobus" },
    { id: "b2", label: "MammoBus — dépistage cancer du sein", href: "/mammobus" },
  ],
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "Questions fréquentes",
  h2: "Tout savoir sur le suivi gynécologique mobile",
  items: [
    {
      id: "f1",
      question: "Qui peut réaliser les actes gynécologiques à bord ?",
      answer:
        "Une sage-femme diplômée d'État. Les sages-femmes sont habilitées à réaliser le frottis, la palpation mammaire, le suivi contraceptif, les bilans IST et à prescrire. Pour les pathologies gynécologiques complexes, elles orientent vers un gynécologue-obstétricien.",
    },
    {
      id: "f2",
      question: "La consultation est-elle confidentielle ?",
      answer:
        "Oui, totalement. La consultation se déroule dans l'espace de soins privé du MédicoBus, entièrement clos. Vos données médicales sont hébergées sur un serveur certifié HDS (Hébergeur de Données de Santé), conformes RGPD.",
    },
    {
      id: "f3",
      question: "Combien de temps dure la consultation ?",
      answer:
        "Environ 30 minutes pour une consultation complète incluant l'entretien, l'examen clinique, le frottis si indiqué et la restitution des résultats cliniques immédiats.",
    },
    {
      id: "f4",
      question: "Quand est-ce que je reçois les résultats du frottis ?",
      answer:
        "Le prélèvement est envoyé au laboratoire partenaire immédiatement après la consultation. Les résultats vous sont transmis par email sécurisé sous 48 à 72 heures.",
    },
    {
      id: "f5",
      question: "La consultation est-elle remboursée ?",
      answer:
        "Le coût est pris en charge par la collectivité, la mutuelle ou l'entreprise organisatrice. La consultation est gratuite pour la patiente, sans avance de frais. Les actes réalisés sont traçables pour le remboursement Assurance Maladie si applicable.",
    },
    {
      id: "f6",
      question: "Peut-on obtenir un renouvellement de pilule lors de la consultation ?",
      answer:
        "Oui. La sage-femme peut renouveler une contraception en cours (pilule, patch, anneau vaginal) et prescrire une contraception d'urgence. Pour un changement de méthode ou la pose d'un stérilet, un rendez-vous dédié est organisé.",
    },
  ],
};

// ─── CTA Final ────────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "La santé de la femme mérite une attention particulière.",
  subtitle:
    "Patiente ou organisation — Hocoia vous accompagne pour que le suivi gynécologique soit accessible à toutes.",
  ctaPatient: "Je suis patiente — Trouver une date",
  ctaPatientHref: "/patient",
  ctaOrga: "Je suis une organisation — Demander une présentation",
  ctaOrgaHref: "/produits/medicobus",
};
