'use client'

import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps'

// Place Lund Hotel actual location: Margaretavägen 7, 222 40 Lund
const HOTEL_LOCATION = {
  lat: 55.719594474422344,
  lng: 13.194961555876336,
}

// Nearby points of interest with exact coordinates
const LOCATIONS = {
  hotel: {
    position: { lat: 55.719594474422344, lng: 13.194961555876336 },
    title: 'Place Lund Hotel',
    color: '#DC2626', // Red
  },
  park: {
    position: { lat: 55.721788002632806, lng: 13.19425345266742 },
    title: 'Sankt Hans Backar',
    color: '#9333EA', // Purple
  },
  groceryStore: {
    position: { lat: 55.720561334013425, lng: 13.205443628759316 },
    title: 'Grocery Store (Lidl)',
    color: '#2563EB', // Blue
  },
  busStop: {
    position: { lat: 55.71696570396899, lng: 13.194918640372698 },
    title: 'Bus Stop',
    color: '#16A34A', // Green
  },
  university: {
    position: { lat: 55.711990581956705, lng: 13.203535913548748 },
    title: 'Lund University',
    color: '#EAB308', // Yellow
  },
  parkingLot: {
    position: { lat: 55.72057922124424, lng: 13.194596259696972 },
    title: 'Parking + EV Charge',
    color: '#F97316', // Orange
  },
}

export default function LocationMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

  if (!apiKey || apiKey === 'YOUR_NEW_API_KEY_HERE' || apiKey === 'YOUR_API_KEY_HERE') {
    return (
      <section className="py-20 px-4 bg-[#FFFAF2]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004225] mb-4">
              Our Location
            </h2>
            <p className="text-xl text-gray-700">
              Find us in northern Lund
            </p>
          </div>
          <div className="bg-[#FFFAF2] rounded-2xl p-8 text-center">
            <p className="text-gray-700">
              Google Maps API key not configured. Add your API key to .env.local to display the map.
            </p>
            <div className="mt-6 text-left max-w-md mx-auto">
              <h3 className="font-bold text-[#004225] mb-2">Place Lund Hotel</h3>
              <p className="text-gray-700">Margaretavägen 7</p>
              <p className="text-gray-700">222 40 Lund, Sweden</p>
              <p className="mt-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Margaretavägen+7,+222+40+Lund,+Sweden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#004225] hover:text-[#42001D] underline"
                >
                  View on Google Maps →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 bg-[#FFFAF2]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#004225] mb-4">
            Our Location
          </h2>
          <p className="text-xl text-gray-700">
            Find us in northern Lund
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl" style={{ height: '500px' }}>
          <APIProvider apiKey={apiKey}>
            <Map
              defaultCenter={HOTEL_LOCATION}
              defaultZoom={15}
              mapId="place-lund-hotel-map"
              style={{ width: '100%', height: '100%' }}
            >
              {/* Render all location markers */}
              {Object.entries(LOCATIONS).map(([key, location]) => (
                <AdvancedMarker
                  key={key}
                  position={location.position}
                  title={location.title}
                >
                  <Pin
                    background={location.color}
                    borderColor={'#000000'}
                    glyphColor={'#FFFFFF'}
                  />
                </AdvancedMarker>
              ))}
            </Map>
          </APIProvider>
        </div>

        {/* Map Legend */}
        <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-[#004225]/20">
          <h3 className="text-lg font-semibold text-[#004225] mb-3">Map Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {Object.entries(LOCATIONS).map(([key, location]) => (
              <div key={key} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full border-2 border-black"
                  style={{ backgroundColor: location.color }}
                />
                <span className="text-sm text-gray-700">{location.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-[#FFFAF2] rounded-xl p-6 border-2 border-[#004225]">
            <h3 className="text-2xl font-bold text-[#004225] mb-4">
              Place Lund Hotel
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 text-[#004225] flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <p className="font-semibold text-[#004225]">Address</p>
                  <p>Margaretavägen 7</p>
                  <p>222 40 Lund, Sweden</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 text-[#004225] flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div>
                  <p className="font-semibold text-[#004225]">Phone</p>
                  <a href="tel:+46463336 00" className="hover:text-[#42001D] transition-colors">
                    046 - 33 36 00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 text-[#004225] flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <p className="font-semibold text-[#004225]">Email</p>
                  <a href="mailto:info@placelund.se" className="hover:text-[#42001D] transition-colors">
                    info@placelund.se
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFAF2] rounded-xl p-6 border-2 border-[#004225]">
            <h3 className="text-2xl font-bold text-[#004225] mb-4">
              Getting Here
            </h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-[#004225] mb-1">From Lund Central Station</p>
                <p className="text-sm">15-20 minute walk or 5 minute drive (1.5 km)</p>
              </div>
              <div>
                <p className="font-semibold text-[#004225] mb-1">From Copenhagen Airport</p>
                <p className="text-sm">40 minutes by train + 5 minute taxi</p>
              </div>
              <div>
                <p className="font-semibold text-[#004225] mb-1">From Malmö</p>
                <p className="text-sm">15 minutes by train</p>
              </div>
              <div>
                <p className="font-semibold text-[#004225] mb-1">Parking</p>
                <p className="text-sm">Free on-site parking available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
