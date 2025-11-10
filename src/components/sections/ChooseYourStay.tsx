'use client'

import FlowingMenu from '@/components/FlowingMenu'

const menuItems = [
  {
    link: '/hotel',
    text: 'Hotel',
    image: '/images/hotel-placeholder.png',
  },
  {
    link: '/hotel-studio',
    text: 'Hotel Studio',
    image: '/images/hotel-studio-placeholder.png',
  },
  {
    link: '/studio-apartments',
    text: 'Apartments',
    image: '/images/studio-apartments-placeholder.png',
  },
  {
    link: '/conference',
    text: 'Conference',
    image: '/images/conference-placeholder.png',
  },
]

export default function ChooseYourStay() {
  return (
    <section className="h-[50vh] w-full bg-brand-main">
      <div className="w-full h-full">
        <FlowingMenu items={menuItems} />
      </div>
    </section>
  )
}
