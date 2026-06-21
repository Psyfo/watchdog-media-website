'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  InstagramLogoIcon,
  LinkedinLogoIcon,
  YoutubeLogoIcon,
  ArrowUpRightIcon,
} from '@phosphor-icons/react';

import Container from '@/components/ui/Container';
import { footerNav, site } from '@/lib/site';

const socialIcons = {
  instagram: InstagramLogoIcon,
  linkedin: LinkedinLogoIcon,
  youtube: YoutubeLogoIcon,
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
                    <Icon size={18} weight='fill' />
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
