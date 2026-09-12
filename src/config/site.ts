// Single source of truth for identity/contact strings reused across Seo, Footer, Contact and JSON-LD.
// TODO: replace the placeholder domain/GitHub/LinkedIn with your real ones before deploying.
export const siteConfig = {
  name: 'Mariano Vergara',
  email: 'mariano.vergara@est.fi.uncoma.edu.ar',
  domain: 'https://marianovergara.dev', // TODO: replace with the real deployed domain
  github: 'https://github.com/TODO-your-github-username',
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
