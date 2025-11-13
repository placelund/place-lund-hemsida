'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
    {
        group: 'Hotel',
        items: [
            {
                title: 'Rooms',
                href: '/hotel',
            },
            {
                title: 'Restaurant',
                href: '/restaurant',
            },
            {
                title: 'Gallery',
                href: '/hotel/gallery',
            },
        ],
    },
    {
        group: 'Apartments',
        items: [
            {
                title: 'Overview',
                href: '/apartments',
            },
            {
                title: 'Gallery',
                href: '/apartments/gallery',
            },
        ],
    },
    {
        group: 'Conference',
        items: [
            {
                title: 'Overview',
                href: '/conference',
            },
            {
                title: 'Sofia Room',
                href: '/conference/sofia',
            },
            {
                title: 'Margareta Room',
                href: '/conference/margareta',
            },
            {
                title: 'Sankt Hans Room',
                href: '/conference/sankt-hans',
            },
            {
                title: 'Gallery',
                href: '/conference/gallery',
            },
        ],
    },
    {
        group: 'More',
        items: [
            {
                title: 'About',
                href: '/about',
            },
            {
                title: 'Group Stay',
                href: '/group-stay',
            },
            {
                title: 'Gallery',
                href: '/gallery',
            },
            {
                title: 'FAQ',
                href: '/faq',
            },
            {
                title: 'Contact',
                href: '/contact',
            },
            {
                title: 'GDPR',
                href: '/gdpr',
            },
            {
                title: 'Visit Lund',
                href: 'https://visitlund.se',
            },
        ],
    },
]

export default function FooterSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [statusMessage, setStatusMessage] = useState('')
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

    // Load reCAPTCHA script
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://www.google.com/recaptcha/api.js'
        script.async = true
        script.defer = true
        document.body.appendChild(script)

        // Define callback for reCAPTCHA
        ;(window as any).onRecaptchaSuccessFooter = (token: string) => {
            setRecaptchaToken(token)
        }

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setStatusMessage('')

        if (!recaptchaToken) {
            setStatus('error')
            setStatusMessage('Please complete the reCAPTCHA verification')
            return
        }

        try {
            const response = await fetch('/api/quick-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken,
                }),
            })

            if (!response.ok) {
                const error = await response.json()
                throw new Error(error.error || 'Failed to send message')
            }

            setStatus('success')
            setStatusMessage('Message sent successfully!')
            setFormData({ name: '', email: '', message: '' })
            setRecaptchaToken(null)
            // Reset reCAPTCHA
            if ((window as any).grecaptcha) {
                (window as any).grecaptcha.reset()
            }
        } catch (error) {
            setStatus('error')
            setStatusMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
            // Reset reCAPTCHA on error
            if ((window as any).grecaptcha) {
                (window as any).grecaptcha.reset()
            }
            setRecaptchaToken(null)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <footer className="bg-[#FFFAF2] pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-6">
                {/* Top Section */}
                <div className="mb-8 pb-8 border-b border-[#004225]/20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {/* Branding */}
                        <div>
                            <Link
                                href="/"
                                aria-label="go home"
                                className="block">
                                <h3 className="text-2xl font-bold text-[#004225]">Place Lund Hotel</h3>
                                <p className="text-sm text-gray-600 mt-1">A place to be</p>
                            </Link>
                        </div>

                        {/* Address */}
                        <div className="text-sm text-gray-700">
                            <p className="font-semibold text-[#004225] mb-2">Address</p>
                            <p>Margaretavägen 7</p>
                            <p>222 40 Lund, Sweden</p>
                            <p className="mt-3">
                                <a href="tel:+46463336 00" className="hover:text-[#42001D] transition-colors">
                                    046 - 33 36 00
                                </a>
                            </p>
                            <p>
                                <a href="mailto:info@placelund.se" className="hover:text-[#42001D] transition-colors">
                                    info@placelund.se
                                </a>
                            </p>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <p className="font-semibold text-[#004225] mb-3 text-sm">Quick Contact</p>
                            <form onSubmit={handleSubmit} className="space-y-3">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-3 py-2 text-sm bg-white border border-[#004225]/20 rounded focus:outline-none focus:border-[#004225] transition-colors"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className="w-full px-3 py-2 text-sm bg-white border border-[#004225]/20 rounded focus:outline-none focus:border-[#004225] transition-colors"
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows={3}
                                    required
                                    className="w-full px-3 py-2 text-sm bg-white border border-[#004225]/20 rounded focus:outline-none focus:border-[#004225] transition-colors resize-none"
                                ></textarea>

                                {/* reCAPTCHA */}
                                <div className="flex justify-center">
                                    <div
                                        className="g-recaptcha"
                                        data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                                        data-callback="onRecaptchaSuccessFooter"
                                    ></div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading' || !recaptchaToken}
                                    className="w-full bg-[#004225] text-white text-sm font-semibold py-2 px-4 rounded hover:bg-[#42001D] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>

                                {/* Status Messages */}
                                {status === 'success' && (
                                    <div className="text-green-700 text-xs bg-green-50 border border-green-200 p-2 rounded">
                                        {statusMessage}
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="text-red-700 text-xs bg-red-50 border border-red-200 p-2 rounded">
                                        {statusMessage}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Navigation Links */}
                <div className="flex flex-wrap justify-between gap-y-8 mb-8">
                    {links.map((link, index) => (
                        <div
                            key={index}
                            className="space-y-4 text-sm w-full sm:w-auto">
                            <span className="block font-bold text-[#004225]">{link.group}</span>
                            {link.items.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="text-gray-700 hover:text-[#42001D] block duration-150">
                                    <span>{item.title}</span>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <div className="pt-6 border-t border-[#004225]/20">
                    <small className="text-gray-600 block text-center text-sm">
                        © {new Date().getFullYear()} Place Lund Hotel. All rights reserved.
                    </small>
                </div>
            </div>
        </footer>
    )
}
