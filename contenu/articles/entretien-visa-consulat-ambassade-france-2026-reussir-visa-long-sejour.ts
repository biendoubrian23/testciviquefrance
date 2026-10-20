import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-entretien-visa-consulat-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/entretien-visa-consulat-ambassade-france-2026-reussir-visa-long-sejour`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "entretien-visa-consulat-ambassade-france-2026-reussir-visa-long-sejour",
  titre: "Entretien et visa au consulat de France 2026 : réussir son rendez-vous et éviter le refus",
  titreSeo: "Entretien et visa au consulat de France 2026 : réussir son rendez-vous et éviter le refus",
  resume: "Rendez-vous au consulat ou à l'ambassade pour votre visa long séjour : ne le confondez pas avec l'entretien Campus France. Justificatifs à apporter, questions de l'agent, frais (99 €) et recours en cas de refus (Commission de Nantes, 2 mois).",
  chapo: "Vous avez votre admission, votre projet est prêt, il ne reste qu'une étape, et pas des moindres : **le rendez-vous au consulat ou à l'ambassade de France** pour obtenir votre visa long séjour. C'est souvent l'étape la plus redoutée, parce que c'est là que tout se joue : un dossier incomplet, une réponse maladroite sur votre projet ou des ressources insuffisantes peuvent entraîner un **refus de visa** qui fait tout repousser d'un an.",
  publieLe: "2026-06-25",
  modifieLe: "2026-06-25",
  minutes: 14,
  theme: "entretien visa consulat france",
  motsCles: [
    "entretien visa consulat france",
    "rendez-vous visa ambassade france",
    "visa long séjour étudiant france 2026",
    "VFS global france visa",
    "TLScontact visa france",
    "france-visas",
    "refus visa france recours",
    "commission recours refus visa nantes",
    "documents visa long séjour étudiant",
    "questions entretien visa france",
    "VLS-TS validation",
    "préparer entretien consulat france",
    "visa étudiant france justificatif ressources",
    "frais visa long séjour france",
    "réussir visa france",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
  },
  blocs: [
    {
      type: "p",
      texte: "Attention à ne pas confondre deux entretiens distincts : l'**entretien Campus France** (sur votre projet d'études, en amont) et le **rendez-vous consulaire** pour le visa lui-même. Cet article traite du **second** : le passage au consulat de France ou au centre de visa partenaire (VFS Global, TLScontact), où vous déposez votre dossier, donnez vos empreintes et, dans certains pays, êtes reçu en entretien par un agent consulaire. Voici comment le préparer, quels justificatifs apporter, quelles questions anticiper, et que faire en cas de refus.",
    },
    {
      type: "h2",
      texte: "Entretien Campus France ≠ rendez-vous consulaire : ne confondez pas",
      id: "comprendre-rendez-vous-consulaire",
    },
    {
      type: "p",
      texte: "Beaucoup de candidats arrivent au consulat en pensant repasser l'entretien Campus France. Ce sont **deux étapes différentes**, avec des objectifs différents.",
    },
    {
      type: "tableau",
      entetes: ["Entretien Campus France", "Rendez-vous consulaire (visa)"],
      lignes: [
        ["Quand", "Avant l'admission (janv.-mars)", "Après l'admission (juin-août)"],
        [
          "Où",
          "Espace Campus France de votre pays",
          "Consulat de France ou centre VFS Global / TLScontact",
        ],
        [
          "Objet",
          "Cohérence et sérieux du **projet d'études**",
          "Délivrance du **visa long séjour**",
        ],
        ["Décision", "Avis (favorable / réservé / défavorable)", "Visa accordé ou **refusé**"],
      ],
    },
    {
      type: "p",
      texte: "Le visa long séjour le plus fréquent est le **VLS-TS** (Visa Long Séjour valant Titre de Séjour) : une fois en France, il devra être **validé en ligne dans les 3 mois** sur la plateforme ANEF, sinon il perd toute valeur.",
    },
    {
      type: "p",
      texte: "La demande de visa se prépare et se dépose via le portail officiel **[France-Visas (france-visas.gouv.fr)](https://france-visas.gouv.fr/)**, le site de référence de l'État pour toute demande de visa pour la France. C'est lui qui génère votre formulaire et la liste personnalisée des pièces à fournir selon votre situation.",
    },
    {
      type: "h2",
      texte: "VFS Global, TLScontact, entretien : à quoi s'attendre selon votre pays",
      id: "qui-passe-entretien",
    },
    {
      type: "p",
      texte: "Dans la plupart des pays, la France a confié la **réception des dossiers** à des prestataires privés : **VFS Global** ou **TLScontact**. Vous y déposez votre dossier papier, vous donnez vos **empreintes digitales et votre photo (biométrie)**, et vous payez les frais de service du centre (en plus des frais de visa).",
    },
    { type: "p", texte: "**Y a-t-il un vrai « entretien » ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pour beaucoup de visas, il n'y a **pas d'entretien formel** : c'est un rendez-vous de dépôt et de relevé biométrique.",
        "Mais le consulat peut **convoquer à un entretien** s'il a des doutes : projet flou, financement fragile, incohérences dans le dossier, ou simple contrôle aléatoire.",
        "Dans certains pays (notamment à forte demande), l'entretien est plus systématique.",
      ],
    },
    {
      type: "p",
      texte: "Préparez-vous **comme s'il y aurait un entretien** : c'est la meilleure assurance. Même au simple dépôt, un agent vérifie vos pièces et peut poser des questions.",
    },
    {
      type: "p",
      texte: "**Délais :** prenez votre rendez-vous **dès l'admission obtenue**. Les créneaux partent vite en juin-août. Comptez ensuite **2 à 3 semaines** (parfois plus) entre le dépôt et la réponse, anticipez par rapport à la date de rentrée.",
    },
    {
      type: "h2",
      texte: "Les justificatifs à apporter (visa long séjour étudiant)",
      id: "documents-a-apporter",
    },
    {
      type: "p",
      texte: "La liste exacte est générée par **France-Visas** selon votre profil. Pour un visa long séjour étudiant, on retrouve presque toujours :",
    },
    {
      type: "p",
      texte: "✅ **Passeport** valable (en général au moins 3 mois après la fin du visa) + anciens passeports",
    },
    { type: "p", texte: "✅ Formulaire de demande de visa **signé** + photos d'identité aux normes" },
    {
      type: "p",
      texte: "✅ **Attestation d'admission** dans l'établissement (ou « Études en France » validé)",
    },
    {
      type: "p",
      texte: "✅ **Justificatif de ressources** : environ **615 €/mois** pour la durée du séjour (attestation bancaire, attestation de bourse, attestation de prise en charge, ou compte bloqué selon le pays)",
    },
    {
      type: "p",
      texte: "✅ **Justificatif d'hébergement** en France (réservation CROUS, bail, attestation d'accueil, réservation provisoire)",
    },
    {
      type: "p",
      texte: "✅ **Assurance** couvrant les premiers temps (avant affiliation à la Sécurité sociale étudiante)",
    },
    {
      type: "p",
      texte: "✅ Justificatifs de **diplômes** et de **niveau de français** (TCF, DELF) le cas échéant",
    },
    { type: "p", texte: "✅ **Frais de visa** + frais de service du centre" },
    {
      type: "encadre",
      texte: "⚠️ **À vérifier sur votre liste personnalisée France-Visas** : le montant de ressources exigé, le nombre de photos, la durée de validité du passeport et les documents propres à votre pays peuvent varier. Ne vous fiez jamais à une liste générale trouvée sur un forum.",
      ton: "bleu",
    },
    {
      type: "p",
      texte: "**Frais de visa long séjour : 99 €** (tarif de référence), à compléter par les frais du centre VFS/TLS (variables selon les pays). Conservez **deux jeux de copies** de tout votre dossier.",
    },
    {
      type: "h2",
      texte: "Les questions que l'agent peut poser (et comment y répondre)",
      id: "questions-frequentes-agent",
    },
    {
      type: "p",
      texte: "Si vous êtes reçu en entretien, l'agent cherche une chose : **la sincérité et la cohérence** de votre projet. Pas de réponses apprises par cœur, soyez clair, précis et honnête.",
    },
    { type: "p", texte: "**1. « Pourquoi cette formation, et pourquoi en France ? »**" },
    {
      type: "p",
      texte: "Reliez la formation à votre parcours antérieur et à votre projet professionnel. Évitez le vague (« la France c'est mieux ») : citez l'établissement, 1 ou 2 atouts concrets de la formation.",
    },
    { type: "p", texte: "**2. « Comment financez-vous votre séjour ? »**" },
    {
      type: "p",
      texte: "Montrez que vous couvrez les **~615 €/mois** : bourse, parents, économies, compte bloqué. Soyez capable de nommer la source et le montant.",
    },
    { type: "p", texte: "**3. « Où allez-vous loger ? »**" },
    {
      type: "p",
      texte: "Même une solution provisoire (CROUS, foyer, hébergement chez un proche) rassure. Montrez que vous avez anticipé.",
    },
    { type: "p", texte: "**4. « Que comptez-vous faire après le diplôme ? »**" },
    {
      type: "p",
      texte: "Réponse cohérente avec votre projet. Si retour au pays prévu, expliquez le projet professionnel local ; si poursuite en France, restez réaliste (APS, emploi qualifié).",
    },
    { type: "p", texte: "**5. « Avez-vous de la famille en France ? »**" },
    {
      type: "p",
      texte: "Répondez la vérité. Mentir est le meilleur moyen de fragiliser tout le dossier.",
    },
    {
      type: "p",
      texte: "**Attitude :** ponctualité, tenue correcte, documents classés dans l'ordre de la liste, calme et politesse. Un dossier rangé envoie déjà un signal de sérieux.",
    },
    {
      type: "h2",
      texte: "Visa refusé : vos recours et les délais à ne pas rater",
      id: "refus-visa-recours",
    },
    {
      type: "p",
      texte: "Un refus de visa n'est **pas une fin de parcours**, mais les délais sont courts, agissez vite.",
    },
    { type: "p", texte: "**Motifs de refus les plus fréquents :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Ressources jugées **insuffisantes** ou non justifiées",
        "**Projet d'études** incohérent ou peu crédible",
        "Documents **manquants, faux ou non traduits**",
        "Doute sur la **volonté de quitter le territoire** à la fin du séjour",
      ],
    },
    { type: "p", texte: "**La procédure de recours :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Recours préalable obligatoire** devant la **Commission de recours contre les décisions de refus de visa (CRRV)**, basée à Nantes, dans un **délai de 2 mois** à compter de la notification du refus. C'est un préalable indispensable avant tout recours au juge.",
        "En cas de rejet (ou de silence pendant 2 mois valant rejet), **recours devant le Tribunal administratif de Nantes**, compétent pour les visas.",
      ],
    },
    { type: "p", texte: "**Nos conseils :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Demandez la **motivation** du refus (certains refus, notamment étudiants, doivent être motivés).",
        "Corrigez la cause réelle du refus avant de redéposer ou de contester (renforcer les ressources, clarifier le projet).",
        "Pour un refus complexe, faites-vous aider par une association spécialisée ou un avocat en droit des étrangers.",
      ],
    },
    {
      type: "encadre",
      texte: "Beaucoup de candidats ré-obtiennent leur visa simplement en **complétant le point faible** identifié, souvent les ressources ou l'hébergement.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Visa obtenu : les premières démarches à ne pas oublier",
      id: "apres-visa-arrivee",
    },
    {
      type: "p",
      texte: "Félicitations : mais le visa n'est que le début. Dès votre arrivée en France :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Validez votre VLS-TS** en ligne sur ANEF **dans les 3 mois** (paiement de la taxe OFII : **60 €** pour les étudiants). Sans validation, vous basculez en situation irrégulière.",
        "Ouvrez un **compte bancaire** et prenez une **carte SIM** française.",
        "Affiliez-vous à la **Sécurité sociale étudiante** et demandez votre carte Vitale.",
        "Sécurisez votre **logement** (bail, assurance habitation obligatoire).",
        "Demandez l'**APL** à la CAF si vous êtes locataire.",
      ],
    },
    {
      type: "encadre",
      texte: "📋 Pour ne rien oublier avant de partir, consultez notre **checklist de préparation du départ**, et une fois sur place, notre guide des **papiers à obtenir en arrivant en France**.",
      ton: "bleu",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le rendez-vous consulaire est l'étape qui transforme votre admission en départ réel. La clé : **un dossier impeccable et cohérent** (ressources, hébergement, projet), une posture sincère le jour J, et l'anticipation des créneaux. Préparez-vous comme s'il y aurait un entretien, même quand ce n'est qu'un dépôt : c'est la meilleure protection contre un refus. Et si le refus tombe quand même, vous avez **2 mois** pour saisir la Commission de recours de Nantes, souvent, corriger le point faible suffit à obtenir le visa au tour suivant. Une fois en France, n'oubliez pas la règle d'or : **valider votre VLS-TS dans les 3 mois**. C'est ce qui fait de votre visa un véritable titre de séjour.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "L'entretien Campus France et l'entretien au consulat, c'est la même chose ?",
      reponse: "Non. L'entretien Campus France a lieu avant l'admission et porte sur votre projet d'études ; il aboutit à un avis. Le rendez-vous consulaire (au consulat ou via VFS Global / TLScontact) a lieu après l'admission et sert à délivrer ou refuser le visa long séjour. Vous pouvez avoir un avis favorable de Campus France et tout de même voir votre visa refusé si le dossier consulaire est faible.",
    },
    {
      question: "Y a-t-il toujours un entretien au consulat pour un visa étudiant ?",
      reponse: "Pas systématiquement. Dans beaucoup de pays, le passage à VFS Global ou TLScontact est un simple dépôt de dossier avec relevé biométrique. Mais le consulat peut convoquer à un entretien en cas de doute. Préparez-vous toujours comme s'il y en avait un.",
    },
    {
      question: "Combien coûte le visa long séjour pour la France en 2026 ?",
      reponse: "Le tarif de référence des frais de visa long séjour est de 99 €, auxquels s'ajoutent les frais de service du centre VFS Global ou TLScontact (variables selon le pays). À l'arrivée en France, comptez aussi la taxe OFII de validation du VLS-TS (60 € pour les étudiants).",
    },
    {
      question: "Quel montant de ressources faut-il justifier pour un visa étudiant ?",
      reponse: "En général environ 615 €/mois pour la durée du séjour, justifiés par une attestation bancaire, une bourse, une prise en charge ou un compte bloqué selon les exigences de votre pays. Vérifiez toujours le montant exact sur votre liste personnalisée générée par France-Visas.",
    },
    {
      question: "Mon visa a été refusé : que puis-je faire ?",
      reponse: "Vous disposez d'un délai de 2 mois à compter de la notification pour saisir la Commission de recours contre les décisions de refus de visa (CRRV) à Nantes, c'est un recours préalable obligatoire. En cas de rejet, vous pouvez saisir le Tribunal administratif de Nantes. Identifiez d'abord le motif réel du refus (souvent les ressources ou le projet) pour le corriger.",
    },
  ],
  sources: [
    {
      titre: "France-Visas : portail officiel des visas pour la France",
      url: "https://france-visas.gouv.fr/",
      type: "officiel",
      description: "Site officiel de l'État pour préparer et déposer une demande de visa : formulaire, liste personnalisée des pièces, frais et prise de rendez-vous.",
    },
    {
      titre: "Service-Public.fr, Visa de long séjour valant titre de séjour (VLS-TS)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16162",
      type: "officiel",
      description: "Fiche officielle sur le VLS-TS : bénéficiaires, validation en ligne sur ANEF dans les 3 mois et taxes associées.",
    },
    {
      titre: "Commission de recours contre les décisions de refus de visa (CRRV)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F20121",
      type: "officiel",
      description: "Procédure et délai (2 mois) du recours préalable obligatoire contre un refus de visa, avant saisine du Tribunal administratif de Nantes.",
    },
    {
      titre: "Campus France : Obtenir son visa étudiant",
      url: "https://www.campusfrance.org/fr/visa-long-sejour-etudes-en-france",
      type: "officiel",
      description: "Informations officielles de Campus France sur le visa long séjour pour études et les justificatifs attendus.",
    },
  ],
  aLireAussi: [
    {
      slug: "campus-france-etude-france-2026-visa-inscription-procedure",
      ancre: "La procédure Campus France de A à Z",
    },
    {
      slug: "preparer-depart-france-2026-checklist-documents-avant-avion",
      ancre: "Checklist des documents à préparer avant le départ",
    },
    { slug: "visa-long-sejour-vls-ts-validation-ofii-2026", ancre: "Valider son VLS-TS à l'arrivée" },
    {
      slug: "papiers-documents-obtenir-arrivee-france-2026-ou-comment-demander",
      ancre: "Les papiers à obtenir une fois en France",
    },
  ],
};

export default article;
