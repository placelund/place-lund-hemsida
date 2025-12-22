import { NextResponse } from 'next/server'
import { getCustomFAQsFromSheet, getFAQAnalyticsFromSheet } from '@/lib/googleSheets'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_FAQ_ID || process.env.GOOGLE_SPREADSHEET_ID

    if (!spreadsheetId) {
      // Return fallback FAQs if Google Sheets is not configured
      return NextResponse.json({
        faqs: [
          {
            question: 'What time is check-in and check-out?',
            answer:
              'Check-in is available from 3:00 PM, and check-out is at 11:00 AM. If you need early check-in or late check-out, please contact us in advance and we will do our best to accommodate your request.',
          },
          {
            question: 'Are meals included with hotel room bookings?',
            answer:
              'Yes, standard hotel rooms include daily breakfast and dinner. However, hotel studios do NOT include meals - they are self-catering with kitchenettes. Apartments also do not include meals as they are designed for self-catering.',
          },
          {
            question: 'Is parking available?',
            answer:
              'Yes, we offer free parking for all guests. Parking is available on-site and does not require advance reservation.',
          },
          {
            question: 'Is WiFi included?',
            answer:
              'Yes, high-speed WiFi is complimentary for all guests throughout the hotel, in all rooms, and in conference facilities.',
          },
          {
            question: 'Are pets allowed?',
            answer:
              'Pets are allowed in specific rooms only. Currently, pets are permitted in Double Deluxe rooms on Floor 2 only. Please inform us at booking if you plan to bring a pet.',
          },
          {
            question: 'How far is Place Lund Hotel from Lund Central Station?',
            answer:
              'We are located approximately 1.5 km from Lund Central Station, which is about a 15-20 minute walk or a 5-minute drive. The train station provides direct connections to Copenhagen, Malmö, and the rest of Sweden.',
          },
          {
            question: 'Is the hotel accessible for guests with disabilities?',
            answer:
              'Yes, we have accessible rooms and facilities. Our ground floor rooms are wheelchair accessible, and we have elevators for upper floors. Please inform us of any specific accessibility requirements when booking.',
          },
          {
            question: 'What is the cancellation policy?',
            answer:
              'Our standard cancellation policy allows free cancellation up to 48 hours before check-in. Cancellations within 48 hours may incur charges. For specific details or special circumstances, please contact us directly.',
          },
          {
            question: 'Do you offer conference facilities?',
            answer:
              'Yes, we have three conference rooms: Sofia (20-30 people), Margareta (30-50 people), and Sankt Hans (10-15 people). All rooms include modern AV equipment, WiFi, and catering options. Contact us for availability and pricing.',
          },
          {
            question: 'Is breakfast served daily?',
            answer:
              'Yes, breakfast is served daily from 7:00 AM to 9:30 AM and is included with standard hotel room bookings. Studios and apartments do not include breakfast.',
          },
          {
            question: 'What restaurants are nearby?',
            answer:
              'Place Lund Hotel has its own restaurant and bar on-site. Lund city center is a short walk away with numerous dining options including Swedish, international, and vegetarian restaurants.',
          },
          {
            question: 'Can I book a room for long-term stay?',
            answer:
              'Yes, we offer discounted rates for extended stays of 7 nights or more. Our hotel studios and apartments are particularly suitable for long-term accommodation. Contact us for special monthly rates.',
          },
          {
            question: 'Do rooms have kitchens?',
            answer:
              'Standard hotel rooms do not have kitchens. Hotel studios have kitchenettes with basic cooking facilities. Apartments (One Bedroom and Studio) have fully equipped kitchens with all appliances.',
          },
          {
            question: 'Is there a gym or fitness center?',
            answer:
              'We do not have an on-site gym, but Sankt Hans Backar Park is right next to the hotel, perfect for jogging and outdoor exercise. We can also recommend nearby fitness centers.',
          },
          {
            question: 'What is the closest university campus?',
            answer:
              'Lund University campuses are within walking distance (10-15 minutes). The Engineering campus (LTH) and main university areas are easily accessible on foot or by bike.',
          },
        ],
        source: 'fallback',
      })
    }

    // Fetch FAQs from all 4 tabs (Column B = Questions, Column C = Answers, starting from row 3 to skip header)
    const [generalFAQs, restaurantFAQs, conferenceFAQs, apartmentFAQs] = await Promise.all([
      getCustomFAQsFromSheet(spreadsheetId, "FAQGeneral!B3:C500"),
      getCustomFAQsFromSheet(spreadsheetId, "FAQRestaurant!B3:C500"),
      getCustomFAQsFromSheet(spreadsheetId, "FAQConference!B3:C500"),
      getCustomFAQsFromSheet(spreadsheetId, "FAQApartment!B3:C500"),
    ])

    // Tag FAQs with their category
    const taggedGeneralFAQs = generalFAQs.map(faq => ({ ...faq, category: 'general' }))
    const taggedRestaurantFAQs = restaurantFAQs.map(faq => ({ ...faq, category: 'restaurant' }))
    const taggedConferenceFAQs = conferenceFAQs.map(faq => ({ ...faq, category: 'conference' }))
    const taggedApartmentFAQs = apartmentFAQs.map(faq => ({ ...faq, category: 'apartment' }))

    // Combine all FAQs
    const allFAQs = [...taggedGeneralFAQs, ...taggedRestaurantFAQs, ...taggedConferenceFAQs, ...taggedApartmentFAQs]

    // Get analytics data from Google Sheets and merge with FAQs
    const analytics = await getFAQAnalyticsFromSheet(spreadsheetId)
    const faqsWithClicks = allFAQs.map(faq => ({
      ...faq,
      clickCount: analytics[faq.question] || 0,
    }))

    // Sort by click count (descending)
    const sortedFAQs = faqsWithClicks.sort((a, b) => b.clickCount - a.clickCount)

    return NextResponse.json({
      faqs: sortedFAQs,
      source: 'google-sheets',
      categories: {
        general: sortedFAQs.filter(faq => faq.category === 'general'),
        restaurant: sortedFAQs.filter(faq => faq.category === 'restaurant'),
        conference: sortedFAQs.filter(faq => faq.category === 'conference'),
        apartment: sortedFAQs.filter(faq => faq.category === 'apartment'),
      },
    })
  } catch (error) {
    console.error('Error fetching FAQs:', error)

    // Return fallback FAQs on error
    return NextResponse.json(
      {
        error: 'Failed to fetch FAQs from Google Sheets',
        faqs: [
          {
            question: 'What time is check-in and check-out?',
            answer:
              'Check-in is available from 3:00 PM, and check-out is at 11:00 AM. If you need early check-in or late check-out, please contact us in advance and we will do our best to accommodate your request.',
          },
          {
            question: 'Are meals included with hotel room bookings?',
            answer:
              'Yes, standard hotel rooms include daily breakfast and dinner. However, hotel studios do NOT include meals - they are self-catering with kitchenettes. Apartments also do not include meals as they are designed for self-catering.',
          },
          {
            question: 'Is parking available?',
            answer:
              'Yes, we offer free parking for all guests. Parking is available on-site and does not require advance reservation.',
          },
        ],
        source: 'fallback',
      },
      { status: 500 }
    )
  }
}
