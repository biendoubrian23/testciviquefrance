/**
 * Article 04 — RDV préfecture introuvable : le marché noir des créneaux (2026)
 * Article d'actualité / trafic — sujet chaud documenté par la presse en mai 2026
 * (bots, revendeurs de créneaux). Angle : ne pas s'arrêter au constat, donner
 * les solutions légales et gratuites. Rédigé le 16/07/2026.
 */

import type { ArticleFullContent } from './articles-part1';
import type { Article } from '../articles';

export const rdvPrefectureMarcheNoirContent: ArticleFullContent = {
  slug: 'rdv-prefecture-titre-sejour-introuvable-2026-creneaux-marche-noir',

  introduction: `Vous actualisez la page de prise de rendez-vous de votre préfecture plusieurs fois par jour, à toute heure, et la réponse est toujours la même : **aucun créneau disponible**. Pendant ce temps, votre titre de séjour approche de sa date d'expiration, et des inconnus sur Telegram ou TikTok vous proposent « un rendez-vous garanti » contre **150 à 400 €**.

Ce n'est pas une impression : la presse a documenté au printemps 2026 un véritable **marché noir des créneaux de rendez-vous en préfecture**, alimenté par des logiciels automatisés (bots) qui raflent les disponibilités en quelques secondes pour les revendre ([Observalgérie, 13 mai 2026](https://observalgerie.com/2026/05/13/immigration/rendez-vous-titre-de-sejour-en-prefecture-le-business-cache-qui-explose-en-france)). Un phénomène signalé au gouvernement dès 2021 par une [question écrite au Sénat](https://www.senat.fr/questions/base/2021/qSEQ211024742.html).

La bonne nouvelle : **vous n'avez pas besoin de payer**. Il existe des solutions **légales et gratuites** pour débloquer votre démarche — téléservice ANEF, recours au juge administratif qui peut **obliger la préfecture à vous donner un rendez-vous**, maintien de vos droits pendant l'attente. Ce guide les passe en revue, étape par étape.

> ⚠️ **À retenir d'emblée : ne payez jamais un créneau de rendez-vous.** C'est la porte ouverte aux arnaques (créneaux revendus à plusieurs personnes, rendez-vous annulés) et cela alimente le système qui vous bloque. Les alternatives gratuites existent — et elles sont plus sûres.`,

  sections: [
    {
      id: 'constat-prefectures-saturees',
      title: 'Le constat : des préfectures saturées, des créneaux qui disparaissent en secondes',
      content: `Depuis la généralisation de la prise de rendez-vous en ligne, obtenir un créneau en préfecture pour une démarche de titre de séjour relève du parcours du combattant dans de nombreux départements. Les créneaux mis en ligne **disparaissent en quelques secondes**, et certains usagers actualisent la page **des dizaines de fois par jour pendant des semaines** sans succès ([Observalgérie](https://observalgerie.com/2026/05/13/immigration/rendez-vous-titre-de-sejour-en-prefecture-le-business-cache-qui-explose-en-france)).

**Pourquoi c'est bloqué :**
- 📉 **L'offre de créneaux est très inférieure à la demande** dans les préfectures les plus chargées — les grandes agglomérations (Paris et l'Île-de-France, Marseille, Lyon, Lille, Rennes…) sont les plus touchées.
- 🤖 **Des bots surveillent les plannings en continu** et « verrouillent » les nouvelles disponibilités plus vite qu'aucun humain ne peut le faire (voir section suivante).
- 🖥️ **La dématérialisation est incomplète** : certaines démarches se font 100 % en ligne sur l'ANEF, mais d'autres exigent encore un passage physique au guichet — c'est là que l'embouteillage se concentre ([InfoMigrants](https://www.infomigrants.net/fr/post/49828/dematerialisation-des-titres-de-sejour--les-rendezvous-en-prefecture-se-revendent-au-marche-noir)).

Les conséquences sont graves : dépassement de la date d'expiration du titre, perte d'emploi faute de justificatif de séjour régulier, rupture de droits sociaux. Le [Défenseur des droits](https://www.defenseurdesdroits.fr/dematerialisation-des-demandes-de-titres-de-sejour-lanef-des-ruptures-de-droits-graves-et-massives) alerte depuis plusieurs années sur ces « ruptures de droits graves et massives » liées à la dématérialisation des démarches des étrangers.

> 💡 Premier réflexe : vérifiez si votre démarche nécessite **vraiment** un rendez-vous physique. De plus en plus de demandes se font entièrement en ligne, sans aucun créneau à décrocher (voir Solution 1).

**Nota :** cet article traite des rendez-vous **titre de séjour** en préfecture. Si vous cherchez un créneau pour le **permis de conduire ou la carte d'identité via l'ANTS**, consultez plutôt notre guide [ANTS : rendez-vous indisponible, les alternatives](/articles/ants-rdv-indisponible-prefecture-2026-alternatives-solutions).`,
    },
    {
      id: 'marche-noir-creneaux',
      title: 'Le marché noir des créneaux : bots, revendeurs… et pourquoi il ne faut PAS payer',
      content: `Sur cette pénurie s'est greffé un business parallèle, documenté par la presse en mai 2026 ([Observalgérie](https://observalgerie.com/2026/05/13/immigration/rendez-vous-titre-de-sejour-en-prefecture-le-business-cache-qui-explose-en-france)) : des intermédiaires utilisent des **logiciels automatisés** qui détectent instantanément chaque créneau libéré, le réservent, puis le **revendent entre 150 et 400 €** selon la préfecture. Les annonces circulent sur **Telegram, WhatsApp, Facebook et TikTok**, avec des promesses de « rendez-vous garantis ».

**Pourquoi payer est une très mauvaise idée :**
- 🚫 **Aucune garantie** : des créneaux sont revendus **à plusieurs personnes à la fois** — vous payez, et le jour J le rendez-vous ne vous appartient pas. Une [enquête de franceinfo](https://www.franceinfo.fr/societe/immigration/enquete-pseudo-conseils-juridiques-fausses-promesses-rendez-vous-payants-a-la-prefecture-les-escroqueries-visant-les-sans-papiers-se-multiplient_7467397.html) documente la multiplication de ces escroqueries visant les étrangers (faux conseils juridiques, fausses promesses, rendez-vous payants).
- 🪪 **Les rendez-vous sont nominatifs** : un créneau réservé sous une autre identité peut être refusé au guichet — et les préfectures **annulent les rendez-vous suspects** détectés comme pris par des bots. Le ministère de l'Intérieur a déployé des mesures anti-bots et travaille à des outils de détection pour endiguer ces reventes illégales ([Acteurs Publics](https://acteurspublics.fr/articles/prefectures-linterieur-detaille-ses-mesures-pour-endiguer-la-revente-illegale-de-rendez-vous/)).
- ⚖️ **C'est un circuit frauduleux** : revendre l'accès à un service public gratuit en trompant l'usager relève de l'escroquerie, et le trafic a été signalé aux pouvoirs publics dès 2021 ([Sénat, question écrite n° 24742](https://www.senat.fr/questions/base/2021/qSEQ211024742.html)). En payant, vous financez le système qui crée la pénurie.
- 💸 **Vous n'avez aucun recours** en cas d'arnaque : le vendeur disparaît, le paiement (souvent par des canaux intraçables) est perdu.

**Si vous avez été victime** d'une arnaque au rendez-vous : conservez toutes les preuves (captures d'écran, échanges, justificatifs de paiement) et signalez les faits sur la plateforme officielle [masecurite.interieur.gouv.fr](https://www.masecurite.interieur.gouv.fr/) ou en déposant plainte. Notre guide des [arnaques visant les étrangers en France](/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef) détaille la marche à suivre.

> 🚩 Règle d'or : **un rendez-vous en préfecture est gratuit, nominatif et se prend uniquement sur les canaux officiels** (site de votre préfecture, ANEF). Toute personne qui vous vend un créneau vous met en danger.`,
    },
    {
      id: 'solution-1-anef',
      title: 'Solution 1 : vérifier si votre démarche se fait sans rendez-vous, via l\'ANEF',
      content: `Beaucoup d'usagers cherchent un rendez-vous… **dont ils n'ont pas besoin**. Une grande partie des démarches de séjour est désormais dématérialisée sur le téléservice officiel [ANEF — administration-etrangers-en-france.interieur.gouv.fr](https://administration-etrangers-en-france.interieur.gouv.fr/) : le dossier se dépose **100 % en ligne**, sans créneau à décrocher.

**Démarches concernées par l'ANEF (liste indicative) :**
- ✅ **Validation du visa long séjour valant titre de séjour (VLS-TS)** dans les 3 mois de l'arrivée ;
- ✅ **Renouvellement** de nombreux titres (étudiant, salarié, vie privée et familiale, passeport talent…) ;
- ✅ **Demande de duplicata**, changement d'adresse, ou de document de voyage pour certains statuts.

Consultez notre [guide complet de l'ANEF](/articles/guide-anef-complet-2026-creer-compte-deposer-demande) pour créer votre compte et déposer votre demande pas à pas, et notre article dédié au [renouvellement de titre de séjour 2026](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais) pour les délais à anticiper.

**Et si l'ANEF bloque ?** Le Conseil d'État a jugé le 3 juin 2022 que l'administration ne peut imposer un téléservice qu'à deux conditions : offrir un **accompagnement** aux personnes en difficulté avec le numérique, et garantir une **solution de substitution** (un autre moyen de déposer sa demande) en cas d'impossibilité d'utiliser la plateforme ([La Cimade](https://www.lacimade.org/presse/le-conseil-detat-sanctionne-la-dematerialisation-illegale-des-demandes-de-titre-de-sejour/) ; [avis n° 461694 du 3 juin 2022](https://www.infomie.net/article6372.html?lang=fr)). Concrètement :
- 🖥️ Chaque préfecture dispose d'un **point d'accueil numérique** avec un médiateur pour vous aider à faire la démarche en ligne ;
- 📮 En cas de blocage technique avéré et documenté (captures d'écran), demandez par **courrier recommandé** à la préfecture un dépôt par une autre voie, en citant cette jurisprudence. Notre guide [ANEF : dossier bloqué, que faire ?](/articles/anef-dossier-bloque-en-attente-2026-debloquer-relancer) détaille les recours.

> 💡 Avant de chercher un créneau, vérifiez donc sur le site de **votre** préfecture et sur l'ANEF si votre démarche exige encore un passage au guichet. Vous économiserez peut-être des semaines d'attente.`,
    },
    {
      id: 'solution-2-refere-mesures-utiles',
      title: 'Solution 2 : le recours qui oblige la préfecture à vous donner un rendez-vous',
      content: `C'est la solution la plus puissante — et elle est méconnue. Depuis une décision du **Conseil d'État du 10 juin 2020 (n° 435594)**, un étranger qui prouve qu'il a tenté **plusieurs fois, sur plusieurs semaines**, d'obtenir un rendez-vous sur le site de la préfecture sans y parvenir peut saisir le **juge des référés du tribunal administratif**. Celui-ci peut alors **enjoindre au préfet de lui fixer un rendez-vous**, dans un délai qu'il détermine — bref en cas d'urgence particulière ([Conseil d'État, 10 juin 2020, n° 435594, sur Légifrance](https://www.legifrance.gouv.fr/ceta/id/CETATEXT000041986904)).

**Le principe :** c'est le « référé mesures utiles » de l'[article L. 521-3 du code de justice administrative](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006449335/) — une procédure d'**urgence**, recevable même sans décision administrative préalable.

**Comment constituer votre preuve (l'étape décisive) :**
1. 📸 Faites des **captures d'écran datées** de la page « aucun créneau disponible » de votre préfecture — l'heure et la date doivent être visibles.
2. 🗓️ Répétez ces tentatives **sur plusieurs semaines différentes** (le Conseil d'État exige des tentatives qui ne soient pas toutes la même semaine), idéalement à des jours et horaires variés.
3. 📁 Conservez tout élément montrant l'urgence : titre qui expire, promesse d'embauche, perte de droits.

**Comment saisir le juge :**
- Le recours se dépose au **tribunal administratif** dont dépend votre préfecture, notamment via [Télérecours citoyens](https://citoyens.telerecours.fr/) ;
- L'**avocat n'est pas obligatoire** pour ce type de référé, et le [GISTI publie un modèle de requête gratuit](https://www.gisti.org/IMG/doc/modele_refere_mu_prefecture.doc) à adapter à votre situation ;
- Si vos ressources sont faibles, vous pouvez demander l'**aide juridictionnelle** pour être accompagné par un avocat.

De nombreux tribunaux administratifs ordonnent ainsi chaque année aux préfectures de recevoir les demandeurs. C'est **gratuit**, légal, et souvent débloqué en quelques semaines.

> ⚖️ À ne pas confondre avec le recours contre un **refus** de titre de séjour : ici, on attaque l'**impossibilité de déposer sa demande**. Si votre dossier a été déposé mais reste sans réponse, voyez plutôt notre guide des [dossiers bloqués en préfecture](/articles/930000-dossiers-bloques-prefecture-2026-droits-recours-etrangers-france).`,
    },
    {
      id: 'solution-3-recepisse-maintien-droits',
      title: 'Solution 3 : protéger vos droits pendant l\'attente (récépissé, attestations)',
      content: `Pendant que vous cherchez un rendez-vous ou que votre dossier est en cours d'instruction, l'enjeu est d'éviter la **rupture de droits** (séjour, travail, prestations).

**Les documents qui vous protègent :**
- 🧾 **Le récépissé** : délivré quand votre demande est enregistrée au guichet, il vous autorise à séjourner en France pendant sa durée de validité. En **renouvellement**, il **proroge les droits attachés à votre précédent titre** — y compris, selon les cas, le droit de travailler ([service-public.fr — Récépissé de demande de titre de séjour](https://www.service-public.gouv.fr/particuliers/vosdroits/F15763)).
- 📄 **Les attestations ANEF** : si votre demande passe par le téléservice, vous recevez une **attestation** (de dépôt, de prolongation d'instruction, puis de décision favorable) qui joue un rôle équivalent. Conservez-les précieusement et imprimez-les.
- ✈️ Attention aux **voyages à l'étranger** avec un simple récépissé : les règles varient selon votre situation — consultez notre guide dédié [récépissé : droits, durée, voyage](/articles/recepisse-titre-de-sejour-droits-duree-voyage).

**Les bons réflexes anti-rupture de droits :**
1. ⏰ **Déposez votre demande de renouvellement tôt** — en général entre **4 et 2 mois avant l'expiration** du titre (voir notre [guide du renouvellement 2026](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais)).
2. 🧾 **Gardez la preuve de chaque tentative et de chaque dépôt** (captures d'écran, accusés d'enregistrement, courriers recommandés) : c'est ce qui vous protégera face à un employeur, à la CAF… et devant le juge.
3. 📮 Si le titre expire sans que vous ayez pu déposer votre demande **par la faute de la préfecture**, vos preuves de tentatives répétées seront déterminantes pour régulariser la situation et engager les recours.

> 💡 Un titre expiré ne signifie pas automatiquement séjour irrégulier si vous avez déposé votre demande de renouvellement à temps et détenez un récépissé ou une attestation valide. D'où l'importance capitale d'anticiper.`,
    },
    {
      id: 'aide-gratuite',
      title: 'Où se faire aider gratuitement',
      content: `Vous n'êtes pas seul face à la préfecture. Plusieurs acteurs peuvent vous accompagner **gratuitement** :

- 🏛️ **Les maisons France Services** — plus de 2 700 guichets de proximité partout en France, avec des agents formés pour vous aider dans vos démarches en ligne (ANEF comprise). Trouvez la vôtre sur [france-services.gouv.fr](https://www.france-services.gouv.fr/).
- 🖥️ **Le point d'accueil numérique de votre préfecture** — un médiateur numérique vous aide sur place à utiliser les téléservices (renseignez-vous sur le site de votre préfecture).
- 🤝 **Les associations spécialisées** — La Cimade, le GISTI et de nombreuses associations locales tiennent des **permanences juridiques gratuites** et connaissent parfaitement les recours (dont le référé mesures utiles). Le GISTI publie ses [modèles de recours en libre accès](https://www.gisti.org/spip.php?rubrique1215=).
- 🛡️ **Le Défenseur des droits** — sa saisine est **gratuite** (en ligne sur [defenseurdesdroits.fr](https://www.defenseurdesdroits.fr/), par courrier ou via l'un de ses 500+ délégués locaux). Il intervient régulièrement auprès des préfectures sur les difficultés d'accès aux rendez-vous et à l'ANEF.
- ⚖️ **L'aide juridictionnelle** — si un recours au tribunal devient nécessaire et que vos ressources sont limitées, elle prend en charge tout ou partie des frais d'avocat.

Pour une vue d'ensemble des acteurs qui peuvent vous épauler, consultez notre annuaire des [ressources utiles pour les étrangers en France](/articles/ressources-utiles-etrangers-france-2026-outils-associations-aides).

> 🎯 **Et pendant que votre démarche avance…** anticipez les étapes suivantes : depuis 2026, l'**examen civique** est obligatoire pour la carte de séjour pluriannuelle, la carte de résident et la naturalisation. Entraînez-vous gratuitement avec notre [test civique blanc en ligne](/articles/test-civique-gratuit-en-ligne-2026-examen-blanc-entrainement-qcm).`,
    },
  ],

  conclusion: `La pénurie de rendez-vous en préfecture est réelle, et le marché noir qui en profite est aussi illégal que dangereux pour ceux qui paient : créneaux revendus plusieurs fois, rendez-vous nominatifs inutilisables, annulations par les préfectures, aucun recours. La stratégie gagnante est ailleurs, et elle est **gratuite** : vérifier d'abord si votre démarche se fait **sans rendez-vous via l'ANEF**, documenter méthodiquement chaque tentative de prise de rendez-vous (captures d'écran datées, sur plusieurs semaines), puis, si le blocage persiste, saisir le **juge des référés** qui peut ordonner à la préfecture de vous recevoir — une voie ouverte par le Conseil d'État depuis 2020. Pendant l'attente, protégez vos droits avec le récépissé ou les attestations ANEF, et appuyez-vous sur les aides gratuites : France Services, associations, Défenseur des droits. Ne payez jamais pour un droit — faites-le valoir.`,

  faq: [
    {
      question: 'Que faire si aucun créneau de rendez-vous n\'est disponible en préfecture ?',
      answer: 'Vérifiez d\'abord si votre démarche peut se faire entièrement en ligne via l\'ANEF (beaucoup de renouvellements et la validation du VLS-TS n\'exigent aucun rendez-vous). Sinon, documentez vos tentatives par des captures d\'écran datées, répétées sur plusieurs semaines. Avec ces preuves, vous pouvez saisir le juge des référés du tribunal administratif (référé « mesures utiles »), qui peut ordonner à la préfecture de vous fixer un rendez-vous, conformément à la décision du Conseil d\'État du 10 juin 2020 (n° 435594).',
    },
    {
      question: 'Est-il légal d\'acheter un créneau de rendez-vous préfecture ?',
      answer: 'Les rendez-vous en préfecture sont gratuits et nominatifs : leur revente relève d\'un circuit frauduleux, signalé aux pouvoirs publics dès 2021, et les acheteurs sont les premières victimes — créneaux revendus à plusieurs personnes, rendez-vous refusés au guichet ou annulés par la préfecture lorsqu\'ils sont détectés comme pris par des bots. Vous risquez de perdre votre argent sans aucun recours. Ne payez jamais : utilisez les canaux officiels et les recours gratuits.',
    },
    {
      question: 'Peut-on attaquer la préfecture pour absence de rendez-vous ?',
      answer: 'Oui. Le Conseil d\'État (décision n° 435594 du 10 juin 2020) admet qu\'un étranger qui prouve avoir tenté plusieurs fois, sur des semaines différentes, d\'obtenir un rendez-vous en ligne sans succès peut saisir le juge des référés du tribunal administratif sur le fondement de l\'article L. 521-3 du code de justice administrative. Le juge peut enjoindre au préfet de fixer un rendez-vous dans un délai déterminé. L\'avocat n\'est pas obligatoire et le GISTI propose un modèle de requête gratuit.',
    },
    {
      question: 'Comment éviter de perdre ses droits pendant l\'attente d\'un rendez-vous ?',
      answer: 'Anticipez : déposez votre demande de renouvellement entre 4 et 2 mois avant l\'expiration de votre titre. Une fois la demande enregistrée, le récépissé (ou l\'attestation délivrée par l\'ANEF) vous maintient en séjour régulier et, en renouvellement, proroge les droits de votre ancien titre, y compris le droit de travailler selon les cas. Conservez toutes les preuves de vos tentatives et dépôts : elles vous protégeront auprès de votre employeur, des organismes sociaux et devant le juge.',
    },
  ],

  keywords: [
    'rdv préfecture titre de séjour',
    'créneau préfecture introuvable',
    'pas de rdv préfecture titre de séjour',
    'rdv préfecture impossible 2026',
    'recours absence de rdv préfecture',
    'marché noir rendez-vous préfecture',
    'acheter créneau préfecture illégal',
    'référé mesures utiles préfecture',
    'bots rendez-vous préfecture',
    'référé rendez-vous préfecture tribunal administratif',
    'anef démarche sans rendez-vous',
    'récépissé titre de séjour attente',
    'préfecture saturée titre de séjour 2026',
    'aide gratuite démarches préfecture',
    'défenseur des droits préfecture rendez-vous',
  ],

  sources: [
    {
      title: 'Conseil d\'État, 10 juin 2020, n° 435594 (Légifrance)',
      url: 'https://www.legifrance.gouv.fr/ceta/id/CETATEXT000041986904',
      type: 'legal',
      description: 'Décision de principe : le juge des référés peut enjoindre au préfet de fixer un rendez-vous à l\'étranger qui prouve ses tentatives infructueuses répétées sur plusieurs semaines.',
    },
    {
      title: 'Code de justice administrative — article L. 521-3 (référé mesures utiles)',
      url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006449335/',
      type: 'legal',
      description: 'Fondement juridique du recours d\'urgence permettant de demander au juge « toutes autres mesures utiles », sans décision administrative préalable.',
    },
    {
      title: 'Service-Public.fr — Récépissé de demande de titre de séjour',
      url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F15763',
      type: 'official',
      description: 'Droits attachés au récépissé (séjour, travail selon les cas), prorogation des droits en renouvellement et attestations délivrées via l\'ANEF.',
    },
    {
      title: 'ANEF — Administration numérique pour les étrangers en France',
      url: 'https://administration-etrangers-en-france.interieur.gouv.fr/',
      type: 'official',
      description: 'Téléservice officiel pour les démarches dématérialisées : validation VLS-TS, renouvellements, duplicata, changement d\'adresse.',
    },
    {
      title: 'Sénat — Question écrite n° 24742 : trafic de revente de rendez-vous en préfecture',
      url: 'https://www.senat.fr/questions/base/2021/qSEQ211024742.html',
      type: 'official',
      description: 'Signalement officiel au gouvernement, dès 2021, du développement d\'un trafic de revente de prises de rendez-vous en préfecture.',
    },
    {
      title: 'Défenseur des droits — Dématérialisation des demandes de titres de séjour via l\'ANEF',
      url: 'https://www.defenseurdesdroits.fr/dematerialisation-des-demandes-de-titres-de-sejour-lanef-des-ruptures-de-droits-graves-et-massives',
      type: 'official',
      description: 'Alerte de l\'autorité indépendante sur les ruptures de droits liées à la dématérialisation ; saisine gratuite du Défenseur des droits.',
    },
    {
      title: 'Observalgérie — Rendez-vous titre de séjour en préfecture : le business caché (13 mai 2026)',
      url: 'https://observalgerie.com/2026/05/13/immigration/rendez-vous-titre-de-sejour-en-prefecture-le-business-cache-qui-explose-en-france',
      type: 'article',
      description: 'Enquête sur le marché noir des créneaux : bots, revendeurs, créneaux entre 150 et 400 €, annonces sur Telegram, WhatsApp, Facebook et TikTok.',
    },
    {
      title: 'InfoMigrants — Les rendez-vous en préfecture se revendent au marché noir',
      url: 'https://www.infomigrants.net/fr/post/49828/dematerialisation-des-titres-de-sejour--les-rendezvous-en-prefecture-se-revendent-au-marche-noir',
      type: 'article',
      description: 'Reportage sur le marché parallèle né de la pénurie de créneaux et de la dématérialisation partielle des démarches.',
    },
    {
      title: 'Acteurs Publics — Les préfectures tentent d\'endiguer les reventes illégales de rendez-vous',
      url: 'https://acteurspublics.fr/articles/prefectures-linterieur-detaille-ses-mesures-pour-endiguer-la-revente-illegale-de-rendez-vous/',
      type: 'article',
      description: 'Les mesures du ministère de l\'Intérieur contre les bots et la revente illégale de créneaux (détection, annulation des rendez-vous suspects).',
    },
    {
      title: 'franceinfo — Enquête : les escroqueries visant les sans-papiers se multiplient',
      url: 'https://www.franceinfo.fr/societe/immigration/enquete-pseudo-conseils-juridiques-fausses-promesses-rendez-vous-payants-a-la-prefecture-les-escroqueries-visant-les-sans-papiers-se-multiplient_7467397.html',
      type: 'article',
      description: 'Enquête sur les pseudo-conseils juridiques, fausses promesses et rendez-vous payants visant les étrangers en démarche.',
    },
    {
      title: 'La Cimade — Le Conseil d\'État sanctionne la dématérialisation illégale des demandes de titre de séjour',
      url: 'https://www.lacimade.org/presse/le-conseil-detat-sanctionne-la-dematerialisation-illegale-des-demandes-de-titre-de-sejour/',
      type: 'article',
      description: 'Décisions du Conseil d\'État du 3 juin 2022 : obligation d\'accompagnement et de solution de substitution non dématérialisée.',
    },
    {
      title: 'GISTI — Modèle de référé mesures utiles (rendez-vous préfecture)',
      url: 'https://www.gisti.org/IMG/doc/modele_refere_mu_prefecture.doc',
      type: 'article',
      description: 'Modèle gratuit de requête en référé mesures utiles à adapter, publié par le GISTI.',
    },
  ],
};

// =====================================================================
// Métadonnées Article
// =====================================================================
export const rdvPrefectureMarcheNoirMetadata: Article = {
  id: 'actu-rdv-marche-noir-2026',
  slug: 'rdv-prefecture-titre-sejour-introuvable-2026-creneaux-marche-noir',
  title: 'RDV préfecture titre de séjour : créneaux introuvables 2026',
  excerpt: 'Impossible d\'obtenir un rendez-vous en préfecture pour votre titre de séjour ? Bots, revendeurs de créneaux, plateformes saturées : enquête sur le marché noir des RDV en 2026 et les solutions légales pour débloquer votre démarche.',
  content: '',
  category: 'Actualités',
  categorySlug: 'actualites',
  author: 'Brian B',
  date: '16/07/2026',
  readTime: 10,
  views: 0,
  image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop',
  featured: false,
};
