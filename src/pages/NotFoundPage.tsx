import { useTranslation } from 'react-i18next';

import { Button } from '../components/ui/Button';
import { Seo } from '../components/ui/Seo';
import { siteConfig } from '../config/site';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  const { t } = useTranslation('common');

  return (
    <div className={`container ${styles.page}`}>
      <Seo
        title={`${t('notFound.title')} | ${siteConfig.name}`}
        description={t('notFound.description')}
        path="/404"
      />
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>{t('notFound.title')}</h1>
      <p className={styles.description}>{t('notFound.description')}</p>
      <Button href="/">{t('notFound.cta')}</Button>
    </div>
  );
}
