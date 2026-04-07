'use client'

interface BookingButtonProps {
  children: React.ReactNode
  className?: string
  bookVisitUrl?: string
}

export default function BookingButton({
  children,
  className = '',
  bookVisitUrl = 'https://direct-book.com/properties/placelund'
}: BookingButtonProps) {
  const handleClick = () => {
    window.open(bookVisitUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}
