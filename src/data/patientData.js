// ─── Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  h1: "Votre prochaine consultation santé, près de chez vous.",
  subtitle:
    "Nos bus médicaux Hocoia se déplace dans votre commune. Trouvez les prochains passages et prenez rendez-vous gratuitement.",
  searchPlaceholder: "Entrez votre ville ou code postal",
  searchCta: "Rechercher",
  resultats: [
    {
      id: "r1",
      date: "Mar. 15 avril",
      heure: "9h — 16h",
      lieu: "Place de la Mairie, Strasbourg",
      specialites: "Check-up · Cardio · Dermato",
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
      specialites: "Cardio · Dermato · Bilan sanguin",
      ctaPrimary: "Prendre RDV",
      ctaOutline: "Me prévenir",
    },
  ],
  lienCalendrier: "Voir tous les passages à venir →",
};

// ─── Comment ça marche ────────────────────────────────────────────────────

export const etapes = {
  eyebrow: "Le dépistage en bus",
  h2: "Comment ça se passe ?",
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
        "Recevez une confirmation par SMS et email",
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
        "Résultats envoyés par email sécurisé sous 48 à 72h",
        "Compte-rendu médical transmis à votre médecin traitant si vous le souhaitez",
        "En cas d'anomalie détectée, orientation immédiate vers un spécialiste",
      ],
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
    },
    {
      id: "sp2",
      titre: "Cancer du sein",
      description:
        "Mammographie mobile dans notre MammoBus. Dépistage recommandé dès 50 ans ou sur facteurs de risque.",
      duree: "~20 min",
    },
    {
      id: "sp3",
      titre: "Cardiologie",
      description:
        "ECG complet, bilan cardio-vasculaire, dépistage des facteurs de risque (HTA, arythmie).",
      duree: "~25 min",
    },
    {
      id: "sp4",
      titre: "Dermatologie",
      description:
        "Examen cutané par dermoscopie. Détection précoce des mélanomes et lésions suspectes.",
      duree: "~15 min",
    },
    {
      id: "sp5",
      titre: "Santé de la femme",
      description:
        "Suivi gynécologique, frottis, consultation sage-femme. Prévention et accompagnement.",
      duree: "~30 min",
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
  eyebrow: "Questions fréquentes",
  h2: "Vos questions sur le dépistage en bus",
  items: [
    {
      id: "q1",
      question: "Est-ce que c'est gratuit ?",
      answer:
        "Oui. Les dépistages sont pris en charge. Munissez-vous de votre carte vitale et de votre mutuelle.",
    },
    {
      id: "q2",
      question: "Dois-je prendre rendez-vous ?",
      answer:
        "C'est recommandé pour garantir votre créneau, mais certaines journées acceptent les venues sans rendez-vous selon la disponibilité.",
    },
    {
      id: "q3",
      question: "Combien de temps dure la consultation ?",
      answer:
        "Entre 15 et 30 minutes selon la spécialité. Vous pouvez combiner plusieurs dépistages lors d'un même passage.",
    },
    {
      id: "q4",
      question: "Qui sont les professionnels à bord ?",
      answer:
        "Des médecins, infirmiers et spécialistes diplômés, tous inscrits à l'Ordre. Ils exercent en prestation pour Hocoia.",
    },
    {
      id: "q5",
      question: "Comment je reçois mes résultats ?",
      answer:
        "Par email sécurisé sous 48 à 72h. Le compte-rendu peut aussi être transmis à votre médecin traitant.",
    },
    {
      id: "q6",
      question: "Le bus passe-t-il régulièrement dans ma ville ?",
      answer:
        "Les passages sont planifiés en fonction des demandes et des partenariats locaux. Activez l'alerte pour être prévenu du prochain passage.",
    },
  ],
};

// ─── CTA Final ────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Le bus passe bientôt près de chez vous.",
  subtitle:
    "Prenez rendez-vous — ou, si vous êtes une organisation, parlons de votre programme santé.",
  ctaPrimary: "Voir le calendrier des passages",
  ctaOutline: "Parler à un expert",
};
