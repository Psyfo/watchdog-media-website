'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

type RevealTag = 'div' | 'li' | 'section' | 'ul' | 'span' | 'p';

const tags = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
  ul: motion.ul,
  span: motion.span,
  p: motion.p,
} as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
  /** Stagger delay in seconds */
  delay?: number;
  /** Vertical travel distance in px */
  y?: number;
  once?: boolean;
}

/**
 * Deliberate, editorial reveal — a short rise + fade as the element enters view.
 * Honours prefers-reduced-motion by rendering statically.
 */
export default function Reveal({
  children,
  className = '',
  as = 'div',
  delay = 0,
  y = 24,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = tags[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once, margin: '-80px' }}
    >
      {children}
    </MotionTag>
  );
}
