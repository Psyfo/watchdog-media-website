import React from "react";

export const metadata = {
  title: 'About Us | Watchdog Media',
  description: 'Learn more about Watchdog Media and our mission.',
  keywords: 'about, Watchdog Media, media company',
  authors: [
    { name: 'Watchdog Media Team', url: 'https://watchdogmedia.co.za' },
  ],
  openGraph: {
    title: 'About Us | Watchdog Media',
    description: 'Learn more about Watchdog Media and our mission.',
    url: 'https://watchdogmedia.co.za/about',
    siteName: 'Watchdog Media',
    images: [
      {
        url: 'https://watchdogmedia.co.za/images/about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Watchdog Media',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className='flex flex-col items-center justify-center h-screen p-4 text-center bg-gray-100'>
      <h1>About Us</h1>
      <p>
        Welcome to Watchdog Media. Learn more about our mission and team here.
      </p>
    </main>
  );
}
