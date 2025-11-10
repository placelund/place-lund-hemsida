import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Apartments in Lund Sweden - Place Lund Hotel | Self-Catering Accommodation',
  description: 'Spacious apartments in central Lund, Sweden. Fully equipped kitchens, modern amenities, perfect for extended stays. Book your apartment at Place Lund Hotel.',
}

export default function ApartmentsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#FFFAF2]/30 z-10" />
        <Image
          src="/images/apartments/apartment-lund-sweden-place-hotel-1.jpg"
          alt="Modern apartments in Lund Sweden at Place Lund Hotel"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4">
            A Place to Live
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-8">
            Spacious, fully-equipped apartments in central Lund, perfect for extended stays and self-catering accommodation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#004225] text-[#E3DAC9] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/#property-selection"
              className="bg-transparent text-[#004225] border-2 border-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/20 transition-colors"
            >
              View All Options
            </Link>
          </div>
        </div>
      </section>

      {/* Apartments Overview */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4">
              Self-Catering Apartments in Lund
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our apartments offer the perfect solution for extended stays, families, or those who prefer the flexibility of self-catering accommodation. Conveniently located in Lund, Sweden, each apartment is fully equipped with modern amenities and comfortable furnishings.
            </p>
          </div>

          {/* Apartment Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/apartments/apartment-lund-sweden-place-hotel-2.jpg"
                alt="Apartment living room in Lund Sweden"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/apartments/apartment-lund-sweden-place-hotel-3.jpg"
                alt="Apartment kitchen Place Lund Hotel"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/apartments/apartment-lund-sweden-place-hotel-4.jpg"
                alt="Apartment bedroom Lund accommodation"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/apartments/apartment-lund-sweden-place-hotel-5.jpg"
                alt="Apartment bathroom Place Lund"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/apartments/apartment-lund-sweden-place-hotel-6.jpeg"
                alt="Apartment dining area Lund Sweden"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/apartments/apartment-lund-sweden-place-hotel-7.jpeg"
                alt="Apartment workspace Place Lund Hotel"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Apartment Types */}
      <section className="py-16 px-4 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4">
              Two Apartment Options Available
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose the apartment that best fits your needs. We offer a modern One Bedroom Apartment (43 m²) and a spacious Two Bedroom Apartment (86 m²).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Two Bedroom Apartment */}
            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225] hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Two Bedroom Apartment (86 m²)</h3>
              <p className="text-gray-700 mb-6">
                Spacious 86 m² apartment with separate bedrooms, living room, and fully equipped kitchen. Perfect for families and extended stays. Accommodates up to 4 people.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Separate bedroom + living room</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Full kitchen with oven</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Up to 4 persons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Ideal for families</span>
                </li>
              </ul>
              <Link
                href="/apartments/one-bedroom"
                className="block w-full text-center bg-[#004225] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#42001D] transition-colors"
              >
                View Two Bedroom Apartment
              </Link>
            </div>

            {/* One Bedroom Apartment */}
            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225] hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">One Bedroom Apartment (43 m²)</h3>
              <p className="text-gray-700 mb-6">
                Modern 43 m² apartment with one bedroom, living area, and fully equipped kitchen. Ideal for professionals, researchers, and family patients. Accommodates 2 people.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">43 m² layout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Separate bedroom + living area</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Full kitchen with appliances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Washing machine & dryer</span>
                </li>
              </ul>
              <Link
                href="/apartments/studio"
                className="block w-full text-center bg-[#004225] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#42001D] transition-colors"
              >
                View One Bedroom Apartment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Amenities */}
      <section className="bg-[#FFFAF2] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Features */}
            <div className="bg-[#f5f5f5] p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-6">Apartment Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Fully equipped kitchen with appliances</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Separate living and sleeping areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Private bathroom with shower</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Dining area and workspace</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Free high-speed WiFi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Smart TV with streaming services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Washing machine and dryer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Climate control (heating/cooling)</span>
                </li>
              </ul>
            </div>

            {/* Perfect For */}
            <div className="bg-[#f5f5f5] p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-6">Perfect For</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Extended business stays</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Family vacations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">University visits and relocations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Medical stays and treatments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Temporary housing during relocation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Monthly rentals for long-term stays</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Self-catering accommodation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Groups and corporate housing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Booking Info */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-6">
            Northern Location in Lund
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our apartments are conveniently located in Lund, with easy access to Lund University, the city center, restaurants, shops, and public transportation. The train station is just minutes away, providing easy access to Copenhagen, Malmö, and the rest of southern Sweden.
          </p>
          <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#42001D] mb-8">
            <h3 className="text-2xl font-bold text-[#42001D] mb-4">Booking Information</h3>
            <p className="text-gray-700">
              Apartments are available for monthly rentals. Flexible check-in and check-out times can be arranged for extended stays. Contact us directly for availability, pricing, and special long-term rates.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book an Apartment?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Contact us today to check availability and discuss your specific requirements for extended stays in Lund, Sweden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/hotel"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors"
            >
              View Hotel Rooms
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
