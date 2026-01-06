import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div 
      className={cn(
        'card-featured p-6 text-center group hover:-translate-y-1 transition-all duration-300',
        className
      )}
    >
      <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-golden-muted flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
