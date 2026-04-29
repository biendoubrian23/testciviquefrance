'use client';

import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

const VIEW_DISPLAY_MULTIPLIER = 1000;
const incrementedSlugs = new Set<string>();

function formatViews(views: number) {
  return new Intl.NumberFormat('fr-FR').format(Math.max(views, 0) * VIEW_DISPLAY_MULTIPLIER);
}

function toNumber(value: unknown) {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') return Number(value);
  return Number.NaN;
}

interface ArticleViewsProps {
  slug: string;
  fallbackViews?: number;
  className?: string;
  iconClassName?: string;
  label?: 'short' | 'long' | 'none';
  incrementOnMount?: boolean;
}

export default function ArticleViews({
  slug,
  fallbackViews = 0,
  className = '',
  iconClassName = 'w-4 h-4',
  label = 'short',
  incrementOnMount = false,
}: ArticleViewsProps) {
  const [views, setViews] = useState(fallbackViews);

  useEffect(() => {
    let cancelled = false;
    const supabase = createClient();

    async function loadViews() {
      if (incrementOnMount && !incrementedSlugs.has(slug)) {
        incrementedSlugs.add(slug);
        const { data, error } = await supabase.rpc('increment_article_view', { p_slug: slug });
        const nextViews = toNumber(data);

        if (!cancelled && !error && Number.isFinite(nextViews)) {
          setViews(nextViews);
          return;
        }
      }

      const { data, error } = await supabase
        .from('article_views')
        .select('views')
        .eq('slug', slug)
        .maybeSingle();

      const nextViews = toNumber(data?.views);

      if (!cancelled && !error && Number.isFinite(nextViews)) {
        setViews(nextViews);
      }
    }

    loadViews();

    return () => {
      cancelled = true;
    };
  }, [fallbackViews, incrementOnMount, slug]);

  const suffix = label === 'long' ? ' vues' : label === 'short' ? ' vues' : '';

  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <Eye className={iconClassName} />
      {formatViews(views)}
      {suffix}
    </span>
  );
}
