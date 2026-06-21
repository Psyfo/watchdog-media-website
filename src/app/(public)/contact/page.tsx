'use client';

import { useState } from 'react';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  CheckCircleIcon,
  WarningCircleIcon,
} from '@phosphor-icons/react';

import Container from '@/components/ui/Container';
import { site } from '@/lib/site';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  project: string;
  message: string;
  company: string; // honeypot
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const projectTypes = [
  'Production support',
  'Location support',
  'Directing',
  'Key crew',
  'Creative / development',
  'Press & festivals',
  'Other',
];

function validateName(v: string): string | undefined {
  const t = v.trim();
  if (!t) return 'Please tell us your name.';
  if (t.length < 2) return 'That looks a little short.';
  if (t.length > 60) return 'Please keep this under 60 characters.';
  if (!/^[\p{L}\s'.-]+$/u.test(t)) return 'Letters, spaces and hyphens only.';
  return undefined;
}

function validateEmail(v: string): string | undefined {
  const t = v.trim();
  if (!t) return 'We need an email to reply to.';
  if (t.length > 254) return 'That email is too long.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t))
    return 'That doesn’t look like a valid email.';
  return undefined;
}

function validateMessage(v: string): string | undefined {
  const t = v.trim();
  if (!t) return 'Tell us a little about your project.';
  if (t.length < 10) return 'A few more words would help us help you.';
  if (t.length > 1500) return 'Please keep this under 1500 characters.';
  return undefined;
}

const MAX_MESSAGE = 1500;

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    project: '',
    message: '',
    company: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const runField = (name: keyof Errors, value: string) => {
    const fn =
      name === 'name'
        ? validateName
        : name === 'email'
          ? validateEmail
          : validateMessage;
    return fn(value);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (touched[name] && name in { name: 1, email: 1, message: 1 }) {
      setErrors((er) => ({
        ...er,
        [name]: runField(name as keyof Errors, value),
      }));
    }
    if (serverError) setServerError(null);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (!['name', 'email', 'message'].includes(name)) return;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((er) => ({ ...er, [name]: runField(name as keyof Errors, value) }));
  };

  const validateAll = (): boolean => {
    const next: Errors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      message: validateMessage(form.message),
    };
    setErrors(next);
    setTouched({ name: true, email: true, message: true });
    return !next.name && !next.email && !next.message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) {
      // Focus first invalid field
      const first = (['name', 'email', 'message'] as const).find(
        (k) => runField(k, form[k])
      );
      if (first) document.getElementById(first)?.focus();
      return;
    }

    setStatus('loading');
    setServerError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          project: form.project,
          message: form.message.trim(),
          company: form.company, // honeypot
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setForm({ name: '', email: '', project: '', message: '', company: '' });
        setErrors({});
        setTouched({});
      } else {
        setStatus('error');
        setServerError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setServerError(
        'Network error. Please check your connection and try again.'
      );
    }
  };

  const inputBase =
    'w-full bg-ink-2 px-4 py-3.5 text-silver placeholder:text-faint transition-colors focus:outline-none';

  const fieldBorder = (name: keyof Errors) =>
    errors[name]
      ? 'border border-[#ff5c7a] focus:border-[#ff5c7a]'
      : 'border border-white/15 focus:border-magenta';

  if (status === 'success') {
    return (
      <section className='flex min-h-[80svh] items-center bg-ink pt-24'>
        <Container size='narrow' className='text-center'>
          <CheckCircleIcon
            size={56}
            weight='light'
            className='mx-auto text-magenta'
          />
          <h1 className='mt-8 text-4xl md:text-5xl'>Message received.</h1>
          <p className='mx-auto mt-5 max-w-md text-lg text-dim'>
            Thank you for reaching out to {site.name}. We typically reply within
            one business day. If it&rsquo;s urgent, call us on{' '}
            <a href={`tel:${site.phoneHref}`} className='text-magenta'>
              {site.phone}
            </a>
            .
          </p>
          <button
            onClick={() => setStatus('idle')}
            className='mt-10 wd-mono text-sm uppercase tracking-widest text-faint underline-offset-4 hover:text-silver hover:underline'
          >
            Send another message
          </button>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className='relative overflow-hidden border-b border-white/10 bg-ink pb-16 pt-36 md:pt-44'>
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 opacity-60'
          style={{
            background:
              'radial-gradient(60% 70% at 90% 0%, rgba(236,0,140,0.12), transparent 60%)',
          }}
        />
        <Container size='wide' className='relative'>
          <p className='wd-kicker'>Contact</p>
          <h1 className='mt-7 max-w-4xl text-[clamp(2.75rem,7vw,6rem)] leading-[0.95]'>
            Let&rsquo;s talk about
            <br />
            your project.
          </h1>
        </Container>
      </section>

      <section className='bg-ink py-20 md:py-28'>
        <Container size='wide'>
          <div className='grid gap-14 lg:grid-cols-12 lg:gap-20'>
            {/* Details */}
            <aside className='lg:col-span-4'>
              <p className='text-lg leading-relaxed text-dim'>
                Bring us the script, the schedule, or just the spark. Every
                engagement starts with a no-obligation needs analysis.
              </p>

              <dl className='mt-10 space-y-6'>
                <div className='flex items-start gap-4'>
                  <MapPinIcon size={20} className='mt-1 shrink-0 text-magenta' />
                  <div>
                    <dt className='wd-mono text-[0.65rem] uppercase tracking-widest text-faint'>
                      Studio
                    </dt>
                    <dd className='mt-1 text-sm not-italic leading-relaxed text-silver'>
                      {site.address.line1}
                      <br />
                      {site.address.line2}, {site.address.line3}
                    </dd>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <EnvelopeIcon
                    size={20}
                    className='mt-1 shrink-0 text-magenta'
                  />
                  <div>
                    <dt className='wd-mono text-[0.65rem] uppercase tracking-widest text-faint'>
                      Email
                    </dt>
                    <dd className='mt-1'>
                      <a
                        href={`mailto:${site.email}`}
                        className='text-sm text-silver hover:text-magenta'
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <PhoneIcon size={20} className='mt-1 shrink-0 text-magenta' />
                  <div>
                    <dt className='wd-mono text-[0.65rem] uppercase tracking-widest text-faint'>
                      Phone
                    </dt>
                    <dd className='mt-1'>
                      <a
                        href={`tel:${site.phoneHref}`}
                        className='text-sm text-silver hover:text-magenta'
                      >
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className='mt-10 flex gap-5'>
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='wd-mono text-xs uppercase tracking-wider text-faint hover:text-magenta'
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </aside>

            {/* Form */}
            <div className='lg:col-span-8'>
              <form onSubmit={handleSubmit} noValidate className='space-y-7'>
                {/* Honeypot */}
                <div
                  aria-hidden
                  className='absolute left-[-9999px] h-0 w-0 overflow-hidden'
                >
                  <label htmlFor='company'>Company (leave blank)</label>
                  <input
                    id='company'
                    name='company'
                    type='text'
                    tabIndex={-1}
                    autoComplete='off'
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <div className='grid gap-7 sm:grid-cols-2'>
                  <div>
                    <label htmlFor='name' className='wd-kicker mb-3 block'>
                      Name *
                    </label>
                    <input
                      id='name'
                      name='name'
                      type='text'
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={60}
                      autoComplete='name'
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      placeholder='Your full name'
                      className={`${inputBase} ${fieldBorder('name')}`}
                    />
                    {errors.name && (
                      <p
                        id='name-error'
                        role='alert'
                        className='mt-2 text-sm text-[#ff8095]'
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor='email' className='wd-kicker mb-3 block'>
                      Email *
                    </label>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={254}
                      autoComplete='email'
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      placeholder='you@studio.com'
                      className={`${inputBase} ${fieldBorder('email')}`}
                    />
                    {errors.email && (
                      <p
                        id='email-error'
                        role='alert'
                        className='mt-2 text-sm text-[#ff8095]'
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor='project' className='wd-kicker mb-3 block'>
                    What can we help with?
                  </label>
                  <select
                    id='project'
                    name='project'
                    value={form.project}
                    onChange={handleChange}
                    className={`${inputBase} border border-white/15 focus:border-magenta`}
                  >
                    <option value=''>Select an option (optional)</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor='message' className='wd-kicker mb-3 block'>
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={MAX_MESSAGE}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? 'message-error' : 'message-count'
                    }
                    placeholder='Tell us about your production, timeline and how we can help bring it to life…'
                    className={`${inputBase} resize-none ${fieldBorder('message')}`}
                  />
                  <div className='mt-2 flex items-start justify-between gap-4'>
                    {errors.message ? (
                      <p
                        id='message-error'
                        role='alert'
                        className='text-sm text-[#ff8095]'
                      >
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span
                      id='message-count'
                      className='wd-mono text-xs text-faint'
                    >
                      {form.message.length}/{MAX_MESSAGE}
                    </span>
                  </div>
                </div>

                {serverError && (
                  <div
                    role='alert'
                    className='flex items-center gap-3 border border-[#ff5c7a]/40 bg-[#ff5c7a]/10 px-4 py-3'
                  >
                    <WarningCircleIcon
                      size={20}
                      className='shrink-0 text-[#ff8095]'
                    />
                    <p className='text-sm text-[#ffb3c0]'>{serverError}</p>
                  </div>
                )}

                <button
                  type='submit'
                  disabled={status === 'loading'}
                  className='group inline-flex items-center justify-center gap-3 border border-magenta bg-magenta px-8 py-4 wd-mono text-sm uppercase tracking-widest text-black transition-colors duration-300 hover:bg-yellow hover:border-yellow disabled:cursor-not-allowed disabled:opacity-60'
                >
                  {status === 'loading' ? (
                    <>
                      <span className='h-4 w-4 animate-spin rounded-full border-2 border-black/40 border-t-black' />
                      Sending…
                    </>
                  ) : (
                    'Send message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
