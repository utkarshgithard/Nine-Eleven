import { ReactNode } from 'react';

type BadgeVariant = 'saffron' | 'forest' | 'mahogany' | 'cream' | 'veg' | 'nonveg';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  saffron: 'bg-saffron/15 text-saffron-dark border border-saffron/30',
  forest: 'bg-forest/15 text-forest-dark border border-forest/30',
  mahogany: 'bg-mahogany text-cream border border-mahogany-light',
  cream: 'bg-cream border border-cream-dark text-mahogany',
  veg: 'bg-forest/10 text-forest border border-forest/40',
  nonveg: 'bg-red-50 text-red-700 border border-red-200',
};

export default function Badge({ children, variant = 'saffron', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-nunito font-600 tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
