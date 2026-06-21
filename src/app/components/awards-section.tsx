'use client';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { awards, press } from '@/lib/site';

export default function AwardsPressSection() {
  return (
    <section className='relative border-t border-white/10 bg-ink py-24 md:py-36'>
      <Container size='wide'>
        <SectionHeading
          kicker='Recognition'
          index='05'
          title={
            <>
              Awarded for craft
              <br />
              and courage.
            </>
          }
        />

        <div className='mt-16 grid gap-12 lg:grid-cols-12'>
          {/* Awards */}
          <div className='lg:col-span-7'>
            <p className='wd-kicker mb-6'>Recent awards</p>
            <ul className='border-t border-white/10'>
              {awards.map((a, i) => (
                <Reveal key={a.title} delay={i * 0.05}>
                  <li className='flex items-start justify-between gap-6 border-b border-white/10 py-5'>
                    <div>
                      <h3 className='font-display text-lg text-silver md:text-xl'>
                        {a.title}
                      </h3>
                      <p className='mt-1 text-sm text-dim'>
                        {a.event} · {a.project}
                      </p>
                    </div>
                    <div className='shrink-0 text-right'>
                      <span
                        className={`wd-mono text-xs uppercase tracking-wider ${
                          a.result === 'Winner' ? 'text-yellow' : 'text-faint'
                        }`}
                      >
                        {a.result}
                      </span>
                      <p className='mt-1 wd-mono text-xs text-faint'>{a.year}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Press */}
          <div className='lg:col-span-5'>
            <p className='wd-kicker mb-6'>In the press</p>
            <ul className='space-y-6'>
              {press.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.05}>
                  <li className='border-l border-white/10 pl-5'>
                    <div className='flex items-center gap-2 wd-mono text-[0.65rem] uppercase tracking-widest text-magenta'>
                      {p.type}
                      <span className='text-faint'>· {p.date}</span>
                    </div>
                    <h3 className='mt-2 font-display text-lg leading-snug text-silver'>
                      {p.title}
                    </h3>
                    <p className='mt-1 text-sm text-dim'>{p.publication}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal className='mt-14'>
          <Button href='/awards' variant='ghost' arrow>
            Awards &amp; press
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
