import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import styles from './Section.module.css';

interface SectionProps {
  id: string;
  heading: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, heading, subtitle, children, className }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <motion.section
      id={id}
      aria-labelledby={headingId}
      className={`${styles.section} ${className ?? ''}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="container">
        <h2 id={headingId} className={styles.heading}>
          {heading}
        </h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
      </div>
    </motion.section>
  );
}
