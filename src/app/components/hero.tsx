import React from 'react';
import { Variants, motion } from 'framer-motion';

const textVariants = {
  hidden: (isDesktop: boolean) =>
    isDesktop ? { opacity: 0, x: -50 } : { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.6, delay: 1 },
  },
} as Variants;

const bgVariants = {
  hidden: { scale: 1.1 },
  visible: {
    scale: 1,
    transition: { duration: 2, ease: 'easeOut' as const },
  },
} as Variants;

export default function Hero() {
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

  return (
    <section
      className='relative flex min-h-[90vh] w-full overflow-hidden shadow-lg mt-[10vh]'
      aria-label='Watchdog Media Hero'
    >
      {/* Background animation layer */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={bgVariants}
        className='absolute inset-0 bg-center bg-cover'
        style={{
          backgroundImage: "url('/images/wm-hero-monochrome.png')",
        }}
      />

      {/* Foreground content */}
      <div
        className='
          relative z-10 flex w-full 
          items-end justify-center pb-[50%]
          md:items-center md:justify-center md:w-1/2 md:pb-0
        '
      >
        <motion.h1
          custom={isDesktop}
          initial='hidden'
          animate='visible'
          variants={textVariants}
          className='font-myriad text-white text-[36px] font-bold text-center md:text-left'
        >
          Watchdog media
        </motion.h1>
      </div>
    </section>
  );
}
