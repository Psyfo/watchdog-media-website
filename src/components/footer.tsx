'use client';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-zinc-900 text-white px-6 py-12'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm'>
        {/* Company Info */}
        <div>
          <h2 className='text-lg font-bold mb-2'>
            Watchdog Media (Pty) Limited
          </h2>
          <address className='not-italic leading-relaxed text-zinc-400'>
            17 Howick Drive, Waterfall
            <br />
            Durban, KwaZulu Natal
            <br />
            South Africa, 3652
          </address>
        </div>

        {/* Services */}
        <div>
          <h3 className='font-semibold mb-2'>Services</h3>
          <ul className='space-y-1 text-zinc-400'>
            <li>
              <Link href='/production-support'>
                Production Support Services
              </Link>
            </li>
            <li>
              <Link href='/creative'>Creative Services</Link>
            </li>
            <li>
              <Link href='/location-support'>Location Support Services</Link>
            </li>
            <li>
              <Link href='/directing'>Directing Services</Link>
            </li>
            <li>
              <Link href='/producing'>Producing Services</Link>
            </li>
            <li>
              <Link href='/key-crew'>Key Crew Services</Link>
            </li>
          </ul>
        </div>

        {/* Production */}
        <div>
          <h3 className='font-semibold mb-2'>Productions</h3>
          <ul className='space-y-1 text-zinc-400'>
            <li>
              <Link href='/film-office'>Film Production Office</Link>
            </li>
            <li>
              <Link href='/media-storage'>Media Storage & Connectivity</Link>
            </li>
            <li>
              <Link href='/accommodation'>Private Accommodation</Link>
            </li>
            <li>
              <Link href='/awards'>Awards</Link>
            </li>
            <li>
              <Link href='/testimonials'>Testimonials</Link>
            </li>
            <li>
              <Link href='/rates'>Rates</Link>
            </li>
          </ul>
        </div>

        {/* Legal & More */}
        <div>
          <h3 className='font-semibold mb-2'>Company</h3>
          <ul className='space-y-1 text-zinc-400'>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/terms'>Terms and Conditions</Link>
            </li>
            <li>
              <Link href='/privacy'>Privacy Policy</Link>
            </li>
            <li>
              <Link href='/trademarks'>Trademarks</Link>
            </li>
            <li>
              <Link href='/service-agreements'>Service Agreements</Link>
            </li>
            <li>
              <Link href='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='mt-10 text-center text-xs text-zinc-500'>
        &copy; {new Date().getFullYear()} Watchdog Media (Pty) Limited. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
