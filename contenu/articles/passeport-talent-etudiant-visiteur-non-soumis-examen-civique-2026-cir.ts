import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-titres-non-soumis-examen-civique-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/passeport-talent-etudiant-visiteur-non-soumis-examen-civique-2026-cir`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "passeport-talent-etudiant-visiteur-non-soumis-examen-civique-2026-cir",
  titre: "Passeport talent, étudiant : les titres sans examen civique",
  titreSeo: "Passeport talent, étudiant : les titres sans examen civique",
  resume: "L'examen civique ne vise que les premières cartes pluriannuelles soumises au contrat d'intégration républicaine. Passeport talent (et famille), étudiant, visiteur, stagiaire et travailleur temporaire en sont dispensés par l'article L. 413-5 du CESEDA, et les trois situations où la règle bascule.",
  chapo: "Si vous êtes chercheur, cadre en passeport talent, étudiant ou visiteur, vous avez probablement lu quelque part que **« toute première carte de séjour pluriannuelle exige désormais la réussite de l'examen civique »**. Vous vous êtes peut-être déjà inscrit à une session, vous avez peut-être payé les 65 à 90 € et bloqué vos soirées pour réviser.",
  publieLe: "2026-08-27",
  modifieLe: "2026-08-27",
  minutes: 11,
  theme: "passeport talent examen civique",
  motsCles: [
    "passeport talent examen civique",
    "étudiant examen civique obligatoire",
    "titres dispensés examen civique",
    "contrat intégration républicaine examen civique",
    "article L 413-5 CESEDA",
    "visiteur examen civique",
    "passeport talent famille examen civique",
    "chercheur examen civique France",
    "carte pluriannuelle sans examen civique",
    "qui est dispensé CIR 2026",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  blocs: [
    { type: "p", texte: "**Il y a de fortes chances que vous n'ayez pas à le passer.**" },
    {
      type: "p",
      texte: "L'obligation entrée en vigueur le 1er janvier 2026 est plus étroite que ce que la plupart des contenus en ligne laissent entendre. Elle ne vise pas « les cartes pluriannuelles » en bloc : elle vise les **premières demandes de carte pluriannuelle soumises au contrat d'intégration républicaine (CIR)**. Or l'**article L. 413-5 du CESEDA** dispense de CIR toute une série de titres, et le passeport talent en fait partie, avec sa déclinaison famille.",
    },
    {
      type: "p",
      texte: "Ce raccourci coûte cher à des milliers de personnes chaque année : du temps de préparation, de l'argent, et parfois un créneau d'examen pris à quelqu'un qui, lui, en avait réellement besoin.",
    },
    {
      type: "p",
      texte: "Cet article établit précisément **quels titres échappent à l'examen civique, pourquoi, et dans quels cas la règle bascule**.",
    },
    {
      type: "encadre",
      texte: "⚡ **En une phrase :** pas de contrat d'intégration républicaine, pas d'examen civique pour votre titre de séjour. Mais la règle s'inverse le jour où vous demandez la nationalité française.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "La règle exacte : l'examen suit le contrat d'intégration républicaine",
      id: "regle-exacte",
    },
    { type: "p", texte: "Reprenons le texte plutôt que les résumés." },
    {
      type: "p",
      texte: "La fiche officielle [Service-Public F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530?lang=fr) est précise sur le périmètre : seules sont concernées les demandes de **première carte de séjour pluriannuelle soumise au contrat d'intégration républicaine**.",
    },
    { type: "p", texte: "**Le raisonnement en trois temps :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "📜 Le **décret n° 2025-648 du 15 juillet 2025** institue l'examen civique et l'adosse aux conditions d'intégration ;",
        "🤝 Ces conditions s'apprécient dans le cadre du **contrat d'intégration républicaine (CIR)**, que signent les étrangers primo-arrivants admis au séjour durable ;",
        "⚖️ L'**article L. 413-5 du CESEDA** énumère les titres **dispensés de CIR**.",
      ],
    },
    {
      type: "p",
      texte: "**Conclusion mécanique :** si votre titre est dispensé de CIR, il n'entre pas dans le champ de l'obligation d'examen civique.",
    },
    {
      type: "p",
      texte: "Ce n'est pas une faveur ni une tolérance administrative : c'est la construction même du dispositif. Le CIR est le véhicule des obligations d'intégration ; les titres qui n'y sont pas soumis n'en portent pas les conditions.",
    },
    {
      type: "encadre",
      texte: "💡 **Pourquoi tant de sites se trompent :** le communiqué du ministère annonce l'obligation « pour la carte de séjour pluriannuelle, la carte de résident et la naturalisation ». Repris sans la condition de CIR, ce résumé devient faux pour une part importante des titulaires. La nuance figure dans la fiche technique, pas dans le communiqué.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Les titres dispensés de CIR : donc d'examen civique",
      id: "liste-titres-dispenses",
    },
    { type: "p", texte: "Voici les mentions visées par l'article L. 413-5 du CESEDA." },
    { type: "p", texte: "**💼 Passeport talent : toutes déclinaisons**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Passeport talent (salarié qualifié, entreprise innovante, investisseur, mandataire social, profession artistique, renommée internationale…)",
        "Passeport talent **carte bleue européenne**",
        "Passeport talent **chercheur** et chercheur : mobilité",
        "**Passeport talent (famille)** : le conjoint et les enfants sont dispensés au même titre",
      ],
    },
    { type: "p", texte: "**🎓 Étudiant**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Carte de séjour temporaire ou pluriannuelle mention **étudiant**",
        "**Programme de mobilité étudiante**",
      ],
    },
    { type: "p", texte: "**📋 Stagiaire**" },
    { type: "p", texte: "**🧳 Visiteur**" },
    { type: "p", texte: "**⏳ Travailleur temporaire**" },
    { type: "p", texte: "**🇫🇷 Et par le parcours scolaire ou universitaire**" },
    { type: "p", texte: "Sont également dispensées de CIR les personnes ayant suivi :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "au moins **trois années de scolarité secondaire** dans un établissement français ;",
        "ou au moins **une année d'études supérieures** en France.",
      ],
    },
    {
      type: "p",
      texte: "Cette dernière catégorie est très largement ignorée. Un étudiant étranger ayant validé une année de master en France peut en relever, y compris s'il bascule ensuite vers un autre statut, un point à faire vérifier par votre préfecture, car il dépend de votre parcours précis.",
    },
    {
      type: "encadre",
      texte: "📌 **Ce qui compte, c'est la mention portée sur votre titre**, pas votre métier ni votre situation ressentie. Un ingénieur peut être en « passeport talent salarié qualifié » (dispensé) ou en « salarié » (soumis). Deux personnes au même poste peuvent relever de régimes différents. Vérifiez la formulation exacte de votre carte.",
      ton: "bleu",
    },
    { type: "h2", texte: "À l'inverse : les titres bien soumis à l'examen", id: "titres-soumis" },
    { type: "p", texte: "Pour que la frontière soit nette, voici l'autre côté." },
    {
      type: "p",
      texte: "**Sont concernés par l'examen civique** (première demande, ressortissants non européens) :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "💼 Carte pluriannuelle mention **salarié**",
        "👨‍👩‍👧 Carte pluriannuelle mention **vie privée et familiale**",
        "🏪 Carte pluriannuelle mention **entrepreneur / profession libérale**",
        "🏠 Toute **première carte de résident** (conjoint de Français, parent d'enfant français, regroupement familial, résident longue durée-UE, résident permanent)",
        "🇫🇷 Toute demande de **naturalisation**",
      ],
    },
    { type: "p", texte: "**Le tableau qui résume tout :**" },
    {
      type: "tableau",
      entetes: ["Mention du titre", "CIR", "Examen civique"],
      lignes: [
        ["Passeport talent (et famille)", "Dispensé", "❌ Non"],
        ["Étudiant, mobilité étudiante", "Dispensé", "❌ Non"],
        ["Visiteur", "Dispensé", "❌ Non"],
        ["Stagiaire", "Dispensé", "❌ Non"],
        ["Travailleur temporaire", "Dispensé", "❌ Non"],
        ["**Salarié**", "Soumis", "✅ **Oui**"],
        ["**Vie privée et familiale**", "Soumis", "✅ **Oui**"],
        ["**Entrepreneur / profession libérale**", "Soumis", "✅ **Oui**"],
        ["**Carte de résident (1re demande)**", "", "✅ **Oui**"],
        ["**Naturalisation**", "", "✅ **Oui**"],
      ],
    },
    {
      type: "p",
      texte: "Rappel utile dans les deux colonnes : **les renouvellements ne sont jamais concernés**. L'obligation ne vise que les premières demandes.",
    },
    {
      type: "p",
      texte: "Notre guide complet sur l'obligation détaille le reste du périmètre : [Examen civique 2026 : obligatoire pour la carte de séjour](/articles/examen-civique-obligatoire-carte-sejour-pluriannuelle-2026).",
    },
    { type: "h2", texte: "Les trois situations où la règle bascule", id: "quand-la-regle-bascule" },
    {
      type: "p",
      texte: "Être dispensé aujourd'hui ne signifie pas l'être pour toujours. Trois événements font réapparaître l'obligation.",
    },
    { type: "p", texte: "**1. Le changement de statut** 🔄" },
    {
      type: "p",
      texte: "C'est le cas le plus fréquent. Vous passez d'un titre dispensé de CIR à un titre qui y est soumis :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Étudiant → salarié** à la fin de vos études ;",
        "**Passeport talent → vie privée et familiale** après un mariage ou une séparation ;",
        "**Visiteur → entrepreneur** au lancement d'une activité.",
      ],
    },
    {
      type: "p",
      texte: "Dans ces cas, vous formulez une **première demande** du nouveau titre, soumis au CIR : **l'examen civique devient exigible**. Anticipez-le plusieurs mois avant votre changement de statut, voir notre guide [Changement de statut étudiant vers salarié](/articles/changement-statut-etudiant-salarie-2026-demarches-anef).",
    },
    { type: "p", texte: "**2. La carte de résident de 10 ans** 🏠" },
    {
      type: "p",
      texte: "Après cinq ans de séjour régulier, beaucoup de titulaires de passeport talent visent la carte de résident. **Toute première carte de résident est concernée**, quelle que soit la mention du titre détenu auparavant. Votre dispense de CIR ne vous suit pas : voir [Carte de résident 10 ans](/articles/carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture).",
    },
    { type: "p", texte: "**3. La naturalisation** 🇫🇷" },
    {
      type: "p",
      texte: "C'est la bascule la plus nette, et la plus mal anticipée. La nationalité française relève du **code civil**, et non du CESEDA. Aucune dispense tirée de votre titre de séjour ne s'y applique. Un chercheur en passeport talent depuis huit ans, jamais soumis à l'examen civique, **devra le passer** pour devenir Français, et justifier du **niveau B2**, avec un certificat de moins de deux ans au dépôt.",
    },
    {
      type: "encadre",
      texte: "🎯 **Le conseil qui fait gagner des mois :** si l'une de ces trois situations figure dans vos projets à moyen terme, **passez l'examen civique dès maintenant**. L'attestation **n'a aucune durée de validité** : obtenue aujourd'hui, elle vaudra dans cinq ans. Et une attestation « carte de résident » vaut aussi pour la carte pluriannuelle. C'est le seul document de votre dossier dont vous êtes certain qu'il ne périmera pas.",
      ton: "bleu",
    },
    { type: "h2", texte: "Comment vérifier votre situation, concrètement", id: "verifier-sa-situation" },
    { type: "p", texte: "Trois vérifications, dans cet ordre." },
    { type: "p", texte: "**1. Lisez la mention exacte de votre titre** 🪪" },
    {
      type: "p",
      texte: "Elle figure sur votre carte de séjour, à côté de la durée de validité. C'est **elle seule** qui détermine votre régime. « Passeport talent, salarié qualifié » et « salarié » sont deux titres différents, avec deux réponses opposées, pour des personnes qui peuvent occuper le même emploi.",
    },
    { type: "p", texte: "**2. Testez votre situation en une minute** ⚙️" },
    {
      type: "p",
      texte: "Notre [simulateur d'éligibilité](/eligibilite-examen-civique) intègre le critère du contrat d'intégration républicaine, c'est, à notre connaissance, le seul à le faire. Il vous demande la mention de votre titre et vous donne une réponse motivée, avec la référence officielle qui la fonde. Gratuit, sans inscription.",
    },
    { type: "p", texte: "**3. Faites confirmer par écrit** 📩" },
    {
      type: "p",
      texte: "Si vous avez le moindre doute, ou si un agent vous réclame une attestation alors que vous pensez en être dispensé, demandez **par écrit** à votre préfecture le fondement juridique de cette exigence, en citant l'article L. 413-5 du CESEDA. Conservez une trace de l'échange : cette dispense reste mal connue de certains guichets, et une demande écrite oblige à une réponse motivée.",
    },
    { type: "p", texte: "**Si vous vous êtes déjà inscrit à tort** 💸" },
    {
      type: "p",
      texte: "Contactez sans attendre le centre agréé (CCIP ou France Éducation International). Les conditions d'annulation et de remboursement dépendent de chaque centre et du délai avant la session, il n'existe pas de règle nationale. Plus vous prévenez tôt, plus vos chances sont bonnes.",
    },
    {
      type: "encadre",
      texte: "⚠️ **Un dernier avertissement, dans l'autre sens.** Ne concluez pas trop vite. Si vous relevez d'une mention soumise au CIR et que vous vous croyez dispensé, vous découvrirez le problème au dépôt de votre dossier, avec 4 à 8 semaines d'attente pour un créneau, pendant que votre titre court vers son expiration. En cas d'incertitude, **préparez-vous quand même** : réviser inutilement ne coûte rien.",
      ton: "bleu",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "L'obligation d'examen civique est réelle, mais son périmètre est plus étroit qu'on ne le lit partout. Elle suit le **contrat d'intégration républicaine** : les titres qu'en dispense l'article L. 413-5 du CESEDA, **passeport talent et sa déclinaison famille, étudiant, mobilité étudiante, stagiaire, visiteur, travailleur temporaire** : n'y sont pas soumis. S'y ajoutent les personnes ayant accompli trois années de scolarité secondaire ou une année d'études supérieures en France.\nRetenez surtout que cette dispense est **liée au titre, pas à la personne**. Elle tombe dès que vous changez de statut vers une mention soumise au CIR, dès que vous demandez une première carte de résident, et, sans exception, dès que vous demandez la **nationalité française**.\nD'où le conseil qui vaut pour la plupart des lecteurs de cet article : si la naturalisation figure quelque part dans vos projets, **passez l'examen maintenant**. L'attestation ne périme jamais, et vous éviterez de découvrir l'obligation au moment du dépôt.\n👉 **[Vérifier ma situation en une minute](/eligibilite-examen-civique)** : notre simulateur intègre le critère du contrat d'intégration républicaine et vous donne une réponse motivée, gratuitement et sans inscription.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Le passeport talent est-il soumis à l'examen civique ?",
      reponse: "Non, pas pour le titre de séjour. Le passeport talent, dans toutes ses déclinaisons (salarié qualifié, chercheur, carte bleue européenne, entreprise innovante…) et sa mention famille, est dispensé de contrat d'intégration républicaine par l'article L. 413-5 du CESEDA. Or l'examen civique ne vise que les premières cartes pluriannuelles soumises au CIR. En revanche, il redevient obligatoire pour une première carte de résident ou pour la naturalisation.",
    },
    {
      question: "Je suis étudiant : dois-je passer l'examen civique ?",
      reponse: "Non pour votre titre étudiant, dispensé de contrat d'intégration républicaine. Attention toutefois au changement de statut : si vous passez d'étudiant à salarié à la fin de vos études, vous formulez une première demande d'un titre soumis au CIR, et l'examen devient exigible. Anticipez-le plusieurs mois à l'avance.",
    },
    {
      question: "Mon conjoint en passeport talent famille est-il dispensé aussi ?",
      reponse: "Oui. La mention passeport talent (famille) figure parmi les titres dispensés de contrat d'intégration républicaine par l'article L. 413-5 du CESEDA. Le conjoint et les enfants relèvent du même régime que le titulaire principal pour ce qui concerne l'examen civique.",
    },
    {
      question: "Je suis chercheur avec un passeport talent depuis 8 ans et je veux la nationalité. Suis-je dispensé ?",
      reponse: "Non. La naturalisation relève du code civil, et non du CESEDA : aucune dispense tirée de votre titre de séjour ne s'y applique. Vous devrez réussir l'examen civique (32 bonnes réponses sur 40) et justifier du niveau B2 en français, avec un certificat de moins de deux ans au dépôt. C'est la bascule la plus mal anticipée par les titulaires de passeport talent.",
    },
    {
      question: "Comment savoir si mon titre est soumis au contrat d'intégration républicaine ?",
      reponse: "Regardez la mention exacte portée sur votre carte de séjour, à côté de la durée de validité. Les mentions dispensées sont : passeport talent (toutes déclinaisons et famille), étudiant, programme de mobilité étudiante, stagiaire, visiteur et travailleur temporaire. Les mentions salarié, vie privée et familiale, entrepreneur et profession libérale y sont soumises. En cas de doute, demandez confirmation écrite à votre préfecture.",
    },
    {
      question: "Je me suis inscrit à l'examen alors que je n'étais pas concerné. Puis-je être remboursé ?",
      reponse: "Contactez rapidement le centre agréé auprès duquel vous vous êtes inscrit (CCI Paris Île-de-France ou France Éducation International). Les conditions d'annulation et de remboursement sont fixées par chaque centre et dépendent du délai restant avant la session : il n'existe pas de règle nationale. Prévenez le plus tôt possible.",
    },
    {
      question: "Un renouvellement de passeport talent nécessite-t-il l'examen civique ?",
      reponse: "Non, à double titre : le passeport talent est dispensé de contrat d'intégration républicaine, et les renouvellements ne sont de toute façon jamais concernés par l'examen civique, qui ne vise que les premières demandes.",
    },
  ],
  sources: [
    {
      titre: "Service-Public : Carte de séjour pluriannuelle et carte de résident : comment passer l'examen civique ?",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530?lang=fr",
      type: "officiel",
      description: "Fiche officielle précisant que seules sont concernées les premières cartes de séjour pluriannuelles soumises au contrat d'intégration républicaine, et que les renouvellements en sont exclus.",
    },
    {
      titre: "Ministère de l'Intérieur : Informations générales sur l'examen civique",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      description: "Portail officiel : format de l'épreuve, opérateurs agréés CCIP et FEI, validité illimitée de l'attestation.",
    },
    {
      titre: "Préfecture de Vaucluse : Le contrat d'intégration républicaine",
      url: "https://www.vaucluse.gouv.fr/Demarches/Immigration/Examen-civique-niveau-de-langue-CIR-attestations/Le-contrat-d-integration-republicaine",
      type: "officiel",
      description: "Présentation préfectorale du CIR et des catégories dispensées au titre de l'article L. 413-5 du CESEDA.",
    },
    {
      titre: "Légifrance : Décret n° 2025-648 du 15 juillet 2025",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051925434",
      type: "juridique",
      description: "Texte instituant l'examen civique, applicable aux demandes déposées à compter du 1er janvier 2026.",
    },
    {
      titre: "Ministère de l'Intérieur : L'examen civique pour demander un titre de séjour",
      url: "https://www.immigration.interieur.gouv.fr/limmigration-en-france/sejour-des-etrangers/lexamen-civique-pour-demander-titre-de-sejour",
      type: "officiel",
      description: "Page de la Direction générale des étrangers en France sur le champ d'application de l'obligation.",
    },
  ],
};

export default article;
