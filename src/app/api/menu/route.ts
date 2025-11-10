import { NextResponse } from 'next/server'
import { getMenuFromSheet } from '@/lib/googleSheets'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID

    if (!spreadsheetId) {
      // Return fallback menu if Google Sheets is not configured
      return NextResponse.json({
        menu: [
          {
            name: 'Place Frukost',
            description: 'Our signature breakfast',
            price: '63 kr',
            category: 'Breakfast',
            order: 1,
          },
          {
            name: 'Varm Lunch',
            description: 'Hot lunch with daily special',
            price: '210 kr',
            category: 'Lunch',
            order: 2,
          },
          {
            name: 'Package Offer',
            description: 'Full day conference package',
            price: '600 kr',
            category: 'Conference',
            order: 3,
          },
          {
            name: 'Kaffe med Bakverk',
            description: 'Coffee with pastry',
            price: '62 kr',
            category: 'Coffee & Snacks',
            order: 4,
          },
          {
            name: 'Kaffe med Småkaka',
            description: 'Coffee with cookie',
            price: '35 kr',
            category: 'Coffee & Snacks',
            order: 5,
          },
        ],
        source: 'fallback',
      })
    }

    const menuItems = await getMenuFromSheet(spreadsheetId)

    return NextResponse.json({
      menu: menuItems,
      source: 'google-sheets',
    })
  } catch (error) {
    console.error('Error fetching menu:', error)

    // Return fallback menu on error
    return NextResponse.json(
      {
        error: 'Failed to fetch menu from Google Sheets',
        menu: [
          {
            name: 'Place Frukost',
            description: 'Our signature breakfast',
            price: '63 kr',
            category: 'Breakfast',
            order: 1,
          },
          {
            name: 'Varm Lunch',
            description: 'Hot lunch with daily special',
            price: '210 kr',
            category: 'Lunch',
            order: 2,
          },
          {
            name: 'Kaffe med Bakverk',
            description: 'Coffee with pastry',
            price: '62 kr',
            category: 'Coffee & Snacks',
            order: 3,
          },
        ],
        source: 'fallback',
      },
      { status: 500 }
    )
  }
}
