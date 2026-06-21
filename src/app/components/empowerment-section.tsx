'use client';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';
import { values } from '@/lib/site';

export default function EmpowermentSection() {
  return (
    <section className='relative overflow-hidden border-t border-white/10 bg-ink-2 py-24 md:py-36'>
      {/* Brand wash */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 opacity-70'
        style={{
          background:
            'radial-gradient(70% 60% at 85% 10%, rgba(236,0,140,0.16), transparent 60%), radial-gradient(60% 60% at 0% 100%, rgba(81,0,81,0.4), transparent 60%)',
        }}
      />
      <Container size='wide' className='relative'>
        <div className='grid gap-12 lg:grid-cols-12'>
          <div className='lg:col-span-6'>
            <Reveal>
              <Kicker>Our commitment</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className='mt-6 text-balance text-4xl leading-[1.05] md:text-6xl'>
                Women, championed{' '}
                <span className='font-light italic text-magenta'>
                  on and off
                </span>{' '}
                camera.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className='mt-7 max-w-md text-lg leading-relaxed text-dim'>
                Empowerment is not a campaign line for us — it&rsquo;s the way we
                staff a set. We build pathways for women and underrepresented
                crew, credit them visibly, and tell their stories with consent
                and care.
              </p>
            </Reveal>
          </div>

          <div className='lg:col-span-6'>
            <div className='grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2'>
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.06} className='bg-ink-2 p-7'>
                  <h3 className='font-display text-xl text-silver'>{v.title}</h3>
                  <p className='mt-3 text-sm leading-relaxed text-dim'>
                    {v.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
