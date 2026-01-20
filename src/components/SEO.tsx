import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
}

const SEO = ({
  title,
  description,
  keywords = "University of Limpopo, UL, campus map, navigation, Turfloop, South Africa",
  canonicalUrl,
  ogType = "website",
  ogImage = "/ul-logo.png"
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | UL Campus Navigator`;

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Helper function to update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      
      if (element) {
        element.setAttribute('href', href);
      } else {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        element.setAttribute('href', href);
        document.head.appendChild(element);
      }
    };

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'UL Campus Navigator', true);

    // Update Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Update canonical URL if provided
    if (canonicalUrl) {
      updateLinkTag('canonical', canonicalUrl);
      updateMetaTag('og:url', canonicalUrl, true);
    }

    // Cleanup function
    return () => {
      // Reset to default title when component unmounts
      document.title = 'UL Campus Navigator | University of Limpopo';
    };
  }, [title, description, keywords, canonicalUrl, ogType, ogImage]);

  return null;
};

export default SEO;
