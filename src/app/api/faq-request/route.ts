import { NextResponse } from 'next/server'
import { submitFAQRequest } from '@/lib/googleSheets'

export const dynamic = 'force-dynamic'

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.error('reCAPTCHA secret key not configured')
    return false
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    return data.success === true
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error)
    return false
  }
}

export async function POST(request: Request) {
  try {
    const { question, name, email, recaptchaToken } = await request.json()

    // Verify reCAPTCHA
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'Please complete the reCAPTCHA verification' },
        { status: 400 }
      )
    }

    const isHuman = await verifyRecaptcha(recaptchaToken)
    if (!isHuman) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      )
    }

    if (!question || question.trim().length === 0) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      )
    }

    if (!name || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    if (!email || email.trim().length === 0) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
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

    // Submit to Google Sheets
    await submitFAQRequest(spreadsheetId, question.trim(), name.trim(), email.trim())

    return NextResponse.json({
      success: true,
      message: 'Your question has been submitted successfully!',
    })
  } catch (error) {
    console.error('Error submitting FAQ request:', error)
    return NextResponse.json(
      { error: 'Failed to submit FAQ request' },
      { status: 500 }
    )
  }
}
