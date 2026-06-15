import type { ReactNode } from 'react';
import { SectionShell } from './SectionShell';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  bgImage: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, subtitle, bgImage, children }: PageHeroProps) {
  return (
    <SectionShell bgImage={bgImage} overlay="dark" className="text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-marcs-yellow text-xs font-bold uppercase tracking-[0.2em] mb-3">
          {eyebrow}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-tight max-w-4xl">
          {title}
        </h1>
        <p className="mt-5 text-lg text-slate-200 max-w-2xl leading-relaxed">{subtitle}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </SectionShell>
  );
}
