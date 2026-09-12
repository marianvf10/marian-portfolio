import type { ReactNode } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  download?: boolean;
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  download,
  ariaLabel,
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ');

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        download={download}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
