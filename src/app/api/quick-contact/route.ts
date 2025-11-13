import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { google } from 'googleapis'

// Initialize Resend with API key from environment variables
// Use a placeholder key during build if not set
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')

function getGoogleSheetsClient() {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL

  if (!privateKey || !clientEmail) {
    throw new Error('Missing Google Sheets credentials')
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  return google.sheets({ version: 'v4', auth })
}

// Rate limiting map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    // Reset limit
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + 60 * 60 * 1000, // 1 hour
    })
    return true
  }

  if (limit.count >= 5) {
    // Max 5 messages per hour
    return false
  }

  limit.count++
  return true
}

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

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_placeholder') {
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly at info@placelund.se' },
        { status: 503 }
      )
    }

    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { name, email, message, recaptchaToken } = body

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

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Save to Google Sheets
    try {
      const sheets = getGoogleSheetsClient()
      const spreadsheetId = process.env.GOOGLE_SPREADSHEET_CONTACT_ID

      if (spreadsheetId) {
        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: "'Contact Form Data'!A:D",
          valueInputOption: 'RAW',
          requestBody: {
            values: [[new Date().toISOString(), name, email, message]],
          },
        })
      }
    } catch (sheetsError) {
      console.error('Error saving to Google Sheets:', sheetsError)
      // Continue even if sheets fails - don't block the email
    }

    // Send email using Resend
    const { data, error: sendError } = await resend.emails.send({
      from: 'Place Lund Quick Contact <onboarding@resend.dev>', // Change this to your verified domain
      to: ['info@placelund.se'],
      replyTo: email,
      subject: `Quick Contact: Message from ${name}`,
      html: `
        <h2>New Quick Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">
          This message was sent via the Place Lund Hotel Quick Contact form (footer).
        </p>
      `,
    })

    if (sendError) {
      throw new Error(sendError.message)
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Quick contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
