'use client';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Productions', href: '/productions' },
  { label: 'People', href: '/people' },
  { label: 'Awards & Press', href: '/awards' },
  { label: 'Contact', href: '/contact' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
} as Variants;

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      mass: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.8,
    rotateX: 15,
    transition: {
      duration: 0.3,
    },
  },
} as Variants;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    const body = document.body;

    if (!dialog) return;

    if (menuOpen) {
      dialog.showModal();
      body.classList.add('no-scroll');
    } else {
      if (dialog.open) dialog.close();
      body.classList.remove('no-scroll');
    }

    return () => {
      body.classList.remove('no-scroll');
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 z-40 w-full transition-all duration-500 ${
          scrolled ? 'backdrop-blur-xl border-b shadow-lg' : 'backdrop-blur-sm'
        }`}
        style={{
          background: scrolled
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 244, 255, 0.98) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 244, 255, 0.85) 100%)',
          borderColor: scrolled ? 'var(--wd-lilac-200)' : 'transparent',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className='flex justify-between items-center mx-auto px-6 py-4 w-full max-w-7xl'>
          {/* Logo */}
          <motion.div
            className='flex-shrink-0'
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Link href='/' className='group flex items-center gap-2'>
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src='/images/wm-logo.svg'
                  alt='Watchdog Media Logo'
                  width={120}
                  height={40}
                  className='group-hover:brightness-90 w-auto h-10 md:h-12 transition-all duration-300'
                />
              </motion.div>
              <Image
                src='/images/wm-logo-text.svg'
                alt='Watchdog Media Text'
                width={120}
                height={40}
                className='group-hover:brightness-90 w-auto h-12 md:h-16 transition-all duration-300'
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-8 ml-auto'>
            {navItems.map((item, index) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 300,
                  }}
                >
                  <Link
                    href={item.href}
                    className={`relative font-noteworthy font-bold text-lg transition-all duration-300 group ${
                      isActive
                        ? 'text-[var(--wd-magenta-600)]'
                        : 'text-[var(--wd-text)] hover:text-[var(--wd-magenta-600)]'
                    }`}
                  >
                    <span className='z-10 relative'>{item.label}</span>

                    {/* Enhanced underline */}
                    <motion.div
                      className='bottom-0 left-0 absolute rounded-full w-full h-0.5'
                      style={{
                        background:
                          'linear-gradient(90deg, var(--wd-magenta-500) 0%, var(--wd-plum-500) 100%)',
                        originX: 0,
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Soft glow effect */}
                    <motion.div
                      className='-z-10 absolute inset-0 rounded-lg'
                      style={{
                        background:
                          'linear-gradient(135deg, var(--wd-lilac-100) 0%, var(--wd-magenta-50) 100%)',
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMenuOpen(true)}
            className='lg:hidden shadow-sm p-2 border rounded-xl transition-all duration-300'
            style={{
              background:
                'linear-gradient(135deg, var(--wd-lilac-50) 0%, var(--wd-lilac-100) 100%)',
              borderColor: 'var(--wd-lilac-200)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label='Open menu'
          >
            <Menu className='w-6 h-6 text-[var(--wd-slate-700)]' />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className='z-50 fixed inset-0'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Enhanced gradient backdrop */}
            <motion.div
              className='absolute inset-0 backdrop-blur-xl'
              style={{
                background: 'var(--wd-gradient-mobile)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Animated pattern overlay */}
            <motion.div
              className='absolute inset-0 opacity-15'
              style={{
                background: `
                  radial-gradient(circle at 25% 25%, var(--wd-magenta-300) 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, var(--wd-yellow-300) 0%, transparent 50%),
                  radial-gradient(circle at 50% 10%, var(--wd-plum-300) 0%, transparent 40%)
                `,
              }}
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Floating shapes */}
            <motion.div
              className='top-20 left-10 absolute rounded-full w-20 h-20'
              style={{
                background:
                  'linear-gradient(135deg, var(--wd-yellow-200) 0%, var(--wd-magenta-200) 100%)',
                filter: 'blur(12px)',
              }}
              animate={{
                x: [0, 40, 0],
                y: [0, -25, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className='right-16 bottom-32 absolute rounded-full w-16 h-16'
              style={{
                background:
                  'linear-gradient(135deg, var(--wd-plum-200) 0%, var(--wd-lilac-300) 100%)',
                filter: 'blur(10px)',
              }}
              animate={{
                x: [0, -30, 0],
                y: [0, 20, 0],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 3,
              }}
            />

            <dialog
              ref={dialogRef}
              onClose={() => setMenuOpen(false)}
              className='z-10 fixed inset-0 bg-transparent m-0 p-0 border-0 w-screen max-w-none h-screen max-h-none'
              style={{ all: 'unset', position: 'fixed', inset: 0, zIndex: 10 }}
            >
              <motion.div
                className='relative flex flex-col justify-center items-center px-6 w-full h-full perspective-1000'
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
              >
                {/* Enhanced Close Button */}
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  className='top-6 right-6 z-20 absolute shadow-xl p-3 border rounded-full transition-all duration-300'
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, var(--wd-lilac-100) 100%)',
                    borderColor: 'var(--wd-lilac-300)',
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 90,
                    background:
                      'linear-gradient(135deg, var(--wd-yellow-400) 0%, var(--wd-magenta-400) 100%)',
                  }}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.3 }}
                  aria-label='Close menu'
                >
                  <X className='w-6 h-6 text-[var(--wd-slate-700)]' />
                </motion.button>

                {/* Navigation Items */}
                <div className='z-10 flex flex-col items-center gap-6'>
                  {navItems.map((item, index) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                      <motion.div
                        key={item.href}
                        variants={itemVariants}
                        custom={index}
                        className='perspective-1000'
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={`relative font-noteworthy font-bold text-4xl md:text-5xl lg:text-6xl transition-all duration-500 group block ${
                            isActive
                              ? 'text-[var(--wd-magenta-700)]'
                              : 'text-[var(--wd-slate-700)] hover:text-[var(--wd-magenta-700)]'
                          }`}
                        >
                          <motion.span
                            className='block z-10 relative'
                            whileHover={{
                              scale: 1.05,
                              rotateY: 3,
                              rotateX: -1,
                            }}
                            whileTap={{
                              scale: 0.95,
                              rotateY: -2,
                              rotateX: 1,
                            }}
                            transition={{
                              type: 'spring',
                              stiffness: 300,
                              duration: 0.4,
                            }}
                          >
                            {item.label}
                          </motion.span>

                          {/* Enhanced gradient background */}
                          <motion.div
                            className='-z-10 absolute inset-0 rounded-2xl'
                            style={{
                              background:
                                'linear-gradient(135deg, var(--wd-lilac-100) 0%, var(--wd-magenta-100) 50%, var(--wd-yellow-100) 100%)',
                            }}
                            initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
                            whileHover={{
                              opacity: 0.8,
                              scale: 1.1,
                              rotateX: 0,
                            }}
                            transition={{
                              duration: 0.5,
                              ease: 'easeOut',
                            }}
                          />

                          {/* Enhanced shimmer effect */}
                          <motion.div
                            className='-z-10 absolute inset-0'
                            style={{
                              background:
                                'linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
                            }}
                            initial={{ x: '-100%', opacity: 0, skewX: -10 }}
                            whileHover={{
                              x: '100%',
                              opacity: 1,
                              skewX: 0,
                              transition: {
                                duration: 0.8,
                                ease: 'easeInOut',
                              },
                            }}
                          />

                          {/* Soft glow effect */}
                          <motion.div
                            className='-z-20 absolute inset-0 rounded-full'
                            style={{
                              background:
                                'radial-gradient(circle, var(--wd-magenta-300) 0%, transparent 70%)',
                            }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileHover={{
                              opacity: 0.6,
                              scale: 1.5,
                              transition: { duration: 0.6 },
                            }}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Enhanced decorative elements */}
                <motion.div
                  className='top-1/4 left-8 absolute rounded-full w-3 h-3'
                  style={{ background: 'var(--wd-yellow-400)' }}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.7, 1, 0.7],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className='right-12 bottom-1/3 absolute rounded-full w-4 h-4'
                  style={{ background: 'var(--wd-magenta-400)' }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.5,
                  }}
                />
                <motion.div
                  className='top-1/3 right-20 absolute rounded-full w-2 h-2'
                  style={{ background: 'var(--wd-plum-400)' }}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.8,
                  }}
                />

                {/* Soft texture overlay */}
                <motion.div
                  className='absolute inset-0 pointer-events-none mix-blend-soft-light'
                  style={{
                    background: `
                      radial-gradient(circle at 30% 40%, var(--wd-lilac-200) 0%, transparent 60%),
                      radial-gradient(circle at 70% 60%, var(--wd-magenta-200) 0%, transparent 60%),
                      radial-gradient(circle at 50% 80%, var(--wd-yellow-200) 0%, transparent 60%)
                    `,
                    opacity: 0.4,
                  }}
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
              </motion.div>
            </dialog>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
