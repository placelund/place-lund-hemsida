import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy & GDPR - Place Lund Hotel',
  description: 'Learn about how Place Lund Hotel collects, uses, and protects your personal data in accordance with GDPR regulations.',
}

export default function GDPRPage() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4 text-shadow-outline">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-800">
            Your privacy and data protection matter to us
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-gray-700 mb-8">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#004225] mb-4">Our Commitment to Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Place Lund Hotel is committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, store, and protect your information in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
            </p>
          </div>

          {/* Data Controller */}
          <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-8">
            <h3 className="text-xl font-bold text-[#004225] mb-3">Data Controller</h3>
            <p className="text-gray-700">
              <strong>Place Lund Hotel</strong><br />
              Margaretavägen 7<br />
              222 40 Lund, Sweden<br />
              Email: info@placelund.se<br />
              Phone: 046 - 33 36 00
            </p>
          </div>

          {/* What Data We Collect */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#004225] mb-4">What Data We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect the following types of personal data:</p>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-[#004225] mb-2">Booking Information</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Name and contact details (email, phone)</li>
                  <li>Booking dates and preferences</li>
                  <li>Payment information (processed securely through our booking system)</li>
                  <li>Special requests or requirements</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#004225] mb-2">Contact Form Data</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Email address</li>
                  <li>Message content</li>
                  <li>Subject of inquiry</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#004225] mb-2">Website Usage</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Data */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#004225] mb-4">How We Use Your Data</h2>
            <p className="text-gray-700 mb-4">We use your personal data for the following purposes:</p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#004225] font-bold text-xl">•</span>
                <span className="text-gray-700"><strong>Process Bookings:</strong> To manage your reservations and provide accommodation services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#004225] font-bold text-xl">•</span>
                <span className="text-gray-700"><strong>Respond to Inquiries:</strong> To answer questions submitted through our contact form</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#004225] font-bold text-xl">•</span>
                <span className="text-gray-700"><strong>Improve Services:</strong> To enhance our website and customer experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#004225] font-bold text-xl">•</span>
                <span className="text-gray-700"><strong>Communication:</strong> To send booking confirmations and important updates (with your consent for marketing)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#004225] font-bold text-xl">•</span>
                <span className="text-gray-700"><strong>Legal Compliance:</strong> To comply with legal obligations (e.g., tax records)</span>
              </li>
            </ul>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#004225] mb-4">Your Rights Under GDPR</h2>
            <p className="text-gray-700 mb-4">You have the following rights regarding your personal data:</p>

            <div className="bg-[#FFFAF2] p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-bold text-[#004225] mb-2">Right to Access</h4>
                <p className="text-gray-700 text-sm">You can request a copy of the personal data we hold about you.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#004225] mb-2">Right to Correction</h4>
                <p className="text-gray-700 text-sm">You can ask us to correct inaccurate or incomplete data.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#004225] mb-2">Right to Deletion ("Right to be Forgotten")</h4>
                <p className="text-gray-700 text-sm">You can request deletion of your personal data, subject to legal obligations.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#004225] mb-2">Right to Data Portability</h4>
                <p className="text-gray-700 text-sm">You can receive your data in a structured, commonly used format.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#004225] mb-2">Right to Withdraw Consent</h4>
                <p className="text-gray-700 text-sm">You can withdraw consent for marketing communications at any time.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#004225] mb-2">Right to Object</h4>
                <p className="text-gray-700 text-sm">You can object to processing of your data for marketing purposes.</p>
              </div>
            </div>
          </div>

          {/* Data Storage */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#004225] mb-4">Data Storage & Security</h2>

            <div className="space-y-4 text-gray-700">
              <p><strong>How Long We Keep Your Data:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Booking information: 7 years (for tax and accounting purposes)</li>
                <li>Contact form inquiries: 2 years</li>
                <li>Marketing data: Until you withdraw consent</li>
                <li>Website analytics: 26 months</li>
              </ul>

              <p className="mt-4"><strong>Security Measures:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure servers and databases</li>
                <li>Access controls and authentication</li>
                <li>Regular security audits</li>
                <li>Staff training on data protection</li>
              </ul>
            </div>
          </div>

          {/* Third Parties */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#004225] mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">We may share your data with the following third-party services:</p>

            <ul className="space-y-2 text-gray-700">
              <li><strong>BookVisit:</strong> Our booking system provider</li>
              <li><strong>Google Maps:</strong> For location services on our website</li>
              <li><strong>Email service provider:</strong> For processing contact form submissions</li>
            </ul>

            <p className="text-gray-700 mt-4 text-sm italic">
              All third-party processors are GDPR-compliant and have appropriate data protection measures in place.
            </p>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#004225] mb-4">Cookies</h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies to improve your experience. Cookies are small text files stored on your device.
            </p>

            <p className="text-gray-700 mb-2"><strong>Types of cookies we use:</strong></p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-4">
              <li>Essential cookies (required for website functionality)</li>
              <li>Analytics cookies (to understand how you use our site)</li>
            </ul>

            <p className="text-gray-700 text-sm">
              You can disable cookies through your browser settings, but this may affect website functionality.
            </p>
          </div>

          {/* Contact for Data Requests */}
          <div className="bg-[#004225] text-white p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Data Protection Requests</h2>
            <p className="mb-4">
              To exercise any of your rights or if you have questions about how we handle your data, please contact us:
            </p>

            <div className="space-y-2">
              <p><strong>Email:</strong> <a href="mailto:info@placelund.se" className="underline hover:text-[#E3DAC9]">info@placelund.se</a></p>
              <p><strong>Phone:</strong> <a href="tel:+46463336 00" className="underline hover:text-[#E3DAC9]">046 - 33 36 00</a></p>
              <p><strong>Mail:</strong> Place Lund Hotel, Margaretavägen 7, 222 40 Lund, Sweden</p>
            </div>

            <p className="mt-4 text-sm text-white/80">
              We will respond to your request within 30 days.
            </p>
          </div>

          {/* Updates to Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#004225] mb-4">Updates to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your data.
            </p>
          </div>

          {/* Complaints */}
          <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225]">
            <h3 className="text-xl font-bold text-[#004225] mb-3">Right to Lodge a Complaint</h3>
            <p className="text-gray-700">
              If you believe we have not handled your data properly, you have the right to lodge a complaint with the Swedish Data Protection Authority (Datainspektionen):
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Datainspektionen</strong><br />
              Box 8114<br />
              104 20 Stockholm, Sweden<br />
              Website: <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer" className="text-[#004225] underline hover:text-[#42001D]">www.imy.se</a>
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block bg-[#004225] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
            >
              Contact Us with Questions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
