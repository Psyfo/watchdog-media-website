/* eslint-disable react/no-unescaped-entities */
'use client';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import {
  ArrowRightIcon,
  EnvelopeIcon,
  GlobeIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterLogoIcon,
} from '@phosphor-icons/react';

const Footer: React.FC = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer
      className='relative overflow-hidden text-white'
      style={{
        background: `
        linear-gradient(135deg, 
          var(--wd-slate-900) 0%,
          var(--wd-slate-800) 25%,
          var(--wd-plum-900) 75%,
          var(--wd-slate-950) 100%
        )
      `,
      }}
    >
      {/* Soft Background Pattern */}
      <motion.div
        className='absolute inset-0 opacity-8'
        style={{
          background: `
            radial-gradient(circle at 20% 20%, var(--wd-lilac-500) 0%, transparent 60%),
            radial-gradient(circle at 80% 80%, var(--wd-magenta-500) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, var(--wd-yellow-500) 0%, transparent 70%)
          `,
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 1, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating elements */}
      <motion.div
        className='top-20 right-20 absolute opacity-10 rounded-full w-24 h-24'
        style={{ background: 'var(--wd-gradient-soft)' }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='bottom-32 left-16 absolute opacity-12 rounded-full w-16 h-16'
        style={{ background: 'var(--wd-gradient-elegant)' }}
        animate={{
          x: [0, 15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <div className='z-10 relative'>
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='px-6 py-16 md:py-20'
        >
          <div className='mx-auto max-w-7xl'>
            {/* Header Section */}
            <motion.div variants={itemVariants} className='mb-16 text-center'>
              <h2 className='mb-6 font-noteworthy font-bold text-4xl md:text-5xl lg:text-6xl'>
                <span className='bg-clip-text bg-gradient-to-r from-[var(--wd-yellow-400)] to-[var(--wd-yellow-300)] text-transparent'>
                  Watchdog
                </span>{' '}
                <span className='bg-clip-text bg-gradient-to-r from-[var(--wd-magenta-400)] to-[var(--wd-plum-400)] text-transparent'>
                  Media
                </span>
              </h2>
              <p className='mx-auto max-w-2xl font-myriad text-[var(--wd-silver-400)] text-lg md:text-xl leading-relaxed'>
                Corporate-grade reliability with artist-grade vision.
                <span className='font-semibold text-[var(--wd-lilac-300)]'>
                  {' '}
                  Empowering stories
                </span>{' '}
                that move business and culture.
              </p>
            </motion.div>

            {/* Links Grid */}
            <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16'>
              {/* Company Info */}
              <motion.div variants={itemVariants}>
                <div className='flex items-center gap-3 mb-6'>
                  <MapPinIcon
                    size={24}
                    weight='fill'
                    className='text-[var(--wd-yellow-400)]'
                  />
                  <h3 className='font-noteworthy font-bold text-white text-xl'>
                    Company
                  </h3>
                </div>
                <div className='space-y-4'>
                  <div>
                    <h4 className='mb-2 font-myriad font-bold text-white'>
                      Watchdog Media (Pty) Limited
                    </h4>
                    <address className='font-myriad text-[var(--wd-silver-400)] text-sm not-italic leading-relaxed'>
                      17 Howick Drive, Waterfall
                      <br />
                      Durban, KwaZulu Natal
                      <br />
                      South Africa, 3652
                    </address>
                  </div>
                  <div className='flex items-center gap-2 text-[var(--wd-silver-400)] text-sm'>
                    <PhoneIcon
                      size={16}
                      weight='fill'
                      className='text-[var(--wd-magenta-400)]'
                    />
                    <span>+27 (0)31 123 4567</span>
                  </div>
                  <div className='flex items-center gap-2 text-[var(--wd-silver-400)] text-sm'>
                    <EnvelopeIcon
                      size={16}
                      weight='fill'
                      className='text-[var(--wd-magenta-400)]'
                    />
                    <span>info@watchdogmedia.co.za</span>
                  </div>
                </div>
              </motion.div>

              {/* Services */}
              <motion.div variants={itemVariants}>
                <h3 className='mb-6 font-noteworthy font-bold text-white text-xl'>
                  Our Services
                </h3>
                <ul className='space-y-3 font-myriad text-[var(--wd-silver-400)] text-sm'>
                  {[
                    {
                      label: 'Production Support',
                      href: '/services/production-support',
                    },
                    { label: 'Creative Services', href: '/services/creative' },
                    {
                      label: 'Location Support',
                      href: '/services/location-support',
                    },
                    {
                      label: 'Directing Services',
                      href: '/services/directing',
                    },
                    { label: 'Key Crew Services', href: '/services/key-crew' },
                  ].map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className='group flex items-center gap-2 hover:text-[var(--wd-lilac-300)] transition-colors duration-300'
                      >
                        <motion.span
                          className='rounded-full w-1 h-1 transition-colors duration-300'
                          style={{
                            background: 'var(--wd-yellow-400)',
                          }}
                          whileHover={{
                            scale: 1.5,
                            background: 'var(--wd-magenta-400)',
                          }}
                        />
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Productions */}
              <motion.div variants={itemVariants}>
                <h3 className='mb-6 font-noteworthy font-bold text-white text-xl'>
                  Productions
                </h3>
                <ul className='space-y-3 font-myriad text-[var(--wd-silver-400)] text-sm'>
                  {[
                    { label: 'Taste Buds', href: '/productions/taste-buds' },
                    { label: 'Medunsa', href: '/productions/medunsa' },
                    { label: 'Cream', href: '/productions/cream' },
                    { label: 'Alignment', href: '/productions/alignment' },
                    { label: 'View All', href: '/productions' },
                  ].map((production) => (
                    <li key={production.href}>
                      <Link
                        href={production.href}
                        className='group flex items-center gap-2 hover:text-[var(--wd-lilac-300)] transition-colors duration-300'
                      >
                        <motion.span
                          className='rounded-full w-1 h-1 transition-colors duration-300'
                          style={{
                            background: 'var(--wd-yellow-400)',
                          }}
                          whileHover={{
                            scale: 1.5,
                            background: 'var(--wd-magenta-400)',
                          }}
                        />
                        {production.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company Links */}
              <motion.div variants={itemVariants}>
                <h3 className='mb-6 font-noteworthy font-bold text-white text-xl'>
                  Company
                </h3>
                <ul className='space-y-3 mb-8 font-myriad text-[var(--wd-silver-400)] text-sm'>
                  {[
                    { label: 'About Us', href: '/about' },
                    { label: 'Awards & Press', href: '/awards' },
                    { label: 'People', href: '/people' },
                    { label: 'Contact', href: '/contact' },
                    { label: 'Privacy Policy', href: '/privacy' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className='group flex items-center gap-2 hover:text-[var(--wd-lilac-300)] transition-colors duration-300'
                      >
                        <motion.span
                          className='rounded-full w-1 h-1 transition-colors duration-300'
                          style={{
                            background: 'var(--wd-yellow-400)',
                          }}
                          whileHover={{
                            scale: 1.5,
                            background: 'var(--wd-magenta-400)',
                          }}
                        />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Social Media */}
                <div>
                  <h4 className='mb-4 font-myriad font-bold text-white text-sm'>
                    Follow Us
                  </h4>
                  <div className='flex gap-4'>
                    {[
                      {
                        icon: LinkedinLogoIcon,
                        href: '#',
                        gradient:
                          'linear-gradient(135deg, var(--wd-magenta-400) 0%, var(--wd-plum-400) 100%)',
                      },
                      {
                        icon: InstagramLogoIcon,
                        href: '#',
                        gradient:
                          'linear-gradient(135deg, var(--wd-yellow-400) 0%, var(--wd-magenta-400) 100%)',
                      },
                      {
                        icon: TwitterLogoIcon,
                        href: '#',
                        gradient:
                          'linear-gradient(135deg, var(--wd-plum-400) 0%, var(--wd-lilac-400) 100%)',
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className='p-2 rounded-lg transition-all duration-300'
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                        }}
                        whileHover={{
                          scale: 1.15,
                          y: -3,
                          background: social.gradient,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon
                          size={20}
                          weight='fill'
                          className='text-white'
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Call to Action Section */}
            <motion.div variants={itemVariants} className='mb-12 text-center'>
              <div
                className='mx-auto p-2 rounded-2xl max-w-4xl'
                style={{
                  background:
                    'linear-gradient(135deg, var(--wd-magenta-500) 0%, var(--wd-plum-500) 50%, var(--wd-yellow-500) 100%)',
                }}
              >
                <div
                  className='p-8 md:p-12 rounded-xl'
                  style={{
                    background:
                      'linear-gradient(135deg, var(--wd-slate-800) 0%, var(--wd-plum-800) 100%)',
                  }}
                >
                  <h3 className='mb-4 font-noteworthy font-bold text-white text-2xl md:text-3xl'>
                    Ready to Tell Your Story?
                  </h3>
                  <p className='mb-6 font-myriad text-[var(--wd-silver-300)] text-lg leading-relaxed'>
                    Let's create something extraordinary together. Corporate
                    reliability meets artistic vision.
                  </p>
                  <div className='flex sm:flex-row flex-col justify-center gap-4'>
                    <motion.a
                      href='/contact'
                      className='inline-flex items-center shadow-lg px-8 py-4 rounded-lg font-myriad font-bold text-lg transition-all duration-300'
                      style={{
                        background:
                          'linear-gradient(135deg, var(--wd-yellow-500) 0%, var(--wd-magenta-500) 100%)',
                        color: 'white',
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                        boxShadow: '0 15px 35px rgba(255, 242, 0, 0.4)',
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <EnvelopeIcon size={20} weight='fill' className='mr-2' />
                      <span>Get in Touch</span>
                      <motion.div
                        className='ml-2'
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <ArrowRightIcon size={20} weight='bold' />
                      </motion.div>
                    </motion.a>
                    <motion.a
                      href='/productions'
                      className='inline-flex items-center backdrop-blur-sm px-8 py-4 border-2 rounded-lg font-myriad font-bold text-lg transition-all duration-300'
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(248, 244, 255, 0.1) 0%, rgba(220, 197, 255, 0.2) 100%)',
                        borderColor: 'var(--wd-lilac-300)',
                        color: 'white',
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                        background: 'var(--wd-lilac-300)',
                        color: 'var(--wd-slate-900)',
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <GlobeIcon size={20} weight='fill' className='mr-2' />
                      View Our Work
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div
          className='px-6 py-6 border-t'
          style={{
            borderColor: 'rgba(248, 244, 255, 0.2)',
          }}
        >
          <div className='mx-auto max-w-7xl'>
            <div className='flex md:flex-row flex-col justify-between items-center gap-4'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='font-myriad text-[var(--wd-silver-400)] text-sm'
              >
                {year && (
                  <span>
                    &copy; {year} Watchdog Media (Pty) Limited. All rights
                    reserved.
                  </span>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='flex gap-6 font-myriad text-[var(--wd-silver-400)] text-sm'
              >
                <Link
                  href='/terms'
                  className='hover:text-[var(--wd-lilac-300)] transition-colors duration-300'
                >
                  Terms
                </Link>
                <Link
                  href='/privacy'
                  className='hover:text-[var(--wd-lilac-300)] transition-colors duration-300'
                >
                  Privacy
                </Link>
                <Link
                  href='/accessibility'
                  className='hover:text-[var(--wd-lilac-300)] transition-colors duration-300'
                >
                  Accessibility
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
