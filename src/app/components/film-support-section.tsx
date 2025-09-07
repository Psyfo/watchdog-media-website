/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
'use client';
import { motion, useInView, Variants } from 'framer-motion';
import React, { useRef } from 'react';

import ServiceCard from '@/components/ServiceCard';
import { ClipboardIcon, PackageIcon, PlayIcon } from '@phosphor-icons/react';

const serviceData = [
  {
    icon: ClipboardIcon,
    iconColor: 'var(--wd-yellow)',
    heading: 'Needs Analysis',
    description:
      'Discuss the film production requirements, schedule and budget.',
  },
  {
    icon: PackageIcon,
    iconColor: 'var(--wd-magenta)',
    heading: 'Niche Package',
    description:
      'Create a unique package of production support services based on filming needs',
  },
  {
    icon: PlayIcon,
    iconColor: 'var(--wd-plum)',
    heading: 'Execution',
    description:
      'Providing and managing all film production support during filming',
  },
];

const FilmSupportSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
            linear-gradient(45deg, var(--wd-plum) 0%, transparent 70%),
            linear-gradient(-45deg, var(--wd-magenta) 0%, transparent 70%),
            radial-gradient(circle at center, var(--wd-yellow) 0%, transparent 50%)
          `,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
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
            Film Production{' '}
            <span className='text-[var(--wd-magenta)]'>Support</span>
          </h2>
          <p className='mx-auto max-w-4xl font-myriad text-[var(--wd-slate)] text-lg md:text-xl leading-relaxed'>
            <span className='font-semibold text-[var(--wd-plum)]'>
              Watchdog Media
            </span>{' '}
            provides and manages the key logistical elements of your film
            production to ensure that both your crew and cast experience a
            smooth, seamlessly executed film shoot in{' '}
            <span className='font-semibold text-[var(--wd-magenta)]'>
              Durban
            </span>{' '}
            and other areas of{' '}
            <span className='font-semibold text-[var(--wd-magenta)]'>
              KwaZulu-Natal, South Africa
            </span>
            .
          </p>
        </motion.div>

        {/* Services Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className='mb-16'
        >
          <div className='bg-white/50 backdrop-blur-sm p-8 md:p-12 border border-[var(--wd-border-alpha)] rounded-2xl'>
            <h3 className='mb-8 font-noteworthy font-bold text-[var(--wd-text)] text-2xl md:text-3xl'>
              Our Production Support Services span across:
            </h3>
            <div className='gap-6 grid grid-cols-1 md:grid-cols-3'>
              <div className='flex items-center gap-4 bg-gradient-to-r from-[var(--wd-magenta)]/10 to-[var(--wd-plum)]/10 p-4 border border-[var(--wd-magenta)]/20 rounded-xl'>
                <div className='text-3xl'>🎬</div>
                <div className='text-left'>
                  <div className='font-myriad font-bold text-[var(--wd-text)]'>
                    Live Action
                  </div>
                  <div className='font-myriad text-[var(--wd-slate)] text-sm'>
                    Shorts and Features
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-4 bg-gradient-to-r from-[var(--wd-yellow)]/10 to-[var(--wd-magenta)]/10 p-4 border border-[var(--wd-yellow)]/20 rounded-xl'>
                <div className='text-3xl'>🎥</div>
                <div className='text-left'>
                  <div className='font-myriad font-bold text-[var(--wd-text)]'>
                    Documentaries
                  </div>
                  <div className='font-myriad text-[var(--wd-slate)] text-sm'>
                    Shorts and Features
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-4 bg-gradient-to-r from-[var(--wd-plum)]/10 to-[var(--wd-yellow)]/10 p-4 border border-[var(--wd-plum)]/20 rounded-xl'>
                <div className='text-3xl'>🛠️</div>
                <div className='text-left'>
                  <div className='font-myriad font-bold text-[var(--wd-text)]'>
                    Skills Shows
                  </div>
                  <div className='font-myriad text-[var(--wd-slate)] text-sm'>
                    Cooking, DIY, etc.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='gap-8 grid grid-cols-1 md:grid-cols-3 mb-16 w-full'
        >
          {serviceData.map((service, idx) => (
            <motion.div key={service.heading} variants={itemVariants}>
              <div className='group bg-white/70 hover:shadow-lg backdrop-blur-sm p-8 border border-[var(--wd-border-alpha)] rounded-2xl h-full transition-all duration-300'>
                <div className='flex flex-col items-center h-full text-center'>
                  <div className='bg-gradient-to-br from-white/50 to-white/30 mb-6 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300'>
                    <service.icon
                      size={48}
                      weight='fill'
                      style={{ color: service.iconColor }}
                    />
                  </div>
                  <h3 className='mb-4 font-noteworthy font-bold text-[var(--wd-text)] text-xl md:text-2xl'>
                    {service.heading}
                  </h3>
                  <p className='flex-grow font-myriad text-[var(--wd-slate)] text-base leading-relaxed'>
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className='flex flex-col items-center mx-auto max-w-xl text-center'
        >
          <div className='bg-gradient-to-r from-[var(--wd-magenta)] to-[var(--wd-plum)] p-8 rounded-2xl'>
            <p className='font-noteworthy font-bold text-white text-xl md:text-2xl leading-relaxed'>
              "The Wishbone for KZN film production support services."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FilmSupportSection;
