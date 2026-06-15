import type { ReactNode } from 'react';

type OverlayVariant = 'dark' | 'light' | 'green' | 'teal';

type SectionBackgroundProps = {
  image: string;
  children: ReactNode;
  overlay?: OverlayVariant;
  className?: string;
  imageClassName?: string;
};

const overlayStyles: Record<OverlayVariant, string> = {
  dark: 'bg-gradient-to-br from-slate-900/90 via-marcs-dark/85 to-marcs-green/80',
  light: 'bg-white/93 backdrop-blur-[2px]',
  green: 'bg-gradient-to-r from-marcs-green/92 to-marcs-teal/88',
  teal: 'bg-gradient-to-br from-marcs-teal/88 to-slate-900/85',
};

export function SectionBackground({
  image,
  children,
  overlay = 'dark',
  className = '',
  imageClassName = '',
}: SectionBackgroundProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 ${imageClassName}`}
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div className={`absolute inset-0 ${overlayStyles[overlay]}`} aria-hidden />
      <div className="relative">{children}</div>
    </section>
  );
}
