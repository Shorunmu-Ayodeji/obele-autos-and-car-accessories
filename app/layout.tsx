import type { Metadata } from 'next';
import '../styles/globals.css';
import { SiteChrome } from '../components/SiteChrome';
import { getContact } from '../lib/sanity';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Obele Autos and Car Accessories',
  description: 'Clean Next.js app with Tailwind CSS and basic layout.',
  icons: { icon: '/logo.png' },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const contact = await getContact();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}",
          }}
        />
      </head>
      <body className="main-layout">
        <SiteChrome contact={contact}>{children}</SiteChrome>
      </body>
    </html>
  );
}
