import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-changement-statut.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/changement-statut-etudiant-salarie-2026-demarches-anef`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "changement-statut-etudiant-salarie-2026-demarches-anef",
  titre: "Changement de statut étudiant à salarié 2026 : démarches ANEF, APS et passeport talent",
  titreSeo: "Changement de statut étudiant à salarié 2026 : démarches ANEF, APS et passeport talent",
  resume: "Comment passer du titre étudiant au titre salarié en France en 2026 ? Procédure ANEF pas à pas, conditions, rôle de l'employeur, APS, passeport talent et délais préfecture.",
  chapo: "Le changement de statut étudiant vers salarié est l'une des démarches les plus courantes et les plus complexes pour les étrangers en France. Chaque année, des milliers d'étudiants internationaux ayant obtenu leur diplôme souhaitent rester en France pour travailler. En 2026, la procédure passe intégralement par la plateforme ANEF et implique de nouvelles conditions, notamment le test civique obligatoire pour obtenir une carte pluriannuelle.",
  publieLe: "2026-03-31",
  modifieLe: "2026-03-31",
  minutes: 17,
  theme: "changement statut étudiant salarié 2026",
  motsCles: [
    "changement statut étudiant salarié 2026",
    "titre séjour étudiant vers salarié",
    "procédure changement statut ANEF",
    "APS autorisation provisoire séjour",
    "conditions changement statut France",
    "CERFA autorisation travail étranger",
    "salaire minimum changement statut",
    "passeport talent étudiant",
    "diplôme master changement statut",
    "délai changement statut préfecture",
    "après études rester travailler France",
    "documents changement statut étudiant",
    "employeur CERFA titre séjour",
    "opposabilité emploi master",
    "changement statut refus recours",
    "travailler en France après diplôme",
    "renouvellement titre séjour salarié",
    "APS master 12 mois",
    "DREETS autorisation travail",
    "carte séjour salarié conditions",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
  blocs: [
    {
      type: "p",
      texte: "Comment changer son titre de séjour étudiant en titre salarié ? Quelles conditions remplir ? Quel employeur, quel salaire minimum ? Quels documents préparer ? Combien de temps prend la procédure ? Ce guide complet détaille chaque étape du changement de statut en 2026, de la recherche d'emploi à l'obtention de votre nouveau titre de séjour.",
    },
    {
      type: "p",
      texte: "Que vous soyez en master, en école d'ingénieur, en business school ou en doctorat, ce guide couvre tous les cas de figure et vous aide à anticiper les difficultés administratives pour réussir votre transition vers la vie professionnelle en France.",
    },
    {
      type: "h2",
      texte: "Conditions pour obtenir le changement de statut étudiant → salarié",
      id: "conditions-changement-statut",
    },
    {
      type: "p",
      texte: "Pour passer d'un titre de séjour étudiant à un titre de séjour salarié, vous devez remplir plusieurs conditions :",
    },
    { type: "p", texte: "**Conditions liées à votre diplôme :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Avoir obtenu un diplôme de niveau licence (bac+3) minimum dans un établissement français",
        "Le diplôme doit être reconnu par l'État (université publique, école privée reconnue)",
        "Les diplômes de niveau master (bac+5) ouvrent droit à l'APS (Autorisation Provisoire de Séjour) de 12 mois",
      ],
    },
    { type: "p", texte: "**Conditions liées à l'emploi :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Avoir une promesse d'embauche ou un contrat de travail (CDI ou CDD de plus de 12 mois de préférence)",
        "L'emploi doit être en lien avec votre formation ou votre domaine de compétence",
        "Le salaire brut annuel doit être au moins égal à **1,5 fois le SMIC** (soit environ 2 827 € brut/mois en 2026) pour un salarié classique",
        "Pour un \"passeport talent\", le salaire doit être au moins **2 fois le SMIC** (environ 3 770 € brut/mois)",
      ],
    },
    { type: "p", texte: "**Conditions administratives :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Être en situation régulière (titre de séjour étudiant en cours de validité ou APS)",
        "Déposer la demande AVANT l'expiration de votre titre actuel",
        "Avoir un justificatif de domicile en France",
      ],
    },
    { type: "p", texte: "**L'opposabilité de la situation de l'emploi :**" },
    {
      type: "p",
      texte: "Pour un changement de statut étudiant → salarié avec un diplôme de master ou supérieur, la situation de l'emploi NE vous est PAS opposable. Cela signifie que la DREETS (ex-DIRECCTE) ne peut pas refuser votre demande au motif que le poste pourrait être pourvu par un demandeur d'emploi français. C'est un avantage majeur pour les diplômés de master.",
    },
    {
      type: "h2",
      texte: "L'APS : votre filet de sécurité après le diplôme",
      id: "aps-autorisation-provisoire-sejour",
    },
    {
      type: "p",
      texte: "L'Autorisation Provisoire de Séjour (APS) est un titre temporaire qui vous donne du temps pour trouver un emploi après votre diplôme :",
    },
    { type: "p", texte: "**Qui peut demander l'APS ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les diplômés d'un master (bac+5) ou équivalent",
        "Les diplômés d'un doctorat",
        "Les diplômés d'une licence professionnelle (dans certains cas)",
      ],
    },
    { type: "p", texte: "**Durée :** 12 mois, non renouvelable" },
    { type: "p", texte: "**Droits de l'APS :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Droit de séjourner et chercher un emploi en France",
        "Droit de travailler à temps partiel (jusqu'à 60 % de la durée légale)",
        "Possibilité de changer de statut vers \"salarié\" ou \"passeport talent\" dès que vous trouvez un emploi qualifié",
      ],
    },
    { type: "p", texte: "**Comment la demander :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Sur ANEF, dans les 2 mois précédant l'expiration de votre titre étudiant",
        "Fournir : attestation de diplôme + justificatif de domicile + pièce d'identité",
        "Coût : 100 € (timbre fiscal + taxe)",
        "Délai de délivrance : 1-3 mois",
      ],
    },
    { type: "p", texte: "**Attention :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'APS ne donne pas droit aux allocations chômage",
        "Si vous ne trouvez pas d'emploi pendant les 12 mois, vous devrez quitter la France ou trouver un autre motif de séjour",
        "Dès que vous signez un contrat de travail qualifié, déposez immédiatement votre demande de changement de statut",
      ],
    },
    {
      type: "h2",
      texte: "Procédure de changement de statut sur ANEF : pas à pas",
      id: "procedure-anef-pas-a-pas",
    },
    {
      type: "p",
      texte: "Le changement de statut se fait entièrement en ligne sur la plateforme ANEF :",
    },
    { type: "p", texte: "**Étape 1 : Créer ou accéder à votre compte ANEF**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Allez sur administration-etrangers-en-france.interieur.gouv.fr",
        "Connectez-vous avec vos identifiants (les mêmes que pour vos précédentes démarches)",
      ],
    },
    { type: "p", texte: "**Étape 2 : Démarrer une nouvelle demande**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Cliquez sur \"Nouvelle demande\"",
        "Sélectionnez \"Changement de statut\"",
        "Choisissez le motif : \"Étudiant vers salarié\" ou \"Étudiant vers passeport talent\"",
      ],
    },
    { type: "p", texte: "**Étape 3 : Renseigner les informations**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Informations personnelles (vérifiez qu'elles sont à jour)",
        "Informations sur votre diplôme",
        "Informations sur votre employeur et le contrat de travail",
        "Informations sur le poste (intitulé, salaire, lieu de travail)",
      ],
    },
    { type: "p", texte: "**Étape 4 : Télécharger les pièces justificatives**" },
    { type: "p", texte: "(Liste détaillée dans la section suivante)" },
    { type: "p", texte: "**Étape 5 : Payer les frais**" },
    {
      type: "liste",
      style: "puces",
      items: ["250 € (225 € de taxe + 25 € de timbre fiscal)", "Paiement par carte bancaire en ligne"],
    },
    { type: "p", texte: "**Étape 6 : Soumettre et attendre**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous recevez un récépissé de dépôt par email",
        "La préfecture examine votre dossier (2-4 mois)",
        "Elle peut vous demander des pièces complémentaires",
        "Vous êtes convoqué en préfecture pour la prise d'empreintes et la remise du titre",
      ],
    },
    {
      type: "p",
      texte: "**Délai total moyen :** 2 à 5 mois selon la préfecture et la complétude du dossier.",
    },
    { type: "h2", texte: "Liste complète des documents nécessaires", id: "documents-necessaires" },
    {
      type: "p",
      texte: "Voici la liste exhaustive des pièces à fournir pour votre changement de statut :",
    },
    { type: "p", texte: "**Documents d'identité :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Passeport en cours de validité (toutes les pages)",
        "Titre de séjour étudiant ou APS en cours de validité (recto-verso)",
        "3 photos d'identité conformes aux normes françaises",
      ],
    },
    { type: "p", texte: "**Documents liés à la formation :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Diplôme obtenu (ou attestation de réussite en attendant le diplôme définitif)",
        "Relevé de notes du dernier semestre",
        "Attestation de fin d'études de l'établissement",
      ],
    },
    { type: "p", texte: "**Documents liés à l'emploi :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Contrat de travail signé par les deux parties OU promesse d'embauche",
        "Formulaire CERFA n° 15187*03 (demande d'autorisation de travail) rempli par l'employeur",
        "Kbis de l'entreprise (moins de 3 mois)",
        "Attestation URSSAF de l'employeur",
        "Organigramme de l'entreprise montrant le poste proposé",
        "Fiche de poste détaillée",
      ],
    },
    { type: "p", texte: "**Documents personnels :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Justificatif de domicile de moins de 3 mois",
        "Timbre fiscal de 25 €",
        "Attestation de test civique (si demande de carte pluriannuelle)",
      ],
    },
    { type: "p", texte: "**Documents complémentaires recommandés :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Lettre de motivation expliquant le lien entre votre formation et le poste",
        "CV actualisé",
        "Justificatifs de vos stages ou alternances en France",
      ],
    },
    { type: "p", texte: "**Format des fichiers :**" },
    {
      type: "p",
      texte: "Sur ANEF, les documents doivent être au format PDF ou JPEG, de taille inférieure à 10 Mo par fichier. Scannez-les en bonne qualité.",
    },
    {
      type: "h2",
      texte: "Le rôle de l'employeur : CERFA et autorisation de travail",
      id: "role-employeur",
    },
    { type: "p", texte: "L'employeur joue un rôle clé dans le changement de statut :" },
    { type: "p", texte: "**Ce que l'employeur doit faire :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Remplir le formulaire CERFA n° 15187*03 (demande d'autorisation de travail)",
        "Fournir les documents de l'entreprise (Kbis, URSSAF, organigramme)",
        "Justifier le choix du candidat étranger (compétences spécifiques, lien formation-poste)",
        "Payer la taxe OFII employeur (variable selon le salaire et la durée du contrat)",
      ],
    },
    { type: "p", texte: "**Le formulaire CERFA :**" },
    {
      type: "p",
      texte: "Le CERFA est un document officiel que l'employeur remplit et signe. Il détaille :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les caractéristiques de l'entreprise",
        "Le poste proposé (intitulé, classification, salaire)",
        "Les motifs du recrutement d'un travailleur étranger",
        "Les démarches de recrutement préalables (publication de l'offre sur France Travail)",
      ],
    },
    { type: "p", texte: "**L'autorisation de travail :**" },
    {
      type: "p",
      texte: "La DREETS (Direction régionale de l'économie, de l'emploi, du travail et des solidarités) examine la demande d'autorisation de travail. Pour les diplômés de master ou supérieur, la situation de l'emploi n'est pas opposable (pas besoin de prouver qu'aucun Français ne peut occuper le poste).",
    },
    { type: "p", texte: "**Conseil aux candidats :**" },
    {
      type: "p",
      texte: "Préparez un dossier clair pour votre employeur. Beaucoup d'entreprises ne connaissent pas la procédure. Envoyez-leur :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "La liste des documents à fournir",
        "Le formulaire CERFA pré-rempli avec vos informations",
        "Un guide simple de la procédure",
      ],
    },
    { type: "p", texte: "Cela accélérera considérablement le processus et montrera votre sérieux." },
    {
      type: "h2",
      texte: "Le passeport talent : une alternative au titre salarié classique",
      id: "passeport-talent-alternative",
    },
    {
      type: "p",
      texte: "Le passeport talent est souvent plus avantageux que le titre de séjour salarié classique :",
    },
    { type: "p", texte: "**Avantages du passeport talent :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Délivré pour 4 ans (contre 1 an pour le titre salarié classique)",
        "Pas d'opposabilité de la situation de l'emploi",
        "Changement d'employeur facilité",
        "Carte de séjour \"famille\" pour le conjoint et les enfants",
      ],
    },
    { type: "p", texte: "**Conditions du passeport talent \"salarié qualifié\" :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Diplôme de master ou équivalent",
        "CDI ou CDD de plus de 3 mois",
        "Salaire brut annuel ≥ 2 fois le SMIC (environ 45 240 € brut/an en 2026)",
      ],
    },
    { type: "p", texte: "**Conditions du passeport talent \"jeune entreprise innovante\" :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Être recruté par une entreprise labellisée JEI par la BPI",
        "Salaire brut annuel ≥ 2 fois le SMIC",
        "Le projet doit être en lien avec votre qualification",
      ],
    },
    { type: "p", texte: "**Conditions du passeport talent \"chercheur\" :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Convention d'accueil avec un organisme de recherche agréé",
        "Niveau doctorat ou projet de recherche de haut niveau",
      ],
    },
    { type: "p", texte: "**Comment choisir entre titre salarié et passeport talent :**" },
    { type: "p", texte: "Si votre salaire est inférieur à 2 fois le SMIC → titre salarié classique" },
    {
      type: "p",
      texte: "Si votre salaire est supérieur à 2 fois le SMIC → passeport talent (fortement recommandé)",
    },
    { type: "p", texte: "Si vous êtes chercheur → passeport talent \"chercheur\"" },
    {
      type: "p",
      texte: "Le passeport talent est valable 4 ans et évite les renouvellements annuels. Si vous y êtes éligible, c'est toujours le meilleur choix.",
    },
    {
      type: "h2",
      texte: "Délais de traitement, refus et recours possibles",
      id: "delais-refus-recours",
    },
    { type: "p", texte: "La procédure de changement de statut peut prendre du temps :" },
    { type: "p", texte: "**Délais moyens de traitement :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Paris : 3-5 mois",
        "Grandes préfectures (Lyon, Marseille, Toulouse) : 2-4 mois",
        "Petites préfectures : 1-3 mois",
      ],
    },
    { type: "p", texte: "**Pendant l'instruction :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous recevez un récépissé vous autorisant à rester en France",
        "Vous pouvez travailler avec le récépissé si votre ancien titre le permettait",
        "La préfecture peut vous demander des pièces complémentaires (répondez rapidement)",
      ],
    },
    { type: "p", texte: "**Motifs de refus les plus fréquents :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Salaire insuffisant (sous le seuil de 1,5 SMIC)",
        "Emploi sans lien avec la formation",
        "Dossier incomplet (documents manquants)",
        "Employeur ne remplissant pas ses obligations fiscales/sociales",
        "Titre de séjour expiré au moment du dépôt",
      ],
    },
    { type: "p", texte: "**Recours en cas de refus :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Recours gracieux auprès du préfet (dans les 2 mois suivant la notification)",
        "Recours hiérarchique auprès du ministre de l'Intérieur",
        "Recours contentieux devant le tribunal administratif (dans les 2 mois)",
      ],
    },
    { type: "p", texte: "**Conseils pour éviter le refus :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Déposez un dossier COMPLET dès la première soumission",
        "Vérifiez que le salaire respecte les seuils",
        "Assurez-vous que le lien formation-emploi est clair",
        "Fournissez une lettre de motivation argumentée",
      ],
    },
    {
      type: "h2",
      texte: "Les erreurs les plus courantes et comment les éviter",
      id: "erreurs-courantes",
    },
    { type: "p", texte: "Voici les erreurs qui retardent ou compromettent le changement de statut :" },
    { type: "p", texte: "**Erreur n°1 : Attendre l'expiration du titre pour démarrer**" },
    {
      type: "p",
      texte: "Ne déposez pas votre demande à la dernière minute. Commencez la procédure au moins 2-3 mois avant l'expiration de votre titre étudiant ou APS.",
    },
    { type: "p", texte: "**Erreur n°2 : Accepter un emploi sous-qualifié**" },
    {
      type: "p",
      texte: "Un emploi sans rapport avec votre formation sera probablement refusé. Le poste doit correspondre à votre niveau de diplôme et à votre domaine d'études.",
    },
    { type: "p", texte: "**Erreur n°3 : Ne pas vérifier le CERFA avec l'employeur**" },
    {
      type: "p",
      texte: "Des erreurs sur le CERFA (numéro SIRET, classification du poste, salaire) peuvent entraîner un rejet. Relisez attentivement le document avec votre employeur.",
    },
    { type: "p", texte: "**Erreur n°4 : Oublier le test civique**" },
    {
      type: "p",
      texte: "Si vous demandez une carte pluriannuelle, le test civique est désormais obligatoire. Passez-le avant de déposer votre dossier.",
    },
    { type: "p", texte: "**Erreur n°5 : Ne pas anticiper les délais**" },
    {
      type: "p",
      texte: "Votre employeur ne pourra pas vous faire travailler officiellement tant que l'autorisation de travail n'est pas délivrée (sauf si vous avez un récépissé autorisant le travail).",
    },
    { type: "p", texte: "**Erreur n°6 : Travailler à temps plein avec un titre étudiant**" },
    {
      type: "p",
      texte: "Pendant votre titre étudiant, vous ne pouvez travailler que 964 heures par an. Des dépassements peuvent compromettre votre changement de statut.",
    },
    { type: "p", texte: "**Erreur n°7 : Ne pas scanner correctement les documents**" },
    {
      type: "p",
      texte: "Des documents illisibles sur ANEF entraînent des demandes de complément et des retards. Scannez en bonne qualité (300 dpi minimum).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le changement de statut étudiant vers salarié en 2026 est une démarche encadrée mais accessible si vous la préparez bien. Les clés du succès : un diplôme reconnu, un contrat de travail en lien avec votre formation, un salaire conforme aux seuils, un dossier ANEF complet et soumis à temps. N'oubliez pas de passer le test civique si vous visez une carte pluriannuelle. Préparez-vous dès maintenant sur testciviquefrance.fr pour réussir cette étape supplémentaire. Si votre salaire le permet, privilégiez le passeport talent pour bénéficier d'un titre de 4 ans.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quelles conditions pour changer de statut étudiant à salarié en 2026 ?",
      reponse: "Il faut un diplôme de niveau licence minimum, un contrat de travail en lien avec votre formation, un salaire d'au moins 1,5 fois le SMIC (environ 2 827 € brut/mois), et déposer la demande sur ANEF avant l'expiration de votre titre étudiant.",
    },
    {
      question: "Combien coûte le changement de statut étudiant vers salarié ?",
      reponse: "Le changement de statut coûte 250 € (225 € de taxe + 25 € de timbre fiscal). Ajoutez 90 € si vous devez passer le test civique pour une carte pluriannuelle.",
    },
    {
      question: "Combien de temps prend le changement de statut ?",
      reponse: "Le délai de traitement varie de 1 à 5 mois selon la préfecture. Pendant ce temps, vous recevez un récépissé vous autorisant à rester en France.",
    },
    {
      question: "Qu'est-ce que l'APS étudiant et comment l'obtenir ?",
      reponse: "L'APS (Autorisation Provisoire de Séjour) est un titre de 12 mois accordé aux diplômés de master pour chercher un emploi. Demandez-la sur ANEF dans les 2 mois précédant l'expiration de votre titre étudiant.",
    },
    {
      question: "Le test civique est-il obligatoire pour le changement de statut ?",
      reponse: "Le test civique est obligatoire si vous demandez une carte pluriannuelle. Pour un premier titre salarié d'un an, il n'est généralement pas requis.",
    },
    {
      question: "Quel salaire minimum pour le changement de statut ?",
      reponse: "Le seuil est de 1,5 fois le SMIC (environ 2 827 € brut/mois en 2026) pour un titre salarié classique, et 2 fois le SMIC (environ 3 770 € brut/mois) pour un passeport talent.",
    },
    {
      question: "Peut-on changer de statut avec un CDD ?",
      reponse: "Oui, un CDD est accepté, mais les CDI ou CDD de longue durée (12+ mois) sont préférables. Certaines préfectures acceptent les CDD de 6 mois minimum.",
    },
    {
      question: "Que faire si mon employeur refuse de remplir le CERFA ?",
      reponse: "Le CERFA est obligatoire. Si l'employeur ne coopère pas, la procédure ne peut pas aboutir. Expliquez-lui que c'est une formalité administrative standard. Certaines entreprises ne connaissent pas la procédure, guidez-les.",
    },
    {
      question: "Puis-je travailler pendant l'instruction de mon changement de statut ?",
      reponse: "Oui, si vous avez un récépissé portant la mention \"autorise son titulaire à travailler\". Cependant, l'employeur doit avoir déposé la demande d'autorisation de travail.",
    },
    {
      question: "Différence entre titre salarié et passeport talent ?",
      reponse: "Le passeport talent est délivré pour 4 ans (contre 1 an), nécessite un salaire ≥ 2 SMIC, et offre plus de souplesse (changement d'employeur, titre famille). C'est le meilleur choix si vous y êtes éligible.",
    },
  ],
  sources: [
    {
      titre: "Service-Public.fr - Changement de statut étudiant",
      url: "https://www.service-public.fr/particuliers/vosdroits/F17299",
      type: "officiel",
      description: "Procédure officielle de changement de statut étudiant vers salarié.",
    },
    {
      titre: "ANEF - Plateforme de dépôt des demandes",
      url: "https://administration-etrangers-en-france.interieur.gouv.fr/",
      type: "officiel",
      description: "Plateforme officielle pour déposer sa demande de changement de statut en ligne.",
    },
    {
      titre: "Légifrance - CESEDA Article L421-1 à L421-35",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771682/",
      type: "juridique",
      description: "Dispositions légales régissant les titres de séjour \"salarié\" et \"passeport talent\".",
    },
    {
      titre: "Campus France - Après les études",
      url: "https://www.campusfrance.org/fr/apres-les-etudes",
      type: "officiel",
      description: "Guide de Campus France sur les options après les études en France.",
    },
  ],
  aLireAussi: [
    {
      slug: "guide-anef-complet-2026-creer-compte-deposer-demande",
      ancre: "Tutoriel ANEF complet 2026",
    },
    {
      slug: "passeport-talent-2026-conditions-metiers-demarches",
      ancre: "Passeport talent : alternative au changement de statut",
    },
    {
      slug: "hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances",
      ancre: "Timbre fiscal du titre de séjour : les tarifs 2026",
    },
    { slug: "visa-long-sejour-vls-ts-validation-ofii-2026", ancre: "Validation du VLS-TS étudiant" },
  ],
};

export default article;
