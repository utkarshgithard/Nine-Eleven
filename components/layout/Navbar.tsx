'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/80 backdrop-blur-md shadow-md border-b border-cream-dark/50'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-saffron rounded-lg"
            aria-label="nine2Eleven — Home"
          >
            <span className="font-playfair text-2xl text-mahogany">
              <span className="font-normal">nine2</span>
              <span className="font-bold text-saffron">Eleven</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-7" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-nunito text-sm font-600 text-mahogany hover:text-saffron transition-colors duration-200 relative group focus:outline-none focus:ring-2 focus:ring-saffron/50 rounded-sm"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-saffron rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-saffron text-saffron font-nunito font-700 text-sm rounded-full hover:bg-saffron hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-saffron focus:ring-offset-2 active:scale-95"
              aria-label="Call nine2Eleven"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Hamburger — Mobile */}
          <button
            className="md:hidden p-2 rounded-lg text-mahogany hover:bg-cream-dark/60 transition-colors focus:outline-none focus:ring-2 focus:ring-saffron"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all duration-300" style={{ transform: menuOpen ? 'rotate(45deg) translate(3px,5px)' : '' }} />
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all duration-300" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 h-0.5 bg-current transition-all duration-300" style={{ transform: menuOpen ? 'rotate(-45deg) translate(3px,-5px)' : '' }} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-mahogany/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              key="drawer"
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-cream flex flex-col pt-20 pb-8 px-6 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              role="navigation"
              aria-label="Mobile navigation"
            >
              {/* Close */}
              <button
                className="absolute top-5 right-5 p-2 text-mahogany hover:text-saffron transition-colors focus:outline-none focus:ring-2 focus:ring-saffron rounded-lg"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Logo in drawer */}
              <a href="#home" className="font-playfair text-2xl text-mahogany mb-8" onClick={() => setMenuOpen(false)}>
                <span className="font-normal">nine2</span>
                <span className="font-bold text-saffron">Eleven</span>
              </a>

              <ul className="flex flex-col gap-2" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <a
                      href={link.href}
                      className="block py-3 px-4 font-nunito font-600 text-mahogany hover:text-saffron hover:bg-saffron/8 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-saffron"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 px-5 py-3 border-2 border-saffron text-saffron font-nunito font-700 text-sm rounded-full hover:bg-saffron hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-saffron"
                  onClick={() => setMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>

              <p className="mt-auto font-nunito text-xs text-warmgray/60 text-center">
                © 2025 nine2Eleven. Every Meal, Every Moment
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
