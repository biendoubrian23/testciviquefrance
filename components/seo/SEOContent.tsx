const faqs = [
  {
    question: "Qu'est-ce que le test civique ?",
    answer:
      "Le test civique est un examen officiel obligatoire de 40 questions QCM pour obtenir la naturalisation française, une carte de séjour pluriannuelle ou une carte de résident. Il évalue vos connaissances sur les valeurs, institutions et vie en société en France, conformément au décret n° 2025-647.",
  },
  {
    question: "Quelle est la structure du test civique ?",
    answer:
      "L'examen comprend 40 questions à choix multiples réparties sur 5 thématiques : principes et valeurs de la République (11 questions), système institutionnel (6 questions), droits et devoirs (11 questions), histoire et géographie (8 questions), et vivre dans la société française (4 questions). Une seule bonne réponse par question.",
  },
  {
    question: "Quel est le seuil de réussite au test civique ?",
    answer:
      "Le seuil de réussite est de 80 %, soit 32 bonnes réponses sur 40. En dessous de ce score, l'examen est considéré comme non réussi. Il est possible de se représenter sans limite de tentatives.",
  },
  {
    question: "Suis-je éligible au test civique ?",
    answer:
      "Vous êtes concerné si vous demandez la naturalisation française, une carte de séjour pluriannuelle (4 ans), une carte de résident (10 ans), ou dans le cadre d'un regroupement familial ou d'un changement de statut. Certaines personnes peuvent être dispensées pour raisons médicales ou d'âge — renseignez-vous auprès de votre préfecture.",
  },
  {
    question: "Combien coûte le test civique ?",
    answer:
      "Le tarif est fixé par chaque organisme agréé par l'État et peut varier selon le centre. Contactez directement le centre le plus proche ou votre préfecture pour connaître le montant exact.",
  },
  {
    question: "Où passer le test civique ?",
    answer:
      "Le test se déroule dans des organismes agréés par l'État, présents dans toutes les grandes villes françaises : Paris, Lyon, Marseille, Toulouse, Bordeaux, Nantes, Lille, Strasbourg, Nice, Montpellier, Rennes, Grenoble et bien d'autres. Consultez votre préfecture pour la liste complète des centres agréés.",
  },
  {
    question: "Combien de temps dure le test civique ?",
    answer:
      "La durée de l'épreuve est d'environ 45 minutes à 1 heure. L'examen se déroule en langue française dans un centre agréé.",
  },
  {
    question: "Comment obtenir l'attestation de réussite ?",
    answer:
      "L'attestation est délivrée directement par l'organisme agréé à l'issue de l'examen réussi. Ce document officiel doit être joint à votre dossier de demande de titre de séjour ou de naturalisation.",
  },
  {
    question: "Peut-on repasser le test civique en cas d'échec ?",
    answer:
      "Oui, il n'existe pas de limite au nombre de tentatives. En cas d'échec, prenez le temps de vous préparer davantage avec nos entraînements et examens blancs avant de vous représenter.",
  },
];

export default function SEOContent() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
          Questions fréquentes sur le test civique 2026
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Tout ce que vous devez savoir avant de vous inscrire à l'examen civique
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
