'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  const navLinks = [
    { name: 'Hotel', href: '/hotel' },
    { name: 'Studios', href: '/hotel-studio' },
    { name: 'Restaurant', href: '/restaurant' },
    { name: 'Apartments', href: '/apartments' },
    { name: 'Conference', href: '/conference' },
  ]

  const moreLinks = [
    { name: 'About', href: '/about' },
    { name: 'Group Stay', href: '/group-stay' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Menu', href: '/restaurant/menu' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-brand-main">
            Place Lund
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-main hover:text-brand-secondary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                onBlur={() => setTimeout(() => setIsMoreOpen(false), 200)}
                className="text-brand-main hover:text-brand-secondary transition-colors font-medium flex items-center gap-1"
              >
                More
                <svg
                  className={`w-4 h-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMoreOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 border border-brand-secondary/20">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMoreOpen(false)}
                      className="block px-4 py-2 text-brand-main hover:bg-brand-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-brand-main hover:text-brand-secondary"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-brand-secondary/30">
            {/* Main Nav Links in Two Columns */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-brand-main hover:text-brand-secondary transition-colors font-medium px-2 py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* More Links in Two Columns */}
            <div className="border-t border-brand-secondary/30 pt-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide px-2 mb-3">More</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {moreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-brand-main hover:text-brand-secondary transition-colors font-medium px-2 py-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
