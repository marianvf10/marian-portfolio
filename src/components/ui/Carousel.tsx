import { useState, type SyntheticEvent } from 'react';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';

import styles from './Carousel.module.css';

interface CarouselImage {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: CarouselImage[];
  previousLabel: string;
  nextLabel: string;
  goToLabel: (position: number) => string;
  counterLabel: (current: number, total: number) => string;
  className?: string;
}

const SWIPE_THRESHOLD = 50;
const DEFAULT_ASPECT_RATIO = 16 / 10;

export function Carousel({
  images,
  previousLabel,
  nextLabel,
  goToLabel,
  counterLabel,
  className,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  // Measured from the loaded image so the frame matches its real proportions
  // instead of forcing every screenshot into an assumed aspect ratio.
  const [aspectRatio, setAspectRatio] = useState(DEFAULT_ASPECT_RATIO);

  const total = images.length;

  if (total === 0) {
    return null;
  }

  function goTo(nextIndex: number) {
    setDirection(nextIndex > index ? 1 : -1);
    setIndex((nextIndex + total) % total);
  }

  function handlePanEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      goTo(index + 1);
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      goTo(index - 1);
    }
  }

  function handleImageLoad(event: SyntheticEvent<HTMLImageElement>) {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    if (naturalWidth > 0 && naturalHeight > 0) {
      setAspectRatio(naturalWidth / naturalHeight);
    }
  }

  return (
    <div className={`${styles.wrapper} ${className ?? ''}`}>
      <motion.div
        className={styles.viewport}
        style={{ aspectRatio }}
        onPanEnd={handlePanEnd}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={index}
            src={images[index].src}
            alt={images[index].alt}
            className={styles.image}
            onLoad={handleImageLoad}
            initial={{ opacity: 0, x: direction > 0 ? 32 : -32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -32 : 32 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          />
        </AnimatePresence>

        {total > 1 && (
          <>
            <button
              type="button"
              className={`${styles.nav} ${styles.navPrev}`}
              onClick={() => goTo(index - 1)}
              aria-label={previousLabel}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              className={`${styles.nav} ${styles.navNext}`}
              onClick={() => goTo(index + 1)}
              aria-label={nextLabel}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </>
        )}
      </motion.div>

      {total > 1 && (
        <div className={styles.footer}>
          <div className={styles.dots}>
            {images.map((image, position) => (
              <button
                key={image.src}
                type="button"
                className={`${styles.dot} ${position === index ? styles.dotActive : ''}`}
                onClick={() => goTo(position)}
                aria-label={goToLabel(position + 1)}
                aria-current={position === index}
              />
            ))}
          </div>
          <span className={styles.counter} aria-live="polite">
            {counterLabel(index + 1, total)}
          </span>
        </div>
      )}
    </div>
  );
}
