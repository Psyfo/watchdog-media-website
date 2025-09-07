'use client';
import { motion, Variants } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { ArrowRightIcon, PlayIcon } from '@phosphor-icons/react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 1.4,
    },
  },
};

const sublineVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
      duration: 1.2,
    },
  },
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      duration: 1,
    },
  },
};

const backgroundVariants: Variants = {
  hidden: { scale: 1.2, opacity: 0.3 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 3,
      ease: 'easeOut',
    },
  },
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

export default function HeroSection() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Don't render until client-side hydration is complete
  if (isDesktop === null) return null;

  return (
    <section
      className='relative flex w-full min-h-screen overflow-hidden'
      aria-label='Watchdog Media Hero'
    >
      {/* Background Image */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={backgroundVariants}
        className='absolute inset-0 bg-cover bg-no-repeat bg-center'
        style={{
          backgroundImage: "url('/images/wm-hero-monochrome.png')",
        }}
      />

      {/* Enhanced Gradient Overlay with Lilac Touches */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={overlayVariants}
        className='absolute inset-0'
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.7) 0%,
              rgba(81, 0, 81, 0.6) 25%,
              rgba(236, 0, 140, 0.4) 50%,
              rgba(172, 122, 255, 0.3) 75%,
              rgba(0, 0, 0, 0.8) 100%
            )
          `,
        }}
      />

      {/* Soft Animated Pattern Overlay */}
      <motion.div
        className='absolute inset-0 opacity-8'
        style={{
          background: `
            radial-gradient(circle at 20% 30%, var(--wd-lilac-400) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, var(--wd-magenta-400) 0%, transparent 50%),
            radial-gradient(circle at 50% 90%, var(--wd-yellow-400) 0%, transparent 40%)
          `,
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Elements with New Colors */}
      <motion.div
        className='top-1/4 right-10 absolute rounded-full w-4 h-4'
        style={{ background: 'var(--wd-lilac-400)' }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='bottom-1/3 left-12 absolute rounded-full w-3 h-3'
        style={{ background: 'var(--wd-magenta-500)' }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.4, 0.8, 0.4],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className='top-1/2 left-1/4 absolute rounded-full w-2 h-2'
        style={{ background: 'var(--wd-yellow-500)' }}
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.7, 1, 0.7],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Content Container */}
      <div className='z-10 relative flex justify-center items-center px-6 md:px-12 w-full'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={containerVariants}
          className='mx-auto max-w-6xl md:text-left text-center'
        >
          {/* Main Headline */}
          <motion.div variants={headlineVariants} className='mb-8'>
            <h1 className='font-noteworthy font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight'>
              <motion.span
                className='block drop-shadow-lg text-white'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Watchdog
              </motion.span>
              <motion.span
                className='block bg-clip-text bg-gradient-to-r from-[var(--wd-lilac-300)] to-[var(--wd-magenta-400)] drop-shadow-sm mt-2 md:mt-4 text-transparent'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Media
              </motion.span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={sublineVariants} className='mb-12'>
            <p className='drop-shadow-md mx-auto md:mx-0 max-w-3xl font-myriad text-white text-xl md:text-2xl lg:text-3xl leading-relaxed'>
              Corporate-grade reliability with artist-grade vision. We tell
              <span className='font-semibold text-[var(--wd-yellow-300)]'>
                {' '}
                courageous, craft-driven stories
              </span>{' '}
              that move business and culture.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={ctaVariants}
            className='flex md:flex-row flex-col justify-center md:justify-start gap-6'
          >
            <motion.a
              href='/productions'
              className='group inline-flex items-center shadow-xl px-8 py-4 rounded-xl font-myriad font-bold text-lg transition-all duration-300'
              style={{
                background:
                  'linear-gradient(135deg, var(--wd-magenta-500) 0%, var(--wd-plum-500) 100%)',
                color: 'white',
              }}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: '0 20px 40px rgba(236, 0, 140, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <PlayIcon size={20} weight='fill' className='mr-2' />
              <span>View Our Work</span>
              <motion.div
                className='ml-2'
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ArrowRightIcon size={20} weight='bold' />
              </motion.div>
            </motion.a>

            <motion.a
              href='/contact'
              className='inline-flex items-center backdrop-blur-sm px-8 py-4 border-2 rounded-xl font-myriad font-bold text-lg transition-all duration-300'
              style={{
                background:
                  'linear-gradient(135deg, rgba(248, 244, 255, 0.1) 0%, rgba(220, 197, 255, 0.2) 100%)',
                borderColor: 'var(--wd-lilac-300)',
                color: 'white',
              }}
              whileHover={{
                scale: 1.05,
                y: -3,
                background: 'var(--wd-yellow-500)',
                color: 'var(--wd-slate-900)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Project
            </motion.a>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            className='bottom-8 left-1/2 md:left-0 absolute md:transform-none -translate-x-1/2 transform'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <motion.div
              className='flex flex-col items-center text-white'
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className='opacity-80 mb-3 font-myriad text-sm uppercase tracking-widest'>
                Scroll
              </span>
              <motion.div
                className='rounded-full w-1 h-12'
                style={{
                  background:
                    'linear-gradient(to bottom, var(--wd-lilac-300) 0%, transparent 100%)',
                }}
                animate={{ scaleY: [1, 0.5, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className='mt-2 rounded-full w-2 h-2'
                style={{ background: 'var(--wd-yellow-400)' }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
