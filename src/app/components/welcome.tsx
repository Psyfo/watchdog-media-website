import React from 'react';

const Welcome: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center px-6 py-[80px] text-center md:py-[120px] bg-watchdog-light'>
      <h1 className='mb-6 text-[18px] font-bold text-watchdog-dark font-noteworthy md:text-[30px] uppercase'>
        Welcome to Watchdog Media
      </h1>
      <p className='md:max-w-[50vw] text-base leading-relaxed text-watchdog-dark font-myriad md:text-[30px] text-justify'>
        Film production support services for local and international film
        productions seeking to film in Durban and other parts of KwaZulu- Natal,
        South Africa.
      </p>
    </section>
  );
};

export default Welcome;
