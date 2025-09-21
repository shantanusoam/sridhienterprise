'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { COLORS } from '@/lib/constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`w-10 h-10 bg-${COLORS.primary} rounded-full flex items-center justify-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </motion.div>
          <span className={`text-2xl font-bold text-${COLORS.primary}`}>
            Sridhi Enterprises
          </span>
        </Link>

        <nav className="hidden md:flex bg-white space-x-6">
          {[
            { name: 'Home', href: '/' },
            { name: 'Companies', href: '/companies' },
            { name: 'Products', href: '/products' },
            { name: 'About', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Contact', href: '/contact' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-${COLORS.text} hover:text-${COLORS.secondary} transition-colors`}
            >
              <motion.span whileHover={{ scale: 1.1 }}>{item.name}</motion.span>
            </Link>
          ))}
        </nav>

        <Button className={`hidden md:block   text-white`}>
          Request a Quote
        </Button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden text-${COLORS.primary}`}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`md:hidden bg-${COLORS.white} shadow-md`}
        >
          <nav className="flex flex-col items-center py-4">
            {[
              { name: 'Home', href: '/' },
              { name: 'Companies', href: '/companies' },
              { name: 'Products', href: '/products' },
              { name: 'About', href: '/about' },
              { name: 'Services', href: '/services' },
              { name: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 text-${COLORS.text} hover:text-${COLORS.secondary} transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                <motion.span whileHover={{ scale: 1.1 }}>
                  {item.name}
                </motion.span>
              </Link>
            ))}
            <Button
              className={`mt-4 bg-${COLORS.secondary} hover:bg-${COLORS.primary} text-white`}
            >
              Request a Quote
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
