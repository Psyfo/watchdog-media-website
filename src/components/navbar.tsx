"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
      duration: 0.2,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
} as Variants;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
} as Variants;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

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
      body.classList.remove('no-scroll'); // Cleanup just in case
    };
  }, [menuOpen]);

  return (
    <>
      <nav className='fixed top-0 z-40 flex items-center justify-between w-full px-6 py-4 bg-white shadow-sm'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <Link href='/' className='flex items-center gap-0 md:gap-2'>
            <Image
              src='/images/wm-logo.svg'
              alt='Watchdog Media Logo'
              width={120}
              height={40}
              className='w-auto h-12 md:h-[91px]'
            />
            <Image
              src='/images/wm-logo-text.svg'
              alt='Watchdog Media Text'
              width={120}
              height={40}
              className='w-auto h-16 md:h-24'
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <div className='items-center hidden gap-6 ml-auto md:flex h-[10vh]'>
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <motion.a
                key={item.href}
                href={item.href}
                className={`font-bold font-noteworthy text-[1.5rem] transition-colors ${
                  isActive
                    ? 'text-watchdog-purple'
                    : 'text-watchdog-dark hover:text-watchdog-purple'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item.label}
              </motion.a>
            );
          })}
        </div>

        {/* Hamburger for mobile */}
        <motion.button
          onClick={() => setMenuOpen(true)}
          className='md:hidden focus:outline-none'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          aria-label='Open menu'
        >
          <Menu className='w-8 h-8 text-watchdog-dark' />
        </motion.button>
      </nav>

      {/* Mobile menu using <dialog> */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className='fixed inset-0 z-40 bg-black/30 backdrop-blur-sm'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <dialog
              ref={dialogRef}
              onClose={() => setMenuOpen(false)}
              className='fixed inset-0 z-50 w-screen h-screen p-0 m-0 overflow-hidden bg-transparent border-0'
            >
              <motion.div
                className='relative flex flex-col items-center justify-center w-full h-full gap-8 px-6 bg-white/70 backdrop-blur-md'
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
              >
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  className='absolute text-watchdog-dark top-6 right-6'
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  aria-label='Close menu'
                >
                  <X className='w-8 h-8' />
                </motion.button>

                {navItems.map((item) => {
                  const isActive = pathname.startsWith(item.href);
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`font-noteworthy font-bold text-[2rem] transition-colors ${
                        isActive
                          ? 'text-watchdog-purple'
                          : 'text-watchdog-dark hover:text-watchdog-purple'
                      }`}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{
                        scale: 0.95,
                        rotate: -1,
                        transition: {
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                        },
                      }}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
              </motion.div>
            </dialog>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
