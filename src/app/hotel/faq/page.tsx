import Link from 'next/link'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { getCustomFAQsFromSheet } from '@/lib/googleSheets'

export const revalidate = 300

export const metadata = {
  title: 'Hotel FAQ | Place Lund Hotel – Rooms & Services Lund',
  description: 'Answers to common questions about hotel rooms, studios, check-in times, breakfast, parking, pets, and location at Place Lund Hotel in Lund, Sweden. Near Lund University and Lund Central Station.',
}

interface FAQ {
  question: string
  answer: string
}

// Fallback FAQs if Google Sheets is not configured or fails
const fallbackFAQs: FAQ[] = [
  {
    question: 'What time is check-in and check-out?',
    answer: 'Check-in is available from 3:00 PM, and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability.',
  },
  {
    question: 'Are meals included with hotel room bookings?',
    answer: 'Yes, standard hotel rooms include daily breakfast and dinner. However, hotel studios do NOT include meals - they have kitchenettes for self-catering.',
  },
  {
    question: 'Is breakfast included with hotel studio bookings?',
    answer: 'No, hotel studios do NOT include meals. Studios are equipped with kitchenettes for self-catering. Only standard hotel rooms include breakfast and dinner.',
  },
  {
    question: 'Is there free WiFi?',
    answer: 'Yes, free high-speed WiFi is available throughout the hotel, in all rooms, studios, and common areas.',
  },
  {
    question: 'Is there parking available for hotel guests?',
    answer: 'Parking is available for conference guests and attendees. For hotel guest parking inquiries, please contact us directly to discuss options.',
  },
  {
    question: 'What is the difference between a hotel room and a hotel studio?',
    answer: 'Hotel rooms include daily breakfast and dinner service, while hotel studios have kitchenettes for self-catering and do NOT include meals. Studios also offer more space with combined living/sleeping areas.',
  },
  {
    question: 'Are pets allowed?',
    answer: 'Select rooms allow dogs. There is a fee of 250kr per pet for the full stay. No animals are allowed in the dining hall. Please contact us directly when booking to ensure availability.',
  },
  {
    question: 'How far is the hotel from Lund Central Station?',
    answer: 'Place Lund Hotel is conveniently located within walking distance of Lund Central Station, making it easy to access trains to Copenhagen, Malmö, and other destinations in southern Sweden.',
  },
  {
    question: 'Is the hotel close to Lund University?',
    answer: 'Yes, we are located near Lund University and LTH (Faculty of Engineering), making us an ideal choice for university visitors, researchers, and students.',
  },
  {
    question: 'Do you offer weekly cleaning?',
    answer: 'Yes, weekly cleaning service is included with all hotel room and studio bookings.',
  },
  {
    question: 'Can I book a room for just one night?',
    answer: 'Yes, hotel rooms and studios are available for nightly bookings. There is no minimum stay requirement for hotel accommodations.',
  },
  {
    question: 'Do you have accessible rooms?',
    answer: 'Please contact us directly to discuss accessibility requirements and room options that best suit your needs.',
  },
  {
    question: 'Is there a restaurant on-site?',
    answer: 'Yes, we have an on-site restaurant and bar. Breakfast is complimentary for hotel guests (not studio guests). The bar is open from 11 AM to 8 PM daily and is open to both guests and visitors.',
  },
  {
    question: 'Can I cancel or modify my booking?',
    answer: 'Cancellation and modification policies vary depending on your booking type. Please refer to your booking confirmation or contact us directly for assistance.',
  },
  {
    question: 'Do you offer group bookings or conference packages?',
    answer: 'Yes, we offer group accommodation and conference facilities with three meeting rooms (Sofia, Margareta, Sankt Hans). Please visit our Conference or Group Stay pages for more information.',
  },
]

async function getFAQs() {
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

export default async function HotelFAQPage() {
  const faqs = await getFAQs()

  // FAQPage JSON-LD schema — boosts appearance in Google AI Overviews and rich results
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
    <main className="min-h-screen">
      <BreadcrumbSchema items={[{ name: 'Hotel', href: '/hotel' }, { name: 'FAQ', href: '/hotel/faq' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4">
            Hotel FAQ – Place Lund Hotel
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
            Frequently asked questions about our hotel rooms, studios, check-in, meals, and services in Lund, Sweden.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq: FAQ, index: number) => (
              <div
                key={index}
                className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225]/20 hover:border-[#004225] transition-colors"
              >
                <h2 className="text-xl font-bold text-[#004225] mb-3">
                  {faq.question}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-[#004225] text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="mb-6 text-white/90">
              If you can't find the answer you're looking for, please don't hesitate to contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:+4646333600"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors"
              >
                Call: 046 - 33 36 00
              </a>
            </div>
          </div>

          {/* Other Resources */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h4 className="text-xl font-bold text-[#004225] mb-3">Looking for Apartments?</h4>
              <p className="text-gray-700 mb-4">
                Check out our apartment options for longer stays with full kitchens and more space.
              </p>
              <Link
                href="/apartments"
                className="inline-block bg-[#004225] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#42001D] transition-colors"
              >
                View Apartments
              </Link>
            </div>

            <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#004225]">
              <h4 className="text-xl font-bold text-[#004225] mb-3">Need Conference Space?</h4>
              <p className="text-gray-700 mb-4">
                We offer three conference rooms perfect for meetings, events, and group gatherings.
              </p>
              <Link
                href="/conference"
                className="inline-block bg-[#004225] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#42001D] transition-colors"
              >
                Conference Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
