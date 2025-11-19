import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CurvedLoop from '@/components/ui/CurvedLoop'

export default function PropertySelection() {
  const properties = [
    {
      title: 'Hotel',
      description: 'Traditional hotel rooms with full service and amenities',
      href: '/hotel',
      image: '/images/rooms/double-deluxe/hero.jpeg',
      features: ['Weekly Cleaning', 'Room Service', 'Breakfast Included'],
    },
    {
      title: 'Hotel Studio',
      description: 'Compact studio-style hotel rooms with modern conveniences',
      href: '/hotel-studio',
      image: '/images/studios/hotel-studio-place-lund-sweden-hero.jpeg',
      features: ['Kitchenette', 'Weekly Cleaning', 'Modern Design'],
    },
    {
      title: 'Apartments',
      description: 'Self-contained studio apartments for extended stays',
      href: '/apartments',
      image: '/images/apartments/apartment-lund-sweden-place-hotel-1.jpg',
      features: ['Full Kitchen', 'Flexible Stay', 'Weekly Cleaning'],
    },
    {
      title: 'Conference',
      description: 'Professional meeting spaces for events and conferences',
      href: '/conference',
      image: '/images/conference/Sofia/conference-room-place-lund-hotel-1.jpeg',
      features: ['Modern Facilities', 'Catering Available', 'Flexible Setup'],
    },
  ]

  return (
    <section className="bg-[#FFFAF2]">
      <div className="bg-[#004225] py-3 px-4 flex items-center justify-center">
        <CurvedLoop
          marqueeText="Choose Your Stay ▲ "
          speed={0.8}
          curveAmount={0}
          direction="left"
          interactive={true}
          className="text-[2.5rem] md:text-[3.5rem]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-screen">
        {properties.map((property) => (
          <Link
            key={property.href}
            href={property.href}
            className="group relative h-[50vh] overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={property.image}
              alt={property.title}
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {property.title}
              </h3>

              <p className="text-white/90 mb-6 leading-relaxed">
                {property.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <span className="text-white font-bold">•</span>
                    <span className="text-sm text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="mt-auto">
                {(property.title === 'Hotel' || property.title === 'Hotel Studio') ? (
                  <span className="inline-block bg-white text-[#004225] py-3 px-6 font-semibold group-hover:bg-[#42001D] group-hover:text-white transition-colors">
                    Book Now
                  </span>
                ) : (
                  <span className="inline-block bg-white text-[#004225] py-3 px-6 font-semibold group-hover:bg-[#42001D] group-hover:text-white transition-colors">
                    Learn More
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
