'use client'

import { useEffect, useState } from 'react'
import { Sparkles, Star, Zap, Trophy, Crown, Flame, Heart, PartyPopper } from 'lucide-react'

interface CelebrationToastProps {
  isVisible: boolean
  score: number
  onHide?: () => void
}

// 50 messages de félicitations pour 9/10 ou 10/10
const CELEBRATION_MESSAGES = [
  // Messages enthousiastes généraux (15)
  "🔥 Wouah ! Tu maîtrises complètement !",
  "🚀 Incroyable ! Tu casses tout !",
  "⭐ Magistral ! Tu es au top !",
  "💪 Impressionnant ! Continue comme ça !",
  "🎯 Dans le mille ! Performance parfaite !",
  "👑 Royal ! Tu domines le sujet !",
  "🌟 Brillant ! Tu nous épates !",
  "💎 Exceptionnel ! Quel talent !",
  "🏆 Champion(ne) ! Bravo !",
  "⚡ Électrique ! Tu gères grave !",
  "🎸 Tu rocks ! Performance de ouf !",
  "🔝 Au sommet ! Tu assures !",
  "💯 Perfection ! Rien à dire !",
  "🙌 Standing ovation ! Bravo !",
  "✨ Magnifique ! Tu brilles !",
  
  // Messages fun et encourageants (15)
  "🧠 Ton cerveau est en feu !",
  "📚 Tu as bien révisé, ça se voit !",
  "🎓 Futur(e) citoyen(ne) exemplaire !",
  "🇫🇷 La France est fière de toi !",
  "💡 Génie en action !",
  "🎪 Spectaculaire ! Encore !",
  "🌈 Arc-en-ciel de succès !",
  "🎁 Quel cadeau cette performance !",
  "🍾 Ça mérite d'être célébré !",
  "🎉 Fête nationale pour toi !",
  "🦸 Super-héros de la citoyenneté !",
  "🎭 Artiste du quiz !",
  "🏅 Médaille d'or méritée !",
  "🌞 Tu rayonnes de savoir !",
  "🎤 Drop the mic ! Tu gères !",
  
  // Messages motivants (10)
  "💫 Tu es sur la bonne voie !",
  "🚀 Décollage vers le succès !",
  "🎯 Précision chirurgicale !",
  "⚔️ Guerrier(ère) du savoir !",
  "🏰 Tu bâtis ta citoyenneté !",
  "🌊 Vague de succès !",
  "🔮 L'avenir t'appartient !",
  "🎲 Tu as tous les atouts !",
  "🧩 Puzzle résolu brillamment !",
  "📈 Progression fulgurante !",
  
  // Messages spéciaux pour 10/10 (10)
  "💯 SCORE PARFAIT ! Légendaire !",
  "🏆 10/10 ! Tu es imbattable !",
  "👑 Sans faute ! Majestueux !",
  "⭐ Perfection absolue ! Wow !",
  "🎯 100% ! Tu es un(e) pro !",
  "💎 Score diamant ! Exquis !",
  "🔥 Flawless ! Zéro erreur !",
  "🌟 Note maximale ! Sublime !",
  "✨ Carton plein ! Félicitations !",
  "🎊 Sans faute ! Tu déchires tout !"
]

// Sélectionner un message aléatoire basé sur le score
const getRandomMessage = (score: number): string => {
  if (score === 10) {
    // Messages spéciaux 10/10 (derniers 10 de la liste)
    const perfectMessages = CELEBRATION_MESSAGES.slice(-10)
    return perfectMessages[Math.floor(Math.random() * perfectMessages.length)]
  }
  // Messages généraux pour 9/10
  const generalMessages = CELEBRATION_MESSAGES.slice(0, -10)
  return generalMessages[Math.floor(Math.random() * generalMessages.length)]
}

// Icônes aléatoires
const ICONS = [Sparkles, Star, Zap, Trophy, Crown, Flame, Heart, PartyPopper]

export default function CelebrationToast({ isVisible, score, onHide }: CelebrationToastProps) {
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState('')
  const [IconComponent, setIconComponent] = useState<typeof Sparkles>(Sparkles)

  useEffect(() => {
    if (isVisible && score >= 9) {
      // Sélectionner message et icône aléatoires
      setMessage(getRandomMessage(score))
      setIconComponent(ICONS[Math.floor(Math.random() * ICONS.length)])
      
      // Afficher avec animation
      setTimeout(() => setShow(true), 100)
      
      // Cacher après 3.5 secondes
      const hideTimer = setTimeout(() => {
        setShow(false)
        if (onHide) {
          setTimeout(onHide, 500) // Attendre la fin de l'animation
        }
      }, 3500)
      
      return () => clearTimeout(hideTimer)
    }
  }, [isVisible, score, onHide])

  if (!isVisible || score < 9) return null

  return (
    <div 
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-[60] transition-all duration-500 ease-out ${
        show 
          ? 'translate-y-0 opacity-100 scale-100' 
          : '-translate-y-full opacity-0 scale-95'
      }`}
    >
      <div className={`
        px-6 py-4 rounded-2xl shadow-2xl border-2
        ${score === 10 
          ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 border-amber-500 text-amber-900' 
          : 'bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 border-emerald-500 text-emerald-900'
        }
        animate-pulse-slow
      `}>
        <div className="flex items-center gap-3">
          <div className={`
            p-2 rounded-full 
            ${score === 10 ? 'bg-amber-200/50' : 'bg-emerald-200/50'}
          `}>
            <IconComponent className="w-6 h-6 animate-bounce" />
          </div>
          <span className="font-bold text-lg whitespace-nowrap">
            {message}
          </span>
          <div className={`
            p-2 rounded-full 
            ${score === 10 ? 'bg-amber-200/50' : 'bg-emerald-200/50'}
          `}>
            <IconComponent className="w-6 h-6 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </div>
      
      {/* Style pour l'animation pulse lente */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse-glow 1.5s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px ${score === 10 ? 'rgba(251, 191, 36, 0.3)' : 'rgba(52, 211, 153, 0.3)'};
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.15), 0 0 60px ${score === 10 ? 'rgba(251, 191, 36, 0.5)' : 'rgba(52, 211, 153, 0.5)'};
          }
        }
      `}</style>
    </div>
  )
}
