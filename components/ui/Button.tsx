'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'green';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-nunito font-700 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 select-none';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary:
      'bg-saffron text-white hover:bg-saffron-dark focus:ring-saffron shadow-md hover:shadow-lg active:scale-95',
    secondary:
      'border-2 border-saffron text-saffron hover:bg-saffron hover:text-white focus:ring-saffron active:scale-95',
    ghost:
      'text-mahogany hover:text-saffron hover:bg-saffron/10 focus:ring-saffron/30',
    green:
      'bg-forest text-white hover:bg-forest-dark focus:ring-forest shadow-md hover:shadow-lg active:scale-95',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthClass} ${disabledClass} ${className}`;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
