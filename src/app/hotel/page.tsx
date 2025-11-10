import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Hotel Rooms in Lund - Place Lund Hotel | Book Your Stay',
  description: 'Experience comfort at Place Lund Hotel in Lund, Sweden. Modern rooms with full service, free WiFi, breakfast & dinner included. Near University & city center.',
}

export default function HotelRoomsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#FFFAF2]/30 z-10" />
        <Image
          src="/images/hero/hotel-rooms-hero.jpg"
          alt="Comfortable hotel rooms at Place Lund Hotel"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4">
            A Place to Stay
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
            Comfortable accommodation in a familiar atmosphere. Located in northern Lund near Sankt Hans Backar Park and the city center, with breakfast and dinner included.
          </p>
        </div>
      </section>

      {/* Room Cards Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Single Room */}
          <div className="group transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/images/rooms/single-street/single-street-view-room-place-lund-hotel-1.jpeg"
                alt="Single room at Place Lund Hotel with street view"
                fill
                loading="lazy"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="bg-[#f5f5f5] p-6 border-2 border-[#004225] flex flex-col">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Single Room</h3>
              <div className="mb-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                  <span>140cm bed</span>
                  <span>•</span>
                  <span>Street view</span>
                  <span>•</span>
                  <span>3rd floor</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/hotel/single-room"
                  className="flex-1 text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
                >
                  View Details
                </Link>
                <Link
                  href="https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border-2 border-[#004225] text-[#004225] py-2 px-4 rounded-md hover:bg-[#FFFAF2] transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Single Room Garden View */}
          <div className="group transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/images/rooms/single-garden/single-garden-view-room-place-lund-hotel-1.jpeg"
                alt="Single room with garden view at Place Lund Hotel"
                fill
                loading="lazy"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="bg-[#f5f5f5] p-6 border-2 border-[#004225] flex flex-col">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Single Room Garden View</h3>
              <div className="mb-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                  <span>140cm bed</span>
                  <span>•</span>
                  <span>Garden view</span>
                  <span>•</span>
                  <span>3rd floor</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/hotel/single-room-garden"
                  className="flex-1 text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
                >
                  View Details
                </Link>
                <Link
                  href="https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border-2 border-[#004225] text-[#004225] py-2 px-4 rounded-md hover:bg-[#FFFAF2] transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Twin Room */}
          <div className="group transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/images/rooms/twin-street/twin-street-view-room-place-lund-hotel-1.jpg"
                alt="Twin room at Place Lund Hotel with two beds"
                fill
                loading="lazy"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="bg-[#f5f5f5] p-6 border-2 border-[#004225] flex flex-col">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Twin Room</h3>
              <div className="mb-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                  <span>2x 90-100cm</span>
                  <span>•</span>
                  <span>Street view</span>
                  <span>•</span>
                  <span>2nd floor</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/hotel/twin-room"
                  className="flex-1 text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
                >
                  View Details
                </Link>
                <Link
                  href="https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border-2 border-[#004225] text-[#004225] py-2 px-4 rounded-md hover:bg-[#FFFAF2] transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Twin Room Garden View */}
          <div className="group transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/images/rooms/twin-garden/twin-garden-view-room-place-lund-hotel-1.jpg"
                alt="Twin room with garden view at Place Lund Hotel"
                fill
                loading="lazy"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="bg-[#f5f5f5] p-6 border-2 border-[#004225] flex flex-col">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Twin Room Garden View</h3>
              <div className="mb-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                  <span>2x 90-100cm</span>
                  <span>•</span>
                  <span>Garden view</span>
                  <span>•</span>
                  <span>2nd floor</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/hotel/twin-room-garden"
                  className="flex-1 text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
                >
                  View Details
                </Link>
                <Link
                  href="https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border-2 border-[#004225] text-[#004225] py-2 px-4 rounded-md hover:bg-[#FFFAF2] transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Economy Double Room */}
          <div className="group transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/images/rooms/economy-double/economy-double-room-place-lund-hotel-1.jpeg"
                alt="Economy double room at Place Lund Hotel"
                fill
                loading="lazy"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="bg-[#f5f5f5] p-6 border-2 border-[#004225] flex flex-col">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Economy Double Room</h3>
              <div className="mb-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                  <span>140cm bed</span>
                  <span>•</span>
                  <span>Street view</span>
                  <span>•</span>
                  <span>1st floor</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/hotel/economy-double"
                  className="flex-1 text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
                >
                  View Details
                </Link>
                <Link
                  href="https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border-2 border-[#004225] text-[#004225] py-2 px-4 rounded-md hover:bg-[#FFFAF2] transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Economy Double Room with Balcony */}
          <div className="group transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/images/rooms/economy-double-balcony/economy-double-balcony-room-place-lund-hotel-1.jpeg"
                alt="Economy double room with balcony at Place Lund Hotel"
                fill
                loading="lazy"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="bg-[#f5f5f5] p-6 border-2 border-[#004225] flex flex-col">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Economy Double with Balcony</h3>
              <div className="mb-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                  <span>2x 90-100cm</span>
                  <span>•</span>
                  <span>Private patio</span>
                  <span>•</span>
                  <span>1st floor</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/hotel/economy-double-balcony"
                  className="flex-1 text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
                >
                  View Details
                </Link>
                <Link
                  href="https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border-2 border-[#004225] text-[#004225] py-2 px-4 rounded-md hover:bg-[#FFFAF2] transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Double Deluxe */}
          <div className="group transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/images/rooms/double-deluxe/double-deluxe-room-place-lund-hotel-1.jpeg"
                alt="Double deluxe room at Place Lund Hotel with separate living room"
                fill
                loading="lazy"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="bg-[#f5f5f5] p-6 border-2 border-[#004225] flex flex-col">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Double Deluxe</h3>
              <div className="mb-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                  <span>140cm bed</span>
                  <span>•</span>
                  <span>Living room</span>
                  <span>•</span>
                  <span>1st-3rd floor</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/hotel/double-deluxe"
                  className="flex-1 text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
                >
                  View Details
                </Link>
                <Link
                  href="https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border-2 border-[#004225] text-[#004225] py-2 px-4 rounded-md hover:bg-[#FFFAF2] transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Included Amenities Section */}
      <section className="bg-[#FFFAF2] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] text-center mb-12">
            All Rooms Include
          </h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-6">
                Breakfast Buffet & Restaurant
              </h2>
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
                src="/images/Gallery/place-lund-hotel-gallery-2.jpeg"
                alt="Breakfast buffet at Place Lund Hotel"
                fill
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Experience comfort and hospitality at Place Lund Hotel. Breakfast and dinner included with every booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors"
            >
              Book Your Room Now
            </Link>
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
