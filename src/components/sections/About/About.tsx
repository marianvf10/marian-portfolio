import { useTranslation } from 'react-i18next';

import { Section } from '../../ui/Section';
import styles from './About.module.css';

export function About() {
  const { t } = useTranslation('home');
  const paragraphs = t('about.paragraphs', { returnObjects: true }) as string[];

  return (
    <Section id="about" heading={t('about.heading')}>
      <div className={styles.paragraphs}>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
