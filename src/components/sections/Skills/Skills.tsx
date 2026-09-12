import { useTranslation } from 'react-i18next';

import { Section } from '../../ui/Section';
import { Tag } from '../../ui/Tag';
import { skillCategories, type SkillCategoryKey } from '../../../data/skills';
import styles from './Skills.module.css';

const CATEGORY_KEYS = Object.keys(skillCategories) as SkillCategoryKey[];

export function Skills() {
  const { t } = useTranslation('home');

  return (
    <Section id="skills" heading={t('skills.heading')}>
      <div className={styles.grid}>
        {CATEGORY_KEYS.map((key) => (
          <div key={key} className={styles.category}>
            <h3>{t(`skills.categories.${key}`)}</h3>
            <div className={styles.tagList}>
              {skillCategories[key].map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
