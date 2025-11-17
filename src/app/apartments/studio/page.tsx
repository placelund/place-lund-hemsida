import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'One Bedroom Apartment in Lund - Place Lund Hotel | Monthly Rental',
  description: 'Modern one bedroom apartment in Lund, Sweden. 43m² with full kitchen, perfect for professionals, researchers, and family patients. Monthly rentals available.',
}

export default function StudioApartmentPage() {
  // Images 10-17 for studio apartments
  const studioImages = [10, 11, 12, 13, 14, 15, 16, 17]

  return (
    <main className="min-h-screen">
      {/* Hero Section - "A Place to Stay" */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/apartments/apartment-lund-sweden-place-hotel-10.jpeg"
          alt="Studio apartment at Place Lund Hotel"
          fill
          quality={100}
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4">
            A Place to Stay
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-8">
            Modern one bedroom apartment with everything you need for comfortable extended stays in northern Lund.
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

      {/* Studio Details */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#004225] mb-6">One Bedroom Apartment Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This modern 43 m² one bedroom apartment offers a comfortable and practical home for long-term stays in Lund. It is fully furnished and designed for professionals, researchers, and family patients who need temporary accommodation with all conveniences. Accommodates 2 people.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The apartment includes a spacious living area with a Smart TV, a separate bedroom, a private bathroom, and a fully equipped kitchen. A washing machine and dryer are available inside the bathroom for complete independence during longer stays.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Located next to a bus stop with direct connections to Lund city center, you can reach workplaces, universities, and shops within minutes. The surrounding area offers several fast-food options and international restaurants.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                High-speed Wi-Fi, utilities, and weekly cleaning are included in the rent. This apartment combines the comfort of a private home with the convenience of a serviced residence, making it ideal for business travelers, students or anyone seeking high-quality temporary housing in Lund.
              </p>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Studio Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Size:</strong> 43 m²</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Layout:</strong> Separate bedroom + living area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Bed:</strong> Queen size (140-160cm) + sofa bed option</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Capacity:</strong> 2 people</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Kitchen:</strong> Fully equipped kitchen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>View:</strong> Garden or city view</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Kitchen & Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Full Kitchen', 'Oven', 'Stove', 'Microwave', 'Refrigerator', 'Coffee Maker', 'Kitchen Utensils', 'Free WiFi', 'Smart TV', 'Desk', 'Wardrobe', 'Washing Machine', 'Dryer', 'Hair Dryer'].map((amenity) => (
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
                  <li>• Family patients requiring temporary accommodation</li>
                  <li>• Business travelers and professionals</li>
                  <li>• Researchers and company guests</li>
                  <li>• Monthly long-term stays</li>
                  <li>• Those seeking temporary housing</li>
                  <li>• 2 people maximum occupancy</li>
                </ul>
              </div>

              <div className="bg-[#004225] text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Booking Information</h3>
                <p className="mb-4">
                  Apartments are available for monthly rentals.
                </p>
                <p className="text-sm text-white/80 mb-2">
                  Included: High-speed Wi-Fi, utilities, and weekly cleaning.
                </p>
                <p className="text-sm text-white/80">
                  Note: Meals are NOT included with apartment stays. Fully equipped kitchen for self-catering.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/images/apartments/apartment-lund-sweden-place-hotel-11.jpeg"
                  alt="Studio apartment interior"
                  fill
                  quality={100}
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {studioImages.slice(2).map((num) => (
                  <div key={num} className="relative h-64 overflow-hidden rounded-lg">
                    <Image
                      src={`/images/apartments/apartment-lund-sweden-place-hotel-${num}.jpeg`}
                      alt={`Studio apartment view ${num}`}
                      fill
                      quality={100}
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

      {/* Comparison Section */}
      <section className="bg-[#FFFAF2] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-12 text-center">
            43 m² vs 80 m² Apartment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Studio Column */}
            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">43 m² Apartment</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Modern 43 m² layout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Separate bedroom + living area</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Full kitchen with appliances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Washing machine & dryer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Up to 4 people</span>
                </li>
              </ul>
            </div>

            {/* One Bedroom Column */}
            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">80 m² Apartment</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Spacious 80 m² layout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Separate bedroom + living room</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Full kitchen with oven</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>More space and privacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Up to 4 people - ideal for families</span>
                </li>
              </ul>
              <Link
                href="/apartments/one-bedroom"
                className="mt-6 block text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
              >
                View One Bedroom
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Lund Stay?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Contact us today to check studio apartment availability and discuss your requirements for stays in Lund, Sweden.
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
