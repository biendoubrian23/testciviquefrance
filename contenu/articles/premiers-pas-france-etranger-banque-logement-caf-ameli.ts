import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-premiers-pas-france.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/premiers-pas-france-etranger-banque-logement-caf-ameli`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "premiers-pas-france-etranger-banque-logement-caf-ameli",
  titre: "Premiers pas en France : guide complet banque, logement, CAF et Ameli pour les étrangers",
  titreSeo: "Premiers pas en France : guide complet banque, logement, CAF et Ameli pour les étrangers",
  resume: "Toutes les démarches à faire en arrivant en France : ouvrir un compte bancaire, trouver un logement, s'inscrire à la CAF et à l'Assurance maladie. Chronologie et contacts utiles.",
  chapo: "Vous venez d'arriver en France ? Les premières semaines sont cruciales pour bien démarrer votre nouvelle vie. Entre l'ouverture d'un compte bancaire, la recherche d'un logement, l'inscription à la CAF et à l'Assurance maladie (Ameli), les démarches administratives peuvent vite devenir un casse-tête. Pourtant, chaque étape est essentielle pour accéder à vos droits et vivre sereinement.",
  publieLe: "2026-03-31",
  modifieLe: "2026-03-31",
  minutes: 18,
  theme: "premiers pas France étranger",
  motsCles: [
    "premiers pas France étranger",
    "arriver en France démarches",
    "ouvrir compte bancaire étranger France",
    "inscription CAF étranger",
    "carte Vitale étranger",
    "CPAM inscription étranger",
    "APL étranger France",
    "logement étranger en France",
    "trouver logement France étranger",
    "premiers mois France immigration",
    "vie quotidienne étranger France",
    "aides financières étrangers France",
    "droit au compte bancaire étranger",
    "assurance maladie étranger",
    "VISALE garantie logement",
    "cours français gratuits",
    "démarches administratives étranger France",
    "associations aide étrangers France",
    "CAF étrangers allocations",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce guide pratique est conçu pour les étrangers qui viennent d'arriver en France en 2026 : réfugiés, étudiants, salariés, conjoints de Français ou bénéficiaires du regroupement familial. Il vous accompagne dans les démarches prioritaires à effectuer dans les premières semaines, dans l'ordre chronologique recommandé.",
    },
    {
      type: "p",
      texte: "De la validation de votre visa à l'obtention de votre carte Vitale, en passant par l'ouverture de votre compte bancaire et la demande d'allocations logement, vous trouverez ici toutes les informations pratiques pour réussir vos premiers pas en France.",
    },
    {
      type: "h2",
      texte: "Chronologie des démarches à faire en arrivant en France",
      id: "chronologie-demarches",
    },
    {
      type: "p",
      texte: "Voici l'ordre recommandé des démarches dans vos premières semaines en France :",
    },
    { type: "p", texte: "**Semaine 1 : Les urgences**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Valider votre VLS-TS sur ANEF (dans les 3 mois, mais faites-le dès que possible)",
        "Trouver un hébergement temporaire si vous n'avez pas de logement",
        "Acheter une carte SIM française (Free Mobile, Orange, SFR, Bouygues)",
        "Ouvrir un compte bancaire (nécessaire pour presque tout)",
      ],
    },
    { type: "p", texte: "**Semaine 2-3 : Les fondations**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "S'inscrire à la CPAM (Assurance maladie - Ameli)",
        "Demander la CAF (allocations logement, aides)",
        "Signer un bail (si location)",
        "Souscrire une assurance habitation (obligatoire pour les locataires)",
      ],
    },
    { type: "p", texte: "**Mois 1-2 : L'installation**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Obtenir un numéro de Sécurité sociale",
        "Signer le Contrat d'Intégration Républicaine (CIR) à l'OFII",
        "S'inscrire à France Travail (si vous cherchez un emploi)",
        "Inscrire vos enfants à l'école (si applicable)",
      ],
    },
    { type: "p", texte: "**Mois 2-3 : La stabilisation**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Recevoir votre carte Vitale",
        "Obtenir vos premières allocations CAF",
        "Commencer la formation linguistique (si prescrite par l'OFII)",
        "Préparer le test civique (si nécessaire pour votre titre de séjour)",
      ],
    },
    {
      type: "p",
      texte: "**Important :** ne sautez pas d'étapes. Chaque démarche est liée aux précédentes. Par exemple, vous avez besoin d'un compte bancaire pour la CAF, et d'un RIB pour recevoir les allocations.",
    },
    {
      type: "h2",
      texte: "Ouvrir un compte bancaire : la première priorité",
      id: "ouvrir-compte-bancaire",
    },
    { type: "p", texte: "Le compte bancaire est la clé de voûtes de toutes vos démarches en France :" },
    { type: "p", texte: "**Pourquoi c'est la priorité n°1 :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La CAF verse les allocations par virement bancaire",
        "Le loyer se paie souvent par prélèvement",
        "L'employeur verse le salaire sur un compte français",
        "Beaucoup de démarches demandent un RIB",
      ],
    },
    { type: "p", texte: "**Quelle banque choisir ?**" },
    { type: "p", texte: "**Banques traditionnelles (agence physique) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La Banque Postale : la plus accessible, accepte presque tous les profils",
        "BNP Paribas, Société Générale, CIC, LCL : banques classiques",
        "Crédit Agricole, Caisse d'Épargne : souvent présentes en zone rurale",
      ],
    },
    { type: "p", texte: "**Banques en ligne :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Boursorama, Fortuneo, Hello Bank : souvent moins de frais",
        "Nécessitent généralement un titre de séjour définitif",
      ],
    },
    { type: "p", texte: "**Néobanques :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "N26, Revolut, Wise : compte ouvert rapidement avec un passeport",
        "Attention : certaines administrations n'acceptent pas les IBAN étrangers (préférez un compte avec un IBAN FR)",
      ],
    },
    { type: "p", texte: "**Documents nécessaires :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pièce d'identité (passeport + VLS-TS validé ou titre de séjour)",
        "Justificatif de domicile (même provisoire : attestation d'hébergement)",
        "Justificatif de revenus ou de bourse (si étudiant)",
      ],
    },
    { type: "p", texte: "**Si une banque refuse de vous ouvrir un compte :**" },
    {
      type: "p",
      texte: "Vous avez le DROIT AU COMPTE : demandez une attestation de refus à la banque, puis saisissez la Banque de France qui désignera une banque obligée de vous ouvrir un compte.",
    },
    {
      type: "h2",
      texte: "Trouver un logement : location, résidence, hébergement",
      id: "trouver-logement",
    },
    { type: "p", texte: "Le logement est le deuxième enjeu majeur à votre arrivée :" },
    { type: "p", texte: "**Options de logement en France :**" },
    { type: "p", texte: "**1. Location privée (appartement/studio) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le plus courant mais le plus exigeant en garanties",
        "Documents demandés : 3 dernières fiches de paie, avis d'imposition, contrat de travail, pièce d'identité",
        "Un garant est souvent exigé (personne qui se porte caution)",
        "Budget : 400-800 € pour un studio en province, 800-1500 € en Île-de-France",
      ],
    },
    { type: "p", texte: "**2. Résidence pour étudiants (CROUS) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Tarifs réduits (200-600 €/mois)",
        "Demande via messervices.etudiant.gouv.fr (DSE)",
        "Places limitées, faites la demande très tôt",
      ],
    },
    { type: "p", texte: "**3. Logement social (HLM) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Tarifs très avantageux",
        "Demande en ligne sur demande-logement-social.gouv.fr",
        "Délais très longs (mois voire années selon la ville)",
      ],
    },
    { type: "p", texte: "**4. Hébergement temporaire :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Foyers de travailleurs migrants (Adoma, Coallia)",
        "Centres d'hébergement associatifs",
        "Colocation (sites : La Carte des Colocs, Appartager)",
      ],
    },
    { type: "p", texte: "**Le garant : visal.fr**" },
    {
      type: "p",
      texte: "Si vous n'avez pas de garant en France, utilisez VISALE : une garantie gratuite de l'État qui se porte caution pour vous. Éligible pour les moins de 30 ans et les salariés en mobilité.",
    },
    { type: "p", texte: "**L'assurance habitation :**" },
    {
      type: "p",
      texte: "Obligatoire pour tout locataire en France. Comparez les offres sur les comparateurs en ligne. Coût : 100-200 €/an pour un studio.",
    },
    {
      type: "h2",
      texte: "S'inscrire à la CPAM (Assurance maladie - Ameli)",
      id: "inscription-cpam-ameli",
    },
    { type: "p", texte: "L'Assurance maladie vous donne accès aux soins remboursés en France :" },
    { type: "p", texte: "**Qu'est-ce que la CPAM / Ameli ?**" },
    {
      type: "p",
      texte: "La CPAM (Caisse Primaire d'Assurance Maladie) gère votre couverture santé. Ameli.fr est le site en ligne pour gérer vos remboursements.",
    },
    { type: "p", texte: "**Qui peut s'inscrire ?**" },
    {
      type: "p",
      texte: "Toute personne résidant en France de manière stable (plus de 3 mois) et régulière (titre de séjour valide).",
    },
    { type: "p", texte: "**Comment s'inscrire :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Rendez-vous sur ameli.fr ou dans votre CPAM locale",
        "Remplissez le formulaire de demande d'affiliation",
        "Fournissez les documents :",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "VLS-TS validé ou titre de séjour",
        "Passeport",
        "RIB (pour les remboursements)",
        "Justificatif de domicile",
        "Acte de naissance traduit (parfois demandé)",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: ["Un numéro de Sécurité sociale provisoire vous est attribué"],
    },
    { type: "p", texte: "**Délais :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Attribution du numéro provisoire : 2-4 semaines",
        "Réception de la carte Vitale : 1-3 mois",
        "En attendant la carte Vitale, vous pouvez utiliser une feuille de soins papier",
      ],
    },
    { type: "p", texte: "**La complémentaire santé :**" },
    {
      type: "p",
      texte: "L'Assurance maladie rembourse environ 70 % des soins. Pour les 30 % restants, vous pouvez :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Souscrire une mutuelle (complémentaire santé)",
        "Demander la CSS (Complémentaire Santé Solidaire) si vos revenus sont faibles",
      ],
    },
    { type: "p", texte: "**La CSS :**" },
    {
      type: "p",
      texte: "La CSS est une mutuelle gratuite ou à 1 €/mois pour les personnes à faibles revenus. Vérifiez votre éligibilité sur ameli.fr.",
    },
    { type: "h2", texte: "Demander les aides de la CAF : APL, prime d'activité", id: "demander-caf" },
    {
      type: "p",
      texte: "La CAF (Caisse d'Allocations Familiales) verse des aides financières importantes :",
    },
    { type: "p", texte: "**Les principales aides de la CAF pour les étrangers :**" },
    { type: "p", texte: "**1. APL (Aide Personnalisée au Logement) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Aide mensuelle pour payer votre loyer",
        "Montant : 50-300 €/mois selon vos revenus et votre loyer",
        "Condition : avoir un titre de séjour valide et un bail à votre nom",
        "Demande en ligne sur caf.fr",
        "Première aide versée environ 2 mois après la demande",
      ],
    },
    { type: "p", texte: "**2. Prime d'activité :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Complément de revenus pour les salariés modestes",
        "Condition : salaire mensuel net < environ 1 900 € (personne seule)",
        "Montant : variable (100-300 €/mois en moyenne)",
        "Demande en ligne sur caf.fr",
      ],
    },
    { type: "p", texte: "**3. Allocations familiales :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pour les familles avec 2 enfants ou plus résidant en France",
        "Montant : environ 140 €/mois pour 2 enfants",
        "Versées automatiquement après déclaration des enfants à la CAF",
      ],
    },
    { type: "p", texte: "**4. RSA (Revenu de Solidarité Active) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Condition : résider en France depuis au moins 5 ans (sauf réfugiés et certains cas)",
        "Montant : environ 607 €/mois (personne seule sans revenus)",
      ],
    },
    { type: "p", texte: "**Comment s'inscrire à la CAF :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Créez un compte sur caf.fr",
        "Renseignez votre situation familiale et professionnelle",
        "Fournissez : titre de séjour, RIB, bail de votre logement, justificatif de revenus",
        "Les aides sont calculées automatiquement",
        "Premier versement : environ 2 mois après la demande",
      ],
    },
    {
      type: "p",
      texte: "**Astuce :** faites votre demande CAF dès la signature de votre bail. Chaque mois de retard est un mois d'aide en moins.",
    },
    { type: "h2", texte: "Téléphone, internet et services essentiels", id: "telephone-internet" },
    { type: "p", texte: "Quelques services pratiques essentiels dès votre arrivée :" },
    { type: "p", texte: "**Téléphone mobile :**" },
    { type: "p", texte: "Les 4 opérateurs principaux : Orange, SFR, Bouygues Telecom, Free Mobile" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Free Mobile 2 € : forfait basique avec 50 Mo d'internet",
        "Free Mobile 19,99 € : forfait illimité avec 300 Go",
        "Forfaits similaires chez les autres opérateurs (10-30 €/mois)",
        "Achat d'une carte SIM : en boutique avec pièce d'identité",
      ],
    },
    { type: "p", texte: "**Internet à domicile :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Offres box internet : 20-40 €/mois (Orange, Free, SFR, Bouygues)",
        "La Fibre est disponible dans la plupart des grandes villes",
        "Nécessite un RIB français pour le prélèvement",
      ],
    },
    { type: "p", texte: "**Électricité et gaz :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "À votre nom si vous êtes locataire (EDF, Engie, ou fournisseur alternatif)",
        "Ouverture de contrat : en ligne ou par téléphone",
        "Prévoir 50-150 €/mois selon la taille du logement",
      ],
    },
    { type: "p", texte: "**Transports :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pass Navigo (Île-de-France) : 86 €/mois pour toute l'Île-de-France",
        "Abonnements de bus/tramway en province : 30-60 €/mois",
        "Tarifs réduits pour les demandeurs d'emploi, étudiants et bénéficiaires RSA",
        "SNCF : carte Avantage pour les 12-27 ans et les familles",
      ],
    },
    { type: "p", texte: "**Permis de conduire :**" },
    {
      type: "p",
      texte: "Si vous avez un permis étranger, vous pouvez conduire en France pendant 1 an. Passé ce délai, vous devez demander l'échange de votre permis (selon les accords entre pays) ou passer le permis français.",
    },
    {
      type: "h2",
      texte: "Apprendre le français : cours gratuits et ressources",
      id: "apprendre-francais",
    },
    { type: "p", texte: "Le français est essentiel pour votre intégration en France :" },
    { type: "p", texte: "**Cours gratuits via l'OFII :**" },
    {
      type: "p",
      texte: "Si vous avez signé le Contrat d'Intégration Républicaine (CIR), l'OFII vous prescrit des cours de français gratuits si votre niveau est insuffisant :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Jusqu'à 600 heures de cours",
        "Dans un organisme agréé près de chez vous",
        "Objectif : atteindre le niveau A1 (élémentaire)",
      ],
    },
    { type: "p", texte: "**Cours de français gratuits hors OFII :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Associations locales (Croix-Rouge, Secours Populaire, centres sociaux)",
        "Bibliothèques municipales (ateliers de conversation)",
        "Universités (cours du soir pour adultes)",
        "Mairies (dispositifs d'apprentissage du français)",
      ],
    },
    { type: "p", texte: "**Ressources en ligne gratuites :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "TV5 Monde (apprendre.tv5monde.com) : exercices interactifs",
        "France Éducation International : outils d'apprentissage",
        "Duolingo : application gratuite pour les débutants",
        "YouTube : chaînes comme \"Français avec Pierre\", \"InnerFrench\"",
      ],
    },
    { type: "p", texte: "**Le test de français :**" },
    {
      type: "p",
      texte: "Pour la naturalisation et certains titres de séjour, un niveau B1 de français est requis. Le test le plus courant est le TCF (Test de Connaissance du Français), passé auprès de centres agréés.",
    },
    { type: "p", texte: "**Lien avec le test civique :**" },
    {
      type: "p",
      texte: "Le test civique est en français. Si votre niveau est faible, commencez par améliorer votre français avant de préparer le test civique. Les QCM de testciviquefrance.fr sont aussi un bon exercice de compréhension écrite.",
    },
    { type: "h2", texte: "Contacts utiles et associations d'aide aux étrangers", id: "contacts-utiles" },
    { type: "p", texte: "Voici les contacts essentiels pour les étrangers en France :" },
    { type: "p", texte: "**Numéros d'urgence :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "SAMU (urgences médicales) : 15",
        "Police / Gendarmerie : 17",
        "Pompiers : 18",
        "Numéro d'urgence européen : 112 (gratuit, toutes langues)",
      ],
    },
    { type: "p", texte: "**Administrations clés :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Préfecture : pour les titres de séjour",
        "OFII : pour le CIR et les formations",
        "CAF : pour les allocations (caf.fr)",
        "CPAM : pour l'assurance maladie (ameli.fr)",
        "France Travail : pour l'emploi (francetravail.fr)",
      ],
    },
    { type: "p", texte: "**Associations d'aide aux étrangers :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "CIMADE : accompagnement juridique des étrangers",
        "GISTI : groupe d'information et de soutien aux immigrés",
        "France Terre d'Asile : aide aux demandeurs d'asile et réfugiés",
        "Secours Populaire : aide alimentaire et vestimentaire",
        "Croix-Rouge française : aide d'urgence",
        "CCAS de votre commune : aide sociale locale",
      ],
    },
    { type: "p", texte: "**Services de traduction :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "ISM Interprétariat : interprètes professionnels (santé, social, justice)",
        "Certaines préfectures et hôpitaux disposent d'interprètes",
      ],
    },
    { type: "p", texte: "**Aide juridique gratuite :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Maisons de la Justice et du Droit (MJD) : consultations juridiques gratuites",
        "Barreaux locaux : permanences d'avocats gratuites",
        "Défenseur des droits : en cas de discrimination (defenseurdesdroits.fr)",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Vos premiers pas en France demandent de l'organisation, mais chaque démarche vous rapproche d'une vie stable et sereine. Suivez cet ordre : validez votre visa, ouvrez un compte bancaire, inscrivez-vous à la CPAM et à la CAF, trouvez un logement et apprenez le français. N'hésitez pas à solliciter les associations d'aide aux étrangers qui sont là pour vous accompagner. Et préparez dès maintenant votre test civique sur testciviquefrance.fr pour anticiper vos futures démarches de titre de séjour ou de naturalisation.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quelles sont les premières démarches en arrivant en France ?",
      reponse: "Validez votre VLS-TS sur ANEF, ouvrez un compte bancaire, inscrivez-vous à la CPAM (Assurance maladie) et à la CAF (allocations). Trouvez un logement et une carte SIM française.",
    },
    {
      question: "Comment ouvrir un compte bancaire en France en tant qu'étranger ?",
      reponse: "Présentez-vous dans une banque avec votre passeport, VLS-TS ou titre de séjour, justificatif de domicile et justificatif de revenus. La Banque Postale est la plus accessible. Si une banque refuse, invoquez le droit au compte.",
    },
    {
      question: "Comment s'inscrire à la CAF en tant qu'étranger ?",
      reponse: "Créez un compte sur caf.fr, renseignez votre situation, fournissez titre de séjour, RIB, bail et justificatif de revenus. Les APL et la prime d'activité sont versées environ 2 mois après la demande.",
    },
    {
      question: "Comment obtenir la carte Vitale en France ?",
      reponse: "Inscrivez-vous à la CPAM (ameli.fr) avec VLS-TS validé, passeport, RIB et justificatif de domicile. Vous recevrez un numéro provisoire puis la carte Vitale sous 1 à 3 mois.",
    },
    {
      question: "Quelles aides financières pour les étrangers en France ?",
      reponse: "Les principales aides sont : APL (logement), prime d'activité (salariés modestes), allocations familiales (familles), CSS (complémentaire santé gratuite). Tout se demande sur caf.fr et ameli.fr.",
    },
    {
      question: "Où trouver des cours de français gratuits ?",
      reponse: "Via l'OFII (après signature du CIR), les associations locales (Croix-Rouge, Secours Populaire), les bibliothèques municipales, et en ligne sur TV5 Monde et Duolingo.",
    },
    {
      question: "Faut-il un garant pour louer un logement en France ?",
      reponse: "La plupart des propriétaires demandent un garant. Si vous n'en avez pas, utilisez VISALE (visale.fr), une garantie gratuite de l'État pour les moins de 30 ans et les salariés en mobilité.",
    },
    {
      question: "Comment fonctionne l'assurance maladie en France ?",
      reponse: "L'Assurance maladie (CPAM) rembourse environ 70% des soins. Pour les 30% restants, vous pouvez souscrire une mutuelle ou demander la CSS (Complémentaire Santé Solidaire) si vos revenus sont faibles.",
    },
  ],
  sources: [
    {
      titre: "Service-Public.fr - Étranger en France",
      url: "https://www.service-public.fr/particuliers/vosdroits/N110",
      type: "officiel",
      description: "Portail officiel des démarches pour les étrangers en France.",
    },
    {
      titre: "CAF.fr - Simulateur d'aides",
      url: "https://www.caf.fr/allocataires/mes-services-en-ligne/faire-une-simulation",
      type: "officiel",
      description: "Simulez vos droits aux aides de la CAF.",
    },
    {
      titre: "Ameli.fr - S'inscrire à l'Assurance maladie",
      url: "https://www.ameli.fr/assure/droits-demarches/europe-international/vous-venez-vivre-en-france",
      type: "officiel",
      description: "Guide officiel d'inscription à l'Assurance maladie pour les arrivants.",
    },
    {
      titre: "VISALE - Garantie locative gratuite",
      url: "https://www.visale.fr/",
      type: "officiel",
      description: "Service de garantie locative gratuit pour les jeunes et salariés.",
    },
  ],
  aLireAussi: [
    { slug: "visa-long-sejour-vls-ts-validation-ofii-2026", ancre: "Valider son VLS-TS dès l'arrivée" },
    {
      slug: "contrat-engagement-republicain-2026-obligations-formation-civique",
      ancre: "Le CER : votre premier engagement républicain",
    },
    {
      slug: "recepisse-titre-de-sejour-droits-duree-voyage",
      ancre: "Le récépissé en attendant votre titre de séjour",
    },
    {
      slug: "inscription-test-civique-2026-ou-quand-comment-sinscrire",
      ancre: "Anticiper l'inscription au test civique",
    },
  ],
};

export default article;
