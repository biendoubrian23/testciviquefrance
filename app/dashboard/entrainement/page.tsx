'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  ArrowRight,
  Scale,
  Flag,
  BookMarked,
  Building2,
  Users,
  Home,
  Lock
} from 'lucide-react';

const categories = [
  { 
    id: 1, 
    name: 'Valeurs de la République', 
    description: 'Liberté, Égalité, Fraternité et les principes fondamentaux',
    icon: Scale,
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    questions: 45,
    progress: 60,
  },
  { 
    id: 2, 
    name: 'Symboles de la France', 
    description: 'Drapeau, hymne national, devise et emblèmes',
    icon: Flag,
    color: 'bg-red-500',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
    questions: 30,
    progress: 80,
  },
  { 
    id: 3, 
    name: 'Histoire de France', 
    description: 'Les grandes dates et événements historiques',
    icon: BookMarked,
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    questions: 55,
    progress: 45,
  },
  { 
    id: 4, 
    name: 'Institutions françaises', 
    description: 'Organisation politique et administrative',
    icon: Building2,
    color: 'bg-cyan-500',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
    questions: 40,
    progress: 30,
  },
  { 
    id: 5, 
    name: 'Droits et devoirs', 
    description: 'Droits fondamentaux et obligations citoyennes',
    icon: Users,
    color: 'bg-emerald-500',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    questions: 35,
    progress: 55,
  },
  { 
    id: 6, 
    name: 'Vie quotidienne', 
    description: 'Culture, traditions et vie en société',
    icon: Home,
    color: 'bg-amber-500',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    questions: 25,
    progress: 70,
  },
];

export default function EntrainementPage() {
  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">S'entraîner</h1>
        <p className="text-gray-600">
          Choisissez un thème pour commencer votre entraînement
        </p>
      </div>

      {/* Grille des catégories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          
          return (
            <Link
              key={category.id}
              href={`/dashboard/entrainement/${category.id}`}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <div className={`w-14 h-14 ${category.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className={`w-7 h-7 ${category.textColor}`} />
              </div>
              
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-gray-500">{category.questions} questions</span>
                <span className={category.textColor}>{category.progress}% complété</span>
              </div>
              
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${category.color} rounded-full transition-all duration-500`}
                  style={{ width: `${category.progress}%` }}
                />
              </div>
              
              <div className="mt-4 flex items-center text-primary-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Commencer <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Info sur les crédits */}
      <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Comment fonctionne l'entraînement ?</h3>
            <p className="text-gray-600 text-sm">
              Chaque question répondue coûte 1 crédit. Vous recevez l'explication détaillée après chaque réponse.
              Les membres Premium ont un accès illimité à toutes les questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
