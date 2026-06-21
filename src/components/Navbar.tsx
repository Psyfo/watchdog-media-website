'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { nav, site } from '@/lib/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  // Close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          scrolled
            ? 'border-b border-white/10 bg-ink/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className='mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10'>
          <Link
            href='/'
            aria-label={`${site.name} — home`}
            className='flex items-center gap-2.5'
          >
            <Image
              src='/images/wm-logo.svg'
              alt=''
              width={36}
              height={32}
              priority
              unoptimized
              className='h-8 w-auto'
              style={{ filter: 'brightness(0) invert(1)', width: 'auto' }}
            />
            <Image
              src='/images/wm-logo-text.svg'
              alt={site.name}
              width={120}
              height={36}
              priority
              unoptimized
              className='h-7 w-auto'
              style={{ filter: 'brightness(0) invert(1)', width: 'auto' }}
            />
          </Link>

          {/* Desktop nav */}
          <div className='hidden items-center gap-9 lg:flex'>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative wd-mono text-xs uppercase tracking-widest transition-colors ${
                  isActive(item.href)
                    ? 'text-silver'
                    : 'text-dim hover:text-silver'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-magenta transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className='relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden'
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span
              className={`h-px w-6 bg-silver transition-all duration-300 ${
                open ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-px w-6 bg-silver transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-px w-6 bg-silver transition-all duration-300 ${
                open ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className='fixed inset-0 z-30 flex flex-col justify-center bg-ink px-8 lg:hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div
              aria-hidden
              className='pointer-events-none absolute inset-0 opacity-60'
              style={{
                background:
                  'radial-gradient(120% 80% at 100% 0%, rgba(236,0,140,0.16), transparent 60%), radial-gradient(100% 80% at 0% 100%, rgba(122,31,122,0.22), transparent 60%)',
              }}
            />
            <nav className='relative flex flex-col gap-1'>
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className='flex items-baseline gap-4 py-2'
                  >
                    <span className='wd-mono text-xs text-faint'>
                      0{i + 1}
                    </span>
                    <span
                      className={`font-display text-4xl sm:text-5xl ${
                        isActive(item.href) ? 'text-magenta' : 'text-silver'
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className='relative mt-12'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={`mailto:${site.email}`}
                className='wd-mono text-sm text-dim'
              >
                {site.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
