import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { companyVideoId, home, homeVideoStartSeconds } from '../data/content';

type YTPlayer = {
  mute: () => void;
  playVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  destroy: () => void;
};

type YTNamespace = {
  Player: new (
    element: HTMLElement,
    options: {
      videoId: string;
      playerVars: Record<string, number | string>;
      events: {
        onReady: (event: { target: YTPlayer }) => void;
        onStateChange: (event: { data: number; target: YTPlayer }) => void;
      };
    },
  ) => YTPlayer;
};

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export function HomePage() {
  const playerHostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const coverTimerRef = useRef<number | undefined>(undefined);
  const [showCover, setShowCover] = useState(true);

  useEffect(() => {
    const hideCoverSoon = () => {
      window.clearTimeout(coverTimerRef.current);
      coverTimerRef.current = window.setTimeout(() => setShowCover(false), 700);
    };

    const showCoverNow = () => {
      window.clearTimeout(coverTimerRef.current);
      setShowCover(true);
    };

    const startPlayback = (player: YTPlayer) => {
      showCoverNow();
      player.mute();
      player.seekTo(homeVideoStartSeconds, true);
      player.playVideo();
    };

    const mountPlayer = () => {
      if (!playerHostRef.current || !window.YT) return;

      playerRef.current = new window.YT.Player(playerHostRef.current, {
        videoId: companyVideoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: companyVideoId,
          start: homeVideoStartSeconds,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          playsinline: 1,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            startPlayback(event.target);
          },
          onStateChange: (event) => {
            const { data, target } = event;

            if (data === 1) {
              hideCoverSoon();
              return;
            }

            showCoverNow();

            if (data === 0) {
              target.seekTo(homeVideoStartSeconds, true);
              target.playVideo();
            } else if (data === 2) {
              target.playVideo();
            }
          },
        },
      });
    };

    if (window.YT?.Player) {
      mountPlayer();
    } else {
      if (!document.querySelector('script[data-yt-api]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.async = true;
        tag.dataset.ytApi = 'true';
        document.head.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = mountPlayer;
    }

    return () => {
      window.clearTimeout(coverTimerRef.current);
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, []);

  return (
    <>
      {/* Section 1 — YouTube background from 6s, no play UI */}
      <section className="relative min-h-[100svh] overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-28 sm:pb-16">
        <div className="absolute inset-0 bg-[#05040c]" aria-hidden />
        <div className="home-hero-video absolute inset-0" aria-hidden>
          <div ref={playerHostRef} className="home-hero-video-player" />
          {showCover && <div className="home-hero-video-cover" aria-hidden />}
        </div>
        <div className="home-hero-video-shield absolute inset-0" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/40 pointer-events-none" aria-hidden />

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
