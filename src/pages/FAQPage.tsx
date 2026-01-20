import { Layout } from '@/components/layout/Layout';
import { 
  HelpCircle, 
  MapPin, 
  Search, 
  Smartphone, 
  Shield, 
  Clock,
  Users,
  Building2,
  Mail,
  ExternalLink
} from 'lucide-react';
import SEO from '@/components/SEO';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const faqCategories = [
  {
    id: 'general',
    title: 'General Questions',
    icon: HelpCircle,
    questions: [
      {
        question: 'What is UL Campus Navigator?',
        answer: 'UL Campus Navigator is the official campus navigation web application for the University of Limpopo. It helps students, staff, and visitors find buildings, facilities, and services across the Turfloop campus. The platform provides detailed information about each location, including descriptions, categories, and building details.'
      },
      {
        question: 'Who can use UL Campus Navigator?',
        answer: 'UL Campus Navigator is free and available to everyone. It is designed for current students, prospective students, university staff, visitors, and anyone who needs to navigate the University of Limpopo campus. No registration or login is required to use the platform.'
      },
      {
        question: 'Is UL Campus Navigator an official university platform?',
        answer: 'Yes, UL Campus Navigator is developed and maintained by the University of Limpopo\'s Computer Science Department in collaboration with IT Services and the Communications & Marketing team. It is an official resource endorsed by the university administration.'
      },
      {
        question: 'How often is the location information updated?',
        answer: 'Our team regularly updates location information to ensure accuracy. We review and update the database at the beginning of each academic semester and whenever significant changes occur on campus. If you notice any outdated information, please use our contact form to let us know.'
      },
      {
        question: 'Is UL Campus Navigator available in other languages?',
        answer: 'Currently, UL Campus Navigator is available in English. We are exploring the possibility of adding support for other South African languages, including Sepedi, Xitsonga, and Tshivenda, in future updates to better serve our diverse university community.'
      },
    ]
  },
  {
    id: 'navigation',
    title: 'Navigation & Search',
    icon: MapPin,
    questions: [
      {
        question: 'How do I search for a specific building or facility?',
        answer: 'You can search for locations using the search bar on the Search page. Simply type the name of the building, department, or facility you\'re looking for. You can also filter results by category (Academic, Administrative, Library, Services, Residence, Sports, or Dining) to narrow down your search.'
      },
      {
        question: 'How do I view a location on the map?',
        answer: 'After finding a location in the search results, click on the "View on Map" button on the location card. This will take you to the interactive map page where you can see the location\'s position relative to other campus buildings and landmarks.'
      },
      {
        question: 'Can I get directions to a specific building?',
        answer: 'While UL Campus Navigator shows you where buildings are located on the campus map, we currently do not provide turn-by-turn directions. We recommend using the map to identify your destination and then navigating using campus pathways and signage. Future updates may include wayfinding features.'
      },
      {
        question: 'What location categories are available?',
        answer: 'Locations are organized into seven categories: Academic (lecture halls, faculty buildings), Administrative (offices, registration), Library (main library, study areas), Services (health center, student support), Residence (student housing), Sports (gymnasium, sports fields), and Dining (cafeterias, food outlets).'
      },
      {
        question: 'How accurate is the location information?',
        answer: 'We strive to maintain accurate and up-to-date information for all campus locations. Each location entry includes the building name, category, description, and floor information where applicable. However, temporary changes like room relocations during renovations may not be immediately reflected. Always verify critical information with the relevant department.'
      },
    ]
  },
  {
    id: 'technical',
    title: 'Technical Questions',
    icon: Smartphone,
    questions: [
      {
        question: 'Does UL Campus Navigator work on mobile devices?',
        answer: 'Yes, UL Campus Navigator is fully responsive and works on all modern smartphones, tablets, and desktop computers. The interface automatically adapts to your screen size for the best possible experience. We recommend using the latest version of Chrome, Firefox, Safari, or Edge for optimal performance.'
      },
      {
        question: 'Do I need to download an app to use UL Campus Navigator?',
        answer: 'No, UL Campus Navigator is a web-based application that runs in your browser. You don\'t need to download anything from the App Store or Google Play. Simply visit our website on any device with an internet connection to start using the platform.'
      },
      {
        question: 'Does the platform work offline?',
        answer: 'Currently, UL Campus Navigator requires an internet connection to function. We understand that connectivity can be limited in some areas of campus, and we are exploring options to add offline functionality in future updates. For now, we recommend downloading the information you need while connected to WiFi.'
      },
      {
        question: 'What browsers are supported?',
        answer: 'UL Campus Navigator supports all modern web browsers including Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, and Opera. We recommend keeping your browser updated to the latest version for the best experience and security. Internet Explorer is not supported.'
      },
      {
        question: 'Why is the map not loading properly?',
        answer: 'If the map isn\'t loading, try these troubleshooting steps: 1) Check your internet connection, 2) Clear your browser cache and cookies, 3) Try a different browser, 4) Disable any ad blockers that might be interfering, 5) Refresh the page. If the problem persists, please contact us through the Contact page.'
      },
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy & Security',
    icon: Shield,
    questions: [
      {
        question: 'What data does UL Campus Navigator collect?',
        answer: 'UL Campus Navigator collects minimal data to improve the user experience. This includes anonymous usage statistics (pages visited, search queries) and technical information (browser type, device type). We use cookies to remember your preferences like cookie consent and recent searches. We do not collect personal identifying information.'
      },
      {
        question: 'Is my location data tracked?',
        answer: 'No, UL Campus Navigator does not track your physical location. The platform does not request or use GPS or location services from your device. All navigation is based on the interactive map, not your current position. Your privacy and security are our priorities.'
      },
      {
        question: 'How are cookies used on this website?',
        answer: 'We use essential cookies to remember your preferences (like cookie consent settings and recent searches) and analytical cookies to understand how visitors use the platform. This helps us improve the user experience. You can accept or decline non-essential cookies through the cookie consent banner that appears when you first visit the site.'
      },
      {
        question: 'How is my data protected?',
        answer: 'We implement industry-standard security measures to protect any data collected through the platform. This includes encrypted connections (HTTPS), secure hosting, and regular security updates. We do not sell or share your data with third parties for marketing purposes. Please refer to our Privacy Policy for detailed information.'
      },
      {
        question: 'How can I request deletion of my data?',
        answer: 'Since we collect minimal anonymous data, there is typically no personal data to delete. However, if you have contacted us through the contact form, you can request deletion of your inquiry by emailing our support team. Recent searches stored in your browser can be cleared by clearing your browser\'s local storage.'
      },
    ]
  },
  {
    id: 'campus',
    title: 'Campus Information',
    icon: Building2,
    questions: [
      {
        question: 'What are the general campus operating hours?',
        answer: 'Academic buildings are typically open from 07:00 to 22:00 on weekdays. The main library operates from 08:00 to 23:00 during term time. Administrative offices are open from 08:00 to 16:30, Monday to Friday. The Student Center operates from 07:00 to 21:00. Note that hours may vary during holidays and exam periods.'
      },
      {
        question: 'Is there WiFi available on campus?',
        answer: 'Yes, free WiFi is available in all academic buildings, the library, student center, and most common areas on campus. Students and staff can connect using their university credentials. Visitors may request temporary access from the IT Help Desk or connect to guest networks in designated areas.'
      },
      {
        question: 'Where can I find parking on campus?',
        answer: 'Parking is available in multiple areas across campus, including near the main administration building, the student center, and each faculty building. Staff parking requires a valid permit. Visitor parking is available near the main entrance. During peak hours, parking can be limited, so arriving early is recommended.'
      },
      {
        question: 'How do I contact campus security?',
        answer: 'Campus Security is available 24/7 and can be reached at +27 15 268 9111 for emergencies or general security concerns. Security personnel patrol the campus regularly, and emergency call points are located throughout the grounds. For non-urgent matters, you can visit the Security Office near the main gate.'
      },
      {
        question: 'Are there dining options on campus?',
        answer: 'Yes, the campus has several dining options including the main cafeteria, various food outlets in the Student Center, and smaller kiosks near faculty buildings. Options range from traditional South African meals to fast food and snacks. Most outlets accept cash and card payments.'
      },
    ]
  },
  {
    id: 'support',
    title: 'Getting Help',
    icon: Users,
    questions: [
      {
        question: 'How do I report incorrect information?',
        answer: 'If you find any incorrect or outdated information on UL Campus Navigator, please let us know through our Contact page. Provide the name of the location and describe what needs to be corrected. Our team will investigate and make the necessary updates as soon as possible.'
      },
      {
        question: 'Can I suggest new features or improvements?',
        answer: 'Absolutely! We welcome feedback and suggestions from our users. You can submit feature requests and ideas through our Contact page. Please be as specific as possible about the improvement you\'d like to see. While we can\'t implement every suggestion, we carefully consider all feedback for future updates.'
      },
      {
        question: 'How do I request a new location to be added?',
        answer: 'If a campus location is missing from our database, please use the Contact page to request its addition. Include the location name, category, building details, and a brief description. Our team will verify the information and add the location in our next update.'
      },
      {
        question: 'Is there a help desk I can visit in person?',
        answer: 'For technical issues with UL Campus Navigator, you can visit the IT Help Desk located in the Administration Building during regular business hours (08:00 - 16:30, Monday to Friday). For general campus navigation assistance, the Student Information Center in the Student Center can help you find your way around.'
      },
      {
        question: 'How long does it take to receive a response to my inquiry?',
        answer: 'We aim to respond to all inquiries within 2-3 business days. During busy periods (registration, exams), response times may be slightly longer. For urgent matters, please visit the IT Help Desk in person or contact the relevant department directly using the contact information on our Contact page.'
      },
    ]
  },
];

export default function FAQPage() {
  return (
    <Layout>
      <SEO 
        title="Frequently Asked Questions"
        description="Find answers to common questions about UL Campus Navigator, campus navigation, technical support, privacy, and University of Limpopo facilities and services."
        canonicalUrl="https://ulmap.netlify.app/faq"
      />
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden-muted text-primary text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Help Center
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Find answers to common questions about UL Campus Navigator, campus navigation, 
            and the University of Limpopo. Can't find what you're looking for? Contact us for help.
          </p>
        </div>

        {/* Quick Links */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((category) => {
              const Icon = category.icon;
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:bg-golden-muted hover:text-primary hover:border-primary transition-colors text-sm"
                >
                  <Icon className="w-4 h-4" />
                  {category.title}
                </a>
              );
            })}
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-12">
          {faqCategories.map((category) => {
            const Icon = category.icon;
            return (
              <section key={category.id} id={category.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-golden-muted flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">
                    {category.title}
                  </h2>
                </div>
                
                <div className="card-featured overflow-hidden">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${category.id}-${index}`}
                        className="border-b last:border-b-0"
                      >
                        <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/50">
                          <span className="font-medium text-foreground pr-4">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </section>
            );
          })}
        </div>

        {/* Still Need Help */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="card-featured p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="w-16 h-16 rounded-full bg-golden-muted flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Couldn't find the answer you were looking for? Our support team is here to help. 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button className="btn-primary">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <Link to="/info">
                <Button variant="outline" className="btn-secondary">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Campus Info
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            Last updated: January 2025
          </p>
        </div>
      </div>
    </Layout>
  );
}
