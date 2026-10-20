import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-impots-etrangers.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse.
 *
 * Réécrit le 20/10/2026 (fusion de doublons) : l'article
 * `declaration-impots-etrangers-france-2026-guide-pratique-formulaires-dates-remboursement`
 * (04/04/2026) y a été fusionné et son adresse redirige ici en 301. Ont été
 * repris : le test de résidence fiscale, la première déclaration sur papier,
 * le calendrier de la campagne, le lien avec le titre de séjour et la
 * naturalisation, les aides gratuites. Chaque règle a été relue sur
 * service-public, impots.gouv.fr et le BOFiP le 20/10/2026.
 *
 * Retiré parce que faux ou sans source officielle : le barème « 5 %, 11 %,
 * 24 %, 45 %, 51 % » et les « seuils de non-imposition » (15 547 €…), une
 * pénalité de 40 % pour « oubli », un intérêt de 5,80 %, des « algorithmes
 * IA », 2 % de dossiers contrôlés, l'« antécédent criminel » en préfecture,
 * les dates limites par zone (pas de source officielle lue ; la campagne 2026
 * est close), le « crédit d'impôt unilatéral », « plus de 125 conventions »,
 * des honoraires de comptables, des déductions et crédits chiffrés.
 *
 * L'image de couverture vient d'Unsplash (licence Unsplash : usage libre,
 * commercial compris) ; ses dimensions sont nominales.
 */
const article: Article = {
  slug: "declaration-impots-etranger-france-2026-obligations-seuils-risques",
  titre: "Déclarer ses impôts quand on est étranger en France : qui doit le faire, comment, et que risquez-vous ?",
  titreSeo: "Déclaration d'impôts étranger en France : le guide",
  resume: "Domicile fiscal, première déclaration sur papier, formulaire 2042, majorations de retard, avis d'imposition pour la préfecture : les règles officielles.",
  chapo: "Si votre domicile fiscal est en France, vous devez y déclarer vos revenus chaque année, quelle que soit votre nationalité. Ce qui compte, c'est le domicile fiscal, pas le titre de séjour. La déclaration est due même avec peu ou pas de revenus, et la première se fait en général sur papier.",
  publieLe: "2026-03-31",
  modifieLe: "2026-10-20",
  minutes: 7,
  theme: "déclaration impôts étranger France",
  motsCles: [
    "déclaration impôts étranger France",
    "déclaration impôts étranger France 2026",
    "obligations fiscales étrangers",
    "résident fiscal France",
    "domicile fiscal article 4 B",
    "première déclaration impôts étranger",
    "formulaire 2042 étranger",
    "déclaration papier première fois",
    "pénalité retard déclaration impôts",
    "majoration 10 % impôts",
    "convention fiscale double imposition",
    "revenus étrangers déclaration France",
    "titre de séjour impôts",
    "avis d'imposition préfecture",
    "impôts naturalisation",
    "aide déclaration impôts gratuite",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    alt: "Un bureau avec un ordinateur portable et des documents remplis de chiffres",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qui doit déclarer ses revenus en France ?",
      id: "qui-doit-declarer-etranger",
    },
    {
      type: "p",
      texte: "La règle ne dépend pas de la nationalité. Vous déclarez vos revenus si vous vivez en France ou si votre domicile fiscal y est situé ([service-public, fiche F358](https://www.service-public.gouv.fr/particuliers/vosdroits/F358)). Le domicile fiscal, c'est le pays où les impôts vous considèrent comme installé.",
    },
    {
      type: "p",
      texte: "L'article 4 B du Code général des impôts fixe quatre critères. Un seul suffit, rappelle la [doctrine officielle des impôts](https://bofip.impots.gouv.fr/bofip/1911-PGP) (le BOFiP) :",
    },
    {
      type: "tableau",
      entetes: ["Critère", "Ce que cela veut dire"],
      lignes: [
        ["Votre foyer est en France", "Votre famille proche (conjoint, enfants) vit en France de façon habituelle."],
        ["Votre séjour principal est en France", "Sans foyer, vous vivez surtout en France : en général plus de six mois dans l'année."],
        ["Vous travaillez en France", "Comme salarié ou à votre compte, sauf si ce travail est seulement accessoire."],
        ["Vos intérêts économiques sont en France", "Vos placements, vos affaires ou l'essentiel de vos revenus sont en France."],
      ],
      legende: "Source : article 4 B du CGI, commenté par le BOFiP (BOI-IR-CHAMP-10), lu le 20/10/2026.",
    },
    {
      type: "p",
      texte: "La durée de six mois n'est pas un critère absolu, précise le BOFiP. Et une convention fiscale peut changer le résultat : c'est un accord entre la France et un autre pays, qui passe avant la loi française.",
    },
    {
      type: "p",
      texte: "Le titre de séjour (la carte qui vous autorise à vivre en France) ne fait pas partie de ces critères. Seule votre situation réelle compte : où vit votre famille, où vous travaillez, où sont vos revenus.",
    },
    {
      type: "p",
      texte: "Vous vivez à l'étranger mais vous touchez des revenus de France, comme un loyer ou une pension ? Vous déclarez aussi ces revenus en France (F358). Vous utilisez alors le formulaire 2042-NR, celui des non-résidents. Notre [guide du formulaire 2042-NR](/articles/declaration-impots-non-resident-france-2026-formulaire-2042-nr-revenus-source-francaise) explique comment le remplir.",
    },
    {
      type: "h2",
      texte: "Faut-il déclarer si vous avez peu ou pas de revenus ?",
      id: "peu-ou-pas-de-revenus",
    },
    {
      type: "p",
      texte: "Oui. Service-public le dit clairement : la déclaration est due « même si vous avez perçu uniquement de faibles ressources (ou aucune ressource) » (F358). Vous recevez ensuite un avis de non-imposition. Ce papier sert pour certaines aides, comme l'aide au logement.",
    },
    {
      type: "p",
      texte: "Un seul document suffit par foyer fiscal, c'est-à-dire le groupe de personnes qui déclarent ensemble (F358). Un étudiant ou une personne sans emploi déclare donc aussi, si son domicile fiscal est en France.",
    },
    {
      type: "p",
      texte: "Déclarer ne veut pas dire payer. L'impôt se calcule avec un barème par tranches, fixé chaque année par la loi de finances. Voici celui des revenus de 2025, pour une part ([service-public, fiche F1419](https://www.service-public.gouv.fr/particuliers/vosdroits/F1419)) :",
    },
    {
      type: "tableau",
      entetes: ["Revenu imposable (une part)", "Taux de la tranche"],
      lignes: [
        ["Jusqu'à 11 600 €", "0 %"],
        ["De 11 601 € à 29 579 €", "11 %"],
        ["De 29 580 € à 84 577 €", "30 %"],
        ["De 84 578 € à 181 917 €", "41 %"],
        ["Plus de 181 917 €", "45 %"],
      ],
      legende: "Source : service-public, fiche F1419, vérifiée le 15/04/2026, lue le 20/10/2026. Loi de finances pour 2026.",
    },
    {
      type: "p",
      texte: "Chaque taux ne s'applique qu'à la part du revenu comprise dans sa tranche. Le nombre de parts dépend de votre famille : un couple ou des enfants changent le calcul.",
    },
    {
      type: "h2",
      texte: "Comment faire votre première déclaration ?",
      id: "comment-remplir",
    },
    {
      type: "p",
      texte: "La première fois, vous ne pouvez pas déclarer en ligne. La page [« Je viens ou je reviens en France »](https://www.impots.gouv.fr/international-particulier/questions/je-reviens-en-france-apres-un-sejour-letranger) d'impots.gouv.fr, mise à jour le 17/12/2025, le dit : vous remplissez une déclaration papier. Seule exception : si vous étiez rattaché à la déclaration de vos parents l'année précédente (F358).",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Téléchargez le formulaire 2042 sur impots.gouv.fr ou service-public, si vous ne l'avez pas reçu.",
        "Déclarez tous les revenus perçus entre votre arrivée et le 31 décembre.",
        "Ajoutez une annexe si besoin : la 2044 pour des loyers, la 2047 pour des revenus encaissés à l'étranger.",
        "Envoyez le tout au service des impôts des particuliers (SIP) de votre domicile : c'est votre centre des impôts.",
      ],
    },
    {
      type: "p",
      texte: "Vous étiez non-résident avec des revenus de France avant votre arrivée ? Vous remplissez la 2042-NR pour la période d'avant, puis la 2042 pour la suite (impots.gouv.fr).",
    },
    {
      type: "p",
      texte: "Joignez seulement les justificatifs que vous avez faits vous-même, comme la liste de vos frais réels. Gardez les autres pendant 3 ans (F358). Pour le numéro fiscal et l'espace en ligne, lisez notre [guide de la première déclaration](/articles/declaration-impots-premiere-annee-france-etranger-2026-guide-debutant).",
    },
    {
      type: "h2",
      texte: "Quand déclarer ?",
      id: "dates-limites",
    },
    {
      type: "p",
      texte: "La déclaration a lieu chaque printemps, sur les revenus de l'année d'avant. Selon service-public (F358, vérifiée le 05/06/2026), la déclaration 2026 des revenus de 2025 est terminée. La prochaine, sur les revenus de 2026, débutera en avril 2027.",
    },
    {
      type: "p",
      texte: "Les dates limites changent chaque année et dépendent de votre département. Pendant la campagne, le simulateur de service-public vous donne la vôtre. Le formulaire papier prérempli est envoyé en avril ou en mai (F358).",
    },
    {
      type: "p",
      texte: "Vous avez oublié de déclarer une année ? Faites-le sans attendre une lettre des impôts : la majoration est plus faible avant cette lettre.",
    },
    {
      type: "h2",
      texte: "Que risquez-vous en cas de retard ou d'oubli ?",
      id: "consequences-non-declaration",
    },
    {
      type: "p",
      texte: "Une déclaration en retard augmente l'impôt dû. Voici les majorations publiées par [service-public](https://www.service-public.gouv.fr/particuliers/vosdroits/F34175) (fiche F34175, vérifiée le 05/06/2026) :",
    },
    {
      type: "tableau",
      entetes: ["Situation", "Majoration de l'impôt"],
      lignes: [
        ["Déclaration en retard, sans mise en demeure", "10 %"],
        ["Déclaration déposée dans les 30 jours après une mise en demeure", "20 %"],
        ["Aucune déclaration 30 jours après la mise en demeure", "40 %"],
        ["Activité cachée découverte (travail non déclaré)", "80 %"],
      ],
      legende: "Source : service-public, fiche F34175, lue le 20/10/2026.",
    },
    {
      type: "p",
      texte: "La mise en demeure, c'est la lettre officielle par laquelle les impôts vous demandent de déclarer. Des intérêts de retard s'ajoutent : 0,20 % de l'impôt dû par mois, soit 2,4 % par an (F34175).",
    },
    {
      type: "p",
      texte: "Plusieurs années oubliées, des revenus à l'étranger, une situation floue ? Demandez conseil à votre centre des impôts ou à un avocat en droit fiscal avant d'agir.",
    },
    {
      type: "h2",
      texte: "Revenus à l'étranger : comment éviter de payer deux fois ?",
      id: "conventions-fiscales",
    },
    {
      type: "p",
      texte: "Si votre domicile fiscal est en France, déclarez aussi ce que vous touchez à l'étranger. Ces revenus vont sur l'annexe 2047, jointe à la 2042 (impots.gouv.fr).",
    },
    {
      type: "p",
      texte: "Pour éviter d'être imposé deux fois, regardez s'il existe une convention fiscale entre la France et le pays concerné. Chaque convention a ses propres règles. La [liste des conventions](https://www.impots.gouv.fr/les-conventions-internationales), pays par pays, est sur impots.gouv.fr.",
    },
    {
      type: "p",
      texte: "Ces textes sont techniques. Pour savoir comment la convention de votre pays s'applique à vos revenus, demandez à votre centre des impôts.",
    },
    {
      type: "h2",
      texte: "Quel lien entre vos impôts et votre titre de séjour ?",
      id: "impots-titre-sejour",
    },
    {
      type: "p",
      texte: "La préfecture, c'est le service de l'État qui délivre les titres de séjour. Elle peut vous demander vos avis d'imposition : ce sont les papiers que les impôts vous envoient après chaque déclaration.",
    },
    {
      type: "p",
      texte: "Un exemple : pour la carte de résident longue durée-UE, la [préfecture de la Charente](https://www.charente.gouv.fr/index.php/contenu/telechargement/43165/359514/file/CR_1%C3%A8re%20DDE%20Longue%20dur%C3%A9e.pdf) cite l'avis d'imposition parmi les preuves. Il peut prouver cinq ans de séjour, ou vos ressources. Cette carte de résident est un titre de séjour de longue durée. Chaque préfecture publie sa propre liste.",
    },
    {
      type: "p",
      texte: "Pour une naturalisation, un salarié fournit ses avis d'imposition ou de non-imposition des 3 dernières années ([service-public, fiche F34746](https://www.service-public.gouv.fr/particuliers/vosdroits/F34746)). Il ajoute un bordereau de situation fiscale (modèle P. 237) sur ces 3 ans, de moins de 3 mois. Notre guide de la [naturalisation française](/articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet) détaille le dossier.",
    },
    {
      type: "p",
      texte: "Les droits liés à chaque titre sont dans notre article [titre de séjour et impôts](/articles/titre-sejour-declaration-impots-etranger-droits-obligations-2026).",
    },
    {
      type: "p",
      texte: "Payer ses impôts fait aussi partie de l'examen civique. Son programme est fixé par un arrêté (un texte du ministre) du 10 octobre 2025 ([ministère de l'Intérieur](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/)). Il cite l'obligation de payer les impôts dans la thématique « Droits et devoirs ». Vous pouvez la réviser dans nos [cours](/cours).",
    },
    {
      type: "h2",
      texte: "Qui peut vous aider gratuitement ?",
      id: "aides-gratuites",
    },
    {
      type: "p",
      texte: "Plusieurs services publics aident à remplir la déclaration (F358) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Le service d'information des impôts : 0809 401 401, du lundi au vendredi, de 8 h 30 à 19 h. Le service est gratuit, l'appel est au prix normal.",
        "Votre service des impôts des particuliers : son numéro est sur votre avis d'imposition. Vous pouvez y prendre rendez-vous.",
        "La messagerie sécurisée de votre espace Finances publiques, sur impots.gouv.fr.",
        "Les espaces France services : des agents des impôts y aident pour les démarches en ligne.",
        "Votre mairie : des agents des impôts y tiennent parfois des permanences.",
      ],
    },
    {
      type: "p",
      texte: "Méfiez-vous des intermédiaires qui promettent un gros remboursement contre de l'argent. Notre article sur les [arnaques qui visent les étrangers](/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef) aide à les repérer.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Votre domicile fiscal décide, pas votre nationalité ni votre titre de séjour. Déclarez même sans revenu : l'avis de non-imposition vous servira. La première déclaration se fait sur papier, avec le formulaire 2042. Et gardez vos avis d'imposition : la préfecture peut les demander.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Un étranger doit-il déclarer ses impôts en France ?",
      reponse: "Oui, si son domicile fiscal est en France. Il suffit d'un critère : le foyer ou le séjour principal en France, un travail en France, ou l'essentiel de ses intérêts économiques en France. La nationalité ne compte pas. Une personne qui vit à l'étranger déclare aussi ses revenus de source française, avec le formulaire 2042-NR.",
    },
    {
      question: "Faut-il déclarer ses impôts quand on n'a pas de revenus ?",
      reponse: "Oui. Service-public indique que la déclaration est due même avec de faibles ressources, ou aucune ressource. Vous recevez alors un avis de non-imposition. Ce document sert pour certaines aides, comme l'aide au logement, et la préfecture peut aussi vous le demander. Un seul document suffit par foyer fiscal.",
    },
    {
      question: "Peut-on faire sa première déclaration d'impôts en ligne ?",
      reponse: "En général, non. Impots.gouv.fr indique que la première déclaration se fait sur papier, avec le formulaire 2042, envoyé au service des impôts de votre domicile. Il y a une exception : vous étiez rattaché à la déclaration de vos parents l'année précédente. Vous y déclarez les revenus perçus depuis votre arrivée.",
    },
    {
      question: "Que se passe-t-il si on déclare ses impôts en retard ?",
      reponse: "L'impôt dû est majoré de 10 % sans mise en demeure. La majoration passe à 20 % si vous déclarez dans les 30 jours après cette lettre, et à 40 % au-delà. Elle est de 80 % en cas d'activité cachée. Des intérêts de 0,20 % par mois s'ajoutent, selon service-public.",
    },
  ],
  sources: [
    {
      titre: "Service-public : impôt sur le revenu, déclaration de revenus annuelle (F358)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F358",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "BOFiP : impôt sur le revenu, personnes imposables et domicile fiscal (BOI-IR-CHAMP-10, article 4 B du CGI)",
      url: "https://bofip.impots.gouv.fr/bofip/1911-PGP",
      type: "juridique",
      luLe: "2026-10-20",
    },
    {
      titre: "Impots.gouv.fr : je viens ou je reviens en France, comment et quels revenus dois-je déclarer ?",
      url: "https://www.impots.gouv.fr/international-particulier/questions/je-reviens-en-france-apres-un-sejour-letranger",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : quel est le barème de l'impôt sur le revenu ? (F1419)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1419",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : quelles sanctions en cas de déclaration en retard ? (F34175)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34175",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Impots.gouv.fr : les conventions fiscales internationales",
      url: "https://www.impots.gouv.fr/les-conventions-internationales",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Préfecture de la Charente : carte de résident longue durée-UE, liste des pièces",
      url: "https://www.charente.gouv.fr/index.php/contenu/telechargement/43165/359514/file/CR_1%C3%A8re%20DDE%20Longue%20dur%C3%A9e.pdf",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : naturalisation française, quels justificatifs de revenus et d'impôts ? (F34746)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34746",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Ministère de l'Intérieur : informations générales sur l'examen civique",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      luLe: "2026-10-20",
    },
  ],
  aLireAussi: [
    {
      slug: "declaration-impots-premiere-annee-france-etranger-2026-guide-debutant",
      ancre: "Première déclaration : le guide pas à pas",
    },
    {
      slug: "declaration-impots-non-resident-france-2026-formulaire-2042-nr-revenus-source-francaise",
      ancre: "Non-résidents : le formulaire 2042-NR",
    },
    {
      slug: "titre-sejour-declaration-impots-etranger-droits-obligations-2026",
      ancre: "Titre de séjour et impôts",
    },
    {
      slug: "naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet",
      ancre: "Le dossier de naturalisation",
    },
  ],
};

export default article;
