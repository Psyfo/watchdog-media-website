'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  imageAlt,
  heading,
  description,
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
      className='flex flex-col items-center p-6 text-center transition-shadow border border-gray-200 shadow-md rounded-2xl hover:shadow-lg'
    >
      <div className='flex items-center justify-center h-16 mb-4'>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={40}
          height={40}
          className='object-contain'
        />
      </div>
      <h4 className='mb-2 text-xl font-bold text-watchdog-dark font-noteworthy sm:text-2xl'>
        {heading}
      </h4>
      <p className='text-sm leading-relaxed text-watchdog-dark font-myriad sm:text-base'>
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
