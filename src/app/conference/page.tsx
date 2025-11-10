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
        <div className="absolute inset-0 bg-[#FFFAF2]/30 z-10" />
        <Image
          src="/images/hero/conference-hero.jpg"
          alt="Professional conference facilities at Place Lund Hotel"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4">
            A Place to Meet
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
            Professional meeting spaces and conference rooms equipped with modern facilities for your business events and gatherings.
          </p>
        </div>
      </section>

      {/* Conference Rooms Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sofia Conference Room */}
          <div className="group transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/images/conference/Sofia/sofia-conference-room-place-lund-hotel-1.jpeg"
                alt="Sofia conference room at Place Lund Hotel"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="bg-[#f5f5f5] p-6 border-2 border-[#004225] flex flex-col">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Sofia</h3>
              <div className="mb-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                  <span>Medium room</span>
                  <span>•</span>
                  <span>20-30 people</span>
                  <span>•</span>
                  <span>AV equipment</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/conference/sofia"
                  className="flex-1 text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
                >
                  View Details
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 text-center border-2 border-[#004225] text-[#004225] py-2 px-4 rounded-md hover:bg-[#FFFAF2] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Margareta Conference Room */}
          <div className="group transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/images/conference/Margaretha/margareta-conference-room-place-lund-hotel-1.jpeg"
                alt="Margareta conference room at Place Lund Hotel"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="bg-[#f5f5f5] p-6 border-2 border-[#004225] flex flex-col">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Margareta</h3>
              <div className="mb-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                  <span>Large room</span>
                  <span>•</span>
                  <span>30-90 participants</span>
                  <span>•</span>
                  <span>Projector</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/conference/margareta"
                  className="flex-1 text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
                >
                  View Details
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 text-center border-2 border-[#004225] text-[#004225] py-2 px-4 rounded-md hover:bg-[#FFFAF2] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Sankt Hans Conference Room */}
          <div className="group transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/images/conference/Sankt-Hans/sankt-hans-conference-room-place-lund-hotel-1.jpeg"
                alt="Sankt Hans conference room at Place Lund Hotel"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="bg-[#f5f5f5] p-6 border-2 border-[#004225] flex flex-col">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Sankt Hans</h3>
              <div className="mb-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                  <span>Small room</span>
                  <span>•</span>
                  <span>10-15 people</span>
                  <span>•</span>
                  <span>Intimate setting</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/conference/sankt-hans"
                  className="flex-1 text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
                >
                  View Details
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 text-center border-2 border-[#004225] text-[#004225] py-2 px-4 rounded-md hover:bg-[#FFFAF2] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Facilities Section */}
      <section className="bg-[#FFFAF2] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] text-center mb-12">
            All Conference Rooms Include
          </h2>
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
