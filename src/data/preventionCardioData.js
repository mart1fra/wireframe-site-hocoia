// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Expertise · Prévention cardiovasculaire · ECG & bilan cardio mobile",
  h1Parts: {
    italicA: "Prévention cardiovasculaire",
    mid: " : agir avant que le ",
    italicB: "cœur ne parle.",
  },
  subtitle:
    "1ère cause de mortalité en France chez les femmes. Les maladies cardiovasculaires tuent 147 000 personnes par an — la plupart auraient pu être prévenues. Le MédicoBus Hocoia apporte le bilan cardio mobile directement dans votre commune.",
  checks: [
    "1ère cause de mortalité en France chez les femmes",
    "12 millions de patients hypertendus dont 30% non diagnostiqués",
    "ECG, bilan lipidique, tension, échographie des carotides à bord",
    "Résultats analysés par un cardiologue en télé-expertise",
    "Examen complet en 25 minutes, sans RDV préalable",
  ],
  ctaPatient: "Trouver un bilan cardio près de chez moi",
  ctaPatientHref: "/patient",
  ctaOrga: "Déployer un programme cardio",
  ctaOrgaHref: "/produits/medicobus",
  imagePlaceholder: "Bilan cardiovasculaire dans le MédicoBus — infirmière réalisant un ECG",
};

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = [
  { value: "147 000", label: "décès par maladie cardiovasculaire par an en France",           source: "Santé publique France 2020" },
  { value: "12 M",   label: "Français hypertendus, dont 30% non diagnostiqués",              source: "INSERM" },
  { value: "1ère",   label: "cause de mortalité chez la femme en France",                    source: "Santé publique France" },
  { value: "25 min", label: "pour un bilan cardiovasculaire complet dans le MédicoBus",      source: "Protocole Hocoia" },
];

// ─── Pourquoi se faire dépister ───────────────────────────────────────────────

export const pourquoi = {
  eyebrow: "Pourquoi se faire dépister",
  h2: "Ce qu'il faut savoir sur les maladies cardiovasculaires",
  paragraphs: [
    "Les maladies cardiovasculaires regroupent l'infarctus du myocarde, l'AVC, l'insuffisance cardiaque, l'hypertension et l'arythmie. Ensemble, elles représentent la 1ère cause de mortalité en France chez la femme et la 2ème cause chez l'homme.",
    "La plupart des facteurs de risque — hypertension, diabète, cholestérol élevé — sont silencieux. Ils ne provoquent pas de symptômes avant qu'un événement grave survienne. C'est pourquoi le dépistage précoce est vital.",
  ],
  encadres: [
    {
      id: "e1",
      titre: "Qui est concerné ?",
      texte:
        "Les personnes de 45 à 70 ans, en particulier celles présentant des facteurs de risque : tabagisme, surpoids, sédentarité, alimentation déséquilibrée, antécédents familiaux cardiovasculaires. Mais aussi les plus jeunes : l'hypertension touche désormais les 30-40 ans.",
    },
    {
      id: "e2",
      titre: "À quelle fréquence ?",
      texte:
        "Un bilan cardiovasculaire complet est recommandé tous les 3 à 5 ans dès 45 ans, ou tous les 2 ans si facteurs de risque identifiés. Vérification de la tension artérielle au minimum une fois par an.",
    },
    {
      id: "e3",
      titre: "Les facteurs de risque à connaître",
      texte:
        "HTA (pression > 14/9), diabète (glycémie à jeun > 1,26 g/L), cholestérol LDL élevé, tabagisme, obésité abdominale (tour de taille > 88 cm femme / 102 cm homme), sédentarité, antécédents familiaux d'infarctus ou d'AVC avant 60 ans.",
    },
  ],
};

// ─── Dépistage mobile Hocoia ──────────────────────────────────────────────────

export const depistageHocoia = {
  eyebrow: "La solution Hocoia",
  h2: "Le MédicoBus cardio : le bilan qui vient à vous",
  paragraphs: [
    "En zone rurale, obtenir un rendez-vous avec un cardiologue peut prendre plusieurs mois. Hocoia a configuré son MédicoBus pour la thématique cardiovasculaire : ECG, tensiomètre connecté, mini-labo biologie, mesures anthropométriques et échographie des carotides — tout à bord.",
    "Le protocole associe une infirmière à bord et un cardiologue en télé-expertise asynchrone. Les résultats sont analysés par le cardiologue et restitués par email sécurisé dans les semaines suivantes, avec les préconisations de suivi.",
  ],
  differenciateurs: [
    { id: "d1", titre: "ECG + bilan lipidique à bord", description: "ECG de repos, glycémie, cholestérol, bilan lipidique complet — sans rendez-vous en laboratoire." },
    { id: "d2", titre: "Échographie des carotides", description: "Détection des plaques et sténoses, visualisation du risque AVC en temps réel." },
    { id: "d3", titre: "Télé-expertise cardiologue", description: "Analyse asynchrone des résultats par un cardiologue. Diagnostic de qualité spécialisée, depuis n'importe quel territoire." },
    { id: "d4", titre: "Profil de risque complet", description: "IMC, périmètre abdominal, tension, constantes — pour établir un score de risque cardiovasculaire global." },
  ],
  bus: {
    badge: "MédicoBus · Thématique cardiovasculaire",
    titre: "MédicoBus — Cardio",
    description:
      "Cabinet médical mobile polyvalent configuré pour la prévention cardiovasculaire. ECG, tensiomètre, mini-labo, échographie des carotides, télé-expertise cardiologue.",
    href: "/produits/medicobus",
    cta: "Découvrir le MédicoBus →",
  },
};

// ─── Protocole ────────────────────────────────────────────────────────────────

export const protocole = {
  eyebrow: "Comment ça se passe",
  h2: "Le bilan cardiovasculaire en 4 étapes",
  subtitle: "Un parcours complet en 25 minutes, de l'accueil à la restitution des résultats.",
  steps: [
    {
      id: "p1", num: "1",
      titre: "Prise des constantes",
      description: "Tension artérielle, fréquence cardiaque, saturation en oxygène, poids, IMC, périmètre abdominal. Bilan anthropométrique complet.",
      badge: "Infirmier·e à bord",
    },
    {
      id: "p2", num: "2",
      titre: "Examens complémentaires",
      description: "ECG de repos 12 dérivations, glycémie capillaire, cholestérol total, bilan lipidique rapide, échographie des carotides si indiquée.",
      badge: "10–15 min",
    },
    {
      id: "p3", num: "3",
      titre: "Analyse du profil de risque",
      description: "Score de risque cardiovasculaire calculé selon les facteurs identifiés (HTA, diabète, tabac, antécédents). Entretien avec l'infirmière.",
      badge: "Infirmier·e + Score SCORE2",
    },
    {
      id: "p4", num: "4",
      titre: "Résultats & préconisations",
      description: "Analyse asynchrone par un cardiologue. Résultats et préconisations envoyés par email sécurisé sous 2 à 4 semaines, transmis au médecin traitant.",
      badge: "Cardiologue en télé-expertise",
    },
  ],
};

// ─── Bénéfices ────────────────────────────────────────────────────────────────

export const benefices = {
  eyebrow: "Pourquoi Hocoia",
  h2: "Les atouts du bilan cardio mobile",
  cards: [
    { id: "b1", titre: "Détection précoce des risques silencieux", description: "HTA, diabète, dyslipidémie : des facteurs de risque qui ne font pas mal mais qui tuent. Le dépistage permet d'agir avant l'infarctus ou l'AVC." },
    { id: "b2", titre: "Accessible sans attente", description: "Créneaux disponibles en quelques jours, dans votre commune. Pas besoin d'un rendez-vous chez le cardiologue." },
    { id: "b3", titre: "Qualité médicale spécialisée", description: "Diagnostic par un cardiologue, pas seulement une mesure de tension. Résultats transmis à votre médecin traitant avec préconisations." },
    { id: "b4", titre: "Bilan complet en 25 minutes", description: "ECG, biologie, constantes et score de risque — tout en une seule session, sans multiplier les déplacements." },
  ],
};

// ─── Pour qui ─────────────────────────────────────────────────────────────────

export const pourQui = {
  eyebrow: "À qui s'adresse ce dépistage",
  h2: "Pour les patients comme pour les organisations",
  subtitle:
    "Patients à risque, entreprises, collectivités, établissements — la prévention cardiovasculaire mobile s'adapte à tous les contextes.",
  cards: [
    {
      id: "pq1",
      titre: "Patients & grand public",
      description:
        "Vous avez plus de 45 ans, des facteurs de risque (tabac, surpoids, antécédents familiaux) ou n'avez pas fait de bilan cardiovasculaire depuis longtemps ?",
      casType: "Bilan complet en 25 minutes, sans RDV préalable, gratuit pour le patient.",
      href: "/patient",
      cta: "Trouver un passage →",
    },
    {
      id: "pq2",
      titre: "Entreprises & mutuelles",
      description:
        "Le risque cardiovasculaire est la 1ère cause d'absentéisme de longue durée. Proposez un bilan cardio à vos collaborateurs — investissement santé mesurable.",
      casType: "Cas type : bilan cardio pour 200 salariés en 3 jours sur site.",
      href: "/entreprises",
      cta: "Solutions entreprise →",
    },
    {
      id: "pq3",
      titre: "Collectivités & territoires",
      description:
        "Organisez une campagne de prévention cardiovasculaire pour vos administrés, en particulier les plus de 50 ans éloignés des centres de santé.",
      casType: "Cas type : 150 bilans réalisés en 2 jours sur la place du marché.",
      href: "/collectivites",
      cta: "Solutions collectivités →",
    },
    {
      id: "pq4",
      titre: "Établissements de santé",
      description:
        "Externalisez le dépistage cardiovasculaire hors les murs. Réduisez la pression sur vos services de cardiologie en filtrant les cas non urgents.",
      casType: "Cas type : partenariat CPTS pour couvrir les zones sans cardiologue.",
      href: "/etablissements-sante",
      cta: "Partenariats hospitaliers →",
    },
  ],
};

// ─── Témoignages ──────────────────────────────────────────────────────────────

export const temoignages = {
  eyebrow: "Ils témoignent",
  h2: "Ce que disent nos patients et partenaires",
  cards: [
    {
      id: "t1",
      contexte: "Patient · Strasbourg",
      quote: "J'habite dans un village sans médecin depuis 3 ans. Quand le bus est venu sur la place du marché, j'ai pu faire mon bilan cardio en 20 minutes. Simple, rapide, humain.",
      author: "Françoise, 63 ans",
      role: "Saverne, Bas-Rhin",
    },
    {
      id: "t2",
      contexte: "Institutionnel · Ministère des AE",
      quote: "L'organisation est remarquable. Tous les créneaux se sont rapidement remplis. Un examen complet en temps très court.",
      author: "Claire Doucerain",
      role: "Responsable DSE, Ministère des AE",
    },
    {
      id: "t3",
      contexte: "DRH · Entreprise industrielle",
      quote: "Nous cherchions une solution concrète pour la santé de nos collaborateurs. Hocoia a su répondre à notre problématique avec sérieux et réactivité.",
      author: "Responsable RH",
      role: "Site industriel Grand Est — 800 salariés",
    },
  ],
};

// ─── Maillage interne ─────────────────────────────────────────────────────────

export const maillage = {
  eyebrow: "À explorer aussi",
  h2: "Expertises et solutions associées",
  expertises: [
    { id: "e1", label: "Check-up santé",    href: "/solutions/checkup" },
    { id: "e2", label: "Cancer de la peau", href: "/solutions/cancer-peau" },
    { id: "e3", label: "Cancer du sein",    href: "/solutions/cancer-sein" },
    { id: "e4", label: "Santé de la femme", href: "/solutions/sante-femme" },
  ],
  busLies: [
    { id: "b1", label: "MédicoBus — cabinet médical mobile (cardio)", href: "/produits/medicobus" },
  ],
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "Questions fréquentes",
  h2: "Tout savoir sur le bilan cardiovasculaire mobile",
  items: [
    {
      id: "f1",
      question: "À partir de quel âge faut-il faire un bilan cardiovasculaire ?",
      answer:
        "Les recommandations HAS conseillent un bilan tous les 5 ans dès 40 ans, et tous les 3 ans à partir de 50 ans. En présence de facteurs de risque (tabac, HTA, diabète, surpoids), un bilan annuel est conseillé dès 35-40 ans.",
    },
    {
      id: "f2",
      question: "Qu'est-ce qu'un ECG et est-ce douloureux ?",
      answer:
        "L'ECG (électrocardiogramme) enregistre l'activité électrique du cœur via des électrodes posées sur la peau. C'est totalement indolore. L'examen dure environ 5 minutes et détecte anomalies de rythme, signes d'ischémie et autres pathologies cardiaques.",
    },
    {
      id: "f3",
      question: "Combien de temps dure la consultation ?",
      answer:
        "Environ 20 à 25 minutes pour un bilan complet (constantes, ECG, biologie, score de risque). L'entretien avec l'infirmière est inclus.",
    },
    {
      id: "f4",
      question: "Quand est-ce que je reçois mes résultats ?",
      answer:
        "Les résultats sont analysés par un cardiologue en télé-expertise asynchrone et transmis par email sécurisé sous 2 à 4 semaines. Le compte-rendu est envoyé à votre médecin traitant si vous y consentez.",
    },
    {
      id: "f5",
      question: "Le bilan est-il remboursé ?",
      answer:
        "Le coût est pris en charge par la collectivité, la mutuelle ou l'entreprise qui organise la campagne. La consultation est gratuite pour le patient. Pour un bilan individuel hors campagne, renseignez-vous auprès de votre médecin traitant.",
    },
    {
      id: "f6",
      question: "Que faire si une anomalie est détectée ?",
      answer:
        "En cas d'anomalie, le cardiologue adresse des préconisations précises dans le compte-rendu. Votre médecin traitant est informé et prend le relais pour le suivi. En cas d'urgence suspectée, vous êtes contacté directement.",
    },
  ],
};

// ─── CTA Final ────────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Votre cœur mérite un bilan.",
  subtitle:
    "Patient ou organisation — Hocoia vous accompagne pour que la prévention cardiovasculaire soit accessible à tous.",
  ctaPatient: "Je suis patient — Trouver une date",
  ctaPatientHref: "/patient",
  ctaOrga: "Je suis une organisation — Demander une présentation",
  ctaOrgaHref: "/produits/medicobus",
};
