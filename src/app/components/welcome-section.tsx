'use client';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';
import { stats } from '@/lib/site';

export default function ManifestoSection() {
  return (
    <section id='manifesto' className='relative bg-ink py-24 md:py-36'>
      <Container size='wide'>
        <Reveal>
          <Kicker index='01'>Who we are</Kicker>
        </Reveal>

        <div className='mt-8 grid gap-12 lg:grid-cols-12'>
          <Reveal className='lg:col-span-8' delay={0.05}>
            <h2 className='text-balance text-3xl leading-[1.12] md:text-5xl lg:text-[3.4rem]'>
              Watchdog Media supports local and international productions filming
              in Durban and across KwaZulu-Natal —{' '}
              <span className='text-dim'>
                the calm operational spine beneath bold creative, and a crew
                that looks like the city it shoots in.
              </span>
            </h2>
          </Reveal>

          <Reveal className='lg:col-span-4 lg:pt-3' delay={0.12}>
            <p className='text-base leading-relaxed text-dim'>
              We blend corporate clarity with auteur edge: rigorous schedules,
              honest budgets and consent-first storytelling, delivered with the
              instinct of filmmakers who care about the frame as much as the
              call sheet.
            </p>
            <p className='mt-4 text-base leading-relaxed text-dim'>
              Above all, we champion women — in the chair, behind the lens and
              at the table where the decisions get made.
            </p>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={0.1}>
          <dl className='mt-20 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4'>
            {stats.map((s) => (
              <div key={s.label} className='bg-ink p-7 md:p-8'>
                <dt className='font-display text-4xl text-silver md:text-5xl'>
                  {s.value}
                </dt>
                <dd className='mt-2 wd-mono text-xs uppercase tracking-wider text-faint'>
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
