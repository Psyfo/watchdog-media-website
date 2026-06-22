import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#08080a',
    theme_color: '#08080a',
    icons: [
      { src: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
      { src: '/brand/icon-192.png', type: 'image/png', sizes: '192x192' },
      { src: '/brand/avatar-512.png', type: 'image/png', sizes: '512x512' },
      {
        src: '/brand/avatar-512.png',
        type: 'image/png',
        sizes: '512x512',
        purpose: 'maskable',
      },
    ],
  };
}
