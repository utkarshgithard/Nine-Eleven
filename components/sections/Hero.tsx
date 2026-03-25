'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const foodImages = [
  {
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&auto=format',
    alt: 'A beautifully plated healthy bowl',
    rotate: '-6deg',
    zIndex: 10,
    top: 0,
    left: 0,
  },
  {
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&auto=format',
    alt: 'Fresh pizza with vegetables',
    rotate: '4deg',
    zIndex: 20,
    top: 60,
    left: 30,
  },
  {
    src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&auto=format',
    alt: 'Delicious pancakes with syrup',
    rotate: '-2deg',
    zIndex: 30,
    top: 130,
    left: 15,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden grain-overlay"
      aria-label="Hero section"
    >
      {/* Background warm glow */}
      <div className="absolute inset-0 gradient-radial-warm pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-saffron/5 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* LEFT — text content (60%) */}
          <div className="lg:col-span-3">
            {/* "Now Serving" badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-block mb-6"
            >
              <Badge variant="forest" className="text-sm px-4 py-1.5">
                <span className="relative flex h-2 w-2 mr-1" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-forest" />
                </span>
                Now Serving
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-mahogany leading-[1.1] mb-6"
            >
              Food That Feels{' '}
              <span className="text-gradient-saffron italic">Like Home,</span>
              <br />
              Every Single Day
            </motion.h1>

            {/* Subheading */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-nunito text-lg text-warmgray leading-relaxed mb-8 max-w-xl"
            >
              From daily mess meals to grand event catering — nine2Eleven is your one-stop
              destination for freshly made, wholesome food that brings people together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-saffron text-white font-nunito font-700 text-base rounded-full shadow-lg shadow-saffron/30 hover:bg-saffron-dark hover:shadow-xl hover:shadow-saffron/40 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-saffron focus:ring-offset-2"
                aria-label="Get in touch with us"
              >
                Get In Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-mahogany/30 text-mahogany font-nunito font-700 text-base rounded-full hover:border-saffron hover:text-saffron transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-saffron/50"
                aria-label="Explore our services"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex -space-x-2" aria-label="Happy customers">
                {['🧑', '👩', '🧔', '👧'].map((avatar, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-saffron/20 border-2 border-cream flex items-center justify-center text-base">
                    {avatar}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-nunito text-sm font-700 text-mahogany">500+ Happy Clients</p>
                <div className="flex gap-0.5 mt-0.5" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-saffron fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — stacked image cards (40%) */}
          <div className="lg:col-span-2 relative hidden lg:flex justify-center items-center min-h-[420px]" aria-label="Food showcase">
            {foodImages.map((img, i) => (
              <motion.div
                key={i}
                className="absolute w-56 xl:w-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                style={{
                  rotate: img.rotate,
                  zIndex: img.zIndex,
                  top: img.top,
                  left: img.left,
                }}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  y: [0, -8, 0],
                  scale: 1,
                }}
                transition={{
                  opacity: { delay: 0.4 + i * 0.2, duration: 0.6 },
                  scale: { delay: 0.4 + i * 0.2, duration: 0.6 },
                  y: {
                    delay: 0.4 + i * 0.2,
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  },
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="object-cover w-full h-40 xl:h-44"
                  unoptimized
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" className="w-full h-12 text-white fill-current opacity-50">
          <path d="M0,60L60,50C120,40,240,20,360,16.7C480,13,600,27,720,30C840,33,960,27,1080,23.3C1200,20,1320,20,1380,20L1440,20L1440,60L0,60Z" />
        </svg>
      </div>
    </section>
  );
}
