import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-requetes-fortes-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/niveau-de-langue-francais-nationalite-titre-sejour-a2-b1-2026`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "niveau-de-langue-francais-nationalite-titre-sejour-a2-b1-2026",
  titre: "Niveau de langue français pour la nationalité et le titre de séjour 2026 : A2, B1, DELF, TCF, guide complet",
  titreSeo: "Niveau de langue français pour la nationalité et le titre de séjour 2026 : A2, B1, DELF, TCF, guide complet",
  resume: "Quel niveau de français pour la nationalité française ? B1 obligatoire. Pour le titre de séjour ? A2. Comparatif DELF vs TCF vs TEF, prix, dispenses et méthodes gratuites pour atteindre le niveau requis en 2026.",
  chapo: "Quel **niveau de français** faut-il pour obtenir la **nationalité française** ? Et pour un **titre de séjour** ? En 2026, la maîtrise de la langue française est un **critère légal incontournable** dans presque toutes les démarches d'immigration en France. Selon votre situation (naturalisation, carte de séjour pluriannuelle, carte de résident, regroupement familial), le **niveau requis varie de A2 à B1** sur l'échelle du **CECRL** (Cadre Européen Commun de Référence pour les Langues).",
  publieLe: "2026-03-29",
  modifieLe: "2026-03-29",
  minutes: 20,
  theme: "niveau de langue nationalité française",
  motsCles: [
    "niveau de langue nationalité française",
    "niveau français naturalisation",
    "niveau B1 français naturalisation",
    "niveau A2 titre de séjour",
    "DELF B1 naturalisation",
    "TCF nationalité française",
    "test de français naturalisation",
    "niveau de français pour carte de séjour",
    "CECRL niveau français immigration",
    "cours de français gratuit étranger",
    "TCF ANF",
    "TEF naturalisation",
    "niveau langue carte de résident",
    "dispense test langue naturalisation",
    "français pour étrangers France",
    "apprendre français naturalisation",
    "Alliance Française niveau B1",
    "OFII cours français gratuit",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8",
  },
  blocs: [
    {
      type: "p",
      texte: "Cet article vous explique **précisément** quel niveau est exigé pour chaque démarche, **quels diplômes et tests sont acceptés** (TCF, DELF, TEF), **où et comment passer ces tests**, **combien ça coûte**, et comment atteindre le niveau requis même si vous partez de zéro.",
    },
    {
      type: "h2",
      texte: "Les niveaux de français A1, A2, B1, B2 : comprendre le CECRL",
      id: "niveaux-cecrl-expliques",
    },
    {
      type: "p",
      texte: "Le **CECRL** (Cadre Européen Commun de Référence pour les Langues) est le standard international pour évaluer la maîtrise d'une langue. Voici les niveaux qui concernent les démarches d'immigration en France :",
    },
    {
      type: "tableau",
      entetes: ["Niveau", "Description", "Capacité"],
      lignes: [
        [
          "**A1**",
          "Débutant",
          "Comprendre et utiliser des phrases très simples (se présenter, acheter)",
        ],
        [
          "**A2**",
          "Élémentaire",
          "Communiquer sur des sujets familiers (famille, travail, courses)",
        ],
        [
          "**B1**",
          "Intermédiaire",
          "Comprendre l'essentiel sur des sujets courants, donner son avis, raconter un événement",
        ],
        [
          "**B2**",
          "Avancé",
          "Comprendre des textes complexes, s'exprimer avec aisance et spontanéité",
        ],
      ],
    },
    { type: "p", texte: "**En résumé pour l'immigration :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**A2** → Minimum pour la plupart des titres de séjour",
        "**B1 oral** → Obligatoire pour la naturalisation",
        "**B1 écrit + oral** → Recommandé pour la naturalisation (certaines préfectures l'exigent)",
      ],
    },
    {
      type: "p",
      texte: "→ **Source :** [Conseil de l'Europe, CECRL](https://www.coe.int/fr/web/common-european-framework-reference-languages)",
    },
    {
      type: "h2",
      texte: "Niveau de français pour la naturalisation : B1 obligatoire",
      id: "niveau-langue-naturalisation",
    },
    {
      type: "p",
      texte: "Pour obtenir la **nationalité française par naturalisation**, vous devez justifier d'un **niveau B1 oral minimum**. C'est une condition légale fixée par le **Code civil (article 21-24)**.",
    },
    { type: "p", texte: "**Ce que B1 oral signifie concrètement :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous pouvez **comprendre l'essentiel** d'une conversation en français courant",
        "Vous pouvez **exprimer votre opinion**, raconter une expérience, parler de vos projets",
        "Vous pouvez **participer à l'entretien d'assimilation** à la préfecture en français",
      ],
    },
    { type: "p", texte: "**Comment prouver votre niveau B1 ?**" },
    { type: "p", texte: "Vous devez fournir l'un de ces documents :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**DELF B1** : Diplôme d'Études en Langue Française (valable à vie)",
        "**TCF ANF** : Test de Connaissance du Français pour l'Accès à la Nationalité Française (valable 2 ans)",
        "**TEF Naturalisation** : Test d'Évaluation de Français (valable 2 ans)",
        "**Diplôme français** : Un diplôme obtenu en France (bac, BTS, licence…) dispense du test de langue",
      ],
    },
    {
      type: "p",
      texte: "**⚠️ Attention :** Le niveau B1 est évalué sur les **4 compétences** : compréhension orale, expression orale, compréhension écrite, expression écrite. Certaines préfectures exigent B1 sur **toutes les compétences**, pas uniquement l'oral.",
    },
    {
      type: "p",
      texte: "→ **Source officielle :** [Service-public.fr, Condition de connaissance de la langue française](https://www.service-public.fr/particuliers/vosdroits/F2213)",
    },
    {
      type: "h2",
      texte: "Niveau de français pour le titre de séjour : A2 minimum",
      id: "niveau-langue-titre-sejour",
    },
    {
      type: "p",
      texte: "Pour obtenir ou renouveler un **titre de séjour pluriannuel**, le niveau **A2** est exigé depuis le **décret du 1er janvier 2019**.",
    },
    { type: "p", texte: "**Détail par type de titre de séjour :**" },
    {
      type: "tableau",
      entetes: ["Titre de séjour", "Niveau requis", "Justificatif"],
      lignes: [
        [
          "**Carte de séjour pluriannuelle** (1re délivrance)",
          "A2",
          "DELF A2, TCF, ou attestation CIR",
        ],
        ["**Carte de séjour pluriannuelle** (renouvellement)", "A2", "Maintien du niveau"],
        ["**Carte de résident 10 ans**", "A2", "DELF A2, TCF, TEF"],
        ["**Carte de séjour \"vie privée et familiale\"**", "A2", "Après le CIR"],
        [
          "**Carte de séjour \"salarié/travailleur temporaire\"**",
          "Non exigé (mais recommandé)",
          "",
        ],
        ["**Carte de séjour \"étudiant\"**", "Non exigé", "Inscription universitaire suffit"],
        ["**Naturalisation**", "**B1**", "DELF B1, TCF ANF, TEF"],
      ],
    },
    { type: "p", texte: "**Le rôle du CIR (Contrat d'Intégration Républicaine) :**" },
    {
      type: "p",
      texte: "Lors de votre premier titre de séjour, vous signez un **CIR** avec l'OFII. Ce contrat inclut :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Un **test de positionnement linguistique** (gratuit)",
        "Si votre niveau est inférieur à A1 : **jusqu'à 600 heures de cours de français gratuits**",
        "Une **formation civique** de 4 jours",
        "Un **entretien personnalisé**",
      ],
    },
    {
      type: "p",
      texte: "→ **Source officielle :** [OFII, Le Contrat d'Intégration Républicaine](https://www.ofii.fr/le-contrat-d-integration-republicaine/)",
    },
    {
      type: "h2",
      texte: "TCF, DELF, TEF : quel test de français choisir en 2026 ?",
      id: "tests-langue-tcf-delf-tef",
    },
    {
      type: "p",
      texte: "Il existe **3 principaux tests de français** reconnus pour les démarches d'immigration. Voici le comparatif complet :",
    },
    { type: "p", texte: "**1. DELF (Diplôme d'Études en Langue Française)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "✅ **Valable à vie** : c'est un diplôme, pas un test",
        "✅ Reconnu partout dans le monde",
        "💰 Prix : 100 à 200 € selon le centre et le niveau",
        "📍 Où passer : Centres d'examen agréés (Alliance Française, universités)",
        "⏱️ Résultats : 4 à 6 semaines",
        "🎯 Recommandé pour : naturalisation (DELF B1), titre de séjour (DELF A2)",
      ],
    },
    { type: "p", texte: "**2. TCF (Test de Connaissance du Français)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "⚠️ **Valable 2 ans**",
        "✅ Résultats plus rapides (2-3 semaines)",
        "💰 Prix : 80 à 150 € selon la version",
        "📍 Où passer : Centres agréés par France Éducation international",
        "🎯 Versions spécifiques : TCF ANF (naturalisation), TCF IRN (intégration/naturalisation)",
      ],
    },
    { type: "p", texte: "**3. TEF (Test d'Évaluation de Français)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "⚠️ **Valable 2 ans**",
        "✅ Disponible en format numérique",
        "💰 Prix : 120 à 180 €",
        "📍 Où passer : CCI (Chambre de Commerce et d'Industrie)",
        "🎯 Version spécifique : TEF Naturalisation",
      ],
    },
    { type: "p", texte: "**Notre recommandation :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pour la **naturalisation** → passez le **DELF B1** (valable à vie, pas besoin de le repasser)",
        "Pour un **titre de séjour urgent** → passez le **TCF** (résultats plus rapides)",
        "Si vous avez un **bon niveau** → visez le **DELF B2** directement (plus valorisant dans le dossier)",
      ],
    },
    {
      type: "p",
      texte: "→ **Source officielle :** [France Éducation International, Diplômes et tests](https://www.france-education-international.fr/hub/diplomes-tests)",
    },
    {
      type: "h2",
      texte: "Comment atteindre le niveau A2 ou B1 : méthodes et ressources gratuites",
      id: "comment-atteindre-niveau-requis",
    },
    {
      type: "p",
      texte: "Que vous partiez de zéro ou que vous ayez déjà des bases, voici un **plan concret** pour atteindre le niveau requis :",
    },
    { type: "p", texte: "**De 0 à A2 (6 à 12 mois)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "📚 **Cours OFII gratuits** : jusqu'à 600 heures de français si votre niveau initial est inférieur à A1",
        "📱 **Applications gratuites** : Duolingo (gratuit), TV5 Monde \"Apprendre le français\" (gratuit)",
        "🎥 **YouTube** : chaîne \"Français avec Pierre\", \"Français Authentique\"",
        "🏫 **Associations** : cours de français gratuits en mairie ou en association (Croix-Rouge, Secours populaire, Emmaüs)",
      ],
    },
    { type: "p", texte: "**De A2 à B1 (3 à 6 mois supplémentaires)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "📰 **Lire l'actualité** en français simplifié : [RFI, Journal en français facile](https://francaisfacile.rfi.fr/)",
        "📺 **Regarder la télé française** avec sous-titres (France 2, Arte, TF1)",
        "🗣️ **Pratiquer l'oral** : conversation avec des Français, groupes de discussion Meetup",
        "📝 **Écrire quotidiennement** : journal personnel, messages, résumés d'articles",
        "🏫 **Alliance Française** : cours intensifs (payants mais très efficaces)",
      ],
    },
    { type: "p", texte: "**Ressources 100% gratuites :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "[TV5 Monde : Apprendre le français](https://apprendre.tv5monde.com/) : Exercices interactifs gratuits",
        "[RFI : Français facile](https://francaisfacile.rfi.fr/) : Journal en français simplifié",
        "[FUN-MOOC](https://www.fun-mooc.fr/) : Cours en ligne gratuits des universités françaises",
        "Bibliothèques municipales : Livres, journaux et parfois cours de conversation gratuits",
      ],
    },
    {
      type: "p",
      texte: "💡 **Conseil :** Combinez votre apprentissage du français avec votre préparation au test civique. En révisant les valeurs de la République, les institutions et l'histoire de France, vous améliorez votre français ET vous préparez l'examen civique en même temps.",
    },
    {
      type: "h2",
      texte: "Dispenses de test de langue : qui est concerné ?",
      id: "dispenses-niveau-langue",
    },
    {
      type: "p",
      texte: "Certaines personnes sont **dispensées** de fournir un justificatif de niveau de français :",
    },
    { type: "p", texte: "**Dispenses pour la naturalisation :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "✅ Titulaire d'un **diplôme français** de niveau CAP minimum (brevet, bac, BTS, licence, master…)",
        "✅ Titulaire d'un diplôme de **français langue étrangère** (FLE) de niveau B1 minimum",
        "✅ Personnes de plus de **65 ans** (dispense partielle, appréciation au cas par cas)",
        "✅ Personnes souffrant d'un **handicap ou d'un état de santé** rendant impossible la passation du test (certificat médical requis)",
      ],
    },
    { type: "p", texte: "**Dispenses pour le titre de séjour :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "✅ Étudiants (la carte \"étudiant\" n'exige pas de niveau de français)",
        "✅ Passeport talent / salarié en mission (pas d'exigence linguistique formelle)",
        "✅ Titulaire d'un diplôme français",
      ],
    },
    {
      type: "p",
      texte: "**⚠️ Important :** Même si vous êtes dispensé du test de langue, la **maîtrise orale du français** sera évaluée lors de l'**entretien d'assimilation** à la préfecture. Un agent vérifiera que vous pouvez communiquer en français. Si votre français est insuffisant, votre dossier peut être **ajourné**.",
    },
    {
      type: "p",
      texte: "→ **Source officielle :** [Service-public.fr, Naturalisation et langue française](https://www.service-public.fr/particuliers/vosdroits/F2213)",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le **niveau de français** est un pilier de votre parcours d'intégration en France. Que vous visiez un **titre de séjour (A2)** ou la **nationalité française (B1)**, le plus important est de **commencer tôt** et de **pratiquer régulièrement**. Les ressources gratuites existent (OFII, TV5 Monde, RFI, associations) : profitez-en. Et n'oubliez pas : en préparant votre **test civique sur Test Civique France**, vous améliorez aussi votre français, puisque toutes les questions et cours sont en français. C'est un double investissement gagnant.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quel niveau de français faut-il pour la nationalité française ?",
      reponse: "Il faut justifier d'un niveau B1 minimum sur le CECRL, en compréhension et expression orales. Certaines préfectures exigent aussi le B1 à l'écrit. Vous devez fournir un DELF B1, un TCF ANF ou un TEF naturalisation.",
    },
    {
      question: "Quel niveau de français pour un titre de séjour pluriannuel ?",
      reponse: "Le niveau A2 est requis pour obtenir une carte de séjour pluriannuelle et pour la carte de résident de 10 ans. Vous pouvez prouver ce niveau avec un DELF A2, un TCF ou une attestation du CIR.",
    },
    {
      question: "Le DELF ou le TCF : lequel choisir ?",
      reponse: "Le DELF est un diplôme valable à vie, idéal pour la naturalisation. Le TCF est un test valable 2 ans, avec des résultats plus rapides. Pour la naturalisation, le DELF B1 est recommandé car vous n'aurez jamais à le repasser.",
    },
    {
      question: "Combien coûte le test de français pour la naturalisation ?",
      reponse: "Le DELF B1 coûte entre 100 et 200 € selon le centre. Le TCF ANF coûte entre 80 et 150 €. Le TEF naturalisation coûte entre 120 et 180 €.",
    },
    {
      question: "Peut-on être dispensé du test de français ?",
      reponse: "Oui, si vous avez un diplôme français (CAP minimum), un diplôme FLE de niveau B1+, si vous avez plus de 65 ans, ou si un handicap rend la passation impossible (certificat médical nécessaire).",
    },
    {
      question: "Où prendre des cours de français gratuits en France ?",
      reponse: "L'OFII propose jusqu'à 600 heures gratuites dans le cadre du CIR. Les mairies, la Croix-Rouge, le Secours populaire et les associations locales offrent aussi des cours gratuits. En ligne : TV5 Monde, RFI Français Facile, Duolingo.",
    },
    {
      question: "Le test civique et le test de français sont-ils différents ?",
      reponse: "Oui. Le test civique (40 QCM, 90 €) évalue vos connaissances sur la République, les institutions et la vie en France. Le test de langue (DELF, TCF, TEF) évalue votre maîtrise du français. Les deux sont nécessaires.",
    },
    {
      question: "Combien de temps pour passer de A2 à B1 ?",
      reponse: "En moyenne 3 à 6 mois avec une pratique régulière (minimum 5 heures par semaine). Avec des cours intensifs à l'Alliance Française, cela peut aller plus vite.",
    },
  ],
  videos: [
    { id: "3qVP23bP6ck", titre: "DELF B1 : tout ce qu'il faut savoir" },
    { id: "hkJBU8MjWKs", titre: "Les institutions de la Ve République - Vie publique" },
  ],
  sources: [
    {
      titre: "Service-public.fr, Condition de connaissance de la langue française",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      description: "Conditions linguistiques pour la naturalisation.",
    },
    {
      titre: "OFII : Le Contrat d'Intégration Républicaine",
      url: "https://www.ofii.fr/le-contrat-d-integration-republicaine/",
      type: "officiel",
      description: "Cours de français gratuits dans le cadre du CIR.",
    },
    {
      titre: "France Éducation International : Diplômes et tests",
      url: "https://www.france-education-international.fr/hub/diplomes-tests",
      type: "officiel",
      description: "Informations sur le TCF, DELF et les certifications de français.",
    },
    {
      titre: "Conseil de l'Europe : CECRL",
      url: "https://www.coe.int/fr/web/common-european-framework-reference-languages",
      type: "officiel",
      description: "Cadre européen de référence pour les niveaux de langue.",
    },
    {
      titre: "TV5 Monde : Apprendre le français",
      url: "https://apprendre.tv5monde.com/",
      type: "article",
      description: "Ressources gratuites pour apprendre le français en ligne.",
    },
    {
      titre: "RFI : Français facile",
      url: "https://francaisfacile.rfi.fr/",
      type: "article",
      description: "Actualités en français simplifié pour progresser.",
    },
  ],
};

export default article;
