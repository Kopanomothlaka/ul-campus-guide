import { Layout } from '@/components/layout/Layout';
import { 
  Compass, 
  MapPin, 
  Search, 
  Building2, 
  Navigation,
  BookOpen,
  Coffee,
  Dumbbell,
  Home,
  Briefcase,
  GraduationCap,
  Clock,
  Bus,
  Car,
  Footprints,
  CheckCircle2,
  AlertCircle,
  Lightbulb
} from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const gettingStartedSteps = [
  {
    step: 1,
    title: 'Search for a Location',
    description: 'Use the search bar to find specific buildings, departments, or facilities. You can search by name or browse by category.',
    icon: Search,
  },
  {
    step: 2,
    title: 'View Location Details',
    description: 'Click on any location card to see detailed information including building name, floor, description, and category.',
    icon: Building2,
  },
  {
    step: 3,
    title: 'Open the Map',
    description: 'Click "View on Map" to see the location on the interactive campus map and understand its position relative to other buildings.',
    icon: MapPin,
  },
  {
    step: 4,
    title: 'Navigate to Your Destination',
    description: 'Use the map and campus signage to navigate to your destination. The map shows all major pathways and buildings.',
    icon: Navigation,
  },
];

const campusZones = [
  {
    name: 'Central Campus Zone',
    buildings: ['Administration Building', 'Main Library', 'Student Center', 'Great Hall'],
    description: 'The heart of campus where most administrative functions and student services are located.',
    color: 'bg-blue-100 dark:bg-blue-950',
    textColor: 'text-blue-700 dark:text-blue-300',
  },
  {
    name: 'North Academic Zone',
    buildings: ['Science Building', 'Agriculture Complex', 'Computer Labs', 'Research Center'],
    description: 'Home to the Faculty of Science and Agriculture with modern laboratory facilities.',
    color: 'bg-green-100 dark:bg-green-950',
    textColor: 'text-green-700 dark:text-green-300',
  },
  {
    name: 'South Academic Zone',
    buildings: ['Law Building', 'Humanities Block', 'Education Faculty', 'Language Center'],
    description: 'Houses the Faculty of Humanities and the Faculty of Management and Law Sciences.',
    color: 'bg-purple-100 dark:bg-purple-950',
    textColor: 'text-purple-700 dark:text-purple-300',
  },
  {
    name: 'East Residential Zone',
    buildings: ['Student Residences', 'Dining Halls', 'Recreation Areas', 'Laundry Facilities'],
    description: 'Student housing and residential services with easy access to campus facilities.',
    color: 'bg-orange-100 dark:bg-orange-950',
    textColor: 'text-orange-700 dark:text-orange-300',
  },
  {
    name: 'West Sports Zone',
    buildings: ['Sports Stadium', 'Gymnasium', 'Swimming Pool', 'Tennis Courts'],
    description: 'Comprehensive sports and recreation facilities for fitness and competitive sports.',
    color: 'bg-red-100 dark:bg-red-950',
    textColor: 'text-red-700 dark:text-red-300',
  },
];

const transportOptions = [
  {
    icon: Footprints,
    title: 'Walking',
    description: 'Most campus buildings are within 10-15 minutes walking distance from the central zone.',
    tips: ['Follow paved pathways', 'Use covered walkways during rain', 'Maps are posted at intersections'],
  },
  {
    icon: Bus,
    title: 'Campus Shuttle',
    description: 'Free shuttle service runs between major campus points during peak hours.',
    tips: ['Runs 07:00 - 18:00 weekdays', 'Stops at all major buildings', 'Frequency: every 15-20 minutes'],
  },
  {
    icon: Car,
    title: 'Personal Vehicle',
    description: 'Multiple parking areas available for staff and registered students.',
    tips: ['Permit required for staff parking', 'Visitor parking at main entrance', 'Limited during peak hours'],
  },
];

const locationCategories = [
  {
    icon: GraduationCap,
    name: 'Academic',
    description: 'Lecture halls, faculty buildings, laboratories, and academic offices.',
    examples: ['Main Lecture Hall', 'Science Building', 'Computer Labs'],
  },
  {
    icon: Briefcase,
    name: 'Administrative',
    description: 'University offices, registration, and administrative services.',
    examples: ['Admin Building', 'Registrar Office', 'Finance Department'],
  },
  {
    icon: BookOpen,
    name: 'Library',
    description: 'Main library, study areas, and research facilities.',
    examples: ['Main Library', 'Law Library', 'Study Center'],
  },
  {
    icon: Home,
    name: 'Residence',
    description: 'Student housing, dormitories, and residential facilities.',
    examples: ['Molepo Hall', 'My Res', 'Student Village'],
  },
  {
    icon: Coffee,
    name: 'Dining',
    description: 'Cafeterias, food courts, and eating establishments.',
    examples: ['Main Cafeteria', 'Student Center Food Court'],
  },
  {
    icon: Dumbbell,
    name: 'Sports',
    description: 'Sports facilities, gymnasium, and recreational areas.',
    examples: ['Sports Stadium', 'Gym', 'Swimming Pool'],
  },
];

const navigationTips = [
  {
    type: 'success',
    icon: CheckCircle2,
    tip: 'Buildings are numbered and labeled - look for signage at entrances.',
  },
  {
    type: 'success',
    icon: CheckCircle2,
    tip: 'Campus maps are posted at major intersections and building entrances.',
  },
  {
    type: 'success',
    icon: CheckCircle2,
    tip: 'The Information Desk in the Student Center can provide directions.',
  },
  {
    type: 'warning',
    icon: AlertCircle,
    tip: 'Some buildings have multiple entrances - check which is closest to your destination.',
  },
  {
    type: 'warning',
    icon: AlertCircle,
    tip: 'During renovations, some pathways may be temporarily closed.',
  },
  {
    type: 'info',
    icon: Lightbulb,
    tip: 'Save frequently visited locations to your browser bookmarks for quick access.',
  },
];

export default function GuidePage() {
  return (
    <Layout>
      <SEO 
        title="Campus Navigation Guide"
        description="Complete guide to navigating University of Limpopo campus. Learn about campus zones, location categories, transportation options, and helpful navigation tips."
        canonicalUrl="https://ulmap.netlify.app/guide"
      />
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden-muted text-primary text-sm font-medium mb-4">
            <Compass className="w-4 h-4" />
            Navigation Guide
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Campus Navigation Guide
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Your comprehensive guide to navigating the University of Limpopo campus. 
            Learn how to use UL Campus Navigator and find your way around Turfloop.
          </p>
        </div>

        {/* Getting Started */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            Getting Started with UL Campus Navigator
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gettingStartedSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="card-featured p-6 relative">
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-golden-muted flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/search">
              <Button className="btn-primary">
                <Search className="w-4 h-4 mr-2" />
                Start Searching
              </Button>
            </Link>
          </div>
        </section>

        {/* Campus Zones */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-4">
            Understanding Campus Zones
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            The Turfloop campus is organized into distinct zones, each serving specific functions. 
            Understanding these zones will help you navigate more efficiently.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusZones.map((zone) => (
              <div key={zone.name} className={`rounded-xl p-6 ${zone.color}`}>
                <h3 className={`font-heading font-semibold ${zone.textColor} mb-2`}>{zone.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{zone.description}</p>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Key Buildings:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {zone.buildings.map((building) => (
                      <span key={building} className="px-2 py-0.5 text-xs rounded-full bg-background/80 text-foreground">
                        {building}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Location Categories */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-4">
            Location Categories Explained
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Locations in UL Campus Navigator are organized into categories to help you find what you need quickly.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.name} className="card-featured p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-golden-muted flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">{category.name}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{category.description}</p>
                      <p className="text-xs text-primary">
                        Examples: {category.examples.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Getting Around */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-4">
            Getting Around Campus
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            There are several ways to get around the Turfloop campus depending on your needs and preferences.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {transportOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div key={option.title} className="card-featured p-6">
                  <div className="w-12 h-12 rounded-full bg-golden-muted flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Navigation Tips */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-4">
            Navigation Tips & Best Practices
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Make the most of your campus navigation experience with these helpful tips.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {navigationTips.map((item, index) => {
                const Icon = item.icon;
                const bgColor = item.type === 'success' 
                  ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800' 
                  : item.type === 'warning'
                  ? 'bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800'
                  : 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800';
                const iconColor = item.type === 'success' 
                  ? 'text-green-600 dark:text-green-400' 
                  : item.type === 'warning'
                  ? 'text-amber-600 dark:text-amber-400'
                  : 'text-blue-600 dark:text-blue-400';
                
                return (
                  <div key={index} className={`flex items-start gap-3 p-4 rounded-lg border ${bgColor}`}>
                    <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconColor}`} />
                    <p className="text-foreground text-sm">{item.tip}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Operating Hours Quick Reference */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            Quick Reference: Operating Hours
          </h2>
          
          <div className="max-w-2xl mx-auto card-featured p-6 md:p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Academic Buildings</span>
                </div>
                <span className="text-muted-foreground">07:00 - 22:00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Main Library</span>
                </div>
                <span className="text-muted-foreground">08:00 - 23:00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Administration</span>
                </div>
                <span className="text-muted-foreground">08:00 - 16:30</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Dining Facilities</span>
                </div>
                <span className="text-muted-foreground">07:00 - 21:00</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <div className="flex items-center gap-3">
                  <Dumbbell className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Sports Facilities</span>
                </div>
                <span className="text-muted-foreground">06:00 - 20:00</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm text-center mt-6">
              Note: Hours may vary during holidays and exam periods. Check with individual facilities for current hours.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="card-featured p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/10 max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Ready to Navigate?
            </h2>
            <p className="text-muted-foreground mb-6">
              Now that you know how UL Campus Navigator works, start exploring the campus and find any location in seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/map">
                <Button className="btn-primary">
                  <MapPin className="w-4 h-4 mr-2" />
                  Open Campus Map
                </Button>
              </Link>
              <Link to="/search">
                <Button variant="outline" className="btn-secondary">
                  <Search className="w-4 h-4 mr-2" />
                  Search Locations
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
