import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-nouveaux-avril-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/oqtf-2026-droits-recours-expulsion-aide-juridictionnelle-test-civique`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "oqtf-2026-droits-recours-expulsion-aide-juridictionnelle-test-civique",
  titre: "OQTF 2026 : vos droits, les recours, délais légaux et aide juridictionnelle, guide complet",
  titreSeo: "OQTF 2026 : vos droits, les recours, délais légaux et aide juridictionnelle, guide complet",
  resume: "Vous avez reçu une OQTF ? Ce n'est pas une expulsion immédiate. Délai de recours : 30 jours (ou 48h). Tribunal administratif, aide juridictionnelle gratuite, motifs de protection (famille, santé, longue résidence) : tout ce que la loi vous garantit.",
  chapo: "Recevoir une OQTF (Obligation de Quitter le Territoire Français) est une situation stressante et urgente. Pourtant, contrairement à une idée répandue, une OQTF n'est pas une expulsion immédiate. La loi française vous accorde des droits précis, des délais légaux et des voies de recours pour contester cette décision. En 2026, dans un contexte politique de durcissement de la politique migratoire, il est plus important que jamais de connaître vos droits. Ce guide vous explique tout ce que vous devez savoir si vous ou un proche recevez une OQTF.",
  publieLe: "2026-04-04",
  modifieLe: "2026-04-04",
  minutes: 20,
  theme: "OQTF 2026",
  motsCles: [
    "OQTF 2026",
    "OQTF droits recours",
    "contester OQTF tribunal administratif",
    "délai recours OQTF",
    "OQTF aide juridictionnelle",
    "expulsion France 2026",
    "OQTF motifs protection",
    "rétention administrative",
    "assignation à résidence OQTF",
    "OQTF famille en France",
    "Défenseur des droits OQTF",
    "OQTF test civique droits fondamentaux",
    "OQTF recours urgent",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
  },
  blocs: [
    { type: "h2", texte: "Qu'est-ce qu'une OQTF ? Définition légale", id: "definition-oqtf" },
    {
      type: "p",
      texte: "L'**Obligation de Quitter le Territoire Français (OQTF)** est une décision administrative par laquelle le préfet enjoint à un étranger de quitter la France dans un délai déterminé. Elle est définie par l'**article L611-1 du CESEDA**.",
    },
    { type: "h3", texte: "L'OQTF n'est PAS :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Une expulsion immédiate (dans la grande majorité des cas)",
        "Une condamnation pénale",
        "Automatiquement une interdiction de revenir en France",
      ],
    },
    { type: "h3", texte: "L'OQTF EST :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Une décision administrative susceptible de recours",
        "Un acte qui doit être motivé (le préfet doit expliquer pourquoi)",
        "Une décision soumise au contrôle du juge administratif",
      ],
    },
    {
      type: "p",
      texte: "**Lien avec le test civique :** la thématique *Droits et devoirs* du test civique couvre les droits fondamentaux garantis à toute personne sur le territoire français, y compris le droit à un recours effectif devant un juge (article 13 de la CEDH). Même face à une OQTF, ces droits s'appliquent.",
    },
    { type: "h2", texte: "Qui peut recevoir une OQTF ?", id: "qui-peut-recevoir" },
    { type: "p", texte: "Une OQTF peut être notifiée dans plusieurs situations :" },
    {
      type: "tableau",
      entetes: ["Situation", "Base légale"],
      lignes: [
        ["Séjour irrégulier (sans titre de séjour valide)", "Art. L611-1 1° CESEDA"],
        ["Refus de délivrance ou de renouvellement d'un titre de séjour", "Art. L611-1 3° CESEDA"],
        ["Retrait du titre de séjour", "Art. L611-1 4° CESEDA"],
        ["Visa expiré (séjour dépassant la durée autorisée)", "Art. L611-1 2° CESEDA"],
        ["Fin de l'autorisation provisoire de séjour (APS)", "Art. L611-1 CESEDA"],
        ["Rejet de la demande d'asile", "Art. L611-1 6° CESEDA"],
      ],
    },
    {
      type: "p",
      texte: "**Important :** si votre titre de séjour est simplement en cours de renouvellement et que vous avez un **récépissé valide**, vous ne pouvez pas recevoir d'OQTF pendant cette période.",
    },
    { type: "h2", texte: "Les 3 types d'OQTF et leurs délais légaux", id: "types-oqtf" },
    {
      type: "p",
      texte: "Il existe plusieurs types d'OQTF avec des délais différents. Connaître votre type est crucial car les délais de recours varient :",
    },
    {
      type: "h3",
      texte: "Type 1 : OQTF avec délai de départ volontaire de 30 jours (le plus fréquent)",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Délai pour quitter la France :** 30 jours",
        "**Délai pour faire un recours :** 30 jours devant le tribunal administratif",
        "**Caractère :** le plus courant, pour séjour irrégulier ordinaire",
      ],
    },
    { type: "h3", texte: "Type 2 : OQTF sans délai de départ volontaire" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Délai pour quitter la France :** immédiat (0 jour)",
        "**Délai pour faire un recours :** **48 heures**",
        "**Cas concernés :** menace à l'ordre public, risque de fuite, demande d'asile jugée irrecevable, récidiviste",
      ],
    },
    { type: "h3", texte: "Type 3 : OQTF notifiée lors d'un placement en rétention" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Délai pour faire un recours :** **48 heures** devant le juge des libertés et de la détention (JLD)",
        "**Durée maximale de rétention :** 90 jours (renouvelable par le juge)",
      ],
    },
    { type: "p", texte: "**Récapitulatif des délais à retenir absolument :**" },
    {
      type: "tableau",
      entetes: ["Type d'OQTF", "Délai de recours"],
      lignes: [
        ["OQTF avec 30 jours de départ volontaire", "30 jours"],
        ["OQTF sans délai (liberté)", "48 heures"],
        ["OQTF avec rétention administrative", "48 heures (JLD)"],
      ],
    },
    {
      type: "h2",
      texte: "Que faire dans les 48h après réception d'une OQTF ?",
      id: "que-faire-urgence",
    },
    {
      type: "p",
      texte: "Si vous recevez une OQTF, agissez immédiatement. Voici les premières mesures urgentes :",
    },
    { type: "h3", texte: "Dans les premières heures :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Lisez attentivement la décision** : quel type d'OQTF, quel délai pour partir, y a-t-il une interdiction de retour ?",
        "**Notez la date de notification** : c'est à partir de cette date que courent les délais de recours",
        "**Contactez immédiatement un avocat ou une association** spécialisée en droit des étrangers",
      ],
    },
    { type: "h3", texte: "Contacts d'urgence :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**La Cimade :** 01 44 18 60 50, association spécialisée en droit des étrangers (permanences en préfecture et en centre de rétention)",
        "**Gisti :** gisti.org, groupe d'information et de soutien des immigrés",
        "**France Terre d'Asile :** pour les demandeurs d'asile",
        "**Barreau de Paris : Urgences :** si vous êtes en rétention, un avocat commis d'office est disponible 24h/24",
      ],
    },
    { type: "h3", texte: "Que ne pas faire :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Ne pas ignorer l'OQTF et attendre que ça passe (les délais sont stricts)",
        "Ne pas partir précipitamment sans consulter un professionnel",
        "Ne pas voyager à l'étranger pendant la procédure de recours",
      ],
    },
    {
      type: "h2",
      texte: "Le recours devant le tribunal administratif : votre arme principale",
      id: "recours-tribunal",
    },
    {
      type: "p",
      texte: "Le recours en annulation devant le **tribunal administratif** est la voie de recours la plus efficace contre une OQTF.",
    },
    { type: "h3", texte: "Comment déposer un recours ?" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Rédiger une **requête en annulation** de l'OQTF (avec les motifs juridiques)",
        "La déposer au greffe du tribunal administratif compétent (en ligne sur **telerecours-citoyens.beta.gouv.fr** ou par courrier recommandé)",
        "Joindre la copie de l'OQTF, votre titre d'identité et toutes les pièces justifiant votre droit à rester en France",
      ],
    },
    { type: "h3", texte: "L'effet suspensif du recours :" },
    {
      type: "p",
      texte: "Pour les OQTF avec 30 jours, le recours N'est PAS automatiquement suspensif. Vous devez demander un **référé-suspension** (urgence) pour bloquer l'exécution de l'OQTF pendant l'examen de votre dossier.",
    },
    {
      type: "p",
      texte: "Pour les OQTF sans délai (48h), le juge statue en urgence et l'introduction du recours est **automatiquement suspensive** pendant 72 heures.",
    },
    { type: "h3", texte: "Les arguments qui fonctionnent :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Vie familiale :** conjoint français ou européen, enfants français, liens forts avec la France",
        "**Ancienneté de résidence :** plus de 10 ans en France sans interruption",
        "**Raisons médicales :** maladie grave pour laquelle le traitement n'existe pas dans le pays d'origine",
        "**Vice de forme :** l'OQTF n'est pas suffisamment motivée, ou la procédure n'a pas été respectée",
        "**Situation personnelle exceptionnelle :** intégration réussie, emploi stable, absence de liens avec le pays d'origine",
      ],
    },
    {
      type: "h2",
      texte: "L'aide juridictionnelle : un avocat gratuit pour contester votre OQTF",
      id: "aide-juridictionnelle",
    },
    {
      type: "p",
      texte: "Si vous n'avez pas les moyens de payer un avocat, l'**aide juridictionnelle (AJ)** vous permet d'être représenté gratuitement ou à moindre coût devant le tribunal administratif.",
    },
    { type: "h3", texte: "Conditions d'éligibilité :" },
    {
      type: "tableau",
      entetes: ["Situation", "Ressources mensuelles maximales (2026)"],
      lignes: [
        ["Aide juridictionnelle totale (avocat 100% gratuit)", "Inférieure à 1 100 € / mois"],
        ["Aide juridictionnelle partielle", "Entre 1 100 € et 1 650 € / mois"],
        ["Au-delà", "Pas d'aide, avocat à vos frais"],
      ],
    },
    { type: "h3", texte: "Comment demander l'aide juridictionnelle en urgence ?" },
    {
      type: "p",
      texte: "Pour les OQTF sans délai (48h), vous pouvez demander l'aide juridictionnelle **en même temps que vous déposez votre recours**. Le bureau d'aide juridictionnelle doit statuer en urgence (dans les 24h en rétention).",
    },
    { type: "h3", texte: "Même sans aide juridictionnelle :" },
    {
      type: "p",
      texte: "Vous pouvez vous défendre vous-même devant le tribunal administratif. De nombreuses associations (La Cimade, Gisti, ADDE) proposent une aide gratuite pour rédiger vos recours.",
    },
    { type: "h2", texte: "Les motifs qui vous protègent de l'expulsion", id: "motifs-protection" },
    {
      type: "p",
      texte: "La loi française prévoit des **protections absolues** qui empêchent l'exécution d'une OQTF même si elle est légalement valide :",
    },
    { type: "h3", texte: "Protections absolues (article L612-1 et L611-3 CESEDA) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Mineur étranger (moins de 18 ans)",
        "Étranger résidant en France depuis l'âge de **13 ans** ou depuis plus de **10 ans**",
        "Étranger dont l'état de santé nécessite une prise en charge médicale et dont l'absence de soins entraînerait des conséquences d'une exceptionnelle gravité",
        "Parent d'un enfant français résidant en France, à condition d'exercer l'autorité parentale et de contribuer à l'entretien de l'enfant",
        "Conjoint de Français depuis au moins 2 ans (à condition de ne pas représenter une menace à l'ordre public)",
        "Réfugié statutaire ou bénéficiaire de la protection subsidiaire",
      ],
    },
    { type: "h3", texte: "Protections relatives (doivent être invoquées) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Longue durée de résidence avec intégration démontrée (emploi, famille, absence de condamnation)",
        "Liens familiaux forts en France (fratrie, parents)",
        "Participation à la vie civique (associations, bénévolat)",
      ],
    },
    {
      type: "p",
      texte: "**Important :** ces protections doivent être **invoquées explicitement** dans votre recours. Le juge ne les appliquera pas automatiquement si vous ne les mentionnez pas.",
    },
    {
      type: "h2",
      texte: "Rétention administrative vs assignation à résidence",
      id: "retention-assignation",
    },
    {
      type: "p",
      texte: "Si les autorités décident de s'assurer de votre présence pour organiser votre expulsion, elles peuvent vous placer en **rétention administrative** ou vous assigner à résidence.",
    },
    { type: "h3", texte: "La rétention administrative :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Placement dans un **Centre de Rétention Administrative (CRA)**",
        "Durée initiale : **48 heures**, renouvelable par le juge jusqu'à **90 jours maximum**",
        "Vous gardez tous vos droits : droit à un avocat, droit à un interprète, droit de communiquer avec votre famille",
        "Un avocat commis d'office est automatiquement désigné",
      ],
    },
    { type: "h3", texte: "L'assignation à résidence :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Alternative à la rétention : vous restez libre mais devez rester à votre domicile",
        "Obligation de se présenter régulièrement à la police (pointage)",
        "Interdiction de quitter une zone géographique définie",
      ],
    },
    { type: "h3", texte: "Tableau comparatif :" },
    {
      type: "tableau",
      entetes: ["Mesure", "Lieu", "Durée max.", "Liberté de mouvement"],
      lignes: [
        ["Rétention administrative", "Centre de rétention (CRA)", "90 jours", "Aucune"],
        ["Assignation à résidence", "Domicile", "45 jours renouvelable", "Limitée (zone définie)"],
      ],
    },
    { type: "h2", texte: "Le Défenseur des droits : un allié souvent oublié", id: "defenseur-droits" },
    {
      type: "p",
      texte: "Le **Défenseur des droits** est une autorité constitutionnelle indépendante qui peut intervenir dans votre situation, notamment en cas de discrimination ou d'atteinte à vos droits fondamentaux dans le cadre d'une procédure d'expulsion.",
    },
    { type: "h3", texte: "Dans quels cas le saisir ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si vous pensez avoir été discriminé dans le traitement de votre dossier",
        "Si les services préfectoraux n'ont pas respecté la procédure légale",
        "Si vos droits à l'interprète ou à l'information n'ont pas été respectés",
        "Si vous êtes victime de comportements abusifs de la part des autorités",
      ],
    },
    { type: "h3", texte: "Comment le saisir :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "En ligne sur **defenseurdesdroits.fr**",
        "Par courrier postal (gratuit, sans affranchissement requis)",
        "Via les délégués territoriaux (présents dans toute la France, dans les maisons France Services)",
      ],
    },
    {
      type: "p",
      texte: "**La saisine du Défenseur des droits ne suspend pas les délais de recours devant le tribunal administratif.** Faites les deux simultanément si nécessaire.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Une OQTF est une décision grave mais contestable. La clé est de réagir vite, les délais de recours sont stricts (30 jours, 48 heures selon le cas). Contactez immédiatement un avocat ou une association spécialisée (La Cimade, Gisti). Si vous n'avez pas les moyens, l'aide juridictionnelle vous garantit un avocat gratuit. Rappelez-vous : la loi française protège des catégories entières de personnes (parents d'enfants français, malades graves, longue résidence) contre l'expulsion. Ces protections doivent être invoquées explicitement dans votre recours.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de temps ai-je pour contester une OQTF ?",
      reponse: "Cela dépend du type d'OQTF. Pour une OQTF avec délai de 30 jours, vous avez 30 jours pour déposer un recours au tribunal administratif. Pour une OQTF sans délai de départ volontaire, le délai est de seulement 48 heures. Ces délais courent à partir de la date de notification de l'OQTF.",
    },
    {
      question: "Est-ce qu'une OQTF signifie que je vais être expulsé immédiatement ?",
      reponse: "Non. La grande majorité des OQTF sont des OQTF avec délai de 30 jours, ce qui vous donne le temps de préparer un recours. Même en cas d'OQTF sans délai, vous pouvez déposer un recours en 48 heures qui suspend temporairement l'exécution. L'exécution forcée (avec escorte policière) ne concerne qu'une minorité des cas.",
    },
    {
      question: "Puis-je travailler pendant une OQTF ?",
      reponse: "Cela dépend de si vous disposez encore d'un titre de séjour valide ou d'un récépissé autorisant le travail. Si l'OQTF est consécutive à un refus de renouvellement et que vous n'avez plus de titre valide, vous ne pouvez plus travailler légalement. Un avocat peut vous aider à clarifier votre situation.",
    },
    {
      question: "L'aide juridictionnelle est-elle vraiment gratuite pour contester une OQTF ?",
      reponse: "Oui, si vos revenus sont inférieurs à environ 1 100 €/mois, l'aide juridictionnelle totale vous donne accès à un avocat entièrement pris en charge par l'État. Pour les OQTF en rétention, un avocat est automatiquement commis d'office, disponible 24h/24.",
    },
    {
      question: "Un parent d'un enfant français peut-il être expulsé ?",
      reponse: "En principe non, si vous exercez l'autorité parentale et contribuez effectivement à l'entretien de votre enfant. C'est une protection prévue par le CESEDA. Mais cette protection n'est pas absolue si vous représentez une menace grave à l'ordre public. Elle doit être invoquée dans votre recours.",
    },
    {
      question: "Que se passe-t-il si je ne pars pas dans le délai indiqué par l'OQTF ?",
      reponse: "Si vous ne partez pas volontairement et n'avez pas déposé de recours, les autorités peuvent prendre des mesures d'éloignement forcé (placement en rétention administrative, puis reconduite à la frontière). C'est pourquoi il est essentiel d'agir rapidement, soit en partant, soit en déposant un recours.",
    },
  ],
};

export default article;
