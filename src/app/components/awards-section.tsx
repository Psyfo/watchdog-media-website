/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
'use client';
import { motion, useInView, Variants } from 'framer-motion';
import React, { useRef } from 'react';

import {
  CrownIcon,
  MedalIcon,
  NewspaperIcon,
  TrophyIcon,
} from '@phosphor-icons/react';

const awards = [
  {
    title: 'Best Documentary Feature',
    event: 'Durban International Film Festival',
    year: '2023',
    project: 'Medunsa',
    icon: TrophyIcon,
    color: 'var(--wd-yellow-600)',
    bgGradient:
      'linear-gradient(135deg, var(--wd-yellow-50) 0%, var(--wd-yellow-100) 100%)',
    borderColor: 'var(--wd-yellow-200)',
  },
  {
    title: 'Excellence in Animation',
    event: 'South African Film Awards',
    year: '2022',
    project: 'Taste Buds',
    icon: MedalIcon,
    color: 'var(--wd-magenta-600)',
    bgGradient:
      'linear-gradient(135deg, var(--wd-magenta-50) 0%, var(--wd-magenta-100) 100%)',
    borderColor: 'var(--wd-magenta-200)',
  },
  {
    title: 'Outstanding Production Support',
    event: 'KZN Film Commission',
    year: '2023',
    project: 'Multiple Productions',
    icon: TrophyIcon,
    color: 'var(--wd-plum-600)',
    bgGradient:
      'linear-gradient(135deg, var(--wd-plum-50) 0%, var(--wd-plum-100) 100%)',
    borderColor: 'var(--wd-plum-200)',
  },
  {
    title: 'Women in Film Excellence',
    event: 'African Cinema Awards',
    year: '2022',
    project: 'Cream',
    icon: CrownIcon,
    color: 'var(--wd-yellow-600)',
    bgGradient:
      'linear-gradient(135deg, var(--wd-yellow-50) 0%, var(--wd-yellow-100) 100%)',
    borderColor: 'var(--wd-yellow-200)',
  },
];

const pressItems = [
  {
    title: 'Watchdog Media Leading Film Innovation in KZN',
    publication: 'Film & TV Weekly',
    date: 'March 2023',
    type: 'Feature Article',
    bgGradient:
      'linear-gradient(135deg, var(--wd-lilac-50) 0%, var(--wd-lilac-100) 100%)',
    borderColor: 'var(--wd-lilac-200)',
  },
  {
    title: 'Supporting International Productions in South Africa',
    publication: 'Production Africa Magazine',
    date: 'January 2023',
    type: 'Industry Spotlight',
    bgGradient:
      'linear-gradient(135deg, var(--wd-lilac-100) 0%, var(--wd-lilac-200) 100%)',
    borderColor: 'var(--wd-lilac-300)',
  },
  {
    title: 'Empowering Women Behind the Camera',
    publication: 'Creative Industry Review',
    date: 'February 2023',
    type: 'Cover Story',
    bgGradient:
      'linear-gradient(135deg, var(--wd-lilac-50) 0%, var(--wd-lilac-100) 100%)',
    borderColor: 'var(--wd-lilac-200)',
  },
];

const AwardsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.8 },
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

  return (
    <section
      ref={ref}
      className='relative flex flex-col items-center bg-[var(--wd-surface)] px-6 py-20 md:py-32 overflow-hidden text-center'
    >
      {/* Soft Background Pattern */}
      <div
        className='absolute inset-0 opacity-8'
        style={{
          background: `
            radial-gradient(circle at 25% 25%, var(--wd-lilac-100) 0%, transparent 60%),
            radial-gradient(circle at 75% 75%, var(--wd-lilac-200) 0%, transparent 60%),
            radial-gradient(circle at 50% 10%, var(--wd-lilac-150) 0%, transparent 50%)
          `,
        }}
      />

      <div className='z-10 relative mx-auto max-w-6xl'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}
          className='mb-16'
        >
          <h2 className='mb-6 font-noteworthy font-bold text-[var(--wd-text)] text-4xl md:text-5xl lg:text-6xl leading-tight'>
            Awards &{' '}
            <motion.span
              className='text-[var(--wd-magenta-600)]'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Press
            </motion.span>
          </h2>
          <p className='mx-auto max-w-3xl font-myriad text-[var(--wd-slate-700)] text-lg md:text-xl lg:text-2xl leading-relaxed'>
            <span className='font-semibold text-[var(--wd-plum-700)]'>
              Watchdog Media
            </span>{' '}
            has been recognized for its excellence in film production, receiving
            numerous awards and industry recognition for our commitment to{' '}
            <span className='font-semibold text-[var(--wd-magenta-600)]'>
              craft and empowerment
            </span>
            .
          </p>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='mb-20'
        >
          <motion.div
            variants={itemVariants}
            className='flex justify-center items-center gap-4 mb-12'
          >
            <TrophyIcon
              size={40}
              weight='fill'
              className='text-[var(--wd-yellow-600)]'
            />
            <h3 className='font-noteworthy font-bold text-[var(--wd-text)] text-3xl md:text-4xl'>
              Recent Awards
            </h3>
          </motion.div>
          <div className='gap-6 grid grid-cols-1 md:grid-cols-2'>
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                variants={itemVariants}
                className='group hover:shadow-xl backdrop-blur-sm p-6 border rounded-2xl transition-all duration-500'
                style={{
                  background: award.bgGradient,
                  borderColor: award.borderColor,
                }}
              >
                <div className='flex items-start gap-4'>
                  <motion.div
                    className='p-3 rounded-xl transition-transform duration-300'
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)',
                    }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    <award.icon
                      size={32}
                      weight='fill'
                      style={{ color: award.color }}
                    />
                  </motion.div>
                  <div className='text-left'>
                    <h4 className='mb-2 font-noteworthy font-bold text-[var(--wd-text)] text-xl'>
                      {award.title}
                    </h4>
                    <p className='mb-1 font-myriad font-semibold text-[var(--wd-slate-700)]'>
                      {award.event} • {award.year}
                    </p>
                    <p className='font-myriad font-medium text-[var(--wd-magenta-600)] text-sm'>
                      Project: {award.project}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Press Section */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='mb-16'
        >
          <motion.div
            variants={itemVariants}
            className='flex justify-center items-center gap-4 mb-12'
          >
            <NewspaperIcon
              size={40}
              weight='fill'
              className='text-[var(--wd-magenta-600)]'
            />
            <h3 className='font-noteworthy font-bold text-[var(--wd-text)] text-3xl md:text-4xl'>
              In The Press
            </h3>
          </motion.div>
          <div className='gap-6 grid grid-cols-1 md:grid-cols-3'>
            {pressItems.map((press, index) => (
              <motion.div
                key={press.title}
                variants={itemVariants}
                className='group hover:shadow-xl backdrop-blur-sm p-6 border rounded-2xl transition-all duration-500'
                style={{
                  background: press.bgGradient,
                  borderColor: press.borderColor,
                }}
              >
                <div className='text-left'>
                  <div
                    className='inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full font-myriad font-bold text-xs'
                    style={{
                      background: 'var(--wd-yellow-500)',
                      color: 'var(--wd-slate-900)',
                    }}
                  >
                    <NewspaperIcon size={14} weight='fill' />
                    {press.type}
                  </div>
                  <h4 className='mb-3 font-noteworthy font-bold text-[var(--wd-text)] text-lg leading-tight'>
                    {press.title}
                  </h4>
                  <p className='mb-1 font-myriad font-semibold text-[var(--wd-magenta-600)] text-sm'>
                    {press.publication}
                  </p>
                  <p className='font-myriad text-[var(--wd-slate-600)] text-sm'>
                    {press.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 60 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.8, y: 60 }
          }
          transition={{
            duration: 1,
            delay: 1,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 120,
            damping: 20,
          }}
          className='text-center'
        >
          <div
            className='shadow-xl mx-auto p-8 md:p-12 rounded-2xl max-w-2xl'
            style={{
              background:
                'linear-gradient(135deg, var(--wd-magenta-600) 0%, var(--wd-plum-600) 100%)',
            }}
          >
            <div className='flex justify-center items-center gap-4 mb-4'>
              <CrownIcon size={32} weight='fill' className='text-white' />
              <h3 className='font-noteworthy font-bold text-white text-2xl md:text-3xl'>
                Ready to Create Award-Winning Content?
              </h3>
            </div>
            <p className='mb-8 font-myriad text-white/90 text-lg leading-relaxed'>
              Join the ranks of acclaimed productions. Let's create something
              extraordinary together.
            </p>
            <motion.a
              href='/contact'
              className='inline-flex items-center shadow-lg px-8 py-4 rounded-lg font-myriad font-bold text-lg transition-all duration-300'
              style={{
                background: 'white',
                color: 'var(--wd-magenta-600)',
              }}
              whileHover={{
                scale: 1.05,
                y: -3,
                background: 'var(--wd-yellow-500)',
                color: 'var(--wd-slate-900)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
