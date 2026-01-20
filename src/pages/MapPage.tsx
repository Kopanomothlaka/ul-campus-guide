import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Info, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MapPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'Interactive Campus Map | UL Campus Navigator';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Explore the University of Limpopo campus with our interactive map. Find buildings, facilities, and navigate Turfloop with ease.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Compact Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="/ul-logo.png" 
                alt="University of Limpopo Logo" 
                className="w-9 h-9 object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="font-heading font-bold text-foreground leading-tight">
                  Interactive Campus Map
                </h1>
                <p className="text-xs text-muted-foreground">
                  University of Limpopo
                </p>
              </div>
              <span className="sm:hidden font-heading font-bold text-foreground">
                Campus Map
              </span>
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link to="/info">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-foreground hover:text-primary hover:bg-golden-muted"
                >
                  <Info className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Info</span>
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" size="sm" className="btn-secondary">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Map Container */}
      <div className="flex-1 relative">
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 bg-muted flex items-center justify-center z-10">
            <div className="text-center">
              <Loader2 className="w-10 h-10 text-primary animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground font-medium">Loading Campus Map...</p>
            </div>
          </div>
        )}

        {/* Mappedin Iframe */}
        <iframe
          src="https://app.mappedin.com/map/6694e6309397bb000b777585?embedded=true"
          title="University of Limpopo Interactive Campus Map"
          className="w-full border-none"
          style={{ height: 'calc(100vh - 70px)' }}
          allow="clipboard-write 'self' https://app.mappedin.com; web-share 'self' https://app.mappedin.com"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
        />

        {/* Map Tips Overlay */}
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-72 bg-card/95 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-border">
          <h3 className="font-heading font-semibold text-foreground text-sm mb-2">
            Navigation Tips
          </h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Pinch to zoom on mobile devices</li>
            <li>• Click buildings for more information</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
