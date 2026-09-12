import { useTranslation } from 'react-i18next';

import { Section } from '../../ui/Section';
import styles from './Education.module.css';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export function Education() {
  const { t } = useTranslation('home');
  const items = t('education.items', { returnObjects: true }) as EducationItem[];

  return (
    <Section id="education" heading={t('education.heading')}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.degree}>{item.degree}</span>
            <span> · </span>
            <span className={styles.institution}>{item.institution}</span>
            <span className={styles.period}>{item.period}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
