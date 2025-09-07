/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
'use client';
import { motion, useInView, Variants } from 'framer-motion';
import React, { useRef } from 'react';

import {
  ArrowRightIcon,
  CameraIcon,
  MegaphoneIcon,
  UsersIcon,
} from '@phosphor-icons/react';

const serviceData = [
  {
    icon: MegaphoneIcon,
    iconColor: 'var(--wd-yellow)',
    heading: 'Directing Services',
    description:
      'Expert direction that brings your vision to life with artistic precision and professional execution.',
  },
  {
    icon: CameraIcon,
    iconColor: 'var(--wd-magenta)',
    heading: 'Production Services',
    description:
      'Comprehensive production management from pre-production planning to post-production delivery.',
  },
  {
    icon: UsersIcon,
    iconColor: 'var(--wd-plum)',
    heading: 'Key Crew Services',
    description:
      'Experienced crew members who understand the craft and deliver exceptional results on every project.',
  },
];

const CreativeServicesSection: React.FC = () => {
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
      className='relative flex flex-col items-center bg-white px-6 py-20 md:py-32 overflow-hidden text-center'
    >
      {/* Background Elements */}
      <motion.div
        className='top-20 left-10 absolute bg-gradient-to-br from-[var(--wd-plum)]/5 to-[var(--wd-magenta)]/5 blur-3xl rounded-full w-40 h-40'
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='right-10 bottom-20 absolute bg-gradient-to-br from-[var(--wd-yellow)]/5 to-[var(--wd-plum)]/5 blur-3xl rounded-full w-32 h-32'
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -25, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
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
            Creative <span className='text-[var(--wd-magenta)]'>Services</span>
          </h2>
          <p className='mx-auto max-w-3xl font-myriad text-[var(--wd-slate)] text-lg md:text-xl lg:text-2xl leading-relaxed'>
            <span className='font-semibold text-[var(--wd-plum)]'>
              Watchdog Media
            </span>{' '}
            offers a comprehensive range of creative services designed to bring
            your vision to life with{' '}
            <span className='font-semibold text-[var(--wd-magenta)]'>
              corporate-grade reliability
            </span>{' '}
            and{' '}
            <span className='font-semibold text-[var(--wd-magenta)]'>
              artist-grade vision
            </span>
            .
          </p>
        </motion.div>

        {/* Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className='mb-16'
        >
          <div className='bg-gradient-to-r from-[var(--wd-plum)] to-[var(--wd-magenta)] p-1 rounded-2xl'>
            <div className='bg-white p-8 md:p-12 rounded-2xl'>
              <div className='flex justify-center items-center gap-4 mb-6'>
                <UsersIcon
                  size={40}
                  weight='fill'
                  className='text-[var(--wd-magenta)]'
                />
                <h3 className='font-noteworthy font-bold text-[var(--wd-text)] text-2xl md:text-3xl'>
                  Empowering Women in Film
                </h3>
              </div>
              <p className='font-myriad text-[var(--wd-slate)] text-lg leading-relaxed'>
                We champion women's empowerment on- and off-camera, creating
                opportunities for female voices to be heard and stories to be
                told with authenticity and impact.
              </p>
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className='flex sm:flex-row flex-col justify-center items-center gap-6'
        >
          <motion.a
            href='/services'
            className='inline-flex justify-center items-center bg-[var(--wd-magenta)] hover:bg-[var(--wd-plum)] px-8 py-4 rounded-lg w-full sm:w-auto font-myriad font-bold !text-[var(--wd-silver)] text-lg transition-all duration-300'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <CameraIcon size={20} weight='fill' className='mr-2' />
            <span>Explore All Services</span>
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
            className='inline-flex justify-center items-center bg-transparent hover:bg-[var(--wd-yellow)] px-8 py-4 border-[var(--wd-yellow)] border-2 rounded-lg w-full sm:w-auto font-myriad font-bold !text-[var(--wd-slate)] hover:!text-[var(--wd-slate)] text-lg transition-all duration-300'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeServicesSection;
