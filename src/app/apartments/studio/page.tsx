import Image from 'next/image'
import Link from 'next/link'
import { generateMetadata } from '@/lib/seo/metadata'
import { PAGE_METADATA } from '@/lib/seo/page-metadata'

// SEO Metadata
export const metadata = generateMetadata(PAGE_METADATA.apartmentsStudio)

export default function StudioApartmentPage() {
  // Images 10-17 for studio apartments
  const studioImages = [
    { num: 12, folder: '86', ext: 'jpeg' },
    { num: 13, folder: '86', ext: 'jpeg' },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section - "A Place to Stay" */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/apartments/86/apartment-lund-sweden-place-hotel-10.jpeg"
          alt="Studio apartment at Place Lund Hotel"
          fill
          quality={100}
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4 text-shadow-outline">
            A Place to Spread Out
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-8">
            Spacious 86m² studio apartment with open-plan living and everything you need for comfortable extended stays in northern Lund.
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
              className="bg-[#66023C] text-white border-2 border-[#66023C] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
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
              <h2 className="text-3xl font-bold text-[#004225] mb-6">Studio Apartment Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This spacious 86 m² studio apartment offers generous open-plan living for comfortable long-term stays in Lund. It is fully furnished and designed for families, couples, or professionals who need spacious temporary accommodation with all conveniences. Accommodates up to 4 people.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The apartment features a large open-plan layout with combined living, dining, and sleeping areas, plus a fully equipped kitchen and private bathroom. A washing machine and dryer are available for complete independence during longer stays.
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
                    <span className="text-gray-700"><strong>Size:</strong> 86 m²</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Layout:</strong> Open-plan living + sleeping area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Bed:</strong> Queen size bed + sofa bed for extra guests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Capacity:</strong> Up to 4 people</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Kitchen:</strong> Full kitchen with dining area</span>
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
                  <li>• Families needing spacious accommodation</li>
                  <li>• Extended business stays and relocations</li>
                  <li>• Groups of professionals or researchers</li>
                  <li>• Monthly long-term stays (1+ months)</li>
                  <li>• Couples wanting extra living space</li>
                  <li>• Up to 4 people maximum occupancy</li>
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
                  src="/images/apartments/86/apartment-lund-sweden-place-hotel-11.jpeg"
                  alt="Studio apartment interior"
                  fill
                  quality={100}
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {studioImages.map((image) => (
                  <div key={image.num} className="relative h-64 overflow-hidden rounded-lg">
                    <Image
                      src={`/images/apartments/${image.folder}/apartment-lund-sweden-place-hotel-${image.num}.${image.ext}`}
                      alt={`Studio apartment view ${image.num}`}
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
            43 m² vs 86 m² Apartment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* One Bedroom Column */}
            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">43 m² One Bedroom</h3>
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
                  <span>Private and cozy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Up to 2 people - ideal for couples</span>
                </li>
              </ul>
              <Link
                href="/apartments/one-bedroom"
                className="mt-6 block text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
              >
                View One Bedroom
              </Link>
            </div>

            {/* Studio Column */}
            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">86 m² Studio</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Spacious 86 m² layout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Open-plan living + sleeping area</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Full kitchen with dining area</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Maximum space and flexibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Up to 4 people - ideal for families</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Lund Stay?
          </h3>
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
