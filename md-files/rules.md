# Place Lund Hotel - Project Rules

## ⚠️ CRITICAL: Read Before Making Any Changes

This file contains project-specific rules and guidelines that **MUST** be read and followed before creating, modifying, or deleting any files or code in this project.

---

## Development Workflow Rules

### 1. **Explicit Permission Required**

**DO NOT create, modify, or delete ANY files unless explicitly requested by the project owner.**

- ✅ Only make changes when the owner says "create...", "add...", "modify...", "update...", etc.
- ❌ Do NOT proactively create files, components, or features
- ❌ Do NOT make "helpful" additions without being asked
- ❌ Do NOT implement suggestions unless explicitly told to do so

### 2. **Clarification Before Action**

If a request is unclear or ambiguous:
- **ALWAYS ask for clarification** before making changes
- Confirm the scope of work
- Verify file locations and naming conventions
- Ensure you understand the exact requirements

### 3. **Read This File First**

Before making any changes to this project:
1. **Read this `rules.md` file completely**
2. Understand the project guidelines
3. Follow the explicit permission rule
4. Proceed only when explicitly instructed

---

## Project Overview

### Hotel Concept
Place Lund operates **two separate buildings**:
1. **Hotel** - Traditional hotel rooms and services
2. **Studios/Apartments** - Self-contained studio apartments

### Website Structure
- Homepage with hero image and two main options (Hotel / Studios)
- Separate pages for Hotel and Studios information
- Google Maps integration for both locations
- Contact information and booking details

---

## Technical Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Package Manager:** npm

---

## Language & Localization

### Default Language: English

**CRITICAL: All content must be written in English by default.**

#### Core Principle
English is the primary development language for all website content. All text, documentation, component labels, and user-facing content must be written in English first.

#### Why English First?
1. **Translation Ready:** Content will be professionally translated to multiple languages after development
2. **International Standards:** English ensures compatibility with global SEO best practices
3. **Developer Clarity:** English makes the codebase accessible to international developers
4. **Quality Control:** Easier to review and maintain a single source language

#### Content Gathering Guidelines

When gathering information from external sources (websites, documents, etc.):
- **Always translate to English** before documenting
- **Preserve original language** in a separate "Original Language" section if needed for reference
- **Note source language** in documentation metadata

**Example:**
```markdown
## Room Description
Our comfortable single rooms feature a 140cm Hilding Anders bed with hypoallergenic pillows and duvets.

### Original Swedish
Våra bekväma enkelrum är utrustade med en Hilding Anders säng som är 140 cm bred...
```

#### Future Translation Plan
Once development is complete, content will be translated to:
- Swedish (Swedish market)
- Danish (Copenhagen/Øresund region)
- German (European business travelers)
- Additional languages as needed

#### Implementation Notes
- All React components should use internationalization (i18n) library
- Text content should be stored in translation files (e.g., `/locales/en.json`, `/locales/sv.json`)
- Never hardcode text directly in components
- Use `next-intl` or similar library for Next.js 16

#### Documentation Language
- **All `.md` documentation files:** Write in English
- **Code comments:** English only
- **Variable names:** English only
- **Git commit messages:** English only

#### Exception: Reference Materials
- Original source URLs may be in other languages
- Original brand names remain unchanged (e.g., "Place Lund Hotel")
- Local place names remain unchanged (e.g., "Lund", "Malmö", "København")

---

## Design System

### Color Palette

The following colors must be used consistently throughout the project:

- **Main Color:** `#004225` (British Racing Green)
  - Use for: Primary branding, main CTAs, navigation elements
  - Tailwind: Can be added as custom color in tailwind.config.ts

- **Secondary Color:** `#42001D` (Deep Burgundy)
  - Use for: Secondary elements, accents, hover states
  - Provides contrast with the main green color

- **Accent Color:** `#eae2d6` (Bone/Beige)
  - Use for: Backgrounds, cards, subtle highlights
  - Provides warmth and elegance

- **Light Color:** `#f5f5f5` (White Smoke)
  - Use for: Breaking up the bone color, card backgrounds
  - Provides clean, fresh contrast

**Implementation:**
```javascript
// tailwind.config.ts - extend theme colors
colors: {
  brand: {
    main: '#004225',
    secondary: '#42001D',
    accent: '#eae2d6',
    light: '#f5f5f5',
  }
}
```

### Design Philosophy

**CRITICAL: Simplicity First - No Emojis**

#### Core Principles:
1. **NEVER USE EMOJIS** - Anywhere in the website, components, or user-facing content
   - ❌ No emojis in headings, body text, buttons, or UI elements
   - ❌ No emojis as icons or decorative elements
   - ❌ No emojis in alt text or meta descriptions
   - ✅ Use proper icons, SVGs, or text instead

2. **Simplicity Over Complexity**
   - Clean, minimal design
   - Clear typography hierarchy
   - Generous whitespace
   - Simple, intuitive navigation
   - No unnecessary decorative elements

3. **Professional and Timeless**
   - Classic hotel aesthetics
   - Professional appearance
   - Avoid trends that date quickly
   - Focus on content clarity

4. **Visual Communication**
   - Use proper icon libraries (e.g., Lucide, Heroicons)
   - SVG icons for clarity and scalability
   - Clear text labels over symbols
   - Professional imagery over decorative graphics

**Why No Emojis:**
- Unprofessional for hotel brand positioning
- Inconsistent rendering across devices/browsers
- Accessibility issues for screen readers
- Not aligned with minimalist, timeless design
- Reduces perceived quality and trust

**Instead Use:**
- Text labels
- SVG icons from professional libraries
- Clear typography
- Quality photography
- Minimalist design elements

---

## SEO Strategy

### Core Principle
**Aggressive SEO marketing with cozy, friendly user experience**

All development must prioritize search engine optimization while maintaining the warm, welcoming feel of the hotel brand.

### Required SEO Elements

#### 1. **Page Metadata (ALWAYS Required)**
Every page must include:
- **Title Tag:** 50-60 characters, keyword-rich, location-specific
  - Example: "Place Lund Hotel - Luxury Accommodation in Lund, Sweden"
- **Meta Description:** 150-160 characters, compelling, includes CTA
  - Example: "Experience comfort at Place Lund Hotel. Modern rooms, apartments & conference facilities in the heart of Lund. Book your stay today!"
- **Open Graph Tags:** For social media sharing
- **Twitter Card Tags:** For Twitter/X sharing
- **Canonical URLs:** To prevent duplicate content

#### 2. **Heading Hierarchy (Strict Structure)**
- **One H1 per page:** Main keyword-focused headline
- **H2-H6 in logical order:** Never skip levels
- **Keywords in headings:** Natural integration, avoid keyword stuffing
- **Descriptive headings:** Clear, benefit-oriented

#### 3. **Image Optimization (Every Image)**

**CRITICAL: Maximum Quality Required**

All images must be displayed at the **highest possible quality** without exception:
- **Next.js quality prop:** ALWAYS set `quality={100}` on ALL Image components
  - Example: `<Image src="..." alt="..." fill quality={100} className="..." />`
  - This applies to: hero images, room photos, gallery images, all visuals
  - Never use default quality (75%) or lower quality settings
- **No overlays or filters:** Remove all semi-transparent overlays (e.g., `bg-[#FFFAF2]/30`)
  - Images must be shown in their pure, unfiltered state
  - No opacity layers, color tints, or visual filters
  - Exception: Intentional hover effects for user interaction

**Image SEO Requirements:**
- **Alt text (mandatory):** Descriptive, includes relevant keywords
  - Example: `alt="Luxury hotel room at Place Lund Hotel with king-size bed"`
- **File names:** Descriptive, hyphenated, lowercase
  - Example: `place-lund-hotel-room-deluxe.jpg`
- **Next.js Image component:** Always use with proper width/height
- **WebP format preferred:** With fallbacks
- **Lazy loading:** Enabled by default (except hero images with `priority` prop)

#### 4. **Link Optimization**
- **Internal links:** Descriptive anchor text (never "click here")
  - ✅ "Explore our luxury hotel rooms in Lund"
  - ❌ "Click here for rooms"
- **External links:**
  - Add `rel="noopener noreferrer"` for security
  - Add `rel="nofollow"` for untrusted/paid links
  - Open in new tab when appropriate (`target="_blank"`)
- **Link structure:** Logical, hierarchical site architecture

#### 5. **URL Structure**
- **Clean URLs:** `/hotel-rooms-lund` not `/rooms?id=123`
- **Keywords in URLs:** Descriptive, hyphenated
- **Consistent structure:** Logical hierarchy
- **Avoid deep nesting:** Maximum 3-4 levels

#### 6. **Content Guidelines**
- **Keyword integration:** Natural, not forced
- **Location mentions:** "Lund", "Lund, Sweden" throughout
- **Unique content:** No duplicate text across pages
- **Word count:** Minimum 300 words per page for SEO value
- **Readability:** Short paragraphs, bullet points, clear language

#### 7. **Technical SEO (Next.js)**
- **Sitemap.xml:** Auto-generated, submitted to search engines
- **Robots.txt:** Properly configured
- **Schema.org markup:** JSON-LD for hotel, local business
  - Hotel schema with ratings, amenities, location
  - LocalBusiness schema with contact info, hours
- **Page speed:** Optimized images, minimal JavaScript
- **Mobile-first:** Fully responsive design
- **Core Web Vitals:** LCP, FID, CLS optimization

#### 8. **Local SEO (Critical for Hotels)**
- **Google Business Profile:** Integrated, consistent NAP
- **NAP Consistency:** Name, Address, Phone identical everywhere
- **Local keywords:** "Hotel in Lund", "Lund accommodation"
- **Location pages:** Separate pages for each property location
- **Google Maps integration:** Embedded maps with schema markup

### Target Keywords

**Primary Keywords:**
- "Place Lund Hotel"
- "Hotel in Lund"
- "Lund accommodation"
- "Hotel Lund Sweden"

**Secondary Keywords:**
- "Luxury hotel Lund"
- "Business hotel Lund"
- "Hotel rooms Lund"
- "Apartments Lund"
- "Conference facilities Lund"
- "Hotel near Lund University"

**Long-tail Keywords:**
- "Best hotel for business travelers in Lund"
- "Family-friendly accommodation Lund Sweden"
- "Where to stay in Lund for conferences"

### Implementation Checklist

Before deploying any page:
- [ ] Title tag optimized
- [ ] Meta description written
- [ ] H1 tag present and keyword-rich
- [ ] All images have descriptive alt text
- [ ] All images have SEO-friendly filenames
- [ ] Internal links use descriptive anchor text
- [ ] Schema.org markup added
- [ ] Mobile responsive verified
- [ ] Page speed tested
- [ ] No duplicate content
- [ ] URL structure clean and logical

### Tone Balance

**SEO Requirements:** Aggressive, keyword-rich, conversion-focused
**User Experience:** Cozy, warm, welcoming, friendly

**How to Balance:**
- Use keywords naturally in friendly, conversational copy
- Headlines can be more direct and keyword-focused
- Body copy should feel warm and personal
- CTAs should be welcoming: "Find Your Room" vs "Book Now"
- Maintain hospitality tone while hitting SEO targets

---

## SEO Documentation Folder

### ⚠️ CRITICAL: Mandatory SEO Review Protocol

**Location:** `/SEO/` folder in project root

**WHEN TO READ:**
Before and after making ANY of the following changes:
1. Creating or modifying page content
2. Writing or updating meta tags, titles, descriptions
3. Adding or changing headings (H1-H6)
4. Creating or editing image alt text
5. Modifying URLs or internal links
6. Adding schema markup
7. Writing any user-facing text
8. Creating new pages or sections

### SEO Folder Contents

The `/SEO/` folder contains specialized SEO guidelines and requirements documents that supplement the general SEO strategy outlined above. These documents provide:
- Detailed keyword research and targeting strategies
- Page-specific SEO requirements
- Competitor analysis insights
- Technical SEO implementation guides
- Content optimization checklists
- Link building strategies
- Local SEO requirements

### Required Reading Protocol

**BEFORE making content/SEO changes:**
1. Read ALL documents in `/SEO/` folder
2. Review relevant page-specific requirements
3. Check keyword targeting guidelines
4. Verify technical SEO requirements

### Compliance Requirement

**All content and SEO-related work MUST comply with:**
- General SEO Strategy (outlined above in this file)
- Specific guidelines in `/SEO/` folder documents
- Page-specific requirements from `/docs/` files

**Non-compliance may result in:**
- Poor search engine rankings
- Lost organic traffic
- Reduced conversion rates
- Need for costly rework

### Integration with Development Workflow

When working on any page or content:
1. Read `/rules.md` (this file) first
2. Read ALL documents in `/SEO/` folder
3. Read relevant page documentation in `/docs/`
4. Make changes following all guidelines

**Note:** Final SEO quality check will be performed after development is complete.

---

## Code Standards

### File Creation
- Only create files when explicitly requested
- Follow Next.js App Router conventions
- Use TypeScript for all components
- Place components in appropriate directories

### Component Structure
- Server Components by default
- Use `'use client'` only when necessary (interactivity, hooks)
- Prefer Static Site Generation (SSG) over Server-Side Rendering (SSR)
- Always use `next/image` for images (never `<img>` tags)

### Naming Conventions
- Components: PascalCase (e.g., `HeroSection.tsx`)
- Files: kebab-case for pages (e.g., `about-us/page.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)

### File Organization
**CRITICAL: This is a one-time project build. Future developers must understand everything immediately.**

#### Core Principle
Every file, folder, and piece of code must be self-explanatory and logically organized. A developer joining this project should be able to:
1. Understand the project structure within 5 minutes
2. Locate any component or feature without asking questions
3. Understand the purpose of every file by its name and location
4. Modify or extend features without breaking the architecture

#### Directory Structure Standards

```
place-lund-hotel/
├── public/
│   ├── images/              # All image assets
│   │   ├── hero/           # Hero section images
│   │   ├── rooms/          # Hotel room images
│   │   │   ├── single-street/
│   │   │   ├── single-garden/
│   │   │   ├── twin-street/
│   │   │   ├── twin-garden/
│   │   │   ├── economy-double/
│   │   │   ├── economy-double-balcony/
│   │   │   └── double-deluxe/
│   │   ├── studios/        # Studio images
│   │   └── conference/     # Conference facility images
│   └── documents/          # PDFs, brochures, etc.
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── page.tsx        # Homepage
│   │   ├── hotel/          # Hotel rooms page
│   │   ├── hotel-studio/   # Hotel studio page
│   │   ├── studio-apartments/ # Apartments page
│   │   └── conference/     # Conference page
│   ├── components/
│   │   ├── layout/         # Layout components (Nav, Footer)
│   │   ├── sections/       # Page sections (Hero, PropertySelection)
│   │   └── ui/             # Reusable UI components
│   ├── lib/                # Utility functions, helpers
│   ├── types/              # TypeScript type definitions
│   └── styles/             # Global styles
├── docs/                   # Documentation files
│   ├── hotel-rooms.md      # Hotel rooms content/specs
│   ├── studio-apartments.md # Studio apartments content/specs
│   └── conference.md       # Conference content/specs
├── SEO/                    # ⚠️ SEO GUIDELINES - READ BEFORE ANY CONTENT WORK
└── rules.md                # This file
```

#### Documentation Requirements

Every major feature or content section MUST have a corresponding `.md` documentation file in `/docs/`:

**Required Documentation:**
- **Purpose:** What this feature/page does
- **Content:** All text, headings, descriptions
- **Images:** List of required images with descriptions
- **SEO:** Target keywords, meta tags, schema markup
- **Design Notes:** Layout, colors, special styling
- **Technical Details:** Any API calls, data sources, integrations

**Documentation Format Example:**
```markdown
# Hotel Rooms

## Purpose
Main page showcasing traditional hotel room offerings at Place Lund Hotel

## Target URL
`/hotel-rooms-lund` or `/hotel`

## SEO
- **Title:** "Hotel Rooms in Lund - Place Lund Hotel | Book Your Stay"
- **Meta Description:** "..."
- **Primary Keywords:** hotel rooms lund, accommodation lund
- **Schema:** Hotel, LodgingBusiness

## Content Structure
### H1: [Main heading]
### H2: [Section headings]
...

## Images Required
- hero-hotel-rooms.jpg: Main room showcase
- room-deluxe.jpg: Deluxe room
...

## Features
- [List of amenities]
- [Room types]
...
```

#### File Naming Standards

**Components:**
- Use descriptive, self-explanatory names
- `HeroSection.tsx` not `Hero.tsx` or `Section1.tsx`
- `PropertySelectionCard.tsx` not `Card.tsx`

**Documentation:**
- Match the feature/page name exactly
- `hotel-rooms.md` for `/hotel` page
- `conference.md` for `/conference` page

**Images:**
- Descriptive, SEO-friendly names
- `place-lund-hotel-deluxe-room.jpg` not `img1.jpg`
- Include location/context in name
- Use hyphens, lowercase only

#### Code Organization

**Component Files:**
```typescript
// 1. Imports (grouped logically)
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// 2. Type definitions
interface HeroProps {
  title: string
  subtitle: string
}

// 3. Main component with clear, descriptive name
export default function HeroSection({ title, subtitle }: HeroProps) {
  // 4. Component logic with comments for complex parts
  return (
    // 5. Clean JSX with semantic HTML
  )
}
```

**Comments Required For:**
- Complex logic or algorithms
- Non-obvious business rules
- SEO-critical elements
- Third-party integrations
- Temporary workarounds (with TODO)

**Comments NOT Required For:**
- Self-explanatory code
- Standard React patterns
- Simple UI components

#### Maintenance Considerations

Since this is a **one-time build**, prioritize:

1. **Clarity over cleverness:** Simple, readable code > complex optimizations
2. **Explicit over implicit:** Clear naming > short naming
3. **Documented over undocumented:** Always err on the side of over-documentation
4. **Organized over convenient:** Proper location > quick placement
5. **Consistent patterns:** Use the same patterns throughout the project

#### Quick Navigation Guide

Any developer should be able to find:
- **All images:** `/public/images/`
- **Page content specs:** `/docs/`
- **SEO guidelines:** `/SEO/` ⚠️ **READ BEFORE ANY CONTENT CHANGES**
- **Layout components:** `/src/components/layout/`
- **Page sections:** `/src/components/sections/`
- **Reusable UI:** `/src/components/ui/`
- **Project rules:** `/rules.md`
- **SEO strategy:** `/rules.md` (SEO Strategy section)

---

## Communication Protocol

### When Making Changes
1. Confirm understanding of the request
2. Ask clarifying questions if needed
3. Make ONLY the requested changes
4. Report what was done after completion

### When Suggesting Ideas
- Present suggestions as options, not actions
- Wait for explicit approval before implementing
- Do not implement suggestions automatically

---

## Summary

**The Golden Rule:**
> Only make changes when explicitly told to do so. When in doubt, ask first.

This ensures the project owner maintains full control over the development process and prevents unwanted modifications or additions.

---

**Last Updated:** 2025-10-26 (Design Philosophy: Simplicity First - No Emojis Added)
