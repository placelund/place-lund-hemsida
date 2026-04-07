import FAQSection from '@/components/sections/FAQSection'
import { getCustomFAQsFromSheet } from '@/lib/googleSheets'

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
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_FAQ_ID || process.env.GOOGLE_SPREADSHEET_ID
    if (!spreadsheetId) return fallbackFAQs

    const [generalFAQs, restaurantFAQs, conferenceFAQs, apartmentFAQs] = await Promise.all([
      getCustomFAQsFromSheet(spreadsheetId, "FAQGeneral!B3:C500"),
      getCustomFAQsFromSheet(spreadsheetId, "FAQRestaurant!B3:C500"),
      getCustomFAQsFromSheet(spreadsheetId, "FAQConference!B3:C500"),
      getCustomFAQsFromSheet(spreadsheetId, "FAQApartment!B3:C500"),
    ])

    const allFAQs = [...generalFAQs, ...restaurantFAQs, ...conferenceFAQs, ...apartmentFAQs]
    return allFAQs.length > 0 ? allFAQs : fallbackFAQs
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
