import Image from 'next/image'
import Link from 'next/link'
import BookingLink from '@/components/BookingLink'

export const metadata = {
  title: 'Hotel Studios in Lund Sweden - Place Lund Hotel | Compact Studio Rooms',
  description: 'Modern hotel studios in Lund, Sweden. Compact rooms with kitchenettes, weekly cleaning, and modern amenities. Perfect for business travelers and short stays.',
}

export default function HotelStudioPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/studios/hotel-studio-place-lund-sweden-hero.jpeg"
          alt="Modern hotel studios at Place Lund Hotel in Lund Sweden"
          fill
          quality={100}
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Hotel Studios in Lund
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Compact studio-style hotel rooms combining the convenience of hotel service with modern living spaces and kitchenettes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingLink className="bg-[#004225] text-[#E3DAC9] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors">
              Book Now
            </BookingLink>
            <Link
              href="/#property-selection"
              className="bg-[#66023C] text-white border-2 border-[#66023C] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
            >
              View All Options
            </Link>
          </div>
        </div>
      </section>

      {/* Studios Overview */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4">
              Hotel Studios at Place Lund
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our hotel studios offer the perfect blend of hotel convenience and apartment functionality. Each studio features a compact kitchenette, modern amenities, and weekly cleaning service. Ideal for business travelers, university visitors, and guests seeking a comfortable home-away-from-home experience in central Lund.
            </p>
          </div>

          {/* Studio Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/studios/hotel-studio-place-lund-sweden-3.jpeg"
                alt="Hotel studio room Place Lund"
                fill
                quality={100}
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/studios/hotel-studio-place-lund-sweden-4.jpeg"
                alt="Hotel studio kitchenette Lund Sweden"
                fill
                quality={100}
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/studios/hotel-studio-place-lund-sweden-5.jpeg"
                alt="Hotel studio bathroom Place Lund Hotel"
                fill
                quality={100}
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/studios/hotel-studio-place-lund-sweden-6.jpeg"
                alt="Hotel studio work area Lund"
                fill
                quality={100}
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/studios/hotel-studio-place-lund-sweden-7.jpeg"
                alt="Hotel studio sleeping area Place Lund"
                fill
                quality={100}
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/studios/hotel-studio-place-lund-sweden-8.jpeg"
                alt="Hotel studio dining space Lund Sweden"
                fill
                quality={100}
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Amenities */}
      <section className="bg-[#FFFAF2] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Features */}
            <div className="bg-[#f5f5f5] p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-6">Studio Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Compact kitchenette with appliances</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Combined living and sleeping area</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Private bathroom with shower</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Dining and workspace</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Free wifi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Smart TV with cable channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Weekly cleaning service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Climate control (heating/cooling)</span>
                </li>
              </ul>
            </div>

            {/* Perfect For */}
            <div className="bg-[#f5f5f5] p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-6">Perfect For</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Business travelers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Short to medium stays (1-2 weeks)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Solo travelers and couples</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">University visitors and researchers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Medical visits and treatments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Professionals on temporary assignment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Guests who prefer hotel service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004225] font-bold text-xl">•</span>
                  <span className="text-gray-700">Budget-conscious travelers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Booking Info */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#004225] mb-6">
            Convenient Location in Lund
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Our hotel studios are conveniently located in Lund, with easy access to Lund University, the city center, restaurants, shops, and public transportation. The train station is just minutes away, providing easy access to Copenhagen, Malmö, and the rest of southern Sweden.
          </p>
          <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#42001D] mb-8">
            <h3 className="text-2xl font-bold text-[#42001D] mb-4">Booking Information</h3>
            <p className="text-gray-700 mb-4">
              Hotel studios are available for nightly and weekly bookings. Weekly cleaning service included. Kitchenette provided for self-catering. Bed soffa available for up to 4 people. Book online or contact us for special rates and availability.
            </p>
            <p className="text-gray-700 text-sm italic">
              Note: Meals are NOT included with studio stays. Breakfast and dinner are only included with standard hotel room bookings.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book a Hotel Studio?
          </h3>
          <p className="text-lg mb-8 text-white/90">
            Experience the perfect combination of hotel service and apartment convenience in central Lund, Sweden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingLink className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors">
              Book Now
            </BookingLink>
            <Link
              href="/hotel"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors"
            >
              View Hotel Rooms
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
