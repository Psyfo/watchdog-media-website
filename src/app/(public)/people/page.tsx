import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'People | Watchdog Media',
  description: 'This is the People page.',
  keywords: 'people, Watchdog Media, team, staff',
  authors: [
    { name: 'Watchdog Media Team', url: 'https://watchdogmedia.co.za' },
    { name: 'Mobisynco', url: 'https://mobisynco.co.za' },
  ],
  openGraph: {
    title: 'People | Watchdog Media',
    description: 'This is the People page.',
    url: 'https://watchdogmedia.co.za/people',
    siteName: 'Watchdog Media',
    images: [
      {
        url: 'https://watchdogmedia.co.za/images/people.jpg',
        width: 1200,
        height: 630,
        alt: 'People at Watchdog Media',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function PeoplePage() {
  return (
    <main className='flex flex-col items-center justify-center h-screen p-4'>
      <h1>People</h1>
      <p>This is the People page.</p>
      {/* Add people-related content here */}
    </main>
  );
}
