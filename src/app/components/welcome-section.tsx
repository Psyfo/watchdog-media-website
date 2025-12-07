'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import { GlobeIcon, HeartIcon, StarIcon } from '@phosphor-icons/react';

const WelcomeSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className='relative flex flex-col justify-center items-center bg-[var(--wd-surface)] px-6 py-20 md:py-32 overflow-hidden text-center'
    >
      {/* Static Background Pattern with Lilac Gradients */}
      <div
        className='absolute inset-0 opacity-10'
        style={{
          background: `
            radial-gradient(circle at 20% 20%, var(--wd-lilac-300) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, var(--wd-lilac-400) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, var(--wd-lilac-200) 0%, transparent 40%)
          `,
        }}
      />

      {/* Floating Shapes */}
      <motion.div
        className='top-20 right-20 absolute opacity-20 rounded-full w-32 h-32'
        style={{ background: 'var(--wd-gradient-soft)' }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInView ? { opacity: 0.2, scale: 1 } : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
      />
      <motion.div
        className='bottom-20 left-16 absolute opacity-15 rounded-full w-24 h-24'
        style={{ background: 'var(--wd-gradient-elegant)' }}
        initial={{ opacity: 0, scale: 0.3 }}
        animate={
          isInView ? { opacity: 0.15, scale: 1 } : { opacity: 0, scale: 0.3 }
        }
        transition={{ duration: 1.8, delay: 0.8, ease: 'easeOut' }}
      />

      <div className='z-10 relative mx-auto max-w-4xl'>
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.8 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 80, scale: 0.8 }
          }
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}
          className='mb-8'
        >
          <h2 className='mb-6 font-noteworthy font-bold text-[var(--wd-text)] text-4xl md:text-5xl lg:text-6xl leading-tight'>
            Welcome to{' '}
            <motion.span
              className='text-[var(--wd-plum-600)]'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Watchdog
            </motion.span>{' '}
            <motion.span
              className='text-[var(--wd-plum-600)]'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Media
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: 'spring',
            stiffness: 120,
            damping: 15,
          }}
        >
          <p className='mx-auto max-w-3xl font-myriad text-[var(--wd-slate-700)] text-lg md:text-xl lg:text-2xl leading-relaxed'>
            Film production support services for local and international film
            productions seeking to film in{' '}
            <span className='font-semibold text-[var(--wd-plum-700)]'>
              Durban
            </span>{' '}
            and other parts of{' '}
            <span className='font-semibold text-[var(--wd-magenta-700)]'>
              KwaZulu-Natal, South Africa
            </span>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }
          }
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 150,
            damping: 20,
          }}
          className='mt-12'
        >
          <div className='flex flex-wrap justify-center gap-6 font-myriad font-semibold text-sm md:text-base'>
            <motion.div
              className='flex items-center gap-3 hover:shadow-lg p-4 border rounded-xl transition-all duration-300'
              style={{
                background:
                  'linear-gradient(135deg, var(--wd-yellow-50) 0%, var(--wd-yellow-100) 100%)',
                borderColor: 'var(--wd-yellow-200)',
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <GlobeIcon
                size={24}
                weight='fill'
                className='text-[var(--wd-yellow-700)]'
              />
              <span className='text-[var(--wd-yellow-900)]'>
                Local Productions
              </span>
            </motion.div>

            <motion.div
              className='flex items-center gap-3 hover:shadow-lg p-4 border rounded-xl transition-all duration-300'
              style={{
                background:
                  'linear-gradient(135deg, var(--wd-magenta-50) 0%, var(--wd-magenta-100) 100%)',
                borderColor: 'var(--wd-magenta-200)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <HeartIcon
                size={24}
                weight='fill'
                className='text-[var(--wd-magenta-700)]'
              />
              <span className='text-[var(--wd-magenta-900)]'>
                International Films
              </span>
            </motion.div>

            <motion.div
              className='flex items-center gap-3 hover:shadow-lg p-4 border rounded-xl transition-all duration-300'
              style={{
                background:
                  'linear-gradient(135deg, var(--wd-plum-50) 0%, var(--wd-plum-100) 100%)',
                borderColor: 'var(--wd-plum-200)',
              }}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <StarIcon
                size={24}
                weight='fill'
                className='text-[var(--wd-plum-700)]'
              />
              <span className='text-[var(--wd-plum-900)]'>KZN Expertise</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
