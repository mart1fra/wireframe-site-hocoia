# Sauvegarde des eyebrows supprimés
> Fichier de référence pour restaurer les petits textes gris au-dessus des sections.
> Format : `eyebrow: "valeur"` ou composant JSX `<Eyebrow>valeur</Eyebrow>`

---

## Fichiers de données (src/data/)

### acquerirUnBusData.js
- L.4 : `eyebrow: "Acquisition · Sur mesure"`
- L.265 : `eyebrow: "Questions fréquentes"`

### cancerSeinData.js
- L.188 : `eyebrow: "Ils témoignent"`
- L.235 : `eyebrow: "Questions fréquentes"`

### cancerPeauData.js
- L.188 : `eyebrow: "Ils témoignent"`
- L.235 : `eyebrow: "Questions fréquentes"`

### checkupData.js
- L.188 : `eyebrow: "Ils témoignent"`
- L.234 : `eyebrow: "Questions fréquentes"`

### dermatobusData.js
- L.82 : `eyebrow: "Le concept"`
- L.133 : `eyebrow: "Le concept"`
- L.351 : `eyebrow: "Ils témoignent"`
- L.452 : `eyebrow: "Questions fréquentes"`

### entrepriseData.js
- L.4 : `eyebrow: "Entreprises & mutuelles"`
- L.61 : `eyebrow: "Pour les entreprises"`
- L.109 : `eyebrow: "Pour les mutuelles"`
- L.189 : `eyebrow: "Témoignages"`
- L.306 : `eyebrow: "Questions fréquentes"`
- L.347 : `eyebrow: "Nos modèles d'engagement"`

### etablissementsData.js
- L.84 : `eyebrow: "Pour les hôpitaux & CHU"`
- L.135 : `eyebrow: "Pour les cliniques privées"`
- L.186 : `eyebrow: "Pour les ESSMS"`
- L.358 : `eyebrow: "Ils en parlent"`
- L.407 : `eyebrow: "Questions fréquentes"`
- L.446 : `eyebrow: "Nos modèles d'engagement"`
- L.519 : `eyebrow: "Acquisition · Sur mesure"`

### homeData.js
- L.196 : `eyebrow: "Pour les organisations"`

### hocoAppData.js
- L.3 : `eyebrow: "Plateforme digitale"` (profil patient)
- L.17 : `eyebrow: "Plateforme digitale"` (profil proSante)
- L.34 : `eyebrow: "Plateforme digitale"` (profil entreprise)
- L.49 : `eyebrow: "Plateforme digitale"` (profil collectivite)
- L.66 : `eyebrow: "Plateforme digitale"` (profil secteurPublic)
- L.83 : `eyebrow: "Plateforme digitale"` (profil etablissement)

### mammobusData.js
- L.82 : `eyebrow: "Le concept"`
- L.135 : `eyebrow: "Le concept"`
- L.285 : `eyebrow: "Ils témoignent"`
- L.453 : `eyebrow: "Questions fréquentes"`

### medicobusData.js
- L.82 : `eyebrow: "Le concept"`
- L.133 : `eyebrow: "Le concept"`
- L.177 : `eyebrow: "Nos thématiques de dépistage"`
- L.281 : `eyebrow: "Le parcours"`
- L.334 : `eyebrow: "Ils témoignent"`
- L.385 : `eyebrow: "Nos solutions MédicoBus"`
- L.506 : `eyebrow: "Questions fréquentes"`

### patientData.js
- L.176 : `eyebrow: "Questions fréquentes"`

### preventionCardioData.js
- L.188 : `eyebrow: "Ils témoignent"`
- L.234 : `eyebrow: "Questions fréquentes"`

### proSanteData.js
- L.55 : `eyebrow: "Votre rôle"`
- L.190 : `eyebrow: "Recrutement"`
- L.209 : `eyebrow: "Avantages prestataires"`
- L.255 : `eyebrow: "Comment cela marche"`
- L.328 : `eyebrow: "FAQ"`

### recrutementData.js (page entière)
- L.4 : `eyebrow: "Rejoignez Hocoia"`
- L.29 : `eyebrow: "Ils témoignent"`
- L.65 : `eyebrow: "Vos journées avec Hocoia"`
- L.131 : `eyebrow: "Pourquoi rejoindre Hocoia"`
- L.161 : `eyebrow: "L'équipe Hocoia"`
- L.233 : `eyebrow: "Comment cela se passe"`
- L.443 : `eyebrow: "Candidature spontanée"`

### santeFemmeData.js
- L.188 : `eyebrow: "Ils témoignent"`
- L.235 : `eyebrow: "Questions fréquentes"`

### secteurPublicData.js
- L.4 : `eyebrow: "Collectivités et institutions"`
- L.87 : `eyebrow: "Pour les collectivités"`
- L.138 : `eyebrow: "Pour les CPTS & MSP"`
- L.194 : `eyebrow: "Notre engagement"`
- L.316 : `eyebrow: "Ils témoignent"`
- L.430 : `eyebrow: "Questions fréquentes"`
- L.475 : `eyebrow: "Nos modèles d'engagement"`
- L.576 : `eyebrow: "Acquisition · Sur mesure"`

### technologieData.js (page entière)
- L.4 : `eyebrow: "Technologie"`
- L.44 : `eyebrow: "Notre approche"`
- L.76 : `eyebrow: "Ce que cela change concrètement"`
- L.103 : `eyebrow: "L'expérience Hocoia"`
- L.175 : `eyebrow: "Dans le bus"`
- L.251 : `eyebrow: "La technologie embarquée dans nos solutions"`

### pressData.js (page entière)
- L.4 : `eyebrow: "Médias & Communication"`
- L.15 : `eyebrow: "En bref"`
- L.33 : `eyebrow: "Le contexte"`
- L.45 : `eyebrow: "Dans les médias"`
- L.108 : `eyebrow: "Communiqués officiels"`
- L.122 : `eyebrow: "Kit média"`
- L.173 : `eyebrow: "Vous écrire"`

---

## Fichiers JSX (composants hardcodés)

### src/pages/ActeursPublics.jsx
- `<Eyebrow>Comment cela marche</Eyebrow>`

### src/pages/EtablissementsSante.jsx
- `<Eyebrow>Comment cela marche</Eyebrow>`

### src/pages/Entreprises.jsx
- `<Eyebrow>Comment cela marche</Eyebrow>`

### src/pages/Contact.jsx
- `<p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Nous contacter</p>`
