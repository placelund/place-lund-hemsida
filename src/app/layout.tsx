import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import PlaceLundNav from '@/components/layout/PlaceLundNav'
import FooterSection from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Place Lund Hotel | Hotel, Apartments & Conference in Lund',
  description: 'Place Lund Hotel — 3-star hotel in northern Lund, Sweden. Hotel rooms with breakfast & dinner included, furnished apartments, hotel studios, and conference rooms for 10–90 people. Near Lund University and LTH.',
}

const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    // ─── Hotel ───────────────────────────────────────────────────────────────
    {
      '@type': 'Hotel',
      '@id': 'https://placelund.se/#hotel',
      name: 'Place Lund Hotel',
      description: 'A 3-star hotel in northern Lund, Sweden. Hotellrum med frukost och middag ingår. Konferensrum för 10–90 personer. Möblerade lägenheter för korttidsboende. Located near Lund University, LTH, and Sankt Hans Backar Park.',
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
        addressRegion: 'Skåne',
        addressCountry: 'SE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 55.719594,
        longitude: 13.194962,
      },
      hasMap: 'https://maps.google.com/?q=Place+Lund+Hotel,Margaretavägen+7,Lund',
      priceRange: '$$',
      currenciesAccepted: 'SEK',
      paymentAccepted: 'Credit Card, Cash',
      checkinTime: '15:00',
      checkoutTime: '11:00',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      ],
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Bar', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Conference facilities', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'EV Charging', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Garden', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Breakfast Included', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Dinner Included', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Non-Smoking', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Pets Allowed', value: true },
      ],
      areaServed: {
        '@type': 'City',
        name: 'Lund',
        addressCountry: 'SE',
      },
      image: [
        {
          '@type': 'ImageObject',
          url: 'https://placelund.se/images/og-default.jpg',
          width: 1200,
          height: 630,
        },
      ],
      // NOTE: Update sameAs URLs when social media profiles are created
      sameAs: [
        'https://www.google.com/maps/place/Place+Lund+Hotel',
      ],
    },
    // ─── WebSite ──────────────────────────────────────────────────────────────
    {
      '@type': 'WebSite',
      '@id': 'https://placelund.se/#website',
      name: 'Place Lund Hotel',
      url: 'https://placelund.se',
      description: 'Official website of Place Lund Hotel — hotel rooms, apartments, conference rooms, and restaurant in Lund, Sweden.',
      inLanguage: 'en',
      publisher: { '@id': 'https://placelund.se/#organization' },
    },
    // ─── Organization ─────────────────────────────────────────────────────────
    {
      '@type': 'Organization',
      '@id': 'https://placelund.se/#organization',
      name: 'Place Lund Hotel',
      url: 'https://placelund.se',
      telephone: '+4646333600',
      email: 'info@placelund.se',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Margaretavägen 7',
        addressLocality: 'Lund',
        postalCode: '222 40',
        addressRegion: 'Skåne',
        addressCountry: 'SE',
      },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <PlaceLundNav />
        {children}
        <FooterSection />
      </body>
    </html>
  )
}
