// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "",
  h1: [
    "Équipez-vous de votre propre bus médical, ",
    { italic: "adapté à votre activité." },
  ],
  subtitle:
    "Hocoia conçoit, équipe et livre des bus médicaux sur mesure pour les collectivités, établissements de santé, mutuelles et entreprises. De la définition du besoin à la mise en service, un accompagnement complet.",
  checks: [
    "Équipements médicaux + aménagement intérieur sur mesure",
    "Intégration HocoApp + interface possible avec votre SIH",
    "Formation des équipes et accompagnement à la mise en service",
    "Plusieurs modes de financement : achat direct, partenariat, leasing",
  ],
  ctaPrimary: "Étudier mon projet d'acquisition",
  ctaOutline: "Voir les étapes ↓",
  form: {
    title: "Étudier mon projet d'acquisition",
    subtitle:
      "Un expert Hocoia étudie votre projet. Étude de faisabilité offerte.",
    typeOptions: [
      "Établissement de santé / CHU",
      "Clinique privée",
      "EHPAD / Médico-social",
      "Collectivité / Institution",
      "Mutuelle / Assurance",
      "Entreprise",
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
    note: "Sans engagement · Confidentiel",
  },
};

// ─── Logos clients propriétaires ─────────────────────────────────────────

export const logos = {
  label: "Ils possèdent leur propre bus médical",
  items: [
    "CC du Grand Verdun",
    "Ministère des AE",
    "Mutuelle Générale d'Avignon",
    "Val de Fensch",
    "MGEN Vendée",
  ],
};

// ─── Pourquoi acquérir ────────────────────────────────────────────────────

export const pourquoi = {
  eyebrow: "Pourquoi acquérir son propre bus",
  h2: "Faites de la prévention une activité durable de votre structure",
  paragraphs: [
    "Acquérir un bus médical Hocoia, c'est se doter d'un outil pérenne pour rayonner sur son territoire, fidéliser ses patients ou ses adhérents, et inscrire la prévention dans la durée.",
    "C'est aussi l'opportunité de proposer un dispositif aux couleurs de votre structure, déployé selon votre calendrier, sans dépendre d'une prestation extérieure.",
  ],
  benefices: [
    {
      id: "b1",
      title: "Activité pérenne et indépendante",
      description:
        "Vous décidez du calendrier, des zones desservies et des protocoles. Le bus est votre outil, pas un service ponctuel.",
    },
    {
      id: "b2",
      title: "Image et visibilité de votre structure",
      description:
        "Branding complet : couleurs, logo, supports de communication. Le bus devient un ambassadeur mobile de votre marque.",
    },
    {
      id: "b3",
      title: "Rentabilité long terme",
      description:
        "Sur plusieurs années, l'acquisition est plus avantageuse qu'une prestation récurrente, et ouvre de nouveaux modèles économiques.",
    },
    {
      id: "b4",
      title: "Intégration au parcours de soins",
      description:
        "Vos équipes, vos protocoles, votre SIH. Le bus s'intègre nativement à votre organisation, sans rupture pour le patient.",
    },
  ],
};

// ─── Cas client Verdun ────────────────────────────────────────────────────

export const casClientVerdun = {
  badge: "Cas client",
  titre: "Bus sur mesure · Pneumologie livré à Verdun",
  description:
    "La Communauté de communes du Grand Verdun a fait concevoir un bus médical sur mesure dédié au dépistage des maladies respiratoires dans ses communes rurales. Spécialité : pneumologie. Un projet conçu sur 6 mois, livré clé en main.",
  faits: [
    { label: "Territoire", value: "Grand Verdun · Meuse (55)" },
    { label: "Spécialité", value: "Pneumologie · Spirométrie" },
    { label: "Financement", value: "DETR + fonds régionaux" },
    { label: "Déploiement", value: "6 mois de la commande à la 1ʳᵉ mission" },
  ],
  quote: "On avait besoin d'un outil qui soit vraiment le nôtre, à nos couleurs, qu'on puisse déployer selon notre agenda. Hocoia nous a accompagnés de A à Z.",
  author: "Directrice de la santé publique, CC du Grand Verdun",
  ctaLabel: "Lire le cas client →",
  ctaHref: "/ressources/cas-clients",
};

// ─── Processus d'acquisition ──────────────────────────────────────────────

export const processus = {
  eyebrow: "Comment cela se passe",
  h2: "De l'étude de faisabilité à la mise en service",
  subtitle:
    "Un processus structuré, jalonné, transparent. Chaque étape est validée avec vous avant de passer à la suivante.",
  steps: [
    {
      id: "p1",
      number: "01",
      title: "Étude de faisabilité",
      description:
        "Cadrage de vos besoins, spécialités cibles, contraintes terrain et budget. Étude offerte, sans engagement.",
      delay: "J+7",
    },
    {
      id: "p2",
      number: "02",
      title: "Conception sur mesure",
      description:
        "Design du bus, choix des équipements médicaux, aménagement intérieur, intégration HocoApp et SIH si souhaitée.",
      delay: "M+1",
    },
    {
      id: "p3",
      number: "03",
      title: "Construction & équipement",
      description:
        "Aménagement du véhicule, installation des équipements médicaux, tests qualité et conformité réglementaire.",
      delay: "M+4",
    },
    {
      id: "p4",
      number: "04",
      title: "Formation & livraison",
      description:
        "Formation de vos équipes soignantes à l'utilisation du bus et de HocoApp. Livraison sur site.",
      delay: "M+6",
    },
    {
      id: "p5",
      number: "05",
      title: "Mise en service & support",
      description:
        "Première journée patient accompagnée par Hocoia. Maintenance et support opérationnel dans la durée.",
      delay: "M+7",
    },
  ],
};

// ─── Configurations disponibles ───────────────────────────────────────────

export const configurations = {
  eyebrow: "Configurations standards",
  h2: "Concevez votre bus sur mesure ou choisissez un modèle existant",
  subtitle:
    "Bénéficiez d'une configuration entièrement personnalisée selon vos spécialités. Ou partez de nos modèles MédicoBus, MammoBus et DermatoBus, livrés tels quels.",
  modeles: [
    {
      id: "m1",
      badge: "MédicoBus",
      title: "Bilan cardiovasculaire & prévention",
      description:
        "ECG, tensiomètre, bilan sanguin, consultation à distance. Le modèle généraliste pour le check-up et la prévention multi-pathologie.",
      cta: "Voir le MédicoBus →",
      href: "/produits/medicobus",
    },
    {
      id: "m2",
      badge: "MammoBus",
      title: "Dépistage cancer du sein",
      description:
        "Mammographie + échographie embarquées. 24 femmes par journée. Spécialisé pour le dépistage organisé du cancer du sein.",
      cta: "Voir le MammoBus →",
      href: "/mammobus",
    },
    {
      id: "m3",
      badge: "DermatoBus",
      title: "Dépistage cancer de la peau",
      description:
        "Cartographie corps entier + IA mélanome + télé-expertise dermatologue. Le bus dédié au dépistage du cancer de la peau.",
      cta: "Voir le DermatoBus →",
      href: "/dermatobus",
    },
  ],
  surMesure: {
    badge: "Sur mesure",
    title: "Une spécialité non couverte par nos modèles ?",
    description:
      "Hocoia conçoit des bus médicaux pour toute spécialité ou combinaison de spécialités. Chaque projet sur mesure suit le même processus rigoureux : étude de faisabilité, conception, équipement, conformité réglementaire, formation et livraison.",
    points: [
      {
        title: "Toute spécialité médicale",
        description: "Si une discipline peut s'exercer à bord d'un véhicule aménagé, Hocoia peut le concevoir.",
      },
      {
        title: "Équipements adaptés",
        description: "Sélection, intégration et validation des dispositifs médicaux spécifiques à votre protocole.",
      },
      {
        title: "Branding complet",
        description: "Couleurs, logo, signalétique intérieure et extérieure aux couleurs de votre structure.",
      },
      {
        title: "Même accompagnement",
        description: "Étude offerte, processus jalonné, formation des équipes, maintenance long terme.",
      },
    ],
    cta: "Étudier mon projet sur mesure →",
  },
};

// ─── Financement ──────────────────────────────────────────────────────────

export const financement = {
  eyebrow: "Modes de financement",
  h2: "Plusieurs options selon votre profil",
  subtitle:
    "Hocoia vous accompagne dans l'identification du modèle de financement le plus adapté à votre structure et à votre projet.",
  options: [
    {
      id: "f1",
      title: "Achat direct",
      description:
        "Acquisition en propre du bus médical. Idéal pour les structures qui souhaitent un actif durable et une maîtrise complète.",
    },
    {
      id: "f2",
      title: "Partenariat hospitalier",
      description:
        "Pour les CHU et hôpitaux : modèles de partenariat long terme avec co-investissement et exploitation conjointe.",
    },
    {
      id: "f3",
      title: "Location longue durée",
      description:
        "Étalement de l'investissement sur plusieurs années. Adapté aux structures qui préfèrent préserver leur trésorerie.",
    },
    {
      id: "f4",
      title: "Modèles sponsorisés",
      description:
        "Mobilisation de mutuelles, ARS, fonds régionaux ou sponsors institutionnels pour réduire votre reste à charge.",
    },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "",
  h2: "Vos questions sur l'acquisition d'un bus médical",
  items: [
    {
      id: "q1",
      question: "Quel est le délai moyen entre la commande et la livraison ?",
      answer:
        "Comptez en moyenne 6 à 9 mois entre la signature et la mise en service, selon la complexité de la configuration et le niveau de personnalisation.",
    },
    {
      id: "q2",
      question: "Peut-on choisir une spécialité médicale spécifique ?",
      answer:
        "Oui. Hocoia conçoit des bus pour toutes les spécialités : cardiologie, dermatologie, mammographie, ophtalmologie, gynécologie, pneumologie, bucco-dentaire, santé mentale, etc.",
    },
    {
      id: "q3",
      question: "Hocoia assure-t-il la maintenance après livraison ?",
      answer:
        "Oui. Maintenance technique du véhicule, des équipements médicaux et mises à jour logicielles de HocoApp sont incluses dans nos contrats de support.",
    },
    {
      id: "q4",
      question: "Peut-on personnaliser l'extérieur du bus à nos couleurs ?",
      answer:
        "Oui. Le branding complet (couleurs, logo, signalétique) fait partie de la conception sur mesure et est inclus dans le projet.",
    },
    {
      id: "q5",
      question: "Quel financement est possible si nous sommes une collectivité ?",
      answer:
        "Plusieurs leviers existent : DETR, ARS, fonds régionaux, partenariats mutuelles. Hocoia vous accompagne dans l'identification et le montage du dossier de financement.",
    },
  ],
};

// ─── CTA final ────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Votre bus médical, conçu pour vous.",
  subtitle:
    "Un expert Hocoia étudie votre projet d'acquisition. Étude de faisabilité offerte.",
  ctaPrimary: "Étudier mon projet d'acquisition",
  ctaSecondary: "Télécharger la brochure acquisition",
};

// ─── SEO ──────────────────────────────────────────────────────────────────

export const seoContent = {
  h2: "Achat de bus médical sur mesure pour la prévention et le dépistage",
  intro: [
    "Hocoia conçoit et livre des bus médicaux sur mesure pour les établissements de santé, structures médico-sociales, collectivités, mutuelles et entreprises. Chaque bus est adapté à votre spécialité, vos protocoles et vos contraintes terrain.",
  ],
  blocs: [
    {
      h3: "Un bus médical 100 % personnalisé selon votre spécialité",
      paragraphs: [
        "Hocoia conçoit des bus adaptés à différents usages : prévention cardiovasculaire, dépistage du cancer du sein, dépistage du cancer de la peau, santé de la femme, check-up santé, ophtalmologie, pneumologie, santé bucco-dentaire, santé mentale.",
        "L'aménagement intérieur, les équipements médicaux, l'ergonomie des parcours patients et la configuration du véhicule sont entièrement personnalisés selon vos objectifs.",
      ],
    },
    {
      h3: "Une solution d'acquisition complète et clé en main",
      paragraphs: [
        "De la conception jusqu'à la livraison : définition du besoin, design et conception sur mesure, aménagement médical, intégration des équipements, conformité, formation des équipes et accompagnement à la mise en service.",
        "Hocoia assure également la maintenance et le support opérationnel dans la durée.",
      ],
    },
    {
      h3: "Plusieurs modes de financement",
      paragraphs: [
        "Achat direct, partenariat hospitalier long terme, leasing, ou modèles sponsorisés mobilisant mutuelles et fonds publics. Hocoia vous accompagne dans le montage du financement le plus adapté à votre structure.",
      ],
    },
  ],
};
