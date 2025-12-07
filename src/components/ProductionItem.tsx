'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface ProductionItemProps {
  name: string;
  category: string;
  className?: string;
  delay?: number;
}

const ProductionItem: React.FC<ProductionItemProps> = ({
  name,
  category,
  className,
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      whileHover={{ scale: 1.02 }}
      className={`relative flex items-center justify-center overflow-hidden text-center aspect-square min-h-[300px] bg-white border border-gray-300 hover:border-watchdog-dark rounded-lg shadow-sm hover:shadow-md group transition-all duration-300 ease-in-out ${
        className ?? ''
      }`}
    >
      {/* Category Label */}
      <div className='absolute top-2 right-2 text-xs text-watchdog-dark font-myriad bg-white/80 px-2 py-0.5 rounded capitalize z-20 shadow-sm'>
        {category}
      </div>

      {/* Overlay Layer */}
      <div className='absolute inset-0 transition duration-300 bg-white/90 group-hover:bg-white/80' />

      {/* Production Name */}
      <div className='z-30 text-[1.4rem] md:text-[1.6rem] font-bold uppercase text-watchdog-dark font-noteworthy relative px-4 text-balance'>
        {name}
      </div>
    </motion.div>
  );
};

export default ProductionItem;
