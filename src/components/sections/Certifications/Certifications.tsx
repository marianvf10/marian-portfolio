import { useTranslation } from 'react-i18next';

import { Section } from '../../ui/Section';
import { certifications } from '../../../data/certifications';
import styles from './Certifications.module.css';

export function Certifications() {
  const { t } = useTranslation('home');

  if (certifications.length === 0) return null;

  return (
    <Section id="certifications" heading={t('certifications.heading')}>
      <ul className={styles.list}>
        {certifications.map((cert) => (
          <li key={cert.name} className={styles.item}>
            <p className={styles.name}>{cert.name}</p>
            <p className={styles.meta}>
              {cert.issuer} · {cert.year}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
