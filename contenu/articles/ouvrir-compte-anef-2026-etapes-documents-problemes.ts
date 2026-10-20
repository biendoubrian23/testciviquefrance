import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-anef-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/ouvrir-compte-anef-2026-etapes-documents-problemes`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "ouvrir-compte-anef-2026-etapes-documents-problemes",
  titre: "Ouvrir un compte ANEF 2026 : documents, formats, déblocage",
  titreSeo: "Ouvrir un compte ANEF 2026 : documents, formats, déblocage",
  resume: "Ouvrir un compte ANEF en 2026 : qui doit le faire, quels documents scanner et à quel format, plus les solutions aux 8 blocages les plus fréquents (visa non reconnu, photo refusée, erreur 500) et la procédure pour débloquer une création.",
  chapo: "Ouvrir un compte ANEF semble simple sur le papier, mais en pratique **1 utilisateur sur 4 rencontre un blocage** dès la première inscription : numéro de visa non reconnu, FranceConnect qui boucle, code SMS qui n'arrive pas, document refusé. Bing Copilot reçoit chaque mois plus de 400 questions sur \"ouvrir un compte ANEF\".",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 13,
  theme: "ouvrir compte anef",
  motsCles: [
    "ouvrir compte anef",
    "creation compte anef",
    "anef inscription documents",
    "anef problème création",
    "demarches anef en ligne",
    "anef etranger compte",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1554224155-3a589877462d?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1554224155-3a589877462d",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce guide va plus loin qu'un simple tutoriel : on détaille **chaque problème connu** lors de l'ouverture d'un compte ANEF en 2026, les **documents acceptés / refusés** et la **procédure officielle** pour débloquer une création.",
    },
    {
      type: "h2",
      texte: "Qui doit obligatoirement ouvrir un compte ANEF en 2026 ?",
      id: "qui-doit-ouvrir-compte",
    },
    { type: "p", texte: "**Toutes ces personnes doivent obligatoirement passer par ANEF :**" },
    { type: "p", texte: "✅ **Étudiants étrangers** arrivant avec un VLS-TS (validation 3 mois)" },
    { type: "p", texte: "✅ **Salariés étrangers** (premier titre, renouvellement, changement)" },
    { type: "p", texte: "✅ **Conjoints de Français** (titre vie privée et familiale)" },
    { type: "p", texte: "✅ **Demandeurs de Passeport Talent**" },
    { type: "p", texte: "✅ **Demandeurs de naturalisation par décret ou par mariage**" },
    { type: "p", texte: "✅ **Réfugiés et bénéficiaires de la protection subsidiaire**" },
    { type: "p", texte: "✅ **Toute personne demandant un changement de statut**" },
    { type: "p", texte: "**Cas où ANEF n'est PAS obligatoire :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Demande d'asile à l'OFPRA (procédure différente)",
        "Citoyens UE/EEE/Suisse (séjour libre)",
        "Visa court séjour Schengen (90 jours)",
      ],
    },
    {
      type: "h2",
      texte: "Les documents acceptés et refusés par ANEF (liste officielle 2026)",
      id: "documents-acceptes-refuses",
    },
    { type: "p", texte: "**Format technique exigé pour TOUS les documents :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**PDF, JPG ou PNG** uniquement",
        "**Taille max : 5 Mo** par fichier",
        "**Résolution minimum : 300 DPI**",
        "**Couleur** (noir & blanc accepté pour certains documents)",
        "**Non protégé par mot de passe**",
      ],
    },
    { type: "p", texte: "**Documents d'identité acceptés :**" },
    { type: "p", texte: "✅ Passeport en cours de validité (toutes pages utiles)" },
    { type: "p", texte: "✅ Carte nationale d'identité du pays d'origine" },
    { type: "p", texte: "✅ Titre de séjour expiré depuis moins de 3 mois (pour renouvellement)" },
    { type: "p", texte: "**Documents d'identité REFUSÉS :**" },
    { type: "p", texte: "❌ Photocopie de photocopie" },
    { type: "p", texte: "❌ Pièce expirée depuis plus de 3 mois" },
    { type: "p", texte: "❌ Document partiellement coupé ou rogné" },
    { type: "p", texte: "❌ Photo prise au smartphone avec reflet" },
    { type: "p", texte: "**Photo d'identité ANEF :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Format **35 x 45 mm**",
        "Fond **uni clair** (blanc ou gris clair)",
        "**Sans lunettes**, **sans sourire**, **sans couvre-chef** (sauf religieux)",
        "Prise il y a moins de **6 mois**",
        "Astuce : utilisez **Photomaton + service ANEF** (5 €) qui produit le bon format",
      ],
    },
    {
      type: "h2",
      texte: "Les 8 problèmes les plus fréquents à l'ouverture d'un compte",
      id: "problemes-creation-solutions",
    },
    { type: "p", texte: "**1. \"Numéro de visa non reconnu\"**" },
    {
      type: "p",
      texte: "→ Vérifiez le format : **majuscules + chiffres** sans espace. Si toujours refusé, attendez 48h après l'arrivée en France.",
    },
    { type: "p", texte: "**2. \"Cette adresse mail est déjà utilisée\"**" },
    {
      type: "p",
      texte: "→ Vous avez déjà un compte. Cliquez sur \"Mot de passe oublié\" au lieu de recréer.",
    },
    { type: "p", texte: "**3. FranceConnect refuse de lier le compte**" },
    {
      type: "p",
      texte: "→ Utilisez la **création classique** par mail. Vous pourrez activer FranceConnect plus tard.",
    },
    { type: "p", texte: "**4. SMS bloqué (numéro étranger)**" },
    { type: "p", texte: "→ Achetez une SIM française. Free Mobile à **2 €/mois** est suffisant." },
    { type: "p", texte: "**5. \"Photo non conforme\" 3 fois de suite**" },
    {
      type: "p",
      texte: "→ Allez en Photomaton avec l'option \"service en ligne\" (5 €). Téléchargement direct ANEF, refus impossible.",
    },
    { type: "p", texte: "**6. Justificatif de domicile refusé**" },
    {
      type: "p",
      texte: "→ Doit être **<3 mois**, à votre nom. **Acceptés** : facture EDF, eau, gaz, internet, quittance de loyer, attestation d'hébergement + pièce d'identité de l'hébergeant. **Refusés** : factures de téléphone mobile, contrats de location anciens.",
    },
    { type: "p", texte: "**7. \"Erreur 500\" en boucle**" },
    {
      type: "p",
      texte: "→ Bug serveur. Réessayez **entre 6h et 8h du matin** ou le **dimanche matin**.",
    },
    { type: "p", texte: "**8. Compte créé mais aucune démarche disponible**" },
    {
      type: "p",
      texte: "→ Attendez **24 à 48h**. Le système met du temps à activer toutes les options.",
    },
    { type: "h2", texte: "Que faire si vous êtes complètement bloqué", id: "que-faire-si-blocage" },
    { type: "p", texte: "**Si après 48h de tentatives le compte n'est toujours pas créé :**" },
    { type: "p", texte: "**Étape 1 : Appeler le support ANEF**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**0806 001 620** (gratuit, lun-ven 9h-16h)",
        "Préparez : nom complet, date de naissance, numéro de visa/AGDREF",
      ],
    },
    { type: "p", texte: "**Étape 2 : Formulaire de contact officiel**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "contact-usagers.anef.interieur.gouv.fr",
        "Joignez **captures d'écran** du message d'erreur",
      ],
    },
    { type: "p", texte: "**Étape 3 : Préfecture (en dernier recours)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Certaines préfectures (Paris, Bobigny, Créteil) ont un guichet d'aide ANEF",
        "Prenez RDV via le site de votre préfecture",
      ],
    },
    { type: "p", texte: "**Étape 4 : Défenseur des droits**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si aucune réponse après 30 jours et démarche urgente",
        "**defenseurdesdroits.fr** : saisine gratuite",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Ouvrir un compte ANEF en 2026 est obligatoire pour quasiment tous les étrangers en France, mais les blocages sont fréquents. Préparez vos documents au bon format dès le départ (PDF <5 Mo, photo aux normes, justificatif <3 mois), utilisez une adresse mail durable et un numéro français, et n'hésitez pas à appeler le 0806 001 620 dès qu'un blocage dure plus de 48 heures. Bien démarrer son compte ANEF, c'est s'éviter des semaines de retard sur toutes ses démarches futures.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Peut-on ouvrir un compte ANEF sans visa ?",
      reponse: "Oui, si vous êtes déjà titulaire d'un titre de séjour (avec votre numéro AGDREF) ou si vous demandez un titre depuis la France (changement de statut, regroupement familial sur place).",
    },
    {
      question: "Quels justificatifs de domicile sont acceptés sur ANEF ?",
      reponse: "Factures EDF/eau/gaz/internet de moins de 3 mois, quittance de loyer, ou attestation d'hébergement + pièce d'identité de l'hébergeant + son justificatif de domicile.",
    },
    {
      question: "Combien de temps faut-il pour ouvrir un compte ANEF ?",
      reponse: "Entre 5 minutes (si tout fonctionne) et 48-72 heures (si blocage technique). Avec FranceConnect, c'est plus rapide.",
    },
    {
      question: "Le compte ANEF est-il identique pour toutes les démarches ?",
      reponse: "Oui, un seul compte vous suffit pour TOUTES vos démarches futures : titre de séjour, renouvellement, changement de statut, naturalisation, regroupement familial.",
    },
  ],
};

export default article;
