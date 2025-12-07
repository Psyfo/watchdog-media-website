/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
'use client';
import { motion, useInView, Variants } from 'framer-motion';
import React, { useRef } from 'react';

import { ClipboardIcon, PackageIcon, PlayIcon } from '@phosphor-icons/react';

const serviceData = [
  {
    icon: ClipboardIcon,
    iconColor: 'var(--wd-yellow-600)',
    gradientFrom: 'var(--wd-yellow-50)',
    gradientTo: 'var(--wd-yellow-100)',
    borderColor: 'var(--wd-yellow-200)',
    textColor: 'var(--wd-yellow-900)',
    heading: 'Needs Analysis',
    description:
      'Discuss the film production requirements, schedule and budget.',
  },
  {
    icon: PackageIcon,
    iconColor: 'var(--wd-magenta-600)',
    gradientFrom: 'var(--wd-magenta-50)',
    gradientTo: 'var(--wd-magenta-100)',
    borderColor: 'var(--wd-magenta-200)',
    textColor: 'var(--wd-magenta-900)',
    heading: 'Niche Package',
    description:
      'Create a unique package of production support services based on filming needs',
  },
  {
    icon: PlayIcon,
    iconColor: 'var(--wd-plum-600)',
    gradientFrom: 'var(--wd-plum-50)',
    gradientTo: 'var(--wd-plum-100)',
    borderColor: 'var(--wd-plum-200)',
    textColor: 'var(--wd-plum-900)',
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
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.8, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
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
      {/* Soft Background with Lilac */}
      <div
        className='absolute inset-0 opacity-8'
        style={{
          background: `
            radial-gradient(circle at 30% 20%, var(--wd-lilac-100) 0%, transparent 60%),
            radial-gradient(circle at 70% 80%, var(--wd-lilac-200) 0%, transparent 60%),
            linear-gradient(45deg, var(--wd-lilac-50) 0%, transparent 70%)
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
            Film Production{' '}
            <motion.span
              className='text-[var(--wd-magenta-600)]'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Support
            </motion.span>
          </h2>
          <p className='mx-auto max-w-4xl font-myriad text-[var(--wd-slate-700)] text-lg md:text-xl leading-relaxed'>
            <span className='font-semibold text-[var(--wd-plum-700)]'>
              Watchdog Media
            </span>{' '}
            provides and manages the key logistical elements of your film
            production to ensure that both your crew and cast experience a
            smooth, seamlessly executed film shoot in{' '}
            <span className='font-semibold text-[var(--wd-magenta-600)]'>
              Durban
            </span>{' '}
            and other areas of{' '}
            <span className='font-semibold text-[var(--wd-magenta-600)]'>
              KwaZulu-Natal, South Africa
            </span>
            .
          </p>
        </motion.div>

        {/* Services Info */}
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
            className='backdrop-blur-sm p-8 md:p-12 border rounded-2xl'
            style={{
              background:
                'linear-gradient(135deg, var(--wd-lilac-50) 0%, var(--wd-lilac-100) 100%)',
              borderColor: 'var(--wd-lilac-200)',
            }}
          >
            <h3 className='mb-8 font-noteworthy font-bold text-[var(--wd-text)] text-2xl md:text-3xl'>
              Our Production Support Services span across:
            </h3>
            <div className='gap-6 grid grid-cols-1 md:grid-cols-3'>
              <motion.div
                className='flex items-center gap-4 hover:shadow-lg p-4 border rounded-xl transition-all duration-300'
                style={{
                  background:
                    'linear-gradient(135deg, var(--wd-magenta-50) 0%, var(--wd-plum-50) 100%)',
                  borderColor: 'var(--wd-magenta-200)',
                }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className='text-3xl'>🎬</div>
                <div className='text-left'>
                  <div className='font-myriad font-bold text-[var(--wd-text)]'>
                    Live Action
                  </div>
                  <div className='font-myriad text-[var(--wd-slate-600)] text-sm'>
                    Shorts and Features
                  </div>
                </div>
              </motion.div>

              <motion.div
                className='flex items-center gap-4 hover:shadow-lg p-4 border rounded-xl transition-all duration-300'
                style={{
                  background:
                    'linear-gradient(135deg, var(--wd-yellow-50) 0%, var(--wd-magenta-50) 100%)',
                  borderColor: 'var(--wd-yellow-200)',
                }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className='text-3xl'>🎥</div>
                <div className='text-left'>
                  <div className='font-myriad font-bold text-[var(--wd-text)]'>
                    Documentaries
                  </div>
                  <div className='font-myriad text-[var(--wd-slate-600)] text-sm'>
                    Shorts and Features
                  </div>
                </div>
              </motion.div>

              <motion.div
                className='flex items-center gap-4 hover:shadow-lg p-4 border rounded-xl transition-all duration-300'
                style={{
                  background:
                    'linear-gradient(135deg, var(--wd-plum-50) 0%, var(--wd-yellow-50) 100%)',
                  borderColor: 'var(--wd-plum-200)',
                }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className='text-3xl'>🛠️</div>
                <div className='text-left'>
                  <div className='font-myriad font-bold text-[var(--wd-text)]'>
                    Skills Shows
                  </div>
                  <div className='font-myriad text-[var(--wd-slate-600)] text-sm'>
                    Cooking, DIY, etc.
                  </div>
                </div>
              </motion.div>
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

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 60, scale: 0.9 }
          }
          transition={{
            duration: 1,
            delay: 0.8,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 120,
            damping: 20,
          }}
          className='flex flex-col items-center mx-auto max-w-xl text-center'
        >
          <div
            className='shadow-xl p-8 rounded-2xl'
            style={{
              background:
                'linear-gradient(135deg, var(--wd-magenta-600) 0%, var(--wd-plum-600) 100%)',
            }}
          >
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
