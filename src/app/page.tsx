import HeroSection from '@/components/sections/HeroSection'
import PropertySelection from '@/components/sections/PropertySelection'
import DailyMenu from '@/components/sections/DailyMenu'
import LocationMap from '@/components/sections/LocationMap'
import FAQSection from '@/components/sections/FAQSection'

// Force dynamic rendering to prevent SSG fetch issues
export const dynamic = 'force-dynamic'

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
