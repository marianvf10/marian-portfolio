import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { useActiveSection } from '../../hooks/useActiveSection';
import { useTheme } from '../../context/ThemeContext';
import type { SupportedLanguage } from '../../i18n/i18n';
import styles from './Header.module.css';

const SECTION_IDS = ['about', 'experience', 'skills', 'projects', 'education', 'contact'];

export function Header() {
  const { t, i18n } = useTranslation('common');
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const activeId = useActiveSection(isHome ? SECTION_IDS : []);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = SECTION_IDS.map((id) => ({
    id,
    label: t(`nav.${id}`),
    href: isHome ? `#${id}` : `/#${id}`,
  }));

  function changeLanguage(lng: SupportedLanguage) {
    void i18n.changeLanguage(lng);
  }

  // Closing the mobile panel's exit animation interrupts the browser's native anchor
  // scroll if both happen in the same tick, so the scroll is deferred a frame and driven
  // manually here instead of relying on the <a href="#id"> default navigation.
  function handleMobileNavClick(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    setMobileOpen(false);
    if (!isHome) return;

    event.preventDefault();
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
        document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' });
        window.history.replaceState(null, '', `#${id}`);
      });
    });
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} aria-label="Mariano Vergara — home">
          MV
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`${styles.navLink} ${activeId === item.id ? styles.navLinkActive : ''}`}
                  aria-current={activeId === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.themeToggle}
            aria-label={theme === 'dark' ? t('theme.toggleToLight') : t('theme.toggleToDark')}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <div className={styles.langGroup} role="group" aria-label={t('language.label')}>
            <button
              type="button"
              className={`${styles.langButton} ${i18n.language === 'en' ? styles.langButtonActive : ''}`}
              aria-pressed={i18n.language === 'en'}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={`${styles.langButton} ${i18n.language === 'es' ? styles.langButtonActive : ''}`}
              aria-pressed={i18n.language === 'es'}
              onClick={() => changeLanguage('es')}
            >
              ES
            </button>
          </div>

          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <svg className={styles.menuIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              {mobileOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            className={styles.mobilePanel}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <ul className={styles.mobileNavList}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={(event) => handleMobileNavClick(event, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
