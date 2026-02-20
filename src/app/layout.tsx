import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import PlaceLundNav from '@/components/layout/PlaceLundNav'
import FooterSection from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Place Lund - Hotel & Studios in Lund, Sweden',
  description: 'Experience comfort and convenience at Place Lund. Choose between our hotel rooms or studio apartments in Lund, Sweden.',
}

const hotelSchema = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Place Lund Hotel',
  description: 'A 3-star hotel offering hotel rooms, studios, and apartments in Lund, Sweden. Includes restaurant, bar, and conference facilities.',
  url: 'https://placelund.se',
  telephone: '+4646333600',
  email: 'info@placelund.se',
  starRating: {
    '@type': 'Rating',
    ratingValue: '3',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Margaretavägen 7',
    addressLocality: 'Lund',
    postalCode: '222 40',
    addressCountry: 'SE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 55.719594,
    longitude: 13.194962,
  },
  priceRange: '$$',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Bar', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Conference facilities', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Garden', value: true },
  ],
  checkinTime: 'T15:00',
  checkoutTime: 'T11:00',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
        <PlaceLundNav />
        {children}
        <FooterSection />
      </body>
    </html>
  )
}
