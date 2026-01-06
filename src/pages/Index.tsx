import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { Button } from '@/components/ui/button';
import { Map, Info, MessageCircle, Navigation, Compass } from 'lucide-react';

const features = [
  {
    icon: <Map className="w-7 h-7 text-primary" />,
    title: 'Interactive Map',
    description: 'Explore the campus with our detailed interactive map. Pan, zoom, and discover all locations.',
  },
  {
    icon: <Info className="w-7 h-7 text-primary" />,
    title: 'Campus Information',
    description: 'Get essential information about university facilities, hours, and services.',
  },
  {
    icon: <MessageCircle className="w-7 h-7 text-primary" />,
    title: 'Contact & Support',
    description: 'Need help? Reach out to our support team for assistance with navigation.',
  },
];


export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-card overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden-muted text-primary text-sm font-medium mb-6">
                <Compass className="w-4 h-4" />
                Official Campus Navigation
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                UL Campus{' '}
                <span className="text-gradient">Navigator</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Find your way around University of Limpopo with ease. 
                Explore buildings, discover facilities, and navigate campus like a pro.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <Link to="/map">
                  <Button className="btn-primary text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Navigation className="w-5 h-5 mr-2" />
                    Explore Campus Map
                  </Button>
                </Link>
              </div>
            </div>

            {/* Student Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl transform rotate-6"></div>
                <img 
                  src="/Gemini_Generated_Image_ozvhjyozvhjyozvh.png" 
                  alt="Student navigating campus with map" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground text-lg">
              Navigate the University of Limpopo campus with our comprehensive set of tools and resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 golden-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Explore?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
            Start navigating the University of Limpopo campus today. Find any building in seconds.
          </p>
          <Link to="/map">
            <Button 
              size="lg" 
              className="bg-card text-primary hover:bg-card/90 text-lg px-8 py-6 shadow-xl"
            >
              <Map className="w-5 h-5 mr-2" />
              Open Campus Map
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
