'use client';

import { usePathname } from 'next/navigation';
import type { Contact } from '../lib/sanity';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { WhatsAppButton } from './WhatsAppButton';

export function SiteChrome({ children, contact }: { children: React.ReactNode; contact: Contact }) {
  const pathname = usePathname();

  if (pathname?.startsWith('/studio')) {
    return <>{children}</>;
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-brand-light"
      >
        Skip to main content
      </a>
      <Navbar wa={contact.wa} />
      <main id="main-content" className="main-content px-4 py-8 sm:px-6 lg:px-8">{children}</main>
      <Footer contact={contact} />
      <WhatsAppButton wa={contact.wa} />
    </>
  );
}
