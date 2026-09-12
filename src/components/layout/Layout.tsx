import { Outlet } from 'react-router-dom';

import { BackToTopButton } from '../ui/BackToTopButton';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { Footer } from './Footer';
import { Header } from './Header';
import { SkipLink } from './SkipLink';

export function Layout() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </>
  );
}
