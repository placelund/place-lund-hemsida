import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key from environment variables
// Use a placeholder key during build if not set
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')

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
    const { email, subject, message, gdprConsent } = body

    // Validation
    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!gdprConsent) {
      return NextResponse.json(
        { error: 'GDPR consent is required' },
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

    // Send email using Resend
    const { data, error: sendError } = await resend.emails.send({
      from: 'Place Lund Contact Form <onboarding@resend.dev>', // Change this to your verified domain
      to: ['info@placelund.se'],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">
          This message was sent via the Place Lund Hotel contact form.<br>
          GDPR consent was provided by the sender.
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
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
