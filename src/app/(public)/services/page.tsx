import type { Metadata } from 'next';
import {
  FilmSlateIcon,
  MapPinIcon,
  MegaphoneIcon,
  UsersIcon,
  CameraIcon,
  CheckIcon,
} from '@phosphor-icons/react/dist/ssr';
import { ComponentType } from 'react';

type PhosphorIcon = ComponentType<{
  size?: number;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
  className?: string;
}>;

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import PageHeader from '@/components/ui/PageHeader';
import ImageBand from '@/components/ui/ImageBand';
import { services, formats, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Production support, location support, directing, key crew and creative services for film productions across Durban and KwaZulu-Natal.',
};

const icons: Record<string, PhosphorIcon> = {
  clapperboard: FilmSlateIcon,
  'map-pin': MapPinIcon,
  megaphone: MegaphoneIcon,
  users: UsersIcon,
  camera: CameraIcon,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker='Services'
        title={
          <>
            Everything a shoot
            <br />
            needs, in one partner.
          </>
        }
        lead='From the operational spine beneath someone else’s production to stories we develop ourselves — assembled into a bespoke package around exactly what your shoot requires.'
        meta={
          <div className='flex flex-wrap gap-x-6 gap-y-2'>
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className='wd-mono text-xs uppercase tracking-wider text-faint transition-colors hover:text-magenta'
              >
                {s.index} {s.title}
              </a>
            ))}
          </div>
        }
      />

      <ImageBand
        src='/images/bts-director.jpg'
        alt='A director and crew at work on a lit interior set.'
        heightClass='h-[50vh] min-h-[320px]'
        position='center'
      />

      {services.map((s, i) => {
        const Icon = icons[s.icon] ?? FilmSlateIcon;
        return (
          <section
            key={s.slug}
            id={s.slug}
            className={`scroll-mt-24 border-b border-white/10 py-20 md:py-28 ${
              i % 2 === 1 ? 'bg-ink-2' : 'bg-ink'
            }`}
          >
            <Container size='wide'>
              <div className='grid gap-10 lg:grid-cols-12 lg:gap-16'>
                {/* Heading */}
                <div className='lg:col-span-5'>
                  <Reveal>
                    <div className='flex items-center gap-4'>
                      <span className='flex h-12 w-12 items-center justify-center border border-white/15 text-magenta'>
                        <Icon size={22} weight='light' />
                      </span>
                      <span className='wd-mono text-sm text-faint'>
                        {s.index} / 05
                      </span>
                    </div>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <h2 className='mt-7 text-4xl md:text-5xl'>{s.title}</h2>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className='mt-5 max-w-md text-lg leading-relaxed text-dim'>
                      {s.summary}
                    </p>
                  </Reveal>
                </div>

                {/* Deliverables */}
                <div className='lg:col-span-7'>
                  <Reveal delay={0.1}>
                    <p className='wd-kicker mb-6'>What you get</p>
                    <ul className='grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2'>
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className='flex items-start gap-3 bg-ink p-5'
                        >
                          <CheckIcon
                            size={16}
                            weight='bold'
                            className='mt-1 shrink-0 text-magenta'
                          />
                          <span className='text-sm leading-relaxed text-silver'>
                            {d}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* Formats */}
      <section className='border-b border-white/10 bg-ink py-20'>
        <Container size='wide'>
          <Reveal>
            <p className='wd-kicker'>We support production across</p>
          </Reveal>
          <div className='mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4'>
            {formats.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05} className='bg-ink p-7'>
                <h3 className='font-display text-2xl text-silver'>{f.title}</h3>
                <p className='mt-2 wd-mono text-xs uppercase tracking-wider text-faint'>
                  {f.note}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className='bg-ink-2 py-20'>
        <Container
          size='wide'
          className='flex flex-col items-start justify-between gap-8 md:flex-row md:items-center'
        >
          <div>
            <h2 className='max-w-xl text-3xl md:text-4xl'>
              Tell us about your shoot.
            </h2>
            <p className='mt-3 text-dim'>
              We start every engagement with a needs analysis — no obligation.
            </p>
          </div>
          <Button href='/contact' variant='primary' arrow>
            Start a project
          </Button>
        </Container>
      </section>
    </>
  );
}
