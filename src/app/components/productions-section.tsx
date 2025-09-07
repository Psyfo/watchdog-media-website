'use client';
import { motion, useInView, Variants } from 'framer-motion';
import React, { useRef } from 'react';

import ProductionItem from '@/components/ProductionItem';
import { ArrowRightIcon, FilmSlateIcon, PlayIcon } from '@phosphor-icons/react';

const ProductionsSection: React.FC = () => {
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
      className='relative flex flex-col items-center bg-white px-6 py-20 md:py-32 overflow-hidden text-center'
    >
      {/* Soft Background Elements */}
      <div
        className='absolute inset-0 opacity-6'
        style={{
          background: `
            radial-gradient(circle at 25% 30%, var(--wd-lilac-100) 0%, transparent 60%),
            radial-gradient(circle at 75% 70%, var(--wd-lilac-200) 0%, transparent 60%),
            linear-gradient(45deg, var(--wd-lilac-50) 0%, transparent 70%)
          `,
        }}
      />

      {/* Floating Shapes */}
      <motion.div
        className='top-20 right-20 absolute opacity-15 rounded-full w-40 h-40'
        style={{ background: 'var(--wd-gradient-soft)' }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInView ? { opacity: 0.15, scale: 1 } : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
      />
      <motion.div
        className='bottom-20 left-16 absolute opacity-12 rounded-full w-32 h-32'
        style={{ background: 'var(--wd-gradient-elegant)' }}
        initial={{ opacity: 0, scale: 0.3 }}
        animate={
          isInView ? { opacity: 0.12, scale: 1 } : { opacity: 0, scale: 0.3 }
        }
        transition={{ duration: 1.8, delay: 0.8, ease: 'easeOut' }}
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
          <div className='flex justify-center items-center gap-4 mb-6'>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={
                isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
              }
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: 'spring',
                stiffness: 200,
              }}
            >
              <FilmSlateIcon
                size={48}
                weight='fill'
                className='text-[var(--wd-magenta-600)]'
              />
            </motion.div>
            <h2 className='font-noteworthy font-bold text-[var(--wd-text)] text-4xl md:text-5xl lg:text-6xl leading-tight'>
              Our{' '}
              <motion.span
                className='text-[var(--wd-magenta-600)]'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Productions
              </motion.span>
            </h2>
          </div>
          <p className='mx-auto max-w-3xl font-myriad text-[var(--wd-slate-700)] text-lg md:text-xl lg:text-2xl leading-relaxed'>
            Check out our various productions from animation to documentaries.
            <span className='font-semibold text-[var(--wd-plum-700)]'>
              {' '}
              Watchdog Media
            </span>{' '}
            specializes in creating compelling content that resonates with
            audiences.
          </p>
        </motion.div>

        {/* Productions Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='gap-8 grid grid-cols-1 md:grid-cols-2 p-6'
        >
          <motion.div variants={itemVariants}>
            <ProductionItem name='Taste Buds' category='Animation' delay={0} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProductionItem name='Medunsa' category='Documentary' delay={0} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProductionItem name='Cream' category='Short Film' delay={0} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProductionItem name='Alignment' category='Series' delay={0} />
          </motion.div>
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
          className='mt-16'
        >
          <motion.a
            href='/productions'
            className='group inline-flex items-center shadow-lg px-8 py-4 rounded-lg font-myriad font-bold text-lg transition-all duration-300'
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
            <PlayIcon size={20} weight='fill' className='mr-2' />
            <span>View All Productions</span>
            <motion.div
              className='ml-2'
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ArrowRightIcon size={20} weight='bold' />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionsSection;
