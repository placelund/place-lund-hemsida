import Image from 'next/image'
import Link from 'next/link'
import BookingLink from '@/components/BookingLink'

export const metadata = {
  title: 'Hotel Rooms in Lund - Place Lund Hotel | Book Your Stay',
  description: 'Experience comfort at Place Lund Hotel in Lund, Sweden. Modern rooms with full service, free WiFi, breakfast & dinner included. Near University & city center.',
}

export default function HotelRoomsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center pt-20">
        <Image
          src="/images/rooms/HERO 2.JPG"
          alt="Comfortable hotel rooms at Place Lund Hotel"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Hotel Rooms in Lund
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            A place to stay
          </p>
        </div>
      </section>

      {/* Small Banner Section */}
      <section className="bg-[#004225] text-white py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-white/90">
            Comfortable accommodation in a familiar atmosphere. Located in northern Lund near Sankt Hans Backar Park and the city center, with breakfast and dinner included.
          </p>
        </div>
      </section>

      {/* Single Rooms Section */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Image */}
          <div className="relative h-[500px] lg:h-auto">
            <Image
              src="/images/rooms/single-street/single-street-view-room-place-lund-hotel-hero.jpeg"
              alt="Single rooms at Place Lund Hotel"
              fill
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* Content */}
          <div className="bg-[#FFFAF2] p-8 lg:p-16 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#004225] mb-6">
              Single Rooms
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Perfect for solo travelers, our single rooms offer comfort and tranquility with 140cm beds. Choose from street or garden views, all located on the 3rd floor.
            </p>

            {/* Room Options */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#004225]/20">
                <div className="flex-1">
                  <h4 className="font-semibold text-[#004225]">Street View</h4>
                  <p className="text-sm text-gray-600">140cm bed • 3rd floor</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Link
                    href="/hotel/single-room"
                    className="text-[#42001D] hover:text-[#004225] font-semibold text-sm"
                  >
                    Details
                  </Link>
                  <BookingLink
                    href="https://direct-book.com/properties/placelund"
                    className="bg-[#004225] text-white font-semibold py-2 px-4 rounded text-sm hover:bg-[#42001D] transition-colors"
                  >
                    Book Street View
                  </BookingLink>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#004225]/20">
                <div className="flex-1">
                  <h4 className="font-semibold text-[#004225]">Garden View</h4>
                  <p className="text-sm text-gray-600">140cm bed • 3rd floor</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Link
                    href="/hotel/single-room-garden"
                    className="text-[#42001D] hover:text-[#004225] font-semibold text-sm"
                  >
                    Details
                  </Link>
                  <BookingLink
                    href="https://direct-book.com/properties/placelund"
                    className="bg-[#004225] text-white font-semibold py-2 px-4 rounded text-sm hover:bg-[#42001D] transition-colors"
                  >
                    Book Garden View
                  </BookingLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Twin Rooms Section */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Content */}
          <div className="bg-[#FFFAF2] p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-bold text-[#004225] mb-6">
              Twin Rooms
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Ideal for friends or colleagues, our twin rooms feature two separate beds (90-100cm each). Available with street or garden views on the 2nd floor.
            </p>

            {/* Room Options */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#004225]/20">
                <div className="flex-1">
                  <h4 className="font-semibold text-[#004225]">Street View</h4>
                  <p className="text-sm text-gray-600">2x 90-100cm beds • 2nd floor</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Link
                    href="/hotel/twin-room"
                    className="text-[#42001D] hover:text-[#004225] font-semibold text-sm"
                  >
                    Details
                  </Link>
                  <BookingLink
                    href="https://direct-book.com/properties/placelund"
                    className="bg-[#004225] text-white font-semibold py-2 px-4 rounded text-sm hover:bg-[#42001D] transition-colors"
                  >
                    Book Street View
                  </BookingLink>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#004225]/20">
                <div className="flex-1">
                  <h4 className="font-semibold text-[#004225]">Garden View</h4>
                  <p className="text-sm text-gray-600">2x 90-100cm beds • 2nd floor</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Link
                    href="/hotel/twin-room-garden"
                    className="text-[#42001D] hover:text-[#004225] font-semibold text-sm"
                  >
                    Details
                  </Link>
                  <BookingLink
                    href="https://direct-book.com/properties/placelund"
                    className="bg-[#004225] text-white font-semibold py-2 px-4 rounded text-sm hover:bg-[#42001D] transition-colors"
                  >
                    Book Garden View
                  </BookingLink>
                </div>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="relative h-[500px] lg:h-auto order-1 lg:order-2">
            <Image
              src="/images/rooms/twin-garden/twin-garden-view-room-place-lund-hotel-1.jpg"
              alt="Twin rooms at Place Lund Hotel"
              fill
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Double Rooms Section */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Image */}
          <div className="relative h-[500px] lg:h-auto">
            <Image
              src="/images/rooms/double-deluxe/hero.jpeg"
              alt="Double rooms at Place Lund Hotel"
              fill
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* Content */}
          <div className="bg-[#FFFAF2] p-8 lg:p-16 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#004225] mb-6">
              Double Rooms
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Perfect for couples, our double rooms range from cozy economy options to luxurious deluxe suites. Choose from various layouts and amenities to suit your needs.
            </p>

            {/* Room Options */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#004225]/20">
                <div className="flex-1">
                  <h4 className="font-semibold text-[#004225]">Economy Double</h4>
                  <p className="text-sm text-gray-600">140cm bed • Street view • 1st floor</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Link
                    href="/hotel/economy-double"
                    className="text-[#42001D] hover:text-[#004225] font-semibold text-sm"
                  >
                    Details
                  </Link>
                  <BookingLink
                    href="https://direct-book.com/properties/placelund"
                    className="bg-[#004225] text-white font-semibold py-2 px-4 rounded text-sm hover:bg-[#42001D] transition-colors"
                  >
                    Book Economy
                  </BookingLink>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#004225]/20">
                <div className="flex-1">
                  <h4 className="font-semibold text-[#004225]">Economy with Balcony</h4>
                  <p className="text-sm text-gray-600">2x 90-100cm beds • Private patio • 1st floor</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Link
                    href="/hotel/economy-double-balcony"
                    className="text-[#42001D] hover:text-[#004225] font-semibold text-sm"
                  >
                    Details
                  </Link>
                  <BookingLink
                    href="https://direct-book.com/properties/placelund"
                    className="bg-[#004225] text-white font-semibold py-2 px-4 rounded text-sm hover:bg-[#42001D] transition-colors"
                  >
                    Book with Balcony
                  </BookingLink>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#004225]/20">
                <div className="flex-1">
                  <h4 className="font-semibold text-[#004225]">Double Deluxe</h4>
                  <p className="text-sm text-gray-600">140cm bed • Separate living room • 1st-3rd floor</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Link
                    href="/hotel/double-deluxe"
                    className="text-[#42001D] hover:text-[#004225] font-semibold text-sm"
                  >
                    Details
                  </Link>
                  <BookingLink
                    href="https://direct-book.com/properties/placelund"
                    className="bg-[#004225] text-white font-semibold py-2 px-4 rounded text-sm hover:bg-[#42001D] transition-colors"
                  >
                    Book Deluxe
                  </BookingLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Banner for All Rooms Include */}
      <section className="bg-[#004225] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-0">
            All Rooms Include
          </h3>
        </div>
      </section>

      {/* Included Amenities Section */}
      <section className="bg-[#FFFAF2] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Desk & Work Area</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Free Toiletries</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Free WiFi</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Private Shower</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Water Kettle</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">TV</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Refrigerator</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Safety Box</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Breakfast Included</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Dinner Included</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Non-Smoking</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold">Allergy-Friendly Bedding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant & Breakfast Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#004225] mb-6">
                Breakfast Buffet & Restaurant
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Start your day with our complimentary breakfast buffet, featuring fresh bread, croissants, coffee, tea, and a variety of cold buffet options. Enjoy your evening with our included dinner service.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our bar is also open daily from 11 AM to 8 PM, welcoming both hotel guests and visitors for drinks, coffee, and light refreshments.
              </p>
              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">What's Included</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Breakfast buffet daily</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Dinner included with room booking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Bar service 11 AM - 8 PM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Vegetarian and vegan options available</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/restaurant"
                className="inline-block bg-[#004225] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
              >
                Learn More About Our Restaurant
              </Link>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/restaurant/restaurant-hero.jpeg"
                alt="Breakfast buffet at Place Lund Hotel"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Stay?
          </h3>
          <p className="text-lg mb-8 text-white/90">
            Experience comfort and hospitality at Place Lund Hotel. Breakfast and dinner included with every booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingLink className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors">
              Book Your Room Now
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
    </main>
  )
}
