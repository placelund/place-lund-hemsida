import { NextResponse } from 'next/server'
import { getCustomWeeklyMenuFromSheet } from '@/lib/googleSheets'

export const dynamic = 'force-dynamic'

// Fallback menu data (2-week cycle)
const fallbackMenu = [
  // Week 1
  { week: 1, day: 'Monday', breakfast: 'Continental breakfast with fresh bread and coffee', lunch: 'Grilled chicken with seasonal vegetables', dinner: 'Swedish meatballs with mashed potatoes' },
  { week: 1, day: 'Tuesday', breakfast: 'Continental breakfast with fresh bread and coffee', lunch: 'Pasta carbonara with salad', dinner: 'Pan-fried salmon with rice and vegetables' },
  { week: 1, day: 'Wednesday', breakfast: 'Continental breakfast with fresh bread and coffee', lunch: 'Caesar salad with grilled chicken', dinner: 'Beef stew with root vegetables' },
  { week: 1, day: 'Thursday', breakfast: 'Continental breakfast with fresh bread and coffee', lunch: 'Vegetable soup with bread', dinner: 'Grilled pork chops with potatoes' },
  { week: 1, day: 'Friday', breakfast: 'Continental breakfast with fresh bread and coffee', lunch: 'Fish and chips', dinner: 'Roasted chicken with vegetables' },
  { week: 1, day: 'Saturday', breakfast: 'Continental breakfast with fresh bread and coffee', lunch: 'Burgers with fries', dinner: 'Lasagna with salad' },
  { week: 1, day: 'Sunday', breakfast: 'Continental breakfast with fresh bread and coffee', lunch: 'Sunday roast with Yorkshire pudding', dinner: 'Pizza night - assorted pizzas' },

  // Week 2
  { week: 2, day: 'Monday', breakfast: 'Continental breakfast with fresh bread and coffee', lunch: 'Thai curry with rice', dinner: 'Grilled fish with vegetables' },
  { week: 2, day: 'Tuesday', breakfast: 'Continental breakfast with fresh bread and coffee', lunch: 'Club sandwich with salad', dinner: 'Pasta bolognese' },
  { week: 2, day: 'Wednesday', breakfast: 'Continental breakfast with fresh bread and coffee', lunch: 'Chicken stir-fry with noodles', dinner: 'Swedish hash (Pytt i panna)' },
  { week: 2, day: 'Thursday', breakfast: 'Continental breakfast with fresh bread and coffee', lunch: 'Tomato soup with grilled cheese', dinner: 'BBQ ribs with coleslaw' },
  { week: 2, day: 'Friday', breakfast: 'Continental breakfast with fresh bread and coffee', lunch: 'Tuna salad nicoise', dinner: 'Fish stew with bread' },
  { week: 2, day: 'Saturday', breakfast: 'Continental breakfast with fresh bread and coffee', lunch: 'Tacos with sides', dinner: 'Beef tenderloin with potatoes' },
  { week: 2, day: 'Sunday', breakfast: 'Continental breakfast with fresh bread and coffee', lunch: 'Brunch buffet', dinner: 'Roast lamb with vegetables' },
]

/**
 * Calculate ISO week number
 */
function getISOWeekNumber(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
}

/**
 * Calculate which week we're in based on ISO week number
 * Returns 1 for odd weeks, 2 for even weeks
 */
function getCurrentWeek(): number {
  const now = new Date()
  const isoWeekNumber = getISOWeekNumber(now)

  // If ISO week is odd, return 1 (Odd Weeks)
  // If ISO week is even, return 2 (Even Weeks)
  return (isoWeekNumber % 2 === 1) ? 1 : 2
}

export async function GET() {
  try {
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_WEEKLY_MENU_ID || process.env.GOOGLE_SPREADSHEET_ID

    if (!spreadsheetId) {
      // Return fallback menu if Google Sheets is not configured
      const currentWeek = getCurrentWeek()
      return NextResponse.json({
        menu: fallbackMenu,
        currentWeek,
        source: 'fallback',
      })
    }

    const menu = await getCustomWeeklyMenuFromSheet(spreadsheetId)

    if (!menu || menu.length === 0) {
      // Return fallback if no data
      const currentWeek = getCurrentWeek()
      return NextResponse.json({
        menu: fallbackMenu,
        currentWeek,
        source: 'fallback',
      })
    }

    const currentWeek = getCurrentWeek()

    return NextResponse.json({
      menu,
      currentWeek,
      source: 'google-sheets',
    }, {
      headers: { 'Cache-Control': 'public, max-age=86400' }, // 24h cache as fallback
    })
  } catch (error) {
    console.error('Error fetching weekly menu:', error)

    // Return fallback menu on error
    const currentWeek = getCurrentWeek()
    return NextResponse.json(
      {
        error: 'Failed to fetch menu from Google Sheets',
        menu: fallbackMenu,
        currentWeek,
        source: 'fallback',
      },
      { status: 500 }
    )
  }
}
