import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-retraite-etrangers.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/retraite-etranger-france-2026-droits-aspa-pension-retour-pays`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "retraite-etranger-france-2026-droits-aspa-pension-retour-pays",
  titre: "Retraite des étrangers en France 2026 : droits, ASPA, pension, conventions bilatérales et retour au pays",
  titreSeo: "Retraite des étrangers en France 2026 : droits, ASPA, pension, conventions bilatérales et retour au pays",
  resume: "Droits à la retraite en France pour les étrangers : calcul de la pension, ASPA (minimum vieillesse ~1 012 €/mois), totalisation des trimestres via conventions bilatérales (Maroc, Algérie, Tunisie…), certificat de vie et conséquences du retour au pays. Guide complet 2026.",
  chapo: "Vous êtes étranger en France et vous vous interrogez sur vos droits à la retraite ? Que vous soyez salarié, indépendant ou en fin de carrière, la question de la pension de retraite est cruciale. Entre les trimestres cotisés en France, ceux acquis à l'étranger, l'ASPA (minimum vieillesse), les conventions bilatérales et les conséquences d'un éventuel retour au pays, le sujet est complexe. Ce guide fait le point complet en 2026 sur tous les droits à la retraite des résidents étrangers en France.",
  publieLe: "2026-04-06",
  modifieLe: "2026-04-06",
  minutes: 24,
  theme: "retraite étranger France",
  motsCles: [
    "retraite étranger France",
    "ASPA étranger conditions 2026",
    "pension retraite titre séjour",
    "retraite Maroc France convention",
    "minimum vieillesse étranger",
    "retour pays origine retraite",
    "certificat de vie retraite étranger",
    "trimestres retraite cotisés étranger",
    "convention bilatérale sécurité sociale France",
    "calcul retraite étranger France",
    "pension réversion étranger",
    "naturalisation retraité France",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  blocs: [
    {
      type: "h2",
      texte: "Les étrangers ont-ils droit à une retraite en France ?",
      id: "droits-retraite-etrangers-principe",
    },
    {
      type: "p",
      texte: "**Oui, les ressortissants étrangers qui ont travaillé et cotisé en France ont les mêmes droits à la retraite que les Français.** Le droit à la retraite ne dépend pas de la nationalité, mais des **cotisations versées** au régime français.",
    },
    { type: "h3", texte: "Le principe fondamental" },
    {
      type: "p",
      texte: "En France, le système de retraite est basé sur la **solidarité intergénérationnelle** et la **contributivité** : vous avez droit à une pension proportionnelle aux cotisations que vous avez versées, quelle que soit votre nationalité.",
    },
    { type: "h3", texte: "Conditions de base pour toucher une retraite française" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Avoir cotisé au moins 1 trimestre** au régime français (régime général, MSA, RSI/SSI, etc.)",
        "**Avoir atteint l'âge légal de départ** : **64 ans** en 2026 (suite à la réforme des retraites 2023)",
        "**En faire la demande** : la retraite n'est pas versée automatiquement, vous devez la demander 6 mois avant la date souhaitée",
      ],
    },
    { type: "h3", texte: "Titre de séjour et retraite" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pour **cotiser**, vous devez avoir un titre de séjour autorisant le travail",
        "Pour **percevoir** votre pension française, vous n'avez **pas besoin de résider en France** (la pension est versée partout dans le monde, sauf l'ASPA)",
        "Si vous retournez dans votre pays, la pension de base vous suit (mais pas certaines prestations sous conditions de résidence)",
      ],
    },
    {
      type: "h2",
      texte: "Comment est calculée la retraite d'un étranger en France ?",
      id: "calcul-retraite-etranger",
    },
    {
      type: "p",
      texte: "Le calcul suit exactement les mêmes règles que pour un Français. Voici les paramètres clés en 2026 :",
    },
    { type: "h3", texte: "La retraite de base (régime général : CNAV)" },
    {
      type: "p",
      texte: "**Formule :** Salaire annuel moyen × Taux × (Durée d'assurance / Durée requise)",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Salaire annuel moyen** : moyenne des 25 meilleures années de salaire (revalorisées)",
        "**Taux** : de 37,5 % (taux minimum, décote maximale) à **50 %** (taux plein)",
        "**Durée d'assurance** : trimestres cotisés en France + trimestres « assimilés »",
        "**Durée requise** : **172 trimestres** (43 ans) pour le taux plein pour les générations nées après 1965",
      ],
    },
    { type: "h3", texte: "Taux plein : quand l'obtenir ?" },
    { type: "p", texte: "Vous bénéficiez du taux plein (50 %) si :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous avez **172 trimestres** (tous régimes confondus, y compris les trimestres étrangers comptabilisés via convention bilatérale)",
        "**OU** vous avez atteint **67 ans** (âge du taux plein automatique), quel que soit le nombre de trimestres",
      ],
    },
    { type: "h3", texte: "La retraite complémentaire (Agirc-Arrco)" },
    {
      type: "p",
      texte: "Si vous étiez salarié du secteur privé, vous avez aussi cotisé à l'**Agirc-Arrco**. Le calcul est basé sur des **points** :",
    },
    { type: "p", texte: "**Pension complémentaire = Nombre de points × Valeur du point**" },
    { type: "p", texte: "En 2026, la valeur du point Agirc-Arrco est d'environ **1,4159 €**." },
    { type: "h3", texte: "Exemple concret" },
    {
      type: "p",
      texte: "Un étranger ayant travaillé 20 ans en France (80 trimestres) avec un salaire annuel moyen de 28 000 € :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Retraite de base : 28 000 × 50 % × (80/172) = **6 512 €/an** soit **543 €/mois**",
        "Retraite complémentaire : selon les points accumulés (estimation ~350 €/mois)",
        "**Total estimé : ~893 €/mois**",
      ],
    },
    {
      type: "p",
      texte: "Ce montant peut être complété par les trimestres cotisés à l'étranger (via convention bilatérale) ou par l'ASPA si vous résidez en France.",
    },
    {
      type: "h2",
      texte: "Conventions bilatérales : cumuler vos trimestres étrangers et français",
      id: "conventions-bilaterales-totalisation",
    },
    {
      type: "p",
      texte: "La France a signé des **conventions bilatérales de sécurité sociale** avec plus de 40 pays. Ces accords permettent de **totaliser** les périodes travaillées dans chaque pays pour le calcul de vos droits.",
    },
    { type: "h3", texte: "Principe de la totalisation" },
    { type: "p", texte: "Sans convention : seuls vos trimestres cotisés en France comptent." },
    {
      type: "p",
      texte: "Avec convention : vos trimestres cotisés dans le pays partenaire **s'ajoutent** pour déterminer votre droit à retraite et le calcul du taux.",
    },
    { type: "h3", texte: "Exemple" },
    {
      type: "p",
      texte: "Ahmed a travaillé 15 ans au Maroc (60 trimestres) puis 20 ans en France (80 trimestres). Total : 140 trimestres.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Sans convention** : la France calcule sa retraite sur 80 trimestres uniquement → décote possible",
        "**Avec convention franco-marocaine** : les 140 trimestres sont pris en compte pour le taux → meilleur taux, mais chaque pays verse sa part proportionnelle",
      ],
    },
    { type: "h3", texte: "Pays ayant une convention avec la France (liste principale)" },
    {
      type: "tableau",
      entetes: ["Zone", "Pays"],
      lignes: [
        ["**Maghreb**", "Maroc, Algérie, Tunisie"],
        [
          "**Afrique**",
          "Sénégal, Mali, Cameroun, Côte d'Ivoire, Congo, Gabon, Bénin, Togo, Niger, Burkina Faso, Mauritanie, Cap-Vert",
        ],
        [
          "**Europe (hors UE)**",
          "Turquie, Bosnie, Serbie, Monténégro, Kosovo, Macédoine du Nord, Andorre, Monaco",
        ],
        ["**Amériques**", "USA, Canada, Québec, Brésil, Chili, Argentine, Uruguay"],
        ["**Asie / Océanie**", "Japon, Corée du Sud, Inde, Israël, Philippines, Australie"],
        ["**UE/EEE/Suisse**", "Tous les pays (règlements européens 883/2004)"],
      ],
    },
    { type: "h3", texte: "Comment faire valoir vos trimestres étrangers ?" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Lors de votre demande de retraite**, indiquez vos périodes d'activité à l'étranger",
        "La **CNAV (ou votre caisse)** contacte l'organisme de retraite du pays partenaire",
        "Chaque pays calcule sa **part proportionnelle** et vous verse sa pension séparément",
        "Le délai de traitement est plus long (6-12 mois) en raison des échanges entre caisses",
      ],
    },
    { type: "h3", texte: "Pays sans convention" },
    {
      type: "p",
      texte: "Si vous avez travaillé dans un pays **sans convention** (ex : Chine, Russie, Égypte, Nigéria...), ces trimestres **ne comptent pas** pour la retraite française. Vous devrez faire une demande séparée auprès du régime de ce pays.",
    },
    {
      type: "h2",
      texte: "L'ASPA (minimum vieillesse) : conditions spécifiques pour les étrangers",
      id: "aspa-minimum-vieillesse",
    },
    {
      type: "p",
      texte: "L'**Allocation de Solidarité aux Personnes Âgées (ASPA)** est une prestation qui garantit un revenu minimum aux personnes de 65 ans et plus ayant de faibles ressources. En 2026, elle est d'environ **1 012 € par mois** pour une personne seule et **1 571 €** pour un couple.",
    },
    { type: "h3", texte: "Conditions pour les étrangers" },
    { type: "p", texte: "Pour percevoir l'ASPA, un étranger doit :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Avoir 65 ans ou plus** (ou 62 ans si reconnu inapte au travail)",
        "**Résider en France de manière stable et régulière** (au moins **9 mois par an** sur le territoire français)",
        "**Disposer d'un titre de séjour** autorisant à travailler : carte de résident, carte de séjour pluriannuelle, ou titre de séjour depuis au moins 10 ans",
        "**Avoir des ressources inférieures au plafond** : 1 012 €/mois (personne seule) ou 1 571 €/mois (couple) en 2026",
      ],
    },
    { type: "h3", texte: "Titres de séjour acceptés pour l'ASPA" },
    {
      type: "tableau",
      entetes: ["Titre de séjour", "Éligible ASPA ?"],
      lignes: [
        ["Carte de résident (10 ans)", "✅ Oui"],
        ["Carte de séjour pluriannuelle", "✅ Oui (si autorise le travail)"],
        [
          "Carte de séjour temporaire (1 an)",
          "✅ Oui (si présence ≥ 10 ans avec titre autorisant le travail)",
        ],
        ["Récépissé de demande", "❌ Non"],
        ["Visa touristique", "❌ Non"],
        ["Sans-papiers", "❌ Non"],
      ],
    },
    { type: "h3", texte: "⚠️ La condition de résidence : le piège principal" },
    {
      type: "p",
      texte: "L'ASPA est **supprimée** si vous quittez la France plus de **3 mois consécutifs** ou si vous ne justifiez pas de **9 mois de résidence par an**. C'est le piège majeur pour les retraités étrangers qui souhaitent partager leur temps entre la France et leur pays d'origine.",
    },
    {
      type: "p",
      texte: "**Conséquence pratique** : si vous passez 4 mois au Maroc pour rendre visite à votre famille, vous risquez de perdre l'ASPA. La caisse de retraite peut effectuer des **contrôles** (courriers, convocations, vérification des passages aux frontières).",
    },
    { type: "h3", texte: "ASPA et récupération sur succession" },
    {
      type: "p",
      texte: "L'ASPA est **récupérable sur la succession** du bénéficiaire après son décès si l'actif net est supérieur à **100 000 €** (en métropole). Les sommes versées au titre de l'ASPA sont déduites de la succession. C'est un point que beaucoup ignorent.",
    },
    {
      type: "h2",
      texte: "Retour au pays d'origine : impact sur votre retraite française",
      id: "retour-pays-origine",
    },
    {
      type: "p",
      texte: "De nombreux étrangers envisagent de retourner dans leur pays d'origine à la retraite. Voici les conséquences sur vos droits :",
    },
    { type: "h3", texte: "Ce que vous conservez en retournant au pays" },
    {
      type: "p",
      texte: "✅ **Votre pension de retraite de base** (CNAV) est versée partout dans le monde",
    },
    {
      type: "p",
      texte: "✅ **Votre retraite complémentaire** (Agirc-Arrco) est versée partout dans le monde",
    },
    {
      type: "p",
      texte: "✅ **Le montant reste le même** (pas de réduction pour les résidents à l'étranger)",
    },
    {
      type: "p",
      texte: "✅ La pension est **revalorisée** chaque année comme pour les résidents en France",
    },
    { type: "h3", texte: "Ce que vous perdez en quittant la France" },
    {
      type: "p",
      texte: "❌ **L'ASPA** (minimum vieillesse) : supprimée si vous résidez hors de France plus de 3 mois consécutifs ou plus de 6 mois par an",
    },
    {
      type: "p",
      texte: "❌ **La complémentaire santé solidaire (C2S)** : liée à la résidence en France",
    },
    { type: "p", texte: "❌ **Les aides au logement (APL/ALS)** : liées à la résidence en France" },
    { type: "p", texte: "❌ **Certaines aides sociales** (RSA, etc.)" },
    { type: "h3", texte: "Fiscalité de la retraite versée à l'étranger" },
    { type: "p", texte: "Si vous êtes **non-résident fiscal** en France :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Votre pension française est soumise à une **retenue à la source** en France (taux progressif de 0 %, 12 % et 20 %)",
        "**Exception** : si une convention fiscale bilatérale prévoit que la retraite est imposable uniquement dans le pays de résidence (cas du Maroc, de l'Algérie et de la Tunisie pour les pensions du secteur privé)",
      ],
    },
    { type: "h3", texte: "Conventions fiscales : où serez-vous imposé ?" },
    {
      type: "tableau",
      entetes: ["Pays de retour", "Pension privée française", "Pension publique française"],
      lignes: [
        ["**Maroc**", "Imposable au Maroc uniquement", "Imposable en France"],
        ["**Algérie**", "Imposable en Algérie uniquement", "Imposable en France"],
        ["**Tunisie**", "Imposable en Tunisie uniquement", "Imposable en France"],
        ["**Turquie**", "Imposable en Turquie uniquement", "Imposable en France"],
        ["**Sénégal**", "Imposable au Sénégal uniquement", "Imposable en France"],
        [
          "**Pas de convention**",
          "Imposable en France (retenue à la source)",
          "Imposable en France",
        ],
      ],
    },
    { type: "h3", texte: "Le certificat de vie (ou certificat d'existence)" },
    {
      type: "p",
      texte: "Pour continuer à percevoir votre pension depuis l'étranger, vous devez envoyer un **certificat de vie** à votre caisse de retraite **chaque année** (parfois tous les 6 mois). Ce document, délivré par le consulat français ou les autorités locales, atteste que vous êtes en vie.",
    },
    {
      type: "p",
      texte: "**Attention** : si vous ne renvoyez pas le certificat de vie dans les délais, votre pension est **suspendue**.",
    },
    {
      type: "h2",
      texte: "Cas particuliers : conjoints rejoignants, réfugiés, travailleurs détachés",
      id: "cas-particuliers",
    },
    { type: "h3", texte: "Conjoints rejoignants (regroupement familial)" },
    {
      type: "p",
      texte: "Si vous êtes venu en France par le regroupement familial et n'avez **jamais travaillé** :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous n'avez **aucun droit à la retraite de base** (pas de cotisations)",
        "Vous pouvez bénéficier de l'**ASPA** à 65 ans si vous remplissez les conditions de résidence et de titre de séjour",
        "Vous pouvez aussi bénéficier d'une **pension de réversion** (54 % de la retraite de votre conjoint décédé) si votre conjoint a cotisé",
      ],
    },
    { type: "h3", texte: "Réfugiés et bénéficiaires de la protection subsidiaire" },
    {
      type: "p",
      texte: "Les réfugiés reconnus par l'OFPRA bénéficient des **mêmes droits** à la retraite que les Français. Leur carte de résident de 10 ans leur donne accès à l'ASPA sans condition de durée de séjour préalable.",
    },
    { type: "h3", texte: "Travailleurs détachés" },
    {
      type: "p",
      texte: "Si votre employeur vous a détaché en France pour une durée limitée, vos cotisations restent dans le régime de votre pays d'origine (pas de cotisation au régime français). Cela est régi par les conventions bilatérales et les règlements européens.",
    },
    { type: "h3", texte: "Travailleurs frontaliers" },
    { type: "p", texte: "Si vous résidez dans un pays limitrophe et travaillez en France :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous cotisez au régime français",
        "Vous percevez votre retraite française quel que soit votre lieu de résidence",
        "Les trimestres des deux pays sont totalisés (règlement européen 883/2004)",
      ],
    },
    { type: "h3", texte: "Personnes sans papiers ayant travaillé" },
    {
      type: "p",
      texte: "Si vous avez travaillé en France **sans titre de séjour** mais que des cotisations ont effectivement été versées (par l'employeur), ces trimestres **comptent** pour la retraite. Vous devrez régulariser votre situation pour faire valoir ces droits.",
    },
    {
      type: "h2",
      texte: "Démarches pratiques : comment demander votre retraite en 2026",
      id: "demarches-demande-retraite",
    },
    { type: "h3", texte: "Quand faire la demande ?" },
    {
      type: "p",
      texte: "Effectuez votre demande **6 mois avant la date souhaitée de départ**. Les délais de traitement sont souvent de 4-6 mois, voire plus si des trimestres étrangers doivent être vérifiés.",
    },
    { type: "h3", texte: "Comment faire la demande ?" },
    { type: "p", texte: "**En ligne** (recommandé) :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Connectez-vous sur **[lassuranceretraite.fr](https://www.lassuranceretraite.fr)** (régime général)",
        "Ou sur **[info-retraite.fr](https://www.info-retraite.fr)** (portail inter-régimes)",
        "Remplissez le formulaire de demande unique (qui couvre tous vos régimes)",
        "Téléchargez les pièces justificatives",
      ],
    },
    { type: "p", texte: "**Par courrier** :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Envoyez le formulaire Cerfa n° 10916 (retraite de base) à votre caisse régionale (CARSAT)",
        "Envoyez le formulaire de demande Agirc-Arrco séparément",
      ],
    },
    { type: "h3", texte: "Documents à fournir" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pièce d'identité (titre de séjour + passeport)",
        "Relevé de carrière (disponible sur [lassuranceretraite.fr](https://www.lassuranceretraite.fr))",
        "RIB bancaire",
        "Avis d'imposition",
        "Livret de famille",
        "Attestations de travail à l'étranger (si convention bilatérale)",
        "Certificats de travail des employeurs français",
      ],
    },
    { type: "h3", texte: "Vérifier votre relevé de carrière" },
    {
      type: "p",
      texte: "**Important** : consultez votre relevé de carrière **plusieurs années avant votre départ** sur info-retraite.fr. Vérifiez que tous vos trimestres sont comptabilisés. S'il manque des périodes, signalez-le immédiatement à votre caisse par courrier avec les justificatifs (bulletins de salaire, contrats de travail).",
    },
    { type: "h3", texte: "Simuler votre pension" },
    {
      type: "p",
      texte: "Utilisez le simulateur officiel **[m@rel](https://www.info-retraite.fr/simulateur)** sur info-retraite.fr pour estimer le montant de votre future pension. Le simulateur prend en compte tous vos régimes et vous donne une estimation fiable.",
    },
    {
      type: "h2",
      texte: "Retraite et naturalisation : quel lien ?",
      id: "lien-naturalisation-retraite",
    },
    { type: "h3", texte: "La retraite n'empêche pas la naturalisation" },
    {
      type: "p",
      texte: "Être retraité n'est **pas un obstacle** à la naturalisation française. Les critères évalués sont :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Résidence stable** en France (votre domicile principal est en France)",
        "**Intégration** dans la société française",
        "**Connaissance du français** (niveau B1)",
        "**Connaissance des valeurs de la République** (test civique)",
        "**Ressources suffisantes** (votre pension de retraite peut suffire)",
      ],
    },
    { type: "h3", texte: "Avantages de la naturalisation pour un retraité" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Carte d'identité française** : simplifie les démarches administratives",
        "**Sécurisation de l'ASPA** : en tant que Français, la condition du titre de séjour ne s'applique plus",
        "**Droit de vote** : participer aux élections françaises",
        "**Transmission** : faciliter les démarches de succession pour vos héritiers en France",
      ],
    },
    { type: "h3", texte: "Préparer le test civique à la retraite" },
    {
      type: "p",
      texte: "Le test civique est accessible à tout âge. Notre plateforme **LeTestCivique.fr** propose des QCM adaptés avec des corrections détaillées. Pour un retraité, les thématiques les plus pertinentes sont :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les **valeurs de la République** (partie la plus importante)",
        "Les **institutions françaises** (Président, Parlement, collectivités)",
        "Les **droits et devoirs** du citoyen",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Les étrangers ayant travaillé en France ont pleinement droit à une retraite française, calculée sur les mêmes bases que pour les nationaux. Grâce aux conventions bilatérales signées avec plus de 40 pays, vous pouvez cumuler vos trimestres cotisés en France et à l'étranger. L'ASPA offre un filet de sécurité aux plus de 65 ans sous conditions de résidence, mais attention au piège des 9 mois de présence obligatoire en France. Si vous envisagez un retour au pays, votre pension de base vous suit, mais l'ASPA et certaines aides sont perdues. Planifiez votre retraite en vérifiant votre relevé de carrière dès maintenant sur info-retraite.fr, et si vous souhaitez devenir Français à la retraite, c'est tout à fait possible via la naturalisation.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Un étranger a-t-il droit à la retraite en France ?",
      reponse: "Oui, tout étranger ayant travaillé et cotisé au régime français a droit à une pension de retraite, quelle que soit sa nationalité. Le droit est basé sur les cotisations versées, pas sur la nationalité.",
    },
    {
      question: "Qu'est-ce que l'ASPA et un étranger peut-il en bénéficier ?",
      reponse: "L'ASPA (Allocation de Solidarité aux Personnes Âgées) est le minimum vieillesse (~1 012 €/mois en 2026). Un étranger peut en bénéficier à 65 ans s'il réside en France au moins 9 mois/an et détient un titre de séjour autorisant le travail depuis suffisamment longtemps.",
    },
    {
      question: "Puis-je toucher ma retraite française si je retourne au Maroc ?",
      reponse: "Oui, votre pension de retraite de base et complémentaire est versée au Maroc. En revanche, l'ASPA (minimum vieillesse) est supprimée car elle exige de résider en France au moins 9 mois par an. Grâce à la convention fiscale, votre pension privée sera imposée au Maroc uniquement.",
    },
    {
      question: "Comment cumuler mes trimestres de retraite travaillés dans deux pays ?",
      reponse: "Si la France a une convention bilatérale avec votre pays d'origine (Maroc, Algérie, Tunisie, Sénégal, etc.), vos trimestres sont totalisés pour le calcul de vos droits. Chaque pays verse ensuite sa part proportionnelle. Indiquez vos périodes d'activité à l'étranger lors de votre demande de retraite.",
    },
    {
      question: "Qu'est-ce que le certificat de vie pour les retraités à l'étranger ?",
      reponse: "C'est un document annuel attestant que vous êtes en vie, à envoyer à votre caisse de retraite pour continuer à percevoir votre pension depuis l'étranger. Il est délivré par le consulat français ou les autorités locales. Sans ce certificat, votre pension est suspendue.",
    },
    {
      question: "Puis-je demander la naturalisation française à la retraite ?",
      reponse: "Oui, être retraité n'empêche pas la naturalisation. Vous devez résider en France, justifier d'un niveau B1 en français, passer le test civique et démontrer votre intégration. Votre pension de retraite peut constituer la preuve de ressources suffisantes.",
    },
  ],
  sources: [
    {
      titre: "L'Assurance Retraite : CNAV",
      url: "https://www.lassuranceretraite.fr",
      type: "officiel",
      description: "Portail officiel de la retraite du régime général",
    },
    {
      titre: "Info-retraite.fr, Portail inter-régimes",
      url: "https://www.info-retraite.fr",
      type: "officiel",
      description: "Simulateur et relevé de carrière tous régimes",
    },
    {
      titre: "Service-public.fr, ASPA",
      url: "https://www.service-public.fr/particuliers/vosdroits/F16871",
      type: "officiel",
      description: "Conditions d'attribution de l'ASPA",
    },
    {
      titre: "CLEISS : Centre de liaisons européennes et internationales de sécurité sociale",
      url: "https://www.cleiss.fr/docs/textes/index.html",
      type: "officiel",
      description: "Liste des conventions bilatérales de sécurité sociale",
    },
  ],
};

export default article;
