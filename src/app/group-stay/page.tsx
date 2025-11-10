import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Group Accommodation in Lund - Place Lund Hotel | Group Bookings & Corporate Stays',
  description: 'Group accommodation and team lodging at Place Lund Hotel in Lund, Sweden. Group bookings, bulk reservations, corporate stays, and team accommodation for sports teams, school groups, conferences, and corporate events.',
  keywords: 'group bookings, team accommodation, bulk reservations, corporate stays, group lodging, group accommodation Lund, team lodging Sweden',
}

export default function GroupStayPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#FFFAF2]/30 z-10" />
        <Image
          src="/images/hero/hotel-rooms-hero.jpg"
          alt="Group accommodation at Place Lund Hotel"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4">
            A Place to Gather
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
            Perfect accommodation and facilities for sports teams, school groups, conferences, and corporate events in Lund.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-6">
            Welcome Groups to Place Lund
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            Place Lund Hotel specializes in group accommodation and events, offering flexible solutions for sports teams, school groups, conferences, and corporate gatherings. With a range of rooms, apartments, and conference facilities, we can accommodate groups of all sizes.
          </p>
        </div>
      </section>

      {/* Group Types */}
      <section className="bg-[#FFFAF2] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-12 text-center">
            Perfect For
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <div className="text-4xl mb-4">⚽</div>
              <h3 className="text-xl font-bold text-[#004225] mb-3">Sports Teams</h3>
              <p className="text-gray-700 text-sm">
                Competitive rates for teams visiting Lund for tournaments and training camps
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-[#004225] mb-3">School Groups</h3>
              <p className="text-gray-700 text-sm">
                Safe and comfortable accommodation for student groups visiting Lund University
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-[#004225] mb-3">Corporate Events</h3>
              <p className="text-gray-700 text-sm">
                Conference rooms and accommodation packages for business meetings and training
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-[#004225] mb-3">Conferences</h3>
              <p className="text-gray-700 text-sm">
                Complete packages with meeting spaces, accommodation, and catering options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer for Groups */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-12 text-center">
            Group Accommodation Options
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hotel Rooms */}
            <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Hotel Rooms</h3>
              <p className="text-gray-700 mb-4">
                Multiple room types including economy doubles, twins, and deluxe rooms. Meals included.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Daily breakfast & dinner</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Daily housekeeping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Free WiFi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Flexible configurations</span>
                </li>
              </ul>
              <Link
                href="/hotel"
                className="block text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
              >
                View Hotel Rooms
              </Link>
            </div>

            {/* Conference Facilities */}
            <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Conference Rooms</h3>
              <p className="text-gray-700 mb-4">
                Three versatile meeting spaces with modern equipment and flexible layouts.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Projectors & screens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Whiteboards & flip charts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Free WiFi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Catering available</span>
                </li>
              </ul>
              <Link
                href="/conference"
                className="block text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
              >
                View Conference Rooms
              </Link>
            </div>

            {/* Apartments */}
            <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-4">Apartments</h3>
              <p className="text-gray-700 mb-4">
                Self-catering options for longer stays or groups preferring independence.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Full kitchens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Living spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Weekly/monthly rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Cost-effective</span>
                </li>
              </ul>
              <Link
                href="/apartments"
                className="block text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
              >
                View Apartments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#FFFAF2] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-12 text-center">
            Why Choose Place Lund for Your Group?
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h4 className="text-lg font-bold text-[#004225] mb-3">Northern Location in Lund</h4>
              <p className="text-gray-700 text-sm">
                Near Lund University, city center, and transport links. Easy access to sports facilities and attractions.
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h4 className="text-lg font-bold text-[#004225] mb-3">Flexible Packages</h4>
              <p className="text-gray-700 text-sm">
                Customizable accommodation and conference packages tailored to your group's needs and budget.
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h4 className="text-lg font-bold text-[#004225] mb-3">Group Discounts</h4>
              <p className="text-gray-700 text-sm">
                Competitive rates for group bookings with special pricing for extended stays and large groups.
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h4 className="text-lg font-bold text-[#004225] mb-3">On-Site Dining</h4>
              <p className="text-gray-700 text-sm">
                Restaurant and bar on-site for convenient group meals and refreshments without leaving the hotel.
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h4 className="text-lg font-bold text-[#004225] mb-3">Dedicated Support</h4>
              <p className="text-gray-700 text-sm">
                Experienced staff to assist with planning, logistics, and ensuring your group stay runs smoothly.
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h4 className="text-lg font-bold text-[#004225] mb-3">Modern Facilities</h4>
              <p className="text-gray-700 text-sm">
                Free WiFi throughout, conference equipment, comfortable rooms, and all amenities your group needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your Group Stay?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Contact us today to discuss your group's needs and receive a customized quote for accommodation and conference facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors"
            >
              Request Group Quote
            </Link>
            <a
              href="tel:+46463336 00"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors"
            >
              Call: 046 - 33 36 00
            </a>
          </div>

          <div className="mt-8 text-white/80 text-sm">
            <p>Email us at <a href="mailto:info@placelund.se" className="underline hover:text-white">info@placelund.se</a> with your group details</p>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#004225] mb-6 text-center">
            What Information Do We Need?
          </h2>
          <p className="text-gray-700 mb-6 text-center">
            To provide you with an accurate quote, please include the following details in your inquiry:
          </p>

          <div className="bg-[#f5f5f5] p-8 rounded-lg border-2 border-[#004225]">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#004225] font-bold">•</span>
                <span>Number of people in your group</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#004225] font-bold">•</span>
                <span>Dates of stay (check-in and check-out)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#004225] font-bold">•</span>
                <span>Type of accommodation needed (hotel rooms, apartments, or mix)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#004225] font-bold">•</span>
                <span>Conference room requirements (if applicable)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#004225] font-bold">•</span>
                <span>Any special requests or requirements</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
