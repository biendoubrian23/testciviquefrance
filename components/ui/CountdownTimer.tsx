'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  className?: string;
  compact?: boolean;
  onExpired?: () => void;
}

// Date de fin de la promo : 1er janvier 2026 à 00:00:01
const PROMO_END_DATE = new Date('2026-01-01T00:00:01');

export default function CountdownTimer({ className = '', compact = false, onExpired }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const diff = PROMO_END_DATE.getTime() - now.getTime();
      
      if (diff <= 0) {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        onExpired?.();
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [onExpired]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  // Si expiré, ne rien afficher
  if (isExpired) {
    return null;
  }

  // Afficher un placeholder pendant le chargement pour éviter le flash
  if (!mounted) {
    if (compact) {
      return (
        <div className={`flex items-center gap-1.5 text-sm font-medium ${className}`}>
          <Clock className="w-4 h-4 animate-pulse" />
          <span className="font-mono">--:--:--</span>
        </div>
      );
    }
    return (
      <div className={`flex items-center justify-center gap-2 ${className}`}>
        <Clock className="w-5 h-5 text-red-500 animate-pulse" />
        <span className="font-bold text-gray-900 font-mono">--h --m --s</span>
      </div>
    );
  }

  if (compact) {
    return (
      <div className={`flex items-center gap-1.5 text-sm font-medium ${className}`}>
        <Clock className="w-4 h-4 animate-pulse" />
        <span className="font-mono">
          {timeLeft.days > 0 && `${timeLeft.days}j `}
          {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <Clock className="w-5 h-5 text-red-500 animate-pulse" />
      <span className="font-bold text-gray-900 font-mono">
        {timeLeft.days > 0 && `${timeLeft.days}j `}
        {formatNumber(timeLeft.hours)}h {formatNumber(timeLeft.minutes)}m {formatNumber(timeLeft.seconds)}s
      </span>
    </div>
  );
}

// Hook pour vérifier si la promo est active
export function usePromoActive() {
  const [isActive, setIsActive] = useState(true);
  
  useEffect(() => {
    const checkPromo = () => {
      setIsActive(new Date() < PROMO_END_DATE);
    };
    
    checkPromo();
    const timer = setInterval(checkPromo, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return isActive;
}
