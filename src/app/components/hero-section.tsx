'use client';
import { motion, Variants } from 'framer-motion';
import React, { useEffect, useState } from 'react';

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
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 1.2,
    },
  },
};

const sublineVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
      duration: 1,
    },
  },
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      duration: 0.8,
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

      {/* Dynamic Gradient Overlay */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={overlayVariants}
        className='absolute inset-0 bg-gradient-to-br from-black/60 via-[var(--wd-plum)]/40 to-black/80'
      />

      {/* Animated Pattern Overlay */}
      <motion.div
        className='absolute inset-0 opacity-5'
        style={{
          background: `
            radial-gradient(circle at 25% 25%, var(--wd-yellow) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, var(--wd-magenta) 0%, transparent 50%)
          `,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
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
            <h1 className='font-noteworthy font-bold text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight'>
              <span className='block text-[var(--wd-silver)]'>Watchdog</span>
              <span className='block mt-2 md:mt-4 text-[var(--wd-silver)]'>
                Media
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={sublineVariants} className='mb-12'>
            <p className='mx-auto md:mx-0 max-w-3xl font-myriad text-[var(--wd-silver)] text-xl md:text-2xl lg:text-3xl leading-relaxed'>
              Corporate-grade reliability with artist-grade vision . We tell
              courageous, craft-driven stories that move business and culture.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={ctaVariants}
            className='flex md:flex-row flex-col justify-center md:justify-start gap-6'
          >
            <motion.a
              href='/productions'
              className='group inline-flex justify-center items-center bg-[var(--wd-magenta)] hover:bg-[var(--wd-plum)] px-8 py-4 rounded-lg font-myriad font-bold !text-[var(--wd-silver)] text-lg transition-all duration-300'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Our Work</span>
              <motion.svg
                className='ml-2 w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </motion.svg>
            </motion.a>

            <motion.a
              href='/contact'
              className='inline-flex justify-center items-center bg-transparent hover:bg-[var(--wd-yellow)] px-8 py-4 border-[var(--wd-yellow)] border-2 rounded-lg font-myriad font-bold !text-[var(--wd-silver)] hover:!text-[var(--wd-slate)] text-lg transition-all duration-300'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Project
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className='bottom-8 left-1/2 md:left-0 absolute md:transform-none -translate-x-1/2 transform'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.div
              className='flex flex-col items-center text-[var(--wd-silver)]'
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className='mb-2 font-myriad text-sm uppercase tracking-wider'>
                Scroll
              </span>
              <motion.div
                className='bg-gradient-to-b from-[var(--wd-silver)] to-transparent w-0.5 h-12'
                animate={{ scaleY: [1, 0.5, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className='top-1/4 right-10 absolute bg-[var(--wd-yellow)] opacity-60 rounded-full w-3 h-3'
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='bottom-1/3 left-12 absolute bg-[var(--wd-magenta)] opacity-50 rounded-full w-2 h-2'
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.7, 0.3],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className='top-1/2 left-1/4 absolute bg-[var(--wd-plum)] opacity-70 rounded-full w-1 h-1'
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.5, 1, 0.5],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </section>
  );
}
