import Link from 'next/link'
import BookingLink from '@/components/BookingLink'

interface CTASectionProps {
  title: string
  description: string
  primaryButton?: {
    text: string
    href?: string
    isBookingLink?: boolean
  }
  secondaryButton?: {
    text: string
    href: string
  }
  theme?: 'dark' | 'burgundy' | 'light'
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  theme = 'dark'
}: CTASectionProps) {
  const bgClass =
    theme === 'dark'
      ? 'bg-[#004225]'
      : theme === 'burgundy'
      ? 'bg-[#42001D]'
      : 'bg-[#FFFAF2]'

  const textClass =
    theme === 'light'
      ? 'text-[#004225]'
      : 'text-white'

  const descClass =
    theme === 'light'
      ? 'text-gray-700'
      : 'text-white/90'

  const primaryBtnClass =
    theme === 'light'
      ? 'bg-[#004225] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] transition-colors'
      : 'bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors'

  const secondaryBtnClass =
    theme === 'light'
      ? 'border-2 border-[#004225] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#004225] hover:text-white transition-colors'
      : 'border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-white/10 transition-colors'

  return (
    <section className={`${bgClass} ${textClass} py-16 px-4`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {title}
        </h2>
        <p className={`text-lg mb-8 ${descClass}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryButton && (
            primaryButton.isBookingLink ? (
              <BookingLink className={primaryBtnClass}>
                {primaryButton.text}
              </BookingLink>
            ) : primaryButton.href ? (
              <Link href={primaryButton.href} className={primaryBtnClass}>
                {primaryButton.text}
              </Link>
            ) : null
          )}
          {secondaryButton && (
            <Link href={secondaryButton.href} className={secondaryBtnClass}>
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
