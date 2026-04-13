/**
 * Arborescence complète du site Hocoia
 * Structure de données consommable par les composants React
 */

// ─── Configuration des 3 états de navigation ──────────────────────────────

export const navConfig = {
  default: {
    center: [
      { id: "vous-etes",     label: "Vous êtes",      dropdown: "vous-etes" },
      { id: "nos-solutions", label: "Nos solutions",   dropdown: "nos-solutions" },
      { id: "ressources",    label: "Ressources",      dropdown: "ressources" },
      { id: "a-propos",      label: "À propos",        dropdown: "a-propos" },
    ],
    cta: { label: "Nous contacter", href: "/contact" },
  },
  patient: {
    center: [
      { id: "ressources",      label: "Ressources",                  dropdown: "ressources" },
      { id: "a-propos",        label: "À propos",                    dropdown: "a-propos" },
      { id: "switch-pro",      label: "Vous êtes un professionnel",  href: "/" },
      { id: "switch-soignant", label: "Vous êtes soignant",          href: "/pro-sante" },
    ],
    cta: { label: "Se connecter", href: "#" },
  },
  prosante: {
    center: [
      { id: "ressources",    label: "Ressources",                  dropdown: "ressources" },
      { id: "a-propos",      label: "À propos",                    dropdown: "a-propos" },
      { id: "switch-pro",    label: "Vous êtes un professionnel",  href: "/" },
      { id: "switch-patient",label: "Vous êtes patient",           href: "/patient" },
    ],
    cta: { label: "Se connecter", href: "#" },
  },
};

// ─── Données des menus déroulants ─────────────────────────────────────────

export const megaMenus = {
  "vous-etes": {
    type: "columns",
    columns: [
      {
        id: "b2b",
        title: "B2B",
        items: [
          { id: "entreprises",        label: "Entreprises & Assureurs",         href: "/entreprises" },
          { id: "acteurs-publics",    label: "Acteurs publics et territoires",  href: "/acteurs-publics" },
          { id: "etablissements",     label: "Établissements de santé",         href: "/etablissements-sante" },
        ],
      },
      {
        id: "medical",
        title: "MÉDICAL",
        items: [
          { id: "pro-sante", label: "Professionnels de santé", href: "/pro-sante" },
        ],
      },
      {
        id: "b2c",
        title: "B2C",
        items: [
          { id: "patient", label: "Patients", href: "/patient" },
        ],
      },
    ],
  },

  "nos-solutions": {
    type: "columns",
    columns: [
      {
        id: "services",
        title: "SERVICES",
        items: [
          { id: "prevention-cardio", label: "Prévention maladies cardio", href: "/solutions/prevention-cardio" },
          { id: "cancer-peau",       label: "Cancer de la peau",          href: "/solutions/cancer-peau" },
          { id: "checkup",           label: "Check-up santé",             href: "/solutions/checkup" },
          { id: "cancer-sein",       label: "Cancer du sein",             href: "/solutions/cancer-sein" },
          { id: "sante-femme",       label: "Santé de la femme",          href: "/solutions/sante-femme" },
        ],
      },
      {
        id: "produits",
        title: "PRODUITS",
        items: [
          { id: "medicobus",    label: "MédicoBus",        href: "/produits/medicobus" },
          { id: "mammobus",     label: "MammoBus",         href: "/produits/mammobus" },
          { id: "dermatobus",   label: "DermatoBus",       href: "/produits/dermatobus" },
          { id: "centre-sante", label: "Centre de santé",  href: "/produits/centre-sante" },
        ],
      },
    ],
  },

  ressources: {
    type: "simple",
    items: [
      { id: "articles",      label: "Articles",       href: "/ressources/articles" },
      { id: "cas-clients",   label: "Cas clients",    href: "/ressources/cas-clients" },
      { id: "livres-blancs", label: "Livres blancs",  href: "/ressources/livres-blancs" },
      { id: "videos",        label: "Vidéos",         href: "/ressources/videos" },
      { id: "podcast",       label: "Podcast",        href: "/ressources/podcast" },
    ],
  },

  "a-propos": {
    type: "simple",
    items: [
      { id: "vision",       label: "Vision & Mission",  href: "/a-propos/vision" },
      { id: "technologie",  label: "Technologie",       href: "/a-propos/technologie" },
      { id: "equipe",       label: "Équipe",            href: "/a-propos/equipe" },
      { id: "recrutement",  label: "Recrutement",       href: "/a-propos/recrutement" },
    ],
  },
};

// ─── Données héritées (footer, arbo, etc.) ────────────────────────────────

export const navigation = [
  {
    id: "solutions",
    label: "Solutions",
    type: "conversion",
    description: "Nos offres par cible",
    children: [
      {
        id: "entreprises",
        label: "Entreprises & Assureurs",
        tagline: "Investir dans la santé, c'est investir dans l'humain",
        icon: "🏢",
        children: [
          { id: "depistage-entreprise",       label: "Dépistage en entreprise" },
          { id: "prevention-collaborateurs",  label: "Prévention santé collaborateurs" },
          { id: "programmes-assurantiels",    label: "Programmes assurantiels" },
        ],
      },
      {
        id: "acteurs-publics",
        label: "Acteurs publics & territoires",
        tagline: "Des résultats mesurables pour vos territoires",
        icon: "🏛️",
        children: [
          { id: "depistage-territorial",      label: "Dépistage territorial" },
          { id: "prevention-populationnelle", label: "Prévention populationnelle" },
          { id: "achat-bus",                  label: "Achat de bus" },
        ],
      },
      {
        id: "etablissements-sante",
        label: "Établissements de santé",
        tagline: "Renforcez votre offre de dépistage hors les murs",
        icon: "🏥",
        children: [
          { id: "partenariats-hospitaliers",  label: "Partenariats hospitaliers" },
          { id: "externalisation-depistage",  label: "Externalisation dépistage" },
        ],
      },
    ],
  },
  {
    id: "expertises",
    label: "Expertises",
    type: "seo",
    description: "Nos domaines d'expertise médicale",
    children: [
      { id: "cancer-sein",  label: "Cancer du sein" },
      { id: "dermatologie", label: "Dermatologie" },
      { id: "sante-femme",  label: "Santé femme" },
      { id: "mammographie", label: "Mammographie" },
      { id: "checkup",      label: "Check-up santé" },
    ],
  },
  {
    id: "ressources",
    label: "Ressources",
    type: "contenu",
    description: "Articles, livres blancs, vidéos et plus",
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
    description: "Notre vision et notre équipe",
    children: [
      { id: "vision",      label: "Vision" },
      { id: "technologie", label: "Technologie" },
      { id: "equipe",      label: "Équipe" },
      { id: "recrutement", label: "Recrutement" },
    ],
  },
  {
    id: "pro-sante",
    label: "Professionnels de santé",
    type: "parcours",
    description: "Rejoindre le réseau Hocoia",
    children: [
      { id: "devenir-partenaire",  label: "Devenir partenaire" },
      { id: "missions",            label: "Missions" },
      { id: "faq-pro",             label: "FAQ" },
    ],
  },
  {
    id: "patients",
    label: "Patients",
    type: "parcours",
    description: "Votre santé à portée de main",
    children: [
      { id: "comment-ca-marche", label: "Comment ça marche" },
      { id: "faq-patients",      label: "FAQ" },
    ],
  },
];

// Pages additionnelles (footer / hors nav principale)
export const pagesSecondaires = [
  {
    id: "presse",
    label: "Presse",
    children: [
      { id: "kit-media",      label: "Kit média" },
      { id: "communiques",    label: "Communiqués" },
      { id: "contact-presse", label: "Contact" },
    ],
  },
  {
    id: "faq",
    label: "FAQ",
    description: "Organisée par profil",
    children: [
      { id: "faq-organisations",  label: "Organisations" },
      { id: "faq-professionnels", label: "Professionnels" },
      { id: "faq-patients-global",label: "Patients" },
    ],
  },
];

// Sélecteur de profil (Home)
export const profils = [
  {
    id: "organisations",
    label: "Organisation",
    description: "Collectivité, entreprise, mutuelle, établissement de santé",
    icon: "🏛️",
    cta: "Découvrir nos solutions",
    targetSection: "solutions",
  },
  {
    id: "professionnels",
    label: "Professionnel de santé",
    description: "Rejoindre le réseau, missions disponibles",
    icon: "🩺",
    cta: "Rejoindre Hocoia",
    targetSection: "pro-sante",
  },
  {
    id: "patients",
    label: "Patient",
    description: "Prendre rendez-vous, préparer ma venue",
    icon: "❤️",
    cta: "Trouver une date",
    targetSection: "patients",
  },
];

// Données chiffrées (preuves d'impact)
export const stats = [
  { value: "150K+", label: "Patients dépistés" },
  { value: "45",    label: "Départements couverts" },
  { value: "12",    label: "Bus médicaux" },
  { value: "98%",   label: "Satisfaction patients" },
];

// Types de pages (pour la légende de l'arborescence)
export const pageTypes = {
  conversion: { label: "Conversion (pages business)", color: "#F18500" },
  parcours:   { label: "Parcours utilisateurs",       color: "#1DADB5" },
  seo:        { label: "SEO & Acquisition",           color: "#FBBE4F" },
  contenu:    { label: "Contenu & réassurance",       color: "#00666F" },
};
