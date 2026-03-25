'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const services = [
  {
    icon: '🍱',
    title: 'Mess Facility',
    description:
      'Daily meal subscriptions tailored for students and working professionals. Wholesome home-cooked meals delivered consistently.',
    color: 'from-saffron/10 to-saffron/5',
  },
  {
    icon: '🏪',
    title: 'Canteen',
    description:
      'Quick, fresh counter meals designed for offices, schools, and institutions. Fast service without compromising on quality.',
    color: 'from-forest/10 to-forest/5',
  },
  {
    icon: '🍽️',
    title: 'Restaurant',
    description:
      'A curated dine-in experience with seasonal menus crafted from the finest local ingredients. Good food, great ambiance.',
    color: 'from-mahogany/10 to-mahogany/5',
  },
  {
    icon: '🎉',
    title: 'Catering & Events',
    description:
      'Large-scale catering for weddings, corporate events, and social gatherings. Let us handle the feast while you celebrate.',
    color: 'from-warmgray/10 to-warmgray/5',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-20 lg:py-28 bg-white" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-nunito text-saffron text-sm font-700 tracking-widest uppercase mb-3">
            Our Offerings
          </span>
          <h2
            id="services-title"
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-mahogany"
          >
            What We Offer
          </h2>
          <p className="font-nunito text-warmgray mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Four distinct food services, one trusted brand. Whatever your need, nine2Eleven has you covered.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              className={`relative bg-gradient-to-br ${service.color} border border-cream-dark rounded-2xl p-7 group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus-within:ring-2 focus-within:ring-saffron`}
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 20px 40px -10px rgba(232,147,10,0.2), 0 0 0 1px rgba(232,147,10,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
              }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4" aria-hidden="true">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-playfair text-xl font-bold text-mahogany mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-nunito text-warmgray text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Learn More link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 font-nunito text-sm font-700 text-saffron hover:text-saffron-dark transition-colors focus:outline-none focus:underline"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
