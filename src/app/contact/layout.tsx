import { generateMetadata } from '@/lib/seo/metadata'
import { PAGE_METADATA } from '@/lib/seo/page-metadata'

export const metadata = generateMetadata(PAGE_METADATA.contact)

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
