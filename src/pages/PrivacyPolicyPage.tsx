import { Layout } from '@/components/layout/Layout';
import { Shield, Eye, Database, Lock, Users, Mail } from 'lucide-react';
import SEO from '@/components/SEO';

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <SEO 
        title="Privacy Policy"
        description="Privacy Policy for UL Campus Navigator. Learn how we collect, use, and protect your information when using our University of Limpopo campus navigation service."
        canonicalUrl="https://ulmap.netlify.app/privacy-policy"
      />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden-muted text-primary text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              Legal
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to UL Campus Navigator. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our campus navigation web application. 
                We are committed to protecting your privacy and ensuring you have a positive experience 
                while using our service. Please read this policy carefully to understand our practices 
                regarding your personal data.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                Information We Collect
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-foreground">Usage Data:</strong> Information about how you interact with our application, 
                    including pages visited, time spent on pages, and navigation patterns.
                  </li>
                  <li>
                    <strong className="text-foreground">Device Information:</strong> Browser type, operating system, device type, 
                    and screen resolution for optimization purposes.
                  </li>
                  <li>
                    <strong className="text-foreground">Contact Information:</strong> If you use our contact form, we collect your 
                    name, email address, and message content.
                  </li>
                  <li>
                    <strong className="text-foreground">Local Storage Data:</strong> We may store preferences and recent searches 
                    locally on your device to improve your experience.
                  </li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide and maintain our campus navigation service</li>
                  <li>To improve and personalize your user experience</li>
                  <li>To respond to your inquiries and provide support</li>
                  <li>To analyze usage patterns and optimize our application</li>
                  <li>To ensure the security and functionality of our service</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                However, please note that no method of transmission over the Internet or electronic 
                storage is 100% secure. While we strive to use commercially acceptable means to protect 
                your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                Third-Party Services
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Our application uses the following third-party services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-foreground">Mappedin:</strong> For interactive campus mapping. 
                    Their privacy policy applies to map usage.
                  </li>
                  <li>
                    <strong className="text-foreground">Google AdSense:</strong> For displaying advertisements. 
                    Google may use cookies to serve ads based on your prior visits.
                  </li>
                </ul>
                <p className="leading-relaxed">
                  We encourage you to review the privacy policies of these third-party services.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                Your Rights
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Under the Protection of Personal Information Act (POPIA) of South Africa, you have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information we hold</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to the processing of your personal information</li>
                  <li>Lodge a complaint with the Information Regulator</li>
                </ul>
              </div>
            </section>

            {/* Contact Us */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Email:</strong>{' '}
                  <a href="mailto:kaytechcodecatalyst@outlook.com" className="text-primary hover:underline">
                    kaytechcodecatalyst@outlook.com
                  </a>
                </p>
                <p>
                  <strong className="text-foreground">Website:</strong>{' '}
                  <a 
                    href="https://kaytechcodecatalyst.co.za/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    kaytechcodecatalyst.co.za
                  </a>
                </p>
              </div>
            </section>

            {/* Changes to This Policy */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                You are advised to review this Privacy Policy periodically for any changes. 
                Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
