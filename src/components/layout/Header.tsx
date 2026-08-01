import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SearchModal } from '../ui/SearchModal';
import { Logo } from '../ui/Logo';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact & RFQ' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          solid
            ? 'bg-white/95 backdrop-blur-md border-b border-blue-200/70 shadow-sm shadow-blue-900/5'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="flex w-full items-center justify-between h-16 md:h-20">
            <Logo />

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      solid
                        ? isActive
                          ? 'text-marcs-green'
                          : 'text-slate-700 hover:text-marcs-green'
                        : isActive
                          ? 'text-marcs-yellow'
                          : 'text-white/90 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className={`inline-flex items-center justify-center rounded-lg p-2.5 transition-colors ${
                  solid
                    ? 'text-slate-600 hover:bg-slate-100 hover:text-marcs-green'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
                aria-label="Search site"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <Link
                to="/contact"
                className={`inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold shadow transition-colors ${
                  solid
                    ? 'bg-marcs-green text-white hover:bg-marcs-teal'
                    : 'bg-white/15 text-white border border-white/25 backdrop-blur-sm hover:bg-white/25'
                }`}
              >
                Request a Quote
              </Link>
            </nav>

            <div className="flex items-center gap-1 lg:hidden">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className={`p-2 rounded-md transition-colors ${
                  solid ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Search site"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <button
                type="button"
                className={`p-2 rounded-md transition-colors ${
                  solid ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {open ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div
            className={`lg:hidden w-full border-t px-4 sm:px-6 lg:px-10 xl:px-16 py-4 space-y-2 ${
              solid
                ? 'border-slate-200 bg-white'
                : 'border-white/10 bg-slate-900/90 backdrop-blur-md'
            }`}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium ${
                    solid
                      ? isActive
                        ? 'bg-marcs-green/10 text-marcs-green'
                        : 'text-slate-700 hover:bg-slate-50'
                      : isActive
                        ? 'bg-white/15 text-marcs-yellow'
                        : 'text-white/90 hover:bg-white/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center rounded-lg bg-marcs-green px-4 py-3 text-sm font-semibold text-white"
            >
              Request a Quote
            </Link>
          </div>
        )}
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
