import { Link } from 'react-router-dom';
import { company, contacts } from '../../data/content';
import {
  getTelLinkFromDisplayPhone,
  getWhatsAppLinkFromDisplayPhone,
} from '../../lib/contactLinks';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-marcs-dark text-blue-100/80 border-t border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Logo className="mb-4" />
            <p className="text-sm leading-relaxed">{company.tagline}</p>
            <p className="mt-2 text-sm text-slate-400">{company.subtitle}</p>
            <p className="mt-4 text-sm">📍 {company.location}</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-marcs-yellow transition-colors">Home</Link></li>
              <li><Link to="/capabilities" className="hover:text-marcs-yellow transition-colors">Capabilities & Services</Link></li>
              <li><Link to="/projects" className="hover:text-marcs-yellow transition-colors">Projects & Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-marcs-yellow transition-colors">Contact & RFQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-4 text-sm">
              {contacts.map((c) => (
                <div key={c.email}>
                  <p className="text-white font-medium">{c.name}</p>
                  <p className="text-slate-400">{c.title}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <a
                      href={getTelLinkFromDisplayPhone(c.phone)}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      📞 {c.phone}
                    </a>
                    <a
                      href={getWhatsAppLinkFromDisplayPhone(c.phone)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:text-[#20bd5a] transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                  <a href={`mailto:${c.email}`} className="text-pink-400 hover:text-pink-300">
                    ✉️ {c.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-900/40 text-center text-sm text-blue-200/60">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="mt-1 italic">
            &ldquo;Delivering Quality coating solutions with Precision &amp; Commitment&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
