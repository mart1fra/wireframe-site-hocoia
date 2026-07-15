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

# Charte graphique Hocoia — synthèse pour intégration web

> Source : charte graphique officielle (Graphéine, 25.06.2026). Ce fichier résume les éléments essentiels pour appliquer la charte au site. À lire avant toute création de composant.

## Marque

- **Nom** : Hocoia
- **Baseline** : "Plus proche de votre santé"
- **Secteur** : santé mobile et connectée (cabinets médicaux mobiles / bus de santé, application patient, plateforme professionnels de santé)
- **Concept du logo** : papillon géométrique construit à partir de ronds et de carrés, qui devient une croix médicale par rotation de 45°. Double symbolique : protection (papillon, ange gardien) + santé (croix médicale). Peut aussi évoquer une silhouette humaine joyeuse.

## Typographie

- **Police retenue : Google Sans Flex** (Google Font, libre de droits)
- Graisses disponibles : thin, light, regular, medium, semibold, bold
- Police fonctionnelle, lisible, moderne, à usage digital
- Fallback recommandé pour le web : `'Google Sans Flex', 'Inter', system-ui, sans-serif` (Google Sans Flex n'est pas toujours disponible via Google Fonts standard — vérifier la disponibilité ou prévoir un fallback proche en attendant)

## Couleurs

### Palette principale (communication institutionnelle, BtoB, Médicobus)

| Nom | Hex | RVB |
|---|---|---|
| Violet | `#8F44FF` | 143, 68, 255 |
| Bleu roi | `#5D7BFA` | 93, 123, 250 |
| Cyan | `#33A8F7` | 51, 168, 247 |
| Bleu ciel | `#01DEF2` | 1, 222, 242 |
| Ivoire | `#FFFCEB` | 255, 252, 235 |
| Gris clair | `#E6E6E6` | 230, 230, 230 |
| Noir | `#000000` | 0, 0, 0 |

Le dégradé bleu (bleu ciel → bleu roi → violet, souvent en diagonale 45°) est un marqueur fort de l'identité — à utiliser sur fonds institutionnels, jamais recréé "à la main" avec d'autres teintes.

### Couleurs techniques (usage interface / application — les plus utiles pour vos composants web)

| Couleur | Hex | Usage |
|---|---|---|
| Bleu ciel | `#01DEF2` | Non lu, nouveau message |
| Bleu roi | `#5D7BFA` | Pictos principaux, bouton principal (CTA) |
| Anthracite | `#586B72` | Typographie secondaire, pictos, boutons techniques |
| Gris clair | `#E6E6E6` | Fond de l'application, boutons secondaires |
| Ivoire | `#FFFCEB` | Fond des zones de texte / fond général clair |
| Rouge | `#FF0112` | Message d'erreur, échec |
| Orange | `#FF7E34` | En cours |
| Jaune soleil | `#FFE864` | En attente |
| Vert anis | `#CCFF9A` | Validation, nouveau |

### Couleurs secondaires (segmentation par offre — usage plus ponctuel)

Deux options présentées dans la charte (à trancher si besoin sur le site) :
- Option 1 (dégradé cohérent) : rose `#D94CE3` pour la santé féminine, jaune soleil `#FECA15` pour la dermatologie, sur base bleu ciel
- Option 2 (couleurs propres par spécialité) : orange et lilas dédiés

### Règles d'application des fonds sur le site (retours client — à respecter strictement)

- **Fond du site : blanc** (`#FFFFFF`), partout, y compris les heros.
- Les sections alternées peuvent avoir un **fond gris clair** (`#E6E6E6` ou plus doux), avec éventuellement un **bloc ivoire posé par-dessus** (`#FFFCEB`) pour créer du relief.
- **Jamais de bloc ou de section ivoire seul** directement sur le fond blanc — et surtout pas pour les heros.
- **Ne pas générer l'icône papillon ni le tracé filaire** : le client s'en occupe lui-même (assets fournis plus tard). Ne pas dessiner de placeholder SVG du logo. Prévoir simplement l'emplacement si nécessaire.

## Règles strictes — interdictions sur le logo

- Ne jamais modifier les couleurs du logo aléatoirement
- Ne jamais modifier le sens/positionnement de l'icône
- Ne jamais déformer les proportions
- Ne jamais flouter ou appliquer un effet graphique
- Ne jamais incliner/pivoter le logo
- Ne jamais modifier le dégradé initial
- Ne jamais ajouter d'ombre portée
- Ne pas utiliser le logo dégradé institutionnel sur fond bleu
- Ne pas utiliser la version ivoire sur un fond trop clair
- Ne pas utiliser la version ivoire sur une photographie trop chargée

## Déclinaisons du logo

1. **Logotype institutionnel complet** (avec baseline) — à privilégier, version couleur sur fond clair
2. **Logotype signature** — sans baseline, tailles intermédiaires
3. **Logotype icône seul** — petits formats, réseaux sociaux, icône d'application

Version ivoire (blanc cassé) sur fond coloré/dégradé quand le contraste l'exige.

## Ton et mise en page par cible — À EXPLOITER POUR LES COMPOSANTS

C'est la partie la plus riche pour des composants "recherchés", plutôt qu'un simple habillage de couleurs :

- **BtoB** (partenaires, entreprises, collectivités) : échelle macro, ton institutionnel rassurant et sérieux. Utilise des courbes larges issues du logo (grandes formes organiques en fond de mise en page), aplats ivoire ou dégradé bleu en zone d'accroche.
- **BtoC** (patients) : échelle micro, ton convivial et ludique. Le papillon se "déplie" en tracé filaire fin qui se balade dans la page — il peut envelopper une photo de personne, dessiner un contour, illustrer un concept (ex : forme de cœur pour Octobre Rose). C'est un système génératif, pas un simple pictogramme statique.
- **Professionnels de santé** : mix institutionnel + accessible. Le papillon délimite une zone photo/visuelle nette (bloc rectangulaire ou forme du papillon), avec un rapport d'adaptabilité/partenariat.

Application (déjà esquissée par l'agence) : fond ivoire, cartes arrondies, badges de statut colorés (vert anis = nouveau, bleu ciel = non lu), sidebar simple avec icônes, hiérarchie par la couleur plutôt que par la taille.

## Ce qu'il reste à fournir pour la conception des composants du site

- [ ] Wireframe du site (structure/hiérarchie de contenu)
- [ ] Exemples de composants/blocs aimés par le client, avec explication de ce qui plaît dans chacun
- [ ] Confirmation : le site cible plutôt BtoB, BtoC (patients) ou les deux ?

## Instruction pour la génération de composants

Ne pas se contenter d'appliquer les couleurs sur la structure existante du wireframe. S'autoriser à :
- casser la grille quand un composant le justifie
- utiliser le tracé filaire du papillon comme élément graphique récurrent (pas seulement comme logo)
- exploiter les couleurs techniques pour créer des micro-interactions et des statuts visuels clairs (comme dans l'app)
- proposer 2-3 variantes par composant clé plutôt qu'une seule solution, en expliquant le parti pris de chacune

## Patterns de référence (exemples aimés par le client, à adapter au contexte santé)

Ces patterns viennent de références fintech mais les principes de composition sont à réutiliser, en remplaçant les données financières par des données santé (rendez-vous, résultats, suivi, prévention). Ne pas copier le style fintech (violet/blanc froid) : appliquer la palette et le ton Hocoia définis plus haut.

1. **Étapes numérotées en cartes** — grille 2×2 (ou 4 en ligne), chaque carte = badge numéroté coloré + icône + titre court + texte de 1-2 lignes. Utile pour un "Comment ça marche" (ex : prendre rendez-vous, être vu par le bus santé, recevoir ses résultats, suivi).

2. **Mockup de téléphone/tablette avec cartes flottantes superposées** — l'écran de l'app Hocoia dans un device (cf. la maquette "Mes documents" déjà existante dans la charte), avec 1-2 petites cartes UI qui débordent du cadre : une notification de rendez-vous, un résultat d'examen, un statut "non lu". Le tracé filaire du papillon peut servir de liaison graphique entre le device et les cartes flottantes, plutôt qu'une simple ombre.

3. **Cartes témoignages patients** — photo (carrée ou ronde), courte citation, nom + contexte (ex : "patiente, dépistage Val de Fensch"), sur fond ivoire ou gris clair contrastant avec le fond de section. Éviter les étoiles de notation façon e-commerce, plutôt un badge "vérifié" discret si besoin.

4. **Bento grid asymétrique pour les features/offres** — mélange de tailles de cartes dans une même grille : une carte texte, une carte avec mini-graphique ou stat (ex : nombre de patients suivis, taux de dépistage), une carte avec mockup d'app, une carte photo. Tailles volontairement inégales plutôt qu'une grille régulière.

5. **Callouts chiffrés flottants** — un chiffre clé mis en avant dans une petite carte qui se superpose à un visuel plutôt qu'aligné dans le texte (ex : "+2000 patients accompagnés", "98% de satisfaction", nombre de bus déployés).

6. **Bandeau de logos partenaires / preuve sociale** — sous le hero, une ligne discrète de logos (collectivités, entreprises partenaires, mutuelles) en niveaux de gris ou anthracite, qui reprend l'esprit "trusted by" sans être trop institutionnel.

7. **Fonds en aplats ou dégradés doux contrastant avec des cartes nettes** — reprendre le dégradé bleu ciel → bleu roi → violet de la charte comme fond de section (hero, CTA final), avec des cartes blanches/ivoire à bords nets ou légèrement arrondis posées par-dessus.

### Adaptation obligatoire au ton Hocoia

- BtoC (patients) : privilégier le tracé filaire du papillon en élément vivant qui traverse la carte plutôt qu'un simple pictogramme statique
- BtoB / Pro santé : privilégier les grandes courbes issues du logo en fond de section plutôt que les cartes flottantes ludiques
- Toujours respecter les couleurs techniques pour les statuts (vert anis = validé, bleu ciel = nouveau/non lu, orange = en cours, rouge = erreur) plutôt que d'inventer un nouveau code couleur pour ces états

## Heros déjà réalisés (base validée, à réutiliser comme référence de structure)

Trois hero déjà designés par le client, qui posent une base cohérente à garder pour la suite du site. Les prochains composants doivent s'accorder à cette structure plutôt que la remettre en question.

### Hero patient (BtoC)
- Titre en deux couleurs : texte principal en anthracite/noir, mot-clé de fin de phrase en dégradé bleu ciel → violet (ex : "plus simple.")
- Bloc de texte descriptif court en dessous, ton rassurant
- CTA principal en pilule dégradé bleu ciel → violet, CTA secondaire en pilule outline
- Lien texte secondaire en dessous pour rediriger vers le parcours BtoB ("Vous êtes une organisation ? → Découvrez nos solutions")
- Illustration : icône papillon en dégradé, avec un tracé filaire noir qui part de l'icône et se prolonge en dehors du cadre du hero — c'est la signature graphique du BtoC à conserver

### Hero entreprises (BtoB)
- Titre en deux couleurs, même logique (mot-clé en dégradé)
- Liste de bénéfices en checkmarks (✓) plutôt qu'un paragraphe — 3 items courts
- CTA principal en pilule dégradé, CTA secondaire en pilule outline
- Formulaire "Parlons de votre projet" dans une carte blanche à droite (nom, prénom, email, entreprise, sélecteur, CTA noir plein "Demander un rendez-vous")
- Fond de section : grand aplat dégradé bleu ciel → violet en diagonale dans le coin inférieur/latéral, qui déborde du cadre

### Hero collectivités (BtoB, variante territoriale)
- Même structure que le hero entreprises (titre, bénéfices en check, formulaire identique à droite)
- Fond de section en aplat cyan uni (au lieu du dégradé diagonal) pour différencier le sous-segment
- Icône papillon en dégradé posée dans le coin, en bas du bloc cyan

### Points de vigilance identifiés sur l'existant
- **Contraste du logo sur fond cyan** (hero collectivités) : la charte interdit le logo dégradé sur fond bleu pour préserver la lisibilité — à vérifier/tester particulièrement sur les angles violets de l'icône, qui peuvent manquer de contraste sur ce fond
- **Couleur des checkmarks** : actuellement en gris/noir neutre. La charte réserve le **vert anis `#CCFF9A`** aux éléments de validation — à utiliser pour les checkmarks de bénéfices plutôt qu'une couleur neutre, pour rester cohérent avec le code couleur défini pour l'app

### Règle de cohérence pour les prochains composants
- Garder le principe "titre bicolore avec mot-clé en dégradé" comme signature de tous les titres de section importants (hero, mais aussi sections clés plus bas dans la page)
- Garder la distinction structurelle : BtoC = tracé filaire + icône qui s'échappe du cadre / BtoB = aplat ou dégradé large en fond de section + formulaire ou preuve chiffrée
- Réutiliser le même patron de formulaire "Parlons de votre projet" pour toute nouvelle page BtoB plutôt que d'en recréer un différent