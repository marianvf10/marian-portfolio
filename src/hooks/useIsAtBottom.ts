import { useEffect, useState } from 'react';

const BOTTOM_THRESHOLD_PX = 24;

// Tracks whether the user has scrolled to the end of the page (within a small threshold).
export function useIsAtBottom(): boolean {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    let ticking = false;

    function checkPosition() {
      const scrollBottom = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      setIsAtBottom(scrollBottom >= pageHeight - BOTTOM_THRESHOLD_PX);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(checkPosition);
      }
    }

    checkPosition();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return isAtBottom;
}
