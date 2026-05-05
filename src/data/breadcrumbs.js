// Mappe chaque route à son fil d'ariane.
// Format : tableau d'objets { label, href }
// Le dernier élément est la page actuelle (pas de href)

export const breadcrumbsMap = {
  // Profils
  "/entreprises":          [{ label: "Vous êtes", href: null }, { label: "Entreprises & assureurs" }],
  "/acteurs-publics":      [{ label: "Vous êtes", href: null }, { label: "Secteur public & institutions" }],
  "/collectivites":        [{ label: "Vous êtes", href: null }, { label: "Secteur public & institutions" }],
  "/etablissements-sante": [{ label: "Vous êtes", href: null }, { label: "Acteurs de santé & médico-social" }],
  "/patient":              [{ label: "Vous êtes", href: null }, { label: "Patient" }],
  "/pro-sante":            [{ label: "Vous êtes", href: null }, { label: "Professionnel de santé" }],

  // Solutions — services
  "/solutions/prevention-cardio": [{ label: "Nos solutions", href: null }, { label: "Prévention cardio" }],
  "/solutions/cancer-peau":       [{ label: "Nos solutions", href: null }, { label: "Cancer de la peau" }],
  "/solutions/checkup":           [{ label: "Nos solutions", href: null }, { label: "Check-up santé" }],
  "/solutions/cancer-sein":       [{ label: "Nos solutions", href: null }, { label: "Cancer du sein" }],
  "/solutions/sante-femme":       [{ label: "Nos solutions", href: null }, { label: "Santé de la femme" }],

  // Solutions — produits
  "/produits/medicobus":    [{ label: "Nos solutions", href: null }, { label: "MédicoBus" }],
  "/mammobus":              [{ label: "Nos solutions", href: null }, { label: "MammoBus" }],
  "/produits/mammobus":     [{ label: "Nos solutions", href: null }, { label: "MammoBus" }],
  "/dermatobus":            [{ label: "Nos solutions", href: null }, { label: "DermatoBus" }],
  "/produits/dermatobus":   [{ label: "Nos solutions", href: null }, { label: "DermatoBus" }],
  "/produits/centre-sante": [{ label: "Nos solutions", href: null }, { label: "Centre de santé mobile" }],

  // Ressources
  "/ressources/articles":      [{ label: "Ressources", href: null }, { label: "Articles" }],
  "/ressources/cas-clients":   [{ label: "Ressources", href: null }, { label: "Cas clients" }],
  "/ressources/cas-clients/pertuis-mutuelle-avignon": [{ label: "Ressources", href: null }, { label: "Cas clients", href: "/ressources/cas-clients" }, { label: "Mutuelle Générale d'Avignon — Pertuis" }],
  "/ressources/livres-blancs": [{ label: "Ressources", href: null }, { label: "Livres blancs" }],
  "/ressources/videos":        [{ label: "Ressources", href: null }, { label: "Vidéos" }],
  "/ressources/podcast":       [{ label: "Ressources", href: null }, { label: "Podcast" }],

  // Connexion
  "/se-connecter": [{ label: "Se connecter" }],

  // À propos
  "/a-propos/vision":      [{ label: "À propos", href: null }, { label: "Notre vision" }],
  "/a-propos/technologie": [{ label: "À propos", href: null }, { label: "Technologie" }],
  "/a-propos/equipe":      [{ label: "À propos", href: null }, { label: "Équipe" }],
  "/a-propos/recrutement": [{ label: "À propos", href: null }, { label: "Recrutement" }],
};
