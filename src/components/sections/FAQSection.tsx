'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface FAQ {
  question: string
  answer: string
  order: number
  published: boolean
  clickCount: number
  category: string
}

interface FAQCategories {
  general: FAQ[]
  restaurant: FAQ[]
  conference: FAQ[]
  apartment: FAQ[]
}

interface FAQSectionProps {
  showFAQPageButton?: boolean
  showCategories?: boolean
}

export default function FAQSection({ showFAQPageButton = false, showCategories = false }: FAQSectionProps) {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [categories, setCategories] = useState<FAQCategories>({
    general: [],
    restaurant: [],
    conference: [],
    apartment: [],
  })
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>('general')
  const [formData, setFormData] = useState({ name: '', email: '', question: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

  useEffect(() => {
    async function fetchFAQs() {
      try {
        const response = await fetch('/api/faq')
        const data = await response.json()
        setFaqs(data.faqs || [])
        if (data.categories) {
          setCategories(data.categories)
        }
      } catch (error) {
        console.error('Error fetching FAQs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchFAQs()
  }, [])

  // Load reCAPTCHA v3 script only if not already loaded
  useEffect(() => {
    if (showCategories) {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
      if (!siteKey) return

      // Check if reCAPTCHA script is already loaded
      const existingScript = document.querySelector('script[src*="recaptcha"]')
      if (existingScript) return

      const script = document.createElement('script')
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
      script.async = true
      script.defer = true
      document.body.appendChild(script)

      return () => {
        // Don't remove script as it might be used by other components
      }
    }
  }, [showCategories])


  const trackFAQClick = async (question: string) => {
    try {
      await fetch('/api/faq-analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      })
    } catch (error) {
      console.error('Error tracking FAQ click:', error)
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form first
    if (!formData.name || !formData.email || !formData.question) {
      setFormStatus('error')
      setFormMessage('Please fill in all required fields')
      return
    }

    // Execute reCAPTCHA v3
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    if (!siteKey) {
      setFormStatus('error')
      setFormMessage('reCAPTCHA not configured')
      return
    }

    try {
      setFormStatus('submitting')
      setFormMessage('')

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
        action: 'faq_request'
      })

      setRecaptchaToken(token)
      handleActualSubmit(token)
    } catch (error) {
      setFormStatus('error')
      setFormMessage('reCAPTCHA verification failed. Please try again.')
      console.error('reCAPTCHA error:', error)
    }
  }

  const handleActualSubmit = async (token?: string) => {
    setFormStatus('submitting')
    setFormMessage('')

    const finalToken = token || recaptchaToken

    try {
      const response = await fetch('/api/faq-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: finalToken,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setFormStatus('success')
        setFormMessage(data.message || 'Your question has been submitted successfully!')
        setFormData({ name: '', email: '', question: '' })
        setRecaptchaToken(null)
      } else {
        setFormStatus('error')
        setFormMessage(data.error || 'Failed to submit your question. Please try again.')
        setRecaptchaToken(null)
      }
    } catch (error) {
      setFormStatus('error')
      setFormMessage('An error occurred. Please try again later.')
      console.error('Error submitting FAQ request:', error)
      setRecaptchaToken(null)
    }
  }

  const displayedFAQs = showAll ? faqs : faqs.slice(0, 5)
  const hasMore = faqs.length > 5

  const categoryLabels = {
    general: 'General',
    restaurant: 'Restaurant',
    conference: 'Conference',
    apartment: 'Apartments',
  }

  if (loading) {
    return (
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600">Loading FAQs...</p>
        </div>
      </section>
    )
  }

  // Show categories view (for main FAQ page)
  if (showCategories) {
    return (
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] text-center mb-12">
            Frequently Asked Questions
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 font-semibold rounded-md transition-colors ${
                  activeCategory === key
                    ? 'bg-[#004225] text-white'
                    : 'bg-white text-[#004225] border border-[#004225]/30 hover:bg-[#004225]/10'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Display FAQs for active category */}
          <div className="space-y-4">
            {categories[activeCategory as keyof FAQCategories]?.map((faq, index) => (
              <details
                key={index}
                className="group border border-[#004225]/30 rounded-lg overflow-hidden bg-[#FFFAF2]"
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) {
                    trackFAQClick(faq.question)
                  }
                }}
              >
                <summary className="cursor-pointer p-6 font-semibold text-[#004225] hover:bg-[#FFFAF2] transition-colors list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-[#42001D] transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="p-6 pt-0 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}

            {categories[activeCategory as keyof FAQCategories]?.length === 0 && (
              <p className="text-center text-gray-600 py-8">No FAQs available in this category yet.</p>
            )}
          </div>

          {/* FAQ Request Form */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white border border-[#004225]/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#004225] text-center mb-6">
                Is there a question we haven't answered? Request to put it in here.
              </h3>

              {formStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-md">
                  {formMessage}
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-md">
                  {formMessage}
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#004225] mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-[#004225]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004225] focus:border-transparent"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#004225] mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-[#004225]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004225] focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="question" className="block text-sm font-medium text-[#004225] mb-2">
                    Your Question <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="question"
                    name="question"
                    rows={4}
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    className="w-full px-4 py-2 border border-[#004225]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004225] focus:border-transparent resize-none"
                    placeholder="What would you like to know?"
                    required
                  ></textarea>
                </div>

                {/* reCAPTCHA v3 runs in background - no UI needed */}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-[#004225] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#42001D] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'Submit Question'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Default view (for homepage or other pages - shows top 5)
  return (
    <section className="py-16 px-4 bg-[#FFFAF2]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004225] text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {displayedFAQs.map((faq, index) => (
            <details
              key={index}
              className="group border border-[#004225]/30 rounded-lg overflow-hidden bg-[#FFFAF2]"
              onToggle={(e) => {
                if ((e.target as HTMLDetailsElement).open) {
                  trackFAQClick(faq.question)
                }
              }}
            >
              <summary className="cursor-pointer p-6 font-semibold text-[#004225] hover:bg-[#FFFAF2] transition-colors list-none flex items-center justify-between">
                <span>{faq.question}</span>
                <span className="text-[#42001D] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="p-6 pt-0 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-8 space-y-4">
          {hasMore && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#004225] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors"
            >
              {showAll ? 'Show Less' : `Show ${faqs.length - 5} More FAQs`}
            </button>
          )}

          {showFAQPageButton && (
            <div>
              <Link
                href="/faq"
                className="inline-block bg-[#42001D] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#004225] transition-colors"
              >
                FAQ Page
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
