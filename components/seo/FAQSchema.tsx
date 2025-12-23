/**
 * Composant Schema FAQ pour le SEO
 * Génère le JSON-LD FAQPage pour les pages de cours et articles
 */

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

/**
 * Composant invisible qui ajoute le schema FAQPage pour le SEO
 * À utiliser sur les pages contenant des FAQ
 */
export default function FAQSchema({ faqs }: FAQSchemaProps) {
  if (!faqs || faqs.length === 0) return null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

/**
 * Composant FAQ visuel avec accordéon et schema intégré
 */
interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
}

export function FAQSection({ faqs, title = 'Questions fréquentes' }: FAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <>
      <FAQSchema faqs={faqs} />
      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden group"
            >
              <summary className="p-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-between">
                <span className="flex items-center gap-3">
                  <span className="w-7 h-7 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </span>
                  {faq.question}
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 pt-0 text-gray-700 border-t border-gray-100 bg-gray-50">
                <div className="pt-3 pl-10">
                  {faq.answer}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

// FAQ prédéfinies pour les cours
export const COURS_FAQ = {
  general: [
    {
      question: "Le test civique est-il obligatoire pour tous ?",
      answer: "Le test civique est obligatoire depuis janvier 2026 pour toute demande de naturalisation et pour l'obtention de certains titres de séjour pluriannuels (CSP, carte de résident).",
    },
    {
      question: "Combien de questions y a-t-il au test civique ?",
      answer: "Le test civique comprend 40 questions QCM à répondre en 45 minutes maximum. Il faut obtenir au moins 32 bonnes réponses (80%) pour réussir.",
    },
    {
      question: "Peut-on repasser le test en cas d'échec ?",
      answer: "Oui, vous pouvez repasser le test civique après un délai. Cependant, toute fraude vous interdit de repasser le test pendant 2 ans.",
    },
    {
      question: "Les cours sur Test Civique France sont-ils gratuits ?",
      answer: "Oui, tous nos cours et fiches de révision sont entièrement gratuits. Seuls les examens blancs en conditions réelles nécessitent des crédits.",
    },
  ],
  valeurs: [
    {
      question: "Qu'est-ce que la devise de la République française ?",
      answer: "La devise de la République française est 'Liberté, Égalité, Fraternité'. Elle est inscrite à l'article 2 de la Constitution de 1958.",
    },
    {
      question: "Que signifie la laïcité en France ?",
      answer: "La laïcité garantit la liberté de conscience et la séparation des religions et de l'État. L'État ne reconnaît ni ne finance aucun culte, mais chacun est libre de pratiquer sa religion.",
    },
  ],
  institutions: [
    {
      question: "Qui est le chef de l'État en France ?",
      answer: "Le Président de la République est le chef de l'État. Il est élu au suffrage universel direct pour un mandat de 5 ans (quinquennat).",
    },
    {
      question: "Qui vote les lois en France ?",
      answer: "Le Parlement (Assemblée nationale et Sénat) vote les lois. En cas de désaccord, l'Assemblée nationale a le dernier mot.",
    },
  ],
  histoire: [
    {
      question: "Quand a eu lieu la Révolution française ?",
      answer: "La Révolution française a débuté en 1789 avec la prise de la Bastille le 14 juillet. Cette date est devenue la fête nationale française.",
    },
    {
      question: "Quand la Ve République a-t-elle été fondée ?",
      answer: "La Ve République a été fondée en 1958 avec l'adoption de la nouvelle Constitution par référendum le 4 octobre. Charles de Gaulle en fut le premier Président.",
    },
  ],
};
