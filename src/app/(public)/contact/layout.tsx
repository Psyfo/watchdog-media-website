import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Contact',
  description:
    'Start a project with Watchdog Media. Tell us about your production, timeline and how we can help — every engagement begins with a no-obligation needs analysis.',
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
