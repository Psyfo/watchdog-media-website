import { Metadata } from 'next';

import AwardsSection from '../components/awards-section';
import CreativeServicesSection from '../components/creative-services-section';
import FilmSupportSection from '../components/film-support-section';
import HeroSection from '../components/hero-section';
import ProductionsSection from '../components/productions-section';
import WelcomeSection from '../components/welcome-section';

export const metadata: Metadata = {
  title: 'Home | Watchdog Media',
  description:
    'Welcome to Watchdog Media, your partner in media production and creative services.',
  keywords:
    'home, Watchdog Media, media production, creative services, landing page',
  authors: [
    { name: 'Watchdog Media Team', url: 'https://watchdogmedia.co.za' },
    { name: 'Mobisynco', url: 'https://mobisynco.co.za' },
  ],
  openGraph: {
    title: 'Home | Watchdog Media',
    description: 'Explore our services and productions at Watchdog Media.',
    url: 'https://watchdogmedia.co.za',
    siteName: 'Watchdog Media',
    images: [
      {
        url: 'https://watchdogmedia.co.za/images/wm-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Watchdog Media Home',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className=''>
      <main>
        <HeroSection />
        <WelcomeSection />
        <FilmSupportSection />
        <CreativeServicesSection />
        <AwardsSection />
        <ProductionsSection />
      </main>
    </div>
  );
}
