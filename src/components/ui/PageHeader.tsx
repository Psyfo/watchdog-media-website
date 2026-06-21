import { ReactNode } from 'react';
import Container from './Container';
import Reveal from './Reveal';
import Kicker from './Kicker';

interface PageHeaderProps {
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  meta?: ReactNode;
}

export default function PageHeader({
  kicker,
  title,
  lead,
  meta,
}: PageHeaderProps) {
  return (
    <header className='relative overflow-hidden border-b border-white/10 bg-ink pb-16 pt-36 md:pb-24 md:pt-48'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 opacity-60'
        style={{
          background:
            'radial-gradient(60% 70% at 90% 0%, rgba(236,0,140,0.12), transparent 60%)',
        }}
      />
      <Container size='wide' className='relative'>
        <Reveal>
          <Kicker>{kicker}</Kicker>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className='mt-7 max-w-4xl text-[clamp(2.75rem,7vw,6rem)] leading-[0.95]'>
            {title}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={0.1}>
            <p className='mt-8 max-w-2xl text-lg leading-relaxed text-dim'>
              {lead}
            </p>
          </Reveal>
        )}
        {meta && <div className='mt-10'>{meta}</div>}
      </Container>
    </header>
  );
}
