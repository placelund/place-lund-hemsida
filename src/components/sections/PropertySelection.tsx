import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function PropertySelection() {
  const properties = [
    {
      title: 'Hotel',
      description: 'Traditional hotel rooms with full service and amenities',
      href: '/hotel',
      image: '/images/hero/hotel-placeholder.png',
      features: ['Daily Housekeeping', 'Room Service', 'Breakfast Included'],
    },
    {
      title: 'Hotel Studio',
      description: 'Compact studio-style hotel rooms with modern conveniences',
      href: '/hotel-studio',
      image: '/images/hero/hotel-studio-placeholder.png',
      features: ['Kitchenette', 'Daily Housekeeping', 'Modern Design'],
    },
    {
      title: 'Apartments',
      description: 'Self-contained studio apartments for extended stays',
      href: '/apartments',
      image: '/images/hero/studio-apartments-placeholder.png',
      features: ['Full Kitchen', 'Flexible Stay', 'Weekly Cleaning'],
    },
    {
      title: 'Conference',
      description: 'Professional meeting spaces for events and conferences',
      href: '/conference',
      image: '/images/hero/conference-placeholder.png',
      features: ['Modern Facilities', 'Catering Available', 'Flexible Setup'],
    },
  ]

  return (
    <section className="py-20 px-4 bg-[#FFFAF2]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-main mb-4">
            Choose <span className="font-extrabold uppercase">Your</span> Stay
          </h2>
          <p className="text-xl text-brand-main/70 max-w-2xl mx-auto">
            Select the perfect accommodation for your needs
          </p>
        </div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {properties.map((property, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={property.href}
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`}
              >
                {/* Image Card */}
                <div className={`relative h-80 md:h-96 overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content Card */}
                <div className={`bg-[#f5f5f5] p-8 md:p-12 flex flex-col justify-between border-2 border-[#004225] min-h-[400px] ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className="text-3xl font-bold text-[#004225] mb-4">
                    {property.title}
                  </h3>

                  <p className="text-[#004225]/70 mb-6 leading-relaxed">
                    {property.description}
                  </p>

                  {/* Features */}
                  <div className="flex items-center gap-2 text-sm text-[#004225]/60 mb-8 flex-wrap">
                    {property.features.map((feature, idx) => (
                      <React.Fragment key={feature}>
                        <span>{feature}</span>
                        {idx < property.features.length - 1 && <span>•</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="space-y-3">
                    <Link
                      href={property.href}
                      className="block w-full bg-[#FFFAF2] text-[#004225] py-3 px-6 font-semibold hover:bg-[#42001D] hover:text-white transition-colors text-center"
                    >
                      Learn More
                    </Link>
                    {(property.title === 'Hotel' || property.title === 'Hotel Studio') ? (
                      <Link
                        href="https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-[#004225] text-white py-3 px-6 font-semibold hover:bg-[#42001D] transition-colors text-center"
                      >
                        Book Now
                      </Link>
                    ) : (
                      <Link
                        href="/contact"
                        className="block w-full bg-[#004225] text-white py-3 px-6 font-semibold hover:bg-[#42001D] transition-colors text-center"
                      >
                        Contact Us
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
