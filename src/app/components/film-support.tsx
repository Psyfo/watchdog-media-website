'use client';
import React from 'react';
import ServiceCard from '@/components/service-card';
import TextBlock from '@/components/text-block';

const serviceData = [
  {
    imageSrc: '/images/clapperboard.svg',
    imageAlt: 'Clapperboard Icon',
    heading: 'Needs Analysis',
    description:
      'Discuss the film production requirements, schedule and budget.',
  },
  {
    imageSrc: '/images/director-chair.svg',
    imageAlt: 'Director Chair Icon',
    heading: 'Niche Package',
    description:
      'Create a unique package of production support services based on filming needs',
  },
  {
    imageSrc: '/images/video-cam.svg',
    imageAlt: 'Video Camera Icon',
    heading: 'Execution',
    description:
      'Providing and managing all film production support during filming',
  },
];

const FilmSupport: React.FC = () => {
  return (
    <section className='flex flex-col items-center px-6 py-16 text-center md:py-24'>
      <TextBlock
        heading='Film Production Support'
        text='Watchdog Media provides and manages the key logistical elements of your film production to ensure that both your crew and cast experience a smooth, seamlessly executed film shoot in Durban and other areas of KwaZulu-Natal, South Africa.'
      />

      <div className='my-12'>
        <h3 className='mb-4 font-bold text-[1rem] text-watchdog-dark font-myriad md:text-[1.5rem]'>
          Our Production Support Services span across:
        </h3>
        <ul className='space-y-2 text-base leading-relaxed text-watchdog-dark font-myriad sm:text-lg md:text-xl'>
          <li>🎬 Live Action (Shorts and Features)</li>
          <li>🎥 Documentaries (Shorts and Features)</li>
          <li>🛠️ Skills Shows (e.g. Cooking, Home DIY, Hair, etc.)</li>
        </ul>
      </div>

      <div className='grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3'>
        {serviceData.map((service, idx) => (
          <ServiceCard
            key={service.heading}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
            heading={service.heading}
            description={service.description}
            delay={idx * 0.2} // staggered animation
          />
        ))}
      </div>

      <div className='flex flex-col items-center max-w-xl mt-16 text-center'>
        {/* <Image
          src='/images/icons/feather-icon.png' // replace with your actual path
          alt='Wishbone Icon'
          width={40}
          height={40}
          className='mb-3'
        /> */}
        <p className='text-base italic leading-relaxed text-watchdog-dark font-myriad sm:text-lg md:text-xl'>
          The Wishbone for KZN film production support services.
        </p>
      </div>
    </section>
  );
};

export default FilmSupport;
