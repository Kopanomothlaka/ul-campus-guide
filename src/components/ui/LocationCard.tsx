import { Link } from 'react-router-dom';
import { MapPin, Building2, GraduationCap, BookOpen, Users, Home, Trophy, UtensilsCrossed } from 'lucide-react';
import { Location } from '@/data/locations';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categoryIcons = {
  academic: GraduationCap,
  administrative: Building2,
  library: BookOpen,
  services: Users,
  residence: Home,
  sports: Trophy,
  dining: UtensilsCrossed,
};

const categoryLabels = {
  academic: 'Academic',
  administrative: 'Admin',
  library: 'Library',
  services: 'Services',
  residence: 'Residence',
  sports: 'Sports',
  dining: 'Dining',
};

interface LocationCardProps {
  location: Location;
  className?: string;
}

export function LocationCard({ location, className }: LocationCardProps) {
  const Icon = categoryIcons[location.category];

  return (
    <article 
      className={cn(
        'card-featured p-5 flex flex-col h-full animate-fade-in',
        className
      )}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-golden-muted flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-semibold text-foreground leading-tight truncate">
            {location.name}
          </h3>
          <span className="text-xs text-primary font-medium">
            {categoryLabels[location.category]}
          </span>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground flex-1 mb-4 line-clamp-2">
        {location.description}
      </p>
      
      {(location.building || location.floor) && (
        <div className="text-xs text-muted-foreground mb-4 space-y-1">
          {location.building && (
            <div className="flex items-center gap-1">
              <Building2 className="w-3 h-3" />
              <span>{location.building}</span>
            </div>
          )}
          {location.floor && (
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 flex items-center justify-center text-[10px] font-bold">F</span>
              <span>{location.floor}</span>
            </div>
          )}
        </div>
      )}
      
      <Link to="/map" className="mt-auto">
        <Button className="w-full btn-primary text-sm" size="sm">
          <MapPin className="w-4 h-4 mr-2" />
          View on Map
        </Button>
      </Link>
    </article>
  );
}
