/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { ChatCircle, EnvelopeIcon, UserIcon } from '@phosphor-icons/react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );

  // Real-time validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters';
    if (name.trim().length > 50) return 'Name must be less than 50 characters';
    if (!/^[a-zA-Z\s'-]+$/.test(name.trim()))
      return 'Name contains invalid characters';
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim()))
      return 'Please enter a valid email address';
    if (email.length > 254) return 'Email address is too long';
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) return 'Message is required';
    if (message.trim().length < 10)
      return 'Message must be at least 10 characters';
    if (message.trim().length > 1000)
      return 'Message must be less than 1000 characters';
    return undefined;
  };

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      message: validateMessage(form.message),
    };

    setValidationErrors(errors);
    return !Object.values(errors).some((error) => error !== undefined);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear validation error for this field when user starts typing
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors({ ...validationErrors, [name]: undefined });
    }

    // Clear global error when user starts typing
    if (error) setError(null);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let fieldError: string | undefined;

    switch (name) {
      case 'name':
        fieldError = validateName(value);
        break;
      case 'email':
        fieldError = validateEmail(value);
        break;
      case 'message':
        fieldError = validateMessage(value);
        break;
    }

    if (fieldError) {
      setValidationErrors({ ...validationErrors, [name]: fieldError });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      setStatus('error');
      setError('Please fix the errors above');
      return;
    }

    setStatus('loading');
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setValidationErrors({});
      } else {
        setStatus('error');
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatus('error');
      setError('Network error. Please check your connection and try again.');
    }
  };

  return (
    <main className='relative flex flex-col justify-center items-center bg-[var(--wd-surface)] px-4 py-12 min-h-screen overflow-hidden'>
      {/* Background Pattern */}
      <motion.div
        className='absolute inset-0 opacity-8'
        style={{
          background: `
            radial-gradient(circle at 20% 30%, var(--wd-lilac-200) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, var(--wd-magenta-200) 0%, transparent 60%),
            radial-gradient(circle at 50% 90%, var(--wd-yellow-200) 0%, transparent 40%)
          `,
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.06, 0.1, 0.06],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.section
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
          duration: 1.2,
        }}
        className='z-10 relative bg-white/90 shadow-2xl backdrop-blur-lg p-8 md:p-10 border border-[var(--wd-lilac-200)] rounded-2xl w-full max-w-2xl'
      >
        <div className='mb-8 text-center'>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: 'spring',
              stiffness: 200,
            }}
            className='inline-flex justify-center items-center mb-4 p-3 rounded-xl'
            style={{
              background:
                'linear-gradient(135deg, var(--wd-magenta-100) 0%, var(--wd-lilac-100) 100%)',
            }}
          >
            <EnvelopeIcon
              size={32}
              weight='fill'
              className='text-[var(--wd-magenta-600)]'
            />
          </motion.div>
          <h1 className='mb-4 font-noteworthy font-bold text-[var(--wd-magenta-600)] text-4xl md:text-5xl'>
            Get in Touch
          </h1>
          <p className='mx-auto max-w-md font-myriad text-[var(--wd-slate-700)] text-lg leading-relaxed'>
            Ready to bring your vision to life? We'd love to hear about your
            project and explore how we can help.
          </p>
        </div>

        <form className='space-y-6' onSubmit={handleSubmit} noValidate>
          {/* Name Field */}
          <div>
            <label
              htmlFor='name'
              className='flex items-center gap-2 mb-3 font-myriad font-semibold text-[var(--wd-plum-700)]'
            >
              <UserIcon size={18} weight='fill' />
              Name *
            </label>
            <input
              type='text'
              name='name'
              id='name'
              required
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`bg-white px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 w-full transition-all duration-300 ${
                validationErrors.name
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-[var(--wd-lilac-200)] focus:ring-[var(--wd-magenta-200)] focus:border-[var(--wd-magenta-300)]'
              }`}
              placeholder='Your full name'
              maxLength={50}
            />
            {validationErrors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='mt-2 font-myriad text-red-600 text-sm'
              >
                {validationErrors.name}
              </motion.p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor='email'
              className='flex items-center gap-2 mb-3 font-myriad font-semibold text-[var(--wd-plum-700)]'
            >
              <EnvelopeIcon size={18} weight='fill' />
              Email *
            </label>
            <input
              type='email'
              name='email'
              id='email'
              required
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`bg-white px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 w-full transition-all duration-300 ${
                validationErrors.email
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-[var(--wd-lilac-200)] focus:ring-[var(--wd-magenta-200)] focus:border-[var(--wd-magenta-300)]'
              }`}
              placeholder='your.email@example.com'
              maxLength={254}
            />
            {validationErrors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='mt-2 font-myriad text-red-600 text-sm'
              >
                {validationErrors.email}
              </motion.p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor='message'
              className='flex items-center gap-2 mb-3 font-myriad font-semibold text-[var(--wd-plum-700)]'
            >
              <ChatCircle size={18} weight='fill' />
              Message *
            </label>
            <textarea
              name='message'
              id='message'
              required
              rows={6}
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`bg-white px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 w-full transition-all duration-300 resize-none ${
                validationErrors.message
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-[var(--wd-lilac-200)] focus:ring-[var(--wd-magenta-200)] focus:border-[var(--wd-magenta-300)]'
              }`}
              placeholder='Tell us about your project, timeline, and how we can help bring your vision to life...'
              maxLength={1000}
            />
            <div className='flex justify-between items-start mt-2'>
              {validationErrors.message ? (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='font-myriad text-red-600 text-sm'
                >
                  {validationErrors.message}
                </motion.p>
              ) : (
                <div />
              )}
              <span className='font-myriad text-[var(--wd-slate-500)] text-xs'>
                {form.message.length}/1000
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type='submit'
            disabled={status === 'loading'}
            className='bg-gradient-to-r from-[var(--wd-magenta-500)] to-[var(--wd-plum-500)] disabled:opacity-50 shadow-xl py-4 rounded-xl w-full font-noteworthy font-bold text-white text-lg transition-all duration-300 disabled:cursor-not-allowed'
            whileHover={status !== 'loading' ? { scale: 1.02, y: -2 } : {}}
            whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
          >
            {status === 'loading' ? (
              <div className='flex justify-center items-center gap-2'>
                <div className='border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin' />
                Sending Message...
              </div>
            ) : (
              'Send Message'
            )}
          </motion.button>

          {/* Status Messages */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className='p-4 rounded-xl text-center'
              style={{
                background:
                  'linear-gradient(135deg, var(--wd-yellow-100) 0%, var(--wd-magenta-100) 100%)',
              }}
            >
              <p className='font-myriad font-semibold text-green-700'>
                ✨ Thank you! Your message has been sent successfully.
              </p>
              <p className='mt-1 font-myriad text-green-600 text-sm'>
                We'll get back to you within 24 hours.
              </p>
            </motion.div>
          )}

          {status === 'error' && error && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className='bg-red-50 p-4 border border-red-200 rounded-xl text-center'
            >
              <p className='font-myriad font-semibold text-red-600'>
                ⚠️ {error}
              </p>
            </motion.div>
          )}
        </form>
      </motion.section>
    </main>
  );
}
