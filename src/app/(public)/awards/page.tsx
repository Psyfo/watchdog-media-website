import { ArrowUpRightIcon, TrophyIcon } from '@phosphor-icons/react/dist/ssr';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';
import Button from '@/components/ui/Button';
import PageHeader from '@/components/ui/PageHeader';
import { pageMeta } from '@/lib/seo';
import { awards, press } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Awards & Press',
  description:
    'Recognition for Watchdog Media — festival awards, industry honours and press coverage for craft, production support and women in film.',
  path: '/awards',
});

export default function AwardsPage() {
  return (
    <>
      <PageHeader
        kicker='Awards & Press'
        title={
          <>
            Recognised for craft
            <br />
            and courage.
          </>
        }
        lead='Festival juries, industry bodies and the press have all taken note — of the films, of the productions we carry, and of the crews we build.'
      />

      {/* Awards */}
      <section className='border-b border-white/10 bg-ink py-24 md:py-32'>
        <Container size='wide'>
          <Reveal>
            <Kicker index='01'>Awards &amp; honours</Kicker>
          </Reveal>
          <ul className='mt-12 border-t border-white/10'>
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <li className='grid grid-cols-1 gap-4 border-b border-white/10 py-7 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10'>
                  <span className='wd-mono text-sm text-faint'>
                    0{i + 1}
                  </span>
                  <div className='flex items-start gap-4'>
                    <TrophyIcon
                      size={22}
                      weight='light'
                      className={
                        a.result === 'Winner' ? 'text-yellow' : 'text-faint'
                      }
                    />
                    <div>
                      <h3 className='font-display text-xl text-silver md:text-2xl'>
                        {a.title}
                      </h3>
                      <p className='mt-1 text-sm text-dim'>
                        {a.event} · {a.project}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 pl-10 md:pl-0'>
                    <span
                      className={`wd-mono text-xs uppercase tracking-wider ${
                        a.result === 'Winner' ? 'text-yellow' : 'text-faint'
                      }`}
                    >
                      {a.result}
                    </span>
                    <span className='wd-mono text-sm text-faint'>{a.year}</span>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Press */}
      <section className='bg-ink-2 py-24 md:py-32'>
        <Container size='wide'>
          <Reveal>
            <Kicker index='02'>In the press</Kicker>
          </Reveal>
          <div className='mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3'>
            {press.map((p, i) => {
              const hasLink = Boolean(p.href && p.href !== '#');
              const Wrapper = hasLink ? 'a' : 'div';
              return (
                <Reveal key={p.title} delay={i * 0.06}>
                  <Wrapper
                    {...(hasLink
                      ? {
                          href: p.href,
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        }
                      : {})}
                    className={`group flex h-full flex-col bg-ink-2 p-8 ${
                      hasLink ? 'transition-colors hover:bg-ink' : ''
                    }`}
                  >
                    <div className='flex items-center justify-between'>
                      <span className='wd-mono text-[0.65rem] uppercase tracking-widest text-magenta'>
                        {p.type}
                      </span>
                      {hasLink && (
                        <ArrowUpRightIcon
                          size={16}
                          weight='bold'
                          className='text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-magenta'
                        />
                      )}
                    </div>
                    <h3 className='mt-5 font-display text-xl leading-snug text-silver'>
                      {p.title}
                    </h3>
                    <div className='mt-auto pt-6'>
                      <p className='text-sm text-dim'>{p.publication}</p>
                      <p className='wd-mono text-xs text-faint'>{p.date}</p>
                    </div>
                  </Wrapper>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className='border-t border-white/10 bg-ink py-20'>
        <Container
          size='wide'
          className='flex flex-col items-start justify-between gap-8 md:flex-row md:items-center'
        >
          <h2 className='max-w-xl text-3xl md:text-4xl'>
            Press &amp; festival enquiries
          </h2>
          <Button href='/contact' variant='ghost' arrow>
            Contact the team
          </Button>
        </Container>
      </section>
    </>
  );
}
