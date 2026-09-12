import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { siteConfig } from '../../../config/site';
import type { SupportedLanguage } from '../../../i18n/i18n';
import { Button } from '../../ui/Button';
import styles from './Hero.module.css';

export function Hero() {
  const { t, i18n } = useTranslation(['home', 'common']);
  const lang = i18n.language as SupportedLanguage;
  const cvHref = siteConfig.cv[lang] ?? siteConfig.cv.en;

  return (
    <motion.section
      className={`container ${styles.hero}`}
      aria-labelledby="hero-heading"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <p className={styles.eyebrow}>{t('hero.eyebrow')}</p>
      <h1 id="hero-heading" className={styles.name}>
        Mariano Vergara
      </h1>
      <p className={styles.tagline}>{t('hero.tagline')}</p>
      <p className={styles.description}>{t('hero.description')}</p>
      <div className={styles.actions}>
        <Button href="#projects">{t('hero.ctaPrimary')}</Button>
        <Button href="#contact" variant="secondary">
          {t('hero.ctaSecondary')}
        </Button>
        <Button href={cvHref} variant="secondary" download>
          {t('common:buttons.downloadCv')}
        </Button>
      </div>
    </motion.section>
  );
}
