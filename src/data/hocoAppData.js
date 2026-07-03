export const hocoAppByAudience = {
  patient: {
    eyebrow: "",
    h2: "Votre interface santé, accessible à tout moment",
    subtitle:
      "Prenez rendez-vous, retrouvez vos comptes-rendus et suivez votre parcours de prévention. L'interface centralise tout ce dont vous avez besoin · en toute sécurité.",
    features: [
      { id: "f1", title: "Prise de rendez-vous simplifiée", description: "Choisissez votre créneau dans le bus le plus proche en 3 clics." },
      { id: "f2", title: "Vos documents centralisés", description: "Comptes-rendus, ordonnances et résultats accessibles à tout moment." },
      { id: "f4", title: "100% sécurisé", description: "Données cryptées, hébergement de santé certifié HDS." },
      { id: "f5", title: "Résultats selon votre préférence", description: "Résultats transmis par courrier ou par mail, et transmission des résultats à votre médecin traitant." },
    ],
    ctaPrimary: "Découvrir HocoApp",
    ctaOutline: "Se connecter",
    mockupLabel: "Interface patient · prise de rendez-vous",
  },
  proSante: {
    eyebrow: "",
    h2: "HocoApp · votre outil pour exercer partout",
    subtitle:
      "Gérez vos missions, consultez les dossiers patients et lancez des téléconsultations depuis un seul outil. HocoApp a été conçu pour les professionnels de santé en mobilité · sur le terrain comme à distance.",
    features: [
      { id: "f1", title: "Agenda multi-praticiens", description: "Vue temps réel des disponibilités, planification fluide entre confrères." },
      { id: "f2", title: "Dossier patient intégré", description: "Affichage clinique et administratif, archivage sécurisé, partage maîtrisé." },
      { id: "f3", title: "Télé-expertise asynchrone", description: "Partagez un cas, sollicitez l'avis d'un spécialiste, sans bloquer un créneau." },
      { id: "f4", title: "Connecté à HocoVisio", description: "Lancez une téléconsultation depuis le dossier en un clic, avec dispositifs connectés." },
    ],
    ctaPrimary: "Se connecter",
    ctaPrimaryHref: "/se-connecter",
    ctaOutline: "Notre technologie",
    ctaOutlineHref: "/a-propos/technologie",
    mockupLabel: "Interface pro · agenda & dossiers",
  },
  entreprises: {
    eyebrow: "",
    h2: "HocoApp · orchestrez la santé de vos collaborateurs",
    subtitle:
      "Organisez vos bilans de santé collectifs, suivez la participation de vos collaborateurs ou adhérents et offrez à chaque patient un accès sécurisé à ses résultats. Tout est centralisé, anonymisé et accessible depuis votre tableau de bord.",
    features: [
      { id: "f1", title: "Inscription des collaborateurs et adhérents", description: "Codes d'invitation personnalisés, inscription autonome en 2 minutes. Chaque patient accède à son espace sécurisé dès le premier rendez-vous." },
      { id: "f2", title: "Reporting collectif anonymisé", description: "Suivez les indicateurs de prévention sans accès aux données médicales individuelles." },
    ],
    ctaPrimary: "Se connecter",
    ctaPrimaryHref: "/se-connecter",
    ctaOutline: "Notre technologie",
    ctaOutlineHref: "/a-propos/technologie",
    mockupLabel: "Tableau de bord RH · bilans collectifs",
  },
  collectivites: {
    eyebrow: "",
    h2: "HocoApp · pilotez la prévention dans votre territoire",
    subtitle:
      "Planifiez les déploiements commune par commune, invitez vos habitants en quelques clics et suivez les indicateurs de fréquentation depuis votre tableau de bord territorial. HocoApp centralise tout le suivi de vos actions de santé publique.",
    features: [
      { id: "f1", title: "Planning des passages bus", description: "Visualisez et organisez les déploiements sur votre territoire commune par commune." },
      { id: "f2", title: "Accès habitants simplifié", description: "Prise de rendez-vous via flyer + code d'invitation, sans création de compte complexe." },
      { id: "f3", title: "Indicateurs de fréquentation", description: "Suivi anonymisé : participation, communes desservies, retours patients." },
      { id: "f4", title: "Communication intégrée", description: "Diffusion des créneaux disponibles auprès de vos habitants en quelques clics." },
    ],
    ctaPrimary: "Se connecter",
    ctaPrimaryHref: "/se-connecter",
    ctaOutline: "Notre technologie",
    ctaOutlineHref: "/a-propos/technologie",
    mockupLabel: "Pilotage territoire · passages & fréquentation",
  },
  acteursPublics: {
    eyebrow: "",
    h2: "HocoApp · pilotez vos actions de santé publique",
    subtitle:
      "Suivez l'ensemble de vos programmes de prévention, partagez les indicateurs avec vos partenaires institutionnels et exportez les données pour vos rapports ARS. HocoApp s'adapte aux exigences du secteur public.",
    features: [
      { id: "f1", title: "Pilotage multi-dispositifs", description: "Suivez l'ensemble des actions de dépistage et de prévention depuis un seul endroit." },
      { id: "f2", title: "Indicateurs de santé publique", description: "Taux de participation, dépistages positifs, parcours de soins déclenchés." },
      { id: "f3", title: "Coordination avec les acteurs locaux", description: "Mise en réseau des CPTS, collectivités et professionnels libéraux." },
      { id: "f4", title: "Reporting institutionnel", description: "Exports adaptés aux exigences ARS et aux organismes de tutelle." },
    ],
    ctaPrimary: "Se connecter",
    ctaPrimaryHref: "/se-connecter",
    ctaOutline: "Notre technologie",
    ctaOutlineHref: "/a-propos/technologie",
    mockupLabel: "Pilotage santé publique · indicateurs consolidés",
  },
  etablissementsSante: {
    eyebrow: "",
    h2: "HocoApp · orchestrez la santé de vos collaborateurs",
    subtitle:
      "Un outil intuitif pour centralisez l'organisation des bilans de santé collectifs, simplifiez le suivi des collaborateurs et offrez à chaque salarié un accès sécurisé à ses informations médicales. Une solution fluide pour piloter la prévention, améliorer le suivi patient et optimiser la gestion santé en entreprise.",
    features: [
      { id: "f1", title: "Dépistage dans le parcours de soins", description: "Les résultats du bus sont intégrés dans le DPI de l'établissement · le dépistage devient une étape documentée du parcours de soins patient." },
      { id: "f2", title: "Télé-expertise inter-équipes", description: "Sollicitez vos spécialistes en différé pour les cas dépistés, sans encombrer leurs agendas." },
      { id: "f3", title: "Gestion des passages bus", description: "Planifiez les déplacements des Médicobus en complément de vos services hospitaliers, commune par commune." },
      { id: "f4", title: "Connecté à HocoVisio", description: "Téléconsultations augmentées avec dispositifs médicaux connectés (ECG, stéthoscope, dermoscope, etc.)." },
    ],
    ctaPrimary: "Se connecter",
    ctaPrimaryHref: "/se-connecter",
    ctaOutline: "Notre technologie",
    ctaOutlineHref: "/a-propos/technologie",
    mockupLabel: "Coordination établissement · équipes & dossiers",
  },
};
