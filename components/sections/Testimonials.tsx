'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Hostel Student',
    initials: 'RS',
    rating: 5,
    text: "The mess facility at nine2Eleven is a lifesaver! The food is actually wholesome and feels like what my mom makes. Truly grateful for the consistency.",
  },
  {
    name: 'Anjali Gupta',
    role: 'Office Manager',
    initials: 'AG',
    rating: 5,
    text: "We hired nine2Eleven for our corporate catering, and the feedback from the team was amazing. Fresh, flavorful, and presented beautifully. Highly recommend!",
  },
  {
    name: 'Vikram Singh',
    role: 'Regular Diner',
    initials: 'VS',
    rating: 5,
    text: "The restaurant experience is top-notch. Love their seasonal menus. The paneer butter masala is easily one of the best I've ever had in the city.",
  },
  {
    name: 'Priya Iyer',
    role: 'Event Organizer',
    initials: 'PI',
    rating: 5,
    text: "Used their catering for a wedding event, and they handled everything perfectly. The staff was professional and the food was the highlight of the evening.",
  },
  {
    name: 'Suresh Kumar',
    role: 'Working Professional',
    initials: 'SK',
    rating: 5,
    text: "Being away from home, nine2Eleven's meal subscription is a blessing. It's affordable, healthy, and never gets boring. Great variety!",
  },
  {
    name: 'Meena Reddy',
    role: 'College Student',
    initials: 'MR',
    rating: 5,
    text: "The canteen at our college is managed by nine2Eleven, and it's the best thing ever. Always fresh snacks and quick service. Five stars!",
  },
];

// Doubling testimonials for the infinite scroll effect
const allTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-nunito text-saffron text-sm font-700 tracking-widest uppercase mb-3 text-center w-full">
            Testimonials
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-mahogany">
            What Our Customers Say
          </h2>
          <p className="font-nunito text-warmgray mt-4 max-w-2xl mx-auto text-base">
            Don't just take our word for it. Hear from the wonderful people who enjoy our food every day.
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="relative w-full overflow-hidden py-10">
        <div className="flex w-fit animate-marquee">
          {allTestimonials.map((testimonial, index) => (
            <div 
              key={`${testimonial.name}-${index}`}
              className="w-[300px] sm:w-[400px] px-4 flex-shrink-0"
            >
              <div className="h-full bg-cream border border-cream-dark p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-saffron/20 border-2 border-white flex items-center justify-center font-playfair font-bold text-saffron text-lg shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-mahogany leading-tight">{testimonial.name}</h4>
                    <p className="font-nunito text-xs text-warmgray">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5 shrink-0" aria-label={`${testimonial.rating} star rating`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-saffron fill-current" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="font-nunito text-sm text-mahogany/80 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays to hide edges */}
        <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
      
      {/* Footer message */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <p className="font-nunito text-warmgray text-sm">
          Join hundreds of happy customers today.
          <a href="#contact" className="ml-2 font-bold text-saffron hover:underline">Get started →</a>
        </p>
      </motion.div>
    </section>
  );
}
