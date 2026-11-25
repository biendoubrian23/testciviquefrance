import type { Article } from "@/contenu/articles";

/**
 * Publié par le robot éditorial le 25/11/2026. Actualité parlementaire (pas de
 * texte au Journal officiel) : l'amendement n° I-332 rect. ter au projet de loi
 * de finances pour 2027, déposé au Sénat le 20/11/2026, lu sur senat.fr le
 * 25/11 (encore dans la liste des amendements restant à discuter ce jour-là).
 * Montants actuels lus le 25/11 sur Légifrance (CESEDA, L. 436-1 et L. 436-7)
 * et sur service-public (A18881, F2213).
 */
const article: Article = {
  slug: "timbre-naturalisation-1000-euros-senat",
  titre: "Timbre de naturalisation à 1 000 € et titres de séjour doublés : ce que prévoit l'amendement examiné au Sénat",
  titreSeo: "Timbre naturalisation 1 000 € : rien n'est voté",
  resume: "Un amendement au Sénat propose un timbre de naturalisation à 1 000 € et des taxes de séjour doublées en 2027. Rien n'est voté : ce que cela changerait.",
  chapo: "Un amendement déposé au Sénat le 20 novembre 2026 propose de porter le timbre de naturalisation de 255 € à ==1 000 €==. Il propose aussi de doubler les taxes des titres de séjour, à partir du 1er janvier 2027. ==Rien n'est voté== : le 25 novembre, le Sénat ne l'avait pas encore examiné. Aujourd'hui, les montants en vigueur restent ceux de mai 2026.",
  publieLe: "2026-11-25",
  modifieLe: "2026-11-25",
  minutes: 6,
  theme: "Timbre de naturalisation et taxes de séjour : l'amendement du Sénat",
  motsCles: [
    "timbre fiscal naturalisation",
    "timbre naturalisation 1000 euros",
    "timbre fiscal titre de séjour 2027",
    "hausse timbre fiscal titre de séjour",
    "amendement sénat naturalisation",
    "taxe titre de séjour 2027",
  ],
  rubrique: "actualites",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/timbre-naturalisation-senat.webp",
    alt: "Façade du palais du Luxembourg, siège du Sénat à Paris, vue depuis le bassin du jardin",
    largeur: 1200,
    hauteur: 694,
    credit: "Moonik, via Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Facade_of_Palais_du_Luxembourg,_Paris_6th_007.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Que propose cet amendement ?",
    },
    {
      type: "p",
      texte: "Chaque automne, le Parlement vote le budget de l'État de l'année suivante : c'est la loi de finances. Les sénateurs peuvent proposer d'y ajouter des règles. Une proposition de modification d'un texte s'appelle un amendement. L'[amendement n° I-332 rect. ter](https://www.senat.fr/amendements/2026-2027/155/Amdt_I-332.html), déposé le 20 novembre 2026 par M. Retailleau, M. Darnaud et d'autres sénateurs, prévoit deux mesures :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**le doublement** des taxes et du droit de timbre payés pour un titre de séjour, la carte qui autorise un étranger à vivre en France ;",
        "**le passage de 255 € à 1 000 €** du droit de timbre d'une demande de naturalisation, la demande pour devenir français.",
      ],
    },
    {
      type: "p",
      texte: "Le texte fixe une entrée en vigueur au ==1er janvier 2027==. Sur la page du Sénat, l'amendement porte un avis « Favorable » de la commission des finances, le groupe de sénateurs qui prépare l'examen du budget. Cet avis n'est pas un vote.",
    },
    {
      type: "citation",
      texte: "Il apparaît légitime que les bénéficiaires de ces démarches contribuent davantage à leur financement.",
      source: "Objet de l'amendement n° I-332 rect. ter, Sénat, 20 novembre 2026",
    },
    {
      type: "p",
      texte: "Les auteurs évaluent le gain pour l'État à 350 millions d'euros par an. C'est leur estimation, écrite dans l'amendement.",
    },
    {
      type: "h2",
      texte: "Combien coûterait un titre de séjour si l'amendement était adopté ?",
    },
    {
      type: "p",
      texte: "Le prix d'un titre de séjour additionne deux sommes. La première est une taxe, fixée par l'article L. 436-1 du CESEDA. Le CESEDA, c'est le code qui regroupe les règles sur le séjour des étrangers. La seconde est un droit de timbre de 50 €, fixé par l'article L. 436-7 ([Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042772038/)). L'amendement double les deux.",
    },
    {
      type: "tableau",
      entetes: ["Démarche", "Aujourd'hui (depuis le 1er mai 2026)", "Si l'amendement devenait loi"],
      lignes: [
        ["Premier titre, tarif normal", "300 € + 50 € = **350 €**", "600 € + 100 € = **700 €**"],
        ["Premier titre, tarif minoré", "100 € + 50 € = **150 €**", "200 € + 100 € = **300 €**"],
        ["Renouvellement, tarif normal", "200 € + 50 € = **250 €**", "400 € + 100 € = **500 €**"],
        ["Renouvellement, tarif minoré", "50 € + 50 € = **100 €**", "100 € + 100 € = **200 €**"],
        ["Autorisation provisoire de séjour (APS)", "**100 €**", "**200 €**"],
        ["Naturalisation (droit de timbre)", "**255 €**", "**1 000 €**"],
      ],
      legende: "Montants actuels : CESEDA L. 436-1 et L. 436-7 (Légifrance) et service-public A18881, lus le 25/11/2026. Montants proposés : amendement n° I-332 rect. ter, lu le 25/11/2026.",
    },
    {
      type: "p",
      texte: "Le tarif minoré vaut pour certaines cartes : par exemple celles des étudiants, des travailleurs saisonniers ou des personnes venues par regroupement familial ([service-public, A18881](https://www.service-public.gouv.fr/particuliers/actualites/A18881)). L'autorisation provisoire de séjour (APS) est un document de séjour de courte durée, délivré dans des cas précis. Le timbre de 50 € dû pour un duplicata ou un changement de carte passerait aussi à 100 €.",
    },
    {
      type: "p",
      texte: "L'amendement ne change pas le droit de visa de régularisation (300 €), ni la taxe du visa long séjour qui vaut titre de séjour (VLS-TS). Pour la Guyane, où le timbre de naturalisation est aujourd'hui de 127,50 € (A18881), le texte ne donne pas de montant à part.",
    },
    {
      type: "h2",
      texte: "Est-ce que ça change quelque chose aujourd'hui ?",
    },
    {
      type: "p",
      texte: "==Non.== Un amendement n'est qu'une proposition. Le 25 novembre 2026, il figurait encore dans la liste des amendements que le Sénat devait discuter. Même s'il est adopté par le Sénat, il devra rester dans le texte final de la loi de finances, votée par l'Assemblée nationale et le Sénat. La loi ne s'applique qu'après sa publication au Journal officiel (le journal où l'État publie ses lois).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Aujourd'hui, un premier titre de séjour coûte 350 € au tarif normal, un renouvellement 250 €, et le timbre de naturalisation 255 €. Ces montants ne changeront que si une loi publiée au Journal officiel le prévoit.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Faut-il déposer votre dossier de naturalisation avant le 1er janvier ?",
    },
    {
      type: "p",
      texte: "Pour la naturalisation, le timbre fiscal est une des pièces du dossier : il se paie au moment du dépôt ([service-public, F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)). Mais l'amendement ne dit rien des demandes déjà déposées ou en cours. Personne ne peut donc dire aujourd'hui quel montant s'appliquerait à quel dossier.",
    },
    {
      type: "p",
      texte: "Surtout, ne déposez pas un dossier incomplet pour aller plus vite. Un dossier auquel il manque une condition est déclaré irrecevable. Il faut notamment le niveau de français B2 et la réussite à l'examen civique. Nous expliquons [les 7 erreurs qui font refuser une naturalisation](/articles/refus-naturalisation-7-erreurs-90-pourcent-candidats), et [que faire après un refus](/articles/naturalisation-francaise-refusee-2026-raisons-cachees-contester-recours).",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Vérifiez que vous remplissez toutes les conditions avant de déposer.",
        "Passez l'examen civique et votre test de français B2 avant le dépôt.",
        "Achetez le timbre seulement sur timbres.impots.gouv.fr ou chez un buraliste agréé.",
        "Suivez la fin du vote du budget : nous mettrons cette page à jour.",
      ],
    },
    {
      type: "cta",
      texte: "Si vous préparez votre dossier, l'examen civique en fait partie. Sur Test Civique France, les examens blancs de 40 questions vous donnent votre score et la correction de chaque question. L'inscription est gratuite.",
    },
    {
      type: "h2",
      texte: "Et pour un titre de séjour en cours ?",
    },
    {
      type: "p",
      texte: "Pour un titre de séjour, vous ne payez pas au dépôt : vous recevez un SMS qui indique le montant quand la carte est prête (A18881). L'amendement ne précise pas ce qui se passerait pour une demande déposée avant le 1er janvier et remise après. Si la mesure est adoptée, service-public publiera les règles d'application. Le détail des montants actuels, cas par cas, est dans [notre article sur le timbre fiscal du titre de séjour](/articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances). Et le budget complet d'une naturalisation est dans [notre article sur son coût](/articles/cout-naturalisation-francaise-2026-budget-complet-timbre-fiscal).",
    },
    {
      type: "p",
      texte: "Vous ne savez pas si l'examen civique vous concerne pour votre prochain titre ? [Vérifiez-le en une minute](/eligibilite-examen-civique).",
    },
  ],
  faq: [
    {
      question: "Le timbre fiscal de naturalisation passe-t-il à 1 000 euros ?",
      reponse: "Pas aujourd'hui. Un amendement déposé au Sénat le 20 novembre 2026 propose de passer de 255 € à 1 000 € au 1er janvier 2027. Ce n'est qu'une proposition : elle doit être adoptée, rester dans la loi de finances votée par le Parlement, puis être publiée au Journal officiel. Le montant en vigueur reste 255 €.",
    },
    {
      question: "Quel est le prix du timbre fiscal pour une naturalisation ?",
      reponse: "Depuis le 1er mai 2026, le droit de timbre d'une demande de naturalisation est de 255 €, et de 127,50 € en Guyane, selon service-public. Il se paie au dépôt du dossier, sur timbres.impots.gouv.fr ou chez un buraliste. Un amendement au budget 2027 propose 1 000 €, mais il n'est pas adopté.",
    },
    {
      question: "Le prix du titre de séjour va-t-il doubler en 2027 ?",
      reponse: "C'est ce que propose un amendement au Sénat : 700 € au lieu de 350 € pour un premier titre au tarif normal, 500 € au lieu de 250 € pour un renouvellement. Rien n'est voté. Tant qu'aucune loi n'est publiée au Journal officiel, les montants de mai 2026 restent ceux qui s'appliquent.",
    },
  ],
  sources: [
    {
      titre: "Sénat : amendement n° I-332 rect. ter au projet de loi de finances pour 2027 (20 novembre 2026)",
      url: "https://www.senat.fr/amendements/2026-2027/155/Amdt_I-332.html",
      type: "officiel",
      luLe: "2026-11-25",
    },
    {
      titre: "Légifrance : CESEDA, articles L. 436-1 à L. 436-9 (taxes des titres de séjour)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042772038/",
      type: "juridique",
      luLe: "2026-11-25",
    },
    {
      titre: "Service-public.gouv.fr : titres de séjour, hausse des taxes au 1er mai 2026 (A18881), mise à jour le 12/05/2026",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
      type: "officiel",
      luLe: "2026-11-25",
    },
    {
      titre: "Service-public.gouv.fr : Naturalisation par décret (F2213), vérifiée le 16/07/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      luLe: "2026-11-25",
    },
  ],
};

export default article;
