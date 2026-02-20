import Image from 'next/image'
import Link from 'next/link'
import BookingLink from '@/components/BookingLink'
import { generateMetadata } from '@/lib/seo/metadata'
import { PAGE_METADATA } from '@/lib/seo/page-metadata'

// SEO Metadata
export const metadata = generateMetadata(PAGE_METADATA.about)

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* About Section */}
      <section className="py-16 px-4 bg-[#FFFAF2] pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#004225] mb-4 text-center">
            A Place to Discover
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 text-center">
            Your home away from home in Lund, Sweden.
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Place Lund Hotel is more than just accommodation—it's a place to stay, sleep, eat, drink, gather, meet, work, and relax in the vibrant city of Lund, Sweden. Located in the heart of this historic university town, we offer a range of accommodations designed to meet the diverse needs of our guests.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Whether you're visiting for business, studying at Lund University, attending a conference, or exploring southern Sweden, Place Lund provides comfortable and convenient accommodation with a personal touch.
            </p>
          </div>

          {/* What We Offer */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-4">Hotel Rooms & Studios</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                From economy doubles to deluxe rooms, we offer comfortable accommodation with weekly cleaning. Our hotel rooms include breakfast and dinner, while studios provide self-catering options.
              </p>
            </div>

            <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-4">Apartments</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                For longer stays, our one-bedroom and studio apartments offer the comforts of home with fully equipped kitchens, living spaces, and flexible booking options for weekly and monthly rentals.
              </p>
            </div>

            <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-4">Conference Facilities</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Three versatile conference rooms (Sofia, Margareta, Sankt Hans) equipped with modern technology for meetings, workshops, and events of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-[#FFFAF2] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-8 text-center">
            Our Location
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Place Lund Hotel is ideally situated at <strong>Margaretavägen 7, 222 40 Lund, Sweden</strong>, placing you within easy reach of everything this charming city has to offer.
              </p>

              <div className="space-y-4">
                <div className="bg-[#FFFAF2] p-4 rounded-lg border-2 border-[#004225]">
                  <h4 className="font-bold text-[#004225] mb-2">Lund University</h4>
                  <p className="text-gray-700 text-sm">
                    Close proximity to Lund University and LTH (Faculty of Engineering), making us ideal for academic visitors, researchers, and students.
                  </p>
                </div>

                <div className="bg-[#FFFAF2] p-4 rounded-lg border-2 border-[#004225]">
                  <h4 className="font-bold text-[#004225] mb-2">City Center</h4>
                  <p className="text-gray-700 text-sm">
                    Walking distance to Lund's historic city center with its shops, restaurants, cafes, and cultural attractions.
                  </p>
                </div>

                <div className="bg-[#FFFAF2] p-4 rounded-lg border-2 border-[#004225]">
                  <h4 className="font-bold text-[#004225] mb-2">Transportation</h4>
                  <p className="text-gray-700 text-sm">
                    Minutes from Lund Central Station with direct trains to Copenhagen (30 min), Malmö (15 min), and throughout southern Sweden.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h3 className="text-xl font-bold text-[#004225] mb-4">Contact Information</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold text-[#004225]">Address</p>
                  <p>Margaretavägen 7<br />222 40 Lund, Sweden</p>
                </div>

                <div>
                  <p className="font-semibold text-[#004225]">Phone</p>
                  <p>
                    <a href="tel:+4646333600" className="hover:text-[#42001D] transition-colors">
                      046 - 33 36 00
                    </a>
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#004225]">Email</p>
                  <p>
                    <a href="mailto:info@placelund.se" className="hover:text-[#42001D] transition-colors">
                      info@placelund.se
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="block text-center bg-[#004225] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#42001D] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-8 text-center">
            Why Choose Place Lund?
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-[#004225] text-3xl font-bold">•</div>
              <div>
                <h4 className="font-bold text-[#004225] mb-2">Northern Location in Lund</h4>
                <p className="text-gray-700 text-sm">
                  Perfect location near the university, city center, and transport links
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#004225] text-3xl font-bold">•</div>
              <div>
                <h4 className="font-bold text-[#004225] mb-2">Flexible Options</h4>
                <p className="text-gray-700 text-sm">
                  From nightly hotel stays to monthly apartment rentals
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#004225] text-3xl font-bold">•</div>
              <div>
                <h4 className="font-bold text-[#004225] mb-2">Modern Amenities</h4>
                <p className="text-gray-700 text-sm">
                  Free WiFi, equipped kitchens, weekly cleaning, and more
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#004225] text-3xl font-bold">•</div>
              <div>
                <h4 className="font-bold text-[#004225] mb-2">On-Site Restaurant & Bar</h4>
                <p className="text-gray-700 text-sm">
                  Convenient dining and drinks without leaving the hotel
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#004225] text-3xl font-bold">•</div>
              <div>
                <h4 className="font-bold text-[#004225] mb-2">Conference Facilities</h4>
                <p className="text-gray-700 text-sm">
                  Professional meeting spaces for business and events
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#004225] text-3xl font-bold">•</div>
              <div>
                <h4 className="font-bold text-[#004225] mb-2">Personalized Service</h4>
                <p className="text-gray-700 text-sm">
                  Dedicated staff ready to make your stay comfortable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Place Lund?
          </h3>
          <p className="text-lg mb-8 text-white/90">
            Whether you're planning a short visit or an extended stay, we have the perfect accommodation for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingLink className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors">
              Book Hotel Room
            </BookingLink>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors"
            >
              Contact About Apartments
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
