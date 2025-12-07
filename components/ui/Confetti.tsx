'use client'

import { useEffect, useState } from 'react'

interface ConfettiPiece {
  id: number
  x: number
  y: number
  rotation: number
  color: string
  size: number
  speedX: number
  speedY: number
  rotationSpeed: number
}

interface ConfettiProps {
  isActive: boolean
  duration?: number
}

const COLORS = [
  '#FF6B6B', // Rouge
  '#4ECDC4', // Turquoise
  '#45B7D1', // Bleu clair
  '#96CEB4', // Vert menthe
  '#FFEAA7', // Jaune
  '#DDA0DD', // Violet clair
  '#98D8C8', // Vert eau
  '#F7DC6F', // Or
  '#BB8FCE', // Lavande
  '#85C1E9', // Bleu ciel
  '#F8B500', // Orange
  '#00CED1', // Cyan
]

export default function Confetti({ isActive, duration = 4000 }: ConfettiProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isActive) {
      setIsVisible(true)
      
      // Créer les confettis
      const newPieces: ConfettiPiece[] = []
      const pieceCount = 150 // Nombre de confettis
      
      for (let i = 0; i < pieceCount; i++) {
        newPieces.push({
          id: i,
          x: Math.random() * 100, // Position X en %
          y: -10 - Math.random() * 20, // Commence au-dessus de l'écran
          rotation: Math.random() * 360,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          size: 8 + Math.random() * 8, // Taille entre 8 et 16px
          speedX: (Math.random() - 0.5) * 3, // Vitesse horizontale
          speedY: 2 + Math.random() * 3, // Vitesse verticale
          rotationSpeed: (Math.random() - 0.5) * 10, // Vitesse de rotation
        })
      }
      
      setPieces(newPieces)
      
      // Cacher après la durée
      const timer = setTimeout(() => {
        setIsVisible(false)
        setPieces([])
      }, duration)
      
      return () => clearTimeout(timer)
    }
  }, [isActive, duration])

  if (!isVisible || pieces.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size * 0.6}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            animationDuration: `${2 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 0.5}s`,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
          }}
        />
      ))}
      
      {/* Styles CSS pour l'animation */}
      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        .animate-confetti-fall {
          animation: confetti-fall ease-out forwards;
        }
      `}</style>
    </div>
  )
}
