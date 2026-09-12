import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

import { useIsAtBottom } from '../../hooks/useIsAtBottom';
import styles from './BackToTopButton.module.css';

export function BackToTopButton() {
  const { t } = useTranslation('common');
  const isAtBottom = useIsAtBottom();

  function scrollToTop() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.button
          type="button"
          className={styles.button}
          aria-label={t('buttons.backToTop')}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
