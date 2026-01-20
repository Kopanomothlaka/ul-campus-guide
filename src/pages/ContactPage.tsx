import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  Globe, 
  Send, 
  Code, 
  HelpCircle, 
  MessageSquare, 
  Lightbulb,
  CheckCircle 
} from 'lucide-react';
import SEO from '@/components/SEO';

const appInfo = {
  name: 'UL Campus Navigator',
  version: '1.0.0',
  developer: 'KayTech Code Catalyst',
  supportEmail: 'kaytechcodecatalyst@outlook.com',
  phone: '079 629 9439',
  website: 'https://kaytechcodecatalyst.co.za/',
};

const technicalContacts = [
  { label: 'General Support', email: 'kaytechcodecatalyst@outlook.com', icon: HelpCircle },
  { label: 'Technical Problems', email: 'kaytechcodecatalyst@outlook.com', icon: Code },
  { label: 'Feature Requests', email: 'kaytechcodecatalyst@outlook.com', icon: Lightbulb },
];

const universityContacts = [
  { label: 'General Enquiries', email: 'info@ul.ac.za', icon: Mail },
  { label: 'Website', value: 'www.ul.ac.za', href: 'https://www.ul.ac.za', icon: Globe },
  { label: 'Phone', value: '+27 15 268 9111', href: 'tel:+27152689111', icon: Phone },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message Sent!',
      description: 'Thank you for your feedback. We\'ll get back to you soon.',
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <SEO 
        title="Contact & Support"
        description="Get in touch with the UL Campus Navigator team. Contact us for technical support, feature requests, or general inquiries about the University of Limpopo navigation app."
        canonicalUrl="https://ulmap.netlify.app/contact"
      />
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden-muted text-primary text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4" />
            Get in Touch
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact & Support
          </h1>
          <p className="text-muted-foreground text-lg">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="card-featured p-6 md:p-8">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" />
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="search-input"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="search-input"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="search-input"
                >
                  <option value="">Select a topic...</option>
                  <option value="map-issue">Map Issue</option>
                  <option value="technical">Technical Problem</option>
                  <option value="feature">Feature Request</option>
                  <option value="feedback">General Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="search-input resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <Button
                type="submit"
                className="w-full btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* App Development */}
            <div className="card-featured p-6">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                App Development
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">App Name</span>
                  <span className="font-medium text-foreground">{appInfo.name}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Version</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-golden-muted text-primary text-sm font-medium">
                    <CheckCircle className="w-3 h-3" />
                    {appInfo.version}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Developer</span>
                  <a
                    href={appInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium text-right text-sm"
                  >
                    {appInfo.developer}
                  </a>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Email</span>
                  <a
                    href={`mailto:${appInfo.supportEmail}`}
                    className="text-primary hover:underline font-medium text-sm"
                  >
                    {appInfo.supportEmail}
                  </a>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Phone</span>
                  <a
                    href={`tel:${appInfo.phone.replace(/\s/g, '')}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {appInfo.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-muted-foreground">Website</span>
                  <a
                    href={appInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium text-sm"
                  >
                    kaytechcodecatalyst.co.za
                  </a>
                </div>
              </div>
            </div>

            {/* Technical Support */}
            <div className="card-featured p-6">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                Technical Support
              </h2>
              <div className="space-y-3">
                {technicalContacts.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <div key={contact.label} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                      <div className="w-10 h-10 rounded-lg bg-golden-muted flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-primary hover:underline font-medium"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* University Contacts */}
            <div className="card-featured p-6">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                University Contacts
              </h2>
              <div className="space-y-3">
                {universityContacts.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <div key={contact.label} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                      <div className="w-10 h-10 rounded-lg bg-golden-muted flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        {contact.email ? (
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-primary hover:underline font-medium"
                          >
                            {contact.email}
                          </a>
                        ) : (
                          <a
                            href={contact.href}
                            target={contact.href?.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-primary hover:underline font-medium"
                          >
                            {contact.value}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
