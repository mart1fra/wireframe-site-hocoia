// ─── En-tête ──────────────────────────────────────────────────────────────

export const header = {
  h1: "Se connecter à Hocoia",
  subtitle:
    "Choisissez l'espace correspondant à votre profil pour accéder à vos services.",
};

// ─── Espaces de connexion ─────────────────────────────────────────────────

export const espaces = [
  {
    id: "patient",
    label: "ESPACE PATIENT",
    h3: "Vous êtes patient",
    paragraph: "Consultez vos résultats de dépistage et téléchargez vos comptes-rendus.",
  },
  {
    id: "pro-sante",
    label: "ESPACE PRO SANTÉ",
    h3: "Vous êtes professionnel de santé partenaire",
    paragraph:
      "Gérez vos missions, vos plannings et vos patients via votre espace dédié.",
  },
  {
    id: "client",
    label: "ESPACE CLIENT",
    h3: "Vous avez acquis un bus médical Hocoia",
    paragraph:
      "Accédez à votre application de gestion ou à votre espace de formation pour vos équipes.",
  },
];

// ─── Ligne d'aide compacte ────────────────────────────────────────────────

export const aide = {
  prefixe: "Besoin d'aide ?",
  liens: [
    { label: "Contacter le support" },
    { label: "FAQ connexion" },
    { label: "Demander un accès" },
  ],
};
