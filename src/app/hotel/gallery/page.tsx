import Link from 'next/link'
import Image from 'next/image'
import { getGalleryImages } from '@/utils/getImages'
import BookingLink from '@/components/BookingLink'

export const metadata = {
  title: 'Hotel Gallery - Place Lund Hotel | Room Photos',
  description: 'Browse photos of our hotel rooms and studios at Place Lund Hotel in Lund, Sweden. View images of our accommodations, amenities, and facilities.',
}

export default function HotelGalleryPage() {
  // Get images from all room types
  const roomTypes = [
    { name: 'Economy Double', folder: 'economy-double' },
    { name: 'Economy Double with Balcony', folder: 'economy-double-balcony' },
    { name: 'Twin Garden View', folder: 'twin-garden' },
    { name: 'Twin Street View', folder: 'twin-street' },
    { name: 'Single Garden View', folder: 'single-garden' },
    { name: 'Single Street View', folder: 'single-street' },
    { name: 'Double Deluxe', folder: 'double-deluxe' },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/conference/Gallery/conference-gallery-place-lund-hotel-17.jpg"
          alt="Hotel Gallery - Place Lund Hotel"
          fill
          quality={100}
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            A Place to See
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Explore our hotel rooms and studios through our gallery of accommodations in central Lund.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-12 text-center">
            Our Hotel Rooms & Studios
          </h2>

          {/* Room Type Sections */}
          {roomTypes.map((roomType) => {
            const images = getGalleryImages(`rooms/${roomType.folder}`, true)

            if (images.length === 0) return null

            return (
              <div key={roomType.folder} className="mb-16">
                <h3 className="text-2xl font-bold text-[#004225] mb-6 border-b-2 border-[#004225] pb-2">
                  {roomType.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
                    >
                      <Image
                        src={image}
                        alt={`${roomType.name} - Image ${index + 1}`}
                        fill
                        quality={100}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}

          {/* CTA Section */}
          <div className="mt-16 bg-[#004225] text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Book Your Stay?</h3>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              Experience comfort and convenience in Lund. Browse our rooms or contact us to discuss your accommodation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingLink className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors">
                Book Now
              </BookingLink>
              <Link
                href="/hotel"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors"
              >
                View All Rooms
              </Link>
            </div>
          </div>

          {/* Other Options */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <h4 className="text-xl font-bold text-[#004225] mb-3">Apartments</h4>
              <p className="text-gray-700 mb-4 text-sm">
                Need more space? Check out our one bedroom and studio apartments.
              </p>
              <Link
                href="/apartments"
                className="inline-block bg-[#004225] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#42001D] transition-colors text-sm"
              >
                View Apartments
              </Link>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <h4 className="text-xl font-bold text-[#004225] mb-3">Conference Rooms</h4>
              <p className="text-gray-700 mb-4 text-sm">
                Explore our conference facilities for meetings and events.
              </p>
              <Link
                href="/conference/gallery"
                className="inline-block bg-[#004225] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#42001D] transition-colors text-sm"
              >
                Conference Gallery
              </Link>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <h4 className="text-xl font-bold text-[#004225] mb-3">Questions?</h4>
              <p className="text-gray-700 mb-4 text-sm">
                Have questions about our hotel? Visit our FAQ page.
              </p>
              <Link
                href="/hotel/faq"
                className="inline-block bg-[#004225] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#42001D] transition-colors text-sm"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
