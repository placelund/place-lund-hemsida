import Image from 'next/image'
import Link from 'next/link'
import { getRoomImages } from '@/utils/getImages'
import BookingLink from '@/components/BookingLink'

export const metadata = {
  title: 'Economy Double Room Lund - Place Lund Hotel | Affordable Room Street View',
  description: 'Economy double room at Place Lund Hotel in Lund, Sweden. First floor street view, 140cm bed, breakfast and dinner included. Best value accommodation in Lund.',
}

export default function EconomyDoublePage() {
  const { heroImage, galleryImages } = getRoomImages('rooms/economy-double')

  return (
    <main className="min-h-screen">
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image src={heroImage} alt="Economy double room at Place Lund Hotel" fill quality={100} className="object-cover" priority />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow-outline">Economy Double Room</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8">
            Great value accommodation on the first floor with street view, offering all essential amenities for a comfortable stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingLink className="bg-[#004225] text-[#E3DAC9] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors">Book Now</BookingLink>
            <Link href="/hotel" className="bg-[#66023C] text-white border-2 border-[#66023C] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors">View All Rooms</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#004225] mb-6">Room Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our economy double room provides excellent value without compromising on comfort. Located on the first floor with convenient access, this room features a premium Hilding Anders 140cm bed and includes both breakfast and dinner, making it perfect for budget-conscious travelers.
              </p>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Room Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700"><strong>Location:</strong> First floor, street view</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700"><strong>Bed:</strong> Hilding Anders 140cm</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700"><strong>Flooring:</strong> Parquet</span></li>
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
                  <li>• Budget-conscious travelers</li>
                  <li>• Short business trips</li>
                  <li>• Solo travelers or couples</li>
                  <li>• University visitors</li>
                  <li>• Guests prioritizing value</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              {/* Featured Image */}
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image src={galleryImages[0] || heroImage} alt="Economy double room" fill quality={100} loading="lazy" className="object-cover" />
              </div>
              {/* Gallery Grid - Show ALL remaining images */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.slice(1).map((image, index) => (
                  <div key={index} className="relative h-48 overflow-hidden rounded-lg">
                    <Image src={image} alt={`Economy room view ${index + 2}`} fill quality={100} loading="lazy" className="object-cover" />
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
          <p className="text-lg mb-8 text-white/90">Best value in Lund with breakfast and dinner included.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingLink className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors">Book Now</BookingLink>
            <Link href="/hotel" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors">View All Rooms</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
