import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Hotel', href: '/hotel' },
      { name: 'Restaurant', href: '/restaurant' },
      { name: 'Apartments', href: '/apartments' },
      { name: 'Conference', href: '/conference' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' },
    ],
  }

  return (
    <footer className="bg-brand-main text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Place Lund</h3>
            <p className="text-brand-accent mb-4">
              Experience comfort and convenience in Lund. Choose between our hotel rooms or studio apartments.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeGBRI-B_BTjF2_AhjUzOtzeDPkQtDGsLPdlPAK0ABUlUhOgg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-secondary text-white font-semibold py-3 px-6 rounded-md hover:bg-brand-accent hover:text-brand-main transition-colors"
            >
              Survey for After Your Stay
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-brand-accent hover:text-brand-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-brand-accent">
              <p className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Margaretavägen 7<br />222 40 Lund, Sweden</span>
              </p>
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:info@placelund.se" className="hover:text-brand-secondary transition-colors">
                  info@placelund.se
                </a>
              </p>
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+46463336 00" className="hover:text-brand-secondary transition-colors">
                  046 - 33 36 00
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Partners Section */}
        <div className="border-t border-brand-accent/20 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/gdpr" className="text-brand-accent hover:text-brand-secondary transition-colors">
                    Privacy Policy (GDPR)
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Partners</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://visitlund.se/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-accent hover:text-brand-secondary transition-colors inline-flex items-center gap-1"
                  >
                    Visit Lund
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-accent/20 mt-8 pt-6 text-center text-brand-accent/80">
          <p>&copy; {currentYear} Place Lund. All rights reserved. | <Link href="/gdpr" className="hover:text-brand-secondary transition-colors">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  )
}
