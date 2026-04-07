import Link from 'next/link'

interface BookingLinkProps {
  children: React.ReactNode
  className?: string
  href?: string
}

/**
 * BookingLink component that opens the Direct Book booking page.
 *
 * Usage: Wrap any booking CTA with this component
 */
export default function BookingLink({
  children,
  className = '',
  href = 'https://direct-book.com/properties/placelund'
}: BookingLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </Link>
  )
}
