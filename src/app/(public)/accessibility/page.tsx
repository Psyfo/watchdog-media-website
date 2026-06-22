import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Accessibility',
  description:
    "Watchdog Media's commitment to an accessible website for everyone, aiming for WCAG 2.1 AA.",
  path: '/accessibility',
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader
        kicker='Commitment'
        title='Accessibility'
        lead='Inclusion is part of our brand, not an afterthought. We want this site to work for everyone.'
      />
      <section className='bg-ink py-20 md:py-28'>
        <Container size='narrow'>
          <article className='wd-prose'>
            <p className='wd-mono text-xs uppercase tracking-wider text-faint'>
              Last updated: June 2026
            </p>

            <h2>Our standard</h2>
            <p>
              We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1
              at Level AA. Accessibility is reviewed as part of how we build and
              maintain this site.
            </p>

            <h2>What we&rsquo;ve done</h2>
            <ul>
              <li>Semantic, keyboard-navigable structure with a skip-to-content link.</li>
              <li>Visible focus states and a clear, high-contrast colour system.</li>
              <li>Text alternatives for meaningful images.</li>
              <li>
                Respect for the <strong>prefers-reduced-motion</strong> setting —
                animations are minimised when you ask your device to reduce
                motion.
              </li>
              <li>Form fields with labels, error messaging and ARIA support.</li>
            </ul>

            <h2>Ongoing work</h2>
            <p>
              Accessibility is never &ldquo;finished&rdquo;. We run periodic
              checks and fix issues as we find them — and we welcome being told
              about anything we&rsquo;ve missed.
            </p>

            <h2>Tell us</h2>
            <p>
              If you encounter a barrier on this site, please let us know what
              happened and which page you were on. Email{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a> or call{' '}
              {site.phone} and we&rsquo;ll do our best to help and to fix it.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
