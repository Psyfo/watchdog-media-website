import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Terms of Use',
  description: 'The terms that govern your use of the Watchdog Media website.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <PageHeader
        kicker='Legal'
        title='Terms of Use'
        lead='The terms that govern your use of this website. By browsing the site you agree to them.'
      />
      <section className='bg-ink py-20 md:py-28'>
        <Container size='narrow'>
          <article className='wd-prose'>
            <p className='wd-mono text-xs uppercase tracking-wider text-faint'>
              Last updated: June 2026
            </p>

            <h2>Acceptance</h2>
            <p>
              This website is operated by {site.legalName}. By accessing or using
              it, you agree to these Terms of Use. If you do not agree, please
              don&rsquo;t use the site.
            </p>

            <h2>Use of the site</h2>
            <ul>
              <li>You may browse the site for personal and business research purposes.</li>
              <li>
                You agree not to misuse the site, attempt to disrupt it, or use
                it for any unlawful purpose.
              </li>
              <li>
                You will not submit false information or another person&rsquo;s
                details through our forms without authorisation.
              </li>
            </ul>

            <h2>Intellectual property</h2>
            <p>
              All content on this site — including text, branding, logos and
              production stills — is owned by Watchdog Media or its licensors and
              is protected by copyright. Production key art and credits remain
              the property of their respective rights holders and are shown for
              portfolio purposes. You may not reproduce, distribute or create
              derivative works without our written permission.
            </p>

            <h2>Portfolio &amp; representations</h2>
            <p>
              Productions, awards and press shown on this site illustrate the
              kind of work we do. Specific availability, credits and outcomes are
              confirmed in writing as part of an engagement.
            </p>

            <h2>No warranty</h2>
            <p>
              The site is provided &ldquo;as is&rdquo; without warranties of any
              kind. We work to keep information accurate and the site available,
              but we don&rsquo;t guarantee it will be error-free or uninterrupted.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              To the extent permitted by law, Watchdog Media is not liable for
              any indirect or consequential loss arising from your use of, or
              inability to use, this website.
            </p>

            <h2>External links</h2>
            <p>
              Our site may link to third-party sites we don&rsquo;t control. We
              are not responsible for their content or practices.
            </p>

            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of the Republic of South
              Africa.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms? Email{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
