// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Médias & Communication",
  h1: "Espace presse",
  subtitle:
    "Retrouvez ici toutes les informations sur Hocoia : notre fiche d'identité, nos dernières actualités dans les médias, nos communiqués officiels et nos ressources pour les journalistes.",
  ctaPrimary: { label: "Télécharger le kit média", href: "#kit-media" },
  ctaOutline: { label: "Contacter notre équipe presse", href: "#contact-presse" },
};

// ─── Fiche d'identité ─────────────────────────────────────────────────────

export const ficheIdentite = {
  eyebrow: "En bref",
  h2: "Hocoia en quelques mots",
  pitch:
    "Hocoia est une start-up française de santé mobile et connectée fondée en 2021 à Strasbourg. Notre mission : rendre la santé accessible à tous, en tout lieu, grâce à un modèle de santé préventif, mobile et connecté. Nos bus médicaux itinérants équipés de technologies de pointe vont au-devant des citoyens, là où l'offre de soins fait défaut.",
  faits: [
    { label: "Création",              value: "2021" },
    { label: "Siège",                 value: "Strasbourg" },
    { label: "Fondateurs",            value: "Un médecin et des ingénieurs" },
    { label: "Patients accompagnés",  value: "+3 000" },
    { label: "Soutiens",              value: "Bpifrance · French Tech · Wilco · Incuballiance" },
    { label: "Catégorie",             value: "Santé mobile, prévention, télémédecine" },
  ],
  copyHint: "Cliquez sur une valeur pour la copier",
};

// ─── Chiffres & Contexte ──────────────────────────────────────────────────

export const chiffresContexte = {
  eyebrow: "Le contexte",
  h2: "L'enjeu de l'accès aux soins en France",
  items: [
    { value: "30,2%", label: "de la population française vit dans un désert médical",          source: "Rapport sénatorial 2022" },
    { value: "1,6 M", label: "de Français renoncent chaque année à des soins médicaux",        source: "Rapport sénatorial 2022" },
    { value: "3%",    label: "des dépenses de santé françaises sont consacrés à la prévention", source: "ARS 2022" },
  ],
};

// À REMPLACER : placeholders à remplacer par les vraies retombées presse
export const ilsParlentDeNous = {
  eyebrow: "Dans les médias",
  h2: "Ils parlent de nous",
  subtitle: "Retrouvez les articles et reportages consacrés à Hocoia.",
  items: [
    {
      id: "a1",
      media: "Les Échos",
      titre: "Hocoia, la start-up qui amène la médecine dans les déserts médicaux",
      date: "15/03/2025",
      excerpt: "La jeune pousse strasbourgeoise déploie ses bus médicaux connectés à travers la France pour pallier la pénurie de soignants.",
      url: "#",
      type: "Article",
    },
    {
      id: "a2",
      media: "France 3 Grand Est",
      titre: "Reportage : un médicobus sillonne la Moselle",
      date: "02/02/2025",
      excerpt: "Notre équipe a suivi l'équipe Hocoia lors d'une journée de dépistage cardiovasculaire à Sarrebourg.",
      url: "#",
      type: "Reportage TV",
    },
    {
      id: "a3",
      media: "La Tribune",
      titre: "Santé connectée : Hocoia lève des fonds pour accélérer son déploiement",
      date: "12/12/2024",
      excerpt: "La start-up annonce une levée de fonds destinée à étendre sa flotte de bus médicaux et à enrichir sa plateforme HocoApp.",
      url: "#",
      type: "Article",
    },
    {
      id: "a4",
      media: "France Bleu",
      titre: "Le mammobus, plus petit cabinet de mammographie au monde",
      date: "20/10/2024",
      excerpt: "Reportage radio sur cette innovation française qui révolutionne le dépistage du cancer du sein dans les territoires.",
      url: "#",
      type: "Podcast",
    },
    {
      id: "a5",
      media: "Le Quotidien du Médecin",
      titre: "HocoApp : l'outil tout-en-un qui simplifie la coordination des soins",
      date: "08/09/2024",
      excerpt: "Focus sur la plateforme digitale développée par Hocoia, qui réunit prise de RDV, dossier patient et télé-expertise.",
      url: "#",
      type: "Article",
    },
    {
      id: "a6",
      media: "BFM Business",
      titre: "Hocoia, l'innovation au service des territoires",
      date: "30/06/2024",
      excerpt: "Interview du fondateur sur le plateau de BFM Business pour parler du modèle économique et des perspectives.",
      url: "#",
      type: "Interview TV",
    },
  ],
};

// À REMPLACER : placeholders à remplacer par les vrais communiqués
export const communiques = {
  eyebrow: "Communiqués officiels",
  h2: "Nos communiqués de presse",
  subtitle: "Téléchargez nos communiqués officiels en français.",
  items: [
    { id: "c1", titre: "Hocoia annonce une nouvelle levée de fonds pour accélérer son déploiement national",  date: "15/04/2026", fileUrl: "#", fileSize: "PDF · 420 Ko" },
    { id: "c2", titre: "Lancement du MammoBus : le plus petit cabinet mobile de mammographie au monde",       date: "10/09/2025", fileUrl: "#", fileSize: "PDF · 380 Ko" },
    { id: "c3", titre: "Partenariat Hocoia × MGEN : un dispositif de prévention déployé en Vendée",          date: "22/05/2025", fileUrl: "#", fileSize: "PDF · 290 Ko" },
    { id: "c4", titre: "Hocoia atteint le cap de 3 000 patients accompagnés",                                 date: "12/02/2025", fileUrl: "#", fileSize: "PDF · 215 Ko" },
  ],
};

// ─── Kit média ────────────────────────────────────────────────────────────

export const kitMedia = {
  eyebrow: "Ressources visuelles",
  h2: "Kit média à télécharger",
  subtitle: "Tous les éléments dont vous avez besoin pour parler d'Hocoia : logos, photos, charte graphique.",
  items: [
    { id: "k1", emoji: "📦", titre: "Logo Hocoia — pack complet",  description: "Versions couleur, noir, blanc, monochrome. Formats PNG, SVG, EPS.",               fileUrl: "#", fileSize: "ZIP · 4,2 Mo" },
    { id: "k2", emoji: "🎨", titre: "Charte graphique",            description: "Le guide complet : palette, typographies, règles d'usage.",                        fileUrl: "#", fileSize: "PDF · 12 Mo" },
    { id: "k3", emoji: "📷", titre: "Photos des fondateurs",       description: "Portraits haute définition de l'équipe dirigeante.",                               fileUrl: "#", fileSize: "ZIP · 28 Mo" },
    { id: "k4", emoji: "🚌", titre: "Photos des bus médicaux",     description: "Médicobus, MammoBus, DermatoBus. Vues extérieures et intérieures.",                fileUrl: "#", fileSize: "ZIP · 65 Mo" },
    { id: "k5", emoji: "🎬", titre: "B-roll vidéo",                description: "Séquences libres de droits pour vos reportages.",                                  fileUrl: "#", fileSize: "ZIP · 380 Mo" },
    { id: "k6", emoji: "📄", titre: "Fiche d'identité PDF",        description: "Version imprimable de notre fiche d'identité.",                                    fileUrl: "#", fileSize: "PDF · 180 Ko" },
  ],
  rappel: "L'utilisation de la marque Hocoia doit respecter notre charte graphique. Merci de ne pas modifier les logos.",
};

// ─── Contact presse ───────────────────────────────────────────────────────

export const contactPresse = {
  eyebrow: "Vous écrire",
  h2: "Contact presse",
  subtitle:
    "Pour toute demande d'interview, d'information ou de rendez-vous, contactez notre équipe presse.",
  contact: {
    nom:       "Service Presse — Hocoia",
    email:     "presse@hocoia.com",
    telephone: "+33 (0)3 10 45 63 65",
    adresse:   "8 place de l'Hôpital, 67000 Strasbourg",
  },
  ctaPrimary: { label: "Envoyer un email",       href: "mailto:presse@hocoia.com" },
  ctaOutline: { label: "Télécharger la vCard",   href: "#" },
};
