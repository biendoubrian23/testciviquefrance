import Link from 'next/link';
import { ExternalLink, BookOpen, Scale, FileText } from 'lucide-react';

interface Source {
  title: string;
  url: string;
  type: 'official' | 'legal' | 'article' | 'video';
  description?: string;
}

interface SourcesExternesProps {
  sources: Source[];
  title?: string;
}

/**
 * Composant pour afficher les sources externes
 * Améliore le SEO avec des liens sortants de qualité
 */
export default function SourcesExternes({ 
  sources, 
  title = 'Sources officielles et références' 
}: SourcesExternesProps) {
  const getIcon = (type: Source['type']) => {
    switch (type) {
      case 'official':
        return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 'legal':
        return <Scale className="w-5 h-5 text-amber-600" />;
      case 'article':
        return <FileText className="w-5 h-5 text-green-600" />;
      case 'video':
        return <span className="text-red-600 text-lg">▶</span>;
      default:
        return <ExternalLink className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTypeLabel = (type: Source['type']) => {
    switch (type) {
      case 'official':
        return 'Source officielle';
      case 'legal':
        return 'Texte juridique';
      case 'article':
        return 'Article';
      case 'video':
        return 'Vidéo';
      default:
        return 'Lien externe';
    }
  };

  const getTypeBadgeColor = (type: Source['type']) => {
    switch (type) {
      case 'official':
        return 'bg-blue-100 text-blue-700';
      case 'legal':
        return 'bg-amber-100 text-amber-700';
      case 'article':
        return 'bg-green-100 text-green-700';
      case 'video':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="my-10 p-6 bg-gray-50 border border-gray-200 rounded-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <ExternalLink className="w-5 h-5 text-primary-600" />
        {title}
      </h3>
      
      <ul className="space-y-4">
        {sources.map((source, index) => (
          <li key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:border-primary-300 hover:shadow-sm transition-all">
            <div className="flex-shrink-0 mt-1">
              {getIcon(source.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${getTypeBadgeColor(source.type)}`}>
                  {getTypeLabel(source.type)}
                </span>
              </div>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 font-medium hover:underline flex items-center gap-1 group"
              >
                {source.title}
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
              {source.description && (
                <p className="mt-1 text-sm text-gray-600">{source.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
      
      <p className="mt-4 text-xs text-gray-500 italic">
        Ces liens renvoient vers des sources externes. Test Civique France n&apos;est pas responsable de leur contenu.
      </p>
    </section>
  );
}

// Sources prédéfinies pour réutilisation
export const SOURCES_OFFICIELLES = {
  servicePublic: {
    title: 'Service-Public.fr - Test de connaissance civique',
    url: 'https://www.service-public.fr/particuliers/vosdroits/F2213',
    type: 'official' as const,
    description: 'Informations officielles sur le test de connaissance des valeurs de la République'
  },
  legifrance: {
    title: 'Légifrance - Décret n° 2025-647',
    url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052098629',
    type: 'legal' as const,
    description: 'Texte officiel du décret relatif au test de connaissance civique'
  },
  interieur: {
    title: 'Ministère de l\'Intérieur - Naturalisation',
    url: 'https://www.interieur.gouv.fr/Archives/Archives-des-actualites/2024-Archives/Naturalisation-et-acquisition-de-la-nationalite-francaise',
    type: 'official' as const,
    description: 'Page officielle sur les démarches de naturalisation'
  },
  ceseda: {
    title: 'CESEDA - Code de l\'entrée et du séjour des étrangers',
    url: 'https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070158/',
    type: 'legal' as const,
    description: 'Code régissant l\'entrée et le séjour des étrangers en France'
  },
  vieFrancaise: {
    title: 'Vie publique - Valeurs de la République',
    url: 'https://www.vie-publique.fr/fiches/274852-quelles-sont-les-valeurs-de-la-republique',
    type: 'official' as const,
    description: 'Explication des valeurs républicaines françaises'
  },
  elysee: {
    title: 'Élysée - La Constitution française',
    url: 'https://www.elysee.fr/la-presidence/la-constitution',
    type: 'official' as const,
    description: 'Présentation de la Constitution de la Ve République'
  },
  assemblee: {
    title: 'Assemblée nationale - Le fonctionnement',
    url: 'https://www.assemblee-nationale.fr/decouvrir-l-assemblee/role-et-pouvoirs-de-l-assemblee-nationale',
    type: 'official' as const,
    description: 'Rôle et pouvoirs de l\'Assemblée nationale'
  },
  senat: {
    title: 'Sénat - Rôle et fonctionnement',
    url: 'https://www.senat.fr/role/index.html',
    type: 'official' as const,
    description: 'Missions et organisation du Sénat français'
  },
  conseilConstitutionnel: {
    title: 'Conseil constitutionnel - Présentation',
    url: 'https://www.conseil-constitutionnel.fr/le-conseil-constitutionnel',
    type: 'official' as const,
    description: 'Rôle du gardien de la Constitution'
  },
  laicite: {
    title: 'Observatoire de la laïcité',
    url: 'https://www.gouvernement.fr/laicite-et-liberte-de-conscience',
    type: 'official' as const,
    description: 'Ressources sur le principe de laïcité en France'
  },
  franceTravail: {
    title: 'France Travail - Travailler en France',
    url: 'https://www.francetravail.fr/accueil/',
    type: 'official' as const,
    description: 'Portail officiel de l\'emploi en France'
  },
  ameli: {
    title: 'Ameli.fr - Assurance maladie',
    url: 'https://www.ameli.fr/',
    type: 'official' as const,
    description: 'Site officiel de l\'Assurance Maladie'
  }
};
