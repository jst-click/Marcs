export type FacilityPhoto = {
  src: string;
  title: string;
  caption: string;
  category: 'Facility' | 'Process' | 'Quality';
};

export const facilityPhotos: FacilityPhoto[] = [
  {
    src: '/facility/facility-incoming-to-booth.png',
    title: 'Powder Coating Facility',
    caption:
      'Incoming inspection, parts storage, pretreatment, masking, loading, and powder coating booth areas.',
    category: 'Facility',
  },
  {
    src: '/facility/facility-loading-coating.png',
    title: 'New Facility — Loading & Coating',
    caption: 'PC loading on conveyor and powder coating application in the new facility.',
    category: 'Facility',
  },
  {
    src: '/facility/facility-curing-dispatch.png',
    title: 'Curing to Dispatch',
    caption:
      'Curing oven, part unloading, de-masking, final inspection, packing, and finished goods areas.',
    category: 'Facility',
  },
  {
    src: '/facility/process-flow-inspection-pretreatment.png',
    title: 'Process Flow',
    caption: 'Inward inspection and pretreatment process stages.',
    category: 'Process',
  },
  {
    src: '/facility/quality-control-instruments.png',
    title: 'Quality Control Instruments',
    caption:
      'Coating thickness gauge, gloss meter, colour spectrometer, mandrel bend, impact, and pencil hardness testers.',
    category: 'Quality',
  },
  {
    src: '/facility/quality-titration-pretreatment.png',
    title: 'Pretreatment Titration Lab',
    caption: 'Titration and monitoring for pretreatment process quality control.',
    category: 'Quality',
  },
];

export const facilityPhotosByCategory = {
  Facility: facilityPhotos.filter((photo) => photo.category === 'Facility'),
  Process: facilityPhotos.filter((photo) => photo.category === 'Process'),
  Quality: facilityPhotos.filter((photo) => photo.category === 'Quality'),
} as const;

export const futureVisionPhoto = facilityPhotos[1];

export const aboutFacilityPhoto = facilityPhotos[0];
