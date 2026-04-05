import type { Metadata } from 'next';
import '../styles/globals.css';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Obele Autos and Car Accessories',
  description: 'Clean Next.js app with Tailwind CSS and basic layout.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="main-layout">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-500 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="main-content px-4 py-8 sm:px-6 lg:px-8">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
