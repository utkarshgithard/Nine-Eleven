'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, MessageCircle } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const services: Record<string, string> = {
    mess: "Mess Facility",
    canteen: "Canteen Services",
    restaurant: "Restaurant Dining",
    catering: "Catering & Events",
  };

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
            Contact Us
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
                      placeholder="+91 82523 53282"
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 font-nunito text-mahogany placeholder:text-warmgray/50 input-saffron-focus"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-nunito font-700 text-mahogany">Service Interested In</label>
                    <input type="hidden" name="service" value={selectedService} required />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 font-nunito text-mahogany input-saffron-focus flex items-center justify-between text-left"
                        >
                          <span className={!selectedService ? "text-warmgray/50" : ""}>
                            {selectedService ? services[selectedService] : "Select a service"}
                          </span>
                          <ChevronDown className="h-4 w-4 text-warmgray opacity-50" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] bg-cream border-cream-dark shadow-xl rounded-xl p-1">
                        {Object.entries(services).map(([value, label]) => (
                          <DropdownMenuItem
                            key={value}
                            onSelect={() => setSelectedService(value)}
                            className="font-nunito text-mahogany cursor-pointer rounded-lg hover:bg-saffron/10 focus:bg-saffron/10 focus:text-mahogany transition-colors"
                          >
                            {label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
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
                    <a href="tel:+918252353282" className="font-nunito text-warmgray hover:text-saffron transition-colors">+91 82523 53282</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="font-nunito font-700 text-mahogany">Email Address</p>
                    <a href="mailto:servicenineeleven@gmail.com" className="font-nunito text-warmgray hover:text-saffron transition-colors">servicenineeleven@gmail.com</a>
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

            <Card className="p-8 bg-forest/5 border-forest/20 !shadow-none ring-1 ring-forest/10" hover={false}>
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-xl shadow-forest/20 relative group overflow-hidden"
                  whileHover={{ y: -5, scale: 1.05, rotate: -2 }}
                >
                  {/* Glass shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </motion.div>
                <h4 className="font-playfair text-xl font-bold text-forest">Chat with us on WhatsApp</h4>
                <p className="font-nunito text-sm text-warmgray max-w-xs">
                  For immediate assistance or quick orders, our team is available on WhatsApp.
                </p>
                <Button
                  variant="green"
                  href="https://wa.me/918252353282"
                  className="w-full sm:w-auto shadow-lg shadow-forest/20"
                  ariaLabel="Open WhatsApp chat"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message on WhatsApp
                </Button>
              </div>
            </Card>

            <div className="pt-4">
              <p className="font-nunito font-700 text-mahogany mb-4">Follow us on Social Media</p>
              <div className="flex gap-5">
                {[
                  {
                    name: 'Instagram',
                    icon: (props: any) => (
                      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    ),
                    color: 'from-[#f09433] via-[#dc2743] to-[#bc1888]',
                    shadow: 'shadow-pink-500/30'
                  },
                  {
                    name: 'Facebook',
                    icon: (props: any) => (
                      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    ),
                    color: 'from-[#1877F2] to-[#0D59B3]',
                    shadow: 'shadow-blue-600/30'
                  },
                  {
                    name: 'Twitter',
                    icon: (props: any) => (
                      <svg {...props} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                      </svg>
                    ),
                    color: 'from-[#000000] to-[#333333]',
                    shadow: 'shadow-black/30'
                  }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={`#${social.name.toLowerCase()}`}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-xl ${social.shadow} relative group overflow-hidden`}
                    whileHover={{ y: -8, scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <span className="sr-only">{social.name}</span>
                    {/* Glass shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <social.icon className="w-6 h-6 relative z-10" />
                  </motion.a>
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
