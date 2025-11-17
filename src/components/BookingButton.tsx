'use client'

import { useEffect, useState } from 'react'

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
  const [hasOpened, setHasOpened] = useState(false)

  const googleFormsUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSda9jYHPBdKTJPLX_N8E6lvbJIAvxEcit8oCY5ZS0niDcpo0g/viewform'

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    // Open Google Form in a new tab if not already opened in this session
    if (!hasOpened) {
      window.open(googleFormsUrl, '_blank', 'noopener,noreferrer')
      setHasOpened(true)

      // Store in sessionStorage to prevent multiple popups in the same session
      sessionStorage.setItem('googleFormOpened', 'true')
    }

    // Open BookVisit in the current tab
    window.open(bookVisitUrl, '_blank', 'noopener,noreferrer')
  }

  // Check if form was already opened in this session
  useEffect(() => {
    const formOpened = sessionStorage.getItem('googleFormOpened')
    if (formOpened === 'true') {
      setHasOpened(true)
    }
  }, [])

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  )
}
