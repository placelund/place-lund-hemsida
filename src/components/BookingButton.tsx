'use client'

interface BookingButtonProps {
  children: React.ReactNode
  className?: string
  bookVisitUrl?: string
}

export default function BookingButton({
  children,
  className = '',
  bookVisitUrl = 'https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872'
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
