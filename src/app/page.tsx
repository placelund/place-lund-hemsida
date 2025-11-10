import HeroSection from '@/components/sections/HeroSection'
import PropertySelection from '@/components/sections/PropertySelection'
import LocationMap from '@/components/sections/LocationMap'
import FAQSection from '@/components/sections/FAQSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PropertySelection />
      <LocationMap />
      <FAQSection />
    </main>
  )
}
