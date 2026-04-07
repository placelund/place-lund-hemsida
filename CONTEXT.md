# Place Lund Hotel — Context (2026-03-08)

## Project
- **Stack:** Next.js 16.1.1, React 19, Tailwind CSS, TypeScript
- **Deploy:** Vercel, repo on GitHub
- **Booking:** BookVisit (`online.bookvisit.com`) — swap in progress

## Key Integrations
- **Maps:** Leaflet + OpenStreetMap (replaced Google Maps due to billing). Component: `src/components/sections/LeafletMap.tsx`, loaded via dynamic import in `LocationMap.tsx`
- **Google Sheets API v4:** JWT service account. Powers FAQs (`/api/faq`), weekly menu (`/api/weekly-menu`), contact form submissions, analytics
- **Resend:** Contact form emails (`/api/contact`)
- **reCAPTCHA v3:** Spam protection on contact form
- **Image manifest:** `scripts/generate-image-manifest.js` → `src/data/image-manifest.json`. Run after adding/removing images.

## Architecture
- Navigation: `src/constants/navigation.ts` (card-based nav) + `src/components/footer.tsx` (separate footer links)
- Hero banners: Standardized across all pages — `bg-black/50` overlay, `pt-20` for navbar clearance, plain `text-white`, no `text-shadow-outline`
- Text-only headers: `pt-32` on cream `bg-[#FFFAF2]` background
- Hero slideshow: `src/components/sections/HeroFade.tsx`, images in `public/images/hero/hero-image-slideshow/`
- Color palette: primary `#004225`, secondary `#42001D`, accent `#eae2d6`, cream `#FFFAF2`

## What Was Done (pre-launch polish, 2 rounds)

### Round 1
- Replaced Google Maps with Leaflet + OSM (5 markers with click-to-Google-Maps redirect)
- Fixed hero slideshow image paths
- Added breathing room to restaurant DailyMenu section
- Fixed `next.config.js` image quality array (added 90)
- Verified all Google Sheets integrations working
- Verified conference flyer downloads working

### Round 2
- Removed "Gallery" from "More" in nav AND footer
- Fixed "Studios" nav link (`/hotel#studios` → `/hotel-studio`)
- Deleted duplicate photos from hotel gallery room folders, regenerated manifest
- Standardized ALL hero banners (20+ pages): overlay, text color, navbar clearance
- Fixed FAQ section background (`bg-gray-100` → `bg-[#FFFAF2]`)
- Verified map marker click → Google Maps works

## Pending / Notes
- `@vis.gl/react-google-maps` package can be uninstalled (no longer used)
- Booking system swap is the next major task
- User manually edited h1 text on `/hotel` ("Hotel Rooms in Lund") and `/conference` ("Conference Rooms in Lund")
- All changes are uncommitted — user has not requested a commit yet
