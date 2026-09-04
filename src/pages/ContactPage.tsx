import type { FormEvent } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SectionShell } from '../components/ui/SectionShell';
import { company, contacts, logistics, serviceGallery } from '../data/content';
import {
  getMailtoLink,
  getTelLink,
  getTelLinkFromDisplayPhone,
  primaryEmail,
  primaryPhone,
} from '../lib/contactLinks';
import { redirectRfqToEmail } from '../lib/submitRfq';

export function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    redirectRfqToEmail({
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
        subtitle="Fill in your project details — your email app will open with the inquiry ready to send to our team."
        bgImage={serviceGallery[2].src}
      >
        <a
          href={getMailtoLink()}
          className="rounded-xl bg-marcs-orange px-6 py-3 text-sm font-bold text-white hover:bg-marcs-yellow hover:text-marcs-dark transition-colors"
        >
          Email Us
        </a>
        <a
          href={getTelLink()}
          className="rounded-xl bg-marcs-green px-6 py-3 text-sm font-bold text-white hover:bg-marcs-teal transition-colors"
        >
          Call {primaryPhone.display}
        </a>
      </PageHero>

      {/* Quick contact strip */}
      <div className="bg-marcs-green border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-8 text-sm font-medium text-white/95">
          {contacts.map((c) => (
            <a key={c.phone} href={getTelLinkFromDisplayPhone(c.phone)} className="hover:text-marcs-yellow transition-colors">
              📞 {c.phone}
            </a>
          ))}
          <span>📍 {company.location}</span>
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
                  subtitle={`Submit opens your email app with details pre-filled to ${primaryEmail}.`}
                />

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name *" id="name" name="name" required />
                    <Field label="Company Name *" id="company" name="company" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Email *" id="email" name="email" type="email" required />
                    <Field label="Phone *" id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
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
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-marcs-green px-10 py-3.5 text-base font-bold text-white shadow-lg hover:bg-marcs-teal transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Send via Email
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {contacts.map((c) => (
                <div
                  key={c.phone}
                  className="rounded-2xl bg-gradient-to-br from-marcs-dark to-slate-900 text-white p-6 shadow-xl"
                >
                  <p className="font-bold text-lg">{c.name}</p>
                  <p className="text-sm text-slate-400">{c.title}</p>
                  <a
                    href={getTelLinkFromDisplayPhone(c.phone)}
                    className="inline-block mt-3 text-sm font-semibold text-marcs-yellow hover:underline"
                  >
                    📞 {c.phone}
                  </a>
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

      <SectionShell bgImage={serviceGallery[0].src} overlay="dark" className="py-20">
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
              title="Marcs Engineering location"
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
