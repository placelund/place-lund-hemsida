import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Two Bedroom Apartment in Lund - Place Lund Hotel | 86m² Family Apartment',
  description: 'Spacious two bedroom apartment in Lund, Sweden. 86m² with two bathrooms, full kitchen, perfect for families and extended stays. Monthly rentals available.',
}

export default function OneBedroomApartmentPage() {
  // Images 1-9 for one bedroom apartments
  const apartmentImages = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <main className="min-h-screen">
      {/* Hero Section - "A Place to Live" */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#FFFAF2]/30 z-10" />
        <Image
          src="/images/apartments/apartment-lund-sweden-place-hotel-1.jpg"
          alt="One bedroom apartment at Place Lund Hotel"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4">
            A Place to Live
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-8">
            Spacious 86m² two bedroom apartment with separate living areas, perfect for families and extended stays in northern Lund.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#004225] text-[#E3DAC9] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
            >
              Contact for Availability
            </Link>
            <Link
              href="/apartments"
              className="bg-transparent text-[#004225] border-2 border-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/20 transition-colors"
            >
              All Apartments
            </Link>
          </div>
        </div>
      </section>

      {/* Apartment Details */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#004225] mb-6">Two Bedroom Apartment Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our spacious 86 m² two bedroom apartment offers generous space with two separate bedrooms, a living area, two bathrooms, and a fully equipped kitchen. Perfect for families, couples, or professionals seeking comfortable long-term accommodation in Lund. This apartment comfortably accommodates up to 4 people.
              </p>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Apartment Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Size:</strong> 86 m²</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Layout:</strong> Two bedrooms + living room</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Beds:</strong> Queen size beds + sofa bed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Capacity:</strong> Up to 4 people</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Kitchen:</strong> Fully equipped with appliances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Bathrooms:</strong> Two full bathrooms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Storage:</strong> Large wardrobe</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Kitchen & Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Full Kitchen', 'Oven & Stove', 'Refrigerator', 'Microwave', 'Coffee Maker', 'Dishware & Utensils', 'Free WiFi', 'TV', 'Desk & Workspace', 'Washing Machine', 'Dryer', 'Wardrobe', 'Hair Dryer'].map((amenity) => (
                    <div key={amenity} className="flex items-start gap-2">
                      <span className="text-[#004225] font-bold">•</span>
                      <span className="text-gray-700 text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#42001D] mb-6">
                <h3 className="text-xl font-bold text-[#42001D] mb-3">Perfect For:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Families with children</li>
                  <li>• Extended business stays (1+ months)</li>
                  <li>• University relocation</li>
                  <li>• Temporary stays for family patients</li>
                  <li>• Couples wanting extra space</li>
                  <li>• Temporary housing during renovation</li>
                </ul>
              </div>

              <div className="bg-[#004225] text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Booking Information</h3>
                <p className="mb-4">
                  Two bedroom apartments are available for monthly rentals.
                </p>
                <p className="text-sm text-white/80">
                  Note: Meals are NOT included with apartment stays. Fully equipped kitchen for self-catering.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/images/apartments/apartment-lund-sweden-place-hotel-2.jpg"
                  alt="One bedroom apartment living area"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {apartmentImages.slice(2, 9).map((num) => (
                  <div key={num} className="relative h-64 overflow-hidden rounded-lg">
                    <Image
                      src={`/images/apartments/apartment-lund-sweden-place-hotel-${num}.${num <= 5 ? 'jpg' : 'jpeg'}`}
                      alt={`One bedroom apartment view ${num}`}
                      fill
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-[#FFFAF2] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-6">
            Northern Location in Lund
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Located in northern Lund, within easy reach of Lund University, the city center, restaurants, shops, and public transportation. The train station is just minutes away, providing easy access to Copenhagen, Malmö, and southern Sweden.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-2">University</h3>
              <p className="text-gray-700">Close to Lund University and LTH</p>
            </div>
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-2">City Center</h3>
              <p className="text-gray-700">Walking distance to shops and restaurants</p>
            </div>
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-2">Transport</h3>
              <p className="text-gray-700">Easy access to trains and buses</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Place Lund Your Home?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Contact us today to check availability and discuss your requirements for extended stays in Lund, Sweden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/apartments/studio"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors"
            >
              View One Bedroom Apartment
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
