import type { Metadata } from 'next';
import { site } from './site';

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

/**
 * Per-page metadata: title, description, canonical URL, and complete
 * Open Graph + Twitter card tags. Page-specific OG/Twitter images come from
 * the `opengraph-image` / `twitter-image` file conventions per route, falling
 * back to the app-wide default.
 */
export function pageMeta({
  title,
  description,
  path,
  keywords,
}: PageMetaInput): Metadata {
  const canonical = path === '/' ? '/' : path;
  const url = `${site.url}${path === '/' ? '' : path}`;
  const ogTitle = `${title} — ${site.name}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: site.name,
      locale: 'en_ZA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
    },
  };
}
