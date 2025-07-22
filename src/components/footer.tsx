'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className='px-6 py-12 text-white bg-watchdog-dark'>
      <div className='grid grid-cols-1 gap-8 mx-auto text-sm max-w-7xl md:grid-cols-4'>
        {/* Company Info */}
        <div>
          <h2 className='mb-2 text-lg font-bold'>
            Watchdog Media (Pty) Limited
          </h2>
          <address className='not-italic leading-relaxed text-watchdog-light'>
            17 Howick Drive, Waterfall
            <br />
            Durban, KwaZulu Natal
            <br />
            South Africa, 3652
          </address>
        </div>

        {/* Services */}
        <div>
          <h3 className='mb-2 font-semibold'>Services</h3>
          <ul className='space-y-1 text-watchdog-light'>
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
          <h3 className='mb-2 font-semibold'>Productions</h3>
          <ul className='space-y-1 text-watchdog-light'>
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
          <h3 className='mb-2 font-semibold'>Company</h3>
          <ul className='space-y-1 text-watchdog-light'>
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

      <div className='mt-10 text-xs text-center text-zinc-500'>
        {year && (
          <span>
            &copy; {year} Watchdog Media (Pty) Limited. All rights reserved.
          </span>
        )}
      </div>
    </footer>
  );
};

export default Footer;
