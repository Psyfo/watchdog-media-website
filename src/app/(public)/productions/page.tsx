import type { Metadata } from 'next';
import Image from 'next/image';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import PageHeader from '@/components/ui/PageHeader';
import { productions } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Productions',
  description:
    'Selected productions from Watchdog Media — animation, documentary, short film and series, supported and created across KwaZulu-Natal.',
};

export default function ProductionsPage() {
  return (
    <>
      <PageHeader
        kicker='Selected work'
        title={
          <>
            The stories we&rsquo;ve
            <br />
            helped tell.
          </>
        }
        lead='From a Pixar-bright animation to an award-winning documentary, a noir short to a streaming drama — productions we developed, directed or carried on our shoulders.'
        meta={
          <div className='flex flex-wrap gap-x-6 gap-y-2'>
            {productions.map((p) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className='wd-mono text-xs uppercase tracking-wider text-faint transition-colors hover:text-magenta'
              >
                {p.title}
              </a>
            ))}
          </div>
        }
      />

      {productions.map((p, i) => (
        <section
          key={p.slug}
          id={p.slug}
          className={`scroll-mt-24 border-b border-white/10 py-20 md:py-28 ${
            i % 2 === 1 ? 'bg-ink-2' : 'bg-ink'
          }`}
        >
          <Container size='wide'>
            <div className='grid items-center gap-10 lg:grid-cols-2 lg:gap-16'>
              {/* Poster */}
              <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className='relative aspect-square overflow-hidden border border-white/10 bg-ink-3'>
                  <Image
                    src={p.poster}
                    alt={`${p.title} poster`}
                    fill
                    sizes='(max-width: 1024px) 100vw, 50vw'
                    className='object-cover'
                  />
                </div>
              </Reveal>

              {/* Detail */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <Reveal>
                  <div className='flex items-center gap-3 wd-mono text-xs uppercase tracking-widest'>
                    <span style={{ color: p.accent }}>●</span>
                    <span className='text-silver'>{p.category}</span>
                    <span className='text-faint'>/ {p.year}</span>
                  </div>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className='mt-5 text-5xl md:text-6xl lg:text-7xl'>
                    {p.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className='mt-6 max-w-lg text-lg leading-relaxed text-dim'>
                    {p.logline}
                  </p>
                </Reveal>

                <Reveal delay={0.15}>
                  <dl className='mt-10 grid max-w-lg grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2'>
                    <div className='bg-ink p-5'>
                      <dt className='wd-mono text-[0.65rem] uppercase tracking-widest text-faint'>
                        Credit
                      </dt>
                      <dd className='mt-1.5 text-sm text-silver'>{p.credit}</dd>
                    </div>
                    <div className='bg-ink p-5'>
                      <dt className='wd-mono text-[0.65rem] uppercase tracking-widest text-faint'>
                        Our role
                      </dt>
                      <dd className='mt-1.5 text-sm text-silver'>{p.role}</dd>
                    </div>
                    <div className='bg-ink p-5 sm:col-span-2'>
                      <dt className='wd-mono text-[0.65rem] uppercase tracking-widest text-faint'>
                        Release
                      </dt>
                      <dd className='mt-1.5 text-sm text-silver'>{p.meta}</dd>
                    </div>
                  </dl>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* CTA */}
      <section className='bg-ink py-24 text-center'>
        <Container size='narrow'>
          <Reveal>
            <h2 className='text-3xl md:text-5xl'>
              Your production could be next.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className='mx-auto mt-5 max-w-md text-dim'>
              Bring us the script, the schedule or just the spark. We&rsquo;ll
              help you get it on screen.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className='mt-9 flex justify-center'>
              <Button href='/contact' variant='primary' arrow>
                Start a project
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
