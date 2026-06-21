import type { Metadata } from 'next';

import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name} collects, uses and protects your personal information under South Africa's POPIA.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        kicker='Legal'
        title='Privacy Policy'
        lead='How we collect, use and protect your personal information — in line with the Protection of Personal Information Act (POPIA).'
      />
      <section className='bg-ink py-20 md:py-28'>
        <Container size='narrow'>
          <article className='wd-prose'>
            <p className='wd-mono text-xs uppercase tracking-wider text-faint'>
              Last updated: June 2026
            </p>

            <h2>Who we are</h2>
            <p>
              {site.legalName} (&ldquo;Watchdog Media&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;) is a film production support and creative company
              based at {site.address.line1}, {site.address.line2},{' '}
              {site.address.line3}. We are the responsible party for the
              personal information described in this policy.
            </p>

            <h2>Information we collect</h2>
            <ul>
              <li>
                <strong>Contact details</strong> you provide through our contact
                form — your name, email address and the content of your message.
              </li>
              <li>
                <strong>Project information</strong> you choose to share when
                enquiring about our services.
              </li>
              <li>
                <strong>Technical data</strong> such as anonymised usage
                analytics, where enabled, to help us improve the site.
              </li>
            </ul>

            <h2>How we use it</h2>
            <ul>
              <li>To respond to your enquiry and provide the services you ask about.</li>
              <li>To send you a confirmation that we received your message.</li>
              <li>To maintain records of our business correspondence.</li>
            </ul>
            <p>
              We do not sell your personal information, and we do not use it for
              automated decision-making.
            </p>

            <h2>Lawful basis</h2>
            <p>
              We process your information on the basis of your consent (given
              when you submit the contact form) and our legitimate interest in
              responding to enquiries and running our business.
            </p>

            <h2>Sharing</h2>
            <p>
              We share information only with trusted service providers who help
              us operate — for example our email delivery provider — and only to
              the extent needed to provide the service. They are bound to
              protect your information.
            </p>

            <h2>Retention</h2>
            <p>
              We keep enquiry correspondence for as long as needed to address
              your request and for a reasonable period afterwards for our
              records, after which it is securely deleted.
            </p>

            <h2>Your rights</h2>
            <p>
              Under POPIA you may request access to, correction of, or deletion
              of your personal information, and you may object to its
              processing. To exercise any of these rights, email us at{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy? Write to us at{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a> or call{' '}
              {site.phone}.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
