import Image from 'next/image'
import Link from 'next/link'
import { getRoomImages } from '@/utils/getImages'
import BookingLink from '@/components/BookingLink'

export const metadata = {
  title: 'Twin Room in Lund - Place Lund Hotel | Two Bed Room Street View',
  description: 'Twin room with two beds at Place Lund Hotel in Lund, Sweden. Two 90-100cm beds, second floor street view, breakfast and dinner included. Pet-friendly options available.',
}

export default function TwinRoomPage() {
  const { heroImage, galleryImages } = getRoomImages('rooms/twin-street')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src={heroImage}
          alt="Twin room with two beds at Place Lund Hotel"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow-outline">
            Twin Room Street View
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8">
            Spacious twin room on the second floor with two separate beds, perfect for friends, colleagues, or traveling companions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingLink className="bg-[#004225] text-[#E3DAC9] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors">
              Book Now
            </BookingLink>
            <Link
              href="/hotel"
              className="bg-[#66023C] text-white border-2 border-[#66023C] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Room Details Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Room Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#004225] mb-6">Room Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our twin room with street view is located on the second floor, featuring two separate Hilding Anders beds (90-100cm each). This room is ideal for colleagues, friends, or anyone preferring separate sleeping arrangements. Select rooms allow dogs, making it pet-friendly for travelers with furry companions.
              </p>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Room Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Location:</strong> Second floor, street view</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Beds:</strong> 2x Hilding Anders 90-100cm</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Flooring:</strong> Parquet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Pets:</strong> Allowed (select rooms)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Bedding:</strong> Allergy-friendly (down-free)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Room Amenities</h3>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Desk & Work Area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Free WiFi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Private Shower</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">TV</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Water Kettle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Refrigerator</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Safety Box</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Free Toiletries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Breakfast Included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Dinner Included</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#42001D] mb-6">
                <h3 className="text-xl font-bold text-[#42001D] mb-3">Perfect For:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Business colleagues sharing</li>
                  <li>• Friends traveling together</li>
                  <li>• Families with older children</li>
                  <li>• Pet owners (select rooms)</li>
                  <li>• Conference attendees</li>
                </ul>
              </div>
            </div>

            {/* Room Gallery */}
            <div className="space-y-4">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src={galleryImages[0] || heroImage}
                  alt="Twin room Place Lund Hotel"
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              {/* Gallery Grid - Show ALL remaining images */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.slice(1).map((image, index) => (
                  <div key={index} className="relative h-48 overflow-hidden rounded-lg">
                    <Image
                      src={image}
                      alt={`Twin room view ${index + 2}`}
                      fill
                      quality={85}
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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

      {/* Bottom CTA Section */}
      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Room?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Book your twin room at Place Lund Hotel with breakfast and dinner included.
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
      </section>
    </main>
  )
}
