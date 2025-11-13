import { NextResponse } from 'next/server'
import { getFAQAnalyticsFromSheet, updateFAQAnalytics, updateFAQStatistics } from '@/lib/googleSheets'

export const dynamic = 'force-dynamic'

// POST: Track a FAQ click
export async function POST(request: Request) {
  try {
    const { question } = await request.json()

    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      )
    }

    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_FAQ_ID || process.env.GOOGLE_SPREADSHEET_ID

    if (!spreadsheetId) {
      return NextResponse.json(
        { error: 'Google Sheets not configured' },
        { status: 500 }
      )
    }

    await updateFAQAnalytics(spreadsheetId, question)

    // Update statistics after tracking the click
    try {
      await updateFAQStatistics(spreadsheetId)
    } catch (statsError) {
      // Log error but don't fail the request
      console.error('Error updating FAQ statistics:', statsError)
    }

    return NextResponse.json({
      success: true,
      question,
    })
  } catch (error) {
    console.error('Error tracking FAQ click:', error)
    return NextResponse.json(
      { error: 'Failed to track FAQ click' },
      { status: 500 }
    )
  }
}

// GET: Get analytics data
export async function GET() {
  try {
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_FAQ_ID || process.env.GOOGLE_SPREADSHEET_ID

    if (!spreadsheetId) {
      return NextResponse.json({})
    }

    const analytics = await getFAQAnalyticsFromSheet(spreadsheetId)
    return NextResponse.json(analytics)
  } catch (error) {
    console.error('Error fetching FAQ analytics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}
