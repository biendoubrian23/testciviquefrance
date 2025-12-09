import Image from 'next/image';

interface OptimizedBackgroundImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
}

/**
 * Composant pour afficher une image de fond optimisée avec Next.js Image
 * Utilise le chargement lazy par défaut et le format WebP/AVIF
 */
export default function OptimizedBackgroundImage({
  src,
  alt,
  priority = false,
  className = '',
  overlayClassName = 'absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/70',
  children,
}: OptimizedBackgroundImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Image de fond optimisée */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={80}
        sizes="100vw"
        className="object-cover object-center"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
      />
      
      {/* Overlay */}
      {overlayClassName && <div className={overlayClassName} />}
      
      {/* Contenu */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
