import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';
import { founder } from '@/lib/site';

interface FounderFeatureProps {
  /** Compact variant (for the About page): short bio + link through to People. */
  compact?: boolean;
  className?: string;
}

export default function FounderFeature({
  compact = false,
  className = '',
}: FounderFeatureProps) {
  return (
    <section
      className={`relative overflow-hidden border-t border-white/10 bg-ink py-24 md:py-32 ${className}`}
    >
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 opacity-60'
        style={{
          background:
            'radial-gradient(60% 70% at 0% 0%, rgba(236,0,140,0.12), transparent 60%)',
        }}
      />
      <Container size='wide' className='relative'>
        <div className='grid items-center gap-10 lg:grid-cols-12 lg:gap-16'>
          {/* Portrait */}
          <Reveal className='lg:col-span-5'>
            <div className='relative aspect-[4/5] max-w-md overflow-hidden border border-white/10'>
              <Image
                src={founder.photo}
                alt={`${founder.name}, ${founder.role}`}
                fill
                sizes='(max-width: 1024px) 100vw, 40vw'
                className='object-cover object-top'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent' />
              <span className='absolute bottom-4 left-4 wd-mono text-[0.65rem] uppercase tracking-widest text-silver/90'>
                Founder
              </span>
            </div>
          </Reveal>

          {/* Content */}
          <div className='lg:col-span-7'>
            <Reveal>
              <Kicker>{compact ? 'Our founder' : 'Founder'}</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className='mt-6 text-4xl md:text-5xl lg:text-6xl'>
                {founder.name}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className='mt-3 wd-mono text-xs uppercase tracking-widest text-magenta'>
                {founder.role}
              </p>
            </Reveal>

            <div className='mt-7 space-y-4 text-lg leading-relaxed text-dim'>
              {(compact ? [founder.short] : founder.bio).map((para, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>

            {/* Socials */}
            <Reveal delay={0.2}>
              <div className='mt-8 flex flex-wrap items-center gap-x-6 gap-y-2'>
                {founder.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='wd-mono text-xs uppercase tracking-wider text-faint transition-colors hover:text-magenta'
                  >
                    {s.label}
                  </a>
                ))}
                {compact && (
                  <Link
                    href='/people'
                    className='group inline-flex items-center gap-1.5 wd-mono text-xs uppercase tracking-wider text-silver transition-colors hover:text-magenta'
                  >
                    Meet the team
                    <ArrowUpRightIcon
                      size={14}
                      weight='bold'
                      className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    />
                  </Link>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
