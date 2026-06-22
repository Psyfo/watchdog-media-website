import type { Metadata } from 'next';
import Image from 'next/image';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';
import Button from '@/components/ui/Button';
import PageHeader from '@/components/ui/PageHeader';
import FounderFeature from '@/components/FounderFeature';
import { site, stats, values } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: `${site.name} is a Durban-based film production support and creative company. Corporate-grade reliability, artist-grade vision, women championed on and off camera.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker='About'
        title={
          <>
            The calm beneath
            <br />
            bold creative.
          </>
        }
        lead={`Founded in ${site.founded}, Watchdog Media is a Durban-based production support and creative company. We make courageous, craft-driven stories — and make every shoot that comes to KwaZulu-Natal run like clockwork.`}
      />

      {/* Story */}
      <section className='border-b border-white/10 bg-ink py-24 md:py-32'>
        <Container size='wide'>
          <div className='grid gap-12 lg:grid-cols-12'>
            <div className='lg:col-span-5'>
              <Reveal>
                <Kicker index='01'>Our story</Kicker>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className='mt-6 text-3xl md:text-4xl'>
                  A production house with a filmmaker&rsquo;s heart and an
                  operator&rsquo;s discipline.
                </h2>
              </Reveal>
            </div>
            <div className='space-y-5 text-lg leading-relaxed text-dim lg:col-span-7 lg:pt-2'>
              <Reveal>
                <p>
                  Watchdog Media began with a simple frustration: brilliant
                  stories kept stalling on logistics, and brilliant logistics
                  kept flattening the story. We built a company that refuses to
                  choose between the two.
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p>
                  Today we are the partner local and international productions
                  trust to film in Durban and across KwaZulu-Natal — handling
                  the permits, the crew, the locations and the thousand small
                  decisions, so directors can keep their eyes on the frame.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  And we develop our own slate: animation, documentary, short
                  film and series, told with consent, craft and a crew that
                  reflects the city it shoots in.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder */}
      <FounderFeature compact />

      {/* Cinematic band */}
      <section className='relative h-[42vh] min-h-[320px] w-full overflow-hidden border-b border-white/10'>
        <Image
          src='/images/location-crew.jpg'
          alt='A Watchdog Media crew sets up a light on location in the KwaZulu-Natal landscape.'
          fill
          sizes='100vw'
          className='object-cover object-center'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60' />
        <Container size='wide' className='relative flex h-full items-end pb-10'>
          <p className='max-w-2xl font-display text-2xl italic leading-snug text-white md:text-4xl'>
            &ldquo;Corporate-grade reliability. Artist-grade vision.&rdquo;
          </p>
        </Container>
      </section>

      {/* Stats */}
      <section className='border-b border-white/10 bg-ink-2 py-20'>
        <Container size='wide'>
          <dl className='grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4'>
            {stats.map((s) => (
              <div key={s.label} className='bg-ink-2 p-7 md:p-8'>
                <dt className='font-display text-4xl text-silver md:text-5xl'>
                  {s.value}
                </dt>
                <dd className='mt-2 wd-mono text-xs uppercase tracking-wider text-faint'>
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Values */}
      <section className='bg-ink py-24 md:py-32'>
        <Container size='wide'>
          <Reveal>
            <Kicker index='02'>What we stand for</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className='mt-6 max-w-2xl text-3xl md:text-5xl'>
              Five values, on every call sheet.
            </h2>
          </Reveal>
          <div className='mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2'>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05} className='bg-ink p-8 md:p-10'>
                <span className='wd-mono text-xs text-faint'>
                  0{i + 1}
                </span>
                <h3 className='mt-4 font-display text-2xl text-silver'>
                  {v.title}
                </h3>
                <p className='mt-3 text-base leading-relaxed text-dim'>
                  {v.body}
                </p>
              </Reveal>
            ))}
            <Reveal delay={values.length * 0.05} className='flex flex-col justify-center bg-magenta p-8 md:p-10'>
              <h3 className='font-display text-2xl text-black'>Empowerment</h3>
              <p className='mt-3 text-base leading-relaxed text-black/80'>
                Women and underrepresented crew, credited and paid, on every
                production. The promise the whole company is built around.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className='border-t border-white/10 bg-ink-2 py-20'>
        <Container size='wide' className='flex flex-col items-start justify-between gap-8 md:flex-row md:items-center'>
          <h2 className='max-w-xl text-3xl md:text-4xl'>
            Meet the people behind the work.
          </h2>
          <div className='flex flex-wrap gap-4'>
            <Button href='/people' variant='primary' arrow>
              Our people
            </Button>
            <Button href='/contact' variant='ghost'>
              Work with us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
