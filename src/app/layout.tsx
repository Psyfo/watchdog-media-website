import '@/styles/globals.css';

import type { Metadata, Viewport } from 'next';
import { Fraunces, DM_Mono } from 'next/font/google';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { site, founder } from '@/lib/site';

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
  applicationName: site.name,
  category: 'Film Production',
  creator: site.name,
  publisher: site.legalName,
  keywords: [
    'film production support',
    'Durban',
    'KwaZulu-Natal',
    'South Africa',
    'documentary',
    'creative services',
    'women in film',
    'location services',
    'film crew',
    'Watchdog Media',
    'Palesa Lebona',
  ],
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
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
};

export const viewport: Viewport = {
  themeColor: '#08080a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.legalName,
      alternateName: site.name,
      url: site.url,
      description: site.description,
      email: site.email,
      telephone: site.phone,
      foundingDate: String(site.founded),
      slogan: site.tagline,
      logo: `${site.url}/brand/avatar-512.png`,
      image: `${site.url}/images/hero-set.jpg`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.line1,
        addressLocality: 'Durban',
        addressRegion: 'KwaZulu-Natal',
        postalCode: '3652',
        addressCountry: 'ZA',
      },
      areaServed: site.region,
      sameAs: site.socials.map((s) => s.href),
      founder: {
        '@type': 'Person',
        name: founder.name,
        jobTitle: 'Founder, Director & Producer',
        sameAs: founder.socials.map((s) => s.href),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: 'en-ZA',
      publisher: { '@id': `${site.url}/#organization` },
    },
  ],
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
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
