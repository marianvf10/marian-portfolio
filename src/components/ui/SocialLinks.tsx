import { useTranslation } from 'react-i18next';

import { siteConfig } from '../../config/site';
import styles from './SocialLinks.module.css';

export function SocialLinks() {
  const { t } = useTranslation('common');

  return (
    <ul className={styles.list}>
      <li>
        <a
          className={styles.link}
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('buttons.visitGithub')}
        >
          <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          className={styles.link}
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('buttons.visitLinkedin')}
        >
          <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5V21H3.2V8.75ZM9.7 8.75h3.36v1.68h.05c.47-.87 1.6-1.79 3.3-1.79 3.53 0 4.18 2.27 4.18 5.22V21h-3.5v-6.03c0-1.44-.03-3.28-2-3.28-2.02 0-2.33 1.55-2.33 3.17V21H9.7V8.75Z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          className={styles.link}
          href={`mailto:${siteConfig.email}`}
          aria-label={t('buttons.sendEmail')}
        >
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
          </svg>
        </a>
      </li>
    </ul>
  );
}
