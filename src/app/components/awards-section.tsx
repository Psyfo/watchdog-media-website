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
    color: 'var(--wd-yellow)',
  },
  {
    title: 'Excellence in Animation',
    event: 'South African Film Awards',
    year: '2022',
    project: 'Taste Buds',
    icon: MedalIcon,
    color: 'var(--wd-magenta)',
  },
  {
    title: 'Outstanding Production Support',
    event: 'KZN Film Commission',
    year: '2023',
    project: 'Multiple Productions',
    icon: TrophyIcon,
    color: 'var(--wd-plum)',
  },
  {
    title: 'Women in Film Excellence',
    event: 'African Cinema Awards',
    year: '2022',
    project: 'Cream',
    icon: CrownIcon,
    color: 'var(--wd-yellow)',
  },
];

const pressItems = [
  {
    title: 'Watchdog Media Leading Film Innovation in KZN',
    publication: 'Film & TV Weekly',
    date: 'March 2023',
    type: 'Feature Article',
  },
  {
    title: 'Supporting International Productions in South Africa',
    publication: 'Production Africa Magazine',
    date: 'January 2023',
    type: 'Industry Spotlight',
  },
  {
    title: 'Empowering Women Behind the Camera',
    publication: 'Creative Industry Review',
    date: 'February 2023',
    type: 'Cover Story',
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
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      ref={ref}
      className='relative flex flex-col items-center bg-[var(--wd-surface)] px-6 py-20 md:py-32 overflow-hidden text-center'
    >
      {/* Background Pattern */}
      <motion.div
        className='absolute inset-0 opacity-5'
        style={{
          background: `
            radial-gradient(circle at 30% 30%, var(--wd-yellow) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, var(--wd-magenta) 0%, transparent 50%),
            radial-gradient(circle at 50% 20%, var(--wd-plum) 0%, transparent 50%)
          `,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className='z-10 relative mx-auto max-w-6xl'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='mb-16'
        >
          <h2 className='mb-6 font-noteworthy font-bold text-[var(--wd-text)] text-4xl md:text-5xl lg:text-6xl leading-tight'>
            Awards & <span className='text-[var(--wd-magenta)]'>Press</span>
          </h2>
          <p className='mx-auto max-w-3xl font-myriad text-[var(--wd-slate)] text-lg md:text-xl lg:text-2xl leading-relaxed'>
            <span className='font-semibold text-[var(--wd-plum)]'>
              Watchdog Media
            </span>{' '}
            has been recognized for its excellence in film production, receiving
            numerous awards and industry recognition for our commitment to{' '}
            <span className='font-semibold text-[var(--wd-magenta)]'>
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
              className='text-[var(--wd-yellow)]'
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
                className='group bg-white/70 hover:shadow-lg backdrop-blur-sm p-6 border border-[var(--wd-border-alpha)] rounded-2xl transition-all duration-300'
              >
                <div className='flex items-start gap-4'>
                  <div className='bg-gradient-to-br from-white/50 to-white/30 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300'>
                    <award.icon
                      size={32}
                      weight='fill'
                      style={{ color: award.color }}
                    />
                  </div>
                  <div className='text-left'>
                    <h4 className='mb-2 font-noteworthy font-bold text-[var(--wd-text)] text-xl'>
                      {award.title}
                    </h4>
                    <p className='mb-1 font-myriad font-semibold text-[var(--wd-slate)]'>
                      {award.event} • {award.year}
                    </p>
                    <p className='font-myriad font-medium text-[var(--wd-magenta)] text-sm'>
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
              className='text-[var(--wd-magenta)]'
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
                className='group bg-gradient-to-br from-white/80 to-white/60 hover:shadow-lg backdrop-blur-sm p-6 border border-[var(--wd-border-alpha)] rounded-2xl transition-all duration-300'
              >
                <div className='text-left'>
                  <div className='inline-flex items-center gap-2 bg-[var(--wd-yellow)] mb-4 px-3 py-1 rounded-full font-myriad font-bold text-[var(--wd-slate)] text-xs'>
                    <NewspaperIcon size={14} weight='fill' />
                    {press.type}
                  </div>
                  <h4 className='mb-3 font-noteworthy font-bold text-[var(--wd-text)] text-lg leading-tight'>
                    {press.title}
                  </h4>
                  <p className='mb-1 font-myriad font-semibold text-[var(--wd-magenta)] text-sm'>
                    {press.publication}
                  </p>
                  <p className='font-myriad text-[var(--wd-slate)] text-sm'>
                    {press.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className='text-center'
        >
          <div className='bg-gradient-to-r from-[var(--wd-magenta)] to-[var(--wd-plum)] mx-auto p-8 md:p-12 rounded-2xl max-w-2xl'>
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
              className='inline-flex items-center bg-white hover:bg-[var(--wd-yellow)] px-8 py-4 rounded-lg font-myriad font-bold text-[var(--wd-magenta)] hover:text-[var(--wd-slate)] text-lg transition-all duration-300'
              whileHover={{ scale: 1.05, y: -2 }}
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
