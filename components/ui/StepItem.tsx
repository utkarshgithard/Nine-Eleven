import { ReactNode } from 'react';

interface StepItemProps {
  step: number;
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function StepItem({ step, icon, title, description, className = '' }: StepItemProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* Circle badge */}
      <div className="relative mb-4">
        <div className="w-16 h-16 rounded-full bg-saffron flex items-center justify-center shadow-lg shadow-saffron/30">
          <span className="text-white text-2xl">{icon}</span>
        </div>
        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-mahogany text-cream flex items-center justify-center text-xs font-playfair font-bold shadow-md">
          {step}
        </div>
      </div>

      <h3 className="font-playfair text-lg font-700 text-mahogany mb-2">{title}</h3>
      <p className="font-nunito text-warmgray text-sm leading-relaxed max-w-48">{description}</p>
    </div>
  );
}
