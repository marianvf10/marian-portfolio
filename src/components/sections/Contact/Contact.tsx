import { useTranslation } from 'react-i18next';

import { siteConfig } from '../../../config/site';
import type { SupportedLanguage } from '../../../i18n/i18n';
import { Button } from '../../ui/Button';
import { Section } from '../../ui/Section';
import { SocialLinks } from '../../ui/SocialLinks';
import styles from './Contact.module.css';

export function Contact() {
  const { t, i18n } = useTranslation(['home', 'common']);
  const lang = i18n.language as SupportedLanguage;
  const cvHref = siteConfig.cv[lang] ?? siteConfig.cv.en;

  return (
    <Section id="contact" heading={t('home:contact.heading')} subtitle={t('home:contact.subtitle')}>
      <div className={styles.actions}>
        <Button href={`mailto:${siteConfig.email}`}>{t('common:buttons.contactMe')}</Button>
        <Button href={cvHref} variant="secondary" download>
          {t('common:buttons.downloadCv')}
        </Button>
      </div>
      <SocialLinks />
    </Section>
  );
}
