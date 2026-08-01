import {
  about,
  clientNames,
  company,
  contacts,
  industries,
  machinery,
  powderTypes,
  processSteps,
  services,
  strengths,
} from '../data/content';

export type SearchResult = {
  title: string;
  description?: string;
  to: string;
  category: string;
};

const searchIndex: SearchResult[] = [
  { title: 'Home', description: company.tagline, to: '/', category: 'Pages' },
  {
    title: 'About Us',
    description: about.headline,
    to: '/about',
    category: 'Pages',
  },
  {
    title: 'Services',
    description: 'Comprehensive surface finishing solutions',
    to: '/services',
    category: 'Pages',
  },
  {
    title: 'Contact & RFQ',
    description: 'Request a quote, phone numbers & location',
    to: '/contact',
    category: 'Pages',
  },
  { title: 'Request a Quote', description: 'Submit an RFQ via WhatsApp', to: '/contact', category: 'Actions' },
  ...services.map((s) => ({
    title: s.title,
    description: s.description,
    to: '/services',
    category: 'Services',
  })),
  ...machinery.map((m) => ({
    title: m.name,
    description: `${m.count} · ${m.capacity}`,
    to: '/services',
    category: 'Machinery',
  })),
  ...powderTypes.map((p) => ({
    title: p,
    to: '/services',
    category: 'Powder Coating',
  })),
  ...processSteps.map((step) => ({
    title: step,
    to: '/services',
    category: 'Process',
  })),
  ...industries.map((i) => ({
    title: i,
    to: '/',
    category: 'Industries',
  })),
  ...strengths.map((s) => ({
    title: s,
    to: '/',
    category: 'Why MARCS',
  })),
  ...clientNames.map((c) => ({
    title: c,
    description: 'Trusted client',
    to: '/about',
    category: 'Clients',
  })),
  ...contacts.map((c) => ({
    title: c.name,
    description: `${c.title} · ${c.phone}`,
    to: '/contact',
    category: 'Contact',
  })),
  {
    title: 'About MARCS',
    description: about.intro,
    to: '/about',
    category: 'Company',
  },
  {
    title: 'Our Vision',
    description: about.vision,
    to: '/about',
    category: 'Company',
  },
  {
    title: company.location,
    description: 'Factory location',
    to: '/contact',
    category: 'Location',
  },
];

export function searchSite(query: string, limit = 8): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return searchIndex
    .map((item) => {
      const haystack = [item.title, item.description, item.category].filter(Boolean).join(' ').toLowerCase();
      const idx = haystack.indexOf(q);
      if (idx === -1) return null;
      return { item, idx, titleStarts: item.title.toLowerCase().startsWith(q) };
    })
    .filter((r): r is NonNullable<typeof r> => r !== null)
    .sort((a, b) => {
      if (a.titleStarts !== b.titleStarts) return a.titleStarts ? -1 : 1;
      return a.idx - b.idx;
    })
    .slice(0, limit)
    .map((r) => r.item);
}
