import Link from 'next/link'
import { getGalleryImages } from '@/utils/getImages'

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
      {/* Header Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4">
            A Place to See
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
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
                      <img
                        src={image}
                        alt={`${roomType.name} - Image ${index + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
              <a
                href="https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors"
              >
                Book Now
              </a>
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
