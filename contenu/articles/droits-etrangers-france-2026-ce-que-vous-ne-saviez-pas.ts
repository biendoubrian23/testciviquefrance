import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-generaux.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/droits-etrangers-france-2026-ce-que-vous-ne-saviez-pas`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "droits-etrangers-france-2026-ce-que-vous-ne-saviez-pas",
  titre: "Étranger en France : les 10 droits que tu as et que tu ne connais probablement pas",
  titreSeo: "Étranger en France : les 10 droits que tu as et que tu ne connais probablement pas",
  resume: "Droit à un interprète gratuit, accès aux soins médicaux, DALO, aide juridictionnelle, aides sociales dès le premier titre de séjour... Voici les 10 droits fondamentaux que des millions d'étrangers ignorent en France en 2026.",
  chapo: "Vous êtes étranger en France et vous pensez que vos droits se limitent à votre titre de séjour ? Détrompez-vous. La loi française vous accorde des droits fondamentaux que des millions d'étrangers ignorent complètement, et que certaines administrations ne s'empresseront pas de vous rappeler. Droit à un interprète gratuit, droit au médecin même sans couverture sociale, droit au logement d'urgence, aide juridictionnelle, droit de ne pas se déplacer en préfecture... Voici les 10 droits qui changeront concrètement votre vie en France en 2026.",
  publieLe: "2026-04-07",
  modifieLe: "2026-04-07",
  minutes: 14,
  theme: "droits étrangers France 2026",
  motsCles: [
    "droits étrangers France 2026",
    "droits immigrés France",
    "droits titre de séjour France",
    "aide juridictionnelle étranger",
    "interprète préfecture gratuit",
    "droit au médecin sans papiers",
    "AME aide médicale état",
    "DALO droit au logement",
    "droits sans papiers France",
    "protection droits fondamentaux étrangers",
    "CESEDA droits étrangers",
    "défenseur des droits étranger",
    "recours étranger préfecture",
    "droits sociaux titulaire titre séjour",
    "étranger en situation régulière droits",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
  },
  blocs: [
    {
      type: "h2",
      texte: "Droit n°1 : Un interprète gratuit en préfecture et dans les administrations",
      id: "droit-interprete",
    },
    {
      type: "p",
      texte: "Lors de tout entretien ou procédure administrative officielle, préfecture, tribunal, services sociaux, vous avez le droit de demander l'assistance d'un interprète. Ce droit est garanti par l'article 6 de la Convention européenne des droits de l'homme ainsi que par le droit administratif français.",
    },
    { type: "h3", texte: "Comment en bénéficier concrètement ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Signalez à l'agent que vous ne parlez pas suffisamment le français pour comprendre la procédure",
        "Demandez explicitement la remise de la décision par écrit avec traduction ou résumé compréhensible",
        "Dans le cadre d'une procédure judiciaire, l'interprète est pris en charge intégralement par l'État",
      ],
    },
    { type: "h3", texte: "Ce que beaucoup ne savent pas" },
    {
      type: "p",
      texte: "Même lors d'une convocation préfectorale classique (renouvellement, entretien), vous pouvez venir accompagné d'un proche qui maîtrise le français pour vous assister. L'administration ne peut pas vous interdire cette présence. Si un agent refuse de vous recevoir avec votre accompagnateur, notez son nom et saisissez le Défenseur des droits (défenseursdesdroits.fr).",
    },
    {
      type: "h2",
      texte: "Droit n°2 : L'accès aux soins médicaux urgents, même sans titre de séjour",
      id: "droit-medecin",
    },
    {
      type: "p",
      texte: "En France, nul ne peut se voir refuser des soins médicaux urgents, quelle que soit sa situation administrative. Ce principe est protégé par l'article L6311-2 du Code de la santé publique.",
    },
    { type: "h3", texte: "L'Aide Médicale de l'État (AME)" },
    {
      type: "p",
      texte: "Si vous êtes en France depuis plus de 3 mois sans titre de séjour régulier, vous pouvez bénéficier de l'**AME (Aide Médicale de l'État)** qui couvre la quasi-totalité des soins médicaux de base. En 2026, environ 413 000 personnes en bénéficient.",
    },
    { type: "h3", texte: "Si vous avez un titre de séjour" },
    {
      type: "p",
      texte: "Dès votre arrivée en France avec un visa long séjour validé par l'OFII, vous êtes affilié à l'Assurance Maladie. Vous avez droit à :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "La Couverture Maladie Universelle Complémentaire (C2S) si vos revenus sont modestes",
        "Le médecin traitant et le tiers payant",
        "Les urgences hospitalières sans avance de frais si vous êtes en danger immédiat",
      ],
    },
    { type: "h3", texte: "L'erreur classique" },
    {
      type: "p",
      texte: "Ne jamais renoncer à des soins par peur des conséquences administratives. Consulter un médecin n'a aucun impact sur votre dossier de titre de séjour.",
    },
    { type: "h2", texte: "Droit n°3 : Le DALO, droit au logement opposable", id: "droit-dalo" },
    {
      type: "p",
      texte: "Le **DALO (Droit Au Logement Opposable)**, instauré par la loi du 5 mars 2007, permet à toute personne en situation régulière en France de saisir une commission départementale si elle se retrouve sans logement ou dans un logement indigne.",
    },
    { type: "h3", texte: "Qui peut en bénéficier ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Tout étranger titulaire d'un **titre de séjour en cours de validité**",
        "Sans domicile fixe ou hébergé dans des conditions indignes",
        "Demandeur d'un logement social depuis un délai anormalement long (variable selon le département)",
      ],
    },
    { type: "h3", texte: "La procédure en 3 étapes" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Étape 1** : Déposer un dossier auprès de la commission de médiation de votre département (formulaire Cerfa n°15036)",
        "**Étape 2** : La commission dispose de 3 à 6 mois pour statuer",
        "**Étape 3** : Si reconnue prioritaire, la préfecture doit vous proposer un logement adapté. En cas d'inaction, vous pouvez saisir le tribunal administratif",
      ],
    },
    { type: "h3", texte: "Le saviez-vous ?" },
    {
      type: "p",
      texte: "En cas de décision favorable et d'absence de proposition de logement dans les délais, vous pouvez obtenir des dommages et intérêts de l'État. Ce droit est souvent ignoré même par les assistantes sociales.",
    },
    {
      type: "h2",
      texte: "Droit n°4 : L'aide juridictionnelle, un avocat payé par l'État",
      id: "droit-aide-juridictionnelle",
    },
    {
      type: "p",
      texte: "Si vous devez faire face à une procédure juridique (recours contre un refus de titre de séjour, OQTF, appel d'une décision de l'OFPRA…) et que vos revenus sont modestes, l'État peut prendre en charge totalement ou partiellement les honoraires de votre avocat.",
    },
    { type: "h3", texte: "Conditions en 2026" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Revenus mensuels inférieurs à **environ 1 235 €/mois** pour l'aide totale (100 %)",
        "Revenus entre 1 235 € et 1 852 €/mois pour l'aide partielle (de 25 % à 85 %)",
        "Être en situation régulière OU être en procédure contre une décision administrative",
      ],
    },
    { type: "h3", texte: "Comment demander ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Formulaire en ligne sur **justice.fr**",
        "Déposer auprès du bureau d'aide juridictionnelle (BAJ) du tribunal compétent",
        "Un avocat commis d'office peut être désigné si vous n'en avez pas",
      ],
    },
    { type: "h3", texte: "Attention" },
    {
      type: "p",
      texte: "L'aide juridictionnelle ne dispense pas de certains frais annexes (expertise, huissier). Renseignez-vous précisément sur ce qui est couvert lors de votre première consultation.",
    },
    {
      type: "h2",
      texte: "Droit n°5 : Le droit au recours contre toute décision préfectorale",
      id: "droit-recours",
    },
    {
      type: "p",
      texte: "Toute décision administrative défavorable : refus de titre de séjour, refus de renouvellement, refus de naturalisation, doit être **motivée par écrit** et peut être contestée devant la justice.",
    },
    { type: "h3", texte: "Les voies de recours disponibles" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Le RAPO** (Recours Administratif Préalable Obligatoire) : contestation directe auprès de la préfecture dans un délai de **30 jours** suivant la notification. C'est la voie la moins coûteuse et parfois la plus rapide",
        "**Le tribunal administratif** : recours juridictionnel dans un délai de **2 mois** (attention : le RAPO suspend ce délai)",
        "**La CNDA** (Cour Nationale du Droit d'Asile) : pour les recours spécifiques aux demandeurs d'asile après refus de l'OFPRA",
      ],
    },
    { type: "h3", texte: "Ce que la préfecture ne vous dit pas toujours" },
    {
      type: "p",
      texte: "Vous pouvez demander la **suspension de l'exécution** d'une décision d'éloignement (OQTF) en référé devant le tribunal administratif. Le juge peut l'accorder sous 72 heures si vous démontrez une urgence et un doute sérieux sur la légalité de la décision.",
    },
    {
      type: "h2",
      texte: "Droit n°6 : La scolarisation obligatoire de vos enfants, sans conditions",
      id: "droit-enfants",
    },
    {
      type: "p",
      texte: "En France, **tout enfant présent sur le territoire a le droit et l'obligation d'être scolarisé**, quelle que soit la situation administrative de ses parents. Ni la mairie ni le directeur d'école ne peuvent refuser l'inscription d'un enfant étranger.",
    },
    { type: "h3", texte: "Ce que dit la loi" },
    {
      type: "p",
      texte: "L'article L131-1 du Code de l'éducation impose la scolarisation de 3 à 16 ans pour tous les enfants résidant en France. La circulaire du 2 octobre 2012 rappelle explicitement qu'aucun document relatif au séjour des parents n'est exigible.",
    },
    { type: "h3", texte: "Les dispositifs d'accueil spécifiques" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**UPE2A** (Unités Pédagogiques pour Élèves Allophones Arrivants) : classes spéciales pour les enfants ne parlant pas français, disponibles dans la plupart des grandes villes",
        "**CASNAV** (Centres Académiques pour la Scolarisation des enfants Allophones Nouvellement Arrivés) : coordination au niveau académique",
      ],
    },
    { type: "h3", texte: "En cas de refus d'inscription" },
    {
      type: "p",
      texte: "Envoyez une lettre de mise en demeure au maire en recommandé avec AR. Saisissez simultanément l'Inspecteur d'académie. En dernier recours, le tribunal administratif peut ordonner l'inscription sous astreinte.",
    },
    {
      type: "h2",
      texte: "Droit n°7 : Les mêmes droits du travail que les Français",
      id: "droit-travail",
    },
    {
      type: "p",
      texte: "Dès lors qu'un étranger travaille légalement en France (autorisation de travail, titre de séjour valable), il bénéficie **exactement des mêmes droits du travail** que n'importe quel salarié français.",
    },
    { type: "h3", texte: "Ce que cela comprend" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le SMIC (ou la convention collective applicable au poste)",
        "Les congés payés (5 semaines minimum par an)",
        "L'accès au syndicat et à la représentation du personnel",
        "La protection contre le licenciement abusif",
        "L'accès aux prud'hommes en cas de litige avec l'employeur",
        "Le droit au chômage (ARE) si vous êtes licencié",
      ],
    },
    { type: "h3", texte: "Un droit souvent ignoré : travailler pendant le renouvellement" },
    {
      type: "p",
      texte: "Si votre titre de séjour expire pendant la procédure de renouvellement et que vous êtes sous récépissé, **vous conservez votre autorisation de travail** jusqu'à l'obtention de la décision définitive. L'employeur ne peut pas vous licencier pour ce motif.",
    },
    { type: "h3", texte: "En cas de discrimination à l'embauche" },
    {
      type: "p",
      texte: "Saisissez le **Défenseur des droits** ou l'**URSSAF** (en cas de travail dissimulé contraire à vos intérêts). La discrimination à l'embauche fondée sur l'origine est un délit pénal passible de 3 ans d'emprisonnement et 45 000 € d'amende.",
    },
    {
      type: "h2",
      texte: "Droit n°8 : Recevoir tout document officiel dans une langue que vous comprenez",
      id: "droit-traduction",
    },
    {
      type: "p",
      texte: "Tout arrêté préfectoral, décision administrative ou notification officielle doit vous être **notifié avec indication de vos voies de recours**, même si le document lui-même est en français.",
    },
    { type: "h3", texte: "Ce que prévoit la loi" },
    {
      type: "p",
      texte: "L'article L211-2 du Code des relations entre le public et l'administration exige que toute décision défavorable soit motivée et indique les voies et délais de recours. Si vous ne comprenez pas la décision, vous pouvez demander des explications écrites.",
    },
    { type: "h3", texte: "Pratiquement" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Conservez toujours une copie de chaque document reçu de l'administration",
        "Si une décision vous semble incompréhensible, une association spécialisée (comme la Cimade, France Terre d'Asile, GISTI) peut vous aider à la décrypter gratuitement",
        "Ne laissez jamais passer un délai de recours sans avoir compris ce qui vous est notifié",
      ],
    },
    {
      type: "h2",
      texte: "Droit n°9 : Saisir le Défenseur des droits gratuitement",
      id: "droit-defenseur",
    },
    {
      type: "p",
      texte: "Le **Défenseur des droits** est une autorité constitutionnelle indépendante qui peut intervenir lorsqu'un service public, préfecture, CAF, Pôle Emploi, hôpital, ne respecte pas vos droits.",
    },
    { type: "h3", texte: "Cas typiques de saisine pour les étrangers" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Refus illégal d'enregistrement d'un dossier en préfecture",
        "Discrimination dans l'accès aux aides sociales",
        "Mauvais traitement ou irrespect lors d'un contrôle de police",
        "Non-respect des délais légaux de traitement d'un dossier",
      ],
    },
    { type: "h3", texte: "Comment saisir ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "En ligne sur **defenseurdesdroits.fr** (formulaire disponible en plusieurs langues)",
        "Par courrier à l'adresse nationale ou auprès d'un délégué local (présents dans la plupart des départements)",
        "La saisine est **totalement gratuite** et confidentielle",
        "Le Défenseur des droits peut imposer des recommandations aux administrations concernées",
      ],
    },
    {
      type: "h2",
      texte: "Droit n°10 : L'accès aux aides sociales dès le premier titre de séjour",
      id: "droit-caf",
    },
    {
      type: "p",
      texte: "Contrairement à une idée reçue très répandue, de nombreuses aides sociales sont accessibles aux étrangers dès l'obtention d'un premier titre de séjour valable. Vous n'avez pas besoin d'être français pour en bénéficier.",
    },
    { type: "h3", texte: "Les aides accessibles selon votre situation" },
    {
      type: "tableau",
      entetes: ["Aide", "Condition de séjour requise"],
      lignes: [
        ["APL (aide au logement)", "Titre de séjour en cours de validité"],
        ["Prime d'activité", "5 ans de résidence régulière"],
        ["C2S (complémentaire santé solidaire)", "Résidence en France + revenus modestes"],
        ["Allocations familiales", "Enfants scolarisés + résidence régulière"],
        ["RSA", "5 ans de résidence régulière (sauf réfugiés)"],
        ["ASPA (retraite minimum)", "Résidence régulière en France"],
      ],
    },
    { type: "h3", texte: "Comment faire valoir ces droits ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Constituez votre dossier CAF dès l'obtention de votre titre de séjour",
        "Apportez votre titre, un justificatif de domicile et vos justificatifs de revenus",
        "N'hésitez pas à solliciter une assistante sociale dans un CCAS (Centre Communal d'Action Sociale) de votre mairie, c'est gratuit et confidentiel",
      ],
    },
    { type: "h3", texte: "Le conseil clé" },
    {
      type: "p",
      texte: "Ne renoncez pas à ces aides par honte ou par peur. Elles sont légales, prévues par la loi, et elles contribuent à l'intégration. Les utiliser ne nuit pas à votre dossier de titre de séjour ni à une future demande de naturalisation.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Être étranger en France ne signifie pas être sans droits. La loi française, la Constitution et les conventions internationales vous protègent de nombreuses manières que trop peu de personnes connaissent. Connaître vos droits, c'est pouvoir les exercer. Interprète gratuit, accès aux soins, aide juridictionnelle, recours, scolarisation des enfants, aides sociales : autant de leviers concrets pour mieux vivre votre vie en France. Gardez cette liste, partagez-la avec vos proches, et n'hésitez jamais à solliciter les associations spécialisées (Cimade, France Terre d'Asile, GISTI, Secours Catholique) qui vous accompagneront gratuitement dans vos démarches.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Un sans-papier a-t-il des droits en France ?",
      reponse: "Oui. Tout être humain sur le territoire français bénéficie de droits fondamentaux : accès aux soins d'urgence, scolarisation des enfants, droit de ne pas être maltraité, droit à un procès équitable. Ces droits sont garantis par la Constitution française et la Convention européenne des droits de l'homme.",
    },
    {
      question: "Comment saisir le Défenseur des droits ?",
      reponse: "Via le site defenseurdesdroits.fr (formulaire multilingue), par courrier ou en vous rendant chez un délégué local. La saisine est totalement gratuite et confidentielle. Le Défenseur peut intervenir auprès de toute administration.",
    },
    {
      question: "Peut-on accéder aux aides sociales avec un premier titre de séjour ?",
      reponse: "Oui pour certaines aides comme l'APL, la C2S et les allocations familiales dès le premier titre. D'autres comme le RSA ou la prime d'activité nécessitent 5 ans de résidence régulière, sauf pour les réfugiés qui y ont accès immédiatement.",
    },
    {
      question: "Un employeur peut-il me licencier pendant mon renouvellement de titre de séjour ?",
      reponse: "Non. Un récépissé de renouvellement maintient votre autorisation de travail jusqu'à la décision définitive. Un licenciement pour ce motif serait illégal et contestable aux prud'hommes.",
    },
  ],
};

export default article;
