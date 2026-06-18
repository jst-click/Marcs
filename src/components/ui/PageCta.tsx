import { Link } from 'react-router-dom';
import { SectionShell } from './SectionShell';
import { stockImages } from '../../data/images';
import { getTelLink, getWhatsAppLink } from '../../lib/contactLinks';

export function PageCta() {
  return (
    <SectionShell bgImage={stockImages.warehouse} overlay="green" className="py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Ready to Start Your Project?
        </h2>
        <p className="mt-4 text-blue-100 text-lg">
          Get a tailored coating solution — send your inquiry via WhatsApp or request a formal quote.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-marcs-green shadow-lg hover:bg-marcs-yellow hover:text-marcs-dark transition-colors"
          >
            Request a Quote
          </Link>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
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
  );
}
