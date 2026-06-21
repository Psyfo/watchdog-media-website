'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownIcon } from '@phosphor-icons/react';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { site } from '@/lib/site';

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section
      className='relative flex min-h-[100svh] items-end overflow-hidden bg-ink'
      aria-label='Watchdog Media'
    >
      {/* Cinematic key art */}
      <div className='absolute inset-0'>
        <Image
          src='/images/wm-hero-cinematic.png'
          alt='A camera operator frames a shot on an ARRI cinema camera, lit in deep magenta on a film set.'
          fill
          priority
          sizes='100vw'
          className='object-cover object-[60%_center]'
        />
        {/* Legibility + brand wash */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(180deg, rgba(8,8,10,0.72) 0%, rgba(8,8,10,0.25) 38%, rgba(8,8,10,0.55) 70%, rgba(8,8,10,0.97) 100%)',
          }}
        />
        <div
          className='absolute inset-0 mix-blend-soft-light'
          style={{
            background:
              'radial-gradient(80% 60% at 75% 25%, rgba(236,0,140,0.35), transparent 70%)',
          }}
        />
      </div>

      <Container size='wide' className='relative z-10 pb-16 pt-32 md:pb-24'>
        <motion.p
          className='wd-kicker'
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          Film production support &amp; creative — {site.region}
        </motion.p>

        <motion.h1
          className='mt-7 max-w-5xl text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] text-white'
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
        >
          Courageous,
          <br />
          craft-driven{' '}
          <span className='font-light italic text-magenta'>stories.</span>
        </motion.h1>

        <motion.p
          className='mt-8 max-w-xl text-lg leading-relaxed text-silver/85'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
        >
          The production partner Durban trusts to move business and culture —
          corporate-grade reliability, artist-grade vision, women championed on
          and off camera.
        </motion.p>

        <motion.div
          className='mt-11 flex flex-wrap items-center gap-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.5 }}
        >
          <Button href='/productions' variant='primary' arrow>
            View our work
          </Button>
          <Button href='/contact' variant='ghost'>
            Start a project
          </Button>
        </motion.div>
      </Container>

      {/* Scroll cue (static, editorial) */}
      <Link
        href='#manifesto'
        aria-label='Scroll to content'
        className='group absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-silver/70 transition-colors hover:text-silver md:flex'
      >
        <span className='wd-mono text-[0.65rem] uppercase tracking-[0.3em]'>
          Scroll
        </span>
        <span className='relative h-10 w-px overflow-hidden bg-white/20'>
          <span className='absolute inset-x-0 top-0 h-3 bg-magenta transition-transform duration-500 group-hover:translate-y-7' />
        </span>
        <ArrowDownIcon size={14} weight='bold' aria-hidden />
      </Link>
    </section>
  );
}
