'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import StepItem from '@/components/ui/StepItem';

const steps = [
  {
    step: 1,
    icon: '🔍',
    title: 'Choose Your Service',
    description: 'Pick from Mess, Canteen, Restaurant, or Catering based on your needs.',
  },
  {
    step: 2,
    icon: '📋',
    title: 'Customize Your Plan',
    description: 'Select meals, schedule, quantities, and any dietary preferences.',
  },
  {
    step: 3,
    icon: '✨',
    title: 'We Handle the Rest',
    description: 'Sit back while our team prepares fresh, wholesome food just for you.',
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="how-it-works-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block font-nunito text-saffron text-sm font-700 tracking-widest uppercase mb-3">
            How It Works
          </span>
          <h2
            id="how-it-works-title"
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-mahogany"
          >
            Simple as 1, 2, 3
          </h2>
          <p className="font-nunito text-warmgray mt-4 max-w-md mx-auto text-base leading-relaxed">
            Getting started with nine2Eleven is effortless — just follow three easy steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connecting dashed line — desktop */}
          <div className="hidden md:flex absolute top-8 left-0 right-0 items-center justify-center" aria-hidden="true">
            <div className="w-full max-w-lg mx-auto px-16">
              <motion.div
                className="border-t-2 border-dashed border-saffron/40 w-full"
                initial={{ scaleX: 0, originX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.9, ease: 'easeInOut' }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.55, ease: 'easeOut' }}
              >
                <StepItem
                  step={step.step}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-saffron text-white font-nunito font-700 rounded-full shadow-lg shadow-saffron/25 hover:bg-saffron-dark transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-saffron focus:ring-offset-2"
            aria-label="Start your journey with nine2Eleven"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
