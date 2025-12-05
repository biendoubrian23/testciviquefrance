'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  User,
  Mail,
  Lock,
  Bell,
  Shield,
  Trash2,
  Save,
  Loader2
} from 'lucide-react';

export default function ParametresPage() {
  const { profile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  
  const [formData, setFormData] = useState({
    prenom: profile?.prenom || '',
    nom: profile?.nom || '',
    email: profile?.email || '',
  });

  const [notifications, setNotifications] = useState({
    email: true,
    rappels: true,
    newsletter: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation de sauvegarde
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSuccess('Vos informations ont été mises à jour');
    setIsLoading(false);
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      {/* En-tête */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Paramètres</h1>
        <p className="text-gray-600">
          Gérez votre compte et vos préférences
        </p>
      </div>

      {success && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg">
          {success}
        </div>
      )}

      {/* Informations personnelles */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
            <User className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Informations personnelles</h2>
            <p className="text-sm text-gray-500">Modifiez vos informations de profil</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prénom
              </label>
              <input
                type="text"
                value={formData.prenom}
                onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom
              </label>
              <input
                type="text"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              disabled
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
            />
            <p className="text-xs text-gray-500 mt-1">L'email ne peut pas être modifié</p>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            Enregistrer
          </button>
        </form>
      </div>

      {/* Mot de passe */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
            <Lock className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Mot de passe</h2>
            <p className="text-sm text-gray-500">Modifiez votre mot de passe</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe actuel
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nouveau mot de passe
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            />
          </div>
          <button className="bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Changer le mot de passe
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Bell className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Notifications</h2>
            <p className="text-sm text-gray-500">Gérez vos préférences de notification</p>
          </div>
        </div>

        <div className="space-y-4">
          <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
            <div>
              <p className="font-medium text-gray-900">Notifications par email</p>
              <p className="text-sm text-gray-500">Recevez des emails sur votre progression</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
              className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
            />
          </label>

          <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
            <div>
              <p className="font-medium text-gray-900">Rappels d'entraînement</p>
              <p className="text-sm text-gray-500">Rappels quotidiens pour maintenir votre série</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.rappels}
              onChange={(e) => setNotifications({ ...notifications, rappels: e.target.checked })}
              className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
            />
          </label>

          <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
            <div>
              <p className="font-medium text-gray-900">Newsletter</p>
              <p className="text-sm text-gray-500">Actualités sur l'examen civique</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.newsletter}
              onChange={(e) => setNotifications({ ...notifications, newsletter: e.target.checked })}
              className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
            />
          </label>
        </div>
      </div>

      {/* Zone dangereuse */}
      <div className="bg-white rounded-xl border border-red-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Zone dangereuse</h2>
            <p className="text-sm text-gray-500">Actions irréversibles sur votre compte</p>
          </div>
        </div>

        <button className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium">
          <Trash2 className="w-5 h-5" />
          Supprimer mon compte
        </button>
      </div>
    </div>
  );
}
