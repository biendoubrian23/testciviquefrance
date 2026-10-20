import type { Article } from "@/contenu/articles";

/**
 * Publié le 31/03/2026, migré le 20/10/2026 sans changer d'adresse.
 *
 * Réécrit le 20/10/2026 (fusion des doublons, groupe 13) : l'article
 * `passeport-talent-france-2026-guide-complet-10-categories-famille-naturalisation`
 * (05/04/2026) y a été fusionné, son adresse redirige ici en 301. On en a repris
 * le régime famille, le chemin vers la carte de résident et la naturalisation,
 * et les erreurs à éviter, après vérification.
 *
 * Retiré parce que faux ou non sourcé : les « 13 catégories » et les
 * « 10 catégories » (service-public décrit 8 cartes « talent », plus la carte
 * « talent-famille ») ; les seuils « 2 SMIC », « 1,8 SMIC » et « 1,5 SMIC »
 * (le seuil du salarié qualifié est de 39 582 € brut par an) ; la catégorie
 * « réfugié qualifié » et « jeune diplômé » isolée ; la carte de résident
 * « après 3 ans » ; « 225 € + 25 € » et « 90 € » ; les délais par préfecture ;
 * la protection de 6 mois après une perte d'emploi ; les métiers et salaires
 * moyens par secteur (aucune source officielle). Chaque montant vient de
 * service-public ou de Légifrance, lus le 20/10/2026.
 */
const article: Article = {
  slug: "passeport-talent-2026-conditions-metiers-demarches",
  titre: "Passeport talent 2026 : les 8 cartes « talent », leurs salaires minimum et les démarches",
  titreSeo: "Passeport talent 2026 : conditions et salaires",
  resume: "Carte talent (ex-passeport talent) : les 8 cartes, le salaire minimum de chacune, la durée de 4 ans, la famille, la carte de résident et la naturalisation.",
  chapo: "Le passeport talent s'appelle désormais **carte talent** : c'est un titre de séjour (la carte qui vous autorise à vivre en France) pour les profils qualifiés, valable jusqu'à ==4 ans==. Il existe 8 cartes « talent », chacune avec son seuil de salaire. Pour le salarié qualifié, c'est ==39 582 € brut par an== en 2026, selon service-public.",
  publieLe: "2026-03-31",
  modifieLe: "2026-10-20",
  minutes: 8,
  theme: "passeport talent 2026",
  motsCles: [
    "passeport talent 2026",
    "carte talent 2026",
    "passeport talent conditions",
    "passeport talent salaire minimum",
    "carte talent salarié qualifié",
    "passeport talent jeune entreprise innovante",
    "passeport talent chercheur",
    "passeport talent création entreprise",
    "passeport talent famille conjoint",
    "talent-famille",
    "passeport talent renouvellement",
    "passeport talent vs carte bleue européenne",
    "carte bleue européenne France",
    "passeport talent ANEF demande",
    "passeport talent 4 ans",
    "passeport talent investisseur",
    "passeport talent artiste",
    "passeport talent naturalisation",
    "passeport talent carte de résident",
    "titre de séjour 4 ans qualifié",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    alt: "Portrait d'un homme souriant en tee-shirt blanc, devant un mur gris",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    position: "50% 25%",
  },
  blocs: [
    {
      type: "h2",
      texte: "Passeport talent ou carte talent : quel est le bon nom ?",
      id: "passeport-ou-carte-talent",
    },
    {
      type: "p",
      texte: "Depuis le 28 janvier 2024, la loi n° 2024-42 du 26 janvier 2024 a renommé le passeport talent. Le nom officiel est maintenant **carte talent**, suivi d'une mention : « talent-salarié qualifié », « talent-chercheur », etc. Beaucoup de gens disent encore « passeport talent », et le code lui-même garde ce mot pour la carte de la famille.",
    },
    {
      type: "p",
      texte: "Ces règles sont dans le CESEDA (le code qui regroupe les règles sur l'entrée et le séjour des étrangers), aux articles L. 421-7 à L. 421-25, consultables sur [Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771564/). La carte talent est une carte de séjour pluriannuelle : c'est un titre valable plusieurs années, ici ==4 ans au plus==. Elle dure souvent le temps de votre contrat ou de votre projet ([service-public, fiche F16922](https://www.service-public.gouv.fr/particuliers/vosdroits/F16922)).",
    },
    {
      type: "p",
      texte: "Les anciens articles qui parlent de « 10 » ou « 13 catégories » datent d'avant cette réforme. La loi de 2024 a fusionné plusieurs anciennes catégories. Service-public décrit aujourd'hui 8 cartes, dont deux regroupent trois parcours chacune.",
    },
    {
      type: "h2",
      texte: "Quelles sont les 8 cartes talent et leur salaire minimum ?",
      id: "categories-passeport-talent",
    },
    {
      type: "p",
      texte: "Voici les cartes et les seuils publiés par [service-public](https://www.service-public.gouv.fr/particuliers/vosdroits/F16922) (fiche vérifiée le 1er juin 2026, lue le 20/10/2026). Les montants sont bruts, avant les cotisations.",
    },
    {
      type: "tableau",
      entetes: ["Carte", "Pour qui", "Seuil de revenus"],
      lignes: [
        ["Talent-salarié qualifié", "Trois parcours. Diplôme de niveau master. Ou recrutement par une entreprise innovante. Ou salarié en mission dans un groupe (3 mois d'ancienneté).", "39 582 € brut par an."],
        ["Talent-carte bleue européenne", "Bac+3 ou 5 ans d'expérience utile, contrat d'au moins 6 mois", "59 373 € brut par an (1,5 fois le salaire moyen de référence)."],
        ["Talent-profession médicale et de la pharmacie", "Autorisation d'exercer ou décision d'affectation", "41 386,48 € brut par an."],
        ["Talent-chercheur", "Master et convention d'accueil d'un organisme de recherche", "2 200 € brut pour le chercheur qui a signé une convention."],
        ["Talent-porteur de projet", "Création d'entreprise (au moins 30 000 € de financement), projet innovant reconnu, ou investissement d'au moins 300 000 €", "Ressources au moins égales au SMIC brut annuel : 22 404,20 €."],
        ["Talent-mandataire social", "Dirigeant d'une société en France, 3 mois d'ancienneté dans le groupe", "3 fois le SMIC : 67 212,60 € brut par an."],
        ["Talent-profession artistique et culturelle", "Artiste-interprète ou auteur d'œuvres", "70 % du SMIC par mois : 1 306,91 €, dont 51 % au moins venus de l'activité artistique."],
        ["Talent-renommée nationale ou internationale", "Renommée établie dans son domaine", "SMIC brut annuel : 22 404,20 €."],
      ],
      legende: "Source : service-public, fiche F16922, lue le 20/10/2026. Base légale : CESEDA, articles L. 421-9 à L. 421-21.",
    },
    {
      type: "p",
      texte: "Un piège revient souvent : les seuils se lisent en salaire **brut annuel**. Le chiffre de « 2 fois le SMIC » ou de « 1,5 fois le SMIC » que l'on trouve encore en ligne ne correspond pas au seuil actuel du salarié qualifié. Depuis 2025, ce seuil suit un salaire moyen de référence fixé par un arrêté (un texte signé par un ou plusieurs ministres).",
    },
    {
      type: "p",
      texte: "Chaque carte a son guide détaillé : [salarié qualifié](/articles/passeport-talent-salarie-qualifie-2026-salaire-conditions-procedure), [chercheur](/articles/passeport-talent-chercheur-france-2026-conditions-demarches-salaire) et [création d'entreprise](/articles/passeport-talent-creation-entreprise-france-2026-conditions-investissement).",
    },
    {
      type: "h2",
      texte: "Quels sont les avantages de la carte talent ?",
      id: "avantages-passeport-talent",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Une longue durée** : jusqu'à 4 ans, selon la durée du contrat ou du projet (F16922).",
        "**Pas d'autorisation de travail à demander par l'employeur** pour le salarié qualifié. L'employeur ne paie pas non plus la taxe pour l'emploi d'un salarié étranger (F16922).",
        "**Une carte possible dès la première arrivée** en France pour plusieurs mentions, selon l'article L. 421-7 du CESEDA.",
        "**Une procédure simple pour la famille**, sans passer par le regroupement familial (voir plus bas).",
      ],
    },
    {
      type: "p",
      texte: "Pour la carte « talent-renommée nationale ou internationale », le CESEDA précise qu'elle permet d'exercer toute activité professionnelle (article L. 421-21). Pour les autres cartes, l'activité permise dépend de la mention.",
    },
    {
      type: "h2",
      texte: "Comment demander la carte talent ?",
      id: "demarches-anef-passeport-talent",
    },
    {
      type: "p",
      texte: "La démarche dépend de l'endroit où vous vivez au moment de la demande ([F16922](https://www.service-public.gouv.fr/particuliers/vosdroits/F16922)) :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Depuis l'étranger** : vous demandez un visa de long séjour mention « talent » au consulat de France. Si votre séjour dure moins d'un an, un VLS-TS (visa de long séjour qui vaut titre de séjour) suffit. Pour un an ou plus, vous demandez ensuite la carte talent.",
        "**Depuis la France** : vous déposez la demande en ligne sur l'ANEF, le site du ministère de l'Intérieur pour les titres de séjour.",
        "**Quand la carte est prête** : vous payez 350 € en timbre fiscal (une somme due à l'État, achetée en ligne ou au bureau de tabac). Ce montant se compose de 50 € de droit de timbre et de 300 € de taxe.",
      ],
    },
    {
      type: "p",
      texte: "Si la préfecture (le service de l'État qui gère les titres de séjour dans votre département) ne répond pas au bout de 4 mois, c'est un refus implicite. Vous avez alors 2 mois pour faire un recours (F16922). Pour un cas précis, renseignez-vous auprès d'un avocat ou d'une association comme La Cimade.",
    },
    {
      type: "p",
      texte: "Pour préparer la suite, lisez nos guides sur la [validation du VLS-TS](/articles/visa-long-sejour-vls-ts-validation-ofii-2026), la [création du compte ANEF](/articles/compte-anef-creer-2026-guide-pas-a-pas) et le [timbre fiscal](/articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances).",
    },
    {
      type: "h2",
      texte: "Comment faire venir sa famille avec une carte talent ?",
      id: "famille-passeport-talent",
    },
    {
      type: "p",
      texte: "La famille du titulaire bénéficie d'une procédure simplifiée, dite « famille accompagnante ». Elle évite le regroupement familial. Selon [service-public (fiche F35792)](https://www.service-public.gouv.fr/particuliers/vosdroits/F35792), la carte « talent-famille » vise :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "l'époux ou l'épouse de plus de 18 ans, marié au titulaire d'une carte talent (la fiche ne cite pas le PACS).",
        "l'enfant du couple devenu majeur après être entré en France mineur.",
        "l'enfant de 16 à 18 ans qui veut travailler.",
      ],
    },
    {
      type: "p",
      texte: "Cette carte permet de travailler, comme salarié ou à son compte, sans autorisation de travail. Elle dure le temps qui reste sur la carte talent du titulaire. La fiche ne fixe pas de condition de ressources. Après 5 ans de séjour avec ce titre, son renouvellement ne peut pas être refusé, pour 4 ans. Elle coûte aussi 350 € (F35792, vérifiée le 1er mai 2026).",
    },
    {
      type: "p",
      texte: "Le dépôt suit un calendrier. Depuis l'étranger, le conjoint demande un visa au consulat, puis la carte en ligne à son arrivée. En France avec un visa long séjour, il dépose dans les 2 mois après l'entrée. Avec un titre en cours, il dépose entre 4 et 2 mois avant sa fin. Le détail est dans notre guide sur la [famille du passeport talent](/articles/famille-passeport-talent-france-2026-conjoint-enfants-droits-titre).",
    },
    {
      type: "h2",
      texte: "Carte talent, carte de résident, naturalisation : quel chemin ?",
      id: "carte-resident-naturalisation",
    },
    {
      type: "p",
      texte: "Une carte de résident est un titre de 10 ans. Il n'existe pas de carte de résident « après 3 ans de passeport talent », contrairement à ce qu'on lit parfois. Le CESEDA prévoit deux voies :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Avec la carte bleue européenne** : l'article [L. 421-12 du CESEDA](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051562055) ouvre la carte « résident de longue durée-UE ». Il faut avoir eu la carte bleue 2 ans, après au moins 3 ans de séjour régulier en France ou dans l'Union. Il faut aussi des ressources stables et respecter les conditions d'intégration.",
        "**Pour les autres titulaires** : la même carte se demande après au moins 5 ans de séjour régulier sans interruption, avec des ressources suffisantes, stables et régulières ([service-public, F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)).",
      ],
    },
    {
      type: "p",
      texte: "Depuis le 1er janvier 2026, la première carte de résident de longue durée-UE demande la réussite à un examen civique. Cela vaut aussi pour un ancien titulaire de passeport talent ou de carte bleue (F39530). Le niveau de français B1 est aussi exigé pour une première carte de résident ([F2208](https://www.service-public.gouv.fr/particuliers/vosdroits/F2208)). Voyez notre guide de la [carte de résident](/articles/carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture).",
    },
    {
      type: "p",
      texte: "Pour la naturalisation par décret (la nationalité française accordée par l'État sur demande), il faut en principe 5 ans de résidence en France. Selon [service-public (F2213)](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213), ce délai passe à 2 ans dans trois cas :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "un diplôme d'un établissement supérieur français, obtenu après 2 ans d'études.",
        "des services importants rendus, ou qui peuvent l'être, à la France par vos capacités et vos talents.",
        "un parcours d'intégration exceptionnel (civique, scientifique, économique, culturel ou sportif).",
      ],
    },
    {
      type: "p",
      texte: "La carte talent ne donne donc pas à elle seule un délai réduit. La naturalisation exige aussi l'examen civique, un niveau de français prouvé et un entretien en préfecture (F2213). Le détail est dans notre guide de la [naturalisation](/articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet).",
    },
    {
      type: "cta",
      texte: "La carte de résident et la naturalisation passent par l'examen civique. Vous pouvez vous entraîner dès maintenant sur des questions types, à votre rythme.",
    },
    {
      type: "h2",
      texte: "Quelles erreurs éviter avec la carte talent ?",
      id: "erreurs-pieges-pt",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Se fier à un ancien seuil** : vérifiez le montant du jour sur service-public, en brut annuel.",
        "**Choisir la mauvaise carte** : un créateur d'entreprise ne relève pas du salarié qualifié, mais du porteur de projet.",
        "**Compter sur le PACS** : la fiche talent-famille vise l'époux ou l'épouse, pas le partenaire pacsé.",
        "**Laisser filer le silence** : 4 mois sans réponse valent refus, et le délai de recours est court.",
        "**Croire aux raccourcis** : aucune carte de résident n'est prévue après 3 ans de carte talent.",
      ],
    },
    {
      type: "p",
      texte: "Le chercheur, l'artiste ou le titulaire d'une carte talent se demande souvent s'il doit passer l'examen civique pour sa propre carte. Notre article sur les [titres sans examen civique](/articles/passeport-talent-etudiant-visiteur-non-soumis-examen-civique-2026-cir) fait le point. Pour un autre titre de travail, lisez notre guide sur [travailler en France](/articles/travailler-france-etranger-autorisation-droits).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le passeport talent s'appelle carte talent depuis la loi du 26 janvier 2024. Il existe 8 cartes, valables 4 ans au plus. Le salarié qualifié doit gagner au moins 39 582 € brut par an. La famille a sa carte « talent-famille », sans regroupement familial. La carte de résident et la naturalisation suivent les règles communes, avec l'examen civique.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quel salaire minimum pour le passeport talent en 2026 ?",
      reponse: "Pour la carte talent-salarié qualifié, le contrat doit prévoir au moins 39 582 € brut par an, selon service-public. Le seuil est de 59 373 € pour la carte bleue européenne et de 67 212,60 € pour le mandataire social. Les autres cartes ont leurs propres seuils, souvent liés au SMIC.",
    },
    {
      question: "Combien de temps dure le passeport talent ?",
      reponse: "La carte talent dure en général le temps du contrat de travail ou du projet, dans la limite de 4 ans. Pour la carte bleue européenne, un contrat de moins de 2 ans donne une carte de la durée du contrat plus 3 mois, avec un maximum de 2 ans.",
    },
    {
      question: "Mon conjoint peut-il travailler avec le passeport talent famille ?",
      reponse: "Oui. La carte talent-famille autorise une activité salariée ou à son compte, et l'employeur n'a pas d'autorisation de travail à demander. Elle vise l'époux ou l'épouse de plus de 18 ans. Elle dure le temps qui reste sur la carte talent du titulaire, et coûte 350 € en timbres fiscaux.",
    },
    {
      question: "Le passeport talent permet-il d'obtenir la carte de résident ?",
      reponse: "Pas automatiquement. Le titulaire de la carte bleue européenne peut demander la carte de résident de longue durée-UE après 2 ans de carte bleue et 3 ans de séjour antérieur. Les autres titulaires suivent la règle des 5 ans de séjour régulier. Dans les deux cas, l'examen civique est exigé.",
    },
  ],
  sources: [
    {
      titre: "Service-public : carte talent, carte de séjour pluriannuelle d'un étranger en France (F16922)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16922",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte de séjour pluriannuelle « talent-famille » (F35792)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F35792",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Légifrance : CESEDA, articles L. 421-7 à L. 421-25 (étranger bénéficiaire d'un titre « talent »)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771564/",
      type: "juridique",
      luLe: "2026-10-20",
    },
    {
      titre: "Légifrance : CESEDA, article L. 421-12 (résident de longue durée-UE après la carte bleue européenne)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051562055",
      type: "juridique",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : examen civique pour la carte de séjour pluriannuelle et la carte de résident (F39530)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte de résident de 10 ans (F2208)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2208",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : naturalisation française par décret (F2213)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      luLe: "2026-10-20",
    },
  ],
  aLireAussi: [
    {
      slug: "passeport-talent-salarie-qualifie-2026-salaire-conditions-procedure",
      ancre: "Carte talent-salarié qualifié : le guide",
    },
    {
      slug: "famille-passeport-talent-france-2026-conjoint-enfants-droits-titre",
      ancre: "La famille du titulaire d'une carte talent",
    },
    { slug: "visa-long-sejour-vls-ts-validation-ofii-2026", ancre: "VLS-TS : la validation en ligne" },
    {
      slug: "changement-statut-etudiant-salarie-2026-demarches-anef",
      ancre: "Changement de statut étudiant vers salarié",
    },
  ],
};

export default article;
