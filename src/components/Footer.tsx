'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  InstagramLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
  ArrowUpRightIcon,
} from '@phosphor-icons/react';

import Container from '@/components/ui/Container';
import { footerNav, site } from '@/lib/site';

// Phosphor has no Vimeo glyph in this version — small brand-accurate fill icon,
// prop-shaped to match the Phosphor icons used alongside it.
function VimeoLogoIcon({
  size = 18,
  className,
}: {
  size?: number;
  weight?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
      className={className}
      aria-hidden='true'
    >
      <path d='M23.9765 6.4168c-.105 2.338-1.739 5.5397-4.894 9.6027-3.2625 4.2425-6.0265 6.3635-8.2925 6.3635-1.4035 0-2.5905-1.296-3.5625-3.8895l-1.9435-7.1277c-.7215-2.5935-1.4955-3.8895-2.3245-3.8895-.18 0-.81.3795-1.8915 1.1377L0 7.4651c1.205-1.0605 2.394-2.121 3.5685-3.18 1.6155-1.395 2.8275-2.13 3.6345-2.205 1.9095-.18 3.0855 1.125 3.5265 3.915.4785 3.015.81 4.8885.9975 5.6205.5625 2.5635 1.1805 3.8445 1.857 3.8445.525 0 1.314-.8295 2.367-2.4885 1.05-1.659 1.6125-2.9205 1.6875-3.7905.15-1.425-.4125-2.1405-1.6875-2.1405-.6 0-1.218.135-1.8525.405 1.2285-4.0245 3.576-5.9895 7.0395-5.8845 2.5695.075 3.7815 1.7385 3.639 4.9905z' />
    </svg>
  );
}

const socialIcons = {
  instagram: InstagramLogoIcon,
  vimeo: VimeoLogoIcon,
  linkedin: LinkedinLogoIcon,
  x: XLogoIcon,
} as const;

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className='wd-kicker mb-5'>{title}</h3>
      <ul className='space-y-3'>
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className='text-sm text-dim transition-colors hover:text-silver'
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className='relative border-t border-white/10 bg-ink-2'>
      {/* CTA band */}
      <Container size='wide' className='border-b border-white/10 py-20 md:py-28'>
        <div className='flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end'>
          <div className='max-w-2xl'>
            <p className='wd-kicker'>Start a project</p>
            <h2 className='mt-5 text-4xl md:text-6xl'>
              Let&rsquo;s make
              <br />
              something that{' '}
              <em className='font-light italic text-magenta'>moves</em> people.
            </h2>
          </div>
          <Link
            href='/contact'
            className='group inline-flex items-center gap-4 border border-white/20 px-8 py-5 transition-colors hover:border-magenta'
          >
            <span className='wd-mono text-sm uppercase tracking-widest text-silver'>
              Get in touch
            </span>
            <ArrowUpRightIcon
              size={18}
              weight='bold'
              className='text-magenta transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
            />
          </Link>
        </div>
      </Container>

      {/* Link grid */}
      <Container size='wide' className='py-16'>
        <div className='grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5'>
          <div className='col-span-2 lg:col-span-2'>
            <div className='flex items-center gap-2.5'>
              <Image
                src='/brand/mark-white.svg'
                alt=''
                width={30}
                height={30}
                unoptimized
                className='h-7 w-7'
              />
              <span className='font-display text-lg leading-none tracking-tight text-silver'>
                Watchdog Media
                <sup className='ml-0.5 align-super text-[0.5em] text-dim'>™</sup>
              </span>
            </div>
            <p className='mt-5 max-w-xs text-sm leading-relaxed text-dim'>
              {site.tagline}
            </p>
            <address className='mt-6 text-sm not-italic leading-relaxed text-faint'>
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </address>
            <div className='mt-5 flex flex-col gap-1.5 text-sm'>
              <a
                href={`tel:${site.phoneHref}`}
                className='text-dim transition-colors hover:text-silver'
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className='text-dim transition-colors hover:text-magenta'
              >
                {site.email}
              </a>
            </div>
          </div>

          <LinkColumn title='Work' links={footerNav.work} />
          <LinkColumn title='Services' links={footerNav.services} />
          <LinkColumn title='Company' links={footerNav.company} />
        </div>
      </Container>

      {/* Bottom bar */}
      <Container size='wide' className='border-t border-white/10 py-7'>
        <div className='flex flex-col-reverse items-center justify-between gap-5 md:flex-row'>
          <p className='wd-mono text-xs text-faint'>
            &copy; {year ?? site.founded} {site.legalName}. All rights reserved.
          </p>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-5'>
              {footerNav.legal.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className='wd-mono text-xs uppercase tracking-wider text-faint transition-colors hover:text-silver'
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className='h-4 w-px bg-white/15' />
            <div className='flex items-center gap-3'>
              {site.socials.map((s) => {
                const Icon = socialIcons[s.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={s.label}
                    className='text-dim transition-colors hover:text-magenta'
                  >
                    {Icon ? (
                      <Icon size={18} weight='fill' />
                    ) : (
                      <span className='wd-mono text-xs font-medium uppercase tracking-wider'>
                        {s.label}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
