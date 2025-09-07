/* eslint-disable react/no-unescaped-entities */
'use client';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer className='relative bg-[var(--wd-slate)] overflow-hidden !text-[var(--wd-silver)]'>
      {/* Background Pattern */}
      <motion.div
        className='absolute inset-0 opacity-5'
        // style={{
        //   background: `
        //     radial-gradient(circle at 25% 25%, var(--wd-magenta) 0%, transparent 50%),
        //     radial-gradient(circle at 75% 75%, var(--wd-yellow) 0%, transparent 50%),
        //     radial-gradient(circle at 50% 10%, var(--wd-plum) 0%, transparent 40%)
        //   `,
        // }}
        // animate={{
        //   scale: [1, 1.1, 1],
        //   rotate: [0, 180, 360],
        // }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
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
                <span className='text-[var(--wd-yellow)]'>Watchdog</span>{' '}
                <span className='text-[var(--wd-magenta)]'>Media</span>
              </h2>
              <p className='mx-auto max-w-2xl font-myriad text-[var(--wd-silver)] text-lg md:text-xl leading-relaxed'>
                Corporate-grade reliability with artist-grade vision.
                <span className='text-[var(--wd-magenta)]'>
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
                    className='text-[var(--wd-yellow)]'
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
                    <address className='font-myriad text-[var(--wd-silver)] text-sm not-italic leading-relaxed'>
                      17 Howick Drive, Waterfall
                      <br />
                      Durban, KwaZulu Natal
                      <br />
                      South Africa, 3652
                    </address>
                  </div>
                  <div className='flex items-center gap-2 text-[var(--wd-silver)] text-sm'>
                    <PhoneIcon
                      size={16}
                      weight='fill'
                      className='text-[var(--wd-magenta)]'
                    />
                    <span>+27 (0)31 123 4567</span>
                  </div>
                  <div className='flex items-center gap-2 text-[var(--wd-silver)] text-sm'>
                    <EnvelopeIcon
                      size={16}
                      weight='fill'
                      className='text-[var(--wd-magenta)]'
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
                <ul className='space-y-3 font-myriad text-[var(--wd-silver)] text-sm'>
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
                        className='group flex items-center gap-2 hover:text-[var(--wd-magenta)] transition-colors duration-300'
                      >
                        <motion.span
                          className='bg-[var(--wd-yellow)] group-hover:bg-[var(--wd-magenta)] rounded-full w-1 h-1 transition-colors duration-300'
                          whileHover={{ scale: 1.5 }}
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
                <ul className='space-y-3 font-myriad text-[var(--wd-silver)] text-sm'>
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
                        className='group flex items-center gap-2 hover:text-[var(--wd-magenta)] transition-colors duration-300'
                      >
                        <motion.span
                          className='bg-[var(--wd-yellow)] group-hover:bg-[var(--wd-magenta)] rounded-full w-1 h-1 transition-colors duration-300'
                          whileHover={{ scale: 1.5 }}
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
                <ul className='space-y-3 mb-8 font-myriad text-[var(--wd-silver)] text-sm'>
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
                        className='group flex items-center gap-2 hover:text-[var(--wd-magenta)] transition-colors duration-300'
                      >
                        <motion.span
                          className='bg-[var(--wd-yellow)] group-hover:bg-[var(--wd-magenta)] rounded-full w-1 h-1 transition-colors duration-300'
                          whileHover={{ scale: 1.5 }}
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
                        color: 'var(--wd-magenta)',
                      },
                      {
                        icon: InstagramLogoIcon,
                        href: '#',
                        color: 'var(--wd-yellow)',
                      },
                      { icon: TwitterLogoIcon, href: '#', color: 'var(--wd-plum)' },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className='bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-all duration-300'
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon
                          size={20}
                          weight='fill'
                          style={{ color: social.color }}
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to Action Section */}
            <motion.div variants={itemVariants} className='mb-12 text-center'>
              <div className='bg-gradient-to-r from-[var(--wd-magenta)] to-[var(--wd-plum)] mx-auto p-8 md:p-12 rounded-2xl max-w-4xl'>
                <h3 className='mb-4 font-noteworthy font-bold text-white text-2xl md:text-3xl'>
                  Ready to Tell Your Story?
                </h3>
                <p className='mb-6 font-myriad text-white/90 text-lg leading-relaxed'>
                  Let's create something extraordinary together. Corporate
                  reliability meets artistic vision.
                </p>
                <div className='flex sm:flex-row flex-col justify-center gap-4'>
                  <motion.a
                    href='/contact'
                    className='inline-flex items-center bg-white hover:bg-[var(--wd-yellow)] px-8 py-4 rounded-lg font-myriad font-bold text-[var(--wd-magenta)] hover:text-[var(--wd-slate)] text-lg transition-all duration-300'
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <EnvelopeIcon size={20} weight='fill' className='mr-2' />
                    Get in Touch
                  </motion.a>
                  <motion.a
                    href='/productions'
                    className='inline-flex items-center bg-transparent hover:bg-white px-8 py-4 border-2 border-white rounded-lg font-myriad font-bold text-white hover:text-[var(--wd-magenta)] text-lg transition-all duration-300'
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <GlobeIcon size={20} weight='fill' className='mr-2' />
                    View Our Work
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className='px-6 py-6 border-white/20 border-t'>
          <div className='mx-auto max-w-7xl'>
            <div className='flex md:flex-row flex-col justify-between items-center gap-4'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='font-myriad text-[var(--wd-silver)] text-sm'
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
                className='flex gap-6 font-myriad text-[var(--wd-silver)] text-sm'
              >
                <Link
                  href='/terms'
                  className='hover:text-[var(--wd-magenta)] transition-colors duration-300'
                >
                  Terms
                </Link>
                <Link
                  href='/privacy'
                  className='hover:text-[var(--wd-magenta)] transition-colors duration-300'
                >
                  Privacy
                </Link>
                <Link
                  href='/accessibility'
                  className='hover:text-[var(--wd-magenta)] transition-colors duration-300'
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
