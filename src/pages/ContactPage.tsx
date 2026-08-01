import type { FormEvent } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SectionShell } from '../components/ui/SectionShell';
import { company, contacts, logistics } from '../data/content';
import { stockImages } from '../data/images';
import {
  getTelLink,
  getWhatsAppLink,
} from '../lib/contactLinks';
import { redirectRfqToWhatsApp } from '../lib/submitRfq';

export function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    redirectRfqToWhatsApp({
      name: fd.get('name') as string,
      company: fd.get('company') as string,
      email: fd.get('email') as string,
      phone: fd.get('phone') as string,
      material: fd.get('material') as string,
      quantity: (fd.get('quantity') as string) || '',
      coating: (fd.get('coating') as string) || '',
      message: fd.get('message') as string,
    });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact & RFQ"
        title="Request a Quote"
        subtitle="Fill in your project details — you'll be redirected to WhatsApp to send your inquiry directly to our team."
        bgImage={stockImages.powderCoating}
      >
        <a
          href={getWhatsAppLink('Hello MARCS Engineering, I would like to request a quote.')}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white hover:bg-[#20bd5a] transition-colors"
        >
          WhatsApp Us
        </a>
        <a
          href={getTelLink()}
          className="rounded-xl bg-marcs-green px-6 py-3 text-sm font-bold text-white hover:bg-marcs-teal transition-colors"
        >
          Call +91 94482 86464
        </a>
      </PageHero>

      {/* Quick contact strip */}
      <div className="bg-marcs-green border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-8 text-sm font-medium text-white/95">
          <span>📞 +91 94482 86464</span>
          <span>📞 +91 98450 44145</span>
          <span>📍 {company.location}</span>
          <span>✉️ sm.marcs@gmail.com</span>
        </div>
      </div>

      <section className="py-20 lg:py-28 bg-blue-50/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-marcs-green/5 rounded-full blur-3xl" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white border border-slate-200 shadow-xl p-6 sm:p-8">
                <SectionHeading
                  eyebrow="RFQ Form"
                  title="Project Inquiry"
                  subtitle="Submit opens WhatsApp with all your details pre-filled."
                />

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name *" id="name" name="name" required />
                    <Field label="Company Name *" id="company" name="company" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Email *" id="email" name="email" type="email" required />
                    <Field label="Phone / WhatsApp *" id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="material" className="block text-sm font-medium text-slate-700 mb-1">
                        Base Material *
                      </label>
                      <select id="material" name="material" required className={inputClass}>
                        <option value="">Select material</option>
                        <option value="Mild Steel">Mild Steel</option>
                        <option value="Galvanized Iron (GI)">Galvanized Iron (GI)</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Other / Mixed">Other / Mixed</option>
                      </select>
                    </div>
                    <Field label="Estimated Quantity" id="quantity" name="quantity" placeholder="e.g. 500 pcs" />
                  </div>
                  <Field label="Coating Type / Color Spec" id="coating" name="coating" placeholder="e.g. Polyester, RAL 7035" />
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Dimensions, tolerances, finish requirements, delivery timeline..."
                      className={`${inputClass} resize-y`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-10 py-3.5 text-base font-bold text-white shadow-lg hover:bg-[#20bd5a] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {contacts.map((c) => (
                <div
                  key={c.email}
                  className="rounded-2xl bg-gradient-to-br from-marcs-dark to-slate-900 text-white p-6 shadow-xl"
                >
                  <p className="font-bold text-lg">{c.name}</p>
                  <p className="text-sm text-slate-400">{c.title}</p>
                  <p className="text-sm text-slate-400 mt-3">{c.email}</p>
                </div>
              ))}

              <div className="rounded-2xl bg-marcs-green text-white p-6 shadow-lg border border-white/10">
                <h2 className="font-bold text-lg mb-4">Logistics</h2>
                <ul className="space-y-3 text-sm text-blue-100">
                  <li className="flex gap-2"><span>📍</span><span>{logistics.address}</span></li>
                  <li className="flex gap-2"><span>🕐</span><span>{logistics.dockHours}</span></li>
                  <li className="flex gap-2"><span>🚛</span><span>{logistics.receiving}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell bgImage={stockImages.factoryFloor} overlay="dark" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Location"
            title="Find Us on the Map"
            subtitle={`${company.location} — convenient for material delivery and dispatch.`}
            light
            align="center"
          />
          <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-video max-w-5xl mx-auto">
            <iframe
              title="MARCS Engineering location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(logistics.mapQuery)}&z=13&output=embed`}
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center mt-6">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(logistics.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-marcs-yellow font-semibold hover:underline text-sm"
            >
              Open in Google Maps →
            </a>
          </p>
        </div>
      </SectionShell>
    </>
  );
}

const inputClass =
  'w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-marcs-green focus:border-marcs-green outline-none bg-white';

function Field({
  label,
  id,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}
