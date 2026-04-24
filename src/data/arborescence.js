/**
 * Arborescence complète du site Hocoia
 * Structure de données consommable par les composants React
 */

// ─── Nav principale (unique, identique partout) ───────────────────────────

export const navBar = {
  center: [
    { id: "vous-etes",     label: "Vous êtes",    dropdown: "vous-etes" },
    { id: "nos-solutions", label: "Nos solutions", dropdown: "nos-solutions" },
    { id: "ressources",    label: "Ressources",    dropdown: "ressources" },
    { id: "a-propos",      label: "À propos",      dropdown: "a-propos" },
  ],
  cta:   { label: "Nous contacter", href: "/contact" },
  login: { label: "Se connecter",   href: "#" },
};

// ─── Mega-menus ────────────────────────────────────────────────────────────

export const megaMenus = {

  // ── "Vous êtes" : colonne gauche fixe + zone droite dynamique ─────────
  "vous-etes": {
    type: "profil-switcher",
    leftTitle: "VOUS ÊTES",
    defaultProfile: "patient",

    profiles: [
      {
        id: "patient",
        label: "Patient",
        subtext: "Prévention & RDV",
        icon: "❤️",
        iconBg: "#fce7f3",
        href: "/patient",
        contentKey: "patient",
      },
      {
        id: "entreprise",
        label: "Entreprises & assureurs",
        subtext: "Solutions RH & assurance santé",
        icon: "🏢",
        iconBg: "#ede9fe",
        href: "/entreprises",
        contentKey: "b2b",
      },
      {
        id: "collectivite",
        label: "Secteur public & institutions",
        subtext: "Santé de proximité pour vos territoires",
        icon: "🏛️",
        iconBg: "#dbeafe",
        href: "/acteurs-publics",
        contentKey: "b2b",
      },
      {
        id: "etablissement",
        label: "Acteurs de santé & médico-social",
        subtext: "Dépistage externalisé & partenariats",
        icon: "🏥",
        iconBg: "#ffedd5",
        href: "/etablissements-sante",
        contentKey: "b2b",
      },
      {
        id: "pro-sante",
        label: "Professionnel santé",
        subtext: "Rejoindre l'équipe",
        icon: "🩺",
        iconBg: "#dcfce7",
        href: "/pro-sante",
        contentKey: "pro-sante",
      },
    ],

    profileContent: {

      patient: {
        columns: [
          {
            id: "specialites",
            title: "NOS SPÉCIALITÉS",
            items: [
              { id: "checkup",  label: "Check-up santé",  subtext: "Bilan global de prévention", href: "/patient#specialites" },
              { id: "sein",     label: "Cancer du sein",  subtext: "Mammographie mobile",        href: "/patient#specialites" },
              { id: "cardio",   label: "Cardiologie",     subtext: "ECG & bilan cardio",         href: "/patient#specialites" },
              { id: "dermato",  label: "Dermatologie",    subtext: "Dépistage cutané",           href: "/patient#specialites" },
            ],
          },
          {
            id: "en-un-coup",
            title: "EN UN COUP D'ŒIL",
            items: [
              { id: "calendrier",        label: "Voir le calendrier",  subtext: "Prochains passages par ville", href: "/patient#calendrier" },
              { id: "comment-ca-marche", label: "Comment ça se passe", subtext: "Le déroulé d'une visite",     href: "/patient#comment-ca-marche" },
              { id: "faq-patient",       label: "FAQ",                 subtext: "Vos questions fréquentes",    href: "/patient#faq" },
            ],
          },
        ],
        footer: {
          text: "Le bus passe près de chez vous →",
          btnLabel: "Voir les prochains passages",
          anchor: "#calendrier",
        },
      },

      b2b: {
        columns: [
          {
            id: "solutions-b2b",
            title: "NOS SOLUTIONS",
            items: [
              { id: "offre",   label: "Notre offre",    subtext: "Bus déployé, dashboard, RGPD",          href: "#use-case" },
              { id: "methode", label: "Notre méthode",  subtext: "De la prise de contact au déploiement", href: "#processus" },
              { id: "cas",     label: "Cas clients",    subtext: "Retours d'expérience entreprises",      href: "#cas-clients" },
            ],
          },
          {
            id: "preuves",
            title: "RESSOURCES",
            items: [
              { id: "livres",  label: "Livres blancs & guides", subtext: "Préparez votre décision", href: "#ressources" },
              { id: "faq-b2b", label: "FAQ",                    subtext: "Questions des décideurs", href: "#faq" },
            ],
          },
        ],
        footer: {
          text: "Déployez Hocoia dans votre structure",
          btnLabel: "Parler à un expert",
          anchor: "#contact",
        },
      },

      "pro-sante": {
        columns: [
          {
            id: "rejoindre",
            title: "REJOINDRE LE RÉSEAU",
            items: [
              { id: "avantages", label: "Pourquoi Hocoia",      subtext: "Liberté, impact, rémunération",    href: "#avantages" },
              { id: "profils",   label: "Profils recherchés",   subtext: "Spécialités en recrutement",       href: "#profils" },
              { id: "missions",  label: "Missions disponibles", subtext: "Postulez directement",             href: "#missions" },
              { id: "processus", label: "Comment ça marche",    subtext: "Première mission en 2 semaines",   href: "#processus" },
            ],
          },
          {
            id: "reassurance",
            title: "RÉASSURANCE",
            items: [
              { id: "temoignages", label: "Témoignages prestataires", subtext: "Ce que disent nos médecins",       href: "#temoignages" },
              { id: "faq-pro",     label: "FAQ candidats",            subtext: "Statut, rémunération, conditions", href: "#faq" },
              { id: "candidature", label: "Déposer ma candidature",   subtext: "Réponse sous 48h",                 href: "#candidature" },
            ],
          },
        ],
        footer: {
          text: "Rejoignez le réseau Hocoia →",
          btnLabel: "Postuler",
          anchor: "#candidature",
        },
      },
    },
  },

  // ── "Nos solutions" : liste simple ────────────────────────────────────
  "nos-solutions": {
    type: "simple",
    items: [
      { id: "medicobus",    label: "MédicoBus",       href: "/produits/medicobus" },
      { id: "mammobus",     label: "MammoBus",        href: "/mammobus" },
      { id: "dermatobus",   label: "DermatoBus",      href: "/dermatobus" },
      { id: "centre-sante", label: "Centre de santé", href: "/produits/centre-sante" },
    ],
  },

  // ── "Ressources" : liste simple ───────────────────────────────────────
  ressources: {
    type: "simple",
    items: [
      { id: "articles",      label: "Articles",      href: "/ressources/articles" },
      { id: "cas-clients",   label: "Cas clients",   href: "/ressources/cas-clients" },
      { id: "livres-blancs", label: "Livres blancs", href: "/ressources/livres-blancs" },
      { id: "videos",        label: "Vidéos",        href: "/ressources/videos" },
      { id: "podcast",       label: "Podcast",       href: "/ressources/podcast" },
    ],
  },

  // ── "À propos" : liste simple ─────────────────────────────────────────
  "a-propos": {
    type: "simple",
    items: [
      { id: "vision",      label: "Vision & Mission", href: "/a-propos/vision" },
      { id: "technologie", label: "Technologie",      href: "/a-propos/technologie" },
      { id: "equipe",      label: "Équipe",           href: "/a-propos/equipe" },
      { id: "recrutement", label: "Recrutement",      href: "/a-propos/recrutement" },
    ],
  },
};

// ─── Données héritées (footer, arbo, etc.) ────────────────────────────────

export const navigation = [
  {
    id: "solutions",
    label: "Solutions",
    type: "conversion",
    children: [
      { id: "medicobus",    label: "MédicoBus" },
      { id: "mammobus",     label: "MammoBus" },
      { id: "dermatobus",   label: "DermatoBus" },
      { id: "centre-sante", label: "Centre de santé" },
    ],
  },
  {
    id: "ressources",
    label: "Ressources",
    type: "contenu",
    children: [
      { id: "articles",      label: "Articles" },
      { id: "livres-blancs", label: "Livres blancs" },
      { id: "cas-clients",   label: "Cas clients" },
      { id: "videos",        label: "Vidéos" },
      { id: "podcast",       label: "Podcast" },
    ],
  },
  {
    id: "a-propos",
    label: "À propos",
    type: "contenu",
    children: [
      { id: "vision",      label: "Vision" },
      { id: "technologie", label: "Technologie" },
      { id: "equipe",      label: "Équipe" },
      { id: "recrutement", label: "Recrutement" },
    ],
  },
];

export const pagesSecondaires = [
  {
    id: "presse",
    label: "Presse",
    children: [
      { id: "kit-media",           label: "Kit média" },
      { id: "communiques",         label: "Communiqués" },
      { id: "ils-parlent-de-nous", label: "Ils parlent de nous" },
      { id: "contact-presse",      label: "Contact" },
    ],
  },
  {
    id: "faq",
    label: "FAQ",
    children: [
      { id: "faq-organisations",   label: "Organisations" },
      { id: "faq-pro-medical",     label: "Pro médical" },
      { id: "faq-patients-global", label: "Patients" },
    ],
  },
];

export const profils = [
  {
    id: "organisations",
    label: "Organisation",
    description: "Collectivité, entreprise, mutuelle, établissement de santé",
    icon: "🏛️",
    cta: "Découvrir nos solutions",
  },
  {
    id: "professionnels",
    label: "Professionnel de santé",
    description: "Rejoindre le réseau, missions disponibles",
    icon: "🩺",
    cta: "Rejoindre Hocoia",
  },
  {
    id: "patients",
    label: "Patient",
    description: "Prendre rendez-vous, préparer ma venue",
    icon: "❤️",
    cta: "Trouver une date",
  },
];

export const stats = [
  { value: "150K+", label: "Patients dépistés" },
  { value: "45",    label: "Départements couverts" },
  { value: "12",    label: "Bus médicaux" },
  { value: "98%",   label: "Satisfaction patients" },
];

export const pageTypes = {
  conversion: { label: "Conversion (pages business)", color: "#F18500" },
  parcours:   { label: "Parcours utilisateurs",       color: "#1DADB5" },
  seo:        { label: "SEO & Acquisition",           color: "#FBBE4F" },
  contenu:    { label: "Contenu & réassurance",       color: "#00666F" },
};

// ─── Pages Ressources ─────────────────────────────────────────────────────

export const ressourcesFiltres = ["Tout", "B2B", "Patients", "Pro santé"];

export const ressourcesByType = {

  articles: [
    { id: "a1", title: "Prévention cardiovasculaire en entreprise : les bonnes pratiques",    audience: "B2B" },
    { id: "a2", title: "Comment organiser une journée dépistage dans votre entreprise",       audience: "B2B" },
    { id: "a3", title: "Absentéisme et santé au travail : ce que disent les chiffres 2024",   audience: "B2B" },
    { id: "a4", title: "Préparer sa mammographie mobile : ce qu'il faut savoir",              audience: "Patients" },
    { id: "a5", title: "Dépistage cutané : à quelle fréquence consulter un dermatologue ?",   audience: "Patients" },
    { id: "a6", title: "Rejoindre le réseau Hocoia : témoignages de soignants partenaires",   audience: "Pro santé" },
  ],

  casClients: [
    { id: "cc1", title: "Grand assureur — 3 000 collaborateurs dépistés en 6 mois",                audience: "B2B" },
    { id: "cc2", title: "Territoire Haute-Saône — 12 communes couvertes, 800 bilans réalisés",     audience: "B2B" },
    { id: "cc3", title: "Partenariat hospitalier à Bordeaux — externalisation mammographie",        audience: "B2B" },
    { id: "cc4", title: "PME industrielle de 500 salariés — taux participation 74 %",              audience: "B2B" },
    { id: "cc5", title: "Dépistage itinérant en zone rurale — témoignage d'une patiente",          audience: "Patients" },
    { id: "cc6", title: "Dr. Leclerc, dermatologue — 3 ans de missions avec Hocoia",               audience: "Pro santé" },
  ],

  livresBlancs: [
    { id: "lb1", title: "Santé au travail & absentéisme — état des lieux 2024",                   audience: "B2B" },
    { id: "lb2", title: "Dépistage territorial : guide pratique pour les collectivités",           audience: "B2B" },
    { id: "lb3", title: "ROI de la prévention santé en entreprise : méthodologie et résultats",   audience: "B2B" },
    { id: "lb4", title: "Médecine mobile : enjeux et perspectives 2025",                          audience: "Pro santé" },
    { id: "lb5", title: "Téléconsultation embarquée dans les bus médicaux : état de l'art",       audience: "Pro santé" },
    { id: "lb6", title: "Comprendre le dépistage précoce : guide complet pour les patients",      audience: "Patients" },
  ],

  videos: [
    { id: "v1", title: "Comment fonctionne le MédicoBus en 3 minutes",                       audience: "Patients" },
    { id: "v2", title: "Un bilan de santé complet en 30 minutes — comment ça marche ?",      audience: "Patients" },
    { id: "v3", title: "Témoignages patients — dépistage en bus mobile",                     audience: "Patients" },
    { id: "v4", title: "Déployer Hocoia dans votre entreprise — replay webinaire",           audience: "B2B" },
    { id: "v5", title: "Présentation de la plateforme Hocoia pour les décideurs RH",         audience: "B2B" },
    { id: "v6", title: "Formation protocole MammoBus — session certifiante",                 audience: "Pro santé" },
  ],

  podcasts: [
    { id: "p1", title: "La médecine mobile avec la Dr. Sophie Martin — Épisode 4",           audience: "Pro santé" },
    { id: "p2", title: "Recrutement en santé mobile : freins et opportunités — Épisode 7",   audience: "Pro santé" },
    { id: "p3", title: "L'hôpital hors les murs — interview du Dr. Faure — Épisode 11",      audience: "Pro santé" },
    { id: "p4", title: "Santé préventive en entreprise : retour d'un DRH — Épisode 2",       audience: "B2B" },
    { id: "p5", title: "Mutuelle et dépistage : quelle couverture ? — Épisode 6",            audience: "B2B" },
    { id: "p6", title: "Mon bilan de santé dans un bus — témoignage patient — Épisode 9",   audience: "Patients" },
  ],

};
