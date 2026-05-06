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
    <div className="space-y-8 max-w-3xl">
      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Paramètres</h1>
        <p className="text-gray-600 text-lg">
          Gérez votre compte et vos préférences
        </p>
      </div>

      {success && (
        <div className="glass-subcard p-4 text-emerald-700 border-emerald-300/50">
          {success}
        </div>
      )}

      {/* Informations personnelles */}
      <div className="glass-card p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100/70 flex items-center justify-center border border-white/60">
            <User className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Informations personnelles</h2>
            <p className="text-sm text-gray-600">Modifiez vos informations de profil</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Prénom
              </label>
              <input
                type="text"
                value={formData.prenom}
                onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                className="glass-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Nom
              </label>
              <input
                type="text"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                className="glass-input"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              disabled
              className="glass-input opacity-60 cursor-not-allowed"
            />
            <p className="text-xs text-gray-600 mt-1">L&apos;email ne peut pas être modifié</p>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="glass-cta disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            Enregistrer
          </button>
        </form>
      </div>

      {/* Notifications */}
      <div className="glass-card p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100/70 flex items-center justify-center border border-white/60">
            <Bell className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Notifications</h2>
            <p className="text-sm text-gray-600">Gérez vos préférences de notification</p>
          </div>
        </div>

        <div className="space-y-3">
          <label className="glass-subcard flex items-center justify-between p-4 cursor-pointer transition-all duration-200 active:scale-[0.99] hover:bg-white/40">
            <div>
              <p className="font-medium text-gray-900">Notifications par email</p>
              <p className="text-sm text-gray-600">Recevez des emails sur votre progression</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
              className="w-5 h-5 text-primary-600 focus:ring-primary-500 rounded"
            />
          </label>

          <label className="glass-subcard flex items-center justify-between p-4 cursor-pointer transition-all duration-200 active:scale-[0.99] hover:bg-white/40">
            <div>
              <p className="font-medium text-gray-900">Rappels d&apos;entraînement</p>
              <p className="text-sm text-gray-600">Rappels quotidiens pour maintenir votre série</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.rappels}
              onChange={(e) => setNotifications({ ...notifications, rappels: e.target.checked })}
              className="w-5 h-5 text-primary-600 focus:ring-primary-500 rounded"
            />
          </label>

          <label className="glass-subcard flex items-center justify-between p-4 cursor-pointer transition-all duration-200 active:scale-[0.99] hover:bg-white/40">
            <div>
              <p className="font-medium text-gray-900">Newsletter</p>
              <p className="text-sm text-gray-600">Actualités sur l&apos;examen civique</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.newsletter}
              onChange={(e) => setNotifications({ ...notifications, newsletter: e.target.checked })}
              className="w-5 h-5 text-primary-600 focus:ring-primary-500 rounded"
            />
          </label>
        </div>
      </div>

      {/* Zone dangereuse */}
      <div
        className="rounded-2xl p-5 sm:p-6"
        style={{
          background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
          boxShadow: '0 8px 32px rgba(220, 38, 38, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-red-500/60 flex items-center justify-center border border-white/30">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-white">Zone dangereuse</h2>
            <p className="text-sm text-red-100">Actions irréversibles sur votre compte</p>
          </div>
        </div>

        <button
          className="inline-flex items-center gap-2 text-white font-medium px-4 py-2.5 rounded-lg transition-all duration-200 active:scale-95"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.18)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.4)',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          <Trash2 className="w-5 h-5" />
          Supprimer mon compte
        </button>
      </div>
    </div>
  );
}
