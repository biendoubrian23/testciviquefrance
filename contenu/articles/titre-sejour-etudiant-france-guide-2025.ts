import type { Article } from "@/contenu/articles";

/**
 * Publié le 15/12/2025, migré le 20/10/2026 sans changer d'adresse.
 *
 * Réécrit le 20/10/2026 (`docs/seo/ROBOT.md`) en fusionnant deux doublons, dont
 * les adresses redirigent ici en 301 : `guide-etudiants-etrangers-france-titres-demarches-2026`
 * et `etudiant-etranger-france-2026-visa-campus-france-travail-famille-droit-rester`.
 * Chaque règle et chaque montant ont été relus sur service-public le 20/10/2026.
 * Corrigé à cette occasion : les ressources (877,5 € par mois, et non 615 €),
 * les taxes (barème du 1er mai 2026), le délai de renouvellement (de 4 à 2 mois
 * avant la fin du titre, en ligne), l'examen civique (il ne vise pas la carte
 * « étudiant »), le seuil de 2 800,53 € (et non « 1,5 Smic ») et la
 * naturalisation (2 ans de résidence avec un diplôme, et non « 2 ans comptent
 * pour 5 »). L'ancienne couverture Unsplash ne répondait plus (404) : elle est
 * remplacée par celle d'un des articles fusionnés.
 */
const article: Article = {
  slug: "titre-sejour-etudiant-france-guide-2025",
  titre: "Titre de séjour étudiant en France : le guide 2026, du visa au premier emploi",
  titreSeo: "Titre de séjour étudiant : le guide complet 2026",
  resume: "VLS-TS à valider en 3 mois, carte pluriannuelle, 964 heures de travail par an, carte recherche d'emploi : les règles du titre de séjour étudiant en 2026.",
  chapo: "Pour faire vos études en France, il vous faut un titre de séjour (la carte qui vous autorise à vivre en France) avec la mention « étudiant ». La première année, c'est un visa VLS-TS, à valider en ligne dans les 3 mois après votre arrivée. Ensuite viennent la carte, son renouvellement et, après le diplôme, le choix de rester.",
  publieLe: "2025-12-15",
  modifieLe: "2026-10-20",
  minutes: 10,
  theme: "titre séjour étudiant",
  motsCles: [
    "titre séjour étudiant",
    "titre de séjour étudiant 2026",
    "visa étudiant france",
    "carte séjour étudiant",
    "carte de séjour pluriannuelle étudiant",
    "étudiant étranger france",
    "renouvellement titre séjour étudiant",
    "validation VLS-TS étudiant",
    "étudiant étranger droit travailler France",
    "964 heures étudiant étranger",
    "carte recherche d'emploi création d'entreprise",
    "APS après études France",
    "changement statut étudiant salarié",
    "faire venir famille étudiant étranger",
    "examen civique étudiant étranger",
    "campus france",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070",
    alt: "Des étudiants rient autour d'un ordinateur portable, devant les rayons d'une bibliothèque",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
  blocs: [
    { type: "h2", texte: "Quel titre de séjour pour étudier en France ?", id: "types-titres" },
    {
      type: "p",
      texte: "Vous changez de titre au fil des années. Le VLS-TS, c'est le visa de long séjour qui vaut titre de séjour la première année. Le consulat vous le donne avant le départ. Après un an, vous demandez une carte à la préfecture : le service de l'État qui gère les titres de séjour dans votre département ([service-public, F2231](https://www.service-public.gouv.fr/particuliers/vosdroits/F2231)).",
    },
    {
      type: "tableau",
      entetes: ["Titre", "Quand", "Durée"],
      lignes: [
        ["VLS-TS « étudiant »", "La première année", "De 4 mois à 1 an"],
        ["Carte temporaire « étudiant »", "Après la première année", "1 an, renouvelable"],
        ["Carte pluriannuelle « étudiant »", "Après 1 an en France", "De 2 à 4 ans : les années qui restent dans votre cycle"],
      ],
      legende: "Source : service-public, fiche F2231, vérifiée le 01/08/2026, lue le 20/10/2026.",
    },
    {
      type: "p",
      texte: "La carte de séjour pluriannuelle, c'est une carte valable plusieurs années. Sa durée suit vos études. Exemple : après une première année de licence, elle vaut 2 ans. Si vos études s'inscrivent dans un programme de mobilité de l'Union européenne, une carte « étudiant, programme de mobilité » existe aussi. Vous fournissez alors une attestation de votre école (F2231).",
    },
    { type: "h2", texte: "Avant l'arrivée : Campus France et le visa", id: "demarches-initiales" },
    {
      type: "p",
      texte: "Dans 75 pays et territoires, la candidature passe d'abord par la procédure « Études en France ». Elle est gérée par Campus France, l'agence publique qui accueille les étudiants étrangers. Tout se fait en ligne, jusqu'à la demande de visa, et des frais sont demandés ([Campus France](https://www.campusfrance.org/fr/procedure-etudes-en-france)).",
    },
    {
      type: "p",
      texte: "Pour une première année de licence, sans bac français ou européen, vous faites une demande d'admission préalable. Pour la rentrée 2027, elle se dépose du 1er octobre au 15 décembre 2026. Le doctorat suit une autre voie : vous contactez l'école doctorale. Notre guide de la [procédure Campus France](/articles/campus-france-etude-france-2026-visa-inscription-procedure) détaille chaque étape.",
    },
    {
      type: "p",
      texte: "Pour le visa comme pour la carte, vous devez prouver des ressources d'au moins **877,5 € par mois** (F2231). Cette règle ne s'applique pas si vous avez réussi le concours d'une école liée à l'État par une convention. Ces preuves sont acceptées :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "une attestation de bourse, avec son montant et sa durée.",
        "vos 3 dernières fiches de paie, si vous travaillez.",
        "les virements réguliers d'un proche, avec sa pièce d'identité, ou son attestation sur l'honneur.",
        "une attestation de votre banque qui montre un solde suffisant.",
      ],
    },
    {
      type: "p",
      texte: "Les frais d'études ne sont pas les mêmes pour tous : voyez notre article sur les [frais d'inscription hors Union européenne](/articles/frais-inscription-universites-france-etudiants-hors-ue-2026).",
    },
    { type: "h2", texte: "Comment valider le VLS-TS à l'arrivée ?", id: "validation-vls-ts" },
    {
      type: "p",
      texte: "Dans les **3 mois** qui suivent votre arrivée, vous validez votre VLS-TS en ligne et vous payez une taxe ([F2231](https://www.service-public.gouv.fr/particuliers/vosdroits/F2231)). Le service s'appelle « Valider un visa de long séjour valant titre de séjour et payer la taxe ». Il se trouve sur l'ANEF : le site de l'État pour les démarches des étrangers.",
    },
    {
      type: "p",
      texte: "Pour un étudiant, la taxe est de ==100 €== depuis le 1er mai 2026, contre 50 € avant ([service-public, A18881](https://www.service-public.gouv.fr/particuliers/actualites/A18881)). Une fois le visa validé, votre séjour est régulier. Vous pouvez aussi sortir de l'espace Schengen et revenir.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Ne laissez pas passer les 3 mois : notez la date de votre entrée en France dès le premier jour.",
        "Gardez la preuve de la validation : c'est elle qui montre que votre séjour est en règle.",
        "Passez seulement par le site officiel de l'ANEF, jamais par un site qui fait payer de l'aide.",
      ],
    },
    {
      type: "p",
      texte: "Notre article sur la [validation du VLS-TS](/articles/visa-long-sejour-vls-ts-validation-ofii-2026) montre l'écran étape par étape.",
    },
    { type: "h2", texte: "Renouveler le titre étudiant : quand et comment ?", id: "renouvellement-etudiant" },
    {
      type: "p",
      texte: "Vous déposez la demande **au plus tôt 4 mois et au plus tard 2 mois** avant la fin de votre titre (F2231). Tout se fait en ligne, avec le service « Demander un titre de séjour étudiant ». Vous recevez tout de suite une attestation de dépôt. La préfecture peut vous convoquer pour vos empreintes, puis pour remettre la carte.",
    },
    {
      type: "p",
      texte: "La préfecture vérifie trois points. Vous êtes inscrit dans une école ou une université. Vous avez des ressources d'au moins 877,5 € par mois, vues selon votre situation. Vos études sont réelles et sérieuses : présence, notes, diplômes. Bonne nouvelle : un redoublement par cycle ne remet pas en cause, à lui seul, le sérieux des études.",
    },
    {
      type: "tableau",
      entetes: ["Démarche", "Montant depuis le 1er mai 2026"],
      lignes: [
        ["Validation du VLS-TS « étudiant »", "100 €"],
        ["Première carte pluriannuelle « étudiant »", "150 € (100 € de taxe et 50 € de droit de timbre)"],
        ["Renouvellement d'un titre « étudiant »", "100 €"],
        ["Carte « recherche d'emploi ou création d'entreprise », demandée en France", "150 €"],
      ],
      legende: "Sources : service-public, fiches F2231 et F17319 et actualité A18881 (tarif minoré), lues le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Ces sommes se paient en timbre fiscal : une taxe due à l'État, que vous achetez en ligne ou chez un buraliste. Si vous déposez en retard, vous payez en plus un droit de visa de régularisation (F2231). Notre article sur les [tarifs du timbre fiscal](/articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances) donne tout le barème.",
    },
    {
      type: "encadre",
      titre: "L'examen civique ne vise pas la carte « étudiant »",
      texte: "Depuis le 1er janvier 2026, une première carte pluriannuelle demande la réussite à l'examen civique, sauf pour les titres qui ne passent pas par le CIR ([F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)). Le CIR (contrat d'intégration républicaine) est signé avec l'État par les étrangers qui s'installent. La carte « étudiant » n'y est pas soumise ([F17048](https://www.service-public.gouv.fr/particuliers/vosdroits/F17048)). L'examen peut revenir plus tard, avec un autre titre.",
      ton: "bleu",
    },
    {
      type: "p",
      texte: "Notre article sur les [titres sans examen civique](/articles/passeport-talent-etudiant-visiteur-non-soumis-examen-civique-2026-cir) liste les cas où la règle change.",
    },
    { type: "h2", texte: "Combien d'heures pouvez-vous travailler ?", id: "droit-travail" },
    {
      type: "p",
      texte: "Avec un titre « étudiant », vous pouvez travailler **964 heures par an** au plus. C'est 60 % de la durée légale du travail sur une année. Vous n'avez pas besoin d'autorisation de travail pour cela ([service-public, F2713](https://www.service-public.gouv.fr/particuliers/vosdroits/F2713)).",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le compte commence à la remise de la carte, ou à la validation du VLS-TS.",
        "Pour un séjour d'études de 6 mois, la limite est réduite d'autant : 482 heures.",
        "Votre employeur déclare votre embauche à la préfecture au moins 2 jours ouvrables avant votre premier jour.",
        "Au delà de 964 heures, il faut une autorisation de travail.",
      ],
    },
    {
      type: "p",
      texte: "Les étudiants algériens suivent un accord à part. Leur titre est un certificat de résidence « étudiant ». L'employeur doit obtenir une autorisation de travail avant le début du contrat. Ensuite, la limite est de 50 % de la durée annuelle de travail de la branche (F2713). Pour les autres contrats, lisez notre guide [travailler en France quand on est étranger](/articles/travailler-france-etranger-autorisation-droits).",
    },
    { type: "h2", texte: "Après le diplôme : comment rester en France ?", id: "apres-etudes" },
    {
      type: "p",
      texte: "Si vous avez au moins un master, ou une licence professionnelle, vous pouvez demander la carte « recherche d'emploi ou création d'entreprise » ([service-public, F17319](https://www.service-public.gouv.fr/particuliers/vosdroits/F17319)). Elle vous donne un an pour trouver un poste ou lancer une affaire.",
    },
    {
      type: "tableau",
      entetes: ["Carte « recherche d'emploi ou création d'entreprise »", "Règle"],
      lignes: [
        ["Diplômes", "Licence professionnelle, mastère spécialisé, master of science labellisé, diplôme au moins égal au master"],
        ["Durée", "1 an, sans renouvellement"],
        ["Dépôt en France", "Dans les 2 mois avant la fin de la carte étudiant, diplôme obtenu dans les 12 derniers mois"],
        ["Dépôt depuis l'étranger", "Visa au consulat, jusqu'à 4 ans après le diplôme"],
        ["Travail", "Permis, sans la limite de 964 heures"],
        ["Étudiants algériens", "Non concernés"],
      ],
      legende: "Source : service-public, fiche F17319, vérifiée le 01/06/2026, lue le 20/10/2026.",
    },
    {
      type: "p",
      texte: "On l'appelle parfois encore « APS », mais l'APS (autorisation provisoire de séjour) est un autre document. Elle coûte 100 € depuis le 1er mai 2026 (A18881).",
    },
    {
      type: "p",
      texte: "Avec un emploi, vous pouvez changer de statut, c'est-à-dire passer à une carte « salarié » ou « travailleur temporaire ». Il faut un contrat ou une promesse d'embauche, et une autorisation de travail demandée par l'employeur ([F2229](https://www.service-public.gouv.fr/particuliers/vosdroits/F2229)). Vous déposez la demande dans les 2 mois avant la fin de votre carte étudiant.",
    },
    {
      type: "p",
      texte: "La préfecture regarde alors si des candidats sont déjà disponibles pour ce poste. Avec un master, elle ne le fait pas pour un métier en tension, ni pour un emploi lié à vos études payé au moins **2 800,53 € brut par mois**. Avec une licence, seule l'exception du métier en tension existe (F2229).",
    },
    {
      type: "p",
      texte: "Pour un poste très qualifié, la carte « talent, salarié qualifié » demande au moins 39 582 € brut par an (F17319). Voyez nos guides du [changement de statut](/articles/changement-statut-etudiant-salarie-2026-demarches-anef), de l'[ANEF pour les étudiants](/articles/anef-etudiant-etranger-2026) et du [passeport talent](/articles/passeport-talent-2026-conditions-metiers-demarches).",
    },
    {
      type: "p",
      texte: "Plus tard, la nationalité peut aussi entrer en jeu. Il faut d'habitude 5 ans de vie en France. Ce délai passe à 2 ans si vous avez obtenu un diplôme du supérieur français après 2 ans d'études ([service-public, F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)). Le reste est dans notre guide de la [naturalisation](/articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet).",
    },
    { type: "h2", texte: "Un étudiant peut-il faire venir sa famille ?", id: "famille" },
    {
      type: "p",
      texte: "La fiche du regroupement familial ne prévoit pas de règle à part pour les étudiants ([service-public, F11166](https://www.service-public.gouv.fr/particuliers/vosdroits/F11166)). Les conditions sont les mêmes pour tous, et elles sont exigeantes :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "vivre en France depuis au moins 18 mois, en séjour régulier.",
        "avoir une carte d'au moins 1 an, ou une carte pluriannuelle.",
        "avoir des ressources stables et suffisantes, calculées à partir du Smic.",
        "avoir un logement assez grand pour la famille.",
      ],
    },
    {
      type: "p",
      texte: "Chaque dossier est différent. Avant de vous lancer, lisez notre [guide du regroupement familial](/articles/regroupement-familial-france-2026-guide-complet-conditions-documents-delais), puis posez la question à la préfecture ou à une association comme La Cimade.",
    },
    { type: "h2", texte: "Logement, aides, santé : où trouver l'information ?", id: "vie-etudiante" },
    {
      type: "p",
      texte: "Le titre de séjour n'est qu'une partie de votre installation. Pour trouver un toit, un garant ou une chambre du Crous, lisez notre guide du [logement étudiant](/articles/logement-etudiant-etranger-france-2026-crous-visale-garant-dossier). Pour les aides au logement et les autres aides, voyez notre article sur les [aides sociales des étrangers](/articles/aides-sociales-etrangers-france-2026-caf-rsa-apl-prime-activite). Pour un cas précis, la préfecture, un avocat ou une permanence d'accès au droit restent les bons contacts.",
    },
  ],
  faq: [
    {
      question: "Combien d'heures un étudiant étranger peut-il travailler en France ?",
      reponse: "Avec un titre de séjour « étudiant », vous pouvez travailler 964 heures par an au plus, soit 60 % de la durée légale annuelle, sans autorisation de travail. Le compte commence à la remise de la carte ou à la validation du VLS-TS. Au delà, une autorisation est nécessaire. Les étudiants algériens suivent une règle à part.",
    },
    {
      question: "Quand faut-il valider son VLS-TS étudiant ?",
      reponse: "Dans les 3 mois qui suivent votre arrivée en France. La validation se fait en ligne, sur le site de l'ANEF, avec le paiement d'une taxe de 100 € pour un étudiant depuis le 1er mai 2026. Une fois le visa validé, votre séjour est régulier et vous pouvez sortir de l'espace Schengen puis revenir.",
    },
    {
      question: "Un étudiant étranger doit-il passer l'examen civique ?",
      reponse: "Pas pour son titre « étudiant ». L'examen civique vise une première carte pluriannuelle ou une première carte de résident (la carte de 10 ans), sauf pour les titres non soumis au contrat d'intégration républicaine. La carte « étudiant » en fait partie. L'examen peut devenir nécessaire plus tard, par exemple avec un autre titre de séjour.",
    },
    {
      question: "Que faire après son master pour rester en France ?",
      reponse: "Vous pouvez demander la carte « recherche d'emploi ou création d'entreprise », valable un an et non renouvelable, dans les 2 mois avant la fin de votre carte étudiant. Avec une offre d'emploi, vous pouvez aussi demander directement une carte « salarié » ou une carte « talent ». L'employeur fait alors la demande d'autorisation de travail.",
    },
  ],
  sources: [
    {
      titre: "Service-public : étudiant étranger en France, visa de long séjour ou carte de séjour (F2231)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2231",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : titres de séjour, hausse du montant des taxes à partir du 1er mai 2026 (A18881)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : un étudiant non européen peut-il travailler en France ? (F2713)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2713",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte de séjour ou VLS-TS recherche d'emploi ou création d'entreprise (F17319)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F17319",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : étudiant étranger, comment travailler en France après ses études ? (F2229)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2229",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : examen civique pour une carte de séjour pluriannuelle ou une carte de résident (F39530)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : contrat d'intégration républicaine (F17048)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F17048",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : regroupement familial (F11166)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11166",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : naturalisation française par décret (F2213)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Campus France : la procédure Études en France",
      url: "https://www.campusfrance.org/fr/procedure-etudes-en-france",
      type: "officiel",
      luLe: "2026-10-20",
    },
  ],
  aLireAussi: [
    {
      slug: "changement-statut-etudiant-salarie-2026-demarches-anef",
      ancre: "Changement de statut étudiant vers salarié",
    },
    { slug: "anef-etudiant-etranger-2026", ancre: "L'ANEF pour les étudiants étrangers" },
    { slug: "visa-long-sejour-vls-ts-validation-ofii-2026", ancre: "Valider son VLS-TS" },
    {
      slug: "logement-etudiant-etranger-france-2026-crous-visale-garant-dossier",
      ancre: "Logement étudiant : Crous, Visale, garant",
    },
  ],
};

export default article;
