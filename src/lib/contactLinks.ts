export const primaryEmail = 'info.marcsengg@gmail.com';

export const primaryPhone = {
  display: '+91 94482 86464',
  tel: '+919448286464',
  whatsapp: '919448286464',
};

export const secondaryPhone = {
  display: '+91 98450 44145',
  tel: '+919845044145',
  whatsapp: '919845044145',
};

const defaultWhatsAppMessage =
  'Hello MARCS Engineering, I would like to inquire about your powder coating services.';

export function getMailtoLink(email = primaryEmail) {
  return `mailto:${email}`;
}

export function getTelLink(phone = primaryPhone) {
  return `tel:${phone.tel}`;
}

export function getWhatsAppLink(
  message = defaultWhatsAppMessage,
  phone = primaryPhone,
) {
  return `https://wa.me/${phone.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppLinkFromDisplayPhone(
  displayPhone: string,
  message = defaultWhatsAppMessage,
) {
  const digits = displayPhone.replace(/[^\d]/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function getTelLinkFromDisplayPhone(displayPhone: string) {
  return `tel:${displayPhone.replace(/\s/g, '')}`;
}
