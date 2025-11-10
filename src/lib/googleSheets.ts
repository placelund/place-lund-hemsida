import { google } from 'googleapis'

export interface FAQ {
  question: string
  answer: string
  order: number
  published: boolean
}

export interface MenuItem {
  name: string
  description: string
  price: string
  category: string
  order: number
  published: boolean
}

export interface WeeklyMenuItem {
  week: number // 1 or 2
  day: string // Monday, Tuesday, etc.
  breakfast: string
  lunch: string
  dinner: string
}

/**
 * Get Google Sheets client
 * Requires environment variables:
 * - GOOGLE_SHEETS_PRIVATE_KEY
 * - GOOGLE_SHEETS_CLIENT_EMAIL
 */
function getGoogleSheetsClient() {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL

  if (!privateKey || !clientEmail) {
    throw new Error('Missing Google Sheets credentials')
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  })

  return google.sheets({ version: 'v4', auth })
}

/**
 * Fetch FAQs from Google Sheets
 * Expected columns: question | answer | order | published
 * @param spreadsheetId - The ID of the Google Spreadsheet
 * @param range - The range to read (e.g., 'FAQs!A2:D')
 */
export async function getFAQsFromSheet(
  spreadsheetId: string,
  range: string = 'FAQs!A2:D'
): Promise<FAQ[]> {
  const sheets = getGoogleSheetsClient()

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  })

  const rows = response.data.values || []

  const faqs: FAQ[] = rows
    .map((row) => ({
      question: row[0] || '',
      answer: row[1] || '',
      order: parseInt(row[2]) || 0,
      published: row[3]?.toLowerCase() === 'true' || row[3] === '1',
    }))
    .filter((faq) => faq.published && faq.question && faq.answer)
    .sort((a, b) => a.order - b.order)

  return faqs
}

/**
 * Fetch Menu Items from Google Sheets
 * Expected columns: name | description | price | category | order | published
 * @param spreadsheetId - The ID of the Google Spreadsheet
 * @param range - The range to read (e.g., 'Menu!A2:F')
 */
export async function getMenuFromSheet(
  spreadsheetId: string,
  range: string = 'Menu!A2:F'
): Promise<MenuItem[]> {
  const sheets = getGoogleSheetsClient()

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  })

  const rows = response.data.values || []

  const menuItems: MenuItem[] = rows
    .map((row) => ({
      name: row[0] || '',
      description: row[1] || '',
      price: row[2] || '',
      category: row[3] || '',
      order: parseInt(row[4]) || 0,
      published: row[5]?.toLowerCase() === 'true' || row[5] === '1',
    }))
    .filter((item) => item.published && item.name && item.price)
    .sort((a, b) => a.order - b.order)

  return menuItems
}

/**
 * Fetch Weekly Menu from Google Sheets
 * Expected columns: week | day | breakfast | lunch | dinner
 * @param spreadsheetId - The ID of the Google Spreadsheet
 * @param range - The range to read (e.g., 'WeeklyMenu!A2:E')
 */
export async function getWeeklyMenuFromSheet(
  spreadsheetId: string,
  range: string = 'WeeklyMenu!A2:E'
): Promise<WeeklyMenuItem[]> {
  const sheets = getGoogleSheetsClient()

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  })

  const rows = response.data.values || []

  const weeklyMenu: WeeklyMenuItem[] = rows
    .map((row) => ({
      week: parseInt(row[0]) || 1,
      day: row[1] || '',
      breakfast: row[2] || '',
      lunch: row[3] || '',
      dinner: row[4] || '',
    }))
    .filter((item) => item.day && (item.breakfast || item.lunch || item.dinner))

  return weeklyMenu
}
