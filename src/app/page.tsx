import Awards from "./components/awards";
import CreativeServices from "./components/creative-services";
import FilmSupport from "./components/film-support";
import Hero from "./components/hero";
import Productions from "./components/productions";
import Welcome from "./components/welcome";
import { Metadata } from "next";

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
        url: 'https://watchdogmedia.co.za/images/home.jpg',
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
        <Hero />
        <Welcome />
        <FilmSupport />
        <CreativeServices />
        <Awards />
        <Productions />
      </main>
    </div>
  );
}
