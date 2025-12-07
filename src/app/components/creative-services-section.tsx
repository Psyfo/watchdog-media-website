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
    iconColor: 'var(--wd-yellow-600)',
    gradientFrom: 'var(--wd-yellow-50)',
    gradientTo: 'var(--wd-yellow-100)',
    borderColor: 'var(--wd-yellow-200)',
    textColor: 'var(--wd-yellow-900)',
    heading: 'Directing Services',
    description:
      'Expert direction that brings your vision to life with artistic precision and professional execution.',
  },
  {
    icon: CameraIcon,
    iconColor: 'var(--wd-magenta-600)',
    gradientFrom: 'var(--wd-magenta-50)',
    gradientTo: 'var(--wd-magenta-100)',
    borderColor: 'var(--wd-magenta-200)',
    textColor: 'var(--wd-magenta-900)',
    heading: 'Production Services',
    description:
      'Comprehensive production management from pre-production planning to post-production delivery.',
  },
  {
    icon: UsersIcon,
    iconColor: 'var(--wd-plum-600)',
    gradientFrom: 'var(--wd-plum-50)',
    gradientTo: 'var(--wd-plum-100)',
    borderColor: 'var(--wd-plum-200)',
    textColor: 'var(--wd-plum-900)',
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
      className='relative flex flex-col items-center bg-white px-6 py-20 md:py-32 overflow-hidden text-center'
    >
      {/* Soft Gradient Background */}
      <div
        className='absolute inset-0 opacity-6'
        style={{
          background: `
            radial-gradient(circle at 20% 30%, var(--wd-lilac-100) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, var(--wd-lilac-200) 0%, transparent 60%),
            linear-gradient(135deg, var(--wd-lilac-50) 0%, transparent 50%)
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
            Creative{' '}
            <motion.span
              className='text-[var(--wd-magenta-600)]'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Services
            </motion.span>
          </h2>
          <p className='mx-auto max-w-3xl font-myriad text-[var(--wd-slate-700)] text-lg md:text-xl lg:text-2xl leading-relaxed'>
            <span className='font-semibold text-[var(--wd-plum-700)]'>
              Watchdog Media
            </span>{' '}
            offers a comprehensive range of creative services designed to bring
            your vision to life with{' '}
            <span className='font-semibold text-[var(--wd-magenta-600)]'>
              corporate-grade reliability
            </span>{' '}
            and{' '}
            <span className='font-semibold text-[var(--wd-magenta-600)]'>
              artist-grade vision
            </span>
            .
          </p>
        </motion.div>

        {/* Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 60 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.8, y: 60 }
          }
          transition={{
            duration: 1,
            delay: 0.2,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 120,
            damping: 20,
          }}
          className='mb-16'
        >
          <div
            className='shadow-lg p-2 rounded-2xl'
            style={{
              background:
                'linear-gradient(135deg, var(--wd-plum-500) 0%, var(--wd-magenta-500) 100%)',
            }}
          >
            <div
              className='p-8 md:p-12 rounded-xl'
              style={{
                background:
                  'linear-gradient(135deg, var(--wd-lilac-50) 0%, var(--wd-lilac-100) 100%)',
              }}
            >
              <div className='flex justify-center items-center gap-4 mb-6'>
                <UsersIcon
                  size={40}
                  weight='fill'
                  className='text-[var(--wd-magenta-600)]'
                />
                <h3 className='font-noteworthy font-bold text-[var(--wd-text)] text-2xl md:text-3xl'>
                  Empowering Women in Film
                </h3>
              </div>
              <p className='font-myriad text-[var(--wd-slate-700)] text-lg leading-relaxed'>
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
              <div
                className='group hover:shadow-xl backdrop-blur-sm p-8 border rounded-2xl h-full transition-all duration-500'
                style={{
                  background: `linear-gradient(135deg, ${service.gradientFrom} 0%, ${service.gradientTo} 100%)`,
                  borderColor: service.borderColor,
                }}
              >
                <div className='flex flex-col items-center h-full text-center'>
                  <motion.div
                    className='mb-6 p-4 rounded-xl transition-transform duration-300'
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)',
                    }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    <service.icon
                      size={48}
                      weight='fill'
                      style={{ color: service.iconColor }}
                    />
                  </motion.div>
                  <h3 className='mb-4 font-noteworthy font-bold text-[var(--wd-text)] text-xl md:text-2xl'>
                    {service.heading}
                  </h3>
                  <p
                    className='flex-grow font-myriad text-base leading-relaxed'
                    style={{ color: service.textColor }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
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
            delay: 0.8,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 120,
            damping: 20,
          }}
          className='flex sm:flex-row flex-col justify-center items-center gap-6'
        >
          <motion.a
            href='/services'
            className='inline-flex items-center shadow-lg px-8 py-4 rounded-lg font-myriad font-bold text-lg transition-all duration-300'
            style={{
              background:
                'linear-gradient(135deg, var(--wd-magenta-500) 0%, var(--wd-plum-500) 100%)',
              color: 'white',
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: '0 20px 40px rgba(236, 0, 140, 0.3)',
            }}
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
            className='inline-flex items-center px-8 py-4 border-2 rounded-lg font-myriad font-bold text-lg transition-all duration-300'
            style={{
              background: 'transparent',
              borderColor: 'var(--wd-yellow-500)',
              color: 'var(--wd-yellow-700)',
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
              background: 'var(--wd-yellow-500)',
              color: 'var(--wd-slate-900)',
            }}
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
