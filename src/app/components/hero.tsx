"use client";
import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: (isDesktop: boolean) =>
    isDesktop
      ? { opacity: 0, x: -50 } // Desktop: from left
      : { opacity: 0, y: 50 }, // Mobile: from bottom
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const bgVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
};

export default function Hero() {
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

  return (
    <motion.section
      initial='hidden'
      animate='visible'
      variants={bgVariants}
      className='relative flex min-h-[80vh] w-full bg-cover bg-center shadow-lg'
      style={{
        backgroundImage: "url('/images/wm-hero-monochrome.png')",
      }}
      aria-label='Watchdog Media Hero'
    >
      {/* Content container */}
      <div
        className='
          absolute inset-0 flex w-full 
          items-end justify-center pb-[20%]
          md:items-center md:justify-center md:w-1/2 md:pb-0
        '
      >
        <motion.h1
          custom={isDesktop}
          initial='hidden'
          animate='visible'
          variants={textVariants}
          className='font-noteworthy text-white text-[2rem] font-bold text-center md:text-left'
        >
          Watchdog media
        </motion.h1>
      </div>
    </motion.section>
  );
}
