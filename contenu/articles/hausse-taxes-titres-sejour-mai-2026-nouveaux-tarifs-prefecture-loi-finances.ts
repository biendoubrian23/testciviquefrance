import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-taxes-titres-sejour-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances",
  titre: "Hausse des taxes titres de séjour au 1er mai 2026 : 650 € pour un premier titre, ce que ça change",
  titreSeo: "Hausse des taxes titres de séjour au 1er mai 2026 : 650 € pour un premier titre, ce que ça change",
  resume: "À partir du 1er mai 2026, les taxes pour les étrangers grimpent fortement : jusqu'à 650 € pour un premier titre de séjour, 255 € de droit de timbre pour la naturalisation, 100 € pour une autorisation provisoire de séjour. Tableau des montants officiels vérifiés, exonérations et conseils pratiques.",
  chapo: "**Article mis à jour le 22 mai 2026.** Depuis le 1er mai 2026, obtenir ou renouveler un titre de séjour en France coûte nettement plus cher. La loi de finances pour 2026 a relevé l'ensemble des taxes et droits de timbre liés à l'immigration : jusqu'à **650 €** pour un premier titre de séjour en situation de régularisation, **255 €** de droit de timbre pour une demande de naturalisation (contre 55 € auparavant), **100 €** pour une autorisation provisoire de séjour jusque-là gratuite.",
  publieLe: "2026-05-22",
  modifieLe: "2026-05-22",
  minutes: 14,
  theme: "hausse taxes titre de séjour 2026",
  motsCles: [
    "hausse taxes titre de séjour 2026",
    "nouveau tarif titre de séjour 2026",
    "prix titre de séjour 1er mai 2026",
    "timbre fiscal titre de séjour 2026",
    "timbre fiscal naturalisation 255 euros",
    "droit de timbre 50 euros titre de séjour",
    "tarif minoré titre de séjour étudiant",
    "droit de visa de régularisation 300 euros",
    "autorisation provisoire de séjour 100 euros",
    "loi finances 2026 taxes étrangers",
    "exonération taxe titre de séjour",
    "coût renouvellement titre de séjour 2026",
    "premier titre de séjour 350 euros",
  ],
  rubrique: "actualites",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  blocs: [
    {
      type: "p",
      texte: "Qui est concerné ? Combien allez-vous réellement payer selon votre situation ? Qui est exonéré ? Ce guide reprend **tous les montants officiels**, vérifiés sur service-public.fr et les sites des préfectures, et vous explique comment les anticiper.",
    },
    {
      type: "h2",
      texte: "Ce qui change le 1er mai 2026 : tous les nouveaux tarifs",
      id: "ce-qui-change-le-1er-mai",
    },
    {
      type: "p",
      texte: "La loi n° 2026-103 de finances pour 2026 (article 128) a revu à la hausse l'ensemble des taxes liées à l'immigration légale. Les nouveaux montants s'appliquent **à tout titre dont la décision de délivrance intervient à compter du 1er mai 2026** (voir plus bas la règle exacte).",
    },
    { type: "h3", texte: "Taxe et droit de timbre : deux choses différentes" },
    { type: "p", texte: "Le coût d'un titre de séjour se compose de **deux éléments distincts** :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "la **taxe** proprement dite, dont le montant dépend du type de démarche ;",
        "le **droit de timbre**, qui passe de **25 € à 50 €** pour quasiment toutes les démarches.",
      ],
    },
    { type: "p", texte: "C'est l'addition des deux qui donne le montant total à payer." },
    { type: "h3", texte: "Le tableau officiel des nouveaux tarifs (1er mai 2026)" },
    {
      type: "tableau",
      entetes: ["Démarche", "Taxe", "Droit de timbre", "Total"],
      lignes: [
        [
          "Première délivrance : tarif normal (carte temporaire, pluriannuelle ou carte de résident)",
          "300 €",
          "50 €",
          "**350 €**",
        ],
        [
          "Première délivrance : tarif minoré (étudiants, stagiaires, jeunes au pair, saisonniers)",
          "100 €",
          "50 €",
          "**150 €**",
        ],
        ["Renouvellement : tarif normal", "200 €", "50 €", "**250 €**"],
        ["Renouvellement : tarif minoré", "50 €", "50 €", "**100 €**"],
      ],
    },
    { type: "h3", texte: "Les autres taxes qui augmentent" },
    {
      type: "tableau",
      entetes: ["Démarche", "Ancien montant", "Nouveau montant (1er mai 2026)"],
      lignes: [
        ["Droit de visa de régularisation", "200 €", "**300 €** (dont 100 € non remboursables)"],
        ["Autorisation provisoire de séjour (APS)", "Gratuit", "**100 €**"],
        [
          "Droit de timbre : naturalisation et déclarations de nationalité",
          "55 €",
          "**255 €** (127,50 € en Guyane)",
        ],
        ["Échange d'un permis de conduire étranger", "", "**40 €**"],
      ],
    },
    {
      type: "p",
      texte: "Le **droit de visa de régularisation** concerne les personnes entrées irrégulièrement en France ou restées sans titre au-delà des délais réglementaires. Sur les 300 €, **100 € sont dus dès le dépôt de la demande et ne sont pas remboursables**, même en cas de refus.",
    },
    {
      type: "p",
      texte: "Le **droit de timbre de naturalisation à 255 €** s'applique à toutes les demandes d'acquisition de la nationalité : naturalisation par décret, réintégration, et déclarations de nationalité (par mariage, comme ascendant ou comme frère ou sœur de Français).",
    },
    {
      type: "encadre",
      texte: "Sources : [service-public.fr, augmentation des taxes des titres de séjour](https://www.service-public.gouv.fr/particuliers/actualites/A18881) et [service-public.fr, timbre fiscal pour une demande de nationalité française](https://www.service-public.gouv.fr/particuliers/vosdroits/F32952).",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Combien allez-vous payer ? 5 situations concrètes",
      id: "combien-allez-vous-payer",
    },
    {
      type: "p",
      texte: "Le montant exact dépend de votre situation. Voici les cas les plus fréquents.",
    },
    { type: "h3", texte: "1. Vous demandez un premier titre de séjour (cas général)" },
    { type: "p", texte: "**350 €** : 300 € de taxe + 50 € de droit de timbre." },
    { type: "h3", texte: "2. Vous êtes étudiant, stagiaire, jeune au pair ou saisonnier" },
    {
      type: "p",
      texte: "**150 €** : vous bénéficiez du tarif minoré (100 € de taxe + 50 € de droit de timbre).",
    },
    { type: "h3", texte: "3. Vous renouvelez votre titre de séjour" },
    {
      type: "p",
      texte: "**250 €** : 200 € de taxe + 50 € de droit de timbre. Le montant est le même pour une carte temporaire ou une carte pluriannuelle. Voir notre guide du [renouvellement de titre de séjour](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais).",
    },
    { type: "h3", texte: "4. Vous régularisez votre situation (entrée sans visa)" },
    { type: "p", texte: "C'est le cas le plus coûteux :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "premier titre : **350 €** (taxe 300 € + droit de timbre 50 €) ;",
        "droit de visa de régularisation : **300 €** (dont 100 € payés dès le dépôt) ;",
        "**soit environ 650 €**, hors frais annexes (photos, traductions, déplacements).",
      ],
    },
    { type: "p", texte: "Au bout d'un an, le renouvellement coûtera **250 € supplémentaires**." },
    { type: "h3", texte: "5. Vous déposez une demande de naturalisation" },
    {
      type: "p",
      texte: "**255 €** de droit de timbre (contre 55 € auparavant), à régler au moment du dépôt du dossier, un montant multiplié par plus de quatre. La naturalisation entraîne aussi d'autres frais (test de langue, traductions) : voir notre guide de la [naturalisation française 2026](/articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet).",
    },
    {
      type: "h2",
      texte: "Quand les nouveaux tarifs s'appliquent : la règle de la date de décision",
      id: "date-decision-regle",
    },
    { type: "p", texte: "C'est le point qui crée le plus de confusion : et une erreur fréquente." },
    {
      type: "p",
      texte: "**Ce n'est pas la date de dépôt de votre dossier qui détermine le tarif, mais la date de la décision de délivrance du titre.**",
    },
    {
      type: "p",
      texte: "Concrètement : tous les titres de séjour dont **la décision de délivrance intervient à compter du 1er mai 2026** sont soumis aux nouveaux montants, **même si le dossier a été déposé avant cette date**. Un dossier déposé en mars 2026 mais accordé en juin 2026 sera donc taxé au nouveau tarif.",
    },
    {
      type: "p",
      texte: "Il était donc inutile d'espérer « payer moins cher » en déposant son dossier juste avant le 1er mai : ce qui compte, c'est la date à laquelle la préfecture statue.",
    },
    {
      type: "p",
      texte: "Pour les demandes de régularisation dont une partie des frais a déjà été acquittée avant le 1er mai, le complément correspondant au nouveau tarif reste dû.",
    },
    {
      type: "encadre",
      texte: "Source : [service-public.fr, actualité du 1er mai 2026](https://www.service-public.gouv.fr/particuliers/actualites/A18881).",
      ton: "bleu",
    },
    { type: "h2", texte: "Qui est exonéré de ces taxes ?", id: "qui-est-exonere" },
    { type: "p", texte: "Toutes ces taxes ne s'appliquent pas à tout le monde." },
    { type: "h3", texte: "Personnes non concernées" },
    {
      type: "p",
      texte: "Les citoyens de l'**Union européenne, de l'EEE, de Suisse et d'Andorre** ne sont pas soumis à ces taxes : ils n'ont pas besoin d'un titre de séjour pour résider en France.",
    },
    { type: "h3", texte: "Catégories exonérées" },
    {
      type: "p",
      texte: "Sont notamment **exonérés** du droit de visa de régularisation et, pour plusieurs d'entre eux, des taxes de titre de séjour :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "les **réfugiés** et les bénéficiaires de la **protection subsidiaire** ;",
        "les **apatrides** reconnus ;",
        "les **victimes de la traite des êtres humains** et les **victimes de violences conjugales** ;",
        "les **étrangers malades** (titre de séjour pour raison de santé) ;",
        "les **mineurs** et les bénéficiaires de l'**aide sociale à l'enfance (ASE)** ;",
        "les **anciens combattants** et anciens **légionnaires**.",
      ],
    },
    { type: "h3", texte: "L'angle mort : pas d'exonération liée aux revenus" },
    {
      type: "p",
      texte: "Il n'existe **aucun barème de revenus** permettant de réduire ces taxes pour les personnes en grande précarité, contrairement à d'autres dispositifs (aide juridictionnelle, complémentaire santé solidaire). Le seul critère est le statut juridique. C'est l'une des principales critiques des associations.",
    },
    {
      type: "p",
      texte: "Si une préfecture vous réclame une taxe alors que vous relevez d'une catégorie exonérée, contestez-le par écrit et conservez une preuve.",
    },
    {
      type: "encadre",
      texte: "Les exonérations dépendent du fondement exact de votre demande : vérifiez votre situation précise sur [service-public.fr](https://www.service-public.gouv.fr/particuliers/actualites/A18881).",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Pourquoi ces hausses ? Gouvernement et associations s'opposent",
      id: "pourquoi-ces-hausses",
    },
    { type: "h3", texte: "La justification du gouvernement" },
    {
      type: "p",
      texte: "Le gouvernement présente ces hausses comme un moyen de **financer le traitement des dossiers** par les services préfectoraux. La loi de finances 2026 s'accompagne d'un plan visant à renforcer les effectifs des préfectures et à réduire les délais d'instruction.",
    },
    { type: "h3", texte: "La critique des associations" },
    {
      type: "p",
      texte: "Plusieurs associations de défense des étrangers, dont **La Cimade** : dénoncent une hausse injuste. Leurs arguments :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "la France figurerait, selon elles, **parmi les pays d'Europe où le coût du droit au séjour est le plus élevé** ;",
        "les usagers paient davantage pour un service marqué par **un grand nombre de dossiers en attente** et des **délais d'instruction de plusieurs mois** ;",
        "la plateforme **ANEF** connaît des dysfonctionnements réguliers, au point d'avoir donné lieu à des recours devant la justice administrative.",
      ],
    },
    {
      type: "p",
      texte: "Le sujet a aussi gagné le Parlement, plusieurs parlementaires ayant interpellé le gouvernement.",
    },
    {
      type: "p",
      texte: "Quelle que soit la position que l'on adopte, le constat est le même pour l'usager : **il faut prévoir un budget nettement plus élevé** qu'avant le 1er mai 2026.",
    },
    { type: "h2", texte: "Que faire si vous ne pouvez pas payer ?", id: "si-vous-ne-pouvez-pas-payer" },
    { type: "p", texte: "Des solutions existent, même si elles restent limitées." },
    { type: "h3", texte: "1. Vérifiez d'abord si vous êtes exonéré" },
    {
      type: "p",
      texte: "Relisez la section précédente : si vous êtes réfugié, bénéficiaire de la protection subsidiaire, victime de traite ou de violences, ou étranger malade, vous ne devez pas payer ces taxes.",
    },
    { type: "h3", texte: "2. Sollicitez une association" },
    {
      type: "p",
      texte: "Des associations disposent de fonds d'aide d'urgence ou peuvent vous orienter :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**La Cimade** : permanences juridiques et orientation (lacimade.org) ;",
        "le **Secours catholique** : aide financière d'urgence (secours-catholique.org) ;",
        "le **COMEDE** : situations médicales (comede.org) ;",
        "**Médecins du Monde** : personnes précaires (medecinsdumonde.org).",
      ],
    },
    { type: "h3", texte: "3. La préfecture ne peut pas refuser de recevoir votre dossier" },
    {
      type: "p",
      texte: "Une préfecture n'a **pas le droit** de refuser l'accès au guichet ou le dépôt d'un dossier au seul motif que vous ne pouvez pas payer immédiatement. La taxe est due à la délivrance du titre (et, pour la régularisation, 100 € au dépôt). Si l'accès vous est refusé, saisissez le **Défenseur des droits** (defenseurdesdroits.fr, gratuit).",
    },
    { type: "h3", texte: "4. Attention aux intermédiaires" },
    {
      type: "p",
      texte: "Ne payez **jamais** un intermédiaire qui prétend « accélérer » ou « faciliter » vos paiements : les démarches officielles se font uniquement auprès de la préfecture et sur les sites en .gouv.fr.",
    },
    {
      type: "h2",
      texte: "Comment payer le timbre fiscal et bien anticiper",
      id: "comment-payer-conseils",
    },
    { type: "h3", texte: "Acheter le timbre fiscal électronique" },
    {
      type: "p",
      texte: "Le droit de timbre se règle sous forme de **timbre fiscal électronique**. Vous pouvez l'acheter :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "en ligne sur **timbres.impots.gouv.fr** (paiement par carte bancaire, reçu immédiat) ;",
        "dans un **bureau de tabac** agréé.",
      ],
    },
    {
      type: "p",
      texte: "Conservez le **numéro de référence** du timbre : c'est lui qui est saisi dans votre démarche ANEF ou remis à la préfecture. Un timbre non utilisé est remboursable pendant sa durée de validité.",
    },
    { type: "h3", texte: "Checklist avant de déposer votre demande" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Identifiez le bon tarif** selon votre situation (normal ou minoré, première délivrance ou renouvellement).",
        "**Vérifiez vos droits à exonération** avant tout paiement.",
        "**Préparez le montant exact** à l'avance.",
        "**Gardez tous vos justificatifs de paiement** : indispensables en cas de recours.",
        "En cas de doute sur un montant, **vérifiez-le sur service-public.fr** ou auprès de votre préfecture avant de payer.",
      ],
    },
    { type: "h3", texte: "Si votre titre est refusé après paiement" },
    {
      type: "p",
      texte: "Le **droit de timbre** et la part non remboursable du droit de visa de régularisation (100 €) ne sont **pas restitués**. En cas de recours contre un refus, vous pouvez demander l'**aide juridictionnelle**.",
    },
    { type: "h2", texte: "Sources officielles", id: "sources-officielles" },
    {
      type: "p",
      texte: "Tous les montants de ce guide proviennent de sources officielles, à jour au 22 mai 2026 :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "[service-public.fr, Titres de séjour : augmentation des taxes au 1er mai 2026](https://www.service-public.gouv.fr/particuliers/actualites/A18881)",
        "[service-public.fr, Timbre fiscal pour une demande de nationalité française](https://www.service-public.gouv.fr/particuliers/vosdroits/F32952)",
        "Préfectures, rubriques « Étrangers en France », tableaux d'application de la loi de finances 2026",
        "Loi n° 2026-103 de finances pour 2026, article 128",
        "Achat du timbre fiscal : [timbres.impots.gouv.fr](https://timbres.impots.gouv.fr)",
      ],
    },
    {
      type: "p",
      texte: "Les tarifs administratifs peuvent évoluer : en cas de doute, vérifiez toujours le montant applicable à votre démarche sur service-public.fr avant de payer.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La hausse des taxes du 1er mai 2026 alourdit nettement le coût de l'accès au séjour : 350 € pour un premier titre, 250 € pour un renouvellement, jusqu'à 650 € en cas de régularisation et 255 € de droit de timbre pour une naturalisation. Pour éviter les mauvaises surprises, retenez trois réflexes : identifier le tarif exact correspondant à votre situation, vérifier vos droits à exonération, et toujours confirmer le montant sur service-public.fr avant de payer. Anticiper ce budget, c'est aussi sécuriser la continuité de vos droits, et, si la naturalisation est votre objectif, préparer sereinement la suite de votre parcours.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien coûte un premier titre de séjour depuis le 1er mai 2026 ?",
      reponse: "Pour un premier titre de séjour, comptez 350 € au tarif normal (300 € de taxe + 50 € de droit de timbre), ou 150 € au tarif minoré pour les étudiants, stagiaires, jeunes au pair et saisonniers. En cas de régularisation, s'ajoute un droit de visa de régularisation de 300 €, soit environ 650 € au total.",
    },
    {
      question: "La hausse s'applique-t-elle si j'ai déposé mon dossier avant le 1er mai 2026 ?",
      reponse: "Oui. Ce qui compte n'est pas la date de dépôt mais la date de la décision de délivrance du titre. Tout titre délivré à compter du 1er mai 2026 est soumis aux nouveaux tarifs, même si le dossier a été déposé avant cette date.",
    },
    {
      question: "Combien coûte le timbre fiscal pour une demande de naturalisation en 2026 ?",
      reponse: "Le droit de timbre pour une demande de naturalisation ou une déclaration de nationalité française est passé de 55 € à 255 € depuis le 1er mai 2026 (127,50 € en Guyane).",
    },
    {
      question: "Combien coûte le renouvellement d'un titre de séjour ?",
      reponse: "Le renouvellement coûte 250 € au tarif normal (200 € de taxe + 50 € de droit de timbre), ou 100 € au tarif minoré. Le montant est identique pour une carte temporaire ou pluriannuelle.",
    },
    {
      question: "Qui est exonéré de ces taxes ?",
      reponse: "Les réfugiés, les bénéficiaires de la protection subsidiaire, les apatrides, les victimes de traite ou de violences conjugales, les étrangers malades, les mineurs et les bénéficiaires de l'aide sociale à l'enfance en sont notamment exonérés. Les citoyens de l'UE, de l'EEE, de Suisse et d'Andorre ne sont pas concernés.",
    },
    {
      question: "Comment payer le timbre fiscal d'un titre de séjour ?",
      reponse: "Le timbre fiscal électronique s'achète sur timbres.impots.gouv.fr (paiement par carte bancaire) ou dans un bureau de tabac agréé. Conservez le numéro de référence, à saisir dans votre démarche ANEF ou à remettre à la préfecture.",
    },
  ],
};

export default article;
