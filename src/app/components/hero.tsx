'use client';
import React, { useEffect, useState } from 'react';
import { Variants, motion } from 'framer-motion';

const textVariants = (isDesktop: boolean): Variants => ({
  hidden: isDesktop ? { opacity: 0, x: -50 } : { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.6, delay: 1 },
  },
});

const bgVariants: Variants = {
  hidden: { scale: 1.1 },
  visible: {
    scale: 1,
    transition: { duration: 2, ease: 'easeOut' },
  },
};

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  // Don't render until client-side hydration is complete
  if (isDesktop === null) return null;

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
          initial='hidden'
          animate='visible'
          variants={textVariants(isDesktop)}
          className='font-myriad text-white text-[36px] font-bold text-center md:text-left'
        >
          Watchdog media
        </motion.h1>
      </div>
    </section>
  );
}
