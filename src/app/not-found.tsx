import Link from 'next/link';
import { ArrowLeftIcon } from '@phosphor-icons/react/dist/ssr';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className='relative flex min-h-[100svh] items-center overflow-hidden bg-ink'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 opacity-70'
        style={{
          background:
            'radial-gradient(50% 60% at 50% 0%, rgba(236,0,140,0.16), transparent 60%), radial-gradient(50% 60% at 50% 100%, rgba(81,0,81,0.4), transparent 60%)',
        }}
      />
      <Container size='wide' className='relative text-center'>
        <p className='wd-kicker justify-center'>Error 404</p>
        <h1 className='mt-8 font-display text-[clamp(5rem,22vw,16rem)] leading-none text-white'>
          404
        </h1>
        <p className='mx-auto mt-6 max-w-md text-lg leading-relaxed text-dim'>
          This scene didn&rsquo;t make the final cut. The page may have moved, or
          never existed — but the story continues.
        </p>
        <div className='mt-12 flex justify-center'>
          <Button href='/' variant='primary'>
            <span className='inline-flex items-center gap-2'>
              <ArrowLeftIcon size={16} weight='bold' />
              Back to home
            </span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
