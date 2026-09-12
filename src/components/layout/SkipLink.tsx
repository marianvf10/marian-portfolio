import { useTranslation } from 'react-i18next';

export function SkipLink() {
  const { t } = useTranslation('common');
  return (
    <a href="#main-content" className="skip-link">
      {t('skipToContent')}
    </a>
  );
}
