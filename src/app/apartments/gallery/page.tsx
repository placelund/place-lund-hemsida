import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Apartment Gallery - Place Lund Hotel | Apartment Photos',
  description: 'Browse photos of our one bedroom and studio apartments at Place Lund in Lund, Sweden. View images of our self-catering accommodations.',
}

export default function ApartmentsGalleryPage() {
  // One bedroom apartment images (1-9)
  const oneBedroomImages = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  // Studio apartment images (10-17)
  const studioImages = [10, 11, 12, 13, 14, 15, 16, 17]

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4">
            A Place to Explore
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
            Discover our self-catering apartments with kitchens, perfect for extended stays in Lund.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-12 text-center">
            Our Apartments
          </h2>

          {/* One Bedroom Apartments Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#004225] border-b-2 border-[#004225] pb-2">
                One Bedroom Apartments
              </h3>
              <Link
                href="/apartments/one-bedroom"
                className="text-[#004225] hover:text-[#42001D] font-semibold text-sm underline"
              >
                View Details →
              </Link>
            </div>
            <p className="text-gray-700 mb-6">
              Spacious apartments with separate bedroom, living room, and fully equipped kitchen. Perfect for families and extended stays.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {oneBedroomImages.map((num) => {
                const extension = num <= 5 ? 'jpg' : 'jpeg'
                return (
                  <div
                    key={num}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
                  >
                    <Image
                      src={`/images/apartments/apartment-lund-sweden-place-hotel-${num}.${extension}`}
                      alt={`One Bedroom Apartment - Image ${num}`}
                      fill
                      quality={100}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Studio Apartments Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#004225] border-b-2 border-[#004225] pb-2">
                Studio Apartments
              </h3>
              <Link
                href="/apartments/studio"
                className="text-[#004225] hover:text-[#42001D] font-semibold text-sm underline"
              >
                View Details →
              </Link>
            </div>
            <p className="text-gray-700 mb-6">
              Efficient 40m² studios with combined living/sleeping area and compact kitchenette. Ideal for solo travelers and couples.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {studioImages.map((num) => (
                <div
                  key={num}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
                >
                  <Image
                    src={`/images/apartments/apartment-lund-sweden-place-hotel-${num}.jpeg`}
                    alt={`Studio Apartment - Image ${num}`}
                    fill
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-[#42001D] text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Book Your Apartment?</h3>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              Our apartments are perfect for extended stays with all the comforts of home. Contact us to check availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#004225] hover:text-white transition-colors"
              >
                Contact for Availability
              </Link>
              <Link
                href="/apartments"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors"
              >
                View All Options
              </Link>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225]">
              <h4 className="text-2xl font-bold text-[#004225] mb-4">One Bedroom</h4>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Separate bedroom + living room</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Full kitchen with oven</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Up to 4 persons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Ideal for families</span>
                </li>
              </ul>
              <Link
                href="/apartments/one-bedroom"
                className="block text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225]">
              <h4 className="text-2xl font-bold text-[#004225] mb-4">Studio</h4>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Efficient 40m² layout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Compact kitchenette</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Up to 4 persons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Perfect for 1-2 people</span>
                </li>
              </ul>
              <Link
                href="/apartments/studio"
                className="block text-center bg-[#004225] text-white py-2 px-4 rounded-md hover:bg-[#42001D] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Other Options */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <h4 className="text-xl font-bold text-[#004225] mb-3">Hotel Rooms</h4>
              <p className="text-gray-700 mb-4 text-sm">
                Looking for shorter stays with meals included? Check out our hotel rooms.
              </p>
              <Link
                href="/hotel"
                className="inline-block bg-[#004225] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#42001D] transition-colors text-sm"
              >
                View Hotel Rooms
              </Link>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225] text-center">
              <h4 className="text-xl font-bold text-[#004225] mb-3">Restaurant & Bar</h4>
              <p className="text-gray-700 mb-4 text-sm">
                Enjoy our on-site restaurant and bar during your stay.
              </p>
              <Link
                href="/restaurant"
                className="inline-block bg-[#004225] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#42001D] transition-colors text-sm"
              >
                View Restaurant
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
