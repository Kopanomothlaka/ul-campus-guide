import { Layout } from '@/components/layout/Layout';
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Mail } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden-muted text-primary text-sm font-medium mb-4">
              <FileText className="w-4 h-4" />
              Legal
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Agreement */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-primary" />
                Agreement to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the UL Campus Navigator web application, you agree to be bound by 
                these Terms of Service. If you disagree with any part of these terms, you may not access 
                the service. This application is intended for use by students, staff, and visitors of the 
                University of Limpopo to navigate the campus facilities.
              </p>
            </section>

            {/* Use of Service */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Use of Service
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  You agree to use UL Campus Navigator only for lawful purposes and in accordance with 
                  these Terms. You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the service in any way that violates applicable laws or regulations</li>
                  <li>Attempt to interfere with or disrupt the service or servers</li>
                  <li>Use automated systems to access the service without permission</li>
                  <li>Impersonate or attempt to impersonate the University or its representatives</li>
                  <li>Use the service for any commercial purposes without authorization</li>
                  <li>Collect or harvest any information from the service without consent</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The UL Campus Navigator application, including its original content, features, and 
                functionality, is owned by KayTech Code Catalyst and the University of Limpopo. 
                The application is protected by copyright, trademark, and other intellectual property 
                laws. You may not reproduce, distribute, modify, or create derivative works of any 
                content without prior written consent.
              </p>
            </section>

            {/* Map Data */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                Map Data and Accuracy
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  The interactive map is provided by Mappedin and displays campus locations as accurately 
                  as possible. However:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Map data may not always reflect real-time changes to campus layout</li>
                  <li>Building names, room numbers, and locations may be subject to change</li>
                  <li>We are not responsible for any inconvenience caused by inaccurate map data</li>
                  <li>Users should verify critical location information with university staff</li>
                </ul>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                Disclaimer of Warranties
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  The service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of 
                  any kind, either express or implied, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Implied warranties of merchantability and fitness for a particular purpose</li>
                  <li>Warranty that the service will be uninterrupted, timely, secure, or error-free</li>
                  <li>Warranty that results obtained from the service will be accurate or reliable</li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-primary" />
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall KayTech Code Catalyst, the University of Limpopo, or their directors, 
                employees, partners, agents, suppliers, or affiliates be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses, resulting from your 
                access to or use of or inability to access or use the service.
              </p>
            </section>

            {/* Third-Party Links */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                Third-Party Links
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our service may contain links to third-party websites or services that are not owned 
                or controlled by us. We have no control over and assume no responsibility for the 
                content, privacy policies, or practices of any third-party websites or services. 
                You acknowledge and agree that we shall not be responsible or liable for any damage 
                or loss caused by your use of any such content, goods, or services.
              </p>
            </section>

            {/* Governing Law */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of the 
                Republic of South Africa, without regard to its conflict of law provisions. 
                Any disputes arising from these Terms or your use of the service shall be subject 
                to the exclusive jurisdiction of the courts of South Africa.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. 
                If a revision is material, we will provide at least 30 days notice prior to any new terms 
                taking effect. What constitutes a material change will be determined at our sole discretion. 
                By continuing to access or use our service after any revisions become effective, you agree 
                to be bound by the revised terms.
              </p>
            </section>

            {/* Contact */}
            <section className="card-featured p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
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
          </div>
        </div>
      </div>
    </Layout>
  );
}
