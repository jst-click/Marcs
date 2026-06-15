type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = 'left',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 ${alignClass}`}>
      {eyebrow && (
        <p
          className={`text-xs font-bold uppercase tracking-[0.2em] mb-3 ${
            light ? 'text-marcs-yellow' : 'text-marcs-orange'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
