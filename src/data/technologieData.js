// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Technologie",
  h1: {
    before: "La technologie qui rend la santé ",
    italic: "accessible partout.",
  },
  subtitle:
    "Hocoia a développé un écosystème numérique propriétaire, des bus connectés jusqu'au suivi patient, pour que chaque consultation soit aussi précise qu'en cabinet.",
  ctaPrimary: "Demander une démo",
  ctaOutline: "Voir nos solutions →",
  pills: [
    {
      id: "hocoapp",
      titre: "HocoApp",
      subtext: "Gestion et suivi patient centralisé",
    },
    {
      id: "hocovisio",
      titre: "HocoVisio",
      subtext: "Téléconsultation augmentée en direct",
    },
    {
      id: "dispositifs",
      titre: "Dispositifs connectés",
      subtext: "10+ équipements médicaux embarqués",
    },
  ],
};

// ─── Chiffres ─────────────────────────────────────────────────────────────

export const chiffres = [
  { value: "2",    label: "Outils propriétaires — HocoApp et HocoVisio" },
  { value: "10+",  label: "Dispositifs médicaux connectés à bord" },
  { value: "100%", label: "Hébergement France — Certifié HDS et RGPD" },
];

// ─── Promesse technologique ────────────────────────────────────────────────

export const promesse = {
  gauche: {
    eyebrow: "Notre approche",
    h2: "Technologie et humain, indissociables.",
    paragraphe:
      "Ce qui distingue Hocoia, c'est la combinaison unique d'une présence humaine qualifiée et d'outils numériques de pointe. Nos patients ne sont pas face à un écran : ils sont accompagnés, examinés, pris en charge.",
    piliers: [
      {
        id: "p1",
        titre: "Un parcours sans rupture",
        description:
          "De la réservation à la remise des résultats, chaque étape est connectée dans un seul écosystème.",
      },
      {
        id: "p2",
        titre: "Données en temps réel",
        description:
          "Les équipements médicaux embarqués transmettent leurs mesures instantanément au médecin consultant.",
      },
      {
        id: "p3",
        titre: "Sécurité maximale",
        description:
          "Données hébergées en France, chiffrées, anonymisées. Aucun compromis sur la confidentialité médicale.",
      },
      {
        id: "p4",
        titre: "Évolution continue",
        description:
          "Nos outils s'améliorent en permanence grâce aux retours du terrain : soignants, médecins, patients.",
      },
    ],
  },
  droite: {
    eyebrow: "Ce que ça change concrètement",
    cartes: [
      {
        id: "patients",
        titre: "Pour les patients",
        texte:
          "Un accès à des soins de qualité sans se déplacer loin. Un suivi numérique simple, accessible depuis n'importe quel appareil. Résultats reçus rapidement, transmis à leur médecin traitant.",
      },
      {
        id: "organisations",
        titre: "Pour les organisations",
        texte:
          "Un déploiement clé en main, piloté numériquement. Des données agrégées et anonymisées pour mesurer l'impact. Zéro gestion informatique de votre côté.",
      },
      {
        id: "professionnels",
        titre: "Pour les professionnels de santé",
        texte:
          "Des outils pensés par et pour les soignants. Prise en main rapide, interface claire, dispositifs médicaux intégrés sans manipulation complexe.",
      },
    ],
  },
};

// ─── Parcours en 4 temps ───────────────────────────────────────────────────

export const parcours = {
  eyebrow: "L'expérience Hocoia",
  h2: "De la prise de rendez-vous aux résultats, entièrement coordonné.",
  etapes: [
    {
      id: "e1",
      numero: "1",
      titre: "Réservation en ligne",
      description:
        "Le patient réserve son créneau et prépare sa consultation depuis son espace personnel.",
    },
    {
      id: "e2",
      numero: "2",
      titre: "Consultation sur site",
      description:
        "Accueil par un soignant dans le bus. Examens réalisés avec les équipements connectés à bord.",
    },
    {
      id: "e3",
      numero: "3",
      titre: "Médecin en direct ou différé",
      description:
        "Téléconsultation assistée en temps réel ou analyse asynchrone selon la spécialité.",
    },
    {
      id: "e4",
      numero: "4",
      titre: "Résultats et suivi",
      description:
        "Compte-rendu transmis au patient et à son médecin traitant. Suivi organisé si nécessaire.",
    },
  ],
};

// ─── HocoApp & HocoVisio ──────────────────────────────────────────────────

export const outils = [
  {
    id: "hocoapp",
    nom: "HocoApp",
    tag: "Application web · Gestion centralisée",
    paragraphe:
      "HocoApp est la plateforme qui connecte tous les acteurs du soin dans un espace commun, sécurisé et intuitif. Chaque utilisateur dispose d'une interface adaptée à son rôle, sans complexité, sans installation.",
    items: [
      "Prise de rendez-vous en ligne, 24h/24",
      "Dossier patient accessible et partageable",
      "Comptes-rendus et ordonnances numériques",
      "Coordination entre tous les acteurs de soin",
      "Accessible depuis tout appareil, sans téléchargement",
    ],
    cta: "Demander une démo →",
  },
  {
    id: "hocovisio",
    nom: "HocoVisio",
    tag: "Téléconsultation augmentée · Temps réel",
    paragraphe:
      "HocoVisio transforme la téléconsultation en une expérience médicale complète. Le médecin consulte à distance comme s'il était présent, grâce aux équipements connectés dans le bus, il dispose de toutes les données nécessaires pour établir un diagnostic précis.",
    items: [
      "Connexion médecin, patient et soignant simultanée",
      "Données médicales transmises en temps réel",
      "Sécurité et confidentialité des échanges",
      "Génération automatique du compte-rendu",
      "Compatible avec tous les dispositifs médicaux du bus",
    ],
    cta: "Demander une démo →",
  },
];

// ─── Dispositifs connectés ─────────────────────────────────────────────────

export const dispositifs = {
  eyebrow: "Dans le bus",
  h2: "Des équipements médicaux de pointe, directement à bord",
  paragraphe:
    "Chaque MédicoBus embarque plus de 10 dispositifs médicaux connectés, sélectionnés et configurés selon la spécialité déployée. Ces équipements sont intégrés à HocoVisio pour permettre un diagnostic assisté en conditions réelles.",
  chips: [
    "Cardiologie",
    "Dermatologie",
    "Santé des femmes",
    "Pneumologie",
    "Biologie rapide",
    "Ophtalmologie",
    "+ autres",
  ],
  note: "La liste complète des équipements par spécialité est présentée lors de la démo ou sur demande.",
  securite: [
    {
      id: "hds",
      titre: "Hébergement HDS France",
      description: "Données de santé hébergées en France, certification HDS.",
      badge: "HDS",
    },
    {
      id: "e2e",
      titre: "Chiffrement de bout en bout",
      description: "Toutes les communications sont cryptées. Aucune donnée accessible en clair.",
      badge: "E2E",
    },
    {
      id: "rgpd",
      titre: "Conformité RGPD",
      description:
        "Données anonymisées pour les partenaires. Aucune donnée individuelle transmise sans consentement.",
      badge: "RGPD",
    },
    {
      id: "agile",
      titre: "Mises à jour continues",
      description:
        "La plateforme évolue en permanence selon les retours terrain et les besoins des praticiens.",
      badge: "AGILE",
    },
  ],
};

// ─── Témoignages ──────────────────────────────────────────────────────────

export const temoignages = [
  {
    id: "t1",
    contexte: "Médecin · Moselle",
    quote:
      "Les outils Hocoia permettent de faire en mobilité ce qu'on ne peut faire qu'en cabinet habituellement. La prise en charge est complète.",
    author: "Dr Arous",
    role: "Médecin généraliste, Moselle",
  },
  {
    id: "t2",
    contexte: "Institutionnel · Ministère AE",
    quote:
      "L'organisation est remarquable. La prise de rendez-vous, le déroulement, tout s'est enchaîné sans friction. Les créneaux se sont remplis en quelques heures.",
    author: "Claire Doucerain",
    role: "Responsable DSE, Ministère des AE",
  },
  {
    id: "t3",
    contexte: "Élu · Angerville",
    quote:
      "Une offre complémentaire qui renforce localement l'accès aux soins tout en désengorgeant les cabinets médicaux. La technologie est au service du territoire.",
    author: "Johann Mittelhausser",
    role: "Maire d'Angerville",
  },
];

// ─── Maillage interne ─────────────────────────────────────────────────────

export const maillage = {
  eyebrow: "La technologie embarquée dans nos solutions",
  h3: "Découvrez nos bus équipés",
  cards: [
    {
      id: "medicobus",
      titre: "MédicoBus",
      description:
        "Cabinet médical mobile polyvalent. HocoApp et HocoVisio intégrés, 10+ dispositifs embarqués.",
      cta: "Découvrir le MédicoBus →",
      href: "/produits/medicobus",
    },
    {
      id: "dermatobus",
      titre: "DermatoBus",
      description:
        "Dépistage du cancer de la peau avec dermatoscope numérique connecté à la plateforme Hocoia.",
      cta: "Découvrir le DermatoBus →",
      href: "/produits/dermatobus",
    },
    {
      id: "mammobus",
      titre: "MammoBus",
      description:
        "Mammographie mobile connectée. Résultats transmis directement sur HocoApp.",
      cta: "Découvrir le MammoBus →",
      href: "/produits/mammobus",
    },
  ],
};

// ─── CTA Final ────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Voir la technologie Hocoia en action.",
  subtitle:
    "30 minutes de démo avec nos équipes : HocoApp, HocoVisio, le parcours complet.",
  ctaPrimary: "Demander une démo",
  ctaOutline: "Nous contacter",
};
