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
        className='top-10 right-10 absolute bg-gradient-to-br from-[var(--wd-yellow)]/10 to-[var(--wd-magenta)]/10 blur-xl rounded-full w-32 h-32'
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='bottom-20 left-10 absolute bg-gradient-to-br from-[var(--wd-plum)]/10 to-[var(--wd-yellow)]/10 blur-xl rounded-full w-24 h-24'
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
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
          <div className='flex justify-center items-center gap-4 mb-6'>
            <FilmSlateIcon
              size={48}
              weight='fill'
              className='text-[var(--wd-magenta)]'
            />
            <h2 className='font-noteworthy font-bold text-[var(--wd-text)] text-4xl md:text-5xl lg:text-6xl leading-tight'>
              Our <span className='text-[var(--wd-magenta)]'>Productions</span>
            </h2>
          </div>
          <p className='mx-auto max-w-3xl font-myriad text-[var(--wd-slate)] text-lg md:text-xl lg:text-2xl leading-relaxed'>
            Check out our various productions from animation to documentaries.
            <span className='font-semibold text-[var(--wd-plum)]'>
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
            <ProductionItem name='Cream' category='Short FilmSlate' delay={0} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProductionItem name='Alignment' category='Series' delay={0} />
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className='mt-16'
        >
          <motion.a
            href='/productions'
            className='group inline-flex justify-center items-center bg-[var(--wd-magenta)] hover:bg-[var(--wd-plum)] px-8 py-4 rounded-lg w-full sm:w-auto font-myriad font-bold !text-[var(--wd-silver)] text-lg transition-all duration-300'
            whileHover={{ scale: 1.05, y: -2 }}
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
