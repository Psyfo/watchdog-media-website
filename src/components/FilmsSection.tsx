import Image from 'next/image';
import { PlayIcon, ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';
import { films, founder, site } from '@/lib/site';

export default function FilmsSection() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': films.map((f) => {
      const id = f.url.split('/').pop();
      return {
        '@type': 'VideoObject',
        name: f.title,
        description: `${f.kind} (${f.year}) — ${founder.name}.`,
        thumbnailUrl: `${site.url}${f.thumb}`,
        uploadDate: f.uploadDate,
        duration: f.durationISO,
        contentUrl: f.url,
        embedUrl: `https://player.vimeo.com/video/${id}`,
        creator: { '@type': 'Person', name: founder.name },
      };
    }),
  };

  return (
    <section className='border-t border-white/10 bg-ink-2 py-24 md:py-32'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container size='wide'>
        <div className='flex flex-wrap items-end justify-between gap-6'>
          <div className='max-w-2xl'>
            <Reveal>
              <Kicker index='01'>On screen</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className='mt-6 text-4xl md:text-5xl'>
                Palesa&rsquo;s work.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className='mt-4 text-lg leading-relaxed text-dim'>
                A selection of public films, trailers and documentary work from
                the founder&rsquo;s own lens.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <a
              href='https://vimeo.com/palesalebona'
              target='_blank'
              rel='noopener noreferrer'
              className='group inline-flex items-center gap-2 wd-mono text-xs uppercase tracking-widest text-silver transition-colors hover:text-magenta'
            >
              All films on Vimeo
              <ArrowUpRightIcon
                size={14}
                weight='bold'
                className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              />
            </a>
          </Reveal>
        </div>

        <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {films.map((f, i) => (
            <Reveal key={f.url} delay={(i % 3) * 0.06}>
              <a
                href={f.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`Watch ${f.title} on Vimeo`}
                className='group block'
              >
                <div className='relative aspect-video overflow-hidden border border-white/10 bg-ink-3'>
                  <Image
                    src={f.thumb}
                    alt={`Still from ${f.title}`}
                    fill
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent' />
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <span className='flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-ink/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-magenta group-hover:bg-magenta'>
                      <PlayIcon
                        size={20}
                        weight='fill'
                        className='ml-0.5 text-white transition-colors duration-300 group-hover:text-black'
                      />
                    </span>
                  </div>
                  <div className='absolute inset-x-0 bottom-0 p-4'>
                    <div className='flex flex-wrap items-center gap-2 wd-mono text-[0.6rem] uppercase tracking-widest text-silver/80'>
                      <span className='text-magenta'>{f.kind}</span>
                      <span className='text-faint'>
                        · {f.year} · {f.duration}
                      </span>
                    </div>
                    <h3 className='mt-1 font-display text-xl text-white'>
                      {f.title}
                    </h3>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
