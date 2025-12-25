import Image from 'next/image'
import Link from 'next/link'
import { getRoomImages } from '@/utils/getImages'
import BookingLink from '@/components/BookingLink'

export const metadata = {
  title: 'Double Deluxe Room Lund - Place Lund Hotel | Two Room Suite with Living Room',
  description: 'Deluxe double room at Place Lund Hotel in Lund, Sweden. Two rooms with bedroom and separate living room, 160cm bed, some with balcony. Breakfast and dinner included.',
}

export default function DoubleDeluxePage() {
  const { heroImage, galleryImages } = getRoomImages('rooms/double-deluxe')

  return (
    <main className="min-h-screen">
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image src={heroImage} alt="Double deluxe room with living room" fill quality={90} sizes="100vw" className="object-cover" priority />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow-outline">Double Deluxe Room</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8">
            Spacious two-room suite with separate bedroom and living room, perfect for extended stays and extra comfort.
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
                Our Double Deluxe room offers the ultimate in space and comfort with two separate rooms - a bedroom with 160cm bed and living room with sofa bed, accommodating up to 4 people. Available on floors 1-3, with the first floor featuring a balcony with garden access. Floor 2 rooms allow pets, making this our most versatile accommodation option.
              </p>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Room Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700"><strong>Location:</strong> Floors 1, 2, or 3</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700"><strong>Layout:</strong> Two rooms (bedroom + living room)</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700"><strong>Bed:</strong> Hilding Anders 160cm</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700"><strong>Capacity:</strong> Up to 4 people (with sofa bed)</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700"><strong>Floor Options:</strong> Floors 1-3 (Floor 2 allows pets)</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700"><strong>Pets:</strong> Allowed (select rooms)</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700"><strong>Bedding:</strong> Allergy-friendly (down-free)</span></li>
                </ul>
              </div>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Room Amenities</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {['Separate Bedroom', 'Living Room', 'Sofa Bed', 'Balcony (Floor 1)', 'Desk & Work Area', 'Free WiFi', 'Private Shower', 'TV', 'Water Kettle', 'Refrigerator', 'Safety Box', 'Free Toiletries', 'Breakfast Included', 'Dinner Included'].map((amenity) => (
                    <li key={amenity} className="flex items-start gap-3"><span className="text-[#004225] font-bold text-xl">•</span><span className="text-gray-700">{amenity}</span></li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#42001D] mb-6">
                <h3 className="text-xl font-bold text-[#42001D] mb-3">Perfect For:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Families with children</li>
                  <li>• Extended business stays</li>
                  <li>• Couples wanting extra space</li>
                  <li>• Guests needing work/living separation</li>
                  <li>• Pet owners (Floor 2)</li>
                  <li>• Small groups</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              {/* Featured Image */}
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image src={galleryImages[0] || heroImage} alt="Double deluxe room" fill quality={85} sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" className="object-cover" />
              </div>
              {/* Gallery Grid - Show ALL remaining images */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.slice(1).map((image, index) => (
                  <div key={index} className="relative h-48 overflow-hidden rounded-lg">
                    <Image src={image} alt={`Deluxe room view ${index + 2}`} fill quality={85} sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" loading="lazy" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Deluxe Room?</h2>
          <p className="text-lg mb-8 text-white/90">Experience extra space and comfort at Place Lund Hotel.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingLink className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors">Book Now</BookingLink>
            <Link href="/hotel" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors">View All Rooms</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
