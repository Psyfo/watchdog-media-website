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
                        ? 'text-[var(--wd-magenta)]'
                        : 'text-[var(--wd-text)] hover:text-[var(--wd-magenta)]'
                    }`}
                  >
                    <span className='z-10 relative'>{item.label}</span>

                    {/* Hover underline */}
                    <motion.div
                      className='bottom-0 left-0 absolute bg-gradient-to-r from-[var(--wd-magenta)] to-[var(--wd-plum)] w-full h-0.5'
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />

                    {/* Hover glow effect */}
                    <motion.div
                      className='-z-10 absolute inset-0 bg-gradient-to-r from-[var(--wd-magenta)]/10 to-[var(--wd-plum)]/10 rounded-lg'
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
            className='lg:hidden bg-[var(--wd-surface)] hover:bg-[var(--wd-slate)]/20 backdrop-blur-sm p-2 border border-[var(--wd-border-alpha)] rounded-lg transition-all duration-300'
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
            className='z-50 fixed inset-0'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Soft lilac gradient backdrop */}
            <motion.div
              className='absolute inset-0 backdrop-blur-xl'
              style={{
                background: `
                  linear-gradient(135deg, 
                    #f8f4ff 0%,
                    #f0e6ff 15%,
                    #e8d5ff 30%,
                    #dcc5ff 45%,
                    #d1b3ff 60%,
                    #c5a0ff 75%,
                    #b88dff 85%,
                    #ac7aff 100%
                  )
                `,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Soft animated pattern overlay */}
            <motion.div
              className='absolute inset-0 opacity-20'
              style={{
                background: `
                  radial-gradient(circle at 20% 30%, #dcc5ff 0%, transparent 40%),
                  radial-gradient(circle at 80% 70%, #c5a0ff 0%, transparent 40%),
                  radial-gradient(circle at 40% 80%, #f0e6ff 0%, transparent 30%),
                  radial-gradient(circle at 60% 20%, #b88dff 0%, transparent 35%)
                `,
              }}
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Floating geometric shapes with soft colors */}
            <motion.div
              className='top-20 left-10 absolute rounded-full w-16 h-16'
              style={{
                background: 'linear-gradient(135deg, #f0e6ff 0%, #dcc5ff 100%)',
                filter: 'blur(8px)',
              }}
              animate={{
                x: [0, 30, 0],
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
              className='right-16 bottom-32 absolute rounded-full w-12 h-12'
              style={{
                background: 'linear-gradient(135deg, #c5a0ff 0%, #b88dff 100%)',
                filter: 'blur(6px)',
              }}
              animate={{
                x: [0, -25, 0],
                y: [0, 15, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
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
                {/* Close Button */}
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  className='top-6 right-6 z-20 absolute shadow-lg p-3 border rounded-full transition-all duration-300'
                  style={{
                    background:
                      'linear-gradient(135deg, #ffffff 0%, #f8f4ff 100%)',
                    borderColor: '#dcc5ff',
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 90,
                    background:
                      'linear-gradient(135deg, #f0e6ff 0%, #e8d5ff 100%)',
                  }}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.3 }}
                  aria-label='Close menu'
                >
                  <X className='w-6 h-6' style={{ color: '#6b46c1' }} />
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
                              ? 'text-[#6b46c1]' // Deep purple for active
                              : 'text-[#8b5a9f] hover:text-[#6b46c1]' // Soft purple for normal
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

                          {/* Soft gradient background */}
                          <motion.div
                            className='-z-10 absolute inset-0 rounded-2xl'
                            style={{
                              background:
                                'linear-gradient(135deg, #f0e6ff 0%, #e8d5ff 50%, #dcc5ff 100%)',
                            }}
                            initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
                            whileHover={{
                              opacity: 0.6,
                              scale: 1.1,
                              rotateX: 0,
                            }}
                            transition={{
                              duration: 0.5,
                              ease: 'easeOut',
                            }}
                          />

                          {/* Shimmer effect */}
                          <motion.div
                            className='-z-10 absolute inset-0'
                            style={{
                              background:
                                'linear-gradient(45deg, transparent 0%, #ffffff 50%, transparent 100%)',
                            }}
                            initial={{ x: '-100%', opacity: 0, skewX: -10 }}
                            whileHover={{
                              x: '100%',
                              opacity: 0.3,
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
                                'radial-gradient(circle, #c5a0ff 0%, transparent 70%)',
                            }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileHover={{
                              opacity: 0.4,
                              scale: 1.5,
                              transition: { duration: 0.6 },
                            }}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Soft decorative elements */}
                <motion.div
                  className='top-1/4 left-8 absolute rounded-full w-2 h-2'
                  style={{ backgroundColor: '#dcc5ff' }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className='right-12 bottom-1/3 absolute rounded-full w-3 h-3'
                  style={{ backgroundColor: '#f0e6ff' }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.9, 0.5],
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
                  className='top-1/3 right-20 absolute rounded-full w-1.5 h-1.5'
                  style={{ backgroundColor: '#c5a0ff' }}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.7, 1, 0.7],
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
                      radial-gradient(circle at 30% 40%, #f0e6ff 0%, transparent 50%),
                      radial-gradient(circle at 70% 60%, #e8d5ff 0%, transparent 50%),
                      radial-gradient(circle at 50% 80%, #dcc5ff 0%, transparent 50%)
                    `,
                    opacity: 0.3,
                  }}
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 6,
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
