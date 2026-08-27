import { Link } from 'react-router-dom';
import { companyVideoId, home } from '../data/content';

const homeHeroVideoSrc = `https://www.youtube.com/embed/${companyVideoId}?autoplay=1&mute=1&loop=1&playlist=${companyVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`;

export function HomePage() {
  return (
    <>
      {/* Section 1 — YouTube video background + animated welcome */}
      <section className="relative min-h-[100svh] overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-28 sm:pb-16">
        <div className="absolute inset-0 bg-[#05040c]" aria-hidden />
        <div className="home-hero-video absolute inset-0" aria-hidden>
          <iframe
            className="home-hero-video-iframe"
            src={homeHeroVideoSrc}
            title="Marcs Engineering company video"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen={false}
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60 pointer-events-none" aria-hidden />

        <div className="relative z-10 w-full max-w-6xl">
          <div className="relative flex flex-col items-center justify-center text-center px-3 sm:px-6 py-10 sm:py-16 md:py-20">
            <p className="home-line home-line-welcome">
              Welcome <span className="home-line-to-inline">To</span>
            </p>
            <div className="home-title-wrap mt-3 sm:mt-5 md:mt-7">
              <p className="home-line home-line-brand">Marcs</p>
              <p className="home-line home-line-brand">Engineering</p>
              <p className="home-line home-line-brand home-line-brand-sub">Pvt Ltd</p>
              <span className="home-title-glow" aria-hidden />
            </div>
            <div className="home-tagline-wrap mt-5 sm:mt-8">
              <span className="home-tagline-rule" aria-hidden />
              <p className="home-line home-line-tagline">
                Advanced Powder coating and surface finishing solutions
              </p>
              <span className="home-tagline-rule" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Intro & commitment */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-marcs-green mb-4">Home</p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Premium Powder Coating Solutions for Industrial Excellence
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-marcs-green">
            Durable. Reliable. Precision Finished.
          </p>

          <p className="mt-8 text-base sm:text-lg text-slate-600 leading-relaxed">
            {home.welcome}
          </p>

          <div className="mt-12 pt-10 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Our Commitment</h2>
            <ul className="space-y-4">
              {home.commitments.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700 text-base sm:text-lg">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-marcs-orange shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex rounded-xl bg-marcs-green px-6 py-3 text-sm font-semibold text-white hover:bg-marcs-teal transition-colors"
            >
              Our Services →
            </Link>
            <Link
              to="/contact"
              className="inline-flex rounded-xl border border-marcs-green text-marcs-green px-6 py-3 text-sm font-semibold hover:bg-marcs-green hover:text-white transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
