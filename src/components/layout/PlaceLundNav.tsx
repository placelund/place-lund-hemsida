'use client'

import CardNav from '@/components/CardNav'
import { NAVIGATION_ITEMS, LOGO_PATH, LOGO_ALT, MAIN_CTA, COLORS } from '@/constants/navigation'

export default function PlaceLundNav() {
  return (
    <CardNav
      logo={LOGO_PATH}
      logoAlt={LOGO_ALT}
      items={NAVIGATION_ITEMS}
      baseColor={COLORS.base}
      menuColor={COLORS.menu}
      buttonBgColor={COLORS.primary}
      buttonTextColor={COLORS.accent}
      buttonText={MAIN_CTA.text}
      buttonHref={MAIN_CTA.href}
    />
  )
}
