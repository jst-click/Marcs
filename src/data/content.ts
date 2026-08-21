export const company = {
  name: 'MARCS Engineering Pvt. Ltd.',
  tagline: 'Advanced Powder Coating & Surface Finishing Solutions',
  subtitle: '25+ Years of Industrial Excellence | ISO 9001:2015 Certified',
  location: 'Nelamangala, Bangalore, Karnataka, India',
  founded: 1997,
  capacity: '39,600 Sq. Ft. daily',
  profileLength: '3 meters',
};

export const home = {
  headline: 'Premium Powder Coating Solutions for Industrial Excellence',
  tagline: 'Durable. Reliable. Precision Finished.',
  welcome:
    "Welcome to Marcs Engineering Pvt Ltd, one of Bangalore's leading industrial powder coating and surface finishing service providers, delivering high-quality coating solutions since 1997. Located in Nelamangala, Bangalore, we specialize in providing durable, corrosion-resistant, and aesthetically superior surface finishing services for a wide range of industrial applications.",
  commitments: [
    'Superior Surface Finishing',
    'Advanced Powder Coating Technology',
    'On-Time Delivery',
    'Customer-Focused Solutions',
    'Consistent Quality Standards',
  ],
};

export const about = {
  headline: 'Building Quality Through Innovation',
  intro:
    'Founded with a vision to deliver world-class surface finishing solutions, Marcs Engineering Pvt Ltd has become a reliable partner for customers across multiple industries. Our expertise in powder coating, modern infrastructure, and commitment to continuous improvement enable us to consistently exceed customer expectations.',
  description:
    'Founded in 1997, MARCS Engineering Pvt. Ltd. has established itself as a trusted partner for powder coating and surface treatment solutions across various industries. Our state-of-the-art facility is equipped with advanced pretreatment systems, automated powder coating plants, and controlled curing ovens that ensure consistent quality and long-lasting performance.',
  certification:
    'As an ISO 9001:2015 certified company, we follow stringent quality standards and industry best practices to deliver superior coating solutions that meet customer expectations and international quality requirements.',
  experience:
    'With over 25 years of experience, advanced infrastructure, automated coating systems, and a highly skilled technical team, we are committed to delivering exceptional quality, reliability, and customer satisfaction for every project.',
  vision:
    'To be a leading powder coating company recognized for quality, innovation, and customer satisfaction.',
  mission: [
    'Deliver Superior powder coating services.',
    'Maintain the highest quality standards.',
    'Build long-term customer relationships.',
  ],
};

export const contacts = [
  {
    name: 'Mr. Shivamurty K P',
    title: 'Chief Executive Officer',
    phone: '+91 94482 86464',
    email: 'sm.marcs@gmail.com',
  },
  {
    name: 'Mr. Haricharan M P',
    title: 'Managing Director',
    phone: '+91 98450 44145',
    email: 'charannph@gmail.com',
  },
];

/** Mailed facility photos — served from /images/Photo for website */
const PHOTO_DIR = '/images/Photo%20for%20website';
const servicePhoto = (file: string) => `${PHOTO_DIR}/${encodeURIComponent(file)}`;

export const serviceGallery = [
  { src: servicePhoto('PC-1.JPG'), alt: 'Powder coating booth' },
  { src: servicePhoto('PC-2.JPG'), alt: 'Automated powder coating in progress' },
  { src: servicePhoto('PC-3.JPG'), alt: 'Technicians applying powder coating' },
  { src: servicePhoto('PT Line -1.JPG'), alt: 'Surface pretreatment line' },
  { src: servicePhoto('pt-2.JPG'), alt: 'Pretreatment process tanks' },
  { src: servicePhoto('PT-3.JPG'), alt: 'Pretreatment facility' },
  { src: servicePhoto('UN-1.JPG'), alt: 'Coated industrial components' },
  { src: servicePhoto('LAB-1.JPG'), alt: 'Quality laboratory testing' },
  { src: servicePhoto('LAB-2.JPG'), alt: 'Quality inspection and titration' },
  { src: servicePhoto('c6.webp'), alt: 'Custom colour finish' },
  { src: servicePhoto('pc pic.webp'), alt: 'Powder coating finish detail' },
  { src: servicePhoto('images-34-500x500.webp'), alt: 'Colour powder coating application' },
];

export const services = [
  {
    title: 'Powder Coating',
    description:
      'High-performance powder coating with excellent durability, corrosion resistance, and an attractive finish.',
    image: servicePhoto('PC-3.JPG'),
  },
  {
    title: 'Surface Pretreatment',
    description:
      'Advanced cleaning and pretreatment processes to ensure maximum coating adhesion and long-lasting performance.',
    image: servicePhoto('PT Line -1.JPG'),
  },
  {
    title: 'Industrial Component Coating',
    description:
      'Protective coating solutions for fabricated components, sheet metal parts, and industrial equipment.',
    image: servicePhoto('UN-1.JPG'),
  },
  {
    title: 'Custom Colour Finishing',
    description: 'Wide range of colours and textures as per customer specifications.',
    image: servicePhoto('images-34-500x500.webp'),
  },
  {
    title: 'Quality Inspection',
    description:
      'Comprehensive inspection and testing to ensure every product meets quality requirements.',
    image: servicePhoto('LAB-1.JPG'),
  },
  {
    title: 'Packaging & Dispatch',
    description:
      'Safe packaging and timely delivery to maintain product quality throughout transportation.',
    image: servicePhoto('PC-2.JPG'),
  },
];

export const powderTypes = [
  'Epoxy Powder Coating',
  'Polyester Powder Coating',
  'Epoxy-Polyester Hybrid Coating',
  'Polyurethane Powder Coating',
  'Special Application Coatings',
  'Custom Color & Texture Finishes',
];

export const machinery = [
  {
    name: 'Conveyorized Powder Coating Plants',
    count: '3 modern lines',
    capacity: '39,600 sq. ft. daily combined',
    specs: 'Automated powder feeding, recovery & twin cyclone technology',
  },
  {
    name: 'Curing Systems',
    count: 'Multiple ovens',
    capacity: 'Ground-mounted for heavy/oversized parts',
    specs: 'Batch ovens for controlled production runs',
  },
  {
    name: 'Pretreatment System',
    count: '9-tank line',
    capacity: 'Mild steel & specialized GI/aluminum processes',
    specs: 'Degreasing, phosphating, chromatizing & Galva Grip',
  },
  {
    name: 'Profile Coating Line',
    count: 'Dedicated color lines',
    capacity: 'Profiles up to 3 meters in length',
    specs: 'Faster delivery schedules for long components',
  },
  {
    name: 'Quality Testing Laboratory',
    count: 'Full in-house lab',
    capacity: 'DFT, adhesion, MEK, impact & hardness testing',
    specs: 'Thickness gauge, gloss meter, color spectrometer & more',
  },
  {
    name: 'Powder Management',
    count: 'Automated system',
    capacity: 'Multi-line production support',
    specs: 'Automatic feeding, recovery & color change efficiency',
  },
];

export const processSteps = [
  'Customer Enquiry',
  'Quotation Submission',
  'Purchase Order Review',
  'Incoming Material Inspection',
  'Storage & Handling',
  'Cleaning & Surface Preparation',
  'Jigging',
  'Pretreatment Process',
  'Drying & Preheating',
  'Masking (If Required)',
  'In-Process Inspection',
  'Powder Coating',
  'Curing',
  'Final Inspection',
  'Packing & Dispatch',
];

export const industries = [
  'Medical Equipment & Appliances',
  'Automotive Components',
  'Electrical Panels',
  'Industrial Equipment',
  'Fabrication Components',
  'Engineering Products',
  'Metal Structures',
  'Heavy Industrial Applications',
];

export const strengths = [
  '25+ years of powder coating experience',
  'ISO 9001:2015 Quality management system',
  'Skilled technical team',
  'Advanced equipment & process control',
  'Consistent quality and durable finishes',
  'Competitive pricing',
  'On-time delivery',
];

export const advantages = [
  {
    title: 'Fast Turnaround Time',
    description: 'Efficient process ensuring on-time delivery.',
  },
  {
    title: 'Cost Efficiency',
    description: 'Optimized operations to deliver maximum value.',
  },
  {
    title: 'Consistent Quality',
    description: 'Strict quality control for uniform coating results.',
  },
  {
    title: 'Customized Colour & Finish Options',
    description: 'Wide range of colors, textures, and specifications.',
  },
];

export const qualityPillars = [
  'Stringent raw material inspection',
  'Rigorous pretreatment',
  'Process control',
  'Adherence to standards',
  'Environmentally friendly solutions',
];

export const qualityTests = [
  'Visual inspection',
  'Film thickness test (DFT)',
  'Crosshatch adhesion test',
  'Solvent cure test (MEK rub)',
  'Impact resistance testing',
  'Hardness testing',
  'Gloss measurement',
  'Color consistency analysis',
];

export const testingEquipment = [
  'Coating Thickness Gauge',
  'Gloss Meter',
  'Colour Spectrometer',
  'Conical Mandrel Bend Tester',
  'Impact Tester',
  'Pencil Hardness Tester',
];

export const facilityHighlights = [
  'Three modern conveyorized powder coating plants',
  'Advanced automated powder management system',
  'Automatic powder feeding and recovery systems',
  'Twin cyclone technology for enhanced efficiency',
  'Ground-mounted oven for heavy and oversized components',
  'Batch ovens for controlled production runs',
  'Sophisticated quality testing laboratory',
  'Facility to coat profiles up to 3 meters in length',
  'Dedicated color coating lines for faster delivery',
];

export const clients = [
  { name: 'GE HealthCare', logo: '/clients/ge-healthcare.png' },
  { name: 'Schneider Electric', logo: '/clients/schneider-electric.png' },
  { name: 'ABB', logo: '/clients/abb.png' },
  { name: 'Vertiv', logo: '/clients/vertiv.png' },
  { name: 'Lam Research', logo: '/clients/lam-research.png' },
  { name: 'CYIENT', logo: '/clients/cyient.png' },
  { name: 'INCAP', logo: '/clients/incap.png' },
  { name: 'INDIC EMS', logo: '/clients/indic-ems.svg' },
  { name: 'Amitec', logo: '/clients/amitec.png' },
  { name: 'C-MAX Metal India', logo: '/clients/c-max-metal-india.png' },
  { name: 'Unique Punch Systems', logo: '/clients/unique-punch-systems.png' },
  { name: 'APPL', logo: '/clients/appl.png' },
  { name: 'Succinnova', logo: '/clients/succinnova.png' },
  { name: 'Phantom Hands', logo: '/clients/phantom-hands.png' },
];

/** @deprecated use `clients` */
export const clientNames = clients.map((c) => c.name);

export const caseStudies = [
  {
    title: 'Medical Equipment Enclosures',
    industry: 'Medical Appliances',
    challenge:
      'Achieving uniform high-gloss finish on complex aluminum enclosures with strict adhesion and thickness tolerances.',
    solution:
      'Chromatizing pretreatment combined with controlled conveyor coating and multi-point DFT verification.',
    outcome: 'Consistent aesthetic finish with verified corrosion resistance for healthcare environments.',
  },
  {
    title: 'Electrical Panel Assemblies',
    industry: 'Electrical Panels',
    challenge:
      'Large fabricated mild steel panels requiring durable corrosion protection and fast turnaround.',
    solution:
      '9-tank degreasing & phosphating, automated powder recovery, and batch oven curing for oversized parts.',
    outcome: 'Reliable long-term protection with on-schedule delivery for panel OEM production runs.',
  },
  {
    title: 'Automotive Fabrication Components',
    industry: 'Automotive Components',
    challenge:
      'Mixed-material batches with varying surface conditions and custom color specifications.',
    solution:
      'Dedicated jigging, masking protocols, and color-line scheduling with in-process inspection gates.',
    outcome: 'Uniform coating performance across complex geometries with reduced rework.',
  },
  {
    title: 'Industrial Equipment Structures',
    industry: 'Metal Structures',
    challenge:
      'Heavy oversized structures needing ground-mounted curing and impact-resistant finishes.',
    solution:
      'Ground-mounted oven processing with impact and mandrel bend testing per customer spec.',
    outcome: 'Durable finishes validated for heavy-duty industrial deployment.',
  },
];

export const sustainability = [
  {
    title: 'Eco-friendly Operations',
    description: 'Environmentally responsible coating processes.',
  },
  {
    title: 'Effective Waste Management',
    description: 'Proper handling and disposal as per standards.',
  },
  {
    title: 'Worker Safety Measures',
    description: 'Safe working environment with trained personnel.',
  },
];

export const futureVision = [
  'Strategic expansion of powder coating production capacity',
  'Planned in-house plating facility',
  'Focus on long-term customer partnerships',
  'Commitment to quality, reliability, and customer satisfaction',
];

export const logistics = {
  address: 'MARCS Engineering Pvt. Ltd., Nelamangala, Bangalore, Karnataka, India',
  dockHours: 'Monday – Saturday: 9:00 AM – 6:00 PM',
  receiving: 'Loading dock available for freight and bulk material delivery',
  mapQuery: 'Nelamangala, Bangalore, Karnataka, India',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d77.4!3d13.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6f8c8c8c8c8d%3A0x0!2sNelamangala%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
};
