'use client';

import Link from 'next/link';
import { ArrowUpRightIcon } from '@phosphor-icons/react';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { services } from '@/lib/site';

export default function ServicesPreviewSection() {
  return (
    <section className='relative border-t border-white/10 bg-ink py-24 md:py-36'>
      <Container size='wide'>
        <SectionHeading
          kicker='What we do'
          index='03'
          title={
            <>
              Five ways we get
              <br />
              your story made.
            </>
          }
          lead='From the operational spine of someone else’s production to stories we develop ourselves — corporate-grade reliability with artist-grade vision.'
        />

        <div className='mt-16 border-t border-white/10'>
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                href={`/services#${s.slug}`}
                className='group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.03] md:gap-10 md:py-9'
              >
                <span className='wd-mono text-xs text-faint md:text-sm'>
                  {s.index}
                </span>
                <div className='min-w-0'>
                  <h3 className='text-2xl text-silver transition-colors duration-300 group-hover:text-magenta md:text-4xl'>
                    {s.title}
                  </h3>
                  <p className='mt-2 max-w-2xl text-sm leading-relaxed text-dim md:text-base'>
                    {s.summary}
                  </p>
                </div>
                <ArrowUpRightIcon
                  size={22}
                  weight='bold'
                  className='text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-magenta'
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
