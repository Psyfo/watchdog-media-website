import React from 'react';
import ServiceCard from '@/components/service-card';
import TextBlock from '../../components/text-block';

const serviceData = [
  {
    imageSrc: '/images/clapperboard.svg',
    imageAlt: 'Clapperboard Icon',
    heading: 'Directing Services',
    description:
      'ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    imageSrc: '/images/director-chair.svg',
    imageAlt: 'Director Chair Icon',
    heading: 'Production Services',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
  },
  {
    imageSrc: '/images/video-cam.svg',
    imageAlt: 'Video Camera Icon',
    heading: 'Key Crew Services',
    description:
      'Ipsum lorem dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
  },
];

const CreativeServices: React.FC = () => {
  return (
    <section className='flex flex-col items-center px-6 py-16 text-center bg-white md:py-24'>
      <TextBlock
        heading='Creative Services'
        text='Watchdog Media offers a range of creative services to support your film production needs.'
      />
      <div className='grid w-full max-w-6xl grid-cols-1 gap-8 my-12 md:grid-cols-3'>
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
    </section>
  );
};

export default CreativeServices;
