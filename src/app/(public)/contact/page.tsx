import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us | Watchdog Media',
  description: 'Get in touch with Watchdog Media.',
  keywords: 'contact, Watchdog Media, get in touch',
  authors: [
    { name: 'Watchdog Media Team', url: 'https://watchdogmedia.co.za' },
    { name: 'Mobisynco', url: 'https://mobisynco.co.za' },
  ],
  openGraph: {
    title: 'Contact Us | Watchdog Media',
    description: 'Get in touch with Watchdog Media.',
    url: 'https://watchdogmedia.co.za/contact',
    siteName: 'Watchdog Media',
    images: [
      {
        url: 'https://watchdogmedia.co.za/images/contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Watchdog Media',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const ContactPage = () => {
  return (
    <main className='flex flex-col items-center justify-center h-screen p-4'>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
    </main>
  );
};

export default ContactPage;
