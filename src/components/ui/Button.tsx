import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

type Variant = 'primary' | 'yellow' | 'ghost' | 'plum';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  external?: boolean;
  type?: never;
  onClick?: never;
}

interface NativeButtonProps extends BaseProps {
  href?: never;
  external?: never;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

const base =
  'group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 border focus-visible:outline-2';

const variants: Record<Variant, string> = {
  primary:
    'bg-magenta text-black border-magenta hover:bg-yellow hover:border-yellow',
  yellow:
    'bg-yellow text-black border-yellow hover:bg-magenta hover:border-magenta hover:text-black',
  plum: 'bg-plum-2 text-silver border-plum-2 hover:bg-magenta hover:border-magenta hover:text-black',
  ghost:
    'bg-transparent text-silver border-white/20 hover:border-magenta hover:text-magenta',
};

function Inner({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      <span className='wd-mono'>{children}</span>
      {arrow && (
        <ArrowRightIcon
          size={16}
          weight='bold'
          className='transition-transform duration-300 group-hover:translate-x-1'
        />
      )}
    </>
  );
}

export default function Button(props: ButtonProps) {
  const { children, variant = 'primary', arrow = false, className = '' } = props;
  const cls = `${base} ${variants[variant]} ${className}`;

  if ('href' in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target='_blank'
          rel='noopener noreferrer'
          className={cls}
        >
          <Inner arrow={arrow}>{children}</Inner>
        </a>
      );
    }
    return (
      <Link href={props.href} className={cls}>
        <Inner arrow={arrow}>{children}</Inner>
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      className={cls}
    >
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  );
}
