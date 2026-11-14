import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 14/11/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « inscription liste électorale 2027 » (100 à 1 k recherches
 * par mois, + 900 % sur trois mois ; Planificateur de mots clés, France, toutes
 * les langues, 14/11/2026). Famille actualité et démarches du moment : une
 * échéance officielle (date limite d'inscription du 12/03/2027) ; pont vers
 * l'examen civique (le référentiel cite les conditions pour voter).
 * Sources lues le 14/11/2026 : info.gouv.fr « Élection présidentielle 2027 :
 * dates et vote » (modifiée le 09/11/2026) ; service-public F34778 (vérifiée le
 * 13/08/2026), F34240 (13/08/2026), F34779 (01/10/2025), F1367 (03/03/2026).
 * Non écrit faute de source officielle : la date du décret de convocation (pas
 * encore publié), un nombre de personnes naturalisées non inscrites.
 */
const article: Article = {
  slug: "inscription-listes-electorales-naturalise",
  titre: "Naturalisation : êtes-vous bien inscrit pour voter à la présidentielle de 2027 ?",
  titreSeo: "Liste électorale 2027 après une naturalisation",
  resume: "Nationalité française acquise : inscription automatique ou non, comment vérifier, et les dates limites pour voter en avril 2027 (12 mars, 8 avril).",
  chapo: "Si vous avez acquis la nationalité française ==depuis 2019==, vous êtes en principe inscrit automatiquement sur la liste électorale de votre commune. Avant 2019, c'est à vous de le demander. Pour voter au premier tour de la présidentielle, le ==18 avril 2027==, la date limite d'inscription est le ==12 mars 2027==, sauf cas particuliers.",
  publieLe: "2026-11-14",
  modifieLe: "2026-11-14",
  minutes: 7,
  theme: "Inscription sur les listes électorales après une naturalisation, avant la présidentielle 2027",
  motsCles: [
    "inscription liste électorale 2027",
    "liste électorale naturalisé",
    "inscription liste électorale après naturalisation",
    "présidentielle 2027 inscription",
    "date limite inscription liste électorale 2027",
    "vérifier inscription liste électorale",
    "voter après naturalisation",
  ],
  rubrique: "actualites",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/inscription-listes-electorales-naturalise.webp",
    alt: "Trois isoloirs vides aux rideaux bleus dans une salle municipale, prêts pour un jour d'élection",
    largeur: 1200,
    hauteur: 847,
    credit: "Jamain, via Wikimedia Commons",
    licence: "CC BY 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Isoloirs_J1.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Quand a lieu la présidentielle de 2027, et jusqu'à quand s'inscrire ?",
    },
    {
      type: "p",
      texte: "La liste électorale, c'est la liste des personnes qui peuvent voter dans une commune. Pour voter, il faut y être inscrit. Le Gouvernement a annoncé les dates de l'élection présidentielle au Conseil des ministres du 1er juillet 2026 ([info.gouv.fr, page mise à jour le 9 novembre 2026](https://www.info.gouv.fr/actualite/election-presidentielle-2027)).",
    },
    {
      type: "tableau",
      entetes: ["Étape", "Date"],
      lignes: [
        ["Date limite d'inscription, cas général", "Vendredi 12 mars 2027"],
        ["Date limite pour les cas particuliers (dont une nationalité acquise récemment)", "Jeudi 8 avril 2027"],
        ["Premier tour", "Dimanche 18 avril 2027"],
        ["Second tour", "Dimanche 2 mai 2027"],
      ],
    },
    {
      type: "p",
      texte: "Le décret de convocation des électeurs, le texte officiel qui lance l'élection, n'est pas encore publié. Il doit l'être au plus tard début février 2027, selon la même page du Gouvernement. Les dates ci-dessus sont celles annoncées par le Gouvernement à ce jour.",
    },
    {
      type: "h2",
      texte: "Êtes-vous inscrit automatiquement après votre naturalisation ?",
    },
    {
      type: "p",
      texte: "Tout dépend de la date à laquelle vous avez acquis la nationalité française ([service-public, F34778](https://www.service-public.gouv.fr/particuliers/vosdroits/F34778)) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Nationalité acquise depuis 2019** : vous êtes inscrit automatiquement sur la liste électorale. On parle d'inscription d'office.",
        "**Nationalité acquise avant 2019** : l'inscription n'était pas automatique. Si vous n'avez jamais fait la démarche, vous n'êtes sans doute pas inscrit.",
      ],
    },
    {
      type: "p",
      texte: "Quelle date compte ? Pour une naturalisation par décret, c'est le jour où vous avez eu connaissance de votre décret. Le décret de naturalisation, c'est le texte publié au Journal officiel qui vous donne la nationalité française. Pour une déclaration (par mariage, par exemple), c'est la date d'acquisition. Pour retrouver votre décret, lisez notre article sur le [décret de naturalisation et ses suites](/articles/decret-de-naturalisation-trouver-et-apres).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Inscrit d'office ne veut pas dire inscrit à la bonne adresse. Si vous avez déménagé depuis votre naturalisation, vous êtes peut-être encore inscrit dans votre ancienne commune. ==Vérifiez avant le 12 mars 2027.==",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Comment vérifier votre inscription en deux minutes ?",
    },
    {
      type: "p",
      texte: "Utilisez le service en ligne gratuit [Vérifier votre inscription électorale et votre bureau de vote](https://www.service-public.gouv.fr/particuliers/vosdroits/R51788). Il vous dit sur quelle liste vous êtes inscrit, et si l'inscription est d'office ou volontaire. Il donne aussi l'adresse de votre bureau de vote et votre numéro national d'électeur ([service-public, F1367](https://www.service-public.gouv.fr/particuliers/vosdroits/F1367)).",
    },
    {
      type: "p",
      texte: "Le bureau de vote, c'est la salle où vous votez, souvent une école ou une mairie. La mairie, c'est l'administration de votre commune. Notez son adresse : vous devrez voter dans ce bureau-là, et pas dans un autre.",
    },
    {
      type: "h2",
      texte: "Comment vous inscrire si vous n'êtes pas sur la liste ?",
    },
    {
      type: "p",
      texte: "Vous pouvez demander votre inscription toute l'année, de trois façons, jusqu'au ==6e vendredi avant le premier tour==, soit le 12 mars 2027 ([service-public, F34240](https://www.service-public.gouv.fr/particuliers/vosdroits/F34240)) :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**En ligne**, avec le service [Demande d'inscription en ligne sur les listes électorales](https://www.service-public.gouv.fr/particuliers/vosdroits/R16396). Vous joignez un scan de votre justificatif d'identité et d'un justificatif de domicile de moins de 3 mois.",
        "**À la mairie**, avec les mêmes papiers et le formulaire [cerfa n° 12669](https://www.service-public.gouv.fr/particuliers/vosdroits/R16024). Un cerfa, c'est un formulaire officiel numéroté. Une autre personne peut y aller pour vous, avec un pouvoir écrit et signé.",
        "**Par courrier**, adressé à la mairie : votre courrier doit y ==arriver== au plus tard le 12 mars 2027, pas seulement être posté.",
      ],
    },
    {
      type: "p",
      texte: "Vous n'avez pas encore de carte d'identité ni de passeport français ? C'est fréquent juste après une naturalisation. Vous fournissez alors deux preuves ([service-public, F34779](https://www.service-public.gouv.fr/particuliers/vosdroits/F34779)) :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**une preuve de nationalité** : un acte de naissance français de moins de 3 mois. À défaut, l'ampliation de votre décret de naturalisation (la copie officielle qui vous est remise), une copie du décret ou un [certificat de nationalité française](/articles/certificat-nationalite-francaise) ;",
        "**une preuve d'identité avec photo** : par exemple votre permis de conduire, ou une carte Vitale avec photo.",
      ],
    },
    {
      type: "h2",
      texte: "Nationalité acquise après le 12 mars 2027 : pouvez-vous encore voter ?",
    },
    {
      type: "p",
      texte: "Oui, si vous faites vite. Prenons le cas où vous apprenez votre décret après le 12 mars 2027. Vous pouvez alors vous inscrire jusqu'au ==10e jour avant le premier tour==, soit le 8 avril 2027. La même règle vaut pour une déclaration enregistrée après cette date ([F34240](https://www.service-public.gouv.fr/particuliers/vosdroits/F34240)).",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Dans ce cas, l'inscription **en ligne n'est pas possible** : seulement à la mairie ou par courrier.",
        "Ajoutez un **justificatif récent d'acquisition de la nationalité**, en plus des papiers habituels.",
        "Votre courrier doit arriver à la mairie au plus tard le 8 avril 2027.",
      ],
    },
    {
      type: "h2",
      texte: "Outre-mer et étranger : ce qui change",
    },
    {
      type: "p",
      texte: "Dans sept territoires d'outre-mer, on vote ==la veille==, à cause du décalage horaire : les samedis 17 avril et 1er mai 2027. Ce sont la Guadeloupe, la Martinique, la Guyane, Saint-Pierre-et-Miquelon, Saint-Barthélemy, Saint-Martin et la Polynésie française ([info.gouv.fr](https://www.info.gouv.fr/actualite/election-presidentielle-2027)).",
    },
    {
      type: "p",
      texte: "En Nouvelle-Calédonie, les règles sont différentes : sauf exception, il faut s'inscrire l'année qui précède l'élection. Si vous habitez à l'étranger, vous pouvez demander à être inscrit sur une liste électorale consulaire, celle de l'ambassade ou du consulat de France ([F34778](https://www.service-public.gouv.fr/particuliers/vosdroits/F34778)). Dans ces deux cas, renseignez-vous auprès de votre mairie ou de votre consulat.",
    },
    {
      type: "h2",
      texte: "Le jour du vote : les trois pièges à éviter",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**La pièce d'identité** est obligatoire dans les communes de 1 000 habitants et plus : présentez l'original.",
        "**La carte électorale** n'est pas obligatoire pour voter. Si vous ne l'avez pas reçue, elle vous attend au bureau de vote.",
        "**Vous serez absent ?** Vous pouvez donner procuration : une autre personne inscrite sur une liste électorale vote à votre place. La démarche se fait sur le site Maprocuration, puis au commissariat ou à la gendarmerie.",
      ],
    },
    {
      type: "h2",
      texte: "Le vote, une question de l'examen civique",
    },
    {
      type: "p",
      texte: "Le référentiel de l'examen civique, la liste officielle de ce qu'il faut savoir, demande de connaître les conditions pour voter en France. Il faut avoir la nationalité française et être majeur. Il ne faut pas avoir été privé de ses droits civils et politiques par une condamnation. Si vous avez passé l'examen pour votre naturalisation, ces mots vous disent quelque chose. Voici une question type pour vous en souvenir.",
    },
    {
      type: "qcm",
      thematique: "Système institutionnel et politique",
      question: "Laquelle de ces conditions faut-il remplir pour voter à l'élection présidentielle en France ?",
      choix: [
        "Habiter en France depuis 10 ans",
        "Avoir la nationalité française",
        "Être né en France",
        "Être propriétaire de son logement",
      ],
      reponse: 1,
      explication: "Pour voter à la présidentielle, il faut avoir la nationalité française, être majeur et ne pas avoir été privé de ses droits civils et politiques. Il faut aussi être inscrit sur une liste électorale. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "p",
      texte: "Un proche prépare sa naturalisation ? Il ou elle devra passer l'examen civique. Notre article sur [l'examen civique pour la naturalisation](/articles/examen-civique-naturalisation) explique le niveau demandé. Le [simulateur d'éligibilité](/eligibilite-examen-civique) dit en une minute si l'examen s'applique. Des enfants mineurs deviennent français avec leurs parents : lisez notre article sur [la naturalisation des enfants mineurs](/articles/naturalisation-enfant-mineur-france-2026-effet-collectif-declaration). À 18 ans, ils voteront à leur tour.",
    },
  ],
  faq: [
    {
      question: "Suis-je inscrit automatiquement sur les listes électorales après ma naturalisation ?",
      reponse: "Oui, si vous avez acquis la nationalité française depuis 2019 : l'inscription se fait d'office. Si la nationalité date d'avant 2019, vous devez en principe faire la démarche vous-même. Dans les deux cas, vérifiez votre inscription et votre bureau de vote avec le service en ligne de service-public.fr, surtout après un déménagement.",
    },
    {
      question: "Quelle est la date limite pour s'inscrire sur les listes électorales pour 2027 ?",
      reponse: "Pour la présidentielle de 2027, la date limite est le vendredi 12 mars 2027, selon le Gouvernement. Certaines personnes peuvent s'inscrire jusqu'au 8 avril 2027, notamment celles qui ont acquis la nationalité française après le 12 mars. Dans ce cas, l'inscription se fait à la mairie ou par courrier, pas en ligne.",
    },
    {
      question: "Comment savoir si je suis inscrit sur les listes électorales ?",
      reponse: "Utilisez le service gratuit « Vérifier votre inscription électorale et votre bureau de vote » sur service-public.fr. Il indique la liste sur laquelle vous êtes inscrit, l'adresse de votre bureau de vote et votre numéro national d'électeur. Si vous n'y apparaissez pas, demandez votre inscription en ligne, à la mairie ou par courrier.",
    },
    {
      question: "Peut-on s'inscrire sur les listes électorales sans carte d'identité française ?",
      reponse: "Oui. Vous fournissez une preuve de nationalité : un acte de naissance de moins de 3 mois, votre décret de naturalisation (ampliation ou copie) ou un certificat de nationalité. Vous ajoutez une preuve d'identité avec photo, comme un permis de conduire ou une carte Vitale avec photo.",
    },
  ],
  sources: [
    {
      titre: "info.gouv.fr : « Élection présidentielle 2027 : dates, calendrier et démarches » (publiée le 08/09/2026, modifiée le 09/11/2026)",
      url: "https://www.info.gouv.fr/actualite/election-presidentielle-2027",
      type: "officiel",
      luLe: "2026-11-14",
    },
    {
      titre: "Service-public : inscription sur la liste électorale d'une personne devenue française (F34778, vérifiée le 13/08/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34778",
      type: "officiel",
      luLe: "2026-11-14",
    },
    {
      titre: "Service-public : peut-on s'inscrire sur la liste électorale et voter la même année ? (F34240, vérifiée le 13/08/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34240",
      type: "officiel",
      luLe: "2026-11-14",
    },
    {
      titre: "Service-public : justificatif d'identité pour l'inscription sur une liste électorale (F34779, vérifiée le 01/10/2025)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34779",
      type: "officiel",
      luLe: "2026-11-14",
    },
    {
      titre: "Service-public : inscription sur les listes électorales (F1367, vérifiée le 03/03/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1367",
      type: "officiel",
      luLe: "2026-11-14",
    },
  ],
};

export default article;
