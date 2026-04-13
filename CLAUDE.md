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
