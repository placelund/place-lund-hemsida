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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PlaceLundNav />
        {children}
        <FooterSection />
      </body>
    </html>
  )
}
