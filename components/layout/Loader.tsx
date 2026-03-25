'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BRAND = "nine2Eleven".split('');

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-cream"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          aria-label="Loading nine2Eleven"
          role="status"
        >
          {/* Steaming bowl SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-8"
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Steam paths */}
              <motion.path
                d="M44 32 C44 18, 52 14, 52 8"
                stroke="#E8930A"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              />
              <motion.path
                d="M60 34 C60 20, 68 16, 68 10"
                stroke="#E8930A"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              />
              <motion.path
                d="M76 32 C76 18, 84 14, 84 8"
                stroke="#E8930A"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 1.0 }}
              />
              {/* Bowl body */}
              <ellipse cx="60" cy="74" rx="36" ry="10" fill="#2E1503" opacity="0.08" />
              <path
                d="M24 56 Q24 90 60 90 Q96 90 96 56 Z"
                fill="#FDF6EC"
                stroke="#2E1503"
                strokeWidth="2.5"
              />
              {/* Food inside */}
              <ellipse cx="60" cy="58" rx="28" ry="8" fill="#E8930A" opacity="0.7" />
              <ellipse cx="54" cy="57" rx="6" ry="4" fill="#2D6A4F" opacity="0.8" />
              <ellipse cx="66" cy="59" rx="5" ry="3" fill="#C47A08" opacity="0.6" />
              {/* Bowl rim */}
              <ellipse cx="60" cy="56" rx="36" ry="6" fill="#2E1503" opacity="0.12" />
              <ellipse cx="60" cy="56" rx="36" ry="6" fill="none" stroke="#2E1503" strokeWidth="2.5" />
              {/* Base */}
              <rect x="42" y="90" width="36" height="6" rx="3" fill="#2E1503" opacity="0.5" />
              <rect x="46" y="96" width="28" height="4" rx="2" fill="#2E1503" opacity="0.3" />
            </svg>
          </motion.div>

          {/* Brand name letter-by-letter */}
          <div className="flex items-baseline gap-0.5" aria-label="nine2Eleven">
            {BRAND.map((letter, i) => {
              const isBold = i >= 5; // "Eleven" part is bold
              return (
                <motion.span
                  key={i}
                  className={`font-playfair text-mahogany ${
                    isBold ? 'font-bold text-4xl' : 'font-normal text-4xl'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + i * 0.07,
                    duration: 0.35,
                    ease: 'easeOut',
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </div>

          {/* Tagline */}
          <motion.p
            className="font-nunito text-warmgray text-sm mt-3 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            Every Meal, Every Moment
          </motion.p>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-8 w-32 h-1 bg-cream-dark rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-saffron rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.3, duration: 2.1, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
