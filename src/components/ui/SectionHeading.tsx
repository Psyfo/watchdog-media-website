import { ReactNode } from 'react';
import Reveal from './Reveal';
import Kicker from './Kicker';

interface SectionHeadingProps {
  kicker?: string;
  index?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  kicker,
  index,
  title,
  lead,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <div
      className={`${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {kicker && (
        <Reveal>
          <Kicker index={index} align={align}>
            {kicker}
          </Kicker>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className='mt-6 text-4xl md:text-5xl lg:text-6xl'>{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p className='mt-6 text-lg leading-relaxed text-dim'>{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
