import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 26/11/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « carte de séjour vie privée et familiale » (100 à 1 k
 * recherches par mois ; Planificateur de mots clés, France, 07/11/2026) ;
 * suggestion Google nouvelle du 26/11 : « titre de séjour pluriannuel vie
 * privée et familiale ». Famille guides pratiques permanents (cadre légal) ;
 * pont vers l'examen civique par la carte pluriannuelle.
 * Sources lues le 26/11/2026 : service-public F2209 (vérifiée le 06/11/2026,
 * tous les onglets : époux de Français, parent d'enfant français, famille
 * d'un étranger, jeune majeur, rente d'accident du travail, étranger malade,
 * victimes, activité solidaire, motifs humanitaires, renouvellement) ;
 * Légifrance, CESEDA L. 423-1, L. 423-6, L. 423-7, L. 423-21 et L. 423-23
 * (lus par Chrome).
 * Non écrit faute de source sûre : le montant du visa de régularisation (F2209
 * écrit 300 €, d'autres fiches 180 €), un nombre de cartes délivrées par an.
 */
const article: Article = {
  slug: "carte-sejour-vie-privee-et-familiale",
  titre: "Carte de séjour vie privée et familiale : qui y a droit, combien elle coûte, et quand l'examen civique arrive",
  titreSeo: "Carte vie privée et familiale : qui y a droit ?",
  resume: "Les cas qui ouvrent la carte vie privée et familiale, son prix, la démarche, et le passage à la carte pluriannuelle avec l'examen civique.",
  chapo: "La carte de séjour « vie privée et familiale » est un titre donné pour vos liens familiaux ou personnels en France. Par exemple : un mariage avec une personne française, un enfant français, une vie installée ici. Elle dure ==un an== au début et vous permet de travailler. Pour passer ensuite à une carte de ==2 ou 4 ans==, il faut en plus le niveau A2 de français et l'examen civique.",
  publieLe: "2026-11-26",
  modifieLe: "2026-11-26",
  minutes: 8,
  theme: "La carte de séjour vie privée et familiale : les cas prévus par la loi, le prix, la démarche et le passage à la carte pluriannuelle",
  motsCles: [
    "carte de séjour vie privée et familiale",
    "titre de séjour vie privée et familiale",
    "titre de séjour pluriannuel vie privée et familiale",
    "carte vie privée et familiale conditions",
    "vie privée et familiale renouvellement",
    "liens personnels et familiaux titre de séjour",
    "carte de séjour parent d'enfant français",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/carte-sejour-vie-privee-et-familiale.webp",
    alt: "Le palais Sarde à Nice, siège de la préfecture des Alpes-Maritimes, éclairé par le soleil du soir derrière des palmiers",
    largeur: 1024,
    hauteur: 768,
    credit: "corno.fulgur75, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/129231073@N06/16293823652",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que la carte vie privée et familiale ?",
    },
    {
      type: "p",
      texte: "Un titre de séjour, c'est la carte qui vous permet de vivre en France de façon régulière. Il en existe plusieurs sortes, selon le motif : études, travail, famille. La carte « vie privée et familiale » est celle du ==motif familial et personnel==. Ses règles sont écrites dans le CESEDA, le code qui réunit le droit des étrangers, aux [articles L. 423-1 à L. 423-23](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771692/).",
    },
    {
      type: "p",
      texte: "Elle vous autorise à séjourner en France ==et à travailler==. Votre employeur n'a pas à demander d'autorisation de travail ([service-public, F2209](https://www.service-public.gouv.fr/particuliers/vosdroits/F2209)). Il y a une exception pour l'époux ou l'épouse d'un résident de longue durée de l'Union européenne. Le travail n'est pas permis la première année. Sauf arrivée en France avant 18 ans et au moins un an de vie en France.",
    },
    {
      type: "h2",
      texte: "Dans quels cas pouvez-vous l'obtenir ?",
    },
    {
      type: "p",
      texte: "La loi ne la donne pas à tout le monde. Elle prévoit des situations précises. Voici les principales, avec ce que la loi demande :",
    },
    {
      type: "tableau",
      entetes: ["Votre situation", "Ce que la loi demande (en résumé)", "Texte"],
      lignes: [
        ["Marié avec une personne française", "La vie commune n'a pas cessé depuis le mariage ; l'époux ou l'épouse est resté français ; un mariage fait à l'étranger a été transcrit en France", "L. 423-1"],
        ["Parent d'un enfant français mineur qui vit en France", "Vous contribuez vraiment à son entretien et à son éducation, depuis sa naissance ou depuis au moins 2 ans", "L. 423-7"],
        ["Jeune majeur arrivé enfant", "Dans l'année de vos 18 ans, prouver que vous vivez en France depuis l'âge de 13 ans au plus, avec au moins un parent. Pour les Tunisiens : 10 ans, selon service-public", "L. 423-21"],
        ["Liens personnels et familiaux forts en France", "Des liens intenses, anciens et stables, tels qu'un refus porterait une atteinte trop forte à votre vie privée et familiale", "L. 423-23"],
        ["Étranger malade", "Des soins sans lesquels votre santé deviendrait critique, et pas de traitement adapté dans votre pays", "L. 425-9"],
        ["Victime de violences conjugales ou d'une menace de mariage forcé", "Une ordonnance de protection rendue par le juge", "F2209"],
      ],
    },
    {
      type: "p",
      texte: "Service-public cite aussi d'autres cas. Un jeune confié à l'aide sociale à l'enfance au plus tard à 16 ans. Une personne née en France qui y a vécu 8 ans et suivi 5 ans d'école après ses 10 ans. Une rente d'accident du travail avec une incapacité d'au moins 20 %. Trois ans d'activité dans un organisme d'accueil solidaire. Ou des motifs humanitaires.",
    },
    {
      type: "encadre",
      titre: "Le visa n'est pas toujours exigé",
      texte: "Trois cas ne demandent pas de visa de long séjour : le parent d'enfant français, le jeune majeur arrivé enfant, la personne qui a des liens personnels forts. La loi dit que cette condition ==n'est pas opposable==. Service-public précise qu'un parent d'enfant français peut demander la carte même en situation irrégulière. Pour un conjoint de Français entré avec un visa court, il faut s'être marié en France et justifier de 6 mois de vie commune en France.",
      ton: "bleu",
    },
    {
      type: "p",
      texte: "Si vous êtes Algérien, d'autres règles s'appliquent : celles de l'accord franco-algérien de 1968. Notre article sur [les Algériens et l'examen civique](/articles/algeriens-examen-civique-2026-accord-1968-dispense-sejour-mais-pas-naturalisation) en parle. Pour la carte de l'étranger malade, la procédure passe par un avis médical de l'OFII (l'Office français de l'immigration et de l'intégration). Lisez notre guide sur [le titre de séjour pour soins](/articles/titre-sejour-etranger-malade-raisons-sante-2026).",
    },
    {
      type: "h2",
      texte: "Combien coûte la carte vie privée et familiale ?",
    },
    {
      type: "p",
      texte: "Vous payez par timbre fiscal, un timbre acheté en ligne ou dans un bureau de tabac équipé. Le paiement se fait au moment où vous recevez la carte. Voici les montants donnés par [service-public](https://www.service-public.gouv.fr/particuliers/vosdroits/F2209) :",
    },
    {
      type: "tableau",
      entetes: ["Cas", "Première délivrance", "Si vous avez déjà un titre de séjour"],
      lignes: [
        ["Cas général (conjoint, parent, liens personnels, jeune majeur…)", "350 € (50 € de droit de timbre et 300 € de taxe)", "250 € (50 € et 200 €)"],
        ["Tarif réduit (par exemple rente d'accident du travail)", "150 € (50 € et 100 €)", "100 € (50 € et 50 €)"],
        ["Jeune confié à l'aide sociale à l'enfance, enfant d'un protégé subsidiaire", "50 €", "250 €"],
        ["Victime de violences conjugales ou de traite des êtres humains", "Gratuit", "Gratuit"],
      ],
    },
    {
      type: "p",
      texte: "Un amendement examiné au Sénat propose de doubler ces taxes au 1er janvier 2027. ==Rien n'est voté== à ce jour : notre article sur [l'amendement du Sénat](/articles/timbre-naturalisation-1000-euros-senat) suit le texte.",
    },
    {
      type: "h2",
      texte: "Comment faire la demande ?",
    },
    {
      type: "p",
      texte: "Pour un conjoint de Français ou un parent d'enfant français, la demande se fait en ligne, sur l'ANEF, le site de l'État pour les titres de séjour ([administration-etrangers-en-france.interieur.gouv.fr](https://administration-etrangers-en-france.interieur.gouv.fr)). Pour d'autres cas, comme les liens personnels ou le jeune majeur, service-public indique une demande à la préfecture, le service de l'État dans votre département.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Vérifiez le délai.** En ligne, déposez entre 4 et 2 mois avant la fin de votre visa ou de votre titre. En préfecture, au moins 2 mois avant.",
        "**Préparez les papiers.** Passeport, acte de naissance, justificatif de domicile de moins de 6 mois, e-photo. Ajoutez les preuves de votre situation : acte de mariage, acte de naissance de l'enfant, preuves de vie commune ou de liens.",
        "**Signez le contrat d'engagement** à respecter les principes de la République. Il fait partie du dossier.",
        "**Faites traduire les actes étrangers** par un traducteur agréé. Certains doivent aussi être légalisés ou apostillés.",
        "**Gardez l'attestation de dépôt.** Elle prouve que vous avez déposé, mais ce n'est pas un titre de séjour.",
        "**Récupérez la carte** en préfecture, souvent sur rendez-vous, avec le timbre fiscal et le certificat médical de l'OFII.",
      ],
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Les preuves font le dossier.** Pour un parent, il faut montrer votre rôle auprès de l'enfant : pension, achats, suivi scolaire, témoignages.",
        "**Pour les liens personnels**, la préfecture regarde l'ancienneté, l'intensité et la stabilité de vos liens, votre insertion et vos liens restés au pays. Classez vos preuves année par année.",
        "**La préfecture peut refuser** si vous n'avez pas respecté une OQTF (obligation de quitter le territoire français), ou en cas de faux papiers ou de délits graves.",
      ],
    },
    {
      type: "h2",
      texte: "Après un an : la carte pluriannuelle et l'examen civique",
    },
    {
      type: "p",
      texte: "La première carte dure ==un an==. Ensuite, vous pouvez demander une carte pluriannuelle, c'est-à-dire de plusieurs années. Selon [service-public](https://www.service-public.gouv.fr/particuliers/vosdroits/F2209), elle dure ==2 ans== pour un conjoint de Français ou un parent d'enfant français, et ==4 ans== pour une personne entrée par regroupement familial.",
    },
    {
      type: "p",
      texte: "Pour une première carte pluriannuelle, vous devez remplir une condition d'intégration :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "avoir suivi sérieusement les formations du CIR (le contrat d'intégration républicaine, signé avec l'OFII à votre arrivée) ;",
        "avoir un niveau de français ==A2== au moins ;",
        "avoir réussi l'==examen civique==, avec la mention : « carte de séjour pluriannuelle » ;",
        "sauf si vous avez plus de 65 ans, pour le français et l'examen.",
      ],
    },
    {
      type: "p",
      texte: "Attention aussi : une carte d'un an ne peut pas être renouvelée ==plus de 3 fois de suite== pour le même motif, selon service-public. Notre article sur [l'examen civique pour la carte pluriannuelle](/articles/examen-civique-obligatoire-carte-sejour-pluriannuelle-2026) détaille l'épreuve, et celui sur [l'examen civique des conjoints de Français](/articles/examen-civique-conjoint-de-francais) montre les trois étapes du parcours.",
    },
    {
      type: "cta",
      texte: "L'examen civique se prépare pendant l'année de votre première carte. Sur Test Civique France, les examens blancs de 40 questions vous donnent votre score et la correction de chaque question. L'inscription est gratuite.",
    },
    {
      type: "p",
      texte: "Après 3 ans de mariage avec une personne française et 3 ans de séjour régulier, vous pouvez demander une carte de résident de 10 ans ([CESEDA, article L. 423-6](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771692/)). Notre guide sur [la carte de résident](/articles/carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture) en donne les conditions.",
    },
    {
      type: "h2",
      texte: "Et si la préfecture refuse ou ne répond pas ?",
    },
    {
      type: "p",
      texte: "Si vous remplissez les conditions et que le préfet envisage un refus, il doit d'abord consulter la [commission du titre de séjour](/articles/commission-titre-de-sejour). Vous êtes convoqué au moins 15 jours avant, et vous pouvez venir avec un avocat ou un interprète.",
    },
    {
      type: "p",
      texte: "Si la préfecture ne répond pas ==90 jours== après une demande complète, c'est un refus implicite, selon service-public. Vous avez alors 2 mois pour faire un recours gracieux (une demande au préfet de revoir sa décision) ou un recours devant le tribunal administratif. Notre article sur [le délai de 90 jours](/articles/delai-reponse-prefecture-titre-de-sejour-90-jours) explique ce délai.",
    },
    {
      type: "encadre",
      titre: "Le geste qui aide le plus",
      texte: "Un refus écrit est souvent suivi d'une OQTF, avec des délais de recours très courts (48 heures, 15 jours ou 30 jours selon le cas). Ne restez pas seul : montrez la décision tout de suite à un avocat, à une association agréée (La Cimade, le Gisti) ou à une permanence d'accès au droit. Seul l'examen de votre dossier dit ce qui est possible.",
      ton: "ambre",
    },
    {
      type: "p",
      texte: "Vous ne savez pas encore si l'examen civique vous concerne ? Le [simulateur d'éligibilité](/eligibilite-examen-civique) vous répond en une minute.",
    },
  ],
  faq: [
    {
      question: "Qui peut avoir la carte de séjour vie privée et familiale ?",
      reponse: "La loi la prévoit pour des situations précises. Par exemple : un mariage avec une personne française, un enfant français, une arrivée en France avant 13 ans, des liens personnels forts en France. Aussi : une maladie sans soin possible au pays, ou des violences subies. Chaque cas a ses conditions, fixées par le CESEDA.",
    },
    {
      question: "Peut-on travailler avec un titre de séjour vie privée et familiale ?",
      reponse: "Oui. La carte vie privée et familiale vous autorise à travailler, et votre employeur n'a pas d'autorisation de travail à demander. Il y a une exception : l'époux ou l'épouse d'un résident de longue durée de l'Union européenne ne peut pas travailler la première année, sauf entrée en France avant 18 ans.",
    },
    {
      question: "Combien coûte une carte de séjour vie privée et familiale ?",
      reponse: "Dans le cas général, 350 € pour une première délivrance (50 € de droit de timbre et 300 € de taxe), et 250 € si vous avez déjà un titre de séjour, selon service-public. Certains cas paient moins (150 €, 100 € ou 50 €), et la carte est gratuite pour les victimes de violences conjugales ou de traite.",
    },
    {
      question: "Quelle est la durée du titre de séjour pluriannuel vie privée et familiale ?",
      reponse: "Après une première carte d'un an, la carte pluriannuelle dure 2 ans pour un conjoint de Français ou un parent d'enfant français, et 4 ans après un regroupement familial. Pour l'obtenir la première fois, il faut le niveau A2 de français et la réussite à l'examen civique, sauf après 65 ans.",
    },
  ],
  sources: [
    {
      titre: "Service-public : carte de séjour « vie privée et familiale » d'un étranger en France (F2209, vérifiée le 06/11/2026), tous les cas, prix, démarche, renouvellement, recours",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2209",
      type: "officiel",
      luLe: "2026-11-26",
    },
    {
      titre: "Légifrance : CESEDA, articles L. 423-1 à L. 423-23 (titres de séjour pour motif familial ; L. 423-1, L. 423-6, L. 423-7, L. 423-21 et L. 423-23 lus)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771692/",
      type: "officiel",
      luLe: "2026-11-26",
    },
    {
      titre: "Légifrance : CESEDA, articles L. 425-1 à L. 425-11 (étranger malade, victimes)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771806/",
      type: "officiel",
      luLe: "2026-11-26",
    },
    {
      titre: "ANEF : administration numérique pour les étrangers en France (dépôt en ligne)",
      url: "https://administration-etrangers-en-france.interieur.gouv.fr",
      type: "officiel",
      luLe: "2026-11-26",
    },
  ],
};

export default article;
