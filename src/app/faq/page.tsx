import FAQSection from '@/components/sections/FAQSection'

export const metadata = {
  title: 'Frequently Asked Questions - Place Lund Hotel',
  description: 'Find answers to common questions about Place Lund Hotel including check-in times, meals, WiFi, and more.',
}

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-24">
      <FAQSection showCategories={true} />
    </main>
  )
}
