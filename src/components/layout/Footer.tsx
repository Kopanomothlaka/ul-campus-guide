import { Link } from 'react-router-dom';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/map', label: 'Interactive Map' },
  { path: '/info', label: 'Campus Info' },
  { path: '/contact', label: 'Contact Us' },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/ul-logo.png" 
                alt="University of Limpopo Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="font-heading font-bold text-foreground">
                  UL Campus Navigator
                </h3>
                <p className="text-xs text-muted-foreground">
                  University of Limpopo
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your official guide to navigating the University of Limpopo campus. 
              Find buildings, facilities, and services with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Contact University
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <a href="mailto:info@ul.ac.za" className="hover:text-primary transition-colors">
                  info@ul.ac.za
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <a href="tel:+27152689111" className="hover:text-primary transition-colors">
                  +27 15 268 9111
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <ExternalLink className="w-4 h-4 mt-0.5 text-primary" />
                <a 
                  href="https://www.ul.ac.za" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  www.ul.ac.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} University of Limpopo. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Developed by{' '}
              <span className="text-primary font-medium">
                UL Computer Science Department
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
