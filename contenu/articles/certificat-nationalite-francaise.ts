import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 05/11/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « certificat de nationalité française » (1 k à 10 k
 * recherches par mois), avec « cnf » (1 k à 10 k) et « demande certificat de
 * nationalité française » (100 à 1 k, + 900 % sur trois mois) : Planificateur
 * de mots clés, France, toutes les langues, 05/11/2026. Famille guides
 * permanents. Aucune page dédiée sur le site.
 * Sources lues le 05/11/2026 : service-public F1051 (vérifiée le 20/06/2025),
 * F3068 et F295 ; Légifrance, code civil, articles 31 à 31-3, 22-1 et 22-2,
 * 21-7 et 21-11 (versions en vigueur au 05/11/2026).
 */
const article: Article = {
  slug: "certificat-nationalite-francaise",
  titre: "Certificat de nationalité française : vos pièces selon votre cas, et le délai de 6 mois",
  titreSeo: "Certificat de nationalité française (CNF) : délai",
  resume: "Le certificat de nationalité française (CNF) : à quoi il sert, qui le demande, les pièces selon votre cas, le tribunal, le délai et le refus.",
  chapo: "Le certificat de nationalité française (CNF) est le document officiel qui prouve que vous êtes français. Il est ==gratuit== et se demande au tribunal judiciaire, avec le formulaire cerfa n° 16237. Le tribunal a ==6 mois== pour répondre, un délai qui peut être prolongé deux fois. Voici les pièces à réunir selon la façon dont vous avez acquis la nationalité.",
  publieLe: "2026-11-05",
  modifieLe: "2026-11-05",
  minutes: 7,
  theme: "certificat de nationalité française",
  motsCles: [
    "certificat de nationalité française",
    "CNF",
    "demande certificat de nationalité française",
    "cerfa 16237",
    "certificat de nationalité française délai",
    "certificat de nationalité française pièces",
    "CNF tribunal judiciaire",
    "refus certificat de nationalité",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/certificat-nationalite-francaise.webp",
    alt: "Façade claire d'un palais de justice, avec deux drapeaux français au-dessus de l'entrée et deux arbres devant",
    largeur: 1200,
    hauteur: 709,
    credit: "Evalois, via Wikimedia Commons",
    licence: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Fa%C3%A7ade_du_Palais_de_Justice_de_Montargis.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que le certificat de nationalité française ?",
    },
    {
      type: "p",
      texte: "Le certificat de nationalité française, ou CNF, est un document officiel qui prouve que vous avez la nationalité française. Il indique ==l'article de loi== qui vous rend français, et les documents qui l'ont prouvé. Il « fait foi jusqu'à preuve du contraire » : on le tient pour vrai, sauf preuve contraire (article 31-2 du code civil, [Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006149969)).",
    },
    {
      type: "p",
      texte: "Il est délivré par le directeur des services de greffe du tribunal judiciaire (article 31 du code civil). Le tribunal judiciaire, c'est le tribunal qui juge les affaires civiles, dont la nationalité. Le greffe, c'est son service administratif : il reçoit les dossiers et délivre les actes.",
    },
    {
      type: "p",
      texte: "Le CNF ne vous rend pas français. Il constate une nationalité que vous avez déjà, par votre naissance, par un décret de naturalisation ou par une déclaration. Il est ==gratuit== ([service-public, F1051](https://www.service-public.gouv.fr/particuliers/vosdroits/F1051)).",
    },
    {
      type: "h2",
      texte: "Quand avez-vous besoin d'un CNF ?",
    },
    {
      type: "p",
      texte: "Le plus souvent, pour une ==première carte d'identité ou un premier passeport==, quand la mairie ne peut pas vérifier votre nationalité avec votre seul acte de naissance. Service-public le dit ainsi : vous « pouvez avoir besoin d'un CNF » pour une première demande (F1051). Il peut aussi vous être demandé pour un concours de la fonction publique ou une démarche à l'étranger.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Vous avez obtenu la nationalité par décret de naturalisation** : le décret publié au Journal officiel prouve déjà votre nationalité. Notre article sur [le décret de naturalisation](/articles/decret-de-naturalisation-trouver-et-apres) explique les démarches qui suivent.",
        "**Votre naissance a eu lieu en France, de parents étrangers**, et la nationalité vous est venue à 18 ans : rien n'est écrit sur votre acte de naissance. Le CNF est alors le moyen normal de le prouver (service-public, F295).",
        "**La nationalité vous est venue enfant, avec un parent** (l'effet collectif) : le CNF prouve que votre nom figurait dans le décret ou la déclaration de votre parent.",
      ],
    },
    {
      type: "h2",
      texte: "Qui fait la demande ?",
    },
    {
      type: "tableau",
      entetes: ["Âge de la personne", "Qui demande le CNF"],
      lignes: [
        ["18 ans et plus", "Vous-même"],
        ["16 ou 17 ans", "Vous-même, ou vos représentants légaux"],
        ["Moins de 16 ans", "Vos représentants légaux (un seul parent suffit si l'autorité parentale est partagée)"],
      ],
      legende: "Source : service-public, F1051, lue le 05/11/2026.",
    },
    {
      type: "p",
      texte: "Les représentants légaux, ce sont les personnes qui ont l'autorité parentale : en général les parents, ou un tuteur nommé par le juge.",
    },
    {
      type: "h2",
      texte: "Quelles pièces fournir selon votre cas ?",
    },
    {
      type: "p",
      texte: "Dans tous les cas, joignez le formulaire ==cerfa n° 16237==, rempli, daté et signé. Un cerfa, c'est un formulaire officiel numéroté. Ajoutez votre acte de naissance, une pièce d'identité, une photo récente et un justificatif de domicile (F1051). Le reste dépend de la façon dont vous avez la nationalité.",
    },
    {
      type: "tableau",
      entetes: ["Votre situation", "Ce qu'il faut prouver en plus"],
      lignes: [
        ["Naissance en France, d'un parent né en France", "L'acte de naissance de ce parent"],
        ["Un parent français à votre naissance", "Les actes de naissance de vos parents et ascendants, jusqu'au premier ascendant français"],
        ["Naissance en France de parents étrangers, nationalité à 18 ans", "Les actes de naissance de vos parents, et vos preuves de résidence en France depuis l'âge de 11 ans"],
        ["Nationalité acquise enfant, avec un parent (effet collectif)", "L'acte de naissance du parent, et le décret ou la déclaration de ce parent où figure votre nom"],
        ["Naturalisation, ou déclaration de nationalité", "Le décret de naturalisation ou la déclaration enregistrée à votre nom"],
      ],
      legende: "Résumé des cas de la fiche F1051 de service-public, lue le 05/11/2026. La liste complète figure dans la notice n° 52373 du formulaire.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Les originaux sont obligatoires**, traductions comprises. Les copies ne sont pas acceptées, sauf une copie lisible de la pièce d'identité ou du livret de famille (F1051).",
        "**Les preuves de résidence** (certificats de scolarité, bulletins, attestations de médecin) doivent couvrir chaque année exigée. Rangez-les année par année avant de déposer.",
        "**Naissance à Mayotte ?** Une condition de plus porte sur le séjour régulier de vos parents à votre naissance. Notre article sur [le droit du sol à Mayotte](/articles/droit-du-sol-mayotte) détaille les preuves à fournir.",
      ],
    },
    {
      type: "image",
      src: "/images/articles/certificat-nationalite-francaise.webp",
      alt: "Entrée d'un palais de justice, avec l'inscription « Palais de justice » au-dessus de la porte",
      legende: "La demande de CNF se dépose ou s'envoie au tribunal judiciaire de votre domicile.",
      credit: "Evalois, via Wikimedia Commons",
      licence: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Fa%C3%A7ade_du_Palais_de_Justice_de_Montargis.jpg",
      largeur: 1200,
      hauteur: 709,
    },
    {
      type: "h2",
      texte: "Où déposer la demande ?",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Vous vivez en France** : au tribunal judiciaire ou de proximité de votre domicile qui est compétent en matière de nationalité. Vous pouvez y déposer le dossier ou l'envoyer par courrier (F1051).",
        "**Vous vivez à l'étranger, avec une naissance en France** : au tribunal de votre lieu de naissance.",
        "**Vous vivez à l'étranger, avec une naissance à l'étranger** : au tribunal judiciaire de Paris, service de la nationalité française.",
      ],
    },
    {
      type: "p",
      texte: "Tous les tribunaux ne traitent pas la nationalité : la liste est fixée par décret (article 31-1 du code civil). Avant d'envoyer votre dossier, vérifiez le tribunal compétent sur la fiche F1051, ou appelez le greffe de votre ville.",
    },
    {
      type: "h2",
      texte: "Quel est le délai, et que faire en cas de refus ?",
    },
    {
      type: "p",
      texte: "Le greffe vous remet un récépissé, un reçu qui prouve que votre dossier est complet. À partir de cette date, il a ==6 mois== pour décider. Ce délai peut être prolongé ==2 fois au plus==, pour la même durée. Sans réponse à la fin de ces délais, la demande est refusée (F1051).",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Le CNF est accordé** : vous le retirez en personne, avec l'original de votre pièce d'identité, contre signature.",
        "**Le CNF est refusé** : le refus vous est notifié à l'adresse de votre demande. Vous avez ==6 mois== pour saisir le tribunal judiciaire, avec un avocat obligatoire (article 31-3 du code civil et F1051).",
        "**Une autre voie existe** : l'action pour faire reconnaître votre nationalité devant le tribunal. Elle n'a ==aucun délai== (F1051). Un avocat ou une permanence d'accès au droit peut vous dire laquelle convient à votre cas.",
      ],
    },
    {
      type: "encadre",
      titre: "Le geste à faire dès aujourd'hui",
      texte: "Votre enfant a acquis la nationalité avec vous, ou à 18 ans par le droit du sol ? Rassemblez ses preuves maintenant : décret ou déclaration, certificats de scolarité, actes de naissance. Ces pièces se perdent avec les années et les déménagements. Notre guide de [la nationalité d'un enfant mineur](/articles/naturalisation-enfant-mineur-france-2026-effet-collectif-declaration) explique les trois voies.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Le CNF et l'examen civique",
    },
    {
      type: "p",
      texte: "Le CNF ne demande aucun examen. Il prouve une nationalité déjà acquise. L'examen civique concerne ceux qui demandent la nationalité par décret, après 18 ans : notre article sur [l'examen civique de la naturalisation](/articles/examen-civique-naturalisation) dit quand le passer. Pour un proche qui prépare son dossier, vous pouvez [vérifier en une minute si l'examen le concerne](/eligibilite-examen-civique).",
    },
    {
      type: "qcm",
      thematique: "Droits et devoirs",
      question: "Quel droit la nationalité française donne-t-elle, que n'a pas un étranger non européen résidant en France ?",
      choix: [
        "Le droit d'être soigné à l'hôpital",
        "Le droit de voter à toutes les élections",
        "Le droit d'inscrire ses enfants à l'école",
        "Le droit de travailler",
      ],
      reponse: 1,
      explication: "Le droit de vote à toutes les élections (présidentielle, législatives, municipales…) est réservé aux citoyens français. Les citoyens européens peuvent voter aux municipales et aux européennes. Ceci est une question type, pas une question de l'examen officiel.",
    },
  ],
  faq: [
    {
      question: "Comment obtenir un certificat de nationalité française ?",
      reponse: "Remplissez le formulaire cerfa n° 16237. Joignez les pièces qui prouvent votre nationalité : acte de naissance, pièce d'identité, et selon votre cas décret, déclaration ou preuves de résidence. Déposez ou envoyez le dossier au tribunal judiciaire compétent de votre domicile. La démarche est gratuite et les originaux sont obligatoires.",
    },
    {
      question: "Quel est le délai pour obtenir un certificat de nationalité française ?",
      reponse: "Le greffe du tribunal a 6 mois pour décider, à partir du récépissé qui constate un dossier complet. Ce délai peut être prolongé 2 fois au plus, pour la même durée, soit 18 mois au maximum. Sans réponse à la fin de ces délais, la demande est considérée comme refusée, et vous pouvez saisir le tribunal.",
    },
    {
      question: "Qui peut demander un certificat de nationalité française pour un mineur ?",
      reponse: "Avant 16 ans, ce sont les représentants légaux, en général les parents ; un seul parent suffit si l'autorité parentale est partagée. À 16 ou 17 ans, le jeune peut faire la demande lui-même, ou ses parents pour lui. Joignez les documents qui prouvent l'autorité parentale. La démarche est gratuite.",
    },
    {
      question: "Que faire si le certificat de nationalité française est refusé ?",
      reponse: "Vous avez 6 mois après la notification du refus pour saisir le tribunal judiciaire de votre domicile, ou celui de Paris si vous vivez à l'étranger. L'avocat est obligatoire. Une action pour faire reconnaître votre nationalité existe aussi, sans délai. Un avocat ou une permanence d'accès au droit vous aide à choisir.",
    },
  ],
  sources: [
    {
      titre: "Service-public : certificat de nationalité française (CNF), fiche F1051, vérifiée le 20/06/2025",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1051",
      type: "officiel",
      luLe: "2026-11-05",
    },
    {
      titre: "Légifrance : code civil, articles 31 à 31-3 (certificats de nationalité française), versions en vigueur",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006149969",
      type: "officiel",
      luLe: "2026-11-05",
    },
    {
      titre: "Service-public : nationalité française d'un enfant né en France de parents étrangers, fiche F295",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F295",
      type: "officiel",
      luLe: "2026-11-05",
    },
    {
      titre: "Service-public : dans quels cas un enfant est-il français ?, fiche F3068",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F3068",
      type: "officiel",
      luLe: "2026-11-05",
    },
  ],
};

export default article;
