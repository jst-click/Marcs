import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { company, home } from '../data/content';

const companyVideo = `/images/Photo%20for%20website/${encodeURIComponent('MARCS ENGINEERING PVT  LTD.mp4')}`;

export function HomePageLegacy() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      {/* Section 1 — Video welcome */}
      <section className="relative min-h-screen bg-[#0a0a12] flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-10">
        <div className="relative w-full max-w-5xl">
          <div className="relative overflow-hidden rounded-sm border border-violet-400/70 shadow-[0_0_40px_rgba(139,92,246,0.25)] aspect-video bg-black">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src={companyVideo}
              playsInline
              preload="metadata"
              loop
              muted={!playing}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onClick={togglePlay}
              aria-label={`${company.name} welcome video`}
            />

            <div
              className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-opacity duration-500 pointer-events-none ${
                playing ? 'opacity-0' : 'opacity-100 bg-black/45'
              }`}
            >
              <p className="text-white text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.12em] uppercase leading-tight">
                Welcome
              </p>
              <p className="text-white text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.12em] uppercase leading-tight mt-1">
                To
              </p>
              <p className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.08em] uppercase leading-tight mt-4 max-w-4xl">
                Marcs Engineering Pvt
              </p>
              <p className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.08em] uppercase leading-tight">
                Ltd
              </p>
            </div>

            {!playing && (
              <button
                type="button"
                onClick={togglePlay}
                className="absolute inset-0 m-auto h-16 w-16 sm:h-20 sm:w-20 rounded-full border-2 border-white/80 bg-black/35 text-white flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all"
                aria-label="Play welcome video"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}
          </div>

          <p className="mt-8 text-center text-white/90 text-base sm:text-lg md:text-xl font-medium tracking-wide">
            Advanced Powder coating and surface finishing solutions
          </p>
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
