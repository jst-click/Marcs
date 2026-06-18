import { Link } from 'react-router-dom';
import { advantages } from '../../data/content';
import { stockImages } from '../../data/images';
import { getTelLink, getWhatsAppLink } from '../../lib/contactLinks';

const cardStyles = [
  {
    accent: 'from-marcs-orange to-amber-400',
    iconBg: 'bg-orange-100 text-marcs-orange',
    border: 'hover:border-orange-300/60',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    accent: 'from-blue-500 to-marcs-green',
    iconBg: 'bg-blue-100 text-blue-700',
    border: 'hover:border-blue-300/60',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    accent: 'from-marcs-teal to-cyan-500',
    iconBg: 'bg-sky-100 text-marcs-teal',
    border: 'hover:border-sky-300/60',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    accent: 'from-violet-500 to-purple-500',
    iconBg: 'bg-violet-100 text-violet-700',
    border: 'hover:border-violet-300/60',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

const highlights = ['ISO 9001:2015', '25+ Years', '39,600 Sq.Ft./Day', 'In-House QC Lab'];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <img
        src={stockImages.manufacturing}
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-105"
        aria-hidden
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-marcs-dark/95 via-blue-950/90 to-marcs-green/85" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-marcs-orange/20 rounded-full blur-[100px]" aria-hidden />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-marcs-yellow/10 rounded-full blur-[120px]" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left panel — glass card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-8 lg:p-10 shadow-2xl shadow-black/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-marcs-green/20 pointer-events-none" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-marcs-yellow/15 rounded-full blur-3xl" aria-hidden />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-marcs-yellow mb-4">
                  Why Choose Us
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
                  Built for Quality,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-marcs-yellow to-marcs-orange">
                    Speed & Reliability
                  </span>
                </h2>
                <p className="mt-5 text-slate-200 leading-relaxed">
                  With automated conveyor lines, in-house testing, and a skilled technical team,
                  we deliver consistent results on every batch — on time and within spec.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-marcs-yellow" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-marcs-orange px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-900/50 hover:bg-marcs-yellow hover:text-marcs-dark transition-all hover:scale-[1.02]"
                  >
                    Get a Quote
                    <span aria-hidden>→</span>
                  </Link>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#20bd5a] transition-all"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={getTelLink()}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — glass cards */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {advantages.map((adv, i) => {
                const style = cardStyles[i] ?? cardStyles[0];
                return (
                  <article
                    key={adv.title}
                    className={`group relative rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 p-6 shadow-xl shadow-black/20 ${style.border} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:bg-white overflow-hidden`}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${style.accent}`}
                    />
                    <div className="flex items-start gap-4">
                      <div
                        className={`shrink-0 w-12 h-12 rounded-xl ${style.iconBg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}
                      >
                        {style.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          0{i + 1}
                        </span>
                        <h3 className="mt-0.5 font-bold text-slate-900 leading-snug">{adv.title}</h3>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{adv.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
