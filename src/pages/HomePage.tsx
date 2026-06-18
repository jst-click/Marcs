import { Link } from 'react-router-dom';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SectionShell } from '../components/ui/SectionShell';
import { about, clientNames, company, industries, services } from '../data/content';
import { aboutFacilityPhoto } from '../data/facilityPhotos';
import { stockImages } from '../data/images';
import { getTelLink, getWhatsAppLink } from '../lib/contactLinks';

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
      <SectionShell bgImage={stockImages.powderCoating} overlay="dark" className="min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-marcs-yellow font-extrabold text-2xl tracking-wide mb-2">MARCS</p>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-5">
                <span className="w-2 h-2 rounded-full bg-marcs-yellow animate-pulse" />
                ISO 9001:2015 · Est. {company.founded}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                Advanced Powder Coating &{' '}
                <span className="text-marcs-yellow">Surface Finishing</span>
              </h1>

              <p className="mt-5 text-lg text-slate-200 leading-relaxed max-w-xl">
                {company.tagline}. Trusted by leading OEMs in Bangalore for durable,
                corrosion-resistant industrial coatings since 1997.
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
                  to="/capabilities"
                  className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 backdrop-blur-sm transition-all"
                >
                  Capabilities
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

      {/* About */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-blue-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-white border border-slate-100">
                <img
                  src={aboutFacilityPhoto.src}
                  alt={aboutFacilityPhoto.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 bg-marcs-orange text-white rounded-xl px-5 py-3 shadow-xl font-bold">
                Since 1997
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="About MARCS"
                title="Industrial Excellence in Every Finish"
                subtitle="State-of-the-art facility in Nelamangala with automated coating systems."
              />
              <p className="text-slate-600 leading-relaxed -mt-4 mb-6">{about.intro}</p>

              <ul className="space-y-3 mb-8">
                {about.mission.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-1 w-5 h-5 rounded-full bg-marcs-green/10 text-marcs-green flex items-center justify-center text-xs shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/projects"
                className="inline-flex rounded-xl bg-marcs-green px-6 py-3 text-sm font-semibold text-white hover:bg-marcs-teal transition-colors"
              >
                View Projects & Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <SectionShell bgImage={stockImages.inspection} overlay="dark" className="py-20 text-white">
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
            <Link to="/capabilities" className="text-marcs-yellow font-semibold hover:underline text-sm">
              View full 15-step workflow →
            </Link>
          </p>
        </div>
      </SectionShell>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-blue-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="End-to-End Surface Finishing"
            subtitle="Powder coating, pretreatment, and custom finishes for ferrous and non-ferrous components."
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:border-marcs-green/30 transition-all"
              >
                <div className="w-10 h-1 rounded-full bg-marcs-green mb-4 group-hover:w-14 transition-all" />
                <h3 className="font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link
              to="/capabilities"
              className="inline-flex rounded-xl border border-marcs-green text-marcs-green px-6 py-3 text-sm font-semibold hover:bg-marcs-green hover:text-white transition-colors"
            >
              Explore Machinery & Specs
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
      <section className="py-16 bg-marcs-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-marcs-yellow mb-2">
            Our Clients
          </p>
          <h2 className="text-2xl font-bold text-white mb-8">Trusted by Leading Organizations</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {clientNames.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionShell bgImage={stockImages.warehouse} overlay="green" className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-blue-100 text-lg">
            Send your quote request via WhatsApp — our team responds with a tailored coating solution.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-marcs-green shadow-lg hover:bg-marcs-yellow hover:text-marcs-dark transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href={getWhatsAppLink('Hello MARCS Engineering, I would like to request a quote.')}
              className="rounded-xl bg-[#25D366] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#20bd5a] transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href={getTelLink()}
              className="rounded-xl border border-white/40 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
