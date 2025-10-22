import './global.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/nav';

export const metadata: Metadata = {
  metadataBase: new URL('https://alexanderspurlock.com'),
  title: {
    default: 'Alexander Spurlock',
    template: '%s | Alexander Spurlock',
  },
  description: 'iOS and Android Developer.',
  openGraph: {
    title: 'Alexander Spurlock',
    description: 'iOS and Android Developer.',
    url: 'https://alexanderspurlock.com',
    siteName: 'Alexander Spurlock',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased py-10 px-10">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
