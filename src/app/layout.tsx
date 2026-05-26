import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import TweaksPanel from '@/components/TweaksPanel';

export const metadata: Metadata = {
  title: 'NapMeridian Exim — EXIM Consultancy for Indian Exporters & Importers',
  description:
    'End-to-end import-export consultancy. IEC, DGFT, documentation, certificates of origin, incentives, training — for SMEs, startups and enterprises across India.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-palette="azure" data-type="editorial">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Manrope:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <TweaksPanel />
      </body>
    </html>
  );
}
