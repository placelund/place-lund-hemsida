import FAQSection from '@/components/sections/FAQSection'

// Revalidate every 5 minutes for dynamic FAQ content
export const revalidate = 300

export const metadata = {
  title: 'Frequently Asked Questions | Place Lund Hotel Lund',
  description: 'Answers to frequently asked questions about Place Lund Hotel in Lund, Sweden. Topics include check-in/check-out times, breakfast, meals, parking, pets, WiFi, location near Lund University, and booking policies.',
}

interface FAQ {
  question: string
  answer: string
}

const fallbackFAQs: FAQ[] = [
  { question: 'What time is check-in and check-out?', answer: 'Check-in is available from 3:00 PM, and check-out is at 11:00 AM.' },
  { question: 'Are meals included with hotel room bookings?', answer: 'Yes, standard hotel rooms include daily breakfast and dinner. Hotel studios do NOT include meals.' },
  { question: 'Is there free WiFi?', answer: 'Yes, free high-speed WiFi is available throughout the hotel.' },
  { question: 'Is there parking available?', answer: 'Free parking is available on-site, including EV charging stations.' },
  { question: 'Are pets allowed?', answer: 'Select rooms allow dogs. There is a fee of 250 SEK per pet for the full stay.' },
]

async function getFAQs(): Promise<FAQ[]> {
  try {
    const isProduction = process.env.NODE_ENV === 'production' && !process.env.VERCEL_URL
    if (isProduction) return fallbackFAQs

    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : (process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000')
    const response = await fetch(`${baseUrl}/api/faq`, {
      next: { revalidate: 300 },
    })

    if (!response.ok) throw new Error('Failed to fetch FAQs')

    const data = await response.json()
    return data.faqs || fallbackFAQs
  } catch (error) {
    console.error('Error fetching FAQs:', error)
    return fallbackFAQs
  }
}

export default async function FAQPage() {
  const faqs = await getFAQs()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq: FAQ) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <main className="min-h-screen pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQSection showCategories={true} />
    </main>
  )
}
