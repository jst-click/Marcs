import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { serviceGallery, services } from '../data/content';

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Comprehensive Surface Finishing Solutions"
        subtitle="End-to-end powder coating and surface finishing — from pretreatment and coating to inspection, packaging, and dispatch."
        bgImage={serviceGallery[0].src}
      >
        <Link
          to="/contact"
          className="rounded-xl bg-marcs-orange px-6 py-3 text-sm font-bold text-white hover:bg-marcs-yellow hover:text-marcs-dark transition-colors"
        >
          Request a Quote →
        </Link>
      </PageHero>

      <section className="py-20 lg:py-28 bg-blue-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Core Services"
            subtitle="Quality-driven processes backed by modern infrastructure and rigorous inspection."
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-marcs-green/30 transition-all"
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
                  <h3 className="font-bold text-slate-900 text-lg">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
