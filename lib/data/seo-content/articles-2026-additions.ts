/**
 * Articles additionnels 2026
 * Contenus SEO structures pour conserver la meme DA editoriale.
 */

import { ArticleFullContent } from './articles-part1';

// ARTICLE 1 : Documents test civique 2026
export const documentsTestCiviqueContent: ArticleFullContent = {
  slug: 'documents-test-civique-2026-convocation-piece-identite',
  introduction: `Le jour du **test civique 2026**, de nombreux candidats perdent leur session a cause d'un oubli simple: convocation non imprimee, piece d'identite invalide, arrivee tardive ou justificatif manquant. Ce guide vous donne une **checklist claire** des documents a apporter, les **erreurs les plus frequentes** a eviter et les reflexes a adopter en cas d'imprevu. Objectif: arriver serein, etre admis en salle sans stress, et vous concentrer uniquement sur vos 40 questions QCM.`,
  sections: [
    {
      id: 'documents-obligatoires',
      title: 'Les documents obligatoires le jour du test civique',
      content: `La regle de base est simple: sans justificatifs valides, le centre peut refuser votre passage. Voici les pieces a preparer systematiquement:

**1. Une piece d'identite officielle en cours de validite**
- Passeport
- Titre de sejour
- Carte nationale d'identite (si acceptee par le centre selon votre situation)

**2. Votre convocation de test civique**
- Version papier recommandee
- Version numerique en secours sur votre telephone
- Verifiez la date, l'heure, l'adresse exacte et le numero de salle

**3. La preuve de votre inscription/paiement (si demandee)**
- Email de confirmation
- Recu de paiement
- Numero de dossier

**4. Eventuels justificatifs d'amenagement**
- Certificat medical
- Notification d'amenagement (temps supplementaire, acces PMR, etc.)`,
    },
    {
      id: 'checklist-48h',
      title: 'Checklist 48h avant l\'examen: zero oubli',
      content: `Pour limiter les imprévus, preparez un dossier la veille et faites une verification finale 48h avant:

- Controlez la validite de votre piece d'identite
- Imprimez la convocation (meme si version mobile acceptee)
- Prenez une capture d'ecran des infos importantes (adresse, horaire, contact)
- Reperez votre trajet et prevoyez une marge de 30 a 45 minutes
- Verifiez les consignes du centre (objets autorises/interdits)
- Gardez une copie de vos emails dans votre boite hors-ligne

→ Astuce: placez tous les documents dans une pochette unique des la veille pour eviter les oublis de derniere minute.`,
    },
    {
      id: 'retard-absence-oubli',
      title: 'Retard, absence, oubli de document: que faire ?',
      content: `Les centres appliquent des regles strictes, mais il existe des marges de manoeuvre selon les situations:

**En cas de retard**
- Contactez immediatement le centre d'examen
- Expliquez la situation de facon concise
- Demandez si une admission tardive est encore possible

**En cas d'oubli de convocation**
- Montrez l'email de convocation sur telephone
- Presentez votre piece d'identite et votre numero de dossier
- Certains centres acceptent, d'autres exigent la version papier

**En cas de piece d'identite expiree**
- Le refus d'acces est frequent
- Reprogrammez rapidement une nouvelle session
- Gardez toute preuve de votre presence pour appuyer votre demande de report

**En cas d'absence**
- Informez le centre au plus vite
- Fournissez un justificatif (medical, transport, force majeure) si disponible
- Renseignez-vous sur les conditions de re-inscription et frais eventuels`,
    },
    {
      id: 'jour-j-deroulement',
      title: 'Le jour J: deroulement type et bonnes pratiques',
      content: `Le jour du test, votre objectif est d'eviter toute fatigue decisionnelle inutile:

**Avant l'entree en salle**
- Arrivez 30 minutes en avance
- Verifiez l'affichage de votre session
- Gardez piece d'identite + convocation accessibles

**Pendant l'installation**
- Ecoutez les consignes de surveillance
- Signalez immediatement un probleme materiel
- Respirez et cadrez votre temps: 45 minutes pour 40 questions

**Pendant le QCM**
- Lisez chaque question deux fois
- Eliminez les propositions manifestement fausses
- Evitez de bloquer plus de 60 secondes sur une question
- Revenez sur les questions difficiles en fin d'epreuve`,
    },
    {
      id: 'documents-application-dossier',
      title: 'Pourquoi ces documents sont essentiels pour votre dossier',
      content: `La reussite du test civique sert de preuve d'integration dans plusieurs procedures administratives.

Selon votre projet (carte pluriannuelle, carte de resident, naturalisation), une session annulee pour motif administratif peut ralentir l'ensemble de votre calendrier. En pratique:

- Vous perdez un creneau parfois difficile a reprogrammer
- Vous reportez la constitution de votre dossier complet
- Vous risquez un decalage de depot en prefecture

Conclusion pratique: une **bonne organisation documentaire** est l'un des leviers les plus simples pour securiser votre parcours.`,
    },
    {
      id: 'plan-preparation-court',
      title: 'Mini plan de preparation en 10 jours avant votre session',
      content: `Si votre session approche, suivez ce plan express:

**J-10 a J-7**
- Revision des 5 thematiques officielles
- 1 QCM chronometre par jour

**J-6 a J-3**
- Focus sur vos erreurs recurrentes
- Revision des notions pieges (institutions, dates, droits/devoirs)

**J-2 a J-1**
- Verification des documents et du trajet
- 1 dernier entrainement en conditions reelles

**Jour J**
- Arrivee anticipee
- Lecture attentive des questions
- Gestion du temps reguliere

Pour vous entrainer, utilisez les examens blancs disponibles sur [LeTestCivique.fr](/dashboard).`,
    },
  ],
  conclusion: `Le test civique ne se joue pas seulement sur vos connaissances: la **logistique documentaire** fait souvent la difference entre une session validee et un report frustrant. Avec une checklist solide, une arrivee anticipee et des copies de secours, vous mettez toutes les chances de votre cote pour passer l'examen dans de bonnes conditions et avancer sans retard dans votre parcours administratif.`,
  faq: [
    {
      question: 'La convocation doit-elle etre imprimee pour le test civique ?',
      answer: 'Oui, c\'est fortement recommande. Certains centres acceptent la version numerique, mais une version papier evite les refus lies a un probleme de batterie ou de reseau.',
    },
    {
      question: 'Puis-je passer le test avec un titre de sejour expire ?',
      answer: 'En general non. Une piece d\'identite valide est exigee. Contactez le centre en amont si vous etes dans une situation particuliere.',
    },
    {
      question: 'Que faire si j\'arrive en retard ?',
      answer: 'Appelez le centre immediatement. Une admission tardive peut parfois etre acceptee, mais ce n\'est pas garanti.',
    },
    {
      question: 'Quels objets sont interdits pendant le test ?',
      answer: 'Les regles varient selon les centres, mais les appareils non autorises (montres connectees, notes, etc.) sont generalement interdits. Verifiez les consignes de votre convocation.',
    },
    {
      question: 'En cas d\'absence justifiee, puis-je reprogrammer ma session ?',
      answer: 'Oui, souvent. Fournissez rapidement un justificatif (medical ou force majeure) et demandez les modalites precises de report au centre.',
    },
  ],
  keywords: [
    'documents test civique 2026',
    'convocation test civique',
    'piece identite test civique',
    'checklist test civique',
    'retard examen civique',
    'absence test civique',
    'inscription centre agree',
    'jour j examen civique',
    'QCM test civique',
    'preparation test civique rapide',
  ],
};

// ARTICLE 2 : Niveau B2 naturalisation 2026 — diplomes & tests acceptes (MAJ 15/06/2026)
export const niveauxFrancais2026Content: ArticleFullContent = {
  slug: 'niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation',
  introduction: `Depuis le **1er janvier 2026, le niveau B2 est exigé pour la naturalisation française** — alors que le niveau B1 suffisait jusqu'à fin 2025. Ce relèvement, fixé par le [décret n° 2025-648 du 15 juillet 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051900519) et précisé par l'[arrêté du 22 décembre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053164463), change concrètement la façon de constituer un dossier. Mais une question revient sans cesse : **quel niveau pour quelle démarche, et comment le justifier ?** Entre A2, B1 et B2, et entre diplômes et tests de langue (TCF, TEF, DELF), il est facile de se tromper de pièce — et un justificatif inadapté ou périmé peut bloquer un dossier entier. Ce guide remet les choses à plat : ce qui a changé en 2026, le niveau requis selon votre titre, comment prouver votre niveau (et pour combien de temps cette preuve reste valable), un comparatif TCF / TEF / DELF, les dispenses prévues par la loi, et le lien à ne pas confondre avec l'examen civique.`,
  sections: [
    {
      id: 'ce-qui-change-2026',
      title: 'Ce qui change au 1er janvier 2026 : le passage de B1 à B2 pour la naturalisation',
      content: `Jusqu'au 31 décembre 2025, un niveau **B1** suffisait pour demander la nationalité française. Depuis le **1er janvier 2026, le niveau exigé est le B2** du Cadre européen commun de référence pour les langues (CECRL), à l'oral comme à l'écrit.

**Le fondement juridique**

Deux textes officiels encadrent ce changement :

- Le [décret n° 2025-648 du 15 juillet 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051900519), qui modifie le décret n° 93-1362 du 30 décembre 1993 relatif aux décisions de naturalisation. Il relève le niveau de français exigé de B1 à **B2** et introduit l'obligation de réussir un **examen civique**.
- L'[arrêté du 22 décembre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053164463), qui fixe la liste précise des **diplômes et certifications** attestant le niveau B2 requis. Son article 5 prévoit expressément qu'il « entre en vigueur le 1er janvier 2026 ».

**Qui est concerné**

Le niveau B2 s'applique à **toutes les voies d'acquisition de la nationalité** soumises à condition de langue :
- la **naturalisation par décret** (la voie classique, après plusieurs années de résidence) ;
- l'**acquisition par mariage** avec un ressortissant français (déclaration au titre de l'article 21-2 du Code civil), comme le confirme [France Diplomatie](https://ca.diplomatie.gouv.fr/fr/le-niveau-b2-en-francais-devient-obligatoire-pour-les-demandes-dacquisition-de-la-nationalite).

**À partir de quand exactement ?**

La règle s'applique à toute demande **déposée après le 31 décembre 2025**. Attention : elle vise aussi les dossiers déposés avant cette date mais **incomplets**, pour lesquels un complément serait demandé à partir du 1er janvier 2026. Autrement dit, un dossier ouvert en 2025 mais finalisé en 2026 peut se voir appliquer la nouvelle exigence B2.`,
    },
    {
      id: 'tableau-niveau-par-titre',
      title: 'Quel niveau de français pour quelle démarche en 2026 ?',
      content: `Le niveau de langue exigé n'est pas le même selon le titre que vous demandez. Plus le titre engage durablement, plus le niveau attendu est élevé.

| Démarche | Niveau de français requis | Évolution |
|---|---|---|
| **Carte de séjour pluriannuelle** | **A2** | Niveau élémentaire avancé |
| **Carte de résident (10 ans)** | **B1** | Niveau intermédiaire |
| **Naturalisation / nationalité (décret ou mariage)** | **B2** | ⬆️ Relevé de B1 à B2 le 1er janvier 2026 |

Pour le détail des conditions de langue selon votre situation, la fiche de référence est celle de [Service-Public.fr — « Comment justifier de son niveau en français ? » (F11926)](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926).

**À retenir :** le passage à B2 ne concerne que la **naturalisation et l'acquisition de la nationalité**. Les niveaux exigés pour la carte pluriannuelle (A2) et la carte de résident (B1) restent inchangés. Vérifiez toujours le niveau applicable à **votre** démarche précise avant de réserver un test.`,
    },
    {
      id: 'comprendre-cecrl',
      title: 'A2, B1, B2 : comprendre les niveaux du CECRL simplement',
      content: `Le **CECRL** (Cadre européen commun de référence pour les langues) classe les compétences linguistiques de A1 (débutant) à C2 (maîtrise quasi native). Voici concrètement ce que recouvrent les trois niveaux utiles pour vos démarches.

**A2 — élémentaire avancé** (carte pluriannuelle)
- Comprendre des phrases simples du quotidien
- Échanger sur des besoins immédiats
- Décrire son environnement avec un vocabulaire de base

**B1 — intermédiaire** (carte de résident 10 ans)
- Comprendre l'essentiel d'une discussion claire
- Exprimer un avis simple et cohérent
- Gérer la plupart des situations de la vie courante

**B2 — intermédiaire avancé** (naturalisation depuis 2026)
- Comprendre des contenus complexes, y compris abstraits
- Argumenter avec nuance et défendre un point de vue
- Interagir avec aisance et spontanéité, y compris dans un contexte administratif

L'écart entre B1 et B2 n'est pas anodin : il correspond souvent à **plusieurs mois de progression** pour un apprenant. Si vous visiez la naturalisation avec un ancien justificatif B1, prévoyez de réévaluer votre niveau (voir la section dispenses et la FAQ ci-dessous).`,
    },
    {
      id: 'comment-justifier',
      title: 'Comment justifier son niveau B2 : diplôme ou test de langue ?',
      content: `Il existe deux grandes familles de justificatifs, et la différence entre les deux est **capitale** car elle ne joue pas du tout sur la durée de validité.

**1. Un diplôme — valable sans limitation de durée**

L'[arrêté du 22 décembre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053164463) reconnaît notamment :
- le **diplôme national du brevet** ;
- tout **diplôme délivré au nom de l'État** attestant au moins le niveau 3 du cadre national de certification professionnelle ;
- toute **certification professionnelle de niveau 3 minimum** inscrite au RNCP ;
- tout **diplôme attestant un niveau de français au moins équivalent au B2** (par exemple le **DELF B2** ou le **DALF**).

➡️ Un diplôme est acquis **définitivement** : il n'expire jamais. C'est l'option la plus sûre si vous l'avez déjà ou pouvez l'obtenir.

**2. Une attestation de test de langue — validité limitée à 2 ans**

Si vous n'avez pas de diplôme adéquat, vous pouvez passer un **test linguistique** reconnu (voir l'[arrêté du 22 décembre 2025 sur les tests linguistiques](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053164492)) :
- le **TCF** (Test de connaissance du français), version IRN (Intégration, Résidence, Nationalité) ;
- le **TEF** (Test d'évaluation de français), version IRN.

➡️ L'attestation de test est valable **2 ans** au maximum. Au-delà, elle n'est plus recevable et il faut repasser l'examen.

**Le réflexe à avoir**
- Vérifiez que le justificatif atteste bien le niveau **B2** (et non B1).
- Si c'est un test, contrôlez qu'il sera **encore valide au moment du dépôt ET de l'instruction** de votre dossier — un test périmé entre-temps rend la pièce inexploitable.
- Joignez des copies lisibles et cohérentes avec votre identité.`,
    },
    {
      id: 'comparatif-tcf-tef-delf',
      title: 'TCF, TEF ou DELF B2 : quel test choisir pour la naturalisation ?',
      content: `Les trois certifications sont acceptées pour justifier le niveau B2, mais elles ne fonctionnent pas de la même manière. Voici un comparatif pour choisir selon votre profil.

| Critère | TCF (IRN) | TEF (IRN) | DELF B2 |
|---|---|---|---|
| Nature | Test (attestation de niveau) | Test (attestation de niveau) | **Diplôme** d'État |
| Validité du résultat | **2 ans** | **2 ans** | **À vie** (diplôme) |
| Résultat | Niveau atteint sur une échelle | Niveau atteint sur une échelle | Réussite / échec à un niveau visé (B2) |
| Délai d'obtention | Rapide (quelques jours à semaines) | Rapide (quelques jours à semaines) | Sessions plus espacées dans l'année |
| Où le passer | Centres agréés (Alliances françaises, organismes habilités) | Centres agréés (CCI, organismes habilités) | Centres d'examen DELF/DALF, Alliances françaises |
| Prix indicatif | Variable selon le centre | Variable selon le centre | Variable selon le centre |

> ⚠️ **Prix** : les tarifs varient sensiblement d'un centre agréé à l'autre (souvent de l'ordre de **100 à 200 €** pour un TCF/TEF IRN). Demandez toujours le tarif exact et la disponibilité des sessions au centre avant de réserver — ne vous fiez pas à un montant trouvé sur un forum.

**Comment choisir ?**
- Vous voulez un justificatif **définitif** et avez le temps : visez le **DELF B2**, un diplôme qui ne périme jamais.
- Vous avez besoin d'un résultat **rapidement** (échéance de dépôt proche) : le **TCF IRN** ou le **TEF IRN** s'obtiennent généralement plus vite, en gardant en tête la validité de 2 ans.
- Dans tous les cas, confirmez auprès du centre que la version proposée est bien celle reconnue pour la **nationalité** (mention IRN pour le TCF/TEF).`,
    },
    {
      id: 'dispenses',
      title: 'Qui est dispensé de justifier son niveau de français ?',
      content: `La loi prévoit des **dispenses**, c'est-à-dire des situations où vous n'avez pas à produire de justificatif de niveau. D'après la fiche officielle [Service-Public.fr (F11926)](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926), sont notamment dispensées :

- les personnes dont l'**état de santé ou le handicap** rend l'évaluation du niveau impossible (sur présentation d'un **certificat médical**) ;
- les **réfugiés statutaires et apatrides âgés de plus de 70 ans** et résidant régulièrement en France depuis au moins **15 ans**.

> ⚠️ Les dispenses sont d'interprétation stricte et leur périmètre exact peut évoluer. Vérifiez votre éligibilité sur la fiche [Service-Public.fr F11926](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926) ou auprès de votre préfecture avant de constituer votre dossier sans justificatif.

En dehors de ces cas, **le niveau B2 doit être prouvé** par un diplôme ou un test, comme détaillé plus haut.`,
    },
    {
      id: 'langue-vs-civique',
      title: 'Niveau de langue ≠ examen civique : ne pas confondre les deux exigences',
      content: `C'est une confusion fréquente depuis 2026 : le **niveau de français** et l'**examen civique** sont deux conditions **distinctes et cumulatives**. Réussir l'une ne dispense pas de l'autre.

| | Niveau de langue (B2) | Examen civique |
|---|---|---|
| Ce qui est évalué | Votre **maîtrise du français** (comprendre, parler, écrire) | Vos **connaissances** sur les valeurs, l'histoire et les institutions de la République |
| Comment le prouver | Diplôme ou test (TCF, TEF, DELF) | Réussir le QCM officiel (32/40, soit 80 %) |
| Introduit / relevé par | Décret n° 2025-648 (B1 → B2) | Décret n° 2025-648 (nouvel examen) |

Pour un dossier de naturalisation complet en 2026, il faut donc **les deux** : un justificatif de niveau **B2** ET une attestation de réussite à l'**examen civique**. Préparez ces deux volets en parallèle pour ne pas retarder votre dépôt.

Pour bien comprendre la nouvelle obligation d'examen civique selon votre titre, consultez notre guide [Examen civique obligatoire : ce qui change pour la carte de séjour et la naturalisation](/articles/examen-civique-2026-exemples-questions-corrigees).`,
    },
    {
      id: 'plan-progression',
      title: 'Plan de progression vers le B2 et préparation de l\'examen civique',
      content: `Atteindre le B2 demande de la régularité. Voici un plan réaliste, à combiner avec la préparation de l'examen civique.

**Semaines 1 à 4 — consolidation**
- Grammaire et vocabulaire de la vie administrative et citoyenne
- 30 à 45 minutes de lecture quotidienne en français (presse, démarches)
- 3 sessions d'expression orale par semaine

**Semaines 5 à 8 — entraînement au format**
- Compréhension écrite et orale sur des supports de niveau B2
- Production écrite argumentée (courrier, prise de position)
- Correction systématique des erreurs récurrentes

**Semaines 9 à 12 — simulation**
- Tests blancs chronométrés (format TCF/TEF ou DELF B2)
- Travail de la fluidité et de la prononciation
- Révision ciblée selon vos points faibles

En parallèle, ne négligez pas l'**examen civique** : c'est une condition à part entière. Vous pouvez vous entraîner sur des examens blancs en conditions réelles, avec score immédiat et bilan par thème.

> 🎯 **Votre niveau de français est en bonne voie ? Il vous reste l'examen civique — préparez-le dès maintenant.** → [Commencer l'entraînement gratuit](/signup)`,
    },
  ],
  conclusion: `Depuis le 1er janvier 2026, la naturalisation française exige un **niveau B2** de français — un cran au-dessus de l'ancien B1 — au titre du décret n° 2025-648 et de l'arrêté du 22 décembre 2025. Retenez l'essentiel : le niveau dépend de votre démarche (A2 pour la carte pluriannuelle, B1 pour la carte de résident, **B2 pour la nationalité**) ; un **diplôme** vaut à vie tandis qu'une **attestation de test** (TCF, TEF) n'est valable que **2 ans** ; et le niveau de langue ne remplace pas l'**examen civique**, qui reste une condition distincte. En choisissant le bon justificatif, en surveillant sa validité et en préparant les deux volets en parallèle, vous évitez le principal motif de blocage : une pièce inadaptée ou périmée. Anticipez, vérifiez chaque exigence sur les sources officielles, et avancez sereinement vers votre objectif.`,
  faq: [
    {
      question: 'Quel niveau de français faut-il pour la naturalisation en 2026 ?',
      answer: 'Depuis le 1er janvier 2026, il faut justifier d\'un niveau B2 du CECRL, à l\'oral comme à l\'écrit. C\'est un relèvement par rapport au niveau B1 exigé jusqu\'à fin 2025, prévu par le décret n° 2025-648 du 15 juillet 2025 et l\'arrêté du 22 décembre 2025.',
    },
    {
      question: 'DELF ou TCF : quelle différence pour la naturalisation ?',
      answer: 'Le DELF B2 est un diplôme : une fois obtenu, il est valable à vie. Le TCF (comme le TEF) est un test dont l\'attestation n\'est valable que 2 ans. Si vous avez le temps, le DELF B2 offre un justificatif définitif ; si vous êtes pressé, le TCF/TEF IRN s\'obtient généralement plus vite.',
    },
    {
      question: 'Mon ancien diplôme ou test B1 est-il encore valable pour la naturalisation ?',
      answer: 'Non : depuis le 1er janvier 2026, le niveau exigé est le B2. Un justificatif attestant uniquement le B1 ne suffit plus pour une demande déposée (ou complétée) après le 31 décembre 2025. Il faut produire une preuve de niveau B2.',
    },
    {
      question: 'Le niveau B2 est-il aussi exigé pour la naturalisation par mariage ?',
      answer: 'Oui. Le niveau B2 s\'applique aussi bien à la naturalisation par décret qu\'à l\'acquisition de la nationalité par mariage (déclaration au titre de l\'article 21-2 du Code civil), comme le confirme France Diplomatie.',
    },
    {
      question: 'Combien de temps une attestation de test (TCF / TEF) reste-t-elle valable ?',
      answer: 'Une attestation de test de langue est valable 2 ans au maximum. Assurez-vous qu\'elle sera encore valide au moment du dépôt et de l\'instruction de votre dossier, sous peine de devoir repasser le test.',
    },
    {
      question: 'Qui est dispensé de justifier son niveau de français ?',
      answer: 'Sont notamment dispensées les personnes dont l\'état de santé ou le handicap rend l\'évaluation impossible (certificat médical), ainsi que les réfugiés et apatrides de plus de 70 ans résidant en France depuis au moins 15 ans. Vérifiez votre situation sur la fiche Service-Public F11926.',
    },
  ],
  keywords: [
    'niveau B2 naturalisation',
    'niveau de langue naturalisation 2026',
    'B2 nationalité française 2026',
    'TCF naturalisation',
    'TEF naturalisation',
    'DELF B2 naturalisation',
    'justificatif niveau de français naturalisation',
    'arrêté 22 décembre 2025 niveau français',
    'décret 2025-648 naturalisation B2',
    'niveau français carte pluriannuelle A2',
    'niveau français carte résident B1',
    'dispense niveau français naturalisation',
    'validité test TCF TEF naturalisation',
    'niveau de langue et examen civique',
  ],
  sources: [
    {
      title: 'Service-Public.fr — Comment justifier de son niveau en français ? (F11926)',
      url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F11926',
      type: 'official',
      description: 'Fiche officielle détaillant le niveau de français requis selon la démarche, les justificatifs acceptés (diplôme ou test), leur validité et les dispenses (santé, âge).',
    },
    {
      title: 'Décret n° 2025-648 du 15 juillet 2025 (Légifrance)',
      url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051900519',
      type: 'legal',
      description: 'Décret modifiant le décret de 1993 sur la nationalité : relève le niveau de français de B1 à B2 pour la naturalisation et instaure l\'examen civique.',
    },
    {
      title: 'Arrêté du 22 décembre 2025 — diplômes et certifications (nationalité française)',
      url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053164463',
      type: 'legal',
      description: 'Fixe la liste des diplômes et certifications attestant le niveau B2 requis des candidats à la nationalité ; entrée en vigueur le 1er janvier 2026.',
    },
    {
      title: 'Arrêté du 22 décembre 2025 — tests linguistiques (nationalité française)',
      url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053164492',
      type: 'legal',
      description: 'Précise les tests linguistiques (TCF, TEF) recevables pour justifier le niveau de français requis pour la nationalité.',
    },
    {
      title: 'France Diplomatie — Le niveau B2 devient obligatoire (acquisition par mariage)',
      url: 'https://ca.diplomatie.gouv.fr/fr/le-niveau-b2-en-francais-devient-obligatoire-pour-les-demandes-dacquisition-de-la-nationalite',
      type: 'official',
      description: 'Confirme l\'application du niveau B2 à l\'acquisition de la nationalité par mariage à compter du 1er janvier 2026.',
    },
  ],
};
