'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  {
    icon: '😊',
    number: '500+',
    label: 'Happy Clients',
    description: 'Trusted by students, professionals & businesses',
  },
  {
    icon: '🏠',
    number: '4',
    label: 'Services Under One Roof',
    description: 'Mess, Canteen, Restaurant, Catering — all from nine2Eleven',
  },
  {
    icon: '🥬',
    number: '100%',
    label: 'Fresh Ingredients Daily',
    description: 'We source and cook fresh every single day',
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="about"
      className="py-16 bg-cream border-y border-cream-dark relative overflow-hidden"
      aria-labelledby="whyus-title"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-saffron/5 via-transparent to-forest/5 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 id="whyus-title" className="font-playfair text-3xl sm:text-4xl font-bold text-mahogany">
            Why Choose nine2Eleven?
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.55, ease: 'easeOut' }}
            >
              <div className="text-4xl mb-3" aria-hidden="true">{stat.icon}</div>
              <div className="font-playfair text-5xl font-bold text-saffron mb-1">{stat.number}</div>
              <div className="font-playfair text-lg font-bold text-mahogany mb-2">{stat.label}</div>
              <p className="font-nunito text-warmgray text-sm leading-relaxed max-w-56 mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
