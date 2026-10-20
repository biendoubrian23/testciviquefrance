import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-2026-additions.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/documents-test-civique-2026-convocation-piece-identite`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "documents-test-civique-2026-convocation-piece-identite",
  titre: "Documents pour le test civique 2026 : convocation, piece d'identite et erreurs a eviter le jour J",
  titreSeo: "Documents pour le test civique 2026 : convocation, piece d'identite et erreurs a eviter le jour J",
  resume: "Checklist complete des documents a apporter pour le test civique 2026 : piece d'identite, convocation, justificatifs. Que faire en cas d'oubli, retard ou absence pour eviter un report de dossier.",
  chapo: "Le jour du **test civique 2026**, de nombreux candidats perdent leur session a cause d'un oubli simple: convocation non imprimee, piece d'identite invalide, arrivee tardive ou justificatif manquant. Ce guide vous donne une **checklist claire** des documents a apporter, les **erreurs les plus frequentes** a eviter et les reflexes a adopter en cas d'imprevu. Objectif: arriver serein, etre admis en salle sans stress, et vous concentrer uniquement sur vos 40 questions QCM.",
  publieLe: "2026-03-18",
  modifieLe: "2026-03-18",
  minutes: 14,
  theme: "documents test civique 2026",
  motsCles: [
    "documents test civique 2026",
    "convocation test civique",
    "piece identite test civique",
    "checklist test civique",
    "retard examen civique",
    "absence test civique",
    "inscription centre agree",
    "jour j examen civique",
    "QCM test civique",
    "preparation test civique rapide",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
  },
  blocs: [
    {
      type: "h2",
      texte: "Les documents obligatoires le jour du test civique",
      id: "documents-obligatoires",
    },
    {
      type: "p",
      texte: "La regle de base est simple: sans justificatifs valides, le centre peut refuser votre passage. Voici les pieces a preparer systematiquement:",
    },
    { type: "p", texte: "**1. Une piece d'identite officielle en cours de validite**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Passeport",
        "Titre de sejour",
        "Carte nationale d'identite (si acceptee par le centre selon votre situation)",
      ],
    },
    { type: "p", texte: "**2. Votre convocation de test civique**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Version papier recommandee",
        "Version numerique en secours sur votre telephone",
        "Verifiez la date, l'heure, l'adresse exacte et le numero de salle",
      ],
    },
    { type: "p", texte: "**3. La preuve de votre inscription/paiement (si demandee)**" },
    {
      type: "liste",
      style: "puces",
      items: ["Email de confirmation", "Recu de paiement", "Numero de dossier"],
    },
    { type: "p", texte: "**4. Eventuels justificatifs d'amenagement**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Certificat medical",
        "Notification d'amenagement (temps supplementaire, acces PMR, etc.)",
      ],
    },
    { type: "h2", texte: "Checklist 48h avant l'examen: zero oubli", id: "checklist-48h" },
    {
      type: "p",
      texte: "Pour limiter les imprévus, preparez un dossier la veille et faites une verification finale 48h avant:",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Controlez la validite de votre piece d'identite",
        "Imprimez la convocation (meme si version mobile acceptee)",
        "Prenez une capture d'ecran des infos importantes (adresse, horaire, contact)",
        "Reperez votre trajet et prevoyez une marge de 30 a 45 minutes",
        "Verifiez les consignes du centre (objets autorises/interdits)",
        "Gardez une copie de vos emails dans votre boite hors-ligne",
      ],
    },
    {
      type: "p",
      texte: "→ Astuce: placez tous les documents dans une pochette unique des la veille pour eviter les oublis de derniere minute.",
    },
    { type: "h2", texte: "Retard, absence, oubli de document: que faire ?", id: "retard-absence-oubli" },
    {
      type: "p",
      texte: "Les centres appliquent des regles strictes, mais il existe des marges de manoeuvre selon les situations:",
    },
    { type: "p", texte: "**En cas de retard**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Contactez immediatement le centre d'examen",
        "Expliquez la situation de facon concise",
        "Demandez si une admission tardive est encore possible",
      ],
    },
    { type: "p", texte: "**En cas d'oubli de convocation**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Montrez l'email de convocation sur telephone",
        "Presentez votre piece d'identite et votre numero de dossier",
        "Certains centres acceptent, d'autres exigent la version papier",
      ],
    },
    { type: "p", texte: "**En cas de piece d'identite expiree**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le refus d'acces est frequent",
        "Reprogrammez rapidement une nouvelle session",
        "Gardez toute preuve de votre presence pour appuyer votre demande de report",
      ],
    },
    { type: "p", texte: "**En cas d'absence**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Informez le centre au plus vite",
        "Fournissez un justificatif (medical, transport, force majeure) si disponible",
        "Renseignez-vous sur les conditions de re-inscription et frais eventuels",
      ],
    },
    { type: "h2", texte: "Le jour J: deroulement type et bonnes pratiques", id: "jour-j-deroulement" },
    {
      type: "p",
      texte: "Le jour du test, votre objectif est d'eviter toute fatigue decisionnelle inutile:",
    },
    { type: "p", texte: "**Avant l'entree en salle**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Arrivez 30 minutes en avance",
        "Verifiez l'affichage de votre session",
        "Gardez piece d'identite + convocation accessibles",
      ],
    },
    { type: "p", texte: "**Pendant l'installation**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Ecoutez les consignes de surveillance",
        "Signalez immediatement un probleme materiel",
        "Respirez et cadrez votre temps: 45 minutes pour 40 questions",
      ],
    },
    { type: "p", texte: "**Pendant le QCM**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Lisez chaque question deux fois",
        "Eliminez les propositions manifestement fausses",
        "Evitez de bloquer plus de 60 secondes sur une question",
        "Revenez sur les questions difficiles en fin d'epreuve",
      ],
    },
    {
      type: "h2",
      texte: "Pourquoi ces documents sont essentiels pour votre dossier",
      id: "documents-application-dossier",
    },
    {
      type: "p",
      texte: "La reussite du test civique sert de preuve d'integration dans plusieurs procedures administratives.",
    },
    {
      type: "p",
      texte: "Selon votre projet (carte pluriannuelle, carte de resident, naturalisation), une session annulee pour motif administratif peut ralentir l'ensemble de votre calendrier. En pratique:",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous perdez un creneau parfois difficile a reprogrammer",
        "Vous reportez la constitution de votre dossier complet",
        "Vous risquez un decalage de depot en prefecture",
      ],
    },
    {
      type: "p",
      texte: "Conclusion pratique: une **bonne organisation documentaire** est l'un des leviers les plus simples pour securiser votre parcours.",
    },
    {
      type: "h2",
      texte: "Mini plan de preparation en 10 jours avant votre session",
      id: "plan-preparation-court",
    },
    { type: "p", texte: "Si votre session approche, suivez ce plan express:" },
    { type: "p", texte: "**J-10 a J-7**" },
    {
      type: "liste",
      style: "puces",
      items: ["Revision des 5 thematiques officielles", "1 QCM chronometre par jour"],
    },
    { type: "p", texte: "**J-6 a J-3**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Focus sur vos erreurs recurrentes",
        "Revision des notions pieges (institutions, dates, droits/devoirs)",
      ],
    },
    { type: "p", texte: "**J-2 a J-1**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Verification des documents et du trajet",
        "1 dernier entrainement en conditions reelles",
      ],
    },
    { type: "p", texte: "**Jour J**" },
    {
      type: "liste",
      style: "puces",
      items: ["Arrivee anticipee", "Lecture attentive des questions", "Gestion du temps reguliere"],
    },
    {
      type: "p",
      texte: "Pour vous entrainer, utilisez les examens blancs disponibles sur [LeTestCivique.fr](/dashboard).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le test civique ne se joue pas seulement sur vos connaissances: la **logistique documentaire** fait souvent la difference entre une session validee et un report frustrant. Avec une checklist solide, une arrivee anticipee et des copies de secours, vous mettez toutes les chances de votre cote pour passer l'examen dans de bonnes conditions et avancer sans retard dans votre parcours administratif.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "La convocation doit-elle etre imprimee pour le test civique ?",
      reponse: "Oui, c'est fortement recommande. Certains centres acceptent la version numerique, mais une version papier evite les refus lies a un probleme de batterie ou de reseau.",
    },
    {
      question: "Puis-je passer le test avec un titre de sejour expire ?",
      reponse: "En general non. Une piece d'identite valide est exigee. Contactez le centre en amont si vous etes dans une situation particuliere.",
    },
    {
      question: "Que faire si j'arrive en retard ?",
      reponse: "Appelez le centre immediatement. Une admission tardive peut parfois etre acceptee, mais ce n'est pas garanti.",
    },
    {
      question: "Quels objets sont interdits pendant le test ?",
      reponse: "Les regles varient selon les centres, mais les appareils non autorises (montres connectees, notes, etc.) sont generalement interdits. Verifiez les consignes de votre convocation.",
    },
    {
      question: "En cas d'absence justifiee, puis-je reprogrammer ma session ?",
      reponse: "Oui, souvent. Fournissez rapidement un justificatif (medical ou force majeure) et demandez les modalites precises de report au centre.",
    },
  ],
  aLireAussi: [
    {
      slug: "erreurs-frequentes-test-civique-2026-pieges-qcm",
      ancre: "Les pièges à éviter le jour du test civique",
    },
    {
      slug: "prix-test-civique-2026-cout-tarif-titre-sejour-prefecture",
      ancre: "Combien coûte le test civique ?",
    },
    {
      slug: "comment-reussir-test-civique-premier-coup",
      ancre: "Guide pour réussir le test du premier coup",
    },
  ],
};

export default article;
