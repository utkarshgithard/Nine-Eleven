'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      (e.target as HTMLFormElement).reset();
      
      // Hide toast after 5 seconds
      setTimeout(() => setShowToast(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream relative overflow-hidden" ref={sectionRef}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block font-nunito text-saffron text-sm font-700 tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-mahogany"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact Us Today
          </motion.h2>
          <motion.p 
            className="font-nunito text-warmgray mt-4 max-w-2xl mx-auto text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a question about our services or want a custom quote? Fill out the form below or reach out directly via WhatsApp.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 sm:p-10 !shadow-lg border-cream-dark/50" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-nunito font-700 text-mahogany">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 font-nunito text-mahogany placeholder:text-warmgray/50 input-saffron-focus"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-nunito font-700 text-mahogany">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 font-nunito text-mahogany placeholder:text-warmgray/50 input-saffron-focus"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-nunito font-700 text-mahogany">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 font-nunito text-mahogany placeholder:text-warmgray/50 input-saffron-focus"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-nunito font-700 text-mahogany">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 font-nunito text-mahogany input-saffron-focus appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="mess">Mess Facility</option>
                      <option value="canteen">Canteen Services</option>
                      <option value="restaurant">Restaurant Dining</option>
                      <option value="catering">Catering & Events</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-nunito font-700 text-mahogany">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 font-nunito text-mahogany placeholder:text-warmgray/50 input-saffron-focus resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full py-4 text-base shadow-saffron/20"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending message...
                    </span>
                  ) : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl font-bold text-mahogany">Contact Information</h3>
              <div className="grid grid-cols-1 gap-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <p className="font-nunito font-700 text-mahogany">Phone Number</p>
                    <a href="tel:+919876543210" className="font-nunito text-warmgray hover:text-saffron transition-colors">+91 98765 43210</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="font-nunito font-700 text-mahogany">Email Address</p>
                    <a href="mailto:hello@nine2eleven.in" className="font-nunito text-warmgray hover:text-saffron transition-colors">hello@nine2eleven.in</a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center shrink-0">
                    <span className="text-xl">🕒</span>
                  </div>
                  <div>
                    <p className="font-nunito font-700 text-mahogany">Business Hours</p>
                    <p className="font-nunito text-warmgray">Open 9 AM – 11 PM, All Days</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-forest/5 border-forest/20 !shadow-none" hover={false}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center">
                  <span className="text-3xl">💬</span>
                </div>
                <h4 className="font-playfair text-xl font-bold text-forest">Chat with us on WhatsApp</h4>
                <p className="font-nunito text-sm text-warmgray max-w-xs">
                  For immediate assistance or quick orders, our team is available on WhatsApp.
                </p>
                <Button
                  variant="green"
                  href="https://wa.me/919876543210"
                  className="w-full sm:w-auto"
                  ariaLabel="Open WhatsApp chat"
                >
                  Message on WhatsApp
                </Button>
              </div>
            </Card>

            <div className="pt-4">
              <p className="font-nunito font-700 text-mahogany mb-4">Follow us on Social Media</p>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="w-10 h-10 rounded-full bg-white border border-cream-dark flex items-center justify-center hover:bg-saffron hover:text-white hover:border-saffron transition-all duration-300 shadow-sm"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current mask-icon" />
                    {/* Simplified social icon representation */}
                    <span className="text-sm font-bold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md bg-white rounded-2xl shadow-2xl border border-forest/20 p-4 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
              <span className="text-2xl">✅</span>
            </div>
            <div className="flex-1">
              <p className="font-nunito font-800 text-mahogany leading-tight">Message Sent Successfully!</p>
              <p className="font-nunito text-xs text-warmgray mt-1">Thank you for reaching out. We will get back to you shortly.</p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="p-1 hover:bg-cream-dark rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-warmgray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
