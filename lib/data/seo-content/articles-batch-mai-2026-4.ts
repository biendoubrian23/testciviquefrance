/**
 * Batch 4 articles SEO - Mai 2026
 * 3 articles longs (1500-2200 mots) : refus naturalisation sans motif, ANTS permis B,
 * renouvellement carte de résident 10 ans.
 */

import type { ArticleFullContent } from './articles-part1';
import type { Article } from '../articles';

// =====================================================================
// Article 1 — Refus naturalisation sans motif : CADA et recours
// =====================================================================
export const article1Content: ArticleFullContent = {
  slug: 'dossier-naturalisation-refuse-sans-motif-2026-recours-cada-tribunal',
  introduction: `Vous recevez une lettre laconique de votre préfecture ou du ministère de l'Intérieur : "Votre demande de naturalisation est rejetée." Aucune explication détaillée, juste une formule administrative comme **"défaut d'assimilation"**, **"insuffisance des ressources"** ou **"opportunité"**. Vous restez sans comprendre ce qui s'est réellement passé. Cette frustration est partagée par environ **35 000 candidats déboutés chaque année** en France selon les chiffres 2026 de la Sous-direction de l'accès à la nationalité française (SDANF). La bonne nouvelle : vous avez **le droit légal d'obtenir l'intégralité de votre dossier**, de comprendre les vraies raisons cachées du refus et de **contester la décision** par un recours gracieux ou contentieux. Ce guide complet 2026 vous explique la procédure exacte : différencier ajournement, refus et irrecevabilité ; saisir la **CADA** (Commission d'accès aux documents administratifs) pour récupérer les pièces ; rédiger un recours efficace ; saisir le **tribunal administratif de Nantes** ; et préparer une nouvelle demande qui aboutira.`,
  keywords: [
    'naturalisation refusée sans motif 2026',
    'refus naturalisation recours',
    'CADA naturalisation dossier',
    'recours gracieux naturalisation',
    'tribunal administratif Nantes naturalisation',
    'naturalisation ajournée',
    'naturalisation irrecevable',
    'demande accès dossier naturalisation',
    'délai recours naturalisation',
    'avocat naturalisation refus',
    'aide juridictionnelle naturalisation',
    'refaire demande naturalisation après refus',
    'défaut assimilation refus',
    'naturalisation refus motif caché',
    'recours contentieux nationalité française',
  ],
  sections: [
    {
      id: 'ajournement-refus-irrecevabilite',
      title: 'Ajournement, refus, irrecevabilité : ne confondez pas les trois',
      content: `Avant tout recours, vous devez identifier précisément la nature de la décision reçue. Trois types de décisions négatives existent et **la stratégie de recours diffère pour chacune**.

**1. L'irrecevabilité (article 21-15 du Code civil)**

Votre dossier ne remplit pas une **condition légale** (durée de séjour insuffisante, niveau de français manquant, casier non vierge, condition d'âge). La SDANF considère que vous ne pouviez juridiquement pas demander la naturalisation. Conséquence : la procédure n'a même pas été instruite sur le fond. Vous recevez une lettre type **"votre demande est déclarée irrecevable au titre de l'article X"**.

**2. L'ajournement (article 21-25-1 du Code civil)**

L'administration estime que vous remplissez les conditions légales **mais que votre dossier n'est pas mûr**. Elle fixe un délai (souvent **2 ans**) avant lequel vous ne pouvez pas redéposer. Motifs typiques : **emploi instable**, niveau B1 limite, dette fiscale récente, casier ancien.

**3. Le refus (rejet définitif, article 21-25 du Code civil)**

C'est la décision la plus grave. L'administration refuse au nom de l'**"opportunité"** ou de l'**absence d'assimilation**. Aucun délai d'attente n'est imposé légalement, mais redéposer immédiatement avec le même dossier est inutile.

| Décision | Base légale | Délai pour redéposer | Recours possible |
|---|---|---|---|
| Irrecevabilité | Art. 21-15 C. civ. | Dès régularisation | Oui (2 mois) |
| Ajournement | Art. 21-25-1 C. civ. | Délai imposé (souvent 2 ans) | Oui (2 mois) |
| Refus | Art. 21-25 C. civ. | Aucun, mais déconseillé sans changement | Oui (2 mois) |

**Lisez attentivement votre lettre** : la base légale citée (article 21-15, 21-25 ou 21-25-1) vous dit immédiatement à quel cas vous appartenez.`,
    },
    {
      id: 'motifs-codes-cachees',
      title: 'Les motifs réellement utilisés (souvent en code administratif)',
      content: `Les lettres de refus utilisent des **formulations standardisées** qui dissimulent les vraies raisons. Voici les codes les plus fréquents et leur signification réelle :

- **"Défaut d'assimilation à la communauté française"** : c'est le motif le plus large. Il peut viser un niveau de français jugé insuffisant à l'entretien, une mauvaise connaissance des valeurs (laïcité, égalité), un attachement perçu trop fort au pays d'origine, ou même des positions exprimées sur les réseaux sociaux. Statistiquement, **40% des refus** tombent dans cette catégorie en 2026.

- **"Ressources insuffisantes ou instables"** : revenus inférieurs au SMIC mensuel net (**1 426,30 € en 2026**), CDD à répétition sans perspective, périodes de chômage non indemnisé, dépendance aux prestations sociales (RSA notamment).

- **"Comportement incompatible avec l'acquisition de la nationalité"** : casier judiciaire non vierge (B2), même pour des infractions anciennes ; suspicion de fraude fiscale ; signalements **"S"** ou fichage TAJ.

- **"Situation fiscale non régulière"** : dette envers la DGFIP, déclarations manquantes pour une ou plusieurs années, incohérence entre revenus déclarés et niveau de vie.

- **"Opportunité"** : c'est le motif le plus opaque. L'administration a **un pouvoir discrétionnaire** confirmé par le Conseil d'État. Elle peut refuser sans justifier précisément, mais **doit malgré tout pouvoir produire les éléments factuels** ayant motivé sa décision si vous le demandez.

**Pourquoi les motifs sont vagues ?** Parce que la naturalisation est juridiquement une **faveur**, pas un droit. L'administration n'a aucune obligation détaillée de motivation. C'est précisément pour cela que la procédure CADA est cruciale : elle vous donne accès aux **vraies notes internes** des fonctionnaires.

Si vous avez reçu un refus pour défaut d'assimilation et que vous aviez **réussi le test civique** avec un bon score, ce résultat doit être au cœur de votre recours : il prouve objectivement votre connaissance des valeurs et institutions de la République.`,
    },
    {
      id: 'cada-acceder-dossier',
      title: 'Saisir la CADA pour obtenir votre dossier complet',
      content: `La **Commission d'accès aux documents administratifs (CADA)** est une autorité administrative indépendante qui garantit votre droit légal de consulter tout document vous concernant détenu par l'administration française (loi du 17 juillet 1978, codifiée au Code des relations entre le public et l'administration).

**Étape 1 : demande directe à la SDANF**

Avant de saisir la CADA, vous devez d'abord demander **directement** votre dossier à l'autorité qui détient les pièces. Adressez votre courrier en **lettre recommandée avec accusé de réception** à :

> Ministère de l'Intérieur – Sous-direction de l'accès à la nationalité française (SDANF) – 12 rue Francis Le Carval – 44404 Rezé Cedex

**Modèle de courrier** :

> Madame, Monsieur,
>
> Conformément aux articles L.300-1 et L.311-1 du Code des relations entre le public et l'administration, je vous demande la communication de l'intégralité de mon dossier de demande de naturalisation enregistré sous le numéro [XXXXX], y compris : la note de synthèse, le procès-verbal d'entretien, l'avis du préfet, l'avis de la SDANF, ainsi que toutes les pièces ayant fondé la décision de [refus / ajournement] notifiée le [date].
>
> Je vous prie d'agréer mes salutations distinguées.

**Étape 2 : silence de 1 mois = refus implicite**

L'administration a **1 mois** pour répondre. Au-delà, son silence vaut refus. Vous pouvez alors saisir la CADA.

**Étape 3 : saisine de la CADA**

Vous disposez de **2 mois** après le refus implicite ou explicite pour saisir la CADA. Saisine **gratuite**, par courrier postal ou via le formulaire en ligne sur cada.fr. La CADA rend un **avis sous 1 mois** (consultatif mais très souvent suivi).

**Étape 4 : nouvelle demande à l'administration**

Avec l'avis favorable CADA, vous renvoyez la demande à la SDANF. Dans 90% des cas, le dossier vous est alors communiqué. Délai total réaliste : **3 à 5 mois** entre la première demande et la réception effective des pièces.

Une fois votre dossier en main, vous découvrirez les **vraies notes** rédigées par les agents : remarques sur l'entretien, perception du niveau de français, éléments sur votre conjoint, vos voyages, votre activité en ligne, etc. Ces notes deviennent **la matière de votre recours**.`,
    },
    {
      id: 'recours-gracieux-ministere',
      title: 'Le recours gracieux : votre première ligne de défense',
      content: `Le **recours gracieux** consiste à demander à l'autorité qui a pris la décision de la **réexaminer**. C'est gratuit, simple, et **suspensif** sur le délai du recours contentieux.

**Délai : 2 mois à compter de la notification**

Le délai court à partir du **jour de réception** de la lettre de refus (cachet postal de l'accusé de réception, pas la date d'envoi). Exemple : refus reçu le 15 mai 2026 → recours possible jusqu'au **15 juillet 2026 à minuit**.

**Destinataire** :

- Si refus de naturalisation : **ministre de l'Intérieur** (Place Beauvau, 75800 Paris Cedex 08), à l'attention de la SDANF.
- Si décision préfectorale (rare en naturalisation, fréquent pour titre de séjour) : **préfet** du département.

**Modèle de courrier de recours gracieux** :

> Monsieur le Ministre de l'Intérieur,
>
> Par décision du [date], notifiée le [date], vous avez prononcé le refus de ma demande de naturalisation enregistrée sous le numéro [XXXXX], au motif de [motif invoqué]. Par la présente, je sollicite respectueusement le réexamen de ma demande pour les raisons suivantes :
>
> 1. **Sur le motif d'assimilation** : j'ai obtenu le test civique avec [score]/40, ce qui démontre objectivement ma connaissance des valeurs républicaines. Je joins l'attestation officielle.
> 2. **Sur le niveau de français** : je présente un DELF B1 daté du [date], ainsi que des attestations professionnelles confirmant ma maîtrise opérationnelle.
> 3. **Sur les ressources** : je joins mes 12 derniers bulletins de salaire et mes 3 derniers avis d'imposition démontrant la stabilité de mes revenus.
> 4. **Sur l'intégration** : je joins des attestations associatives, professionnelles et de voisinage.
>
> Veuillez agréer, Monsieur le Ministre, l'expression de ma considération distinguée.

**Que joindre obligatoirement** :

- Copie de la décision de refus
- Pièces nouvelles ou complémentaires (preuves récentes d'intégration, justificatifs fiscaux à jour, attestation test civique)
- Le cas échéant : avis CADA et pièces du dossier obtenues

**Réponse** : la SDANF a **2 mois** pour répondre. Silence = rejet implicite. Vous gardez alors **2 mois** pour saisir le tribunal administratif de Nantes.`,
    },
    {
      id: 'tribunal-administratif-nantes',
      title: 'Le recours contentieux devant le tribunal administratif de Nantes',
      content: `Si le recours gracieux échoue (ou en parallèle), le **recours contentieux** est l'arme juridique ultime. En matière de naturalisation, **un seul tribunal est compétent en France** : le **tribunal administratif de Nantes** (article R.312-3 du Code de justice administrative).

**Pourquoi Nantes ?** Parce que la SDANF, qui instruit toutes les demandes nationales, est implantée à Rezé (banlieue de Nantes). Toutes les décisions de naturalisation sont donc considérées comme prises à Nantes.

**Adresse** :
> Tribunal administratif de Nantes – 6 allée de l'Île Gloriette – 44041 Nantes Cedex 01

**Délai : 2 mois**

À compter :
- soit de la notification du refus initial (si pas de recours gracieux) ;
- soit de la réponse au recours gracieux (ou de l'expiration du délai de 2 mois en cas de silence).

**Comment saisir le tribunal**

La saisine se fait via **Télérecours citoyens** (application gratuite : citoyens.telerecours.fr) ou par **courrier recommandé**. Coût : **gratuit** (pas de droit de timbre depuis 2014).

**Contenu de la requête** :

1. Identité du requérant et de l'avocat éventuel
2. Décision attaquée (joindre copie)
3. Exposé des faits
4. **Moyens de droit** (les arguments juridiques) :
   - Erreur manifeste d'appréciation
   - Erreur de droit
   - Détournement de pouvoir
   - Violation du principe de motivation suffisante
5. Demandes : annulation de la décision, injonction de réexamen, condamnation aux frais (article L.761-1 CJA)

**Délai de jugement réaliste : 12 à 24 mois** selon l'encombrement du tribunal. Le contentieux naturalisation représente environ **5 000 dossiers par an** à Nantes en 2026.

**Statistiques 2026** : environ **18% des recours** aboutissent à une annulation pleine ou partielle. Les chances augmentent significativement avec un avocat spécialisé.`,
    },
    {
      id: 'aide-juridictionnelle-avocats',
      title: 'Aide juridictionnelle et avocats spécialisés',
      content: `Un avocat n'est **pas obligatoire** devant le tribunal administratif (sauf appel devant la cour administrative d'appel), mais il est **fortement recommandé** vu la technicité du contentieux nationalité.

**Coût d'un avocat en droit de la nationalité (2026)**

- Consultation initiale : **80 à 200 €**
- Recours gracieux : forfait **600 à 1 200 €**
- Recours contentieux complet : **1 500 à 3 500 €**
- Honoraires de résultat éventuels : 5 à 15% en cas de succès

**Aide juridictionnelle (AJ)**

Si vos revenus sont modestes, vous pouvez bénéficier de l'AJ qui prend en charge tout ou partie des honoraires d'avocat. Plafonds 2026 (revenu fiscal de référence par mois pour une personne seule) :

| Niveau d'AJ | RFR mensuel max | Prise en charge |
|---|---|---|
| AJ totale | ≤ 1 095 € | 100% |
| AJ partielle 55% | 1 096 à 1 295 € | 55% |
| AJ partielle 25% | 1 296 à 1 642 € | 25% |

Le formulaire **Cerfa 16146*03** se demande au tribunal de votre domicile (pas à Nantes). Le bureau d'aide juridictionnelle décide en **3 à 6 semaines**.

**Trouver un avocat spécialisé** :
- Annuaire du Conseil national des barreaux (cnb.avocat.fr)
- Mention de spécialisation **"droit des étrangers et de la nationalité"**
- Permanences gratuites des Maisons de Justice et du Droit (MJD)
- Associations : la Cimade, GISTI, ADDE`,
    },
    {
      id: 'redeposer-renforcer-dossier',
      title: 'Refaire une demande après refus : combien attendre, comment renforcer',
      content: `Après un refus, déposer immédiatement la même demande est inutile. Voici la stratégie 2026 pour maximiser vos chances au second tour.

**Délai d'attente conseillé**

- **Irrecevabilité** : dès que la condition manquante est remplie (durée de séjour, B1, etc.).
- **Ajournement** : respectez **strictement** le délai imposé (souvent 2 ans). Toute demande prématurée sera rejetée d'office.
- **Refus pour opportunité ou assimilation** : attendez **18 à 24 mois minimum**, le temps d'apporter des changements visibles dans votre dossier.

**Ce qu'il faut renforcer**

1. **L'assimilation aux valeurs françaises** : c'est l'élément n°1 que les agents évaluent. Repassez le **test civique** avec un score élevé (36/40 et plus) si vous ne l'aviez pas, ou repassez-le pour avoir une attestation **récente**. Une attestation de moins d'un an pèse lourd dans la balance car elle prouve que vos connaissances sont fraîches et solides. Vous pouvez préparer le test civique gratuitement sur testciviquefrance.fr et obtenir l'attestation officielle.

2. **Le niveau de français** : DELF B2 (au-dessus du minimum requis) impressionne les agents. Coût ~250 €.

3. **L'engagement civique et associatif** : bénévolat documenté pendant **12 mois minimum**, attestations signées avec tampons d'association.

4. **La stabilité professionnelle** : CDI continu de **2 ans minimum**, augmentation de salaire, fiches de paie cohérentes.

5. **La régularité fiscale** : 5 dernières déclarations propres, attestation de régularité fiscale à jour.

6. **L'enracinement** : achat immobilier, mariage avec un Français, enfants scolarisés, lien associatif local.

7. **Lettre de motivation refondue** : structurée, sincère, en français impeccable, qui répond directement aux motifs du précédent refus.

Pour aller plus loin sur les conditions d'obtention de la **carte de résident 10 ans** (souvent la première étape avant la naturalisation), consultez notre guide dédié : [carte de résident 10 ans en France](/articles/carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture).`,
    },
  ],
  conclusion: `Un refus de naturalisation n'est jamais la fin de l'histoire — c'est le début d'une procédure dans laquelle vous avez **des droits réels et puissants**. Identifiez précisément la nature de la décision (irrecevabilité, ajournement, refus). Obtenez votre dossier via la **CADA** pour comprendre les vraies raisons. Engagez un **recours gracieux** dans les 2 mois, puis si nécessaire un **recours contentieux** devant le tribunal administratif de Nantes. Bénéficiez de l'**aide juridictionnelle** si vos revenus le permettent. Surtout, **renforcez votre dossier** en attendant : un test civique réussi avec un score élevé est un argument objectif et factuel qui rassure l'administration sur votre **assimilation aux valeurs républicaines**, justement le motif n°1 des refus. Préparez votre test civique gratuitement, passez l'examen blanc et obtenez votre attestation officielle directement sur [testciviquefrance.fr](/signup) — c'est la pièce qui peut faire basculer votre nouvelle demande du bon côté.`,
  faq: [
    {
      question: 'Combien de temps pour obtenir mon dossier via la CADA en 2026 ?',
      answer: 'Comptez 3 à 5 mois au total : 1 mois pour la première demande à la SDANF, 1 mois pour l\'avis CADA en cas de silence, puis 1 à 3 mois pour la communication effective des pièces après l\'avis favorable.',
    },
    {
      question: 'Puis-je faire un recours gracieux ET un recours contentieux en même temps ?',
      answer: 'Oui, juridiquement c\'est possible. Mais en pratique, mieux vaut commencer par le recours gracieux : il est gratuit, plus rapide (2 mois max) et suspend le délai de saisine du tribunal. Si le gracieux échoue, vous gardez vos 2 mois pour Nantes.',
    },
    {
      question: 'L\'avocat est-il obligatoire pour saisir le tribunal administratif de Nantes ?',
      answer: 'Non, en première instance vous pouvez saisir Nantes seul via Télérecours citoyens. Mais le contentieux nationalité est très technique (motifs d\'opportunité, contrôle restreint du juge) : un avocat spécialisé augmente les chances de succès de 18% à environ 35-40%.',
    },
    {
      question: 'Si mon recours est rejeté à Nantes, puis-je faire appel ?',
      answer: 'Oui. Vous avez 2 mois pour saisir la cour administrative d\'appel de Nantes. Cette fois, l\'avocat est obligatoire. Au-delà, possibilité de cassation devant le Conseil d\'État dans des conditions très restrictives.',
    },
    {
      question: 'Mon refus mentionne "défaut d\'assimilation" mais j\'ai réussi le test civique. Que faire ?',
      answer: 'C\'est un argument majeur de recours. Joignez votre attestation officielle de réussite au test civique au recours gracieux et insistez : votre score prouve objectivement votre connaissance des valeurs républicaines. Combinez avec un DELF B1/B2 récent et des attestations d\'engagement local.',
    },
  ],
};

// =====================================================================
// Article 2 — ANTS permis B 2026 : étapes complètes
// =====================================================================
export const article2Content: ArticleFullContent = {
  slug: 'ants-permis-conduire-categorie-b-2026-demande-etapes-tarifs',
  introduction: `Passer le **permis de conduire catégorie B** (voitures jusqu'à 3,5 tonnes) reste en 2026 l'un des examens les plus passés en France : environ **1,5 million de candidats** s'inscrivent chaque année. Depuis 2018, toutes les démarches sont **dématérialisées sur l'ANTS** (Agence nationale des titres sécurisés) : pas de passage en préfecture, tout se fait en ligne sur ants.gouv.fr. Mais le parcours reste long, parfois confus, et coûteux : entre **700 € en candidat libre** et **2 500 € en auto-école traditionnelle**. Ce guide détaille en 6 étapes l'intégralité du processus 2026 : prérequis, demande NEPH sur ANTS, code de la route, conduite, tarifs réels, fabrication du permis. Avec un tableau récapitulatif des coûts et toutes les solutions aux blocages les plus fréquents (numéro NEPH bloqué, place d'examen indisponible, code 96 pour les étrangers).`,
  keywords: [
    'ANTS permis B 2026',
    'permis conduire première demande 2026',
    'NEPH ANTS demande',
    'inscription code route 30 euros',
    'permis B candidat libre 2026',
    'tarif auto-école 2026',
    'fabrication permis conduire ANTS',
    'permis conduire étranger France 2026',
    'code 96 permis conduire',
    'examen pratique permis B 2026',
    'ANTS gouv fr permis',
    'place examen permis conduire',
    'délai fabrication permis B',
    'ASSR permis 2026',
    'auto-école en ligne tarif',
  ],
  sections: [
    {
      id: 'prerequis-inscription',
      title: 'Prérequis avant inscription : NEPH, ASSR, justificatifs',
      content: `Avant même d'aller sur ANTS, vérifiez que vous remplissez les **conditions légales** pour passer le permis B en 2026.

**Condition d'âge**

- **15 ans** : conduite accompagnée (AAC)
- **17 ans** : conduite supervisée
- **18 ans** : permis B classique

**Documents obligatoires à préparer**

1. **Pièce d'identité valide** : carte nationale d'identité, passeport, ou titre de séjour pour les étrangers (recto/verso scanné).
2. **Justificatif de domicile** de moins de 6 mois (facture EDF, quittance de loyer, avis d'imposition).
3. **Photo d'identité numérique** au format ANTS (signature électronique incluse, code à 22 caractères obtenu en cabine ou photographe agréé).
4. **ASSR 2** (Attestation Scolaire de Sécurité Routière niveau 2) : obligatoire si vous êtes né **après le 1er janvier 1988**. Obtenue au collège en classe de 3e. Si perdue : demandez un duplicata à votre ancien établissement.
5. **Journée Défense et Citoyenneté (JDC)** : pour les Français de 16-25 ans, obligatoire avant le permis. Attestation à télécharger sur majdc.fr.
6. **Pour les étrangers** : titre de séjour en cours de validité (récépissé accepté) + traduction certifiée si permis étranger à échanger.

**Le NEPH (Numéro d'Enregistrement Préfectoral Harmonisé)**

C'est votre **identifiant unique candidat permis** valable à vie. Il est attribué une seule fois lors de votre première demande sur ANTS. Conservez-le précieusement : sans NEPH, **aucune inscription** au code ou à la conduite n'est possible.`,
    },
    {
      id: 'demande-neph-ants',
      title: 'Étape 1 : demander le NEPH sur ANTS (pas-à-pas)',
      content: `La création du dossier ANTS est **gratuite** et obligatoire pour tous, qu'on passe par auto-école ou en candidat libre.

**Étapes détaillées**

1. **Créer un compte ANTS** sur ants.gouv.fr → "Mon espace" → "Créer un compte". Utilisez de préférence votre **identifiant FranceConnect** (impôts, Ameli, La Poste) : connexion plus rapide et plus sécurisée.

2. **Accéder au service "Permis de conduire"** → "Je fais une demande en ligne" → choisir le motif **"Demande de fabrication d'un titre"** ou **"Inscription au permis"**.

3. **Choisir le motif exact** :
   - "Première demande de permis" (vous n'avez jamais eu de permis)
   - "Réussite à l'examen" (vous venez de réussir et demandez la fabrication)
   - "Extension de catégorie" (ajout d'une catégorie à un permis existant)
   - "Échange de permis étranger" (permis hors UE/EEE)

4. **Renseigner l'état civil** : nom, prénom, date et lieu de naissance, nationalité.

5. **Téléverser les pièces justificatives** au format **PDF, JPG ou PNG**, taille maximale **3 Mo par fichier** :
   - Pièce d'identité (recto/verso)
   - Justificatif de domicile
   - Code photo numérique (22 caractères)
   - ASSR 2 si concerné
   - Attestation JDC si concerné

6. **Valider et envoyer**. Vous recevez immédiatement un **numéro de dossier** (différent du NEPH).

7. **Délai d'instruction** : entre **5 et 15 jours ouvrés** en 2026. Vous recevez un **email confirmant votre NEPH** (format : 12 chiffres). C'est avec ce NEPH que vous pourrez vous inscrire au code et à la conduite.

**En cas de refus** : vérifiez votre boîte mail (parfois spam), corrigez les pièces demandées et renvoyez. Pas besoin de recommencer le dossier.`,
    },
    {
      id: 'inscription-code-route',
      title: 'Étape 2 : s\'inscrire à l\'examen du code (auto-école ou candidat libre)',
      content: `Avec votre NEPH en main, vous pouvez vous inscrire à l'**examen du code de la route (ETG : Épreuve théorique générale)**. Tarif officiel **inchangé en 2026 : 30 € par tentative**.

**Deux options possibles**

**Option 1 : via votre auto-école**

L'auto-école s'occupe de tout : inscription, choix du centre, planification. Coût souvent **inclus dans le forfait global** (mais les présentations supplémentaires sont à votre charge).

**Option 2 : en candidat libre**

Vous vous inscrivez vous-même via un **opérateur agréé** par le ministère de l'Intérieur :

- **La Poste** (lapostecode.fr) : centres dans toutes les villes
- **SGS Objectif Code** : 1 800 centres en France
- **Bureau Veritas / Code'n'go** : 700 centres
- **Pearson Vue / Codeclic** : 600 centres
- **Dekra** : 500 centres

**Étapes inscription candidat libre**

1. Créez un compte sur le site de l'opérateur de votre choix.
2. Renseignez votre **NEPH** + état civil.
3. Choisissez **date, heure et centre** d'examen.
4. Payez **30 €** en ligne (carte bancaire).
5. Téléchargez votre **convocation** (à présenter le jour J avec pièce d'identité).

**Le jour de l'examen**

- 40 questions QCM, format vidéo, **35 minutes**.
- Réussite : **35 bonnes réponses sur 40** (87,5%).
- Résultat : **par email sous 24-48h**, valable **5 ans** (ou 5 présentations à la conduite).

**Préparation** : applis officielles (Codes Rousseau, En Voiture Simone, Lepermislibre) entre **20 et 60 €**. Beaucoup d'auto-écoles en ligne incluent le code dans leur forfait global.`,
    },
    {
      id: 'inscription-conduite',
      title: 'Étape 3 : la conduite (20h minimum, places d\'examen)',
      content: `Une fois le code obtenu, place à la **formation pratique** puis à l'**examen de conduite (épreuve B)**.

**Heures de conduite minimum légales**

- **Permis B classique** : **20 heures minimum** (article R.213-4 du Code de la route).
- **Boîte automatique uniquement** : 13 heures minimum, mais permis limité aux véhicules automatiques.
- **Conduite accompagnée (AAC, dès 15 ans)** : 20 heures auto-école + minimum 3 000 km accompagné.

**Réalité statistique** : la **moyenne nationale 2026** pour réussir l'examen est de **35 heures** (selon la DSCR – Délégation à la sécurité routière). En auto-école traditionnelle, prévoyez **30 à 40 heures**.

**Inscription à l'examen pratique**

- Via auto-école : elle dispose d'un **quota de places** par mois selon ses inscriptions.
- En candidat libre : vous devez trouver une auto-école qui accepte de **présenter** un candidat libre (rare, comptez **150 à 250 € de frais d'accompagnement**) ou passer par une **auto-école en ligne** type Lepermislibre, Stych, En Voiture Simone qui gèrent la présentation.

**Délais 2026 pour obtenir une place**

| Région | Délai moyen 1ère présentation | Délai 2e présentation |
|---|---|---|
| Île-de-France | 60 à 90 jours | 30 à 60 jours |
| Région PACA | 50 à 75 jours | 30 à 45 jours |
| Outre-mer | 90 à 120 jours | 60 à 90 jours |
| Régions rurales | 30 à 45 jours | 15 à 30 jours |

**L'examen pratique** dure **32 minutes** : conduite urbaine, hors agglomération, manœuvre obligatoire, vérifications techniques. Réussite si vous obtenez **au moins 20 points sur 31** sans **erreur éliminatoire**.

**Résultat** : disponible sur ANTS sous **48 heures** dans votre espace personnel. Avec mention "favorable" = permis obtenu.`,
    },
    {
      id: 'tarifs-reels-2026',
      title: 'Étape 4 : tarifs réels du permis B en 2026',
      content: `Le coût total du permis B varie énormément selon la formule choisie. Voici les **fourchettes réelles 2026** observées sur le marché français.

**Tableau comparatif des coûts 2026**

| Poste | Auto-école traditionnelle | Auto-école en ligne | Candidat libre |
|---|---|---|---|
| Frais de dossier ANTS | 0 € (gratuit) | 0 € | 0 € |
| Code (inscription + cours) | 200-400 € | 30-100 € | 30 € (examen) + 0-60 € (appli) |
| Présentation au code | Inclus | Inclus | 30 € par tentative |
| Formation conduite (20h) | 1 100-1 600 € | 700-1 100 € | 0 € (bénévole) ou 35-50 €/h location voiture double commande |
| Heures supplémentaires (10h en moyenne) | 500-800 € | 300-500 € | 350-500 € |
| Présentation pratique | 100-200 € | 80-150 € | 150-250 € (auto-école d'accompagnement) |
| **Total moyen** | **1 900 à 3 000 €** | **1 100 à 1 850 €** | **600 à 900 €** |

**Aides financières disponibles en 2026**

- **Permis à 1 € par jour** : prêt à taux zéro de 600 à 1 200 €, garanti par l'État, pour les 15-25 ans (banques partenaires : BNP, Crédit Agricole, Société Générale).
- **Aide CPF** : depuis 2024, le **Compte personnel de formation** finance le permis B si **lié au projet professionnel**. Plafond du compte (souvent 5 000 €).
- **Aide France Travail** : jusqu'à **1 200 €** pour demandeurs d'emploi en parcours d'insertion.
- **Aide régionale** : variable selon les régions (Île-de-France : jusqu'à 800 € ; Hauts-de-France : 500 € ; Occitanie : 500 €).
- **Bourse au permis** des communes : 200 à 500 € contre engagement bénévole.

**Tarif des présentations supplémentaires**

- Code : **30 € par session**
- Conduite : variable selon auto-école, mais le passage en lui-même reste gratuit (la place vous est attribuée par la préfecture).`,
    },
    {
      id: 'recuperer-permis-fabrication',
      title: 'Étape 5 : récupérer le permis sur ANTS, code 96 et fabrication',
      content: `Vous venez de recevoir votre **certificat d'examen du permis de conduire (CEPC)** avec mention favorable ? Vous pouvez **conduire immédiatement** avec ce document pendant **4 mois maximum**, en attendant le permis définitif format carte bancaire.

**Demander la fabrication du permis sur ANTS**

1. Connectez-vous sur ants.gouv.fr → espace permis.
2. Choisissez le motif **"Réussite à l'examen"**.
3. Téléversez :
   - CEPC (téléchargé depuis votre espace ANTS)
   - Photo numérique (code 22 caractères)
   - Pièce d'identité
   - Justificatif de domicile récent
   - Signature numérique
4. Validez. **Aucun frais** de fabrication (gratuit pour la première demande).

**Délais de fabrication 2026**

- **Délai moyen national** : **2 à 4 semaines** depuis la demande validée.
- **Délais constatés en 2026** : entre **15 jours** (régions peu chargées) et **8 semaines** (Île-de-France, période estivale).
- Le permis arrive en **lettre recommandée avec accusé de réception** à votre domicile.

**Le code 96 : pour étrangers et conducteurs de remorques**

Le **code 96** est une **mention restrictive** apposée sur le permis B : elle autorise la conduite d'un ensemble véhicule + remorque dont le PTAC total est compris entre 3 500 kg et 4 250 kg, **après une formation complémentaire de 7 heures** dans une auto-école.

Pour les **étrangers ressortissants hors UE/EEE** : si vous échangez votre permis étranger contre un permis français via ANTS, des codes restrictifs peuvent apparaître selon votre pays d'origine et votre titre de séjour. Vérifiez la **liste officielle des pays ayant un accord de réciprocité** sur service-public.fr.

**Suivi du permis**

Sur ants.gouv.fr → "Suivre ma démarche" → vous voyez chaque étape : "En cours d'instruction", "Validé", "En cours de fabrication", "Expédié". Numéro de suivi La Poste fourni dès l'expédition.`,
    },
  ],
  conclusion: `Le permis B 2026 reste un parcours exigeant mais entièrement structuré sur ANTS : NEPH d'abord, code (30 €), conduite (20 h minimum), examens, fabrication. Selon votre formule, comptez entre **700 € en candidat libre** et **2 500 € en auto-école traditionnelle**, avec de nombreuses aides disponibles (Permis à 1 €/jour, CPF, France Travail). La clé du succès : préparer méthodiquement chaque étape et ne pas sauter de prérequis. Cette logique d'examen national avec QCM, score minimal et préparation rigoureuse n'est d'ailleurs pas si éloignée de celle du **test civique de naturalisation** : 40 questions, seuil de 32/40, formation préalable indispensable. Si votre projet est plus large que la mobilité — devenir Français — préparez-vous à cet examen national gratuitement sur [testciviquefrance.fr](/signup) et passez le test blanc avant la convocation officielle.`,
  faq: [
    {
      question: 'Combien de temps prend la délivrance du NEPH sur ANTS en 2026 ?',
      answer: 'Entre 5 et 15 jours ouvrés selon la charge des services et la complétude de votre dossier. En cas de pièce manquante, vous recevez un email avec demande de complément, ce qui rallonge de 7 à 10 jours.',
    },
    {
      question: 'Puis-je passer le permis B en candidat libre si je suis étranger ?',
      answer: 'Oui, à condition de disposer d\'un titre de séjour en cours de validité (récépissé accepté) et d\'un justificatif de domicile en France. La procédure ANTS est identique. Attention : certains opérateurs d\'auto-école d\'accompagnement refusent les candidats libres avec récépissé.',
    },
    {
      question: 'Que faire si je ne reçois pas mon permis fabriqué après 8 semaines ?',
      answer: 'Connectez-vous sur ANTS et vérifiez le statut. Si "En cours de fabrication" depuis plus de 6 semaines, contactez l\'ANTS via le formulaire de contact ou le 34 00 (du lundi au vendredi). Vous pouvez aussi conduire avec votre CEPC pendant 4 mois après réussite.',
    },
    {
      question: 'Le code de la route est-il valable combien de temps en 2026 ?',
      answer: '5 ans à partir de la date de réussite, ou 5 présentations à l\'examen pratique. Au-delà, vous devez repasser le code (30 € + nouvelle inscription).',
    },
    {
      question: 'L\'aide CPF couvre-t-elle 100% du permis B en 2026 ?',
      answer: 'Oui si vous avez assez de droits sur votre CPF (jusqu\'à 5 000 €) et si l\'auto-école est référencée Qualiopi. Depuis 2024, vous devez justifier que le permis sert un projet professionnel concret (chauffeur, livreur, déplacements pro). Une participation forfaitaire de 102,23 € reste à votre charge depuis avril 2024.',
    },
  ],
};

// =====================================================================
// Article 3 — Renouvellement carte de résident 10 ans 2026
// =====================================================================
export const article3Content: ArticleFullContent = {
  slug: 'renouvellement-carte-resident-10-ans-2026-conditions-documents-anef',
  introduction: `Votre **carte de résident de 10 ans** approche de sa date d'expiration ? Bonne nouvelle : contrairement à la **première délivrance** (qui est le parcours le plus difficile du droit des étrangers), le **renouvellement** est en 2026 une procédure **largement simplifiée et de plein droit**, c'est-à-dire **automatique sauf motif grave**. Près de **350 000 étrangers** renouvellent chaque année leur carte de résident en France selon les chiffres du ministère de l'Intérieur. Depuis 2022, toute la démarche se fait en ligne sur **ANEF** (Administration Numérique des Étrangers en France) : pas de rendez-vous préfecture, pas de dossier papier, **récépissé délivré immédiatement**, et un coût stable de **75 €**. Ce guide 2026 détaille en 6 étapes : le principe du renouvellement de plein droit, le bon timing (2 à 6 mois avant expiration), la procédure ANEF pas-à-pas, les documents nécessaires (drastiquement réduits), les rares motifs de refus, et vos droits pendant l'attente du nouveau titre.`,
  keywords: [
    'renouvellement carte résident 10 ans 2026',
    'carte résident expirée que faire',
    'ANEF renouvellement carte résident',
    'carte résident plein droit',
    'récépissé carte résident',
    'documents renouvellement carte résident',
    'tarif renouvellement carte résident 75 euros',
    'refus renouvellement carte résident',
    'CESEDA L426 carte résident',
    'voyage carte résident expirée',
    'récépissé travail droits',
    'délai renouvellement carte résident',
    'carte résident menace ordre public',
    'longue absence carte résident',
    'naturalisation après carte résident',
  ],
  sections: [
    {
      id: 'principe-plein-droit',
      title: 'Le principe : renouvellement de plein droit, sauf motif grave',
      content: `Contrairement à la **première carte de résident** dont l'attribution dépend du pouvoir d'appréciation du préfet (article L.426-1 et suivants du CESEDA), le **renouvellement** est juridiquement **un droit acquis**, sauf cas exceptionnels.

**Base légale 2026**

L'article **L.433-4 du CESEDA** (Code de l'entrée et du séjour des étrangers et du droit d'asile) prévoit explicitement : *"La carte de résident est renouvelée de plein droit, sauf en cas de menace pour l'ordre public ou de fraude établie."*

**Concrètement**, cela signifie :

- **Vous n'avez pas à reprouver** que vous avez des ressources suffisantes (sauf cas particulier).
- **Vous n'avez pas à reprouver** votre niveau de français.
- **Vous n'avez pas à passer** le **test civique** (qui n'est pas exigé pour la carte de résident, contrairement à la naturalisation).
- **Vous n'avez pas à justifier** d'une intégration républicaine renouvelée.

**Le préfet ne peut refuser que dans 3 cas** :

1. **Menace caractérisée pour l'ordre public** (terrorisme, criminalité grave, fichage S documenté).
2. **Fraude** dans l'obtention de la précédente carte (mariage blanc, faux documents).
3. **Rupture du lien avec la France** : absence prolongée de plus de 3 ans consécutifs hors de France (article L.426-22 CESEDA), sauf justification.

Statistiquement, **moins de 2% des renouvellements** sont refusés en 2026 selon les données de la Direction générale des étrangers en France (DGEF). C'est l'une des procédures les plus sûres du droit des étrangers.

**Différence majeure avec la première délivrance**

| Critère | 1re délivrance | Renouvellement |
|---|---|---|
| Examen au fond | Approfondi | Limité |
| Niveau A2 français | Exigé | Non re-exigé |
| Ressources | Vérifiées | Non re-vérifiées (sauf famille) |
| Engagement républicain | Vérifié | Présumé |
| Taux d'acceptation | ~70% | ~98% |

Pour bien comprendre les conditions de la première délivrance, consultez notre guide : [carte de résident 10 ans en France](/articles/carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture).`,
    },
    {
      id: 'quand-deposer-timing',
      title: 'Quand déposer : timing optimal et limites',
      content: `Le timing est crucial : déposer trop tard expose à une **rupture de droits** (récépissé refusé, séjour irrégulier théorique). Déposer trop tôt entraîne un **rejet pour irrecevabilité**.

**Le calendrier idéal 2026**

La législation autorise le dépôt **dans les 6 mois précédant l'expiration** de la carte. Le ministère de l'Intérieur recommande **2 mois avant** au minimum.

| Délai avant expiration | Statut juridique |
|---|---|
| Plus de 6 mois | Trop tôt → rejet probable |
| 4 à 6 mois | Possible mais pas idéal |
| **2 à 4 mois** | **Période optimale** |
| 1 mois | Risque de rupture de droits |
| Moins de 15 jours | Procédure d'urgence |
| Après expiration | Séjour irrégulier théorique, mais régularisable sous conditions |

**Pourquoi 2 à 4 mois est optimal ?**

- Le délai d'instruction préfectoral 2026 est de **6 à 14 semaines** selon le département.
- Vous obtenez votre **récépissé immédiatement** lors du dépôt sur ANEF (preuve numérique).
- Vous avez le temps de réagir si un complément est demandé.
- Vous évitez les périodes saturées (rentrée scolaire, été).

**Délais constatés par département en 2026**

- **Île-de-France** : 10 à 14 semaines
- **PACA, Auvergne-Rhône-Alpes** : 8 à 12 semaines
- **Régions rurales** : 6 à 10 semaines
- **Outre-mer** : 12 à 18 semaines

**Que faire si la carte expire avant la nouvelle ?**

Le **récépissé** numérique sur ANEF prolonge automatiquement vos droits **jusqu'à 6 mois renouvelables**. Vous restez en séjour régulier, vous pouvez **travailler** et **voyager** dans Schengen avec ce récépissé + passeport (mais retour pays d'origine plus délicat, voir section dédiée).`,
    },
    {
      id: 'procedure-anef-etapes',
      title: 'Procédure ANEF étape par étape (compte, formulaire, paiement 75 €)',
      content: `Depuis 2022, **toutes les démarches** de renouvellement passent par ANEF (administration-etrangers-en-france.interieur.gouv.fr). Plus aucun rendez-vous préfecture pour cette procédure.

**Étape 1 : créer ou retrouver son compte ANEF**

1. Allez sur administration-etrangers-en-france.interieur.gouv.fr.
2. Cliquez sur **"Créer un compte"** ou **"Me connecter"** si vous en avez déjà un.
3. Renseignez : email valide, mot de passe sécurisé, nom, prénom, date de naissance, **numéro de votre carte de séjour actuelle**.
4. Vérifiez votre email (lien d'activation valable 48 heures).

**Étape 2 : choisir la démarche**

Sur le tableau de bord → **"Renouveler mon titre de séjour"** → sélectionnez le motif **"Carte de résident – article L.426-X"** (X selon votre cas : conjoint de Français L.426-5, parent d'enfant français L.426-6, etc.).

**Étape 3 : remplir le formulaire en ligne**

- Confirmation des informations personnelles (état civil, adresse).
- Mise à jour des informations familiales (mariage, divorce, enfants nés depuis).
- Mise à jour des informations professionnelles (employeur actuel, situation).
- Évolution de votre situation depuis la dernière carte.

**Étape 4 : téléverser les pièces justificatives**

Format : PDF, JPG, PNG. Taille max : **3 Mo par fichier**, **20 Mo au total**.

**Étape 5 : payer la taxe de renouvellement**

- **Tarif 2026 : 75 €** (timbre fiscal numérique acheté directement sur ANEF ou sur timbres.impots.gouv.fr).
- Paiement par carte bancaire en ligne.
- Justificatif téléchargeable immédiatement.

**À noter** : si vous demandez en parallèle un duplicata, ajout 25 €.

**Étape 6 : recevoir le récépissé**

Dès la validation du dossier (généralement **immédiate** ou sous 48 heures), un **récépissé numérique** est généré dans votre espace ANEF. Téléchargez-le, imprimez-le si besoin. **Validité 6 mois renouvelables**.

**Étape 7 : suivi et notification**

Vous recevez par email :
- Confirmation du dépôt
- Demandes éventuelles de pièces complémentaires
- Notification de la décision
- Convocation pour la **remise physique** de la nouvelle carte (en préfecture ou sous-préfecture, **30 minutes maximum**).`,
    },
    {
      id: 'documents-necessaires',
      title: 'Documents nécessaires : un dossier réduit',
      content: `Le grand avantage du renouvellement par rapport à la première demande : **moins de pièces** sont exigées car votre situation est déjà connue de l'administration.

**Pièces obligatoires (toutes situations)**

1. **Passeport** en cours de validité (toutes pages utiles + page d'identité).
2. **Carte de résident actuelle** (recto/verso scannée).
3. **Justificatif de domicile** récent (moins de 6 mois) : facture EDF, quittance de loyer, attestation d'hébergement + pièce d'identité de l'hébergeant.
4. **3 photos d'identité numériques** au format ANEF (code 22 caractères depuis cabine ou photographe agréé).
5. **Timbre fiscal numérique** de **75 €**.
6. **Acte de naissance** de moins de 3 mois (avec traduction certifiée si étranger).

**Pièces selon situation**

**Si vous avez la carte au titre du conjoint de Français (L.426-5)** :
- Acte de mariage français de moins de 3 mois
- Justificatif de **communauté de vie effective** (factures communes, déclaration d'impôts commune, quittances).

**Si vous avez la carte au titre de parent d'enfant français (L.426-6)** :
- Acte de naissance de l'enfant
- Justificatif de **contribution effective** à l'entretien et à l'éducation : versements bancaires, factures, attestation école.

**Si vous avez la carte au titre du regroupement familial (L.434-X)** :
- Justificatifs de communauté de vie avec le regroupant.
- Si décès ou divorce : pièces relatives à votre situation actuelle.

**Si vous avez la carte au titre de la résidence de longue durée UE (L.426-17)** :
- Justificatifs de **non-rupture du lien avec la France** : impôts, sécurité sociale, présence physique.

**Pièces NON exigées en renouvellement (différence clé avec la 1re demande)** :

- Test du **niveau A2 français** (non re-vérifié)
- Test civique (non requis pour la carte de résident)
- Justificatifs de **5 ans de séjour régulier** (déjà acquis)
- Casier judiciaire récent (sauf demande spécifique)
- Bulletins de salaire et avis d'imposition détaillés (sauf cas particulier)`,
    },
    {
      id: 'motifs-refus-rares',
      title: 'Les rares motifs de refus (menace, fraude, longue absence)',
      content: `Moins de 2% des renouvellements sont refusés. Voici les **3 motifs légaux exclusifs** qui permettent au préfet de refuser et leur encadrement strict.

**Motif n°1 : menace pour l'ordre public**

Article **L.432-1 CESEDA**. Le préfet doit prouver une menace **caractérisée et actuelle**, pas une simple suspicion.

Cas typiques :
- Condamnation pénale grave (terrorisme, trafic, violences aggravées)
- Fichage S avec éléments tangibles
- Activités prosélytes incompatibles avec les valeurs républicaines
- Récidive d'infractions graves

Une **infraction mineure** (excès de vitesse, contravention) **ne peut pas** justifier un refus. Le Conseil d'État sanctionne régulièrement les préfets qui invoquent l'ordre public sans preuves solides.

**Motif n°2 : fraude établie**

Article **L.412-7 CESEDA**. La fraude doit être :
- Documentée (preuves matérielles)
- Significative (pas une simple omission)
- Imputable au requérant (pas à un tiers)

Cas typiques : mariage blanc révélé, faux acte de naissance, fausse identité, faux contrat de travail. La **prescription** est de **3 ans** pour les fraudes constatables (article 7-1 du Code civil par analogie), mais la fraude à la nationalité est imprescriptible.

**Motif n°3 : rupture du lien avec la France (absence prolongée)**

Article **L.426-22 CESEDA**. Si vous avez résidé **plus de 3 ans consécutifs hors de France** (sans présence d'au moins quelques jours par an), le préfet peut considérer que vous avez **perdu la résidence habituelle** en France.

**Exceptions importantes** :
- Mission professionnelle pour entreprise française : durée non décompté
- Études de longue durée à l'étranger reconnues
- Soins médicaux nécessaires hors France
- Force majeure documentée (conflits, pandémie, etc.)

**Comment éviter ce risque ?** Conservez **toutes les preuves** de présence en France : factures, billets d'avion aller-retour, déclarations d'impôts, bulletins de salaire, scolarité des enfants.

**Recours en cas de refus**

- **Recours gracieux** auprès du préfet : 2 mois.
- **Recours hiérarchique** auprès du ministre de l'Intérieur : 2 mois.
- **Recours contentieux** au tribunal administratif territorialement compétent : 2 mois.

Une **OQTF** (Obligation de quitter le territoire) accompagne parfois le refus → délais de recours raccourcis à **48 heures, 7 ou 15 jours** selon le cas. Avocat indispensable.`,
    },
    {
      id: 'recepisse-droits-attente',
      title: 'Récépissé : vos droits pendant l\'attente du nouveau titre',
      content: `Le récépissé numérique délivré sur ANEF dès le dépôt est un **véritable titre de séjour temporaire** qui maintient l'intégralité de vos droits.

**Validité 2026**

- **6 mois renouvelables** automatiquement.
- En 2026, le ministère a réduit les délais : la plupart des renouvellements aboutissent en moins de **4 mois**, donc un seul récépissé suffit généralement.

**Droit au travail**

Le récépissé de renouvellement de carte de résident **autorise pleinement le travail** salarié et indépendant, sans aucune restriction. Article **R.431-15 CESEDA**. Votre employeur peut continuer à vous employer normalement. Si recrutement pendant cette période, présenter le récépissé suffit.

**Voyage dans l'espace Schengen**

Avec le récépissé de carte de résident, vous pouvez **circuler librement** dans les 27 pays de l'espace Schengen pour des séjours de **moins de 90 jours** sur 180 jours, à condition de présenter :
- Le récépissé numérique (impression conseillée)
- Votre passeport en cours de validité
- Votre ancienne carte de résident (même expirée, à titre justificatif)

**Voyage hors Schengen et retour en France : ATTENTION**

Le récépissé **ne garantit PAS** systématiquement le **retour en France** depuis un pays tiers. Les compagnies aériennes peuvent **refuser l'embarquement** par méconnaissance du récépissé numérique. Pour sécuriser un voyage hors Schengen :

1. **Demandez un visa de retour (DCEM)** auprès de votre préfecture **avant le départ** (gratuit, valable 3 mois).
2. **Imprimez** le récépissé en plusieurs exemplaires.
3. **Vérifiez** auprès du consulat de France de votre pays de destination si nécessaire.
4. **Évitez** les voyages longs (plus de 30 jours) pendant la procédure.

**Retour pays d'origine**

Mêmes règles. **Particulièrement risqué** si votre pays a des relations administratives complexes avec la France. En cas de doute, **reportez le voyage** après réception de la nouvelle carte.

**Droits sociaux et bancaires**

Le récépissé maintient :
- Couverture sécurité sociale (Ameli)
- CAF, allocations familiales
- Compte bancaire (à présenter lors du contrôle annuel KYC)
- Permis de conduire français
- Mutuelle, assurance santé`,
    },
  ],
  conclusion: `Le renouvellement de la carte de résident 10 ans est en 2026 l'une des démarches **les plus accessibles** du droit des étrangers en France : entièrement dématérialisé sur ANEF, **récépissé immédiat**, dossier réduit, **75 € seulement**, et un taux d'acceptation supérieur à **98%**. Il vous suffit de respecter le timing (2 à 4 mois avant expiration), de fournir les documents demandés, et d'éviter les rares motifs de refus (menace ordre public, fraude, longue absence). Une fois votre nouvelle carte en main pour 10 ans, **l'étape logique suivante** est souvent la **naturalisation française** : avec une carte de résident solide, vous pouvez désormais postuler à la nationalité française si vous remplissez les conditions (5 ans de résidence, B1 français, intégration). Et le passage obligé de cette dernière étape, c'est le **test civique de naturalisation** : 40 questions sur les valeurs, les institutions, l'histoire de France. Préparez-le sereinement, gratuitement, avec des QCM officiels et l'attestation finale directement sur [testciviquefrance.fr](/signup) — la passerelle naturelle entre votre carte de résident et votre nationalité française.`,
  faq: [
    {
      question: 'Combien coûte le renouvellement de la carte de résident en 2026 ?',
      answer: '75 € de timbre fiscal numérique payé directement sur ANEF ou sur timbres.impots.gouv.fr. Aucun autre frais sauf duplicata éventuel (25 €). Pas de frais de dossier supplémentaires.',
    },
    {
      question: 'Puis-je renouveler ma carte de résident si elle est déjà expirée depuis 1 mois ?',
      answer: 'Oui, mais c\'est plus risqué : votre séjour est théoriquement irrégulier. Déposez immédiatement votre demande sur ANEF en expliquant le retard. Dans la majorité des cas, le récépissé sera délivré et la situation régularisée. Au-delà de 6 mois post-expiration, contactez un avocat spécialisé.',
    },
    {
      question: 'Mon récépissé expire avant que je reçoive ma nouvelle carte. Que faire ?',
      answer: 'Le récépissé est renouvelable automatiquement sur ANEF. Connectez-vous, demandez le renouvellement (généralement validé en 48 heures). Si la procédure prend plus de 8 mois, contactez votre préfecture par mail ou via le formulaire ANEF "Signaler un retard".',
    },
    {
      question: 'Mon mari/épouse français(e) est décédé(e) ou nous avons divorcé. Cela impacte-t-il le renouvellement ?',
      answer: 'Pas en principe, car la carte de résident est un titre de longue durée détaché de la situation matrimoniale. Toutefois, si vous l\'avez obtenue récemment au titre du mariage (moins de 5 ans), informez l\'administration et joignez les justificatifs (acte de décès, jugement de divorce). Le renouvellement reste de plein droit.',
    },
    {
      question: 'Après le renouvellement de ma carte de résident, puis-je demander la naturalisation immédiatement ?',
      answer: 'Oui si vous remplissez les conditions générales : 5 ans de résidence régulière (la carte de résident en compte), niveau B1 de français certifié, intégration républicaine, ressources stables, casier vierge. Le test civique (40 questions, 32/40 minimum) est obligatoire et constitue souvent la dernière étape avant le dépôt.',
    },
  ],
};

// =====================================================================
// Métadonnées des 3 articles (Article[])
// =====================================================================
export const batch4Metadata: Article[] = [
  {
    id: 'mai-2026-10',
    slug: 'dossier-naturalisation-refuse-sans-motif-2026-recours-cada-tribunal',
    title: "Naturalisation refusée sans motif 2026 : obtenir l'explication via la CADA et faire un recours efficace",
    excerpt: "La préfecture ou le ministère vous refuse la naturalisation sans motif clair ? Vous pouvez obtenir le dossier complet via la CADA, comprendre les vraies raisons cachées et déposer un recours gracieux ou contentieux. Procédure 2026, délais et modèle de demande.",
    content: '',
    category: 'Conseils pratiques',
    categorySlug: 'conseils',
    author: 'Brian BIENDOU',
    date: '10/05/2026',
    readTime: 17,
    views: 0,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'mai-2026-11',
    slug: 'ants-permis-conduire-categorie-b-2026-demande-etapes-tarifs',
    title: 'ANTS permis B 2026 : première demande, code, conduite, tarifs (étapes complètes)',
    excerpt: "Première demande de permis B en 2026 ? Tout passer par ANTS : code de la route (30 €), examen de conduite, fabrication du permis. Étapes officielles, tarifs détaillés, délais et solutions aux blocages les plus fréquents.",
    content: '',
    category: 'Conseils pratiques',
    categorySlug: 'conseils',
    author: 'Brian BIENDOU',
    date: '10/05/2026',
    readTime: 14,
    views: 0,
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'mai-2026-12',
    slug: 'renouvellement-carte-resident-10-ans-2026-conditions-documents-anef',
    title: 'Renouvellement carte de résident 10 ans 2026 : démarches ANEF, conditions et timeline complète',
    excerpt: "Votre carte de résident 10 ans expire ? Renouvellement automatique sous conditions en 2026 : 2 mois avant échéance via ANEF, dossier réduit (par rapport à la 1re demande), récépissé immédiat. Documents, motifs de refus rares et procédure pas-à-pas.",
    content: '',
    category: 'Conseils pratiques',
    categorySlug: 'conseils',
    author: 'Brian BIENDOU',
    date: '10/05/2026',
    readTime: 15,
    views: 0,
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
];
