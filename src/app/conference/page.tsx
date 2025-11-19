import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Conference Facilities in Lund - Place Lund Hotel | Professional Meeting Spaces',
  description: 'Modern conference rooms and meeting spaces at Place Lund Hotel in Lund, Sweden. Professional facilities with catering, AV equipment, and flexible setups for your events.',
}

export default function ConferencePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/hero/conference-hero.jpg"
          alt="Professional conference facilities at Place Lund Hotel"
          fill
          quality={100}
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            A Place to Collaborate
          </h1>
        </div>
      </section>

      {/* Small Banner Section */}
      <section className="bg-[#004225] text-white py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-white/90">
            Professional meeting spaces and conference rooms equipped with modern facilities for your business events and gatherings.
          </p>
        </div>
      </section>

      {/* Conference Rooms Images Section */}
      <section className="grid grid-cols-3 h-[60vh] min-h-[400px]">
        {/* Sofia Conference Room */}
        <div className="relative">
          <Image
            src="/images/conference/Sofia/sofia-conference-room-place-lund-hotel-hero.jpg"
            alt="Sofia conference room at Place Lund Hotel"
            fill
            quality={100}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-end">
            <div className="p-6 text-white w-full">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Sofia</h3>
              <p className="text-sm opacity-90 mb-3">Medium room • 20-30 people</p>
              <div className="flex gap-2">
                <Link
                  href="/conference/sofia"
                  className="text-white hover:text-[#FFFAF2] font-semibold text-xs underline"
                >
                  Details
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#004225] text-white font-semibold py-1 px-3 rounded text-xs hover:bg-[#42001D] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Margareta Conference Room */}
        <div className="relative">
          <Image
            src="/images/conference/Margaretha/margaretha-conference-room-place-lund-hotel-hero.jpg"
            alt="Margareta conference room at Place Lund Hotel"
            fill
            quality={100}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-end">
            <div className="p-6 text-white w-full">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Margareta</h3>
              <p className="text-sm opacity-90 mb-3">Large room • 30-90 participants</p>
              <div className="flex gap-2">
                <Link
                  href="/conference/margareta"
                  className="text-white hover:text-[#FFFAF2] font-semibold text-xs underline"
                >
                  Details
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#004225] text-white font-semibold py-1 px-3 rounded text-xs hover:bg-[#42001D] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sankt Hans Conference Room */}
        <div className="relative">
          <Image
            src="/images/conference/Sankt-Hans/sankt-hans-conference-room-place-lund-hotel-hero.jpg"
            alt="Sankt Hans conference room at Place Lund Hotel"
            fill
            quality={100}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-end">
            <div className="p-6 text-white w-full">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Sankt Hans</h3>
              <p className="text-sm opacity-90 mb-3">Small room • 10-15 people</p>
              <div className="flex gap-2">
                <Link
                  href="/conference/sankt-hans"
                  className="text-white hover:text-[#FFFAF2] font-semibold text-xs underline"
                >
                  Details
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#004225] text-white font-semibold py-1 px-3 rounded text-xs hover:bg-[#42001D] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Banner for All Conference Rooms Include */}
      <section className="bg-[#004225] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-0">
            All Conference Rooms Include
          </h2>
        </div>
      </section>

      {/* Conference Facilities Section */}
      <section className="bg-[#FFFAF2] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Free WiFi</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Projector or Screen</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Whiteboard</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Flipchart</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Coffee & Tea</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Natural Daylight</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Climate Control</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Flexible Setup</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Catering Available</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">AV Support</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Free Parking</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Breakout Area with Pool Table</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Accessible</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">EV Charging Available</p>
            </div>
          </div>

          {/* Additional Parking Information Box */}
          <div className="mt-12 max-w-4xl mx-auto bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225]">
            <h3 className="text-2xl font-bold text-[#004225] mb-6 text-center">
              Convenient Parking for Conference Attendees
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-1 text-[#004225] flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-semibold text-[#004225] mb-1">Free On-Site Parking</p>
                  <p className="text-gray-700 text-sm">Complimentary parking available for all conference attendees and event guests</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-1 text-[#004225] flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <p className="font-semibold text-[#004225] mb-1">First Come, First Served</p>
                  <p className="text-gray-700 text-sm">Parking spaces allocated on arrival basis. For large events, contact us about reserved spaces</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-1 text-[#004225] flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <div>
                  <p className="font-semibold text-[#004225] mb-1">EV Charging Station</p>
                  <p className="text-gray-700 text-sm">Electric vehicle charging available on-site for environmentally conscious attendees</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-1 text-[#004225] flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
                <div>
                  <p className="font-semibold text-[#004225] mb-1">Easy Access</p>
                  <p className="text-gray-700 text-sm">Convenient location with easy access from E22 and main roads in Lund</p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                <strong>Planning a large event?</strong> Contact us in advance to discuss parking arrangements for your conference attendees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Packages Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] text-center mb-12">
            Conference Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Half Day Package */}
            <div className="bg-[#f5f5f5] p-8 border-2 border-[#004225] rounded-lg">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Half Day</h3>
              <p className="text-gray-700 mb-6">Perfect for shorter meetings and workshops</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">Conference room rental (4 hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">Coffee, tea & refreshments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">Standard AV equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">WiFi access</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-[#004225] text-white py-3 px-6 rounded-md hover:bg-[#42001D] transition-colors font-semibold"
              >
                Request Quote
              </Link>
            </div>

            {/* Full Day Package */}
            <div className="bg-[#f5f5f5] p-8 border-2 border-[#42001D] rounded-lg">
              <h3 className="text-2xl font-bold text-[#42001D] mb-4">Full Day</h3>
              <p className="text-gray-700 mb-6">Comprehensive package for full-day events</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#42001D] font-bold">•</span>
                  <span className="text-gray-700">Conference room rental (8 hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#42001D] font-bold">•</span>
                  <span className="text-gray-700">Coffee, tea & refreshments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#42001D] font-bold">•</span>
                  <span className="text-gray-700">Lunch included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#42001D] font-bold">•</span>
                  <span className="text-gray-700">Premium AV equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#42001D] font-bold">•</span>
                  <span className="text-gray-700">Dedicated support staff</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-[#42001D] text-white py-3 px-6 rounded-md hover:bg-[#004225] transition-colors font-semibold"
              >
                Request Quote
              </Link>
            </div>

            {/* Multi-Day Package */}
            <div className="bg-[#f5f5f5] p-8 border-2 border-[#004225] rounded-lg">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Multi-Day</h3>
              <p className="text-gray-700 mb-6">Extended packages for conferences and training</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">Conference room rental (multiple days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">All meals & refreshments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">Hotel accommodation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">Premium AV & technical support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">Flexible scheduling</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-[#004225] text-white py-3 px-6 rounded-md hover:bg-[#42001D] transition-colors font-semibold"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4">
              Conference Room Pricing
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Transparent pricing for all our conference rooms. All packages include standard AV equipment, WiFi, and refreshments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Sofia Pricing */}
            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-6 text-center">Sofia</h3>
              <p className="text-center text-gray-600 mb-6">Medium room • 20-30 people</p>

              <div className="space-y-4 mb-6">
                <div className="bg-[#f5f5f5] p-4 rounded-lg">
                  <p className="text-sm font-bold text-[#004225] mb-2">Half Day</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between"><span>Max 26:</span><span className="font-bold">7,520 kr</span></div>
                    <div className="flex justify-between"><span>Max 16:</span><span className="font-bold">4,960 kr</span></div>
                    <div className="flex justify-between"><span>Max 10:</span><span className="font-bold">3,040 kr</span></div>
                  </div>
                </div>

                <div className="bg-[#f5f5f5] p-4 rounded-lg">
                  <p className="text-sm font-bold text-[#004225] mb-2">Full Day</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between"><span>Max 26:</span><span className="font-bold">9,920 kr</span></div>
                    <div className="flex justify-between"><span>Max 16:</span><span className="font-bold">7,040 kr</span></div>
                    <div className="flex justify-between"><span>Max 10:</span><span className="font-bold">4,320 kr</span></div>
                  </div>
                </div>
              </div>

              <Link
                href="/conference/sofia"
                className="block w-full text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
              >
                View Details
              </Link>
            </div>

            {/* Margareta Pricing */}
            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#42001D]">
              <h3 className="text-2xl font-bold text-[#42001D] mb-6 text-center">Margareta</h3>
              <p className="text-center text-gray-600 mb-6">Large room • 30-90 participants</p>

              <div className="space-y-4 mb-6">
                <div className="bg-[#f5f5f5] p-4 rounded-lg">
                  <p className="text-sm font-bold text-[#42001D] mb-2">Half Day</p>
                  <div className="text-center">
                    <span className="text-sm">Max 90:</span>
                    <span className="text-2xl font-bold text-[#42001D] ml-2">14,400 kr</span>
                  </div>
                </div>

                <div className="bg-[#f5f5f5] p-4 rounded-lg">
                  <p className="text-sm font-bold text-[#42001D] mb-2">Full Day</p>
                  <div className="text-center">
                    <span className="text-sm">Max 90:</span>
                    <span className="text-2xl font-bold text-[#42001D] ml-2">21,600 kr</span>
                  </div>
                </div>
              </div>

              <Link
                href="/conference/margareta"
                className="block w-full text-center bg-[#42001D] text-white py-2 px-4 rounded-md hover:bg-[#004225] transition-colors"
              >
                View Details
              </Link>
            </div>

            {/* Sankt Hans Pricing */}
            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-6 text-center">Sankt Hans</h3>
              <p className="text-center text-gray-600 mb-6">Small room • 10-15 people</p>

              <div className="space-y-4 mb-6">
                <div className="bg-[#f5f5f5] p-4 rounded-lg">
                  <p className="text-sm font-bold text-[#004225] mb-2">Half Day</p>
                  <div className="text-center">
                    <span className="text-sm">Max 18:</span>
                    <span className="text-2xl font-bold text-[#004225] ml-2">3,800 kr</span>
                  </div>
                </div>

                <div className="bg-[#f5f5f5] p-4 rounded-lg">
                  <p className="text-sm font-bold text-[#004225] mb-2">Full Day</p>
                  <div className="text-center">
                    <span className="text-sm">Max 18:</span>
                    <span className="text-2xl font-bold text-[#004225] ml-2">5,120 kr</span>
                  </div>
                </div>
              </div>

              <Link
                href="/conference/sankt-hans"
                className="block w-full text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>

          {/* Food & Beverage Pricing */}
          <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#42001D]">
            <h3 className="text-2xl font-bold text-[#42001D] mb-6 text-center">Food & Beverage Add-ons</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center p-4 bg-[#f5f5f5] rounded-lg">
                <p className="font-bold text-[#004225] text-sm mb-2">Place Frukost</p>
                <p className="text-xl font-bold text-[#42001D]">63 kr</p>
              </div>
              <div className="text-center p-4 bg-[#f5f5f5] rounded-lg">
                <p className="font-bold text-[#004225] text-sm mb-2">Varm Lunch</p>
                <p className="text-xl font-bold text-[#42001D]">210 kr</p>
              </div>
              <div className="text-center p-4 bg-[#f5f5f5] rounded-lg">
                <p className="font-bold text-[#004225] text-sm mb-2">Package Offer</p>
                <p className="text-xl font-bold text-[#42001D]">600 kr</p>
              </div>
              <div className="text-center p-4 bg-[#f5f5f5] rounded-lg">
                <p className="font-bold text-[#004225] text-sm mb-2">Kaffe med Bakverk</p>
                <p className="text-xl font-bold text-[#42001D]">62 kr</p>
              </div>
              <div className="text-center p-4 bg-[#f5f5f5] rounded-lg">
                <p className="font-bold text-[#004225] text-sm mb-2">Kaffe med Småkaka</p>
                <p className="text-xl font-bold text-[#42001D]">35 kr</p>
              </div>
            </div>
            <p className="text-center text-gray-600 text-sm mt-6">
              All prices are per person. Contact us for custom catering arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Conference?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Contact us today to discuss your conference needs and get a customized quote for your event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/conference/gallery"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
