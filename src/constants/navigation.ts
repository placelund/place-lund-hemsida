import { CardNavItem } from '@/components/CardNav'

// Shared logo configuration
export const LOGO_PATH = '/images/Logo.png'
export const LOGO_ALT = 'Place Lund Hotel'

// Main CTA button configuration
export const MAIN_CTA = {
  text: 'Book Now',
  href: 'https://direct-book.com/properties/placelund',
  ariaLabel: 'Book a hotel room'
}

// Common color palette
export const COLORS = {
  base: '#ffffff',
  menu: '#004225',
  primary: '#004225',
  secondary: '#42001D',
  accent: '#eae2d6',
  tertiary: '#c7b294'
} as const

// Standardized navigation structure
export const NAVIGATION_ITEMS: CardNavItem[] = [
  {
    label: 'Hotel',
    bgColor: COLORS.primary,
    textColor: COLORS.accent,
    href: '/hotel',
    links: [
      { label: 'Rooms', href: '/hotel#rooms', ariaLabel: 'View hotel rooms' },
      { label: 'Studios', href: '/hotel-studio', ariaLabel: 'View hotel studios' },
      { label: 'Restaurant', href: '/restaurant', ariaLabel: 'Restaurant and bar' },
      { label: 'Gallery', href: '/hotel/gallery', ariaLabel: 'Hotel gallery' },
      { label: 'Book Now', href: MAIN_CTA.href, ariaLabel: MAIN_CTA.ariaLabel },
    ],
  },
  {
    label: 'Conference',
    bgColor: COLORS.accent,
    textColor: COLORS.primary,
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
    bgColor: COLORS.secondary,
    textColor: COLORS.accent,
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
    bgColor: COLORS.tertiary,
    textColor: COLORS.primary,
    href: '/about',
    links: [
      { label: 'About', href: '/about', ariaLabel: 'About Place Lund' },
      { label: 'Group Stay', href: '/group-stay', ariaLabel: 'Group accommodation options' },
      { label: 'Work With Us', href: '/work-with-us', ariaLabel: 'Career opportunities' },
      { label: 'FAQ', href: '/faq', ariaLabel: 'Frequently asked questions' },
      { label: 'Contact', href: '/contact', ariaLabel: 'Contact us' },
    ],
  },
]