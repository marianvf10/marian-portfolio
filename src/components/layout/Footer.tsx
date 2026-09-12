import { useTranslation } from 'react-i18next';

import { SocialLinks } from '../ui/SocialLinks';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useTranslation('common');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.rights}>{t('footer.rights', { year })}</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
