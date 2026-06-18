import type { ReactNode } from 'react';

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  bgImage?: string;
  overlay?: 'dark' | 'light' | 'green';
  id?: string;
};

const overlays = {
  dark: 'bg-gradient-to-br from-marcs-dark/92 via-blue-950/88 to-marcs-green/80',
  light: 'bg-white/93 backdrop-blur-sm',
  green: 'bg-gradient-to-br from-marcs-green/92 to-marcs-teal/88',
};

export function SectionShell({
  children,
  className = '',
  bgImage,
  overlay = 'dark',
  id,
}: SectionShellProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {bgImage && (
        <>
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden
          />
          <div className={`absolute inset-0 ${overlays[overlay]}`} aria-hidden />
        </>
      )}
      <div className="relative">{children}</div>
    </section>
  );
}
