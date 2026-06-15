import {
  about,
  caseStudies,
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
    title: 'Capabilities & Services',
    description: 'Machinery, process, powder types & quality',
    to: '/capabilities',
    category: 'Pages',
  },
  {
    title: 'Projects & Case Studies',
    description: 'Client work, sustainability & future vision',
    to: '/projects',
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
    to: '/capabilities',
    category: 'Services',
  })),
  ...machinery.map((m) => ({
    title: m.name,
    description: `${m.count} · ${m.capacity}`,
    to: '/capabilities',
    category: 'Machinery',
  })),
  ...powderTypes.map((p) => ({
    title: p,
    to: '/capabilities',
    category: 'Powder Coating',
  })),
  ...processSteps.map((step) => ({
    title: step,
    to: '/capabilities',
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
  ...caseStudies.map((c) => ({
    title: c.title,
    description: c.industry,
    to: '/projects',
    category: 'Case Studies',
  })),
  ...clientNames.map((c) => ({
    title: c,
    description: 'Trusted client',
    to: '/projects',
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
    to: '/',
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
