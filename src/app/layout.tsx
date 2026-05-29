import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NapMeridian Exim — EXIM Consultancy for Indian Exporters & Importers',
  description:
    'End-to-end import-export consultancy. IEC, DGFT, documentation, certificates of origin, incentives, training — for SMEs, startups and enterprises across India.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontVars = [plusJakarta.variable, jetbrainsMono.variable].join(' ');
  return (
    <html lang="en" data-palette="azure" className={fontVars}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
