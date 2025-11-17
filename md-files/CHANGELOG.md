# Changelog

All notable changes to the Place Lund Hotel website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2025-01-10

### Initial Release

Complete Next.js website for Place Lund Hotel built with TypeScript, Tailwind CSS, and modern web standards.

### Added

#### Core Pages
- **Home page** (`/`) - Hero section, property selection, FAQ preview, location map
- **About page** (`/about`) - Hotel information and story
- **Contact page** (`/contact`) - Contact form with GDPR compliance
- **Gallery page** (`/gallery`) - General hotel photo gallery
- **FAQ page** (`/faq`) - Frequently asked questions
- **GDPR page** (`/gdpr`) - Privacy policy and data protection

#### Hotel Rooms
- Main hotel rooms page (`/hotel`)
- Single room - street view (`/hotel/single-room`)
- Single room - garden view (`/hotel/single-room-garden`)
- Twin room - street view (`/hotel/twin-room`)
- Twin room - garden view (`/hotel/twin-room-garden`)
- Economy double room (`/hotel/economy-double`)
- Economy double room with balcony (`/hotel/economy-double-balcony`)
- Double deluxe (`/hotel/double-deluxe`)
- Hotel rooms gallery (`/hotel/gallery`)
- Hotel FAQ page (`/hotel/faq`)

#### Hotel Studios
- Hotel studio main page (`/hotel-studio`)
- Self-catering accommodation with kitchenette

#### Apartments
- Apartments main page (`/apartments`)
- Studio apartments (`/apartments/studio`)
- One/Two bedroom apartments (`/apartments/one-bedroom`)
- Apartments gallery (`/apartments/gallery`)

#### Conference Rooms
- Conference main page (`/conference`)
- Sofia conference room (`/conference/sofia`)
- Margaretha conference room (`/conference/margareta`)
- Sankt Hans conference room (`/conference/sankt-hans`)
- Conference gallery (`/conference/gallery`)

#### Restaurant & Bar
- Restaurant main page (`/restaurant`)
- Weekly menu page (`/restaurant/menu`)

#### Group Stays
- Group accommodation page (`/group-stay`)

#### API Routes
- Contact form API (`/api/contact`) - Resend email integration
- FAQ API (`/api/faq`) - Google Sheets integration with fallback
- Menu API (`/api/menu`) - Google Sheets integration with fallback
- Weekly menu API (`/api/weekly-menu`) - Google Sheets integration with fallback

### Technical Features

#### Frontend
- **Next.js 16.0.0** with App Router and Turbopack
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive design** for all devices
- **Server-side rendering** for optimal SEO
- **Image optimization** with Next.js Image component

#### Components
- Navigation with mobile menu
- Footer with links and contact info
- Hero section with background image
- Property selection cards
- Location map component (Google Maps ready)
- FAQ section with collapsible items
- Contact form with validation
- Gallery components for all sections

#### Styling
- Custom color scheme:
  - Primary: `#004225` (British Racing Green)
  - Secondary: `#42001D` (Tyrian Purple)
  - Background: `#FFFAF2` (Floral White)
  - Tertiary: `#E3DAC9` (Bone)
- Consistent typography
- Accessible design patterns

#### Integrations (Ready)
- **Resend** for contact form emails (requires API key)
- **Google Sheets** for FAQ and Menu management (requires credentials)
- **Google Maps** for location display (requires API key)

### Documentation

#### Project Documentation
- `/README.md` - Project overview and setup instructions
- `/DEPLOYMENT.md` - Deployment guide for Vercel
- `/CHANGELOG.md` - This file
- `/PRE-LAUNCH-CHECKLIST.md` - Pre-launch verification
- `/MANUAL-TASKS.md` - Tasks requiring manual action

#### Content Documentation (`/docs/`)
- `hotel-rooms.md` - Hotel room specifications
- `restaurant.md` - Restaurant and bar information
- `conference.md` - Conference room details
- `apartments.md` - Apartment offerings (comprehensive)
- `hotel-studio.md` - Hotel studio information
- `group-stay.md` - Group accommodation guide
- `studio-apartments.md` - Studio apartment details
- `GDPR.md` - Privacy policy content

#### Setup Guides
- `/GOOGLE_SHEETS_SETUP.md` - Google Sheets API setup
- `/GOOGLE_SHEETS_MENU_SETUP.md` - Menu-specific setup
- `/public/images/IMAGE-CHECKLIST.md` - Image inventory
- `/IMAGE-VERIFICATION-CHECKLIST.md` - Image verification guide

### Images & Assets

#### Complete Image Collections
- **Hotel Rooms:** 30 images across 7 room types
- **Apartments:** 17 images
- **Hotel Studios:** 8 images
- **Conference Rooms:** 64+ images (general + room-specific)
- **Restaurant:** 4 images
- **General Gallery:** 18 images
- **Hero/Placeholders:** 5 placeholder images + 4 hero slideshow images
- **Flyers:** 3 PDF conference room flyers

### Configuration

#### Build Configuration
- `next.config.ts` - Next.js configuration with Turbopack
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.json` - ESLint rules
- `postcss.config.mjs` - PostCSS configuration

#### Environment Variables
- `.env.example` - Template for required environment variables
- `.env.local` - Local environment variables (gitignored)

### Git & Deployment
- Repository: https://github.com/placelund/place-lund-hemsida
- Initial commit with 242 files
- Ready for Vercel deployment
- Project ID: `prj_uzHWlVje8hcqXYm4ALM2QP5QgjU6`

---

## [Unreleased]

### To Be Added

#### Phase 2 - Hero Slideshow
- [ ] Hero slideshow component
- [ ] Auto-rotating image gallery for hero section
- [ ] Use existing 4 hero slideshow images

#### Phase 3 - Design Enhancements
- [ ] Design consistency audit
- [ ] Typography refinements
- [ ] Color usage optimization
- [ ] Accessibility improvements

#### Phase 6 - API Integration (Last Phase)
- [ ] Connect Resend API for contact form
- [ ] Connect Google Sheets API for FAQ
- [ ] Connect Google Sheets API for Menu
- [ ] Connect Google Maps API

### Known Issues

#### Content Discrepancies
- **One Bedroom Apartment Page:** Currently shows two-bedroom content. Needs verification with hotel owner.
- **Flyers:** Version 3 flyers needed (current version available)

#### Image Optimization
- Some images are large (>3MB) which may cause Vercel function size limits
- Consider image compression or CDN for production

#### Manual Tasks Pending
- Image verification and optimization
- Flyer updates to version 3
- Hero slideshow image selection
- API key configuration for production

---

## Version History

- **1.0.0** (2025-01-10) - Initial complete website
- **0.1.0** (2025-10-26) - Project started, initial structure

---

**Maintained by:** Claude Code
**Project:** Place Lund Hotel Website
**Repository:** https://github.com/placelund/place-lund-hemsida
