// ─── En-tête ──────────────────────────────────────────────────────────────

export const header = {
  h1: "Questions fréquentes",
  subtitle:
    "Toutes les réponses pour comprendre Hocoia, du dépistage en bus à l'organisation d'une campagne sur votre territoire.",
  searchPlaceholder: "Rechercher dans les FAQ...",
};

// ─── Filtres audiences ────────────────────────────────────────────────────

export const audiences = [
  { id: "all",           label: "Toutes les questions" },
  { id: "patients",      label: "Patients" },
  { id: "entreprises",   label: "Entreprises & Assureurs" },
  { id: "secteur-public",label: "Secteur public & institutions" },
  { id: "etablissements",label: "Acteurs de santé & médico-social" },
  { id: "pro-sante",     label: "Professionnels de santé" },
  { id: "bus",           label: "Sur les bus" },
];

// ─── Catégories & questions ────────────────────────────────────────────────
// audiences : ["all"] = visible pour tous, sinon liste d'IDs d'audience

export const categories = [
  {
    id: "hocoia",
    label: "Sur Hocoia",
    sidebarLabel: "Sur Hocoia",
    subtitle: "Comprendre qui nous sommes et comment nous fonctionnons.",
    audiences: ["all"],
    items: [
      {
        question: "Qu'est-ce que Hocoia ?",
        answer:
          "Hocoia est une entreprise de santé mobile et connectée. Nous déployons des bus médicaux équipés (MédicoBus, MammoBus, DermatoBus) directement dans les communes, les entreprises, les territoires et les établissements de santé pour rendre la prévention et le dépistage accessibles à tous.",
      },
      {
        question: "Où Hocoia intervient-il en France ?",
        answer:
          "Nous intervenons aujourd'hui dans le Grand Est, l'Île-de-France, les Pays de la Loire, et nous étendons notre couverture à la Normandie en 2026 (DermatoBus pilote) et à la Nouvelle-Aquitaine en 2027–2028.",
      },
      {
        question: "Quels sont les fondateurs de Hocoia ?",
        answer:
          "Hocoia a été fondée par un médecin et des ingénieurs autour de la conviction que la technologie peut transformer concrètement la santé et la prévention, sans jamais déshumaniser la relation soignant-patient.",
      },
    ],
  },
  {
    id: "patients",
    label: "Patients & dépistage",
    sidebarLabel: "Patients & dépistage",
    subtitle: "Ce que les patients doivent savoir avant, pendant et après leur passage.",
    audiences: ["patients"],
    items: [
      {
        question: "Comment savoir si un bus passe près de chez moi ?",
        answer:
          "Consultez la carte des prochains passages depuis la page Patient ou activez l'alerte (SMS/email) pour être prévenu dès qu'un bus est programmé dans votre commune.",
      },
      {
        question: "Dois-je prendre rendez-vous ?",
        answer:
          "C'est recommandé pour garantir votre créneau, mais certaines journées acceptent les venues sans rendez-vous selon la disponibilité. La prise de RDV se fait en ligne ou par téléphone.",
      },
      {
        question: "Combien de temps dure la consultation ?",
        answer:
          "Entre 15 et 30 minutes selon la spécialité (15 min pour la dermatologie, 30 min pour le check-up santé).",
      },
      {
        question: "Qui sont les professionnels à bord ?",
        answer:
          "Des médecins, infirmiers et spécialistes diplômés, tous inscrits à l'Ordre. Ils exercent en prestation pour Hocoia.",
      },
      {
        question: "Comment je reçois mes résultats ?",
        answer:
          "Par email sécurisé sous 48 à 72h. Le compte-rendu peut aussi être transmis à votre médecin traitant si vous le souhaitez. Vous pouvez également les consulter à tout moment dans votre espace patient.",
        link: { label: "Consulter mes résultats sur HocoApp →", href: "/se-connecter" },
      },
      {
        question: "Je ne reçois pas mes résultats, que faire ?",
        answer:
          "Vérifiez d'abord vos courriers indésirables (spams). Le délai habituel est de 48 à 72h après votre passage. Si vous n'avez toujours rien reçu, connectez-vous directement à votre espace patient pour accéder à vos résultats en ligne.",
        link: { label: "Accéder à mes résultats sur HocoApp →", href: "/se-connecter" },
      },
      {
        question: "J'ai perdu mon mot de passe, comment le réinitialiser ?",
        answer:
          "Rendez-vous sur votre espace patient et cliquez sur « Mot de passe oublié ». Un lien de réinitialisation vous sera envoyé par email en quelques minutes. Si vous ne recevez rien, vérifiez vos spams ou contactez notre support.",
        link: { label: "Accéder à mon espace patient →", href: "/se-connecter" },
      },
      {
        question: "Le bus passe-t-il régulièrement dans ma ville ?",
        answer:
          "Les passages sont planifiés en fonction des demandes des collectivités et partenariats locaux. Activez l'alerte pour être prévenu du prochain passage.",
      },
    ],
  },
  {
    id: "entreprises",
    label: "Entreprises & RH",
    sidebarLabel: "Entreprises & RH",
    subtitle: "Déployer un programme santé salarié, sans alourdir vos équipes RH.",
    audiences: ["entreprises"],
    items: [
      {
        question: "Quelle charge de travail pour nos équipes RH ?",
        answer:
          "Quasi nulle. Hocoia gère l'intégralité de l'organisation : logistique, communication interne, prise de RDV, bilan.",
      },
      {
        question: "Comment sont protégées les données de santé de nos collaborateurs ?",
        answer:
          "Hébergement certifié HDS, conformité RGPD totale, données anonymisées. Aucun résultat individuel transmis à l'employeur.",
      },
      {
        question: "Quel est le coût minimum ?",
        answer:
          "Programmes disponibles à partir de 50 salariés. Devis personnalisé sous 48h.",
      },
      {
        question: "Peut-on cibler certaines spécialités ?",
        answer:
          "Oui, 12 spécialités disponibles : cardio, dermato, mammographie, bilan sanguin, etc.",
      },
    ],
  },
  {
    id: "assureurs",
    label: "Assureurs & mutuelles",
    sidebarLabel: "Assureurs & mutuelles",
    subtitle: "Organiser des campagnes de prévention pour vos adhérents.",
    audiences: ["entreprises"],
    items: [
      {
        question: "Pouvons-nous organiser un tour des communes pour nos adhérents ?",
        answer:
          "Oui. C'est un format que nous proposons régulièrement aux mutuelles régionales : la mutuelle invite ses adhérents par commune, Hocoia déploie le bus, créneaux prioritaires pour les adhérents.",
      },
      {
        question: "Quel modèle économique pour une mutuelle ?",
        answer:
          "Plusieurs modèles : forfait par journée, forfait par adhérent dépisté, ou modèle mixte. Sponsoring possible avec d'autres partenaires institutionnels pour réduire le reste à charge.",
      },
      {
        question: "Quelles données peut-on récupérer ?",
        answer:
          "Taux de participation, résultats agrégés, satisfaction. Données anonymisées exploitables pour vos rapports et votre politique santé.",
      },
    ],
  },
  {
    id: "collectivites",
    label: "Collectivités & territoires",
    sidebarLabel: "Collectivités & territoires",
    subtitle: "Tout ce que les élus et agents doivent savoir pour lancer un programme.",
    audiences: ["secteur-public"],
    items: [
      {
        question: "Faut-il passer par un appel d'offres pour travailler avec Hocoia ?",
        answer:
          "Pour les collectivités, cela dépend du montant annuel et de votre seuil de mise en concurrence. Un simple bon de commande ou une convention suffit dans de nombreux cas. Hocoia vous accompagne dans la qualification juridique.",
      },
      {
        question: "Qui paie pour le déploiement, la collectivité ou les patients ?",
        answer:
          "Les patients ne paient rien. Le financement est porté par la collectivité, la mutuelle, ou un modèle hybride. Hocoia vous accompagne dans l'identification des financements (CLS, ARS, DETR).",
      },
      {
        question: "La collectivité doit-elle recruter des professionnels de santé ?",
        answer:
          "Non. Hocoia fournit l'intégralité des professionnels de santé. Aucun recrutement de votre côté.",
      },
      {
        question: "Peut-on déployer le bus plusieurs fois par an sur le même territoire ?",
        answer:
          "Oui, c'est même recommandé. Hocoia propose des programmes annuels multi-journées.",
      },
    ],
  },
  {
    id: "etablissements",
    label: "Établissements de santé",
    sidebarLabel: "Établissements de santé",
    subtitle: "EHPAD, cliniques, hôpitaux : adapter Hocoia à vos contraintes.",
    audiences: ["etablissements"],
    items: [
      {
        question: "Nos résidents sont âgés et fragiles, peuvent-ils passer dans le bus ?",
        answer:
          "Oui. Le bus est conçu pour accueillir des personnes à mobilité réduite. Pour les résidents qui ne peuvent pas se déplacer, Hocoia adapte le protocole avec votre équipe soignante.",
      },
      {
        question: "Nos équipes médicales doivent-elles être mobilisées le jour J ?",
        answer:
          "Non. Hocoia fournit tous les professionnels de santé nécessaires. Votre équipe n'est mobilisée que si vous souhaitez un protocole d'articulation spécifique (ex. intégration au DPI).",
      },
      {
        question: "Comment les résultats sont-ils intégrés au dossier patient ?",
        answer:
          "Comptes-rendus transmis via HocoApp au médecin traitant et, si vous le souhaitez, à votre équipe médicale. Hocoia peut étudier une interface avec votre DPI pour les établissements qui souhaitent une intégration complète.",
      },
      {
        question: "Qui finance le déploiement pour un EHPAD ou une clinique ?",
        answer:
          "Plusieurs modèles : l'établissement finance, la mutuelle des résidents peut couvrir tout ou partie, ou modèle sponsorisé avec partenaires institutionnels.",
      },
    ],
  },
  {
    id: "pro-sante",
    label: "Professionnels de santé",
    sidebarLabel: "Professionnels de santé",
    subtitle: "Rejoindre le réseau Hocoia en tant que prestataire.",
    audiences: ["pro-sante"],
    items: [
      {
        question: "Puis-je cumuler avec mon activité principale ?",
        answer:
          "Oui. La majorité de nos prestataires exercent en parallèle de leur activité en cabinet ou à l'hôpital. Vous choisissez votre rythme.",
      },
      {
        question: "Quel statut juridique dois-je avoir ?",
        answer:
          "Vous intervenez en tant que prestataire (micro-entreprise, SASU, etc.). Hocoia ne propose pas de contrat salarié.",
      },
      {
        question: "Comment est fixée la rémunération ?",
        answer:
          "Rémunération à l'acte, définie à l'avance pour chaque mission. Paiement garanti sous 30 jours.",
      },
      {
        question: "Que se passe-t-il si j'annule une mission ?",
        answer:
          "Prévenance de 7 jours minimum. En cas d'urgence, nous trouvons un remplaçant. Pas de pénalité financière.",
      },
    ],
  },
  {
    id: "medicobus",
    label: "Sur le MédicoBus",
    sidebarLabel: "Sur le MédicoBus",
    subtitle: "Le cabinet médical mobile connecté de Hocoia.",
    audiences: ["bus"],
    items: [
      {
        question: "C'est quoi un MédicoBus ?",
        answer:
          "Un cabinet médical mobile connecté de moins de 3,5 tonnes, conçu par Hocoia. Il embarque 10+ dispositifs médicaux et combine présence humaine et téléconsultation assistée.",
      },
      {
        question: "Quels équipements médicaux sont embarqués ?",
        answer:
          "Selon la thématique : cardio (ECG, tensiomètre, mini-labo), dermatologie (dermatoscope IA), santé femme (frottis, palpation mammaire). Configuration sur-mesure.",
      },
      {
        question: "Combien de temps dure une consultation ?",
        answer: "Entre 20 et 45 minutes selon la thématique.",
      },
    ],
  },
  {
    id: "mammobus",
    label: "Sur le MammoBus",
    sidebarLabel: "Sur le MammoBus",
    subtitle: "Le bus dédié au dépistage du cancer du sein.",
    audiences: ["bus"],
    items: [
      {
        question: "Combien de femmes peut-on dépister par jour ?",
        answer:
          "24 femmes par jour en moyenne, sur des créneaux de 20 à 25 minutes.",
      },
      {
        question: "Le MammoBus participe-t-il au dépistage organisé national ?",
        answer:
          "Oui. Habilité pour le dépistage organisé du cancer du sein (femmes 50–74 ans), pris en charge à 100%.",
      },
      {
        question: "Qui réalise les examens à bord ?",
        answer:
          "MERM + sage-femme. La lecture des clichés est faite par un radiologue, sur place ou en télé-expertise.",
      },
    ],
  },
  {
    id: "dermatobus",
    label: "Sur le DermatoBus",
    sidebarLabel: "Sur le DermatoBus",
    subtitle: "Le bus dédié au dépistage du cancer de la peau.",
    audiences: ["bus"],
    items: [
      {
        question: "C'est quoi le DermatoBus ?",
        answer:
          "Une unité mobile dédiée au dépistage complet du cancer de la peau. Cartographie corps entier, IA mélanome, télé-expertise par un onco-dermatologue du CHU de Caen.",
      },
      {
        question: "En quoi est-ce différent d'un dépistage classique ?",
        answer:
          "Un dépistage classique n'examine que les lésions signalées par le patient. Le DermatoBus cartographie l'intégralité du corps avec suivi comparatif d'une année sur l'autre.",
      },
      {
        question: "Quand sera-t-il disponible ?",
        answer:
          "Pilote prévu pour l'automne 2026 en Normandie (Orne et Eure), en partenariat avec le CHU de Caen.",
      },
    ],
  },
  {
    id: "donnees",
    label: "Données & sécurité",
    sidebarLabel: "Données & sécurité",
    subtitle: "Comment Hocoia protège vos données de santé.",
    audiences: ["all"],
    items: [
      {
        question: "Où sont hébergées les données de santé ?",
        answer:
          "Toutes les données sont hébergées en France chez un hébergeur certifié HDS (Hébergeur de Données de Santé) et ISO 27001.",
      },
      {
        question: "Êtes-vous conformes RGPD ?",
        answer:
          "Oui, conformité RGPD totale. Les données patient ne sont jamais transmises sans consentement. Les organisations partenaires reçoivent uniquement des données agrégées anonymisées.",
      },
      {
        question: "Comment les données circulent-elles entre Hocoia et le médecin traitant ?",
        answer:
          "Via HocoApp, plateforme sécurisée. Le compte-rendu est transmis avec accord du patient, sous email sécurisé ou messagerie de santé sécurisée.",
      },
    ],
  },
  {
    id: "financement",
    label: "Financement",
    sidebarLabel: "Financement",
    subtitle: "Les modèles économiques et dispositifs d'aide disponibles.",
    audiences: ["all"],
    items: [
      {
        question: "Quels dispositifs de financement existent pour les collectivités ?",
        answer:
          "CLS (Contrat Local de Santé), Fonds ARS & PRAPS, DETR, sponsoring institutionnel. Hocoia accompagne le montage du dossier.",
      },
      {
        question: "Le patient paie-t-il quelque chose ?",
        answer:
          "Jamais. Le dépistage est gratuit pour le patient. Le financement est porté par la collectivité, la mutuelle, l'entreprise, ou un modèle hybride.",
      },
      {
        question: "Quels sont les coûts moyens d'un déploiement ?",
        answer:
          "Variables selon la durée, la spécialité, le nombre de patients. Devis personnalisé sous 48h après cadrage.",
      },
    ],
  },
];

// ─── CTA final ────────────────────────────────────────────────────────────

export const ctaFinal = {
  h2: "Vous ne trouvez pas votre réponse ?",
  subtitle: "Notre équipe est là pour répondre à toutes vos questions, sous 24h.",
  ctaPrimary: "Nous contacter",
  ctaSecondary: "Demander un rappel",
};
