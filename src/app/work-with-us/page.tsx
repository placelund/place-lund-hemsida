import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Work With Us - Place Lund Hotel | Submit Application of Interest in Lund',
  description: 'Join our team at Place Lund Hotel in Lund, Sweden. Submit your application of interest for hospitality positions including housekeeping, receptionist, and kitchen roles. Apply today.',
}

export default function WorkWithUsPage() {

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center pt-20">
        <Image
          src="/images/restaurant/restaurant-hero.jpeg"
          alt="Work with Place Lund Hotel team"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Work With Us
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8">
            We're currently accepting applications of interest. Join our team at Place Lund Hotel and be part of providing exceptional hospitality in the heart of Lund, Sweden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#application-interest"
              className="bg-[#004225] text-[#E3DAC9] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
            >
              Submit Application of Interest
            </Link>
            <Link
              href="/contact"
              className="bg-[#66023C] text-white border-2 border-[#66023C] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4">
              Why Work at Place Lund Hotel?
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We're more than just a hotel - we're a close-knit team dedicated to creating memorable experiences for our guests while fostering a positive work environment for our staff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-4">Flexible Scheduling</h3>
              <p className="text-gray-700">
                We understand work-life balance. Our flexible scheduling accommodates students, parents, and those with other commitments.
              </p>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-4">Central Location</h3>
              <p className="text-gray-700">
                Located in the heart of Lund, easily accessible by public transport and close to Lund University and the city center.
              </p>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-4">Growth Opportunities</h3>
              <p className="text-gray-700">
                Whether you're starting your hospitality career or looking to develop new skills, we support your professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application of Interest */}
      <section id="application-interest" className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4">
              Application of Interest
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              While we don't have specific openings at the moment, we're always interested in meeting talented individuals who want to be part of our hospitality family. Submit your application of interest and we'll contact you when suitable positions become available.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* General Requirements */}
            <div className="bg-white p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-6">General Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl mt-1">•</span>
                  <span className="text-gray-700"><strong>Age:</strong> Above 20 years old</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl mt-1">•</span>
                  <span className="text-gray-700"><strong>Experience:</strong> 3+ years of relevant work experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl mt-1">•</span>
                  <span className="text-gray-700"><strong>Hospitality Experience:</strong> Previous hotel/hospitality experience is highly merited</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl mt-1">•</span>
                  <span className="text-gray-700"><strong>Location:</strong> Close proximity to Lund is merited</span>
                </li>
              </ul>
            </div>

            {/* Position-Specific Requirements */}
            <div className="bg-white p-8 rounded-lg border-2 border-[#42001D]">
              <h3 className="text-2xl font-bold text-[#42001D] mb-6">Position-Specific Requirements</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#004225] mb-3">Receptionist Roles</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#42001D] font-bold text-lg">•</span>
                      <span className="text-gray-700">Fluency in both English and Swedish <strong>(mandatory)</strong></span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#004225] mb-3">Kitchen Roles</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#42001D] font-bold text-lg">•</span>
                      <span className="text-gray-700">Swedish language skills are merited but not mandatory</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#004225] mb-3">Cleaning/Housekeeping Roles</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#42001D] font-bold text-lg">•</span>
                      <span className="text-gray-700">Swedish language skills are merited but not mandatory</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f5f5f5] p-8 rounded-lg border-2 border-[#004225] text-center">
            <h3 className="text-2xl font-bold text-[#004225] mb-4">Ready to Apply?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Send your application of interest to our events team and let us know which type of role interests you most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:event@placelund.se"
                className="bg-[#004225] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
              >
                Email: event@placelund.se
              </a>
              <Link
                href="/contact"
                className="bg-[#66023C] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4">
              How to Submit Your Application of Interest
            </h3>
            <p className="text-lg text-gray-700">
              Ready to express your interest in joining our team? Here's how to submit your application of interest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-[#004225] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-[#004225] mb-3">Express Interest</h3>
              <p className="text-gray-700">
                Email us at event@placelund.se to express your interest. Tell us which type of role interests you most.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#004225] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-[#004225] mb-3">Submit Documents</h3>
              <p className="text-gray-700">
                Send your CV and a brief cover letter explaining why you'd like to work with us and which role interests you.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#004225] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-[#004225] mb-3">Future Contact</h3>
              <p className="text-gray-700">
                We'll keep your application on file and contact you when suitable positions become available for interview.
              </p>
            </div>
          </div>

          <div className="bg-[#f5f5f5] p-8 rounded-lg border-2 border-[#42001D]">
            <h3 className="text-2xl font-bold text-[#42001D] mb-4 text-center">
              Application Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-bold text-[#004225] mb-2">What to Include:</h4>
                <ul className="space-y-1">
                  <li>• Current CV/Resume</li>
                  <li>• Brief cover letter</li>
                  <li>• Availability schedule</li>
                  <li>• References (if available)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#004225] mb-2">Application Tips:</h4>
                <ul className="space-y-1">
                  <li>• Mention specific position of interest</li>
                  <li>• Highlight relevant experience</li>
                  <li>• Include language skills</li>
                  <li>• Note your availability preferences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Submit Your Application of Interest?
          </h3>
          <p className="text-lg mb-8 text-white/90">
            We'd love to hear from you! Submit your application of interest today and join our talent pool for future opportunities at Place Lund Hotel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
            <div>
              <h3 className="font-bold mb-2">Phone</h3>
              <a href="tel:+4646333600" className="text-white/90 hover:text-white transition-colors">
                046 - 33 36 00
              </a>
            </div>
            <div>
              <h3 className="font-bold mb-2">Email</h3>
              <a href="mailto:event@placelund.se" className="text-white/90 hover:text-white transition-colors">
                event@placelund.se
              </a>
            </div>
            <div>
              <h3 className="font-bold mb-2">Address</h3>
              <p className="text-white/90">
                Margaretavägen 7<br />
                222 40 Lund, Sweden
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:event@placelund.se"
              className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors"
            >
              Submit Application of Interest
            </a>
            <Link
              href="/about"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}