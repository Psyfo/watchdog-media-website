import '@/styles/globals.css';

import type { Metadata, Viewport } from 'next';
import { Fraunces, DM_Mono } from 'next/font/google';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { site } from '@/lib/site';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    'film production support',
    'Durban',
    'KwaZulu-Natal',
    'South Africa',
    'documentary',
    'creative services',
    'women in film',
    'location services',
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  icons: { icon: '/favicon.ico' },
};

export const viewport: Viewport = {
  themeColor: '#08080a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='en'
      className={`${fraunces.variable} ${dmMono.variable} wd-grain`}
    >
      <body>
        <a href='#main' className='wd-skip'>
          Skip to content
        </a>
        <Navbar />
        <main id='main'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
