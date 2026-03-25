'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  saffronGlow?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = '',
  hover = true,
  saffronGlow = false,
  onClick,
}: CardProps) {
  const base = 'bg-white rounded-2xl shadow-md border border-cream-dark overflow-hidden';
  const hoverClass = hover ? 'card-hover cursor-pointer' : '';
  const glowClass = saffronGlow ? 'saffron-glow-border' : '';

  return (
    <motion.div
      className={`${base} ${hoverClass} ${glowClass} ${className}`}
      onClick={onClick}
      layout
    >
      {children}
    </motion.div>
  );
}
