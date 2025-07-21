import ProductionItem from '@/components/production-item';
import React from 'react';
import TextBlock from '@/components/text-block';

const Productions: React.FC = () => {
  return (
    <section className='flex flex-col items-center px-6 py-16 text-center bg-gray-100 md:py-24'>
      <TextBlock
        heading='Productions'
        text='Check out our various productions from animation to documentaries. Watchdog Media specializes in creating compelling content that resonates with audiences.'
      />

      <div className='grid grid-cols-1 gap-6 p-6 md:grid-cols-2'>
        <ProductionItem name='Taste Buds' category='Animation' delay={0} />
        <ProductionItem name='Medunsa' category='Documentary' delay={0.1} />
        <ProductionItem name='Cream' category='Short Film' delay={0.2} />
        <ProductionItem name='Alignment' category='Series' delay={0.3} />
      </div>
    </section>
  );
};

export default Productions;
