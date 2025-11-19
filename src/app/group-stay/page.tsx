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
      {/* Header Section */}
      <section className="py-16 px-4 bg-[#FFFAF2] pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-6 text-shadow-outline">
            A Place to Gather
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Perfect accommodation and facilities for sports teams, school groups, conferences, and corporate events in Lund. Place Lund Hotel specializes in group accommodation and events, offering flexible solutions for sports teams, school groups, conferences, and corporate gatherings. With a range of rooms, apartments, and conference facilities, we can accommodate groups of all sizes.
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
              <h3 className="text-xl font-bold text-[#004225] mb-3">Sports Teams</h3>
              <p className="text-gray-700 text-sm">
                Competitive rates for teams visiting Lund for tournaments and training camps
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <h3 className="text-xl font-bold text-[#004225] mb-3">School Groups</h3>
              <p className="text-gray-700 text-sm">
                Safe and comfortable accommodation for student groups visiting Lund University
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <h3 className="text-xl font-bold text-[#004225] mb-3">Corporate Events</h3>
              <p className="text-gray-700 text-sm">
                Conference rooms and accommodation packages for business meetings and training
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
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
                  <span>Weekly cleaning</span>
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

      {/* Group-Specific Amenities and Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4 text-center">
            Group-Specific Amenities & Services
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            We provide comprehensive services and amenities designed specifically for group stays, ensuring your event or gathering runs smoothly.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-3">Dedicated Group Coordinator</h3>
              <p className="text-gray-700 text-sm mb-3">
                Your assigned coordinator will help with planning, logistics, and on-site support throughout your stay.
              </p>
              <p className="text-sm text-gray-600 italic">
                Available for groups of 10 or more
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-3">Group Catering Services</h3>
              <p className="text-gray-700 text-sm mb-3">
                Customized meal plans including buffet breakfast, hot lunches (210 SEK/person), and dinner arrangements.
              </p>
              <p className="text-sm text-gray-600 italic">
                Dietary accommodations available
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-3">Meeting Room Equipment</h3>
              <p className="text-gray-700 text-sm mb-3">
                Projectors, screens, whiteboards, flip charts, and hybrid meeting technology included with conference bookings.
              </p>
              <p className="text-sm text-gray-600 italic">
                Technical support on-site
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-3">Coffee & Break Services</h3>
              <p className="text-gray-700 text-sm mb-3">
                Coffee with pastries (62 SEK/person) or cookies (35 SEK/person). Served in meeting rooms or break areas.
              </p>
              <p className="text-sm text-gray-600 italic">
                All prices exclude VAT
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-3">Laundry Facilities</h3>
              <p className="text-gray-700 text-sm mb-3">
                Guest laundry facilities available on-site, perfect for sports teams and extended group stays.
              </p>
              <p className="text-sm text-gray-600 italic">
                Self-service and convenient
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-3">Recreation Areas</h3>
              <p className="text-gray-700 text-sm mb-3">
                Billiard table, children's play corner, hotel garden, and breakout spaces for team bonding and relaxation.
              </p>
              <p className="text-sm text-gray-600 italic">
                Free for all guests
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-3">Flexible Room Configurations</h3>
              <p className="text-gray-700 text-sm mb-3">
                Mix and match hotel rooms, studios, and apartments to suit different guest needs within your group.
              </p>
              <p className="text-sm text-gray-600 italic">
                Customizable to your requirements
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-3">Group Check-In Service</h3>
              <p className="text-gray-700 text-sm mb-3">
                Streamlined check-in process for groups with pre-assigned rooms and key distribution.
              </p>
              <p className="text-sm text-gray-600 italic">
                Save time on arrival day
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-3">Nearby Sports Facilities</h3>
              <p className="text-gray-700 text-sm mb-3">
                Viktoriastadion (350m), Delfinen Swimming Hall (1100m), and multiple parks for team activities.
              </p>
              <p className="text-sm text-gray-600 italic">
                Perfect for sports groups
              </p>
            </div>
          </div>

          <div className="bg-[#004225] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Special Services Available Upon Request</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2 text-lg">Event Support</h4>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• Custom meeting room setups</li>
                  <li>• Audio-visual support</li>
                  <li>• Name tags and materials printing</li>
                  <li>• Welcome signage</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-lg">Extended Services</h4>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• Late check-out arrangements</li>
                  <li>• Luggage storage</li>
                  <li>• Transportation coordination</li>
                  <li>• Local activity bookings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Structure for Groups */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4 text-center">
            Pricing Structure for Groups
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            We offer competitive group rates and flexible pricing based on group size, length of stay, and services required.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-3 text-center">Small Groups</h3>
              <p className="text-3xl font-bold text-center text-[#42001D] mb-2">5-15 people</p>
              <p className="text-gray-700 text-sm text-center mb-4">
                Perfect for small teams and workshops
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Competitive room rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Conference room access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Group breakfast arrangements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Flexible catering options</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#004225] text-white p-6 rounded-lg border-2 border-[#004225] shadow-lg transform md:scale-105">
              <div className="bg-[#42001D] text-white text-xs font-bold uppercase py-1 px-3 rounded-full inline-block mb-3">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Medium Groups</h3>
              <p className="text-3xl font-bold text-center mb-2">16-50 people</p>
              <p className="text-white/90 text-sm text-center mb-4">
                Ideal for conferences and sports teams
              </p>
              <ul className="space-y-2 text-white/90 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFFAF2] font-bold">✓</span>
                  <span>Discounted group rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFFAF2] font-bold">✓</span>
                  <span>Dedicated group coordinator</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFFAF2] font-bold">✓</span>
                  <span>Full catering packages available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFFAF2] font-bold">✓</span>
                  <span>Multiple conference rooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFFAF2] font-bold">✓</span>
                  <span>Flexible payment terms</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-3 text-center">Large Groups</h3>
              <p className="text-3xl font-bold text-center text-[#42001D] mb-2">50+ people</p>
              <p className="text-gray-700 text-sm text-center mb-4">
                Major conferences and events
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Best available group rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Premium coordinator support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Custom packages available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>All meeting spaces available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Extended payment options</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border-2 border-[#004225]">
            <h3 className="text-2xl font-bold text-[#004225] mb-6 text-center">Conference Package Pricing</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-[#004225] pl-4">
                <h4 className="font-bold text-lg text-[#004225] mb-2">Full Day Package</h4>
                <p className="text-2xl font-bold text-[#42001D] mb-2">600 SEK per person</p>
                <p className="text-sm text-gray-700 mb-3">Includes:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Breakfast buffet</li>
                  <li>• Coffee with pastries (morning & afternoon)</li>
                  <li>• Hot lunch</li>
                  <li>• Meeting room with equipment</li>
                  <li>• Free WiFi</li>
                </ul>
                <p className="text-xs text-gray-600 mt-3 italic">*Excludes VAT. Minimum 10 people.</p>
              </div>

              <div className="border-l-4 border-[#42001D] pl-4">
                <h4 className="font-bold text-lg text-[#004225] mb-2">Extended Stay Discounts</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-[#42001D]">3-6 nights</p>
                    <p className="text-sm text-gray-700">5% discount on room rates</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#42001D]">7-13 nights</p>
                    <p className="text-sm text-gray-700">10% discount on room rates</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#42001D]">14+ nights</p>
                    <p className="text-sm text-gray-700">15% discount on room rates</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3 italic">*Discounts apply to group bookings of 10+ rooms</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-700 text-sm">
              <span className="font-bold">Note:</span> All prices are subject to availability and may vary based on season, group size, and specific requirements. Contact us for a detailed customized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Policies Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4 text-center">
            Group Booking Policies
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Please review our policies carefully to ensure a smooth booking process for your group stay.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-[#004225]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <h3 className="font-bold text-xl text-[#004225]">Advance Booking Requirements</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>Small Groups (5-15 people):</strong> Minimum 2 weeks advance notice recommended</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>Medium Groups (16-50 people):</strong> Minimum 4 weeks advance notice required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>Large Groups (50+ people):</strong> Minimum 8 weeks advance notice required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>Peak Season (May-September):</strong> Book 12+ weeks in advance for best availability</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-[#004225]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <h3 className="font-bold text-xl text-[#004225]">Group Size Minimums</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>Minimum Group Size:</strong> 5 people to qualify for group rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>Conference Packages:</strong> Minimum 10 people for catering packages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>Dedicated Coordinator:</strong> Assigned for groups of 10 or more</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>Maximum Capacity:</strong> Up to 150 people across all accommodation and conference facilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-[#004225]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <h3 className="font-bold text-xl text-[#004225]">Payment Terms & Deposits</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>Initial Deposit:</strong> 30% of total booking value due upon confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>Final Payment:</strong> Full balance due 14 days prior to arrival</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>Corporate/Organization Bookings:</strong> Extended payment terms available upon request (invoice within 30 days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>Payment Methods:</strong> Bank transfer, credit card, or invoice for registered organizations</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-[#004225]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <h3 className="font-bold text-xl text-[#004225]">Cancellation Policies</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>30+ days before arrival:</strong> Full refund minus 10% administrative fee</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>15-29 days before arrival:</strong> 50% refund of total booking value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>7-14 days before arrival:</strong> 25% refund of total booking value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>Less than 7 days:</strong> No refund, full payment required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004225] font-bold">•</span>
                  <span><strong>Partial cancellations:</strong> Adjustments allowed up to 14 days before arrival (minimum group size must be maintained)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#004225] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Important Policy Notes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-lg">Modifications & Changes</h4>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• Room allocation changes accepted up to 14 days before arrival</li>
                  <li>• Meal count adjustments must be finalized 7 days in advance</li>
                  <li>• Conference room layout changes can be made up to 3 days prior</li>
                  <li>• Additional services can be added throughout your stay (subject to availability)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-lg">Special Circumstances</h4>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• Force majeure cancellations handled on case-by-case basis</li>
                  <li>• Educational institutions may qualify for modified payment terms</li>
                  <li>• Annual/recurring group bookings eligible for preferential rates</li>
                  <li>• Emergency cancellations may receive partial consideration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process Timeline */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4 text-center">
            Booking Process Timeline
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Follow this simple step-by-step process to ensure a smooth booking experience for your group.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#004225]"></div>

            {/* Step 1 */}
            <div className="relative mb-8 md:mb-12">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/2 md:text-right md:pr-8">
                  <div className="bg-white p-6 rounded-lg border-2 border-[#004225] shadow-md">
                    <h3 className="text-xl font-bold text-[#004225] mb-2">Step 1: Initial Inquiry</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Contact us via phone, email, or our website contact form with your basic requirements.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Dates of stay</li>
                      <li>• Number of people</li>
                      <li>• Type of group (sports, corporate, etc.)</li>
                      <li>• Basic accommodation needs</li>
                    </ul>
                  </div>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-[#004225] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg">
                  1
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <p className="text-sm text-gray-600 italic">Timeline: Day 1</p>
                  <p className="text-sm font-bold text-[#42001D]">Response within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mb-8 md:mb-12">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/2 md:text-right md:pr-8 md:order-1">
                  <p className="text-sm text-gray-600 italic">Timeline: Days 2-3</p>
                  <p className="text-sm font-bold text-[#42001D]">Detailed consultation call</p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-[#004225] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg md:order-2">
                  2
                </div>
                <div className="md:w-1/2 md:pl-8 md:order-3">
                  <div className="bg-white p-6 rounded-lg border-2 border-[#004225] shadow-md">
                    <h3 className="text-xl font-bold text-[#004225] mb-2">Step 2: Requirements Discussion</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Our group coordinator will discuss your specific needs in detail.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Room allocation preferences</li>
                      <li>• Conference/meeting space needs</li>
                      <li>• Catering requirements & dietary needs</li>
                      <li>• Special services or requests</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative mb-8 md:mb-12">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/2 md:text-right md:pr-8">
                  <div className="bg-white p-6 rounded-lg border-2 border-[#004225] shadow-md">
                    <h3 className="text-xl font-bold text-[#004225] mb-2">Step 3: Customized Proposal</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Receive a detailed quote and proposal tailored to your group's needs.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Itemized pricing breakdown</li>
                      <li>• Room allocation plan</li>
                      <li>• Conference schedule (if applicable)</li>
                      <li>• Payment terms & schedule</li>
                    </ul>
                  </div>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-[#004225] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg">
                  3
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <p className="text-sm text-gray-600 italic">Timeline: Days 4-5</p>
                  <p className="text-sm font-bold text-[#42001D]">Written proposal delivered</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative mb-8 md:mb-12">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/2 md:text-right md:pr-8 md:order-1">
                  <p className="text-sm text-gray-600 italic">Timeline: Within 7-10 days</p>
                  <p className="text-sm font-bold text-[#42001D]">Secure your booking</p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-[#004225] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg md:order-2">
                  4
                </div>
                <div className="md:w-1/2 md:pl-8 md:order-3">
                  <div className="bg-white p-6 rounded-lg border-2 border-[#004225] shadow-md">
                    <h3 className="text-xl font-bold text-[#004225] mb-2">Step 4: Confirmation & Deposit</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Review the proposal, sign the agreement, and pay the deposit to confirm.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Review and approve proposal</li>
                      <li>• Sign booking agreement</li>
                      <li>• Pay 30% deposit</li>
                      <li>• Receive confirmation & invoice</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative mb-8 md:mb-12">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/2 md:text-right md:pr-8">
                  <div className="bg-white p-6 rounded-lg border-2 border-[#004225] shadow-md">
                    <h3 className="text-xl font-bold text-[#004225] mb-2">Step 5: Pre-Arrival Planning</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Finalize details in the weeks leading up to your arrival.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Submit final rooming list (14 days before)</li>
                      <li>• Confirm meal counts (7 days before)</li>
                      <li>• Make final payment (14 days before)</li>
                      <li>• Receive arrival instructions</li>
                    </ul>
                  </div>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-[#004225] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg">
                  5
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <p className="text-sm text-gray-600 italic">Timeline: 2-4 weeks before arrival</p>
                  <p className="text-sm font-bold text-[#42001D]">Final preparations</p>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/2 md:text-right md:pr-8 md:order-1">
                  <p className="text-sm text-gray-600 italic">Timeline: Arrival day</p>
                  <p className="text-sm font-bold text-[#42001D]">Welcome to Place Lund!</p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-[#42001D] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg md:order-2">
                  6
                </div>
                <div className="md:w-1/2 md:pl-8 md:order-3">
                  <div className="bg-[#004225] text-white p-6 rounded-lg border-2 border-[#004225] shadow-md">
                    <h3 className="text-xl font-bold mb-2">Step 6: Arrival & Check-In</h3>
                    <p className="text-white/90 text-sm mb-3">
                      Your group coordinator will ensure a smooth arrival and check-in process.
                    </p>
                    <ul className="text-xs text-white/80 space-y-1">
                      <li>• Streamlined group check-in</li>
                      <li>• Pre-assigned room keys ready</li>
                      <li>• Welcome briefing & orientation</li>
                      <li>• On-site support throughout stay</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg border-2 border-[#004225] text-center">
            <h4 className="font-bold text-lg text-[#004225] mb-2">Need Help at Any Step?</h4>
            <p className="text-gray-700 text-sm mb-4">
              Our dedicated group coordinators are here to assist you throughout the entire booking process.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+46463336 00"
                className="bg-[#004225] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#42001D] transition-colors text-sm"
              >
                Call: 046 - 33 36 00
              </a>
              <a
                href="mailto:info@placelund.se"
                className="border-2 border-[#004225] text-[#004225] font-semibold py-2 px-6 rounded-md hover:bg-[#004225] hover:text-white transition-colors text-sm"
              >
                Email: info@placelund.se
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Group Benefits & Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4 text-center">
            Why Groups Choose Place Lund Hotel
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Discover what makes Place Lund Hotel the preferred choice for group accommodations in Lund.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <div className="w-16 h-16 bg-[#004225] text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                €
              </div>
              <h3 className="text-xl font-bold text-[#004225] mb-3">Cost-Effective Rates</h3>
              <p className="text-gray-700 text-sm">
                Competitive group pricing with discounts up to 15% for extended stays. Get more value for your budget.
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <div className="w-16 h-16 bg-[#004225] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#004225] mb-3">Prime Location</h3>
              <p className="text-gray-700 text-sm">
                Walking distance to Lund University, train station, and city center. Easy access to sports facilities.
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <div className="w-16 h-16 bg-[#004225] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#004225] mb-3">All-Inclusive Service</h3>
              <p className="text-gray-700 text-sm">
                From accommodation to catering to conference facilities - everything your group needs in one place.
              </p>
            </div>
          </div>

          <div className="bg-[#004225] text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">What Our Groups Say</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-lg border-2 border-white/30">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 text-sm mb-4 italic">
                  "Perfect location for our university group. The staff was incredibly helpful with organizing our stay, and the breakfast buffet was excellent. Will definitely book again!"
                </p>
                <p className="text-sm font-bold">- Uppsala University Student Association</p>
                <p className="text-xs text-white/70">May 2024 - Group of 24</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg border-2 border-white/30">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 text-sm mb-4 italic">
                  "Our hockey team has stayed here multiple times. Great value for money, close to the arena, and the team dinner arrangements were seamless. Highly recommend for sports teams!"
                </p>
                <p className="text-sm font-bold">- Malmö Hockey Club</p>
                <p className="text-xs text-white/70">March 2024 - Group of 18</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg border-2 border-white/30">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 text-sm mb-4 italic">
                  "We held our annual conference here with 45 participants. The meeting facilities were modern, the lunch was delicious, and our coordinator made everything run smoothly."
                </p>
                <p className="text-sm font-bold">- Tech Innovations AB</p>
                <p className="text-xs text-white/70">September 2024 - Group of 45</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg border-2 border-white/30">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 text-sm mb-4 italic">
                  "Fantastic experience for our family reunion. We booked multiple rooms and the hotel garden was perfect for our gatherings. Very family-friendly atmosphere!"
                </p>
                <p className="text-sm font-bold">- Andersson Family Reunion</p>
                <p className="text-xs text-white/70">July 2024 - Group of 32</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-l-4 border-[#004225]">
              <div className="text-4xl font-bold text-[#42001D] mb-2">500+</div>
              <p className="text-gray-700 font-semibold">Groups Hosted Annually</p>
              <p className="text-gray-600 text-sm mt-2">From small teams to large conferences</p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-l-4 border-[#004225]">
              <div className="text-4xl font-bold text-[#42001D] mb-2">95%</div>
              <p className="text-gray-700 font-semibold">Customer Satisfaction</p>
              <p className="text-gray-600 text-sm mt-2">Based on group booking reviews</p>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-l-4 border-[#004225]">
              <div className="text-4xl font-bold text-[#42001D] mb-2">75%</div>
              <p className="text-gray-700 font-semibold">Return Rate</p>
              <p className="text-gray-600 text-sm mt-2">Groups that book with us again</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information for Group Coordinators */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4 text-center">
            Contact Our Group Coordinators
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Our dedicated team is ready to help you plan the perfect group stay. Reach out today to get started.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border-2 border-[#004225]">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-[#004225]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <h3 className="font-bold text-xl text-[#004225]">Phone</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <a href="tel:+46463336 00" className="text-2xl font-bold text-[#42001D] hover:text-[#004225]">
                  046 - 33 36 00
                </a>
              </p>
              <p className="text-sm text-gray-600">
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday - Sunday: 9:00 AM - 4:00 PM
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-[#004225]">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-[#004225]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <h3 className="font-bold text-xl text-[#004225]">Email</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <a href="mailto:info@placelund.se" className="text-xl font-bold text-[#42001D] hover:text-[#004225]">
                  info@placelund.se
                </a>
              </p>
              <p className="text-sm text-gray-600">
                Response time: Within 24 hours on business days<br />
                Include all group details for faster quote
              </p>
            </div>
          </div>

          <div className="bg-[#004225] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Request a Group Quote</h3>
            <p className="text-white/90 text-center mb-6">
              To receive an accurate quote quickly, please include the following information in your inquiry:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold mb-3 text-lg">Basic Information</h4>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Number of people in your group</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Check-in and check-out dates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Type of group (sports, corporate, school, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Purpose of visit</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3 text-lg">Specific Needs</h4>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Accommodation type preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Conference room requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Meal/catering needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Any special requests or requirements</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@placelund.se?subject=Group Booking Inquiry"
                className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-white transition-colors text-center"
              >
                Send Email Inquiry
              </a>
              <a
                href="tel:+46463336 00"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-white/10 transition-colors text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#004225] mb-6">
            Questions About Group Bookings?
          </h2>
          <p className="text-gray-700 mb-8">
            Our experienced group coordinators are here to answer all your questions and help create a customized package that meets your specific needs and budget.
          </p>

          <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225]">
            <h3 className="text-xl font-bold text-[#004225] mb-4">What Makes Us Different?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <p className="font-bold text-gray-800">No Hidden Fees</p>
                  <p className="text-sm text-gray-600">Transparent pricing with all costs clearly outlined</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <p className="font-bold text-gray-800">Flexible Arrangements</p>
                  <p className="text-sm text-gray-600">We adapt to your needs, not the other way around</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <p className="font-bold text-gray-800">Personal Service</p>
                  <p className="text-sm text-gray-600">Direct contact with your dedicated coordinator</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <p className="font-bold text-gray-800">Local Expertise</p>
                  <p className="text-sm text-gray-600">We know Lund and can recommend activities & services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
