import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Services | Watchdog Media',
  description:
    'Discover the variety of services offered by Watchdog Media to help you succeed.',
  // Optionally add more metadata fields as needed
  keywords: 'services, Watchdog Media, media services, production services',
  authors: [
    { name: 'Watchdog Media Team', url: 'https://watchdogmedia.co.za' },
    { name: 'Mobisynco', url: 'https://mobisynco.co.za' },
  ],
  openGraph: {
    title: 'Services | Watchdog Media',
    description:
      'Discover the variety of services offered by Watchdog Media to help you succeed.',
    url: 'https://watchdogmedia.co.za/services',
    siteName: 'Watchdog Media',
    images: [
      {
        url: 'https://watchdogmedia.co.za/images/services.jpg',
        width: 1200,
        height: 630,
        alt: 'Watchdog Media Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
export default function ServicesPage() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100'>
      <h1>Services</h1>
      <p>We offer a variety of services to help you succeed.</p>
    </main>
  );
}
