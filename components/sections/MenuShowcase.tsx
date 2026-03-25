'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';

type Category = 'All' | 'Breakfast' | 'Lunch' | 'Dinner' | 'Snacks';

const categories: Category[] = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks'];

const menuItems = [
  {
    id: 1,
    name: 'Masala Oats Bowl',
    description: 'Savory spiced oats with veggies and tempering',
    category: 'Breakfast',
    price: '₹80',
    veg: true,
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400&h=280&fit=crop&auto=format',
    imageAlt: 'Masala oats bowl',
  },
  {
    id: 2,
    name: 'Veg Thali',
    description: 'Dal, sabzi, rice, roti, salad & papad — complete meal',
    category: 'Lunch',
    price: '₹140',
    veg: true,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=280&fit=crop&auto=format',
    imageAlt: 'Vegetarian thali meal',
  },
  {
    id: 3,
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice with tender chicken & spices',
    category: 'Lunch',
    price: '₹180',
    veg: false,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=280&fit=crop&auto=format',
    imageAlt: 'Chicken biryani',
  },
  {
    id: 4,
    name: 'Paneer Butter Masala',
    description: 'Rich tomato-butter gravy with fresh cottage cheese',
    category: 'Dinner',
    price: '₹160',
    veg: true,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=280&fit=crop&auto=format',
    imageAlt: 'Paneer butter masala',
  },
  {
    id: 5,
    name: 'Samosa & Chutney',
    description: 'Crispy potato-filled samosas with mint chutney',
    category: 'Snacks',
    price: '₹40',
    veg: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=280&fit=crop&auto=format',
    imageAlt: 'Crispy samosas',
  },
  {
    id: 6,
    name: 'South Indian Breakfast',
    description: 'Idli, vada, dosa with sambar and chutneys',
    category: 'Breakfast',
    price: '₹95',
    veg: true,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=280&fit=crop&auto=format',
    imageAlt: 'South Indian breakfast spread',
  },
  {
    id: 7,
    name: 'Grilled Fish Dinner',
    description: 'Fresh fish marinated in herbs, grilled to perfection',
    category: 'Dinner',
    price: '₹220',
    veg: false,
    image: 'https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=400&h=280&fit=crop&auto=format',
    imageAlt: 'Grilled fish dinner',
  },
  {
    id: 8,
    name: 'Vada Pav',
    description: 'Mumbai-style spicy potato fritter in a soft bun',
    category: 'Snacks',
    price: '₹30',
    veg: true,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=280&fit=crop&auto=format',
    imageAlt: 'Vada pav snack',
  },
];

export default function MenuShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const filtered =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-cream" aria-labelledby="menu-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block font-nunito text-saffron text-sm font-700 tracking-widest uppercase mb-3">
            Sample Menu
          </span>
          <h2
            id="menu-title"
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-mahogany"
          >
            A Glimpse of Our Menu
          </h2>
          <p className="font-nunito text-warmgray mt-4 max-w-md mx-auto text-base leading-relaxed">
            Freshly made every day. Our offerings change seasonally to bring you the best.
          </p>
        </motion.div>

        {/* Category filter pills */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          role="group"
          aria-label="Filter menu by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-nunito font-600 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 ${
                activeCategory === cat
                  ? 'bg-saffron text-white shadow-md shadow-saffron/25'
                  : 'bg-white border border-cream-dark text-warmgray hover:border-saffron hover:text-saffron'
              }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-cream-dark group card-hover"
              >
                <div className="relative overflow-hidden h-44">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Veg / Non-veg badge */}
                  <div className="absolute top-2 right-2">
                    {item.veg ? (
                      <Badge variant="veg" className="text-xs backdrop-blur-sm bg-white/80">
                        <span className="w-2 h-2 rounded-full bg-forest inline-block" aria-hidden="true" />
                        Veg
                      </Badge>
                    ) : (
                      <Badge variant="nonveg" className="text-xs backdrop-blur-sm bg-white/80">
                        <span className="w-2 h-2 rounded-full bg-red-600 inline-block" aria-hidden="true" />
                        Non-Veg
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-playfair font-bold text-mahogany text-base leading-snug">
                      {item.name}
                    </h3>
                    <span className="font-nunito font-800 text-saffron text-sm shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-nunito text-warmgray text-xs leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View full menu CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-nunito font-700 text-saffron hover:text-saffron-dark text-sm transition-colors underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-saffron/50 rounded-sm"
            aria-label="Inquire about full menu"
          >
            Enquire About Our Full Menu →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
