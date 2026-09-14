// Single source of truth for identity/contact strings reused across Seo, Footer, Contact and JSON-LD.
export const siteConfig = {
  name: 'Mariano Vergara',
  email: 'marianovf19@outlook.com',
  domain: 'https://marianovergara.dev',
  github: 'https://github.com/marianvf10',
  linkedin: 'https://www.linkedin.com/in/marianovf/',
  cv: {
    en: '/cv/CV-Mariano-Vergara-EN.pdf',
    es: '/cv/CV-Mariano-Vergara-ES.pdf',
  },
  whatsapp: {
    // Digits only, no "+". Argentine mobiles need the "9" after the "54" country code for wa.me links.
    phone: '5492994284465',
  },
} as const;
