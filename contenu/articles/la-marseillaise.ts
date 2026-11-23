import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 23/11/2026 (`docs/seo/ROBOT.md`).
 * Requêtes visées : « la marseillaise », « la marseillaise paroles » (10 k à
 * 100 k recherches par mois, + 900 % sur trois mois pour « paroles ») et
 * « la marseillaise histoire » (100 à 1 k) ; Planificateur de mots clés,
 * France, 19/11 et 22/11/2026. Famille examen civique (en retard sur le
 * mélange) : l'hymne est cité par le référentiel officiel (symboles de la
 * République) et figure dans les deux listes officielles des questions de
 * connaissance (CSP et CR).
 * Sources lues le 23/11/2026 : Conseil constitutionnel (Constitutions de 1946
 * et 1958, art. 2) ; Élysée (« La Marseillaise de Rouget de Lisle » et le
 * texte des paroles) ; Assemblée nationale (dossier historique, décret du
 * 26 messidor an III) ; ministère des Armées (carnet de chants) ; Légifrance
 * (code pénal, art. 433-5-1 ; code de l'éducation, art. L. 321-3) ;
 * formation-civique.interieur.gouv.fr (fiche « L'hymne français », listes
 * officielles CSP et CR).
 * Les sources officielles divergent sur le jour de 1879 (14 ou 24 février) :
 * l'article ne donne que l'année. La version officielle de 1912 ne retient
 * que les couplets 1, 6 et 7 (ministère des Armées) ; l'Élysée publie les 7.
 */
const article: Article = {
  slug: "la-marseillaise",
  titre: "La Marseillaise : les paroles, l'histoire, et ce que l'examen civique vous demande sur l'hymne",
  titreSeo: "La Marseillaise : paroles et histoire de l'hymne",
  resume: "La Marseillaise expliquée simplement : le premier couplet et le refrain, qui l'a écrite et quand, ce que dit la loi, et les questions de l'examen civique.",
  chapo: "La Marseillaise est l'hymne national de la France : la Constitution le dit dans son article 2. Elle a été ==écrite en avril 1792 par Rouget de Lisle==, à Strasbourg, comme un chant de guerre. Voici ses paroles les plus connues, son histoire en six dates, et ce que l'examen civique vous demande sur elle.",
  publieLe: "2026-11-23",
  modifieLe: "2026-11-23",
  minutes: 8,
  theme: "La Marseillaise à l'examen civique",
  motsCles: [
    "la marseillaise",
    "la marseillaise paroles",
    "paroles de la marseillaise",
    "la marseillaise histoire",
    "hymne national français",
    "rouget de lisle",
    "marseillaise examen civique",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/la-marseillaise-rouget-de-lisle-pils.webp",
    alt: "Tableau d'Isidore Pils (1849) : Rouget de Lisle, debout, le bras levé, chante La Marseillaise devant un salon de Strasbourg, une femme au piano",
    largeur: 1024,
    hauteur: 820,
    credit: "DCHNwam, via Flickr",
    licence: "domaine public",
    source: "https://www.flickr.com/photos/57179180@N07/54465725049",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que La Marseillaise ?",
    },
    {
      type: "p",
      texte: "La Marseillaise est l'hymne national de la France. Un hymne national, c'est le chant officiel d'un pays. On le joue dans les cérémonies officielles et avant les matchs des équipes de France, par exemple.",
    },
    {
      type: "p",
      texte: "La Constitution est le texte qui fixe les règles les plus importantes du pays. Son article 2 dit : « ==L'hymne national est La Marseillaise.== » ([Constitution du 4 octobre 1958, Conseil constitutionnel](https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/texte-integral-de-la-constitution-du-4-octobre-1958-en-vigueur)). Le même article cite les autres symboles : la langue française, le drapeau bleu, blanc, rouge, la devise « Liberté, Égalité, Fraternité ».",
    },
    {
      type: "p",
      texte: "Selon la [fiche officielle de la formation civique](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/les-symboles-de-la-republique/hymne-francais/), ce chant « évoque un grand moment de l'histoire de la France : la Révolution ».",
    },
    {
      type: "h2",
      texte: "Quelles sont les paroles de La Marseillaise ?",
    },
    {
      type: "p",
      texte: "Le texte publié par l'[Élysée](https://www.elysee.fr/la-presidence/la-marseillaise-de-rouget-de-lisle) compte ==7 couplets== et un refrain. Un couplet, c'est une partie de la chanson ; le refrain revient après chaque couplet. En pratique, on chante surtout le premier couplet et le refrain :",
    },
    {
      type: "citation",
      texte: "Allons enfants de la Patrie, / Le jour de gloire est arrivé ! / Contre nous de la tyrannie, / L'étendard sanglant est levé, (bis) / Entendez-vous dans les campagnes / Mugir ces féroces soldats ? / Ils viennent jusque dans vos bras / Égorger vos fils, vos compagnes !",
      source: "Premier couplet, texte publié par l'Élysée",
    },
    {
      type: "citation",
      texte: "Aux armes, citoyens, / Formez vos bataillons, / Marchons, marchons ! / Qu'un sang impur / Abreuve nos sillons !",
      source: "Refrain, texte publié par l'Élysée",
    },
    {
      type: "p",
      texte: "Quelques mots difficiles, en mots simples. La « Patrie », c'est le pays auquel on appartient. La « tyrannie », c'est le pouvoir d'un chef qui ne respecte pas la liberté des gens. Un « étendard », c'est un drapeau de guerre. « Mugir », c'est crier fort, comme un animal. Un « bataillon » est un groupe de soldats. Les « sillons » sont les lignes creusées dans un champ pour semer.",
    },
    {
      type: "p",
      texte: "Les paroles sont violentes. Elles s'expliquent par leur date : c'est un ==chant de guerre==, écrit au moment où la France entre en guerre contre l'Autriche, en avril 1792.",
    },
    {
      type: "h2",
      texte: "Qui a écrit La Marseillaise, et pourquoi ce nom ?",
    },
    {
      type: "p",
      texte: "L'auteur s'appelle ==Claude-Joseph Rouget de Lisle==. Il est né en 1760 à Lons-le-Saunier, dans le Jura. En 1792, il est capitaine du génie, un corps de l'armée. Selon l'[Élysée](https://www.elysee.fr/la-presidence/la-marseillaise-de-rouget-de-lisle), il compose le chant dans la nuit du 25 au 26 avril 1792, à Strasbourg, chez le maire de la ville, Dietrich. Son premier titre : « Chant de guerre pour l'armée du Rhin ».",
    },
    {
      type: "p",
      texte: "Pourquoi « Marseillaise », alors qu'il est né à Strasbourg ? Pendant l'été 1792, des volontaires venus de Marseille, les « fédérés », montent à Paris en chantant ce chant. Les Parisiens l'appellent alors « La Marseillaise » ([dossier historique de l'Assemblée nationale](https://www2.assemblee-nationale.fr/decouvrir-l-assemblee/histoire/dossier-historique-la-marseillaise/claude-joseph-rouget-de-lisle)).",
    },
    {
      type: "encadre",
      titre: "La phrase à retenir",
      texte: "La Marseillaise a été écrite à **Strasbourg** en **1792** par **Rouget de Lisle**. Elle porte le nom de **Marseille** parce que des volontaires marseillais l'ont fait connaître à Paris.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "L'histoire de l'hymne en six dates",
    },
    {
      type: "tableau",
      entetes: ["Date", "Ce qui se passe"],
      lignes: [
        ["Avril 1792", "Rouget de Lisle compose le « Chant de guerre pour l'armée du Rhin » à Strasbourg."],
        ["14 juillet 1795", "Le chant est déclaré « chant national » par un décret (26 messidor an III, dans le calendrier de la Révolution)."],
        ["1879", "Sous la IIIe République, La Marseillaise redevient l'hymne national. Elle avait été interdite sous l'Empire et la Restauration."],
        ["1887", "Une version musicale officielle est adoptée."],
        ["14 juillet 1915", "Les cendres de Rouget de Lisle sont transférées aux Invalides, à Paris."],
        ["1946 et 1958", "Les Constitutions de la IVe puis de la Ve République l'inscrivent dans leur article 2."],
      ],
    },
    {
      type: "p",
      texte: "Ces dates viennent de l'[Élysée](https://www.elysee.fr/la-presidence/la-marseillaise-de-rouget-de-lisle) et de l'[Assemblée nationale](https://www2.assemblee-nationale.fr/decouvrir-l-assemblee/histoire/dossier-historique-la-marseillaise/la-marseillaise-hymne-national). Un compositeur célèbre, Hector Berlioz, en a aussi écrit une version pour grand orchestre, après la révolution de 1830.",
    },
    {
      type: "p",
      texte: "Un détail souvent ignoré : la version officielle chantée ne garde pas les 7 couplets. Selon le [ministère des Armées](https://www.defense.gouv.fr/terre/mieux-nous-connaitre/traditions-larmee-terre/carnet-chants-larmee-terre/marseillaise), la version de 1912 ne retient que ==les couplets 1, 6 et 7==. Le septième est appelé le « couplet des enfants » : il commence par « Nous entrerons dans la carrière ». Il a été ajouté en 1792, et ce n'est pas Rouget de Lisle qui l'a écrit.",
    },
    {
      type: "h2",
      texte: "Que dit la loi sur La Marseillaise ?",
    },
    {
      type: "p",
      texte: "Deux règles sont à connaître. La première protège l'hymne. Outrager l'hymne national, c'est le traiter avec mépris. C'est puni par la loi si c'est fait en public, pendant une manifestation organisée ou réglementée par les autorités publiques. L'amende est de ==7 500 €==. Si l'outrage est commis en groupe, la peine monte à 6 mois de prison et 7 500 € d'amende ([code pénal, article 433-5-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006418556)). La même règle protège le drapeau tricolore.",
    },
    {
      type: "p",
      texte: "La seconde concerne l'école. L'école élémentaire doit apprendre aux enfants les valeurs et les symboles de la République, « notamment de l'hymne national et de son histoire » ([code de l'éducation, article L. 321-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045293831)).",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Ne confondez pas la ville où l'hymne a été écrit (Strasbourg) et celle qui lui a donné son nom (Marseille).",
        "Ne confondez pas « chant national » (1795) et « hymne national » de la IIIe République (1879).",
        "L'Union européenne a son propre hymne, différent de La Marseillaise : le référentiel de l'examen vous demande de connaître les deux.",
        "« Aux armes, citoyens » vient du refrain de La Marseillaise, pas de la devise de la République.",
      ],
    },
    {
      type: "h2",
      texte: "Que demande l'examen civique sur La Marseillaise ?",
    },
    {
      type: "p",
      texte: "L'hymne fait partie des symboles de la République, dans la thématique « Principes et valeurs de la République ». Elle compte ==11 questions sur 40== à l'examen, selon l'[arrêté du 10 octobre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620), article 3. Un arrêté, c'est une décision écrite d'un ministre.",
    },
    {
      type: "p",
      texte: "Le ministère de l'Intérieur publie les questions de connaissance. Pour la carte de séjour pluriannuelle (le titre de séjour de 2 à 4 ans), la liste demande : « Quel est le nom de l'hymne national ? » et « Qu'est-ce que la Marseillaise ? » ([liste officielle CSP](https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-csp/)). Pour la carte de résident (le titre de 10 ans), on vous demande aussi de compléter les paroles : « Aux armes […] ! Formez vos bataillons » et « Allons enfants de la patrie […] » ([liste officielle CR](https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/)). Apprendre le premier couplet et le refrain suffit donc.",
    },
    {
      type: "qcm",
      thematique: "Principes et valeurs de la République",
      question: "Quelle est la suite de ces paroles de La Marseillaise : « Allons enfants de la Patrie… » ?",
      choix: [
        "« Liberté, Égalité, Fraternité »",
        "« Le jour de gloire est arrivé »",
        "« Formez vos bataillons »",
        "« Les hommes naissent libres et égaux en droits »",
      ],
      reponse: 1,
      explication: "Le premier couplet commence par « Allons enfants de la Patrie, le jour de gloire est arrivé ». « Formez vos bataillons » vient du refrain, la devise est « Liberté, Égalité, Fraternité », et la dernière phrase vient de l'article 1 de la DDHC. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "qcm",
      thematique: "Histoire, géographie et culture",
      question: "Dans quelle ville La Marseillaise a-t-elle été composée, en 1792 ?",
      choix: ["Marseille", "Paris", "Strasbourg", "Lyon"],
      reponse: 2,
      explication: "Rouget de Lisle l'a composée à Strasbourg, chez le maire de la ville, en avril 1792. Elle porte le nom de Marseille parce que des volontaires marseillais l'ont chantée en arrivant à Paris. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "cta",
      texte: "Les symboles (hymne, drapeau, devise, Marianne) sont des questions faciles à gagner, à condition de ne pas mélanger les dates. Sur Test Civique France, les cours des 5 thématiques sont gratuits, et les examens blancs de 40 questions vous donnent votre score et la correction de chaque question. L'inscription est gratuite.",
    },
    {
      type: "p",
      texte: "Pour réviser les autres symboles, lisez nos articles sur [la devise « Liberté, Égalité, Fraternité »](/articles/valeurs-republique-francaise-liberte-egalite-fraternite), sur [Marianne, le coq et le drapeau](/articles/symboles-france-marianne-coq-drapeau-tricolore), et sur [la Déclaration de 1789](/articles/ddhc-declaration-droits-homme-citoyen). Et si vous ne savez pas encore si l'examen vous concerne, [vérifiez-le en une minute](/eligibilite-examen-civique).",
    },
  ],
  faq: [
    {
      question: "Qui a écrit La Marseillaise ?",
      reponse: "Claude-Joseph Rouget de Lisle, un officier né en 1760 à Lons-le-Saunier, dans le Jura. Il l'a composée dans la nuit du 25 au 26 avril 1792, à Strasbourg, chez le maire de la ville. Son titre était alors « Chant de guerre pour l'armée du Rhin ». Ses cendres reposent aux Invalides, à Paris, depuis le 14 juillet 1915.",
    },
    {
      question: "Pourquoi l'hymne s'appelle-t-il La Marseillaise ?",
      reponse: "Parce que des volontaires venus de Marseille, les fédérés, l'ont chanté en montant à Paris pendant l'été 1792. Les Parisiens l'ont alors appelé « La Marseillaise ». Le chant avait pourtant été écrit à Strasbourg quelques mois plus tôt, pour l'armée du Rhin, au début de la guerre contre l'Autriche.",
    },
    {
      question: "Combien de couplets compte La Marseillaise ?",
      reponse: "Le texte publié par l'Élysée compte 7 couplets et un refrain. Les six premiers sont de Rouget de Lisle, le septième, dit « couplet des enfants », a été ajouté en 1792 par un autre auteur. La version officielle de 1912 ne retient que les couplets 1, 6 et 7. On chante surtout le premier couplet et le refrain.",
    },
    {
      question: "Depuis quand La Marseillaise est-elle l'hymne national ?",
      reponse: "Elle est déclarée chant national le 14 juillet 1795. Interdite ensuite sous l'Empire et la Restauration, elle redevient l'hymne national en 1879, sous la IIIe République. Les Constitutions de 1946 et de 1958 l'inscrivent dans leur article 2 : « L'hymne national est La Marseillaise. »",
    },
  ],
  sources: [
    {
      titre: "Conseil constitutionnel : Constitution du 4 octobre 1958 en vigueur, article 2",
      url: "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/texte-integral-de-la-constitution-du-4-octobre-1958-en-vigueur",
      type: "juridique",
      luLe: "2026-11-23",
    },
    {
      titre: "Élysée : La Marseillaise de Rouget de Lisle (histoire et paroles)",
      url: "https://www.elysee.fr/la-presidence/la-marseillaise-de-rouget-de-lisle",
      type: "officiel",
      luLe: "2026-11-23",
    },
    {
      titre: "Assemblée nationale : dossier historique, La Marseillaise hymne national",
      url: "https://www2.assemblee-nationale.fr/decouvrir-l-assemblee/histoire/dossier-historique-la-marseillaise/la-marseillaise-hymne-national",
      type: "officiel",
      luLe: "2026-11-23",
    },
    {
      titre: "Assemblée nationale : dossier historique, Claude-Joseph Rouget de Lisle",
      url: "https://www2.assemblee-nationale.fr/decouvrir-l-assemblee/histoire/dossier-historique-la-marseillaise/claude-joseph-rouget-de-lisle",
      type: "officiel",
      luLe: "2026-11-23",
    },
    {
      titre: "Ministère des Armées : carnet de chants de l'armée de Terre, La Marseillaise",
      url: "https://www.defense.gouv.fr/terre/mieux-nous-connaitre/traditions-larmee-terre/carnet-chants-larmee-terre/marseillaise",
      type: "officiel",
      luLe: "2026-11-23",
    },
    {
      titre: "Légifrance : code pénal, article 433-5-1 (outrage à l'hymne national ou au drapeau)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006418556",
      type: "juridique",
      luLe: "2026-11-23",
    },
    {
      titre: "Légifrance : code de l'éducation, article L. 321-3",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045293831",
      type: "juridique",
      luLe: "2026-11-23",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : fiche « L'hymne français »",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/les-symboles-de-la-republique/hymne-francais/",
      type: "officiel",
      luLe: "2026-11-23",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : listes officielles des questions de connaissance, CSP et CR",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/",
      type: "officiel",
      luLe: "2026-11-23",
    },
    {
      titre: "Légifrance : arrêté du 10 octobre 2025 relatif à l'examen civique (article 3, répartition des questions par thématique)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620",
      type: "juridique",
      luLe: "2026-10-28",
    },
  ],
};

export default article;
