import HeroSection from '@/components/sections/HeroSection'
import PropertySelection from '@/components/sections/PropertySelection'
import DailyMenu from '@/components/sections/DailyMenu'
import LocationMap from '@/components/sections/LocationMap'
import FAQSection from '@/components/sections/FAQSection'
import { generateMetadata } from '@/lib/seo/metadata'
import { PAGE_METADATA } from '@/lib/seo/page-metadata'

// Revalidate every 5 minutes for dynamic content (menu, FAQ)
export const revalidate = 300

// SEO Metadata
export const metadata = generateMetadata(PAGE_METADATA.home)

export default function Home() {
  return (
    <main>
      <HeroSection />

      <PropertySelection />
      <DailyMenu />
      <LocationMap />
      <FAQSection showFAQPageButton={true} />
    </main>
  )
}
