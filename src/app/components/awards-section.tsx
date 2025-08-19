'use client';
import React from 'react';

import TextBlock from '@/components/TextBlock';

const AwardsSection: React.FC = () => {
  return (
    <section className='flex flex-col items-center px-6 py-16 text-center bg-white md:py-24'>
      <TextBlock
        heading='AwardsSection'
        text='Watchdog Media has been recognized for its excellence in film production, receiving numerous AwardsSection and accolades.'
      />
    </section>
  );
};

export default AwardsSection;
