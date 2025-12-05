'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { categories, Category } from '@/lib/data/articles';

interface BlogSidebarProps {
  selectedCategory: string;
  onCategoryChange: (slug: string) => void;
}

export default function BlogSidebar({ selectedCategory, onCategoryChange }: BlogSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <aside className="bg-white shadow-sm border border-gray-100 p-6 sticky top-24">
      {/* Recherche */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        />
      </div>

      {/* Catégories */}
      <div className="mb-6">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          <span className="w-5 h-0.5 bg-primary-500" />
          Sujets d&apos;expertise
        </h3>
        <ul className="space-y-1">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => onCategoryChange(category.slug)}
                className={`w-full flex items-center justify-between px-4 py-3 text-left transition-all ${
                  selectedCategory === category.slug
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-sm">{category.name}</span>
                <span className={`px-2 py-0.5 text-xs font-medium ${
                  selectedCategory === category.slug
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Réseaux sociaux */}
      <div>
        <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          <span className="w-5 h-0.5 bg-primary-500" />
          Suivez-nous
        </h3>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
