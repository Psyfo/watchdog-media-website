'use client';
import React, { useRef } from 'react';
import { Variants, motion, useInView } from 'framer-motion';

interface TextBlockProps {
  heading?: string;
  text?: string;
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const TextBlock: React.FC<TextBlockProps> = ({ heading, text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      variants={textVariants}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
    >
      {heading && (
        <h1 className='mb-6 text-[18px] font-bold text-watchdog-purple font-noteworthy md:text-[30px] uppercase'>
          {heading}
        </h1>
      )}
      <p className='md:max-w-[50vw] text-base leading-relaxed text-watchdog-dark font-myriad md:text-[30px] text-justify'>
        {text}
      </p>
    </motion.div>
  );
};

export default TextBlock;
