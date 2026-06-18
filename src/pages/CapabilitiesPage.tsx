import { Link } from 'react-router-dom';
import { FacilityGallery } from '../components/ui/FacilityGallery';
import { PageCta } from '../components/ui/PageCta';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SectionShell } from '../components/ui/SectionShell';
import {
  facilityHighlights,
  machinery,
  powderTypes,
  processSteps,
  qualityPillars,
  qualityTests,
  testingEquipment,
} from '../data/content';
import { facilityPhotosByCategory } from '../data/facilityPhotos';
import { stockImages } from '../data/images';

const machineryColors = [
  'border-l-marcs-orange',
  'border-l-marcs-green',
  'border-l-marcs-teal',
  'border-l-violet-500',
  'border-l-amber-500',
  'border-l-cyan-500',
];

export function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities & Services"
        title="Machinery, Processes & Quality Systems"
        subtitle="State-of-the-art infrastructure with automated coating systems, advanced pretreatment, and a fully equipped quality laboratory."
        bgImage={stockImages.manufacturing}
      >
        <Link
          to="/contact"
          className="rounded-xl bg-marcs-orange px-6 py-3 text-sm font-bold text-white hover:bg-marcs-yellow hover:text-marcs-dark transition-colors"
        >
          Request a Quote →
        </Link>
      </PageHero>

      {/* Machinery — cards */}
      <section className="py-20 lg:py-28 bg-blue-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Equipment"
            title="Machinery & Capacity"
            subtitle="Three conveyorized plants, multiple curing systems, and dedicated lines for profiles up to 3 meters."
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {machinery.map((item, i) => (
              <article
                key={item.name}
                className={`rounded-2xl bg-white border border-slate-200 border-l-4 ${machineryColors[i % machineryColors.length]} p-6 shadow-sm hover:shadow-lg transition-all`}
              >
                <h3 className="font-bold text-slate-900 text-lg">{item.name}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-marcs-green">Configuration</dt>
                    <dd className="mt-0.5 text-slate-600">{item.count}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-marcs-green">Capacity</dt>
                    <dd className="mt-0.5 text-slate-600">{item.capacity}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-marcs-green">Key Specs</dt>
                    <dd className="mt-0.5 text-slate-600">{item.specs}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <SectionShell bgImage={stockImages.factoryFloor} overlay="dark" className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Infrastructure"
            title="Facility Highlights"
            subtitle="Designed for high-volume production and specialized coating requirements."
            light
          />
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="grid sm:grid-cols-2 gap-3">
              {facilityHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 p-4 text-sm text-slate-100"
                >
                  <span className="text-marcs-yellow shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <div className="grid gap-4">
              <FacilityGallery photos={facilityPhotosByCategory.Facility} columns={1} light />
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="15-Step Manufacturing Workflow"
            subtitle="Every stage monitored by trained professionals."
          />
          <div className="grid lg:grid-cols-2 gap-10">
            <FacilityGallery photos={facilityPhotosByCategory.Process} columns={1} />
            <div className="grid sm:grid-cols-2 gap-2 content-start">
              {processSteps.map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-100 px-3 py-2.5 hover:bg-marcs-green/5 hover:border-marcs-green/20 transition-colors"
                >
                  <span className="w-7 h-7 rounded-lg bg-marcs-green text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-slate-800">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Powder types */}
      <section className="py-20 bg-blue-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Coating Options"
            title="Types of Powder Coatings"
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {powderTypes.map((type, i) => (
              <div
                key={type}
                className="group rounded-2xl bg-white border border-slate-200 px-5 py-4 font-semibold text-slate-800 shadow-sm hover:shadow-md hover:border-marcs-green/40 hover:text-marcs-green transition-all flex items-center gap-3"
              >
                <span className="w-8 h-8 rounded-lg bg-marcs-green/10 text-marcs-green text-sm font-bold flex items-center justify-center group-hover:bg-marcs-green group-hover:text-white transition-colors">
                  {i + 1}
                </span>
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <SectionShell bgImage={stockImages.qualityLab} overlay="dark" className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quality Commitment"
            title="Comprehensive Multi-Stage Quality Control"
            subtitle="Ensuring coating durability, performance, and aesthetic consistency."
            light
            align="center"
          />

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <FacilityGallery photos={facilityPhotosByCategory.Quality} columns={1} light />
            <div className="space-y-6">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6">
                <h3 className="font-bold text-marcs-yellow mb-4">Quality Pillars</h3>
                <ul className="space-y-2">
                  {qualityPillars.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-200">
                      <span className="text-marcs-yellow">●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6">
                <h3 className="font-bold text-marcs-yellow mb-4">Quality Control Tests</h3>
                <ul className="space-y-2">
                  {qualityTests.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-200">
                      <span className="text-marcs-yellow">●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {testingEquipment.map((eq) => (
              <span
                key={eq}
                className="rounded-full bg-marcs-green/80 border border-white/20 px-4 py-2 text-sm font-medium text-white"
              >
                {eq}
              </span>
            ))}
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 max-w-3xl mx-auto text-center">
            <h3 className="font-bold text-marcs-yellow mb-3">Quality Policy</h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              Committed to <strong className="text-white">total customer satisfaction</strong> in quality,
              product reliability, and delivery through continual improvement and risk-based thinking.
            </p>
          </div>
        </div>
      </SectionShell>

      <PageCta />
    </>
  );
}
