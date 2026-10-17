export const WEBSITE_URL = 'https://www.flysan.co.il';

export const contactData = {
  email: 'info@flysan.co.il',
  phone: '972-55-507-5024+',
};

const phoneDigits = contactData.phone.replace(/[+-]/g, '');

export const displayPhone = `+${contactData.phone.replace('+', '')}`;

export const contactLinks = {
  tel: `tel:+${phoneDigits}`,
  whatsapp: `https://wa.me/${phoneDigits}`,
  mail: `mailto:${contactData.email}`,
};
