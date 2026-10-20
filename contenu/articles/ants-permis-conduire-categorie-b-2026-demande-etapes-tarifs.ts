import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-batch-mai-2026-4.ts`
 * et `lib/data/seo-articles.ts`, sans changer d'adresse.
 *
 * Réécrit le 20/10/2026 (fusion du groupe 8). La requête qui amène les
 * lecteurs ici est « prix fabrication permis de conduire ants » (Search
 * Console, 28 jours au 20/10/2026) : la réponse est donc en tête. L'article
 * doublon `ants-permis-conduire-en-ligne-2026-etapes` y est fusionné (son
 * adresse redirige ici en 301). L'article `ants-permis-conduire-2026-echange-demande-suivi`
 * n'est pas fusionné : il traite d'un permis qu'on a déjà (perte, vol,
 * renouvellement, suivi) et il est lié plus bas.
 *
 * Retiré parce que faux ou sans source officielle : « 18 ans » pour le permis B
 * (17 ans depuis 2024), « ASSR 2 si vous êtes né après 1988 » (elle est demandée
 * avant 21 ans), les tarifs d'auto-école « réels » (libres), les délais
 * d'examen par région, le délai NEPH, les nombres de centres par opérateur,
 * la « moyenne de 35 heures », l'envoi en recommandé (c'est une Lettre suivie),
 * les montants d'aide (CPF à 5 000 €, 102,23 €, aides régionales chiffrées),
 * le code photo « à 12 » ou « à 22 » caractères, le prix des cabines, et
 * l'échange de permis à 45 € (40 € selon service-public).
 */
const article: Article = {
  slug: "ants-permis-conduire-categorie-b-2026-demande-etapes-tarifs",
  titre: "Permis B sur l'ANTS : combien coûte la fabrication, et les étapes de la première demande",
  titreSeo: "Permis de conduire ANTS : prix et étapes",
  resume: "La fabrication du premier permis B est gratuite sur l'ANTS. Le code coûte 30 €. NEPH, code, conduite, demande du titre : les étapes officielles.",
  chapo: "La fabrication de votre premier permis de conduire est ==gratuite== : la demande sur le site de l'ANTS ne coûte rien ([service-public, R45443](https://www.service-public.gouv.fr/particuliers/vosdroits/R45443)). Les frais viennent d'ailleurs : ==30 €== pour l'examen du code, la formation, et la photo. Voici chaque étape, dans l'ordre, avec ce qui est payant et ce qui ne l'est pas.",
  publieLe: "2026-05-10",
  modifieLe: "2026-10-20",
  minutes: 7,
  theme: "prix fabrication permis de conduire ANTS",
  motsCles: [
    "prix fabrication permis de conduire ants",
    "combien coute la fabrication du permis de conduire",
    "ants permis de conduire",
    "ants permis b",
    "inscription permis ants",
    "dossier ants permis de conduire",
    "comment s'inscrire au permis",
    "NEPH ANTS demande",
    "prix examen code de la route",
    "photo signature ants",
    "ants permis en ligne",
    "demande permis ants",
    "permis B candidat libre",
    "ASSR permis",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop",
    alt: "Volant et tableau de bord d'une voiture, vus depuis la place du conducteur",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1568992687947-868a62a9f521",
  },
  blocs: [
    {
      type: "h2",
      texte: "Combien coûte la fabrication du permis sur l'ANTS ?",
      id: "prix-fabrication-permis",
    },
    {
      type: "p",
      texte: "L'ANTS (France Titres) est le service de l'État qui fabrique les permis de conduire. Toutes ses démarches pour le permis se font en ligne, sur [permisdeconduire.ants.gouv.fr](https://permisdeconduire.ants.gouv.fr). Pour un premier permis, l'État ne vous fait payer qu'un seul frais : l'examen du code. Voici les montants publiés par service-public.",
    },
    {
      type: "tableau",
      entetes: ["Démarche", "Prix officiel", "Source"],
      lignes: [
        ["Inscription à l'examen (numéro NEPH)", "Gratuit.", "[R49186](https://www.service-public.gouv.fr/particuliers/vosdroits/R49186)"],
        ["Examen du code de la route", "30 € par passage, à repayer après un échec.", "[F33694](https://www.service-public.gouv.fr/particuliers/vosdroits/F33694)"],
        ["Fabrication du permis après la réussite", "Gratuit.", "[R45443](https://www.service-public.gouv.fr/particuliers/vosdroits/R45443)"],
        ["Suivi de la demande", "Gratuit.", "[R36427](https://www.service-public.gouv.fr/particuliers/vosdroits/R36427)"],
        ["Nouveau permis après une perte ou un vol", "25 € (12,50 € en Guyane).", "[F34118](https://www.service-public.gouv.fr/particuliers/vosdroits/F34118)"],
        ["Échange d'un permis étranger", "40 € (20 € en Guyane).", "[F34118](https://www.service-public.gouv.fr/particuliers/vosdroits/F34118)"],
        ["Leçons en auto-école", "Prix libres, fixés par chaque école.", "[F2828](https://www.service-public.gouv.fr/particuliers/vosdroits/F2828)"],
      ],
      legende: "Montants lus sur service-public le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Les prix des auto-écoles ne sont pas fixés par l'État. Comparez plusieurs devis avant de signer. Il faut aussi payer la photo d'identité numérique, chez un photographe ou dans une cabine agréée. Méfiez-vous des sites qui font payer une démarche gratuite : notre article sur les [arnaques aux démarches en ligne](/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef) montre comment les repérer.",
    },
    {
      type: "h2",
      texte: "Qui peut passer le permis B ?",
      id: "conditions",
    },
    {
      type: "p",
      texte: "Depuis 2024, le permis B s'obtient dès ==17 ans==. Vous pouvez vous inscrire à l'examen dès 16 ans, ou dès 15 ans en conduite accompagnée ([service-public, F2828](https://www.service-public.gouv.fr/particuliers/vosdroits/F2828)). Avant de commencer, réunissez ces papiers :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "une pièce d'identité valide.",
        "un justificatif de domicile de moins de 6 mois.",
        "une photo-signature numérique : une photo avec votre signature, faite chez un photographe ou dans une cabine agréés par l'ANTS. Elle doit dater de moins de 6 mois.",
        "l'ASSR 2 ou l'ASR, si vous avez moins de 21 ans. C'est l'attestation de sécurité routière passée au collège ou à l'âge adulte. Si vous l'avez perdue, une déclaration sur l'honneur est possible.",
        "pour les Français de 17 à 25 ans, la preuve que la JDC (journée défense et citoyenneté) est faite.",
      ],
    },
    {
      type: "p",
      texte: "Si vous êtes étranger, ajoutez la preuve de votre séjour régulier, par exemple votre titre de séjour (la carte qui vous autorise à vivre en France). Notre guide de la [carte de séjour](/articles/carte-de-sejour-france-2026-guide-complet-types-demarches-renouvellement) explique les différents titres.",
    },
    {
      type: "h2",
      texte: "Étape 1 : obtenir votre numéro NEPH",
      id: "demande-neph-ants",
    },
    {
      type: "p",
      texte: "Le NEPH est votre numéro de candidat au permis. Sans lui, impossible de passer le code ou la conduite. Votre auto-école peut le demander pour vous. En candidat libre, vous le demandez vous-même en ligne, gratuitement ([R49186](https://www.service-public.gouv.fr/particuliers/vosdroits/R49186)) :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "connectez-vous à votre espace ANTS avec FranceConnect, France Identité ou un compte ANTS.",
        "créez une nouvelle demande et choisissez l'inscription aux examens du permis.",
        "remplissez le formulaire et ajoutez vos papiers, photographiés ou scannés.",
        "validez, puis suivez la demande dans votre espace.",
      ],
    },
    {
      type: "p",
      texte: "Quand la demande est acceptée, vous recevez une attestation d'inscription, l'AIPC. Elle porte votre NEPH. Gardez-la bien. Après 5 ans sans passer le code, le numéro doit être réactivé ([F2828](https://www.service-public.gouv.fr/particuliers/vosdroits/F2828)).",
    },
    {
      type: "h2",
      texte: "Étape 2 : passer l'examen du code",
      id: "inscription-code-route",
    },
    {
      type: "p",
      texte: "Le code se passe dans un centre agréé par l'État. Vous vous inscrivez sur le site du centre, avec votre NEPH, ou votre auto-école le fait pour vous. Le passage coûte ==30 €==, payés avant l'inscription. Après un échec, il faut payer de nouveau ([service-public, F33694](https://www.service-public.gouv.fr/particuliers/vosdroits/F33694)).",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "l'examen compte 40 questions à choix multiples.",
        "il faut au moins 35 bonnes réponses pour réussir.",
        "le résultat arrive par mail ou par courrier.",
        "une fois réussi, le code reste valable 5 ans.",
      ],
    },
    {
      type: "p",
      texte: "Un examen en 40 questions avec un seuil, c'est aussi le format de l'examen civique, demandé pour certains titres de séjour. Vérifiez en une minute s'il vous concerne avec notre [simulateur d'éligibilité](/eligibilite-examen-civique).",
    },
    {
      type: "h2",
      texte: "Étape 3 : apprendre à conduire et passer l'examen",
      id: "inscription-conduite",
    },
    {
      type: "p",
      texte: "En auto-école, les règles fixent un minimum de leçons ([F2828](https://www.service-public.gouv.fr/particuliers/vosdroits/F2828)) :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "permis B classique : ==20 heures== au moins, dont 15 heures sur la route.",
        "permis B en boîte automatique : 13 heures au moins, dont 10 heures sur la route.",
        "passage de la boîte automatique à la boîte manuelle : une formation de 7 heures.",
      ],
    },
    {
      type: "p",
      texte: "En candidat libre, aucun nombre d'heures n'est imposé ([F2825](https://www.service-public.gouv.fr/particuliers/vosdroits/F2825)). Mais vous devez avoir un livret d'apprentissage. Un proche vous accompagne : il a le permis B depuis 5 ans au moins et n'est pas payé. La voiture doit avoir une double commande, le jour de l'examen aussi. Vous réservez votre place d'examen sur le site RdvPermis, avec votre NEPH.",
    },
    {
      type: "p",
      texte: "L'examen de conduite dure 32 minutes, dont 25 minutes de conduite au moins. Il comprend deux manœuvres, une vérification sur la voiture et des questions de sécurité. Vous réussissez avec ==20 points== ou plus, sans erreur grave comme griller un stop. Le résultat se lit en ligne dès le lendemain.",
    },
    {
      type: "h2",
      texte: "Étape 4 : demander la fabrication et suivre votre permis",
      id: "recuperer-permis-fabrication",
    },
    {
      type: "p",
      texte: "Après la réussite, vous recevez le CEPC, le certificat d'examen. Il vaut permis pendant ==4 mois==, en France seulement, avec une pièce d'identité ([F2828](https://www.service-public.gouv.fr/particuliers/vosdroits/F2828)). Pendant ce temps, demandez votre permis sur le site de l'ANTS. La démarche est gratuite ([R45443](https://www.service-public.gouv.fr/particuliers/vosdroits/R45443)) :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "connectez-vous à votre espace ANTS.",
        "créez une nouvelle demande et choisissez la fabrication du permis après un examen.",
        "ajoutez votre pièce d'identité, votre justificatif de domicile et le code de votre photo-signature.",
        "donnez un mail ou un numéro de mobile pour recevoir les nouvelles.",
        "validez et suivez l'avancée dans votre espace.",
      ],
    },
    {
      type: "p",
      texte: "Le permis arrive par Lettre suivie, environ 15 jours après la validation de la demande ([F2828](https://www.service-public.gouv.fr/particuliers/vosdroits/F2828)). Le suivi se fait dans votre espace ANTS, sans frais ([R36427](https://www.service-public.gouv.fr/particuliers/vosdroits/R36427)).",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Ne laissez pas passer les 4 mois du CEPC sans avoir fait la demande.",
        "Vérifiez que la photo-signature date de moins de 6 mois.",
        "Pour un permis perdu, volé ou abîmé plus tard, la démarche est différente : lisez notre guide [perte, vol, renouvellement et suivi du permis](/articles/ants-permis-conduire-2026-echange-demande-suivi).",
      ],
    },
    {
      type: "h2",
      texte: "Quelles aides pour payer la formation ?",
      id: "aides-permis",
    },
    {
      type: "p",
      texte: "Service-public liste plusieurs aides ([F13609](https://www.service-public.gouv.fr/particuliers/vosdroits/F13609)). Chacune a ses conditions :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "le **permis à 1 euro par jour** : un prêt sans intérêt de 600 € à 1 200 €, pour les 15 à 25 ans, dans une école de conduite labellisée.",
        "le **CPF** (compte personnel de formation), si le permis sert un projet de travail.",
        "la **bourse au permis** de certaines communes, en échange d'une activité utile à tous.",
        "les aides des régions, des départements, et de la mission locale pour les 18 à 25 ans.",
      ],
    },
    {
      type: "p",
      texte: "Vous avez un permis obtenu hors d'Europe ? Vous n'avez peut-être pas à repasser l'examen. Notre article sur [l'échange d'un permis étranger](/articles/echange-permis-conduire-etranger-france-2026-pays-accords-liste-complete) donne les pays et les conditions. Pour les autres démarches du site, voyez notre [guide de l'ANTS](/articles/ants-demarches-en-ligne-2026-guide-complet).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La fabrication du premier permis est gratuite. Le NEPH et le suivi aussi.\nLe seul frais officiel est le code : 30 € par passage. Les leçons ont des prix libres. Demandez votre permis sur l'ANTS avant la fin des 4 mois du CEPC.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien coûte la fabrication du permis de conduire ?",
      reponse: "Rien, pour un premier permis obtenu après un examen. Service-public indique que la demande en ligne sur le site de l'ANTS est gratuite. Vous payez seulement la photo-signature numérique. Un nouveau permis après une perte ou un vol coûte en revanche 25 €, en timbre fiscal (une taxe payée en ligne ou chez un buraliste).",
    },
    {
      question: "Comment obtenir son numéro NEPH ?",
      reponse: "Votre auto-école peut le demander pour vous. En candidat libre, connectez-vous à votre espace ANTS et choisissez l'inscription aux examens du permis. Ajoutez une pièce d'identité, un justificatif de domicile et votre photo-signature. La démarche est gratuite. Vous recevez une attestation, l'AIPC, qui porte votre NEPH.",
    },
    {
      question: "Combien coûte l'examen du code de la route ?",
      reponse: "Le passage de l'examen du code coûte 30 €, selon service-public. Vous payez avant de vous inscrire, sur le site du centre agréé ou par votre auto-école. Après un échec, vous payez de nouveau 30 €. L'examen compte 40 questions et il faut 35 bonnes réponses. Le code reste ensuite valable 5 ans.",
    },
    {
      question: "Peut-on conduire en attendant de recevoir son permis ?",
      reponse: "Oui. Après la réussite, le certificat d'examen (CEPC) vaut permis pendant 4 mois, en France seulement, avec une pièce d'identité. Faites votre demande de fabrication sur le site de l'ANTS pendant ce temps. Le permis arrive ensuite par Lettre suivie, environ 15 jours après la validation de la demande.",
    },
  ],
  sources: [
    {
      titre: "Service-public : permis B, voiture ou camionnette (F2828)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2828",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : permis de conduire, comment passer le code (F33694)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33694",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : permis B en candidat libre (F2825)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2825",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : s'inscrire en ligne à l'examen, attribution du numéro NEPH (R49186)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R49186",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : demander en ligne un permis de conduire après la réussite à un examen (R45443)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R45443",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : suivre l'avancement d'une demande de permis de conduire (R36427)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R36427",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : timbre fiscal pour un permis de conduire (perte, vol, échange) (F34118)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34118",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : quelles aides pour financer le permis de conduire ? (F13609)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F13609",
      type: "officiel",
      luLe: "2026-10-20",
    },
  ],
};

export default article;
