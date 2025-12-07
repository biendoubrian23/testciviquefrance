'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Page desactivee - redirection vers le dashboard
export default function StatistiquesPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/dashboard');
  }, [router]);
  
  return null;
}