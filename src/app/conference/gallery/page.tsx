import Link from 'next/link'
import Image from 'next/image'
import { generateMetadata } from '@/lib/seo/metadata'
import { PAGE_METADATA } from '@/lib/seo/page-metadata'

// SEO Metadata
export const metadata = generateMetadata(PAGE_METADATA.conferenceGallery)

export default function ConferenceGalleryPage() {
  // Generate array of image numbers for the 36 gallery images
  const imageNumbers = Array.from({ length: 36 }, (_, i) => i + 1)

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4 text-shadow-outline">
            Conference Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-8">
            Explore our modern conference facilities and professional meeting spaces in Lund, Sweden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#004225] text-[#E3DAC9] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/conference"
              className="bg-[#66023C] text-white border-2 border-[#66023C] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
            >
              View Conference Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4">
              Our Conference Facilities
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Browse through our photo gallery showcasing our modern conference rooms, meeting spaces, equipment, and amenities at Place Lund Hotel.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imageNumbers.map((num) => {
              // Determine file extension based on image number
              const extension = num <= 12 ? 'jpeg' : 'jpg'

              return (
                <div key={num} className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
                  <Image
                    src={`/images/conference/Gallery/conference-gallery-place-lund-hotel-${num}.${extension}`}
                    alt={`Conference facility ${num} at Place Lund Hotel`}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Conference Rooms Section */}
      <section className="bg-[#FFFAF2] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4">
              Our Conference Rooms
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Place Lund Hotel offers three versatile conference rooms designed for all your meeting needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Margareta */}
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Margareta</h3>
              <p className="text-gray-700 mb-4">Our largest conference room for 30-50 people</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">Capacity: 30-50 people</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">Size: 75 m²</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">Premium AV equipment</span>
                </li>
              </ul>
              <Link
                href="/conference/margareta"
                className="block w-full text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
              >
                View Details
              </Link>
            </div>

            {/* Sofia */}
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Sofia</h3>
              <p className="text-gray-700 mb-4">Medium-sized room for 20-30 people</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">Capacity: 20-30 people</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">Size: 45 m²</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">Modern technology</span>
                </li>
              </ul>
              <Link
                href="/conference/sofia"
                className="block w-full text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
              >
                View Details
              </Link>
            </div>

            {/* Sankt Hans */}
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Sankt Hans</h3>
              <p className="text-gray-700 mb-4">Intimate room for 10-15 people</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">Capacity: 10-15 people</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">Size: 30 m²</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span className="text-gray-700">Park view</span>
                </li>
              </ul>
              <Link
                href="/conference/sankt-hans"
                className="block w-full text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Conference?
          </h3>
          <p className="text-lg mb-8 text-white/90">
            Contact us today to discuss your conference needs and get a customized quote for your event at Place Lund Hotel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/conference"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors"
            >
              View All Conference Rooms
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
