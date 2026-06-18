import { useEffect, useState } from 'react';
import type { FacilityPhoto } from '../../data/facilityPhotos';

type FacilityGalleryProps = {
  photos: FacilityPhoto[];
  columns?: 1 | 2 | 3;
  light?: boolean;
};

export function FacilityGallery({ photos, columns = 2, light = false }: FacilityGalleryProps) {
  const [active, setActive] = useState<FacilityPhoto | null>(null);
  const gridClass =
    columns === 1 ? 'grid-cols-1' : columns === 3 ? 'grid md:grid-cols-2 xl:grid-cols-3' : 'grid md:grid-cols-2';

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <>
      <div className={`grid gap-6 ${gridClass}`}>
        {photos.map((photo) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(photo)}
            className={`group text-left rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all ${
              light
                ? 'border-white/20 bg-white/5 hover:bg-white/10'
                : 'border-slate-200 bg-white hover:border-marcs-green/30'
            }`}
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className={`p-4 ${light ? 'text-white' : ''}`}>
              <p
                className={`text-xs font-bold uppercase tracking-wider ${
                  light ? 'text-marcs-yellow' : 'text-marcs-green'
                }`}
              >
                {photo.category}
              </p>
              <h3 className={`mt-1 font-bold ${light ? 'text-white' : 'text-slate-900'}`}>{photo.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${light ? 'text-slate-200' : 'text-slate-600'}`}>
                {photo.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setActive(null)}
            aria-label="Close gallery"
          />
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-auto rounded-2xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={active.src} alt={active.title} className="w-full h-auto" />
            <div className="p-5 border-t border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-marcs-green">{active.category}</p>
              <h3 className="mt-1 text-xl font-bold text-slate-900">{active.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{active.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
