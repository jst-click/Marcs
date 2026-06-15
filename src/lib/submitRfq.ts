import { getWhatsAppLink } from './contactLinks';

export type RfqFormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  material: string;
  quantity: string;
  coating: string;
  message: string;
};

export function buildRfqWhatsAppMessage(data: RfqFormData): string {
  return [
    '*RFQ — MARCS Engineering*',
    '',
    `*Name:* ${data.name}`,
    `*Company:* ${data.company}`,
    `*Email:* ${data.email}`,
    `*Phone:* ${data.phone}`,
    `*Base Material:* ${data.material}`,
    `*Quantity:* ${data.quantity || 'Not specified'}`,
    `*Coating / Color:* ${data.coating || 'Not specified'}`,
    '',
    '*Project Details:*',
    data.message,
  ].join('\n');
}

export function redirectRfqToWhatsApp(data: RfqFormData): void {
  const message = buildRfqWhatsAppMessage(data);
  window.location.href = getWhatsAppLink(message);
}
