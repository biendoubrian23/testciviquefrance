import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-algeriens-examen-civique-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/algeriens-examen-civique-2026-accord-1968-dispense-sejour-mais-pas-naturalisation`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "algeriens-examen-civique-2026-accord-1968-dispense-sejour-mais-pas-naturalisation",
  titre: "Algériens et examen civique 2026 : ce que dit vraiment l'accord de 1968",
  titreSeo: "Algériens et examen civique 2026 : ce que dit vraiment l'accord de 1968",
  resume: "« Les Algériens sont dispensés de l'examen civique » : vrai pour le certificat de résidence, faux pour la naturalisation. Le raisonnement juridique complet de l'accord du 27 décembre 1968, pourquoi le code civil change tout, et pourquoi Marocains et Tunisiens relèvent d'un régime opposé.",
  chapo: "Depuis janvier 2026, une phrase circule dans les groupes WhatsApp, les forums et les files d'attente de préfecture : **« Nous les Algériens, on est dispensés de l'examen civique. »**",
  publieLe: "2026-08-24",
  modifieLe: "2026-08-24",
  minutes: 11,
  theme: "examen civique algérien",
  motsCles: [
    "examen civique algérien",
    "algériens examen civique 2026",
    "accord franco-algérien 1968 examen civique",
    "certificat de résidence algérien examen civique",
    "dispense examen civique algérien",
    "naturalisation algérien examen civique",
    "examen civique marocain tunisien",
    "accord 1968 dispense",
    "algérien naturalisation française 2026",
    "B2 naturalisation algérien",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1568992687947-868a62a9f521",
  },
  blocs: [
    { type: "p", texte: "C'est vrai. Et c'est faux." },
    {
      type: "p",
      texte: "C'est **vrai pour le titre de séjour** : l'accord franco-algérien du 27 décembre 1968 crée un régime juridique à part, qui ne prévoit pas l'examen civique. Un ressortissant algérien qui demande ou renouvelle son certificat de résidence n'a pas à le passer.",
    },
    {
      type: "p",
      texte: "C'est **faux pour la naturalisation**. Et c'est là que des dossiers se font recaler chaque mois. La demande de nationalité française ne relève pas de l'accord de 1968 : elle relève du **code civil**. Un Algérien qui veut devenir Français doit **réussir l'examen civique** : et justifier du **niveau B2** : exactement comme tout le monde.",
    },
    {
      type: "p",
      texte: "Cette distinction n'a rien d'un détail technique. C'est la différence entre un dossier instruit et un dossier déclaré incomplet, avec plusieurs mois perdus à la clé. Cet article explique **pourquoi** la règle est ainsi, et **ce que vous devez faire** selon votre situation.",
    },
    {
      type: "encadre",
      texte: "⚡ **La règle en une phrase :** l'accord de 1968 vous dispense de l'examen civique **pour votre certificat de résidence**, jamais **pour la nationalité française**.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "La règle en bref : deux procédures, deux réponses opposées",
      id: "regle-en-bref",
    },
    { type: "p", texte: "Avant d'entrer dans le raisonnement juridique, voici la réponse pratique." },
    {
      type: "tableau",
      entetes: ["Votre démarche", "Examen civique", "Niveau de français exigé"],
      lignes: [
        [
          "🪪 **Certificat de résidence algérien** (1 an, 10 ans, renouvellement)",
          "❌ **Non exigé**",
          "Non exigé au titre de l'examen",
        ],
        ["🇫🇷 **Naturalisation par décret**", "✅ **Obligatoire** (32/40)", "**B2**"],
        ["💍 **Déclaration de nationalité par mariage**", "✅ **Obligatoire** (32/40)", "**B2**"],
      ],
    },
    {
      type: "p",
      texte: "**Pourquoi cette asymétrie ?** Parce que ces deux démarches ne relèvent pas du même corps de règles :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le **séjour** des Algériens est régi par un **accord bilatéral** : un texte international qui prime sur le droit commun des étrangers ;",
        "La **nationalité** est régie par le **code civil français** : un texte de droit interne, auquel aucun accord bilatéral sur la circulation et le séjour ne fait échapper.",
      ],
    },
    { type: "p", texte: "Les deux sections suivantes détaillent chacun de ces deux régimes." },
    {
      type: "encadre",
      texte: "💡 **Le test simple :** demandez-vous si votre démarche vise **un titre pour rester en France** (régime de l'accord de 1968 → dispensé) ou **la nationalité française** (code civil → examen obligatoire).",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Pourquoi les Algériens sont dispensés pour le séjour : le régime autonome de 1968",
      id: "pourquoi-dispense-sejour",
    },
    {
      type: "p",
      texte: "L'explication tient à la nature très particulière de l'accord franco-algérien.",
    },
    { type: "p", texte: "**Un régime entièrement séparé du droit commun**" },
    {
      type: "p",
      texte: "L'**accord franco-algérien du 27 décembre 1968**, modifié par trois avenants successifs en **1985, 1994 et 2001**, régit la circulation, l'emploi et le séjour des ressortissants algériens et de leurs familles. Ce n'est pas un aménagement du droit commun : c'est un **régime autonome**, complet et parallèle au CESEDA (le code de l'entrée et du séjour des étrangers et du droit d'asile).",
    },
    {
      type: "p",
      texte: "Conséquence visible pour tout Algérien vivant en France : vous ne détenez pas une « carte de séjour » mais un **certificat de résidence algérien (CRA)**, avec ses propres catégories, ses propres durées et ses propres conditions.",
    },
    { type: "p", texte: "**Le principe juridique décisif**" },
    {
      type: "p",
      texte: "La jurisprudence administrative est constante sur ce point : **les dispositions du CESEDA ne s'appliquent aux ressortissants algériens que si l'accord de 1968 le prévoit expressément.** Là où l'accord est muet, le droit commun ne vient pas combler le silence, sauf pour les règles de pure procédure.",
    },
    { type: "p", texte: "**Appliquons ce principe à l'examen civique :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "L'examen civique a été institué par le **décret n° 2025-648 du 15 juillet 2025**, qui modifie le **CESEDA** ;",
        "L'accord de 1968 **ne mentionne nulle part** l'examen civique, et pour cause, il lui est antérieur de plus d'un demi-siècle ;",
        "Aucun avenant n'a introduit cette condition dans l'accord ;",
        "**Donc l'obligation n'est pas opposable** aux Algériens pour la délivrance de leur certificat de résidence.",
      ],
    },
    {
      type: "p",
      texte: "Le même raisonnement vaut pour l'exigence de niveau de langue au titre du séjour : elle ne figure pas dans l'accord, elle ne s'impose donc pas aux Algériens dans ce cadre.",
    },
    {
      type: "encadre",
      texte: "📌 **Ce n'est pas une faveur, c'est une hiérarchie des normes.** Un accord international ratifié prime sur la loi interne. Tant que l'accord de 1968 n'est pas modifié, les conditions ajoutées au CESEDA ne s'étendent pas automatiquement aux Algériens.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Pourquoi l'examen reste obligatoire pour la naturalisation",
      id: "pourquoi-obligatoire-naturalisation",
    },
    {
      type: "p",
      texte: "Le raisonnement précédent, appliqué à la nationalité, produit exactement le résultat inverse.",
    },
    { type: "p", texte: "**L'accord de 1968 ne parle pas de nationalité**" },
    {
      type: "p",
      texte: "Lisez son objet : il régit **la circulation, l'emploi et le séjour** des Algériens en France. Il ne traite **pas** de l'acquisition de la nationalité française. Ce champ lui est étranger.",
    },
    { type: "p", texte: "**La nationalité relève du code civil**" },
    {
      type: "p",
      texte: "L'acquisition de la nationalité française : par décret ou par déclaration à raison du mariage, est régie par le **code civil**. Ce corpus s'applique **uniformément à tous les postulants**, sans distinction de nationalité d'origine et sans dérogation liée à un accord de séjour.",
    },
    {
      type: "p",
      texte: "**Résultat concret :** depuis le **1er janvier 2026**, tout candidat algérien à la naturalisation doit satisfaire aux mêmes conditions que les autres :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "✅ **Réussir l'examen civique** : 40 questions (28 de connaissance + 12 mises en situation), 45 minutes, **32 bonnes réponses sur 40** ;",
        "✅ **Justifier du niveau B2** en français, relevé depuis le B1 par le décret du 15 juillet 2025, avec un certificat (DELF, TCF, TEF) **daté de moins de deux ans** au dépôt.",
      ],
    },
    { type: "p", texte: "**L'erreur qui coûte des mois**" },
    {
      type: "p",
      texte: "Le scénario est presque toujours identique. Une personne algérienne obtient ou renouvelle son certificat de résidence sans qu'on lui demande jamais d'examen civique. Elle en déduit, logiquement, qu'elle en est dispensée. Quelques années plus tard, elle dépose son dossier de naturalisation **sans attestation**. Le dossier est déclaré **incomplet**.",
    },
    {
      type: "p",
      texte: "Sur une procédure de naturalisation dont les délais se comptent déjà en mois, ajouter le temps d'obtenir un créneau d'examen (souvent **4 à 8 semaines**) puis de le repasser en cas d'échec, c'est un retard considérable et parfaitement évitable.",
    },
    {
      type: "p",
      texte: "Notre guide [Naturalisation française 2026 : délais, conditions et pièges du dossier](/articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet) recense les autres motifs d'incomplétude, et [Naturalisation refusée : raisons et recours](/articles/naturalisation-francaise-refusee-2026-raisons-cachees-contester-recours) traite des suites d'une décision défavorable.",
    },
    {
      type: "encadre",
      texte: "🚨 **Si vous visez la nationalité française : anticipez l'examen civique dès aujourd'hui.** Ne l'abordez pas au moment du dépôt. Entre l'inscription, le créneau et une éventuelle seconde tentative, comptez plusieurs mois.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Marocains et Tunisiens : attention, le régime est différent",
      id: "maroc-tunisie-regime-inverse",
    },
    {
      type: "p",
      texte: "Autre confusion très répandue : croire que les ressortissants du Maghreb partagent le même statut. **Ce n'est pas le cas.**",
    },
    { type: "p", texte: "**🇲🇦 La convention franco-marocaine du 9 octobre 1987**" },
    {
      type: "p",
      texte: "Elle encadre certains aspects du séjour des Marocains en France, mais **ne crée pas de régime autonome** et **n'exempte pas** des obligations du CESEDA. Les ressortissants marocains sont donc **pleinement soumis à l'examen civique** pour leurs demandes de carte de séjour pluriannuelle et de carte de résident.",
    },
    { type: "p", texte: "**🇹🇳 La convention franco-tunisienne du 17 mars 1988**" },
    {
      type: "p",
      texte: "Même logique : elle ne fait pas obstacle à l'application du droit commun. **L'examen civique est obligatoire** pour les Tunisiens comme pour la généralité des ressortissants non européens.",
    },
    { type: "p", texte: "**Le tableau à retenir :**" },
    {
      type: "tableau",
      entetes: ["Titre de séjour", "Naturalisation"],
      lignes: [
        ["🇩🇿 **Algériens** : accord du 27/12/1968", "✅ **Dispensés**", "❌ Examen obligatoire"],
        [
          "🇲🇦 **Marocains** : convention du 09/10/1987",
          "❌ Examen obligatoire",
          "❌ Examen obligatoire",
        ],
        [
          "🇹🇳 **Tunisiens** : convention du 17/03/1988",
          "❌ Examen obligatoire",
          "❌ Examen obligatoire",
        ],
      ],
    },
    {
      type: "p",
      texte: "**Pourquoi cette différence ?** Parce que l'accord algérien de 1968 est le seul des trois à instituer un **système parallèle et complet** au CESEDA. Les conventions marocaine et tunisienne sont des textes de portée plus limitée, qui aménagent certains points sans écarter l'application du droit commun.",
    },
    {
      type: "p",
      texte: "**La seule ligne où les trois se rejoignent : la naturalisation.** Algériens, Marocains, Tunisiens, comme tous les autres candidats, doivent réussir l'examen civique et justifier du B2.",
    },
    {
      type: "p",
      texte: "Pour approfondir les démarches propres au Maghreb, voir [Circulaire d'avril 2026 : naturalisation et Maghreb](/articles/circulaire-avril-2026-naturalisation-maghreb-maroc-algerie-tunisie) et [Double nationalité franco-marocaine 2026](/articles/double-nationalite-franco-marocaine-2026-test-civique-demarches).",
    },
    {
      type: "h2",
      texte: "L'accord de 1968 en 2026 : un régime discuté, à surveiller",
      id: "accord-1968-renegociation",
    },
    { type: "p", texte: "Un point d'actualité qui conditionne la durée de vie de cette dispense." },
    {
      type: "p",
      texte: "L'accord franco-algérien de 1968 fait l'objet de **débats politiques récurrents**, et sa renégociation, voire sa dénonciation, revient régulièrement dans le débat public français. Le sujet est de nouveau d'actualité en 2026.",
    },
    { type: "p", texte: "**Ce que cela signifie concrètement pour vous :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "⏳ **Aujourd'hui, l'accord s'applique.** Tant qu'il est en vigueur et non modifié sur ce point, la dispense d'examen civique pour le certificat de résidence reste acquise.",
        "🔄 **Une modification changerait la donne.** Si un nouvel avenant alignait le régime algérien sur le droit commun, l'examen civique deviendrait exigible pour les certificats de résidence, vraisemblablement pour les demandes déposées après l'entrée en vigueur du texte, comme cela a été le cas pour la réforme de 2026.",
        "📌 **La naturalisation, elle, ne bougera pas.** Elle est déjà soumise au droit commun : aucune évolution de l'accord ne peut la rendre plus exigeante qu'elle ne l'est aujourd'hui sur ce point.",
      ],
    },
    {
      type: "p",
      texte: "**Le conseil pratique qui en découle :** si vous envisagez à terme la nationalité française, **passer l'examen civique dès maintenant** est un placement sûr. L'attestation **n'a pas de durée de validité** : une fois obtenue, elle est acquise définitivement. Vous sécurisez votre futur dossier de naturalisation, et vous êtes couvert si le régime du séjour venait à évoluer.",
    },
    {
      type: "encadre",
      texte: "🛡️ **L'argument décisif :** une attestation obtenue aujourd'hui ne périme jamais. Dans un contexte où le cadre juridique bouge, c'est la seule pièce de votre dossier dont vous êtes certain qu'elle restera valable.",
      ton: "bleu",
    },
    { type: "h2", texte: "Que faire concrètement, selon votre situation", id: "que-faire-concretement" },
    { type: "p", texte: "**Cas 1 : Vous demandez ou renouvelez votre certificat de résidence** 🪪" },
    {
      type: "p",
      texte: "Vous n'avez pas à passer l'examen civique. Constituez votre dossier selon les règles de l'accord de 1968. Si un agent vous réclame malgré tout une attestation d'examen civique, demandez **par écrit** le fondement juridique de cette exigence : l'accord de 1968 ne la prévoit pas. Gardez une trace de l'échange.",
    },
    { type: "p", texte: "**Cas 2 : Vous envisagez la naturalisation à moyen terme** 🇫🇷" },
    {
      type: "p",
      texte: "**Passez l'examen civique maintenant, sans attendre.** Deux raisons : l'attestation ne périme pas, et les créneaux se réservent 4 à 8 semaines à l'avance auprès des deux seuls opérateurs agréés (CCIP et FEI). Anticipez également votre **certificat de langue B2** : il doit, lui, dater de **moins de deux ans** au moment du dépôt, donc ne le passez pas trop tôt.",
    },
    {
      type: "p",
      texte: "**Cas 3 : Vous déposez un dossier de naturalisation dans les prochains mois** ⏰",
    },
    {
      type: "p",
      texte: "Votre priorité absolue est l'attestation d'examen civique. Inscrivez-vous **cette semaine** : entre le délai de créneau et le risque d'une seconde tentative, c'est la pièce la plus longue à obtenir de tout votre dossier.",
    },
    { type: "p", texte: "**Cas 4 : Vous avez déjà déposé sans attestation** 📄" },
    {
      type: "p",
      texte: "Ne restez pas passif. Inscrivez-vous immédiatement à la prochaine session et informez la préfecture **par écrit** que la démarche est engagée, preuve d'inscription à l'appui. Une trace écrite datée vaut mieux qu'une régularisation tardive et non documentée.",
    },
    { type: "p", texte: "**Par où commencer, dans tous les cas :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "🎯 **Évaluez votre niveau réel** avec notre [test civique gratuit en conditions réelles](/articles/test-civique-gratuit-en-ligne-2026-examen-blanc-entrainement-qcm) : 40 questions, 45 minutes, seuil à 80 %.",
        "📚 **Ciblez le bon thème.** Sur **3 208 sessions d'entraînement** analysées sur notre plateforme, « Principes et valeurs de la République » est le seul thème dont le score moyen (**76,8 %**) tombe **sous le seuil de réussite** : **39,8 %** des candidats y échouent. Commencez par là.",
        "📅 **Inscrivez-vous tôt** : voir notre [guide d'inscription](/articles/inscription-test-civique-2026-ou-quand-comment-sinscrire) et la [liste des centres agréés](/articles/nouveaux-centres-test-civique-mai-2026-liste-complete).",
      ],
    },
    {
      type: "encadre",
      texte: "⚖️ **En cas de désaccord avec l'administration**, faites-vous accompagner. Les associations spécialisées en droit des étrangers et les avocats du barreau peuvent vous aider à faire valoir le régime de l'accord de 1968, qui reste mal connu de certains guichets.",
      ton: "bleu",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Retenez la ligne de partage, elle est nette : **l'accord franco-algérien du 27 décembre 1968 vous dispense de l'examen civique pour votre certificat de résidence, jamais pour la nationalité française.**\nLe raisonnement est simple une fois posé. Le **séjour** des Algériens relève d'un accord international qui crée un régime autonome, dans lequel le CESEDA ne s'applique que s'il y est expressément renvoyé, et l'examen civique, institué en 2025, n'y figure pas. La **nationalité**, elle, relève du **code civil**, qui s'applique à tous sans dérogation bilatérale.\nNe généralisez pas non plus au reste du Maghreb : **Marocains et Tunisiens sont pleinement soumis à l'examen civique**, y compris pour leurs titres de séjour. Les conventions de 1987 et 1988 ne créent pas de régime autonome.\nEnfin, si la nationalité française figure dans vos projets, **ne remettez pas l'examen à plus tard**. L'attestation n'a pas de date de péremption : obtenue aujourd'hui, elle vaudra encore dans cinq ans. Dans un contexte où l'accord de 1968 fait l'objet de discussions régulières, c'est la seule pièce de votre dossier dont vous êtes certain qu'elle ne bougera pas.\n👉 **Testez votre niveau maintenant** avec nos [40 questions gratuites en conditions réelles](/articles/test-civique-gratuit-en-ligne-2026-examen-blanc-entrainement-qcm). En 45 minutes, vous saurez si l'examen est une formalité ou un chantier.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Les Algériens doivent-ils passer l'examen civique pour leur titre de séjour ?",
      reponse: "Non. L'accord franco-algérien du 27 décembre 1968 crée un régime autonome, séparé du CESEDA : les Algériens reçoivent un certificat de résidence et non une carte de séjour de droit commun. Les dispositions du CESEDA ne leur sont applicables que si l'accord le prévoit expressément, or l'accord ne mentionne pas l'examen civique. L'obligation ne leur est donc pas opposable pour le séjour.",
    },
    {
      question: "Les Algériens doivent-ils passer l'examen civique pour la naturalisation ?",
      reponse: "Oui, sans exception. L'accord de 1968 régit la circulation, l'emploi et le séjour, pas la nationalité. L'acquisition de la nationalité française relève du code civil, qui s'applique uniformément à tous les postulants. Depuis le 1er janvier 2026, tout candidat algérien doit réussir l'examen civique (32/40) et justifier du niveau B2.",
    },
    {
      question: "Les Marocains et les Tunisiens sont-ils aussi dispensés ?",
      reponse: "Non. La convention franco-marocaine du 9 octobre 1987 et la convention franco-tunisienne du 17 mars 1988 ne créent pas de régime autonome et n'exemptent pas des obligations du CESEDA. Marocains et Tunisiens sont pleinement soumis à l'examen civique, aussi bien pour le titre de séjour que pour la naturalisation. Seul l'accord algérien de 1968 institue un système parallèle complet.",
    },
    {
      question: "Quel niveau de français est exigé d'un Algérien pour la naturalisation ?",
      reponse: "Le niveau B2, comme pour tous les candidats depuis le 1er janvier 2026 (contre B1 auparavant). Il faut produire un certificat officiel, DELF B2, TCF ou TEF, daté de moins de deux ans au moment du dépôt de la demande. Ne le passez donc pas trop en avance.",
    },
    {
      question: "La préfecture me réclame une attestation d'examen civique pour mon certificat de résidence. Que faire ?",
      reponse: "Demandez par écrit le fondement juridique de cette exigence : l'accord de 1968 ne prévoit pas l'examen civique pour le certificat de résidence. Conservez une trace de l'échange. Si la difficulté persiste, faites-vous accompagner par une association spécialisée en droit des étrangers ou un avocat, ce régime particulier reste mal connu de certains guichets.",
    },
    {
      question: "L'accord de 1968 peut-il être modifié et me faire perdre cette dispense ?",
      reponse: "C'est possible : l'accord fait l'objet de débats et de projets de renégociation récurrents, de nouveau d'actualité en 2026. Une modification pourrait aligner le régime algérien sur le droit commun, vraisemblablement pour les demandes déposées après l'entrée en vigueur du nouveau texte. C'est une raison de plus de passer l'examen civique dès maintenant si vous visez la nationalité : l'attestation n'a pas de durée de validité et reste acquise définitivement.",
    },
  ],
  sources: [
    {
      titre: "Ministère de l'Intérieur : Informations générales sur l'examen civique",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      description: "Portail officiel : format de l'examen (28 questions de connaissance et 12 mises en situation, 45 minutes, 32/40), opérateurs agréés CCIP et FEI, validité illimitée de l'attestation, dispenses liées aux accords bilatéraux.",
    },
    {
      titre: "Service-Public : Carte de séjour pluriannuelle et carte de résident : comment passer l'examen civique ?",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530?lang=fr",
      type: "officiel",
      description: "Fiche officielle sur le public concerné par l'examen civique et les cas de dispense.",
    },
    {
      titre: "Ministère de l'Intérieur : L'examen civique pour demander un titre de séjour",
      url: "https://www.immigration.interieur.gouv.fr/limmigration-en-france/sejour-des-etrangers/lexamen-civique-pour-demander-titre-de-sejour",
      type: "officiel",
      description: "Page de la Direction générale des étrangers en France sur le champ d'application de l'obligation d'examen civique.",
    },
    {
      titre: "Légifrance : Décret n° 2025-648 du 15 juillet 2025",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051925434",
      type: "juridique",
      description: "Texte instituant l'examen civique et relevant l'exigence linguistique au niveau B2, applicable aux demandes déposées à compter du 1er janvier 2026.",
    },
    {
      titre: "Ministère de l'Intérieur : Communiqué : l'examen civique nécessaire à partir du 1er janvier 2026",
      url: "https://www.interieur.gouv.fr/actualites/communiques-de-presse/a-partir-du-1er-janvier-2026-reussite-a-lexamen-civique-sera-necessaire-pour-obtenir-carte-de-sejour",
      type: "officiel",
      description: "Communiqué officiel sur l'entrée en vigueur de l'obligation pour la carte de séjour pluriannuelle, la carte de résident et la naturalisation.",
    },
  ],
};

export default article;
