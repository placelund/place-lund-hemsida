'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import LocationMap from '@/components/sections/LocationMap'
import BookingLink from '@/components/BookingLink'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
    gdprConsent: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

  // Load reCAPTCHA v3 script only if not already loaded
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    if (!siteKey) return

    // Check if reCAPTCHA script is already loaded
    const existingScript = document.querySelector('script[src*="recaptcha"]')
    if (existingScript) return

    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    return () => {
      // Don't remove script as it might be used by other components
    }
  }, [])

  const handleSendClick = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form first
    if (!formData.email || !formData.subject || !formData.message || !formData.gdprConsent) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields')
      return
    }

    // Get reCAPTCHA v3 token
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    if (!siteKey) {
      setStatus('error')
      setErrorMessage('reCAPTCHA not configured')
      return
    }

    try {
      setStatus('loading')
      setErrorMessage('')

      // Execute reCAPTCHA v3
      await new Promise(resolve => {
        if ((window as any).grecaptcha?.ready) {
          (window as any).grecaptcha.ready(resolve)
        } else {
          // If not ready yet, wait a bit and try again
          setTimeout(resolve, 1000)
        }
      })

      const token = await (window as any).grecaptcha.execute(siteKey, {
        action: 'contact_form'
      })

      setRecaptchaToken(token)
      handleActualSubmit(token)
    } catch (error) {
      setStatus('error')
      setErrorMessage('reCAPTCHA verification failed. Please try again.')
      console.error('reCAPTCHA error:', error)
    }
  }

  const handleActualSubmit = async (token?: string) => {
    setStatus('loading')
    setErrorMessage('')

    const finalToken = token || recaptchaToken

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: finalToken,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ email: '', subject: '', message: '', gdprConsent: false })
      setRecaptchaToken(null)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
      setRecaptchaToken(null)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 px-4 bg-[#FFFAF2] pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4 text-shadow-outline">
            A Place to Connect
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
            Get in touch with Place Lund Hotel. We're here to help with your accommodation needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#004225] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSendClick} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#004225] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#004225] focus:outline-none transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#004225] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {/* GDPR Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="gdprConsent"
                    name="gdprConsent"
                    required
                    checked={formData.gdprConsent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-[#004225] border-gray-300 rounded focus:ring-[#004225]"
                  />
                  <label htmlFor="gdprConsent" className="text-sm text-gray-700">
                    I consent to Place Lund Hotel processing my personal data to respond to my inquiry.
                    See our <Link href="/gdpr" className="text-[#004225] underline hover:text-[#42001D]">Privacy Policy</Link> for more information.
                  </label>
                </div>

                {/* reCAPTCHA v3 runs in background - no UI needed */}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#004225] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-md">
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm">We'll get back to you as soon as possible.</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-md">
                    <p className="font-semibold">Error sending message</p>
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#004225] mb-6">Contact Information</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225]">
                  <h3 className="font-bold text-[#004225] mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    Address
                  </h3>
                  <p className="text-gray-700">
                    Place Lund Hotel<br />
                    Margaretavägen 7<br />
                    222 40 Lund, Sweden
                  </p>
                </div>

                {/* Phone */}
                <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225]">
                  <h3 className="font-bold text-[#004225] mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    Phone
                  </h3>
                  <a href="tel:+4646333600" className="text-[#004225] hover:text-[#42001D] font-semibold">
                    046 - 33 36 00
                  </a>
                </div>

                {/* Email */}
                <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225]">
                  <h3 className="font-bold text-[#004225] mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Email
                  </h3>
                  <a href="mailto:info@placelund.se" className="text-[#004225] hover:text-[#42001D] font-semibold">
                    info@placelund.se
                  </a>
                </div>

                {/* Quick Links */}
                <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#42001D]">
                  <h3 className="font-bold text-[#42001D] mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Link href="/hotel" className="block text-gray-700 hover:text-[#004225] transition-colors">
                      → Hotel Rooms
                    </Link>
                    <Link href="/hotel-studio" className="block text-gray-700 hover:text-[#004225] transition-colors">
                      → Hotel Studios
                    </Link>
                    <Link href="/apartments" className="block text-gray-700 hover:text-[#004225] transition-colors">
                      → Apartments
                    </Link>
                    <Link href="/conference" className="block text-gray-700 hover:text-[#004225] transition-colors">
                      → Conference Rooms
                    </Link>
                    <BookingLink className="block text-[#004225] font-semibold hover:text-[#42001D] transition-colors">
                      → Book Now
                    </BookingLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <LocationMap />
    </main>
  )
}
