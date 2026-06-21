import { ElementType, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: 'default' | 'wide' | 'narrow';
}

const sizes = {
  narrow: 'max-w-3xl',
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
};

export default function Container({
  children,
  className = '',
  as: Tag = 'div',
  size = 'default',
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full px-6 md:px-10 ${sizes[size]} ${className}`}>
      {children}
    </Tag>
  );
}
