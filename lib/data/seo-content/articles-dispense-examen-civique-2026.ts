/**
 * Article — Dispense de l'examen civique 2026 : qui est exempté ?
 * Requête à forte intention : « suis-je dispensé de l'examen civique ? »
 * Angle différenciant : arbre de décision en 4 questions + distinction
 * séjour / naturalisation que la plupart des contenus concurrents ratent.
 * Rédigé le 24/08/2026.
 */

import type { ArticleFullContent } from './articles-part1';
import type { Article } from '../articles';

export const dispenseExamenCiviqueContent: ArticleFullContent = {
  slug: 'dispense-examen-civique-2026-qui-est-exempte-age-refugie-accords',

  introduction: `Depuis le **1er janvier 2026**, l'examen civique conditionne la délivrance de la carte de séjour pluriannuelle, de la carte de résident et de la naturalisation française. Avant de vous inscrire, de payer et de réviser, une question s'impose : **êtes-vous seulement concerné ?**

Car la loi prévoit plusieurs cas de **dispense**. Certains sont larges et bien connus (l'âge), d'autres beaucoup plus subtils — et c'est là que se jouent la plupart des erreurs de dossier. Le piège le plus fréquent : croire qu'une dispense obtenue pour le **titre de séjour** vaut aussi pour la **naturalisation**. Elle ne vaut pas. Des candidats déposent chaque mois un dossier de nationalité incomplet pour cette seule raison.

Ce guide fait le tri, dispense par dispense, en distinguant systématiquement les deux procédures. À la fin, un **arbre de décision en 4 questions** vous donne votre réponse en moins d'une minute.

> ⚠️ **Le principe reste l'obligation.** L'examen civique est la règle depuis le 1er janvier 2026 ([décret n° 2025-648 du 15 juillet 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051925434), complété par l'arrêté du 10 octobre 2025). La dispense est **l'exception** : elle doit reposer sur un fondement précis, et se justifier par une pièce au dossier.`,

  sections: [
    {
      id: 'principe-obligation',
      title: "Le principe : l'examen civique est obligatoire, la dispense est l'exception",
      content: `Avant d'examiner les cas de dispense, il faut poser le cadre. Depuis le **1er janvier 2026**, la réussite à l'examen civique est exigée pour :

- 🪪 **Toute première demande de carte de séjour pluriannuelle** par un ressortissant non européen ;
- 🏠 **Toute première demande de carte de résident** (conjoint de Français, parent d'enfant français, regroupement familial, résident de longue durée-UE, carte permanente) ;
- 🇫🇷 **Toute demande de naturalisation**, par décret comme par déclaration de nationalité à raison du mariage.

**Le format de l'examen** ([source officielle : formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/)) :
- **40 questions** à choix multiples en français, réparties en **28 questions de connaissance** et **12 mises en situation** ;
- **45 minutes maximum**, sur tablette ou ordinateur ;
- **32 bonnes réponses sur 40 (80 %)** pour obtenir l'attestation ;
- Deux opérateurs agréés seulement : la **CCI Paris Île-de-France (CCIP)** et **France Éducation International (FEI)**.

Bonne nouvelle si vous n'êtes pas dispensé : **l'attestation n'a pas de durée de validité**. Une fois obtenue, elle est acquise. Et une attestation délivrée pour la carte de résident (CR) **vaut attestation** pour la carte de séjour pluriannuelle (CSP).

Pour le détail complet de l'obligation, consultez notre guide [Examen civique 2026 : obligatoire pour la carte de séjour](/articles/examen-civique-obligatoire-carte-sejour-pluriannuelle-2026).

> 💡 **Règle de méthode :** ne présumez jamais votre dispense. Si vous pensez en bénéficier, identifiez **le texte précis** qui la fonde et **la pièce justificative** correspondante. Une dispense non documentée dans le dossier est traitée comme une absence d'attestation.`,
    },
    {
      id: 'dispense-age-65-ans',
      title: 'Dispense n° 1 — Avoir 65 ans révolus',
      content: `C'est la dispense la plus simple et la moins contestable.

**La règle :** les personnes âgées de **65 ans révolus à la date du dépôt de la demande** ne sont pas tenues de passer l'examen civique pour l'obtention d'un titre de séjour ([Service-Public, fiche F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530?lang=fr)).

**Les deux points de vigilance :**

1. 📅 **La date qui compte est celle du dépôt**, pas celle de l'instruction ni celle de la convocation en préfecture. Si vous avez 64 ans et 10 mois au dépôt, vous êtes **concerné** par l'examen — même si vous aurez 65 ans quand le dossier sera examiné. Dans ce cas de figure, deux options : passer l'examen, ou **attendre votre anniversaire pour déposer**, si votre calendrier de titre le permet.

2. ⚠️ **« Révolus » signifie révolus.** Le 65e anniversaire doit être **passé**, pas en cours d'année.

**Pièce à fournir :** aucune démarche spécifique — votre date de naissance figure déjà sur votre passeport et votre état civil. La préfecture applique la dispense d'office. Conservez néanmoins une copie de votre pièce d'identité dans votre dossier.

> 📌 **Attention au calendrier de votre titre.** Si vous approchez des 65 ans et que votre titre expire bientôt, ne retardez pas votre dépôt au point de tomber en séjour irrégulier. Un dépôt tardif se paie cher : notre article sur le [renouvellement de titre de séjour](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais) détaille les fenêtres à respecter sur l'ANEF.`,
    },
    {
      id: 'dispense-protection-internationale',
      title: 'Dispense n° 2 — Protection internationale : la dispense la plus mal comprise',
      content: `C'est ici que se concentre **l'erreur la plus coûteuse** de tout ce guide.

**La règle pour le titre de séjour :** les bénéficiaires d'une **protection internationale** — réfugiés statutaires, bénéficiaires de la **protection subsidiaire**, **apatrides** reconnus — ne sont pas soumis à l'examen civique pour la délivrance de leur titre de séjour. Leurs conditions d'intégration sont appréciées séparément.

**MAIS — et c'est le piège — cette dispense ne s'étend pas à la naturalisation.**

La demande de nationalité française relève du **code civil**, et non du CESEDA. Le statut de réfugié vous dispense de l'examen civique **pour votre titre de séjour**, il ne vous en dispense **pas** pour devenir Français. Un réfugié statutaire qui dépose un dossier de naturalisation en 2026 doit :
- ✅ **Passer et réussir l'examen civique** (32/40) ;
- ✅ **Justifier du niveau B2** en français (relevé le 1er janvier 2026, contre B1 auparavant) — voir notre guide [Niveau de langue français pour la nationalité](/articles/niveau-de-langue-francais-nationalite-titre-sejour-a2-b1-2026).

**Pourquoi tant de dossiers se font recaler là-dessus :** la personne a obtenu son titre de séjour sans examen civique, en conclut logiquement qu'elle en est « dispensée », et dépose son dossier de nationalité sans attestation. Le dossier est alors déclaré **incomplet** — avec, à la clé, plusieurs mois perdus dans des délais déjà longs (voir [Naturalisation française 2026 : délais, conditions et pièges](/articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet)).

> 🚨 **À retenir absolument :** dispensé pour le **séjour** ≠ dispensé pour la **nationalité**. Si vous êtes réfugié ou bénéficiaire de la protection subsidiaire et que vous visez la naturalisation, **vous devez passer l'examen civique**. Anticipez-le : entre l'inscription et le créneau disponible, comptez souvent 4 à 8 semaines.

Si votre procédure d'asile est encore en cours, consultez notre guide [Demande d'asile en France 2026 : OFPRA, CNDA, procédure et délais](/articles/demande-asile-france-2026-ofpra-cnda-procedure-delais).`,
    },
    {
      id: 'dispense-accords-bilateraux',
      title: 'Dispense n° 3 — Les accords bilatéraux : Algériens oui, Marocains et Tunisiens non',
      content: `Troisième cas de dispense, et le plus contre-intuitif : certains ressortissants échappent à l'examen civique **en raison d'un accord entre leur pays et la France**. Mais attention — cela ne concerne pas « le Maghreb » en bloc. Les trois régimes sont **différents**.

**🇩🇿 Les Algériens : dispensés pour le titre de séjour**

L'**accord franco-algérien du 27 décembre 1968** (modifié par avenants en 1985, 1994 et 2001) crée un régime **entièrement autonome** : les Algériens ne relèvent pas du CESEDA mais de cet accord, et reçoivent un **certificat de résidence algérien (CRA)** et non une carte de séjour de droit commun.

Le principe juridique est constant : les dispositions du CESEDA ne s'appliquent aux Algériens **que si l'accord le prévoit expressément**. Or l'accord de 1968 ne mentionne **pas** l'examen civique. Conclusion : **l'obligation ne leur est pas opposable pour leur titre de séjour**.

**🇲🇦 Les Marocains et 🇹🇳 les Tunisiens : soumis à l'examen**

La **convention franco-marocaine du 9 octobre 1987** et la **convention franco-tunisienne du 17 mars 1988** fonctionnent tout autrement : elles **ne créent pas de régime autonome** et **n'exemptent pas** des obligations du CESEDA. Marocains et Tunisiens sont donc **pleinement soumis à l'examen civique** pour leurs cartes de séjour.

**🇫🇷 La naturalisation : tout le monde au même régime**

Pour les trois nationalités — et pour toutes les autres — la naturalisation **échappe aux accords bilatéraux**, parce qu'elle relève du code civil. Algériens compris, **tous** doivent réussir l'examen civique et justifier du niveau B2.

| | Titre de séjour | Naturalisation |
|---|---|---|
| 🇩🇿 **Algériens** | ✅ Dispensés (accord 1968) | ❌ Examen obligatoire |
| 🇲🇦 **Marocains** | ❌ Examen obligatoire | ❌ Examen obligatoire |
| 🇹🇳 **Tunisiens** | ❌ Examen obligatoire | ❌ Examen obligatoire |

Nous consacrons un article entier à ce sujet, avec le raisonnement juridique détaillé : [Algériens et examen civique : ce que change vraiment l'accord de 1968](/articles/algeriens-examen-civique-2026-accord-1968-dispense-sejour-mais-pas-naturalisation).

> ⚠️ D'autres accords bilatéraux peuvent produire des effets comparables selon les statuts. Si vous relevez d'une convention spécifique, **faites confirmer votre situation** par votre préfecture ou un professionnel du droit des étrangers avant de renoncer à passer l'examen.`,
    },
    {
      id: 'dispense-sante-handicap',
      title: 'Dispense n° 4 — État de santé et handicap : dispense ou aménagement',
      content: `Quatrième cas : l'impossibilité de passer l'examen pour des raisons médicales.

**Deux réponses différentes selon la situation :**

**1. L'aménagement des conditions d'examen** 🧩
Lorsque le handicap n'empêche pas de composer mais rend les conditions standard inadaptées, l'examen peut être **aménagé** : temps majoré, matériel adapté, assistance d'un tiers, format accessible. Vous passez bien l'examen, mais dans des conditions ajustées à votre situation.

**2. La dispense pure et simple** 🩺
Lorsque **l'état de santé ou le handicap rend le passage de l'examen impossible**, une dispense peut être accordée ([Service-Public, fiche F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530?lang=fr)).

**Comment la demander — la partie qui compte :**
- 📄 Un **certificat médical** est indispensable. Il doit être **circonstancié** : il ne suffit pas d'attester d'une pathologie, il doit établir en quoi celle-ci **empêche concrètement** de composer (ou justifie tel aménagement précis).
- ⏱️ **Formulez la demande le plus tôt possible** — au moment de l'inscription auprès du centre pour un aménagement, ou dès le dépôt du dossier pour une dispense. Une demande présentée après coup, une fois l'examen manqué, est bien plus difficile à faire valoir.
- 🏥 Faites rédiger le certificat par le **praticien qui vous suit**, pas par un médecin vu une seule fois : un document détaillé et documenté pèse davantage.

> 💡 Ne confondez pas cette dispense avec le titre de séjour « étranger malade », qui répond à des conditions entièrement différentes. Si c'est votre situation, consultez notre guide [Titre de séjour étranger malade 2026](/articles/titre-sejour-etranger-malade-raisons-sante-2026).`,
    },
    {
      id: 'faux-amis-renouvellement',
      title: 'Les faux amis : ces situations qui ne sont PAS des dispenses',
      content: `Trois cas reviennent en boucle dans les questions des lecteurs. Aucun n'est une dispense — mais deux sont de très bonnes nouvelles quand même.

**✅ Le renouvellement : vous n'êtes pas concerné (mais ce n'est pas une « dispense »)**

L'examen civique s'applique aux **premières demandes** de carte pluriannuelle et de carte de résident. **Les renouvellements ne sont pas concernés.** Si vous renouvelez à l'identique un titre que vous détenez déjà, l'examen ne vous est pas demandé.

⚠️ Nuance à ne pas rater : un **changement de statut** ou le passage d'un titre annuel à un **premier** titre pluriannuel constitue une **première demande** de ce titre — et déclenche donc l'obligation. Ce n'est pas parce que vous vivez en France depuis dix ans que votre première carte pluriannuelle échappe à l'examen.

**✅ Vous avez déjà une attestation « carte de résident » (CR)**

Une attestation obtenue pour la carte de résident **vaut attestation** pour la carte de séjour pluriannuelle. Et comme l'attestation **n'a pas de date de péremption**, elle vous suit indéfiniment. Vous ne repassez pas l'examen.

**❌ Vivre en France depuis longtemps, parler parfaitement français, avoir des enfants français**

Aucune de ces circonstances — si favorables soient-elles à votre dossier par ailleurs — ne constitue une dispense d'examen civique. La durée de résidence, la maîtrise de la langue et les attaches familiales sont appréciées **séparément**. Elles ne remplacent pas l'attestation.

**❌ Le niveau B2 déjà validé**

Le diplôme de langue (DELF, TCF, TEF) et l'examen civique sont **deux exigences distinctes et cumulatives**. Un B2 en poche ne dispense de rien : il valide la langue, pas la connaissance des valeurs et institutions de la République.`,
    },
    {
      id: 'arbre-decision',
      title: 'Arbre de décision : êtes-vous dispensé ? (4 questions)',
      content: `Répondez dans l'ordre. La première réponse « oui » vous donne votre statut.

**① Votre demande porte-t-elle sur la naturalisation (décret ou mariage) ?**
→ **OUI** : vous **devez passer l'examen civique**, quelle que soit votre nationalité et quel que soit votre statut. Aucune dispense liée au séjour ne s'applique. *Fin du parcours.*
→ NON, il s'agit d'un titre de séjour : passez à ②.

**② S'agit-il d'un simple renouvellement du même titre ?**
→ **OUI** : l'examen **ne vous est pas demandé**. *Fin du parcours.*
→ NON, c'est une première demande de carte pluriannuelle ou de carte de résident (ou un changement de statut) : passez à ③.

**③ Êtes-vous dans l'un de ces cas ?**
- 🎂 **65 ans révolus** à la date du dépôt
- 🛡️ **Protection internationale** : réfugié, protection subsidiaire, apatride
- 🇩🇿 **Ressortissant algérien** (accord du 27 décembre 1968)
- 🩺 **État de santé ou handicap** rendant l'examen impossible (certificat médical requis)

→ **OUI** à l'un d'eux : vous êtes **dispensé pour ce titre de séjour**. ⚠️ Rappel : cette dispense **tombe** si vous demandez ensuite la nationalité. *Fin du parcours.*
→ NON à tous : passez à ④.

**④ Vous êtes concerné par l'examen civique.**
Il vous faut **32 bonnes réponses sur 40**. Inscrivez-vous auprès de la CCIP ou de FEI, et anticipez : les créneaux sont souvent à **4 à 8 semaines**.

> ✅ **Doute persistant ?** Deux réflexes : demandez une confirmation écrite à votre préfecture, et **préparez-vous quand même**. Réviser pour un examen dont vous êtes finalement dispensé ne coûte rien. Découvrir trois semaines avant le dépôt que vous n'étiez pas dispensé, en revanche, peut coûter plusieurs mois.`,
    },
    {
      id: 'pas-dispense-que-faire',
      title: "Vous n'êtes pas dispensé : par où commencer",
      content: `Si l'arbre de décision vous a mené au point ④, voici le chemin le plus court.

**1. Évaluez votre niveau réel — gratuitement et tout de suite** 🎯
Avant de payer une inscription (comptez de l'ordre de **65 à 90 €** selon le centre, le tarif étant fixé par chaque organisme), mesurez où vous en êtes. Notre [test civique gratuit en ligne](/articles/test-civique-gratuit-en-ligne-2026-examen-blanc-entrainement-qcm) reproduit les conditions réelles : 40 questions, 45 minutes, chronomètre, seuil à 80 %.

**2. Ciblez le thème qui fait le plus échouer** 📊
Sur **3 208 sessions d'entraînement complétées** sur notre plateforme, un thème se détache nettement : **« Principes et valeurs de la République »**, avec un score moyen de **76,8 %** — soit **sous le seuil de réussite**. **39,8 %** des candidats y passent sous les 80 %, contre 24 % sur « Vivre dans la société française ». C'est contre-intuitif, car c'est le thème que tout le monde croit maîtriser. Commencez par là.

**3. Inscrivez-vous tôt** 📅
Deux opérateurs seulement (CCIP et FEI) pour toute la France : les créneaux partent vite. Notre guide [Inscription au test civique 2026](/articles/inscription-test-civique-2026-ou-quand-comment-sinscrire) détaille les six étapes, du contrôle d'éligibilité à la convocation, et la [liste des centres agréés](/articles/nouveaux-centres-test-civique-mai-2026-liste-complete) vous aide à trouver le plus proche.

**4. Préparez le jour J** 📋
Pièce d'identité, convocation, horaires : voir [Documents à apporter le jour du test civique](/articles/documents-test-civique-2026-convocation-piece-identite) et [Comment réussir le test civique du premier coup](/articles/comment-reussir-test-civique-premier-coup).

> 💰 **L'argument qui devrait vous décider :** chaque tentative se paie. Rater une fois, c'est perdre le montant de l'inscription **et** 4 à 8 semaines d'attente pour un nouveau créneau — pendant que votre titre, lui, continue de courir vers sa date d'expiration.`,
    },
  ],

  conclusion: `Quatre dispenses existent — **65 ans révolus**, **protection internationale**, **accords bilatéraux** (essentiellement l'accord franco-algérien de 1968), **état de santé ou handicap** — auxquelles s'ajoute le cas du **renouvellement**, qui n'est pas concerné par l'examen.

Mais retenez surtout la ligne de partage qui fait le plus de dégâts dans les dossiers : **une dispense accordée pour le titre de séjour ne vaut jamais pour la naturalisation.** La nationalité relève du code civil, et ni le statut de réfugié, ni l'accord franco-algérien n'y font échapper. Seuls l'âge et l'état de santé produisent leurs effets dans les deux procédures.

Le bon réflexe, en cas de doute : **demandez une confirmation écrite à votre préfecture, et préparez-vous en parallèle**. L'attestation n'a pas de date de péremption — une fois obtenue, elle est acquise et vaut pour vos démarches futures. Réviser inutilement ne coûte rien ; découvrir tardivement que vous n'étiez pas dispensé peut coûter plusieurs mois de procédure.

👉 **Le plus simple pour trancher : faites le test.** Nos [40 questions gratuites en conditions réelles](/articles/test-civique-gratuit-en-ligne-2026-examen-blanc-entrainement-qcm) vous disent en 45 minutes si le sujet doit vous inquiéter.`,

  faq: [
    {
      question: "Je suis réfugié statutaire : dois-je passer l'examen civique ?",
      answer: "Pour votre **titre de séjour**, non : les bénéficiaires d'une protection internationale (réfugiés, protection subsidiaire, apatrides) en sont dispensés. Pour la **naturalisation**, oui, sans exception — la nationalité relève du code civil, et non du CESEDA. C'est l'erreur la plus fréquente : de nombreux dossiers de nationalité sont déclarés incomplets pour cette seule raison.",
    },
    {
      question: "Les Algériens sont-ils dispensés de l'examen civique ?",
      answer: "Pour le **titre de séjour**, oui : l'accord franco-algérien du 27 décembre 1968 crée un régime autonome qui ne mentionne pas l'examen civique, et le CESEDA ne s'applique aux Algériens que si l'accord le prévoit expressément. Pour la **naturalisation**, non : l'examen est obligatoire, comme pour tout le monde. Attention, cette dispense ne s'étend ni aux Marocains ni aux Tunisiens, dont les conventions de 1987 et 1988 ne créent pas de régime autonome.",
    },
    {
      question: "J'ai 64 ans et je déposerai mon dossier dans deux mois, j'aurai alors 65 ans. Suis-je dispensé ?",
      answer: "La date qui compte est celle du **dépôt de la demande**. Si vous avez 65 ans révolus au moment où vous déposez, vous êtes dispensé. Si votre calendrier de titre le permet, attendre votre anniversaire pour déposer peut donc vous éviter l'examen. Attention toutefois à ne pas retarder le dépôt au point de tomber en séjour irrégulier.",
    },
    {
      question: "Le renouvellement de mon titre de séjour est-il concerné ?",
      answer: "Non. L'examen civique s'applique aux **premières demandes** de carte de séjour pluriannuelle et de carte de résident. Les renouvellements à l'identique ne sont pas concernés. En revanche, un **changement de statut** ou le passage d'un titre annuel à une **première** carte pluriannuelle constitue bien une première demande et déclenche l'obligation.",
    },
    {
      question: "J'ai déjà mon niveau B2 en français : suis-je dispensé de l'examen civique ?",
      answer: "Non. Le diplôme de langue (DELF, TCF, TEF) et l'examen civique sont deux exigences **distinctes et cumulatives**. Le B2 valide votre maîtrise de la langue ; l'examen civique évalue votre connaissance des principes, valeurs et institutions de la République. Il vous faut les deux.",
    },
    {
      question: "Mon attestation d'examen civique a-t-elle une date d'expiration ?",
      answer: "Non. L'attestation n'a **pas de durée de validité définie** : une fois obtenue, elle est acquise. Mieux, une attestation délivrée pour la carte de résident (CR) vaut attestation pour la carte de séjour pluriannuelle (CSP). Vous ne repasserez donc pas l'examen pour vos démarches ultérieures.",
    },
    {
      question: "Comment demander une dispense pour raison de santé ?",
      answer: "Il faut produire un **certificat médical circonstancié** établissant que votre état de santé ou votre handicap rend le passage de l'examen impossible — ou justifie un aménagement (temps majoré, matériel adapté, assistance). Formulez la demande le plus tôt possible : auprès du centre au moment de l'inscription pour un aménagement, dès le dépôt du dossier pour une dispense. Une demande présentée après un examen manqué est bien plus difficile à faire valoir.",
    },
  ],

  keywords: [
    'dispense examen civique',
    'dispense examen civique 2026',
    'qui est dispensé examen civique',
    'exemption examen civique',
    'examen civique 65 ans',
    'examen civique réfugié',
    'examen civique algérien',
    'examen civique obligatoire ou pas',
    'suis-je dispensé examen civique',
    'examen civique renouvellement titre de séjour',
    'dispense examen civique naturalisation',
    'accord franco-algérien examen civique',
  ],

  sources: [
    {
      title: "Service-Public — Carte de séjour pluriannuelle et carte de résident : comment passer l'examen civique ?",
      url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F39530?lang=fr',
      type: 'official',
      description: "Fiche officielle : personnes concernées, dispenses (65 ans, santé, handicap), format de l'examen (40 questions, 32 bonnes réponses, 45 minutes), non-application aux renouvellements.",
    },
    {
      title: "Ministère de l'Intérieur — Informations générales sur l'examen civique",
      url: 'https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/',
      type: 'official',
      description: "Portail officiel de la formation civique : structure de l'examen (28 questions de connaissance et 12 mises en situation), opérateurs agréés CCIP et FEI, validité illimitée de l'attestation, équivalence CR/CSP.",
    },
    {
      title: "Ministère de l'Intérieur — L'examen civique pour demander un titre de séjour",
      url: 'https://www.immigration.interieur.gouv.fr/limmigration-en-france/sejour-des-etrangers/lexamen-civique-pour-demander-titre-de-sejour',
      type: 'official',
      description: "Page de la Direction générale des étrangers en France sur l'obligation d'examen civique et son champ d'application.",
    },
    {
      title: 'Légifrance — Décret n° 2025-648 du 15 juillet 2025',
      url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051925434',
      type: 'legal',
      description: "Texte instituant l'examen civique et redéfinissant les exigences linguistiques, applicable aux demandes déposées à compter du 1er janvier 2026.",
    },
    {
      title: "Ministère de l'Intérieur — Communiqué : l'examen civique nécessaire à partir du 1er janvier 2026",
      url: 'https://www.interieur.gouv.fr/actualites/communiques-de-presse/a-partir-du-1er-janvier-2026-reussite-a-lexamen-civique-sera-necessaire-pour-obtenir-carte-de-sejour',
      type: 'official',
      description: "Communiqué de presse officiel annonçant l'entrée en vigueur de l'obligation pour la carte de séjour pluriannuelle, la carte de résident et la naturalisation.",
    },
    {
      title: 'Préfecture des Yvelines — Examen civique obligatoire pour toute 1re demande de titre pluriannuel',
      url: 'https://www.yvelines.gouv.fr/Actualites/Examen-civique-obligatoire-pour-toute-1ere-demande-de-titre-de-sejour-pluriannuel-des-le-01-01-26',
      type: 'official',
      description: "Communication préfectorale précisant que l'obligation vise les premières demandes et non les renouvellements.",
    },
  ],
};

// =====================================================================
// Métadonnées Article
// =====================================================================
export const dispenseExamenCiviqueMetadata: Article = {
  id: 'seo-dispense-examen-civique-2026',
  slug: 'dispense-examen-civique-2026-qui-est-exempte-age-refugie-accords',
  title: 'Dispense examen civique 2026 : qui est vraiment exempté ?',
  excerpt: "Êtes-vous dispensé de l'examen civique ? Les 4 cas d'exemption en 2026 (65 ans, protection internationale, accord franco-algérien, santé), le cas du renouvellement, et le piège qui fait recaler les dossiers : une dispense pour le séjour ne vaut jamais pour la naturalisation.",
  content: '',
  category: 'Cadre légal',
  categorySlug: 'cadre-legal',
  author: 'Brian B',
  date: '24/08/2026',
  readTime: 12,
  views: 0,
  image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
  featured: true,
};
