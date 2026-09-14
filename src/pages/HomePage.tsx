import { useTranslation } from 'react-i18next';

import { About } from '../components/sections/About/About';
import { Certifications } from '../components/sections/Certifications/Certifications';
import { Contact } from '../components/sections/Contact/Contact';
import { Education } from '../components/sections/Education/Education';
import { Experience } from '../components/sections/Experience/Experience';
import { FeaturedProjects } from '../components/sections/FeaturedProjects/FeaturedProjects';
import { Hero } from '../components/sections/Hero/Hero';
import { Skills } from '../components/sections/Skills/Skills';
import { Seo } from '../components/ui/Seo';
import { siteConfig } from '../config/site';

export function HomePage() {
  const { t } = useTranslation(['common', 'home']);

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    email: siteConfig.email,
    url: siteConfig.domain,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    jobTitle: 'Software Developer',
  };

  return (
    <>
      <Seo
        title={`${siteConfig.name} — ${t('common:meta.role')}`}
        description={t('common:meta.defaultDescription')}
        path="/"
        jsonLd={personJsonLd}
      />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}
