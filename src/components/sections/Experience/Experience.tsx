import { useTranslation } from 'react-i18next';

import { Section } from '../../ui/Section';
import styles from './Experience.module.css';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export function Experience() {
  const { t } = useTranslation('home');
  const items = t('experience.items', { returnObjects: true }) as ExperienceItem[];

  return (
    <Section id="experience" heading={t('experience.heading')}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            <div className={styles.itemHeader}>
              <span className={styles.role}>
                {item.role} · <span className={styles.company}>{item.company}</span>
              </span>
              <span className={styles.period}>{item.period}</span>
            </div>
            <p className={styles.description}>{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
