# Image Placeholder Checklist

Place the following images in the `/public/images/` directory:

## Required Images

- [x] `hero-placeholder.png` - Hero section background (1920x1080px)
- [ ] `hotel-placeholder.png` - Traditional hotel rooms (800x600px)
- [ ] `hotel-studio-placeholder.png` - Hotel studio rooms (800x600px)
- [ ] `studio-apartments-placeholder.png` - Studio apartments (800x600px)
- [ ] `conference-placeholder.png` - Conference facilities (800x600px)

## Current Status

**Total Images Needed:** 5
**Images Added:** 1 (hero)
**Status:** FlowingMenu component requires all images

## Where These Images Appear

### Hero Section
- File: `src/components/sections/HeroSection.tsx`
- Image: `hero-placeholder.jpg`
- Location: Full-screen background

### Property Selection Cards
- File: `src/components/sections/PropertySelection.tsx`
- Images:
  - `hotel-placeholder.jpg` (Hotel card)
  - `hotel-studio-placeholder.jpg` (Hotel Studio card)
  - `studio-apartments-placeholder.jpg` (Studio Apartments card)
- Location: "Choose Your Stay" section

## To Activate Images

Once images are added:

1. Uncomment the `<Image>` components in:
   - `src/components/sections/HeroSection.tsx` (lines 11-18)
   - `src/components/sections/PropertySelection.tsx` (lines 43-49)

2. The images will automatically replace the gradient placeholders

---

*Created: 2025-10-26*
