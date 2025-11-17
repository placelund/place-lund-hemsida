'use client'

import BookingButton from '@/components/BookingButton'

export function RoomBookingButton() {
  return (
    <BookingButton className="flex-1 text-center border-2 border-[#004225] text-[#004225] py-2 px-4 rounded-md hover:bg-[#FFFAF2] transition-colors">
      Book Now
    </BookingButton>
  )
}

export function CTABookingButton() {
  return (
    <BookingButton className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors">
      Book Your Room Now
    </BookingButton>
  )
}
