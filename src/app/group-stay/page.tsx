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
          <h3 className="text-3xl md:text-4xl font-bold text-[#004225] mb-12 text-center">
            Perfect For
          </h3>

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
          <h3 className="text-3xl md:text-4xl font-bold text-[#004225] mb-12 text-center">
            Group Accommodation Options
          </h3>

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
          <h3 className="text-3xl md:text-4xl font-bold text-[#004225] mb-12 text-center">
            Why Choose Place Lund for Your Group?
          </h3>

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
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your Group Stay?
          </h3>
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
              href="tel:+4646333600"
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
          <h3 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4 text-center">
            Group-Specific Amenities & Services
          </h3>
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


      {/* Contact Information for Group Coordinators */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4 text-center">
            Contact Our Group Coordinators
          </h3>
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
                <a href="tel:+4646333600" className="text-2xl font-bold text-[#42001D] hover:text-[#004225]">
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
                href="tel:+4646333600"
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
          <h3 className="text-2xl font-bold text-[#004225] mb-6">
            Questions About Group Bookings?
          </h3>
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
