import Image from 'next/image'
import Link from 'next/link'
import { getRoomImages } from '@/utils/getImages'

export const metadata = {
  title: 'Sankt Hans Conference Room - Place Lund Hotel | Intimate Meeting Space',
  description: 'Sankt Hans conference room at Place Lund Hotel in Lund, Sweden. Small intimate meeting space for 10-15 people, perfect for boardroom meetings and small group discussions.',
}

export default function SanktHansConferencePage() {
  const { heroImage, galleryImages } = getRoomImages('conference/Sankt-Hans')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src={heroImage}
          alt="Sankt Hans conference room at Place Lund Hotel"
          fill
          quality={100}
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4 text-shadow-outline">
            A Place to Focus
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-8">
            An intimate and focused meeting space designed for small groups, boardroom meetings, and executive discussions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#004225] text-[#E3DAC9] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/conference"
              className="bg-[#66023C] text-white border-2 border-[#66023C] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Room Details Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Room Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#004225] mb-6">Room Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Sankt Hans conference room offers an intimate and exclusive setting for smaller meetings and focused discussions. With capacity for 10-15 participants, this room creates the perfect environment for boardroom meetings, executive sessions, job interviews, and strategic planning meetings.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Named after the nearby Sankt Hans Backar Park, this room combines modern technology with a warm, professional atmosphere that encourages productive conversations and decision-making.
              </p>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Key Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Capacity:</strong> 10-15 people</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Size:</strong> 30 m²</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Layout:</strong> Boardroom, U-shape, small classroom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Natural Light:</strong> Yes, with privacy blinds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Location:</strong> Upper floor with park view</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Equipment & Amenities</h3>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Large Screen Display</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Free WiFi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Whiteboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Flipchart</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Video Conference</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Conference Phone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Climate Control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Coffee & Tea Service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Privacy Blinds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Comfortable Seating</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Park View</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Quiet Location</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#42001D] mb-6">
                <h3 className="text-xl font-bold text-[#42001D] mb-3">Perfect For:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Executive board meetings</li>
                  <li>• Strategic planning sessions</li>
                  <li>• Client presentations</li>
                  <li>• Job interviews</li>
                  <li>• Small team workshops</li>
                  <li>• Confidential discussions</li>
                </ul>
              </div>

              <a
                href="/flyers/sankt-hans-conference-flyer.pdf"
                download
                className="block w-full bg-[#004225] text-[#E3DAC9] font-semibold py-3 px-6 rounded-lg hover:bg-[#42001D] transition-colors text-center"
              >
                Download Flyer
              </a>
            </div>

            {/* Room Gallery */}
            <div className="h-[800px] overflow-y-auto space-y-4 pr-2">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`Sankt Hans conference room view ${index + 1}`}
                    fill
                    quality={100}
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4">
              Conference Pricing
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Sankt Hans conference room offers competitive pricing for intimate meetings. All packages include modern AV equipment, WiFi, and quiet park-view location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {/* Half Day Pricing */}
            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-6 text-center">Half Day</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-6 bg-[#f5f5f5] rounded-lg">
                  <div>
                    <p className="font-bold text-[#004225] text-lg">Maximum 18 people</p>
                    <p className="text-sm text-gray-600">Full room capacity</p>
                  </div>
                  <p className="text-3xl font-bold text-[#004225]">3,800 kr</p>
                </div>
              </div>
              <p className="text-center text-gray-600 text-sm mt-4">
                Perfect for focused meetings and small workshops
              </p>
            </div>

            {/* Full Day Pricing */}
            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-6 text-center">Full Day</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-6 bg-[#f5f5f5] rounded-lg">
                  <div>
                    <p className="font-bold text-[#004225] text-lg">Maximum 18 people</p>
                    <p className="text-sm text-gray-600">Full room capacity</p>
                  </div>
                  <p className="text-3xl font-bold text-[#004225]">5,120 kr</p>
                </div>
              </div>
              <p className="text-center text-gray-600 text-sm mt-4">
                Ideal for executive sessions and strategic planning
              </p>
            </div>
          </div>

          {/* Food & Beverage Add-ons */}
          <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#42001D]">
            <h3 className="text-2xl font-bold text-[#42001D] mb-6 text-center">Food & Beverage Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-[#f5f5f5] rounded-lg">
                <p className="font-bold text-[#004225] mb-2">Place Frukost</p>
                <p className="text-2xl font-bold text-[#42001D]">63 kr</p>
                <p className="text-sm text-gray-600 mt-1">per person</p>
              </div>
              <div className="text-center p-4 bg-[#f5f5f5] rounded-lg">
                <p className="font-bold text-[#004225] mb-2">Varm Lunch</p>
                <p className="text-2xl font-bold text-[#42001D]">210 kr</p>
                <p className="text-sm text-gray-600 mt-1">per person</p>
              </div>
              <div className="text-center p-4 bg-[#f5f5f5] rounded-lg">
                <p className="font-bold text-[#004225] mb-2">Package Offer</p>
                <p className="text-2xl font-bold text-[#42001D]">600 kr</p>
                <p className="text-sm text-gray-600 mt-1">per person/day</p>
              </div>
              <div className="text-center p-4 bg-[#f5f5f5] rounded-lg">
                <p className="font-bold text-[#004225] mb-2">Kaffe med Bakverk</p>
                <p className="text-2xl font-bold text-[#42001D]">62 kr</p>
                <p className="text-sm text-gray-600 mt-1">per person</p>
              </div>
              <div className="text-center p-4 bg-[#f5f5f5] rounded-lg">
                <p className="font-bold text-[#004225] mb-2">Kaffe med Småkaka</p>
                <p className="text-2xl font-bold text-[#42001D]">35 kr</p>
                <p className="text-sm text-gray-600 mt-1">per person</p>
              </div>
            </div>
            <p className="text-center text-gray-600 text-sm mt-6">
              All food and beverage options can be added to your conference booking. Contact us for custom catering arrangements.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block bg-[#004225] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
