import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchSite } from '../../lib/siteSearch';

type SearchModalProps = {
  open: boolean;
  onClose: () => void;
};

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const results = searchSite(query);

  useEffect(() => {
    if (!open) {
      setQuery('');
      return;
    }
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-24 sm:pt-28">
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close search"
      />

      <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-white shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3">
          <svg className="w-5 h-5 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, projects, contacts..."
            className="flex-1 bg-transparent text-slate-800 placeholder:text-slate-400 outline-none text-base"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="max-h-[min(60vh,420px)] overflow-y-auto">
          {query.trim() === '' ? (
            <p className="px-4 py-8 text-center text-sm text-slate-500">
              Try &ldquo;powder coating&rdquo;, &ldquo;GE HealthCare&rdquo;, or &ldquo;quote&rdquo;
            </p>
          ) : results.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-slate-500">No results for &ldquo;{query}&rdquo;</p>
          ) : (
            <ul className="py-2">
              {results.map((result, i) => (
                <li key={`${result.to}-${result.title}-${i}`}>
                  <Link
                    to={result.to}
                    onClick={onClose}
                    className="flex flex-col gap-0.5 px-4 py-3 hover:bg-marcs-green/5 transition-colors"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-marcs-green">
                      {result.category}
                    </span>
                    <span className="font-medium text-slate-800">{result.title}</span>
                    {result.description && (
                      <span className="text-sm text-slate-500 line-clamp-2">{result.description}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
