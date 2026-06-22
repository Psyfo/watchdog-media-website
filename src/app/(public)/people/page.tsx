import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';
import Button from '@/components/ui/Button';
import PageHeader from '@/components/ui/PageHeader';
import FounderFeature from '@/components/FounderFeature';
import { pageMeta } from '@/lib/seo';
import { people, productions } from '@/lib/site';

export const metadata = pageMeta({
  title: 'People',
  description:
    'Meet Palesa Lebona, founder of Watchdog Media, and the crew who pair filmmaker instinct with operational discipline — championing women on and off camera.',
  path: '/people',
});

export default function PeoplePage() {
  return (
    <>
      <PageHeader
        kicker='People'
        title={
          <>
            The crew behind
            <br />
            the calm.
          </>
        }
        lead='Leaders and heads of department who pair filmmaker instinct with operational discipline. More than half of our department heads are women — by design, not by accident.'
      />

      {/* Founder */}
      <FounderFeature />

      {/* Team grid */}
      <section className='border-b border-t border-white/10 bg-ink py-24 md:py-32'>
        <Container size='wide'>
          <Reveal>
            <Kicker index='01'>Key crew</Kicker>
          </Reveal>
          <div className='mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2'>
            {people.map((person, i) => (
              <Reveal
                key={person.name}
                delay={(i % 2) * 0.08}
                className='group bg-ink p-8'
              >
                <div className='flex items-center gap-4'>
                  <span className='flex h-16 w-16 items-center justify-center border border-white/15 font-display text-2xl text-magenta transition-colors duration-500 group-hover:border-magenta'>
                    {person.initials}
                  </span>
                  <span className='wd-mono text-[0.65rem] uppercase tracking-widest text-faint'>
                    {person.focus}
                  </span>
                </div>
                <h3 className='mt-6 font-display text-2xl text-silver'>
                  {person.name}
                </h3>
                <p className='mt-1 wd-mono text-xs uppercase tracking-wider text-magenta'>
                  {person.role}
                </p>
                <p className='mt-4 text-sm leading-relaxed text-dim'>
                  {person.bio}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Empowerment statement */}
      <section className='relative overflow-hidden border-b border-white/10 bg-ink-2 py-24 md:py-32'>
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 opacity-70'
          style={{
            background:
              'radial-gradient(60% 70% at 100% 0%, rgba(236,0,140,0.16), transparent 60%), radial-gradient(60% 70% at 0% 100%, rgba(81,0,81,0.4), transparent 60%)',
          }}
        />
        <Container size='wide' className='relative'>
          <Reveal>
            <h2 className='max-w-3xl text-balance text-3xl leading-tight md:text-5xl'>
              We credit the people who make the work — visibly, and on the
              record.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className='mt-7 max-w-xl text-lg leading-relaxed text-dim'>
              Every case study names its crew by role. Every production builds a
              pathway for someone new. Representation isn&rsquo;t a side project
              here — it&rsquo;s how the call sheet gets written.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Collaborators */}
      <section className='bg-ink py-24'>
        <Container size='wide'>
          <Reveal>
            <Kicker index='02'>Directors we&rsquo;ve backed</Kicker>
          </Reveal>
          <ul className='mt-10 border-t border-white/10'>
            {productions.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <li className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-white/10 py-6'>
                  <span className='font-display text-xl text-silver md:text-2xl'>
                    {p.credit.replace(/^A film by |^Created by |^A /, '')}
                  </span>
                  <span className='wd-mono text-xs uppercase tracking-wider text-faint'>
                    {p.title} · {p.category}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className='border-t border-white/10 bg-ink-2 py-20'>
        <Container
          size='wide'
          className='flex flex-col items-start justify-between gap-8 md:flex-row md:items-center'
        >
          <div>
            <h2 className='max-w-xl text-3xl md:text-4xl'>
              Want to crew with us?
            </h2>
            <p className='mt-3 text-dim'>
              We&rsquo;re always meeting heads of department and emerging talent.
            </p>
          </div>
          <Button href='/contact' variant='primary' arrow>
            Get in touch
          </Button>
        </Container>
      </section>
    </>
  );
}
