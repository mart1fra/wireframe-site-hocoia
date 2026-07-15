// Mappe chaque route à son fil d'ariane.
// Format : tableau d'objets { label, href }
// Le dernier élément est la page actuelle (pas de href nécessaire, rendu en texte)

export const breadcrumbsMap = {
  // ─── Profils ───────────────────────────────────────────────────────────────
  "/entreprises-et-mutuelles":      [{ label: "Vous êtes" }, { label: "Entreprises & mutuelles" }],
  "/collectivites-et-institutions": [{ label: "Vous êtes" }, { label: "Collectivités & Acteurs locaux" }],
  "/etablissements-de-sante-et-essms": [{ label: "Vous êtes" }, { label: "Établissements de santé & médico-sociaux" }],
  "/patient":                       [{ label: "Vous êtes" }, { label: "Patients" }],
  "/professionnels-de-sante":       [{ label: "Vous êtes" }, { label: "Professionnels de santé" }],

  // ─── Solutions · services ──────────────────────────────────────────────────
  "/nos-solutions":                [{ label: "Nos solutions" }],
  "/solutions/prevention-cardio":  [{ label: "Nos solutions", href: "/nos-solutions" }, { label: "Prévention cardiovasculaire" }],
  "/solutions/cancer-peau":        [{ label: "Nos solutions", href: "/nos-solutions" }, { label: "Cancer de la peau" }],
  "/solutions/checkup":            [{ label: "Nos solutions", href: "/nos-solutions" }, { label: "Check-up santé" }],
  "/solutions/cancer-sein":        [{ label: "Nos solutions", href: "/nos-solutions" }, { label: "Cancer du sein" }],
  "/solutions/sante-femme":        [{ label: "Nos solutions", href: "/nos-solutions" }, { label: "Santé de la femme" }],

  // ─── Solutions · produits ──────────────────────────────────────────────────
  "/acquerir-un-bus":       [{ label: "Nos solutions", href: "/nos-solutions" }, { label: "Acquérir un bus" }],
  "/produits/medicobus":    [{ label: "Nos solutions", href: "/nos-solutions" }, { label: "MédicoBus" }],
  "/mammobus":              [{ label: "Nos solutions", href: "/nos-solutions" }, { label: "MammoBus" }],
  "/produits/mammobus":     [{ label: "Nos solutions", href: "/nos-solutions" }, { label: "MammoBus" }],
  "/dermatobus":            [{ label: "Nos solutions", href: "/nos-solutions" }, { label: "DermatoBus" }],
  "/produits/dermatobus":   [{ label: "Nos solutions", href: "/nos-solutions" }, { label: "DermatoBus" }],
  "/produits/centre-sante": [{ label: "Nos solutions", href: "/nos-solutions" }, { label: "Centre de santé mobile" }],

  // ─── Ressources ────────────────────────────────────────────────────────────
  "/ressources/articles":      [{ label: "Ressources" }, { label: "Articles" }],
  "/ressources/cas-clients":   [{ label: "Ressources" }, { label: "Cas clients" }],
  "/ressources/cas-clients/pertuis-mutuelle-avignon": [
    { label: "Ressources" },
    { label: "Cas clients", href: "/ressources/cas-clients" },
    { label: "Mutuelle Générale d'Avignon" },
  ],
  "/ressources/livres-blancs": [{ label: "Ressources" }, { label: "Livres blancs" }],
  "/ressources/videos":        [{ label: "Ressources" }, { label: "Vidéos" }],
  "/ressources/podcast":       [{ label: "Ressources" }, { label: "Podcast" }],

  // ─── Calendrier ────────────────────────────────────────────────────────────
  "/calendrier": [{ label: "Calendrier des passages" }],

  // ─── Connexion & FAQ ───────────────────────────────────────────────────────
  "/se-connecter": [{ label: "Se connecter" }],
  "/faq":          [{ label: "FAQ" }],

  // ─── À propos ──────────────────────────────────────────────────────────────
  "/a-propos/vision":      [{ label: "À propos" }, { label: "Vision & Mission" }],
  "/a-propos/technologie": [{ label: "À propos" }, { label: "Technologie" }],
  "/a-propos/equipe":      [{ label: "À propos" }, { label: "Équipe" }],
  "/a-propos/recrutement": [{ label: "À propos" }, { label: "Recrutement" }],

  // ─── Autres ────────────────────────────────────────────────────────────────
  "/presse":      [{ label: "Espace presse" }],
  "/contact":     [{ label: "Contact" }],
  "/plan-du-site":[{ label: "Plan du site" }],
  "/avis":        [{ label: "Avis patients" }],
};
