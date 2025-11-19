import Image from 'next/image'
import Link from 'next/link'
import { getRoomImages } from '@/utils/getImages'
import BookingLink from '@/components/BookingLink'

export const metadata = {
  title: 'Twin Room Garden View - Place Lund Hotel | Two Bed Garden View Room Lund',
  description: 'Twin room with garden view at Place Lund Hotel in Lund, Sweden. Two 90-100cm beds, second floor, peaceful garden views, breakfast and dinner included.',
}

export default function TwinRoomGardenPage() {
  const { heroImage, galleryImages } = getRoomImages('rooms/twin-garden')

  return (
    <main className="min-h-screen">
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src={heroImage}
          alt="Twin room with garden view at Place Lund Hotel"
          fill
          quality={100}
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4 text-shadow-outline">
            Twin Room Garden View
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-8">
            Peaceful twin room with beautiful garden views, featuring two separate beds on the second floor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingLink className="bg-[#004225] text-[#E3DAC9] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors">
              Book Now
            </BookingLink>
            <Link href="/hotel" className="bg-[#66023C] text-white border-2 border-[#66023C] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#004225] mb-6">Room Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our twin room with garden view offers a tranquil retreat on the second floor. With two separate Hilding Anders beds and views overlooking our peaceful garden, this room provides the perfect balance of comfort and serenity for your stay in Lund.
              </p>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Room Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700"><strong>Location:</strong> Second floor, garden view</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700"><strong>Beds:</strong> 2x Hilding Anders 90-100cm</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700"><strong>Flooring:</strong> Parquet</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700"><strong>View:</strong> Peaceful garden</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700"><strong>Pets:</strong> Allowed (select rooms)</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700"><strong>Bedding:</strong> Allergy-friendly (down-free)</span></li>
                </ul>
              </div>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Room Amenities</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {['Desk & Work Area', 'Free WiFi', 'Private Shower', 'TV', 'Water Kettle', 'Refrigerator', 'Safety Box', 'Free Toiletries', 'Breakfast Included', 'Dinner Included'].map((amenity) => (
                    <li key={amenity} className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700">{amenity}</span></li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#42001D] mb-6">
                <h3 className="text-xl font-bold text-[#42001D] mb-3">Perfect For:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Colleagues seeking quiet space</li>
                  <li>• Friends traveling together</li>
                  <li>• Nature and garden lovers</li>
                  <li>• Relaxation-focused stays</li>
                  <li>• Light sleepers</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image src={galleryImages[0] || heroImage} alt="Twin garden view room" fill quality={100} loading="lazy" className="object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.slice(1, 9).map((image, index) => (
                  <div key={index} className="relative h-64 overflow-hidden rounded-lg">
                    <Image src={image} alt={`Twin garden room ${index + 2}`} fill quality={100} loading="lazy" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Room?</h2>
          <p className="text-lg mb-8 text-white/90">Experience peaceful garden views at Place Lund Hotel.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingLink className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors">Book Now</BookingLink>
            <Link href="/hotel" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors">View All Rooms</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
