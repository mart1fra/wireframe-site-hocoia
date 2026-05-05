// ─── En-tête ──────────────────────────────────────────────────────────────

export const header = {
  h1: "Se connecter à Hocoia",
  subtitle:
    "Choisissez l'espace correspondant à votre profil. Vous accéderez ensuite à HocoApp, votre espace formation ou vos résultats.",
};

// ─── Espaces de connexion ─────────────────────────────────────────────────
// Structure unifiée : tous les espaces ont h3, buttons[], lienBas

export const espaces = [
  {
    id: "client",
    label: "ESPACE CLIENT",
    h3: "Vous avez acquis un bus médical Hocoia",
    paragraph:
      "Accédez à votre application de gestion HocoApp ou à votre espace de formation pour vos équipes.",
    buttons: [
      { label: "Accéder à HocoApp →", primary: true },
      { label: "Espace formation →", primary: false },
    ],
    lienBas: "Mot de passe oublié ?",
  },
  {
    id: "pro-sante",
    label: "ESPACE PRO SANTÉ",
    h3: "Vous êtes professionnel de santé partenaire",
    paragraph:
      "Connectez-vous à HocoApp pour gérer vos missions, vos plannings et vos patients, ou accédez à votre espace formation.",
    buttons: [
      { label: "Accéder à HocoApp →", primary: true },
      { label: "Espace formation →", primary: false },
    ],
    lienBas: "Mot de passe oublié ?",
  },
  {
    id: "patient",
    label: "ESPACE PATIENT",
    h3: "Vous êtes patient",
    paragraph: "Consultez vos résultats de dépistage et téléchargez vos comptes-rendus.",
    buttons: [
      { label: "Voir mes résultats →", primary: true },
    ],
    lienBas: "Première connexion ?",
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
