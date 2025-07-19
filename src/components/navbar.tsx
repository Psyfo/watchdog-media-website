"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Productions', href: '#productions' },
  { label: 'People', href: '#people' },
  { label: 'Awards & Press', href: '#awards' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className='fixed top-0 z-50 flex items-center justify-between w-full px-6 py-4 bg-white shadow-sm'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <Link href='/' className='flex items-center gap-0 md:gap-2 rows'>
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
        <div className='items-center hidden gap-6 ml-auto md:flex'>
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className='text-lg font-bold text-gray-800 font-noteworthy hover:text-black text-[1.5rem]'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setMenuOpen(true)}
          className='md:hidden focus:outline-none'
        >
          <Menu className='w-8 h-8 text-gray-800' />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className='fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 px-6 bg-white'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className='absolute text-gray-800 top-6 right-6'
            >
              <X className='w-8 h-8' />
            </button>
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className='text-2xl font-noteworthy font-bold text-watchdog-dark text-[2rem]'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
