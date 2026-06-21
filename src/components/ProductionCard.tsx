'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@phosphor-icons/react';

import type { Production } from '@/lib/site';

interface ProductionCardProps {
  production: Production;
  priority?: boolean;
}

export default function ProductionCard({
  production,
  priority,
}: ProductionCardProps) {
  const { slug, title, category, year, role, poster } = production;

  return (
    <Link
      href={`/productions#${slug}`}
      className='group block'
      aria-label={`${title} — ${category}, ${year}`}
    >
      <div className='relative aspect-[4/5] overflow-hidden border border-white/10 bg-ink-3'>
        <Image
          src={poster}
          alt={`${title} poster`}
          fill
          sizes='(max-width: 768px) 100vw, 50vw'
          priority={priority}
          className='object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90' />

        <div className='absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/20 bg-ink/40 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100'>
          <ArrowUpRightIcon size={16} weight='bold' className='text-white' />
        </div>

        <div className='absolute inset-x-0 bottom-0 p-5 md:p-6'>
          <div className='flex items-center gap-3 wd-mono text-[0.65rem] uppercase tracking-widest text-silver/80'>
            <span style={{ color: production.accent }}>●</span>
            {category}
            <span className='text-faint'>/ {year}</span>
          </div>
          <h3 className='mt-2 font-display text-2xl text-white md:text-3xl'>
            {title}
          </h3>
          <p className='mt-1 text-xs text-silver/70'>{role}</p>
        </div>
      </div>
    </Link>
  );
}
