import { ReactNode } from 'react';
import Image from 'next/image';
import Container from './Container';

interface ImageBandProps {
  src: string;
  alt: string;
  caption?: ReactNode;
  heightClass?: string;
  position?: string;
  priority?: boolean;
}

/**
 * Full-bleed cinematic image band used to break up text-heavy sections.
 */
export default function ImageBand({
  src,
  alt,
  caption,
  heightClass = 'h-[58vh] min-h-[360px]',
  position = 'center',
  priority = false,
}: ImageBandProps) {
  return (
    <section
      className={`relative w-full overflow-hidden border-y border-white/10 ${heightClass}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-ink/35" />
      {caption && (
        <Container size="wide" className="relative flex h-full items-end pb-9 md:pb-12">
          {caption}
        </Container>
      )}
    </section>
  );
}
