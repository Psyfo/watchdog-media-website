'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const WelcomeSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className='relative flex flex-col justify-center items-center bg-[var(--wd-surface)] px-6 py-20 md:py-32 overflow-hidden text-center'
    >
      {/* Background Pattern */}
      <motion.div
        className='absolute inset-0 opacity-5'
        style={{
          background: `
            radial-gradient(circle at 20% 20%, var(--wd-plum) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, var(--wd-magenta) 0%, transparent 50%)
          `,
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className='z-10 relative mx-auto max-w-4xl'>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='mb-8'
        >
          <h2 className='mb-6 font-noteworthy font-bold text-[var(--wd-text)] text-4xl md:text-5xl lg:text-6xl leading-tight'>
            Welcome to{' '}
            <span className='text-[var(--wd-plum)]'>Watchdog</span>{' '}
            <span className='text-[var(--wd-plum)]'>Media</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <p className='mx-auto max-w-3xl font-myriad text-[var(--wd-text)] text-lg md:text-xl lg:text-2xl leading-relaxed'>
            Film production support services for local and international film
            productions seeking to film in{' '}
            <span className='font-semibold text-[var(--wd-plum)]'>Durban</span>{' '}
            and other parts of{' '}
            <span className='font-semibold text-[var(--wd-plum)]'>
              KwaZulu-Natal, South Africa
            </span>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className='mt-12'
        >
          <div className='flex flex-wrap justify-center gap-6 font-myriad font-semibold text-[var(--wd-slate)] text-sm md:text-base'>
            <div className='flex items-center gap-2'>
              <div className='bg-[var(--wd-yellow)] rounded-full w-2 h-2'></div>
              <span>Local Productions</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-[var(--wd-magenta)] rounded-full w-2 h-2'></div>
              <span>International Films</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-[var(--wd-plum)] rounded-full w-2 h-2'></div>
              <span>KZN Expertise</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
