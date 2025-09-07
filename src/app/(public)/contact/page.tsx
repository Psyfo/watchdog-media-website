'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setError(data.error || 'Something went wrong.');
      }
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setStatus('error');
      setError('Network error.');
    }
  };

  return (
    <main className='flex flex-col justify-center items-center bg-[var(--wd-surface)] px-4 py-12 min-h-screen'>
      <section className='bg-white/80 shadow-xl backdrop-blur-lg p-8 border border-[var(--wd-lilac-200)] rounded-2xl w-full max-w-lg'>
        <h1 className='mb-4 font-noteworthy font-bold text-[var(--wd-magenta-600)] text-3xl md:text-4xl'>
          Contact Us
        </h1>
        <p className='mb-8 font-myriad text-[var(--wd-slate-700)]'>
          We'd love to hear from you! Fill out the form and we'll get back to
          you soon.
        </p>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor='name'
              className='block mb-2 font-myriad font-semibold text-[var(--wd-plum-700)]'
            >
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              required
              value={form.name}
              onChange={handleChange}
              className='bg-white px-4 py-2 border border-[var(--wd-lilac-200)] rounded-lg focus:outline-none focus:ring-[var(--wd-magenta-300)] focus:ring-2 w-full'
              placeholder='Your name'
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 font-myriad font-semibold text-[var(--wd-plum-700)]'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              required
              value={form.email}
              onChange={handleChange}
              className='bg-white px-4 py-2 border border-[var(--wd-lilac-200)] rounded-lg focus:outline-none focus:ring-[var(--wd-magenta-300)] focus:ring-2 w-full'
              placeholder='you@email.com'
            />
          </div>
          <div>
            <label
              htmlFor='message'
              className='block mb-2 font-myriad font-semibold text-[var(--wd-plum-700)]'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className='bg-white px-4 py-2 border border-[var(--wd-lilac-200)] rounded-lg focus:outline-none focus:ring-[var(--wd-magenta-300)] focus:ring-2 w-full'
              placeholder='Type your message here...'
            />
          </div>
          <button
            type='submit'
            disabled={status === 'loading'}
            className='bg-gradient-to-r from-[var(--wd-magenta-500)] to-[var(--wd-plum-500)] shadow-lg py-3 rounded-lg w-full font-noteworthy font-bold text-white text-lg hover:scale-105 transition-transform'
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className='mt-2 font-myriad text-green-600'>
              Thank you! Your message has been sent.
            </p>
          )}
          {status === 'error' && (
            <p className='mt-2 font-myriad text-red-600'>{error}</p>
          )}
        </form>
      </section>
    </main>
  );
}
