import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { siteConfig } from '../../config/site';
import styles from './WhatsAppButton.module.css';

export function WhatsAppButton() {
  const { t } = useTranslation('common');
  const href = `https://wa.me/${siteConfig.whatsapp.phone}?text=${encodeURIComponent(t('whatsapp.message'))}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label={t('whatsapp.ariaLabel')}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut', delay: 0.4 }}
    >
      <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.62 15.06L2 22l5.06-1.33A10 10 0 1 0 12 2Zm0 18.2a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-3.1.82.83-3.02-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.49-6.13c-.24-.12-1.44-.71-1.67-.8-.22-.08-.38-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.28.18-.53.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.2-1.44-1.35-1.68-.14-.24-.02-.37.11-.5.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </motion.a>
  );
}
