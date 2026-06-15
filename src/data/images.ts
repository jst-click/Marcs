/** Local stock images (bundled in /public/stock for reliable loading) */
const local = (file: string) => `/stock/${file}`;

export const stockImages = {
  powderCoating: local('hero.jpg'),
  factoryFloor: local('factory.jpg'),
  manufacturing: local('manufacturing.jpg'),
  metalWork: local('warehouse.jpg'),
  industrialPlant: local('warehouse.jpg'),
  warehouse: local('warehouse.jpg'),
  qualityLab: local('inspection.jpg'),
  inspection: local('inspection.jpg'),
  conveyor: local('manufacturing.jpg'),
  sustainability: local('manufacturing.jpg'),
  teamwork: local('factory.jpg'),
  engineering: local('inspection.jpg'),
} as const;

export const homeBackgrounds = {
  hero: stockImages.powderCoating,
  about: stockImages.factoryFloor,
  value: stockImages.manufacturing,
  services: stockImages.metalWork,
  trust: stockImages.qualityLab,
  strengths: stockImages.inspection,
  industries: stockImages.industrialPlant,
  cta: stockImages.conveyor,
} as const;

/** Used on Capabilities & Projects pages */
export const images = {
  facilityFloors: stockImages.factoryFloor,
  facilityPhotos: stockImages.warehouse,
  processFlow: stockImages.manufacturing,
  qualityLab: stockImages.qualityLab,
  manufacturing: stockImages.manufacturing,
  metalWork: stockImages.warehouse,
  sustainability: stockImages.manufacturing,
  visualProof1: stockImages.powderCoating,
  visualProof2: stockImages.factoryFloor,
  visualProof3: stockImages.warehouse,
} as const;
