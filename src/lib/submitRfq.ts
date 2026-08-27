import { contacts } from '../data/content';
import { primaryEmail } from './contactLinks';

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

export function buildRfqEmailBody(data: RfqFormData): string {
  return [
    'RFQ — Marcs Engineering',
    '',
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Base Material: ${data.material}`,
    `Quantity: ${data.quantity || 'Not specified'}`,
    `Coating / Color: ${data.coating || 'Not specified'}`,
    '',
    'Project Details:',
    data.message,
  ].join('\n');
}

export function getRfqMailtoLink(data: RfqFormData): string {
  const subject = `RFQ from ${data.name} — ${data.company}`;
  const body = buildRfqEmailBody(data);
  const cc = contacts.map((c) => c.email).join(',');
  const params = new URLSearchParams({
    subject,
    body,
    cc,
  });
  return `mailto:${primaryEmail}?${params.toString()}`;
}

/** Frontend-only: opens the visitor's email client with a pre-filled RFQ. */
export function redirectRfqToEmail(data: RfqFormData): void {
  window.location.href = getRfqMailtoLink(data);
}
