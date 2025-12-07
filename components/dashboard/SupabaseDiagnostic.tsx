'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { CheckCircle2, XCircle, AlertCircle, RefreshCw } from 'lucide-react';

interface DiagnosticResult {
  name: string;
  status: 'success' | 'error' | 'pending';
  message: string;
  duration?: number;
}

export default function SupabaseDiagnostic() {
  const [results, setResults] = useState<DiagnosticResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runDiagnostics = async () => {
    setIsRunning(true);
    setResults([]);
    const supabase = createClient();
    const newResults: DiagnosticResult[] = [];

    // Test 1: Vérifier les variables d'environnement
    const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
    const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    newResults.push({
      name: 'Variables d\'environnement',
      status: hasUrl && hasKey ? 'success' : 'error',
      message: hasUrl && hasKey 
        ? 'URL et clé configurées correctement'
        : `Manquant: ${!hasUrl ? 'SUPABASE_URL ' : ''}${!hasKey ? 'SUPABASE_ANON_KEY' : ''}`,
    });
    setResults([...newResults]);

    // Test 2: Vérifier la session auth
    const authStart = Date.now();
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      const authDuration = Date.now() - authStart;
      
      if (error) {
        newResults.push({
          name: 'Authentification',
          status: 'error',
          message: `Erreur: ${error.message}`,
          duration: authDuration,
        });
      } else {
        newResults.push({
          name: 'Authentification',
          status: session ? 'success' : 'error',
          message: session 
            ? `Connecté en tant que ${session.user.email}`
            : 'Aucune session active - Utilisateur non connecté',
          duration: authDuration,
        });
      }
    } catch (err) {
      newResults.push({
        name: 'Authentification',
        status: 'error',
        message: `Exception: ${err instanceof Error ? err.message : 'Erreur inconnue'}`,
        duration: Date.now() - authStart,
      });
    }
    setResults([...newResults]);

    // Test 3: Ping simple à la base de données (requête légère)
    const dbStart = Date.now();
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('id')
        .limit(1);
      
      const dbDuration = Date.now() - dbStart;
      
      if (error) {
        newResults.push({
          name: 'Connexion Base de Données',
          status: 'error',
          message: `Erreur: ${error.message} (Code: ${error.code})`,
          duration: dbDuration,
        });
      } else {
        newResults.push({
          name: 'Connexion Base de Données',
          status: 'success',
          message: `Connecté avec succès`,
          duration: dbDuration,
        });
      }
    } catch (err) {
      newResults.push({
        name: 'Connexion Base de Données',
        status: 'error',
        message: `Exception: ${err instanceof Error ? err.message : 'Erreur inconnue'}`,
        duration: Date.now() - dbStart,
      });
    }
    setResults([...newResults]);

    // Test 4: Vérifier les statistiques utilisateur (si connecté)
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      const statsStart = Date.now();
      try {
        const { data, error } = await supabase
          .from('statistiques')
          .select('*')
          .eq('user_id', session.user.id)
          .limit(1);
        
        const statsDuration = Date.now() - statsStart;
        
        if (error) {
          newResults.push({
            name: 'Table Statistiques',
            status: 'error',
            message: `Erreur: ${error.message}`,
            duration: statsDuration,
          });
        } else {
          newResults.push({
            name: 'Table Statistiques',
            status: 'success',
            message: data && data.length > 0 
              ? `Données trouvées (${data[0].total_questions_repondues || 0} questions)`
              : 'Aucune statistique (nouveau compte)',
            duration: statsDuration,
          });
        }
      } catch (err) {
        newResults.push({
          name: 'Table Statistiques',
          status: 'error',
          message: `Exception: ${err instanceof Error ? err.message : 'Erreur inconnue'}`,
          duration: Date.now() - statsStart,
        });
      }

      // Test 5: Vérifier le profil
      const profileStart = Date.now();
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .limit(1);
        
        const profileDuration = Date.now() - profileStart;
        
        if (error) {
          newResults.push({
            name: 'Table Profiles',
            status: 'error',
            message: `Erreur: ${error.message}`,
            duration: profileDuration,
          });
        } else {
          newResults.push({
            name: 'Table Profiles',
            status: 'success',
            message: data && data.length > 0 
              ? `Profil trouvé: ${data[0].prenom || 'Sans prénom'}`
              : 'Profil non trouvé - Problème de synchronisation',
            duration: profileDuration,
          });
        }
      } catch (err) {
        newResults.push({
          name: 'Table Profiles',
          status: 'error',
          message: `Exception: ${err instanceof Error ? err.message : 'Erreur inconnue'}`,
          duration: Date.now() - profileStart,
        });
      }
    }
    
    setResults([...newResults]);
    setIsRunning(false);
  };

  useEffect(() => {
    runDiagnostics();
  }, []);

  const getStatusIcon = (status: DiagnosticResult['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-yellow-500 animate-pulse" />;
    }
  };

  const allSuccess = results.length > 0 && results.every(r => r.status === 'success');
  const hasErrors = results.some(r => r.status === 'error');

  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Diagnostic Supabase</h3>
        <button
          onClick={runDiagnostics}
          disabled={isRunning}
          className="flex items-center gap-2 px-3 py-1.5 text-sm bg-primary-100 text-primary-700 rounded hover:bg-primary-200 disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isRunning ? 'animate-spin' : ''}`} />
          {isRunning ? 'En cours...' : 'Relancer'}
        </button>
      </div>

      {/* Résumé */}
      <div className={`p-3 rounded-lg mb-4 ${
        allSuccess ? 'bg-green-50 border border-green-200' :
        hasErrors ? 'bg-red-50 border border-red-200' :
        'bg-yellow-50 border border-yellow-200'
      }`}>
        <p className={`font-medium ${
          allSuccess ? 'text-green-700' :
          hasErrors ? 'text-red-700' :
          'text-yellow-700'
        }`}>
          {allSuccess && '✅ Tous les tests sont passés avec succès'}
          {hasErrors && '❌ Des erreurs ont été détectées'}
          {!allSuccess && !hasErrors && results.length === 0 && '⏳ Diagnostic en cours...'}
        </p>
      </div>

      {/* Détails */}
      <div className="space-y-2">
        {results.map((result, index) => (
          <div 
            key={index}
            className={`flex items-start gap-3 p-3 rounded ${
              result.status === 'success' ? 'bg-green-50' :
              result.status === 'error' ? 'bg-red-50' :
              'bg-yellow-50'
            }`}
          >
            {getStatusIcon(result.status)}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">{result.name}</span>
                {result.duration !== undefined && (
                  <span className="text-xs text-gray-500">({result.duration}ms)</span>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-0.5">{result.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Conseils si erreurs */}
      {hasErrors && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-medium text-blue-800 mb-2">💡 Solutions possibles :</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Vérifiez votre connexion internet</li>
            <li>• Allez sur <a href="https://supabase.com/dashboard" target="_blank" rel="noopener" className="underline">supabase.com/dashboard</a> → Logs pour voir les erreurs</li>
            <li>• Vérifiez que votre projet n&apos;est pas en pause (Free tier)</li>
            <li>• Déconnectez-vous et reconnectez-vous</li>
          </ul>
        </div>
      )}
    </div>
  );
}
