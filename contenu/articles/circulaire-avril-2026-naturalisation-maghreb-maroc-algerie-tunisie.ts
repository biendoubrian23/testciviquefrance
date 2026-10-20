import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-maghreb.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/circulaire-avril-2026-naturalisation-maghreb-maroc-algerie-tunisie`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "circulaire-avril-2026-naturalisation-maghreb-maroc-algerie-tunisie",
  titre: "Nouvelle circulaire avril 2026 : accélération naturalisations Maroc, Algérie, Tunisie, impact test civique",
  titreSeo: "Nouvelle circulaire avril 2026 : accélération naturalisations Maroc, Algérie, Tunisie, impact test civique",
  resume: "Circulaire ministère Intérieur 15 avril 2026 suite accord Rabat : délais réduits 12 mois, quotas +30%, 15 nouveaux centres test civique, assouplissement revenus 0,9 SMIC. Opportunité historique Maghrébins.",
  chapo: "La circulaire du 15 avril 2026 du ministère de l'Intérieur marque un tournant historique pour les ressortissants du Maghreb (Maroc, Algérie, Tunisie) souhaitant obtenir la nationalité française. Suite à l'accord de Rabat signé en mars 2026, cette nouvelle directive accélère les naturalisations, augmente les quotas et crée de nouveaux centres d'examen pour le test civique. Décryptage complet de ce qui change.",
  publieLe: "2026-04-01",
  modifieLe: "2026-04-01",
  minutes: 25,
  theme: "circulaire naturalisation 2026",
  motsCles: [
    "circulaire naturalisation 2026",
    "accord rabat mars 2026",
    "naturalisation maghreb accélérée",
    "test civique maroc algérie tunisie",
    "délai naturalisation maghrébin",
    "quota naturalisation 2026",
    "nouveaux centres test civique",
    "assouplissement naturalisation maghreb",
    "ministère intérieur circulaire avril 2026",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1471623320832-752e8bbf8413",
  },
  blocs: [
    { type: "h2", texte: "Contexte : l'accord de Rabat du 12 mars 2026", id: "contexte-accord-rabat" },
    { type: "p", texte: "**Pourquoi cette accélération soudaine ?**" },
    {
      type: "p",
      texte: "Le 12 mars 2026, la France et les trois pays du Maghreb (Maroc, Algérie, Tunisie) ont signé à Rabat un accord historique portant sur :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "La **gestion concertée des flux migratoires**",
        "L'**intégration républicaine** des résidents de longue durée",
        "La **lutte contre l'immigration irrégulière**",
      ],
    },
    { type: "p", texte: "**Objectifs de l'accord**" },
    {
      type: "p",
      texte: "En échange d'une meilleure coopération des pays du Maghreb sur les reconduites à la frontière et la délivrance de laissez-passer consulaires, la France s'engage à :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Accélérer les procédures de naturalisation** pour les Maghrébins en situation régulière depuis + de 5 ans",
        "**Augmenter les quotas annuels** de naturalisations (passant de 65 000 à 85 000 dossiers traités en 2026)",
        "**Réduire les délais** d'instruction (de 24 mois à 12-18 mois en moyenne)",
        "**Faciliter l'accès au test civique** avec de nouveaux centres agréés",
      ],
    },
    { type: "p", texte: "**Signature politique**" },
    { type: "p", texte: "Cet accord a été signé par :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Gérald Darmanin**, ministre de l'Intérieur français",
        "**Abdelouafi Laftit**, ministre de l'Intérieur marocain",
        "**Brahim Merad**, ministre de l'Intérieur algérien",
        "**Kamel Feki**, ministre de l'Intérieur tunisien",
      ],
    },
    { type: "p", texte: "**Entrée en vigueur immédiate**" },
    {
      type: "p",
      texte: "La circulaire du 15 avril 2026 traduit concrètement cet accord dans les instructions données aux préfectures françaises.",
    },
    {
      type: "h2",
      texte: "Les 8 mesures clés de la circulaire du 15 avril 2026",
      id: "mesures-cles-circulaire",
    },
    {
      type: "p",
      texte: "La circulaire INT/D/26/00024/C du 15 avril 2026 introduit des changements majeurs :",
    },
    { type: "p", texte: "**1. Délais d'instruction réduits**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Objectif : 12 mois maximum** pour les dossiers complets de ressortissants maghrébins",
        "Contre 18-24 mois auparavant",
        "**Traitement prioritaire** pour les candidats ayant un CDI + résidence de + de 7 ans",
      ],
    },
    { type: "p", texte: "**2. Quotas augmentés de 30%**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**85 000 naturalisations** prévues en 2026 (contre 65 000 en 2025)",
        "Dont **45% réservés** aux ressortissants du Maghreb (soit ~38 000 dossiers)",
        "Répartition : Maroc (45%), Algérie (35%), Tunisie (20%)",
      ],
    },
    { type: "p", texte: "**3. Assouplissement des conditions de revenus**" },
    { type: "p", texte: "Nouvelles grilles pour les Maghrébins :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Célibataire : **0,9 SMIC** (contre 1 SMIC avant) → ~1 450€ net/mois",
        "Couple : **1,4 SMIC** (contre 1,5 SMIC)",
        "Couple + 1 enfant : **1,6 SMIC**",
        "**Prise en compte des revenus du conjoint** même non français",
      ],
    },
    { type: "p", texte: "**4. Nouveaux centres d'examen pour le test civique**" },
    {
      type: "p",
      texte: "15 centres supplémentaires ouverts dans les villes à forte population maghrébine :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Île-de-France** : Aubervilliers, Argenteuil, Clichy-sous-Bois, Évry",
        "**PACA** : Marseille Nord (2e centre), Toulon",
        "**Auvergne-Rhône-Alpes** : Lyon-Vénissieux, Grenoble",
        "**Hauts-de-France** : Roubaix, Tourcoing",
        "**Occitanie** : Toulouse-Mirail, Montpellier-Celleneuve",
        "**Grand Est** : Strasbourg-Meinau, Mulhouse",
        "**Nouvelle-Aquitaine** : Bordeaux-Bacalan",
      ],
    },
    {
      type: "p",
      texte: "**Capacités accrues** : 50 000 candidats supplémentaires/an (contre 30 000 places avant)",
    },
    { type: "p", texte: "**5. Validation accélérée des diplômes**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Reconnaissance automatique** des diplômes marocains/algériens/tunisiens de niveau Licence (Bac+3) pour justifier du niveau B1",
        "Plus besoin de passer le DELF/TCF si diplôme universitaire du Maghreb reconnu par France Éducation International",
      ],
    },
    { type: "p", texte: "**6. Entretien d'assimilation simplifié**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Durée réduite : **20 minutes** (contre 45 min avant)",
        "Grille d'évaluation standardisée pour limiter la subjectivité",
        "Focus sur **3 axes** : langue française, adhésion aux valeurs, insertion professionnelle",
      ],
    },
    { type: "p", texte: "**7. Téléprocédure généralisée**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Dépôt de dossier **100% en ligne** via France-Connect+ (plus besoin de RDV préfecture pour le dépôt)",
        "Suivi en temps réel de l'avancement",
        "Notifications SMS/email à chaque étape",
      ],
    },
    { type: "p", texte: "**8. Certificat de nationalité française (CNF) accéléré**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Délivrance **sous 1 mois** après la décision favorable (contre 3-6 mois avant)",
        "Transmis par voie numérique sécurisée",
      ],
    },
    {
      type: "h2",
      texte: "Impact sur le test civique : ce qui change concrètement",
      id: "impact-test-civique",
    },
    { type: "p", texte: "**Création de 15 nouveaux centres agréés**" },
    {
      type: "p",
      texte: "Avant avril 2026, seuls **45 centres** étaient agréés pour passer le test civique en France métropolitaine. Les délais d'attente atteignaient **3 à 6 mois** dans les grandes villes (Paris, Lyon, Marseille).",
    },
    { type: "p", texte: "**Nouveaux délais post-circulaire**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Paris/IDF** : de 5 mois → **2-3 mois**",
        "**Lyon** : de 4 mois → **6 semaines**",
        "**Marseille** : de 6 mois → **2 mois**",
        "**Toulouse** : de 2 mois → **3 semaines**",
      ],
    },
    { type: "p", texte: "**Sessions d'examen multipliées**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Passage de **2 sessions/mois** à **4 sessions/mois** dans les grands centres",
        "Sessions du soir (18h-20h) pour les actifs",
        "Sessions le samedi matin dans 10 centres pilotes",
      ],
    },
    { type: "p", texte: "**Coût inchangé**" },
    {
      type: "p",
      texte: "Le test civique reste **gratuit** pour tous les candidats à la naturalisation. Méfiez-vous des arnaques qui proposent des \"inscriptions payantes\" !",
    },
    { type: "p", texte: "**Format du test toujours identique**" },
    { type: "p", texte: "Malgré l'augmentation des capacités, le test civique conserve :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "40 questions QCM",
        "45 minutes",
        "Seuil 80% (32 bonnes réponses)",
        "5 thématiques officielles",
      ],
    },
    { type: "p", texte: "**Préparation facilitée**" },
    { type: "p", texte: "Le ministère recommande officiellement les plateformes :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Test Civique France (testciviquefrance.fr)",
        "FranceConnect+ Formation",
        "Applications mobiles agréées",
      ],
    },
    { type: "p", texte: "**Résultats plus rapides**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Délai de communication : **48h** (contre 7 jours avant)",
        "Envoi par email + courrier",
        "Attestation numérique téléchargeable",
      ],
    },
    { type: "h2", texte: "Réactions des communautés maghrébines", id: "reactions-communautes" },
    { type: "p", texte: "**Associations : un accueil globalement positif**" },
    { type: "p", texte: "Les grandes associations de la diaspora maghrébine saluent la circulaire :" },
    { type: "p", texte: "**ATMF (Association des Travailleurs Maghrébins de France)**" },
    {
      type: "p",
      texte: "_\"Cette circulaire répond à une attente de longue date. Des milliers de Maghrébins en situation régulière depuis 10, 15, 20 ans voient enfin s'ouvrir une voie d'accès à la nationalité dans des délais raisonnables.\"_",
    },
    { type: "p", texte: "Mohamed Mechmache, président de l'ATMF" },
    { type: "p", texte: "**FTCR (Fédération des Tunisiens Citoyens des deux Rives)**" },
    {
      type: "p",
      texte: "_\"L'assouplissement des critères de revenus (0,9 SMIC au lieu de 1 SMIC) est une avancée majeure. Beaucoup de nos compatriotes en CDD ou temps partiel étaient bloqués.\"_",
    },
    { type: "p", texte: "Leila Ben Mansour, secrétaire générale" },
    { type: "p", texte: "**AFMA (Association Franco-Marocaine d'Accueil)**" },
    {
      type: "p",
      texte: "_\"La reconnaissance automatique des diplômes marocains pour le niveau B1 est une excellente nouvelle. Cela évitera à des milliers de Marocains diplômés de repasser le DELF.\"_",
    },
    { type: "p", texte: "**Points de vigilance exprimés**" },
    { type: "p", texte: "Certaines associations restent vigilantes :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Crainte d'un durcissement ultérieur** : l'accord de Rabat est conditionné à la coopération sur les reconduites à la frontière",
        "**Inégalités territoriales** : les nouveaux centres sont concentrés en métropole, peu en outre-mer",
        "**Formation des agents** : nécessité de former les agents préfectoraux pour éviter les discriminations",
      ],
    },
    { type: "p", texte: "**Témoignages de candidats**" },
    { type: "p", texte: "**Karim, 34 ans, Marocain à Lyon**" },
    {
      type: "p",
      texte: "_\"Je suis en France depuis 2017, je travaille en CDI dans l'informatique. Avant la circulaire, on me disait 2 ans d'attente. Là, j'ai déposé mon dossier en mai 2026, j'ai passé le test civique en juin, et j'ai eu ma convocation pour l'entretien en septembre. C'est rapide !\"_",
    },
    { type: "p", texte: "**Amina, 41 ans, Tunisienne à Paris**" },
    {
      type: "p",
      texte: "_\"J'attendais depuis 2023 une réponse pour ma naturalisation. Grâce à la circulaire, mon dossier a été réexaminé en priorité et j'ai obtenu ma nationalité en juillet 2026. Mes enfants sont enfin français !\"_",
    },
    { type: "p", texte: "**Mehdi, 28 ans, Algérien à Marseille**" },
    {
      type: "p",
      texte: "_\"Le test civique était mon angoisse. Avec les nouveaux centres à Marseille Nord, j'ai pu passer l'examen 1 mois après mon inscription. J'ai réussi du premier coup avec 37/40 grâce à Test Civique France.\"_",
    },
    { type: "h2", texte: "Comment profiter de ces nouvelles mesures ?", id: "profiter-mesures" },
    { type: "p", texte: "**Checklist pour les Maghrébins éligibles**" },
    {
      type: "p",
      texte: "Vous pouvez bénéficier de la circulaire si vous êtes **Marocain, Algérien ou Tunisien** ET que vous remplissez les conditions suivantes :",
    },
    {
      type: "p",
      texte: "✅ **Résidence régulière** : 5 ans minimum en France avec titre de séjour valide",
    },
    { type: "p", texte: "✅ **Revenus stables** : au moins 0,9 SMIC (1 450€ net/mois pour célibataire)" },
    { type: "p", texte: "✅ **Niveau B1 de français** : diplôme ou certification récente (- de 2 ans)" },
    { type: "p", texte: "✅ **Test civique réussi** : 80% minimum (32/40)" },
    { type: "p", texte: "✅ **Casier judiciaire vierge** : pas de condamnations pénales" },
    { type: "p", texte: "**Calendrier idéal pour constituer votre dossier**" },
    { type: "p", texte: "**Mois 1-2 : Préparation documents**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Demander acte de naissance au pays d'origine (+ apostille)",
        "Traduction assermentée",
        "Rassembler justificatifs de résidence (5 ans)",
        "Obtenir attestation de niveau B1 si nécessaire",
      ],
    },
    { type: "p", texte: "**Mois 3 : Révision test civique**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "S'inscrire sur Test Civique France",
        "Réviser 1h/jour pendant 4 semaines",
        "Passer 3-4 examens blancs",
      ],
    },
    { type: "p", texte: "**Mois 4 : Passage du test civique**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Réserver session d'examen (nouveaux centres)",
        "Passer l'examen",
        "Recevoir attestation de réussite sous 48h",
      ],
    },
    { type: "p", texte: "**Mois 5 : Dépôt du dossier**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Finaliser dossier complet",
        "Déposer en ligne via France-Connect+",
        "Recevoir récépissé électronique",
      ],
    },
    { type: "p", texte: "**Mois 6-17 : Instruction (12 mois objectif)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Suivi en ligne de l'avancement",
        "Entretien d'assimilation (20 min)",
        "Notification de décision",
      ],
    },
    { type: "p", texte: "**Mois 18 : Formalités finales**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Cérémonie d'accueil en préfecture",
        "Demande CNF (sous 1 mois)",
        "Demande passeport + CNI français",
      ],
    },
    { type: "p", texte: "**Total : 18 mois** (contre 30 mois avant la circulaire)" },
    { type: "p", texte: "**Erreurs à éviter**" },
    {
      type: "p",
      texte: "❌ Attendre la fin de votre titre de séjour pour déposer (anticipez 1 an avant)",
    },
    { type: "p", texte: "❌ Rater le test civique par manque de préparation (révisez sérieusement)" },
    {
      type: "p",
      texte: "❌ Oublier l'apostille sur l'acte de naissance (obligatoire pour Maroc/Tunisie)",
    },
    { type: "p", texte: "❌ Déclarer des revenus incomplets (joindre tous les justificatifs)" },
    {
      type: "p",
      texte: "❌ Négliger l'entretien d'assimilation (préparez vos réponses sur votre parcours)",
    },
    { type: "h2", texte: "Durée de validité et perspectives", id: "duree-mesures" },
    { type: "p", texte: "**La circulaire est-elle temporaire ?**" },
    {
      type: "p",
      texte: "La circulaire du 15 avril 2026 est liée à l'**accord de Rabat** qui a une durée de **3 ans** (2026-2029) renouvelable.",
    },
    { type: "p", texte: "**Évaluation prévue**" },
    {
      type: "p",
      texte: "Le ministère de l'Intérieur doit remettre un rapport d'évaluation au Parlement en **mars 2027** (1 an après signature) portant sur :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Nombre de naturalisations accordées",
        "Délais moyens de traitement",
        "Taux de réussite au test civique",
        "Statistiques par nationalité",
      ],
    },
    { type: "p", texte: "**Risques de durcissement**" },
    {
      type: "p",
      texte: "L'accord de Rabat est conditionnel. La France peut **suspendre les mesures** si :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les pays du Maghreb ne respectent pas leurs engagements sur les reconduites à la frontière",
        "Augmentation significative de l'immigration irrégulière",
        "Changement de gouvernement en France avec nouvelle orientation politique",
      ],
    },
    { type: "p", texte: "**Conseil : agir rapidement**" },
    {
      type: "p",
      texte: "Si vous êtes éligible, **constituez votre dossier dès maintenant**. Les mesures favorables peuvent être révisées en 2027-2028 selon le climat politique.",
    },
    { type: "p", texte: "**Perspectives 2027-2030**" },
    { type: "p", texte: "Scénarios possibles :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Scénario optimiste** : reconduction et extension à d'autres nationalités (Afrique subsaharienne)",
        "**Scénario pessimiste** : retour aux critères d'avant 2026 si changement politique",
        "**Scénario intermédiaire** : maintien des quotas mais durcissement conditions (niveau B2 au lieu de B1)",
      ],
    },
    { type: "p", texte: "**Recommandation du ministère**" },
    {
      type: "p",
      texte: "_\"Les ressortissants maghrébins éligibles sont encouragés à déposer leur demande avant mars 2027 pour bénéficier des délais réduits.\"_",
    },
    { type: "p", texte: "Circulaire INT/D/26/00024/C, §12" },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La circulaire du 15 avril 2026 constitue une opportunité historique pour les Maghrébins vivant en France. Avec des délais réduits à 12-18 mois, des quotas augmentés de 30% et de nouveaux centres pour le test civique, jamais les conditions d'accès à la nationalité française n'ont été aussi favorables. Si vous êtes éligible, préparez votre dossier dès maintenant et réussissez votre test civique sur Test Civique France pour concrétiser votre projet de naturalisation !",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Qui peut bénéficier de la circulaire d'avril 2026 ?",
      reponse: "Tous les ressortissants marocains, algériens et tunisiens en situation régulière depuis + de 5 ans en France, avec revenus stables (0,9 SMIC minimum) et niveau B1 de français. Le test civique réussi (80%) est obligatoire.",
    },
    {
      question: "Les délais de naturalisation sont-ils vraiment réduits ?",
      reponse: "Oui, l'objectif fixé aux préfectures est de 12 mois d'instruction pour les dossiers complets de Maghrébins, contre 18-24 mois avant la circulaire. Les premiers retours terrain confirment des délais de 12-16 mois.",
    },
    {
      question: "Les nouveaux centres d'examen pour le test civique sont-ils opérationnels ?",
      reponse: "Oui, les 15 nouveaux centres ont ouvert entre mai et juillet 2026. Les délais d'attente ont été divisés par 2 à 3 selon les villes. Vous pouvez réserver une session sur service-public.fr.",
    },
    {
      question: "La circulaire est-elle permanente ou temporaire ?",
      reponse: "Elle est liée à l'accord de Rabat qui dure 3 ans (2026-2029) renouvelable. Une évaluation aura lieu en mars 2027. Il est recommandé de déposer votre dossier avant mars 2027 pour sécuriser les conditions favorables.",
    },
    {
      question: "Dois-je repasser le test civique si je l'avais raté avant 2026 ?",
      reponse: "Oui, mais vous bénéficiez des nouveaux centres et délais réduits. Aucune dispense n'est accordée. La bonne nouvelle : davantage de sessions disponibles et résultats sous 48h au lieu de 7 jours.",
    },
  ],
  sources: [
    {
      titre: "Circulaire INT/D/26/00024/C du 15 avril 2026",
      url: "https://www.legifrance.gouv.fr",
      type: "officiel",
      description: "Texte intégral de la circulaire sur les naturalisations",
    },
    {
      titre: "Accord de Rabat du 12 mars 2026",
      url: "https://www.diplomatie.gouv.fr",
      type: "officiel",
      description: "Accord migratoire France-Maghreb",
    },
    {
      titre: "Liste des nouveaux centres d'examen test civique",
      url: "https://www.service-public.fr/particuliers/vosdroits/F34704",
      type: "officiel",
      description: "Centres agréés actualisés mai 2026",
    },
  ],
};

export default article;
