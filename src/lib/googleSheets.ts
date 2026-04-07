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
    scopes: ['https://www.googleapis.com/auth/spreadsheets'], // Full read/write access for analytics
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

/**
 * Fetch FAQs from custom Google Sheets format
 * Expected columns: A = numbered question (e.g., "1 What meals...") | B = answer
 * @param spreadsheetId - The ID of the Google Spreadsheet
 * @param range - The range to read (e.g., 'FAQ!A2:B')
 */
export async function getCustomFAQsFromSheet(
  spreadsheetId: string,
  range: string = 'FAQ!A2:B'
): Promise<FAQ[]> {
  const sheets = getGoogleSheetsClient()

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  })

  const rows = response.data.values || []

  const faqs: FAQ[] = rows
    .map((row, index) => {
      const questionText = row[0] || ''
      const answerText = row[1] || ''

      // Remove number prefix from question (e.g., "1 What meals..." -> "What meals...")
      const cleanQuestion = questionText.replace(/^\d+\s*/, '').trim()

      return {
        question: cleanQuestion,
        answer: answerText,
        order: index + 1,
        published: true, // All rows are considered published
      }
    })
    .filter((faq) => faq.question && faq.answer) // Only include FAQs with both question and answer

  return faqs
}

/**
 * Fetch Weekly Menu from custom Google Sheets format with separate Odd/Even week tabs
 * Expected columns: A = Day | B = Dish
 * @param spreadsheetId - The ID of the Google Spreadsheet
 */
export async function getCustomWeeklyMenuFromSheet(
  spreadsheetId: string
): Promise<WeeklyMenuItem[]> {
  const sheets = getGoogleSheetsClient()

  // Fetch both odd and even week menus
  const [oddWeekResponse, evenWeekResponse] = await Promise.all([
    sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "MenuOddWeek!A3:B100",
    }),
    sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "MenuEvenWeek!A3:B100",
    }),
  ])

  const oddWeekRows = oddWeekResponse.data.values || []
  const evenWeekRows = evenWeekResponse.data.values || []

  const weeklyMenu: WeeklyMenuItem[] = []

  // Process odd week (week 1)
  oddWeekRows.forEach((row) => {
    const day = (row[0] || '').trim()
    const dish = (row[1] || '').trim()

    if (day && dish) {
      weeklyMenu.push({
        week: 1,
        day,
        breakfast: '',
        lunch: dish,
        dinner: '',
      })
    }
  })

  // Process even week (week 2)
  evenWeekRows.forEach((row) => {
    const day = (row[0] || '').trim()
    const dish = (row[1] || '').trim()

    if (day && dish) {
      weeklyMenu.push({
        week: 2,
        day,
        breakfast: '',
        lunch: dish,
        dinner: '',
      })
    }
  })

  return weeklyMenu
}

/**
 * Get FAQ analytics from Google Sheets
 * Expected columns: A = Question | B = Click Count
 * @param spreadsheetId - The ID of the Google Spreadsheet
 */
export async function getFAQAnalyticsFromSheet(
  spreadsheetId: string
): Promise<Record<string, number>> {
  const sheets = getGoogleSheetsClient()

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "'FAQ - Analytics'!A2:B",
    })

    const rows = response.data.values || []
    const analytics: Record<string, number> = {}

    rows.forEach((row) => {
      const question = row[0] || ''
      const clickCount = parseInt(row[1]) || 0
      if (question) {
        analytics[question] = clickCount
      }
    })

    return analytics
  } catch (error) {
    // If sheet doesn't exist or has no data, return empty object
    console.log('FAQ Analytics sheet not found or empty, returning empty analytics')
    return {}
  }
}

/**
 * Update FAQ analytics in Google Sheets
 * @param spreadsheetId - The ID of the Google Spreadsheet
 * @param question - The FAQ question that was clicked
 */
export async function updateFAQAnalytics(
  spreadsheetId: string,
  question: string
): Promise<void> {
  const sheets = getGoogleSheetsClient()

  try {
    // First, read all existing analytics
    const analytics = await getFAQAnalyticsFromSheet(spreadsheetId)

    // Update the click count for this question
    analytics[question] = (analytics[question] || 0) + 1

    // Convert back to array format for Google Sheets
    const data = Object.entries(analytics).map(([q, count]) => [q, count])

    // Write back to the sheet (clear and rewrite)
    await sheets.spreadsheets.values.clear({
      spreadsheetId,
      range: "'FAQ - Analytics'!A2:B",
    })

    if (data.length > 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: "'FAQ - Analytics'!A2:B",
        valueInputOption: 'RAW',
        requestBody: {
          values: data,
        },
      })
    }
  } catch (error) {
    console.error('Error updating FAQ analytics:', error)
    throw error
  }
}

interface FAQStatistics {
  category: string
  totalQuestions: number
  totalClicks: number
  avgClicksPerQuestion: number
  topQuestion: string
  topQuestionClicks: number
}

/**
 * Submit FAQ request to Google Sheets
 * @param spreadsheetId - The ID of the Google Spreadsheet
 * @param question - The question they want answered
 * @param name - User's name (required)
 * @param email - User's email (required)
 */
export async function submitFAQRequest(
  spreadsheetId: string,
  question: string,
  name: string,
  email: string
): Promise<void> {
  const sheets = getGoogleSheetsClient()

  try {
    const timestamp = new Date().toISOString()

    // Append the new request to the FAQ - Requests sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "'FAQ - Requests'!A:D",
      valueInputOption: 'RAW',
      requestBody: {
        values: [[timestamp, name, email, question]],
      },
    })

    console.log('FAQ request submitted successfully')
  } catch (error) {
    console.error('Error submitting FAQ request:', error)
    throw error
  }
}

/**
 * Calculate and write FAQ statistics to Google Sheets
 * @param spreadsheetId - The ID of the Google Spreadsheet
 */
export async function updateFAQStatistics(spreadsheetId: string): Promise<void> {
  const sheets = getGoogleSheetsClient()

  try {
    // Fetch all FAQs with their categories
    const [generalFAQs, restaurantFAQs, conferenceFAQs, apartmentFAQs] = await Promise.all([
      getCustomFAQsFromSheet(spreadsheetId, "FAQGeneral!B3:C500"),
      getCustomFAQsFromSheet(spreadsheetId, "FAQRestaurant!B3:C500"),
      getCustomFAQsFromSheet(spreadsheetId, "FAQConference!B3:C500"),
      getCustomFAQsFromSheet(spreadsheetId, "FAQApartment!B3:C500"),
    ])

    // Get analytics data
    const analytics = await getFAQAnalyticsFromSheet(spreadsheetId)

    // Calculate statistics for each category
    const calculateCategoryStats = (faqs: FAQ[], categoryName: string): FAQStatistics => {
      const faqsWithClicks = faqs.map(faq => ({
        question: faq.question,
        clicks: analytics[faq.question] || 0,
      }))

      const totalClicks = faqsWithClicks.reduce((sum, faq) => sum + faq.clicks, 0)
      const sortedByClicks = [...faqsWithClicks].sort((a, b) => b.clicks - a.clicks)
      const topFAQ = sortedByClicks[0]

      return {
        category: categoryName,
        totalQuestions: faqs.length,
        totalClicks,
        avgClicksPerQuestion: faqs.length > 0 ? Math.round(totalClicks / faqs.length) : 0,
        topQuestion: topFAQ?.question || 'N/A',
        topQuestionClicks: topFAQ?.clicks || 0,
      }
    }

    const generalStats = calculateCategoryStats(generalFAQs, 'General')
    const restaurantStats = calculateCategoryStats(restaurantFAQs, 'Restaurant')
    const conferenceStats = calculateCategoryStats(conferenceFAQs, 'Conference')
    const apartmentStats = calculateCategoryStats(apartmentFAQs, 'Apartment')

    // Calculate overall statistics
    const allFAQs = [...generalFAQs, ...restaurantFAQs, ...conferenceFAQs, ...apartmentFAQs]
    const overallStats = calculateCategoryStats(allFAQs, 'Overall')

    // Prepare data for Google Sheets
    const statsData = [
      ['Category', 'Total Questions', 'Total Clicks', 'Avg Clicks/Question', 'Top Question', 'Top Question Clicks'],
      [overallStats.category, overallStats.totalQuestions, overallStats.totalClicks, overallStats.avgClicksPerQuestion, overallStats.topQuestion, overallStats.topQuestionClicks],
      ['', '', '', '', '', ''], // Empty row separator
      [generalStats.category, generalStats.totalQuestions, generalStats.totalClicks, generalStats.avgClicksPerQuestion, generalStats.topQuestion, generalStats.topQuestionClicks],
      [restaurantStats.category, restaurantStats.totalQuestions, restaurantStats.totalClicks, restaurantStats.avgClicksPerQuestion, restaurantStats.topQuestion, restaurantStats.topQuestionClicks],
      [conferenceStats.category, conferenceStats.totalQuestions, conferenceStats.totalClicks, conferenceStats.avgClicksPerQuestion, conferenceStats.topQuestion, conferenceStats.topQuestionClicks],
      [apartmentStats.category, apartmentStats.totalQuestions, apartmentStats.totalClicks, apartmentStats.avgClicksPerQuestion, apartmentStats.topQuestion, apartmentStats.topQuestionClicks],
    ]

    // Write to FAQ - Statistic sheet
    await sheets.spreadsheets.values.clear({
      spreadsheetId,
      range: "'FAQ - Statistic'!A1:F",
    })

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: "'FAQ - Statistic'!A1:F",
      valueInputOption: 'RAW',
      requestBody: {
        values: statsData,
      },
    })

    console.log('FAQ statistics updated successfully')
  } catch (error) {
    console.error('Error updating FAQ statistics:', error)
    throw error
  }
}
