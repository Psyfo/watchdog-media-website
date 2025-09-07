/* eslint-disable react/no-unescaped-entities */
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { ArrowLeftIcon, WarningCircleIcon } from '@phosphor-icons/react';

export default function NotFound() {
  return (
    <section
      className='relative flex flex-col justify-center items-center bg-[var(--wd-surface)] px-6 py-20 min-h-screen overflow-hidden'
      aria-label='Page Not Found'
    >
      {/* Soft Brand Gradient Background */}
      <motion.div
        className='absolute inset-0 opacity-10 pointer-events-none'
        style={{
          background: `
            radial-gradient(circle at 20% 30%, var(--wd-lilac-400) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, var(--wd-magenta-400) 0%, transparent 60%),
            radial-gradient(circle at 50% 90%, var(--wd-yellow-400) 0%, transparent 40%)
          `,
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
          duration: 1.2,
        }}
        className='z-10 relative flex flex-col items-center text-center'
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: 'spring',
            stiffness: 200,
          }}
          className='mb-8'
        >
          <WarningCircleIcon
            size={72}
            weight='fill'
            className='drop-shadow-lg text-[var(--wd-magenta-600)]'
          />
        </motion.div>
        <h1 className='bg-clip-text bg-gradient-to-r from-[var(--wd-magenta-400)] via-[var(--wd-lilac-400)] to-[var(--wd-yellow-400)] drop-shadow-lg mb-6 font-noteworthy font-bold text-transparent text-5xl md:text-6xl lg:text-7xl'>
          404 – Not Found
        </h1>
        <p className='mx-auto mb-8 max-w-xl font-myriad text-[var(--wd-slate-700)] text-lg md:text-xl leading-relaxed'>
          Sorry, we couldn't find that page.
          <br />
          It may have moved, or never existed.
          <br />
          <span className='font-semibold text-[var(--wd-magenta-600)]'>
            But the story continues!
          </span>
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            type: 'spring',
            stiffness: 120,
          }}
        >
          <Link
            href='/'
            className='inline-flex items-center shadow-lg px-8 py-4 rounded-xl font-myriad font-bold text-lg transition-all duration-300'
            style={{
              background:
                'linear-gradient(135deg, var(--wd-magenta-500) 0%, var(--wd-plum-500) 100%)',
              color: 'white',
            }}
          >
            <ArrowLeftIcon size={20} weight='bold' className='mr-2' />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
