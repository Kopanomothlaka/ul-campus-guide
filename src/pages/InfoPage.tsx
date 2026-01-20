import { Layout } from '@/components/layout/Layout';
import { MapPin, Clock, AlertTriangle, Phone, Info, Building2, Users, BookOpen } from 'lucide-react';
import SEO from '@/components/SEO';

const quickFacts = [
  { icon: Building2, label: 'Buildings', value: '50+' },
  { icon: Users, label: 'Students', value: '20,000+' },
  { icon: BookOpen, label: 'Faculties', value: '4' },
  { icon: MapPin, label: 'Hectares', value: '4,000+' },
];

const campusTips = [
  'Most academic buildings are located in the central campus area',
  'Student residences are on the eastern side of campus',
  'The main library is centrally located near the administration building',
  'Sports facilities are accessible from the western entrance',
  'Free WiFi is available in all academic buildings and common areas',
  'Campus shuttle services run between major buildings during peak hours',
];

const emergencyContacts = [
  { label: 'Campus Security (24/7)', number: '+27 15 268 9111', priority: true },
  { label: 'Medical Emergencies', number: '+27 15 268 9000', priority: true },
  { label: 'Fire Emergency', number: '10111', priority: false },
  { label: 'Student Affairs', number: '+27 15 268 2189', priority: false },
];

export default function InfoPage() {
  return (
    <Layout>
      <SEO 
        title="Campus Information"
        description="Essential information about University of Limpopo campus including operating hours, emergency contacts, campus layout, and navigation tips for students and visitors."
        canonicalUrl="https://ulmap.netlify.app/info"
      />
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden-muted text-primary text-sm font-medium mb-4">
            <Info className="w-4 h-4" />
            Campus Information
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            About University of Limpopo
          </h1>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about navigating our campus
          </p>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {quickFacts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div key={fact.label} className="card-featured p-6 text-center">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-heading text-2xl font-bold text-foreground mb-1">
                  {fact.value}
                </div>
                <div className="text-sm text-muted-foreground">{fact.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* University Overview */}
          <div className="card-featured p-6 md:p-8">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              University Overview
            </h2>
            <div className="prose prose-sm text-muted-foreground space-y-4">
              <p>
                The University of Limpopo is a premier institution of higher learning in
                South Africa's Limpopo Province. Established in 2005 through the merger of
                the Medical University of South Africa (MEDUNSA) and the University of the North,
                UL continues a proud tradition of academic excellence.
              </p>
              <p>
                Our Turfloop Campus serves as the main campus, housing four faculties:
                Humanities, Management and Law Sciences, Science and Agriculture, and Health Sciences.
              </p>
              <p>
                The campus spans over 4,000 hectares of beautiful South African landscape,
                providing students with a unique learning environment that combines
                modern facilities with natural beauty.
              </p>
            </div>
          </div>

          {/* Campus Layout */}
          <div className="card-featured p-6 md:p-8">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Campus Layout
            </h2>
            <div className="prose prose-sm text-muted-foreground space-y-4">
              <p>
                The Turfloop Campus is organized into distinct zones for easy navigation:
              </p>
              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>Central Zone:</strong> Administration, Main Library, Student Center</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>North Zone:</strong> Science and Agriculture buildings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>East Zone:</strong> Student residences and recreational areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>West Zone:</strong> Sports facilities and parking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>South Zone:</strong> Law and Humanities faculties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Operating Hours & Tips */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Operating Hours */}
          <div className="card-featured p-6 md:p-8">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              General Operating Hours
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Academic Buildings</span>
                <span className="font-medium text-foreground">07:00 - 22:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Main Library</span>
                <span className="font-medium text-foreground">08:00 - 23:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Administration</span>
                <span className="font-medium text-foreground">08:00 - 16:30</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Student Center</span>
                <span className="font-medium text-foreground">07:00 - 21:00</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Health Center</span>
                <span className="font-medium text-primary">24/7</span>
              </div>
            </div>
          </div>

          {/* Navigation Tips */}
          <div className="card-featured p-6 md:p-8">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Navigation Tips
            </h2>
            <ul className="space-y-3">
              {campusTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-golden-muted text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergency Information */}
        <div className="card-featured p-6 md:p-8 border-t-destructive">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            Emergency Information
          </h2>
          <p className="text-muted-foreground mb-6">
            In case of emergency, please contact the appropriate service immediately.
            Campus security is available 24/7 to assist with any emergency situations.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {emergencyContacts.map((contact) => (
              <div
                key={contact.label}
                className={`p-4 rounded-lg border ${
                  contact.priority 
                    ? 'bg-destructive/5 border-destructive/20' 
                    : 'bg-muted border-border'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Phone className={`w-5 h-5 ${contact.priority ? 'text-destructive' : 'text-primary'}`} />
                  <div>
                    <div className="font-medium text-foreground text-sm">{contact.label}</div>
                    <a
                      href={`tel:${contact.number.replace(/\s/g, '')}`}
                      className={`text-lg font-heading font-semibold ${
                        contact.priority ? 'text-destructive' : 'text-primary'
                      } hover:underline`}
                    >
                      {contact.number}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
