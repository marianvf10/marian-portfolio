import styles from './ImagePlaceholder.module.css';

interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

// Reserves the final image's aspect ratio to avoid layout shift once real screenshots are added.
export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div className={`${styles.placeholder} ${className ?? ''}`} role="img" aria-label={label}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 16l-5.5-5.5a2 2 0 0 0-2.8 0L3 20" />
      </svg>
    </div>
  );
}
