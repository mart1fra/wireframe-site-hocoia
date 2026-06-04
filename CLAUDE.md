# Projet Hocoia — Wireframes interactifs

## Contexte
Refonte du site web Hocoia. Hocoia est l'acteur de référence français de la santé mobile et connectée.
On construit des wireframes interactifs haute fidélité pour présenter l'arborescence et les parcours utilisateurs du futur site.

## Documents de référence
Lis ces fichiers AVANT de coder quoi que ce soit :
- `docs/plateforme-de-marque.md` — ton éditorial, personnalité, promesse, valeurs
- `docs/arborescence.md` — structure complète du site, logique UX, pages par profil
- `docs/charte-graphique.md` — couleurs, typographies, éléments graphiques
- `src/data/arborescence.js` — données structurées de l'arbo (JSON prêt à consommer)

## Stack technique
- React (Vite)
- Tailwind CSS v4
- Framer Motion pour toutes les animations
- React Router pour la navigation entre pages

## Design tokens — Couleurs Hocoia

### Couleurs principales (du logo)
- Turquoise foncé : `#00666F` → texte principal, fonds sombres
- Turquoise : `#007E94` → texte secondaire, liens
- Turquoise moyen : `#1DADB5` → accents, badges, boutons secondaires
- Orange : `#F18500` → CTA, mise en avant, données clés
- Jaune : `#FBBE4F` → icônes, éléments décoratifs

### Couleurs web/app
- Fond écran : `#EFF7F8` (bleu pâle)
- Fond zone : `#F8F6F2` (blanc cassé)
- Fond case : `#E8E6E2` (gris clair)
- Icon line : `#F18500` (orange)
- Positif : `#8BC34A` (vert)
- Warning : `#E85D75` (rouge/rose)

### Usage couleurs texte
- Texte courant principal → turquoise foncé `#00666F`
- Texte courant secondaire → turquoise moyen `#1DADB5`
- Texte courant tertiaire → turquoise `#007E94`
- Texte mise en avant → orange `#F18500`
- Texte en réserve → blanc `#FFFFFF`

## Ton éditorial
- Humain et empathique, pédagogique, chaleureux
- Phrases courtes, vocabulaire simple
- Pas de jargon technique non expliqué
- Pas de ton froid ou administratif
- Langage positif, centré sur les solutions
- On parle du terrain, des gens, des résultats

## Règles de design pour les wireframes
- Style épuré mais vivant (pas du gris plat triste)
- Utiliser les vraies couleurs Hocoia, pas du gris wireframe classique
- Texte réel (pas de lorem ipsum) — s'inspirer de la plateforme de marque
- Placeholders d'images avec description du contenu attendu
- Animations douces et cohérentes : ease-out, durée 0.2s-0.35s
- Border-radius généreux : 12px pour les cartes, 24px pour les boutons
- Typographie : font display pour les titres, font body pour le texte

## Conventions de code
- Composants en PascalCase, fichiers en PascalCase.jsx
- Un composant par fichier
- Props destructurées
- Tailwind pour le styling (pas de CSS externe sauf tokens globaux)
- Framer Motion : utiliser `motion.div`, `AnimatePresence`, `variants`

## Adaptation mobile

### Approche
Mobile-first sur la home et les landings d'audience. Les sections clés (hero, sélecteur de profil) sont repensées verticalement, pas juste rétrécies.

### Breakpoints
- Mobile portrait : `max-width: 479px`
- Mobile landscape : `480px – 767px`
- Tablet : `768px – 991px`
- Desktop : `min-width: 992px`

Référence design mobile : **375px** de large (iPhone standard).

### Grille mobile
- 4 colonnes
- Gutter 16px
- Marges latérales 20px (16px min, 24px max)

### Règles UI mobile
- Touch targets : minimum 44×44px pour tout élément cliquable
- Espacement vertical : 24px entre sections, 16px entre blocs internes
- CTA primaire : full-width, padding 16px vertical / 18px horizontal, font-weight 600
- Hero H1 : max 32px, line-height 1.1, max 4 lignes
- Sous-texte hero : 16–18px, max 3 lignes
- Image hero : sous le texte, jamais à côté (sauf icône ≤ 80px)
- Navigation : burger menu, jamais plus de 4 items en nav horizontale
- Sticky CTA en bas d'écran sur les landings de conversion (à valider en review)

### Hiérarchie typographique mobile
- H1 : 28–32px
- H2 : 22–24px
- H3 : 18–20px
- Body : 16px
- Line-height titres : 1.1–1.2 / Line-height body : 1.5

### Sélecteur de profil — version mobile
Toujours proposer les 3 variantes avant de coder :
1. Stack vertical de 3 cards plein écran (image + titre + CTA) — option par défaut
2. Carrousel swipable avec indicateurs de pagination
3. Tabs avec contenu qui change en dessous

### Performance mobile
- Images en WebP avec fallback, `srcset` + `sizes` systématiques
- Lazy loading partout sauf hero
- Police en `font-display: swap`
- Pas de JS bloquant au render

### Méthode
- CSS mobile-first : utiliser `min-width` pour monter en taille, jamais `max-width`
- Toujours montrer un rendu 375px ET 1440px avant commit
- Vérifier les touch targets et le contraste WCAG AA sur chaque section