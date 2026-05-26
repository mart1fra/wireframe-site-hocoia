export const hocoAppByAudience = {
  patient: {
    eyebrow: "Plateforme digitale",
    h2: "HocoApp — votre santé dans la poche",
    subtitle:
      "Prenez RDV, accédez à vos documents médicaux en quelques clics. Tout au même endroit, sécurisé.",
    features: [
      { id: "f1", title: "Prise de RDV simplifiée", description: "Choisissez votre créneau dans le bus le plus proche en 3 clics." },
      { id: "f2", title: "Vos documents centralisés", description: "Comptes-rendus, ordonnances et résultats accessibles à tout moment." },
      { id: "f4", title: "100% sécurisé", description: "Données cryptées, hébergement de santé certifié HDS." },
    ],
    ctaPrimary: "Découvrir HocoApp",
    ctaOutline: "Créer mon compte",
    mockupLabel: "Interface patient — prise de RDV",
  },
  proSante: {
    eyebrow: "Plateforme digitale",
    h2: "HocoApp — votre agenda et vos patients, centralisés",
    subtitle:
      "Une interface unique pour gérer vos créneaux, vos dossiers patients et collaborer en télé-expertise avec vos confrères.",
    features: [
      { id: "f1", title: "Agenda multi-praticiens", description: "Vue temps réel des disponibilités, planification fluide entre confrères." },
      { id: "f2", title: "Dossier patient intégré", description: "Affichage clinique et administratif, archivage sécurisé, partage maîtrisé." },
      { id: "f3", title: "Télé-expertise asynchrone", description: "Partagez un cas, sollicitez l'avis d'un spécialiste, sans bloquer un créneau." },
      { id: "f4", title: "Connecté à HocoVisio", description: "Lancez une téléconsultation depuis le dossier en un clic, avec dispositifs connectés." },
    ],
    ctaPrimary: "Demander une démo",
    ctaOutline: "Accéder à HocoApp",
    mockupLabel: "Interface pro — agenda & dossiers",
  },
  entreprises: {
    eyebrow: "Plateforme digitale",
    h2: "HocoApp — orchestrez la santé de vos collaborateurs",
    subtitle:
      "Un outil intuitif pour centralisez l'organisation des bilans de santé collectifs, simplifiez le suivi des collaborateurs et offrez à chaque salarié un accès sécurisé à ses informations médicales. Une solution fluide pour piloter la prévention, améliorer le suivi patient et optimiser la gestion santé en entreprise.",
    features: [
      { id: "f1", title: "Inscription des collaborateurs", description: "Codes d'invitation personnalisés, inscription autonome en 2 minutes." },
      { id: "f2", title: "Reporting collectif anonymisé", description: "Suivez les indicateurs de prévention sans accès aux données médicales individuelles." },
      { id: "f3", title: "Intégration au parcours de soins", description: "En cas d'anomalie, HocoApp coordonne l'orientation du salarié vers son médecin traitant — le dépistage s'intègre à son parcours de soins personnel." },
      { id: "f4", title: "Connecté aux bus Hocoia", description: "Tous les passages programmés sur votre site centralisés et synchronisés en temps réel." },
    ],
    ctaPrimary: "Demander une démo",
    ctaOutline: "Voir un cas client",
    mockupLabel: "Tableau de bord RH — bilans collectifs",
  },
  collectivites: {
    eyebrow: "Plateforme digitale",
    h2: "HocoApp — la santé de votre territoire pilotée en temps réel",
    subtitle:
      "Coordonnez les passages des bus médicaux, suivez la fréquentation et donnez à vos habitants un accès direct à la prise de RDV.",
    features: [
      { id: "f1", title: "Planning des passages bus", description: "Visualisez et organisez les déploiements sur votre territoire commune par commune." },
      { id: "f2", title: "Accès habitants simplifié", description: "Prise de RDV via flyer + code d'invitation, sans création de compte complexe." },
      { id: "f3", title: "Indicateurs de fréquentation", description: "Suivi anonymisé : participation, communes desservies, retours patients." },
      { id: "f4", title: "Communication intégrée", description: "Diffusion des créneaux disponibles auprès de vos habitants en quelques clics." },
    ],
    ctaPrimary: "Demander une démo",
    ctaOutline: "Voir un cas client",
    mockupLabel: "Pilotage territoire — passages & fréquentation",
  },
  acteursPublics: {
    eyebrow: "Plateforme digitale",
    h2: "HocoApp — pilotez vos dispositifs de prévention",
    subtitle:
      "Un outil intuitif pour centraliser l'organisation des journées de prévention, simplifier la coordination des dispositifs mobiles et offrir à chaque habitant un accès sécurisé à ses informations médicales. Une solution fluide pour piloter la santé publique, suivre les actions sur le territoire et optimiser la prévention au plus près des citoyens.",
    features: [
      { id: "f1", title: "Pilotage multi-dispositifs", description: "Suivez l'ensemble des actions de dépistage et de prévention depuis un seul endroit." },
      { id: "f2", title: "Indicateurs de santé publique", description: "Taux de participation, dépistages positifs, parcours de soins déclenchés." },
      { id: "f3", title: "Coordination avec les acteurs locaux", description: "Mise en réseau des CPTS, collectivités et professionnels libéraux." },
      { id: "f4", title: "Reporting institutionnel", description: "Exports adaptés aux exigences ARS et aux organismes de tutelle." },
    ],
    ctaPrimary: "Demander une démo",
    ctaOutline: "Voir un cas client",
    mockupLabel: "Pilotage santé publique — indicateurs consolidés",
  },
  etablissementsSante: {
    eyebrow: "Plateforme digitale",
    h2: "HocoApp — l'extension digitale de votre établissement",
    subtitle:
      "Prolongez l'expertise de vos équipes au-delà des murs. HocoApp intègre le dépistage mobile dans le parcours de soins de vos patients, de l'examen à la coordination spécialisée.",
    features: [
      { id: "f1", title: "Dépistage dans le parcours de soins", description: "Les résultats du bus sont intégrés dans le DPI de l'établissement — le dépistage devient une étape documentée du parcours de soins patient." },
      { id: "f2", title: "Télé-expertise inter-équipes", description: "Sollicitez vos spécialistes en différé pour les cas dépistés, sans encombrer leurs agendas." },
      { id: "f3", title: "Gestion des passages bus", description: "Planifiez les déplacements des Médicobus en complément de vos services hospitaliers, commune par commune." },
      { id: "f4", title: "Connecté à HocoVisio", description: "Téléconsultations augmentées avec dispositifs médicaux connectés (ECG, stéthoscope, dermoscope, etc.)." },
    ],
    ctaPrimary: "Demander une démo",
    ctaOutline: "Voir un cas client",
    mockupLabel: "Coordination établissement — équipes & dossiers",
  },
};
