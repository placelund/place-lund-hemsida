import Image from 'next/image'
import Link from 'next/link'
import { getRoomImages } from '@/utils/getImages'
import BookingLink from '@/components/BookingLink'

export const metadata = {
  title: 'Single Room Garden View - Place Lund Hotel | Quiet Garden View Room in Lund',
  description: 'Peaceful single room with garden view at Place Lund Hotel in Lund, Sweden. 140cm bed, third floor, breakfast and dinner included. Book your quiet retreat today.',
}

export default function SingleRoomGardenPage() {
  const { heroImage, galleryImages } = getRoomImages('rooms/single-garden')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src={heroImage}
          alt="Single room with garden view at Place Lund Hotel"
          fill
          quality={100}
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4">
            Single Room Garden View
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-8">
            Peaceful single room on the third floor with serene garden views, ideal for a quiet and relaxing stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingLink className="bg-[#004225] text-[#E3DAC9] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors">
              Book Now
            </BookingLink>
            <Link
              href="/hotel"
              className="bg-transparent text-[#004225] border-2 border-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/20 transition-colors"
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
                Our single room with garden view is located on the third floor, offering peaceful views of our garden area. This room provides a quiet retreat with a premium Hilding Anders 140cm bed, parquet flooring, and all modern amenities for a comfortable stay in Lund.
              </p>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Room Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Location:</strong> Third floor, garden view</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Bed:</strong> Hilding Anders 140cm</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Flooring:</strong> Parquet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>View:</strong> Peaceful garden</span>
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
                  <li>• Guests seeking quiet accommodations</li>
                  <li>• Nature and garden enthusiasts</li>
                  <li>• Business travelers needing rest</li>
                  <li>• Light sleepers</li>
                  <li>• Relaxation-focused stays</li>
                </ul>
              </div>
            </div>

            {/* Room Gallery */}
            <div className="space-y-4">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src={galleryImages[0] || heroImage}
                  alt="Single garden view room Place Lund Hotel"
                  fill
                  quality={100}
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.slice(1, 5).map((image, index) => (
                  <div key={index} className="relative h-64 overflow-hidden rounded-lg">
                    <Image
                      src={image}
                      alt={`Single garden view ${index + 2}`}
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

      {/* Bottom CTA Section */}
      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Room?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Experience peace and comfort with garden views at Place Lund Hotel.
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
