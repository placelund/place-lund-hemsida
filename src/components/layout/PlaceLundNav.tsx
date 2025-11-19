'use client'

import CardNav, { CardNavItem } from '@/components/CardNav'
import BookingLink from '../BookingLink'

const navItems: CardNavItem[] = [
  {
    label: 'Hotel',
    bgColor: '#004225',
    textColor: '#eae2d6',
    href: '/hotel',
    links: [
      { label: 'Rooms', href: '/hotel#rooms', ariaLabel: 'View hotel rooms' },
      { label: 'Studios', href: '/hotel#studios', ariaLabel: 'View hotel studios' },
      { label: 'Restaurant', href: '/restaurant', ariaLabel: 'Restaurant and bar' },
      { label: 'Gallery', href: '/hotel/gallery', ariaLabel: 'Hotel gallery' },
      { label: 'Book Now', href: 'https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872', ariaLabel: 'Book a hotel room' },
    ],
  },
  {
    label: 'Conference',
    bgColor: '#eae2d6',
    textColor: '#004225',
    href: '/conference',
    links: [
      { label: 'Sofia', href: '/conference/sofia', ariaLabel: 'Sofia conference room' },
      { label: 'Margareta', href: '/conference/margareta', ariaLabel: 'Margareta conference room' },
      { label: 'Sankt Hans', href: '/conference/sankt-hans', ariaLabel: 'Sankt Hans conference room' },
      { label: 'Gallery', href: '/conference/gallery', ariaLabel: 'Conference gallery' },
    ],
  },
  {
    label: 'Apartments',
    bgColor: '#42001D',
    textColor: '#eae2d6',
    href: '/apartments',
    links: [
      { label: 'Overview', href: '/apartments', ariaLabel: 'Apartment overview' },
      { label: 'Studio', href: '/apartments/studio', ariaLabel: 'Studio apartments' },
      { label: 'Gallery', href: '/apartments/gallery', ariaLabel: 'Apartment gallery' },
      { label: 'Contact', href: '/contact', ariaLabel: 'Contact about apartments' },
    ],
  },
  {
    label: 'More',
    bgColor: '#c7b294',
    textColor: '#004225',
    href: '/about',
    links: [
      { label: 'About', href: '/about', ariaLabel: 'About Place Lund' },
      { label: 'Group Stay', href: '/group-stay', ariaLabel: 'Group accommodation options' },
      { label: 'Work With Us', href: '/work-with-us', ariaLabel: 'Career opportunities' },
      { label: 'Gallery', href: '/gallery', ariaLabel: 'Picture gallery' },
      { label: 'FAQ', href: '/faq', ariaLabel: 'Frequently asked questions' },
      { label: 'Contact', href: '/contact', ariaLabel: 'Contact us' },
    ],
  },
]

export default function PlaceLundNav() {
  return (
    <CardNav
      logo="/images/logo.png"
      logoAlt="Place Lund Hotel"
      items={navItems}
      baseColor="#ffffff"
      menuColor="#004225"
      buttonBgColor="#004225"
      buttonTextColor="#eae2d6"
      buttonText="Book Now"
      buttonHref="https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872"
    />
  )
}
