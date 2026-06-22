'use client';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { formats } from '@/lib/site';

const steps = [
  {
    n: '01',
    title: 'Needs Analysis',
    body: 'We map the production requirements, schedule and budget — and the risks before they become problems.',
  },
  {
    n: '02',
    title: 'Niche Package',
    body: 'A bespoke package of production support services, assembled around exactly what your shoot needs.',
  },
  {
    n: '03',
    title: 'Execution',
    body: 'We provide and manage every logistical element on the ground, from first recce through final wrap.',
  },
];

export default function ProductionSupportSection() {
  return (
    <section className='relative border-t border-white/10 bg-ink-2 py-24 md:py-36'>
      <Container size='wide'>
        <SectionHeading
          kicker='Production support'
          index='02'
          title={
            <>
              The logistical backbone
              <br />
              of your shoot.
            </>
          }
          lead='Watchdog Media provides and manages the key logistical elements of your production so cast and crew experience a smooth, seamlessly executed shoot in Durban and across KwaZulu-Natal.'
        />

        {/* Process */}
        <div className='mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3'>
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className='group bg-ink-2 p-8 md:p-10'>
              <span className='font-display text-5xl text-white/10 transition-colors duration-500 group-hover:text-magenta/40'>
                {s.n}
              </span>
              <h3 className='mt-6 text-2xl'>{s.title}</h3>
              <p className='mt-3 text-sm leading-relaxed text-dim'>{s.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Formats + quote */}
        <div className='mt-16 grid items-center gap-12 lg:grid-cols-2'>
          <Reveal>
            <p className='wd-kicker'>Our support spans across</p>
            <ul className='mt-6 divide-y divide-white/10 border-y border-white/10'>
              {formats.map((f) => (
                <li
                  key={f.title}
                  className='flex items-baseline justify-between py-4'
                >
                  <span className='font-display text-xl text-silver'>
                    {f.title}
                  </span>
                  <span className='wd-mono text-xs uppercase tracking-wider text-faint'>
                    {f.note}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className='relative border border-white/10 bg-ink p-10 md:p-12'>
              <span
                aria-hidden
                className='absolute left-6 top-3 font-display text-7xl leading-none text-magenta/30'
              >
                &ldquo;
              </span>
              <blockquote className='relative font-display text-2xl italic leading-snug text-silver md:text-3xl'>
                The Wishbone for KZN film production support services.
              </blockquote>
              <figcaption className='mt-6 wd-mono text-xs uppercase tracking-widest text-faint'>
                — The Watchdog promise
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={0.1} className='mt-14'>
          <Button href='/services' variant='ghost' arrow>
            Explore all services
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
