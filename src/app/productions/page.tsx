import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Productions | Watchdog Media',
  description: 'Welcome to the productions page.',
  keywords: 'productions, Watchdog Media, media productions',
  authors: [
    { name: 'Watchdog Media Team', url: 'https://watchdogmedia.co.za' },
    { name: 'Mobisynco', url: 'https://mobisynco.co.za' },
  ],
  openGraph: {
    title: 'Productions | Watchdog Media',
    description: 'Explore our productions and projects.',
    url: 'https://watchdogmedia.co.za/productions',
    siteName: 'Watchdog Media',
    images: [
      {
        url: 'https://watchdogmedia.co.za/images/productions.jpg',
        width: 1200,
        height: 630,
        alt: 'Watchdog Media Productions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function ProductionsPage() {
  return (
    <main className='flex flex-col items-center justify-center h-screen p-4'>
      <h1>Productions</h1>
      <p>Welcome to the productions page.</p>
      {/* Add your productions content here */}
    </main>
  );
}
