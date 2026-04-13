# Prompts Claude Code — Hocoia Wireframes

Copiez-collez ces prompts dans Claude Code, dans l'ordre.
Attendez que chaque étape soit terminée avant de passer à la suivante.

---

## PROMPT 1 — Initialisation du projet

```
Initialise un projet React avec Vite + Tailwind CSS v4 + Framer Motion + React Router.

Lis le fichier CLAUDE.md pour le contexte complet du projet.

Configure :
- Tailwind avec les couleurs Hocoia comme custom colors dans le config
- Un fichier src/styles/tokens.css avec les CSS variables
- Google Fonts : Sora (display/titres) + DM Sans (body/texte)
- Un alias @ pour src/

Ne crée PAS encore de composants. Juste le setup technique propre.
```

---

## PROMPT 2 — Layout de base + Navbar avec mega-menu animé

```
Lis docs/arborescence.md et src/data/arborescence.js.

Crée les composants de layout :

1. src/components/layout/Navbar.jsx
   - Logo HOCOIA en Sora bold (le O et le C du milieu en orange)
   - Items de nav à partir de navigation dans arborescence.js
   - Au hover sur un item qui a des children → mega-menu animé :
     * Le panneau apparaît avec Framer Motion (opacity 0→1, y -10→0, duration 0.25s ease-out)
     * Fond blanc, rounded-2xl, shadow-xl, border turquoise-mid/10
     * Les sous-items apparaissent en stagger (0.04s de décalage)
     * Chaque sous-item a son icône + label + enfants listés en petit
     * Au hover d'un sous-item : léger slide x (0→3px) + couleur orange
   - Bouton CTA orange "Demander une démo" à droite
   - Au scroll, la navbar devient sticky avec backdrop-blur

2. src/components/layout/Footer.jsx
   - Fond turquoise foncé
   - 4 colonnes : Logo + baseline / Solutions / Ressources / Hocoia
   - Liens à partir de arborescence.js

3. src/components/layout/Layout.jsx
   - Wrapper avec Navbar + children + Footer

Utilise les données de src/data/arborescence.js, ne hardcode rien.
```

---

## PROMPT 3 — Composants UI réutilisables

```
Crée les composants UI de base dans src/components/ui/ :

1. Button.jsx — 2 variantes :
   - primary : fond orange, texte blanc, rounded-full, hover scale 1.03
   - secondary : border turquoise, texte turquoise, hover bg turquoise/5
   - Animation Framer Motion : whileHover scale, whileTap scale 0.97

2. SectionTitle.jsx — props: tagline, title, subtitle
   - Tagline en orange uppercase tracking-wide petit
   - Title en Sora bold turquoise foncé
   - Subtitle en gris
   - Animation : fade-in + slide-up quand visible dans le viewport

3. Card.jsx — props: image, tag, title, description, onClick
   - Image placeholder (fond gris bleu clair avec texte descriptif)
   - Tag en orange uppercase
   - Hover : translateY -4px + shadow plus forte (Framer Motion)

4. StatCard.jsx — props: value, label
   - Chiffre en Sora bold orange, gros
   - Label en petit gris
   - Animation : compteur qui s'incrémente quand visible (de 0 à value)

5. ProfileSelector.jsx — utilise profils depuis arborescence.js
   - 3 cartes côte à côte
   - Hover : border turquoise-mid + fond pale + translateY -2px
   - Icône dans un carré arrondi coloré
   - Chaque carte cliquable → redirige vers la bonne section
```

---

## PROMPT 4 — Page Home

```
Lis docs/plateforme-de-marque.md pour le ton et le contenu.

Crée src/pages/Home.jsx avec ces sections dans l'ordre :

1. Hero
   - Gauche : tagline "La santé en tout lieu" + titre "La santé vient à vous — accessible, préventive, humaine et connectée" + texte court + 2 boutons (Découvrir nos solutions / Voir la vidéo)
   - Droite : placeholder image "Bus Hocoia en action"
   - Fond gradient bleu pâle
   - Animation d'entrée : texte slide-in depuis la gauche, image fade-in depuis la droite

2. Sélecteur de profil (ProfileSelector)
   - Titre "Vous êtes…"
   - 3 cartes : Organisation / Pro santé / Patient

3. Preuves d'impact (4 StatCards)
   - Utilise stats depuis arborescence.js
   - Compteur animé au scroll

4. Aperçu Solutions (3 Cards)
   - Entreprises / Collectivités / Établissements
   - Titre de section + sous-titre

5. Témoignage
   - Citation sur fond turquoise foncé
   - Guillemets jaunes (comme dans la charte)
   - Fade-in au scroll

6. Bandeau CTA
   - Fond gradient orange
   - "Prêt à transformer la santé sur votre territoire ?"
   - Bouton blanc

Toutes les sections apparaissent progressivement au scroll avec Framer Motion.
```

---

## PROMPT 5 — Page Solutions (Entreprises)

```
Crée src/pages/Solutions.jsx

Structure :
1. Breadcrumb : Accueil > Solutions > Entreprises & Assureurs
2. Sous-navigation avec 3 onglets (Entreprises / Acteurs publics / Établissements)
   - Onglet actif : underline orange qui GLISSE d'un onglet à l'autre (Framer Motion layoutId)
   - Au changement d'onglet : contenu fait un crossfade animé
3. Hero avec titre par cible (depuis arborescence.js tagline)
4. Grille des offres (3 cartes depuis children)
5. Section cas clients (3 cartes témoignages)
6. Bandeau CTA conversion

Le contenu change dynamiquement selon l'onglet sélectionné.
Utilise les données de arborescence.js > solutions > children.
```

---

## PROMPT 6 — Page Patients

```
Crée src/pages/Patients.jsx

Ton : bienveillant, simple, empathique. "Votre santé à portée de main."

Sections :
1. Hero doux (fond vert pâle) — "La santé vient à vous, près de chez vous"
2. Comment ça marche — 3 étapes en timeline horizontale :
   - Les étapes apparaissent une par une (stagger 0.15s)
   - Une ligne de progression se dessine entre elles (SVG animé ou border)
   - Step 1: Trouvez une date / Step 2: Venez au bus / Step 3: Recevez vos résultats
3. Carte interactive placeholder — "Prochaines journées de dépistage"
4. Préparer sa venue — 2 colonnes : FAQ accordéon à gauche + photo à droite
   - FAQ : chaque item s'ouvre/ferme avec animation hauteur (AnimatePresence)
```

---

## PROMPT 7 — Page Pro Santé

```
Crée src/pages/ProSante.jsx

Ton : collaboratif. "Un nouveau modèle de santé centré sur la prévention."

1. Hero — "Rejoignez le réseau Hocoia"
2. Sous-nav : Devenir partenaire / Missions / FAQ
3. Pourquoi rejoindre — 3 avantages en cartes
4. Processus d'inscription — 4 étapes en timeline
5. Témoignage soignant
6. CTA "Postuler"
```

---

## PROMPT 8 — Page À propos

```
Crée src/pages/APropos.jsx

1. Hero sur fond turquoise foncé — raison d'être + vision
2. Sous-nav : Vision / Technologie / Équipe / Recrutement
3. Les 4 valeurs (Innovation, Engagement, Proximité, Prévention) en cards
4. Technologie — 2 colonnes : image bus + liste features
5. Équipe — grille 4 colonnes avec placeholders photo
```

---

## PROMPT 9 — Routing + transitions de page

```
Configure React Router avec ces routes :
/ → Home
/solutions → Solutions
/patients → Patients
/pro-sante → ProSante
/a-propos → APropos

Ajoute des transitions de page avec Framer Motion AnimatePresence :
- Page sortante : fade-out + léger slide vers la gauche
- Page entrante : fade-in + léger slide depuis la droite
- Duration 0.3s, ease-out

Met à jour la Navbar pour utiliser les Links de React Router.
Les liens du mega-menu pointent vers les bonnes routes.
```
