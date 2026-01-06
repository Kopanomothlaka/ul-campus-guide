import { useState, useMemo, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { LocationCard } from '@/components/ui/LocationCard';
import { locations, categories } from '@/data/locations';
import { Search, X, MapPin, GraduationCap, Building2, BookOpen, Users, Home, Trophy, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  all: MapPin,
  academic: GraduationCap,
  administrative: Building2,
  library: BookOpen,
  services: Users,
  residence: Home,
  sports: Trophy,
  dining: UtensilsCrossed,
};

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('ul-recent-searches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Save search to recent
  const handleSearch = (query: string) => {
    if (query.trim() && !recentSearches.includes(query.trim())) {
      const updated = [query.trim(), ...recentSearches.slice(0, 4)];
      setRecentSearches(updated);
      localStorage.setItem('ul-recent-searches', JSON.stringify(updated));
    }
  };

  // Filter locations
  const filteredLocations = useMemo(() => {
    return locations.filter((location) => {
      const matchesSearch =
        searchQuery === '' ||
        location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory =
        activeCategory === 'all' || location.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Find Locations
          </h1>
          <p className="text-muted-foreground">
            Search for buildings, offices, and facilities across campus
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={() => handleSearch(searchQuery)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
              placeholder="Search buildings, offices, facilities..."
              className="search-input pl-12 pr-12"
              aria-label="Search locations"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Recent Searches */}
        {recentSearches.length > 0 && !searchQuery && (
          <div className="max-w-xl mx-auto mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground">Recent:</span>
              {recentSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => setSearchQuery(search)}
                  className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground hover:bg-golden-muted hover:text-primary transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max justify-center">
            {categories.map((category) => {
              const Icon = categoryIcons[category.id];
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    'transition-all',
                    activeCategory === category.id
                      ? 'btn-primary'
                      : 'bg-card hover:bg-golden-muted hover:text-primary hover:border-primary'
                  )}
                >
                  <Icon className="w-4 h-4 mr-1.5" />
                  {category.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground text-center">
            {filteredLocations.length === 0
              ? 'No locations found'
              : `Showing ${filteredLocations.length} location${filteredLocations.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {/* Results Grid */}
        {filteredLocations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLocations.map((location, index) => (
              <div
                key={location.id}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <LocationCard location={location} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-golden-muted flex items-center justify-center">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
              No locations found
            </h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="btn-secondary"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
