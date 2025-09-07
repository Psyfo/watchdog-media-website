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
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-black/10'
            : 'bg-white/70 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className='flex items-center justify-between w-full px-6 py-4 max-w-7xl mx-auto'>
          {/* Logo */}
          <motion.div
            className='flex-shrink-0'
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Link href='/' className='flex items-center gap-2 group'>
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src='/images/wm-logo.svg'
                  alt='Watchdog Media Logo'
                  width={120}
                  height={40}
                  className='w-auto h-10 md:h-12 transition-all duration-300 group-hover:brightness-90'
                />
              </motion.div>
              <Image
                src='/images/wm-logo-text.svg'
                alt='Watchdog Media Text'
                width={120}
                height={40}
                className='w-auto h-12 md:h-16 transition-all duration-300 group-hover:brightness-90'
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='items-center hidden gap-8 ml-auto lg:flex'>
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
                        ? 'text-[var(--wd-magenta)]'
                        : 'text-[var(--wd-text)] hover:text-[var(--wd-magenta)]'
                    }`}
                  >
                    <span className='relative z-10'>{item.label}</span>

                    {/* Hover underline */}
                    <motion.div
                      className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--wd-magenta)] to-[var(--wd-plum)]'
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />

                    {/* Hover glow effect */}
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-[var(--wd-magenta)]/10 to-[var(--wd-plum)]/10 rounded-lg -z-10'
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
            className='lg:hidden p-2 rounded-lg bg-[var(--wd-surface)] backdrop-blur-sm border border-[var(--wd-border-alpha)] hover:bg-[var(--wd-slate)]/20 transition-all duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label='Open menu'
          >
            <Menu className='w-6 h-6 text-[var(--wd-text)]' />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className='fixed inset-0 z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Backdrop with animated grain */}
            <motion.div
              className='absolute inset-0 bg-black/95 backdrop-blur-xl'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Animated background pattern */}
            <motion.div
              className='absolute inset-0 opacity-10'
              style={{
                background: `
                  radial-gradient(circle at 20% 80%, var(--wd-plum) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, var(--wd-magenta) 0%, transparent 50%),
                  radial-gradient(circle at 40% 40%, var(--wd-yellow) 0%, transparent 70%)
                `,
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <dialog
              ref={dialogRef}
              onClose={() => setMenuOpen(false)}
              className='fixed inset-0 z-10 w-screen h-screen p-0 m-0 bg-transparent border-0 max-w-none max-h-none'
              style={{ all: 'unset', position: 'fixed', inset: 0, zIndex: 10 }}
            >
              <motion.div
                className='relative flex flex-col items-center justify-center w-full h-full px-6 perspective-1000'
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
              >
                {/* Close Button */}
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  className='absolute top-6 right-6 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 z-20'
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.3 }}
                  aria-label='Close menu'
                >
                  <X className='w-6 h-6 text-white' />
                </motion.button>

                {/* Navigation Items */}
                <div className='flex flex-col items-center gap-8 z-10'>
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
                          className={`relative font-noteworthy font-bold text-5xl md:text-6xl lg:text-7xl transition-all duration-500 group block ${
                            isActive
                              ? 'text-[var(--wd-yellow)]'
                              : 'text-white hover:text-[var(--wd-yellow)]'
                          }`}
                        >
                          <motion.span
                            className='relative z-10 block'
                            whileHover={{
                              scale: 1.05,
                              rotateY: 5,
                              rotateX: -2,
                            }}
                            whileTap={{
                              scale: 0.95,
                              rotateY: -3,
                              rotateX: 2,
                            }}
                            transition={{
                              type: 'spring',
                              stiffness: 300,
                              duration: 0.4,
                            }}
                          >
                            {item.label}
                          </motion.span>

                          {/* Film strip effect */}
                          <motion.div
                            className='absolute inset-0 bg-gradient-to-r from-[var(--wd-yellow)]/10 via-[var(--wd-magenta)]/10 to-[var(--wd-plum)]/10 rounded-2xl -z-10'
                            initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
                            whileHover={{
                              opacity: 1,
                              scale: 1.15,
                              rotateX: 0,
                            }}
                            transition={{
                              duration: 0.5,
                              ease: 'easeOut',
                            }}
                          />

                          {/* Cinematic scan lines */}
                          <motion.div
                            className='absolute inset-0 bg-gradient-to-r from-transparent via-[var(--wd-yellow)]/40 to-transparent -z-10'
                            initial={{ x: '-100%', opacity: 0, skewX: -15 }}
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

                          {/* Spotlight effect */}
                          <motion.div
                            className='absolute inset-0 bg-gradient-radial from-[var(--wd-yellow)]/20 via-transparent to-transparent rounded-full -z-20'
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileHover={{
                              opacity: 1,
                              scale: 2,
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
                  className='absolute top-1/4 left-8 w-3 h-3 bg-[var(--wd-yellow)] rounded-full'
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 1, 0.4],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className='absolute bottom-1/3 right-12 w-4 h-4 bg-[var(--wd-magenta)] rounded-full'
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.9, 0.3],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.5,
                  }}
                />
                <motion.div
                  className='absolute top-1/3 right-20 w-2 h-2 bg-[var(--wd-plum)] rounded-full'
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.8,
                  }}
                />

                {/* Film grain overlay */}
                <motion.div
                  className='absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay'
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                  animate={{
                    opacity: [0.02, 0.04, 0.02],
                    scale: [1, 1.01, 1],
                  }}
                  transition={{
                    duration: 0.1,
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
