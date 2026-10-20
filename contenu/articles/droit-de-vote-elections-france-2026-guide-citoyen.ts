import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-2026-part2.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/droit-de-vote-elections-france-2026-guide-citoyen`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "droit-de-vote-elections-france-2026-guide-citoyen",
  titre: "Droit de vote et élections en France 2026 : guide complet pour les nouveaux citoyens",
  titreSeo: "Droit de vote et élections en France 2026 : guide complet pour les nouveaux citoyens",
  resume: "Comprendre le système électoral français : types d'élections, inscription sur les listes, déroulement du scrutin, référendum et devoir civique. Tout ce qu'il faut savoir pour le test civique et pour exercer votre citoyenneté.",
  chapo: "Le **droit de vote** est l'un des droits fondamentaux du citoyen français et une thématique majeure du **test civique de naturalisation**. Pourtant, beaucoup de candidats et de nouveaux citoyens méconnaissent les rouages du système électoral français : comment s'inscrire sur les listes, quels sont les différents types d'élections, comment se déroule un scrutin, et quel est le rôle du citoyen dans la démocratie française. Ce guide complet vous donne toutes les clés pour **comprendre le système électoral**, **exercer votre droit de vote** et **réussir les questions du test civique** sur cette thématique essentielle.",
  publieLe: "2026-03-24",
  modifieLe: "2026-03-24",
  minutes: 18,
  theme: "droit de vote France",
  motsCles: [
    "droit de vote France",
    "élections France 2026",
    "système électoral français",
    "vote obligatoire France",
    "suffrage universel France",
    "élection présidentielle France",
    "élections législatives",
    "inscription listes électorales",
    "comment voter en France",
    "droit de vote naturalisation",
    "nouveau citoyen français vote",
    "élections municipales France",
    "élections européennes France",
    "référendum France",
    "suffrage direct indirect",
    "procuration vote France",
    "vote blanc France",
    "test civique droit de vote",
    "questions test civique élections",
    "devoir civique France",
    "abstention France",
    "577 députés",
    "348 sénateurs",
    "quinquennat",
    "droit de vote femmes 1944",
    "suffrage universel 1848",
    "LeTestCivique.fr",
    "préparation test civique",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c",
  },
  blocs: [
    {
      type: "h2",
      texte: "Le droit de vote en France : un pilier de la démocratie",
      id: "droit-vote-fondement",
    },
    {
      type: "p",
      texte: "Le droit de vote est un **droit fondamental** inscrit dans la **Constitution de la Ve République** (article 3). Il garantit la souveraineté du peuple français.",
    },
    { type: "p", texte: "**Les grands principes du suffrage en France :**" },
    { type: "p", texte: "**1. Le suffrage est universel**" },
    {
      type: "p",
      texte: "Tout citoyen français majeur (18 ans) dispose du droit de vote, sans distinction de sexe, de revenu, d'éducation ou d'origine. Ce n'a pas toujours été le cas :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**1848** : Suffrage universel masculin (abolition du suffrage censitaire)",
        "**1944** : Droit de vote des femmes (ordonnance du 21 avril 1944)",
        "**1974** : Abaissement de l'âge de vote de 21 à 18 ans",
        "**1992** : Droit de vote des citoyens européens aux élections municipales et européennes",
      ],
    },
    { type: "p", texte: "**2. Le vote est libre et secret**" },
    {
      type: "p",
      texte: "Chaque électeur vote dans un **isoloir** et place son bulletin dans une **enveloppe** avant de le déposer dans l'**urne**. Le vote est personnel : nul ne peut voter à votre place (sauf procuration).",
    },
    { type: "p", texte: "**3. Le vote n'est pas obligatoire en France**" },
    {
      type: "p",
      texte: "Contrairement à certains pays (Belgique, Luxembourg), le vote n'est **pas obligatoire** en France. C'est un **droit** et un **devoir civique**, mais l'abstention n'est pas sanctionnée par la loi.",
    },
    { type: "p", texte: "**4. Le vote est égalitaire**" },
    {
      type: "p",
      texte: "Chaque voix a la même valeur : **un citoyen = une voix**. Ce principe d'égalité est au cœur de la devise républicaine.",
    },
    {
      type: "p",
      texte: "→ **Pour le test civique** : Les questions sur le droit de vote portent souvent sur l'âge requis (18 ans), le caractère non obligatoire du vote, et les grandes dates du suffrage universel.",
    },
    { type: "h2", texte: "Les différents types d'élections en France", id: "types-elections" },
    {
      type: "p",
      texte: "La France organise **6 types d'élections** auxquelles les citoyens sont appelés à participer :",
    },
    { type: "p", texte: "**1. L'élection présidentielle** 🏛️" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Fréquence** : tous les 5 ans (quinquennat depuis 2000)",
        "**Mode de scrutin** : suffrage universel direct, à 2 tours",
        "**Qui élit-on ?** : Le Président de la République",
        "**Particularité** : Pour être élu au 1er tour, il faut obtenir la majorité absolue (> 50 %). Sinon, les 2 candidats arrivés en tête s'affrontent au 2e tour",
        "**Dernière** : 2022 → Prochaine : 2027",
      ],
    },
    { type: "p", texte: "**2. Les élections législatives** 📜" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Fréquence** : tous les 5 ans (après la présidentielle)",
        "**Mode de scrutin** : uninominal à 2 tours, par circonscription",
        "**Qui élit-on ?** : Les 577 députés de l'Assemblée nationale",
        "**Particularité** : Chaque département est divisé en circonscriptions. Chaque circonscription élit un député",
      ],
    },
    { type: "p", texte: "**3. Les élections sénatoriales** 🏛️" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Fréquence** : renouvellement par moitié tous les 3 ans",
        "**Mode de scrutin** : suffrage universel **indirect** (les sénateurs sont élus par les grands électeurs : maires, conseillers municipaux, etc.)",
        "**Qui élit-on ?** : Les 348 sénateurs",
        "**Particularité** : Le citoyen ordinaire ne vote **pas** directement pour les sénateurs",
      ],
    },
    { type: "p", texte: "**4. Les élections municipales** 🏘️" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Fréquence** : tous les 6 ans",
        "**Mode de scrutin** : scrutin de liste à 2 tours (communes > 1 000 hab.)",
        "**Qui élit-on ?** : Les conseillers municipaux (qui élisent ensuite le maire)",
        "**Particularité** : Les citoyens de l'UE résidant en France peuvent voter aux municipales",
      ],
    },
    { type: "p", texte: "**5. Les élections départementales** 🗺️" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Fréquence** : tous les 6 ans",
        "**Mode de scrutin** : binominal à 2 tours (un homme + une femme par canton)",
        "**Qui élit-on ?** : Les conseillers départementaux",
        "**Particularité** : Scrutin paritaire obligatoire",
      ],
    },
    { type: "p", texte: "**6. Les élections européennes** 🇪🇺" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Fréquence** : tous les 5 ans",
        "**Mode de scrutin** : proportionnel de liste, à un seul tour",
        "**Qui élit-on ?** : Les députés français au Parlement européen (81 sièges)",
        "**Particularité** : Les citoyens de l'UE résidant en France peuvent voter",
      ],
    },
    {
      type: "p",
      texte: "→ **Pour le test civique** : Connaître le nombre de députés (577), de sénateurs (348), la durée du mandat présidentiel (5 ans) et le mode de scrutin (direct/indirect) est essentiel.",
    },
    {
      type: "h2",
      texte: "Comment s'inscrire sur les listes électorales ?",
      id: "inscription-listes-electorales",
    },
    {
      type: "p",
      texte: "Pour voter, vous devez être **inscrit sur les listes électorales** de votre commune. Voici les démarches :",
    },
    { type: "p", texte: "**Qui peut s'inscrire ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Tout citoyen français de 18 ans ou plus",
        "Les citoyens européens résidant en France (pour les municipales et européennes uniquement)",
        "Les personnes naturalisées : dès réception du **décret de naturalisation**",
      ],
    },
    { type: "p", texte: "**Les 3 moyens de s'inscrire :**" },
    { type: "p", texte: "**1. En ligne sur Service-Public.fr**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Rendez-vous sur le site officiel service-public.fr",
        "Remplissez le formulaire d'inscription",
        "Joignez un justificatif d'identité et un justificatif de domicile",
        "Réponse par courrier ou par mail",
      ],
    },
    { type: "p", texte: "**2. En mairie**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Présentez-vous au guichet de votre mairie",
        "Apportez votre carte d'identité ou passeport + justificatif de domicile",
        "L'inscription est immédiate",
      ],
    },
    { type: "p", texte: "**3. Par courrier**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Envoyez le formulaire CERFA n° 12669 à la mairie de votre commune",
        "Joignez les photocopies de vos justificatifs",
      ],
    },
    { type: "p", texte: "**Dates limites d'inscription :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Inscription possible **toute l'année** depuis la réforme de 2019",
        "Pour voter à une élection, vous devez être inscrit au moins **6 semaines avant** le scrutin",
        "Les jeunes de 18 ans sont inscrits **automatiquement** grâce au recensement",
      ],
    },
    { type: "p", texte: "**Après naturalisation :**" },
    {
      type: "p",
      texte: "Si vous venez d'être naturalisé, vous êtes normalement inscrit d'office. Vérifiez toutefois auprès de votre mairie que vous figurez bien sur les listes.",
    },
    {
      type: "p",
      texte: "→ **Pour le test civique** : La question « Le vote est-il obligatoire en France ? » revient très souvent. La réponse est **non**, mais c'est un devoir civique fortement encouragé.",
    },
    {
      type: "h2",
      texte: "Comment se déroule un jour d'élection en France ?",
      id: "deroulement-scrutin",
    },
    {
      type: "p",
      texte: "Le jour du scrutin est un moment important de la vie démocratique. Voici son déroulement :",
    },
    { type: "p", texte: "**Avant le vote**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le scrutin a lieu le **dimanche**, de 8h à 18h (19h ou 20h dans les grandes villes)",
        "Vous recevez votre **carte électorale** par courrier (elle n'est pas obligatoire pour voter, mais recommandée)",
        "Les **professions de foi** et **bulletins de vote** des candidats sont envoyés à votre domicile",
      ],
    },
    { type: "p", texte: "**Le jour du vote : étape par étape**" },
    { type: "p", texte: "**1. Rendez-vous à votre bureau de vote**" },
    {
      type: "p",
      texte: "Votre bureau de vote est indiqué sur votre carte électorale. Présentez-vous avec une **pièce d'identité** (obligatoire dans les communes de 1 000 habitants et plus).",
    },
    { type: "p", texte: "**2. Prenez les bulletins de vote et une enveloppe**" },
    {
      type: "p",
      texte: "Sur la table à l'entrée du bureau, vous trouvez les bulletins de tous les candidats et les enveloppes officielles. Vous devez prendre **au moins deux bulletins** différents (pour garantir le secret du vote).",
    },
    { type: "p", texte: "**3. Passez dans l'isoloir**" },
    {
      type: "p",
      texte: "Le passage par l'isoloir est **obligatoire**. C'est là que vous glissez le bulletin de votre choix dans l'enveloppe, à l'abri des regards.",
    },
    { type: "p", texte: "**4. Votez**" },
    {
      type: "p",
      texte: "Présentez-vous devant l'urne. L'assesseur vérifie votre identité et vous annonce : « A voté ! ». Vous glissez votre enveloppe dans l'urne.",
    },
    { type: "p", texte: "**5. Signez**" },
    {
      type: "p",
      texte: "Émargez (signez) en face de votre nom sur la liste d'émargement. Cette signature prouve que vous avez voté.",
    },
    { type: "p", texte: "**Le dépouillement**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "À la fermeture du bureau, les assesseurs ouvrent l'urne et comptent les bulletins",
        "Le dépouillement est **public** : tout citoyen peut y assister",
        "Les résultats sont transmis à la préfecture",
      ],
    },
    { type: "p", texte: "**La procuration**" },
    {
      type: "p",
      texte: "Si vous ne pouvez pas vous déplacer, vous pouvez donner **procuration** à un autre électeur inscrit dans la même commune. La procuration se fait en ligne, au tribunal ou au commissariat/gendarmerie.",
    },
    { type: "h2", texte: "Le référendum : quand le peuple décide directement", id: "referendum" },
    {
      type: "p",
      texte: "En plus des élections, les citoyens français peuvent être consultés par **référendum**. C'est un outil de **démocratie directe** prévu par la Constitution.",
    },
    { type: "p", texte: "**Qu'est-ce qu'un référendum ?**" },
    {
      type: "p",
      texte: "Le référendum est une consultation populaire où les citoyens répondent par **OUI** ou **NON** à une question posée par le Président de la République ou le Parlement.",
    },
    { type: "p", texte: "**Les types de référendum en France :**" },
    { type: "p", texte: "**1. Référendum législatif (article 11 de la Constitution)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Organisé par le **Président de la République** sur proposition du Gouvernement ou du Parlement",
        "Porte sur un projet de loi relatif à l'organisation des pouvoirs publics, aux réformes économiques ou sociales, ou à la ratification d'un traité",
        "Exemple : Référendum sur le quinquennat (2000)",
      ],
    },
    { type: "p", texte: "**2. Référendum constituant (article 89)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Organisé pour modifier la **Constitution**",
        "Le projet de révision doit d'abord être voté dans les mêmes termes par l'Assemblée nationale et le Sénat",
      ],
    },
    { type: "p", texte: "**3. Référendum d'initiative partagée (article 11, alinéa 3)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Introduit par la réforme constitutionnelle de 2008",
        "Peut être déclenché par **1/5 des parlementaires** soutenu par **1/10 des électeurs inscrits** (environ 4,8 millions de signatures)",
        "N'a jamais été utilisé avec succès à ce jour",
      ],
    },
    { type: "p", texte: "**Les référendums historiques :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**1958** : Adoption de la Constitution de la Ve République (**79,2 % de OUI**)",
        "**1962** : Élection du Président au suffrage universel direct (**62,3 % de OUI**)",
        "**1992** : Ratification du Traité de Maastricht (**51,0 % de OUI**)",
        "**2000** : Passage au quinquennat (**73,2 % de OUI**)",
        "**2005** : Constitution européenne (**54,7 % de NON**)",
      ],
    },
    {
      type: "p",
      texte: "→ **Pour le test civique** : On peut vous demander ce qu'est un référendum, qui peut l'organiser, et citer un exemple historique. Le référendum de 1958 et celui de 2000 sont les plus fréquemment cités.",
    },
    {
      type: "h2",
      texte: "Le vote comme devoir civique : comprendre l'abstention et l'engagement",
      id: "devoir-civique-abstention",
    },
    {
      type: "p",
      texte: "Si le vote n'est pas obligatoire en France, il est considéré comme un **devoir civique fondamental**. Comprendre cette distinction est essentiel pour le test civique et pour votre vie de citoyen.",
    },
    { type: "p", texte: "**Pourquoi voter est un devoir civique ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le droit de vote a été **conquis par des luttes** : Révolution de 1789, suffrage universel en 1848, vote des femmes en 1944",
        "C'est la **seule façon légale et directe** pour un citoyen d'influencer les décisions politiques",
        "L'abstention affaiblit la **légitimité démocratique** des élus",
      ],
    },
    { type: "p", texte: "**L'abstention en France : un phénomène préoccupant :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'abstention aux élections législatives a dépassé les **50 %** ces dernières années",
        "Les élections municipales restent les plus mobilisatrices (surtout dans les petites communes)",
        "L'élection présidentielle reste l'élection avec le plus fort taux de participation",
      ],
    },
    { type: "p", texte: "**Le vote blanc et le vote nul :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Vote blanc** : Vous déposez une enveloppe vide ou un bulletin blanc. Depuis 2014, les votes blancs sont **comptabilisés** séparément mais ne comptent pas dans les suffrages exprimés",
        "**Vote nul** : Bulletin déchiré, annoté, ou portant un signe distinctif → Non comptabilisé",
      ],
    },
    { type: "p", texte: "**Au-delà du vote : l'engagement citoyen :**" },
    { type: "p", texte: "Le vote n'est qu'une des formes de l'engagement civique. Vous pouvez aussi :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Adhérer à un parti politique** ou un syndicat",
        "**Participer à la vie associative** de votre commune",
        "**Être assesseur** ou président de bureau de vote le jour des élections",
        "**Signer des pétitions** et participer aux **consultations publiques**",
        "**Se présenter comme candidat** aux élections",
      ],
    },
    {
      type: "p",
      texte: "→ **Pour le test civique** : La distinction entre vote obligatoire (non) et devoir civique (oui) est l'un des **pièges les plus fréquents** du QCM. De même, savoir que le vote blanc est comptabilisé depuis 2014 mais ne change pas le résultat.",
    },
    {
      type: "h2",
      texte: "Les questions du test civique sur le droit de vote : ce qu'il faut retenir",
      id: "questions-test-civique-vote",
    },
    {
      type: "p",
      texte: "Voici une **fiche de révision synthétique** avec les informations essentielles à connaître pour le test civique sur cette thématique :",
    },
    { type: "p", texte: "**Chiffres et dates clés :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Âge minimum pour voter : **18 ans**",
        "Suffrage universel masculin : **1848**",
        "Droit de vote des femmes : **1944** (premières élections en 1945)",
        "Abaissement à 18 ans : **1974**",
        "Mandat présidentiel : **5 ans** (quinquennat depuis 2000)",
        "Nombre de députés : **577**",
        "Nombre de sénateurs : **348**",
        "Vote blanc comptabilisé : depuis **2014**",
      ],
    },
    { type: "p", texte: "**Les distinctions essentielles :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Suffrage **direct** : le citoyen vote directement pour le candidat (Président, députés, maires, conseillers départementaux, députés européens)",
        "Suffrage **indirect** : ce sont des grands électeurs qui votent (sénateurs)",
        "Vote **obligatoire** : NON en France (contrairement à la Belgique)",
        "Vote **secret** : OUI, passage par l'isoloir obligatoire",
      ],
    },
    { type: "p", texte: "**Questions pièges fréquentes :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "« Le vote est-il obligatoire en France ? » → **Non**, c'est un devoir civique",
        "« Les étrangers peuvent-ils voter en France ? » → **Les citoyens de l'UE** peuvent voter aux municipales et européennes. Les étrangers non-européens **ne peuvent pas voter** (sauf après naturalisation)",
        "« Les sénateurs sont-ils élus au suffrage direct ? » → **Non**, au suffrage indirect",
        "« À quel âge peut-on se présenter à l'élection présidentielle ? » → **18 ans** (depuis 2011)",
        "« Combien de tours comporte l'élection présidentielle ? » → **2 tours** maximum",
      ],
    },
    {
      type: "p",
      texte: "→ Entraînez-vous sur ces questions avec les **QCM thématiques** disponibles sur [LeTestCivique.fr](/dashboard).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le **droit de vote** est bien plus qu'une formalité : c'est le **pilier de la démocratie française** et un thème central du test civique de naturalisation. En comprenant le fonctionnement du système électoral, des élections présidentielles aux municipales, du suffrage direct au référendum, vous vous préparez efficacement au test civique tout en acquérant les connaissances essentielles pour exercer pleinement votre citoyenneté. Après votre naturalisation, voter sera votre premier acte de citoyen français. Préparez-vous dès maintenant sur **LeTestCivique.fr** pour maîtriser cette thématique et toutes les autres.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Le vote est-il obligatoire en France ?",
      reponse: "Non, le vote n'est pas obligatoire en France. C'est un droit et un devoir civique, mais l'abstention n'est pas sanctionnée par la loi. Cependant, il est fortement encouragé : voter est considéré comme un acte fondamental de la citoyenneté.",
    },
    {
      question: "À quel âge peut-on voter en France ?",
      reponse: "Le droit de vote est acquis à 18 ans, l'âge de la majorité civile en France. Depuis 1974 (abaissement de 21 à 18 ans). Les jeunes de 18 ans sont inscrits automatiquement sur les listes électorales.",
    },
    {
      question: "Les étrangers peuvent-ils voter en France ?",
      reponse: "Les citoyens de l'Union européenne résidant en France peuvent voter aux élections municipales et européennes. Les étrangers non-européens ne peuvent pas voter, sauf après avoir obtenu la nationalité française par naturalisation.",
    },
    {
      question: "Comment s'inscrire sur les listes électorales après naturalisation ?",
      reponse: "Après naturalisation, vous êtes normalement inscrit d'office sur les listes électorales. Vérifiez toutefois auprès de votre mairie. Vous pouvez aussi vous inscrire en ligne sur service-public.fr, en mairie ou par courrier.",
    },
    {
      question: "Quelle est la différence entre suffrage direct et indirect ?",
      reponse: "Le suffrage direct signifie que les citoyens votent directement pour le candidat (Président, députés, maires). Le suffrage indirect signifie que ce sont des grands électeurs qui votent au nom des citoyens (cas des sénateurs).",
    },
    {
      question: "Qu'est-ce qu'un référendum en France ?",
      reponse: "Un référendum est une consultation populaire où les citoyens répondent par OUI ou NON à une question posée par le Président ou le Parlement. Il peut porter sur un projet de loi ou une révision constitutionnelle.",
    },
    {
      question: "Combien y a-t-il de députés et de sénateurs en France ?",
      reponse: "L'Assemblée nationale compte 577 députés élus au suffrage direct. Le Sénat compte 348 sénateurs élus au suffrage indirect. Ensemble, ils forment le Parlement français qui vote les lois.",
    },
    {
      question: "Le vote blanc est-il comptabilisé en France ?",
      reponse: "Depuis la loi du 21 février 2014, les votes blancs sont comptabilisés séparément dans les résultats. Cependant, ils ne sont pas pris en compte dans les suffrages exprimés et n'ont donc aucun effet sur le résultat de l'élection.",
    },
    {
      question: "Peut-on voter par procuration en France ?",
      reponse: "Oui, si vous ne pouvez pas vous déplacer le jour du vote, vous pouvez donner procuration à un autre électeur inscrit dans la même commune. La procuration peut être établie en ligne, au tribunal ou au commissariat/gendarmerie.",
    },
    {
      question: "Quelles élections concernent les citoyens européens en France ?",
      reponse: "Les citoyens de l'UE résidant en France peuvent voter aux élections municipales et aux élections européennes, à condition d'être inscrits sur les listes électorales complémentaires de leur commune de résidence.",
    },
  ],
  aLireAussi: [
    {
      slug: "dossier-naturalisation-2026-documents-delais-prefecture-anef",
      ancre: "Obtenir la nationalité française",
    },
    {
      slug: "entretien-naturalisation-2026-preparation-assimilation-prefecture",
      ancre: "L'entretien de naturalisation",
    },
    { slug: "institutions-francaises-president-assemblee-senat", ancre: "Les institutions françaises" },
  ],
};

export default article;
