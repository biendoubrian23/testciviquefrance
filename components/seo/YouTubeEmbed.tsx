'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

/**
 * Composant d'intégration YouTube optimisé pour le SEO et les performances
 * - Lazy loading avec façade (thumbnail) pour améliorer le LCP
 * - Schema VideoObject pour le SEO
 * - Chargement de l'iframe uniquement au clic
 */
export default function YouTubeEmbed({ videoId, title, className = '' }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

  // Schema VideoObject pour le SEO
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    description: title,
    thumbnailUrl: thumbnailUrl,
    uploadDate: new Date().toISOString(),
    embedUrl: embedUrl,
    contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
  };

  return (
    <div className={`relative ${className}`}>
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      
      <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden group">
        {!isLoaded ? (
          // Façade avec thumbnail - meilleur pour les performances
          <button
            onClick={() => setIsLoaded(true)}
            className="w-full h-full relative cursor-pointer"
            aria-label={`Lire la vidéo : ${title}`}
          >
            {/* Thumbnail */}
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Overlay sombre au hover */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
            
            {/* Bouton Play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:bg-red-700 group-hover:scale-110 transition-all">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
              </div>
            </div>
            
            {/* Badge YouTube */}
            <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
              ▶ YouTube
            </div>
          </button>
        ) : (
          // Iframe YouTube chargée après le clic
          <iframe
            src={embedUrl}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      
      {/* Titre de la vidéo */}
      <p className="mt-3 text-sm text-gray-600 font-medium">{title}</p>
    </div>
  );
}

/**
 * Composant pour afficher plusieurs vidéos en grille
 */
interface YouTubeGridProps {
  videos: Array<{ videoId: string; title: string }>;
  title?: string;
}

export function YouTubeGrid({ videos, title = 'Vidéos recommandées' }: YouTubeGridProps) {
  return (
    <section className="my-10">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <span className="text-red-600">▶</span> {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <YouTubeEmbed
            key={index}
            videoId={video.videoId}
            title={video.title}
          />
        ))}
      </div>
    </section>
  );
}
