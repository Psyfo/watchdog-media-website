import { ReactNode } from 'react';

interface KickerProps {
  children: ReactNode;
  index?: string;
  className?: string;
  align?: 'left' | 'center';
}

/**
 * Mono eyebrow label with an optional film-slate index (e.g. "01 —").
 */
export default function Kicker({
  children,
  index,
  className = '',
  align = 'left',
}: KickerProps) {
  return (
    <div
      className={`flex items-center gap-3 ${
        align === 'center' ? 'justify-center' : ''
      } ${className}`}
    >
      <span aria-hidden className='h-px w-8 bg-magenta/60' />
      <span className='wd-kicker'>
        {index && <span className='text-faint'>{index} </span>}
        {children}
      </span>
    </div>
  );
}
