import React from 'react';
import TextBlock from '@/components/text-block';

const Welcome: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center px-6 py-[80px] text-center md:py-[120px] bg-watchdog-light'>
      <TextBlock
        heading='Welcome to Watchdog Media'
        text='Film production support services for local and international film productions seeking to film in Durban and other parts of KwaZulu-Natal, South Africa.'
      />
    </section>
  );
};

export default Welcome;
