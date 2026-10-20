import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-nouveaux-avril-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/etudiant-etranger-france-2026-visa-campus-france-travail-famille-droit-rester`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "etudiant-etranger-france-2026-visa-campus-france-travail-famille-droit-rester",
  titre: "Étudiant étranger en France 2026 : guide complet Campus France, visa VLS-TS, 964h travail, APL et 5 voies pour rester après les études",
  titreSeo: "Étudiant étranger en France 2026 : guide complet Campus France, visa VLS-TS, 964h travail, APL et 5 voies pour rester après les études",
  resume: "Le guide étudiant étranger 2026 le plus complet : procédure Campus France pas-à-pas, validation VLS-TS OFII en 3 mois, 964h de travail légal, APL étudiant (200 € à 300 €/mois), APS après Master, Passeport Talent et 5 voies prouvées pour rester en France après le diplôme. Erreurs à éviter incluses.",
  chapo: "Étudier en France en tant qu'étranger est une aventure administrative autant qu'académique. Visa étudiant, Campus France, validation OFII, droit de travailler, accès aux aides sociales, titre de séjour pour faire venir sa famille, puis changer de statut pour rester après les études, chaque étape a ses règles, ses délais et ses pièges. En 2026, les conditions évoluent (hausse des frais d'inscription pour les étudiants hors UE, nouvelles modalités de l'APS), et ce guide complet vous donne toutes les réponses pour réussir votre parcours en France de A à Z.",
  publieLe: "2026-04-04",
  modifieLe: "2026-04-04",
  minutes: 24,
  theme: "étudiant étranger France 2026",
  motsCles: [
    "étudiant étranger France 2026",
    "visa étudiant France",
    "Campus France inscription",
    "titre de séjour étudiant",
    "étudiant étranger droit travailler France",
    "20 heures étranger étudiant",
    "APL étudiant étranger",
    "bourse CROUS étranger",
    "APS après études France",
    "changer statut étudiant salarié France",
    "faire venir famille étudiant étranger",
    "droit de rester après études France",
    "test civique étudiant étranger",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
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
    { type: "h2", texte: "Avant l'arrivée : Campus France et visa étudiant", id: "avant-arrivee" },
    {
      type: "p",
      texte: "Vouloir étudier en France ne s'improvise pas. Pour les ressortissants de la plupart des pays hors UE, la première étape passe obligatoirement par **Campus France**.",
    },
    { type: "h3", texte: "Qu'est-ce que Campus France ?" },
    {
      type: "p",
      texte: "Campus France est l'agence française chargée de la promotion de l'enseignement supérieur français à l'étranger. Dans les pays dits **CEF (Centres pour les Études en France)** : qui représentent la majorité des pays d'Afrique, du Maghreb, d'Asie et d'Amérique latine, la procédure est obligatoire avant toute demande de visa.",
    },
    { type: "h3", texte: "La procédure Campus France CEF :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Créer un dossier sur la plateforme **etudes-en-france.fr**",
        "Renseigner vos formations souhaitées et votre parcours académique",
        "Passer un entretien (dans les grandes villes, au consulat ou en ligne selon les pays)",
        "Obtenir le **numéro de dossier Campus France** à joindre à votre demande de visa",
      ],
    },
    { type: "h3", texte: "Le visa long séjour étudiant (type D) :" },
    {
      type: "p",
      texte: "Une fois accepté par votre établissement, vous demandez un **visa long séjour mention \"étudiant\"** au consulat français de votre pays. Documents requis :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Certificat d'inscription dans un établissement d'enseignement supérieur français",
        "Preuve de ressources suffisantes : **615 € par mois minimum** (bourse, virement familial, compte bancaire)",
        "Justificatif de logement en France",
        "Attestation d'assurance maladie",
        "Numéro de dossier Campus France (si pays CEF)",
      ],
    },
    { type: "h3", texte: "Frais d'inscription 2026 pour les étudiants hors UE :" },
    {
      type: "tableau",
      entetes: ["Niveau", "Frais pour étudiants UE/EEE", "Frais pour étudiants hors UE"],
      lignes: [
        ["Licence", "170 €/an", "2 770 €/an"],
        ["Master", "243 €/an", "3 770 €/an"],
        ["Doctorat", "380 €/an", "380 €/an (même tarif)"],
      ],
    },
    {
      type: "p",
      texte: "*Note : ces tarifs différenciés sont contestés par certaines universités qui choisissent volontairement de ne pas les appliquer ou d'accorder des exonérations.*",
    },
    { type: "h2", texte: "À l'arrivée en France : valider son VLS-TS avec l'OFII", id: "arrivee-ofii" },
    {
      type: "p",
      texte: "Une étape que beaucoup d'étudiants ratent et qui peut bloquer leur séjour : la **validation du VLS-TS**.",
    },
    { type: "h3", texte: "Qu'est-ce que le VLS-TS ?" },
    {
      type: "p",
      texte: "Le Visa Long Séjour Valant Titre de Séjour (VLS-TS) est votre visa étudiant qui vaut titre de séjour pendant un an. Mais pour être valide, il doit être **validé par l'OFII dans les 3 mois suivant votre arrivée en France**.",
    },
    { type: "h3", texte: "Comment valider son VLS-TS :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Connectez-vous sur **administration-etrangers.interieur.gouv.fr** (portail ANEF)",
        "Créez votre compte et sélectionnez \"Valider mon visa long séjour\"",
        "Téléchargez les documents demandés (passeport, visa, justificatif de domicile)",
        "Payez la taxe OFII : **50 €** pour les étudiants",
        "Passez la visite médicale OFII (convocation envoyée par mail)",
      ],
    },
    {
      type: "p",
      texte: "**Attention :** si vous ne validez pas votre VLS-TS dans les 3 mois, il devient caduc et vous vous retrouvez en situation irrégulière. De nombreux étudiants font cette erreur. Ne la faites pas.",
    },
    { type: "h3", texte: "Après la validation : le Contrat d'Intégration Républicaine (CIR)" },
    {
      type: "p",
      texte: "Les étudiants étrangers signent également le CIR et peuvent être invités à suivre une formation civique. C'est aussi la première étape vers le test civique si vous envisagez à terme de demander la nationalité française.",
    },
    {
      type: "h2",
      texte: "Le titre de séjour étudiant : renouvellement et cas particuliers",
      id: "titre-sejour-etudiant",
    },
    {
      type: "p",
      texte: "Après un an (fin de validité du VLS-TS), vous devez demander le renouvellement de votre titre de séjour mention **\"étudiant\"**.",
    },
    { type: "h3", texte: "Conditions de renouvellement :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Être inscrit dans un établissement d'enseignement supérieur reconnu",
        "Justifier d'une **progression dans les études** (passage en année supérieure, validations d'ECTS)",
        "Justifier de ressources suffisantes (615 €/mois ou bourse)",
        "Avoir validé son VLS-TS (donc avoir passé la visite médicale OFII)",
      ],
    },
    { type: "h3", texte: "La notion de \"progression sérieuse dans les études\" :" },
    {
      type: "p",
      texte: "La préfecture peut refuser le renouvellement si vous avez redoublé plusieurs fois ou si votre parcours semble s'éterniser sans justification. En cas de difficultés académiques, joignez un certificat médical ou une lettre d'explication à votre dossier de renouvellement.",
    },
    { type: "h3", texte: "Le titre de séjour \"étudiant-programme de mobilité\" :" },
    {
      type: "p",
      texte: "Si vous êtes en échange universitaire (Erasmus+ ou accord bilatéral), un titre spécifique peut vous être délivré pour la durée de votre mobilité.",
    },
    { type: "h3", texte: "Délais de dépôt :" },
    {
      type: "tableau",
      entetes: ["Situation", "Date idéale de dépôt"],
      lignes: [
        ["Renouvellement annuel normal", "2 mois avant l'expiration"],
        ["Premier renouvellement (après VLS-TS)", "1 à 2 mois avant l'expiration du visa"],
        ["Dépôt tardif (après expiration)", "Risque d'irrégularité : agissez immédiatement"],
      ],
    },
    { type: "h2", texte: "Droit de travailler : les 20h/semaine expliquées", id: "droit-travail" },
    {
      type: "p",
      texte: "Bonne nouvelle : les étudiants étrangers ont le **droit de travailler en France**, sans avoir à demander d'autorisation de travail séparée. Ce droit est attaché à leur titre de séjour mention \"étudiant\".",
    },
    { type: "h3", texte: "La règle des 964 heures par an :" },
    { type: "p", texte: "Un étudiant étranger peut travailler **60 % d'un temps plein**, soit :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**964 heures par an** (et non 20h/semaine de manière rigide)",
        "Vous pouvez travailler plus pendant les vacances et moins pendant les périodes d'examens",
        "Il n'y a pas de limite hebdomadaire stricte tant que les 964h annuelles ne sont pas dépassées",
      ],
    },
    { type: "h3", texte: "Le dépassement des 964 heures :" },
    {
      type: "p",
      texte: "Travailler au-delà de 964h par an est possible mais requiert une **autorisation de travail spécifique** délivrée par la DRIEETS (Direction Régionale Interdépartementale de l'Économie, de l'Emploi, du Travail et des Solidarités). Votre employeur doit faire la demande.",
    },
    { type: "h3", texte: "Les contrats compatibles avec le statut étudiant :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "CDI ou CDD à temps partiel",
        "Contrat d'apprentissage (avec dérogation possible au-delà de 964h)",
        "Mission d'intérim",
        "Auto-entrepreneur (attention : le statut d'auto-entrepreneur peut être assimilé à une activité professionnelle principale, incompatible avec le titre étudiant)",
      ],
    },
    { type: "p", texte: "**Q : Puis-je faire un stage pendant mes études ?**" },
    {
      type: "p",
      texte: "R : Oui. Les stages de moins de 6 mois dans le cadre d'une convention de stage ne sont pas soumis aux 964 heures. Au-delà de 6 mois, des règles spécifiques s'appliquent.",
    },
    {
      type: "h2",
      texte: "Accès aux aides sociales : APL, bourse CROUS, sécurité sociale",
      id: "aides-sociales",
    },
    {
      type: "p",
      texte: "Les étudiants étrangers en situation régulière ont accès à plusieurs aides sociales importantes :",
    },
    { type: "h3", texte: "1. L'Aide Personnalisée au Logement (APL)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Accessible dès l'arrivée** avec un VLS-TS étudiant validé",
        "Montant moyen : **150 à 300 €/mois** selon la zone géographique et le loyer",
        "Démarche : s'inscrire sur **caf.fr** avec votre numéro de titre de séjour",
      ],
    },
    { type: "h3", texte: "2. Les bourses CROUS sur critères sociaux" },
    {
      type: "p",
      texte: "Les étudiants étrangers peuvent demander une bourse sur critères sociaux auprès du CROUS, sous conditions :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Avoir obtenu le baccalauréat ou diplôme équivalent en France (après scolarité en France)",
        "OU être enfant d'un étranger ayant cotisé en France pendant 5 ans",
        "Les boursiers gouvernementaux étrangers ont leur propre système de bourse",
      ],
    },
    { type: "h3", texte: "3. La Sécurité sociale étudiante" },
    {
      type: "p",
      texte: "Depuis 2019, tous les étudiants en France sont affiliés directement à la **Sécurité sociale de droit commun** (plus de mutuelles étudiantes obligatoires). Les étudiants étrangers y sont automatiquement affiliés via l'AMELI dès leur inscription dans un établissement. La cotisation étudiante est de **0 €** (gratuite).",
    },
    { type: "h3", texte: "4. Aides d'urgence CROUS" },
    {
      type: "p",
      texte: "En cas de difficultés financières imprévues, les CROUS accordent des **aides d'urgence ponctuelles** (Aide d'urgence ponctuelle ou annuelle) : accessible à tous les étudiants, y compris étrangers, quelle que soit leur nationalité.",
    },
    {
      type: "h2",
      texte: "Faire venir sa famille en France en tant qu'étudiant",
      id: "faire-venir-famille",
    },
    {
      type: "p",
      texte: "C'est l'une des questions les plus posées : un étudiant étranger peut-il faire venir son conjoint ou ses enfants en France ?",
    },
    { type: "h3", texte: "La réponse courte : oui, mais pas par regroupement familial classique" },
    {
      type: "p",
      texte: "Les étudiants ne peuvent pas demander le regroupement familial classique (réservé aux personnes avec ressources stables). En revanche, d'autres voies existent :",
    },
    { type: "h3", texte: "Option 1 : Le visa visiteur pour le conjoint" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Visa long séjour mention **\"vie privée et familiale\"** ou **\"visiteur\"**",
        "Le conjoint ne peut pas travailler avec ce visa",
        "Ressources requises : l'étudiant doit justifier de **1 200 € /mois minimum** pour subvenir aux besoins du couple",
      ],
    },
    { type: "h3", texte: "Option 2 : Le conjoint suit ses propres études en France" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si votre conjoint est lui-même admis dans un établissement français, il obtient son propre visa étudiant indépendamment",
        "C'est souvent la solution la plus simple",
      ],
    },
    { type: "h3", texte: "Option 3 : Attendre le changement de statut" },
    {
      type: "p",
      texte: "Une fois que vous avez changé de statut (de étudiant à salarié), vous pouvez entamer une procédure de regroupement familial classique si vous remplissez les conditions de revenus et de logement.",
    },
    { type: "h3", texte: "Pour les enfants :" },
    {
      type: "p",
      texte: "Les enfants mineurs d'un étudiant étranger peuvent venir en France si l'étudiant justifie de revenus suffisants pour les accueillir. Une demande de visa spécifique est nécessaire au consulat.",
    },
    {
      type: "h2",
      texte: "Changer de statut : de étudiant à salarié (APS et carte de séjour)",
      id: "changer-statut",
    },
    {
      type: "p",
      texte: "Après votre diplôme, vous n'êtes pas obligé de rentrer dans votre pays. La France offre des dispositifs pour rester et travailler après les études.",
    },
    { type: "h3", texte: "L'Autorisation Provisoire de Séjour (APS) :" },
    {
      type: "p",
      texte: "L'APS est un titre de séjour temporaire d'1 an (non renouvelable) qui vous permet de **rechercher un emploi** ou de **créer une entreprise** après l'obtention d'un diplôme de niveau Master ou équivalent (bac+5).",
    },
    {
      type: "tableau",
      entetes: ["Critère APS", "Condition"],
      lignes: [
        ["Niveau de diplôme", "Master 1, Master 2, diplôme d'ingénieur, diplôme bac+5"],
        ["Nationalité", "Hors UE/EEE"],
        ["Délai de demande", "Avant l'expiration du titre étudiant"],
        ["Droit au travail", "Oui, à temps plein (y compris CDI)"],
        ["Durée", "12 mois non renouvelables"],
      ],
    },
    { type: "h3", texte: "Après l'APS : obtenir un titre de séjour salarié" },
    {
      type: "p",
      texte: "Une fois en CDI (ou CDD de plus de 12 mois), vous demandez un **titre de séjour \"salarié\"** ou un **\"passeport talent\"** si vous êtes dans un secteur qualifié. Votre employeur doit obtenir une autorisation de travail (sauf dans les secteurs avec accord de réciprocité).",
    },
    { type: "h3", texte: "Le Passeport Talent : carte de séjour pluriannuelle (4 ans) :" },
    {
      type: "p",
      texte: "Si vous êtes diplômé bac+5 et avez signé un CDI avec une rémunération d'au moins **1,5 fois le SMIC** (environ 2 139 €/mois en 2026), vous pouvez demander directement le **Passeport Talent**, une carte pluriannuelle de 4 ans qui facilite grandement la vie administrative.",
    },
    {
      type: "h2",
      texte: "Droit de rester en France après les études : vos options",
      id: "droit-rester",
    },
    {
      type: "p",
      texte: "Que vous ayez ou non un emploi immédiatement après vos études, plusieurs options s'offrent à vous pour rester légalement en France :",
    },
    { type: "h3", texte: "Option 1 : APS (voir section précédente)" },
    {
      type: "p",
      texte: "12 mois pour chercher un emploi ou créer une entreprise. Idéal si vous n'avez pas encore de poste.",
    },
    { type: "h3", texte: "Option 2 : Carte de séjour étudiant prolongée" },
    {
      type: "p",
      texte: "Si vous continuez vos études (thèse de doctorat, Master complémentaire), vous renouvelez simplement votre titre étudiant.",
    },
    { type: "h3", texte: "Option 3 : Titre de séjour \"vie privée et familiale\"" },
    {
      type: "p",
      texte: "Si vous avez des attaches familiales en France (conjoint français, enfant français, longue présence), vous pouvez demander ce titre sur ces fondements.",
    },
    { type: "h3", texte: "Option 4 : Naturalisation française" },
    {
      type: "p",
      texte: "Si vous êtes en France depuis au moins 5 ans (dont une partie en études supérieures) et remplissez les conditions (langue, intégration, absence de condamnation), vous pouvez demander la naturalisation. Notez que 2 années d'études dans un établissement français comptent comme 5 ans de résidence pour le calcul de la durée (article 21-18 du Code civil).",
    },
    {
      type: "p",
      texte: "**Lien avec le test civique :** si vous souhaitez la nationalité française, vous devrez passer le test civique, 40 questions sur les institutions, les valeurs républicaines et la vie en société. Vos années d'études en France sont la meilleure préparation possible à cet examen.",
    },
    { type: "h3", texte: "Tableau récapitulatif des options après les études :" },
    {
      type: "tableau",
      entetes: ["Situation", "Titre recommandé", "Durée"],
      lignes: [
        ["Diplômé bac+5, cherche emploi", "APS", "12 mois"],
        ["Diplômé bac+5, CDI signé (1,5 SMIC)", "Passeport Talent", "4 ans"],
        ["Diplômé bac+3/4, emploi trouvé", "Titre de séjour salarié", "1 an renouvelable"],
        ["Continue en thèse", "Titre de séjour étudiant", "1 an renouvelable"],
        ["Conjoint/enfant français", "Vie privée et familiale", "1 à 4 ans"],
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Être étudiant étranger en France en 2026, c'est naviguer entre visa, Campus France, OFII, CROUS, ANEF et préfecture, mais avec les bons repères, tout est gérable. La clé : valider votre VLS-TS dans les 3 mois dès votre arrivée (beaucoup l'oublient), renouveler votre titre avant son expiration, et penser dès le Master à votre stratégie post-études (APS, Passeport Talent, naturalisation). La France investit dans ses étudiants étrangers et leur offre de vraies voies pour s'y installer durablement.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Un étudiant étranger peut-il travailler à temps plein en France ?",
      reponse: "Non. Un étudiant étranger est limité à 964 heures de travail par an (60% d'un temps plein), soit environ 20h/semaine en moyenne. Dépasser cette limite nécessite une autorisation de travail spécifique. Pendant les vacances universitaires, vous pouvez travailler davantage dans la limite des 964h annuelles.",
    },
    {
      question: "Que se passe-t-il si je ne valide pas mon VLS-TS dans les 3 mois ?",
      reponse: "Votre VLS-TS devient caduc et vous vous retrouvez en situation irrégulière. Vous devez alors régulariser rapidement votre situation auprès de la préfecture. Ne manquez pas ce délai, c'est l'erreur la plus fréquente des étudiants étrangers nouvellement arrivés.",
    },
    {
      question: "Les étudiants étrangers peuvent-ils avoir l'APL ?",
      reponse: "Oui. Les étudiants titulaires d'un VLS-TS étudiant validé par l'OFII ont droit à l'APL aux mêmes conditions que les étudiants français. Faites votre demande sur caf.fr dès votre arrivée.",
    },
    {
      question: "Combien d'années d'études comptent pour la naturalisation française ?",
      reponse: "Selon l'article 21-18 du Code civil, 2 années d'études dans un établissement d'enseignement supérieur en France sont assimilées à 5 années de résidence pour le calcul de la durée requise (normalement 5 ans) pour demander la naturalisation.",
    },
    {
      question: "Comment faire venir son conjoint si on est étudiant en France ?",
      reponse: "Les étudiants ne peuvent pas utiliser la procédure de regroupement familial classique. Le plus simple est que le conjoint obtienne son propre visa étudiant (s'il étudie aussi) ou un visa \"visiteur\" si l'étudiant justifie de ressources suffisantes (au moins 1 200 €/mois). Une autre solution est d'attendre d'avoir changé de statut vers salarié.",
    },
    {
      question: "Qu'est-ce que l'APS et comment en bénéficier après les études ?",
      reponse: "L'Autorisation Provisoire de Séjour (APS) est un titre de 12 mois accordé aux diplômés de niveau bac+5 (Master, ingénieur) pour chercher un emploi ou créer une entreprise. Il faut la demander avant l'expiration du titre étudiant. Elle autorise le travail à temps plein pendant cette période de transition.",
    },
  ],
};

export default article;
