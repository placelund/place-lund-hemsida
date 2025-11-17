import Link from 'next/link'

interface BookingLinkProps {
  children: React.ReactNode
  className?: string
  href?: string
}

/**
 * BookingLink component that opens the BookVisit booking page.
 *
 * Usage: Replace any Link to BookVisit with this component
 */
export default function BookingLink({
  children,
  className = '',
  href = 'https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872'
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
