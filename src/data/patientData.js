// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  h1: "Votre prochaine consultation santé, près de chez vous.",
  subtitle:
    "Nos bus médicaux Hocoia se déplacent dans votre commune. Trouvez les prochains passages et prenez rendez-vous en 3 clics.",
  searchPlaceholder: "Entrez votre ville ou code postal",
  searchCta: "Rechercher",
  resultats: [
    {
      id: "r1",
      date: "Mar. 15 avril",
      heure: "9h — 16h",
      lieu: "Place de la Mairie, Strasbourg",
      specialites: "Check-up · Cardiologie · Dermatologie",
      ctaPrimary: "Prendre RDV",
      ctaOutline: "Me prévenir",
    },
    {
      id: "r2",
      date: "Jeu. 17 avril",
      heure: "8h30 — 17h",
      lieu: "Parking Leclerc, Haguenau",
      specialites: "Cancer sein · Gynécologie · Check-up",
      ctaPrimary: "Prendre RDV",
      ctaOutline: "Me prévenir",
    },
    {
      id: "r3",
      date: "Sam. 19 avril",
      heure: "9h — 13h",
      lieu: "Place du Marché, Saverne",
      specialites: "Cardiologie · Dermatologie · Bilan sanguin",
      ctaPrimary: "Prendre RDV",
      ctaOutline: "Me prévenir",
    },
  ],
  lienCalendrier: "Voir tous les passages à venir →",
};

// ─── Comment ça marche ────────────────────────────────────────────────────

export const etapes = {
  eyebrow: "Le dépistage en bus",
  h2: "Comment cela se passe ?",
  subtitle:
    "De la prise de rendez-vous à la réception de vos résultats, tout est simple.",
  steps: [
    {
      id: "s1",
      number: "01",
      label: "Avant votre visite",
      title: "Trouvez un passage et réservez",
      points: [
        "Recherchez votre ville sur cette page",
        "Choisissez un créneau qui vous convient",
        "Recevez une confirmation par email",
      ],
      info: "Pas de créneau ? Activez l'alerte et on vous prévient par SMS ou email dès qu'un bus passe près de chez vous.",
    },
    {
      id: "s2",
      number: "02",
      label: "Le jour J",
      title: "Venez au bus, on s'occupe de tout",
      points: [
        "Rendez-vous à l'adresse indiquée avec votre carte vitale",
        "Un professionnel de santé vous accueille à bord",
        "Consultation complète en 20–30 minutes selon la spécialité",
      ],
      info: "Le bus est équipé comme un cabinet médical : échographe, mammographe, ECG, dermoscope.",
    },
    {
      id: "s3",
      number: "03",
      label: "Après votre visite",
      title: "Recevez vos résultats rapidement",
      points: [
        "Résultats envoyés par email sécurisé en moyenne sous 1 semaine",
        "Compte-rendu médical transmis à votre médecin traitant si vous le souhaitez",
        "En cas d'anomalie détectée, orientation immédiate vers un spécialiste",
      ],
      cta: { label: "Voir mes résultats", href: "/se-connecter" },
      info: "Vos données sont protégées : hébergement certifié HDS, conformité RGPD.",
    },
  ],
};

// ─── Spécialités ──────────────────────────────────────────────────────────

export const specialites = {
  eyebrow: "Nos spécialités",
  h2: "Des bilans accessibles pour tous",
  subtitle: "Choisissez le dépistage qui vous concerne.",
  items: [
    {
      id: "sp1",
      titre: "Check-up santé",
      description:
        "Bilan global de prévention : tension, glycémie, cholestérol, IMC, ECG de repos.",
      duree: "~30 min",
      href: "/solutions/checkup",
    },
    {
      id: "sp2",
      titre: "Cancer du sein",
      description:
        "Mammographie mobile dans notre MammoBus. Dépistage recommandé dès 50 ans ou sur facteurs de risque.",
      duree: "~20 min",
      href: "/solutions/cancer-sein",
    },
    {
      id: "sp3",
      titre: "Cardiologie",
      description:
        "ECG complet, bilan cardio-vasculaire, dépistage des facteurs de risque (HTA, arythmie).",
      duree: "~25 min",
      href: "/solutions/prevention-cardio",
    },
    {
      id: "sp4",
      titre: "Dermatologie",
      description:
        "Examen cutané par dermoscopie. Détection précoce des mélanomes et lésions suspectes.",
      duree: "~15 min",
      href: "/solutions/cancer-peau",
    },
    {
      id: "sp5",
      titre: "Santé de la femme",
      description:
        "Suivi gynécologique, frottis, consultation sage-femme. Prévention et accompagnement.",
      duree: "~30 min",
      href: "/solutions/sante-femme",
    },
  ],
  lienToutes: "Voir toutes nos spécialités →",
};

// ─── Témoignages ──────────────────────────────────────────────────────────

export const temoignages = {
  h2: "Ce que disent nos patients",
  cards: [
    {
      id: "t1",
      stars: "★★★★★",
      quote:
        "J'habite dans un village sans médecin depuis 3 ans. Quand le bus est venu sur la place du marché, j'ai pu faire mon bilan cardio en 20 minutes. Simple, rapide, humain.",
      author: "Françoise, 63 ans",
      lieu: "Saverne, Bas-Rhin",
    },
    {
      id: "t2",
      stars: "★★★★★",
      quote:
        "Ma mammographie était prévue dans 4 mois au centre le plus proche. Avec Hocoia, je l'ai faite la semaine dernière dans ma commune.",
      author: "Marie-Claire, 58 ans",
      lieu: "Haguenau",
    },
    {
      id: "t3",
      stars: "★★★★★",
      quote:
        "J'avais un grain de beauté suspect depuis des mois. Le dermatologue du bus m'a orienté tout de suite. Aujourd'hui tout va bien, mais sans ce dépistage j'aurais attendu encore longtemps.",
      author: "Julien, 34 ans",
      lieu: "Sélestat",
    },
  ],
  statsLine: "4 800+ patients accompagnés · 98% de satisfaction · 80+ communes desservies",
};

// ─── FAQ ──────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: "",
  h2: "Vos questions sur le dépistage en bus",
  items: [
    {
      id: "q1",
      question: "Dois-je prendre rendez-vous ?",
      answer:
        "C'est recommandé pour garantir votre créneau, mais certaines journées acceptent les venues sans rendez-vous selon la disponibilité.",
    },
    {
      id: "q2",
      question: "Combien de temps dure la consultation ?",
      answer:
        "Entre 20 et 30 minutes selon la spécialité.",
    },
    {
      id: "q3",
      question: "Qui sont les professionnels à bord ?",
      answer:
        "Des médecins, infirmiers et spécialistes diplômés, tous inscrits à l'Ordre. Ils exercent en prestation pour Hocoia.",
    },
    {
      id: "q4",
      question: "Comment je reçois mes résultats ?",
      answer:
        "Par email sécurisé sous 1 semaine en moyenne. Le compte-rendu peut aussi être transmis à votre médecin traitant.",
    },
    {
      id: "q5",
      question: "Le bus passe-t-il régulièrement dans ma ville ?",
      answer:
        "Les passages sont planifiés en fonction des demandes et des partenariats locaux. Activez l'alerte pour être prévenu du prochain passage.",
    },
    {
      id: "q6",
      question: "Combien coûte une consultation ?",
      answer: "[Réponse à venir]",
    },
  ],
};

// ─── CTA Final ────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Le bus passe bientôt près de chez vous.",
  subtitle:
    "Recherchez les prochains passages près de chez vous et réservez votre créneau en quelques clics.",
  ctaPrimary: "Voir le calendrier des passages",
  ctaOutline: "Parler à un expert",
};

// ─── SEO ───────────────────────────────────────────────────────────────────

export const seoContent = {
  h2: "Prévention santé et dépistage mobile pour les patients",
  intro: [
    "Hocoia facilite l'accès à la prévention santé, au dépistage médical et aux actions de santé publique grâce à des dispositifs mobiles présents partout en France. Notre objectif est de rendre les examens de prévention plus simples, plus proches et plus accessibles pour tous les patients.",
  ],
  blocs: [
    {
      h3: "Un accès facilité au dépistage et à la prévention",
      paragraphs: [
        "Les solutions mobiles Hocoia permettent de réaliser des journées de dépistage et de prévention santé directement au plus près des lieux de vie ou de travail.",
        "Selon les campagnes organisées, les patients peuvent bénéficier de : dépistage du cancer du sein, prévention des maladies cardiovasculaires, dépistage du cancer de la peau, santé de la femme, check-up santé global.",
        "Ces actions de prévention permettent d'identifier plus tôt certains risques et d'améliorer la prise en charge médicale.",
      ],
    },
    {
      h3: "Des dispositifs mobiles de santé accessibles partout",
      paragraphs: [
        "Grâce à nos unités mobiles comme le MédicoBus ou le MammoBus, les patients peuvent accéder à des examens de prévention sans avoir à se déplacer loin de leur domicile.",
        "Ces dispositifs sont installés temporairement dans différentes zones : entreprises, collectivités, événements de santé, zones rurales ou urbaines, territoires en manque d'accès aux soins.",
        "L'objectif est de réduire les inégalités d'accès à la prévention et au dépistage.",
      ],
    },
    {
      h3: "Une démarche simple et accompagnée",
      paragraphs: [
        "Les journées de prévention sont organisées pour offrir une expérience fluide aux patients : information en amont, inscription simplifiée, accueil par des professionnels de santé, parcours de dépistage adapté, remise d'informations et orientation si nécessaire.",
      ],
    },
    {
      h3: "Une prévention santé plus proche de vous",
      paragraphs: [
        "Hocoia s'engage à rapprocher la prévention santé des patients en développant des solutions mobiles innovantes. En facilitant l'accès au dépistage et aux check-ups de santé, nous contribuons à une meilleure prévention des maladies et à une prise en charge plus précoce des risques de santé.",
      ],
    },
  ],
};
