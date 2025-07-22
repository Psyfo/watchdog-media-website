import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Awards | Watchdog Media',
  description: 'Welcome to the Awards page.',
  keywords: 'awards, Watchdog Media, media awards',
  authors: [
    { name: 'Watchdog Media Team', url: 'https://watchdogmedia.co.za' },
    { name: 'Mobisynco', url: 'https://mobisynco.co.za' },
  ],
  openGraph: {
    title: 'Awards | Watchdog Media',
    description: 'Explore our awards and recognitions.',
    url: 'https://watchdogmedia.co.za/awards',
    siteName: 'Watchdog Media',
    images: [
      {
        url: 'https://watchdogmedia.co.za/images/awards.jpg',
        width: 1200,
        height: 630,
        alt: 'Watchdog Media Awards',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function AwardsPage() {
  return (
    <main className='flex flex-col items-center justify-center h-screen p-4'>
      <h1>Awards</h1>
      <p>Welcome to the Awards page.</p>
      {/* Add award listings or content here */}
    </main>
  );
}
