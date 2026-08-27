import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { about, aboutVideoEmbed, company } from '../data/content';
import { stockImages } from '../data/images';

const aboutVideoSrc = `${aboutVideoEmbed}?autoplay=0&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&fs=1&cc_load_policy=0`;

export function AboutPage() {
  return (
    <>
      {/* Company video — top of page */}
      <section className="relative bg-marcs-dark pt-16 md:pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="about-video-wrap relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 bg-black aspect-video">
            <iframe
              className="about-video-iframe"
              src={aboutVideoSrc}
              title={`${company.name} company video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="about-video-title-mask" aria-hidden />
            <div className="about-video-brand-mask" aria-hidden />
          </div>
        </div>
      </section>

      <PageHero
        eyebrow="About Us"
        title={about.headline}
        subtitle={about.intro}
        bgImage={stockImages.factoryFloor}
      >
        <Link
          to="/services"
          className="rounded-xl bg-marcs-orange px-6 py-3 text-sm font-bold text-white hover:bg-marcs-yellow hover:text-marcs-dark transition-colors"
        >
          Explore Our Services →
        </Link>
      </PageHero>

      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <article className="rounded-2xl bg-white border border-slate-200 border-l-4 border-l-marcs-orange p-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-marcs-orange mb-3">
                Our Vision
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">{about.vision}</p>
            </article>

            <article className="rounded-2xl bg-white border border-slate-200 border-l-4 border-l-marcs-green p-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-marcs-green mb-3">
                Our Mission
              </p>
              <ul className="space-y-3">
                {about.mission.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 w-5 h-5 rounded-full bg-marcs-green/10 text-marcs-green flex items-center justify-center text-xs shrink-0">
                      ✓
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex rounded-xl bg-marcs-green px-6 py-3 text-sm font-semibold text-white hover:bg-marcs-teal transition-colors"
            >
              Request a Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
