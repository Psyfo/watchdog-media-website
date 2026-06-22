'use client';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ProductionCard from '@/components/ProductionCard';
import { productions } from '@/lib/site';

export default function SelectedWorkSection() {
  return (
    <section className='relative border-t border-white/10 bg-ink-2 py-24 md:py-36'>
      <Container size='wide'>
        <div className='flex flex-wrap items-end justify-between gap-8'>
          <SectionHeading
            kicker='Selected work'
            index='04'
            title={
              <>
                From animation to
                <br />
                award-winning docs.
              </>
            }
          />
          <Reveal className='hidden md:block'>
            <Button href='/productions' variant='ghost' arrow>
              All productions
            </Button>
          </Reveal>
        </div>

        <div className='mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {productions.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProductionCard production={p} priority={i < 2} />
            </Reveal>
          ))}
        </div>

        <Reveal className='mt-12 md:hidden'>
          <Button href='/productions' variant='ghost' arrow>
            All productions
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
