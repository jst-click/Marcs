import { Link } from 'react-router-dom';
import { PageCta } from '../components/ui/PageCta';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SectionShell } from '../components/ui/SectionShell';
import { caseStudies, clientNames, futureVision, sustainability } from '../data/content';
import { stockImages } from '../data/images';
import { getWhatsAppLink } from '../lib/contactLinks';

const caseStudyColors = [
  'from-marcs-orange to-amber-500',
  'from-marcs-green to-emerald-600',
  'from-marcs-teal to-cyan-600',
  'from-violet-600 to-purple-600',
];

export function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects & Case Studies"
        title="Success Stories & Visual Proof"
        subtitle="Real engineering challenges solved with precision coating, rigorous quality control, and on-time delivery."
        bgImage={stockImages.inspection}
      >
        <a
          href={getWhatsAppLink('Hello MARCS Engineering, I would like to discuss a project.')}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white hover:bg-[#20bd5a] transition-colors"
        >
          Discuss a Project
        </a>
      </PageHero>

      {/* Case Studies */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Problem-Solving"
            title="Engineering Challenges We Solve"
            subtitle="How MARCS delivers durable, specification-driven finishes across industries."
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, i) => (
              <article
                key={study.title}
                className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${caseStudyColors[i % caseStudyColors.length]} px-6 py-5`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">{study.title}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: 'Challenge', text: study.challenge },
                    { label: 'Solution', text: study.solution },
                    { label: 'Outcome', text: study.outcome, bold: true },
                  ].map((block) => (
                    <div key={block.label}>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-marcs-green">
                        {block.label}
                      </h4>
                      <p className={`mt-1 text-sm leading-relaxed text-slate-600 ${block.bold ? 'font-semibold text-slate-800' : ''}`}>
                        {block.text}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Proof */}
      <SectionShell bgImage={stockImages.manufacturing} overlay="dark" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visual Proof"
            title="Factory Floor & Production Areas"
            subtitle="Consistent finishing excellence in a well-maintained, hygienic facility."
            light
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { src: stockImages.powderCoating, alt: 'Powder coating process' },
              { src: stockImages.factoryFloor, alt: 'Manufacturing facility' },
              { src: stockImages.warehouse, alt: 'Production and dispatch' },
            ].map((photo) => (
              <div
                key={photo.alt}
                className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-[4/3] group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* Clients */}
      <section className="py-16 bg-marcs-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-marcs-yellow mb-2">
            Key Projects / Clients
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Trusted by Leading Organizations
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {clientNames.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sustainability & Safety"
            title="Responsible Manufacturing"
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-5">
            {sustainability.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-6 hover:shadow-lg hover:border-marcs-green/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-marcs-green text-white font-bold flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <SectionShell bgImage={stockImages.metalWork} overlay="green" className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Way Forward"
                title="Future Growth & Partnership Vision"
                light
              />
              <ul className="space-y-4 -mt-4">
                {futureVision.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-green-50">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-marcs-yellow text-sm shrink-0">
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold text-marcs-green hover:bg-marcs-yellow hover:text-marcs-dark transition-colors"
              >
                Partner With Us
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-video">
              <img
                src={stockImages.manufacturing}
                alt="Future growth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </SectionShell>

      <PageCta />
    </>
  );
}
