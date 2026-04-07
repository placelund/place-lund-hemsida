import Image from 'next/image'
import Link from 'next/link'
import { getRoomImages } from '@/utils/getImages'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata = {
  title: 'Sofia Conference Room - Place Lund Hotel | Professional Meeting Space',
  description: 'Sofia conference room at Place Lund Hotel in Lund, Sweden. Medium-sized meeting space for 20-30 people with modern AV equipment and catering services.',
}

export default function SofiaConferencePage() {
  const { heroImage, galleryImages } = getRoomImages('conference/Sofia')

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema items={[{ name: 'Conference', href: '/conference' }, { name: 'Sofia', href: '/conference/sofia' }]} />
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center pt-20">
        <Image
          src={heroImage}
          alt="Sofia conference room at Place Lund Hotel"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            A Place to Collaborate
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8">
            A versatile medium-sized conference room perfect for meetings, workshops, and presentations.
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
                The Sofia conference room is our medium-sized meeting space, offering a comfortable and professional environment for your business events. With capacity for 20-30 participants, it's ideal for mid-sized meetings, training sessions, workshops, and presentations.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Located on the main floor with natural daylight and modern amenities, Sofia provides the perfect setting for productive meetings and collaborative work sessions.
              </p>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Key Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Capacity:</strong> 20-30 people</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Size:</strong> 45 m²</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Layout:</strong> Theater, classroom, U-shape, boardroom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Natural Light:</strong> Yes, with adjustable blinds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700"><strong>Location:</strong> Main floor</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Equipment & Amenities</h3>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Projector & Screen</span>
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
                    <span className="text-gray-700">Sound System</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Climate Control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Coffee & Tea</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#42001D] mb-6">
                <h3 className="text-xl font-bold text-[#42001D] mb-3">Perfect For:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Team meetings & workshops</li>
                  <li>• Training sessions</li>
                  <li>• Presentations & pitches</li>
                  <li>• Department meetings</li>
                  <li>• Professional development</li>
                  <li>• Collaborative work sessions</li>
                </ul>
              </div>

              <a
                href="/flyers/sofia-conference-flyer.pdf"
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
                    alt={`Sofia conference room view ${index + 1}`}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 50vw"
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
              Sofia conference room offers flexible pricing based on capacity and duration. All packages include standard AV equipment, WiFi, and whiteboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Half Day Pricing */}
            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-6 text-center">Half Day</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-[#f5f5f5] rounded-lg">
                  <div>
                    <p className="font-bold text-[#004225]">Maximum 26 people</p>
                    <p className="text-sm text-gray-600">Full room capacity</p>
                  </div>
                  <p className="text-2xl font-bold text-[#004225]">7,520 kr</p>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#f5f5f5] rounded-lg">
                  <div>
                    <p className="font-bold text-[#004225]">Maximum 16 people</p>
                    <p className="text-sm text-gray-600">Medium setup</p>
                  </div>
                  <p className="text-2xl font-bold text-[#004225]">4,960 kr</p>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#f5f5f5] rounded-lg">
                  <div>
                    <p className="font-bold text-[#004225]">Maximum 10 people</p>
                    <p className="text-sm text-gray-600">Intimate setup</p>
                  </div>
                  <p className="text-2xl font-bold text-[#004225]">3,040 kr</p>
                </div>
              </div>
            </div>

            {/* Full Day Pricing */}
            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-6 text-center">Full Day</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-[#f5f5f5] rounded-lg">
                  <div>
                    <p className="font-bold text-[#004225]">Maximum 26 people</p>
                    <p className="text-sm text-gray-600">Full room capacity</p>
                  </div>
                  <p className="text-2xl font-bold text-[#004225]">9,920 kr</p>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#f5f5f5] rounded-lg">
                  <div>
                    <p className="font-bold text-[#004225]">Maximum 16 people</p>
                    <p className="text-sm text-gray-600">Medium setup</p>
                  </div>
                  <p className="text-2xl font-bold text-[#004225]">7,040 kr</p>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#f5f5f5] rounded-lg">
                  <div>
                    <p className="font-bold text-[#004225]">Maximum 10 people</p>
                    <p className="text-sm text-gray-600">Intimate setup</p>
                  </div>
                  <p className="text-2xl font-bold text-[#004225]">4,320 kr</p>
                </div>
              </div>
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
