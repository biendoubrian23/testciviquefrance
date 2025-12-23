'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { List, ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  /** Sélecteur CSS pour cibler le conteneur de l'article */
  contentSelector?: string;
  /** Niveaux de titres à inclure (h2, h3, h4...) */
  levels?: number[];
  /** Titre du composant */
  title?: string;
  /** Afficher les numéros */
  showNumbers?: boolean;
  /** Style compact ou étendu */
  compact?: boolean;
}

/**
 * Composant Table des Matières automatique
 * Extrait les titres de l'article et génère une navigation cliquable
 */
export default function TableOfContents({
  contentSelector = 'article',
  levels = [2, 3],
  title = 'Sommaire',
  showNumbers = true,
  compact = false,
}: TableOfContentsProps) {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(!compact);

  useEffect(() => {
    // Extraire les titres de l'article
    const article = document.querySelector(contentSelector);
    if (!article) return;

    const headingSelector = levels.map((l) => `h${l}`).join(', ');
    const headings = article.querySelectorAll(headingSelector);

    const items: TOCItem[] = [];
    headings.forEach((heading, index) => {
      const element = heading as HTMLElement;
      
      // Générer un ID si nécessaire
      if (!element.id) {
        element.id = `heading-${index}`;
      }

      items.push({
        id: element.id,
        text: element.textContent || '',
        level: parseInt(element.tagName.charAt(1)),
      });
    });

    setToc(items);
  }, [contentSelector, levels]);

  // Observer pour mettre en surbrillance le titre actif
  useEffect(() => {
    if (toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px',
      }
    );

    toc.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [toc]);

  if (toc.length < 3) return null; // Pas de TOC si moins de 3 titres

  const minLevel = Math.min(...toc.map((item) => item.level));

  return (
    <nav
      className={`bg-gray-50 border border-gray-200 rounded-lg ${
        compact ? 'p-3' : 'p-5'
      } mb-8`}
      aria-label="Table des matières"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
        aria-expanded={isOpen}
      >
        <h2 className={`font-semibold text-gray-900 flex items-center gap-2 ${compact ? 'text-sm' : 'text-base'}`}>
          <List className={compact ? 'w-4 h-4' : 'w-5 h-5'} />
          {title}
          <span className="text-gray-500 font-normal">({toc.length})</span>
        </h2>
        <ChevronRight
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-90' : ''}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] mt-4' : 'max-h-0'
        }`}
      >
        <ol className={`space-y-1 ${compact ? 'text-sm' : 'text-base'}`}>
          {toc.map((item, index) => {
            const indent = (item.level - minLevel) * 16;
            const isActive = activeId === item.id;

            return (
              <li key={item.id} style={{ paddingLeft: `${indent}px` }}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      // Mettre à jour l'URL sans recharger
                      window.history.pushState(null, '', `#${item.id}`);
                    }
                  }}
                  className={`block py-1.5 px-3 rounded transition-colors ${
                    isActive
                      ? 'bg-primary-100 text-primary-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {showNumbers && (
                    <span className="text-gray-400 mr-2">{index + 1}.</span>
                  )}
                  {item.text}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
