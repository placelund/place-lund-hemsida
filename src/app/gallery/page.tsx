import Link from 'next/link'
import Image from 'next/image'
import { getGalleryImages } from '@/utils/getImages'
import BookingLink from '@/components/BookingLink'

export const metadata = {
  title: 'Photo Gallery - Place Lund Hotel | Lund, Sweden',
  description: 'Browse our photo gallery showcasing Place Lund Hotel, rooms, apartments, conference facilities, and location in Lund, Sweden.',
}

export default function GalleryPage() {
  // Get all gallery images
  const galleryImages = getGalleryImages('Gallery', true)

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 px-4 bg-[#FFFAF2] pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4">
            A Place to Imagine
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
            Explore Place Lund Hotel through our photo gallery—discover our accommodations, facilities, and the beauty of Lund.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-6">
            Welcome to Place Lund
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Browse our collection of photos showcasing our hotel rooms, apartments, conference facilities, and the charming city of Lund. We invite you to imagine your stay at Place Lund Hotel.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={image}
                  alt={`Place Lund Hotel - Gallery Image ${index + 1}`}
                  fill
                  quality={100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-12 text-center">
            Explore Our Spaces
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hotel Rooms */}
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Hotel Rooms</h3>
              <p className="text-gray-700 mb-6">
                View our collection of hotel rooms from economy doubles to deluxe accommodations.
              </p>
              <Link
                href="/hotel/gallery"
                className="block bg-[#004225] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#42001D] transition-colors mb-3"
              >
                Hotel Gallery
              </Link>
              <Link
                href="/hotel"
                className="block border-2 border-[#004225] text-[#004225] font-semibold py-2 px-6 rounded-md hover:bg-[#004225] hover:text-white transition-colors text-sm"
              >
                View Rooms
              </Link>
            </div>

            {/* Apartments */}
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Apartments</h3>
              <p className="text-gray-700 mb-6">
                Browse our one bedroom and studio apartments perfect for extended stays.
              </p>
              <Link
                href="/apartments/gallery"
                className="block bg-[#004225] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#42001D] transition-colors mb-3"
              >
                Apartment Gallery
              </Link>
              <Link
                href="/apartments"
                className="block border-2 border-[#004225] text-[#004225] font-semibold py-2 px-6 rounded-md hover:bg-[#004225] hover:text-white transition-colors text-sm"
              >
                View Apartments
              </Link>
            </div>

            {/* Conference */}
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Conference Rooms</h3>
              <p className="text-gray-700 mb-6">
                Explore our three conference rooms equipped for meetings and events.
              </p>
              <Link
                href="/conference/gallery"
                className="block bg-[#004225] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#42001D] transition-colors mb-3"
              >
                Conference Gallery
              </Link>
              <Link
                href="/conference"
                className="block border-2 border-[#004225] text-[#004225] font-semibold py-2 px-6 rounded-md hover:bg-[#004225] hover:text-white transition-colors text-sm"
              >
                View Conference Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Place Lund?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            From nightly hotel stays to monthly apartment rentals, we have the perfect accommodation for your visit to Lund, Sweden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingLink className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors">
              Book Hotel Room
            </BookingLink>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#004225] mb-6">
            Visit Us in Lund
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Place Lund Hotel</strong><br />
            Margaretavägen 7<br />
            222 40 Lund, Sweden
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="tel:+46463336 00"
              className="text-[#004225] hover:text-[#42001D] font-semibold"
            >
              046 - 33 36 00
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a
              href="mailto:info@placelund.se"
              className="text-[#004225] hover:text-[#42001D] font-semibold"
            >
              info@placelund.se
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
