import { Link } from 'react-router-dom';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SectionShell } from '../components/ui/SectionShell';
import { clients, company, home, industries, serviceGallery, services } from '../data/content';
import { stockImages } from '../data/images';
import { getWhatsAppLink } from '../lib/contactLinks';

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '39,600', label: 'Sq.Ft. Daily Capacity' },
  { value: '3', label: 'Coating Lines' },
  { value: '3m', label: 'Max Profile Length' },
];

const processHighlights = [
  { step: '01', title: 'Surface Prep', desc: '9-tank pretreatment & cleaning' },
  { step: '02', title: 'Coating', desc: 'Automated powder application' },
  { step: '03', title: 'Curing', desc: 'Controlled oven processing' },
  { step: '04', title: 'Inspection', desc: 'DFT, adhesion & final QC' },
];

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <SectionShell bgImage={serviceGallery[2]?.src ?? stockImages.powderCoating} overlay="dark" className="min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-marcs-yellow font-extrabold text-2xl tracking-wide mb-2">MARCS</p>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-5">
                <span className="w-2 h-2 rounded-full bg-marcs-yellow animate-pulse" />
                ISO 9001:2015 · Est. {company.founded}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                Premium Powder Coating Solutions for{' '}
                <span className="text-marcs-yellow">Industrial Excellence</span>
              </h1>

              <p className="mt-5 text-xl font-semibold text-marcs-yellow tracking-wide">
                {home.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-marcs-orange px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-marcs-yellow hover:text-marcs-dark transition-all"
                >
                  Request a Quote →
                </Link>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#20bd5a] transition-all"
                >
                  WhatsApp
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 backdrop-blur-sm transition-all"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6 hover:bg-white/15 transition-colors"
                >
                  <p className="text-3xl lg:text-4xl font-bold text-marcs-yellow">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-300 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Trust strip */}
      <div className="bg-marcs-green border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-medium text-white/95">
          {['ISO 9001:2015 Certified', 'In-House QC Lab', 'On-Time Delivery', company.location].map(
            (item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="text-marcs-yellow">✓</span> {item}
              </span>
            ),
          )}
        </div>
      </div>

      {/* Welcome */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-blue-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100 border border-slate-100">
                <img
                  src={serviceGallery[0].src}
                  alt={serviceGallery[0].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 bg-marcs-orange text-white rounded-xl px-5 py-3 shadow-xl font-bold">
                Since 1997
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="Welcome"
                title={home.headline}
                subtitle={home.tagline}
              />
              <p className="text-slate-600 leading-relaxed -mt-4 mb-8">{home.welcome}</p>
              <Link
                to="/about"
                className="inline-flex rounded-xl bg-marcs-green px-6 py-3 text-sm font-semibold text-white hover:bg-marcs-teal transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 lg:py-28 bg-marcs-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why MARCS"
            title="Our Commitment"
            subtitle="What drives every coating project we deliver."
            light
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {home.commitments.map((item, i) => (
              <div
                key={item}
                className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-6 hover:bg-white/15 transition-colors"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-marcs-yellow/20 text-marcs-yellow text-sm font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-bold text-lg leading-snug">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <SectionShell bgImage={serviceGallery[6]?.src ?? stockImages.inspection} overlay="dark" className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="From Raw Material to Refined Finish"
            subtitle="Every stage monitored by trained professionals for flawless coating performance."
            light
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-4">
            {processHighlights.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-6 hover:bg-white/15 transition-colors"
              >
                <span className="text-3xl font-bold text-marcs-yellow/80">{item.step}</span>
                <h3 className="mt-2 font-bold text-lg">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link to="/services" className="text-marcs-yellow font-semibold hover:underline text-sm">
              Explore our services →
            </Link>
          </p>
        </div>
      </SectionShell>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-blue-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="End-to-End Surface Finishing"
            subtitle="Powder coating, pretreatment, and custom finishes for ferrous and non-ferrous components."
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-marcs-green/30 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-1 rounded-full bg-marcs-green mb-4 group-hover:w-14 transition-all" />
                  <h3 className="font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex rounded-xl border border-marcs-green text-marcs-green px-6 py-3 text-sm font-semibold hover:bg-marcs-green hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </p>
        </div>
      </section>

      <WhyChooseUs />

      {/* Industries */}
      <section className="py-20 bg-white border-t border-blue-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries"
            title="Sectors We Serve"
            align="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {industries.map((ind) => (
              <div
                key={ind}
                className="rounded-xl bg-slate-50 border border-slate-200 px-3 py-4 text-center text-sm font-medium text-slate-700 hover:bg-marcs-green hover:border-marcs-green hover:text-white transition-colors"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 lg:py-20 bg-marcs-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-marcs-yellow text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Trusted By
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">Our Clients</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white px-4 py-5 shadow-sm min-h-[120px]"
              >
                <div className="h-12 w-full flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-12 max-w-[140px] w-auto object-contain"
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.style.display = 'none';
                      const fallback = img.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.hidden = false;
                    }}
                  />
                  <span
                    hidden
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-marcs-green/10 text-marcs-green text-sm font-bold"
                    aria-hidden
                  >
                    {client.name
                      .split(/\s+/)
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join('')
                      .toUpperCase()}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
