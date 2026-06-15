import { Link } from 'react-router-dom';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center shrink-0 ${className}`} aria-label="MARCS Engineering home">
      <img
        src="/marcs-logo.png"
        alt="MARCS Engineering"
        className="h-10 md:h-12 w-auto rounded-md shadow-sm"
      />
    </Link>
  );
}
